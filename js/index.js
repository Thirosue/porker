/**
 * Created by takeshi_hirosue on 2015/11/28.
 */
$(document).ready(function(){

    //カードリスト
    var cards = new Array();
    cards.push({  "id" : 1,  "name" : "逢沢 一郎",  "furigana" : "あいさわ いちろう",  "party" : "自民",  "constituency_broad" : "岡山",  "constituency_narrow" : "1",  "win_count_lower_house" : "10",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "009.jpg",  "number_of_records" : 3060,  });
    cards.push({  "id" : 2,  "name" : "青柳 陽一郎",  "furigana" : "あおやぎ よういちろう",  "party" : "維新",  "constituency_broad" : "比例",  "constituency_narrow" : "南関東",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "010.jpg",  "number_of_records" : 426,  });
    cards.push({  "id" : 3,  "name" : "浅尾慶一郎",  "furigana" : "あさお けいいちろう",  "party" : "無",  "constituency_broad" : "神奈川",  "constituency_narrow" : "4",  "win_count_lower_house" : "3",  "win_count_upper_house" : "2",  "house" : "衆議院",  "portrait_image" : "020.jpg",  "number_of_records" : 4744,  });
    cards.push({  "id" : 4,  "name" : "安倍 晋三",  "furigana" : "あべ しんぞう",  "party" : "自民",  "constituency_broad" : "山口",  "constituency_narrow" : "4",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "006.jpg",  "number_of_records" : 11693,  });
    cards.push({  "id" : 5,  "name" : "池内 さおり",  "furigana" : "いけうち さおり",  "party" : "共産",  "constituency_broad" : "比例",  "constituency_narrow" : "東京都",  "win_count_lower_house" : "1",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "042.jpg",  "number_of_records" : 226,  });
    cards.push({  "id" : 6,  "name" : "石井 啓一",  "furigana" : "いしい けいいち",  "party" : "公明",  "constituency_broad" : "比例",  "constituency_narrow" : "北関東",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "045.jpg",  "number_of_records" : 2617,  });
    cards.push({  "id" : 7,  "name" : "稲田 朋美",  "furigana" : "いなだ ともみ",  "party" : "自民",  "constituency_broad" : "福井",  "constituency_narrow" : "1",  "win_count_lower_house" : "4",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "055.jpg",  "number_of_records" : 2752,  });
    cards.push({  "id" : 8,  "name" : "井上 英孝",  "furigana" : "いのうえ ひでたか",  "party" : "維新",  "constituency_broad" : "大阪",  "constituency_narrow" : "1",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "031.jpg",  "number_of_records" : 152,  });
    cards.push({  "id" : 9,  "name" : "今井 雅人",  "furigana" : "いまい まさと",  "party" : "維新",  "constituency_broad" : "比例",  "constituency_narrow" : "東海",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "057.jpg",  "number_of_records" : 846,  });
    cards.push({  "id" : 10,  "name" : "上西 小百合",  "furigana" : "うえにし さゆり",  "party" : "無",  "constituency_broad" : "比例",  "constituency_narrow" : "近畿",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "065.jpg",  "number_of_records" : 357,  });
    cards.push({  "id" : 11,  "name" : "うえの賢一郎",  "furigana" : "うえの けんいちろう",  "party" : "自民",  "constituency_broad" : "滋賀",  "constituency_narrow" : "2",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "063.jpg",  "number_of_records" : 311,  });
    cards.push({  "id" : 12,  "name" : "江崎 鐵磨",  "furigana" : "えさき てつま",  "party" : "自民",  "constituency_broad" : "愛知",  "constituency_narrow" : "10",  "win_count_lower_house" : "6",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "070.jpg",  "number_of_records" : 594,  });
    cards.push({  "id" : 13,  "name" : "枝野 幸男",  "furigana" : "えだの ゆきお",  "party" : "民主",  "constituency_broad" : "埼玉",  "constituency_narrow" : "5",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "076.jpg",  "number_of_records" : 7791,  });
    cards.push({  "id" : 14,  "name" : "江藤 拓",  "furigana" : "えとう たく",  "party" : "自民",  "constituency_broad" : "宮崎",  "constituency_narrow" : "2",  "win_count_lower_house" : "5",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "074.jpg",  "number_of_records" : 1236,  });
    cards.push({  "id" : 15,  "name" : "遠藤 利明",  "furigana" : "えんどう としあき",  "party" : "自民",  "constituency_broad" : "山形",  "constituency_narrow" : "1",  "win_count_lower_house" : "7",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "078.jpg",  "number_of_records" : 774,  });
    cards.push({  "id" : 16,  "name" : "大串 正樹",  "furigana" : "おおぐし まさき",  "party" : "自民",  "constituency_broad" : "兵庫",  "constituency_narrow" : "6",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "094.jpg",  "number_of_records" : 48,  });
    cards.push({  "id" : 17,  "name" : "大島 理森",  "furigana" : "おおしま ただもり",  "party" : "無",  "constituency_broad" : "青森",  "constituency_narrow" : "3",  "win_count_lower_house" : "11",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "098.jpg",  "number_of_records" : 4397,  });
    cards.push({  "id" : 18,  "name" : "大西 健介",  "furigana" : "おおにし けんすけ",  "party" : "民主",  "constituency_broad" : "愛知",  "constituency_narrow" : "13",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "101.jpg",  "number_of_records" : 811,  });
    cards.push({  "id" : 19,  "name" : "小川 淳也",  "furigana" : "おがわ じゅんや",  "party" : "民主",  "constituency_broad" : "比例",  "constituency_narrow" : "四国",  "win_count_lower_house" : "4",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "079.jpg",  "number_of_records" : 1370,  });
    cards.push({  "id" : 20,  "name" : "小野寺 五典",  "furigana" : "おのでら いつのり",  "party" : "自民",  "constituency_broad" : "宮城",  "constituency_narrow" : "6",  "win_count_lower_house" : "6",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "087.jpg",  "number_of_records" : 3646,  });

    //カード配布
    $.each(cards,function(index,val){
        $('#list').append(
            "<li>" +
                "<p>"+ val.name +"（"+ val.party +"）</p>" +
                "<img width='50' src='public/" + val.portrait_image + "'>" +
                "<button data-id='" + index + "' class='card-select'>選択</button>" +
            "</li>"
         );
    });

    $(".card-select").click(function () {
        if(5 == $('#select td').size()) {
            return false;
        }

        var id = $(this).data('id');
        $.each(cards,function(index){
           if(id==index) {
               var target = cards[id];
               $('#select').append(
                   "<td>" +
                   "<p>"+ target.name +"（"+ target.party +"）</p>" +
                   "<img src='public/" + target.portrait_image + "'>" +
                   "</td>"
               );
           }
        });
    });

    //集計
    var point = 0;
    var rank = 0;
    //$.each(speaks,function(index,val){
    //    point = point + val.speak_count;
    //    rank = Math.round( Math.random()*100 );
    //});

    //$('#point').html(point);
    //$('#rank').html(rank);

});