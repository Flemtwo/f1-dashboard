import{s as Fe,d as c,i as u,b as fe,c as g,e as $,h as He,f as M,g as ue,x as ce,k as w,l as I,m as ve,n as Se,o as Ce,p as De,q as Me,r as oe,j as Ie,u as Ae,v as Qe}from"../chunks/scheduler.fW7yY31m.js";import{S as Le,i as Ge,d as z,t as k,a as y,c as ne,m as K,b as W,e as Z,g as _e}from"../chunks/index.DLlk0QKX.js";import{G as Ne}from"../chunks/GradientBarChart.BPK9hydh.js";import{S as Oe}from"../chunks/SortedLineChart.hDHjt0DN.js";import{a as Ue,s as je,Q as ie,p as Be,b as he,r as $e,c as Pe}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YyYGKAEJ.js";import{w as xe}from"../chunks/entry.DzP7nCf5.js";import{h as Y,p as Ve}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as Xe}from"../chunks/Dropdown.D2st2TDs.js";import{B as Ye}from"../chunks/ButtonGroup.DRZjiRcZ.js";import{p as ze}from"../chunks/stores.adFM5OC5.js";import{Q as le}from"../chunks/QueryViewer.Bv4472B1.js";import{H as Ke}from"../chunks/Heatmap.CdKuGrf2.js";function We(n){let a,s=p.title+"",t;return{c(){a=I("h1"),t=Qe(s),this.h()},l(r){a=M(r,"H1",{class:!0});var i=Ie(a);t=Ae(i,s),i.forEach(c),this.h()},h(){g(a,"class","title")},m(r,i){u(r,a,i),fe(a,t)},p:oe,d(r){r&&c(a)}}}function Ze(n){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:oe,p:oe,d:oe}}function Je(n){let a,s,t,r,i;return document.title=a=p.title,{c(){s=w(),t=I("meta"),r=w(),i=I("meta"),this.h()},l(o){s=$(o),t=M(o,"META",{property:!0,content:!0}),r=$(o),i=M(o,"META",{name:!0,content:!0}),this.h()},h(){var o,m;g(t,"property","og:title"),g(t,"content",((o=p.og)==null?void 0:o.title)??p.title),g(i,"name","twitter:title"),g(i,"content",((m=p.og)==null?void 0:m.title)??p.title)},m(o,m){u(o,s,m),u(o,t,m),u(o,r,m),u(o,i,m)},p(o,m){m&0&&a!==(a=p.title)&&(document.title=a)},d(o){o&&(c(s),c(t),c(r),c(i))}}}function et(n){var i,o;let a,s,t=(p.description||((i=p.og)==null?void 0:i.description))&&tt(),r=((o=p.og)==null?void 0:o.image)&&at();return{c(){t&&t.c(),a=w(),r&&r.c(),s=ue()},l(m){t&&t.l(m),a=$(m),r&&r.l(m),s=ue()},m(m,R){t&&t.m(m,R),u(m,a,R),r&&r.m(m,R),u(m,s,R)},p(m,R){var f,j;(p.description||(f=p.og)!=null&&f.description)&&t.p(m,R),(j=p.og)!=null&&j.image&&r.p(m,R)},d(m){m&&(c(a),c(s)),t&&t.d(m),r&&r.d(m)}}}function tt(n){let a,s,t,r,i;return{c(){a=I("meta"),s=w(),t=I("meta"),r=w(),i=I("meta"),this.h()},l(o){a=M(o,"META",{name:!0,content:!0}),s=$(o),t=M(o,"META",{property:!0,content:!0}),r=$(o),i=M(o,"META",{name:!0,content:!0}),this.h()},h(){var o,m,R;g(a,"name","description"),g(a,"content",p.description??((o=p.og)==null?void 0:o.description)),g(t,"property","og:description"),g(t,"content",((m=p.og)==null?void 0:m.description)??p.description),g(i,"name","twitter:description"),g(i,"content",((R=p.og)==null?void 0:R.description)??p.description)},m(o,m){u(o,a,m),u(o,s,m),u(o,t,m),u(o,r,m),u(o,i,m)},p:oe,d(o){o&&(c(a),c(s),c(t),c(r),c(i))}}}function at(n){let a,s,t;return{c(){a=I("meta"),s=w(),t=I("meta"),this.h()},l(r){a=M(r,"META",{property:!0,content:!0}),s=$(r),t=M(r,"META",{name:!0,content:!0}),this.h()},h(){var r,i;g(a,"property","og:image"),g(a,"content",he((r=p.og)==null?void 0:r.image)),g(t,"name","twitter:image"),g(t,"content",he((i=p.og)==null?void 0:i.image))},m(r,i){u(r,a,i),u(r,s,i),u(r,t,i)},p:oe,d(r){r&&(c(a),c(s),c(t))}}}function we(n){let a,s;return a=new le({props:{queryID:"seasons",queryResult:n[0]}}),{c(){Z(a.$$.fragment)},l(t){W(a.$$.fragment,t)},m(t,r){K(a,t,r),s=!0},p(t,r){const i={};r[0]&1&&(i.queryResult=t[0]),a.$set(i)},i(t){s||(y(a.$$.fragment,t),s=!0)},o(t){k(a.$$.fragment,t),s=!1},d(t){z(a,t)}}}function ke(n){let a,s;return a=new le({props:{queryID:"modes",queryResult:n[1]}}),{c(){Z(a.$$.fragment)},l(t){W(a.$$.fragment,t)},m(t,r){K(a,t,r),s=!0},p(t,r){const i={};r[0]&2&&(i.queryResult=t[1]),a.$set(i)},i(t){s||(y(a.$$.fragment,t),s=!0)},o(t){k(a.$$.fragment,t),s=!1},d(t){z(a,t)}}}function Re(n){let a,s;return a=new le({props:{queryID:"pace",queryResult:n[2]}}),{c(){Z(a.$$.fragment)},l(t){W(a.$$.fragment,t)},m(t,r){K(a,t,r),s=!0},p(t,r){const i={};r[0]&4&&(i.queryResult=t[2]),a.$set(i)},i(t){s||(y(a.$$.fragment,t),s=!0)},o(t){k(a.$$.fragment,t),s=!1},d(t){z(a,t)}}}function Te(n){let a,s;return a=new le({props:{queryID:"season_avg",queryResult:n[3]}}),{c(){Z(a.$$.fragment)},l(t){W(a.$$.fragment,t)},m(t,r){K(a,t,r),s=!0},p(t,r){const i={};r[0]&8&&(i.queryResult=t[3]),a.$set(i)},i(t){s||(y(a.$$.fragment,t),s=!0)},o(t){k(a.$$.fragment,t),s=!1},d(t){z(a,t)}}}function Ee(n){let a,s;return a=new le({props:{queryID:"trend_colors",queryResult:n[4]}}),{c(){Z(a.$$.fragment)},l(t){W(a.$$.fragment,t)},m(t,r){K(a,t,r),s=!0},p(t,r){const i={};r[0]&16&&(i.queryResult=t[4]),a.$set(i)},i(t){s||(y(a.$$.fragment,t),s=!0)},o(t){k(a.$$.fragment,t),s=!1},d(t){z(a,t)}}}function st(n){let a,s,t,r,i,o,m='How far each team was from the fastest car, race by race. <strong class="markdown">Race pace</strong> compares each team&#39;s faster car on its median clean lap, fuel-corrected (laps behind the safety car, in/out laps and lap 1 are excluded). <strong class="markdown">Qualifying</strong> compares each team&#39;s single best lap.',R,f,j,S,O,E,B,P,A,te='<a href="#gap-to-the-fastest-car-">Gap to the Fastest Car (%)</a>',U,q,x,Q,ae='<a href="#season-average">Season Average</a>',J,C,F,V,L,se='<a href="#development-race">Development Race</a>',ee,D,H,X,G=typeof p<"u"&&p.title&&p.hide_title!==!0&&We();function re(e,_){return typeof p<"u"&&p.title?Je:Ze}let N=re()(n),T=typeof p=="object"&&et(),d=n[0]&&we(n),b=n[1]&&ke(n);S=new Xe({props:{name:"season",data:n[0],value:"year",title:"Season"}}),E=new Ye({props:{name:"mode",data:n[1],value:"session_name",label:"label",defaultValue:"Race"}});let v=n[2]&&Re(n);q=new Ke({props:{data:n[2],x:"short_name",xSort:"round_number",y:"team_name",ySort:"season_avg_gap_pct",value:"gap_to_fastest_pct",valueFmt:"0.00",colorScale:["#1a9850","#fee08b","#d73027"],nullsZero:"false",zeroDisplay:"0.00",xLabelRotation:"-45",subtitle:"0.00 = fastest car that weekend. Teams sorted by season average."}});let h=n[3]&&Te(n);F=new Ne({props:{data:n[3],x:"team_name",y:"avg_gap_pct",swapXY:"true",sort:"false",yFmt:"0.00",yAxisTitle:"Average gap to fastest (%)"}});let l=n[4]&&Ee(n);return H=new Oe({props:{data:n[2],tooltipSort:"asc",tooltipDecimals:"2",x:"round_number",y:"gap_to_fastest_pct",series:"team_name",seriesColors:Object.fromEntries([...n[4]].map(qe)),xAxisTitle:"Round",yAxisTitle:"Gap to fastest (%)",yFmt:"0.00",chartAreaHeight:"320",echartsOptions:{grid:{left:48},yAxis:{inverse:!0,nameLocation:"middle",nameRotate:90,nameGap:42}},subtitle:"Higher on the chart = closer to the front. Watch for teams converging as upgrades arrive."}}),{c(){G&&G.c(),a=w(),N.c(),s=I("meta"),t=I("meta"),T&&T.c(),r=ue(),i=w(),o=I("p"),o.innerHTML=m,R=w(),d&&d.c(),f=w(),b&&b.c(),j=w(),Z(S.$$.fragment),O=w(),Z(E.$$.fragment),B=w(),v&&v.c(),P=w(),A=I("h2"),A.innerHTML=te,U=w(),Z(q.$$.fragment),x=w(),Q=I("h2"),Q.innerHTML=ae,J=w(),h&&h.c(),C=w(),Z(F.$$.fragment),V=w(),L=I("h2"),L.innerHTML=se,ee=w(),l&&l.c(),D=w(),Z(H.$$.fragment),this.h()},l(e){G&&G.l(e),a=$(e);const _=He("svelte-2igo1p",document.head);N.l(_),s=M(_,"META",{name:!0,content:!0}),t=M(_,"META",{name:!0,content:!0}),T&&T.l(_),r=ue(),_.forEach(c),i=$(e),o=M(e,"P",{class:!0,"data-svelte-h":!0}),ce(o)!=="svelte-13ipyxl"&&(o.innerHTML=m),R=$(e),d&&d.l(e),f=$(e),b&&b.l(e),j=$(e),W(S.$$.fragment,e),O=$(e),W(E.$$.fragment,e),B=$(e),v&&v.l(e),P=$(e),A=M(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ce(A)!=="svelte-u9ixny"&&(A.innerHTML=te),U=$(e),W(q.$$.fragment,e),x=$(e),Q=M(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ce(Q)!=="svelte-ksx4m6"&&(Q.innerHTML=ae),J=$(e),h&&h.l(e),C=$(e),W(F.$$.fragment,e),V=$(e),L=M(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ce(L)!=="svelte-53lpae"&&(L.innerHTML=se),ee=$(e),l&&l.l(e),D=$(e),W(H.$$.fragment,e),this.h()},h(){g(s,"name","twitter:card"),g(s,"content","summary_large_image"),g(t,"name","twitter:site"),g(t,"content","@evidence_dev"),g(o,"class","markdown"),g(A,"class","markdown"),g(A,"id","gap-to-the-fastest-car-"),g(Q,"class","markdown"),g(Q,"id","season-average"),g(L,"class","markdown"),g(L,"id","development-race")},m(e,_){G&&G.m(e,_),u(e,a,_),N.m(document.head,null),fe(document.head,s),fe(document.head,t),T&&T.m(document.head,null),fe(document.head,r),u(e,i,_),u(e,o,_),u(e,R,_),d&&d.m(e,_),u(e,f,_),b&&b.m(e,_),u(e,j,_),K(S,e,_),u(e,O,_),K(E,e,_),u(e,B,_),v&&v.m(e,_),u(e,P,_),u(e,A,_),u(e,U,_),K(q,e,_),u(e,x,_),u(e,Q,_),u(e,J,_),h&&h.m(e,_),u(e,C,_),K(F,e,_),u(e,V,_),u(e,L,_),u(e,ee,_),l&&l.m(e,_),u(e,D,_),K(H,e,_),X=!0},p(e,_){typeof p<"u"&&p.title&&p.hide_title!==!0&&G.p(e,_),N.p(e,_),typeof p=="object"&&T.p(e,_),e[0]?d?(d.p(e,_),_[0]&1&&y(d,1)):(d=we(e),d.c(),y(d,1),d.m(f.parentNode,f)):d&&(_e(),k(d,1,1,()=>{d=null}),ne()),e[1]?b?(b.p(e,_),_[0]&2&&y(b,1)):(b=ke(e),b.c(),y(b,1),b.m(j.parentNode,j)):b&&(_e(),k(b,1,1,()=>{b=null}),ne());const de={};_[0]&1&&(de.data=e[0]),S.$set(de);const ge={};_[0]&2&&(ge.data=e[1]),E.$set(ge),e[2]?v?(v.p(e,_),_[0]&4&&y(v,1)):(v=Re(e),v.c(),y(v,1),v.m(P.parentNode,P)):v&&(_e(),k(v,1,1,()=>{v=null}),ne());const ye={};_[0]&4&&(ye.data=e[2]),q.$set(ye),e[3]?h?(h.p(e,_),_[0]&8&&y(h,1)):(h=Te(e),h.c(),y(h,1),h.m(C.parentNode,C)):h&&(_e(),k(h,1,1,()=>{h=null}),ne());const be={};_[0]&8&&(be.data=e[3]),F.$set(be),e[4]?l?(l.p(e,_),_[0]&16&&y(l,1)):(l=Ee(e),l.c(),y(l,1),l.m(D.parentNode,D)):l&&(_e(),k(l,1,1,()=>{l=null}),ne());const pe={};_[0]&4&&(pe.data=e[2]),_[0]&16&&(pe.seriesColors=Object.fromEntries([...e[4]].map(qe))),H.$set(pe)},i(e){X||(y(d),y(b),y(S.$$.fragment,e),y(E.$$.fragment,e),y(v),y(q.$$.fragment,e),y(h),y(F.$$.fragment,e),y(l),y(H.$$.fragment,e),X=!0)},o(e){k(d),k(b),k(S.$$.fragment,e),k(E.$$.fragment,e),k(v),k(q.$$.fragment,e),k(h),k(F.$$.fragment,e),k(l),k(H.$$.fragment,e),X=!1},d(e){e&&(c(a),c(i),c(o),c(R),c(f),c(j),c(O),c(B),c(P),c(A),c(U),c(x),c(Q),c(J),c(C),c(V),c(L),c(ee),c(D)),G&&G.d(e),N.d(e),c(s),c(t),T&&T.d(e),c(r),d&&d.d(e),b&&b.d(e),z(S,e),z(E,e),v&&v.d(e),z(q,e),h&&h.d(e),z(F,e),l&&l.d(e),z(H,e)}}}const p={title:"Car Performance"},qe=n=>[n.team_name,[n.team_colour,n.team_colour]];function ot(n,a,s){let t,r;ve(n,ze,l=>s(28,t=l)),ve(n,$e,l=>s(33,r=l));let{data:i}=a,{data:o={},customFormattingSettings:m,__db:R,inputs:f}=i;Se($e,r="b2f8910f7b1a8e4550045685222a4f53",r);let j=Ue(xe(f));Ce(j.subscribe(l=>s(7,f=l))),De(Pe,{getCustomFormats:()=>m.customFormats||[]});const S=(l,e)=>Ve(R.query,l,{query_name:e});je(S),t.params,Me(()=>!0);let O={initialData:void 0,initialError:void 0},E=Y`select distinct year from f1.team_session_pace order by year desc`,B="select distinct year from f1.team_session_pace order by year desc";o.seasons_data&&(o.seasons_data instanceof Error?O.initialError=o.seasons_data:O.initialData=o.seasons_data,o.seasons_columns&&(O.knownColumns=o.seasons_columns));let P,A=!1;const te=ie.createReactive({callback:l=>{s(0,P=l)},execFn:S},{id:"seasons",...O});te(B,{noResolve:E,...O}),globalThis[Symbol.for("seasons")]={get value(){return P}};let U={initialData:void 0,initialError:void 0},q=Y`select 'Race' as session_name, 'Race pace' as label, 1 as sort
union all
select 'Qualifying', 'Qualifying', 2
order by sort`,x=`select 'Race' as session_name, 'Race pace' as label, 1 as sort
union all
select 'Qualifying', 'Qualifying', 2
order by sort`;o.modes_data&&(o.modes_data instanceof Error?U.initialError=o.modes_data:U.initialData=o.modes_data,o.modes_columns&&(U.knownColumns=o.modes_columns));let Q,ae=!1;const J=ie.createReactive({callback:l=>{s(1,Q=l)},execFn:S},{id:"modes",...U});J(x,{noResolve:q,...U}),globalThis[Symbol.for("modes")]={get value(){return Q}};let C={initialData:void 0,initialError:void 0},F=Y`select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number`,V=`select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number`;o.pace_data&&(o.pace_data instanceof Error?C.initialError=o.pace_data:C.initialData=o.pace_data,o.pace_columns&&(C.knownColumns=o.pace_columns));let L,se=!1;const ee=ie.createReactive({callback:l=>{s(2,L=l)},execFn:S},{id:"pace",...C});ee(V,{noResolve:F,...C}),globalThis[Symbol.for("pace")]={get value(){return L}};let D={initialData:void 0,initialError:void 0},H=Y`select team_name, any_value(team_colour) as team_colour, round(avg(gap_to_fastest_pct), 3) as avg_gap_pct,
       count(*) filter (gap_to_fastest_pct = 0) as times_fastest
from (select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number)
group by team_name
order by avg_gap_pct`,X=`select team_name, any_value(team_colour) as team_colour, round(avg(gap_to_fastest_pct), 3) as avg_gap_pct,
       count(*) filter (gap_to_fastest_pct = 0) as times_fastest
from (select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number)
group by team_name
order by avg_gap_pct`;o.season_avg_data&&(o.season_avg_data instanceof Error?D.initialError=o.season_avg_data:D.initialData=o.season_avg_data,o.season_avg_columns&&(D.knownColumns=o.season_avg_columns));let G,re=!1;const me=ie.createReactive({callback:l=>{s(3,G=l)},execFn:S},{id:"season_avg",...D});me(X,{noResolve:H,...D}),globalThis[Symbol.for("season_avg")]={get value(){return G}};let N={initialData:void 0,initialError:void 0},T=Y`select team_name, any_value(team_colour) as team_colour from (select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number) group by 1`,d=`select team_name, any_value(team_colour) as team_colour from (select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number) group by 1`;o.trend_colors_data&&(o.trend_colors_data instanceof Error?N.initialError=o.trend_colors_data:N.initialData=o.trend_colors_data,o.trend_colors_columns&&(N.knownColumns=o.trend_colors_columns));let b,v=!1;const h=ie.createReactive({callback:l=>{s(4,b=l)},execFn:S},{id:"trend_colors",...N});return h(d,{noResolve:T,...N}),globalThis[Symbol.for("trend_colors")]={get value(){return b}},n.$$set=l=>{"data"in l&&s(5,i=l.data)},n.$$.update=()=>{n.$$.dirty[0]&32&&s(6,{data:o={},customFormattingSettings:m,__db:R}=i,o),n.$$.dirty[0]&64&&Be.set(Object.keys(o).length>0),n.$$.dirty[0]&268435456&&t.params,n.$$.dirty[0]&3840&&(E||!A?E||(te(B,{noResolve:E,...O}),s(11,A=!0)):te(B,{noResolve:E})),n.$$.dirty[0]&61440&&(q||!ae?q||(J(x,{noResolve:q,...U}),s(15,ae=!0)):J(x,{noResolve:q})),n.$$.dirty[0]&128&&s(17,F=Y`select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number`),n.$$.dirty[0]&128&&s(18,V=`select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number`),n.$$.dirty[0]&983040&&(F||!se?F||(ee(V,{noResolve:F,...C}),s(19,se=!0)):ee(V,{noResolve:F})),n.$$.dirty[0]&128&&s(21,H=Y`select team_name, any_value(team_colour) as team_colour, round(avg(gap_to_fastest_pct), 3) as avg_gap_pct,
       count(*) filter (gap_to_fastest_pct = 0) as times_fastest
from (select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number)
group by team_name
order by avg_gap_pct`),n.$$.dirty[0]&128&&s(22,X=`select team_name, any_value(team_colour) as team_colour, round(avg(gap_to_fastest_pct), 3) as avg_gap_pct,
       count(*) filter (gap_to_fastest_pct = 0) as times_fastest
from (select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number)
group by team_name
order by avg_gap_pct`),n.$$.dirty[0]&15728640&&(H||!re?H||(me(X,{noResolve:H,...D}),s(23,re=!0)):me(X,{noResolve:H})),n.$$.dirty[0]&128&&s(25,T=Y`select team_name, any_value(team_colour) as team_colour from (select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number) group by 1`),n.$$.dirty[0]&128&&s(26,d=`select team_name, any_value(team_colour) as team_colour from (select
    round_number,
    short_name,
    team_name,
    team_colour,
    gap_to_fastest_pct,
    gap_to_fastest_s,
    avg(gap_to_fastest_pct) over (partition by team_name) as season_avg_gap_pct
from f1.team_session_pace
where year = ${f.season.value}
  and session_name = '${f.mode}'
order by round_number) group by 1`),n.$$.dirty[0]&251658240&&(T||!v?T||(h(d,{noResolve:T,...N}),s(27,v=!0)):h(d,{noResolve:T}))},s(9,E=Y`select distinct year from f1.team_session_pace order by year desc`),s(10,B="select distinct year from f1.team_session_pace order by year desc"),s(13,q=Y`select 'Race' as session_name, 'Race pace' as label, 1 as sort
union all
select 'Qualifying', 'Qualifying', 2
order by sort`),s(14,x=`select 'Race' as session_name, 'Race pace' as label, 1 as sort
union all
select 'Qualifying', 'Qualifying', 2
order by sort`),[P,Q,L,G,b,i,o,f,O,E,B,A,U,q,x,ae,C,F,V,se,D,H,X,re,N,T,d,v,t]}class yt extends Le{constructor(a){super(),Ge(this,a,ot,st,Fe,{data:5},null,[-1,-1])}}export{yt as component};
