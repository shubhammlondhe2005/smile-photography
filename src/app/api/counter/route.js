import { NextResponse } from 'next/server'

let visitorCount = 1260

export async function GET() {
  return NextResponse.json({ count: visitorCount })
}

export async function POST() {
  visitorCount++
  return NextResponse.json({ count: visitorCount })
}