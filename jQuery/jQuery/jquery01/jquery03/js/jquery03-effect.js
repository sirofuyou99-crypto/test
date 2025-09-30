console.log("jquery03 load");

// ======jQuery基本書式（②メソッドについて）======
// jQueryのメソッドは大凡『5つの機能』に分けられる。（何ができるのか？を覚える）

// ２）その２：Effects系メソッド

// #headerの１）背景色変更、２）class名test
$("#header")
.css({"background-color":"pink"})
.attr("class" , "test");

// effectメソッド アニメーションの設定
$(".test")
    .hide()
    .fadeIn(3000) //ゆっくり出てくる背景色
    //animateメソッド
    //animate(①動作内容,②実行時間,③イージング,④コールバック)
    //④コールバック：animate処理が終了したら呼び出される関数
    .animate({"height":"300px" , "margin-left":"50px"},2000,"easeOutExpo",callback); //背景色が下にびゅうーんて伸びる  2000は秒
    //==animateのコールバック関数＝＝
    function callback(){
        $(".pElem")
            .css({"background-color":"red"})
            .animate({"width":"500px"},1000);
    }

//callbackを使うことで順番に処理が実行され、処理が終わってから次の処理実行される

