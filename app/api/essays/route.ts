// ALL ROUTE ESSAY API
import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const allEssays = await prisma.essay.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    });
    return NextResponse.json({ allEssays }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Failed to retrieve Essays" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log(req);
    const data = await req.json();

    const essay = await prisma.essay.create({
      data,
    });

    return NextResponse.json({ essay }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to send to db" },
      { status: 500 }
    );
  }
}
