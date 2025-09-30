console.log("script load");


//ボタン1へのクリックイベント
$("#btn1").on("click",function(){
    console.log("btnクリック");
    
    //マニピュレーションメソッド（要素の追加・削除）
    //追加メソッド（after）:doxBox1のpの後に追加
    $(".divBox1 p").after("<p>Box1の追加要素</p>");
    //追加メソッド（append）:header内に追加
    $("header").append("<p>ヘッダーに追加要素</p>");

    //削除メソッド（empty）: div2内を空にする
    // $(".divBox2").empty()
    //削除メソッド（remove）:.testを削除する
    $(".test").remove();
});




//テストの配列
let mes = new Array();
mes[0] = "氏名を入力"
mes[1] = "シメイを入力"




//btn2クリックイベント
$("#btn2").on("click",function(){
    console.log("btn2クリック");

    //form内のtextボックスのvalue値を取得
    console.log($("form input[name='txt1']").val());

    //eachによる繰り替えし処理  indexは何番目のテキストBOXか　　　each１件ずつ見つけるなければ終わる
    $("form input[type='text']").each(function(index,element){  //form input[type='text']が見つかるごとに実行
        console.log("each実行");
        //indexの内容確認
        console.log(`indexの値${index}`);
        //elementの内容確認
        console.log(`indexの値${element}`);
        //elementのvalue値を取得する
        console.log($(element).val());
        // elementと同様の働きthisを使う
        console.log($(this).val());
        
        //input textに値を格納する
        $(this).val(mes[index]);

    });//each
});
