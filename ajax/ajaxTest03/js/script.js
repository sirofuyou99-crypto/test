console.log("script load");

$("#viewSelect").on("change",function(){
    console.log("change");

    //#outputを空にする
    $("#output").empty();

    //optionのvalue値を取得する
    let value = $(this).val();

    $.ajax({
        url:"datasample"+value+".xml",
        dataType:"xml"
        
    })
    .done(function(xml){
        console.log("処理成功");
        console.log(xml);

        //取得したxmlを加工し画面に出力する
        $(xml).find("entry").each(function(){
            console.log("each"); //eachは２回実行される。２個あるから
            
            // entry内の３つの構造を取得し変数格納
            let titleTxt = $(this).find("title").text(); 
            let nameTxt = $(this).find("name").text(); 
            let imageTxt = $(this).find("image").text(); 

            //変数を使って画面に表示
            $("#output").append(
                `<div class="item">`+ //divあった方が扱いやすい
                    `<h2>${titleTxt}</h2>`+
                    `<p>${nameTxt}</p>`+
                    `<img src="${imageTxt}">`+
                `</div>`
            );//append
        });//each
        
    })

    .fail(function(error){
        console.log("処理失敗");
        console.log(error.status+error.statusrext); //403、405などのエラー文を返す
        
    });


})