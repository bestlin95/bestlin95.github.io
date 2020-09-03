define(['jquery'],function($){

    var util = {
        /**

        * 获取目标dom上的所有属性.

        * @param {domObj} el - 目标dom对象.

        * @return {Object} 所有属性和值.

        */
        getAllAttr:function (el){
            var o = {}
            $.each(el.attributes, function() {
                if(this.specified&&/^o-.*$/.test(this.name)) {
                    o[this.name] = this.value
                }
            });

            return o
        },

        /**

        * 删除目标dom上的所有属性.

        * @param {domObj} el - 目标dom对象.

        */
       removeAllAttr:function (el){
            $.each(el.attributes, function() {
                if(this.specified&&/^o-.*$/.test(this.name)) {
                    $(el).removeAttr(this.name)
                }
            });
        },
        

    }

    return util

});

