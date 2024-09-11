import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {

    const body = (request.body !== null) ? await request.json() : null;

    const currentPeriod = await prisma.period.findFirst({
        where: {
            isCurrent: true
        }
    });

    if (currentPeriod) {
        return NextResponse.json({ error: "There is already a current period" }, { status: 400 });
    }

    if (!body) {
        return NextResponse.json({ error: "All the fields are required" }, { status: 400 });
    }

    if (!body.startYear) {
        return NextResponse.json({ error: "Start year is required" }, { status: 400 });
    }

    if (!body.endYear) {
        return NextResponse.json({ error: "End year is required" }, { status: 400 });
    }

    if (!body.balance) {
        return NextResponse.json({ error: "Balance is required" }, { status: 400 });
    }

    const newPeriod = await prisma.period.create({
        data: {
            startYear: body.startYear,
            endYear: body.endYear,
            isCurrent: true,
        },
    });

    const newAccount = await prisma.account.create({
        data: {
            balance: body.balance,
            periodId: newPeriod.id,
        },
    });

    return NextResponse.json({ message: "Account created", accountId: newAccount.id });



}