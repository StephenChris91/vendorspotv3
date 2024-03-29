import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // const productsCount = await prisma.product.count();
        // const skip = Math.floor(Math.random() * productsCount);
        const products = await prisma.product.findMany({
            take: 10
        });
        // await prisma.$disconnect();
        console.log(products)
        return NextResponse.json(products);
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 500 });
    }
}