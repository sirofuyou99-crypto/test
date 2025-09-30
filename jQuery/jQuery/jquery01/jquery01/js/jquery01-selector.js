console.log("jquery01 load");

// jsの確認：h1の文字色を赤にする
// document.getElementsByTagName("h1").item[0].style.color = "red";


// jQuery（jsライブラリ）で記載する
// $(function(){
//     $("h1").css("color","red");
// });


// jQuery基本書式① セレクタ構文
//書式：$("セレクタ")※セレクタ＝cssの知識と同様。

// 
$("h1").css("color" , "red");

// ２）idセレクタ
$("#header").css("color", "pink");

// ３）選択式セレクタ
$("li:nth-of-type(even)").css("color" , "blue"); //even＝偶数番目

// ４）子孫セレクタ（親子関係）
$(".warning2 p").css("color" , "green");
