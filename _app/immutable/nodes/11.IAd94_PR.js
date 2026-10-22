import{s as je,d as _,w as Se,c as P,t as we,i as $,b as te,e as v,h as Pe,f as ee,g as Ee,j as ke,u as de,x as Te,k as g,l as se,v as pe,m as Fe,n as Le,o as Ge,p as Ue,q as Oe,r as ve}from"../chunks/scheduler.fW7yY31m.js";import{S as Be,i as Ve,d as w,t as c,a as p,c as ge,m as k,b as q,e as R,g as he}from"../chunks/index.DLlk0QKX.js";import{S as We}from"../chunks/SortedLineChart.hDHjt0DN.js";import{D as Qe,a as ze,s as Ke,Q as be,p as Xe,C as U,r as Ce,c as Ye}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YyYGKAEJ.js";import{w as Je}from"../chunks/entry.DzP7nCf5.js";import{h as le,p as Ze}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as xe}from"../chunks/stores.adFM5OC5.js";import{G as es}from"../chunks/Grid.CtPFXHqb.js";import{Q as qe}from"../chunks/QueryViewer.Bv4472B1.js";import{B as ye}from"../chunks/BigValue.Bavyh20w.js";function ss(n){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:ve,p:ve,d:ve}}function De(n){let r,i;return r=new qe({props:{queryID:"seasons",queryResult:n[0]}}),{c(){R(r.$$.fragment)},l(s){q(r.$$.fragment,s)},m(s,d){k(r,s,d),i=!0},p(s,d){const f={};d[0]&1&&(f.queryResult=s[0]),r.$set(f)},i(s){i||(p(r.$$.fragment,s),i=!0)},o(s){c(r.$$.fragment,s),i=!1},d(s){w(r,s)}}}function He(n){let r,i;return r=new qe({props:{queryID:"career",queryResult:n[1]}}),{c(){R(r.$$.fragment)},l(s){q(r.$$.fragment,s)},m(s,d){k(r,s,d),i=!0},p(s,d){const f={};d[0]&2&&(f.queryResult=s[1]),r.$set(f)},i(s){i||(p(r.$$.fragment,s),i=!0)},o(s){c(r.$$.fragment,s),i=!1},d(s){w(r,s)}}}function Ie(n){let r,i,s=n[0][0].country_code+"",d;return{c(){r=se("span"),i=pe(" · "),d=pe(s)},l(f){r=ee(f,"SPAN",{});var m=ke(r);i=de(m," · "),d=de(m,s),m.forEach(_)},m(f,m){$(f,r,m),te(r,i),te(r,d)},p(f,m){m[0]&1&&s!==(s=f[0][0].country_code+"")&&we(d,s)},d(f){f&&_(r)}}}function ts(n){let r,i,s,d,f,m,y,h,l,T;return r=new ye({props:{data:n[1],value:"starts",title:"Starts (since 2023)"}}),s=new ye({props:{data:n[1],value:"wins",title:"Wins"}}),f=new ye({props:{data:n[1],value:"podiums",title:"Podiums"}}),y=new ye({props:{data:n[1],value:"poles",title:"Poles"}}),l=new ye({props:{data:n[1],value:"points",title:"Points"}}),{c(){R(r.$$.fragment),i=g(),R(s.$$.fragment),d=g(),R(f.$$.fragment),m=g(),R(y.$$.fragment),h=g(),R(l.$$.fragment)},l(a){q(r.$$.fragment,a),i=v(a),q(s.$$.fragment,a),d=v(a),q(f.$$.fragment,a),m=v(a),q(y.$$.fragment,a),h=v(a),q(l.$$.fragment,a)},m(a,u){k(r,a,u),$(a,i,u),k(s,a,u),$(a,d,u),k(f,a,u),$(a,m,u),k(y,a,u),$(a,h,u),k(l,a,u),T=!0},p(a,u){const S={};u[0]&2&&(S.data=a[1]),r.$set(S);const C={};u[0]&2&&(C.data=a[1]),s.$set(C);const F={};u[0]&2&&(F.data=a[1]),f.$set(F);const E={};u[0]&2&&(E.data=a[1]),y.$set(E);const D={};u[0]&2&&(D.data=a[1]),l.$set(D)},i(a){T||(p(r.$$.fragment,a),p(s.$$.fragment,a),p(f.$$.fragment,a),p(y.$$.fragment,a),p(l.$$.fragment,a),T=!0)},o(a){c(r.$$.fragment,a),c(s.$$.fragment,a),c(f.$$.fragment,a),c(y.$$.fragment,a),c(l.$$.fragment,a),T=!1},d(a){a&&(_(i),_(d),_(m),_(h)),w(r,a),w(s,a),w(f,a),w(y,a),w(l,a)}}}function rs(n){let r,i,s,d,f,m,y,h,l,T,a,u,S,C,F,E,D,O,N,j;return r=new U({props:{id:"year",title:"Season"}}),s=new U({props:{id:"team_name",title:"Team"}}),f=new U({props:{id:"championship_position",title:"Championship"}}),y=new U({props:{id:"championship_points",title:"Points"}}),l=new U({props:{id:"wins",title:"Wins"}}),a=new U({props:{id:"podiums",title:"Podiums"}}),S=new U({props:{id:"poles",title:"Poles"}}),F=new U({props:{id:"avg_qualifying",title:"Avg Quali",fmt:"0.0"}}),D=new U({props:{id:"avg_finish",title:"Avg Finish",fmt:"0.0"}}),N=new U({props:{id:"dnfs",title:"DNFs"}}),{c(){R(r.$$.fragment),i=g(),R(s.$$.fragment),d=g(),R(f.$$.fragment),m=g(),R(y.$$.fragment),h=g(),R(l.$$.fragment),T=g(),R(a.$$.fragment),u=g(),R(S.$$.fragment),C=g(),R(F.$$.fragment),E=g(),R(D.$$.fragment),O=g(),R(N.$$.fragment)},l(t){q(r.$$.fragment,t),i=v(t),q(s.$$.fragment,t),d=v(t),q(f.$$.fragment,t),m=v(t),q(y.$$.fragment,t),h=v(t),q(l.$$.fragment,t),T=v(t),q(a.$$.fragment,t),u=v(t),q(S.$$.fragment,t),C=v(t),q(F.$$.fragment,t),E=v(t),q(D.$$.fragment,t),O=v(t),q(N.$$.fragment,t)},m(t,b){k(r,t,b),$(t,i,b),k(s,t,b),$(t,d,b),k(f,t,b),$(t,m,b),k(y,t,b),$(t,h,b),k(l,t,b),$(t,T,b),k(a,t,b),$(t,u,b),k(S,t,b),$(t,C,b),k(F,t,b),$(t,E,b),k(D,t,b),$(t,O,b),k(N,t,b),j=!0},p:ve,i(t){j||(p(r.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(y.$$.fragment,t),p(l.$$.fragment,t),p(a.$$.fragment,t),p(S.$$.fragment,t),p(F.$$.fragment,t),p(D.$$.fragment,t),p(N.$$.fragment,t),j=!0)},o(t){c(r.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(y.$$.fragment,t),c(l.$$.fragment,t),c(a.$$.fragment,t),c(S.$$.fragment,t),c(F.$$.fragment,t),c(D.$$.fragment,t),c(N.$$.fragment,t),j=!1},d(t){t&&(_(i),_(d),_(m),_(h),_(T),_(u),_(C),_(E),_(O)),w(r,t),w(s,t),w(f,t),w(y,t),w(l,t),w(a,t),w(S,t),w(F,t),w(D,t),w(N,t)}}}function Me(n){let r,i;return r=new qe({props:{queryID:"finishes",queryResult:n[2]}}),{c(){R(r.$$.fragment)},l(s){q(r.$$.fragment,s)},m(s,d){k(r,s,d),i=!0},p(s,d){const f={};d[0]&4&&(f.queryResult=s[2]),r.$set(f)},i(s){i||(p(r.$$.fragment,s),i=!0)},o(s){c(r.$$.fragment,s),i=!1},d(s){w(r,s)}}}function Ae(n){let r,i;return r=new qe({props:{queryID:"quali_h2h",queryResult:n[3]}}),{c(){R(r.$$.fragment)},l(s){q(r.$$.fragment,s)},m(s,d){k(r,s,d),i=!0},p(s,d){const f={};d[0]&8&&(f.queryResult=s[3]),r.$set(f)},i(s){i||(p(r.$$.fragment,s),i=!0)},o(s){c(r.$$.fragment,s),i=!1},d(s){w(r,s)}}}function is(n){let r,i,s,d,f,m,y,h;return r=new U({props:{id:"year",title:"Season"}}),s=new U({props:{id:"teammate",title:"Teammate"}}),f=new U({props:{id:"ahead",title:"Qualified Ahead"}}),y=new U({props:{id:"behind",title:"Qualified Behind"}}),{c(){R(r.$$.fragment),i=g(),R(s.$$.fragment),d=g(),R(f.$$.fragment),m=g(),R(y.$$.fragment)},l(l){q(r.$$.fragment,l),i=v(l),q(s.$$.fragment,l),d=v(l),q(f.$$.fragment,l),m=v(l),q(y.$$.fragment,l)},m(l,T){k(r,l,T),$(l,i,T),k(s,l,T),$(l,d,T),k(f,l,T),$(l,m,T),k(y,l,T),h=!0},p:ve,i(l){h||(p(r.$$.fragment,l),p(s.$$.fragment,l),p(f.$$.fragment,l),p(y.$$.fragment,l),h=!0)},o(l){c(r.$$.fragment,l),c(s.$$.fragment,l),c(f.$$.fragment,l),c(y.$$.fragment,l),h=!1},d(l){l&&(_(i),_(d),_(m)),w(r,l),w(s,l),w(f,l),w(y,l)}}}function as(n){let r,i,s,d,f,m,y,h,l,T,a,u,S=n[0][0].driver_name+"",C,F,E,D=n[0][0].team_name+"",O,N,j=n[0][0].driver_code+"",t,b,W,re,L,J='<a href="#season-by-season">Season by Season</a>',Z,z,ie,B,x='<a href="#race-finishes">Race Finishes</a>',K,X,Y,ae,V,Q='<a href="#qualifying-vs-teammate">Qualifying vs Teammate</a>',fe,ue,ne,oe;function Ne(e,o){return ss}let $e=Ne()(n),H=n[0]&&De(n),I=n[1]&&He(n),G=n[0][0].country_code&&Ie(n);W=new es({props:{cols:"5",$$slots:{default:[ts]},$$scope:{ctx:n}}}),z=new Qe({props:{data:n[0],rows:"all",$$slots:{default:[rs]},$$scope:{ctx:n}}});let M=n[2]&&Me(n);Y=new We({props:{data:n[2],tooltipSort:"asc",tooltipDecimals:"0",emptySet:"pass",emptyMessage:"No classified race finishes.",x:"round_number",y:"position",series:"season",markers:"true",xAxisTitle:"Round",yAxisTitle:"Finish",yMin:"1",echartsOptions:{grid:{left:48},yAxis:{inverse:!0,nameLocation:"middle",nameRotate:90,nameGap:42}}}});let A=n[3]&&Ae(n);return ne=new Qe({props:{data:n[3],rows:"all",emptySet:"pass",emptyMessage:"No qualifying sessions alongside a teammate.",$$slots:{default:[is]},$$scope:{ctx:n}}}),{c(){r=g(),$e.c(),i=se("meta"),s=se("meta"),d=Ee(),f=g(),H&&H.c(),m=g(),I&&I.c(),y=g(),h=se("img"),T=g(),a=se("h1"),u=se("a"),C=pe(S),F=g(),E=se("p"),O=pe(D),N=pe(" · "),t=pe(j),G&&G.c(),b=g(),R(W.$$.fragment),re=g(),L=se("h2"),L.innerHTML=J,Z=g(),R(z.$$.fragment),ie=g(),B=se("h2"),B.innerHTML=x,K=g(),M&&M.c(),X=g(),R(Y.$$.fragment),ae=g(),V=se("h2"),V.innerHTML=Q,fe=g(),A&&A.c(),ue=g(),R(ne.$$.fragment),this.h()},l(e){r=v(e);const o=Pe("svelte-2igo1p",document.head);$e.l(o),i=ee(o,"META",{name:!0,content:!0}),s=ee(o,"META",{name:!0,content:!0}),d=Ee(),o.forEach(_),f=v(e),H&&H.l(e),m=v(e),I&&I.l(e),y=v(e),h=ee(e,"IMG",{src:!0,alt:!0,class:!0}),T=v(e),a=ee(e,"H1",{class:!0,id:!0});var ce=ke(a);u=ee(ce,"A",{href:!0});var _e=ke(u);C=de(_e,S),_e.forEach(_),ce.forEach(_),F=v(e),E=ee(e,"P",{class:!0});var me=ke(E);O=de(me,D),N=de(me," · "),t=de(me,j),G&&G.l(me),me.forEach(_),b=v(e),q(W.$$.fragment,e),re=v(e),L=ee(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(L)!=="svelte-1hwlr45"&&(L.innerHTML=J),Z=v(e),q(z.$$.fragment,e),ie=v(e),B=ee(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(B)!=="svelte-eooh02"&&(B.innerHTML=x),K=v(e),M&&M.l(e),X=v(e),q(Y.$$.fragment,e),ae=v(e),V=ee(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(V)!=="svelte-17rvzvw"&&(V.innerHTML=Q),fe=v(e),A&&A.l(e),ue=v(e),q(ne.$$.fragment,e),this.h()},h(){P(i,"name","twitter:card"),P(i,"content","summary_large_image"),P(s,"name","twitter:site"),P(s,"content","@evidence_dev"),Se(h.src,l=n[0][0].headshot_url)||P(h,"src",l),P(h,"alt",""),P(h,"class","h-24 float-right"),P(u,"href","#seasons0driver_name"),P(a,"class","markdown"),P(a,"id","seasons0driver_name"),P(E,"class","markdown"),P(L,"class","markdown"),P(L,"id","season-by-season"),P(B,"class","markdown"),P(B,"id","race-finishes"),P(V,"class","markdown"),P(V,"id","qualifying-vs-teammate")},m(e,o){$(e,r,o),$e.m(document.head,null),te(document.head,i),te(document.head,s),te(document.head,d),$(e,f,o),H&&H.m(e,o),$(e,m,o),I&&I.m(e,o),$(e,y,o),$(e,h,o),$(e,T,o),$(e,a,o),te(a,u),te(u,C),$(e,F,o),$(e,E,o),te(E,O),te(E,N),te(E,t),G&&G.m(E,null),$(e,b,o),k(W,e,o),$(e,re,o),$(e,L,o),$(e,Z,o),k(z,e,o),$(e,ie,o),$(e,B,o),$(e,K,o),M&&M.m(e,o),$(e,X,o),k(Y,e,o),$(e,ae,o),$(e,V,o),$(e,fe,o),A&&A.m(e,o),$(e,ue,o),k(ne,e,o),oe=!0},p(e,o){$e.p(e,o),e[0]?H?(H.p(e,o),o[0]&1&&p(H,1)):(H=De(e),H.c(),p(H,1),H.m(m.parentNode,m)):H&&(he(),c(H,1,1,()=>{H=null}),ge()),e[1]?I?(I.p(e,o),o[0]&2&&p(I,1)):(I=He(e),I.c(),p(I,1),I.m(y.parentNode,y)):I&&(he(),c(I,1,1,()=>{I=null}),ge()),(!oe||o[0]&1&&!Se(h.src,l=e[0][0].headshot_url))&&P(h,"src",l),(!oe||o[0]&1)&&S!==(S=e[0][0].driver_name+"")&&we(C,S),(!oe||o[0]&1)&&D!==(D=e[0][0].team_name+"")&&we(O,D),(!oe||o[0]&1)&&j!==(j=e[0][0].driver_code+"")&&we(t,j),e[0][0].country_code?G?G.p(e,o):(G=Ie(e),G.c(),G.m(E,null)):G&&(G.d(1),G=null);const ce={};o[0]&2|o[1]&32&&(ce.$$scope={dirty:o,ctx:e}),W.$set(ce);const _e={};o[0]&1&&(_e.data=e[0]),o[1]&32&&(_e.$$scope={dirty:o,ctx:e}),z.$set(_e),e[2]?M?(M.p(e,o),o[0]&4&&p(M,1)):(M=Me(e),M.c(),p(M,1),M.m(X.parentNode,X)):M&&(he(),c(M,1,1,()=>{M=null}),ge());const me={};o[0]&4&&(me.data=e[2]),Y.$set(me),e[3]?A?(A.p(e,o),o[0]&8&&p(A,1)):(A=Ae(e),A.c(),p(A,1),A.m(ue.parentNode,ue)):A&&(he(),c(A,1,1,()=>{A=null}),ge());const Re={};o[0]&8&&(Re.data=e[3]),o[1]&32&&(Re.$$scope={dirty:o,ctx:e}),ne.$set(Re)},i(e){oe||(p(H),p(I),p(W.$$.fragment,e),p(z.$$.fragment,e),p(M),p(Y.$$.fragment,e),p(A),p(ne.$$.fragment,e),oe=!0)},o(e){c(H),c(I),c(W.$$.fragment,e),c(z.$$.fragment,e),c(M),c(Y.$$.fragment,e),c(A),c(ne.$$.fragment,e),oe=!1},d(e){e&&(_(r),_(f),_(m),_(y),_(h),_(T),_(a),_(F),_(E),_(b),_(re),_(L),_(Z),_(ie),_(B),_(K),_(X),_(ae),_(V),_(fe),_(ue)),$e.d(e),_(i),_(s),_(d),H&&H.d(e),I&&I.d(e),G&&G.d(),w(W,e),w(z,e),M&&M.d(e),w(Y,e),A&&A.d(e),w(ne,e)}}}function ns(n,r,i){let s,d;Fe(n,xe,Q=>i(23,s=Q)),Fe(n,Ce,Q=>i(28,d=Q));let{data:f}=r,{data:m={},customFormattingSettings:y,__db:h,inputs:l}=f;Le(Ce,d="7087d3f6c661069638c13a46224d9564",d);let T=ze(Je(l));Ge(T.subscribe(Q=>l=Q)),Ue(Ye,{getCustomFormats:()=>y.customFormats||[]});const a=(Q,fe)=>Ze(h.query,Q,{query_name:fe});Ke(a);let u=s.params;Oe(()=>!0);let S={initialData:void 0,initialError:void 0},C=le`select * from f1.drivers where driver_id = '${u.driver}' order by year desc`,F=`select * from f1.drivers where driver_id = '${u.driver}' order by year desc`;m.seasons_data&&(m.seasons_data instanceof Error?S.initialError=m.seasons_data:S.initialData=m.seasons_data,m.seasons_columns&&(S.knownColumns=m.seasons_columns));let E,D=!1;const O=be.createReactive({callback:Q=>{i(0,E=Q)},execFn:a},{id:"seasons",...S});O(F,{noResolve:C,...S}),globalThis[Symbol.for("seasons")]={get value(){return E}};let N={initialData:void 0,initialError:void 0},j=le`select
    count(*)                 as seasons,
    sum(starts)              as starts,
    sum(wins)                as wins,
    sum(podiums)             as podiums,
    sum(poles)               as poles,
    sum(championship_points) as points
from (select * from f1.drivers where driver_id = '${u.driver}' order by year desc)`,t=`select
    count(*)                 as seasons,
    sum(starts)              as starts,
    sum(wins)                as wins,
    sum(podiums)             as podiums,
    sum(poles)               as poles,
    sum(championship_points) as points
from (select * from f1.drivers where driver_id = '${u.driver}' order by year desc)`;m.career_data&&(m.career_data instanceof Error?N.initialError=m.career_data:N.initialData=m.career_data,m.career_columns&&(N.knownColumns=m.career_columns));let b,W=!1;const re=be.createReactive({callback:Q=>{i(1,b=Q)},execFn:a},{id:"career",...N});re(t,{noResolve:j,...N}),globalThis[Symbol.for("career")]={get value(){return b}};let L={initialData:void 0,initialError:void 0},J=le`select cast(year as integer)::varchar as season, round_number, meeting_name, position
from f1.results
where driver_id = '${u.driver}' and session_name = 'Race' and position is not null
order by year, round_number`,Z=`select cast(year as integer)::varchar as season, round_number, meeting_name, position
from f1.results
where driver_id = '${u.driver}' and session_name = 'Race' and position is not null
order by year, round_number`;m.finishes_data&&(m.finishes_data instanceof Error?L.initialError=m.finishes_data:L.initialData=m.finishes_data,m.finishes_columns&&(L.knownColumns=m.finishes_columns));let z,ie=!1;const B=be.createReactive({callback:Q=>{i(2,z=Q)},execFn:a},{id:"finishes",...L});B(Z,{noResolve:J,...L}),globalThis[Symbol.for("finishes")]={get value(){return z}};let x={initialData:void 0,initialError:void 0},K=le`with mine as (
    select session_key, year, team_name, position
    from f1.results
    where driver_id = '${u.driver}' and session_name = 'Qualifying' and position is not null
),
mate as (
    select r.session_key, r.driver_name as teammate, r.position
    from f1.results r
    join mine m on m.session_key = r.session_key and m.team_name = r.team_name
    where r.driver_id <> '${u.driver}' and r.session_name = 'Qualifying' and r.position is not null
)
select
    m.year,
    t.teammate,
    count(*) filter (m.position < t.position) as ahead,
    count(*) filter (m.position > t.position) as behind
from mine m join mate t using (session_key)
group by all
order by m.year desc, (ahead + behind) desc`,X=`with mine as (
    select session_key, year, team_name, position
    from f1.results
    where driver_id = '${u.driver}' and session_name = 'Qualifying' and position is not null
),
mate as (
    select r.session_key, r.driver_name as teammate, r.position
    from f1.results r
    join mine m on m.session_key = r.session_key and m.team_name = r.team_name
    where r.driver_id <> '${u.driver}' and r.session_name = 'Qualifying' and r.position is not null
)
select
    m.year,
    t.teammate,
    count(*) filter (m.position < t.position) as ahead,
    count(*) filter (m.position > t.position) as behind
from mine m join mate t using (session_key)
group by all
order by m.year desc, (ahead + behind) desc`;m.quali_h2h_data&&(m.quali_h2h_data instanceof Error?x.initialError=m.quali_h2h_data:x.initialData=m.quali_h2h_data,m.quali_h2h_columns&&(x.knownColumns=m.quali_h2h_columns));let Y,ae=!1;const V=be.createReactive({callback:Q=>{i(3,Y=Q)},execFn:a},{id:"quali_h2h",...x});return V(X,{noResolve:K,...x}),globalThis[Symbol.for("quali_h2h")]={get value(){return Y}},n.$$set=Q=>{"data"in Q&&i(4,f=Q.data)},n.$$.update=()=>{n.$$.dirty[0]&16&&i(5,{data:m={},customFormattingSettings:y,__db:h}=f,m),n.$$.dirty[0]&32&&Xe.set(Object.keys(m).length>0),n.$$.dirty[0]&8388608&&i(6,u=s.params),n.$$.dirty[0]&64&&i(8,C=le`select * from f1.drivers where driver_id = '${u.driver}' order by year desc`),n.$$.dirty[0]&64&&i(9,F=`select * from f1.drivers where driver_id = '${u.driver}' order by year desc`),n.$$.dirty[0]&1920&&(C||!D?C||(O(F,{noResolve:C,...S}),i(10,D=!0)):O(F,{noResolve:C})),n.$$.dirty[0]&64&&i(12,j=le`select
    count(*)                 as seasons,
    sum(starts)              as starts,
    sum(wins)                as wins,
    sum(podiums)             as podiums,
    sum(poles)               as poles,
    sum(championship_points) as points
from (select * from f1.drivers where driver_id = '${u.driver}' order by year desc)`),n.$$.dirty[0]&64&&i(13,t=`select
    count(*)                 as seasons,
    sum(starts)              as starts,
    sum(wins)                as wins,
    sum(podiums)             as podiums,
    sum(poles)               as poles,
    sum(championship_points) as points
from (select * from f1.drivers where driver_id = '${u.driver}' order by year desc)`),n.$$.dirty[0]&30720&&(j||!W?j||(re(t,{noResolve:j,...N}),i(14,W=!0)):re(t,{noResolve:j})),n.$$.dirty[0]&64&&i(16,J=le`select cast(year as integer)::varchar as season, round_number, meeting_name, position
from f1.results
where driver_id = '${u.driver}' and session_name = 'Race' and position is not null
order by year, round_number`),n.$$.dirty[0]&64&&i(17,Z=`select cast(year as integer)::varchar as season, round_number, meeting_name, position
from f1.results
where driver_id = '${u.driver}' and session_name = 'Race' and position is not null
order by year, round_number`),n.$$.dirty[0]&491520&&(J||!ie?J||(B(Z,{noResolve:J,...L}),i(18,ie=!0)):B(Z,{noResolve:J})),n.$$.dirty[0]&64&&i(20,K=le`with mine as (
    select session_key, year, team_name, position
    from f1.results
    where driver_id = '${u.driver}' and session_name = 'Qualifying' and position is not null
),
mate as (
    select r.session_key, r.driver_name as teammate, r.position
    from f1.results r
    join mine m on m.session_key = r.session_key and m.team_name = r.team_name
    where r.driver_id <> '${u.driver}' and r.session_name = 'Qualifying' and r.position is not null
)
select
    m.year,
    t.teammate,
    count(*) filter (m.position < t.position) as ahead,
    count(*) filter (m.position > t.position) as behind
from mine m join mate t using (session_key)
group by all
order by m.year desc, (ahead + behind) desc`),n.$$.dirty[0]&64&&i(21,X=`with mine as (
    select session_key, year, team_name, position
    from f1.results
    where driver_id = '${u.driver}' and session_name = 'Qualifying' and position is not null
),
mate as (
    select r.session_key, r.driver_name as teammate, r.position
    from f1.results r
    join mine m on m.session_key = r.session_key and m.team_name = r.team_name
    where r.driver_id <> '${u.driver}' and r.session_name = 'Qualifying' and r.position is not null
)
select
    m.year,
    t.teammate,
    count(*) filter (m.position < t.position) as ahead,
    count(*) filter (m.position > t.position) as behind
from mine m join mate t using (session_key)
group by all
order by m.year desc, (ahead + behind) desc`),n.$$.dirty[0]&7864320&&(K||!ae?K||(V(X,{noResolve:K,...x}),i(22,ae=!0)):V(X,{noResolve:K}))},[E,b,z,Y,f,m,u,S,C,F,D,N,j,t,W,L,J,Z,ie,x,K,X,ae,s]}class vs extends Be{constructor(r){super(),Ve(this,r,ns,as,je,{data:4},null,[-1,-1])}}export{vs as component};
