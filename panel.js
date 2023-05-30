document.getElementById("copy-button").addEventListener("click", function() {
    chrome.devtools.inspectedWindow.eval("document.documentElement.outerHTML", function(result, isException) {
        if (!isException) {
            chrome.runtime.sendMessage({ method: "copyElements", html: result });
        }
    });
});