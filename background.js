chrome.action.onClicked.addEventListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"],
    });
});