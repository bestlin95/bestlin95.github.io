
require.config({
    baseUrl: "/static/osff_template/osff-design",
    paths: {
        "jquery": "libs/jquery/jquery.min",
        'util':"core/scripts/util",
        "swiper": "libs/swiper/swiper-bundle.min",
        'carousel':"core/components/carousel/index",
        'icon':"core/components/icon/index",
        'button':"core/components/button/index",
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
    'button'
    ], 
    function (
    $,
    U,
    Swiper,
    carousel,
    icon,
    button
    ){
        
});
