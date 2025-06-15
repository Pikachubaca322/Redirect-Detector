chrome.webNavigation.onCommitted.addListener((details) => {
    console.log("Navigation committed", details.transitionType, details.url);
    
    if (
        details.transitionType === "server_redirect" ||
        details.transitionType === "client_redirect"
    ) {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/wmf-logo-2x.png",
            title: "Redirect Detected",
            message: `You've been redirected to: ${details.url}`
        });
    }
});
