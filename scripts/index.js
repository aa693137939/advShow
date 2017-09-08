var hasDelay = true,
    height = 0,
    compatible = false,
    count = 0,
    hide = false;

setMiddle();
function setMiddle(){
    var box = $(".page");
    var leftPos =  -(1920-box.width())/2 + "px";
    $(".background,.main").css("left",leftPos);
}
//banner图片在调整窗口时剧中显示
$(window).resize(function(){
    setMiddle();
    height = $("body").height();
});
$(function(){
    var adv1=$(".main .index3 .vid-wrapper #adv1")[0];
    var adv2=$(".main .index7 .adv-wrapper #adv2")[0];
    var vid1=$(".main .index7 .vid-wrapper #vid1")[0];
    jumpTime=15;
    timer=[];
    var $dom;
    var changeFlag=0;
    var t = null;
    var setJump=function(){
        if(jumpTime>0){
            jumpTime--;
            $dom.text('跳过('+jumpTime+'s)');
            t=setTimeout(setJump,1000);
        }
    };
    $(".main .index1").on('click','.indexBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".background .reloadBtn").removeClass('hide');
        $(".main .index2").removeClass('hide');
        $(".main .index1").addClass('hide');
        setTimeout(function(){
            $(".main .index3 .tv_wrapper div.active").removeClass('active');
            $(".main .index3").removeClass('hide');
            $(".main .index8").removeClass('hide');
            $(".main .index2").addClass('hide');
            adv1.play();
        },5000);
    });
    $(".main .index3").on('click','.jumpBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        adv1.pause();
        // $(".main .index3 .tv_wrapper div.active").removeClass('active');
        // $(".main .index3 .tv_wrapper").removeClass('hide');
        // $(".main .index3 .vid-wrapper").addClass('hide');
    });
    $(".main .tv_wrapper .nav").on('click','.nav1', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".main .index3 .tv_wrapper div.active").removeClass('active');
        $(".main .index8 .banner_wrapper .banner").removeClass('left').addClass('right');
        $(".main .index3").removeClass('hide');
        $(".main .index5").addClass('hide');
    });
    $(".main .tv_wrapper .nav").on('click','.nav2', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".main .index5 .tv_wrapper div.active").removeClass('active');
        $(".main .index8 .banner_wrapper .banner").removeClass('right').addClass('left');
        $(".main .index5").removeClass('hide');
        $(".main .index3").addClass('hide');
    });
    $(".main .index3 .tv_wrapper").on('click','.search', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".main .index8").addClass('hide');
        $(".main .index4").removeClass('hide');
        $(".main .index3").addClass('hide');
    });
    $(".main .index4 .tv_wrapper").on('click','.backBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".main .index3").removeClass('hide');
        $(".main .index8").removeClass('hide');
        $(".main .index4").addClass('hide');
    });
    $(".main .index3 .tv_wrapper").on('click','.KKTV', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".main .index6 .tv_wrapper div.active").removeClass('active');
        $(".main .index8").addClass('hide');
        $(".main .index6").removeClass('hide');
        $(".main .index3").addClass('hide');
        $(".main .index6 .adv-wrapper").removeClass('hide');
        $(".main .index6 .tv_wrapper").addClass('hide');
        jumpTime=6;
        $dom=$(".main .index6 .jumpBtn");
        setJump();
        t6=setTimeout(function(){
            $(".main .index6 .tv_wrapper div.active").removeClass('active');
            $(".main .index6 .tv_wrapper").removeClass('hide');
            $(".main .index6 .adv-wrapper").addClass('needHide');
            setTimeout(function(){
                $(".main .index6 .adv-wrapper").addClass('hide');
            },450);
        },6000);
    });
    $(".main .index6").on('click','.jumpBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        clearTimeout(t6);
        $(".main .index6 .tv_wrapper div.active").removeClass('active');
        $(".main .index6 .tv_wrapper").removeClass('hide');
        $(".main .index6 .adv-wrapper").addClass('needHide');
        setTimeout(function(){
            $(".main .index6 .adv-wrapper").addClass('hide');
        },450);
    });
    $(".main .index6 .tv_wrapper").on('click','.backBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".needHide").removeClass('needHide');
        $(".main .index3 .tv_wrapper div.active").removeClass('active');
        $(".main .index8").removeClass('hide');
        $(".main .index3").removeClass('hide');
        $(".main .index6").addClass('hide');
    });
    $(".main .index6 .tv_wrapper").on('click','.openVideo', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".main .index7").removeClass('hide');
        $(".main .index6").addClass('hide');
    });
    $(".main .index7 .tv_wrapper").on('click','.backBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".needHide").removeClass('needHide');
        $(".main .index6").removeClass('hide');
        $(".main .index7").addClass('hide');
    });
    $(".main .index7 .tv_wrapper").on('click','.palyTV', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".main .index7 .tv_wrapper").addClass('hide');
        $(".main .index7 .adv-wrapper").removeClass('hide');
        $(".main .index7 .vid-wrapper .adv_1").addClass('hide');
        $(".main .index7 .vid-wrapper .adv_2").addClass('hide');
        $(".main .index7 .vid-wrapper .adv_2").removeClass('change');
        $(".main .index7 .vid-wrapper .adv_3").addClass('hide');
        $(".main .index7 .vid-wrapper .adv_4").addClass('hide');
        $(".main .index7 .vid-wrapper .pauseBtn").addClass('hide');
        $(".main .index7 .vid-wrapper .playBtn").addClass('hide');
        $(".main .index7 .vid-wrapper .rePlayBtn").addClass('hide');
        $(".main .index7 .vid-wrapper .backBtn").addClass('hide');
        clearAllTimer();
        adv2.play();
        // adv2.addEventListener('loadedmetadata', function() {
        //     adv2.currentTime = 0;
        // }, false);
        // adv2.currentTime=0;
    });
    $(".main .index7 .adv-wrapper").on('click','.jumpBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        adv2.pause();
    });
    $(".main .index7 .vid-wrapper").on('click','.adv_2', function(event) {
        event.preventDefault();
        /* Act on the event */
        changeFlag=1;
        $(".main .index7 .vid-wrapper .adv_2 .showChange").removeClass('hide');
        setTimeout(function(){
            $(".main .index7 .vid-wrapper .adv_2").addClass('change');
        },200);
    });
    $(".main .index7 .vid-wrapper").on('click','.pauseBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        vid1.pause();
        $(".main .index7 .vid-wrapper .pauseBtn").addClass('hide');
    });
    $(".main .index7 .vid-wrapper").on('click','.playBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".main .index7 .vid-wrapper .pauseBtn").removeClass('hide');
        $(".main .index7 .vid-wrapper .backBtn").removeClass('hide');
        $(".main .index7 .vid-wrapper .adv_4").addClass('hide');
        $(".main .index7 .vid-wrapper .playBtn").addClass('hide');
        vid1.play();
    });
    $(".main .index7 .vid-wrapper").on('click','.rePlayBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".main .index7 .vid-wrapper .rePlayBtn").addClass('hide');
        vid1.play();
        vid1.currentTime=0;
        vid1.volume = 0.5;
        showAdv();
    });
    $(".main .index7 .vid-wrapper").on('click','.backBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".needHide").removeClass('needHide');
        vid1.pause();
        adv2.currentTime = 0;
        vid1.currentTime=0;
        vid1.volume = 0.5;
        clearAllTimer();
        $(".main .index7 .tv_wrapper").removeClass('hide');
        $(".main .index7 .vid-wrapper").addClass('hide');
        $(".main .index7 .vid-wrapper .adv_1").addClass('hide');
        $(".main .index7 .vid-wrapper .adv_2").addClass('hide');
        $(".main .index7 .vid-wrapper .adv_2").removeClass('change');
        $(".main .index7 .vid-wrapper .adv_3").addClass('hide');
        $(".main .index7 .vid-wrapper .adv_4").addClass('hide');
        $(".main .index7 .vid-wrapper .playBtn").addClass('hide');
        $(".main .index7 .vid-wrapper .rePlayBtn").addClass('hide');
        $(".main .index7 .vid-wrapper .backBtn").addClass('hide');
    });
    $(".background").on('click','.reloadBtn', function(event) {
        event.preventDefault();
        /* Act on the event */
        location.reload();
    });

    // adv1.addEventListener("playing",function(){
    //     jumpTime=16;
    //     $dom=$(".main .index3 .jumpBtn");
    //     clearTimeout(t);
    //     setJump();
    // },false);

    adv1.addEventListener("pause",function(){
        $(".main .index3 .tv_wrapper div.active").removeClass('active');
        $(".main .index3 .tv_wrapper").removeClass('hide');
        $(".main .index3 .vid-wrapper").addClass('needHide');
        setTimeout(function(){
            $(".main .index3 .vid-wrapper").addClass('hide');
        },500);
    },false);
    adv1.addEventListener("ended",function(){
        $(".main .index3 .tv_wrapper div.active").removeClass('active');
        $(".main .index3 .tv_wrapper").removeClass('hide');
        $(".main .index3 .vid-wrapper").addClass('needHide');
        setTimeout(function(){
            $(".main .index3 .vid-wrapper").addClass('hide');
        },500);
    },false);

    // adv2.addEventListener("playing",function(){
    //     jumpTime=16;
    //     $dom=$(".main .index7 .jumpBtn");
    //     clearTimeout(t);
    //     setJump();
    // },false);

    adv2.addEventListener("pause",function(){
        vid1.currentTime=0;
        vid1.volume = 0.5;
        vid1.play();
        $(".main .index7 .vid-wrapper").removeClass('hide');
        $(".main .index7 .adv-wrapper").addClass('hide');
        showAdv();
    },false);
    adv2.addEventListener("ended",function(){
        vid1.currentTime=0;
        vid1.volume = 0.5;
        vid1.play();
        $(".main .index7 .vid-wrapper").removeClass('hide');
        $(".main .index7 .adv-wrapper").addClass('hide');
        showAdv();
    },false);
    
    vid1.addEventListener("pause",function(){
        $(".main .index7 .vid-wrapper .adv_4").removeClass('hide');
        $(".main .index7 .vid-wrapper .playBtn").removeClass('hide');
        $(".main .index7 .vid-wrapper .backBtn").removeClass('hide');
    },false);
    vid1.addEventListener("ended",function(){
        $(".main .index7 .vid-wrapper .adv_4").addClass('hide');
        $(".main .index7 .vid-wrapper .playBtn").addClass('hide');
        $(".main .index7 .vid-wrapper .pauseBtn").addClass('hide');
        $(".main .index7 .vid-wrapper .rePlayBtn").removeClass('hide');
        $(".main .index7 .vid-wrapper .backBtn").removeClass('hide');
    },false);

});
function showAdv(){
    changeFlag=0;
    $(".main .index7 .vid-wrapper .adv_3 .sound").removeClass('add1');
    $(".main .index7 .vid-wrapper .adv_3 .sound").removeClass('add2');
    $(".main .index7 .vid-wrapper .adv_2").removeClass('change');
    $(".main .index7 .vid-wrapper .adv_2 .showChange").addClass('hide');
    timer=[];
    timer[0]=setTimeout(function(){
        $(".main .index7 .vid-wrapper .adv_1").removeClass('hide');
    },5000);
    timer[1]=setTimeout(function(){
        $(".main .index7 .vid-wrapper .adv_1").addClass('hide');
    },12000);
    timer[2]=setTimeout(function(){
        $(".main .index7 .vid-wrapper .adv_2").removeClass('hide');
    },16000);
    timer[3]=setTimeout(function(){
        if(changeFlag != 1){
            $(".main .index7 .vid-wrapper .adv_2 .showChange").removeClass('hide');
            setTimeout(function(){
                $(".main .index7 .vid-wrapper .adv_2").addClass('change');
            },200);
        }
    },25000);
    timer[4]=setTimeout(function(){
        $(".main .index7 .vid-wrapper .adv_2").addClass('hide');
    },30000);
    timer[5]=setTimeout(function(){
        $(".main .index7 .vid-wrapper .adv_3").removeClass('hide');
    },36000);
    timer[6]=setTimeout(function(){
        $(".main .index7 .vid-wrapper .adv_3 .sound").addClass('add1');
        vid1.volume = 0.7;
    },38000);
    timer[7]=setTimeout(function(){
        $(".main .index7 .vid-wrapper .adv_3 .sound").removeClass('add1');
        $(".main .index7 .vid-wrapper .adv_3 .sound").addClass('add2');
        vid1.volume = 0.9;
    },40000);
    timer[8]=setTimeout(function(){
        $(".main .index7 .vid-wrapper .adv_3").addClass('hide');
    },42000);
    timer[9]=setTimeout(function(){
        $(".main .index7 .vid-wrapper .pauseBtn").removeClass('hide');
    },50000);
}
function clearAllTimer(){
    for(var i in timer){
        clearTimeout(timer[i]);
    }
}
