chrome.action.onClicked.addListener((tab) => {
    const url = new URL(tab.url);
    if (url.host === "hackerdaily.io" && url.pathname.includes("/comments")) {
        const threadId = url.pathname.split("/")[1];
        const newUrl = `https://news.ycombinator.com/item?id=${threadId}`;
        chrome.tabs.update(tab.id, { url: newUrl });
    }
});
