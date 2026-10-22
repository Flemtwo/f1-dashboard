import{s as Xe,d as m,i as d,b as Te,c as b,e as y,h as Ye,f as N,g as qe,x as $e,k as h,l as U,m as Ie,n as ze,o as Be,p as Ve,q as We,r as ge,j as Ke,u as Je,v as Ze}from"../chunks/scheduler.fW7yY31m.js";import{S as et,i as tt,d as S,t as v,a as p,c as de,m as A,b as C,e as D,g as pe}from"../chunks/index.DLlk0QKX.js";import{G as He}from"../chunks/GradientBarChart.BPK9hydh.js";import{D as at,a as st,s as nt,Q as ve,p as rt,C as ke,b as Me,r as xe,c as it}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YyYGKAEJ.js";import{w as ot}from"../chunks/entry.DzP7nCf5.js";import{h as X,p as lt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as _t}from"../chunks/Dropdown.D2st2TDs.js";import{p as mt}from"../chunks/stores.adFM5OC5.js";import{Q as ye}from"../chunks/QueryViewer.Bv4472B1.js";import{S as ut}from"../chunks/ScatterPlot.CXc1FzZa.js";function ct(i){let a,s=g.title+"",t;return{c(){a=U("h1"),t=Ze(s),this.h()},l(r){a=N(r,"H1",{class:!0});var l=Ke(a);t=Je(l,s),l.forEach(m),this.h()},h(){b(a,"class","title")},m(r,l){d(r,a,l),Te(a,t)},p:ge,d(r){r&&m(a)}}}function ft(i){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:ge,p:ge,d:ge}}function dt(i){let a,s,t,r,l;return document.title=a=g.title,{c(){s=h(),t=U("meta"),r=h(),l=U("meta"),this.h()},l(n){s=y(n),t=N(n,"META",{property:!0,content:!0}),r=y(n),l=N(n,"META",{name:!0,content:!0}),this.h()},h(){var n,u;b(t,"property","og:title"),b(t,"content",((n=g.og)==null?void 0:n.title)??g.title),b(l,"name","twitter:title"),b(l,"content",((u=g.og)==null?void 0:u.title)??g.title)},m(n,u){d(n,s,u),d(n,t,u),d(n,r,u),d(n,l,u)},p(n,u){u&0&&a!==(a=g.title)&&(document.title=a)},d(n){n&&(m(s),m(t),m(r),m(l))}}}function pt(i){var l,n;let a,s,t=(g.description||((l=g.og)==null?void 0:l.description))&&vt(),r=((n=g.og)==null?void 0:n.image)&&gt();return{c(){t&&t.c(),a=h(),r&&r.c(),s=qe()},l(u){t&&t.l(u),a=y(u),r&&r.l(u),s=qe()},m(u,F){t&&t.m(u,F),d(u,a,F),r&&r.m(u,F),d(u,s,F)},p(u,F){var c,H;(g.description||(c=g.og)!=null&&c.description)&&t.p(u,F),(H=g.og)!=null&&H.image&&r.p(u,F)},d(u){u&&(m(a),m(s)),t&&t.d(u),r&&r.d(u)}}}function vt(i){let a,s,t,r,l;return{c(){a=U("meta"),s=h(),t=U("meta"),r=h(),l=U("meta"),this.h()},l(n){a=N(n,"META",{name:!0,content:!0}),s=y(n),t=N(n,"META",{property:!0,content:!0}),r=y(n),l=N(n,"META",{name:!0,content:!0}),this.h()},h(){var n,u,F;b(a,"name","description"),b(a,"content",g.description??((n=g.og)==null?void 0:n.description)),b(t,"property","og:description"),b(t,"content",((u=g.og)==null?void 0:u.description)??g.description),b(l,"name","twitter:description"),b(l,"content",((F=g.og)==null?void 0:F.description)??g.description)},m(n,u){d(n,a,u),d(n,s,u),d(n,t,u),d(n,r,u),d(n,l,u)},p:ge,d(n){n&&(m(a),m(s),m(t),m(r),m(l))}}}function gt(i){let a,s,t;return{c(){a=U("meta"),s=h(),t=U("meta"),this.h()},l(r){a=N(r,"META",{property:!0,content:!0}),s=y(r),t=N(r,"META",{name:!0,content:!0}),this.h()},h(){var r,l;b(a,"property","og:image"),b(a,"content",Me((r=g.og)==null?void 0:r.image)),b(t,"name","twitter:image"),b(t,"content",Me((l=g.og)==null?void 0:l.image))},m(r,l){d(r,a,l),d(r,s,l),d(r,t,l)},p:ge,d(r){r&&(m(a),m(s),m(t))}}}function Le(i){let a,s;return a=new ye({props:{queryID:"seasons",queryResult:i[0]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,r){A(a,t,r),s=!0},p(t,r){const l={};r[0]&1&&(l.queryResult=t[0]),a.$set(l)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function Ne(i){let a,s;return a=new ye({props:{queryID:"races",queryResult:i[1]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,r){A(a,t,r),s=!0},p(t,r){const l={};r[0]&2&&(l.queryResult=t[1]),a.$set(l)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function Ue(i){let a,s;return a=new ye({props:{queryID:"lap1",queryResult:i[2]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,r){A(a,t,r),s=!0},p(t,r){const l={};r[0]&4&&(l.queryResult=t[2]),a.$set(l)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function Ge(i){let a,s;return a=new ye({props:{queryID:"sat_sun",queryResult:i[3]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,r){A(a,t,r),s=!0},p(t,r){const l={};r[0]&8&&(l.queryResult=t[3]),a.$set(l)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function je(i){let a,s;return a=new ye({props:{queryID:"sat_sun_colors",queryResult:i[4]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,r){A(a,t,r),s=!0},p(t,r){const l={};r[0]&16&&(l.queryResult=t[4]),a.$set(l)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function yt(i){let a,s,t,r,l,n,u,F,c,H;return a=new ke({props:{id:"driver_name",title:"Driver"}}),t=new ke({props:{id:"team_name",title:"Team"}}),l=new ke({props:{id:"avg_grid",title:"Avg Grid",fmt:"0.0"}}),u=new ke({props:{id:"avg_finish",title:"Avg Finish",fmt:"0.0"}}),c=new ke({props:{id:"avg_places_gained",title:"Avg +/-",fmt:"0.00",contentType:"delta"}}),{c(){D(a.$$.fragment),s=h(),D(t.$$.fragment),r=h(),D(l.$$.fragment),n=h(),D(u.$$.fragment),F=h(),D(c.$$.fragment)},l(_){C(a.$$.fragment,_),s=y(_),C(t.$$.fragment,_),r=y(_),C(l.$$.fragment,_),n=y(_),C(u.$$.fragment,_),F=y(_),C(c.$$.fragment,_)},m(_,R){A(a,_,R),d(_,s,R),A(t,_,R),d(_,r,R),A(l,_,R),d(_,n,R),A(u,_,R),d(_,F,R),A(c,_,R),H=!0},p:ge,i(_){H||(p(a.$$.fragment,_),p(t.$$.fragment,_),p(l.$$.fragment,_),p(u.$$.fragment,_),p(c.$$.fragment,_),H=!0)},o(_){v(a.$$.fragment,_),v(t.$$.fragment,_),v(l.$$.fragment,_),v(u.$$.fragment,_),v(c.$$.fragment,_),H=!1},d(_){_&&(m(s),m(r),m(n),m(F)),S(a,_),S(t,_),S(l,_),S(u,_),S(c,_)}}}function Oe(i){let a,s;return a=new ye({props:{queryID:"consistency",queryResult:i[5]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,r){A(a,t,r),s=!0},p(t,r){const l={};r[0]&32&&(l.queryResult=t[5]),a.$set(l)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function Pe(i){let a,s;return a=new ye({props:{queryID:"execution",queryResult:i[6]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,r){A(a,t,r),s=!0},p(t,r){const l={};r[0]&64&&(l.queryResult=t[6]),a.$set(l)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function ht(i){let a,s,t,r,l,n,u="Who gains places at the start, who moves forward in races, and who hits the same lap time over and over. Grand Prix races only, and drivers need at least 5 starts to appear.",F,c,H,_,R,I,ie='<a href="#lap-1-places-gained-at-the-start">Lap 1: Places Gained at the Start</a>',oe,ae,V,W,M,le='<a href="#saturday-vs-sunday">Saturday vs Sunday</a>',_e,se,ne,L,K,G,me,Y,he='<a href="#consistency">Consistency</a>',J,j,O,ue,z,be='<a href="#qualifying-execution">Qualifying Execution</a>',Z,P,Q,we='How close each driver got to their <strong class="markdown">ideal lap</strong> (best S1 + S2 + S3 from any practice or qualifying session of the weekend) with their best qualifying lap. Weekends with wet or disrupted qualifying are excluded.',ce,ee,te,x=typeof g<"u"&&g.title&&g.hide_title!==!0&&ct();function fe(e,o){return typeof g<"u"&&g.title?dt:ft}let re=fe()(i),B=typeof g=="object"&&pt(),w=i[0]&&Le(i);H=new _t({props:{name:"season",data:i[0],value:"year",title:"Season"}});let $=i[1]&&Ne(i),k=i[2]&&Ue(i);V=new He({props:{data:i[2],x:"driver_name",y:"avg_gained",swapXY:"true",sort:"false",yFmt:"+0.00;-0.00",yAxisTitle:"Average places gained on lap 1 (grid → end of lap 1)",chartAreaHeight:"480"}});let T=i[3]&&Ge(i),q=i[4]&&je(i);L=new ut({props:{data:i[3],x:"avg_grid",y:"avg_finish",series:"team_name",tooltipTitle:"driver_name",seriesColors:Object.fromEntries([...i[4]].map(Qe)),xAxisTitle:"Average grid position",yAxisTitle:"Average finish (classified races)",pointSize:"12",chartAreaHeight:"380",echartsOptions:{grid:{left:48},xAxis:{inverse:!0},yAxis:{inverse:!0,nameLocation:"middle",nameRotate:90,nameGap:42}},subtitle:"Top-right = qualifies and finishes well. Above the diagonal = finishes ahead of where they start."}}),G=new at({props:{data:i[3],rows:"10",sort:"avg_places_gained desc",$$slots:{default:[yt]},$$scope:{ctx:i}}});let E=i[5]&&Oe(i);O=new He({props:{data:i[5],x:"driver_name",y:"median_stddev_s",swapXY:"true",sort:"false",yFmt:"0.000",yAxisTitle:"Typical lap-to-lap variation (s): lower is more metronomic",chartAreaHeight:"480",subtitle:"Median, across races, of the standard deviation of each driver's fuel-corrected clean laps."}});let f=i[6]&&Pe(i);return ee=new He({props:{data:i[6],x:"driver_name",y:"median_time_left_s",swapXY:"true",sort:"false",yFmt:"0.000",yAxisTitle:"Median time left on the table (s): lower = gets more out of the car",chartAreaHeight:"480"}}),{c(){x&&x.c(),a=h(),re.c(),s=U("meta"),t=U("meta"),B&&B.c(),r=qe(),l=h(),n=U("p"),n.textContent=u,F=h(),w&&w.c(),c=h(),D(H.$$.fragment),_=h(),$&&$.c(),R=h(),I=U("h2"),I.innerHTML=ie,oe=h(),k&&k.c(),ae=h(),D(V.$$.fragment),W=h(),M=U("h2"),M.innerHTML=le,_e=h(),T&&T.c(),se=h(),q&&q.c(),ne=h(),D(L.$$.fragment),K=h(),D(G.$$.fragment),me=h(),Y=U("h2"),Y.innerHTML=he,J=h(),E&&E.c(),j=h(),D(O.$$.fragment),ue=h(),z=U("h2"),z.innerHTML=be,Z=h(),f&&f.c(),P=h(),Q=U("p"),Q.innerHTML=we,ce=h(),D(ee.$$.fragment),this.h()},l(e){x&&x.l(e),a=y(e);const o=Ye("svelte-2igo1p",document.head);re.l(o),s=N(o,"META",{name:!0,content:!0}),t=N(o,"META",{name:!0,content:!0}),B&&B.l(o),r=qe(),o.forEach(m),l=y(e),n=N(e,"P",{class:!0,"data-svelte-h":!0}),$e(n)!=="svelte-1rcy5ka"&&(n.textContent=u),F=y(e),w&&w.l(e),c=y(e),C(H.$$.fragment,e),_=y(e),$&&$.l(e),R=y(e),I=N(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e(I)!=="svelte-12v6ta8"&&(I.innerHTML=ie),oe=y(e),k&&k.l(e),ae=y(e),C(V.$$.fragment,e),W=y(e),M=N(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e(M)!=="svelte-qd0o8q"&&(M.innerHTML=le),_e=y(e),T&&T.l(e),se=y(e),q&&q.l(e),ne=y(e),C(L.$$.fragment,e),K=y(e),C(G.$$.fragment,e),me=y(e),Y=N(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e(Y)!=="svelte-1egd0vs"&&(Y.innerHTML=he),J=y(e),E&&E.l(e),j=y(e),C(O.$$.fragment,e),ue=y(e),z=N(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),$e(z)!=="svelte-1frnx2l"&&(z.innerHTML=be),Z=y(e),f&&f.l(e),P=y(e),Q=N(e,"P",{class:!0,"data-svelte-h":!0}),$e(Q)!=="svelte-j9zvzf"&&(Q.innerHTML=we),ce=y(e),C(ee.$$.fragment,e),this.h()},h(){b(s,"name","twitter:card"),b(s,"content","summary_large_image"),b(t,"name","twitter:site"),b(t,"content","@evidence_dev"),b(n,"class","markdown"),b(I,"class","markdown"),b(I,"id","lap-1-places-gained-at-the-start"),b(M,"class","markdown"),b(M,"id","saturday-vs-sunday"),b(Y,"class","markdown"),b(Y,"id","consistency"),b(z,"class","markdown"),b(z,"id","qualifying-execution"),b(Q,"class","markdown")},m(e,o){x&&x.m(e,o),d(e,a,o),re.m(document.head,null),Te(document.head,s),Te(document.head,t),B&&B.m(document.head,null),Te(document.head,r),d(e,l,o),d(e,n,o),d(e,F,o),w&&w.m(e,o),d(e,c,o),A(H,e,o),d(e,_,o),$&&$.m(e,o),d(e,R,o),d(e,I,o),d(e,oe,o),k&&k.m(e,o),d(e,ae,o),A(V,e,o),d(e,W,o),d(e,M,o),d(e,_e,o),T&&T.m(e,o),d(e,se,o),q&&q.m(e,o),d(e,ne,o),A(L,e,o),d(e,K,o),A(G,e,o),d(e,me,o),d(e,Y,o),d(e,J,o),E&&E.m(e,o),d(e,j,o),A(O,e,o),d(e,ue,o),d(e,z,o),d(e,Z,o),f&&f.m(e,o),d(e,P,o),d(e,Q,o),d(e,ce,o),A(ee,e,o),te=!0},p(e,o){typeof g<"u"&&g.title&&g.hide_title!==!0&&x.p(e,o),re.p(e,o),typeof g=="object"&&B.p(e,o),e[0]?w?(w.p(e,o),o[0]&1&&p(w,1)):(w=Le(e),w.c(),p(w,1),w.m(c.parentNode,c)):w&&(pe(),v(w,1,1,()=>{w=null}),de());const Se={};o[0]&1&&(Se.data=e[0]),H.$set(Se),e[1]?$?($.p(e,o),o[0]&2&&p($,1)):($=Ne(e),$.c(),p($,1),$.m(R.parentNode,R)):$&&(pe(),v($,1,1,()=>{$=null}),de()),e[2]?k?(k.p(e,o),o[0]&4&&p(k,1)):(k=Ue(e),k.c(),p(k,1),k.m(ae.parentNode,ae)):k&&(pe(),v(k,1,1,()=>{k=null}),de());const Ae={};o[0]&4&&(Ae.data=e[2]),V.$set(Ae),e[3]?T?(T.p(e,o),o[0]&8&&p(T,1)):(T=Ge(e),T.c(),p(T,1),T.m(se.parentNode,se)):T&&(pe(),v(T,1,1,()=>{T=null}),de()),e[4]?q?(q.p(e,o),o[0]&16&&p(q,1)):(q=je(e),q.c(),p(q,1),q.m(ne.parentNode,ne)):q&&(pe(),v(q,1,1,()=>{q=null}),de());const Ee={};o[0]&8&&(Ee.data=e[3]),o[0]&16&&(Ee.seriesColors=Object.fromEntries([...e[4]].map(Qe))),L.$set(Ee);const Fe={};o[0]&8&&(Fe.data=e[3]),o[1]&8388608&&(Fe.$$scope={dirty:o,ctx:e}),G.$set(Fe),e[5]?E?(E.p(e,o),o[0]&32&&p(E,1)):(E=Oe(e),E.c(),p(E,1),E.m(j.parentNode,j)):E&&(pe(),v(E,1,1,()=>{E=null}),de());const Ce={};o[0]&32&&(Ce.data=e[5]),O.$set(Ce),e[6]?f?(f.p(e,o),o[0]&64&&p(f,1)):(f=Pe(e),f.c(),p(f,1),f.m(P.parentNode,P)):f&&(pe(),v(f,1,1,()=>{f=null}),de());const De={};o[0]&64&&(De.data=e[6]),ee.$set(De)},i(e){te||(p(w),p(H.$$.fragment,e),p($),p(k),p(V.$$.fragment,e),p(T),p(q),p(L.$$.fragment,e),p(G.$$.fragment,e),p(E),p(O.$$.fragment,e),p(f),p(ee.$$.fragment,e),te=!0)},o(e){v(w),v(H.$$.fragment,e),v($),v(k),v(V.$$.fragment,e),v(T),v(q),v(L.$$.fragment,e),v(G.$$.fragment,e),v(E),v(O.$$.fragment,e),v(f),v(ee.$$.fragment,e),te=!1},d(e){e&&(m(a),m(l),m(n),m(F),m(c),m(_),m(R),m(I),m(oe),m(ae),m(W),m(M),m(_e),m(se),m(ne),m(K),m(me),m(Y),m(J),m(j),m(ue),m(z),m(Z),m(P),m(Q),m(ce)),x&&x.d(e),re.d(e),m(s),m(t),B&&B.d(e),m(r),w&&w.d(e),S(H,e),$&&$.d(e),k&&k.d(e),S(V,e),T&&T.d(e),q&&q.d(e),S(L,e),S(G,e),E&&E.d(e),S(O,e),f&&f.d(e),S(ee,e)}}}const g={title:"Racecraft"},Qe=i=>[i.team_name,[i.team_colour,i.team_colour]];function bt(i,a,s){let t,r;Ie(i,mt,f=>s(38,t=f)),Ie(i,xe,f=>s(43,r=f));let{data:l}=a,{data:n={},customFormattingSettings:u,__db:F,inputs:c}=l;ze(xe,r="0396a7f59b81c866f65de6684903bfe3",r);let H=st(ot(c));Be(H.subscribe(f=>s(9,c=f))),Ve(it,{getCustomFormats:()=>u.customFormats||[]});const _=(f,e)=>lt(F.query,f,{query_name:e});nt(_),t.params,We(()=>!0);let R={initialData:void 0,initialError:void 0},I=X`select distinct year from f1.driver_session_pace order by year desc`,ie="select distinct year from f1.driver_session_pace order by year desc";n.seasons_data&&(n.seasons_data instanceof Error?R.initialError=n.seasons_data:R.initialData=n.seasons_data,n.seasons_columns&&(R.knownColumns=n.seasons_columns));let oe,ae=!1;const V=ve.createReactive({callback:f=>{s(0,oe=f)},execFn:_},{id:"seasons",...R});V(ie,{noResolve:I,...R}),globalThis[Symbol.for("seasons")]={get value(){return oe}};let W={initialData:void 0,initialError:void 0},M=X`select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race'`,le=`select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race'`;n.races_data&&(n.races_data instanceof Error?W.initialError=n.races_data:W.initialData=n.races_data,n.races_columns&&(W.knownColumns=n.races_columns));let _e,se=!1;const ne=ve.createReactive({callback:f=>{s(1,_e=f)},execFn:_},{id:"races",...W});ne(le,{noResolve:M,...W}),globalThis[Symbol.for("races")]={get value(){return _e}};let L={initialData:void 0,initialError:void 0},K=X`select
    driver_name,
    any_value(team_name)                       as team_name,
    round(avg(lap_1_positions_gained), 2)      as avg_gained,
    sum(lap_1_positions_gained)                as total_gained,
    count(*)                                   as starts
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where lap_1_positions_gained is not null
group by driver_name
having count(*) >= 5
order by avg_gained desc`,G=`select
    driver_name,
    any_value(team_name)                       as team_name,
    round(avg(lap_1_positions_gained), 2)      as avg_gained,
    sum(lap_1_positions_gained)                as total_gained,
    count(*)                                   as starts
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where lap_1_positions_gained is not null
group by driver_name
having count(*) >= 5
order by avg_gained desc`;n.lap1_data&&(n.lap1_data instanceof Error?L.initialError=n.lap1_data:L.initialData=n.lap1_data,n.lap1_columns&&(L.knownColumns=n.lap1_columns));let me,Y=!1;const he=ve.createReactive({callback:f=>{s(2,me=f)},execFn:_},{id:"lap1",...L});he(G,{noResolve:K,...L}),globalThis[Symbol.for("lap1")]={get value(){return me}};let J={initialData:void 0,initialError:void 0},j=X`select
    driver_name,
    driver_code,
    any_value(team_name)                  as team_name,
    round(avg(grid_position), 1)          as avg_grid,
    round(avg(finish_position), 1)        as avg_finish,
    round(avg(grid_position - finish_position), 2) as avg_places_gained
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where grid_position is not null and finish_position is not null
group by driver_name, driver_code
having count(*) >= 5`,O=`select
    driver_name,
    driver_code,
    any_value(team_name)                  as team_name,
    round(avg(grid_position), 1)          as avg_grid,
    round(avg(finish_position), 1)        as avg_finish,
    round(avg(grid_position - finish_position), 2) as avg_places_gained
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where grid_position is not null and finish_position is not null
group by driver_name, driver_code
having count(*) >= 5`;n.sat_sun_data&&(n.sat_sun_data instanceof Error?J.initialError=n.sat_sun_data:J.initialData=n.sat_sun_data,n.sat_sun_columns&&(J.knownColumns=n.sat_sun_columns));let ue,z=!1;const be=ve.createReactive({callback:f=>{s(3,ue=f)},execFn:_},{id:"sat_sun",...J});be(O,{noResolve:j,...J}),globalThis[Symbol.for("sat_sun")]={get value(){return ue}};let Z={initialData:void 0,initialError:void 0},P=X`select r.team_name, any_value(r.team_colour) as team_colour
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race') r
group by 1`,Q=`select r.team_name, any_value(r.team_colour) as team_colour
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race') r
group by 1`;n.sat_sun_colors_data&&(n.sat_sun_colors_data instanceof Error?Z.initialError=n.sat_sun_colors_data:Z.initialData=n.sat_sun_colors_data,n.sat_sun_colors_columns&&(Z.knownColumns=n.sat_sun_colors_columns));let we,ce=!1;const ee=ve.createReactive({callback:f=>{s(4,we=f)},execFn:_},{id:"sat_sun_colors",...Z});ee(Q,{noResolve:P,...Z}),globalThis[Symbol.for("sat_sun_colors")]={get value(){return we}};let te={initialData:void 0,initialError:void 0},x=X`select
    driver_name,
    any_value(team_name)                                 as team_name,
    round(median(fuel_corrected_lap_stddev_s), 3)        as median_stddev_s,
    count(*)                                             as races
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where clean_laps >= 20 and fuel_corrected_lap_stddev_s is not null
group by driver_name
having count(*) >= 5
order by median_stddev_s`,fe=`select
    driver_name,
    any_value(team_name)                                 as team_name,
    round(median(fuel_corrected_lap_stddev_s), 3)        as median_stddev_s,
    count(*)                                             as races
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where clean_laps >= 20 and fuel_corrected_lap_stddev_s is not null
group by driver_name
having count(*) >= 5
order by median_stddev_s`;n.consistency_data&&(n.consistency_data instanceof Error?te.initialError=n.consistency_data:te.initialData=n.consistency_data,n.consistency_columns&&(te.knownColumns=n.consistency_columns));let Re,re=!1;const B=ve.createReactive({callback:f=>{s(5,Re=f)},execFn:_},{id:"consistency",...te});B(fe,{noResolve:x,...te}),globalThis[Symbol.for("consistency")]={get value(){return Re}};let w={initialData:void 0,initialError:void 0},$=X`select
    driver_name,
    any_value(team_name)                 as team_name,
    round(median(time_left_s), 3)        as median_time_left_s,
    count(*) filter (time_left_s <= 0.05) as near_perfect_laps,
    count(*)                             as weekends
from f1.ideal_laps
where year = ${c.season.value}
  and is_comparable_weekend
  and is_within_107_pct
group by driver_name
having count(*) >= 5
order by median_time_left_s`,k=`select
    driver_name,
    any_value(team_name)                 as team_name,
    round(median(time_left_s), 3)        as median_time_left_s,
    count(*) filter (time_left_s <= 0.05) as near_perfect_laps,
    count(*)                             as weekends
from f1.ideal_laps
where year = ${c.season.value}
  and is_comparable_weekend
  and is_within_107_pct
group by driver_name
having count(*) >= 5
order by median_time_left_s`;n.execution_data&&(n.execution_data instanceof Error?w.initialError=n.execution_data:w.initialData=n.execution_data,n.execution_columns&&(w.knownColumns=n.execution_columns));let T,q=!1;const E=ve.createReactive({callback:f=>{s(6,T=f)},execFn:_},{id:"execution",...w});return E(k,{noResolve:$,...w}),globalThis[Symbol.for("execution")]={get value(){return T}},i.$$set=f=>{"data"in f&&s(7,l=f.data)},i.$$.update=()=>{i.$$.dirty[0]&128&&s(8,{data:n={},customFormattingSettings:u,__db:F}=l,n),i.$$.dirty[0]&256&&rt.set(Object.keys(n).length>0),i.$$.dirty[1]&128&&t.params,i.$$.dirty[0]&15360&&(I||!ae?I||(V(ie,{noResolve:I,...R}),s(13,ae=!0)):V(ie,{noResolve:I})),i.$$.dirty[0]&512&&s(15,M=X`select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race'`),i.$$.dirty[0]&512&&s(16,le=`select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race'`),i.$$.dirty[0]&245760&&(M||!se?M||(ne(le,{noResolve:M,...W}),s(17,se=!0)):ne(le,{noResolve:M})),i.$$.dirty[0]&512&&s(19,K=X`select
    driver_name,
    any_value(team_name)                       as team_name,
    round(avg(lap_1_positions_gained), 2)      as avg_gained,
    sum(lap_1_positions_gained)                as total_gained,
    count(*)                                   as starts
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where lap_1_positions_gained is not null
group by driver_name
having count(*) >= 5
order by avg_gained desc`),i.$$.dirty[0]&512&&s(20,G=`select
    driver_name,
    any_value(team_name)                       as team_name,
    round(avg(lap_1_positions_gained), 2)      as avg_gained,
    sum(lap_1_positions_gained)                as total_gained,
    count(*)                                   as starts
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where lap_1_positions_gained is not null
group by driver_name
having count(*) >= 5
order by avg_gained desc`),i.$$.dirty[0]&3932160&&(K||!Y?K||(he(G,{noResolve:K,...L}),s(21,Y=!0)):he(G,{noResolve:K})),i.$$.dirty[0]&512&&s(23,j=X`select
    driver_name,
    driver_code,
    any_value(team_name)                  as team_name,
    round(avg(grid_position), 1)          as avg_grid,
    round(avg(finish_position), 1)        as avg_finish,
    round(avg(grid_position - finish_position), 2) as avg_places_gained
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where grid_position is not null and finish_position is not null
group by driver_name, driver_code
having count(*) >= 5`),i.$$.dirty[0]&512&&s(24,O=`select
    driver_name,
    driver_code,
    any_value(team_name)                  as team_name,
    round(avg(grid_position), 1)          as avg_grid,
    round(avg(finish_position), 1)        as avg_finish,
    round(avg(grid_position - finish_position), 2) as avg_places_gained
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where grid_position is not null and finish_position is not null
group by driver_name, driver_code
having count(*) >= 5`),i.$$.dirty[0]&62914560&&(j||!z?j||(be(O,{noResolve:j,...J}),s(25,z=!0)):be(O,{noResolve:j})),i.$$.dirty[0]&512&&s(27,P=X`select r.team_name, any_value(r.team_colour) as team_colour
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race') r
group by 1`),i.$$.dirty[0]&512&&s(28,Q=`select r.team_name, any_value(r.team_colour) as team_colour
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race') r
group by 1`),i.$$.dirty[0]&1006632960&&(P||!ce?P||(ee(Q,{noResolve:P,...Z}),s(29,ce=!0)):ee(Q,{noResolve:P})),i.$$.dirty[0]&512&&s(31,x=X`select
    driver_name,
    any_value(team_name)                                 as team_name,
    round(median(fuel_corrected_lap_stddev_s), 3)        as median_stddev_s,
    count(*)                                             as races
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where clean_laps >= 20 and fuel_corrected_lap_stddev_s is not null
group by driver_name
having count(*) >= 5
order by median_stddev_s`),i.$$.dirty[0]&512&&s(32,fe=`select
    driver_name,
    any_value(team_name)                                 as team_name,
    round(median(fuel_corrected_lap_stddev_s), 3)        as median_stddev_s,
    count(*)                                             as races
from (select *
from f1.driver_session_pace
where year = ${c.season.value}
  and session_name = 'Race')
where clean_laps >= 20 and fuel_corrected_lap_stddev_s is not null
group by driver_name
having count(*) >= 5
order by median_stddev_s`),i.$$.dirty[0]&1073741824|i.$$.dirty[1]&7&&(x||!re?x||(B(fe,{noResolve:x,...te}),s(33,re=!0)):B(fe,{noResolve:x})),i.$$.dirty[0]&512&&s(35,$=X`select
    driver_name,
    any_value(team_name)                 as team_name,
    round(median(time_left_s), 3)        as median_time_left_s,
    count(*) filter (time_left_s <= 0.05) as near_perfect_laps,
    count(*)                             as weekends
from f1.ideal_laps
where year = ${c.season.value}
  and is_comparable_weekend
  and is_within_107_pct
group by driver_name
having count(*) >= 5
order by median_time_left_s`),i.$$.dirty[0]&512&&s(36,k=`select
    driver_name,
    any_value(team_name)                 as team_name,
    round(median(time_left_s), 3)        as median_time_left_s,
    count(*) filter (time_left_s <= 0.05) as near_perfect_laps,
    count(*)                             as weekends
from f1.ideal_laps
where year = ${c.season.value}
  and is_comparable_weekend
  and is_within_107_pct
group by driver_name
having count(*) >= 5
order by median_time_left_s`),i.$$.dirty[1]&120&&($||!q?$||(E(k,{noResolve:$,...w}),s(37,q=!0)):E(k,{noResolve:$}))},s(11,I=X`select distinct year from f1.driver_session_pace order by year desc`),s(12,ie="select distinct year from f1.driver_session_pace order by year desc"),[oe,_e,me,ue,we,Re,T,l,n,c,R,I,ie,ae,W,M,le,se,L,K,G,Y,J,j,O,z,Z,P,Q,ce,te,x,fe,re,w,$,k,q,t]}class At extends et{constructor(a){super(),tt(this,a,bt,ht,Xe,{data:7},null,[-1,-1])}}export{At as component};
