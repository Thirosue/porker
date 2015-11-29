/**
 * Created by takeshi_hirosue on 2015/11/28.
 */

$(document).ready(function(){

    var cost = 0;

    $('.scrollTable').scrolltable({
        stripe: true,
        oddClass: 'odd'
    });

    //カードリスト
    var cards = new Array();
    cards.push({  "id" : 0,  "name" : "逢沢 一郎",  "furigana" : "あいさわ いちろう",  "party" : "自民",  "constituency_broad" : "岡山",  "constituency_narrow" : "1",  "win_count_lower_house" : "10",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "009.jpg",  "number_of_records" : 3060, "cost" : 3,  });
    cards.push({  "id" : 1,  "name" : "青柳 陽一郎",  "furigana" : "あおやぎ よういちろう",  "party" : "維新",  "constituency_broad" : "比例",  "constituency_narrow" : "南関東",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "010.jpg",  "number_of_records" : 426, "cost" : 1,  });
    cards.push({  "id" : 2,  "name" : "浅尾慶一郎",  "furigana" : "あさお けいいちろう",  "party" : "無",  "constituency_broad" : "神奈川",  "constituency_narrow" : "4",  "win_count_lower_house" : "3",  "win_count_upper_house" : "2",  "house" : "衆議院",  "portrait_image" : "020.jpg",  "number_of_records" : 4744, "cost" : 3,  });
    cards.push({  "id" : 3,  "name" : "安倍 晋三",  "furigana" : "あべ しんぞう",  "party" : "自民",  "constituency_broad" : "山口",  "constituency_narrow" : "4",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "006.jpg",  "number_of_records" : 11693, "cost" : 10,  });
    cards.push({  "id" : 4,  "name" : "池内 さおり",  "furigana" : "いけうち さおり",  "party" : "共産",  "constituency_broad" : "比例",  "constituency_narrow" : "東京都",  "win_count_lower_house" : "1",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "042.jpg",  "number_of_records" : 226, "cost" : 1,  });
    cards.push({  "id" : 5,  "name" : "石井 啓一",  "furigana" : "いしい けいいち",  "party" : "公明",  "constituency_broad" : "比例",  "constituency_narrow" : "北関東",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "045.jpg",  "number_of_records" : 2617, "cost" : 2,  });
    cards.push({  "id" : 6,  "name" : "稲田 朋美",  "furigana" : "いなだ ともみ",  "party" : "自民",  "constituency_broad" : "福井",  "constituency_narrow" : "1",  "win_count_lower_house" : "4",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "055.jpg",  "number_of_records" : 2752, "cost" : 2,  });
    cards.push({  "id" : 7,  "name" : "井上 英孝",  "furigana" : "いのうえ ひでたか",  "party" : "維新",  "constituency_broad" : "大阪",  "constituency_narrow" : "1",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "031.jpg",  "number_of_records" : 152, "cost" : 1,  });
    cards.push({  "id" : 8,  "name" : "今井 雅人",  "furigana" : "いまい まさと",  "party" : "維新",  "constituency_broad" : "比例",  "constituency_narrow" : "東海",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "057.jpg",  "number_of_records" : 846, "cost" : 1,  });
    cards.push({  "id" : 9,  "name" : "上西 小百合",  "furigana" : "うえにし さゆり",  "party" : "無",  "constituency_broad" : "比例",  "constituency_narrow" : "近畿",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "065.jpg",  "number_of_records" : 357, "cost" : 1,  });
    cards.push({  "id" : 10,  "name" : "うえの賢一郎",  "furigana" : "うえの けんいちろう",  "party" : "自民",  "constituency_broad" : "滋賀",  "constituency_narrow" : "2",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "063.jpg",  "number_of_records" : 311, "cost" : 1,  });
    cards.push({  "id" : 11,  "name" : "江崎 鐵磨",  "furigana" : "えさき てつま",  "party" : "自民",  "constituency_broad" : "愛知",  "constituency_narrow" : "10",  "win_count_lower_house" : "6",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "070.jpg",  "number_of_records" : 594, "cost" : 1,  });
    cards.push({  "id" : 12,  "name" : "枝野 幸男",  "furigana" : "えだの ゆきお",  "party" : "民主",  "constituency_broad" : "埼玉",  "constituency_narrow" : "5",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "076.jpg",  "number_of_records" : 7791, "cost" : 7,  });
    cards.push({  "id" : 13,  "name" : "江藤 拓",  "furigana" : "えとう たく",  "party" : "自民",  "constituency_broad" : "宮崎",  "constituency_narrow" : "2",  "win_count_lower_house" : "5",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "074.jpg",  "number_of_records" : 1236, "cost" : 1,  });
    cards.push({  "id" : 14,  "name" : "遠藤 利明",  "furigana" : "えんどう としあき",  "party" : "自民",  "constituency_broad" : "山形",  "constituency_narrow" : "1",  "win_count_lower_house" : "7",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "078.jpg",  "number_of_records" : 774, "cost" : 1,  });
    cards.push({  "id" : 15,  "name" : "大串 正樹",  "furigana" : "おおぐし まさき",  "party" : "自民",  "constituency_broad" : "兵庫",  "constituency_narrow" : "6",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "094.jpg",  "number_of_records" : 48, "cost" : 1,  });
    cards.push({  "id" : 16,  "name" : "大島 理森",  "furigana" : "おおしま ただもり",  "party" : "無",  "constituency_broad" : "青森",  "constituency_narrow" : "3",  "win_count_lower_house" : "11",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "098.jpg",  "number_of_records" : 4397, "cost" : 4,  });
    cards.push({  "id" : 17,  "name" : "大西 健介",  "furigana" : "おおにし けんすけ",  "party" : "民主",  "constituency_broad" : "愛知",  "constituency_narrow" : "13",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "101.jpg",  "number_of_records" : 811, "cost" : 1,  });
    cards.push({  "id" : 18,  "name" : "小川 淳也",  "furigana" : "おがわ じゅんや",  "party" : "民主",  "constituency_broad" : "比例",  "constituency_narrow" : "四国",  "win_count_lower_house" : "4",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "079.jpg",  "number_of_records" : 1370, "cost" : 2,  });
    cards.push({  "id" : 19,  "name" : "小野寺 五典",  "furigana" : "おのでら いつのり",  "party" : "自民",  "constituency_broad" : "宮城",  "constituency_narrow" : "6",  "win_count_lower_house" : "6",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "087.jpg",  "number_of_records" : 3646, "cost" : 3,  });

    $(".search").click(function () {
        if(5 == $('#select img').size()) {
            return false;
        }

        var party = $('#party').val();
        var name = $('#name').val()

        if(0 === party.length && 0 === name.length) {
            alert('条件を入力してください');
            return false;
        }

        target = getList(party,name);

        console.log(party);
        console.log(name);
        console.log(target);

        $('#grid-content').empty();
        $.each(target,function(index,val){
            $('#grid-content').append(
                "<tr class='st-tr-even'>" +
                    "<td style='width: 10%;'><img width='50' src='public/" + val.portrait_image + "'></td>" +
                    "<td style='width: 10%;'>"+ val.cost +"</td>" +
                    "<td style='width: 10%;'>"+ val.party +"</td>" +
                    "<td style='width: 20%;'>"+ val.name + "</td>" +
                    "<td style='width: 20%;'>"+ val.constituency_broad + "</td>" +
                    "<td style='width: 10%;'>"+ val.house + "</td>" +
                    "<td style='width: 10%;'><button data-id='" + val.id + "' class='card-select'>選択</button></td>" +
                "</tr>"
            );
        });
    });

    $(document).on("click",".open", function(){
        var newWin = window.open( 'person/' + $(this).data('id') + '.html', 'detail', 'width=800,height=480,scrollbars=yes');
        newWin.focus();
    });

    $(document).on("click",".card-select", function(){
        if(5 == $('#select img').size()) {
            return false;
        }

        var id = $(this).data('id');
        var target;
        $.each(cards,function(index){
           if(id===index) {
               target = cards[id];
           }
        });

        if((cost + target.cost) > 15) {
            alert('cost over');
            return false;
        }

        $('#select td').eq(localStorage.getItem('cardNo')).html(
            "<p class='cost' data-cost='" + target.cost + "'>"+ target.name +"（"+ target.party +"）</p>" +
            "<img data-id='"+ ( target.id + 1 ) +"' class='open' src='public/" + target.portrait_image + "'>" +
            "<div>" +
                "<ul>" +
                    "<li class='number_of_records'></li>" +
                    "<li class='mark'></li>" +
                "</ul>" +
            "</div>"
        );

        $('#select td').eq(localStorage.getItem('cardNo')).data('id',id);
        cost = cost + target.cost;
        console.log('current cost:' + cost);

        //calcPoint();
        closeModal('#modal1');
    });

    function getList(party,name) {
        var target = new Array();

        $.each(cards,function(index,val){
            if(0 === party.length && 0 !== name.length) {
                if(val.name.indexOf(name) !== -1) {
                    target.push(cards[index]);
                }
            }
            if(0 !== party.length && 0 === name.length) {
                if(party==val.party) {
                    target.push(cards[index]);
                }
            }
            if(0 !== party.length && 0 !== name.length) {
                if(party==val.party && val.name.indexOf(name) !== -1) {
                    target.push(cards[index]);
                }
            }
        });

        return target;
    }
});

