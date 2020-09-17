$( document ).ready(function() {
    // for animations
    new WOW().init();
    // for effects
    $(".navbar-toggler").click(function(event) {
        $(".navbar-collapse").toggleClass("active");
        $("main").toggleClass("active");
        $("body").toggleClass("active");    
    });
});

// to hide header while scrolling page to the bottom
(function(){

    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = document.getElementsByClassName('navbarMain')[0];

    var checkScroll = function() {

        /*
        ** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
        */

        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
        }
        else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
        }

        if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
        }
        
        prevScroll = curScroll;
    };

    var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 52) { 
        
        //replace 52 with the height of your header in px

        header.classList.add('hide');
        prevDirection = direction;
        }
        else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);

})();