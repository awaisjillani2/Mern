$(document).ready(function(){
    // $('[data-toggle="tooltip"]').tooltip();
    $("#login").click(function(){
        $("#login").attr("data-target","#loginModal")
        $("#login").attr("data-toggle","modal")
    })
    $("#rTable").click(function(){
        $("#rTable").attr("data-target","#myModal")
        $("#rTable").attr("data-toggle","modal")
        $("#rTable").attr("data-html","true")
        $("#rTable").attr("data-placement","bottom")
    })
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});