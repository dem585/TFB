$(function(){
	$('.heade__top-call-btn').on('click',function(){
		$('.menu-z').addClass('active');
	});

	$('.center-info-btn').on('click',function(){
		$('.menu-z').addClass('active');
	});

	$('.header__footer-bottom').on('click',function(){
		$('.menu-z').addClass('active');
	});
	$('.menu-z-close-btn').on('click',function(){
		$('.menu-z').removeClass('active');
	});

	$('.header-menu').click(function(){
		$('.header-mune-list').slideToggle(500);

	});
});











