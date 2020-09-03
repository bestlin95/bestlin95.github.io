(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bdc7a46"],{"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},2402:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h2",[t._v("快速上手")]),n("p",[t._v("Osff Design 致力于提供给程序员愉悦的开发体验。")]),n("h3",{staticStyle:{margin:"50px 0 20px"}},[t._v("第一步：获取Osff Design")]),n("a-card",{staticStyle:{"margin-top":"20px"},attrs:{title:"源码下载"}},[n("a-list",{attrs:{"item-layout":"horizontal",bordered:"","data-source":t.version},scopedSlots:t._u([{key:"renderItem",fn:function(e,r){return n("a-list-item",{},[n("a",{attrs:{slot:"actions",href:e.file},slot:"actions"},[t._v("下载")]),n("a-list-item-meta",{attrs:{description:e.desc}},[n("h3",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])],1)}}])})],1),n("h3",{staticStyle:{margin:"50px 0 20px"}},[t._v("第二步：创建项目根目录")]),n("p",[t._v("将下载的 osff-design 文件夹放入项目根目录")]),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"codeView"},[n("pre",[n("code",{domProps:{innerHTML:t._s(t.folder)}})])]),n("h3",{staticStyle:{margin:"50px 0 20px"}},[t._v("第三部步：页面引入")]),t._m(0),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"codeView"},[n("pre",[n("code",{domProps:{innerHTML:t._s(t.template.code)}})])]),n("h3",{staticStyle:{margin:"50px 0 20px"}},[t._v("导入完成")]),n("p",[t._v("如此简单，现在就去体验一下吧")])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"action"},[n("span"),n("span",{staticStyle:{color:"#999"}},[t._v("HTML")])])}],a=n("2f14"),c=[{title:"1.0.0",desc:"开发版本",file:"https://github.com/bestlin95/osff-design/archive/master.zip"}],s="\n/*\n    your-project------------------------------------------------你的项目根目录\n        osff-design---------------------------------------------Osff Design源码目录\n*/\n\n",o=a["a"].htmlEncode('\n    <link rel="stylesheet" href="./osff-design/styles/index.css">\n\n    &lt;script src="./osff-design/require.js" defer async="true" data-main="./osff-design/main.js"&gt;&lt;/script&gt;\n\n'),l="",u={data:function(){return{version:c,folder:s,template:{code:o,copy:l}}},created:function(){},methods:{copySuccess:function(){this.$message.success("复制成功")},onError:function(){this.$message.error("复制失败")}}},f=u,d=n("2877"),p=Object(d["a"])(f,r,i,!1,null,null,null);e["default"]=p.exports},"2f14":function(t,e,n){"use strict";n("d3b7"),n("ac1f"),n("25f0"),n("5319");var r={createRandomId:function(){return(1e7*Math.random()).toString(16).substr(0,4)+"-"+(new Date).getTime()+"-"+Math.random().toString().substr(2,5)},htmlEncode:function(t){var e=/<|>|-/g;return t=t.replace(e,(function(t){return"<"==t?"&lt;":"-"==t?"&#45;":"&gt;"})),t}};e["a"]=r},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("7b0b"),c=n("50c4"),s=n("a691"),o=n("1d80"),l=n("8aa5"),u=n("14c3"),f=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,m=x?"$":"$0";return[function(n,r){var i=o(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!x&&E||"string"===typeof r&&-1===r.indexOf(m)){var a=n(e,t,this,r);if(a.done)return a.value}var o=i(t),p=String(this),v="function"===typeof r;v||(r=String(r));var g=o.global;if(g){var y=o.unicode;o.lastIndex=0}var S=[];while(1){var b=u(o,p);if(null===b)break;if(S.push(b),!g)break;var R=String(b[0]);""===R&&(o.lastIndex=l(p,c(o.lastIndex),y))}for(var I="",$=0,T=0;T<S.length;T++){b=S[T];for(var w=String(b[0]),A=f(d(s(b.index),p.length),0),P=[],C=1;C<b.length;C++)P.push(h(b[C]));var U=b.groups;if(v){var O=[w].concat(P,A,p);void 0!==U&&O.push(U);var D=String(r.apply(void 0,O))}else D=_(w,p,A,P,U,r);A>=$&&(I+=p.slice($,A)+D,$=A+w.length)}return I+p.slice($)}];function _(t,n,r,i,c,s){var o=r+t.length,l=i.length,u=g;return void 0!==c&&(c=a(c),u=v),e.call(s,u,(function(e,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(o);case"<":s=c[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var f=p(u/10);return 0===f?e:f<=l?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):e}s=i[u-1]}return void 0===s?"":s}))}}))},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,c,s=String(i(e)),o=r(n),l=s.length;return o<0||o>=l?t?"":void 0:(a=s.charCodeAt(o),a<55296||a>56319||o+1===l||(c=s.charCodeAt(o+1))<56320||c>57343?t?s.charAt(o):a:t?s.slice(o,o+2):c-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,s=a,o=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||l;f&&(s=function(t){var e,n,i,s,f=this,d=l&&f.sticky,p=r.call(f),v=f.source,g=0,h=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),n=new RegExp("^(?:"+v+")",p)),u&&(n=new RegExp("^"+v+"$(?!\\s)",p)),o&&(e=f.lastIndex),i=a.call(d?n:f,h),d?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:o&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),u&&i&&i.length>1&&c.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),t.exports=s},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),c=n("9263"),s=n("9112"),o=a("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=a(t),g=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),h=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!g||!h||"replace"===t&&(!l||!u||d)||"split"===t&&!p){var x=/./[v],E=n(v,""[t],(function(t,e,n,r,i){return e.exec===c?g&&!i?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),m=E[0],_=E[1];r(String.prototype,t,m),r(RegExp.prototype,v,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}f&&s(RegExp.prototype[v],"sham",!0)}}}]);
//# sourceMappingURL=chunk-5bdc7a46.8cabe69b.js.map