import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const periods = await prisma.period.findMany({
        orderBy: {
            startYear: "desc",
        },
    });

    return NextResponse.json(periods);
}