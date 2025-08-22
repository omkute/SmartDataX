import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    console.log("📩 Contact Form Submission:", { name, email, message });

    return NextResponse.json({ success: true, message: "Message received successfully!" });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ error: "Something went wrong", }, { status: 500 });
  }
}
