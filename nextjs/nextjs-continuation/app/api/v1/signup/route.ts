import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const username = data.username;
  const password = data.password;

  await prisma.user.create({
    data: {
        username: username,
        password: password
    }
  })

  return NextResponse.json({
    message: "You have been signed up",
  });
}
