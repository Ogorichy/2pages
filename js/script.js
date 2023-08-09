$(document).ready(

	function(){

		$navbar = $("nav");
		$icon = $(".toggle");

		$icon.click(
			function(){
				$navbar.toggleClass("save");
			}

			);

		AOS.init({
			duration:3000,
		});
	}

	);

var show = 0;

function slide(){
	var images = document.getElementsByClassName("java")
	for(var hide = 0; hide <images.length; hide++){
		images[hide].style.display = "none";
	}
	show++;
	if(show > images.length){
		show = 1;
	}
	images[show-1].style.display = "block";
	setTimeout(slide,1000);

}
window.onload = slide;

var swiper = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});