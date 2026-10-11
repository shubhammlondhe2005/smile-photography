import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const COUNTER_FILE = path.join(process.cwd(), 'data', 'visitor-count.json')

function getCount() {
  try {
    const data = fs.readFileSync(COUNTER_FILE, 'utf8')
    return JSON.parse(data).count
  } catch {
    return 0
  }
}

function setCount(count) {
  const dir = path.dirname(COUNTER_FILE)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count }))
}

export async function GET() {
  return NextResponse.json({ count: getCount() })
}

export async function POST() {
  const count = getCount() + 1
  setCount(count)
  return NextResponse.json({ count })
}