$(function () {

    $("#category-menu").find("li").mouseenter(function () {
        var width = this.offsetWidth;
        $(this).find("ul")
            .css("left", width+20 + "px")
            .css("display", "block")
            .css("margin-top", + "-20px")
        ;

    });

    $("#category-menu").find("li").mouseleave(function () {
        //setTimeout(function(){
            $("#category-menu").find("li").find("ul").css("display", "none");
        //},2000);

    });


});
