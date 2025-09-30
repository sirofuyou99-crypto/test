console.log("script load");

$("#viewSelect").on("change",function(){
    console.log("change");

    // #outputを空にする
    $("#output").empty();

    //optionのvalue値を取得する
    let value = $(this).val();

    $.ajax({
        url:"ituneRank"+value+".xml",
        // url:"ituneRankalbums.xml",
        dataType:"xml"
        
    })

    .done(function(xml){
        console.log("処理成功");
        console.log(xml);

        //取得したxmlを加工し画面に出力する
        $(xml).find("entry").each(function(){
            console.log("each");
            
            // entry内の３つの構造を取得し変数格納
            let titleTxt = $(this).find("title").text(); 
            let nameTxt = $(this).find("name").text();
            let urlTxt = $(this).find("url").text();
            let imageTxt = $(this).find("image").text();
            // let categoryTxt = $(this).find("category").text()
            // let releaseDateTxt = $(this).find("releaseDate").text();


            //変数を使って画面に表示
            $("#output").append(
                `<div class="item">`+ //divあった方が扱いやすい
                    `<h2>${titleTxt}</h2>`+
                    `<p>${nameTxt}</p>`+
                    `<a href="${urlTxt}">`+
                    `<img src="${imageTxt}">`+
                    // `<p>${categoryTxt}</p>`+
                    // `<p>${releaseDateTxt}</p>`+
                `</div>`
            );//append
        });//each
        
    })

    .fail(function(error){
        console.log("処理失敗");
        console.log(error.status+error.statusrext); //403、405などのエラー文を返す
        
    });


})