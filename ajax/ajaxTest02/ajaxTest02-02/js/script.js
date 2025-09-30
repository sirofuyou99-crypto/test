console.log("script load");
$("#btn").on("click",function(){
    console.log("click");
    

    $.ajax({
        url:"test.xml",
        dataType:"xml"
    })
    .done(function(xml){
        console.log("処理成功");
        console.log(xml);

        //取得したXMLを加工する
        $(xml).find("sample").each(function(){  //findはセレクタから指定した要素を見つける　　
            console.log("sample取得");
            //加工①：文字列を出力  //sampleの数だliを追加
            $("#sample ul").append("<li>sample取得</li>");
            //加工②：xmlの<sample>内の<title>を取得し出力
            let titleTxt = $(this).find("title").text();  //thisはsampleのことを表す
            $("#sample2 ul").append(`<li>${titleTxt}</li>`);
            let urlTxt = $(this).find("url").text();  //thisはsampleのことを表す
            $("#sample3 ul").append(`<li>${urlTxt}</li>`);
            //4)sample4内のulに<title>と<url>を組み合わせたリンク作成
            //<li><a href="urlテキスト">titleテキスト</a></li>
            $("#sample4 ul").append(`<li><a href="${urlTxt}">${titleTxt}</a></li>`)
        });  
        
        

    })//done
    .fail(function(error){
        console.log("処理失敗");
        console.log(error.status+error.statusrext); //403、405などのエラー文を返す
        
    })
})
// 非同期処理によるXMLファイルの読み込みと加工
