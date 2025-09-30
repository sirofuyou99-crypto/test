//XML・・・データを構造化して保存および転送するためのマークアップ言語
//ルート要素＜root＞すべてのXMLドキュメントは１つの要素をもつ
//加工すべき対象<element>や<clhid>
//XMLのタグは自由に定義できる。データの内容に合わせてタグを作成可能


console.log("script load");
$("#btn").on("click",function(){
    console.log("click");

    //ajax非同期処理
    $.ajax({
        url:"sample.xml",
        dataType:"xml"

    })//ajax

    .done(function(xml){
        console.log("処理成功");
        console.log(xml);

        //取得したXMLを加工する
        $(xml).find("sample").each(function(){  //findはセレクタから指定した要素を見つける　　
            console.log("sample取得");
            //加工①：文字列を出力  //sampleの数だliを追加
            $("#sample ul").append("<li>sample取得</li>") ;
            //加工②：xmlの<sample>内の<elem>を取得し出力
            let elemTxt = $(this).find("elem").text();  //thisはsampleのことを表す
            $("#sample2 ul").append(`<li>${elemTxt}</li>`);
        });  
        
        

    })//done
    .fail(function(){
        console.log("処理失敗");
        console.log(error.status+error.statusrext);
        
    })
})

//非同期処理によるXMLファイルの読み込みと加工
