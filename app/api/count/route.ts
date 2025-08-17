import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      "https://api.twitter.com/1.1/search/tweets.json?q=gberry&count=100&result_type=recent",
      {
        headers: {
          Authorization: "Bearer AAAAAAAAAAAAAHBK3gEAAAAANp9Er%2BviA4AO0oL5X50iTsIITZY%3DXLjgkdTQcpFPCYP3Qkxi40blxEXEYOy9Qfv8sATitAb4WFLZAC",
        },
      }
    );

    const data = await response.json();
    const total = data.statuses ? data.statuses.length : 0;

    return NextResponse.json({ total });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ total: 0, error: "Failed to fetch data" });
  }
}
