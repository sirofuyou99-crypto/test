console.log("jquery04 load");

// ======jQuery基本書式（②メソッドについて）======
// jQueryのメソッドは大凡『5つの機能』に分けられる。（何ができるのか？を覚える）

// ３）その３：Event系メソッド
$(".eve").on("click",function(){
    console.log("clicl");
    //その4：Manipulation系メソッドの追加
    $("ul").prepend("<li>先頭に追加した要素</li>");
    $("li:last-child").remove();  //最後に追加したliだけ削除
    $("ul").append("<li>末尾に追加した要素</li>");

    $("ul").after("<h2>追加タイトル</h2>"); //ulの下に<h2>を追加
});