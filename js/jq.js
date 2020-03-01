var nav = document.getElementById("nav");


function fucuss(){
    document.getElementById("search_input").style.border="2px solid  rgb(51, 239, 180)";
    nav.style.backgroundColor=" rgb(202, 204, 203)";

}
function blurr(){
    document.getElementById("search_input").style.border="1px solid transparent"
    nav.style.backgroundColor=" transparent";

}
$(document).ready(function(){

    $("#content2_s1_second").hide();
    $("#content2_s1_third").hide();
    $("#l1").css("opacity",1);



});


function Scroll_Y()
{
    if(window.scrollY>70)
    {
        nav.style.backgroundColor=" white";
        document.getElementById("logo1_color").src="Resources/logo-black.svg";
        var links= document.getElementsByClassName("color");
        for(var i= 0; i<5;i++)
        {
            links[i].style.color="rgb(51,51,51)";
            links[i].onmouseover=function(){
                this.style.opacity="0.6";
            };

            links[i].onmouseout=function(){
                this.style.opacity="1";
            };
        }
        
    }
    if(window.scrollY<70)
    {
        nav.style.backgroundColor="";
        document.getElementById("logo1_color").src="Resources/logo-white.svg";
        var links= document.getElementsByClassName("color");
        for(var i= 0; i<5;i++)
        {
            links[i].style.color="";
        }
    }
    
}

 var links_llt =document.getElementsByClassName("content2_s1_links");
 var divs = document.getElementsByClassName("position");

$("links_llt").on("mouseover mouseout",function(){

    this.toggleClass("t1");


});


$("#l1").click(function(){

    $("#content2_s1_first").show();
    $("#content2_s1_second").hide();
    $("#content2_s1_third").hide();
    $("#l1").css("opacity",1);
    $("#l2").css("opacity",0.3);
    $("#l3").css("opacity",0.3);
});
$("#l2").click(function(){

    $("#content2_s1_second").show();
    $("#content2_s1_first").hide();
    $("#content2_s1_third").hide();
    $("#l2").css("opacity",1);
    $("#l3").css("opacity",0.3);
    $("#l1").css("opacity",0.3);
});

$("#l3").click(function(){

    $("#content2_s1_third").show();
    $("#content2_s1_second").hide();
    $("#content2_s1_first").hide();
    $("#l3").css("opacity",1);
    $("#l1").css("opacity",0.3);
    $("#l2").css("opacity",0.3);
});
