console.log("script load");

//エラー配列
errorMes = new Array();
errorMes[0]="氏名を入力してくだい"
errorMes[1]="シメイを入力してくだい"
errorMes[2]="アドレスを入力してくだい"
errorMes[3]="電話番号を入力してくだい"
errorMes[4]="携帯番号を入力してくだい"

errorMes2 = new Array();
errorMes2[0]="アドレスを入力してくだい"

errorMes3 = new Array();
errorMes3[0]="電話番号を入力してくだい"
errorMes3[1]="携帯番号を入力してくだい"







$("#btn").on("click",function(){
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


    $("form input[type='email']").each(function(index,element){  //form input[type='text']が見つかるごとに実行
        console.log("each実行");

        
        //入力チェック(条件)　thisはeachで見つけやつのこと
        if ($(this).val()==""){
            $(this).after(`<p class='error'> ${errorMes2[index]}</p>`); //inputの下に＜ｐ＞を作成
            $("#alertAll").append(`<p>${errorMes2[index]}</p>`);
        }//if
    });//each


    $("form input[type='phone']").each(function(index,element){  //form input[type='text']が見つかるごとに実行
        console.log("each実行");

        
        //入力チェック(条件)　thisはeachで見つけやつのこと
        if ($(this).val()==""){
            $(this).after(`<p class='error'> ${errorMes3[index]}</p>`); //inputの下に＜ｐ＞を作成
            $("#alertAll").append(`<p>${errorMes3[index]}</p>`);
        }//if
    });//each
    
    $(".error").css("color" , "red");



});//click
