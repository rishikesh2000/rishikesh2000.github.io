
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script

        if(this.scrollY > 500){
            $('.scrollUpBtn').addClass("show");

        }else{
           $('.scrollUpBtn').removeClass("show");
        }
    });

    // slide-up script

    $('.scrollUpBtn').click(function(){
        $('html').animate({scrollTop: 0});
        //removing smooth scroll on slide up button click
        $('html').css("scrollBehavior","auto");
    });

    $('.navbar .menu li a').click(function(){
        //applying again smooth scroll on menu items click
        $('html').css("scrollBehavior","smooth");
    });

    // toggle menu/navbar script
    $('.menuBtn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menuBtn i').toggleClass("active");

    });

    //typing text animation script

    var typed = new Typed(".typing",{
        strings: ["Student", "", "Developer", "Programmer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
    var typed = new Typed(".typing2",{
        strings: ["Student", "", "Developer", "Programmer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoPlayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                item: 1,
                nav: false
        },
        600:{
            itenm: 2,
            nav: false
        },

        1000:{
            item: 3,
            nav: false
        }
    }

    });

    


});

 // save pdf script

  const link = document.querySelector("#button");

  link.href = './cv/CV.pdf';

  link.open = 'Rishi CV.pdf';

  link.dispatchEvent(new MouseEvent('click'));

//  end JS