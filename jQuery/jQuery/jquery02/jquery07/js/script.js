console.log("script load");

//エラー配列
errorMes = new Array();
errorMes[0]="氏名を入力してくだい"
errorMes[1]="シメイを入力してくだい"


$("#btn2").on("click",function(){
    console.log("click");
    //エラー要素を削除する まず空にする
    $("#alertAll").empty();
    $(".error").remove();

    
    //簡易入力チェック
    $("form input[type='text']").each(function(index,element){  //form input[type='text']が見つかるごとに実行
        console.log("each実行");

        
        

        //入力チェック(条件)　thisはeachで見つけやつのこと
        if ($(this).val()==""){
            $(this).after(`<p class='error'> ${errorMes[index]}</p>`); //inputの下に＜ｐ＞を作成
            $("#alertAll").append(`<p>${errorMes[index]}</p>`);
        }//if
       

    });//each
})//click

