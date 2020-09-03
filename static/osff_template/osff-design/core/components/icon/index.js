


define(['jquery','util'], function($,U){

    var template = [
        'icon',
    ]

    function createVNode(){

        var icons = [] 

        var _icons = $(`[o-template=${template[0]}]`)

        for (var i = 0; i < _icons.length; i++) {

            var icons_item = {},attr_name=''

            var attrs = U.getAllAttr(_icons[i])

            for (var key in attrs) {

                attr_name = key.slice(2)

                icons_item[attr_name]=attrs[key]
            }

            icons.push(icons_item)

        }

        return icons
    }

    function creatNode(vNode){

        console.log('vNode',vNode)

        var nodes = []

        for (var i = 0; i < vNode.length; i++) {
          
            var node = {}

            node.key =  vNode[i].key

            node.size =  vNode[i].size?vNode[i].size:'16'

            node.color =  vNode[i].color?vNode[i].color:'#fff'

            node.click =  vNode[i].click?vNode[i].click:''

            node.class = `iconfont ${vNode[i].type}`

            nodes.push(node)
            
        }
        
        return nodes

    }

    function render(nodes){
        
        console.log('nodes',nodes)
        
        for (var i = 0; i < nodes.length; i++) {
           
            $(`[o-key=${nodes[i].key}]`).addClass(nodes[i].class)

            $(`[o-key=${nodes[i].key}]`).css({
                fontSize:nodes[i].size+'px',
                color:nodes[i].color,
                transition: 'all .3s ease-in-out'
            })

            if(nodes[i].click){
                regEvent(nodes[i].key,nodes[i].click)
            }else{
                $(`[o-key=${nodes[i].key}]`).on('click',function(){
                    $(this).toggleClass('active')
                })
            }

        }


    }


    function regEvent(key,onClick){
        console.log('onclick',onClick)
        
        $(`[o-key=${key}]`).on('click',function(e){
            var e = e || event
            $(this).toggleClass('active')
            window.osff.methods[onClick](e)
        })
    }
    
    render(creatNode(createVNode()))
    
　});

