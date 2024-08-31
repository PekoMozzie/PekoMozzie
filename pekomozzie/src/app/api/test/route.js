import { NextResponse } from 'next/server';

export async function GET() {
  console.log('In route')
  try {
    // Example of serializable data
    const data = 'Hello world';

    // Send successful response with JSON data
    return NextResponse.json(data);
  } catch (error) {
    // Log error for debugging
    console.error('Error fetching data:', error);

    // Send error response
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
