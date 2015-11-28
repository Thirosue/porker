/**
 * Created by takeshi_hirosue on 2015/11/28.
 */
$(document).ready(function(){
   //選択したカード
   var cards = new Array();
    cards.push({
        name: '逢沢 一郎',
        party :'自民',
        image : 'public/009.jpg'
    });
    cards.push({
        name: '青柳 陽一郎',
        party :'維新',
        image : 'public/010.jpg'
    });
    cards.push({
        name: '麻生 太郎',
        party :'自民',
        image : 'public/021.jpg'
    });
    cards.push({
        name: '安倍 晋三',
        party :'自民',
        image : 'public/006.jpg'
    });
    cards.push({
        name: '池内 さおり',
        party :'共産',
        image : 'public/042.jpg'
    });

    //発言リスト
    var speaks = new Array();
    speaks.push({  "id" : "1",  "name" : "逢沢 一郎",  "furigana" : "あいさわ いちろう",  "party" : "自民",  "constituency_broad" : "岡山",  "constituency_narrow" : "1",  "win_count_lower_house" : "10",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "009.jpg", speak_count: 426 });
    speaks.push({  "id" : "2",  "name" : "青柳 陽一郎",  "furigana" : "あおやぎ よういちろう",  "party" : "維新",  "constituency_broad" : "比例",  "constituency_narrow" : "南関東",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "010.jpg", speak_count: 4744  });
    speaks.push({  "id" : "3",  "name" : "麻生 太郎",  "furigana" : "あそう たろう",  "party" : "自民",  "constituency_broad" : "福岡",  "constituency_narrow" : "8",  "win_count_lower_house" : "12",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "021.jpg", speak_count: 11693 });
    speaks.push({  "id" : "4",  "name" : "安倍 晋三",  "furigana" : "あべ しんぞう",  "party" : "自民",  "constituency_broad" : "山口",  "constituency_narrow" : "4",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "006.jpg", speak_count: 226 });
    speaks.push({  "id" : "5",  "name" : "池内 さおり",  "furigana" : "いけうち さおり",  "party" : "共産",  "constituency_broad" : "比例",  "constituency_narrow" : "東京都",  "win_count_lower_house" : "1",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "042.jpg", speak_count: 2617 });

    //カード配布
    $.each(cards,function(index,val){
        $('#select').append(
            "<td class='card'>" +
                "<p>"+ val.name +"（"+ val.party +"）</p>" +
                "<img src='" + val.image + "'>" +
            "</td>"
         );
    });

    //集計
    var point = 0;
    var rank = 0;
    $.each(speaks,function(index,val){
        point = point + val.speak_count;
        rank = Math.round( Math.random()*100 );
    });

    $('#point').html(point);
    $('#rank').html(rank);

});