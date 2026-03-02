import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();

    return new Response(
      `AI가 받은 질문:\n\n"${message}"\n\n(지금은 더미 응답입니다 🚀)`,
      {
        headers: { "content-type": "text/plain; charset=utf-8" },
      }
    );
  } catch (err) {
    return new Response("에러 발생", { status: 500 });
  }
};
