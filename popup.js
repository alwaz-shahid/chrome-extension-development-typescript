<<<<<<< HEAD
const handleButtonClick = async () => {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        const [localStorage, sessionStorage, cookies] = await Promise.all([
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => window.localStorage,
            }),
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => window.sessionStorage,
            }),
            chrome.cookies.getAll({ url: tab.url, domain: 'example.com' }), // change the domain accordingly
        ]);

        console.log("Local Storage:", localStorage[0]?.result);
        console.log("Session Storage:", sessionStorage[0]?.result);
        console.log("Cookies:", cookies.map(c => ({ name: c.name, value: c.value })));
    } catch (error) {
        console.error(error);
    }
};

document.getElementById("retrieve-data").addEventListener("click", handleButtonClick);
=======
async function retrieveData() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const [localStorage, sessionStorage, cookies] = await Promise.all([
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => window.localStorage,
        }),
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => window.sessionStorage,
        }),
        chrome.cookies.getAll({ url: tab.url }),
    ]);
    console.log("Local Storage:", localStorage[0].result);
    console.log("Session Storage:", sessionStorage[0].result);
    console.log("Cookies:", cookies);
}
document.getElementById("retrieve-data").addEventListener("click", retrieveData);

>>>>>>> 6e9b498 (new)
