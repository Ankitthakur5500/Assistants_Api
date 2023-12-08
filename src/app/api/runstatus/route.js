import OpenAI from "openai";
import { NextResponse } from "next/server";


  export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
  })

  export async function POST(request) {
    const data  = await request.json();
    const runID = data.runId;
    const threadId = data.ThreadId;

    const run = await openai.beta.threads.runs.retrieve(
        threadId,
        runID
      );

        return NextResponse.json(run);
  }

