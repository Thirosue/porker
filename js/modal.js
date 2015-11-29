/**
 * Created by takeshi_hirosue on 2015/11/28.
 */
$(document).ready(function(){

    // 「.modal-open」をクリック
    $('.modal-open').click(function(){
        localStorage.setItem('cardNo', $(this).data('no'));
        console.log('select' + localStorage.getItem('cardNo') + '....');

        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');

        // モーダルコンテンツのIDを取得
        var modal = '#' + $(this).attr('data-target');
        // モーダルコンテンツの表示位置を設定
        $(modal).css({'left': $(this).data('left') + 'px','top': $(this).data('top') + 'px'});
        // モーダルコンテンツフェードイン
        $(modal).fadeIn('slow');

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-overlay, .modal-close').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // オーバーレイを削除
                $('.modal-overlay').remove();
            });
        });
    });
});

function closeModal(modal) {
    $(modal).fadeOut('slow');
    $('.modal-overlay').fadeOut('slow',function(){
        // オーバーレイを削除
        $('.modal-overlay').remove();
    });
}

