$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

// ボタン要素を作成
let btn = document.createElement("button");

// ボタンのテキストを設定
btn.innerHTML = "Click Me";

// ボタンを追加する場所を選択
let target = document.getElementById("target");

// ボタンを追加
target.appendChild(btn);
