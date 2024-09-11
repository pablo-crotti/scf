import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
    const period = await prisma.period.findFirst({
        where: {
            isCurrent: true
        }
    });

    if (!period) {
        return NextResponse.json({ error: "There is no current period" }, { status: 400 });
    }

    await prisma.period.update({
        where: {
            id: period.id
        },
        data: {
            isCurrent: false
        }
    });

    return NextResponse.json(period);
}