import OpenAI from "openai";
import { NextResponse } from "next/server";


  export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
  })

  export async function POST(request) {
    const data  = await request.json();
    console.log("responseroute-->",data);
    const threadId = data.ThreadId;

    const messages = await openai.beta.threads.messages.list(
        threadId
      );
    //   console.log(messages.data);

        return NextResponse.json(messages.data);
  }