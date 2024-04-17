// Fetch Stories
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const allStories = await prisma.stories.findMany();
    console.log("Stories fetched: ", allStories);
    return NextResponse.json({ stories: allStories }, { status: 200 });
  } catch (e) {
    console.log("Error fetching stories: ", e);
    return NextResponse.json(
      { error: "Error fetching stories" },
      { status: 500 }
    );
  }
}
