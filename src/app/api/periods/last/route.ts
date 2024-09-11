import prisma from "@/lib/prisma";

export async function GET() {
    const lastPeriod = await prisma.period.findFirst({
        orderBy: {
            createdAt: "desc"
        }
    });

    return new Response(JSON.stringify(lastPeriod), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}