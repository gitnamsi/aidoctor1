export async function onRequestPost(context) {
  try {
    const { message } = await context.request.json();

    return new Response(
      `AI가 받은 질문:\n\n"${message}"\n\n(지금은 더미 응답입니다 🚀)`,
      {
        headers: { "content-type": "text/plain" },
      }
    );
  } catch (err) {
    return new Response("에러 발생", { status: 500 });
  }
}
