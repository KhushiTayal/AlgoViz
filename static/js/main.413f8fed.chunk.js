(this.webpackJsonpalgov=this.webpackJsonpalgov||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(19),r=c.n(s),i=c(7),o=(c.p,c(28),c.p+"static/media/card.370ba8db.png"),l=(c(29),c.p+"static/media/card2.5769cab2.png"),b=c.p+"static/media/search.def0d721.png",j=c.p+"static/media/sort.239e5502.png",d=c(0),u=function(){return Object(d.jsx)("div",{className:"body",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:b,className:"card-img-top",alt:"...",height:"200px"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Search Methods"}),Object(d.jsx)("p",{className:"card-text",children:"Search an element from array using different methods."}),Object(d.jsx)(i.b,{to:"/searchpage",children:Object(d.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:j,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Sorting Algorithms"}),Object(d.jsx)("p",{className:"card-text",children:"Sort array using different sorting algorithms."}),Object(d.jsx)(i.b,{to:"/sortingpage",children:Object(d.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:o,className:"card-img-top",alt:"...",height:"225px"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Backtracking"}),Object(d.jsx)("p",{className:"card-text",children:"Coming soon"}),Object(d.jsx)(i.b,{to:"/backtrackingpage",children:Object(d.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:l,className:"card-img-top",alt:"...",height:"225px"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Path Finding"}),Object(d.jsx)("p",{className:"card-text",children:"Coming soon"}),Object(d.jsx)(i.b,{to:"/graphpage",children:Object(d.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})})]})})},h=function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)("div",{className:"home2",children:[Object(d.jsx)("div",{className:"centered",children:"Algorithm Visualizer"}),Object(d.jsx)(u,{})]})})},m=c(2),p=(c(36),c(17)),g=c.n(p),x=c(23),O=c(22),f=c(13),v=c(8),N=(c(38),c(39),function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),c=t[0],a=t[1],s=[],r=Object(n.useState)(!1),i=Object(v.a)(r,2),o=i[0],l=i[1],b=c.map((function(e,t){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"arr",children:e},t)})})),j=Object(n.useState)({name:0}),u=Object(v.a)(j,2),h=u[0],m=u[1],p=function(){var e=Object(O.a)(g.a.mark((function e(t){var c,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.target,n=c.name,a=c.value,h[n]=a,m(Object(x.a)({},h));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"Searchpage",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{class:"btn btn-lg btn-primary",type:"button",disabled:o,onClick:function(){for(var e=0;e<16;e++){var t=Math.ceil(100*Math.random());s[e]=t,console.log(s[e])}s.sort((function(e,t){return e-t})),a([].concat(Object(f.a)(c),s)),l(!0)},children:"Generate Array!"}),Object(d.jsx)("button",{type:"button",class:"btn btn-secondary btn-lg",onClick:function(){return window.location.reload(!0)},children:"Reset"})]}),Object(d.jsx)("div",{className:"co",children:b}),Object(d.jsxs)("div",{class:"d-grid gap-2 col-6 mx-auto",children:[Object(d.jsx)("p",{className:"enter",children:"Enter a number "}),Object(d.jsx)("input",{type:"number",name:"name",className:"inputnum",onChange:p}),Object(d.jsx)("button",{class:"btn btn-primary",type:"button",onClick:function(){var e=0;!function t(){var n=document.getElementsByClassName("arr")[e].style;setTimeout((function(){if(c[e]==h.name)return console.log("yes"),void(n.backgroundColor="#29ff0c");n.backgroundColor="#fa5b55",n.textDecoration="line-through",e<15?(e++,t()):alert("Number not found")}),300)}(),console.log("no")},children:"Linear Search"}),Object(d.jsx)("button",{class:"btn btn-primary",type:"button",onClick:function(){var e=0,t=15,n=Math.floor((e+t)/2);!function a(){var s=document.getElementsByClassName("arr"),r=s[n].style;r.backgroundColor="yellow",setTimeout((function(){if(c[n]!=h.name){if(c[n]>h.name){for(var i=n+1;i<=t;i++)s[i].style.backgroundColor="#fa5b55",s[i].style.textDecoration="line-through";n=(e+(t=n-1))/2}else if(c[n]<h.name){for(var o=e;o<n;o++)s[o].style.backgroundColor="#fa5b55",s[o].style.textDecoration="line-through";e=n+1,n=Math.floor((e+t)/2)}e<=t?a():alert("Number not found")}else r.backgroundColor="#29ff0c"}),1e3)}()},children:"Binary Search"})]})]})}),y=(c(40),function(e,t,c,n){for(var a=!1,s=0;s<t;s++){for(var r=t-s-1,i=0;i<r;i++){var o=i+1;if(c.push([i,o]),c.push([i,o]),n[i]>n[i+1]){var l=n[i];n[i]=n[i+1],n[i+1]=l,c.push([i,n[i]]),a=!0}else c.push([i,n[i]])}if(0==a)break}}),k=function(e){var t=[],c=e.slice();return console.log(c),y(e,250,t,c),console.log(c),t},C=function(e,t){var c,n,a;for(c=0;c<t-1;c++)for(a=c,n=c+1;n<t;n++)if(e[n]<e[a]){a=n;var s=e[n];e[n]=e[a],e[a]=s}},S=function(e){console.log(e),console.log(1234),C(e,55),console.log(e)};function w(e){var t=[];if(e.length<=1)return e;var c=e.slice();return M(e,0,e.length-1,c,t),t}function M(e,t,c,n,a){if(t!==c){var s=Math.floor((t+c)/2);M(n,t,s,e,a),M(n,s+1,c,e,a),function(e,t,c,n,a,s){var r=t,i=t,o=c+1;for(;i<=c&&o<=n;)s.push([i,o]),s.push([i,o]),a[i]<=a[o]?(s.push([r,a[i]]),e[r++]=a[i++]):(s.push([r,a[o]]),e[r++]=a[o++]);for(;i<=c;)s.push([i,i]),s.push([i,i]),s.push([r,a[i]]),e[r++]=a[i++];for(;o<=n;)s.push([o,o]),s.push([o,o]),s.push([r,a[o]]),e[r++]=a[o++]}(e,t,s,c,n,a)}}var B=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),c=t[0],a=t[1],s=[],r=Object(n.useState)(!1),i=Object(v.a)(r,2),o=i[0],l=i[1],b=c.map((function(e,t){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"bars",style:{height:"".concat(e,"px")}},t)})}));return Object(d.jsxs)("div",{className:"sortingpage",children:[Object(d.jsx)("h1",{className:"heading",children:"Sorting Visualiser"}),Object(d.jsx)("div",{children:b}),Object(d.jsxs)("div",{className:"mybtns",children:[Object(d.jsx)("button",{type:"button",class:"btn btn-outline-primary",onClick:function(){for(var e=w(c),t=function(t){var c=document.getElementsByClassName("bars");if(t%3!==2){var n=Object(v.a)(e[t],2),a=n[0],s=n[1],r=c[a].style,i=c[s].style,o=t%3===0?"blue":"hotpink";setTimeout((function(){r.backgroundColor=o,i.backgroundColor=o}),5*t)}else setTimeout((function(){var n=Object(v.a)(e[t],2),a=n[0],s=n[1];c[a].style.height="".concat(s,"px")}),5*t)},n=0;n<e.length;n++)t(n)},children:"Merge Sort"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(){for(var e=k(c),t=function(t){var c=document.getElementsByClassName("bars");if(t%3!==2){var n=Object(v.a)(e[t],2),a=n[0],s=n[1],r=c[a].style,i=c[s].style,o=t%3===0?"blue":"hotpink";setTimeout((function(){r.backgroundColor=o,i.backgroundColor=o}),.1*t)}else setTimeout((function(){var n=Object(v.a)(e[t],2),a=n[0],s=n[1];c[a].style.height="".concat(s,"px")}),.1*t)},n=0;n<e.length;n++)t(n)},children:"Bubble Sort"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-success",onClick:function(){S(c);for(var e=[],t=0;t<55;t++)console.log(c[t]),e[t]=c[t];a([].concat(s,e))},children:"Selection Sort"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-danger",children:"Insertion Sort"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-warning",children:"Quick Sort"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-info",onClick:function(){return window.location.reload(!1)},children:"RESET"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-light",children:"Light"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-dark",disabled:o,onClick:function(){for(var e=0;e<250;e++){var t=Math.ceil(400*Math.random());s[e]=t}a([].concat(Object(f.a)(c),s)),l(!0)},children:"Generate Array!"})]})]})},E=function(){return Object(d.jsx)("div",{className:"graphpage",children:Object(d.jsx)("h1",{children:"Graph page"})})},T=function(){return Object(d.jsx)("div",{className:"backtrackingpage",children:Object(d.jsx)("h1",{children:"Backtrackingpage"})})},V=(c(41),c.p,function(){return Object(d.jsx)("div",{className:"nv",children:Object(d.jsx)("nav",{class:"navbar navbar-light",style:{backgroundColor:"#8cf7f7"},children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("a",{class:"navbar-brand",children:"Home"})}),Object(d.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{class:"navbar-toggler-icon"})}),Object(d.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsx)("ul",{class:"navbar-nav",children:Object(d.jsx)("li",{class:"nav-item"})})})]})})})});var z=function(){return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(V,{}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/",exact:!0,component:h}),Object(d.jsx)(m.a,{path:"/searchpage",exact:!0,component:N}),Object(d.jsx)(m.a,{path:"/sortingpage",exact:!0,component:B}),Object(d.jsx)(m.a,{path:"/graphpage",exact:!0,component:E}),Object(d.jsx)(m.a,{path:"/backtrackingpage",exact:!0,component:T})]})]})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{basename:"/AlgoViz",children:Object(d.jsx)(z,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.413f8fed.chunk.js.map