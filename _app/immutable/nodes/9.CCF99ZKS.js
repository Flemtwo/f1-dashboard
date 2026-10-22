import{s as ze,d,i as u,b as Se,c as S,e as c,h as Ve,f as x,g as Ce,x as Fe,k as h,l as ee,m as He,n as We,o as Ke,p as Xe,q as Ye,r as ke,j as Je,u as Ze,v as xe}from"../chunks/scheduler.fW7yY31m.js";import{S as ei,i as ii,d as k,t as v,a as f,c as he,m as q,b as R,e as T,g as $e}from"../chunks/index.DLlk0QKX.js";import{G as ri}from"../chunks/GradientBarChart.BPK9hydh.js";import{S as ai}from"../chunks/SortedLineChart.hDHjt0DN.js";import{D as Me,a as ti,s as si,Q as be,p as ni,C as ne,b as Ae,r as je,c as oi}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YyYGKAEJ.js";import{w as li}from"../chunks/entry.DzP7nCf5.js";import{h as z,p as _i}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as Ie}from"../chunks/Dropdown.D2st2TDs.js";import{p as mi}from"../chunks/stores.adFM5OC5.js";import{Q as ye}from"../chunks/QueryViewer.Bv4472B1.js";function di(_){let a,t=$.title+"",e;return{c(){a=ee("h1"),e=xe(t),this.h()},l(n){a=x(n,"H1",{class:!0});var m=Je(a);e=Ze(m,t),m.forEach(d),this.h()},h(){S(a,"class","title")},m(n,m){u(n,a,m),Se(a,e)},p:ke,d(n){n&&d(a)}}}function fi(_){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:ke,p:ke,d:ke}}function pi(_){let a,t,e,n,m;return document.title=a=$.title,{c(){t=h(),e=ee("meta"),n=h(),m=ee("meta"),this.h()},l(s){t=c(s),e=x(s,"META",{property:!0,content:!0}),n=c(s),m=x(s,"META",{name:!0,content:!0}),this.h()},h(){var s,p;S(e,"property","og:title"),S(e,"content",((s=$.og)==null?void 0:s.title)??$.title),S(m,"name","twitter:title"),S(m,"content",((p=$.og)==null?void 0:p.title)??$.title)},m(s,p){u(s,t,p),u(s,e,p),u(s,n,p),u(s,m,p)},p(s,p){p&0&&a!==(a=$.title)&&(document.title=a)},d(s){s&&(d(t),d(e),d(n),d(m))}}}function ui(_){var m,s;let a,t,e=($.description||((m=$.og)==null?void 0:m.description))&&vi(),n=((s=$.og)==null?void 0:s.image)&&ci();return{c(){e&&e.c(),a=h(),n&&n.c(),t=Ce()},l(p){e&&e.l(p),a=c(p),n&&n.l(p),t=Ce()},m(p,E){e&&e.m(p,E),u(p,a,E),n&&n.m(p,E),u(p,t,E)},p(p,E){var r,D;($.description||(r=$.og)!=null&&r.description)&&e.p(p,E),(D=$.og)!=null&&D.image&&n.p(p,E)},d(p){p&&(d(a),d(t)),e&&e.d(p),n&&n.d(p)}}}function vi(_){let a,t,e,n,m;return{c(){a=ee("meta"),t=h(),e=ee("meta"),n=h(),m=ee("meta"),this.h()},l(s){a=x(s,"META",{name:!0,content:!0}),t=c(s),e=x(s,"META",{property:!0,content:!0}),n=c(s),m=x(s,"META",{name:!0,content:!0}),this.h()},h(){var s,p,E;S(a,"name","description"),S(a,"content",$.description??((s=$.og)==null?void 0:s.description)),S(e,"property","og:description"),S(e,"content",((p=$.og)==null?void 0:p.description)??$.description),S(m,"name","twitter:description"),S(m,"content",((E=$.og)==null?void 0:E.description)??$.description)},m(s,p){u(s,a,p),u(s,t,p),u(s,e,p),u(s,n,p),u(s,m,p)},p:ke,d(s){s&&(d(a),d(t),d(e),d(n),d(m))}}}function ci(_){let a,t,e;return{c(){a=ee("meta"),t=h(),e=ee("meta"),this.h()},l(n){a=x(n,"META",{property:!0,content:!0}),t=c(n),e=x(n,"META",{name:!0,content:!0}),this.h()},h(){var n,m;S(a,"property","og:image"),S(a,"content",Ae((n=$.og)==null?void 0:n.image)),S(e,"name","twitter:image"),S(e,"content",Ae((m=$.og)==null?void 0:m.image))},m(n,m){u(n,a,m),u(n,t,m),u(n,e,m)},p:ke,d(n){n&&(d(a),d(t),d(e))}}}function Ne(_){let a,t;return a=new ye({props:{queryID:"seasons",queryResult:_[0]}}),{c(){T(a.$$.fragment)},l(e){R(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const m={};n[0]&1&&(m.queryResult=e[0]),a.$set(m)},i(e){t||(f(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){k(a,e)}}}function Qe(_){let a,t;return a=new ye({props:{queryID:"driver_options",queryResult:_[1]}}),{c(){T(a.$$.fragment)},l(e){R(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const m={};n[0]&2&&(m.queryResult=e[1]),a.$set(m)},i(e){t||(f(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){k(a,e)}}}function Pe(_){let a,t;return a=new ye({props:{queryID:"driver_b_options",queryResult:_[2]}}),{c(){T(a.$$.fragment)},l(e){R(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const m={};n[0]&4&&(m.queryResult=e[2]),a.$set(m)},i(e){t||(f(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){k(a,e)}}}function Ue(_){let a,t;return a=new ye({props:{queryID:"summary",queryResult:_[3]}}),{c(){T(a.$$.fragment)},l(e){R(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const m={};n[0]&8&&(m.queryResult=e[3]),a.$set(m)},i(e){t||(f(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){k(a,e)}}}function hi(_){let a,t,e,n,m,s,p,E,r,D,C,P,I,U,G,L,O,B,H,V;return a=new ne({props:{id:"driver_name",title:"Driver"}}),e=new ne({props:{id:"team_name",title:"Team"}}),m=new ne({props:{id:"championship_position",title:"Champ. Pos"}}),p=new ne({props:{id:"championship_points",title:"Points"}}),r=new ne({props:{id:"wins",title:"Wins"}}),C=new ne({props:{id:"podiums",title:"Podiums"}}),I=new ne({props:{id:"poles",title:"Poles"}}),G=new ne({props:{id:"avg_qualifying",title:"Avg Quali",fmt:"0.0"}}),O=new ne({props:{id:"avg_finish",title:"Avg Finish",fmt:"0.0"}}),H=new ne({props:{id:"dnfs",title:"DNFs"}}),{c(){T(a.$$.fragment),t=h(),T(e.$$.fragment),n=h(),T(m.$$.fragment),s=h(),T(p.$$.fragment),E=h(),T(r.$$.fragment),D=h(),T(C.$$.fragment),P=h(),T(I.$$.fragment),U=h(),T(G.$$.fragment),L=h(),T(O.$$.fragment),B=h(),T(H.$$.fragment)},l(l){R(a.$$.fragment,l),t=c(l),R(e.$$.fragment,l),n=c(l),R(m.$$.fragment,l),s=c(l),R(p.$$.fragment,l),E=c(l),R(r.$$.fragment,l),D=c(l),R(C.$$.fragment,l),P=c(l),R(I.$$.fragment,l),U=c(l),R(G.$$.fragment,l),L=c(l),R(O.$$.fragment,l),B=c(l),R(H.$$.fragment,l)},m(l,b){q(a,l,b),u(l,t,b),q(e,l,b),u(l,n,b),q(m,l,b),u(l,s,b),q(p,l,b),u(l,E,b),q(r,l,b),u(l,D,b),q(C,l,b),u(l,P,b),q(I,l,b),u(l,U,b),q(G,l,b),u(l,L,b),q(O,l,b),u(l,B,b),q(H,l,b),V=!0},p:ke,i(l){V||(f(a.$$.fragment,l),f(e.$$.fragment,l),f(m.$$.fragment,l),f(p.$$.fragment,l),f(r.$$.fragment,l),f(C.$$.fragment,l),f(I.$$.fragment,l),f(G.$$.fragment,l),f(O.$$.fragment,l),f(H.$$.fragment,l),V=!0)},o(l){v(a.$$.fragment,l),v(e.$$.fragment,l),v(m.$$.fragment,l),v(p.$$.fragment,l),v(r.$$.fragment,l),v(C.$$.fragment,l),v(I.$$.fragment,l),v(G.$$.fragment,l),v(O.$$.fragment,l),v(H.$$.fragment,l),V=!1},d(l){l&&(d(t),d(n),d(s),d(E),d(D),d(P),d(U),d(L),d(B)),k(a,l),k(e,l),k(m,l),k(p,l),k(r,l),k(C,l),k(I,l),k(G,l),k(O,l),k(H,l)}}}function Be(_){let a,t;return a=new ye({props:{queryID:"head_to_head",queryResult:_[4]}}),{c(){T(a.$$.fragment)},l(e){R(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const m={};n[0]&16&&(m.queryResult=e[4]),a.$set(m)},i(e){t||(f(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){k(a,e)}}}function Le(_){let a,t;return a=new ye({props:{queryID:"h2h_labels",queryResult:_[5]}}),{c(){T(a.$$.fragment)},l(e){R(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const m={};n[0]&32&&(m.queryResult=e[5]),a.$set(m)},i(e){t||(f(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){k(a,e)}}}function $i(_){var p,E;let a,t,e,n,m,s;return a=new ne({props:{id:"session_name",title:"Session"}}),e=new ne({props:{id:"driver_a_ahead",title:((p=_[5][0])==null?void 0:p.name_a)??"Driver A"}}),m=new ne({props:{id:"driver_b_ahead",title:((E=_[5][0])==null?void 0:E.name_b)??"Driver B"}}),{c(){T(a.$$.fragment),t=h(),T(e.$$.fragment),n=h(),T(m.$$.fragment)},l(r){R(a.$$.fragment,r),t=c(r),R(e.$$.fragment,r),n=c(r),R(m.$$.fragment,r)},m(r,D){q(a,r,D),u(r,t,D),q(e,r,D),u(r,n,D),q(m,r,D),s=!0},p(r,D){var I,U;const C={};D[0]&32&&(C.title=((I=r[5][0])==null?void 0:I.name_a)??"Driver A"),e.$set(C);const P={};D[0]&32&&(P.title=((U=r[5][0])==null?void 0:U.name_b)??"Driver B"),m.$set(P)},i(r){s||(f(a.$$.fragment,r),f(e.$$.fragment,r),f(m.$$.fragment,r),s=!0)},o(r){v(a.$$.fragment,r),v(e.$$.fragment,r),v(m.$$.fragment,r),s=!1},d(r){r&&(d(t),d(n)),k(a,r),k(e,r),k(m,r)}}}function Ge(_){let a,t;return a=new ye({props:{queryID:"points",queryResult:_[6]}}),{c(){T(a.$$.fragment)},l(e){R(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const m={};n[0]&64&&(m.queryResult=e[6]),a.$set(m)},i(e){t||(f(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){k(a,e)}}}function Oe(_){let a,t;return a=new ye({props:{queryID:"pace",queryResult:_[7]}}),{c(){T(a.$$.fragment)},l(e){R(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const m={};n[0]&128&&(m.queryResult=e[7]),a.$set(m)},i(e){t||(f(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){k(a,e)}}}function bi(_){let a,t,e,n,m,s,p="Compare two drivers across a season: results, qualifying, and race pace on the same day.",E,r,D,C,P,I,U,G,L,O,B,H,V,l,b,ie,me='<a href="#who-finished-ahead">Who finished ahead</a>',oe,K,fe,re,qe='<a href="#championship-points">Championship Points</a>',le,X,Y,pe,ae,Re='<a href="#race-pace-gap">Race Pace Gap</a>',_e,J,Z,ue,te=typeof $<"u"&&$.title&&$.hide_title!==!0&&di();function De(i,o){return typeof $<"u"&&$.title?pi:fi}let se=De()(_),W=typeof $=="object"&&ui(),M=_[0]&&Ne(_);D=new Ie({props:{name:"season",data:_[0],value:"year",title:"Season"}});let A=_[1]&&Qe(_),j=_[2]&&Pe(_);U=new Ie({props:{name:"driver_a",data:_[1],value:"driver_id",label:"driver_name",title:"Driver A"}}),L=new Ie({props:{name:"driver_b",data:_[2],value:"driver_id",label:"driver_name",title:"Driver B"}});let g=_[3]&&Ue(_);H=new Me({props:{data:_[3],$$slots:{default:[hi]},$$scope:{ctx:_}}});let w=_[4]&&Be(_),F=_[5]&&Le(_);K=new Me({props:{data:_[4],emptySet:"pass",emptyMessage:"These drivers never shared a session this season.",$$slots:{default:[$i]},$$scope:{ctx:_}}});let N=_[6]&&Ge(_);Y=new ai({props:{tooltipSort:"desc",tooltipDecimals:"0",emptySet:"pass",data:_[6],x:"round_number",y:"championship_points",series:"driver_name",xAxisTitle:"Round",yAxisTitle:"Points"}});let Q=_[7]&&Oe(_);return Z=new ri({props:{emptySet:"pass",emptyMessage:"No races where both drivers set clean laps.",data:_[7],x:"short_name",y:"gap_s",sort:"false",yAxisTitle:"Seconds per lap",yFmt:"+0.000;-0.000",subtitle:"Median clean-lap time, Driver A minus Driver B. Below zero means Driver A was faster that day."}}),{c(){te&&te.c(),a=h(),se.c(),t=ee("meta"),e=ee("meta"),W&&W.c(),n=Ce(),m=h(),s=ee("p"),s.textContent=p,E=h(),M&&M.c(),r=h(),T(D.$$.fragment),C=h(),A&&A.c(),P=h(),j&&j.c(),I=h(),T(U.$$.fragment),G=h(),T(L.$$.fragment),O=h(),g&&g.c(),B=h(),T(H.$$.fragment),V=h(),w&&w.c(),l=h(),F&&F.c(),b=h(),ie=ee("h3"),ie.innerHTML=me,oe=h(),T(K.$$.fragment),fe=h(),re=ee("h2"),re.innerHTML=qe,le=h(),N&&N.c(),X=h(),T(Y.$$.fragment),pe=h(),ae=ee("h2"),ae.innerHTML=Re,_e=h(),Q&&Q.c(),J=h(),T(Z.$$.fragment),this.h()},l(i){te&&te.l(i),a=c(i);const o=Ve("svelte-2igo1p",document.head);se.l(o),t=x(o,"META",{name:!0,content:!0}),e=x(o,"META",{name:!0,content:!0}),W&&W.l(o),n=Ce(),o.forEach(d),m=c(i),s=x(i,"P",{class:!0,"data-svelte-h":!0}),Fe(s)!=="svelte-1nswnlr"&&(s.textContent=p),E=c(i),M&&M.l(i),r=c(i),R(D.$$.fragment,i),C=c(i),A&&A.l(i),P=c(i),j&&j.l(i),I=c(i),R(U.$$.fragment,i),G=c(i),R(L.$$.fragment,i),O=c(i),g&&g.l(i),B=c(i),R(H.$$.fragment,i),V=c(i),w&&w.l(i),l=c(i),F&&F.l(i),b=c(i),ie=x(i,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Fe(ie)!=="svelte-b2ar3l"&&(ie.innerHTML=me),oe=c(i),R(K.$$.fragment,i),fe=c(i),re=x(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(re)!=="svelte-5ew6q6"&&(re.innerHTML=qe),le=c(i),N&&N.l(i),X=c(i),R(Y.$$.fragment,i),pe=c(i),ae=x(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Fe(ae)!=="svelte-qz8r9w"&&(ae.innerHTML=Re),_e=c(i),Q&&Q.l(i),J=c(i),R(Z.$$.fragment,i),this.h()},h(){S(t,"name","twitter:card"),S(t,"content","summary_large_image"),S(e,"name","twitter:site"),S(e,"content","@evidence_dev"),S(s,"class","markdown"),S(ie,"class","markdown"),S(ie,"id","who-finished-ahead"),S(re,"class","markdown"),S(re,"id","championship-points"),S(ae,"class","markdown"),S(ae,"id","race-pace-gap")},m(i,o){te&&te.m(i,o),u(i,a,o),se.m(document.head,null),Se(document.head,t),Se(document.head,e),W&&W.m(document.head,null),Se(document.head,n),u(i,m,o),u(i,s,o),u(i,E,o),M&&M.m(i,o),u(i,r,o),q(D,i,o),u(i,C,o),A&&A.m(i,o),u(i,P,o),j&&j.m(i,o),u(i,I,o),q(U,i,o),u(i,G,o),q(L,i,o),u(i,O,o),g&&g.m(i,o),u(i,B,o),q(H,i,o),u(i,V,o),w&&w.m(i,o),u(i,l,o),F&&F.m(i,o),u(i,b,o),u(i,ie,o),u(i,oe,o),q(K,i,o),u(i,fe,o),u(i,re,o),u(i,le,o),N&&N.m(i,o),u(i,X,o),q(Y,i,o),u(i,pe,o),u(i,ae,o),u(i,_e,o),Q&&Q.m(i,o),u(i,J,o),q(Z,i,o),ue=!0},p(i,o){typeof $<"u"&&$.title&&$.hide_title!==!0&&te.p(i,o),se.p(i,o),typeof $=="object"&&W.p(i,o),i[0]?M?(M.p(i,o),o[0]&1&&f(M,1)):(M=Ne(i),M.c(),f(M,1),M.m(r.parentNode,r)):M&&($e(),v(M,1,1,()=>{M=null}),he());const de={};o[0]&1&&(de.data=i[0]),D.$set(de),i[1]?A?(A.p(i,o),o[0]&2&&f(A,1)):(A=Qe(i),A.c(),f(A,1),A.m(P.parentNode,P)):A&&($e(),v(A,1,1,()=>{A=null}),he()),i[2]?j?(j.p(i,o),o[0]&4&&f(j,1)):(j=Pe(i),j.c(),f(j,1),j.m(I.parentNode,I)):j&&($e(),v(j,1,1,()=>{j=null}),he());const ce={};o[0]&2&&(ce.data=i[1]),U.$set(ce);const Te={};o[0]&4&&(Te.data=i[2]),L.$set(Te),i[3]?g?(g.p(i,o),o[0]&8&&f(g,1)):(g=Ue(i),g.c(),f(g,1),g.m(B.parentNode,B)):g&&($e(),v(g,1,1,()=>{g=null}),he());const ge={};o[0]&8&&(ge.data=i[3]),o[1]&536870912&&(ge.$$scope={dirty:o,ctx:i}),H.$set(ge),i[4]?w?(w.p(i,o),o[0]&16&&f(w,1)):(w=Be(i),w.c(),f(w,1),w.m(l.parentNode,l)):w&&($e(),v(w,1,1,()=>{w=null}),he()),i[5]?F?(F.p(i,o),o[0]&32&&f(F,1)):(F=Le(i),F.c(),f(F,1),F.m(b.parentNode,b)):F&&($e(),v(F,1,1,()=>{F=null}),he());const we={};o[0]&16&&(we.data=i[4]),o[0]&32|o[1]&536870912&&(we.$$scope={dirty:o,ctx:i}),K.$set(we),i[6]?N?(N.p(i,o),o[0]&64&&f(N,1)):(N=Ge(i),N.c(),f(N,1),N.m(X.parentNode,X)):N&&($e(),v(N,1,1,()=>{N=null}),he());const y={};o[0]&64&&(y.data=i[6]),Y.$set(y),i[7]?Q?(Q.p(i,o),o[0]&128&&f(Q,1)):(Q=Oe(i),Q.c(),f(Q,1),Q.m(J.parentNode,J)):Q&&($e(),v(Q,1,1,()=>{Q=null}),he());const Ee={};o[0]&128&&(Ee.data=i[7]),Z.$set(Ee)},i(i){ue||(f(M),f(D.$$.fragment,i),f(A),f(j),f(U.$$.fragment,i),f(L.$$.fragment,i),f(g),f(H.$$.fragment,i),f(w),f(F),f(K.$$.fragment,i),f(N),f(Y.$$.fragment,i),f(Q),f(Z.$$.fragment,i),ue=!0)},o(i){v(M),v(D.$$.fragment,i),v(A),v(j),v(U.$$.fragment,i),v(L.$$.fragment,i),v(g),v(H.$$.fragment,i),v(w),v(F),v(K.$$.fragment,i),v(N),v(Y.$$.fragment,i),v(Q),v(Z.$$.fragment,i),ue=!1},d(i){i&&(d(a),d(m),d(s),d(E),d(r),d(C),d(P),d(I),d(G),d(O),d(B),d(V),d(l),d(b),d(ie),d(oe),d(fe),d(re),d(le),d(X),d(pe),d(ae),d(_e),d(J)),te&&te.d(i),se.d(i),d(t),d(e),W&&W.d(i),d(n),M&&M.d(i),k(D,i),A&&A.d(i),j&&j.d(i),k(U,i),k(L,i),g&&g.d(i),k(H,i),w&&w.d(i),F&&F.d(i),k(K,i),N&&N.d(i),k(Y,i),Q&&Q.d(i),k(Z,i)}}}const $={title:"Head to Head"};function yi(_,a,t){let e,n;He(_,mi,y=>t(43,e=y)),He(_,je,y=>t(48,n=y));let{data:m}=a,{data:s={},customFormattingSettings:p,__db:E,inputs:r}=m;We(je,n="bce48180c1771c011270e21088b8448b",n);let D=ti(li(r));Ke(D.subscribe(y=>t(10,r=y))),Xe(oi,{getCustomFormats:()=>p.customFormats||[]});const C=(y,Ee)=>_i(E.query,y,{query_name:Ee});si(C),e.params,Ye(()=>!0);let P={initialData:void 0,initialError:void 0},I=z`select distinct year from f1.drivers order by year desc`,U="select distinct year from f1.drivers order by year desc";s.seasons_data&&(s.seasons_data instanceof Error?P.initialError=s.seasons_data:P.initialData=s.seasons_data,s.seasons_columns&&(P.knownColumns=s.seasons_columns));let G,L=!1;const O=be.createReactive({callback:y=>{t(0,G=y)},execFn:C},{id:"seasons",...P});O(U,{noResolve:I,...P}),globalThis[Symbol.for("seasons")]={get value(){return G}};let B={initialData:void 0,initialError:void 0},H=z`select driver_id, driver_name, championship_position
from f1.drivers
where year = ${r.season.value}
order by championship_position nulls last`,V=`select driver_id, driver_name, championship_position
from f1.drivers
where year = ${r.season.value}
order by championship_position nulls last`;s.driver_options_data&&(s.driver_options_data instanceof Error?B.initialError=s.driver_options_data:B.initialData=s.driver_options_data,s.driver_options_columns&&(B.knownColumns=s.driver_options_columns));let l,b=!1;const ie=be.createReactive({callback:y=>{t(1,l=y)},execFn:C},{id:"driver_options",...B});ie(V,{noResolve:H,...B}),globalThis[Symbol.for("driver_options")]={get value(){return l}};let me={initialData:void 0,initialError:void 0},oe=z`select * from (select driver_id, driver_name, championship_position
from f1.drivers
where year = ${r.season.value}
order by championship_position nulls last)
order by championship_position = 1, championship_position nulls last`,K=`select * from (select driver_id, driver_name, championship_position
from f1.drivers
where year = ${r.season.value}
order by championship_position nulls last)
order by championship_position = 1, championship_position nulls last`;s.driver_b_options_data&&(s.driver_b_options_data instanceof Error?me.initialError=s.driver_b_options_data:me.initialData=s.driver_b_options_data,s.driver_b_options_columns&&(me.knownColumns=s.driver_b_options_columns));let fe,re=!1;const qe=be.createReactive({callback:y=>{t(2,fe=y)},execFn:C},{id:"driver_b_options",...me});qe(K,{noResolve:oe,...me}),globalThis[Symbol.for("driver_b_options")]={get value(){return fe}};let le={initialData:void 0,initialError:void 0},X=z`select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end`,Y=`select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end`;s.summary_data&&(s.summary_data instanceof Error?le.initialError=s.summary_data:le.initialData=s.summary_data,s.summary_columns&&(le.knownColumns=s.summary_columns));let pe,ae=!1;const Re=be.createReactive({callback:y=>{t(3,pe=y)},execFn:C},{id:"summary",...le});Re(Y,{noResolve:X,...le}),globalThis[Symbol.for("summary")]={get value(){return pe}};let _e={initialData:void 0,initialError:void 0},J=z`with pairs as (
    select
        a.session_name,
        a.position as pos_a,
        b.position as pos_b
    from f1.results a
    join f1.results b on b.session_key = a.session_key
    where a.year = ${r.season.value}
      and a.driver_id = '${r.driver_a.value}'
      and b.driver_id = '${r.driver_b.value}'
      and a.session_name in ('Qualifying', 'Race')
      and a.position is not null and b.position is not null
)
select
    session_name,
    count(*) filter (pos_a < pos_b) as driver_a_ahead,
    count(*) filter (pos_b < pos_a) as driver_b_ahead
from pairs
group by session_name
order by session_name`,Z=`with pairs as (
    select
        a.session_name,
        a.position as pos_a,
        b.position as pos_b
    from f1.results a
    join f1.results b on b.session_key = a.session_key
    where a.year = ${r.season.value}
      and a.driver_id = '${r.driver_a.value}'
      and b.driver_id = '${r.driver_b.value}'
      and a.session_name in ('Qualifying', 'Race')
      and a.position is not null and b.position is not null
)
select
    session_name,
    count(*) filter (pos_a < pos_b) as driver_a_ahead,
    count(*) filter (pos_b < pos_a) as driver_b_ahead
from pairs
group by session_name
order by session_name`;s.head_to_head_data&&(s.head_to_head_data instanceof Error?_e.initialError=s.head_to_head_data:_e.initialData=s.head_to_head_data,s.head_to_head_columns&&(_e.knownColumns=s.head_to_head_columns));let ue,te=!1;const De=be.createReactive({callback:y=>{t(4,ue=y)},execFn:C},{id:"head_to_head",..._e});De(Z,{noResolve:J,..._e}),globalThis[Symbol.for("head_to_head")]={get value(){return ue}};let ve={initialData:void 0,initialError:void 0},se=z`select
    (select driver_name from (select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end) limit 1)          as name_a,
    (select driver_name from (select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end) limit 1 offset 1) as name_b`,W=`select
    (select driver_name from (select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end) limit 1)          as name_a,
    (select driver_name from (select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end) limit 1 offset 1) as name_b`;s.h2h_labels_data&&(s.h2h_labels_data instanceof Error?ve.initialError=s.h2h_labels_data:ve.initialData=s.h2h_labels_data,s.h2h_labels_columns&&(ve.knownColumns=s.h2h_labels_columns));let M,A=!1;const j=be.createReactive({callback:y=>{t(5,M=y)},execFn:C},{id:"h2h_labels",...ve});j(W,{noResolve:se,...ve}),globalThis[Symbol.for("h2h_labels")]={get value(){return M}};let g={initialData:void 0,initialError:void 0},w=z`select round_number, short_name, driver_name, championship_points
from f1.driver_standings
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by round_number`,F=`select round_number, short_name, driver_name, championship_points
from f1.driver_standings
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by round_number`;s.points_data&&(s.points_data instanceof Error?g.initialError=s.points_data:g.initialData=s.points_data,s.points_columns&&(g.knownColumns=s.points_columns));let N,Q=!1;const i=be.createReactive({callback:y=>{t(6,N=y)},execFn:C},{id:"points",...g});i(F,{noResolve:w,...g}),globalThis[Symbol.for("points")]={get value(){return N}};let o={initialData:void 0,initialError:void 0},de=z`with clean as (
    select l.meeting_key, l.driver_id, median(l.lap_duration_s) as median_lap_s
    from f1.laps l
    where l.year = ${r.season.value}
      and l.session_name = 'Race'
      and l.is_clean_lap
      and l.driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
    group by all
)
select
    m.round_number,
    m.short_name,
    round(a.median_lap_s - b.median_lap_s, 3) as gap_s
from clean a
join clean b on b.meeting_key = a.meeting_key
join f1.meetings m on m.meeting_key = a.meeting_key
where a.driver_id = '${r.driver_a.value}'
  and b.driver_id = '${r.driver_b.value}'
order by m.round_number`,ce=`with clean as (
    select l.meeting_key, l.driver_id, median(l.lap_duration_s) as median_lap_s
    from f1.laps l
    where l.year = ${r.season.value}
      and l.session_name = 'Race'
      and l.is_clean_lap
      and l.driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
    group by all
)
select
    m.round_number,
    m.short_name,
    round(a.median_lap_s - b.median_lap_s, 3) as gap_s
from clean a
join clean b on b.meeting_key = a.meeting_key
join f1.meetings m on m.meeting_key = a.meeting_key
where a.driver_id = '${r.driver_a.value}'
  and b.driver_id = '${r.driver_b.value}'
order by m.round_number`;s.pace_data&&(s.pace_data instanceof Error?o.initialError=s.pace_data:o.initialData=s.pace_data,s.pace_columns&&(o.knownColumns=s.pace_columns));let Te,ge=!1;const we=be.createReactive({callback:y=>{t(7,Te=y)},execFn:C},{id:"pace",...o});return we(ce,{noResolve:de,...o}),globalThis[Symbol.for("pace")]={get value(){return Te}},_.$$set=y=>{"data"in y&&t(8,m=y.data)},_.$$.update=()=>{_.$$.dirty[0]&256&&t(9,{data:s={},customFormattingSettings:p,__db:E}=m,s),_.$$.dirty[0]&512&&ni.set(Object.keys(s).length>0),_.$$.dirty[1]&4096&&e.params,_.$$.dirty[0]&30720&&(I||!L?I||(O(U,{noResolve:I,...P}),t(14,L=!0)):O(U,{noResolve:I})),_.$$.dirty[0]&1024&&t(16,H=z`select driver_id, driver_name, championship_position
from f1.drivers
where year = ${r.season.value}
order by championship_position nulls last`),_.$$.dirty[0]&1024&&t(17,V=`select driver_id, driver_name, championship_position
from f1.drivers
where year = ${r.season.value}
order by championship_position nulls last`),_.$$.dirty[0]&491520&&(H||!b?H||(ie(V,{noResolve:H,...B}),t(18,b=!0)):ie(V,{noResolve:H})),_.$$.dirty[0]&1024&&t(20,oe=z`select * from (select driver_id, driver_name, championship_position
from f1.drivers
where year = ${r.season.value}
order by championship_position nulls last)
order by championship_position = 1, championship_position nulls last`),_.$$.dirty[0]&1024&&t(21,K=`select * from (select driver_id, driver_name, championship_position
from f1.drivers
where year = ${r.season.value}
order by championship_position nulls last)
order by championship_position = 1, championship_position nulls last`),_.$$.dirty[0]&7864320&&(oe||!re?oe||(qe(K,{noResolve:oe,...me}),t(22,re=!0)):qe(K,{noResolve:oe})),_.$$.dirty[0]&1024&&t(24,X=z`select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end`),_.$$.dirty[0]&1024&&t(25,Y=`select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end`),_.$$.dirty[0]&125829120&&(X||!ae?X||(Re(Y,{noResolve:X,...le}),t(26,ae=!0)):Re(Y,{noResolve:X})),_.$$.dirty[0]&1024&&t(28,J=z`with pairs as (
    select
        a.session_name,
        a.position as pos_a,
        b.position as pos_b
    from f1.results a
    join f1.results b on b.session_key = a.session_key
    where a.year = ${r.season.value}
      and a.driver_id = '${r.driver_a.value}'
      and b.driver_id = '${r.driver_b.value}'
      and a.session_name in ('Qualifying', 'Race')
      and a.position is not null and b.position is not null
)
select
    session_name,
    count(*) filter (pos_a < pos_b) as driver_a_ahead,
    count(*) filter (pos_b < pos_a) as driver_b_ahead
from pairs
group by session_name
order by session_name`),_.$$.dirty[0]&1024&&t(29,Z=`with pairs as (
    select
        a.session_name,
        a.position as pos_a,
        b.position as pos_b
    from f1.results a
    join f1.results b on b.session_key = a.session_key
    where a.year = ${r.season.value}
      and a.driver_id = '${r.driver_a.value}'
      and b.driver_id = '${r.driver_b.value}'
      and a.session_name in ('Qualifying', 'Race')
      and a.position is not null and b.position is not null
)
select
    session_name,
    count(*) filter (pos_a < pos_b) as driver_a_ahead,
    count(*) filter (pos_b < pos_a) as driver_b_ahead
from pairs
group by session_name
order by session_name`),_.$$.dirty[0]&2013265920&&(J||!te?J||(De(Z,{noResolve:J,..._e}),t(30,te=!0)):De(Z,{noResolve:J})),_.$$.dirty[0]&1024&&t(32,se=z`select
    (select driver_name from (select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end) limit 1)          as name_a,
    (select driver_name from (select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end) limit 1 offset 1) as name_b`),_.$$.dirty[0]&1024&&t(33,W=`select
    (select driver_name from (select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end) limit 1)          as name_a,
    (select driver_name from (select
    driver_name, team_name, championship_position, championship_points,
    wins, podiums, poles, avg_qualifying, avg_finish, dnfs
from f1.drivers
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by case driver_id when '${r.driver_a.value}' then 1 else 2 end) limit 1 offset 1) as name_b`),_.$$.dirty[1]&15&&(se||!A?se||(j(W,{noResolve:se,...ve}),t(34,A=!0)):j(W,{noResolve:se})),_.$$.dirty[0]&1024&&t(36,w=z`select round_number, short_name, driver_name, championship_points
from f1.driver_standings
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by round_number`),_.$$.dirty[0]&1024&&t(37,F=`select round_number, short_name, driver_name, championship_points
from f1.driver_standings
where year = ${r.season.value}
  and driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
order by round_number`),_.$$.dirty[1]&240&&(w||!Q?w||(i(F,{noResolve:w,...g}),t(38,Q=!0)):i(F,{noResolve:w})),_.$$.dirty[0]&1024&&t(40,de=z`with clean as (
    select l.meeting_key, l.driver_id, median(l.lap_duration_s) as median_lap_s
    from f1.laps l
    where l.year = ${r.season.value}
      and l.session_name = 'Race'
      and l.is_clean_lap
      and l.driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
    group by all
)
select
    m.round_number,
    m.short_name,
    round(a.median_lap_s - b.median_lap_s, 3) as gap_s
from clean a
join clean b on b.meeting_key = a.meeting_key
join f1.meetings m on m.meeting_key = a.meeting_key
where a.driver_id = '${r.driver_a.value}'
  and b.driver_id = '${r.driver_b.value}'
order by m.round_number`),_.$$.dirty[0]&1024&&t(41,ce=`with clean as (
    select l.meeting_key, l.driver_id, median(l.lap_duration_s) as median_lap_s
    from f1.laps l
    where l.year = ${r.season.value}
      and l.session_name = 'Race'
      and l.is_clean_lap
      and l.driver_id in ('${r.driver_a.value}', '${r.driver_b.value}')
    group by all
)
select
    m.round_number,
    m.short_name,
    round(a.median_lap_s - b.median_lap_s, 3) as gap_s
from clean a
join clean b on b.meeting_key = a.meeting_key
join f1.meetings m on m.meeting_key = a.meeting_key
where a.driver_id = '${r.driver_a.value}'
  and b.driver_id = '${r.driver_b.value}'
order by m.round_number`),_.$$.dirty[1]&3840&&(de||!ge?de||(we(ce,{noResolve:de,...o}),t(42,ge=!0)):we(ce,{noResolve:de}))},t(12,I=z`select distinct year from f1.drivers order by year desc`),t(13,U="select distinct year from f1.drivers order by year desc"),[G,l,fe,pe,ue,M,N,Te,m,s,r,P,I,U,L,B,H,V,b,me,oe,K,re,le,X,Y,ae,_e,J,Z,te,ve,se,W,A,g,w,F,Q,o,de,ce,ge,e]}class Ci extends ei{constructor(a){super(),ii(this,a,yi,bi,ze,{data:8},null,[-1,-1])}}export{Ci as component};
