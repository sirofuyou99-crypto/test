//日付時間情報の取得-------------------------------------------------------
let testDate = new Date(); /*16 59 00*/
let testyear = testDate.getFullYear();
let testMonth = testDate.getMonth()+1;
let testDat = testDate.getDate();
let testDay = testDate.getDay();
const dayArray = new Array("日曜","月曜","火曜","水曜","木曜","金曜","土曜");
//------------------------------------------------------------------------

//時間の取得---------------------------------------------------------------
let testHour = testDate.getHours();
let testMinute = testDate.getMinutes();
let testSecond = testDate.getSeconds();
//------------------------------------------------------------------------

//text1,2,3を変数に代入----------------------------------------------------
let text1 = document.getElementsByTagName("input").item(0);
let text2 = document.getElementsByTagName("input").item(1);
let text3 = document.getElementsByTagName("input").item(2);
//------------------------------------------------------------------------

//text3に現在時刻の表示----------------------------------------------------
setInterval("watch()",1000);
function watch(){
   let testDate = new Date();  //繰り返さないとダメ
   console.log(testDate);
   let testHour = testDate.getHours();
   let testMinute = testDate.getMinutes();
   let testSecond = testDate.getSeconds();
   
   text3.value = (`現在時刻は${testHour}:${testMinute}:${testSecond}:です`);
};
watch();
//------------------------------------------------------------------------

  

//クリックされた時の処理---------------------------------------------------------------------
let btn = document.getElementById("btn");
btn.addEventListener("click" , function(){
    console.log("click");
    document.getElementById("wrapper").style.backgroundColor = "orange";
    document.getElementById("header").style.backgroundColor = "pink";
    document.getElementsByTagName("h1").item(0).style.color="red";
    document.getElementsByTagName("input").item(0).style.backgroundColor ="red";
    document.getElementsByTagName("input").item(1).style.backgroundColor ="blue";
    let userName = window.prompt("名前入力", "名前を入力してください"); //いきなり出てくるやつ
    text1.value = `こんにちは${userName}さん`;
    text2.value = `今日は、${testyear}年${testMonth}月${testDat}日${dayArray[testDay]}日です`;
 
});
//--------------------------------------------------------------------------------------------

