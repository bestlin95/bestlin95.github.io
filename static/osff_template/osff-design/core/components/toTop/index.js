


define(['jquery','util'], function($,U){

    var template = [
        'toTop',
    ]

    function createVNode(){

        var toTops = [] 

        var _toTops = $(`[o-template=${template[0]}]`)

        for (var i = 0; i < _toTops.length; i++) {

            var toTops_item = {},attr_name=''

            var attrs = U.getAllAttr(_toTops[i])

            for (var key in attrs) {

                attr_name = key.slice(2)

                toTops_item[attr_name]=attrs[key]
            }

            toTops.push(toTops_item)

        }

        return toTops
    }

    function creatNode(vNode){

        console.log('vNode',vNode)

        var nodes = []

        for (var i = 0; i < vNode.length; i++) {
          
            var node = {}
            
            node.visibilityHeight =  vNode[i].visibilityHeight?vNode[i].visibilityHeight:'100'

            node.target =  vNode[i].target?vNode[i].target:'html,body'

            nodes.push(node)
            
        }
        
        return nodes

    }

    function render(nodes){
        
        console.log('nodes',nodes)
        var dom = $(`[o-template=${template[0]}]`)
        
        for (var i = 0; i < nodes.length; i++) {
           
            $(dom[i]).addClass('o-toTop')
            var el = nodes[i].target
            $(dom[i]).on('click',function(){
                console.log(el)
                $(el).animate({
                    scrollTop: 0
                },500);
            })

            $(window).scroll([el,$(dom[i]),nodes[i].visibilityHeight],onScroll);

        }

        

    }

    
    function onScroll (e){

        if ($(e.data[0]).scrollTop() > e.data[2]) {

            e.data[1].fadeIn(200);
          } else {
            e.data[1].fadeOut(200);
          }
    }
    
    render(creatNode(createVNode()))

    
    
　});

