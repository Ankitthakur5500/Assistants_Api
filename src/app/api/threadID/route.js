import OpenAI from "openai";
import { NextResponse } from "next/server"


export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
})  


export async function GET(){
// const thread = await openai.beta.threads.create();
  return NextResponse.json("thread_UG1s2ZltjsjmU3I4MFywqoaM")

}
