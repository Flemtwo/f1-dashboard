import{s as de,d as o,i as u,b as J,c as b,e as q,h as fe,f as R,g as W,x as K,k as v,l as A,m as ae,n as pe,o as ce,p as he,q as be,r as Y,j as ge,u as qe,v as ve}from"../chunks/scheduler.fW7yY31m.js";import{S as $e,i as ye,d as S,t as H,a as k,c as ie,m as x,b as D,e as I,g as se}from"../chunks/index.DLlk0QKX.js";import{G as we}from"../chunks/GradientBarChart.BPK9hydh.js";import{D as ke,a as Te,s as Ee,Q as re,p as Ce,C as B,b as ne,r as le,c as He}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YyYGKAEJ.js";import{w as Me}from"../chunks/entry.DzP7nCf5.js";import{h as z,p as Fe}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as Re}from"../chunks/Dropdown.D2st2TDs.js";import{p as Ae}from"../chunks/stores.adFM5OC5.js";import{Q as me}from"../chunks/QueryViewer.Bv4472B1.js";function Qe(d){let i,n=p.title+"",e;return{c(){i=A("h1"),e=ve(n),this.h()},l(r){i=R(r,"H1",{class:!0});var l=ge(i);e=qe(l,n),l.forEach(o),this.h()},h(){b(i,"class","title")},m(r,l){u(r,i,l),J(i,e)},p:Y,d(r){r&&o(i)}}}function Se(d){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:Y,p:Y,d:Y}}function xe(d){let i,n,e,r,l;return document.title=i=p.title,{c(){n=v(),e=A("meta"),r=v(),l=A("meta"),this.h()},l(s){n=q(s),e=R(s,"META",{property:!0,content:!0}),r=q(s),l=R(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_;b(e,"property","og:title"),b(e,"content",((s=p.og)==null?void 0:s.title)??p.title),b(l,"name","twitter:title"),b(l,"content",((_=p.og)==null?void 0:_.title)??p.title)},m(s,_){u(s,n,_),u(s,e,_),u(s,r,_),u(s,l,_)},p(s,_){_&0&&i!==(i=p.title)&&(document.title=i)},d(s){s&&(o(n),o(e),o(r),o(l))}}}function De(d){var l,s;let i,n,e=(p.description||((l=p.og)==null?void 0:l.description))&&Ie(),r=((s=p.og)==null?void 0:s.image)&&Oe();return{c(){e&&e.c(),i=v(),r&&r.c(),n=W()},l(_){e&&e.l(_),i=q(_),r&&r.l(_),n=W()},m(_,g){e&&e.m(_,g),u(_,i,g),r&&r.m(_,g),u(_,n,g)},p(_,g){var c,T;(p.description||(c=p.og)!=null&&c.description)&&e.p(_,g),(T=p.og)!=null&&T.image&&r.p(_,g)},d(_){_&&(o(i),o(n)),e&&e.d(_),r&&r.d(_)}}}function Ie(d){let i,n,e,r,l;return{c(){i=A("meta"),n=v(),e=A("meta"),r=v(),l=A("meta"),this.h()},l(s){i=R(s,"META",{name:!0,content:!0}),n=q(s),e=R(s,"META",{property:!0,content:!0}),r=q(s),l=R(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_,g;b(i,"name","description"),b(i,"content",p.description??((s=p.og)==null?void 0:s.description)),b(e,"property","og:description"),b(e,"content",((_=p.og)==null?void 0:_.description)??p.description),b(l,"name","twitter:description"),b(l,"content",((g=p.og)==null?void 0:g.description)??p.description)},m(s,_){u(s,i,_),u(s,n,_),u(s,e,_),u(s,r,_),u(s,l,_)},p:Y,d(s){s&&(o(i),o(n),o(e),o(r),o(l))}}}function Oe(d){let i,n,e;return{c(){i=A("meta"),n=v(),e=A("meta"),this.h()},l(r){i=R(r,"META",{property:!0,content:!0}),n=q(r),e=R(r,"META",{name:!0,content:!0}),this.h()},h(){var r,l;b(i,"property","og:image"),b(i,"content",ne((r=p.og)==null?void 0:r.image)),b(e,"name","twitter:image"),b(e,"content",ne((l=p.og)==null?void 0:l.image))},m(r,l){u(r,i,l),u(r,n,l),u(r,e,l)},p:Y,d(r){r&&(o(i),o(n),o(e))}}}function _e(d){let i,n;return i=new me({props:{queryID:"seasons",queryResult:d[0]}}),{c(){I(i.$$.fragment)},l(e){D(i.$$.fragment,e)},m(e,r){x(i,e,r),n=!0},p(e,r){const l={};r&1&&(l.queryResult=e[0]),i.$set(l)},i(e){n||(k(i.$$.fragment,e),n=!0)},o(e){H(i.$$.fragment,e),n=!1},d(e){S(i,e)}}}function oe(d){let i,n;return i=new me({props:{queryID:"battles",queryResult:d[1]}}),{c(){I(i.$$.fragment)},l(e){D(i.$$.fragment,e)},m(e,r){x(i,e,r),n=!0},p(e,r){const l={};r&2&&(l.queryResult=e[1]),i.$set(l)},i(e){n||(k(i.$$.fragment,e),n=!0)},o(e){H(i.$$.fragment,e),n=!1},d(e){S(i,e)}}}function Pe(d){let i,n,e,r,l,s,_,g,c,T,M,w,h,Q,F,E;return i=new B({props:{id:"team_name",title:"Team"}}),e=new B({props:{id:"faster_driver",title:"Faster Qualifier"}}),l=new B({props:{id:"slower_driver",title:"Teammate"}}),_=new B({props:{id:"quali_gap_s",title:"Median Gap (s)",fmt:"0.000"}}),c=new B({props:{id:"quali_h2h",title:"Quali H2H",align:"center"}}),M=new B({props:{id:"race_h2h",title:"Race H2H",align:"center"}}),h=new B({props:{id:"points_split",title:"Points",align:"center"}}),F=new B({props:{id:"qualifying_sessions",title:"Sessions"}}),{c(){I(i.$$.fragment),n=v(),I(e.$$.fragment),r=v(),I(l.$$.fragment),s=v(),I(_.$$.fragment),g=v(),I(c.$$.fragment),T=v(),I(M.$$.fragment),w=v(),I(h.$$.fragment),Q=v(),I(F.$$.fragment)},l(a){D(i.$$.fragment,a),n=q(a),D(e.$$.fragment,a),r=q(a),D(l.$$.fragment,a),s=q(a),D(_.$$.fragment,a),g=q(a),D(c.$$.fragment,a),T=q(a),D(M.$$.fragment,a),w=q(a),D(h.$$.fragment,a),Q=q(a),D(F.$$.fragment,a)},m(a,f){x(i,a,f),u(a,n,f),x(e,a,f),u(a,r,f),x(l,a,f),u(a,s,f),x(_,a,f),u(a,g,f),x(c,a,f),u(a,T,f),x(M,a,f),u(a,w,f),x(h,a,f),u(a,Q,f),x(F,a,f),E=!0},p:Y,i(a){E||(k(i.$$.fragment,a),k(e.$$.fragment,a),k(l.$$.fragment,a),k(_.$$.fragment,a),k(c.$$.fragment,a),k(M.$$.fragment,a),k(h.$$.fragment,a),k(F.$$.fragment,a),E=!0)},o(a){H(i.$$.fragment,a),H(e.$$.fragment,a),H(l.$$.fragment,a),H(_.$$.fragment,a),H(c.$$.fragment,a),H(M.$$.fragment,a),H(h.$$.fragment,a),H(F.$$.fragment,a),E=!1},d(a){a&&(o(n),o(r),o(s),o(g),o(T),o(w),o(Q)),S(i,a),S(e,a),S(l,a),S(_,a),S(c,a),S(M,a),S(h,a),S(F,a)}}}function je(d){let i,n,e,r,l,s,_="Your teammate is the only driver in identical machinery, so beating them is the purest measure of a driver. The qualifying gap compares the deepest session both drivers reached (Q3 if both made it, otherwise Q2, then Q1), with crash-affected laps (over 2 s) ignored.",g,c,T,M,w,h,Q='<a href="#qualifying-margin">Qualifying Margin</a>',F,E,a,f,j='<a href="#head-to-head">Head to Head</a>',G,O,U,P,C="Points count only races and sprints where both drivers drove for the team.",V,N=typeof p<"u"&&p.title&&p.hide_title!==!0&&Qe();function ue(t,m){return typeof p<"u"&&p.title?xe:Se}let X=ue()(d),L=typeof p=="object"&&De(),$=d[0]&&_e(d);T=new Re({props:{name:"season",data:d[0],value:"year",title:"Season"}});let y=d[1]&&oe(d);return E=new we({props:{data:d[1],x:"pairing",y:"quali_gap_s",swapXY:"true",sort:"false",yFmt:"0.000",yAxisTitle:"Median qualifying gap (s), faster driver listed first",chartAreaHeight:"380"}}),O=new ke({props:{data:d[1],rows:"all",$$slots:{default:[Pe]},$$scope:{ctx:d}}}),{c(){N&&N.c(),i=v(),X.c(),n=A("meta"),e=A("meta"),L&&L.c(),r=W(),l=v(),s=A("p"),s.textContent=_,g=v(),$&&$.c(),c=v(),I(T.$$.fragment),M=v(),y&&y.c(),w=v(),h=A("h2"),h.innerHTML=Q,F=v(),I(E.$$.fragment),a=v(),f=A("h2"),f.innerHTML=j,G=v(),I(O.$$.fragment),U=v(),P=A("p"),P.textContent=C,this.h()},l(t){N&&N.l(t),i=q(t);const m=fe("svelte-2igo1p",document.head);X.l(m),n=R(m,"META",{name:!0,content:!0}),e=R(m,"META",{name:!0,content:!0}),L&&L.l(m),r=W(),m.forEach(o),l=q(t),s=R(t,"P",{class:!0,"data-svelte-h":!0}),K(s)!=="svelte-1u8us2w"&&(s.textContent=_),g=q(t),$&&$.l(t),c=q(t),D(T.$$.fragment,t),M=q(t),y&&y.l(t),w=q(t),h=R(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),K(h)!=="svelte-1b3pee5"&&(h.innerHTML=Q),F=q(t),D(E.$$.fragment,t),a=q(t),f=R(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),K(f)!=="svelte-ge9jyx"&&(f.innerHTML=j),G=q(t),D(O.$$.fragment,t),U=q(t),P=R(t,"P",{class:!0,"data-svelte-h":!0}),K(P)!=="svelte-1kipaa"&&(P.textContent=C),this.h()},h(){b(n,"name","twitter:card"),b(n,"content","summary_large_image"),b(e,"name","twitter:site"),b(e,"content","@evidence_dev"),b(s,"class","markdown"),b(h,"class","markdown"),b(h,"id","qualifying-margin"),b(f,"class","markdown"),b(f,"id","head-to-head"),b(P,"class","markdown")},m(t,m){N&&N.m(t,m),u(t,i,m),X.m(document.head,null),J(document.head,n),J(document.head,e),L&&L.m(document.head,null),J(document.head,r),u(t,l,m),u(t,s,m),u(t,g,m),$&&$.m(t,m),u(t,c,m),x(T,t,m),u(t,M,m),y&&y.m(t,m),u(t,w,m),u(t,h,m),u(t,F,m),x(E,t,m),u(t,a,m),u(t,f,m),u(t,G,m),x(O,t,m),u(t,U,m),u(t,P,m),V=!0},p(t,[m]){typeof p<"u"&&p.title&&p.hide_title!==!0&&N.p(t,m),X.p(t,m),typeof p=="object"&&L.p(t,m),t[0]?$?($.p(t,m),m&1&&k($,1)):($=_e(t),$.c(),k($,1),$.m(c.parentNode,c)):$&&(se(),H($,1,1,()=>{$=null}),ie());const ee={};m&1&&(ee.data=t[0]),T.$set(ee),t[1]?y?(y.p(t,m),m&2&&k(y,1)):(y=oe(t),y.c(),k(y,1),y.m(w.parentNode,w)):y&&(se(),H(y,1,1,()=>{y=null}),ie());const te={};m&2&&(te.data=t[1]),E.$set(te);const Z={};m&2&&(Z.data=t[1]),m&16777216&&(Z.$$scope={dirty:m,ctx:t}),O.$set(Z)},i(t){V||(k($),k(T.$$.fragment,t),k(y),k(E.$$.fragment,t),k(O.$$.fragment,t),V=!0)},o(t){H($),H(T.$$.fragment,t),H(y),H(E.$$.fragment,t),H(O.$$.fragment,t),V=!1},d(t){t&&(o(i),o(l),o(s),o(g),o(c),o(M),o(w),o(h),o(F),o(a),o(f),o(G),o(U),o(P)),N&&N.d(t),X.d(t),o(n),o(e),L&&L.d(t),o(r),$&&$.d(t),S(T,t),y&&y.d(t),S(E,t),S(O,t)}}}const p={title:"Teammate Battles"};function Ge(d,i,n){let e,r;ae(d,Ae,C=>n(13,e=C)),ae(d,le,C=>n(18,r=C));let{data:l}=i,{data:s={},customFormattingSettings:_,__db:g,inputs:c}=l;pe(le,r="4a27330d7a492d1f2ec04f9c56d07b64",r);let T=Te(Me(c));ce(T.subscribe(C=>n(4,c=C))),he(He,{getCustomFormats:()=>_.customFormats||[]});const M=(C,V)=>Fe(g.query,C,{query_name:V});Ee(M),e.params,be(()=>!0);let w={initialData:void 0,initialError:void 0},h=z`select distinct year from f1.teammate_battles order by year desc`,Q="select distinct year from f1.teammate_battles order by year desc";s.seasons_data&&(s.seasons_data instanceof Error?w.initialError=s.seasons_data:w.initialData=s.seasons_data,s.seasons_columns&&(w.knownColumns=s.seasons_columns));let F,E=!1;const a=re.createReactive({callback:C=>{n(0,F=C)},execFn:M},{id:"seasons",...w});a(Q,{noResolve:h,...w}),globalThis[Symbol.for("seasons")]={get value(){return F}};let f={initialData:void 0,initialError:void 0},j=z`-- Orient every pairing so the faster qualifier is listed first
select
    team_name,
    team_colour,
    case when median_quali_gap_s <= 0 then driver_a else driver_b end as faster_driver,
    case when median_quali_gap_s <= 0 then driver_b else driver_a end as slower_driver,
    abs(median_quali_gap_s)                                            as quali_gap_s,
    case when median_quali_gap_s <= 0 then quali_ahead_a || ' – ' || quali_ahead_b
         else quali_ahead_b || ' – ' || quali_ahead_a end              as quali_h2h,
    case when median_quali_gap_s <= 0 then race_ahead_a || ' – ' || race_ahead_b
         else race_ahead_b || ' – ' || race_ahead_a end                as race_h2h,
    case when median_quali_gap_s <= 0 then points_a || ' – ' || points_b
         else points_b || ' – ' || points_a end                        as points_split,
    case when median_quali_gap_s <= 0 then driver_a || ' vs ' || driver_b
         else driver_b || ' vs ' || driver_a end                       as pairing,
    qualifying_sessions
from f1.teammate_battles
where year = ${c.season.value}
  and qualifying_sessions >= 5
  and median_quali_gap_s is not null
order by quali_gap_s desc`,G=`-- Orient every pairing so the faster qualifier is listed first
select
    team_name,
    team_colour,
    case when median_quali_gap_s <= 0 then driver_a else driver_b end as faster_driver,
    case when median_quali_gap_s <= 0 then driver_b else driver_a end as slower_driver,
    abs(median_quali_gap_s)                                            as quali_gap_s,
    case when median_quali_gap_s <= 0 then quali_ahead_a || ' – ' || quali_ahead_b
         else quali_ahead_b || ' – ' || quali_ahead_a end              as quali_h2h,
    case when median_quali_gap_s <= 0 then race_ahead_a || ' – ' || race_ahead_b
         else race_ahead_b || ' – ' || race_ahead_a end                as race_h2h,
    case when median_quali_gap_s <= 0 then points_a || ' – ' || points_b
         else points_b || ' – ' || points_a end                        as points_split,
    case when median_quali_gap_s <= 0 then driver_a || ' vs ' || driver_b
         else driver_b || ' vs ' || driver_a end                       as pairing,
    qualifying_sessions
from f1.teammate_battles
where year = ${c.season.value}
  and qualifying_sessions >= 5
  and median_quali_gap_s is not null
order by quali_gap_s desc`;s.battles_data&&(s.battles_data instanceof Error?f.initialError=s.battles_data:f.initialData=s.battles_data,s.battles_columns&&(f.knownColumns=s.battles_columns));let O,U=!1;const P=re.createReactive({callback:C=>{n(1,O=C)},execFn:M},{id:"battles",...f});return P(G,{noResolve:j,...f}),globalThis[Symbol.for("battles")]={get value(){return O}},d.$$set=C=>{"data"in C&&n(2,l=C.data)},d.$$.update=()=>{d.$$.dirty&4&&n(3,{data:s={},customFormattingSettings:_,__db:g}=l,s),d.$$.dirty&8&&Ce.set(Object.keys(s).length>0),d.$$.dirty&8192&&e.params,d.$$.dirty&480&&(h||!E?h||(a(Q,{noResolve:h,...w}),n(8,E=!0)):a(Q,{noResolve:h})),d.$$.dirty&16&&n(10,j=z`-- Orient every pairing so the faster qualifier is listed first
select
    team_name,
    team_colour,
    case when median_quali_gap_s <= 0 then driver_a else driver_b end as faster_driver,
    case when median_quali_gap_s <= 0 then driver_b else driver_a end as slower_driver,
    abs(median_quali_gap_s)                                            as quali_gap_s,
    case when median_quali_gap_s <= 0 then quali_ahead_a || ' – ' || quali_ahead_b
         else quali_ahead_b || ' – ' || quali_ahead_a end              as quali_h2h,
    case when median_quali_gap_s <= 0 then race_ahead_a || ' – ' || race_ahead_b
         else race_ahead_b || ' – ' || race_ahead_a end                as race_h2h,
    case when median_quali_gap_s <= 0 then points_a || ' – ' || points_b
         else points_b || ' – ' || points_a end                        as points_split,
    case when median_quali_gap_s <= 0 then driver_a || ' vs ' || driver_b
         else driver_b || ' vs ' || driver_a end                       as pairing,
    qualifying_sessions
from f1.teammate_battles
where year = ${c.season.value}
  and qualifying_sessions >= 5
  and median_quali_gap_s is not null
order by quali_gap_s desc`),d.$$.dirty&16&&n(11,G=`-- Orient every pairing so the faster qualifier is listed first
select
    team_name,
    team_colour,
    case when median_quali_gap_s <= 0 then driver_a else driver_b end as faster_driver,
    case when median_quali_gap_s <= 0 then driver_b else driver_a end as slower_driver,
    abs(median_quali_gap_s)                                            as quali_gap_s,
    case when median_quali_gap_s <= 0 then quali_ahead_a || ' – ' || quali_ahead_b
         else quali_ahead_b || ' – ' || quali_ahead_a end              as quali_h2h,
    case when median_quali_gap_s <= 0 then race_ahead_a || ' – ' || race_ahead_b
         else race_ahead_b || ' – ' || race_ahead_a end                as race_h2h,
    case when median_quali_gap_s <= 0 then points_a || ' – ' || points_b
         else points_b || ' – ' || points_a end                        as points_split,
    case when median_quali_gap_s <= 0 then driver_a || ' vs ' || driver_b
         else driver_b || ' vs ' || driver_a end                       as pairing,
    qualifying_sessions
from f1.teammate_battles
where year = ${c.season.value}
  and qualifying_sessions >= 5
  and median_quali_gap_s is not null
order by quali_gap_s desc`),d.$$.dirty&7680&&(j||!U?j||(P(G,{noResolve:j,...f}),n(12,U=!0)):P(G,{noResolve:j}))},n(6,h=z`select distinct year from f1.teammate_battles order by year desc`),n(7,Q="select distinct year from f1.teammate_battles order by year desc"),[F,O,l,s,c,w,h,Q,E,f,j,G,U,e]}class We extends $e{constructor(i){super(),ye(this,i,Ge,je,de,{data:2})}}export{We as component};
