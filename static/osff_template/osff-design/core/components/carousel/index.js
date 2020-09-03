


define(['swiper','jquery','util'], function(Swiper,$,U){

    var template = [
        'carousel',
        'carousel-slider'
    ]

    function createVNode(){

        var carousels = [] 

        var _carousels = $(`[o-template=${template[0]}]`)

        for (var i = 0; i < _carousels.length; i++) {

            var sliders = [],carousels_item = {},attr_name=''

            var attrs = U.getAllAttr(_carousels[i])

            for (var key in attrs) {

                attr_name = key.slice(2)

                carousels_item[attr_name]=attrs[key]
            }

            var _slides = $(_carousels[i]).find(`[o-template=${template[1]}]`)

            for (var j = 0; j < _slides.length; j++) {

                $(_slides[j]).addClass('swiper-slide')

                sliders.push(_slides[j].outerHTML)

            }

            carousels_item.slides = sliders

            carousels.push(carousels_item)

        }

        return carousels
    }

    function creatNode(vNode){

        console.log('vNode',vNode)

        var nodes = []

        for (var i = 0; i < vNode.length; i++) {
          
            var node = {}

            node.key =  vNode[i].key

            node.direction =  vNode[i].direction?vNode[i].direction:'horizontal'
            node.loop =  vNode[i].loop?vNode[i].loop:'false'
            node.autoplay =  vNode[i].autoplay?vNode[i].autoplay:'false'
            node.click =  vNode[i].click?vNode[i].click:''
            node.change =  vNode[i].change?vNode[i].change:''
            node.slider_num = vNode[i].slides.length
            

            var h = `<div class="swiper-container ${'swiper-container'+vNode[i].key} ${vNode[i].class}" style="${vNode[i].style?vNode[i].style:''}">
            <div class="swiper-wrapper">`

            var b = ''

            for (var j = 0; j < vNode[i].slides.length; j++) {
                b += vNode[i].slides[j]
            }


            var f = `</div>
                        ${vNode[i].pagination==='true'?'<div class="swiper-pagination swiper-pagination'+vNode[i].key +'"></div>':''}
                       
                        ${vNode[i].navigation==='true'?'<div class="swiper-button-prev swiper-button-prev'+vNode[i].key +'"></div><div class="swiper-button-next swiper-button-next'+vNode[i].key +'"></div>':''}
                       
                        ${vNode[i].scrollbar==='true'?'<div class="swiper-scrollbar swiper-scrollbar'+vNode[i].key +'"></div>':''}
                    </div>`
           
            document.documentElement.style.setProperty(`--swiper-pagination-color`, vNode[i].pagination_color?vNode[i].pagination_color:'#fff');
            document.documentElement.style.setProperty(`--swiper-navigation-color`, vNode[i].navigation_color?vNode[i].navigation_color:'#fff');
            document.documentElement.style.setProperty(`--swiper-navigation-size`, vNode[i].navigation_size?vNode[i].navigation_size:20+'px');

            node.html = h+b+f

            nodes.push(node)
            
        }
        
        return nodes

    }

    function render(nodes){
        
        console.log('nodes',nodes)
        
        for (var i = 0; i < nodes.length; i++) {
           
            $(`[o-key=${nodes[i].key}]`).html(nodes[i].html)

            regEvent(nodes[i].key,nodes[i].direction,nodes[i].loop,nodes[i].autoplay,nodes[i].slider_num,nodes[i].click,nodes[i].change)

        }

        // for (var j = 0; j < template.length; j++) {
            
        //     var a = $(`[o-template=${template[j]}]`)

        //     for (var k = 0; k < a.length; k++) {

        //         U.removeAllAttr(a[k])

        //     }
            
        // }


    }


    function regEvent(key,direction,loop,autoplay,num,onclick,onchange){
        console.log(1111)
    　　 new Swiper ('.swiper-container'+key, {
            direction: direction, // 方向切换选项
            loop: loop==='true'?true:false, // 循环模式选项
            autoplay:autoplay==='true'?true:false, //自动播放

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination'+key,
            },
            
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next'+key,
                prevEl: '.swiper-button-prev'+key,
            },
            
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar'+key,
            },
            on: {
                slideChangeTransitionStart: function(){
                    if(onchange){
                        window.osff.methods[onchange](this.activeIndex>num?1:this.activeIndex)
                    }
                    
                },
                click: function(swiper,event){
                    if(onclick){
                        window.osff.methods[onclick](this.activeIndex>num?1:this.activeIndex,event)
                    }

                },
            },
        })  
    }
    
    render(creatNode(createVNode()))
    
　});

