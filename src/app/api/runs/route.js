import OpenAI from "openai";
import { NextResponse } from "next/server";


  export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
  })

export async function POST(request) {
    const data  = await request.json();
    const AssistantId = data.AssistantId;
    const threadId = data.ThreadId;
    // console.log("-->",AssistantId,threadId);

    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: AssistantId,
        instructions: "Please address the user as Jane Doe. The user has a premium account.",    
    });
        return NextResponse.json(run);
  }