import OpenAI from "openai";
import { NextResponse } from "next/server"


  export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
  })


export async function GET(){
  return NextResponse.json("asst_GP7slDKYTdvca9e3ShCO5BWG")
}
