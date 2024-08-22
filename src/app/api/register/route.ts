import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
    try {
        const body = (request.body !== null) ? await request.json() : null;

        if (!body || !body.email || !body.password || !body.name) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(body.password, 10);

        const newUser = await prisma.user.create({
            data: {
                email: body.email,
                password: hashedPassword,
                name: body.name,
            },
        });

        return NextResponse.json({ message: "User created", userId: newUser.id });

    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "An error occurred while creating the user" }, { status: 500 });
    }
}
