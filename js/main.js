//========================
//CUSTOM SCROLLBAR
//========================
$(document).ready(
    function () {

        $('.education').toggle(false);
        $('.honors').toggle(false);
        $('.portfolio').toggle(false);
        $('.experience').toggle(false);

        $("html").niceScroll({
            mousescrollstep: 70,
            cursorcolor: "#2ca8f5",
            cursorwidth: "6px",
            cursorborderradius: "5px",
            cursorborder: "none",
        });

        $('.btn-group .btn').on('click', function() {
            // Queuing up the update event as the bug in bootstrap
            // doesn't toggle the button's active class as soon as
            // the click happens.
            var self = $(this);
        
            console.log("inside btn-group handler=>"+self.parent().attr("class"));      
            if(self.parent().hasClass('menu-group')) { 

                console.log('menu button clicked');
                self.delay(100).queue(updateContent);
            }
        });

    var show = function(div) {
        
        var list = ['.about-me', '.honors', '.education', '.portfolio', '.experience'];

        $(div).toggle(true);

        for(var item in list) {
            if(list[item] != div) {
                $(list[item]).toggle(false);
            }
        }

    }

    var updateContent = function() {

        var self = $(this);
        var radio = self.find(':radio');
        // return if there isn't a radio within the btn-group.
        // Unlikely to happen.
        if(radio.length == 0)
            return;

        console.log('radio Val='+radio.val());

        show('.'+radio.val());

        $(this).dequeue();
    }

});


//========================
//SMOOTHSCROLL
//========================
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});