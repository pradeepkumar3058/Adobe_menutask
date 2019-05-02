$(document).ready(function(){
	var response = '';
	$.ajax({ 
		type: "GET",   
		url: "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4",   
		async: false,
		success : function(result){
			var i= 0 ;var activeClass = 'right'; 
			for(var val in result) {  			 			
				
				// main menu heading				 		
				$("#menu_list").append('<button class="rootLink item-'+val+' " data-dropdown="'+val+'" aria-haspopup="true" aria-expanded="false"><span>'+val+'</span></button>');
				$("#mobile_headers").append('<h4><div id="mobile_headers">'+val+'</div></h4>');
				
				// sub menus here						
				var j=0 ;
				for(var sub_val in result[val]) { 
					const subMeneuDesc = Object.values(result[val][sub_val]); 

					if(j==0){ 
						$("#menu_details").append('<div class="dropdownSection '+activeClass+'" data-dropdown="'+val+'" aria-hidden="true"><div class="dropdownContent"><div class="linkGroup"><ul class="productsGroupPrimary" id="ul_'+val+'">'); 
						$('#mobile_headers').append('<ul class="productsGroupPrimary" id="mobile_ul_'+val+'">');
					}
					$("#ul_"+val).prepend('<li><a class="linkContainer item-'+val+'" href="#" data-analytics-action="'+val+'" data-analytics-source="nav_dropdown" tabindex="-1"><span class="icon_'+result[val][sub_val].title.replace(" ","_").toLowerCase()+'"></span><div class="productLinkContent"><h3 class="linkTitle head_name_'+result[val][sub_val].title.replace(" ","_").toLowerCase()+'">'+result[val][sub_val].title+'</h3><p class="linkSub">'+subMeneuDesc[1]+'</p></div></a></li>');
					$("#mobile_ul_"+val).prepend('<li><a class="linkContainer item-'+val+'" href="#"><span class="icon_'+result[val][sub_val].title.replace(" ","_").toLowerCase()+'"></span><div class="productLinkContent"><h3 class="linkTitle head_name_'+result[val][sub_val].title.replace(" ","_").toLowerCase()+'">'+result[val][sub_val].title+'</h3><p class="linkSub">'+subMeneuDesc[1]+'</p></div></a></li>');
					j++;
				}
				$("#menu_details").append('</ul></div></div>'); 
				$("#mobile_ul_"+val).append('</ul>'); 
				i++;				

			}
		}
	});



	$('.item-mobileMenu').click(function(event) {
		$('.mobile').addClass('globalPopupActive');
	});
	$('.popupCloseButton').click(function(event) {
		$('.mobile').removeClass('globalPopupActive');
	});

	
	$('.rootLink').hover(function(){
		$('.dropdownSection').removeClass('active');
		$('.dropdownSection').removeClass('left');
		$('.dropdownSection').removeClass('right');
		var drpdwon = $(this).attr('data-dropdown');
		var rect 	=  $(this).offset();
		var div_height, div_width;
		$(this).toggleClass('active');
		$('.adobe_globalNav').addClass('dropdownActive');
		$('.adobe_globalNav').removeClass('noDropdownTransition');
		$('.dropdownSection').each(function(){
			if(drpdwon == $(this).attr('data-dropdown')){
				$(this).addClass('active');
			 	div_height =	$(this).children('.dropdownContent').css('height');
			 	div_width =		$(this).children('.dropdownContent').css('width');
				$(this).prevAll('.dropdownSection').addClass('left');
				$(this).nextAll('.dropdownSection').addClass('right');
			}
		});
		//alert(rect.top);
		var itemsx = 1.3;
		var itemsy = 1;
		var randx = itemsx[Math.floor(Math.random() * itemsx.length)];
		var randy = itemsy[Math.floor(Math.random() * itemsy.length)];
		$('.dropdownContainer').css('height',div_height);
	 	$('.dropdownContainer').css('width',div_width);
	    $('.dropdownArrow').css({'transform':'translateX('+(rect.left -(50))+'px) rotate(45deg)'});
	 	$('.dropdownContainer').css('transform','translateX('+(rect.left/2)+'px)');
	 	$('.dropdownBackground').css('transform','translateX('+(rect.left/2)+'px) scaleX('+itemsx+') scaleY('+itemsy+')');
	 	$('.alternateBackground').css('transform','translateY(100px)');
	});
	$('.dropdownContainer').hover(function(){
		$('.adobe_globalNav').addClass('dropdownActive');
		$('.adobe_globalNav').removeClass('noDropdownTransition');
		// alert('dropdownContainer');
	});

	$('.rootLink').mouseleave(function(event) {
		if($('.dropdownSection').hasClass('active')){}else{
			$('.adobe_globalNav').removeClass('dropdownActive');	
		}
	});
	$('.dropdownContainer').mouseleave(function(event) {
		$('.adobe_globalNav').removeClass('dropdownActive');	
		$(this).removeClass('active');	
	});

});
