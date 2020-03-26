var tabId = '';

chrome.tabs.onCreated.addListener(function (tab) {

    if (tab.pendingUrl.indexOf('spotify.com') > -1) {
        tabId = tab.id;

        chrome.tabs.update(tab.id, {
            url: "spotify://" + tab.pendingUrl
        }, closeTheTab);
    }
});

closeTheTab = function () {
    setInterval(function () {
        chrome.tabs.remove(tabId);
    }, 3000);
}