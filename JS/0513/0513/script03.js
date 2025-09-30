console.log("script03.js load");
 
// 基本事項の復習（Dom操作）
// div testの背景色を変更する。
document.getElementById("test").style.backgroundColor = "orange";
 
// ====日付に関わるオブジェクトを操作する====
// 日付・時間を扱う（Dateオブジェクト）
// 日付・時間を専門に扱うオブジェクトの作成と専用メソッドの活用
 
// １。まずは使ってみる（日付・時間情報）
//newdateを使わないと扱えない
// //変数に格納された時点でdateオブジェクトになる
let testDate = new Date();
console.log(testDate);//変数を使って確認する
 
// 日付情報の加工
let testyear = testDate.getFullYear();
//月だけ１を足しておく
// (英語圏、日本語圏みたいにそれぞれ違う値で帰ってくる時は０から始まる)
let testMonth = testDate.getMonth()+1;
let testDat = testDate.getDate();
let testDay = testDate.getDay();//曜日は数字で返ってくる、日曜日は０で返ってくる
// 曜日情報は数値で返ってくるくるため配列を使う
// 配列内は[0]番目から順に入れていく
const dayArray = new Array("日曜","月曜","火曜","水曜","木曜","金曜","土曜");
console.log(dayArray[testDay]);
// 演習：「今日は、2025年5月20日火曜です」
// 連結はバッククオートで
// 「ショートカット」shift+@
console.log(`今日は、${testyear}年${testMonth}月${testDat}日${testDay}曜日`);
console.log("今日は"+testyear+"年"+testMonth+"月"+testDat+"日"+testDay+"曜日です");
 
// 時間情報の加工
 
let testHour = testDate.getHours();
let testMinute = testDate.getMinutes();
let testSecond = testDate.getSeconds();
console.log(testSecond);
 
// 演習「今は00:00:00です」
console.log();
console.log(`今は${testHour}時${testMinute}分${testSecond}秒です`);
 
 
 
 
 
// ====formへのアプローチ====
 
// １。まずはformにアプローチしてみる
//方法その1:elementu (要素)で取得
// document.forms[0].elements[0].style.backgroundColor ="pink"

//方法その2:name属性を用いて取得 　
// document.form1.text1.style.backgroundColor="pink"

//方法その3:Dom操作（これまでのパターン） これが普通
const from1ID = document.getElementById("form1Id")
from1ID.text1.style.backgroundColor = "pink"
// ２。テキストボックスに値（文字列）を格納（代入）valueは文字の格納　//styleはこの属性が使える用になる
from1ID.text1.value = "テスト"
 
// ３。クリックで値（文字列）を格納（代入）

let btn01 =document.getElementById("btn01");
btn01.addEventListener("click" , function(){
    console.log("click");
    from1ID.text2.value =`今日は、${testyear}年${testMonth}月${testDat}日${testDay}曜日です`;
});
 
 //===入力ダイアログ===
 //関数:prompt(表示内容、初期値) 入力ボックス出てきてそこに入力したらログに入力内容出てくる
let userName = window.prompt("表示内容", "初期値");
console.log(userName);

//===一定時間ごとに処理を実行===
//関数:setInterval(実行したい処理,時間) 1000で1秒ごと　　１秒＝1000ミリ秒
setInterval("watch()",1000);

//関数作成
/*関数の書式======
function watch(){
    実行したい処理；
}
================*/

function watch(){
    console.log("実行");
    
}
watch();