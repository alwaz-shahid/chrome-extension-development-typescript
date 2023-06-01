// This file is injected into the current tab by the background script
// It is used to retrieve local storage and session storage data
// The data is then sent back to the background script using message passing

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "retrieve-data") {
        const localStorage = window.localStorage;
        const sessionStorage = window.sessionStorage;
        sendResponse({ localStorage, sessionStorage });
    }
});
