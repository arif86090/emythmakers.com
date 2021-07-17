$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
     autoplayTimeout:2000,


    responsive:{
        0:{
            items: 2                    
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }
})
	var mybutton =document.getElementById("mybtn");
window.onscroll=function() {scrollfunction()};
function scrollfunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){ mybutton.style.display ="block";}
else{mybutton.style.display ="none";}}
function topFunction(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0;}








    
    $(window).scroll(function() {
    if ($(window).scrollTop()>100) {
        
        $('.navbar').addClass('active');
        $('.navbar-brand').addClass('active');
    } else {
        
  $('.navbar').removeClass('active');
  $('.navbar-brand').removeClass('active');

    }

});



