const btn1 = document.getElementById("btn1")
const input = document.getElementsByTagName("input")
const alertAll =document.getElementsByTagName("alertAll")


//エラーメッセージ配列に格納-------------------------------------------
let errorMes = new Array();
errorMes[0]="お名前が入力されていません。";
errorMes[1]="フリガナが入力されていません。";
errorMes[2]="メールアドレスが入力されていません。";
errorMes[3]="電話番号が入力されていません。";
errorMes[4]="携帯電話番号が入力されていません。";
//--------------------------------------------------------------------
//テキストBOXの下に表示するエラーメッセージ配列に格納---------------------
let errorMes2 = new Array();
errorMes2[0]="お名前を入力してください。";
errorMes2[1]="フリガナを入力してください。";
errorMes2[2]="メールアドレスを入力してくだいさい。";
errorMes2[3]="電話番号を入力してくだいさい。";
errorMes2[4]="携帯電話番号を入力してくだいさい。";
//---------------------------------------------------------------------


//送信ボタンを押されたときの処理--------------------------------------------------------------------------
btn1.addEventListener("click", function(){
    console.log("送信");
    document.getElementById("alertAll").innerHTML=null;

    for(let i=0;i<5;i++){
        //テキストBOXの色を白に初期化
        input[i].style.backgroundColor="white";
        //テキストBOXがに何も入力されいないとき
        if(input[i].value==""){
            let errorCont = document.createElement("li"); ////navの下にliを作成
            errorCont.innerText = errorMes[i];//liにエラーメッセージを格納
            document.getElementById("alertAll").appendChild(errorCont); //どこにliを作るか　今回はulの中
            document.getElementById(`alert${i}`).innerText=errorMes2[i]; //エラーメッセージをテキストBOXの下のIDに入れる
            input[i].style.backgroundColor="pink"; //テキストBOXの背景色をピンクに変更
        }
        //テキストＢＯＸに文字が入力されているとき
        else{
            document.getElementById(`alert${i}`).innerText="" //エラーメッセージをなくす
            input[i].style.backgroundColor="white" //テキストBOXの背景色を白に変更
        }
    }
})
//------------------------------------------------------------------------------------------------------
