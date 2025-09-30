console.log("script.js load");

// button01クリック処理
$("#button01").on("click",function(){
    // console.log("click");
    
    //非同期処理
    $.ajax({
        url:"./load.html",//通信先の指定
        dataType:"html"//通信データのファイル形式
    })
    .done(function(data){//←()内の引数でデータを受け取る
        console.log("success");
        // console.log(data);
        //load.htmlから取得したデータ(data)を出力
        $("#sample01").html(data);
        
    })
    .fail(function(error){
        console.log("error");
        console.log(error.status+error.statusText);
        
    })
    .always(function(){
        console.log("complete");
    });
});

// box1 selectの選択が変更されたら
$("#box1 select").on("change",function(){
    // console.log("change");
    //optionのvalue値を取得する
    console.log($(this).val());
    let selectValue = $(this).val();
    $.ajax({
    url:`./${selectValue}.html`,//通信先の指定
    dataType:"html"//通信データのファイル形式
    })
    .done(function(data){//←()内の引数でデータを受け取る
        console.log("success");
        // console.log(data);
        //load.htmlから取得したデータ(data)を出力
        $("#box2In").html(data);
        
    })
    .fail(function(error){
        console.log("error");
        console.log(error.status+error.statusText);
        
    }) 
});