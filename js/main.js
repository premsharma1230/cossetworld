$(document).ready(function(){
  $(".skin").click(function(){
    $(".drop1").slideToggle("");
     $(".drop2,.drop3,.drop4,.drop5").hide("fast");
})
  $(".hair-care").click(function(){
      $(".drop3").slideToggle("");
       $(".drop1,.drop2,.drop4,.drop5").hide("fast");
  })
  $(".slimming").click(function(){
    $(".drop2").slideToggle("");
    $(".drop1,.drop3,.drop4,.drop5").hide("fast");
})
$(".Dermat").click(function(){
  $(".drop4").slideToggle("");
  $(".drop1,.drop2,.drop3,.drop5").hide("fast");
  // $("").hide("");
})

$(".permanentMakeup").click(function(){
  $(".drop5").slideToggle("");
  $(".drop1,.drop2,.drop3,.drop4").hide("fast");
  // $("").slideUp("");
})
$(".right-sticky").click(function(){
  $(this).hide('')
})
// ---social---icon----//
$(".Banner_Wrapper,.Slimming-Banner").click(function(){
  $(".drop_down").slideUp("fast");
})
$(".hide-social").click(function(){
  $(".Sub-social").css({"transform":"translateX(-100px)","transition":"all .3s ease-in-out"});
  $(this).css("display","none");
    $(".show-social").css("display","block")
})
$(".show-social").click(function(){
  $(".Sub-social").css({"transform":"translateX(0px)","transition":"all .3s ease-in-out"}); 
  $(".hide-social").css("display","block");
  $(this).css("display","none")
})

// --------------*********---------------//

$(".listAnckr1").click(function(){
  // debugger
   $(".Accro1").slideDown("");
   $(".Weight-Content-wrp").css("display","block!important");
});


// $(".W1").load(function(){
//    $(this).addClass("OnActive");
// });

// -----
//------Accordion ----------//\\\

// $(".W1").click(function(){
//     $(".Accro1").slideToggle(""); 
//     $(this).toggleClass("collapse");
//     $(".W2,.W3,.W4,.W5,.W6,.W7,.W8,.W9,.W10,.W11,.W12,.W13").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
//     .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10").removeClass("collapse11").removeClass("collapse12").removeClass("collapse13");
//      $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10,.Accro11,.Accro12,.Accro13").slideUp("");
// })
// $(".W2").click(function(){
//   $(".Accro2").slideToggle(""); 
//   $(this).toggleClass("collapse2");
//   $(".W1,.W3,.W4,.W5,.W6,.W7,.W8,.W9,.W10,.W11,.W12,.W13").removeClass("collapse").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
//   .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10").removeClass("collapse11").removeClass("collapse12").removeClass("collapse13");

//   $(".Accro1,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10,.Accro11,.Accro12,.Accro13").slideUp("");
// })
// $(".W3").click(function(){
//   $(".Accro3").slideToggle(""); 
//   $(this).toggleClass("collapse3");
//   $(".Accro2,.Accro1,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10,.Accro11,.Accro12,.Accro13").slideUp("");
//   $(".W2,.W1,.W4,.W5,.W6,.W7,.W8,.W9,.W10,.W11,.W12,.W13").removeClass("collapse2").removeClass("collapse").removeClass("collapse4").removeClass("collapse5")
//   .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10").removeClass("collapse11").removeClass("collapse12").removeClass("collapse13");

// })
// $(".W4").click(function(){
//   $(".Accro4").slideToggle(""); 
//   $(this).toggleClass("collapse4");
//   $(".W2,.W3,.W1,.W5,.W6,.W7,.W8,.W9,.W10,.W11,.W12,.W13").removeClass("collapse2").removeClass("collapse3").removeClass("collapse").removeClass("collapse5")
//     .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10").removeClass("collapse11").removeClass("collapse12").removeClass("collapse13");

//   $(".Accro2,.Accro3,.Accro1,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10,.Accro11,.Accro12,.Accro13").slideUp("");

// })
// $(".W5").click(function(){
//   $(".Accro5").slideToggle(""); 
//   $(this).toggleClass("collapse5");
//   $(".Accro2,.Accro3,.Accro4,.Accro1,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10,.Accro11,.Accro12,.Accro13").slideUp("");
//   $(".W2,.W3,.W4,.W1,.W6,.W7,.W8,.W9,.W10,.W11,.W12,.W13").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse")
//     .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10").removeClass("collapse11").removeClass("collapse12").removeClass("collapse13");


// })
// $(".W6").click(function(){
//   $(".Accro6").slideToggle(""); 
//   $(this).toggleClass("collapse6");
//   $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro1,.Accro7,.Accro8,.Accro9,.Accro10,.Accro11,.Accro12,.Accro13").slideUp("");
//   $(".W2,.W3,.W4,.W5,.W1,.W7,.W8,.W9,.W10,.W11,.W12,.W13").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
//   .removeClass("collapse").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10").removeClass("collapse11").removeClass("collapse12").removeClass("collapse13");

// })
// $(".W7").click(function(){
//   $(".Accro7").slideToggle(""); 
//   $(this).toggleClass("collapse7");
//   $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro1,.Accro8,.Accro9,.Accro10,.Accro11,.Accro12,.Accro1").slideUp("");
//   $(".W2,.W3,.W4,.W5,.W6,.W1,.W8,.W9,.W10,.W11,.W12,.W13").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
//   .removeClass("collapse6").removeClass("collapse").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10").removeClass("collapse11").removeClass("collapse12").removeClass("collapse13");

// })
// $(".W8").click(function(){
//   $(".Accro8").slideToggle(""); 
//   $(this).toggleClass("collapse8");
//   $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro1,.Accro9,.Accro10.Accro11,.Accro12,.Accro13").slideUp("");
//   $(".W2,.W3,.W4,.W5,.W6,.W7,.W1,.W9,.W10,.W11,.W12,.W13").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
//   .removeClass("collapse6").removeClass("collapse7").removeClass("collapse1").removeClass("collapse9").removeClass("collapse10").removeClass("collapse11").removeClass("collapse12").removeClass("collapse13");

// })
// $(".W9").click(function(){
//   $(".Accro9").slideToggle(""); 
//   $(this).toggleClass("collapse9");
//   $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro1,.Accro10.Accro11,.Accro12,.Accro13").slideUp("");
//   $(".W2,.W3,.W4,.W5,.W6,.W7,.W8,.W1,.W10,.W11,.W12,.W13").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
//   .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse").removeClass("collapse10").removeClass("collapse11").removeClass("collapse12").removeClass("collapse13");

// })
// $(".W10").click(function(){
//   $(".Accro10").slideToggle(""); 
//   $(this).toggleClass("collapse10");
//   $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro11.Accro12,.Accro13,.Accro1").slideUp("");
//   $(".W2,.W3,.W4,.W5,.W6,.W7,.W8,.W9,.W1,.W11,.W12,.W13").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
//   .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse").removeClass("collapse11").removeClass("collapse12").removeClass("collapse13");

// })

// $(".W11").click(function(){
//   $(".Accro11").slideToggle(""); 
//   $(this).toggleClass("collapse11");
//   $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10,.Accro12,.Accro13,.Accro1").slideUp("");
//   $(".W2,.W3,.W4,.W5,.W6,.W7,.W8,.W9,.W1,.W10,.W11,.W12,.W13").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
//   .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10").removeClass("collapse12").removeClass("collapse13").removeClass("collapse");

// })
// $(".W12").click(function(){
//   $(".Accro12").slideToggle(""); 
//   $(this).toggleClass("collapse12");
//   $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10,.Accro11,.Accro13,.Accro1").slideUp("");
//   $(".W2,.W3,.W4,.W5,.W6,.W7,.W8,.W9,.W1,.W10,.W11,.W13").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
//   .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10").removeClass("collapse11").removeClass("collapse13").removeClass("collapse");

// })
// $(".W13").click(function(){
//   $(".Accro13").slideToggle(""); 
//   $(this).toggleClass("collapse13");
//   $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10,.Accro11,.Accro12,.Accro1").slideUp("");
//   $(".W2,.W3,.W4,.W5,.W6,.W7,.W8,.W9,.W1,.W10,.W11,.W12").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
//   .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10").removeClass("collapse11").removeClass("collapse12").removeClass("collapse");

// })
//----Accordion -----end--here//

$(".heading-btn").click(function(){
  $(".weight_wrp").slideToggle("");
})

// ---end--here--//

$(".list1").hover(function(){
  $(".Sub_Hvr_wrp1").css('display','block'); 
  $(".Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp5.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9,.Sub_Hvr_wrp10,.Sub_Hvr_wrp11")
  .css('display','none');
})
$(".list2").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp5,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9,.Sub_Hvr_wrp10,.Sub_Hvr_wrp11").css('display','none');
  $(".Sub_Hvr_wrp2").css('display','block');
})
$(".list3").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp5,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9,.Sub_Hvr_wrp10,.Sub_Hvr_wrp11")
  .css('display','none'); 
  $(".Sub_Hvr_wrp3").css('display','block');
})
$(".list4").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp5,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9,.Sub_Hvr_wrp10,.Sub_Hvr_wrp11")
  .css('display','none'); 
  $(".Sub_Hvr_wrp4").css('display','block');
})
$(".list5").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9,.Sub_Hvr_wrp10,.Sub_Hvr_wrp11")
  .css('display','none'); 
  $(".Sub_Hvr_wrp5").css('display','block');
})
$(".list6").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp5,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9,.Sub_Hvr_wrp10,.Sub_Hvr_wrp11")
  .css('display','none'); 
  $(".Sub_Hvr_wrp6").css('display','block');
})
$(".list7").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp6,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9,.Sub_Hvr_wrp10,.Sub_Hvr_wrp11")
  .css('display','none'); 
  $(".Sub_Hvr_wrp7").css('display','block');
})
$(".list8").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp9,.Sub_Hvr_wrp10,.Sub_Hvr_wrp11")
  .css('display','none'); 
  $(".Sub_Hvr_wrp8").css('display','block');
})
$(".list9").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp10,.Sub_Hvr_wrp11")
  .css('display','none'); 
  $(".Sub_Hvr_wrp9").css('display','block');
})
$(".list10").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9,.Sub_Hvr_wrp11")
  .css('display','none'); 
  $(".Sub_Hvr_wrp10").css('display','block');
})
$(".list11").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9,.Sub_Hvr_wrp10")
  .css('display','none'); 
  $(".Sub_Hvr_wrp11").css('display','block');
})
  // add & Remove class
  $(".list-cmn01").hover(function () {
    if(!$(this).hasClass('list-active'))
    {    
        $(".list-cmn01.list-active").removeClass("list-active");
        $(this).addClass("list-active");        
    }
  });
// $(".Banner_Wrapper,header").click(function(){
//   $(".drop_down").slideUp("");
// })
// $(".Apt_heading h2").click(function(){
//   $(".Form_wrp").slideToggle("");
// })

// $( function() {
//   $( "#resizable" ).resizable();
// } );

$(".header").load("header.html");
})

$(function(){
  $("[data-load]").each(function(){
      $(this).load($(this).data("load"), function(){
      });
  });
})
//  -----mouse---movement-----

  //     $('.Treatment_Wrapper ').mousemove(function(e) {
  //       var amountMovedX = (e.pageX * -0.53 / 6);
  //       var amountMovedY = (e.pageY * -0.53 / 6);
  //       $('.itemMove').css('left', amountMovedX + 'px');
  //       $('.itemMove').css('top', amountMovedY + 'px');
  //   });

//bar 

jQuery('.main-bar').click(function(e) {
  jQuery(this).toggleClass('activefile');
  e.preventDefault();
  jQuery('.myHeader').slideToggle();
});

// ----slider-----section ---//

  $('.slider1').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  nav: true,
  autoplayTimeout: 4000,
  smartSpeed: 2500,
  singleItem: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
   }
});

//--bottom--to--top--- and------stickyyy---on----header---//
var mybutton = document.querySelector(".BT-top");
// var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
window.onscroll = function() {
    matrixFunction() //or scroll function--
};
function matrixFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        mybutton.style.display = "block";
        // navbar.classList.add("sticky")
    } else {
        mybutton.style.display = "none";
        // navbar.classList.remove("sticky");
    }
} 

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
//end--here--//
 