import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Directly using your provided Bearer token
  const token = "AAAAAAAAAAAAAAAAAAAAAHBK3gEAAAAANp9Er%2BviA4AO0oL5X50iTsIITZY%3DXLjgkdTQcpFPCYP3Qkxi40blxEXEYOy9Qfv8sATitAb4WFLZAC";

  const url = 'https://api.twitter.com/2/tweets/counts/recent?query=gberry -is:retweet&granularity=day';
  const r = await fetch(url, { headers: { Authorization: `Bearer ${decodeURIComponent(token)}` } });
  const data = await r.json();
  const total = data.data?.reduce((sum: number, d: any) => sum + d.tweet_count, 0) || 0;

  res.status(200).json({ total, source: 'counts' });
}