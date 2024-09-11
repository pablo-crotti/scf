import prisma from "@/lib/prisma";

export async function GET() {
    const lastAccount = await prisma.account.findFirst({
        orderBy: {
            createdAt: "desc"
        }
    });


    return new Response(JSON.stringify(lastAccount), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}