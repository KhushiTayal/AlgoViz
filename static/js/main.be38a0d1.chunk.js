(this.webpackJsonpalgov=this.webpackJsonpalgov||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(16),r=c.n(s),i=(c.p,c(25),c.p+"static/media/card.370ba8db.png"),o=(c(26),c.p,c(6)),l=c.p+"static/media/search.def0d721.png",b=c.p+"static/media/sort.239e5502.png",j=c(0),d=function(){return Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:l,className:"card-img-top",alt:"...",height:"200px"}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:"Search Methods"}),Object(j.jsx)("p",{className:"card-text",children:"Search an element from array using different methods."}),Object(j.jsx)(o.b,{to:"/searchpage",children:Object(j.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:b,className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:"Sorting Algorithms"}),Object(j.jsx)("p",{className:"card-text",children:"Sort array using different sorting algorithms."}),Object(j.jsx)(o.b,{to:"/sortingpage",children:Object(j.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:i,className:"card-img-top",alt:"...",height:"225px"}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:"Backtracking"}),Object(j.jsx)("p",{className:"card-text",children:"Coming soon"}),Object(j.jsx)(o.b,{to:"/backtrackingpage",children:Object(j.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:"...",className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:"Path Finding"}),Object(j.jsx)("p",{className:"card-text",children:"Coming soon"}),Object(j.jsx)(o.b,{to:"/graphpage",children:Object(j.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})})]})})},u=function(){return Object(j.jsx)("div",{className:"home",children:Object(j.jsxs)("div",{className:"home2",children:[Object(j.jsx)("div",{className:"centered",children:"Algorithm Visualizer"}),Object(j.jsx)(d,{})]})})},h=c(2),m=(c(36),c(15)),p=c.n(m),g=c(20),x=c(19),O=c(10),v=c(5),f=(c(38),c(39),function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),c=t[0],a=t[1],s=[],r=Object(n.useState)(!1),i=Object(v.a)(r,2),o=i[0],l=i[1],b=c.map((function(e,t){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"arr",children:e},t)})})),d=Object(n.useState)({name:0}),u=Object(v.a)(d,2),h=u[0],m=u[1],f=function(){var e=Object(x.a)(p.a.mark((function e(t){var c,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.target,n=c.name,a=c.value,h[n]=a,m(Object(g.a)({},h));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"Searchpage",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{class:"btn btn-lg btn-primary",type:"button",disabled:o,onClick:function(){for(var e=0;e<16;e++){var t=Math.ceil(100*Math.random());s[e]=t,console.log(s[e])}s.sort((function(e,t){return e-t})),a([].concat(Object(O.a)(c),s)),l(!0)},children:"Generate Array!"}),Object(j.jsx)("button",{type:"button",class:"btn btn-secondary btn-lg",onClick:function(){return window.location.reload(!1)},children:"Reset"})]}),Object(j.jsx)("div",{className:"co",children:b}),Object(j.jsxs)("div",{class:"d-grid gap-2 col-6 mx-auto",children:[Object(j.jsx)("p",{className:"enter",children:"Enter a number "}),Object(j.jsx)("input",{type:"number",name:"name",className:"inputnum",onChange:f}),Object(j.jsx)("button",{class:"btn btn-primary",type:"button",onClick:function(){var e=0;!function t(){var n=document.getElementsByClassName("arr")[e].style;setTimeout((function(){if(c[e]==h.name)return console.log("yes"),void(n.backgroundColor="#29ff0c");n.backgroundColor="#fa5b55",e++,t()}),300)}(),console.log("no")},children:"Linear Search"}),Object(j.jsx)("button",{class:"btn btn-primary",type:"button",onClick:function(){var e=0,t=15,n=Math.floor((e+t)/2);!function a(){var s=document.getElementsByClassName("arr"),r=s[n].style;r.backgroundColor="yellow",setTimeout((function(){if(c[n]!=h.name){if(c[n]>h.name){for(var i=n+1;i<=t;i++)s[i].style.backgroundColor="#fa5b55";n=(e+(t=n-1))/2}else if(c[n]<h.name){for(var o=e;o<n;o++)s[o].style.backgroundColor="#fa5b55";e=n+1,n=Math.floor((e+t)/2)}e<=t&&a()}else r.backgroundColor="#29ff0c"}),1e3)}()},children:"Binary Search"})]})]})}),N=(c(40),function(e,t,c,n){for(var a=!1,s=0;s<t;s++){for(var r=t-s-1,i=0;i<r;i++){var o=i+1;if(c.push([i,o]),c.push([i,o]),n[i]>n[i+1]){var l=n[i];n[i]=n[i+1],n[i+1]=l,c.push([i,n[i]]),a=!0}else c.push([i,n[i]])}if(0==a)break}}),y=function(e){var t=[],c=e.slice();return console.log(c),N(e,250,t,c),console.log(c),t},k=function(e,t){var c,n,a;for(c=0;c<t-1;c++)for(a=c,n=c+1;n<t;n++)if(e[n]<e[a]){a=n;var s=e[n];e[n]=e[a],e[a]=s}},C=function(e){console.log(e),console.log(1234),k(e,55),console.log(e)};function S(e){var t=[];if(e.length<=1)return e;var c=e.slice();return w(e,0,e.length-1,c,t),t}function w(e,t,c,n,a){if(t!==c){var s=Math.floor((t+c)/2);w(n,t,s,e,a),w(n,s+1,c,e,a),function(e,t,c,n,a,s){var r=t,i=t,o=c+1;for(;i<=c&&o<=n;)s.push([i,o]),s.push([i,o]),a[i]<=a[o]?(s.push([r,a[i]]),e[r++]=a[i++]):(s.push([r,a[o]]),e[r++]=a[o++]);for(;i<=c;)s.push([i,i]),s.push([i,i]),s.push([r,a[i]]),e[r++]=a[i++];for(;o<=n;)s.push([o,o]),s.push([o,o]),s.push([r,a[o]]),e[r++]=a[o++]}(e,t,s,c,n,a)}}var M=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),c=t[0],a=t[1],s=[],r=Object(n.useState)(!1),i=Object(v.a)(r,2),o=i[0],l=i[1],b=c.map((function(e,t){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"bars",style:{height:"".concat(e,"px")}},t)})}));return Object(j.jsxs)("div",{className:"sortingpage",children:[Object(j.jsx)("h1",{className:"heading",children:"Sorting Visualiser"}),Object(j.jsx)("div",{children:b}),Object(j.jsxs)("div",{className:"mybtns",children:[Object(j.jsx)("button",{type:"button",class:"btn btn-outline-primary",onClick:function(){for(var e=S(c),t=function(t){var c=document.getElementsByClassName("bars");if(t%3!==2){var n=Object(v.a)(e[t],2),a=n[0],s=n[1],r=c[a].style,i=c[s].style,o=t%3===0?"blue":"hotpink";setTimeout((function(){r.backgroundColor=o,i.backgroundColor=o}),5*t)}else setTimeout((function(){var n=Object(v.a)(e[t],2),a=n[0],s=n[1];c[a].style.height="".concat(s,"px")}),5*t)},n=0;n<e.length;n++)t(n)},children:"Merge Sort"}),Object(j.jsx)("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(){for(var e=y(c),t=function(t){var c=document.getElementsByClassName("bars");if(t%3!==2){var n=Object(v.a)(e[t],2),a=n[0],s=n[1],r=c[a].style,i=c[s].style,o=t%3===0?"blue":"hotpink";setTimeout((function(){r.backgroundColor=o,i.backgroundColor=o}),.1*t)}else setTimeout((function(){var n=Object(v.a)(e[t],2),a=n[0],s=n[1];c[a].style.height="".concat(s,"px")}),.1*t)},n=0;n<e.length;n++)t(n)},children:"Bubble Sort"}),Object(j.jsx)("button",{type:"button",class:"btn btn-outline-success",onClick:function(){C(c);for(var e=[],t=0;t<55;t++)console.log(c[t]),e[t]=c[t];a([].concat(s,e))},children:"Selection Sort"}),Object(j.jsx)("button",{type:"button",class:"btn btn-outline-danger",children:"Insertion Sort"}),Object(j.jsx)("button",{type:"button",class:"btn btn-outline-warning",children:"Quick Sort"}),Object(j.jsx)("button",{type:"button",class:"btn btn-outline-info",onClick:function(){return window.location.reload(!1)},children:"RESET"}),Object(j.jsx)("button",{type:"button",class:"btn btn-outline-light",children:"Light"}),Object(j.jsx)("button",{type:"button",class:"btn btn-outline-dark",disabled:o,onClick:function(){for(var e=0;e<250;e++){var t=Math.ceil(400*Math.random());s[e]=t}a([].concat(Object(O.a)(c),s)),l(!0)},children:"Generate Array!"})]})]})},B=function(){return Object(j.jsx)("div",{className:"graphpage",children:Object(j.jsx)("h1",{children:"Graph page"})})},E=function(){return Object(j.jsx)("div",{className:"backtrackingpage",children:Object(j.jsx)("h1",{children:"Backtrackingpage"})})},T=(c(41),c.p,function(){return Object(j.jsx)("div",{className:"nv",children:Object(j.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{class:"container-fluid",children:[Object(j.jsx)("a",{class:"navbar-brand",href:"#",children:"AlgoVis"}),Object(j.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{class:"navbar-toggler-icon"})}),Object(j.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsx)("ul",{class:"navbar-nav",children:Object(j.jsx)("li",{class:"nav-item",children:Object(j.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/",children:"Home"})})})})]})})})});var V=function(){return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(T,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{path:"/",exact:!0,component:u}),Object(j.jsx)(h.a,{path:"/searchpage",exact:!0,component:f}),Object(j.jsx)(h.a,{path:"/sortingpage",exact:!0,component:M}),Object(j.jsx)(h.a,{path:"/graphpage",exact:!0,component:B}),Object(j.jsx)(h.a,{path:"/backtrackingpage",exact:!0,component:E})]})]})})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.be38a0d1.chunk.js.map