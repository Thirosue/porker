/**
 * Created by takeshi_hirosue on 2015/11/28.
 */
$(document).ready(function(){
   var list = new Array();
    list.push({
        name: '逢沢 一郎',
        party :'自民',
        image : 'public/009.jpg'
    });
    list.push({
        name: '青柳 陽一郎',
        party :'維新',
        image : 'public/010.jpg'
    })
    list.push({
        name: '麻生 太郎',
        party :'自民',
        image : 'public/021.jpg'
    })
    list.push({
        name: '安倍 晋三',
        party :'自民',
        image : 'public/006.jpg'
    })
    list.push({
        name: '池内 さおり',
        party :'共産',
        image : 'public/042.jpg'
    })


    $.each(list,function(index,val){
        $('#select').append(
            "<td class='card'>" +
                "<p>"+ val.name +"（"+ val.party +"）</p>" +
                "<img src='" + val.image + "'>" +
            "</td>"
         );
    });
});