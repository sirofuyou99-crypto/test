console.log("jquery05 load");

// ======jQuery基本書式（②メソッドについて）======
// jQueryのメソッドは大凡『5つの機能』に分けられる。（何ができるのか？を覚える）

// ５）その４：Traversing系メソッド
// Traversing：要素の選択や検索など。

// 定義リストをアコーディオン化
$("dd").hide(); //<dd>を隠す

$("dt").on("click" , function(){
    console.log("click");
    // $("dd").slideToggle(); //<dd>の表示・非表示を制御  sulideつけることでエフェクトがつく　Tは大文字にする
    $(this).next().slideToggle(); //これ使える　　thisはdtのこと　クリックしたdtのddを出す。
});



// 演習：QandAをアコーディオン化
$("#QandA div").hide(); //idの子要素のdivを消す。
$("#QandA h2").on("click" , function(){
    $(this).next().slideToggle(); //nextはh2の次のタグの指定
})



// イベント：１）mouseover（カーソルon）／２）mouseleave（カーソルoff）
$("#sideAll")
    .on("mouseover" , function(){ //マウスカーソルが上に乗ったら
    console.log("mouseover");
    $("#sideA").stop().animate({"margin-top":"-300px"});
    })
    .on("mouseleave", function(){
        $("#sideA").animate({"margin-top":"0px"});
    });
