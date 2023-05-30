chrome.action.onClicked.addListener(async (tab) => {
    const [tabId] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['contentScript.js']
    });

    const result = tabId[0].result;
    if (result && result.length > 0) {
        chrome.storage.local.set({ data: result[0] });
    }
});
;

