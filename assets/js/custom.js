
$(document).ready(function(){
	

	//form photo sec
	$('.grid').masonry({
	  columnWidth: 1,
	  itemSelector: '.grid-item'
	});
	

	// post carousel
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        760:{
	            items:2
	        },
	        1170:{
	            items:3
	        }
	    }
	})


	// post carousel nav

	$('.car_button_cover #car_prev').on('click',function(e){
		e.preventDefault();
		$('.latest_post_outer .owl-nav .owl-prev').trigger('click');
	})
	$('.car_button_cover #car_next').on('click',function(e){
		e.preventDefault();
		$('.latest_post_outer .owl-nav .owl-next').trigger('click');
	})


	// filter gallery 
	
	$('.filter_box a').on('click',function(e){
		e.preventDefault();
	})
	

})



$(document).ready(function(){


		 
function sc_animate (element_name,ele_num){

	element_name.addClass('op_zero');


	$(window).on('scroll',function(){
		var scrTop = $(this).scrollTop();
		var elementPos = element_name.offset().top;

		if(!element_name.hasClass('effect_done')){
		 	if( scrTop >= elementPos-600 && ele_num == 1){
			    var ele = element_name; 
				TweenMax.set(ele, {scale:0,opacity:0});
				TweenMax.to(ele, 1, {scale: 1,opacity:1});
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 2){
			    var ele = element_name; 
				TweenMax.set(ele, {x:-60,opacity:0});
				TweenMax.staggerTo(ele, 0.8, {x:0, opacity:1}, 0.6);
				element_name.addClass('effect_done');
		 		
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 3){
			    var ele = $('.service_img_box img'); 
				TweenMax.set(ele, {scale:0,opacity:0});
				TweenMax.staggerTo(ele, 1, {scale:1, opacity:1}, 0.5);
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 4){
			    var ele = element_name; 
				TweenMax.set(ele, {rotationX:90,opacity:0});
				TweenMax.staggerTo(ele, 1, {rotationX:1, opacity:1}, 0.5);
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 5){
			    var ele = element_name; 
				TweenMax.set(ele, {opacity:0});
				TweenMax.to(ele, 0.6, {scale: 1,opacity:1});
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 6){
			    var ele = element_name; 
			    TweenMax.set(ele, {x:25,opacity:0});
			    TweenMax.staggerTo(ele, 1, {x:0, opacity:1}, 0.5);
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 7){
			    var ele = element_name; 
				TweenMax.set(ele, {x:-25,opacity:0});
				TweenMax.to(ele, 0.6, {x:0,opacity:1});
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 8){
			    var ele = element_name; 
				TweenMax.set(ele, {x:-25,opacity:0});
				TweenMax.to(ele, 0.6, {x:0,opacity:1});
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 9){
			    var ele = element_name; 
				TweenMax.set(ele, {x:25,opacity:0});
				TweenMax.to(ele, 0.6, {x:0,opacity:1});
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 10){
			    var ele = element_name; 
				TweenMax.set(ele, {x:50,opacity:0});
				TweenMax.to(ele, 1, {x: 0,opacity:1});
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 11){
			    var ele = element_name; 
				TweenMax.set(ele, {x:50,opacity:0});
				TweenMax.to(ele, 1, {x: 0,opacity:1});
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 12){
			    var ele = element_name; 
				TweenMax.set(ele, {x:50,opacity:0});
				TweenMax.to(ele, 1, {x: 0,opacity:1});
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 13){
			    var ele = element_name; 
				TweenMax.set(ele, {x:50,opacity:0});
				TweenMax.to(ele, 1, {x: 0,opacity:1});
				element_name.addClass('effect_done');
		 	}
		 	if( scrTop >= elementPos-600 && ele_num == 14){
			    var ele = element_name; 
				TweenMax.set(ele, {x:50,opacity:0});
				TweenMax.to(ele, 1, {x: 0,opacity:1});
				element_name.addClass('effect_done');
		 	}		
		} 	
	});
}



var tl = new TimelineMax();
sc_animate($('.form_gallry > span'),1);
sc_animate($('.filter_box li'),2);
sc_animate($('.service_img_box img'),3);
sc_animate($('.call_info_box'),4);
sc_animate($('.video_player_cover'),5);
sc_animate($('.latest_post_images img'),6);
sc_animate($('.latest_post_text_box'),7);
sc_animate($('.footer_form_cover'),8);
sc_animate($('.footer_info_cover'),9);
sc_animate($('.form_cover'),10);
sc_animate($('.service_box'),11);
sc_animate($('.about_text_box'),12);
sc_animate($('.sub_video_outer'),13);
sc_animate($('.gallery_outer .sec_heading'),14);


var ele = $('.header_cover .container'); 
tl.set(ele, {y:-100,opacity:0});
tl.to(ele, 0.8, {y: 0,opacity:1});

});

//gallery

$(function () {
		
	var filterList = {
	
		init: function () {
		
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: '.all' // show app tab on first load
    		}     
			});								
		
		}

	};
	
	// Run the show!
	filterList.init();
	
});	

