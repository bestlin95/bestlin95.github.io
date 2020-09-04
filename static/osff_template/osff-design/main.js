
require.config({
    baseUrl: "/static/osff_template/osff-design",
    paths: {
        "jquery": "libs/jquery/jquery.min",
        'util':"core/scripts/util",
        "swiper": "libs/swiper/swiper-bundle.min",
        'carousel':"core/components/carousel/index",
        'icon':"core/components/icon/index",
        'button':"core/components/button/index",
        'img':"core/components/img/index",
        'toTop':"core/components/toTop/index",
    },
    shim: {
        'swiper':{
            exports: 'Swiper'
        }
    }
});

require(
    [
    'jquery',
    'util',
    'swiper',
    'carousel',
    'icon',
    'button',
    'img',
    'toTop'
    ], 
    function (
    $,
    U,
    Swiper,
    carousel,
    icon,
    button,
    img,
    toTop
    ){

    // if(window.osff){
    //     window.osff.scrollEventList = []
    // }else{
    //     window.osff = {}
    //     window.osff.scrollEventList = []
    // }

    // function onScroll(){

    //     if(window.osff.scrollEventList.length>0){

    //         window.osff.scrollEventList.forEach(fn => {
    //             fn()
    //         });

    //     }

    // }

    // $(window).scroll(onScroll)
        
});
