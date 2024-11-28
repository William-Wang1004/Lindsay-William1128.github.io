$(document).ready((function(){"use strict";const t=new class{constructor(t=0,e){this.interval=t,this.fn=e,this.timer=void 0}run(){this.timer?(clearTimeout(this.timer),this.timer=setTimeout((()=>{this.fn()}),this.interval)):this.timer=setTimeout((()=>{this.fn()}),this.interval)}}(800,(function(){for(let t=0;t<10;t++)T[t].resize()}));let e,s,n,i=500,o=0;const c=t=>document.querySelector(t),l=c("#table");let a=!1;const r=Object.create(null);function h(){const h=$(window).width(),f=$(window).height();$(document.body).css("height",f+"px"),setTimeout((()=>{n&&$(n).css({width:h+"px",height:f+"px"})}),0);const u=h,p=f-15;$(l).css({width:u+"px",height:p+"px"});const d=u/71,m=d,g=6*d,k=1.4*g,x=g/7.2,b=2*x,w=g/225;return g<100?(e=c("#mini-game-step"),s=c("#mini-game-score"),$("#info-box").hide(),$("#mini-info-box").css({bottom:0,left:u/2-$("#mini-info-box").width()/2+"px",display:"flex"})):(e=c("#game-step"),s=c("#game-score"),$("#mini-info-box").hide(),$("#info-box").css({bottom:0,width:2*g+"px",height:.9*k+"px",left:u/2-g+"px",fontSize:.75*d/16+"em",display:"flex"})),e.innerText=o,s.innerText=i,a&&t.run(),r.tableWidth=u,r.tableHeight=p,r.border=m,r.cardWidth=g,r.cardHeight=k,r.zoom=w,r.acc=b,r.bacc=x,r}h();let f=0;const u={on:!0,now:void 0};function p(t,e){const s=t[0].type,n=e[0].type;let i,o,c=!0,l=!0;for(let e=1;e<t.length;e++)"number"==typeof t[e]?i=t[e]:t[e].type!==s&&(c=!1);for(let t=1;t<e.length;t++)"number"==typeof e[t]?o=e[t]:e[t].type!==n&&(l=!1);if(c=c?1:0,l=l?1:0,c!==l)return l-c;let a=t.length,r=e.length;return a=t[a-1]instanceof HTMLElement?0:a,r=e[r-1]instanceof HTMLElement?0:r,a||r?r-a:i&&o?i-o:o-i}u.call=new Howl({src:"spider/124.wav"}),u.take=new Howl({src:"spider/128.wav"}),u.put=new Howl({src:"spider/125.wav"}),u.hintyes=new Howl({src:"spider/126.wav"}),u.hintno=new Howl({src:"spider/127.wav"}),u.win=new Howl({src:"spider/129.wav"}),u.play=function(t){if(this.on){const e=this[t];e.playing(this.now)&&e.stop(),this.now=e.play()}},$("#start").show();const d={amt:["hint-first","hint-last"],stop:!1,list:[],index:0,stopIndex:0,ready:!1,running:function(){this.stop||(this.ready||this.start(),this.show())},start:function(){this.ready=!0,T.forEach(((t,e)=>{const s=t.stack;let n=[],i=s.length;if(0===i)return;let o,c,l=!1;for(;i--;){if(c=i,!s[i].front){c+=1;break}n.length?l||s[i].type!==o||s[i].num-n[0].num!=1?!l&&(l=!0):n.unshift(s[i]):(o=s[i].type,n.push(s[i]))}T.forEach(((t,s)=>{if(e!==s){const e=t.stack,i=[];let l,a=e.length,r=a;if(0===a)return void this.list.push(n.concat(c,H[s]));for(;a--&&e[a].front;){if(i.length){if(e[a].type!==l||e[a].num-i[0].num!=1)break;if(e[a-1]&&e[a-1].front&&e[a-1].num===n[n.length-1].num){n.length+(r-a)===13&&i.unshift(e[a]);break}i.unshift(e[a])}else{if(e[a-1]&&e[a-1].front&&e[a-1].num===n[n.length-1].num){n.length+(r-a)===13&&i.unshift(e[a]);break}i.push(e[a]),l=e[a].type}if(n[n.length-1].num-i[0].num==1)break}i.length&&n[n.length-1].num-i[0].num==1&&(o!==l?this.list.push(i.concat(0,n[n.length-1])):this.list.push(i.concat(0,n)))}}))})),this.stopIndex=this.list.length,this.list.sort(p)},show:function(){if(0===this.stopIndex)if(L.list.length){const t=L.list[L.list.length-1][9].el;u.play("hintyes"),$(t).addClass(this.amt[0]),setTimeout((()=>{$(t).removeClass(this.amt[0])}),300)}else u.play("hintno"),a&&(Y.stop(),setTimeout((()=>{alert("没有位置可以移动，游戏结束！")}),500));else{let t=this.amt[0];u.play("hintyes"),this.list[this.index++].forEach((e=>{if("number"==typeof e)return void(t=this.amt[1]);const s=e.el?e.el:e;$(s).addClass(t),setTimeout((()=>{$(s).removeClass(this.amt[0]+" "+this.amt[1])}),300)})),this.index===this.stopIndex&&(this.index=0)}},reset:function(){this.list=[],this.index=this.stopIndex=0,this.ready=!1}};function m(t,e){let s;switch(t){case"h":s=0;break;case"s":s=1;break;case"d":s=2;break;case"c":s=3}return`-${225*(e-1)}px -${315*s}px`}function g(t){const e=document.createElement("div");return e.innerHTML=t,e.children[0]}$("#game-info").hover((function(){$(this).css("background-color","rgba(0, 0, 0, 0.45)")}),(function(){$(this).css("background-color","rgba(0, 0, 0, 0.5)")})),$("#game-info").mousedown((function(){$(this).css("background-color","rgba(0, 0, 0, 0.5)")})),$("#game-info").mouseup((function(){d.running(),$(this).css("background-color","rgba(0, 0, 0, 0.45)")})),$(".level-bt-box button").eq(0).click((function(){b=$(".start-select input:radio[name=select]:checked").val(),W(b),L.init(),L.takeOut(),$("#start").hide(),Y.clear()})),$(".level-bt-box button").eq(1).click((function(){$("#start").hide()})),$(".game-opt button").eq(0).click((function(){a&&!confirm("游戏正在进行，确定重新开始？")||(W(b),L.init(),L.takeOut(),$("#start").hide(),$("#about").hide(),Y.clear())})),$(".game-opt button").eq(1).click((function(){$(`.start-select input:radio[value="${b}"]`).prop("checked","checked"),$("#start").fadeIn("fast"),$("#about").hide()})),$(".game-opt button").eq(2).click((function(){u.on?(u.on=!1,alert("音效已关闭")):(u.on=!0,alert("音效已打开")),$(this).text(u.on?"声音 : 开":"声音 : 关")})),$(".game-opt button").eq(3).click((function(){$("#about").fadeIn("fast"),$("#start").hide()})),$(".mini-opt button").eq(0).click((function(){a&&!confirm("游戏正在进行，确定重新开始？")||(W(b),L.init(),L.takeOut(),$("#start").hide(),$("#about").hide(),Y.clear())})),$(".mini-opt button").eq(1).click((function(){$(`.start-select input:radio[value="${b}"]`).prop("checked","checked"),$("#start").fadeIn("fast"),$("#about").hide()})),$(".mini-opt button").eq(2).click((function(){u.on?(u.on=!1,alert("音效已关闭")):(u.on=!0,alert("音效已打开")),$(this).text(u.on?"声音 : 开":"声音 : 关")})),$(".mini-opt button").eq(3).click((function(){$("#about").fadeIn("fast"),$("#start").hide()})),$(".mini-opt button").eq(4).click((function(t){t.preventDefault(),d.running()})),$("#about-x").click((function(){$("#about").hide()})),$("#start-x").click((function(){$("#start").hide()}));let k=20,x=1,b="1-n";function w(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function v(t){let e,s;for(let n=t.length-1;n>=0;n--)s=t[n],e=w(0,n),t[n]=t[e],t[e]=s}function y(t,e,s,n=!1){if(n){if(0!==t)throw"start must be 0.";if(e>s.length)return void y(t,e,s);const n=e-t+1,i=Math.ceil(s.length/n);for(let t=0;t<i;t++)y(n*t,n*t+(n-1),s)}else{e>s.length&&(e=s.length);const n=s.splice(t,e-t+1);v(n),s.splice(t,0,...n)}}const T=[];let z;function E(t,e){const s=new Array(10);for(let n=0;n<10;n++)s[n]=e+n*t+n*e;return s}const H=[];function M(){const{border:t,cardWidth:e,zoom:s}=h(),n=E(e,t);H.length?(n.forEach(((t,e)=>{if($(H[e]).css({left:t+"px",transform:`scale(${s}, ${s})`}),T[e]){let n=0,i=T[e].accTop;const o=T[e]._getBackNum();T[e].left=t;for(let c=0;c<T[e].stack.length;c++)$(T[e].stack[c].el).css({left:t+"px",top:n+"px",transform:`scale(${s}, ${s})`}),n+=c<o?r.bacc:i}})),L.updateSize(),L.draw(),I.draw()):n.forEach(((t,e)=>{l.append(H[e]=g(`<div class="pad" style="left: ${t}px;top: 0px; width: 225px; height: 315px; transform: scale(${s}, ${s});z-index: 15"></div>`))}))}function W(t){a=!1,e.innerText=0,s.innerText=500,o=0,i=500,k=20,x=1,$("div").remove(".card"),z=function(t){const e=[];let s;function n(t,e){for(let n of e)for(let e=1;e<=13;e++)s=x++,t.push({id:s,type:n,num:e,top:void 0,front:!1,offset:m(n,e),el:g(`<div class="card" data-id=${s} style="width: 225px; height: 315px; transform: scale(${r.zoom}, ${r.zoom});background-image: url(spider/bk.png);z-index: 20;" ></div>`),open:function(){this.front=!0,$(this.el).css({"background-image":"url(spider/poker.png)","background-position":this.offset})},insert:function(t,e,s=!1){return this.top=e,$(this.el).css({left:t+"px",top:e+"px",transform:`scale(${r.zoom}, ${r.zoom})`}),s&&this.open(),l.append(this.el),this}})}const[i,o]=t.split("-");switch(i){case"1":n(e,"ssssssss"),"n"===o?y(0,13,e,!0):"m"===o?y(0,26,e,!0):"h"===o?y(0,52,e,!0):"r"===o&&v(e);break;case"2":n(e,"hshshshs"),"m"===o?y(0,26,e,!0):"h"===o?y(0,52,e,!0):"r"===o&&v(e);break;case"4":n(e,"hsdchsdc"),"h"===o?y(0,52,e,!0):"r"===o&&v(e)}return e}(t),I.list=[];const n=E(r.cardWidth,r.border);n.forEach(((t,e)=>{T[e]={left:t,stack:[],accTop:r.acc,getNextTop:function(t=!1,e=!1){const s=this.stack.length,n=s?this.stack[s-1].top:0;return t?n:s?e?n+r.bacc:n+this.accTop:0},open:function(){const t=this.stack.length;t&&!this.stack[t-1].front&&this.stack[t-1].open()},checkWin:function(){let t,e=this.stack.length,n=1;for(;e--;){if(!this.stack[e].front||t&&this.stack[e].type!==t||this.stack[e].num!==n)return void this.resize(!0);if(t=this.stack[e].type,13===n){const t=[];for(;n--;)t.push(this.stack.pop());let e=!0;for(const t of T)if(0!==t.stack.length){e=!1;break}return s.innerText=i+=100,void I.receive(t,this,e)}n+=1}},_getBackNum:function(){let t=0;if(!this.stack.length)return t;for(const e of this.stack){if(e.front)return t;t+=1}},resize:function(t=!1){if(t&&O.select&&O.select.isCanMove&&O.select.stack.left===this.left)return;let e=this._getBackNum(),s=r.bacc*e,n=s;for(let t=e;t<this.stack.length;t++)n+=r.acc;const i=r.tableHeight-r.cardHeight,o=i-r.cardHeight;this.accTop=0===f?n-r.acc<o?r.acc:(o-s)/(this.stack.length-e-1):n-r.acc<i?r.acc:(i-s)/(this.stack.length-e-1);let c=s;for(let t=e;t<this.stack.length;t++)this.stack[t].top=c,$(this.stack[t].el).animate({top:c+"px",left:this.left+"px"},"fast"),c+=this.accTop}}}));let c=0,h=0;for(let t=0;t<44;t++)h>9&&(h=0,c+=r.bacc),T[h].stack.push(z.pop().insert(n[h],c)),h+=1}M();const L={top:r.tableHeight-r.cardHeight,left:r.tableWidth-r.cardWidth-r.border,leftOffset:r.cardWidth/6.5,list:[],updateSize:function(){this.top=r.tableHeight-r.cardHeight,this.left=r.tableWidth-r.cardWidth-r.border,this.leftOffset=r.cardWidth/6.5},draw:function(){let t=0;this.list.forEach((e=>{for(let s=0;s<10;s++)$(e[s].el).css({left:this.left+t+"px",top:this.top+"px",transform:`scale(${r.zoom}, ${r.zoom})`});t-=this.leftOffset}))},init:function(){let t=0;for(let e=0;e<6;e++){this.list[e]=[];for(let s=0;s<10;s++){const n=z.shift();9===s&&e<5&&$(n.el).click((function(){let t=0,s=!0;for(const e of T)s&&0===e.stack.length?s=!1:t+=e.stack.length;if(t<10)return alert("桌面剩余纸牌少于10张，不能发牌，游戏结束！"),void Y.stop();s?L.takeOut(e,this):alert("有空位，不能发牌！")})),this.list[e][s]=n.insert(this.left+t,this.top)}t-=L.leftOffset}},takeOut:function(t=5,e=null){if(t!==this.list.length-1)return;e&&$(e).unbind(),d.stop=!0,O.isLock=!0;const s=this.list.pop().reverse(),n=E(r.cardWidth,r.border);s.forEach(((t,e)=>{const s=T[e].getNextTop(!1,5===this.list.length),i=n[e];let o;o=e<9?function(){T[e].stack.push(t.insert(i,s))}:function(){T[e].stack.push(t.insert(i,s)),d.stop=!1,O.isLock=!1,d.reset();for(let t=0;t<10;t++)T[t].checkWin()},setTimeout((()=>{t.open(),u.play("call"),$(t.el).css("z-index",k++).animate({left:i+"px",top:s+"px"},100,o)}),100*e)})),!a&&this.list.length<5&&(a=!0,Y.start())}},I={list:[],top:L.top,left:r.border,draw:function(){let t=r.border,e=this.list.length;for(let s=0;s<e;s++)$(this.list[s][12].el).css({left:t+"px",top:r.tableHeight-r.cardHeight+"px",transform:`scale(${r.zoom}, ${r.zoom})`}),t+=L.leftOffset},receive:function(t,e,s){d.stop=!0;let n=r.border;this.list.forEach((()=>n+=L.leftOffset)),this.list.push(t);const i=this.list.length;t.forEach(((o,c)=>{let l;12===c&&(l=function(){e.open(),e.resize(),d.stop=!1;for(let e=0;e<t.length-1;e++)$(t[e].el).css("display","none");$(t[c].el).css("z-index",i+20),s&&(a=!1,u.play("win"),$("#win-box").slideDown(),$("#firework").show(),Y.stop())}),setTimeout((()=>{$(o.el).css("z-index",k++).animate({left:n+"px",top:r.tableHeight-r.cardHeight+"px"},100,l),u.play("call")}),100*c)}))}},q=$(l).position().left,C=$(l).position().top;let O=Object.create(null);function D(t){const e=t.select.stack,s=e.accTop;let n=t.select.cards[0].top;t.select.cards.forEach(((i,o)=>{let c;o===t.select.cards.length-1&&(c=function(){u.play("put"),t.isLock=!1,t.select=null}),$(i.el).animate({left:e.left+"px",top:n+"px"},t.dueReput,c),n+=s})),N.animate(e.left,t.select.cards[0].top,t.select)}O.select=null,O.isLock=!1,O.dueReput=80,O.duePut=100;const N={el:c("#shadow"),start:function(t){t.cards[0].el.style.zIndex=k++,$(this.el).css({borderRadius:Math.floor(r.cardWidth/12)+"px",zIndex:k-1,left:t.stack.left+"px",top:t.cards[0].top+"px",width:r.cardWidth+"px",height:(t.cards.length-1)*r.acc+r.cardHeight+"px",display:"block"})},animate:function(t,e,s){const n={left:t+"px",top:e+"px"};s&&(n.height=(s.cards.length-1)*s.stack.accTop+r.cardHeight+"px"),$(this.el).animate(n,s?O.dueReput:O.duePut,(function(){N.end()}))},move:function(t,e,s){$(this.el).css({left:t+"px",top:e+"px",height:(s.cards.length-1)*r.acc+r.cardHeight+"px"})},end:function(){$(this.el).hide()}},P=[];$(l).mousedown((function(t){if(P.length){let t=P.length;for(;t--;)$(P.pop()).css("filter","brightness(1)")}if(t.preventDefault(),!O.isLock&&t.target.dataset.id){if(O.select=function(t){t=parseInt(t);for(const e of T){const s=e.stack.length;for(let n=0;n<s;n++)if(t===e.stack[n].id){const t=[];if(n===s-1)t.push(e.stack[n]);else{let i;for(let o=n;o<s;o++){const s=e.stack[o];if(!s.front||i&&i!==s.type){t.length=0;break}if(i=s.type,t.length){if(t[t.length-1].num-s.num!=1)return{isCanMove:!1,stack:e};t.push(s)}else t.push(s)}}return{isCanMove:!!t.length,cards:t,stack:e}}}return{isCanMove:!1,stack:{stack:[]}}}(t.target.dataset.id),O.select.isCanMove){if(N.start(O.select),O.isLock=!0,u.play("take"),O.select.cards.length>1){const t=Math.floor(r.acc)!==Math.floor(O.select.stack.accTop);let e=O.select.cards[0].top;O.select.cards.forEach((s=>{$(s.el).css({zIndex:k++}),t&&($(s.el).css({left:O.select.stack.left+"px",top:e}),e+=r.acc)}))}else O.select.cards[0].el.style.zIndex=k++;O.mousedownLeft=q+t.offsetX*r.zoom,O.mousedownTop=C+t.offsetY*r.zoom}else if(O.select.stack.stack.length){const t=O.select.stack.stack;let e=t.length;const s=t[e-1].type;let n,i=t[e-1].num;for(P.push(t[e-1].el),e-=1;e--&&(n=t[e],n.front&&n.type===s&&n.num-i==1);)i=n.num,P.push(n.el);P.forEach((t=>{$(t).css("filter","brightness(0.7)")}))}}else O.select&&O.select.isCanMove&&D(O)})).mousemove((function(t){if(t.preventDefault(),O.select&&O.select.isCanMove){O.mousemoveLeft=t.pageX,O.mousemoveTop=t.pageY;let e=0;O.select.cards.forEach((t=>{$(t.el).css({left:O.mousemoveLeft-O.mousedownLeft+"px",top:O.mousemoveTop-O.mousedownTop+e+"px"}),e+=r.acc})),N.move(O.mousemoveLeft-O.mousedownLeft,O.mousemoveTop-O.mousedownTop,O.select)}})).mouseup((function(t){if(t.preventDefault(),O.select&&O.select.isCanMove){for(const t of T)if(Math.abs(t.left-(O.mousemoveLeft-O.mousedownLeft))<Math.abs(t.left-(t.left-r.border/2-r.cardWidth/2))){if(t!==O.select.stack&&0===t.stack.length||t.stack[t.stack.length-1].num-O.select.cards[0].num==1){let n=t.getNextTop();return O.select.cards.forEach(((e,s)=>{let i;s===O.select.cards.length-1&&(i=function(){u.play("put");let e=O.select.cards.length;const s=[];for(;e--;)s.unshift(O.select.stack.stack.pop());t.stack.push(...s),t.checkWin(),O.select.stack.open(),O.select.stack.resize(),O.isLock=!1,O.select=null}),$(e.el).animate({left:t.left+"px",top:n+"px"},O.duePut,i),e.top=n,n+=r.acc})),N.animate(t.left,t.getNextTop()),a||(a=!0,Y.start()),e.innerText=o+=1,s.innerText=i-=1,void d.reset()}break}D(O)}})).mouseenter((function(t){0===t.buttons&&O.select&&O.select.isCanMove&&D(O)}));let S=!1,R=!1;$(document).on("wheel",(function(t){if(a)if(!S&&t.originalEvent.deltaY<0){R=!(S=!0),f=0;for(let t=0;t<10;t++)T[t].resize()}else if(!R&&t.originalEvent.deltaY>0){S=!(R=!0),f=1;for(let t=0;t<10;t++)T[t].resize()}})),$(window).resize((function(){M()}));const Y={displayEle:document.querySelector("#game-timer"),miniDisPlayEle:document.querySelector("#mini-game-timer"),counter:0,start:function(){let t=0;this.end=setInterval((()=>{this.counter+=1,this.counter<60?this.miniDisPlayEle.innerText=this.displayEle.innerText="0 : "+(this.counter<10?"0"+this.counter:this.counter):this.counter<3600&&(t=this.counter%60,this.miniDisPlayEle.innerText=this.displayEle.innerText=Math.floor(this.counter/60)+" : "+(t<10?"0"+t:t))}),1e3)},stop:function(){this.end&&clearInterval(this.end)},clear:function(){this.stop(),this.counter=0,this.miniDisPlayEle.innerText=this.displayEle.innerText="0 : 00"}};$(document.body).append(`<iframe id="firework" title="win" style="display: none; position: fixed; border: none; top: 0; left: 0; z-index: 99999999; width: ${r.tableWidth}px; height: ${r.tableHeight}px" src="spider/fire.html" ></iframe>`),n=c("#firework"),n.onload=function(){n.contentWindow.document.body.style.height=r.tableHeight+"px",n.contentWindow.onclick=function(){$("#win-box").hide(),$("#firework").hide(),$("#start").show()}}}));