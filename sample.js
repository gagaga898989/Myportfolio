// スムーズスクロールの実装
document.addEventListener("DOMContentLoaded", () => {
  // 全てのリンクを取得
  const scrollLinks = document.querySelectorAll(".scroll-link");

  // 各リンクにクリックイベントを追加
  scrollLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // デフォルトの挙動を無効化
      const targetId = link.getAttribute("href").substring(1); // 対象IDを取得
      const targetElement = document.getElementById(targetId);

      // スクロールのアニメーション
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // スムーズスクロール
          block: "start" // セクションの上部を表示
        });
      }
    });
  });
});
