console.log("jquery02 load");

// ======jQuery基本書式（②メソッドについて）======
// jQueryのメソッドは大凡『5つの機能』に分けられる。（何ができるのか？を覚える）

// １）その１：css、Attribute（属性）系メソッド
$("#header")
    .css({
        "color":"white",
        "background-color":"olive"})
    .width("500px")
    //属性の追加
    .attr("class" ,"test");
console.log($("#header").attr("id"));

 



