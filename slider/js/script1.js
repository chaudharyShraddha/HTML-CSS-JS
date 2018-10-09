$(document).ready(function() {
    //set option
    var speed = 500;                         //fade speed
    var autoswitch = true;                     //auto slider option
    var autoswitch_speed = 4000 ;              //auto slider speed

    //add intial active class
    $('.slide').first().addClass('active');

    //Hide all slides
    $('.slide').hide();

    //show first slides
    $('.active').show();

    //next hendlerer	
    $('#next').on('click' , nextSlide);

	//previous handler
    $('#prev').on('click' , prevSlide);
	
	//auto slider 
	if(autoswitch==true){
		setInterval(nextSlide,autoswitch_speed);
	}
	
	//function to next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
         if ($('.oldActive').is(':last-child'))
          {
                $('.slide').first().addClass('active');
          }else{
                   $('.oldActive').next().addClass('active');
               }
               $('.oldActive').removeClass('oldActive');
               $('.slide').fadeOut(speed);
               $('.active').fadeIn(speed);
		}
		
	//function to previous slide
	function prevSlide(){
		 $('.active').removeClass('active').addClass("oldActive");
         if ($('.oldActive').is(':first-child'))
          {
                $('.slide').last().addClass('active');
          }else{
                   $('.oldActive').prev().addClass('active');
               }
               $('.oldActive').removeClass('oldActive');
               $('.slide').fadeOut(speed);
               $('.active').fadeIn(speed);
		
	}
});
