import{s as Ot,y as Et,d as g,H as Os,z as Dt,A as Ft,B as Ht,i as b,b as De,C as Mt,c as V,f as ce,j as st,e as h,l as de,k as q,m as Lt,q as xt,n as je,p as Hs,a as Ms,g as et,M as Qs,o as Cs,r as _t,J as Us,t as Tt,h as Bs,u as Ze,v as xe,x as Ke}from"../chunks/scheduler.fW7yY31m.js";import{S as Qt,i as Ut,t as c,a as f,g as te,c as se,d as S,m as T,b as I,e as E}from"../chunks/index.DLlk0QKX.js";import{G as Kt}from"../chunks/GradientBarChart.BPK9hydh.js";import{u as ht,e as Nt,R as Gs,Q as $e,a as Ps,s as Ws,p as Vs,D as jt,C as U,r as es,c as zs}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YyYGKAEJ.js";import{w as As,r as Ys}from"../chunks/entry.DzP7nCf5.js";import{E as Xs}from"../chunks/sortedTooltip.BqKhJuvY.js";import{S as ts}from"../chunks/SortedLineChart.hDHjt0DN.js";import{A as Ls}from"../chunks/Alert.TigfWg22.js";import{h as B,p as Js}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Ks}from"../chunks/stores.adFM5OC5.js";import{T as Ns,B as Zs}from"../chunks/ButtonGroup.DRZjiRcZ.js";import{G as xs}from"../chunks/Grid.CtPFXHqb.js";import{Q as ke}from"../chunks/QueryViewer.Bv4472B1.js";import{g as er}from"../chunks/HiddenInPrint.BYSZobVL.js";import{V as tr,B as It}from"../chunks/BigValue.Bavyh20w.js";import{S as sr}from"../chunks/ScatterPlot.CXc1FzZa.js";const{window:Ct}=er;function ss(n,t,s){const e=n.slice();return e[16]=t[s],e}function rs(n){let t,s,e=Nt(n[5].tabs),r=[];for(let a=0;a<e.length;a+=1)r[a]=ns(ss(n,e,a));const i=a=>c(r[a],1,1,()=>{r[a]=null});return{c(){t=de("nav");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){t=ce(a,"NAV",{class:!0});var d=st(t);for(let $=0;$<r.length;$+=1)r[$].l(d);d.forEach(g),this.h()},h(){V(t,"class","my-5 flex flex-wrap gap-x-0 gap-y-1 border-b")},m(a,d){b(a,t,d);for(let $=0;$<r.length;$+=1)r[$]&&r[$].m(t,null);s=!0},p(a,d){if(d&32942){e=Nt(a[5].tabs);let $;for($=0;$<e.length;$+=1){const _=ss(a,e,$);r[$]?(r[$].p(_,d),f(r[$],1)):(r[$]=ns(_),r[$].c(),f(r[$],1),r[$].m(t,null))}for(te(),$=e.length;$<r.length;$+=1)i($);se()}},i(a){if(!s){for(let d=0;d<e.length;d+=1)f(r[d]);s=!0}},o(a){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)c(r[d]);s=!1},d(a){a&&g(t),Ms(r,a)}}}function rr(n){let t,s;const e=n[9].default,r=Et(e,n,n[15],null);return{c(){r&&r.c(),t=q()},l(i){r&&r.l(i),t=h(i)},m(i,a){r&&r.m(i,a),b(i,t,a),s=!0},p(i,a){r&&r.p&&(!s||a&32768)&&Dt(r,e,i,i[15],s?Ht(e,i[15],a,null):Ft(i[15]),null)},i(i){s||(f(r,i),s=!0)},o(i){c(r,i),s=!1},d(i){i&&g(t),r&&r.d(i)}}}function ns(n){let t,s;function e(){return n[14](n[16])}return t=new Ns({props:{id:n[16].id,label:n[16].label,description:n[16].description,fullWidth:ht(n[2]),background:ht(n[3]),color:n[1],activeId:n[5].activeId,$$slots:{default:[rr]},$$scope:{ctx:n}}}),t.$on("click",e),{c(){E(t.$$.fragment)},l(r){I(t.$$.fragment,r)},m(r,i){T(t,r,i),s=!0},p(r,i){n=r;const a={};i&32&&(a.id=n[16].id),i&32&&(a.label=n[16].label),i&32&&(a.description=n[16].description),i&4&&(a.fullWidth=ht(n[2])),i&8&&(a.background=ht(n[3])),i&2&&(a.color=n[1]),i&32&&(a.activeId=n[5].activeId),i&32768&&(a.$$scope={dirty:i,ctx:n}),t.$set(a)},i(r){s||(f(t.$$.fragment,r),s=!0)},o(r){c(t.$$.fragment,r),s=!1},d(r){S(t,r)}}}function nr(n){let t,s,e,r,i,a,d=(!n[4]||!n[0])&&rs(n);const $=n[9].default,_=Et($,n,n[15],null);return{c(){t=de("section"),d&&d.c(),s=q(),e=de("div"),_&&_.c(),this.h()},l(w){t=ce(w,"SECTION",{});var m=st(t);d&&d.l(m),s=h(m),e=ce(m,"DIV",{class:!0});var o=st(e);_&&_.l(o),o.forEach(g),m.forEach(g),this.h()},h(){V(e,"class","text-base")},m(w,m){b(w,t,m),d&&d.m(t,null),De(t,s),De(t,e),_&&_.m(e,null),r=!0,i||(a=[Mt(Ct,"beforeprint",n[10]),Mt(Ct,"afterprint",n[11]),Mt(Ct,"export-beforeprint",n[12]),Mt(Ct,"export-afterprint",n[13])],i=!0)},p(w,[m]){!w[4]||!w[0]?d?(d.p(w,m),m&17&&f(d,1)):(d=rs(w),d.c(),f(d,1),d.m(t,s)):d&&(te(),c(d,1,1,()=>{d=null}),se()),_&&_.p&&(!r||m&32768)&&Dt(_,$,w,w[15],r?Ht($,w[15],m,null):Ft(w[15]),null)},i(w){r||(f(d),f(_,w),r=!0)},o(w){c(d),c(_,w),r=!1},d(w){w&&g(t),d&&d.d(),_&&_.d(w),i=!1,Os(a)}}}function ir(n,t,s){let e,{$$slots:r={},$$scope:i}=t,{id:a}=t,{color:d=void 0}=t,{printShowAll:$=!0}=t,_=!1,{fullWidth:w=!1}=t,{background:m=!1}=t;const o=As({tabs:[],activeId:null});Lt(n,o,F=>s(5,e=F)),xt(()=>{var G,K;const P=new URL(window.location.href).searchParams.get(a);P?e.tabs.find(z=>z.id===P)?je(o,e.activeId=P,e):je(o,e.activeId=(G=e.tabs[0])==null?void 0:G.id,e):je(o,e.activeId=(K=e.tabs[0])==null?void 0:K.id,e)}),Hs("TABS_STORE",o);const y=F=>{je(o,e.activeId=F,e)},D=()=>s(4,_=!0),v=()=>s(4,_=!1),A=()=>s(4,_=!0),k=()=>s(4,_=!1),Q=F=>y(F.id);return n.$$set=F=>{"id"in F&&s(8,a=F.id),"color"in F&&s(1,d=F.color),"printShowAll"in F&&s(0,$=F.printShowAll),"fullWidth"in F&&s(2,w=F.fullWidth),"background"in F&&s(3,m=F.background),"$$scope"in F&&s(15,i=F.$$scope)},n.$$.update=()=>{var F;if(n.$$.dirty&1&&s(0,$=ht($)),n.$$.dirty&288&&!e.activeId&&e.tabs.length&&!a&&je(o,e.activeId=e.tabs[0].id,e),n.$$.dirty&288&&!e.tabs.find(P=>P.id===e.activeId)&&!a&&je(o,e.activeId=(F=e.tabs[0])==null?void 0:F.id,e),n.$$.dirty&2&&je(o,e.color=d,e),n.$$.dirty&16&&je(o,e.printing=_,e),n.$$.dirty&1&&je(o,e.printShowAll=$,e),n.$$.dirty&288&&e.activeId&&a){const P=new URL(window.location.href);P.searchParams.set(a,e.activeId),history.replaceState({},"",P)}},[$,d,w,m,_,e,o,y,a,r,D,v,A,k,Q,i]}class ar extends Qt{constructor(t){super(),Ut(this,t,ir,nr,Ot,{id:8,color:1,printShowAll:0,fullWidth:2,background:3})}}function is(n,t,s){const e=n.slice();return e[11]=t[s],e}function lr(n){let t,s,e,r,i=Nt(n[2].tabs),a=[];for(let w=0;w<i.length;w+=1)a[w]=as(is(n,i,w));const d=w=>c(a[w],1,1,()=>{a[w]=null}),$=n[7].default,_=Et($,n,n[8],null);return{c(){t=de("nav");for(let w=0;w<a.length;w+=1)a[w].c();s=q(),e=de("div"),_&&_.c(),this.h()},l(w){t=ce(w,"NAV",{class:!0});var m=st(t);for(let y=0;y<a.length;y+=1)a[y].l(m);m.forEach(g),s=h(w),e=ce(w,"DIV",{class:!0});var o=st(e);_&&_.l(o),o.forEach(g),this.h()},h(){V(t,"class","my-6 flex flex-wrap gap-x-1 gap-y-1 border-b"),V(e,"class","text-base")},m(w,m){b(w,t,m);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(t,null);b(w,s,m),b(w,e,m),_&&_.m(e,null),r=!0},p(w,m){if(m&277){i=Nt(w[2].tabs);let o;for(o=0;o<i.length;o+=1){const y=is(w,i,o);a[o]?(a[o].p(y,m),f(a[o],1)):(a[o]=as(y),a[o].c(),f(a[o],1),a[o].m(t,null))}for(te(),o=i.length;o<a.length;o+=1)d(o);se()}_&&_.p&&(!r||m&256)&&Dt(_,$,w,w[8],r?Ht($,w[8],m,null):Ft(w[8]),null)},i(w){if(!r){for(let m=0;m<i.length;m+=1)f(a[m]);f(_,w),r=!0}},o(w){a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)c(a[m]);c(_,w),r=!1},d(w){w&&(g(t),g(s),g(e)),Ms(a,w),_&&_.d(w)}}}function or(n){let t,s,e=n[1]&&ls(n);return{c(){e&&e.c(),t=et()},l(r){e&&e.l(r),t=et()},m(r,i){e&&e.m(r,i),b(r,t,i),s=!0},p(r,i){r[1]?e?(e.p(r,i),i&2&&f(e,1)):(e=ls(r),e.c(),f(e,1),e.m(t.parentNode,t)):e&&(te(),c(e,1,1,()=>{e=null}),se())},i(r){s||(f(e),s=!0)},o(r){c(e),s=!1},d(r){r&&g(t),e&&e.d(r)}}}function _r(n){let t,s;const e=n[7].default,r=Et(e,n,n[8],null);return{c(){r&&r.c(),t=q()},l(i){r&&r.l(i),t=h(i)},m(i,a){r&&r.m(i,a),b(i,t,a),s=!0},p(i,a){r&&r.p&&(!s||a&256)&&Dt(r,e,i,i[8],s?Ht(e,i[8],a,null):Ft(i[8]),null)},i(i){s||(f(r,i),s=!0)},o(i){c(r,i),s=!1},d(i){i&&g(t),r&&r.d(i)}}}function as(n){let t,s;return t=new Ns({props:{id:n[11].id,label:n[11].label,activeId:n[0],color:n[4],$$slots:{default:[_r]},$$scope:{ctx:n}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r&4&&(i.id=e[11].id),r&4&&(i.label=e[11].label),r&1&&(i.activeId=e[0]),r&256&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ls(n){let t,s;const e=n[7].default,r=Et(e,n,n[8],null);return{c(){t=de("div"),r&&r.c(),this.h()},l(i){t=ce(i,"DIV",{class:!0});var a=st(t);r&&r.l(a),a.forEach(g),this.h()},h(){V(t,"class","mb-5")},m(i,a){b(i,t,a),r&&r.m(t,null),s=!0},p(i,a){r&&r.p&&(!s||a&256)&&Dt(r,e,i,i[8],s?Ht(e,i[8],a,null):Ft(i[8]),null)},i(i){s||(f(r,i),s=!0)},o(i){c(r,i),s=!1},d(i){i&&g(t),r&&r.d(i)}}}function fr(n){let t,s,e,r;const i=[or,lr],a=[];function d($,_){return!$[2].printing||!$[2].printShowAll?0:1}return t=d(n),s=a[t]=i[t](n),{c(){s.c(),e=et()},l($){s.l($),e=et()},m($,_){a[t].m($,_),b($,e,_),r=!0},p($,[_]){let w=t;t=d($),t===w?a[t].p($,_):(te(),c(a[w],1,1,()=>{a[w]=null}),se(),s=a[t],s?s.p($,_):(s=a[t]=i[t]($),s.c()),f(s,1),s.m(e.parentNode,e))},i($){r||(f(s),r=!0)},o($){c(s),r=!1},d($){$&&g(e),a[t].d($)}}}function mr(n,t,s){let e,{$$slots:r={},$$scope:i}=t,{label:a}=t,{id:d}=t,{selected:$}=t,{description:_=void 0}=t;const w=Gs(),m=Qs("TABS_STORE");Lt(n,m,D=>s(2,e=D));const o=()=>{je(m,e.tabs=[...e.tabs.filter(D=>D.internalId!==w),{internalId:w,id:d,label:a,description:_}],e),$&&je(m,e.activeId=d,e)};xt(()=>m.subscribe(({activeId:D})=>{s(1,$=D===d)})),Cs(()=>{je(m,e.tabs=e.tabs.filter(D=>D.internalId!==w),e)});const y=e.color;return n.$$set=D=>{"label"in D&&s(5,a=D.label),"id"in D&&s(0,d=D.id),"selected"in D&&s(1,$=D.selected),"description"in D&&s(6,_=D.description),"$$scope"in D&&s(8,i=D.$$scope)},n.$$.update=()=>{n.$$.dirty&33&&s(0,d=d??a),n.$$.dirty&2&&s(1,$=ht($)),n.$$.dirty&33&&d&&a&&o()},[d,$,e,m,y,a,_,r,i]}class os extends Qt{constructor(t){super(),Ut(this,t,mr,fr,Ot,{label:5,id:0,selected:1,description:6})}}function _s(n){let t,s;return t=new Xs({props:{config:n[3],data:n[0],height:n[2]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r&8&&(i.config=e[3]),r&1&&(i.data=e[0]),r&4&&(i.height=e[2]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ur(n){let t,s,e=n[1].length>0&&_s(n);return{c(){e&&e.c(),t=et()},l(r){e&&e.l(r),t=et()},m(r,i){e&&e.m(r,i),b(r,t,i),s=!0},p(r,[i]){r[1].length>0?e?(e.p(r,i),i&2&&f(e,1)):(e=_s(r),e.c(),f(e,1),e.m(t.parentNode,t)):e&&(te(),c(e,1,1,()=>{e=null}),se())},i(r){s||(f(e),s=!0)},o(r){c(e),s=!1},d(r){r&&g(t),e&&e.d(r)}}}const At="#9ca3af",cr=9,Zt=19.5,dr=3.3;function pr(n,t,s){let e,r,i,a,d,$,_,w,m,o,y,D=_t,v=()=>(D(),D=Us(e,R=>s(14,y=R)),e);n.$$.on_destroy.push(()=>D());let{data:A}=t,{rowHeight:k=24}=t,{tickColor:Q="#f59e0b"}=t,{bands:F=[.1,.3]}=t;const P=(R,M)=>{const L=(R??"#236aa4").replace("#",""),j=parseInt(L.slice(0,6),16);return`rgba(${j>>16&255}, ${j>>8&255}, ${j&255}, ${M})`},G=[{key:"1",title:"Sector 1",noun:"sector 1"},{key:"2",title:"Sector 2",noun:"sector 2"},{key:"3",title:"Sector 3",noun:"sector 3"},{key:"total",title:"Lap",noun:"lap"}],K=R=>cr+R*(Zt+dr),z=R=>Math.min(...R.filter(M=>M!=null)),ye=R=>Math.ceil(Math.max(.4,...R)*10)/10;return n.$$set=R=>{"data"in R&&s(0,A=R.data),"rowHeight"in R&&s(5,k=R.rowHeight),"tickColor"in R&&s(6,Q=R.tickColor),"bands"in R&&s(7,F=R.bands)},n.$$.update=()=>{n.$$.dirty&1&&$e.isQuery(A)&&A.fetch(),n.$$.dirty&1&&v(s(4,e=$e.isQuery(A)?A:Ys(A??[]))),n.$$.dirty&16384&&s(1,r=y&&(y.dataLoaded??!0)?Array.from(y):[]),n.$$.dirty&2&&s(13,i=Object.fromEntries(G.map(R=>[R.key,z(r.map(M=>M[`target_${R.key}`]))]))),n.$$.dirty&8192&&s(8,a=(R,M,L)=>R[`${M}_${L}`]==null?null:Math.round((R[`${M}_${L}`]-i[L])*1e3)/1e3),n.$$.dirty&258&&s(11,d=ye(r.flatMap(R=>["1","2","3"].map(M=>a(R,"actual",M)??0)))),n.$$.dirty&258&&s(12,$=ye(r.map(R=>a(R,"actual","total")??0))),n.$$.dirty&6144&&s(9,_=R=>R==="total"?$:d),n.$$.dirty&2&&s(10,w=r.map(R=>R.label)),n.$$.dirty&2018&&s(3,m={animation:!1,title:G.map((R,M)=>({text:R.title,left:`${K(M)+Zt/2}%`,top:0,textAlign:"center",textStyle:{fontSize:13,fontWeight:600,color:At}})),tooltip:{trigger:"item",formatter:R=>{var C;const M=r[(C=R.data)==null?void 0:C.rowIndex];if(!M)return"";const L=G.find(Fe=>Fe.key===R.data.panel),j=M[`actual_${L.key}`],p=M[`target_${L.key}`];return`<b>${M.label}</b>, ${L.noun}<br/>Qualifying lap: ${j==null?void 0:j.toFixed(3)} s<br/>Ideal: ${p==null?void 0:p.toFixed(3)} s<br/>Lost: <b>${(j-p).toFixed(3)} s</b>`}},grid:G.map((R,M)=>({left:`${K(M)}%`,width:`${Zt}%`,top:28,bottom:34})),xAxis:G.map((R,M)=>({type:"value",gridIndex:M,min:0,max:_(R.key),splitNumber:3,axisLabel:{color:At,fontSize:10,showMaxLabel:!1,formatter:L=>`+${L.toFixed(1)}`},splitLine:{show:!1},name:M===1?"Gap to fastest ideal of the weekend (s)":"",nameLocation:"middle",nameGap:22,nameTextStyle:{color:At,fontSize:11}})),yAxis:G.map((R,M)=>({type:"category",gridIndex:M,data:w,inverse:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:M===0,color:At,fontSize:11}})),series:G.flatMap((R,M)=>[{type:"bar",name:R.title,xAxisIndex:M,yAxisIndex:M,barWidth:"46%",data:r.map((L,j)=>({value:a(L,"actual",R.key),rowIndex:j,panel:R.key,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:P(L.team_colour,.35)},{offset:1,color:P(L.team_colour,1)}]},borderRadius:[0,2,2,0]}})),markArea:{silent:!0,data:[[{xAxis:0,itemStyle:{color:"rgba(148, 163, 184, 0.24)"}},{xAxis:F[0]}],[{xAxis:F[0],itemStyle:{color:"rgba(148, 163, 184, 0.13)"}},{xAxis:F[1]}],[{xAxis:F[1],itemStyle:{color:"rgba(148, 163, 184, 0.05)"}},{xAxis:_(R.key)}]]},z:2},{type:"scatter",name:`Ideal ${R.noun}`,xAxisIndex:M,yAxisIndex:M,symbol:"rect",symbolSize:[3,Math.round(k*.75)],itemStyle:{color:Q},data:r.map((L,j)=>({value:[a(L,"target",R.key),L.label],rowIndex:j,panel:R.key})),z:3}])}),n.$$.dirty&34&&s(2,o=`${Math.max(160,r.length*k+70)}px`)},[A,r,o,m,e,k,Q,F,a,_,w,d,$,i,y]}class gr extends Qt{constructor(t){super(),Ut(this,t,pr,ur,Ot,{data:0,rowHeight:5,tickColor:6,bands:7})}}function $r(n){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:_t,p:_t,d:_t}}function fs(n){let t,s;return t=new ke({props:{queryID:"meeting",queryResult:n[0]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&1&&(i.queryResult=e[0]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function yr(n){let t,s,e,r,i,a,d,$,_,w='<a href="#ideal-lap-vs-qualifying-lap">Ideal Lap vs Qualifying Lap</a>',m,o,y,D='Each driver&#39;s <strong class="markdown">ideal lap</strong> is their fastest sector 1, 2 and 3 from <em class="markdown">any</em> practice or qualifying session of the weekend, added together. The gap to their best Grand Prix qualifying lap is the time they left on the table: how much quicker they could have gone if everything had come together on one lap.',v,A,k,Q,F,P='<a href="#where-the-time-went-sector-by-sector">Where the Time Went: Sector by Sector</a>',G,K,z,ye='<strong class="markdown">Bar</strong> = the sector on the driver&#39;s best qualifying lap. <strong class="markdown">Amber tick</strong> = their ideal sector, the fastest they went through it all weekend. Both are measured from the fastest ideal sector anyone set, so the space between the bar&#39;s end and the tick is time lost in that sector. The <strong class="markdown">Lap</strong> panel adds it all up: best qualifying lap vs ideal lap, measured from the fastest ideal lap of the weekend, on its own scale. Shaded bands mark 0.1 s and 0.3 s off the benchmark. Hover for exact times.',R,M,L,j,p,C,Fe='<a href="#position-by-lap">Position by Lap</a>',Ae,be,W,Ie,we,pe,H='<a href="#race-trace">Race Trace</a>',O,he,ge,ue,Oe,ve,rt='<a href="#tyre-strategy">Tyre Strategy</a>',nt,Ge,Pe,qe,Qe,Ee,$t='<a href="#race-pace-vs-top-speed">Race Pace vs Top Speed</a>',it,We,He,Re,Ve,Le,yt='<a href="#tyre-degradation">Tyre Degradation</a>',at,Me,Se,ze,Ne,bt='<a href="#pit-stops">Pit Stops</a>',lt,Ce,Te,Ye,re=n[1]&&ms(n);s=new Zs({props:{name:"session",data:n[1],value:"session_name",defaultValue:"Race"}});let ne=n[2]&&us(n);i=new xs({props:{cols:"5",$$slots:{default:[wr]},$$scope:{ctx:n}}}),d=new ar({props:{$$slots:{default:[Rr]},$$scope:{ctx:n}}});let ie=n[5]&&ps(n),Z=n[5].length>0&&!n[5][0].is_comparable_weekend&&gs(n);k=new Kt({props:{data:n[5],emptySet:"pass",emptyMessage:"No qualifying sector data recorded.",x:"driver_code",y:"time_left_s",swapXY:"true",sort:"false",yFmt:"0.000",yAxisTitle:"Time left on the table (s), in qualifying order",chartAreaHeight:"420"}});let Y=n[6]&&$s(n);M=new gr({props:{data:n[6]}}),j=new jt({props:{data:n[5],rows:"all",emptySet:"pass",emptyMessage:"No qualifying sector data recorded.",$$slots:{default:[Tr]},$$scope:{ctx:n}}});let x=n[7]&&ys(n),ae=n[8]&&bs(n);Ie=new ts({props:{data:n[7],tooltipSort:"asc",tooltipDecimals:"0",emptySet:"pass",emptyMessage:"No position data recorded.",x:"lap_number",y:"position",series:"driver_code",seriesColors:Object.fromEntries([...n[8]].map(Is)),xAxisTitle:"Lap",yAxisTitle:"Position",yMin:"1",chartAreaHeight:"420",echartsOptions:{grid:{left:48},yAxis:{inverse:!0,nameLocation:"middle",nameRotate:90,nameGap:42,interval:1}}}});let le=n[9]&&ws(n),oe=n[10]&&vs(n);ue=new ts({props:{data:n[9],tooltipSort:"asc",tooltipDecimals:"1",emptySet:"pass",emptyMessage:"No interval data recorded.",x:"lap_number",y:"gap_to_leader_s",series:"driver_code",seriesColors:Object.fromEntries([...n[10]].map(Es)),xAxisTitle:"Lap",yAxisTitle:"Gap to leader (s)",chartAreaHeight:"380",echartsOptions:{grid:{left:48},yAxis:{inverse:!0,nameLocation:"middle",nameRotate:90,nameGap:42}},subtitle:"Top 10 finishers. Jumps are pit stops; gaps collapsing together usually mean a safety car."}});let X=n[11]&&ks(n),J=n[12]&&hs(n);qe=new Kt({props:{data:n[11],emptySet:"pass",emptyMessage:"No tyre data recorded.",x:"driver_code",y:"stint_length_laps",series:"stint",swapXY:"true",sort:"false",legend:"false",fillOpacity:"1",seriesColors:Object.fromEntries([...n[12]].map(Ds)),yAxisTitle:"Laps",chartAreaHeight:"440",subtitle:"Drivers in finishing order. Red = Soft, Yellow = Medium, Grey = Hard, Green = Intermediate, Blue = Wet."}});let ee=n[13]&&qs(n),_e=n[14]&&Rs(n);Re=new sr({props:{data:n[13],emptySet:"pass",emptyMessage:"Not enough clean laps to compare.",x:"top_speed_kph",y:"median_fuel_corrected_lap_s",series:"team_name",tooltipTitle:"driver_name",seriesColors:Object.fromEntries([...n[14]].map(Fs)),xAxisTitle:"Top speed in speed trap (km/h)",yAxisTitle:"Median race lap, fuel-corrected (s)",yFmt:"0.0",pointSize:"12",chartAreaHeight:"360",echartsOptions:{grid:{left:48},yAxis:{inverse:!0,nameLocation:"middle",nameRotate:90,nameGap:42,scale:!0},xAxis:{scale:!0}},subtitle:"Higher = faster race pace. Right = faster on the straights. Low-drag setups sit bottom-right; high-downforce setups top-left."}});let fe=n[15]&&Ss(n);Se=new Kt({props:{data:n[15],emptySet:"pass",emptyMessage:"Not enough long stints to measure degradation.",x:"compound",y:"deg_s_per_lap",sort:"false",yFmt:"0.000",yAxisTitle:"Seconds lost per lap of tyre age",subtitle:"Median across stints with at least 5 clean laps, fuel-corrected (0.03 s per lap of fuel)."}});let me=n[16]&&Ts(n);return Te=new jt({props:{data:n[16],rows:"10",search:"true",emptySet:"pass",emptyMessage:"No pit stop data recorded for this race.",$$slots:{default:[Ir]},$$scope:{ctx:n}}}),{c(){re&&re.c(),t=q(),E(s.$$.fragment),e=q(),ne&&ne.c(),r=q(),E(i.$$.fragment),a=q(),E(d.$$.fragment),$=q(),_=de("h2"),_.innerHTML=w,m=q(),ie&&ie.c(),o=q(),y=de("p"),y.innerHTML=D,v=q(),Z&&Z.c(),A=q(),E(k.$$.fragment),Q=q(),F=de("h3"),F.innerHTML=P,G=q(),Y&&Y.c(),K=q(),z=de("p"),z.innerHTML=ye,R=q(),E(M.$$.fragment),L=q(),E(j.$$.fragment),p=q(),C=de("h2"),C.innerHTML=Fe,Ae=q(),x&&x.c(),be=q(),ae&&ae.c(),W=q(),E(Ie.$$.fragment),we=q(),pe=de("h2"),pe.innerHTML=H,O=q(),le&&le.c(),he=q(),oe&&oe.c(),ge=q(),E(ue.$$.fragment),Oe=q(),ve=de("h2"),ve.innerHTML=rt,nt=q(),X&&X.c(),Ge=q(),J&&J.c(),Pe=q(),E(qe.$$.fragment),Qe=q(),Ee=de("h2"),Ee.innerHTML=$t,it=q(),ee&&ee.c(),We=q(),_e&&_e.c(),He=q(),E(Re.$$.fragment),Ve=q(),Le=de("h2"),Le.innerHTML=yt,at=q(),fe&&fe.c(),Me=q(),E(Se.$$.fragment),ze=q(),Ne=de("h2"),Ne.innerHTML=bt,lt=q(),me&&me.c(),Ce=q(),E(Te.$$.fragment),this.h()},l(l){re&&re.l(l),t=h(l),I(s.$$.fragment,l),e=h(l),ne&&ne.l(l),r=h(l),I(i.$$.fragment,l),a=h(l),I(d.$$.fragment,l),$=h(l),_=ce(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ke(_)!=="svelte-1ey826b"&&(_.innerHTML=w),m=h(l),ie&&ie.l(l),o=h(l),y=ce(l,"P",{class:!0,"data-svelte-h":!0}),Ke(y)!=="svelte-qdiari"&&(y.innerHTML=D),v=h(l),Z&&Z.l(l),A=h(l),I(k.$$.fragment,l),Q=h(l),F=ce(l,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ke(F)!=="svelte-st1zo8"&&(F.innerHTML=P),G=h(l),Y&&Y.l(l),K=h(l),z=ce(l,"P",{class:!0,"data-svelte-h":!0}),Ke(z)!=="svelte-i4p6k3"&&(z.innerHTML=ye),R=h(l),I(M.$$.fragment,l),L=h(l),I(j.$$.fragment,l),p=h(l),C=ce(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ke(C)!=="svelte-3mxj47"&&(C.innerHTML=Fe),Ae=h(l),x&&x.l(l),be=h(l),ae&&ae.l(l),W=h(l),I(Ie.$$.fragment,l),we=h(l),pe=ce(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ke(pe)!=="svelte-1mqr5n0"&&(pe.innerHTML=H),O=h(l),le&&le.l(l),he=h(l),oe&&oe.l(l),ge=h(l),I(ue.$$.fragment,l),Oe=h(l),ve=ce(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ke(ve)!=="svelte-1d1e8e7"&&(ve.innerHTML=rt),nt=h(l),X&&X.l(l),Ge=h(l),J&&J.l(l),Pe=h(l),I(qe.$$.fragment,l),Qe=h(l),Ee=ce(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ke(Ee)!=="svelte-nlegfp"&&(Ee.innerHTML=$t),it=h(l),ee&&ee.l(l),We=h(l),_e&&_e.l(l),He=h(l),I(Re.$$.fragment,l),Ve=h(l),Le=ce(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ke(Le)!=="svelte-1y162t2"&&(Le.innerHTML=yt),at=h(l),fe&&fe.l(l),Me=h(l),I(Se.$$.fragment,l),ze=h(l),Ne=ce(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ke(Ne)!=="svelte-3p4fsq"&&(Ne.innerHTML=bt),lt=h(l),me&&me.l(l),Ce=h(l),I(Te.$$.fragment,l),this.h()},h(){V(_,"class","markdown"),V(_,"id","ideal-lap-vs-qualifying-lap"),V(y,"class","markdown"),V(F,"class","markdown"),V(F,"id","where-the-time-went-sector-by-sector"),V(z,"class","markdown"),V(C,"class","markdown"),V(C,"id","position-by-lap"),V(pe,"class","markdown"),V(pe,"id","race-trace"),V(ve,"class","markdown"),V(ve,"id","tyre-strategy"),V(Ee,"class","markdown"),V(Ee,"id","race-pace-vs-top-speed"),V(Le,"class","markdown"),V(Le,"id","tyre-degradation"),V(Ne,"class","markdown"),V(Ne,"id","pit-stops")},m(l,u){re&&re.m(l,u),b(l,t,u),T(s,l,u),b(l,e,u),ne&&ne.m(l,u),b(l,r,u),T(i,l,u),b(l,a,u),T(d,l,u),b(l,$,u),b(l,_,u),b(l,m,u),ie&&ie.m(l,u),b(l,o,u),b(l,y,u),b(l,v,u),Z&&Z.m(l,u),b(l,A,u),T(k,l,u),b(l,Q,u),b(l,F,u),b(l,G,u),Y&&Y.m(l,u),b(l,K,u),b(l,z,u),b(l,R,u),T(M,l,u),b(l,L,u),T(j,l,u),b(l,p,u),b(l,C,u),b(l,Ae,u),x&&x.m(l,u),b(l,be,u),ae&&ae.m(l,u),b(l,W,u),T(Ie,l,u),b(l,we,u),b(l,pe,u),b(l,O,u),le&&le.m(l,u),b(l,he,u),oe&&oe.m(l,u),b(l,ge,u),T(ue,l,u),b(l,Oe,u),b(l,ve,u),b(l,nt,u),X&&X.m(l,u),b(l,Ge,u),J&&J.m(l,u),b(l,Pe,u),T(qe,l,u),b(l,Qe,u),b(l,Ee,u),b(l,it,u),ee&&ee.m(l,u),b(l,We,u),_e&&_e.m(l,u),b(l,He,u),T(Re,l,u),b(l,Ve,u),b(l,Le,u),b(l,at,u),fe&&fe.m(l,u),b(l,Me,u),T(Se,l,u),b(l,ze,u),b(l,Ne,u),b(l,lt,u),me&&me.m(l,u),b(l,Ce,u),T(Te,l,u),Ye=!0},p(l,u){l[1]?re?(re.p(l,u),u[0]&2&&f(re,1)):(re=ms(l),re.c(),f(re,1),re.m(t.parentNode,t)):re&&(te(),c(re,1,1,()=>{re=null}),se());const ot={};u[0]&2&&(ot.data=l[1]),s.$set(ot),l[2]?ne?(ne.p(l,u),u[0]&4&&f(ne,1)):(ne=us(l),ne.c(),f(ne,1),ne.m(r.parentNode,r)):ne&&(te(),c(ne,1,1,()=>{ne=null}),se());const wt={};u[0]&4|u[3]&2097152&&(wt.$$scope={dirty:u,ctx:l}),i.$set(wt);const vt={};u[0]&24|u[3]&2097152&&(vt.$$scope={dirty:u,ctx:l}),d.$set(vt),l[5]?ie?(ie.p(l,u),u[0]&32&&f(ie,1)):(ie=ps(l),ie.c(),f(ie,1),ie.m(o.parentNode,o)):ie&&(te(),c(ie,1,1,()=>{ie=null}),se()),l[5].length>0&&!l[5][0].is_comparable_weekend?Z?u[0]&32&&f(Z,1):(Z=gs(l),Z.c(),f(Z,1),Z.m(A.parentNode,A)):Z&&(te(),c(Z,1,1,()=>{Z=null}),se());const kt={};u[0]&32&&(kt.data=l[5]),k.$set(kt),l[6]?Y?(Y.p(l,u),u[0]&64&&f(Y,1)):(Y=$s(l),Y.c(),f(Y,1),Y.m(K.parentNode,K)):Y&&(te(),c(Y,1,1,()=>{Y=null}),se());const Xe={};u[0]&64&&(Xe.data=l[6]),M.$set(Xe);const Ue={};u[0]&32&&(Ue.data=l[5]),u[3]&2097152&&(Ue.$$scope={dirty:u,ctx:l}),j.$set(Ue),l[7]?x?(x.p(l,u),u[0]&128&&f(x,1)):(x=ys(l),x.c(),f(x,1),x.m(be.parentNode,be)):x&&(te(),c(x,1,1,()=>{x=null}),se()),l[8]?ae?(ae.p(l,u),u[0]&256&&f(ae,1)):(ae=bs(l),ae.c(),f(ae,1),ae.m(W.parentNode,W)):ae&&(te(),c(ae,1,1,()=>{ae=null}),se());const tt={};u[0]&128&&(tt.data=l[7]),u[0]&256&&(tt.seriesColors=Object.fromEntries([...l[8]].map(Is))),Ie.$set(tt),l[9]?le?(le.p(l,u),u[0]&512&&f(le,1)):(le=ws(l),le.c(),f(le,1),le.m(he.parentNode,he)):le&&(te(),c(le,1,1,()=>{le=null}),se()),l[10]?oe?(oe.p(l,u),u[0]&1024&&f(oe,1)):(oe=vs(l),oe.c(),f(oe,1),oe.m(ge.parentNode,ge)):oe&&(te(),c(oe,1,1,()=>{oe=null}),se());const ft={};u[0]&512&&(ft.data=l[9]),u[0]&1024&&(ft.seriesColors=Object.fromEntries([...l[10]].map(Es))),ue.$set(ft),l[11]?X?(X.p(l,u),u[0]&2048&&f(X,1)):(X=ks(l),X.c(),f(X,1),X.m(Ge.parentNode,Ge)):X&&(te(),c(X,1,1,()=>{X=null}),se()),l[12]?J?(J.p(l,u),u[0]&4096&&f(J,1)):(J=hs(l),J.c(),f(J,1),J.m(Pe.parentNode,Pe)):J&&(te(),c(J,1,1,()=>{J=null}),se());const mt={};u[0]&2048&&(mt.data=l[11]),u[0]&4096&&(mt.seriesColors=Object.fromEntries([...l[12]].map(Ds))),qe.$set(mt),l[13]?ee?(ee.p(l,u),u[0]&8192&&f(ee,1)):(ee=qs(l),ee.c(),f(ee,1),ee.m(We.parentNode,We)):ee&&(te(),c(ee,1,1,()=>{ee=null}),se()),l[14]?_e?(_e.p(l,u),u[0]&16384&&f(_e,1)):(_e=Rs(l),_e.c(),f(_e,1),_e.m(He.parentNode,He)):_e&&(te(),c(_e,1,1,()=>{_e=null}),se());const ut={};u[0]&8192&&(ut.data=l[13]),u[0]&16384&&(ut.seriesColors=Object.fromEntries([...l[14]].map(Fs))),Re.$set(ut),l[15]?fe?(fe.p(l,u),u[0]&32768&&f(fe,1)):(fe=Ss(l),fe.c(),f(fe,1),fe.m(Me.parentNode,Me)):fe&&(te(),c(fe,1,1,()=>{fe=null}),se());const Je={};u[0]&32768&&(Je.data=l[15]),Se.$set(Je),l[16]?me?(me.p(l,u),u[0]&65536&&f(me,1)):(me=Ts(l),me.c(),f(me,1),me.m(Ce.parentNode,Ce)):me&&(te(),c(me,1,1,()=>{me=null}),se());const Be={};u[0]&65536&&(Be.data=l[16]),u[3]&2097152&&(Be.$$scope={dirty:u,ctx:l}),Te.$set(Be)},i(l){Ye||(f(re),f(s.$$.fragment,l),f(ne),f(i.$$.fragment,l),f(d.$$.fragment,l),f(ie),f(Z),f(k.$$.fragment,l),f(Y),f(M.$$.fragment,l),f(j.$$.fragment,l),f(x),f(ae),f(Ie.$$.fragment,l),f(le),f(oe),f(ue.$$.fragment,l),f(X),f(J),f(qe.$$.fragment,l),f(ee),f(_e),f(Re.$$.fragment,l),f(fe),f(Se.$$.fragment,l),f(me),f(Te.$$.fragment,l),Ye=!0)},o(l){c(re),c(s.$$.fragment,l),c(ne),c(i.$$.fragment,l),c(d.$$.fragment,l),c(ie),c(Z),c(k.$$.fragment,l),c(Y),c(M.$$.fragment,l),c(j.$$.fragment,l),c(x),c(ae),c(Ie.$$.fragment,l),c(le),c(oe),c(ue.$$.fragment,l),c(X),c(J),c(qe.$$.fragment,l),c(ee),c(_e),c(Re.$$.fragment,l),c(fe),c(Se.$$.fragment,l),c(me),c(Te.$$.fragment,l),Ye=!1},d(l){l&&(g(t),g(e),g(r),g(a),g($),g(_),g(m),g(o),g(y),g(v),g(A),g(Q),g(F),g(G),g(K),g(z),g(R),g(L),g(p),g(C),g(Ae),g(be),g(W),g(we),g(pe),g(O),g(he),g(ge),g(Oe),g(ve),g(nt),g(Ge),g(Pe),g(Qe),g(Ee),g(it),g(We),g(He),g(Ve),g(Le),g(at),g(Me),g(ze),g(Ne),g(lt),g(Ce)),re&&re.d(l),S(s,l),ne&&ne.d(l),S(i,l),S(d,l),ie&&ie.d(l),Z&&Z.d(l),S(k,l),Y&&Y.d(l),S(M,l),S(j,l),x&&x.d(l),ae&&ae.d(l),S(Ie,l),le&&le.d(l),oe&&oe.d(l),S(ue,l),X&&X.d(l),J&&J.d(l),S(qe,l),ee&&ee.d(l),_e&&_e.d(l),S(Re,l),fe&&fe.d(l),S(Se,l),me&&me.d(l),S(Te,l)}}}function br(n){let t,s;return t=new Ls({props:{status:"info",$$slots:{default:[Er]},$$scope:{ctx:n}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[3]&2097152&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ms(n){let t,s;return t=new ke({props:{queryID:"race_sessions",queryResult:n[1]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&2&&(i.queryResult=e[1]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function us(n){let t,s;return t=new ke({props:{queryID:"conditions",queryResult:n[2]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&4&&(i.queryResult=e[2]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function wr(n){let t,s,e,r,i,a,d,$,_,w;return t=new It({props:{data:n[2],value:"winner",title:"Winner"}}),e=new It({props:{data:n[2],value:"pole_sitter",title:"Pole"}}),i=new It({props:{data:n[2],value:"safety_cars",title:"Safety Cars"}}),d=new It({props:{data:n[2],value:"virtual_safety_cars",title:"Virtual SCs"}}),_=new It({props:{data:n[2],value:"race_track_temp_c",title:"Track Temp (°C)",fmt:"0.0"}}),{c(){E(t.$$.fragment),s=q(),E(e.$$.fragment),r=q(),E(i.$$.fragment),a=q(),E(d.$$.fragment),$=q(),E(_.$$.fragment)},l(m){I(t.$$.fragment,m),s=h(m),I(e.$$.fragment,m),r=h(m),I(i.$$.fragment,m),a=h(m),I(d.$$.fragment,m),$=h(m),I(_.$$.fragment,m)},m(m,o){T(t,m,o),b(m,s,o),T(e,m,o),b(m,r,o),T(i,m,o),b(m,a,o),T(d,m,o),b(m,$,o),T(_,m,o),w=!0},p(m,o){const y={};o[0]&4&&(y.data=m[2]),t.$set(y);const D={};o[0]&4&&(D.data=m[2]),e.$set(D);const v={};o[0]&4&&(v.data=m[2]),i.$set(v);const A={};o[0]&4&&(A.data=m[2]),d.$set(A);const k={};o[0]&4&&(k.data=m[2]),_.$set(k)},i(m){w||(f(t.$$.fragment,m),f(e.$$.fragment,m),f(i.$$.fragment,m),f(d.$$.fragment,m),f(_.$$.fragment,m),w=!0)},o(m){c(t.$$.fragment,m),c(e.$$.fragment,m),c(i.$$.fragment,m),c(d.$$.fragment,m),c(_.$$.fragment,m),w=!1},d(m){m&&(g(s),g(r),g(a),g($)),S(t,m),S(e,m),S(i,m),S(d,m),S(_,m)}}}function cs(n){let t,s;return t=new ke({props:{queryID:"result",queryResult:n[3]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&8&&(i.queryResult=e[3]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function vr(n){let t,s,e,r,i,a,d,$,_,w,m,o,y,D,v,A;return t=new U({props:{id:"position",title:"Pos"}}),e=new U({props:{id:"driver_name",title:"Driver"}}),i=new U({props:{id:"team_name",title:"Team"}}),d=new U({props:{id:"grid_position",title:"Grid"}}),_=new U({props:{id:"positions_gained",title:"+/-",contentType:"delta"}}),m=new U({props:{id:"time_or_gap",title:"Time / Gap",align:"right"}}),y=new U({props:{id:"points",title:"Pts"}}),v=new U({props:{id:"best_lap",title:"Best Lap",align:"right"}}),{c(){E(t.$$.fragment),s=q(),E(e.$$.fragment),r=q(),E(i.$$.fragment),a=q(),E(d.$$.fragment),$=q(),E(_.$$.fragment),w=q(),E(m.$$.fragment),o=q(),E(y.$$.fragment),D=q(),E(v.$$.fragment)},l(k){I(t.$$.fragment,k),s=h(k),I(e.$$.fragment,k),r=h(k),I(i.$$.fragment,k),a=h(k),I(d.$$.fragment,k),$=h(k),I(_.$$.fragment,k),w=h(k),I(m.$$.fragment,k),o=h(k),I(y.$$.fragment,k),D=h(k),I(v.$$.fragment,k)},m(k,Q){T(t,k,Q),b(k,s,Q),T(e,k,Q),b(k,r,Q),T(i,k,Q),b(k,a,Q),T(d,k,Q),b(k,$,Q),T(_,k,Q),b(k,w,Q),T(m,k,Q),b(k,o,Q),T(y,k,Q),b(k,D,Q),T(v,k,Q),A=!0},p:_t,i(k){A||(f(t.$$.fragment,k),f(e.$$.fragment,k),f(i.$$.fragment,k),f(d.$$.fragment,k),f(_.$$.fragment,k),f(m.$$.fragment,k),f(y.$$.fragment,k),f(v.$$.fragment,k),A=!0)},o(k){c(t.$$.fragment,k),c(e.$$.fragment,k),c(i.$$.fragment,k),c(d.$$.fragment,k),c(_.$$.fragment,k),c(m.$$.fragment,k),c(y.$$.fragment,k),c(v.$$.fragment,k),A=!1},d(k){k&&(g(s),g(r),g(a),g($),g(w),g(o),g(D)),S(t,k),S(e,k),S(i,k),S(d,k),S(_,k),S(m,k),S(y,k),S(v,k)}}}function kr(n){let t,s,e,r=n[3]&&cs(n);return s=new jt({props:{data:n[3],rows:"all",link:"driver_link",emptySet:"pass",emptyMessage:"No results recorded.",$$slots:{default:[vr]},$$scope:{ctx:n}}}),{c(){r&&r.c(),t=q(),E(s.$$.fragment)},l(i){r&&r.l(i),t=h(i),I(s.$$.fragment,i)},m(i,a){r&&r.m(i,a),b(i,t,a),T(s,i,a),e=!0},p(i,a){i[3]?r?(r.p(i,a),a[0]&8&&f(r,1)):(r=cs(i),r.c(),f(r,1),r.m(t.parentNode,t)):r&&(te(),c(r,1,1,()=>{r=null}),se());const d={};a[0]&8&&(d.data=i[3]),a[3]&2097152&&(d.$$scope={dirty:a,ctx:i}),s.$set(d)},i(i){e||(f(r),f(s.$$.fragment,i),e=!0)},o(i){c(r),c(s.$$.fragment,i),e=!1},d(i){i&&g(t),r&&r.d(i),S(s,i)}}}function ds(n){let t,s;return t=new ke({props:{queryID:"qualifying",queryResult:n[4]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&16&&(i.queryResult=e[4]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function hr(n){let t,s,e,r,i,a,d,$,_,w,m,o;return t=new U({props:{id:"position",title:"Pos"}}),e=new U({props:{id:"driver_name",title:"Driver"}}),i=new U({props:{id:"team_name",title:"Team"}}),d=new U({props:{id:"q1",title:"Q1",align:"right"}}),_=new U({props:{id:"q2",title:"Q2",align:"right"}}),m=new U({props:{id:"q3",title:"Q3",align:"right"}}),{c(){E(t.$$.fragment),s=q(),E(e.$$.fragment),r=q(),E(i.$$.fragment),a=q(),E(d.$$.fragment),$=q(),E(_.$$.fragment),w=q(),E(m.$$.fragment)},l(y){I(t.$$.fragment,y),s=h(y),I(e.$$.fragment,y),r=h(y),I(i.$$.fragment,y),a=h(y),I(d.$$.fragment,y),$=h(y),I(_.$$.fragment,y),w=h(y),I(m.$$.fragment,y)},m(y,D){T(t,y,D),b(y,s,D),T(e,y,D),b(y,r,D),T(i,y,D),b(y,a,D),T(d,y,D),b(y,$,D),T(_,y,D),b(y,w,D),T(m,y,D),o=!0},p:_t,i(y){o||(f(t.$$.fragment,y),f(e.$$.fragment,y),f(i.$$.fragment,y),f(d.$$.fragment,y),f(_.$$.fragment,y),f(m.$$.fragment,y),o=!0)},o(y){c(t.$$.fragment,y),c(e.$$.fragment,y),c(i.$$.fragment,y),c(d.$$.fragment,y),c(_.$$.fragment,y),c(m.$$.fragment,y),o=!1},d(y){y&&(g(s),g(r),g(a),g($),g(w)),S(t,y),S(e,y),S(i,y),S(d,y),S(_,y),S(m,y)}}}function qr(n){let t,s,e,r=n[4]&&ds(n);return s=new jt({props:{data:n[4],rows:"all",emptySet:"pass",emptyMessage:"No qualifying results recorded.",$$slots:{default:[hr]},$$scope:{ctx:n}}}),{c(){r&&r.c(),t=q(),E(s.$$.fragment)},l(i){r&&r.l(i),t=h(i),I(s.$$.fragment,i)},m(i,a){r&&r.m(i,a),b(i,t,a),T(s,i,a),e=!0},p(i,a){i[4]?r?(r.p(i,a),a[0]&16&&f(r,1)):(r=ds(i),r.c(),f(r,1),r.m(t.parentNode,t)):r&&(te(),c(r,1,1,()=>{r=null}),se());const d={};a[0]&16&&(d.data=i[4]),a[3]&2097152&&(d.$$scope={dirty:a,ctx:i}),s.$set(d)},i(i){e||(f(r),f(s.$$.fragment,i),e=!0)},o(i){c(r),c(s.$$.fragment,i),e=!1},d(i){i&&g(t),r&&r.d(i),S(s,i)}}}function Rr(n){let t,s,e,r;return t=new os({props:{label:"Result",$$slots:{default:[kr]},$$scope:{ctx:n}}}),e=new os({props:{label:"Qualifying",$$slots:{default:[qr]},$$scope:{ctx:n}}}),{c(){E(t.$$.fragment),s=q(),E(e.$$.fragment)},l(i){I(t.$$.fragment,i),s=h(i),I(e.$$.fragment,i)},m(i,a){T(t,i,a),b(i,s,a),T(e,i,a),r=!0},p(i,a){const d={};a[0]&8|a[3]&2097152&&(d.$$scope={dirty:a,ctx:i}),t.$set(d);const $={};a[0]&16|a[3]&2097152&&($.$$scope={dirty:a,ctx:i}),e.$set($)},i(i){r||(f(t.$$.fragment,i),f(e.$$.fragment,i),r=!0)},o(i){c(t.$$.fragment,i),c(e.$$.fragment,i),r=!1},d(i){i&&g(s),S(t,i),S(e,i)}}}function ps(n){let t,s;return t=new ke({props:{queryID:"ideal",queryResult:n[5]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&32&&(i.queryResult=e[5]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function gs(n){let t,s;return t=new Ls({props:{status:"warning",$$slots:{default:[Sr]},$$scope:{ctx:n}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Sr(n){let t;return{c(){t=xe("Qualifying was wet or disrupted this weekend, so dry practice sectors aren't comparable. Treat these gaps as conditions, not driver performance.")},l(s){t=Ze(s,"Qualifying was wet or disrupted this weekend, so dry practice sectors aren't comparable. Treat these gaps as conditions, not driver performance.")},m(s,e){b(s,t,e)},d(s){s&&g(t)}}}function $s(n){let t,s;return t=new ke({props:{queryID:"sector_bullets",queryResult:n[6]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&64&&(i.queryResult=e[6]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Tr(n){let t,s,e,r,i,a,d,$,_,w,m,o,y,D,v,A,k,Q,F,P,G,K,z,ye,R,M,L,j;return t=new U({props:{id:"qualifying_lap_rank",title:"Quali"}}),e=new U({props:{id:"driver_name",title:"Driver"}}),i=new U({props:{id:"team_name",title:"Team"}}),d=new U({props:{id:"best_qualifying_lap_s",title:"Best Quali Lap",fmt:"0.000"}}),_=new U({props:{id:"ideal_lap_s",title:"Ideal Lap",fmt:"0.000"}}),m=new U({props:{id:"time_left_s",title:"Left on Table",fmt:"0.000"}}),y=new U({props:{id:"best_sector_1_s",title:"Best S1",fmt:"0.000"}}),v=new U({props:{id:"sector_1_session",title:"Set In"}}),k=new U({props:{id:"best_sector_2_s",title:"Best S2",fmt:"0.000"}}),F=new U({props:{id:"sector_2_session",title:"Set In"}}),G=new U({props:{id:"best_sector_3_s",title:"Best S3",fmt:"0.000"}}),z=new U({props:{id:"sector_3_session",title:"Set In"}}),R=new U({props:{id:"ideal_lap_rank",title:"Ideal Rank"}}),L=new U({props:{id:"ideal_places_gained",title:"Places",contentType:"delta"}}),{c(){E(t.$$.fragment),s=q(),E(e.$$.fragment),r=q(),E(i.$$.fragment),a=q(),E(d.$$.fragment),$=q(),E(_.$$.fragment),w=q(),E(m.$$.fragment),o=q(),E(y.$$.fragment),D=q(),E(v.$$.fragment),A=q(),E(k.$$.fragment),Q=q(),E(F.$$.fragment),P=q(),E(G.$$.fragment),K=q(),E(z.$$.fragment),ye=q(),E(R.$$.fragment),M=q(),E(L.$$.fragment)},l(p){I(t.$$.fragment,p),s=h(p),I(e.$$.fragment,p),r=h(p),I(i.$$.fragment,p),a=h(p),I(d.$$.fragment,p),$=h(p),I(_.$$.fragment,p),w=h(p),I(m.$$.fragment,p),o=h(p),I(y.$$.fragment,p),D=h(p),I(v.$$.fragment,p),A=h(p),I(k.$$.fragment,p),Q=h(p),I(F.$$.fragment,p),P=h(p),I(G.$$.fragment,p),K=h(p),I(z.$$.fragment,p),ye=h(p),I(R.$$.fragment,p),M=h(p),I(L.$$.fragment,p)},m(p,C){T(t,p,C),b(p,s,C),T(e,p,C),b(p,r,C),T(i,p,C),b(p,a,C),T(d,p,C),b(p,$,C),T(_,p,C),b(p,w,C),T(m,p,C),b(p,o,C),T(y,p,C),b(p,D,C),T(v,p,C),b(p,A,C),T(k,p,C),b(p,Q,C),T(F,p,C),b(p,P,C),T(G,p,C),b(p,K,C),T(z,p,C),b(p,ye,C),T(R,p,C),b(p,M,C),T(L,p,C),j=!0},p:_t,i(p){j||(f(t.$$.fragment,p),f(e.$$.fragment,p),f(i.$$.fragment,p),f(d.$$.fragment,p),f(_.$$.fragment,p),f(m.$$.fragment,p),f(y.$$.fragment,p),f(v.$$.fragment,p),f(k.$$.fragment,p),f(F.$$.fragment,p),f(G.$$.fragment,p),f(z.$$.fragment,p),f(R.$$.fragment,p),f(L.$$.fragment,p),j=!0)},o(p){c(t.$$.fragment,p),c(e.$$.fragment,p),c(i.$$.fragment,p),c(d.$$.fragment,p),c(_.$$.fragment,p),c(m.$$.fragment,p),c(y.$$.fragment,p),c(v.$$.fragment,p),c(k.$$.fragment,p),c(F.$$.fragment,p),c(G.$$.fragment,p),c(z.$$.fragment,p),c(R.$$.fragment,p),c(L.$$.fragment,p),j=!1},d(p){p&&(g(s),g(r),g(a),g($),g(w),g(o),g(D),g(A),g(Q),g(P),g(K),g(ye),g(M)),S(t,p),S(e,p),S(i,p),S(d,p),S(_,p),S(m,p),S(y,p),S(v,p),S(k,p),S(F,p),S(G,p),S(z,p),S(R,p),S(L,p)}}}function ys(n){let t,s;return t=new ke({props:{queryID:"positions",queryResult:n[7]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&128&&(i.queryResult=e[7]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function bs(n){let t,s;return t=new ke({props:{queryID:"position_colors",queryResult:n[8]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&256&&(i.queryResult=e[8]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ws(n){let t,s;return t=new ke({props:{queryID:"trace",queryResult:n[9]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&512&&(i.queryResult=e[9]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function vs(n){let t,s;return t=new ke({props:{queryID:"trace_colors",queryResult:n[10]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&1024&&(i.queryResult=e[10]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ks(n){let t,s;return t=new ke({props:{queryID:"strategy",queryResult:n[11]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&2048&&(i.queryResult=e[11]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function hs(n){let t,s;return t=new ke({props:{queryID:"stint_colors",queryResult:n[12]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&4096&&(i.queryResult=e[12]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function qs(n){let t,s;return t=new ke({props:{queryID:"pace_speed",queryResult:n[13]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&8192&&(i.queryResult=e[13]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Rs(n){let t,s;return t=new ke({props:{queryID:"pace_speed_colors",queryResult:n[14]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&16384&&(i.queryResult=e[14]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Ss(n){let t,s;return t=new ke({props:{queryID:"race_deg",queryResult:n[15]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&32768&&(i.queryResult=e[15]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Ts(n){let t,s;return t=new ke({props:{queryID:"pits",queryResult:n[16]}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){T(t,e,r),s=!0},p(e,r){const i={};r[0]&65536&&(i.queryResult=e[16]),t.$set(i)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Ir(n){let t,s,e,r,i,a,d,$,_,w,m,o,y,D;return t=new U({props:{id:"lap_number",title:"Lap"}}),e=new U({props:{id:"driver_name",title:"Driver"}}),i=new U({props:{id:"team_name",title:"Team"}}),d=new U({props:{id:"stop_number",title:"Stop #"}}),_=new U({props:{id:"tyre_change",title:"Tyres"}}),m=new U({props:{id:"stop_duration_s",title:"Stationary (s)",fmt:"0.0"}}),y=new U({props:{id:"lane_duration_s",title:"Pit Lane (s)",fmt:"0.0"}}),{c(){E(t.$$.fragment),s=q(),E(e.$$.fragment),r=q(),E(i.$$.fragment),a=q(),E(d.$$.fragment),$=q(),E(_.$$.fragment),w=q(),E(m.$$.fragment),o=q(),E(y.$$.fragment)},l(v){I(t.$$.fragment,v),s=h(v),I(e.$$.fragment,v),r=h(v),I(i.$$.fragment,v),a=h(v),I(d.$$.fragment,v),$=h(v),I(_.$$.fragment,v),w=h(v),I(m.$$.fragment,v),o=h(v),I(y.$$.fragment,v)},m(v,A){T(t,v,A),b(v,s,A),T(e,v,A),b(v,r,A),T(i,v,A),b(v,a,A),T(d,v,A),b(v,$,A),T(_,v,A),b(v,w,A),T(m,v,A),b(v,o,A),T(y,v,A),D=!0},p:_t,i(v){D||(f(t.$$.fragment,v),f(e.$$.fragment,v),f(i.$$.fragment,v),f(d.$$.fragment,v),f(_.$$.fragment,v),f(m.$$.fragment,v),f(y.$$.fragment,v),D=!0)},o(v){c(t.$$.fragment,v),c(e.$$.fragment,v),c(i.$$.fragment,v),c(d.$$.fragment,v),c(_.$$.fragment,v),c(m.$$.fragment,v),c(y.$$.fragment,v),D=!1},d(v){v&&(g(s),g(r),g(a),g($),g(w),g(o)),S(t,v),S(e,v),S(i,v),S(d,v),S(_,v),S(m,v),S(y,v)}}}function Er(n){let t;return{c(){t=xe("This race hasn't happened yet. Results appear here after the weekend.")},l(s){t=Ze(s,"This race hasn't happened yet. Results appear here after the weekend.")},m(s,e){b(s,t,e)},d(s){s&&g(t)}}}function Dr(n){let t,s,e,r,i,a,d,$,_=n[0][0].year+"",w,m,o=n[0][0].meeting_name+"",y,D,v,A=n[0][0].circuit_short_name+"",k,Q,F=n[0][0].country_name+"",P,G,K=n[0][0].round_number+"",z,ye,R,M,L,j,p,C;function Fe(H,O){return $r}let be=Fe()(n),W=n[0]&&fs(n);R=new tr({props:{data:n[0],column:"race_date",fmt:"d mmmm yyyy"}});const Ie=[br,yr],we=[];function pe(H,O){return H[0][0].is_completed?1:0}return L=pe(n),j=we[L]=Ie[L](n),{c(){t=q(),be.c(),s=de("meta"),e=de("meta"),r=et(),i=q(),W&&W.c(),a=q(),d=de("h1"),$=de("a"),w=xe(_),m=q(),y=xe(o),D=q(),v=de("p"),k=xe(A),Q=xe(", "),P=xe(F),G=xe(" · Round "),z=xe(K),ye=xe(" · "),E(R.$$.fragment),M=q(),j.c(),p=et(),this.h()},l(H){t=h(H);const O=Bs("svelte-2igo1p",document.head);be.l(O),s=ce(O,"META",{name:!0,content:!0}),e=ce(O,"META",{name:!0,content:!0}),r=et(),O.forEach(g),i=h(H),W&&W.l(H),a=h(H),d=ce(H,"H1",{class:!0,id:!0});var he=st(d);$=ce(he,"A",{href:!0});var ge=st($);w=Ze(ge,_),m=h(ge),y=Ze(ge,o),ge.forEach(g),he.forEach(g),D=h(H),v=ce(H,"P",{class:!0});var ue=st(v);k=Ze(ue,A),Q=Ze(ue,", "),P=Ze(ue,F),G=Ze(ue," · Round "),z=Ze(ue,K),ye=Ze(ue," · "),I(R.$$.fragment,ue),ue.forEach(g),M=h(H),j.l(H),p=et(),this.h()},h(){V(s,"name","twitter:card"),V(s,"content","summary_large_image"),V(e,"name","twitter:site"),V(e,"content","@evidence_dev"),V($,"href","#meeting0year-meeting0meeting_name"),V(d,"class","markdown"),V(d,"id","meeting0year-meeting0meeting_name"),V(v,"class","markdown")},m(H,O){b(H,t,O),be.m(document.head,null),De(document.head,s),De(document.head,e),De(document.head,r),b(H,i,O),W&&W.m(H,O),b(H,a,O),b(H,d,O),De(d,$),De($,w),De($,m),De($,y),b(H,D,O),b(H,v,O),De(v,k),De(v,Q),De(v,P),De(v,G),De(v,z),De(v,ye),T(R,v,null),b(H,M,O),we[L].m(H,O),b(H,p,O),C=!0},p(H,O){be.p(H,O),H[0]?W?(W.p(H,O),O[0]&1&&f(W,1)):(W=fs(H),W.c(),f(W,1),W.m(a.parentNode,a)):W&&(te(),c(W,1,1,()=>{W=null}),se()),(!C||O[0]&1)&&_!==(_=H[0][0].year+"")&&Tt(w,_),(!C||O[0]&1)&&o!==(o=H[0][0].meeting_name+"")&&Tt(y,o),(!C||O[0]&1)&&A!==(A=H[0][0].circuit_short_name+"")&&Tt(k,A),(!C||O[0]&1)&&F!==(F=H[0][0].country_name+"")&&Tt(P,F),(!C||O[0]&1)&&K!==(K=H[0][0].round_number+"")&&Tt(z,K);const he={};O[0]&1&&(he.data=H[0]),R.$set(he);let ge=L;L=pe(H),L===ge?we[L].p(H,O):(te(),c(we[ge],1,1,()=>{we[ge]=null}),se(),j=we[L],j?j.p(H,O):(j=we[L]=Ie[L](H),j.c()),f(j,1),j.m(p.parentNode,p))},i(H){C||(f(W),f(R.$$.fragment,H),f(j),C=!0)},o(H){c(W),c(R.$$.fragment,H),c(j),C=!1},d(H){H&&(g(t),g(i),g(a),g(d),g(D),g(v),g(M),g(p)),be.d(H),g(s),g(e),g(r),W&&W.d(H),S(R),we[L].d(H)}}}const Is=n=>[n.driver_code,[n.team_colour,n.team_colour]],Es=n=>[n.driver_code,[n.team_colour,n.team_colour]],Ds=n=>[n.stint,(t=>[t,t])({SOFT:"#E8002D",MEDIUM:"#FFD12E",HARD:"#C7C7C7",INTERMEDIATE:"#43B02A",WET:"#0067AD"}[n.stint.split(" · ")[1]]??"#888888")],Fs=n=>[n.team_name,[n.team_colour,n.team_colour]];function Fr(n,t,s){let e,r;Lt(n,Ks,N=>s(89,e=N)),Lt(n,es,N=>s(93,r=N));let{data:i}=t,{data:a={},customFormattingSettings:d,__db:$,inputs:_}=i;je(es,r="2bf3ebb6c1cc686c15010960758c2eeb",r);let w=Ps(As(_));Cs(w.subscribe(N=>s(19,_=N))),Hs(zs,{getCustomFormats:()=>d.customFormats||[]});const m=(N,js)=>Js($.query,N,{query_name:js});Ws(m);let o=e.params;xt(()=>!0);let y={initialData:void 0,initialError:void 0},D=B`select * from f1.meetings where meeting_key = ${o.meeting}`,v=`select * from f1.meetings where meeting_key = ${o.meeting}`;a.meeting_data&&(a.meeting_data instanceof Error?y.initialError=a.meeting_data:y.initialData=a.meeting_data,a.meeting_columns&&(y.knownColumns=a.meeting_columns));let A,k=!1;const Q=$e.createReactive({callback:N=>{s(0,A=N)},execFn:m},{id:"meeting",...y});Q(v,{noResolve:D,...y}),globalThis[Symbol.for("meeting")]={get value(){return A}};let F={initialData:void 0,initialError:void 0},P=B`select distinct session_name, case session_name when 'Race' then 1 else 2 end as sort
from f1.results
where meeting_key = ${o.meeting} and session_name in ('Race', 'Sprint')
order by sort`,G=`select distinct session_name, case session_name when 'Race' then 1 else 2 end as sort
from f1.results
where meeting_key = ${o.meeting} and session_name in ('Race', 'Sprint')
order by sort`;a.race_sessions_data&&(a.race_sessions_data instanceof Error?F.initialError=a.race_sessions_data:F.initialData=a.race_sessions_data,a.race_sessions_columns&&(F.knownColumns=a.race_sessions_columns));let K,z=!1;const ye=$e.createReactive({callback:N=>{s(1,K=N)},execFn:m},{id:"race_sessions",...F});ye(G,{noResolve:P,...F}),globalThis[Symbol.for("race_sessions")]={get value(){return K}};let R={initialData:void 0,initialError:void 0},M=B`select
    winner,
    pole_sitter,
    safety_cars,
    virtual_safety_cars,
    red_flags,
    race_track_temp_c,
    case when wet_race then 'Wet' else 'Dry' end as conditions
from (select * from f1.meetings where meeting_key = ${o.meeting})`,L=`select
    winner,
    pole_sitter,
    safety_cars,
    virtual_safety_cars,
    red_flags,
    race_track_temp_c,
    case when wet_race then 'Wet' else 'Dry' end as conditions
from (select * from f1.meetings where meeting_key = ${o.meeting})`;a.conditions_data&&(a.conditions_data instanceof Error?R.initialError=a.conditions_data:R.initialData=a.conditions_data,a.conditions_columns&&(R.knownColumns=a.conditions_columns));let j,p=!1;const C=$e.createReactive({callback:N=>{s(2,j=N)},execFn:m},{id:"conditions",...R});C(L,{noResolve:M,...R}),globalThis[Symbol.for("conditions")]={get value(){return j}};let Fe={initialData:void 0,initialError:void 0},Ae=B`select
    position,
    driver_name,
    driver_code,
    team_name,
    grid_position,
    positions_gained,
    time_or_gap,
    points,
    case when best_lap_s is not null
         then printf('%d:%06.3f', floor(best_lap_s / 60)::int, best_lap_s - 60 * floor(best_lap_s / 60)) end as best_lap,
    driver_link
from f1.results
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
order by position nulls last, number_of_laps desc`,be=`select
    position,
    driver_name,
    driver_code,
    team_name,
    grid_position,
    positions_gained,
    time_or_gap,
    points,
    case when best_lap_s is not null
         then printf('%d:%06.3f', floor(best_lap_s / 60)::int, best_lap_s - 60 * floor(best_lap_s / 60)) end as best_lap,
    driver_link
from f1.results
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
order by position nulls last, number_of_laps desc`;a.result_data&&(a.result_data instanceof Error?Fe.initialError=a.result_data:Fe.initialData=a.result_data,a.result_columns&&(Fe.knownColumns=a.result_columns));let W,Ie=!1;const we=$e.createReactive({callback:N=>{s(3,W=N)},execFn:m},{id:"result",...Fe});we(be,{noResolve:Ae,...Fe}),globalThis[Symbol.for("result")]={get value(){return W}};let pe={initialData:void 0,initialError:void 0},H=B`select
    position,
    driver_name,
    team_name,
    printf('%d:%06.3f', floor(q1_time_s / 60)::int, q1_time_s - 60 * floor(q1_time_s / 60)) as q1,
    printf('%d:%06.3f', floor(q2_time_s / 60)::int, q2_time_s - 60 * floor(q2_time_s / 60)) as q2,
    printf('%d:%06.3f', floor(q3_time_s / 60)::int, q3_time_s - 60 * floor(q3_time_s / 60)) as q3
from f1.results
where meeting_key = ${o.meeting}
  and session_name = case when '${_.session}' = 'Sprint' then 'Sprint Qualifying' else 'Qualifying' end
order by position nulls last`,O=`select
    position,
    driver_name,
    team_name,
    printf('%d:%06.3f', floor(q1_time_s / 60)::int, q1_time_s - 60 * floor(q1_time_s / 60)) as q1,
    printf('%d:%06.3f', floor(q2_time_s / 60)::int, q2_time_s - 60 * floor(q2_time_s / 60)) as q2,
    printf('%d:%06.3f', floor(q3_time_s / 60)::int, q3_time_s - 60 * floor(q3_time_s / 60)) as q3
from f1.results
where meeting_key = ${o.meeting}
  and session_name = case when '${_.session}' = 'Sprint' then 'Sprint Qualifying' else 'Qualifying' end
order by position nulls last`;a.qualifying_data&&(a.qualifying_data instanceof Error?pe.initialError=a.qualifying_data:pe.initialData=a.qualifying_data,a.qualifying_columns&&(pe.knownColumns=a.qualifying_columns));let he,ge=!1;const ue=$e.createReactive({callback:N=>{s(4,he=N)},execFn:m},{id:"qualifying",...pe});ue(O,{noResolve:H,...pe}),globalThis[Symbol.for("qualifying")]={get value(){return he}};let Oe={initialData:void 0,initialError:void 0},ve=B`select
    driver_name,
    driver_code,
    team_name,
    best_qualifying_lap_s,
    ideal_lap_s,
    time_left_s,
    best_sector_1_s, sector_1_session,
    best_sector_2_s, sector_2_session,
    best_sector_3_s, sector_3_session,
    qualifying_lap_rank,
    ideal_lap_rank,
    qualifying_lap_rank - ideal_lap_rank as ideal_places_gained,
    is_comparable_weekend
from f1.ideal_laps
where meeting_key = ${o.meeting}
  and is_within_107_pct
order by qualifying_lap_rank`,rt=`select
    driver_name,
    driver_code,
    team_name,
    best_qualifying_lap_s,
    ideal_lap_s,
    time_left_s,
    best_sector_1_s, sector_1_session,
    best_sector_2_s, sector_2_session,
    best_sector_3_s, sector_3_session,
    qualifying_lap_rank,
    ideal_lap_rank,
    qualifying_lap_rank - ideal_lap_rank as ideal_places_gained,
    is_comparable_weekend
from f1.ideal_laps
where meeting_key = ${o.meeting}
  and is_within_107_pct
order by qualifying_lap_rank`;a.ideal_data&&(a.ideal_data instanceof Error?Oe.initialError=a.ideal_data:Oe.initialData=a.ideal_data,a.ideal_columns&&(Oe.knownColumns=a.ideal_columns));let nt,Ge=!1;const Pe=$e.createReactive({callback:N=>{s(5,nt=N)},execFn:m},{id:"ideal",...Oe});Pe(rt,{noResolve:ve,...Oe}),globalThis[Symbol.for("ideal")]={get value(){return nt}};let qe={initialData:void 0,initialError:void 0},Qe=B`select
    driver_code               as label,
    team_colour,
    qualifying_sector_1_s     as actual_1,
    qualifying_sector_2_s     as actual_2,
    qualifying_sector_3_s     as actual_3,
    best_sector_1_s           as target_1,
    best_sector_2_s           as target_2,
    best_sector_3_s           as target_3,
    best_qualifying_lap_s     as actual_total,
    ideal_lap_s               as target_total
from f1.ideal_laps
where meeting_key = ${o.meeting}
  and is_within_107_pct
  and qualifying_sector_1_s is not null
  and qualifying_sector_2_s is not null
  and qualifying_sector_3_s is not null
order by qualifying_lap_rank`,Ee=`select
    driver_code               as label,
    team_colour,
    qualifying_sector_1_s     as actual_1,
    qualifying_sector_2_s     as actual_2,
    qualifying_sector_3_s     as actual_3,
    best_sector_1_s           as target_1,
    best_sector_2_s           as target_2,
    best_sector_3_s           as target_3,
    best_qualifying_lap_s     as actual_total,
    ideal_lap_s               as target_total
from f1.ideal_laps
where meeting_key = ${o.meeting}
  and is_within_107_pct
  and qualifying_sector_1_s is not null
  and qualifying_sector_2_s is not null
  and qualifying_sector_3_s is not null
order by qualifying_lap_rank`;a.sector_bullets_data&&(a.sector_bullets_data instanceof Error?qe.initialError=a.sector_bullets_data:qe.initialData=a.sector_bullets_data,a.sector_bullets_columns&&(qe.knownColumns=a.sector_bullets_columns));let $t,it=!1;const We=$e.createReactive({callback:N=>{s(6,$t=N)},execFn:m},{id:"sector_bullets",...qe});We(Ee,{noResolve:Qe,...qe}),globalThis[Symbol.for("sector_bullets")]={get value(){return $t}};let He={initialData:void 0,initialError:void 0},Re=B`select lap_number, driver_code, team_colour, position
from f1.laps
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and position is not null
order by lap_number`,Ve=`select lap_number, driver_code, team_colour, position
from f1.laps
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and position is not null
order by lap_number`;a.positions_data&&(a.positions_data instanceof Error?He.initialError=a.positions_data:He.initialData=a.positions_data,a.positions_columns&&(He.knownColumns=a.positions_columns));let Le,yt=!1;const at=$e.createReactive({callback:N=>{s(7,Le=N)},execFn:m},{id:"positions",...He});at(Ve,{noResolve:Re,...He}),globalThis[Symbol.for("positions")]={get value(){return Le}};let Me={initialData:void 0,initialError:void 0},Se=B`select driver_code, any_value(team_colour) as team_colour from (select lap_number, driver_code, team_colour, position
from f1.laps
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and position is not null
order by lap_number) group by 1`,ze=`select driver_code, any_value(team_colour) as team_colour from (select lap_number, driver_code, team_colour, position
from f1.laps
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and position is not null
order by lap_number) group by 1`;a.position_colors_data&&(a.position_colors_data instanceof Error?Me.initialError=a.position_colors_data:Me.initialData=a.position_colors_data,a.position_colors_columns&&(Me.knownColumns=a.position_colors_columns));let Ne,bt=!1;const lt=$e.createReactive({callback:N=>{s(8,Ne=N)},execFn:m},{id:"position_colors",...Me});lt(ze,{noResolve:Se,...Me}),globalThis[Symbol.for("position_colors")]={get value(){return Ne}};let Ce={initialData:void 0,initialError:void 0},Te=B`select l.lap_number, l.driver_code, l.team_colour, l.gap_to_leader_s
from f1.laps l
join f1.results r
  on r.meeting_key = l.meeting_key
 and r.session_name = l.session_name
 and r.driver_code = l.driver_code
where l.meeting_key = ${o.meeting}
  and l.session_name = '${_.session}'
  and r.position <= 10
  and l.gap_to_leader_s is not null
order by l.lap_number`,Ye=`select l.lap_number, l.driver_code, l.team_colour, l.gap_to_leader_s
from f1.laps l
join f1.results r
  on r.meeting_key = l.meeting_key
 and r.session_name = l.session_name
 and r.driver_code = l.driver_code
where l.meeting_key = ${o.meeting}
  and l.session_name = '${_.session}'
  and r.position <= 10
  and l.gap_to_leader_s is not null
order by l.lap_number`;a.trace_data&&(a.trace_data instanceof Error?Ce.initialError=a.trace_data:Ce.initialData=a.trace_data,a.trace_columns&&(Ce.knownColumns=a.trace_columns));let re,ne=!1;const ie=$e.createReactive({callback:N=>{s(9,re=N)},execFn:m},{id:"trace",...Ce});ie(Ye,{noResolve:Te,...Ce}),globalThis[Symbol.for("trace")]={get value(){return re}};let Z={initialData:void 0,initialError:void 0},Y=B`select driver_code, any_value(team_colour) as team_colour from (select l.lap_number, l.driver_code, l.team_colour, l.gap_to_leader_s
from f1.laps l
join f1.results r
  on r.meeting_key = l.meeting_key
 and r.session_name = l.session_name
 and r.driver_code = l.driver_code
where l.meeting_key = ${o.meeting}
  and l.session_name = '${_.session}'
  and r.position <= 10
  and l.gap_to_leader_s is not null
order by l.lap_number) group by 1`,x=`select driver_code, any_value(team_colour) as team_colour from (select l.lap_number, l.driver_code, l.team_colour, l.gap_to_leader_s
from f1.laps l
join f1.results r
  on r.meeting_key = l.meeting_key
 and r.session_name = l.session_name
 and r.driver_code = l.driver_code
where l.meeting_key = ${o.meeting}
  and l.session_name = '${_.session}'
  and r.position <= 10
  and l.gap_to_leader_s is not null
order by l.lap_number) group by 1`;a.trace_colors_data&&(a.trace_colors_data instanceof Error?Z.initialError=a.trace_colors_data:Z.initialData=a.trace_colors_data,a.trace_colors_columns&&(Z.knownColumns=a.trace_colors_columns));let ae,le=!1;const oe=$e.createReactive({callback:N=>{s(10,ae=N)},execFn:m},{id:"trace_colors",...Z});oe(x,{noResolve:Y,...Z}),globalThis[Symbol.for("trace_colors")]={get value(){return ae}};let X={initialData:void 0,initialError:void 0},J=B`select
    st.driver_code,
    'Stint ' || st.stint_number || ' · ' || st.compound as stint,
    st.stint_length_laps,
    r.position
from f1.stints st
join f1.results r
  on r.meeting_key = st.meeting_key
 and r.session_name = st.session_name
 and r.driver_code = st.driver_code
where st.meeting_key = ${o.meeting}
  and st.session_name = '${_.session}'
order by r.position nulls last, st.stint_number`,ee=`select
    st.driver_code,
    'Stint ' || st.stint_number || ' · ' || st.compound as stint,
    st.stint_length_laps,
    r.position
from f1.stints st
join f1.results r
  on r.meeting_key = st.meeting_key
 and r.session_name = st.session_name
 and r.driver_code = st.driver_code
where st.meeting_key = ${o.meeting}
  and st.session_name = '${_.session}'
order by r.position nulls last, st.stint_number`;a.strategy_data&&(a.strategy_data instanceof Error?X.initialError=a.strategy_data:X.initialData=a.strategy_data,a.strategy_columns&&(X.knownColumns=a.strategy_columns));let _e,fe=!1;const me=$e.createReactive({callback:N=>{s(11,_e=N)},execFn:m},{id:"strategy",...X});me(ee,{noResolve:J,...X}),globalThis[Symbol.for("strategy")]={get value(){return _e}};let l={initialData:void 0,initialError:void 0},u=B`select distinct stint from (select
    st.driver_code,
    'Stint ' || st.stint_number || ' · ' || st.compound as stint,
    st.stint_length_laps,
    r.position
from f1.stints st
join f1.results r
  on r.meeting_key = st.meeting_key
 and r.session_name = st.session_name
 and r.driver_code = st.driver_code
where st.meeting_key = ${o.meeting}
  and st.session_name = '${_.session}'
order by r.position nulls last, st.stint_number)`,ot=`select distinct stint from (select
    st.driver_code,
    'Stint ' || st.stint_number || ' · ' || st.compound as stint,
    st.stint_length_laps,
    r.position
from f1.stints st
join f1.results r
  on r.meeting_key = st.meeting_key
 and r.session_name = st.session_name
 and r.driver_code = st.driver_code
where st.meeting_key = ${o.meeting}
  and st.session_name = '${_.session}'
order by r.position nulls last, st.stint_number)`;a.stint_colors_data&&(a.stint_colors_data instanceof Error?l.initialError=a.stint_colors_data:l.initialData=a.stint_colors_data,a.stint_colors_columns&&(l.knownColumns=a.stint_colors_columns));let wt,vt=!1;const kt=$e.createReactive({callback:N=>{s(12,wt=N)},execFn:m},{id:"stint_colors",...l});kt(ot,{noResolve:u,...l}),globalThis[Symbol.for("stint_colors")]={get value(){return wt}};let Xe={initialData:void 0,initialError:void 0},Ue=B`select driver_code, driver_name, team_name, median_fuel_corrected_lap_s, top_speed_kph
from f1.driver_session_pace
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and clean_laps >= 10
  and top_speed_kph is not null`,tt=`select driver_code, driver_name, team_name, median_fuel_corrected_lap_s, top_speed_kph
from f1.driver_session_pace
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and clean_laps >= 10
  and top_speed_kph is not null`;a.pace_speed_data&&(a.pace_speed_data instanceof Error?Xe.initialError=a.pace_speed_data:Xe.initialData=a.pace_speed_data,a.pace_speed_columns&&(Xe.knownColumns=a.pace_speed_columns));let ft,mt=!1;const ut=$e.createReactive({callback:N=>{s(13,ft=N)},execFn:m},{id:"pace_speed",...Xe});ut(tt,{noResolve:Ue,...Xe}),globalThis[Symbol.for("pace_speed")]={get value(){return ft}};let Je={initialData:void 0,initialError:void 0},Be=B`select team_name, any_value(team_colour) as team_colour
from f1.driver_session_pace
where meeting_key = ${o.meeting} and session_name = '${_.session}'
group by 1`,qt=`select team_name, any_value(team_colour) as team_colour
from f1.driver_session_pace
where meeting_key = ${o.meeting} and session_name = '${_.session}'
group by 1`;a.pace_speed_colors_data&&(a.pace_speed_colors_data instanceof Error?Je.initialError=a.pace_speed_colors_data:Je.initialData=a.pace_speed_colors_data,a.pace_speed_colors_columns&&(Je.knownColumns=a.pace_speed_colors_columns));let Bt,Gt=!1;const Pt=$e.createReactive({callback:N=>{s(14,Bt=N)},execFn:m},{id:"pace_speed_colors",...Je});Pt(qt,{noResolve:Be,...Je}),globalThis[Symbol.for("pace_speed_colors")]={get value(){return Bt}};let ct={initialData:void 0,initialError:void 0},dt=B`select
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 when 'HARD' then 3 else 4 end as compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as deg_s_per_lap,
    count(*) as stints
from f1.stints
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and clean_laps >= 5
  and deg_fuel_corrected_s_per_lap is not null
group by compound
order by compound_order`,Rt=`select
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 when 'HARD' then 3 else 4 end as compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as deg_s_per_lap,
    count(*) as stints
from f1.stints
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and clean_laps >= 5
  and deg_fuel_corrected_s_per_lap is not null
group by compound
order by compound_order`;a.race_deg_data&&(a.race_deg_data instanceof Error?ct.initialError=a.race_deg_data:ct.initialData=a.race_deg_data,a.race_deg_columns&&(ct.knownColumns=a.race_deg_columns));let Wt,Vt=!1;const zt=$e.createReactive({callback:N=>{s(15,Wt=N)},execFn:m},{id:"race_deg",...ct});zt(Rt,{noResolve:dt,...ct}),globalThis[Symbol.for("race_deg")]={get value(){return Wt}};let pt={initialData:void 0,initialError:void 0},gt=B`select
    driver_name,
    team_name,
    stop_number,
    lap_number,
    compound_before || ' → ' || compound_after as tyre_change,
    stop_duration_s,
    lane_duration_s
from f1.pit_stops
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
order by lap_number, stop_duration_s`,St=`select
    driver_name,
    team_name,
    stop_number,
    lap_number,
    compound_before || ' → ' || compound_after as tyre_change,
    stop_duration_s,
    lane_duration_s
from f1.pit_stops
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
order by lap_number, stop_duration_s`;a.pits_data&&(a.pits_data instanceof Error?pt.initialError=a.pits_data:pt.initialData=a.pits_data,a.pits_columns&&(pt.knownColumns=a.pits_columns));let Yt,Xt=!1;const Jt=$e.createReactive({callback:N=>{s(16,Yt=N)},execFn:m},{id:"pits",...pt});return Jt(St,{noResolve:gt,...pt}),globalThis[Symbol.for("pits")]={get value(){return Yt}},n.$$set=N=>{"data"in N&&s(17,i=N.data)},n.$$.update=()=>{n.$$.dirty[0]&131072&&s(18,{data:a={},customFormattingSettings:d,__db:$}=i,a),n.$$.dirty[0]&262144&&Vs.set(Object.keys(a).length>0),n.$$.dirty[2]&134217728&&s(20,o=e.params),n.$$.dirty[0]&1048576&&s(22,D=B`select * from f1.meetings where meeting_key = ${o.meeting}`),n.$$.dirty[0]&1048576&&s(23,v=`select * from f1.meetings where meeting_key = ${o.meeting}`),n.$$.dirty[0]&31457280&&(D||!k?D||(Q(v,{noResolve:D,...y}),s(24,k=!0)):Q(v,{noResolve:D})),n.$$.dirty[0]&1048576&&s(26,P=B`select distinct session_name, case session_name when 'Race' then 1 else 2 end as sort
from f1.results
where meeting_key = ${o.meeting} and session_name in ('Race', 'Sprint')
order by sort`),n.$$.dirty[0]&1048576&&s(27,G=`select distinct session_name, case session_name when 'Race' then 1 else 2 end as sort
from f1.results
where meeting_key = ${o.meeting} and session_name in ('Race', 'Sprint')
order by sort`),n.$$.dirty[0]&503316480&&(P||!z?P||(ye(G,{noResolve:P,...F}),s(28,z=!0)):ye(G,{noResolve:P})),n.$$.dirty[0]&1048576&&s(30,M=B`select
    winner,
    pole_sitter,
    safety_cars,
    virtual_safety_cars,
    red_flags,
    race_track_temp_c,
    case when wet_race then 'Wet' else 'Dry' end as conditions
from (select * from f1.meetings where meeting_key = ${o.meeting})`),n.$$.dirty[0]&1048576&&s(31,L=`select
    winner,
    pole_sitter,
    safety_cars,
    virtual_safety_cars,
    red_flags,
    race_track_temp_c,
    case when wet_race then 'Wet' else 'Dry' end as conditions
from (select * from f1.meetings where meeting_key = ${o.meeting})`),n.$$.dirty[0]&1610612736|n.$$.dirty[1]&3&&(M||!p?M||(C(L,{noResolve:M,...R}),s(32,p=!0)):C(L,{noResolve:M})),n.$$.dirty[0]&1572864&&s(34,Ae=B`select
    position,
    driver_name,
    driver_code,
    team_name,
    grid_position,
    positions_gained,
    time_or_gap,
    points,
    case when best_lap_s is not null
         then printf('%d:%06.3f', floor(best_lap_s / 60)::int, best_lap_s - 60 * floor(best_lap_s / 60)) end as best_lap,
    driver_link
from f1.results
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
order by position nulls last, number_of_laps desc`),n.$$.dirty[0]&1572864&&s(35,be=`select
    position,
    driver_name,
    driver_code,
    team_name,
    grid_position,
    positions_gained,
    time_or_gap,
    points,
    case when best_lap_s is not null
         then printf('%d:%06.3f', floor(best_lap_s / 60)::int, best_lap_s - 60 * floor(best_lap_s / 60)) end as best_lap,
    driver_link
from f1.results
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
order by position nulls last, number_of_laps desc`),n.$$.dirty[1]&60&&(Ae||!Ie?Ae||(we(be,{noResolve:Ae,...Fe}),s(36,Ie=!0)):we(be,{noResolve:Ae})),n.$$.dirty[0]&1572864&&s(38,H=B`select
    position,
    driver_name,
    team_name,
    printf('%d:%06.3f', floor(q1_time_s / 60)::int, q1_time_s - 60 * floor(q1_time_s / 60)) as q1,
    printf('%d:%06.3f', floor(q2_time_s / 60)::int, q2_time_s - 60 * floor(q2_time_s / 60)) as q2,
    printf('%d:%06.3f', floor(q3_time_s / 60)::int, q3_time_s - 60 * floor(q3_time_s / 60)) as q3
from f1.results
where meeting_key = ${o.meeting}
  and session_name = case when '${_.session}' = 'Sprint' then 'Sprint Qualifying' else 'Qualifying' end
order by position nulls last`),n.$$.dirty[0]&1572864&&s(39,O=`select
    position,
    driver_name,
    team_name,
    printf('%d:%06.3f', floor(q1_time_s / 60)::int, q1_time_s - 60 * floor(q1_time_s / 60)) as q1,
    printf('%d:%06.3f', floor(q2_time_s / 60)::int, q2_time_s - 60 * floor(q2_time_s / 60)) as q2,
    printf('%d:%06.3f', floor(q3_time_s / 60)::int, q3_time_s - 60 * floor(q3_time_s / 60)) as q3
from f1.results
where meeting_key = ${o.meeting}
  and session_name = case when '${_.session}' = 'Sprint' then 'Sprint Qualifying' else 'Qualifying' end
order by position nulls last`),n.$$.dirty[1]&960&&(H||!ge?H||(ue(O,{noResolve:H,...pe}),s(40,ge=!0)):ue(O,{noResolve:H})),n.$$.dirty[0]&1048576&&s(42,ve=B`select
    driver_name,
    driver_code,
    team_name,
    best_qualifying_lap_s,
    ideal_lap_s,
    time_left_s,
    best_sector_1_s, sector_1_session,
    best_sector_2_s, sector_2_session,
    best_sector_3_s, sector_3_session,
    qualifying_lap_rank,
    ideal_lap_rank,
    qualifying_lap_rank - ideal_lap_rank as ideal_places_gained,
    is_comparable_weekend
from f1.ideal_laps
where meeting_key = ${o.meeting}
  and is_within_107_pct
order by qualifying_lap_rank`),n.$$.dirty[0]&1048576&&s(43,rt=`select
    driver_name,
    driver_code,
    team_name,
    best_qualifying_lap_s,
    ideal_lap_s,
    time_left_s,
    best_sector_1_s, sector_1_session,
    best_sector_2_s, sector_2_session,
    best_sector_3_s, sector_3_session,
    qualifying_lap_rank,
    ideal_lap_rank,
    qualifying_lap_rank - ideal_lap_rank as ideal_places_gained,
    is_comparable_weekend
from f1.ideal_laps
where meeting_key = ${o.meeting}
  and is_within_107_pct
order by qualifying_lap_rank`),n.$$.dirty[1]&15360&&(ve||!Ge?ve||(Pe(rt,{noResolve:ve,...Oe}),s(44,Ge=!0)):Pe(rt,{noResolve:ve})),n.$$.dirty[0]&1048576&&s(46,Qe=B`select
    driver_code               as label,
    team_colour,
    qualifying_sector_1_s     as actual_1,
    qualifying_sector_2_s     as actual_2,
    qualifying_sector_3_s     as actual_3,
    best_sector_1_s           as target_1,
    best_sector_2_s           as target_2,
    best_sector_3_s           as target_3,
    best_qualifying_lap_s     as actual_total,
    ideal_lap_s               as target_total
from f1.ideal_laps
where meeting_key = ${o.meeting}
  and is_within_107_pct
  and qualifying_sector_1_s is not null
  and qualifying_sector_2_s is not null
  and qualifying_sector_3_s is not null
order by qualifying_lap_rank`),n.$$.dirty[0]&1048576&&s(47,Ee=`select
    driver_code               as label,
    team_colour,
    qualifying_sector_1_s     as actual_1,
    qualifying_sector_2_s     as actual_2,
    qualifying_sector_3_s     as actual_3,
    best_sector_1_s           as target_1,
    best_sector_2_s           as target_2,
    best_sector_3_s           as target_3,
    best_qualifying_lap_s     as actual_total,
    ideal_lap_s               as target_total
from f1.ideal_laps
where meeting_key = ${o.meeting}
  and is_within_107_pct
  and qualifying_sector_1_s is not null
  and qualifying_sector_2_s is not null
  and qualifying_sector_3_s is not null
order by qualifying_lap_rank`),n.$$.dirty[1]&245760&&(Qe||!it?Qe||(We(Ee,{noResolve:Qe,...qe}),s(48,it=!0)):We(Ee,{noResolve:Qe})),n.$$.dirty[0]&1572864&&s(50,Re=B`select lap_number, driver_code, team_colour, position
from f1.laps
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and position is not null
order by lap_number`),n.$$.dirty[0]&1572864&&s(51,Ve=`select lap_number, driver_code, team_colour, position
from f1.laps
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and position is not null
order by lap_number`),n.$$.dirty[1]&3932160&&(Re||!yt?Re||(at(Ve,{noResolve:Re,...He}),s(52,yt=!0)):at(Ve,{noResolve:Re})),n.$$.dirty[0]&1572864&&s(54,Se=B`select driver_code, any_value(team_colour) as team_colour from (select lap_number, driver_code, team_colour, position
from f1.laps
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and position is not null
order by lap_number) group by 1`),n.$$.dirty[0]&1572864&&s(55,ze=`select driver_code, any_value(team_colour) as team_colour from (select lap_number, driver_code, team_colour, position
from f1.laps
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and position is not null
order by lap_number) group by 1`),n.$$.dirty[1]&62914560&&(Se||!bt?Se||(lt(ze,{noResolve:Se,...Me}),s(56,bt=!0)):lt(ze,{noResolve:Se})),n.$$.dirty[0]&1572864&&s(58,Te=B`select l.lap_number, l.driver_code, l.team_colour, l.gap_to_leader_s
from f1.laps l
join f1.results r
  on r.meeting_key = l.meeting_key
 and r.session_name = l.session_name
 and r.driver_code = l.driver_code
where l.meeting_key = ${o.meeting}
  and l.session_name = '${_.session}'
  and r.position <= 10
  and l.gap_to_leader_s is not null
order by l.lap_number`),n.$$.dirty[0]&1572864&&s(59,Ye=`select l.lap_number, l.driver_code, l.team_colour, l.gap_to_leader_s
from f1.laps l
join f1.results r
  on r.meeting_key = l.meeting_key
 and r.session_name = l.session_name
 and r.driver_code = l.driver_code
where l.meeting_key = ${o.meeting}
  and l.session_name = '${_.session}'
  and r.position <= 10
  and l.gap_to_leader_s is not null
order by l.lap_number`),n.$$.dirty[1]&1006632960&&(Te||!ne?Te||(ie(Ye,{noResolve:Te,...Ce}),s(60,ne=!0)):ie(Ye,{noResolve:Te})),n.$$.dirty[0]&1572864&&s(62,Y=B`select driver_code, any_value(team_colour) as team_colour from (select l.lap_number, l.driver_code, l.team_colour, l.gap_to_leader_s
from f1.laps l
join f1.results r
  on r.meeting_key = l.meeting_key
 and r.session_name = l.session_name
 and r.driver_code = l.driver_code
where l.meeting_key = ${o.meeting}
  and l.session_name = '${_.session}'
  and r.position <= 10
  and l.gap_to_leader_s is not null
order by l.lap_number) group by 1`),n.$$.dirty[0]&1572864&&s(63,x=`select driver_code, any_value(team_colour) as team_colour from (select l.lap_number, l.driver_code, l.team_colour, l.gap_to_leader_s
from f1.laps l
join f1.results r
  on r.meeting_key = l.meeting_key
 and r.session_name = l.session_name
 and r.driver_code = l.driver_code
where l.meeting_key = ${o.meeting}
  and l.session_name = '${_.session}'
  and r.position <= 10
  and l.gap_to_leader_s is not null
order by l.lap_number) group by 1`),n.$$.dirty[1]&1073741824|n.$$.dirty[2]&7&&(Y||!le?Y||(oe(x,{noResolve:Y,...Z}),s(64,le=!0)):oe(x,{noResolve:Y})),n.$$.dirty[0]&1572864&&s(66,J=B`select
    st.driver_code,
    'Stint ' || st.stint_number || ' · ' || st.compound as stint,
    st.stint_length_laps,
    r.position
from f1.stints st
join f1.results r
  on r.meeting_key = st.meeting_key
 and r.session_name = st.session_name
 and r.driver_code = st.driver_code
where st.meeting_key = ${o.meeting}
  and st.session_name = '${_.session}'
order by r.position nulls last, st.stint_number`),n.$$.dirty[0]&1572864&&s(67,ee=`select
    st.driver_code,
    'Stint ' || st.stint_number || ' · ' || st.compound as stint,
    st.stint_length_laps,
    r.position
from f1.stints st
join f1.results r
  on r.meeting_key = st.meeting_key
 and r.session_name = st.session_name
 and r.driver_code = st.driver_code
where st.meeting_key = ${o.meeting}
  and st.session_name = '${_.session}'
order by r.position nulls last, st.stint_number`),n.$$.dirty[2]&120&&(J||!fe?J||(me(ee,{noResolve:J,...X}),s(68,fe=!0)):me(ee,{noResolve:J})),n.$$.dirty[0]&1572864&&s(70,u=B`select distinct stint from (select
    st.driver_code,
    'Stint ' || st.stint_number || ' · ' || st.compound as stint,
    st.stint_length_laps,
    r.position
from f1.stints st
join f1.results r
  on r.meeting_key = st.meeting_key
 and r.session_name = st.session_name
 and r.driver_code = st.driver_code
where st.meeting_key = ${o.meeting}
  and st.session_name = '${_.session}'
order by r.position nulls last, st.stint_number)`),n.$$.dirty[0]&1572864&&s(71,ot=`select distinct stint from (select
    st.driver_code,
    'Stint ' || st.stint_number || ' · ' || st.compound as stint,
    st.stint_length_laps,
    r.position
from f1.stints st
join f1.results r
  on r.meeting_key = st.meeting_key
 and r.session_name = st.session_name
 and r.driver_code = st.driver_code
where st.meeting_key = ${o.meeting}
  and st.session_name = '${_.session}'
order by r.position nulls last, st.stint_number)`),n.$$.dirty[2]&1920&&(u||!vt?u||(kt(ot,{noResolve:u,...l}),s(72,vt=!0)):kt(ot,{noResolve:u})),n.$$.dirty[0]&1572864&&s(74,Ue=B`select driver_code, driver_name, team_name, median_fuel_corrected_lap_s, top_speed_kph
from f1.driver_session_pace
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and clean_laps >= 10
  and top_speed_kph is not null`),n.$$.dirty[0]&1572864&&s(75,tt=`select driver_code, driver_name, team_name, median_fuel_corrected_lap_s, top_speed_kph
from f1.driver_session_pace
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and clean_laps >= 10
  and top_speed_kph is not null`),n.$$.dirty[2]&30720&&(Ue||!mt?Ue||(ut(tt,{noResolve:Ue,...Xe}),s(76,mt=!0)):ut(tt,{noResolve:Ue})),n.$$.dirty[0]&1572864&&s(78,Be=B`select team_name, any_value(team_colour) as team_colour
from f1.driver_session_pace
where meeting_key = ${o.meeting} and session_name = '${_.session}'
group by 1`),n.$$.dirty[0]&1572864&&s(79,qt=`select team_name, any_value(team_colour) as team_colour
from f1.driver_session_pace
where meeting_key = ${o.meeting} and session_name = '${_.session}'
group by 1`),n.$$.dirty[2]&491520&&(Be||!Gt?Be||(Pt(qt,{noResolve:Be,...Je}),s(80,Gt=!0)):Pt(qt,{noResolve:Be})),n.$$.dirty[0]&1572864&&s(82,dt=B`select
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 when 'HARD' then 3 else 4 end as compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as deg_s_per_lap,
    count(*) as stints
from f1.stints
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and clean_laps >= 5
  and deg_fuel_corrected_s_per_lap is not null
group by compound
order by compound_order`),n.$$.dirty[0]&1572864&&s(83,Rt=`select
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 when 'HARD' then 3 else 4 end as compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as deg_s_per_lap,
    count(*) as stints
from f1.stints
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
  and clean_laps >= 5
  and deg_fuel_corrected_s_per_lap is not null
group by compound
order by compound_order`),n.$$.dirty[2]&7864320&&(dt||!Vt?dt||(zt(Rt,{noResolve:dt,...ct}),s(84,Vt=!0)):zt(Rt,{noResolve:dt})),n.$$.dirty[0]&1572864&&s(86,gt=B`select
    driver_name,
    team_name,
    stop_number,
    lap_number,
    compound_before || ' → ' || compound_after as tyre_change,
    stop_duration_s,
    lane_duration_s
from f1.pit_stops
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
order by lap_number, stop_duration_s`),n.$$.dirty[0]&1572864&&s(87,St=`select
    driver_name,
    team_name,
    stop_number,
    lap_number,
    compound_before || ' → ' || compound_after as tyre_change,
    stop_duration_s,
    lane_duration_s
from f1.pit_stops
where meeting_key = ${o.meeting}
  and session_name = '${_.session}'
order by lap_number, stop_duration_s`),n.$$.dirty[2]&125829120&&(gt||!Xt?gt||(Jt(St,{noResolve:gt,...pt}),s(88,Xt=!0)):Jt(St,{noResolve:gt}))},[A,K,j,W,he,nt,$t,Le,Ne,re,ae,_e,wt,ft,Bt,Wt,Yt,i,a,_,o,y,D,v,k,F,P,G,z,R,M,L,p,Fe,Ae,be,Ie,pe,H,O,ge,Oe,ve,rt,Ge,qe,Qe,Ee,it,He,Re,Ve,yt,Me,Se,ze,bt,Ce,Te,Ye,ne,Z,Y,x,le,X,J,ee,fe,l,u,ot,vt,Xe,Ue,tt,mt,Je,Be,qt,Gt,ct,dt,Rt,Vt,pt,gt,St,Xt,e]}class Yr extends Qt{constructor(t){super(),Ut(this,t,Fr,Dr,Ot,{data:17},null,[-1,-1,-1,-1])}}export{Yr as component};
