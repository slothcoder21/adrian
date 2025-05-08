import { NextResponse } from 'next/server';

// Flag to disable OpenAI API calls (shared with chat API)
const DISABLE_CHAT_API = process.env.DISABLE_CHAT_API === 'true';

export async function GET() {
    return NextResponse.json({ 
        disabled: DISABLE_CHAT_API 
    });
} 