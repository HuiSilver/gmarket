//header
$(function(){
    $(".con").css("display", "none");
    $(".menuAll").click(function () {
        $(".con").toggle();

    });


    $(".mobInfo").click(function () {
        $(".mobFooterContent ul").toggle();
        $(".mobInfo .ri-arrow-down-s-line").toggle();
        $(".mobInfo .ri-arrow-up-s-line").toggle();
    });


     $(window).resize(function () {
        var width = $(window).width();

        if (width >= 768) {
            $(window).scroll(function () {
                if ($(this).scrollTop() < 59) { 
                    $("header.down").css("display", "none");
                } else {
                    $("header.down").css("display", "block");
                }
            });
        } else if (width < 768) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 60) {
                    $(".menuTopMobile").css("position", "fixed");
                    $(".menuTopMobile").css("left", "0");
                    $(".menuTopMobile").css("top", "0");
                    $(".menuTopMobile").css("z-index", "10000");
                    $(".boxHead").css("display", "none");
                } else {
                    $(".menuTopMobile").css("position", "relative");
                    $(".boxHead").css("display", "block");
                }
            });
        }
    });
    $(window).trigger("resize");

   /* 즐겨찾기 버튼*/ 
$(".clickIcon>i:first-of-type").click(function(){
    $(this).addClass("colorActive");
//    $(".colorActive").click(function(){
//    $(this).removeClass("colorActive");
//});
});

    
});

/*스크롤시 메뉴고정*/
 $(window).scroll(function(){
               if($(window).width()>768){
                   if($(window).scrollTop()>=1750&&$(window).scrollTop()<3680){
                    $(".secondCal").css("position","fixed");
                    $(".secondCal").css({"right":"18.5%","top":"60px"});
                }else{$(".secondCal").css("position","absolute"); $(".secondCal").css({"right":"0","top":"0"});}
               }
     if($(window).scrollTop()>1100){
         $(".subNav").css("position","fixed");
     }else{$(".subNav").css({"position":"absolute","z-index":"999"});}
            });




/*슬라이드 이미지*/
$(".next").click(function(){
    $(".otherItem ul").animate({"margin-left":"-888px"},600);
    $(".next").css("background-position","-26px -44px");
    $(".prev").css("background-position","-127px -60px");
});
$(".prev").click(function(){
    $(".otherItem ul").animate({"margin-left":"0"},600);
    $(".prev").css("background-position","0 -44px");
    $(".next").css("background-position","-26px -18px");
});



/*toggle버튼*/
$(function(){
   $(".btnOn").click(function(){
       $(".smileInfo").toggle(function(){
            $(".benefitInfo").css("display","none");
       });
       
   });
  $(".benefitBtn").click(function(){
      $(".benefitInfo").toggle(function(){
          $(".smileInfo").css("display","none");
      });
  });

    $(".optionBtn").click(function(){
        $(this).siblings(".optionBtn+ul").toggle();
    });
    $(".dcInfo").click(function(event){
        event.preventDefault();
        $(".creditDc").toggle();
    });
    
    $(".mbBtn").click(function(){
        $(".smallOp").toggle();
        if($(".smallOp").css("display")=="none"){
          $(".secondCal").css("height","84");
                $(".mbBtn").css("top","0");  
                
            }else{
               $(".secondCal").css("height","390");
                $(".mbBtn").css("top","-6%"); 
            }
    });
    $(".detailBtn").click(function(){
        $(".boxDetail").css({"max-height":"inherit","height":"inherit"});
    });
    
    
/*    hover*/
    $(".category>ul>li").mouseenter(function(){
        $(this).children(".underCategory").css("display","block");
    });
    $(".ctWrap").click(function(){
        $(this).siblings(".underCategory").css("display","none");
    });
   
    
 
    
    
/*옵션 선택*/
    var $count=1;
    //옵션창 열기
    $(".optionList li").each(function(index){
        $(this).click(function(){
        $(".optionList").hide();
        sendIndex(index);
        $(".total").show();
            var $sum=0;
            for(var i=0;i<3;i++){
             $sum +=Number($(".price").eq(i).html())*Number($(".itemNum").eq(i).val());
             $(".totalPrice").html($sum.toLocaleString("ko-KR")+"<span>원</span>");
         }
        });
     //+버튼 클릭시
        $(".numPlus").eq(index).click(function(){

               $count++; $(".itemNum").eq(index).attr("value",$count); $(".itemNum").eq(Number(index+3)).attr("value",$count);
            $(".itemNum").eq(Number(index-3)).attr("value",$count);
            var $itemTotal=(Number($(".price").eq(index).html())*Number($(".itemNum").eq(index).val())).toLocaleString("ko-KR");
           console.log($itemTotal); $(".plusPrice").eq(index).html($itemTotal+"<span>원</span>"); $(".plusPrice").eq(Number(index+3)).html($itemTotal+"<span>원</span>");
            $(".plusPrice").eq(Number(index-3)).html($itemTotal+"<span>원</span>");
            var $sum=0;
            for(var i=0;i<3;i++){
             $sum +=Number($(".price").eq(i).html())*Number($(".itemNum").eq(i).val()); $(".totalPrice").html($sum.toLocaleString("ko-KR")+"<span>원</span>");
         } 
           
        });

        
       
        //-버튼 클릭시
        $(".numMinus").eq(index).click(function(){
            if($(".itemNum").eq(index).val()>1){
                $count--;
                 $(".itemNum").eq(index).attr("value",$count);
                 $(".itemNum").eq(Number(index+3)).attr("value",$count);
                 $(".itemNum").eq(index-3).attr("value",$count);
               var $itemTotal=(Number($(".price").eq(index).html())*Number($(".itemNum").eq(index).val())).toLocaleString("ko-KR");
            $(".plusPrice").eq(index).html($itemTotal+"<span>원</span>");
            $(".plusPrice").eq(Number(index+3)).html($itemTotal+"<span>원</span>");
            $(".plusPrice").eq(Number(index-3)).html($itemTotal+"<span>원</span>");
                var $sum=0;
            for(var i=0;i<3;i++){
             $sum +=Number($(".price").eq(i).html())*Number($(".itemNum").eq(i).val());
             $(".totalPrice").html($sum.toLocaleString("ko-KR")+"<span>원</span>");
         }
            }
        });
    });
    //옵션창 닫기
    $(".closeBtn").each(function(index){
        $(this).click(function(){
            closeIndex(index);
            closeIndex(Number(index+3));
            closeIndex(Number(index-3));
                        var $sum=0;
            for(var i=0;i<3;i++){
             $sum +=Number($(".price").eq(i).html())*Number($(".itemNum").eq(i).val());
             $(".totalPrice").html($sum.toLocaleString("ko-KR")+"<span>원</span>");
         }
        });
    });
    // 참고함수
    function sendIndex(e){
       $(".optionPrice").eq(e).show();
        $(".optionPrice").eq(Number(e+3)).show();
        $(".optionPrice").eq(Number(e-3)).show();
        $(".itemNum").eq(e).attr("value","1");
        $(".itemNum").eq(Number(e+3)).attr("value","1");
        $(".itemNum").eq(Number(e-3)).attr("value","1");
        var $itemPrice=($(".price").eq(e).html()*($(".itemNum").eq(e).val())).toLocaleString("ko-KR");
        console.log(e);
        console.log($(".price").eq(e).html());
        $(".plusPrice").eq(e).html($itemPrice+"<span>원<span>");
        $(".plusPrice").eq(Number(e+3)).html($itemPrice+"<span>원<span>");
        $(".plusPrice").eq(Number(e-3)).html($itemPrice+"<span>원<span>");
    }
    function closeIndex(i){
        $(".optionPrice").eq(i).hide();
        $(".optionPrice").eq(i+3).hide();
        $(".optionPrice").eq(i-3).hide();
        $(".itemNum").eq(i).attr("value","0");
        $(".itemNum").eq(Number(i+3)).attr("value","0");
        $(".itemNum").eq(Number(i-3)).attr("value","0");
    }
    
    
    
    
    
    //모바일버전
$(window).resize(function(){
    if($(window).width()<768){
    $(".homeShopImg").attr("src","http://image.gmarket.co.kr/hanbando/201802/5c75dc02-18bc-45d1-b820-bc31609b613f.png");
        $(".bannerImg").attr("src","http://image.gmarket.co.kr/service_image/2020/08/14/20200814165004551075_0_0.png");
        $(".mbBtn").toggle();
        $(".noticePlus i").click(function(){
            $(".noticePlus div").toggle();
        });
//        메뉴 스크롤 고정
        $(window).scroll(function(){
                if($(window).scrollTop()>=30){
                    $(".subNav").css("position","fixed");
                }else{$(".subNav").css("position","inherit");}
            });
    $(".detailBtn").click(function(){
        $(".boxDetail").css({"max-height":"15267","height":"12000"});
    });
        $(".secondOption .optionBtn").click(function(){
        $(".secondOption .optionList").toggle();
    });
    }
}).resize();

});

 /*이미지 클릭*/

    function imgBtn(i){
        var smallImg=document.getElementsByClassName("smallImg");
        var bigImg=document.getElementsByClassName("bigImg")[0];
        bigImg.setAttribute("src","images/mainImg"+i+".jpg");
    }

    /* Footer _모바일 */
    $(".mobInfo").click(function () {
        $(".mobFooterContent ul").toggle();
        $(".mobToggle1").toggle();
        $(".mobToggle2").toggle();
    });
