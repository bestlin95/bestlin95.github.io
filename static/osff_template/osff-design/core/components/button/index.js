


define(['jquery','util'], function($,U){

    var template = [
        'button',
    ]

    function createVNode(){

        var buttons = [] 

        var _buttons = $(`[o-template=${template[0]}]`)

        for (var i = 0; i < _buttons.length; i++) {

            var buttons_item = {},attr_name=''

            var attrs = U.getAllAttr(_buttons[i])

            for (var key in attrs) {

                attr_name = key.slice(2)

                buttons_item[attr_name]=attrs[key]
            }

            buttons.push(buttons_item)

        }

        return buttons
    }

    function creatNode(vNode){

        console.log('vNode',vNode)

        var nodes = []

        for (var i = 0; i < vNode.length; i++) {
          
            var node = {}

            node.key =  vNode[i].key

            node.type =  vNode[i].type?vNode[i].type:'full'

            node.text =  vNode[i].text?vNode[i].text:''

            node.color =  vNode[i].color?vNode[i].color:'#1890ff'

            node.icon =  vNode[i].icon?vNode[i].icon:false

            node.shape =  vNode[i].shape?vNode[i].shape:false

            node.url =  vNode[i].url?vNode[i].url:false

            node.click =  vNode[i].click?vNode[i].click:''

            nodes.push(node)
            
        }
        
        return nodes

    }

    function render(nodes){
        
        console.log('nodes',nodes)
        
        for (var i = 0; i < nodes.length; i++) {
           
            $(`[o-key=${nodes[i].key}]`).addClass('o-button')

            $(`[o-key=${nodes[i].key}]`).text(nodes[i].text)

            $(`[o-key=${nodes[i].key}]`).css({
                transition: 'all .3s ease-in-out',
                textShadow: '0 -1px 0 rgba(0,0,0,.12)',
                boxShadow: '0 2px 0 rgba(0,0,0,.045)'
            })

            if(nodes[i].type=='full'){
                $(`[o-key=${nodes[i].key}]`).css({
                    backgroundColor:nodes[i].color,
                    border: '1px solid '+nodes[i].color,
                    color:'#fff',
                })
            }
            if(nodes[i].type=='line'){
                $(`[o-key=${nodes[i].key}]`).css({
                    backgroundColor:'transparent',
                    border: '1px solid '+nodes[i].color,
                    color:nodes[i].color,
                })
            }
            if(nodes[i].type=='dashed'){
                $(`[o-key=${nodes[i].key}]`).css({
                    backgroundColor:'transparent',
                    border: '1px dashed '+nodes[i].color,
                    color:nodes[i].color,
                })
            }
            if(nodes[i].type=='disabled'){
                $(`[o-key=${nodes[i].key}]`).css({
                    'color': 'rgba(0,0,0,.25)',
                    backgroundColor: '#f5f5f5',
                    borderColor: '#d9d9d9',
                    textShadow: 'none',
                    boxShadow: 'none',
                    cursor: 'not-allowed',
                })
            }

            if(nodes[i].shape){
                var h = $(`[o-key=${nodes[i].key}]`).outerHeight()
                $(`[o-key=${nodes[i].key}]`).css({
                    'borderRadius':parseInt(h/2)+'px',
                })
            }

            if(nodes[i].icon){
                var btn_html = `<i class="iconfont ${nodes[i].icon}" style="color:#fff;font-size:18px;"></i><span style="vertical-align: text-bottom;">${nodes[i].text}</span>`
                console.log(btn_html)
                $(`[o-key=${nodes[i].key}]`).html(btn_html)
            }
            if(nodes[i].url){
                var url = nodes[i].url
                $(`[o-key=${nodes[i].key}]`).on('click',function(){
                    window.open(url)
                })   
            }else{
                if(nodes[i].click){
                    regEvent(nodes[i].key,nodes[i].click)
                }else{
                    $(`[o-key=${nodes[i].key}]`).on('click',function(){
                        $(this).toggleClass('active')
                    })
                }
            }


            

        }


    }


    function regEvent(key,onclick){
        console.log('onclick',onclick)
        $(`[o-key=${key}]`).on('click',function(e){
            var e = e || event
            window.osff.methods[onclick](e)
            $(this).toggleClass('active')
        })
    }
    
    render(creatNode(createVNode()))
    
　});

