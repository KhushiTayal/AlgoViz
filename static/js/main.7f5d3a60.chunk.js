(this.webpackJsonpalgov=this.webpackJsonpalgov||[]).push([[0],{146:function(e,t,n){},147:function(e,t,n){},153:function(e,t,n){},454:function(e,t,n){},455:function(e,t,n){},456:function(e,t,n){},457:function(e,t,n){},458:function(e,t,n){},459:function(e,t,n){},460:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n.n(o),r=n(22),a=n.n(r),s=n(19),l=(n.p,n(146),n.p,n(147),n.p,n.p+"static/media/search.def0d721.png"),i=n.p+"static/media/sort.239e5502.png",u=n.p+"static/media/path.d26f7f0a.png",b=n(1),d=function(){return Object(b.jsx)("div",{className:"body",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:l,className:"card-img-top",alt:"...",height:"200px"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:"Search Methods"}),Object(b.jsx)("p",{className:"card-text",children:"Search an element from array using different methods."}),Object(b.jsx)(s.b,{to:"/searchpage",children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:i,className:"card-img-top",alt:"..."}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:"Sorting Algorithms"}),Object(b.jsx)("p",{className:"card-text",children:"Sort array using different sorting algorithms."}),Object(b.jsx)(s.b,{to:"/sortingpage",children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:u,className:"card-img-top",alt:"...",height:"225px"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:"Path Finding"}),Object(b.jsx)("p",{className:"card-text",children:"Coming soon"}),Object(b.jsx)(s.b,{to:"/graphpage",children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})})]})})},h=function(){return Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"home2",children:[Object(b.jsx)("div",{className:"centered",children:"Algorithm Visualizer"}),Object(b.jsx)(d,{})]})})},j=n(5),p=(n(153),n(30)),f=n.n(p),v=n(142),m=n(52),x=n(34),g=n(6),O=(n(154),n(454),n(455),function(){var e=Object(o.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1],r=[],a=Object(o.useState)(!1),s=Object(g.a)(a,2),l=s[0],i=s[1],u=n.map((function(e,t){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"arr",children:e},t)})})),d=Object(o.useState)({name:0}),h=Object(g.a)(d,2),j=h[0],p=h[1],O=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,o,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,o=n.name,c=n.value,j[o]=c,p(Object(v.a)({},j));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"Searchpage",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{class:"btn btn-lg btn-primary",type:"button",disabled:l,onClick:function(){for(var e=0;e<16;e++){var t=Math.ceil(100*Math.random());r[e]=t,console.log(r[e])}r.sort((function(e,t){return e-t})),c([].concat(Object(x.a)(n),r)),i(!0)},children:"Generate Array!"}),Object(b.jsx)("button",{type:"button",class:"btn btn-secondary btn-lg",onClick:function(){return window.location.reload(!1)},children:"Reset"})]}),Object(b.jsx)("div",{className:"co",children:u}),Object(b.jsxs)("div",{class:"d-grid gap-2 col-6 mx-auto",children:[Object(b.jsx)("p",{className:"enter",children:"Enter a number "}),Object(b.jsx)("input",{type:"number",name:"name",className:"inputnum",onChange:O}),Object(b.jsx)("button",{class:"btn btn-primary",type:"button",onClick:function(){var e=0;!function t(){var o=document.getElementsByClassName("arr")[e].style;setTimeout((function(){if(n[e]==j.name)return console.log("yes"),void(o.backgroundColor="#29ff0c");o.backgroundColor="#fa5b55",o.textDecoration="line-through",e<15?(e++,t()):alert("Number not found")}),300)}(),console.log("no")},children:"Linear Search"}),Object(b.jsx)("button",{class:"btn btn-primary",type:"button",onClick:function(){var e=0,t=15,o=Math.floor((e+t)/2);!function c(){var r=document.getElementsByClassName("arr"),a=r[o].style;a.backgroundColor="yellow",setTimeout((function(){if(n[o]!=j.name){if(n[o]>j.name){for(var s=o+1;s<=t;s++)r[s].style.backgroundColor="#fa5b55",r[s].style.textDecoration="line-through";o=(e+(t=o-1))/2}else if(n[o]<j.name){for(var l=e;l<o;l++)r[l].style.backgroundColor="#fa5b55",r[l].style.textDecoration="line-through";e=o+1,o=Math.floor((e+t)/2)}e<=t?c():alert("Number not found")}else a.backgroundColor="#29ff0c"}),1e3)}()},children:"Binary Search"})]})]})}),w=(n(456),function(e,t,n,o){for(var c=!1,r=0;r<t-1;r++){for(var a=t-r-1,s=0;s<a;s++){var l=s+1;if(n.push([s,l]),n.push([s,l]),o[s]>o[s+1]){n.push([s,o[s+1]]),n.push([s+1,o[s]]);var i=o[s];o[s]=o[s+1],o[s+1]=i,c=!0}else n.push([-1,-1]),n.push([-1,-1])}if(0==c)break}}),y=function(e){var t=[],n=e.slice();return w(e,e.length,t,n),console.log(n),t};function N(e){var t=[];if(e.length<=1)return e;var n=e.slice();return k(e,0,e.length-1,n,t),t}function k(e,t,n,o,c){if(t!==n){var r=Math.floor((t+n)/2);k(o,t,r,e,c),k(o,r+1,n,e,c),function(e,t,n,o,c,r){var a=t,s=t,l=n+1;for(;s<=n&&l<=o;)r.push([s,l]),r.push([s,l]),c[s]<=c[l]?(r.push([a,c[s]]),e[a++]=c[s++]):(r.push([a,c[l]]),e[a++]=c[l++]);for(;s<=n;)r.push([s,s]),r.push([s,s]),r.push([a,c[s]]),e[a++]=c[s++];for(;l<=o;)r.push([l,l]),r.push([l,l]),r.push([a,c[l]]),e[a++]=c[l++]}(e,t,r,n,o,c)}}var C=function(e,t,n,o){var c,r,a;for(c=1;c<t;c++){for(r=e[c],a=c-1;a>=0&&e[a]>r;)n.push([c,a]),n.push([c,a]),n.push([a,e[a+1]]),n.push([a+1,e[a]]),e[a+1]=e[a],a-=1;e[a+1]=r,n.push([c,a+1]),n.push([c,a+1]),n.push([a+1,r]),n.push([a+1,r])}},S=function(e){var t=[],n=e.slice();return C(e,e.length,t,n),console.log(e),t},M=[];function P(e,t,n){if(t<n){var o=function(e,t,n){for(var o=e[n],c=t-1,r=t;r<=n-1;r++)if(e[r]<o){c++,M.push([r,c]),M.push([r,c]);var a=e[c];e[c]=e[r],e[r]=a,M.push([r,e[r]]),M.push([r,c]),M.push([r,c]),M.push([c,e[c]])}var s=e[c+1];return e[c+1]=e[n],e[n]=s,M.push([c+1,n]),M.push([c+1,n]),M.push([c+1,e[c+1]]),M.push([c+1,n]),M.push([c+1,n]),M.push([n,e[n]]),c+1}(e,t,n);P(e,t,o-1),P(e,o+1,n)}}var B=function(e){return console.log(e),P(e,0,e.length-1),console.log(e),M},E=function(){var e=Object(o.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1],r=[],a=Object(o.useState)(!1),s=Object(g.a)(a,2),l=s[0],i=s[1],u=window.innerWidth,d=Math.floor(u/6);console.log(d);var h=n.map((function(e,t){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"bars",style:{height:"".concat(e,"px")}},t)})}));return Object(b.jsxs)("div",{className:"sortingpage",children:[Object(b.jsx)("h1",{className:"heading",children:"Sorting Visualiser"}),Object(b.jsx)("div",{children:h}),Object(b.jsxs)("div",{className:"mybtns",children:[Object(b.jsx)("button",{type:"button",class:"btn btn-outline-primary",onClick:function(){for(var e=N(n),t=function(t){var n=document.getElementsByClassName("bars");if(t%3!==2){var o=Object(g.a)(e[t],2),c=o[0],r=o[1],a=n[c].style,s=n[r].style,l=t%3===0?"blue":"hotpink";setTimeout((function(){a.backgroundColor=l,s.backgroundColor=l}),1*t)}else setTimeout((function(){var o=Object(g.a)(e[t],2),c=o[0],r=o[1];n[c].style.height="".concat(r,"px")}),1*t)},o=0;o<e.length;o++)t(o)},children:"Merge Sort"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(){for(var e=y(n),t=function(t){var n=document.getElementsByClassName("bars");if(t%4===0||t%4===1){var o=Object(g.a)(e[t],2),c=o[0],r=o[1],a=n[c].style,s=n[r].style,l=t%4===0?"blue":"hotpink";setTimeout((function(){a.backgroundColor=l,s.backgroundColor=l}),1*t)}else{var i=Object(g.a)(e[t],2),u=i[0],b=i[1];if(-1===u)return"continue";setTimeout((function(){n[u].style.height="".concat(b,"px")}),1*t)}},o=0;o<e.length;o++)t(o)},children:"Bubble Sort"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-danger",onClick:function(){for(var e=S(n),t=function(t){var n=document.getElementsByClassName("bars");if(t%4===0||t%4===1){var o=Object(g.a)(e[t],2),c=o[0],r=o[1],a=n[c].style,s=n[r].style,l=t%4===0?"blue":"hotpink";setTimeout((function(){a.backgroundColor=l,s.backgroundColor=l}),1*t)}else{var i=Object(g.a)(e[t],2),u=i[0],b=i[1];if(-1===u)return"continue";setTimeout((function(){n[u].style.height="".concat(b,"px")}),1*t)}},o=0;o<e.length;o++)t(o)},children:"Insertion Sort"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-warning",onClick:function(){for(var e=B(n),t=function(t){var n=document.getElementsByClassName("bars");if(t%3!==2){var o=Object(g.a)(e[t],2),c=o[0],r=o[1],a=n[c].style,s=n[r].style,l=t%3===0?"blue":"hotpink";setTimeout((function(){a.backgroundColor=l,s.backgroundColor=l}),5*t)}else setTimeout((function(){var o=Object(g.a)(e[t],2),c=o[0],r=o[1];n[c].style.height="".concat(r,"px")}),5*t)},o=0;o<e.length;o++)t(o)},children:"Quick Sort"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-info",onClick:function(){return window.location.reload(!1)},children:"RESET"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-dark",disabled:l,onClick:function(){for(var e=0;e<d;e++){var t=Math.ceil(400*Math.random());r[e]=t}c([].concat(Object(x.a)(n),r)),i(!0)},children:"Generate Array!"})]})]})},T=(n(457),function(e){var t=e.wallPresent,n=e.startNode,o=e.endNode,c=e.vis,r=e.row,a=e.col;return Object(b.jsx)("div",{id:"node ".concat(r,"-").concat(a),className:!0===t?"node wall":!0===n?"node start":!0===o?"node end":!0===c?"node vis":"node"})});n(458);function z(e,t,n){for(var o=[],c=t[e.row][e.col];c!==n.previousNode;)console.log(c),o.unshift(c),c=c.previousNode;return o}var A=function(e,t,n,o,c){var r=t.row,a=(n.row,t.col),s=(n.col,[]),l=[];for(s.push(t),e[r][a].vis=!0;s.length;){var i=s[0];if(s.shift(),l.push(i),1==i.endNode)return l;i.col<c-1&&0==e[i.row][i.col+1].vis&&0==e[i.row][i.col+1].wallPresent&&(e[i.row][i.col+1].vis=!0,e[i.row][i.col+1].previousNode=i,s.push(e[i.row][i.col+1])),i.row<o-1&&0==e[i.row+1][i.col].vis&&0==e[i.row+1][i.col].wallPresent&&(s.push(e[i.row+1][i.col]),e[i.row+1][i.col].vis=!0,e[i.row+1][i.col].previousNode=i),i.row>0&&0==e[i.row-1][i.col].vis&&0==e[i.row-1][i.col].wallPresent&&(s.push(e[i.row-1][i.col]),e[i.row-1][i.col].vis=!0,e[i.row-1][i.col].previousNode=i),i.col>0&&0==e[i.row][i.col-1].vis&&0==e[i.row][i.col-1].wallPresent&&(s.push(e[i.row][i.col-1]),e[i.row][i.col-1].vis=!0,e[i.row][i.col-1].previousNode=i)}return l},D=[];var V=function(e,t,n,o){var c=[];for(c.push(e);c.length;){var r=c.pop();if(1==r.endNode)return D;t[r.row][r.col].vis=!0,D.push(t[r.row][r.col]),r.col>0&&0==t[r.row][r.col-1].vis&&0==t[r.row][r.col-1].wallPresent&&(t[r.row][r.col-1].previousNode=r,c.push(t[r.row][r.col-1])),r.row>0&&0==t[r.row-1][r.col].vis&&0==t[r.row-1][r.col].wallPresent&&(t[r.row-1][r.col].previousNode=r,c.push(t[r.row-1][r.col])),r.row<n-1&&0==t[r.row+1][r.col].vis&&0==t[r.row+1][r.col].wallPresent&&(t[r.row+1][r.col].previousNode=r,c.push(t[r.row+1][r.col])),r.col<o-1&&0==t[r.row][r.col+1].vis&&0==t[r.row][r.col+1].wallPresent&&(t[r.row][r.col+1].previousNode=r,c.push(t[r.row][r.col+1]))}};var I=function(e,t,n,o,c){return V(t,e,o,c),D},L=function(){var e=Object(o.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1],r=window.innerWidth,a=window.innerHeight,s=Math.max(Math.floor(a/25),10),l=Math.floor(r/25)-1,i={row:4,col:4},u={row:s-5,col:l-5};Object(o.useEffect)((function(){var e=h(s,l);return e[i.row][i.col].startNode=!0,e[s-5][l-5].endNode=!0,c([].concat(Object(x.a)(n),Object(x.a)(e))),function(){}}),[]);var d=function(e,t){return{wallPresent:!1,startNode:!1,endNode:!1,vis:!1,row:e,col:t,distance:1/0,previousNode:null}},h=function(e,t){for(var n=[],o=0;o<e;o++){for(var c=[],r=0;r<t;r++)c.push(d(o,r));n.push(c)}return n},j=n.map((function(e,t){return Object(b.jsx)("div",{className:"row",children:e.map((function(e,t){var n=e.wallPresent,o=e.startNode,c=e.endNode,r=e.vis,a=e.row,s=e.col;return Object(b.jsx)(T,{row:a,col:s,wallPresent:n,startNode:o,endNode:c,vis:r},t)}))})}));function p(e){return new Promise((function(t){return setTimeout(t,e)}))}function v(e,t){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(f.a.mark((function e(t,n){var o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=0;case 1:if(!(o<t.length)){e.next=10;break}if(t[o].row===i.row&&t[o].col===i.col||t[o].row===u.row&&t[o].col===u.col){e.next=7;break}return document.getElementById("node ".concat(t[o].row,"-").concat(t[o].col)).className="node path",e.next=7,p(50);case 7:o++,e.next=1;break;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(f.a.mark((function e(t,n){var o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=0;case 1:if(!(o<=n.length)){e.next=16;break}if(o!==n.length){e.next=8;break}return e.next=5,p(1e3);case 5:return e.next=7,v(t,n);case 7:return e.abrupt("return");case 8:if(n[o].row===i.row&&n[o].col===i.col||n[o].row===u.row&&n[o].col===u.col){e.next=13;break}return document.getElementById("node ".concat(n[o].row,"-").concat(n[o].col)).className="node vis",e.next=13,p(5);case 13:o++,e.next=1;break;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"containerrr",children:[j,Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("button",{type:"button",class:"btn btn-outline-primary",onClick:function(){var e=A(n,i,u,s,l);w(z(u,n,i),e)},children:"BFS"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(){var e=I(n,i,u,s,l);w(z(u,n,i),e)},children:"DFS"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-success",children:"Dijsktra"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-danger",onClick:function(){for(var e=n.slice(),t=[],o=0;o<s;o++)for(var c=0;c<l;c++){(Math.floor(100*Math.random())+10)%4===0&&(e[o][c].wallPresent=!0,t.push({xx:o,yy:c}))}for(var r=function(e){setTimeout((function(){t[e].xx===i.row&&t[e].yy===i.col||t[e].xx===u.row&&t[e].yy===u.col||(document.getElementById("node ".concat(t[e].xx,"-").concat(t[e].yy)).className="node wall")}),20*e)},a=0;a<t.length;a++)r(a);return t},children:"Create Maze"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-warning",children:"Clear Path"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-info",onClick:function(){return window.location.reload(!1)},children:"Clear Grid"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-light",children:"Light"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-dark",children:"Dark"})]})]})},F=function(){return Object(b.jsx)("div",{className:"backtrackingpage",children:Object(b.jsx)("h1",{children:"Backtrackingpage"})})},G=(n(459),n.p,function(){return Object(b.jsx)("div",{className:"nv",children:Object(b.jsx)("nav",{class:"navbar navbar-light",style:{backgroundColor:"#8cf7f7"},children:Object(b.jsxs)("div",{class:"container-fluid",children:[Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)("a",{class:"navbar-brand",children:"Home"})}),Object(b.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{class:"navbar-toggler-icon"})}),Object(b.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsx)("ul",{class:"navbar-nav",children:Object(b.jsx)("li",{class:"nav-item"})})})]})})})});var H=function(){return Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(G,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",exact:!0,component:h}),Object(b.jsx)(j.a,{path:"/searchpage",exact:!0,component:O}),Object(b.jsx)(j.a,{path:"/sortingpage",exact:!0,component:E}),Object(b.jsx)(j.a,{path:"/graphpage",exact:!0,component:L}),Object(b.jsx)(j.a,{path:"/backtrackingpage",exact:!0,component:F})]})]})})};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(s.a,{basename:"/AlgoViz",children:Object(b.jsx)(H,{})})}),document.getElementById("root"))}},[[460,1,2]]]);
//# sourceMappingURL=main.7f5d3a60.chunk.js.map