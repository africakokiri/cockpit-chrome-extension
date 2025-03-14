chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    func: () => alert("Hello from the extension!")
  });
});
