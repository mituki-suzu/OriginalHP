$(document).ready(function(){
	var slick = $('.single-item').slick({
		appendArrows: $('#arrows'),
		//左右ボタンで画像の切り替えができるかどうか
		accessibility: true,
		//自動再生するか
		autoplay: true,
		//自動再生の切り替え時間(ms)
		autoplaySpeed: 3000,
		//画像下のドットを表示
		dots: true,
		//切り替え時のフェードイン
		fade: true,
		//無限スクロールにするかどうか
		infinite: true,
		//マウスオーバー時スクロールを止めるかどうか
		pauseOnHover: true,
	});

	$('.slick-next').on('click', function () {
        slick.slickNext();
    });
    $('.slick-prev').on('click', function () {
        slick.slickPrev();
    });
});