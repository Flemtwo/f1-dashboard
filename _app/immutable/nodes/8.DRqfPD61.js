import{s as Ie,d as c,i as m,b as me,c as M,e as y,h as He,f as N,g as pe,x as ce,k as b,l as G,m as be,n as Ue,o as Oe,p as qe,q as Ae,u as Se,v as Fe,r as ne,j as Ce}from"../chunks/scheduler.fW7yY31m.js";import{S as Le,i as Ne,d as S,t as h,a as f,c as le,m as F,b as k,e as I,g as _e}from"../chunks/index.DLlk0QKX.js";import{G as Ge}from"../chunks/GradientBarChart.BPK9hydh.js";import{D as ke,a as Qe,s as je,Q as ie,p as Be,C as W,b as we,r as ve,c as Pe}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YyYGKAEJ.js";import{w as Ve}from"../chunks/entry.DzP7nCf5.js";import{A as Ke}from"../chunks/Alert.TigfWg22.js";import{h as J,p as Xe}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as Ye}from"../chunks/Dropdown.D2st2TDs.js";import{p as Ze}from"../chunks/stores.adFM5OC5.js";import{G as ze}from"../chunks/Grid.CtPFXHqb.js";import{Q as de}from"../chunks/QueryViewer.Bv4472B1.js";import{H as Je}from"../chunks/Heatmap.CdKuGrf2.js";function We(_){let t,r=$.title+"",e;return{c(){t=G("h1"),e=Fe(r),this.h()},l(a){t=N(a,"H1",{class:!0});var s=Ce(t);e=Se(s,r),s.forEach(c),this.h()},h(){M(t,"class","title")},m(a,s){m(a,t,s),me(t,e)},p:ne,d(a){a&&c(t)}}}function xe(_){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:ne,p:ne,d:ne}}function et(_){let t,r,e,a,s;return document.title=t=$.title,{c(){r=b(),e=G("meta"),a=b(),s=G("meta"),this.h()},l(o){r=y(o),e=N(o,"META",{property:!0,content:!0}),a=y(o),s=N(o,"META",{name:!0,content:!0}),this.h()},h(){var o,d;M(e,"property","og:title"),M(e,"content",((o=$.og)==null?void 0:o.title)??$.title),M(s,"name","twitter:title"),M(s,"content",((d=$.og)==null?void 0:d.title)??$.title)},m(o,d){m(o,r,d),m(o,e,d),m(o,a,d),m(o,s,d)},p(o,d){d&0&&t!==(t=$.title)&&(document.title=t)},d(o){o&&(c(r),c(e),c(a),c(s))}}}function tt(_){var s,o;let t,r,e=($.description||((s=$.og)==null?void 0:s.description))&&nt(),a=((o=$.og)==null?void 0:o.image)&&rt();return{c(){e&&e.c(),t=b(),a&&a.c(),r=pe()},l(d){e&&e.l(d),t=y(d),a&&a.l(d),r=pe()},m(d,g){e&&e.m(d,g),m(d,t,g),a&&a.m(d,g),m(d,r,g)},p(d,g){var l,E;($.description||(l=$.og)!=null&&l.description)&&e.p(d,g),(E=$.og)!=null&&E.image&&a.p(d,g)},d(d){d&&(c(t),c(r)),e&&e.d(d),a&&a.d(d)}}}function nt(_){let t,r,e,a,s;return{c(){t=G("meta"),r=b(),e=G("meta"),a=b(),s=G("meta"),this.h()},l(o){t=N(o,"META",{name:!0,content:!0}),r=y(o),e=N(o,"META",{property:!0,content:!0}),a=y(o),s=N(o,"META",{name:!0,content:!0}),this.h()},h(){var o,d,g;M(t,"name","description"),M(t,"content",$.description??((o=$.og)==null?void 0:o.description)),M(e,"property","og:description"),M(e,"content",((d=$.og)==null?void 0:d.description)??$.description),M(s,"name","twitter:description"),M(s,"content",((g=$.og)==null?void 0:g.description)??$.description)},m(o,d){m(o,t,d),m(o,r,d),m(o,e,d),m(o,a,d),m(o,s,d)},p:ne,d(o){o&&(c(t),c(r),c(e),c(a),c(s))}}}function rt(_){let t,r,e;return{c(){t=G("meta"),r=b(),e=G("meta"),this.h()},l(a){t=N(a,"META",{property:!0,content:!0}),r=y(a),e=N(a,"META",{name:!0,content:!0}),this.h()},h(){var a,s;M(t,"property","og:image"),M(t,"content",we((a=$.og)==null?void 0:a.image)),M(e,"name","twitter:image"),M(e,"content",we((s=$.og)==null?void 0:s.image))},m(a,s){m(a,t,s),m(a,r,s),m(a,e,s)},p:ne,d(a){a&&(c(t),c(r),c(e))}}}function ot(_){let t;return{c(){t=Fe("Tyre degradation is the noisiest metric on this site. Track evolution, traffic and driver management all move lap times too. The season summary also mixes circuits: each compound gets used at different tracks and stint phases, so compare compounds within a circuit (the heatmap) rather than across the season.")},l(r){t=Se(r,"Tyre degradation is the noisiest metric on this site. Track evolution, traffic and driver management all move lap times too. The season summary also mixes circuits: each compound gets used at different tracks and stint phases, so compare compounds within a circuit (the heatmap) rather than across the season.")},m(r,e){m(r,t,e)},d(r){r&&c(t)}}}function Me(_){let t,r;return t=new de({props:{queryID:"seasons",queryResult:_[0]}}),{c(){I(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){F(t,e,a),r=!0},p(e,a){const s={};a[0]&1&&(s.queryResult=e[0]),t.$set(s)},i(e){r||(f(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function Te(_){let t,r;return t=new de({props:{queryID:"deg",queryResult:_[1]}}),{c(){I(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){F(t,e,a),r=!0},p(e,a){const s={};a[0]&2&&(s.queryResult=e[1]),t.$set(s)},i(e){r||(f(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function De(_){let t,r;return t=new de({props:{queryID:"by_compound",queryResult:_[2]}}),{c(){I(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){F(t,e,a),r=!0},p(e,a){const s={};a[0]&4&&(s.queryResult=e[2]),t.$set(s)},i(e){r||(f(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function st(_){let t,r,e,a,s,o,d,g;return t=new W({props:{id:"compound",title:"Compound"}}),e=new W({props:{id:"median_deg_s_per_lap",title:"Deg (s/lap)",fmt:"0.000"}}),s=new W({props:{id:"median_stint_laps",title:"Typical Stint (laps)"}}),d=new W({props:{id:"stints",title:"Stints"}}),{c(){I(t.$$.fragment),r=b(),I(e.$$.fragment),a=b(),I(s.$$.fragment),o=b(),I(d.$$.fragment)},l(l){k(t.$$.fragment,l),r=y(l),k(e.$$.fragment,l),a=y(l),k(s.$$.fragment,l),o=y(l),k(d.$$.fragment,l)},m(l,E){F(t,l,E),m(l,r,E),F(e,l,E),m(l,a,E),F(s,l,E),m(l,o,E),F(d,l,E),g=!0},p:ne,i(l){g||(f(t.$$.fragment,l),f(e.$$.fragment,l),f(s.$$.fragment,l),f(d.$$.fragment,l),g=!0)},o(l){h(t.$$.fragment,l),h(e.$$.fragment,l),h(s.$$.fragment,l),h(d.$$.fragment,l),g=!1},d(l){l&&(c(r),c(a),c(o)),S(t,l),S(e,l),S(s,l),S(d,l)}}}function at(_){let t,r,e,a;return t=new Ge({props:{data:_[2],x:"compound",y:"median_deg_s_per_lap",sort:"false",yFmt:"0.000",yAxisTitle:"Seconds lost per lap of tyre age"}}),e=new ke({props:{data:_[2],$$slots:{default:[st]},$$scope:{ctx:_}}}),{c(){I(t.$$.fragment),r=b(),I(e.$$.fragment)},l(s){k(t.$$.fragment,s),r=y(s),k(e.$$.fragment,s)},m(s,o){F(t,s,o),m(s,r,o),F(e,s,o),a=!0},p(s,o){const d={};o[0]&4&&(d.data=s[2]),t.$set(d);const g={};o[0]&4&&(g.data=s[2]),o[1]&2048&&(g.$$scope={dirty:o,ctx:s}),e.$set(g)},i(s){a||(f(t.$$.fragment,s),f(e.$$.fragment,s),a=!0)},o(s){h(t.$$.fragment,s),h(e.$$.fragment,s),a=!1},d(s){s&&c(r),S(t,s),S(e,s)}}}function Re(_){let t,r;return t=new de({props:{queryID:"by_circuit",queryResult:_[3]}}),{c(){I(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){F(t,e,a),r=!0},p(e,a){const s={};a[0]&8&&(s.queryResult=e[3]),t.$set(s)},i(e){r||(f(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function Ee(_){let t,r;return t=new de({props:{queryID:"longest",queryResult:_[4]}}),{c(){I(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){F(t,e,a),r=!0},p(e,a){const s={};a[0]&16&&(s.queryResult=e[4]),t.$set(s)},i(e){r||(f(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function lt(_){let t,r,e,a,s,o,d,g,l,E;return t=new W({props:{id:"stint_length_laps",title:"Laps"}}),e=new W({props:{id:"driver_code",title:"Driver"}}),s=new W({props:{id:"compound",title:"Compound"}}),d=new W({props:{id:"short_name",title:"Race"}}),l=new W({props:{id:"deg",title:"Deg (s/lap)",fmt:"0.000"}}),{c(){I(t.$$.fragment),r=b(),I(e.$$.fragment),a=b(),I(s.$$.fragment),o=b(),I(d.$$.fragment),g=b(),I(l.$$.fragment)},l(u){k(t.$$.fragment,u),r=y(u),k(e.$$.fragment,u),a=y(u),k(s.$$.fragment,u),o=y(u),k(d.$$.fragment,u),g=y(u),k(l.$$.fragment,u)},m(u,w){F(t,u,w),m(u,r,w),F(e,u,w),m(u,a,w),F(s,u,w),m(u,o,w),F(d,u,w),m(u,g,w),F(l,u,w),E=!0},p:ne,i(u){E||(f(t.$$.fragment,u),f(e.$$.fragment,u),f(s.$$.fragment,u),f(d.$$.fragment,u),f(l.$$.fragment,u),E=!0)},o(u){h(t.$$.fragment,u),h(e.$$.fragment,u),h(s.$$.fragment,u),h(d.$$.fragment,u),h(l.$$.fragment,u),E=!1},d(u){u&&(c(r),c(a),c(o),c(g)),S(t,u),S(e,u),S(s,u),S(d,u),S(l,u)}}}function _t(_){let t,r,e,a,s,o,d='How many seconds per lap each compound lost as it aged, per circuit. Raw lap times hide tyre wear, because the car burns about 1.5 kg of fuel per lap and gets faster. Laps are therefore <strong class="markdown">fuel-corrected</strong> (+0.03 s for each lap of fuel still on board) before measuring the slope of lap time against tyre age. Only clean laps count, from race stints with at least 8 of them.',g,l,E,u,w,K,X,Q,re='<a href="#degradation-by-compound">Degradation by Compound</a>',x,A,U,Y,j,oe='<a href="#degradation-by-circuit">Degradation by Circuit</a>',ee,C,O,Z,B,se='<a href="#longest-stints">Longest Stints</a>',te,L,q,z,P=typeof $<"u"&&$.title&&$.hide_title!==!0&&We();function ae(n,i){return typeof $<"u"&&$.title?et:xe}let V=ae()(_),H=typeof $=="object"&&tt();l=new Ke({props:{status:"info",$$slots:{default:[ot]},$$scope:{ctx:_}}});let v=_[0]&&Me(_);w=new Ye({props:{name:"season",data:_[0],value:"year",title:"Season"}});let T=_[1]&&Te(_),D=_[2]&&De(_);U=new ze({props:{cols:"2",$$slots:{default:[at]},$$scope:{ctx:_}}});let R=_[3]&&Re(_);O=new Je({props:{data:_[3],x:"compound",xSort:"compound_order",y:"short_name",ySort:"round_number",value:"median_deg_s_per_lap",valueFmt:"0.000",colorScale:["#1a9850","#fee08b","#d73027"],nullsZero:"false",subtitle:"Median seconds lost per lap of tyre age. Blank means fewer than 3 qualifying stints on that compound. Negative values usually mean the track was rubbering in faster than the tyres wore."}});let p=_[4]&&Ee(_);return q=new ke({props:{data:_[4],$$slots:{default:[lt]},$$scope:{ctx:_}}}),{c(){P&&P.c(),t=b(),V.c(),r=G("meta"),e=G("meta"),H&&H.c(),a=pe(),s=b(),o=G("p"),o.innerHTML=d,g=b(),I(l.$$.fragment),E=b(),v&&v.c(),u=b(),I(w.$$.fragment),K=b(),T&&T.c(),X=b(),Q=G("h2"),Q.innerHTML=re,x=b(),D&&D.c(),A=b(),I(U.$$.fragment),Y=b(),j=G("h2"),j.innerHTML=oe,ee=b(),R&&R.c(),C=b(),I(O.$$.fragment),Z=b(),B=G("h2"),B.innerHTML=se,te=b(),p&&p.c(),L=b(),I(q.$$.fragment),this.h()},l(n){P&&P.l(n),t=y(n);const i=He("svelte-2igo1p",document.head);V.l(i),r=N(i,"META",{name:!0,content:!0}),e=N(i,"META",{name:!0,content:!0}),H&&H.l(i),a=pe(),i.forEach(c),s=y(n),o=N(n,"P",{class:!0,"data-svelte-h":!0}),ce(o)!=="svelte-1ryjvuu"&&(o.innerHTML=d),g=y(n),k(l.$$.fragment,n),E=y(n),v&&v.l(n),u=y(n),k(w.$$.fragment,n),K=y(n),T&&T.l(n),X=y(n),Q=N(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ce(Q)!=="svelte-oeupma"&&(Q.innerHTML=re),x=y(n),D&&D.l(n),A=y(n),k(U.$$.fragment,n),Y=y(n),j=N(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ce(j)!=="svelte-1twds5q"&&(j.innerHTML=oe),ee=y(n),R&&R.l(n),C=y(n),k(O.$$.fragment,n),Z=y(n),B=N(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ce(B)!=="svelte-1dllt69"&&(B.innerHTML=se),te=y(n),p&&p.l(n),L=y(n),k(q.$$.fragment,n),this.h()},h(){M(r,"name","twitter:card"),M(r,"content","summary_large_image"),M(e,"name","twitter:site"),M(e,"content","@evidence_dev"),M(o,"class","markdown"),M(Q,"class","markdown"),M(Q,"id","degradation-by-compound"),M(j,"class","markdown"),M(j,"id","degradation-by-circuit"),M(B,"class","markdown"),M(B,"id","longest-stints")},m(n,i){P&&P.m(n,i),m(n,t,i),V.m(document.head,null),me(document.head,r),me(document.head,e),H&&H.m(document.head,null),me(document.head,a),m(n,s,i),m(n,o,i),m(n,g,i),F(l,n,i),m(n,E,i),v&&v.m(n,i),m(n,u,i),F(w,n,i),m(n,K,i),T&&T.m(n,i),m(n,X,i),m(n,Q,i),m(n,x,i),D&&D.m(n,i),m(n,A,i),F(U,n,i),m(n,Y,i),m(n,j,i),m(n,ee,i),R&&R.m(n,i),m(n,C,i),F(O,n,i),m(n,Z,i),m(n,B,i),m(n,te,i),p&&p.m(n,i),m(n,L,i),F(q,n,i),z=!0},p(n,i){typeof $<"u"&&$.title&&$.hide_title!==!0&&P.p(n,i),V.p(n,i),typeof $=="object"&&H.p(n,i);const ge={};i[1]&2048&&(ge.$$scope={dirty:i,ctx:n}),l.$set(ge),n[0]?v?(v.p(n,i),i[0]&1&&f(v,1)):(v=Me(n),v.c(),f(v,1),v.m(u.parentNode,u)):v&&(_e(),h(v,1,1,()=>{v=null}),le());const he={};i[0]&1&&(he.data=n[0]),w.$set(he),n[1]?T?(T.p(n,i),i[0]&2&&f(T,1)):(T=Te(n),T.c(),f(T,1),T.m(X.parentNode,X)):T&&(_e(),h(T,1,1,()=>{T=null}),le()),n[2]?D?(D.p(n,i),i[0]&4&&f(D,1)):(D=De(n),D.c(),f(D,1),D.m(A.parentNode,A)):D&&(_e(),h(D,1,1,()=>{D=null}),le());const $e={};i[0]&4|i[1]&2048&&($e.$$scope={dirty:i,ctx:n}),U.$set($e),n[3]?R?(R.p(n,i),i[0]&8&&f(R,1)):(R=Re(n),R.c(),f(R,1),R.m(C.parentNode,C)):R&&(_e(),h(R,1,1,()=>{R=null}),le());const ye={};i[0]&8&&(ye.data=n[3]),O.$set(ye),n[4]?p?(p.p(n,i),i[0]&16&&f(p,1)):(p=Ee(n),p.c(),f(p,1),p.m(L.parentNode,L)):p&&(_e(),h(p,1,1,()=>{p=null}),le());const fe={};i[0]&16&&(fe.data=n[4]),i[1]&2048&&(fe.$$scope={dirty:i,ctx:n}),q.$set(fe)},i(n){z||(f(l.$$.fragment,n),f(v),f(w.$$.fragment,n),f(T),f(D),f(U.$$.fragment,n),f(R),f(O.$$.fragment,n),f(p),f(q.$$.fragment,n),z=!0)},o(n){h(l.$$.fragment,n),h(v),h(w.$$.fragment,n),h(T),h(D),h(U.$$.fragment,n),h(R),h(O.$$.fragment,n),h(p),h(q.$$.fragment,n),z=!1},d(n){n&&(c(t),c(s),c(o),c(g),c(E),c(u),c(K),c(X),c(Q),c(x),c(A),c(Y),c(j),c(ee),c(C),c(Z),c(B),c(te),c(L)),P&&P.d(n),V.d(n),c(r),c(e),H&&H.d(n),c(a),S(l,n),v&&v.d(n),S(w,n),T&&T.d(n),D&&D.d(n),S(U,n),R&&R.d(n),S(O,n),p&&p.d(n),S(q,n)}}}const $={title:"Tyre Degradation"};function it(_,t,r){let e,a;be(_,Ze,p=>r(28,e=p)),be(_,ve,p=>r(33,a=p));let{data:s}=t,{data:o={},customFormattingSettings:d,__db:g,inputs:l}=s;Ue(ve,a="4e7f7a64e2ff27ca225f33972f501bfe",a);let E=Qe(Ve(l));Oe(E.subscribe(p=>r(7,l=p))),qe(Pe,{getCustomFormats:()=>d.customFormats||[]});const u=(p,n)=>Xe(g.query,p,{query_name:n});je(u),e.params,Ae(()=>!0);let w={initialData:void 0,initialError:void 0},K=J`select distinct year from f1.stints order by year desc`,X="select distinct year from f1.stints order by year desc";o.seasons_data&&(o.seasons_data instanceof Error?w.initialError=o.seasons_data:w.initialData=o.seasons_data,o.seasons_columns&&(w.knownColumns=o.seasons_columns));let Q,re=!1;const x=ie.createReactive({callback:p=>{r(0,Q=p)},execFn:u},{id:"seasons",...w});x(X,{noResolve:K,...w}),globalThis[Symbol.for("seasons")]={get value(){return Q}};let A={initialData:void 0,initialError:void 0},U=J`select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null`,Y=`select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null`;o.deg_data&&(o.deg_data instanceof Error?A.initialError=o.deg_data:A.initialData=o.deg_data,o.deg_columns&&(A.knownColumns=o.deg_columns));let j,oe=!1;const ee=ie.createReactive({callback:p=>{r(1,j=p)},execFn:u},{id:"deg",...A});ee(Y,{noResolve:U,...A}),globalThis[Symbol.for("deg")]={get value(){return j}};let C={initialData:void 0,initialError:void 0},O=J`select
    compound,
    compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as median_deg_s_per_lap,
    round(median(stint_length_laps), 0)            as median_stint_laps,
    count(*)                                       as stints
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
group by all
order by compound_order`,Z=`select
    compound,
    compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as median_deg_s_per_lap,
    round(median(stint_length_laps), 0)            as median_stint_laps,
    count(*)                                       as stints
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
group by all
order by compound_order`;o.by_compound_data&&(o.by_compound_data instanceof Error?C.initialError=o.by_compound_data:C.initialData=o.by_compound_data,o.by_compound_columns&&(C.knownColumns=o.by_compound_columns));let B,se=!1;const te=ie.createReactive({callback:p=>{r(2,B=p)},execFn:u},{id:"by_compound",...C});te(Z,{noResolve:O,...C}),globalThis[Symbol.for("by_compound")]={get value(){return B}};let L={initialData:void 0,initialError:void 0},q=J`select
    round_number,
    short_name,
    compound,
    compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as median_deg_s_per_lap
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
group by all
having count(*) >= 3`,z=`select
    round_number,
    short_name,
    compound,
    compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as median_deg_s_per_lap
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
group by all
having count(*) >= 3`;o.by_circuit_data&&(o.by_circuit_data instanceof Error?L.initialError=o.by_circuit_data:L.initialData=o.by_circuit_data,o.by_circuit_columns&&(L.knownColumns=o.by_circuit_columns));let P,ae=!1;const ue=ie.createReactive({callback:p=>{r(3,P=p)},execFn:u},{id:"by_circuit",...L});ue(z,{noResolve:q,...L}),globalThis[Symbol.for("by_circuit")]={get value(){return P}};let V={initialData:void 0,initialError:void 0},H=J`select stint_length_laps, driver_code, compound, short_name, round(deg_fuel_corrected_s_per_lap, 3) as deg
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
order by stint_length_laps desc
limit 10`,v=`select stint_length_laps, driver_code, compound, short_name, round(deg_fuel_corrected_s_per_lap, 3) as deg
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
order by stint_length_laps desc
limit 10`;o.longest_data&&(o.longest_data instanceof Error?V.initialError=o.longest_data:V.initialData=o.longest_data,o.longest_columns&&(V.knownColumns=o.longest_columns));let T,D=!1;const R=ie.createReactive({callback:p=>{r(4,T=p)},execFn:u},{id:"longest",...V});return R(v,{noResolve:H,...V}),globalThis[Symbol.for("longest")]={get value(){return T}},_.$$set=p=>{"data"in p&&r(5,s=p.data)},_.$$.update=()=>{_.$$.dirty[0]&32&&r(6,{data:o={},customFormattingSettings:d,__db:g}=s,o),_.$$.dirty[0]&64&&Be.set(Object.keys(o).length>0),_.$$.dirty[0]&268435456&&e.params,_.$$.dirty[0]&3840&&(K||!re?K||(x(X,{noResolve:K,...w}),r(11,re=!0)):x(X,{noResolve:K})),_.$$.dirty[0]&128&&r(13,U=J`select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null`),_.$$.dirty[0]&128&&r(14,Y=`select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null`),_.$$.dirty[0]&61440&&(U||!oe?U||(ee(Y,{noResolve:U,...A}),r(15,oe=!0)):ee(Y,{noResolve:U})),_.$$.dirty[0]&128&&r(17,O=J`select
    compound,
    compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as median_deg_s_per_lap,
    round(median(stint_length_laps), 0)            as median_stint_laps,
    count(*)                                       as stints
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
group by all
order by compound_order`),_.$$.dirty[0]&128&&r(18,Z=`select
    compound,
    compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as median_deg_s_per_lap,
    round(median(stint_length_laps), 0)            as median_stint_laps,
    count(*)                                       as stints
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
group by all
order by compound_order`),_.$$.dirty[0]&983040&&(O||!se?O||(te(Z,{noResolve:O,...C}),r(19,se=!0)):te(Z,{noResolve:O})),_.$$.dirty[0]&128&&r(21,q=J`select
    round_number,
    short_name,
    compound,
    compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as median_deg_s_per_lap
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
group by all
having count(*) >= 3`),_.$$.dirty[0]&128&&r(22,z=`select
    round_number,
    short_name,
    compound,
    compound_order,
    round(median(deg_fuel_corrected_s_per_lap), 3) as median_deg_s_per_lap
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
group by all
having count(*) >= 3`),_.$$.dirty[0]&15728640&&(q||!ae?q||(ue(z,{noResolve:q,...L}),r(23,ae=!0)):ue(z,{noResolve:q})),_.$$.dirty[0]&128&&r(25,H=J`select stint_length_laps, driver_code, compound, short_name, round(deg_fuel_corrected_s_per_lap, 3) as deg
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
order by stint_length_laps desc
limit 10`),_.$$.dirty[0]&128&&r(26,v=`select stint_length_laps, driver_code, compound, short_name, round(deg_fuel_corrected_s_per_lap, 3) as deg
from (select
    round_number,
    short_name,
    compound,
    case compound when 'SOFT' then 1 when 'MEDIUM' then 2 else 3 end as compound_order,
    deg_fuel_corrected_s_per_lap,
    stint_length_laps,
    driver_code
from f1.stints
where year = ${l.season.value}
  and session_name = 'Race'
  and compound in ('SOFT', 'MEDIUM', 'HARD')
  and clean_laps >= 8
  and deg_fuel_corrected_s_per_lap is not null)
order by stint_length_laps desc
limit 10`),_.$$.dirty[0]&251658240&&(H||!D?H||(R(v,{noResolve:H,...V}),r(27,D=!0)):R(v,{noResolve:H}))},r(9,K=J`select distinct year from f1.stints order by year desc`),r(10,X="select distinct year from f1.stints order by year desc"),[Q,j,B,P,T,s,o,l,w,K,X,re,A,U,Y,oe,C,O,Z,se,L,q,z,ae,V,H,v,D,e]}class vt extends Le{constructor(t){super(),Ne(this,t,it,_t,Ie,{data:5},null,[-1,-1])}}export{vt as component};
