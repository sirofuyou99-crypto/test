$("dd").hide();

$("#navi dt").on("click" , function(){
    console.log("click");
    $(this).next().slideToggle();
});



// $("#mainContents div")
//     .on("mouseover" , function(){
//         console.log("mouseover");
//         $(this).find("p").stop().animate({"margin-bottom":"-222px"});
//         $(`.mainVisual_{elemName}`).stop().animate({"margin-bottom":"-280px"});
        
//     })
//     .on("mouseleave" , function(){
//         $(".con_mg").animate({"margin-bottom":"0px"});
//         $(`.mainVisual_{elemName}`).stop().animate({"margin-top":"0px"});
//     });




$("#mainContents > div")
  .on("mouseover", function () {
    // 通常画像をアニメーションして非表示に
    $(this).find(".con_mg").stop().animate({ "margin-bottom": "-222px" });

    // mainVisual内のすべての画像を非表示
    $("#mainVisual > p").hide();

    // ID名から"con_"を取り除いて、対応するmainVisualのクラス名に変換
    let elemName = this.id.replace("con_", ""); // 例: "con_concept" → "concept"

    // テンプレートリテラルでクラス名を組み立てて該当画像を表示
    $(`.mainVisual_${elemName}`).stop().show();
  })
  .on("mouseleave", function () {
    // 通常画像を元に戻す
    $(this).find(".con_mg").stop().animate({ "margin-bottom": "0px" });

    // mainVisualを最初の画像に戻す
    $("#mainVisual > p").hide();
    $("#mainVisual > p:first").stop().show();
  });