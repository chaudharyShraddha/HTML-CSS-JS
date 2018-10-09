//Deaclaration
var action='click';
var speed="500";

$(document).ready(function(){
	 
	 //Qustion handler
	 $('li#q').on(action,function(){
		 
		 //Get next elements
		 $(this).next()
		 	.slideToggle(speed)
			//select all other answer
			.siblings('li#a')
				.slideUp();
		
		//get image for active question
			var img=$(this).children('img');
				//remove rotate class
				$('img').not(img).removeClass('rotate');
				//toggle rotate class
				img.toggleClass('rotate');
	 });
});