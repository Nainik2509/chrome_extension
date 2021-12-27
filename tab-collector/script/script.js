chrome.runtime.onMessage.addListener(function (request) {
  if (request.addUrl) {
    // Store New URLS
  }
  if (request.title) {
    chrome.windows.getCurrent({ populate: true }, (window) => {
      const urls = window.tabs.filter((t) => t.url.indexOf("chrome://") != 0);

      chrome.storage.sync.get(["urlLists"], (obj) => {
        const currentLists = obj.urlLists ? obj.urlLists : [];
        const mergedLists = [
          ...currentLists,
          ...[{ title: request.title, urls: urls }],
        ];

        console.log(mergedLists);
        chrome.storage.sync.set({ urlLists: mergedLists });
      });
    });
  }
});
