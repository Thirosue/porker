/**
 * Created by takeshi_hirosue on 2015/11/28.
 */

$(document).ready(function(){

    var cost = 0;
    localStorage.setItem('cost', 0);

//カードリスト
    var cards = new Array();
    cards.push({  "id" : 0,  "name" : "逢沢 一郎",  "furigana" : "あいさわ いちろう",  "party" : "自民",  "constituency_broad" : "岡山",  "constituency_narrow" : "1",  "win_count_lower_house" : "10",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "009.png",  "number_of_records" : 3060, "cost" : 3,  });
    cards.push({  "id" : 1,  "name" : "青柳 陽一郎",  "furigana" : "あおやぎ よういちろう",  "party" : "維新",  "constituency_broad" : "比例",  "constituency_narrow" : "南関東",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "010.png",  "number_of_records" : 426, "cost" : 1,  });
    cards.push({  "id" : 2,  "name" : "浅尾慶一郎",  "furigana" : "あさお けいいちろう",  "party" : "無",  "constituency_broad" : "神奈川",  "constituency_narrow" : "4",  "win_count_lower_house" : "3",  "win_count_upper_house" : "2",  "house" : "衆議院",  "portrait_image" : "020.png",  "number_of_records" : 4744, "cost" : 3,  });
    cards.push({  "id" : 3,  "name" : "安倍 晋三",  "furigana" : "あべ しんぞう",  "party" : "自民",  "constituency_broad" : "山口",  "constituency_narrow" : "4",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "006.png",  "number_of_records" : 11693, "cost" : 10,  });
    cards.push({  "id" : 4,  "name" : "池内 さおり",  "furigana" : "いけうち さおり",  "party" : "共産",  "constituency_broad" : "比例",  "constituency_narrow" : "東京都",  "win_count_lower_house" : "1",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "042.png",  "number_of_records" : 226, "cost" : 1,  });
    cards.push({  "id" : 5,  "name" : "石井 啓一",  "furigana" : "いしい けいいち",  "party" : "公明",  "constituency_broad" : "比例",  "constituency_narrow" : "北関東",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "045.png",  "number_of_records" : 2617, "cost" : 2,  });
    cards.push({  "id" : 6,  "name" : "稲田 朋美",  "furigana" : "いなだ ともみ",  "party" : "自民",  "constituency_broad" : "福井",  "constituency_narrow" : "1",  "win_count_lower_house" : "4",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "055.png",  "number_of_records" : 2752, "cost" : 2,  });
    cards.push({  "id" : 7,  "name" : "井上 英孝",  "furigana" : "いのうえ ひでたか",  "party" : "維新",  "constituency_broad" : "大阪",  "constituency_narrow" : "1",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "031.png",  "number_of_records" : 152, "cost" : 1,  });
    cards.push({  "id" : 8,  "name" : "今井 雅人",  "furigana" : "いまい まさと",  "party" : "維新",  "constituency_broad" : "比例",  "constituency_narrow" : "東海",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "057.png",  "number_of_records" : 846, "cost" : 1,  });
    cards.push({  "id" : 9,  "name" : "上西 小百合",  "furigana" : "うえにし さゆり",  "party" : "無",  "constituency_broad" : "比例",  "constituency_narrow" : "近畿",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "065.png",  "number_of_records" : 357, "cost" : 1,  });
    cards.push({  "id" : 10,  "name" : "うえの賢一郎",  "furigana" : "うえの けんいちろう",  "party" : "自民",  "constituency_broad" : "滋賀",  "constituency_narrow" : "2",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "063.png",  "number_of_records" : 311, "cost" : 1,  });
    cards.push({  "id" : 11,  "name" : "江崎 鐵磨",  "furigana" : "えさき てつま",  "party" : "自民",  "constituency_broad" : "愛知",  "constituency_narrow" : "10",  "win_count_lower_house" : "6",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "070.png",  "number_of_records" : 594, "cost" : 1,  });
    cards.push({  "id" : 12,  "name" : "枝野 幸男",  "furigana" : "えだの ゆきお",  "party" : "民主",  "constituency_broad" : "埼玉",  "constituency_narrow" : "5",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "076.png",  "number_of_records" : 7791, "cost" : 7,  });
    cards.push({  "id" : 13,  "name" : "江藤 拓",  "furigana" : "えとう たく",  "party" : "自民",  "constituency_broad" : "宮崎",  "constituency_narrow" : "2",  "win_count_lower_house" : "5",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "074.png",  "number_of_records" : 1236, "cost" : 1,  });
    cards.push({  "id" : 14,  "name" : "遠藤 利明",  "furigana" : "えんどう としあき",  "party" : "自民",  "constituency_broad" : "山形",  "constituency_narrow" : "1",  "win_count_lower_house" : "7",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "078.png",  "number_of_records" : 774, "cost" : 1,  });
    cards.push({  "id" : 15,  "name" : "大串 正樹",  "furigana" : "おおぐし まさき",  "party" : "自民",  "constituency_broad" : "兵庫",  "constituency_narrow" : "6",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "094.png",  "number_of_records" : 48, "cost" : 1,  });
    cards.push({  "id" : 16,  "name" : "大島 理森",  "furigana" : "おおしま ただもり",  "party" : "無",  "constituency_broad" : "青森",  "constituency_narrow" : "3",  "win_count_lower_house" : "11",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "098.png",  "number_of_records" : 4397, "cost" : 4,  });
    cards.push({  "id" : 17,  "name" : "大西 健介",  "furigana" : "おおにし けんすけ",  "party" : "民主",  "constituency_broad" : "愛知",  "constituency_narrow" : "13",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "101.png",  "number_of_records" : 811, "cost" : 1,  });
    cards.push({  "id" : 18,  "name" : "小川 淳也",  "furigana" : "おがわ じゅんや",  "party" : "民主",  "constituency_broad" : "比例",  "constituency_narrow" : "四国",  "win_count_lower_house" : "4",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "079.png",  "number_of_records" : 1370, "cost" : 2,  });
    cards.push({  "id" : 19,  "name" : "小野寺 五典",  "furigana" : "おのでら いつのり",  "party" : "自民",  "constituency_broad" : "宮城",  "constituency_narrow" : "6",  "win_count_lower_house" : "6",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "087.png",  "number_of_records" : 3646, "cost" : 3,  });

    $('.scrollTable').scrolltable({
        stripe: true,
        oddClass: 'odd'
    });

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
        var newWin = window.open( 'person/' + $(this).data('id') + '.html', 'detail', 'width=1200,height=600,scrollbars=yes');
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
            "<p class='number_of_records'></p>" +
            "<span class='mark'></span>" +
            "<img data-id='"+ ( target.id + 1 ) +"' class='open' src='public/" + target.portrait_image + "'>"
        );

        $('#select td').eq(localStorage.getItem('cardNo')).data('id',id);
        cost = cost + target.cost;
        console.log('current cost:' + cost);
        localStorage.setItem('cost', cost);

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


function calcPoint() {

//カードリスト
    var cards = new Array();
    cards.push({  "id" : 0,  "name" : "逢沢 一郎",  "furigana" : "あいさわ いちろう",  "party" : "自民",  "constituency_broad" : "岡山",  "constituency_narrow" : "1",  "win_count_lower_house" : "10",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "009.png",  "number_of_records" : 3060, "cost" : 3,  });
    cards.push({  "id" : 1,  "name" : "青柳 陽一郎",  "furigana" : "あおやぎ よういちろう",  "party" : "維新",  "constituency_broad" : "比例",  "constituency_narrow" : "南関東",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "010.png",  "number_of_records" : 426, "cost" : 1,  });
    cards.push({  "id" : 2,  "name" : "浅尾慶一郎",  "furigana" : "あさお けいいちろう",  "party" : "無",  "constituency_broad" : "神奈川",  "constituency_narrow" : "4",  "win_count_lower_house" : "3",  "win_count_upper_house" : "2",  "house" : "衆議院",  "portrait_image" : "020.png",  "number_of_records" : 4744, "cost" : 3,  });
    cards.push({  "id" : 3,  "name" : "安倍 晋三",  "furigana" : "あべ しんぞう",  "party" : "自民",  "constituency_broad" : "山口",  "constituency_narrow" : "4",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "006.png",  "number_of_records" : 11693, "cost" : 10,  });
    cards.push({  "id" : 4,  "name" : "池内 さおり",  "furigana" : "いけうち さおり",  "party" : "共産",  "constituency_broad" : "比例",  "constituency_narrow" : "東京都",  "win_count_lower_house" : "1",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "042.png",  "number_of_records" : 226, "cost" : 1,  });
    cards.push({  "id" : 5,  "name" : "石井 啓一",  "furigana" : "いしい けいいち",  "party" : "公明",  "constituency_broad" : "比例",  "constituency_narrow" : "北関東",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "045.png",  "number_of_records" : 2617, "cost" : 2,  });
    cards.push({  "id" : 6,  "name" : "稲田 朋美",  "furigana" : "いなだ ともみ",  "party" : "自民",  "constituency_broad" : "福井",  "constituency_narrow" : "1",  "win_count_lower_house" : "4",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "055.png",  "number_of_records" : 2752, "cost" : 2,  });
    cards.push({  "id" : 7,  "name" : "井上 英孝",  "furigana" : "いのうえ ひでたか",  "party" : "維新",  "constituency_broad" : "大阪",  "constituency_narrow" : "1",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "031.png",  "number_of_records" : 152, "cost" : 1,  });
    cards.push({  "id" : 8,  "name" : "今井 雅人",  "furigana" : "いまい まさと",  "party" : "維新",  "constituency_broad" : "比例",  "constituency_narrow" : "東海",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "057.png",  "number_of_records" : 846, "cost" : 1,  });
    cards.push({  "id" : 9,  "name" : "上西 小百合",  "furigana" : "うえにし さゆり",  "party" : "無",  "constituency_broad" : "比例",  "constituency_narrow" : "近畿",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "065.png",  "number_of_records" : 357, "cost" : 1,  });
    cards.push({  "id" : 10,  "name" : "うえの賢一郎",  "furigana" : "うえの けんいちろう",  "party" : "自民",  "constituency_broad" : "滋賀",  "constituency_narrow" : "2",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "063.png",  "number_of_records" : 311, "cost" : 1,  });
    cards.push({  "id" : 11,  "name" : "江崎 鐵磨",  "furigana" : "えさき てつま",  "party" : "自民",  "constituency_broad" : "愛知",  "constituency_narrow" : "10",  "win_count_lower_house" : "6",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "070.png",  "number_of_records" : 594, "cost" : 1,  });
    cards.push({  "id" : 12,  "name" : "枝野 幸男",  "furigana" : "えだの ゆきお",  "party" : "民主",  "constituency_broad" : "埼玉",  "constituency_narrow" : "5",  "win_count_lower_house" : "8",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "076.png",  "number_of_records" : 7791, "cost" : 7,  });
    cards.push({  "id" : 13,  "name" : "江藤 拓",  "furigana" : "えとう たく",  "party" : "自民",  "constituency_broad" : "宮崎",  "constituency_narrow" : "2",  "win_count_lower_house" : "5",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "074.png",  "number_of_records" : 1236, "cost" : 1,  });
    cards.push({  "id" : 14,  "name" : "遠藤 利明",  "furigana" : "えんどう としあき",  "party" : "自民",  "constituency_broad" : "山形",  "constituency_narrow" : "1",  "win_count_lower_house" : "7",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "078.png",  "number_of_records" : 774, "cost" : 1,  });
    cards.push({  "id" : 15,  "name" : "大串 正樹",  "furigana" : "おおぐし まさき",  "party" : "自民",  "constituency_broad" : "兵庫",  "constituency_narrow" : "6",  "win_count_lower_house" : "2",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "094.png",  "number_of_records" : 48, "cost" : 1,  });
    cards.push({  "id" : 16,  "name" : "大島 理森",  "furigana" : "おおしま ただもり",  "party" : "無",  "constituency_broad" : "青森",  "constituency_narrow" : "3",  "win_count_lower_house" : "11",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "098.png",  "number_of_records" : 4397, "cost" : 4,  });
    cards.push({  "id" : 17,  "name" : "大西 健介",  "furigana" : "おおにし けんすけ",  "party" : "民主",  "constituency_broad" : "愛知",  "constituency_narrow" : "13",  "win_count_lower_house" : "3",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "101.png",  "number_of_records" : 811, "cost" : 1,  });
    cards.push({  "id" : 18,  "name" : "小川 淳也",  "furigana" : "おがわ じゅんや",  "party" : "民主",  "constituency_broad" : "比例",  "constituency_narrow" : "四国",  "win_count_lower_house" : "4",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "079.png",  "number_of_records" : 1370, "cost" : 2,  });
    cards.push({  "id" : 19,  "name" : "小野寺 五典",  "furigana" : "おのでら いつのり",  "party" : "自民",  "constituency_broad" : "宮城",  "constituency_narrow" : "6",  "win_count_lower_house" : "6",  "win_count_upper_house" : "",  "house" : "衆議院",  "portrait_image" : "087.png",  "number_of_records" : 3646, "cost" : 3,  });

    //カードリスト
    var speaks = new Array();
    speaks.push('○衆議院議員 山下委員から、なぜ今回も参議院からなのかと、....');
    speaks.push('○本日、この重要な安保法制が採決されるのではないか。....');
    speaks.push('○今回の台風で被害に遭われた皆様方、また、さまざまな形でその災害からの....');
    speaks.push('○ＴＰＰ協定は、アジア太平洋地域に、自由、民主主義、基本的人権、法の支配といった普遍的価値....');
    speaks.push('○今委員御指摘いただきましたとおり、直交集成板、ＣＬＴは、....');
    speaks.push('○自由民主党を代表して、平和安全法制について質問いたします。....');
    speaks.push('○この特別委員会、きょうで百時間を超えるというような長きにわたって、....');
    speaks.push('○まず、今の柿沢提出者の話を少し補足させていただくと、私たちは議論の中で、....');
    speaks.push('○きょうも質問の機会をお与えいただきましたことに感謝を申し上げ、....');
    speaks.push('○堤防が一たび決壊をいたしますと、甚大な人的、物的被害が生じます。....');

    //if(5 == $('#select img').size()) {
        //集計
        var point = 0;
        var rank = 0;
        var index = 0;

        $("#select td").each(function(){
            if(-1 < $(this).data('id')) {
                point = point + cards[$(this).data('id')].number_of_records;
                $("#select td").eq(index++).find('.number_of_records').html(cards[$(this).data('id')].number_of_records);
                $('#info_right').append($('<p>').text(cards[$(this).data('id')].name + 'の発言：' + speaks[Math.round(Math.random()*100)%10]));
            }
        });

    //}

    if( Math.round(Math.random()*100)%10 < 6) {
        console.log('two pair');
        $("#select td").eq(0).find('.mark').html("<img height='50' src='icon/4.png' >");
        $("#select td").eq(1).find('.mark').html("<img height='50' src='icon/4.png' >");
        $("#select td").eq(2).find('.mark').html("<img height='50' src='icon/2.png' >");
        $("#select td").eq(3).find('.mark').html("<img height='50' src='icon/2.png' >");
        $("#select td").eq(4).find('.mark').html("<img height='50' src='icon/3.png' >");
        $('#point').html(point*1);
    } else if ( Math.round(Math.random()*100)%10 < 8) {
        console.log('three card');
        $("#select td").eq(0).find('.mark').html("<img height='50' src='icon/4.png' >");
        $("#select td").eq(1).find('.mark').html("<img height='50' src='icon/4.png' >");
        $("#select td").eq(2).find('.mark').html("<img height='50' src='icon/4.png' >");
        $("#select td").eq(3).find('.mark').html("<img height='50' src='icon/1.png' >");
        $("#select td").eq(4).find('.mark').html("<img height='50' src='icon/2.png' >");
        $('#point').html(point*2);
    } else if ( Math.round(Math.random()*100)%10 < 10) {
        console.log('full hause');
        $("#select td").eq(0).find('.mark').html("<img height='50' src='icon/5.png' >");
        $("#select td").eq(1).find('.mark').html("<img height='50' src='icon/5.png' >");
        $("#select td").eq(2).find('.mark').html("<img height='50' src='icon/5.png' >");
        $("#select td").eq(3).find('.mark').html("<img height='50' src='icon/2.png' >");
        $("#select td").eq(4).find('.mark').html("<img height='50' src='icon/2.png' >");
        $('#point').html(point*3);
    }

    $('#rank').html(Math.round(Math.random()*100));
}

function clear() {
    location.reload();
}
