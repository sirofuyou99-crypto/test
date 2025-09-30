console.log("script04.js load");

// ======今回のテーマ（簡易入力チェック）=======
// point1：課題No01のformコントロール
// point2：繰り返し処理（for文）
// point3：新規メソッド。createElement()、appendChild()
// point4：新規プロパティ ※innerText（要素内の「表示テキスト」を取得・設定する）




// ======前回までの復習など======
// １）ボタン、form要素を取得しオブジェクト化
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const form1 = document.getElementById("form1")

// ２）btn1にクリックイベント（logで"btn1 click"を表示）
btn1.addEventListener("click" , function(){
    console.log("click");

    // ３）form内のテキストボックスに対する処理
    // 1つ目のテキストBOXに「テキスト」を格納、背景色をpinkに
    // form1.elements[0].value="テキスト";
    // form1.elements[0].style.backgroundColor = "pink";
    
    //複数のテキストBOXの制御（for処理）
    //forの書式：for（初期値；繰り返す回数；ｎ++）（実行処理）
    for(let i=0;i<form1.elements.length;i++){  //lengthは要素数　inputがelementsのこと　i++は定型文
        console.log(`処理${i}回目`);
        //テキストBOXの制御
        if(form1.elements[i].type==="text"){   //if文でtextBOXだけを指定　　textの時だけこの処理する
            form1.elements[i].value="テキスト";
            form1.elements[i].style.backgroundColor = "pink";

        }
    }

});







// =======エラー表示：テキストBOX下部とform上部=======
//[手順]
//・btn2にクリックイベントを実行（log btn2クリック)
//[処理のバージョンアップ（エラー配列）]
let errorMes = new Array();
errorMes[0]="氏名を入力していません";
errorMes[1]="フリガナが入力されていません";
btn2.addEventListener("click" , function(){
        console.log("log btn2クリック");

        //ul内の要素を「空」にする 
        document.getElementById("alertTxtAll").innerHTML = null;
    

        //forの処理
        for(let i=0;i<2;i++){
            console.log(`処理${i}`);
            //・条件の作成（formのテキストBOXになにも入力されない）
            if(form1.elements[i].value==""){ //valueで参照　　何も入力されていない時
                console.log("入力されてません");
                //・テキストBOXの下部のDivに「エラー文字列」を代入
                let errorCont =document.createElement("li"); //liを作成
                errorCont.innerText=errorMes[0]; //liに文字を格納
                document.getElementById("alertTxtAll").appendChild(errorCont); //どこにliを作るか　今回はうulの中
                document.getElementById("alertTxtAll").style.color="red"

                document.getElementById("alertTxt0").innerText="氏名を入力してください";
                document.getElementById("alertTxt0").style.color="red"
                form1.elements[0].style.backgroundColor="pink"
                //・画面上部のul構造にliを作成し追加

            }
            

        };

        


});


