


define(['jquery','util'], function($,U){

    var template = [
        'img',
    ]

    var $window = $(window);

    var lazyImgs = []

    function createVNode(){

        var imgs = [] 

        var _imgs = $(`[o-template=${template[0]}]`)

        for (var i = 0; i < _imgs.length; i++) {

            var imgs_item = {},attr_name=''

            var attrs = U.getAllAttr(_imgs[i])

            for (var key in attrs) {

                attr_name = key.slice(2)

                imgs_item[attr_name]=attrs[key]
            }

            imgs.push(imgs_item)

        }

        return imgs
    }

    function creatNode(vNode){

        console.log('vNode',vNode)

        var nodes = []

        for (var i = 0; i < vNode.length; i++) {
          
            var node = {}

            node.loading =  vNode[i].loading?vNode[i].loading:'../../osff-design/core/components/img/loading.gif' 
            
            node.lazyload =  vNode[i].lazyload?vNode[i].lazyload:false

            node.border =  vNode[i].border?vNode[i].border:false

            node.url =  vNode[i].url?vNode[i].url:false

            node.src =  vNode[i].src?vNode[i].src:'../../osff-design/core/components/img/default.png' 

            node.click =  vNode[i].click?vNode[i].click:''

            nodes.push(node)
            
        }
        
        return nodes

    }

    function render(nodes){
        
        console.log('nodes',nodes)
        var dom = $(`[o-template=${template[0]}]`)
        
        for (var i = 0; i < nodes.length; i++) {
           
            $(dom[i]).addClass('o-img')

            if(nodes[i].lazyload){

                $(dom[i]).attr('src',nodes[i].loading)

                var lazyImg_item = {
                    el : $(dom[i]),
                    src: nodes[i].src,
                }

                lazyImgs.push(lazyImg_item)

            }else{
                $(dom[i]).attr('src',nodes[i].src)
            }

            if(nodes[i].border){
                $(dom[i]).css({
                    border: '2px solid rgba(0,0,0,.045)'
                })
            }

            if(nodes[i].url){
                var url = nodes[i].url
               $(dom[i]).on('click',function(){
                    window.open(url)
                })   
            }else{
                if(nodes[i].click){
                    console.log(11111)
                    regEvent($(dom[i]),nodes[i].click)
                }else{
                   $(dom[i]).on('click',function(){
                        $(this).toggleClass('active')
                    })
                }
            }

        }

        $window.scroll(onScroll);
                // 手动触发一次:
        onScroll();

    }

    
    function onScroll (){
        // console.log(1)
        var wtop = $window.scrollTop();
        // 判断是否还有未加载的img:
        if (lazyImgs.length > 0) {
            // 获取可视区域高度:
            var wheight = $window.height();

            // 存放待删除的索引:
            var loadedIndex = [];
            // 循环处理数组的每个img元素:
            lazyImgs.forEach(function (item, index) {
                // 判断是否在可视范围内:
                if (item.el.offset().top - wtop < wheight) {
                    // 设置src属性:
                    item.el.attr('src', item.src);
                    // 添加到待删除数组:
                    loadedIndex.unshift(index);
                }
            });
            loadedIndex.forEach(function (item,index) {
                lazyImgs.splice(index, 1);
            });
        }
    }

    function regEvent(el,onclick){
        console.log('onclick',onclick)
        el.on('click',function(e){
            var e = e || event
            window.osff.methods[onclick](e)
            $(this).toggleClass('active')
        })
    }
    
    render(creatNode(createVNode()))

    
    
　});

