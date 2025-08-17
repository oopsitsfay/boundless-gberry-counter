export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword") || "gberry";

  const res = await fetch(
    `https://api.x.com/2/tweets/counts/recent?query=${keyword}`,
    {
      headers: {
        Authorization: "Bearer AAAAAAAAAAAAAHBK3gEAAAAANp9Er%2BviA4AO0oL5X50iTsIITZY%3DXLjgkdTQcpFPCYP3Qkxi40blxEXEYOy9Qfv8sATitAb4WFLZAC",
      },
    }
  );
  const data = await res.json();

  return Response.json({
    total: data.meta ? data.meta.total_tweet_count : 0,
  });
}
