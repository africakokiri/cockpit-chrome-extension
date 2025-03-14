console.log("Content script loaded!");

chrome.runtime.onMessage.addListener(
  (message: { action: string }, sender, sendResponse) => {
    if (message.action === "getTitle") {
      sendResponse({ title: document.title });
    }
  }
);
