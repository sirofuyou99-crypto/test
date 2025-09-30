console.log("script02.js");

// =====Dom操作の復習=====

// ①h1の背景色を変更する
document.getElementsByTagName("h1").item(0).style.color="red";

// ②h2の文字色を変更する
document.getElementsByTagName("h2").item(0).style.color="red";


// ③divの一つ目。（「背景色」と「文字色」を変更）
// document.getElementsByTagName("div").item(0).style.backgroundColor="skyblue";
// document.getElementsByTagName("div").item(0).style.color="blue";


//上記の指示をオブジェクト化
let divElem = document.getElementsByTagName("div").item(0);
divElem.style.backgroundColor="orange";
divElem.style.color="green";


// ④id要素で制御する
document.getElementById("sample").style.color="red";


// 演習：画像を切り替える（1.jpg→2.jpgに変更）
document.getElementById("sam").src="img/2.jpg";




// =====イベントの復習=====

// イベントの利用（クリックで○○する）
//step1:イベントの対象となる要素を変数に格納
let sampleBtn = document.getElementsByTagName("input").item(0);
// console.log(sampleBtn)
//step2:sampleBtnにイベントを設定する（click）
sampleBtn.addEventListener("click",function(){
    console.log("click");
    //samに1.jpgを表示
    document.getElementById("sam").src="img/1.jpg";
   
}); //クリックされたら,どうなるかを波()の中に書く

// イベント演習 liをクリックで１）画像変更、２）h3文字列変更
let sampleLi1 =document.getElementsByTagName("li").item(0) //liの1番目（前）変数に代入
console.log("sampleLi1");//確認
sampleLi1.addEventListener("click",function(){
    console.log("前li");//確認 クリックされたらlogに出てくる
    document.getElementById("sam").src="img/22.jpg";
})
// 例）1つ目のli　1.jpg、h3文字列は「1.jpgの画像です」

