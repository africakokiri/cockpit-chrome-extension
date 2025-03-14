chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");

  // 컨텍스트 메뉴 생성
  chrome.contextMenus.create({
    id: "copySelectedText",
    title: "Ask to AI",
    contexts: ["selection"] // 텍스트 선택 시만 표시
  });
});

// 메뉴 클릭 이벤트 처리
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copySelectedText" && info.selectionText) {
    // 선택한 텍스트 복사
    copyToClipboard(info.selectionText);
  }
});

// 선택한 텍스트 복사 함수
function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    console.log(`Copied: ${text}`);
    alert(`복사됨: ${text}`);
  });
}
