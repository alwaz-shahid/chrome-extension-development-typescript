// This file is injected into the current tab by the background script
// It is used to retrieve local storage and session storage data
// The data is then sent back to the background script using message passing

<<<<<<< HEAD
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "retrieve-data") {
        const localStorage = window.localStorage;
        const sessionStorage = window.sessionStorage;
        sendResponse({ localStorage, sessionStorage });
    }
});
=======
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message === "retrieve-data") {
        const [localStorage, sessionStorage] = await Promise.all([
            window.localStorage,
            window.sessionStorage,
        ]);
        sendResponse({ localStorage, sessionStorage });
    }
});
>>>>>>> 6e9b498 (new)
