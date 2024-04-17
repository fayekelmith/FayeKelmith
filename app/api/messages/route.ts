//send messages and get messages from the database

import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const message = await prisma.message.create({
      data,
    });
    return NextResponse.json({ message }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to send to db" },
      { status: 500 }
    );
  }
}

// to be used in admin panel
export async function GET() {
  try {
    const allMessages = await prisma.message.findMany();
    return NextResponse.json({ allMessages }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to get messages" },
      { status: 500 }
    );
  }
}
