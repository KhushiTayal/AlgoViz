(this.webpackJsonpalgov=this.webpackJsonpalgov||[]).push([[0],{147:function(e,t,n){},148:function(e,t,n){},154:function(e,t,n){},455:function(e,t,n){},456:function(e,t,n){},457:function(e,t,n){},458:function(e,t,n){},459:function(e,t,n){},460:function(e,t,n){},461:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),c=n(22),a=n.n(c),s=n(19),l=(n.p,n(147),n.p,n(148),n.p,n.p+"static/media/search.def0d721.png"),i=n.p+"static/media/sort.239e5502.png",u=n.p+"static/media/path.d26f7f0a.png",d=n(1),b=function(){return Object(d.jsx)("div",{className:"body",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:l,className:"card-img-top",alt:"...",height:"200px"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Search Methods"}),Object(d.jsx)("p",{className:"card-text",children:"Search an element from array using different methods."}),Object(d.jsx)(s.b,{to:"/searchpage",children:Object(d.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:i,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Sorting Algorithms"}),Object(d.jsx)("p",{className:"card-text",children:"Sort array using different sorting algorithms."}),Object(d.jsx)(s.b,{to:"/sortingpage",children:Object(d.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:u,className:"card-img-top",alt:"...",height:"225px"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Path Finding"}),Object(d.jsx)("p",{className:"card-text",children:"Coming soon"}),Object(d.jsx)(s.b,{to:"/graphpage",children:Object(d.jsx)("button",{className:"btn btn-primary",children:"Let's Visualize!"})})]})]})})]})})},h=function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)("div",{className:"home2",children:[Object(d.jsx)("div",{className:"centered",children:"Algorithm Visualizer"}),Object(d.jsx)(b,{})]})})},j=n(5),f=(n(154),n(30)),p=n.n(f),v=n(143),m=n(53),x=n(34),g=n(6),O=(n(155),n(455),n(456),function(){var e=Object(o.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],c=[],a=Object(o.useState)(!1),s=Object(g.a)(a,2),l=s[0],i=s[1],u=n.map((function(e,t){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"arr",children:e},t)})})),b=Object(o.useState)({name:0}),h=Object(g.a)(b,2),j=h[0],f=h[1],O=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,o,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,o=n.name,r=n.value,j[o]=r,f(Object(v.a)({},j));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"Searchpage",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{class:"btn btn-lg btn-primary",type:"button",disabled:l,onClick:function(){for(var e=0;e<16;e++){var t=Math.ceil(100*Math.random());c[e]=t,console.log(c[e])}c.sort((function(e,t){return e-t})),r([].concat(Object(x.a)(n),c)),i(!0)},children:"Generate Array!"}),Object(d.jsx)("button",{type:"button",class:"btn btn-secondary btn-lg",onClick:function(){return window.location.reload(!1)},children:"Reset"})]}),Object(d.jsx)("div",{className:"co",children:u}),Object(d.jsxs)("div",{class:"d-grid gap-2 col-6 mx-auto",children:[Object(d.jsx)("p",{className:"enter",children:"Enter a number "}),Object(d.jsx)("input",{type:"number",name:"name",className:"inputnum",onChange:O}),Object(d.jsx)("button",{class:"btn btn-primary",type:"button",onClick:function(){var e=0;!function t(){var o=document.getElementsByClassName("arr")[e].style;setTimeout((function(){if(n[e]==j.name)return console.log("yes"),void(o.backgroundColor="#29ff0c");o.backgroundColor="#fa5b55",o.textDecoration="line-through",e<15?(e++,t()):alert("Number not found")}),300)}(),console.log("no")},children:"Linear Search"}),Object(d.jsx)("button",{class:"btn btn-primary",type:"button",onClick:function(){var e=0,t=15,o=Math.floor((e+t)/2);!function r(){var c=document.getElementsByClassName("arr"),a=c[o].style;a.backgroundColor="yellow",setTimeout((function(){if(n[o]!=j.name){if(n[o]>j.name){for(var s=o+1;s<=t;s++)c[s].style.backgroundColor="#fa5b55",c[s].style.textDecoration="line-through";o=(e+(t=o-1))/2}else if(n[o]<j.name){for(var l=e;l<o;l++)c[l].style.backgroundColor="#fa5b55",c[l].style.textDecoration="line-through";e=o+1,o=Math.floor((e+t)/2)}e<=t?r():alert("Number not found")}else a.backgroundColor="#29ff0c"}),1e3)}()},children:"Binary Search"})]})]})}),w=(n(457),function(e,t,n,o){for(var r=!1,c=0;c<t-1;c++){for(var a=t-c-1,s=0;s<a;s++){var l=s+1;if(n.push([s,l]),n.push([s,l]),o[s]>o[s+1]){n.push([s,o[s+1]]),n.push([s+1,o[s]]);var i=o[s];o[s]=o[s+1],o[s+1]=i,r=!0}else n.push([-1,-1]),n.push([-1,-1])}if(0==r)break}}),y=function(e){var t=[],n=e.slice();return w(e,e.length,t,n),console.log(n),t};function N(e){var t=[];if(e.length<=1)return e;var n=e.slice();return k(e,0,e.length-1,n,t),t}function k(e,t,n,o,r){if(t!==n){var c=Math.floor((t+n)/2);k(o,t,c,e,r),k(o,c+1,n,e,r),function(e,t,n,o,r,c){var a=t,s=t,l=n+1;for(;s<=n&&l<=o;)c.push([s,l]),c.push([s,l]),r[s]<=r[l]?(c.push([a,r[s]]),e[a++]=r[s++]):(c.push([a,r[l]]),e[a++]=r[l++]);for(;s<=n;)c.push([s,s]),c.push([s,s]),c.push([a,r[s]]),e[a++]=r[s++];for(;l<=o;)c.push([l,l]),c.push([l,l]),c.push([a,r[l]]),e[a++]=r[l++]}(e,t,c,n,o,r)}}var C=function(e,t,n,o){var r,c,a;for(r=1;r<t;r++){for(c=e[r],a=r-1;a>=0&&e[a]>c;)n.push([r,a]),n.push([r,a]),n.push([a,e[a+1]]),n.push([a+1,e[a]]),e[a+1]=e[a],a-=1;e[a+1]=c,n.push([r,a+1]),n.push([r,a+1]),n.push([a+1,c]),n.push([a+1,c])}},S=function(e){var t=[],n=e.slice();return C(e,e.length,t,n),console.log(e),t},M=[];function P(e,t,n){if(t<n){var o=function(e,t,n){for(var o=e[n],r=t-1,c=t;c<=n-1;c++)if(e[c]<o){r++,M.push([c,r]),M.push([c,r]);var a=e[r];e[r]=e[c],e[c]=a,M.push([c,e[c]]),M.push([c,r]),M.push([c,r]),M.push([r,e[r]])}var s=e[r+1];return e[r+1]=e[n],e[n]=s,M.push([r+1,n]),M.push([r+1,n]),M.push([r+1,e[r+1]]),M.push([r+1,n]),M.push([r+1,n]),M.push([n,e[n]]),r+1}(e,t,n);P(e,t,o-1),P(e,o+1,n)}}var B=function(e){return console.log(e),P(e,0,e.length-1),console.log(e),M},E=function(){var e=Object(o.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],c=[],a=Object(o.useState)(!1),s=Object(g.a)(a,2),l=s[0],i=s[1],u=window.innerWidth,b=Math.floor(u/6);console.log(b);var h=n.map((function(e,t){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"bars",style:{height:"".concat(e,"px")}},t)})}));return Object(d.jsxs)("div",{className:"sortingpage",children:[Object(d.jsx)("h1",{className:"heading",children:"Sorting Visualiser"}),Object(d.jsx)("div",{children:h}),Object(d.jsxs)("div",{className:"mybtns",children:[Object(d.jsx)("button",{type:"button",class:"btn btn-outline-primary",onClick:function(){for(var e=N(n),t=function(t){var n=document.getElementsByClassName("bars");if(t%3!==2){var o=Object(g.a)(e[t],2),r=o[0],c=o[1],a=n[r].style,s=n[c].style,l=t%3===0?"blue":"hotpink";setTimeout((function(){a.backgroundColor=l,s.backgroundColor=l}),2*t)}else setTimeout((function(){var o=Object(g.a)(e[t],2),r=o[0],c=o[1];n[r].style.height="".concat(c,"px")}),2*t)},o=0;o<e.length;o++)t(o)},children:"Merge Sort"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(){for(var e=y(n),t=function(t){var n=document.getElementsByClassName("bars");if(t%4===0||t%4===1){var o=Object(g.a)(e[t],2),r=o[0],c=o[1],a=n[r].style,s=n[c].style,l=t%4===0?"blue":"hotpink";setTimeout((function(){a.backgroundColor=l,s.backgroundColor=l}),1*t)}else{var i=Object(g.a)(e[t],2),u=i[0],d=i[1];if(-1===u)return"continue";setTimeout((function(){n[u].style.height="".concat(d,"px")}),1*t)}},o=0;o<e.length;o++)t(o)},children:"Bubble Sort"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-danger",onClick:function(){for(var e=S(n),t=function(t){var n=document.getElementsByClassName("bars");if(t%4===0||t%4===1){var o=Object(g.a)(e[t],2),r=o[0],c=o[1],a=n[r].style,s=n[c].style,l=t%4===0?"blue":"hotpink";setTimeout((function(){a.backgroundColor=l,s.backgroundColor=l}),1*t)}else{var i=Object(g.a)(e[t],2),u=i[0],d=i[1];if(-1===u)return"continue";setTimeout((function(){n[u].style.height="".concat(d,"px")}),1*t)}},o=0;o<e.length;o++)t(o)},children:"Insertion Sort"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-warning",onClick:function(){for(var e=B(n),t=function(t){var n=document.getElementsByClassName("bars");if(t%3!==2){var o=Object(g.a)(e[t],2),r=o[0],c=o[1],a=n[r].style,s=n[c].style,l=t%3===0?"blue":"hotpink";setTimeout((function(){a.backgroundColor=l,s.backgroundColor=l}),5*t)}else setTimeout((function(){var o=Object(g.a)(e[t],2),r=o[0],c=o[1];n[r].style.height="".concat(c,"px")}),5*t)},o=0;o<e.length;o++)t(o)},children:"Quick Sort"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-info",onClick:function(){return window.location.reload(!1)},children:"RESET"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-dark",disabled:l,onClick:function(){for(var e=0;e<b;e++){var t=Math.ceil(400*Math.random());c[e]=t}r([].concat(Object(x.a)(n),c)),i(!0)},children:"Generate Array!"})]})]})},T=(n(458),function(e){var t=e.wallPresent,n=e.startNode,o=e.endNode,r=e.vis,c=e.row,a=e.col;return Object(d.jsx)("div",{id:"node ".concat(c,"-").concat(a),className:!0===t?"node wall":!0===n?"node start":!0===o?"node end":!0===r?"node vis":"node"})});n(459);function z(e,t,n){for(var o=[],r=t[e.row][e.col];r!==n.previousNode;)console.log(r),o.unshift(r),r=r.previousNode;return o}var A=function(e,t,n,o,r){var c=t.row,a=(n.row,t.col),s=(n.col,[]),l=[];for(s.push(t),e[c][a].vis=!0;s.length;){var i=s[0];if(s.shift(),l.push(i),1==i.endNode)return l;i.col<r-1&&0==e[i.row][i.col+1].vis&&0==e[i.row][i.col+1].wallPresent&&(e[i.row][i.col+1].vis=!0,e[i.row][i.col+1].previousNode=i,s.push(e[i.row][i.col+1])),i.row<o-1&&0==e[i.row+1][i.col].vis&&0==e[i.row+1][i.col].wallPresent&&(s.push(e[i.row+1][i.col]),e[i.row+1][i.col].vis=!0,e[i.row+1][i.col].previousNode=i),i.row>0&&0==e[i.row-1][i.col].vis&&0==e[i.row-1][i.col].wallPresent&&(s.push(e[i.row-1][i.col]),e[i.row-1][i.col].vis=!0,e[i.row-1][i.col].previousNode=i),i.col>0&&0==e[i.row][i.col-1].vis&&0==e[i.row][i.col-1].wallPresent&&(s.push(e[i.row][i.col-1]),e[i.row][i.col-1].vis=!0,e[i.row][i.col-1].previousNode=i)}return l},V=[];var D=function(e,t,n,o){var r=[];for(r.push(e);r.length;){var c=r.pop();if(1==c.endNode)return V;t[c.row][c.col].vis=!0,V.push(t[c.row][c.col]),c.col>0&&0==t[c.row][c.col-1].vis&&0==t[c.row][c.col-1].wallPresent&&(t[c.row][c.col-1].previousNode=c,r.push(t[c.row][c.col-1])),c.row>0&&0==t[c.row-1][c.col].vis&&0==t[c.row-1][c.col].wallPresent&&(t[c.row-1][c.col].previousNode=c,r.push(t[c.row-1][c.col])),c.row<n-1&&0==t[c.row+1][c.col].vis&&0==t[c.row+1][c.col].wallPresent&&(t[c.row+1][c.col].previousNode=c,r.push(t[c.row+1][c.col])),c.col<o-1&&0==t[c.row][c.col+1].vis&&0==t[c.row][c.col+1].wallPresent&&(t[c.row][c.col+1].previousNode=c,r.push(t[c.row][c.col+1]))}};var I=function(e,t,n,o,r){return D(t,e,o,r),V},L=n(66);function F(e,t){var n,o=function(e,t){var n=[],o=e.col,r=e.row;r>0&&n.push(t[r-1][o]);r<t.length-1&&n.push(t[r+1][o]);o>0&&n.push(t[r][o-1]);o<t[0].length-1&&n.push(t[r][o+1]);return n.filter((function(e){return!e.vis}))}(e,t),r=Object(L.a)(o);try{for(r.s();!(n=r.n()).done;){var c=n.value;c.distance=e.distance+1,c.previousNode=e}}catch(a){r.e(a)}finally{r.f()}}var G=function(e,t,n,o,r){var c=[];e[t.row][t.col].distance=0;var a,s=[],l=Object(L.a)(e);try{for(l.s();!(a=l.n()).done;){var i,u=a.value,d=Object(L.a)(u);try{for(d.s();!(i=d.n()).done;){var b=i.value;s.push(b)}}catch(j){d.e(j)}finally{d.f()}}}catch(j){l.e(j)}finally{l.f()}for(;s.length;){s.sort((function(e,t){return e.distance-t.distance}));var h=s.shift();if(1!=h.wallPresent){if(h.distance==1/0)return c;if(h.vis=!0,c.push(h),1==h.endNode)return c;F(h,e)}}return c},H=function(){var e=Object(o.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],c=window.innerWidth,a=window.innerHeight,s=Math.max(Math.floor(a/25),10),l=Math.floor(c/25)-1,i={row:4,col:4},u={row:s-5,col:l-5};Object(o.useEffect)((function(){var e=h(s,l);return e[i.row][i.col].startNode=!0,e[s-5][l-5].endNode=!0,r([].concat(Object(x.a)(n),Object(x.a)(e))),function(){}}),[]);var b=function(e,t){return{wallPresent:!1,startNode:!1,endNode:!1,vis:!1,row:e,col:t,distance:1/0,previousNode:null}},h=function(e,t){for(var n=[],o=0;o<e;o++){for(var r=[],c=0;c<t;c++)r.push(b(o,c));n.push(r)}return n},j=n.map((function(e,t){return Object(d.jsx)("div",{className:"row",children:e.map((function(e,t){var n=e.wallPresent,o=e.startNode,r=e.endNode,c=e.vis,a=e.row,s=e.col;return Object(d.jsx)(T,{row:a,col:s,wallPresent:n,startNode:o,endNode:r,vis:c},t)}))})}));function f(e){return new Promise((function(t){return setTimeout(t,e)}))}function v(e,t){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(p.a.mark((function e(t,n){var o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=0;case 1:if(!(o<t.length)){e.next=10;break}if(t[o].row===i.row&&t[o].col===i.col||t[o].row===u.row&&t[o].col===u.col){e.next=7;break}return document.getElementById("node ".concat(t[o].row,"-").concat(t[o].col)).className="node path",e.next=7,f(100);case 7:o++,e.next=1;break;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(p.a.mark((function e(t,n){var o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=0;case 1:if(!(o<=n.length)){e.next=16;break}if(o!==n.length){e.next=8;break}return e.next=5,f(1e3);case 5:return e.next=7,v(t,n);case 7:return e.abrupt("return");case 8:if(n[o].row===i.row&&n[o].col===i.col||n[o].row===u.row&&n[o].col===u.col){e.next=13;break}return document.getElementById("node ".concat(n[o].row,"-").concat(n[o].col)).className="node vis",e.next=13,f(50);case 13:o++,e.next=1;break;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"containerrr",children:[j,Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("button",{type:"button",class:"btn btn-outline-primary",onClick:function(){var e=A(n,i,u,s,l);w(z(u,n,i),e)},children:"BFS"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(){var e=I(n,i,u,s,l);w(z(u,n,i),e)},children:"DFS"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-success",onClick:function(){var e=G(n,i,u,s,l);console.log(e),w(function(e,t,n){for(var o=[],r=t[e.row][e.col];null!==r;)console.log(r),o.unshift(r),r=r.previousNode;return o}(u,n),e)},children:"Dijsktra"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-info",onClick:function(){return window.location.reload(!1)},children:"Clear Grid"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-danger",onClick:function(){for(var e=n.slice(),t=[],o=0;o<s;o++)for(var r=0;r<l;r++){(Math.floor(100*Math.random())+10)%4===0&&(e[o][r].wallPresent=!0,t.push({xx:o,yy:r}))}for(var c=function(e){setTimeout((function(){t[e].xx===i.row&&t[e].yy===i.col||t[e].xx===u.row&&t[e].yy===u.col||(document.getElementById("node ".concat(t[e].xx,"-").concat(t[e].yy)).className="node wall")}),20*e)},a=0;a<t.length;a++)c(a);return t},children:"Create Maze"})]})]})},J=function(){return Object(d.jsx)("div",{className:"backtrackingpage",children:Object(d.jsx)("h1",{children:"Backtrackingpage"})})},R=(n(460),n.p,function(){return Object(d.jsx)("div",{className:"nv",children:Object(d.jsx)("nav",{class:"navbar navbar-light",style:{backgroundColor:"#8cf7f7"},children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("a",{class:"navbar-brand",children:"Home"})}),Object(d.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{class:"navbar-toggler-icon"})}),Object(d.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsx)("ul",{class:"navbar-nav",children:Object(d.jsx)("li",{class:"nav-item"})})})]})})})});var W=function(){return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(R,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/",exact:!0,component:h}),Object(d.jsx)(j.a,{path:"/searchpage",exact:!0,component:O}),Object(d.jsx)(j.a,{path:"/sortingpage",exact:!0,component:E}),Object(d.jsx)(j.a,{path:"/graphpage",exact:!0,component:H}),Object(d.jsx)(j.a,{path:"/backtrackingpage",exact:!0,component:J})]})]})})};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(s.a,{basename:"/AlgoViz",children:Object(d.jsx)(W,{})})}),document.getElementById("root"))}},[[461,1,2]]]);
//# sourceMappingURL=main.4449ee46.chunk.js.map