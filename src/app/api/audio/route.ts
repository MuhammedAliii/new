import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const fileId = "1yCE5eowqopjOzv_7PlBhNhI95NWJ1nRy";
  const range = req.headers.get("range");
  
  try {
    const directUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&authuser=0`;
    const fallbackUrl = `https://docs.google.com/uc?export=download&id=${fileId}`;

    const headers: Record<string, string> = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    };

    if (range) {
      headers["Range"] = range;
    }

    let response = await fetch(directUrl, { headers });

    if (!response.ok || response.headers.get("content-type")?.includes("text/html")) {
      response = await fetch(fallbackUrl, { headers });
    }

    if (!response.ok || !response.body) {
      return new NextResponse("Audio stream not available", { status: 502 });
    }

    const contentType = response.headers.get("content-type") || "audio/wav";
    const contentLength = response.headers.get("content-length");
    const contentRange = response.headers.get("content-range");
    const isPartial = response.status === 206 || !!contentRange;

    const responseHeaders = new Headers();
    responseHeaders.set("Content-Type", contentType);
    responseHeaders.set("Content-Disposition", "inline");
    responseHeaders.set("Accept-Ranges", "bytes");
    responseHeaders.set("Cache-Control", "public, max-age=3600");
    if (contentLength) responseHeaders.set("Content-Length", contentLength);
    if (contentRange) responseHeaders.set("Content-Range", contentRange);

    return new NextResponse(response.body as unknown as ReadableStream, {
      status: isPartial ? 206 : 200,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Audio proxy error:", error);
    return new NextResponse("Error fetching audio", { status: 500 });
  }
}
