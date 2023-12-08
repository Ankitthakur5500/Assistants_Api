import OpenAI from "openai";
import { NextResponse } from "next/server"


export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
})

export async function POST(request) {
    const data  = await request.json();
    const threadId = data.threadId;
    const message = data.message;
    // console.log("-->",threadId,message);
    const threadMessages = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: message,
    })
    // console.log("-->",threadMessages);

    return NextResponse.json(threadMessages);
  }