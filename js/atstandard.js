




	$(document).ready(function() {
	
	
	
			if(Modernizr.mq('only all and (min-width: 960px)')) {
	
	
	
	   // grab the initial top offset of the navigation 
	   var sticky_navigation_offset_top = $('nav.master').offset().top;
	    
	   // our function that decides weather the navigation bar should have "fixed" css position or not.
	   var sticky_navigation = function(){
	       var scroll_top = $(window).scrollTop(); // our current vertical position from the top
	        
	       // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	       // otherwise change it back to relative
	       if (scroll_top > sticky_navigation_offset_top) { 
	            $('nav.master').css({ 'position': 'fixed', 'top':0, 'left':0 });
	
	       } else {
	           $('nav.master').css({ 'position': 'relative'}); 
	       }   
	   };
	    
	   // run our function on load
	   sticky_navigation();
	    
	   // and run it again every time you scroll
	   $(window).scroll(function() {
	        sticky_navigation();
	   });
	
	
	};
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
		if(Modernizr.mq('only all and (max-width: 960px)')) {
		
				
		
		
		
			//show & reveal work experience
			
			
			$('p.moreJobInfo').hide();
			$('a.revealJobInfo').show();	
			
			
			
			
			$("a.revealJobInfo").click(function() {
				event.preventDefault();
			  $(this).siblings('p.moreJobInfo').slideToggle('slow', 'swing');
			 
			 if ( $(this).hasClass('closed') ) {			  
				  $(this).contents().replaceWith('Close');
				  $(this).removeClass('closed').addClass('open');
				  
			  }
			 else if ( $(this).hasClass('open') ) {			  
			 
			  $(this).contents().replaceWith('Read More');
			  $(this).removeClass('open').addClass('closed');
			  
			  };
			  
			  
			  
			  
			  

			  
			  
			  
			  
			  
			});
			
			
			
			
		}

	
	
	//Slideshow	
		
	$('.item').show();
	$('.prev').show();
	$('.next').show();
	$('selectorsBlock').show();
		
		$('.iosSlider').iosSlider({
			snapToChildren: true,
			desktopClickDrag: true,
			keyboardControls: true,
			navNextSelector: $('.next'),
			navPrevSelector: $('.prev'),
			navSlideSelector: $('.selectors .item'),
			onSlideChange: slideChange
		});
		
	}); 
	
	function slideChange(args) {
		
		console.log(args);
		$('.selectors .item').removeClass('selected');
		$('.selectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
		


};




	