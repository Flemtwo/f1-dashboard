import{s as sr,d,i as p,b as Ce,c as H,e as v,h as lr,f as J,g as He,x as Qe,k as h,l as Z,m as Ge,n as mr,o as _r,p as ur,q as fr,r as Re,j as dr,u as cr,v as pr}from"../chunks/scheduler.fW7yY31m.js";import{S as vr,i as hr,d as D,t as c,a as f,c as _e,m as F,b as S,e as I,g as ue}from"../chunks/index.DLlk0QKX.js";import{S as Be}from"../chunks/SortedLineChart.hDHjt0DN.js";import{D as br,a as yr,s as $r,Q as fe,p as gr,C as $e,b as Ve,r as We,c as wr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YyYGKAEJ.js";import{w as kr}from"../chunks/entry.DzP7nCf5.js";import{h as P,p as qr}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as Rr}from"../chunks/Dropdown.D2st2TDs.js";import{p as Tr}from"../chunks/stores.adFM5OC5.js";import{G as Er}from"../chunks/Grid.CtPFXHqb.js";import{Q as de}from"../chunks/QueryViewer.Bv4472B1.js";import{B as Ie}from"../chunks/BigValue.Bavyh20w.js";function Dr(a){let t,n=b.title+"",e;return{c(){t=Z("h1"),e=pr(n),this.h()},l(s){t=J(s,"H1",{class:!0});var l=dr(t);e=cr(l,n),l.forEach(d),this.h()},h(){H(t,"class","title")},m(s,l){p(s,t,l),Ce(t,e)},p:Re,d(s){s&&d(t)}}}function Fr(a){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:Re,p:Re,d:Re}}function Sr(a){let t,n,e,s,l;return document.title=t=b.title,{c(){n=h(),e=Z("meta"),s=h(),l=Z("meta"),this.h()},l(i){n=v(i),e=J(i,"META",{property:!0,content:!0}),s=v(i),l=J(i,"META",{name:!0,content:!0}),this.h()},h(){var i,u;H(e,"property","og:title"),H(e,"content",((i=b.og)==null?void 0:i.title)??b.title),H(l,"name","twitter:title"),H(l,"content",((u=b.og)==null?void 0:u.title)??b.title)},m(i,u){p(i,n,u),p(i,e,u),p(i,s,u),p(i,l,u)},p(i,u){u&0&&t!==(t=b.title)&&(document.title=t)},d(i){i&&(d(n),d(e),d(s),d(l))}}}function Ir(a){var l,i;let t,n,e=(b.description||((l=b.og)==null?void 0:l.description))&&Cr(),s=((i=b.og)==null?void 0:i.image)&&Hr();return{c(){e&&e.c(),t=h(),s&&s.c(),n=He()},l(u){e&&e.l(u),t=v(u),s&&s.l(u),n=He()},m(u,k){e&&e.m(u,k),p(u,t,k),s&&s.m(u,k),p(u,n,k)},p(u,k){var o,g;(b.description||(o=b.og)!=null&&o.description)&&e.p(u,k),(g=b.og)!=null&&g.image&&s.p(u,k)},d(u){u&&(d(t),d(n)),e&&e.d(u),s&&s.d(u)}}}function Cr(a){let t,n,e,s,l;return{c(){t=Z("meta"),n=h(),e=Z("meta"),s=h(),l=Z("meta"),this.h()},l(i){t=J(i,"META",{name:!0,content:!0}),n=v(i),e=J(i,"META",{property:!0,content:!0}),s=v(i),l=J(i,"META",{name:!0,content:!0}),this.h()},h(){var i,u,k;H(t,"name","description"),H(t,"content",b.description??((i=b.og)==null?void 0:i.description)),H(e,"property","og:description"),H(e,"content",((u=b.og)==null?void 0:u.description)??b.description),H(l,"name","twitter:description"),H(l,"content",((k=b.og)==null?void 0:k.description)??b.description)},m(i,u){p(i,t,u),p(i,n,u),p(i,e,u),p(i,s,u),p(i,l,u)},p:Re,d(i){i&&(d(t),d(n),d(e),d(s),d(l))}}}function Hr(a){let t,n,e;return{c(){t=Z("meta"),n=h(),e=Z("meta"),this.h()},l(s){t=J(s,"META",{property:!0,content:!0}),n=v(s),e=J(s,"META",{name:!0,content:!0}),this.h()},h(){var s,l;H(t,"property","og:image"),H(t,"content",Ve((s=b.og)==null?void 0:s.image)),H(e,"name","twitter:image"),H(e,"content",Ve((l=b.og)==null?void 0:l.image))},m(s,l){p(s,t,l),p(s,n,l),p(s,e,l)},p:Re,d(s){s&&(d(t),d(n),d(e))}}}function Ke(a){let t,n;return t=new de({props:{queryID:"seasons",queryResult:a[0]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){F(t,e,s),n=!0},p(e,s){const l={};s[0]&1&&(l.queryResult=e[0]),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function Xe(a){let t,n;return t=new de({props:{queryID:"progress",queryResult:a[1]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){F(t,e,s),n=!0},p(e,s){const l={};s[0]&2&&(l.queryResult=e[1]),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function Ye(a){let t,n;return t=new de({props:{queryID:"leader",queryResult:a[2]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){F(t,e,s),n=!0},p(e,s){const l={};s[0]&4&&(l.queryResult=e[2]),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function ze(a){let t,n;return t=new de({props:{queryID:"team_leader",queryResult:a[3]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){F(t,e,s),n=!0},p(e,s){const l={};s[0]&8&&(l.queryResult=e[3]),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function Mr(a){let t,n,e,s,l,i,u,k;return t=new Ie({props:{data:a[2],value:"driver_name",title:"Drivers' Leader"}}),e=new Ie({props:{data:a[3],value:"team_name",title:"Constructors' Leader"}}),l=new Ie({props:{data:a[1],value:"races_completed",title:"Races Completed"}}),u=new Ie({props:{data:a[1],value:"different_winners",title:"Different Winners"}}),{c(){I(t.$$.fragment),n=h(),I(e.$$.fragment),s=h(),I(l.$$.fragment),i=h(),I(u.$$.fragment)},l(o){S(t.$$.fragment,o),n=v(o),S(e.$$.fragment,o),s=v(o),S(l.$$.fragment,o),i=v(o),S(u.$$.fragment,o)},m(o,g){F(t,o,g),p(o,n,g),F(e,o,g),p(o,s,g),F(l,o,g),p(o,i,g),F(u,o,g),k=!0},p(o,g){const w={};g[0]&4&&(w.data=o[2]),t.$set(w);const M={};g[0]&8&&(M.data=o[3]),e.$set(M);const O={};g[0]&2&&(O.data=o[1]),l.$set(O);const x={};g[0]&2&&(x.data=o[1]),u.$set(x)},i(o){k||(f(t.$$.fragment,o),f(e.$$.fragment,o),f(l.$$.fragment,o),f(u.$$.fragment,o),k=!0)},o(o){c(t.$$.fragment,o),c(e.$$.fragment,o),c(l.$$.fragment,o),c(u.$$.fragment,o),k=!1},d(o){o&&(d(n),d(s),d(i)),D(t,o),D(e,o),D(l,o),D(u,o)}}}function Je(a){let t,n;return t=new de({props:{queryID:"top_drivers",queryResult:a[4]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){F(t,e,s),n=!0},p(e,s){const l={};s[0]&16&&(l.queryResult=e[4]),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function Ze(a){let t,n;return t=new de({props:{queryID:"driver_points",queryResult:a[5]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){F(t,e,s),n=!0},p(e,s){const l={};s[0]&32&&(l.queryResult=e[5]),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function er(a){let t,n;return t=new de({props:{queryID:"driver_colors",queryResult:a[6]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){F(t,e,s),n=!0},p(e,s){const l={};s[0]&64&&(l.queryResult=e[6]),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function rr(a){let t,n;return t=new de({props:{queryID:"team_points",queryResult:a[7]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){F(t,e,s),n=!0},p(e,s){const l={};s[0]&128&&(l.queryResult=e[7]),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function tr(a){let t,n;return t=new de({props:{queryID:"team_colors",queryResult:a[8]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){F(t,e,s),n=!0},p(e,s){const l={};s[0]&256&&(l.queryResult=e[8]),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function nr(a){let t,n;return t=new de({props:{queryID:"calendar",queryResult:a[9]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){F(t,e,s),n=!0},p(e,s){const l={};s[0]&512&&(l.queryResult=e[9]),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function Ar(a){let t,n,e,s,l,i,u,k,o,g,w,M,O,x,Q,W;return t=new $e({props:{id:"round_number",title:"Rd"}}),e=new $e({props:{id:"country_flag_url",title:" ",contentType:"image",height:"16px",width:"24px"}}),l=new $e({props:{id:"meeting_name",title:"Grand Prix"}}),u=new $e({props:{id:"race_date",title:"Date",fmt:"d mmm"}}),o=new $e({props:{id:"format",title:"Format"}}),w=new $e({props:{id:"pole",title:"Pole"}}),O=new $e({props:{id:"winner",title:"Winner"}}),Q=new $e({props:{id:"winner_team",title:"Team"}}),{c(){I(t.$$.fragment),n=h(),I(e.$$.fragment),s=h(),I(l.$$.fragment),i=h(),I(u.$$.fragment),k=h(),I(o.$$.fragment),g=h(),I(w.$$.fragment),M=h(),I(O.$$.fragment),x=h(),I(Q.$$.fragment)},l(_){S(t.$$.fragment,_),n=v(_),S(e.$$.fragment,_),s=v(_),S(l.$$.fragment,_),i=v(_),S(u.$$.fragment,_),k=v(_),S(o.$$.fragment,_),g=v(_),S(w.$$.fragment,_),M=v(_),S(O.$$.fragment,_),x=v(_),S(Q.$$.fragment,_)},m(_,y){F(t,_,y),p(_,n,y),F(e,_,y),p(_,s,y),F(l,_,y),p(_,i,y),F(u,_,y),p(_,k,y),F(o,_,y),p(_,g,y),F(w,_,y),p(_,M,y),F(O,_,y),p(_,x,y),F(Q,_,y),W=!0},p:Re,i(_){W||(f(t.$$.fragment,_),f(e.$$.fragment,_),f(l.$$.fragment,_),f(u.$$.fragment,_),f(o.$$.fragment,_),f(w.$$.fragment,_),f(O.$$.fragment,_),f(Q.$$.fragment,_),W=!0)},o(_){c(t.$$.fragment,_),c(e.$$.fragment,_),c(l.$$.fragment,_),c(u.$$.fragment,_),c(o.$$.fragment,_),c(w.$$.fragment,_),c(O.$$.fragment,_),c(Q.$$.fragment,_),W=!1},d(_){_&&(d(n),d(s),d(i),d(k),d(g),d(M),d(x)),D(t,_),D(e,_),D(l,_),D(u,_),D(o,_),D(w,_),D(O,_),D(Q,_)}}}function Ur(a){let t,n,e,s,l,i,u,k,o,g,w,M,O,x,Q='<a href="#drivers-championship">Drivers&#39; Championship</a>',W,_,y,G,B,ve,K,Te='<a href="#constructors-championship">Constructors&#39; Championship</a>',ee,V,re,te,he,X,me='<a href="#race-calendar">Race Calendar</a>',ne,ie,ae,be,Y=typeof b<"u"&&b.title&&b.hide_title!==!0&&Dr();function ce(r,m){return typeof b<"u"&&b.title?Sr:Fr}let oe=ce()(a),z=typeof b=="object"&&Ir(),A=a[0]&&Ke(a);u=new Rr({props:{name:"season",data:a[0],value:"year",title:"Season"}});let U=a[1]&&Xe(a),q=a[2]&&Ye(a),R=a[3]&&ze(a);M=new Er({props:{cols:"4",$$slots:{default:[Mr]},$$scope:{ctx:a}}});let C=a[4]&&Je(a),N=a[5]&&Ze(a),L=a[6]&&er(a);B=new Be({props:{data:a[5],tooltipSort:"desc",tooltipDecimals:"0",x:"round_number",y:"championship_points",series:"driver_name",seriesColors:Object.fromEntries([...a[6]].map(ir)),xAxisTitle:"Round",yAxisTitle:"Points",chartAreaHeight:"360",subtitle:"Top 10 drivers in the current standings. Line colour is team colour."}});let j=a[7]&&rr(a),T=a[8]&&tr(a);te=new Be({props:{data:a[7],tooltipSort:"desc",tooltipDecimals:"0",x:"round_number",y:"championship_points",series:"team_name",seriesColors:Object.fromEntries([...a[8]].map(ar)),xAxisTitle:"Round",yAxisTitle:"Points",chartAreaHeight:"320"}});let E=a[9]&&nr(a);return ae=new br({props:{data:a[9],rows:"all",link:"race_link",$$slots:{default:[Ar]},$$scope:{ctx:a}}}),{c(){Y&&Y.c(),t=h(),oe.c(),n=Z("meta"),e=Z("meta"),z&&z.c(),s=He(),l=h(),A&&A.c(),i=h(),I(u.$$.fragment),k=h(),U&&U.c(),o=h(),q&&q.c(),g=h(),R&&R.c(),w=h(),I(M.$$.fragment),O=h(),x=Z("h2"),x.innerHTML=Q,W=h(),C&&C.c(),_=h(),N&&N.c(),y=h(),L&&L.c(),G=h(),I(B.$$.fragment),ve=h(),K=Z("h2"),K.innerHTML=Te,ee=h(),j&&j.c(),V=h(),T&&T.c(),re=h(),I(te.$$.fragment),he=h(),X=Z("h2"),X.innerHTML=me,ne=h(),E&&E.c(),ie=h(),I(ae.$$.fragment),this.h()},l(r){Y&&Y.l(r),t=v(r);const m=lr("svelte-2igo1p",document.head);oe.l(m),n=J(m,"META",{name:!0,content:!0}),e=J(m,"META",{name:!0,content:!0}),z&&z.l(m),s=He(),m.forEach(d),l=v(r),A&&A.l(r),i=v(r),S(u.$$.fragment,r),k=v(r),U&&U.l(r),o=v(r),q&&q.l(r),g=v(r),R&&R.l(r),w=v(r),S(M.$$.fragment,r),O=v(r),x=J(r,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Qe(x)!=="svelte-15wliix"&&(x.innerHTML=Q),W=v(r),C&&C.l(r),_=v(r),N&&N.l(r),y=v(r),L&&L.l(r),G=v(r),S(B.$$.fragment,r),ve=v(r),K=J(r,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Qe(K)!=="svelte-1jkeo8r"&&(K.innerHTML=Te),ee=v(r),j&&j.l(r),V=v(r),T&&T.l(r),re=v(r),S(te.$$.fragment,r),he=v(r),X=J(r,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Qe(X)!=="svelte-n0mqr9"&&(X.innerHTML=me),ne=v(r),E&&E.l(r),ie=v(r),S(ae.$$.fragment,r),this.h()},h(){H(n,"name","twitter:card"),H(n,"content","summary_large_image"),H(e,"name","twitter:site"),H(e,"content","@evidence_dev"),H(x,"class","markdown"),H(x,"id","drivers-championship"),H(K,"class","markdown"),H(K,"id","constructors-championship"),H(X,"class","markdown"),H(X,"id","race-calendar")},m(r,m){Y&&Y.m(r,m),p(r,t,m),oe.m(document.head,null),Ce(document.head,n),Ce(document.head,e),z&&z.m(document.head,null),Ce(document.head,s),p(r,l,m),A&&A.m(r,m),p(r,i,m),F(u,r,m),p(r,k,m),U&&U.m(r,m),p(r,o,m),q&&q.m(r,m),p(r,g,m),R&&R.m(r,m),p(r,w,m),F(M,r,m),p(r,O,m),p(r,x,m),p(r,W,m),C&&C.m(r,m),p(r,_,m),N&&N.m(r,m),p(r,y,m),L&&L.m(r,m),p(r,G,m),F(B,r,m),p(r,ve,m),p(r,K,m),p(r,ee,m),j&&j.m(r,m),p(r,V,m),T&&T.m(r,m),p(r,re,m),F(te,r,m),p(r,he,m),p(r,X,m),p(r,ne,m),E&&E.m(r,m),p(r,ie,m),F(ae,r,m),be=!0},p(r,m){typeof b<"u"&&b.title&&b.hide_title!==!0&&Y.p(r,m),oe.p(r,m),typeof b=="object"&&z.p(r,m),r[0]?A?(A.p(r,m),m[0]&1&&f(A,1)):(A=Ke(r),A.c(),f(A,1),A.m(i.parentNode,i)):A&&(ue(),c(A,1,1,()=>{A=null}),_e());const Ee={};m[0]&1&&(Ee.data=r[0]),u.$set(Ee),r[1]?U?(U.p(r,m),m[0]&2&&f(U,1)):(U=Xe(r),U.c(),f(U,1),U.m(o.parentNode,o)):U&&(ue(),c(U,1,1,()=>{U=null}),_e()),r[2]?q?(q.p(r,m),m[0]&4&&f(q,1)):(q=Ye(r),q.c(),f(q,1),q.m(g.parentNode,g)):q&&(ue(),c(q,1,1,()=>{q=null}),_e()),r[3]?R?(R.p(r,m),m[0]&8&&f(R,1)):(R=ze(r),R.c(),f(R,1),R.m(w.parentNode,w)):R&&(ue(),c(R,1,1,()=>{R=null}),_e());const De={};m[0]&14|m[2]&1024&&(De.$$scope={dirty:m,ctx:r}),M.$set(De),r[4]?C?(C.p(r,m),m[0]&16&&f(C,1)):(C=Je(r),C.c(),f(C,1),C.m(_.parentNode,_)):C&&(ue(),c(C,1,1,()=>{C=null}),_e()),r[5]?N?(N.p(r,m),m[0]&32&&f(N,1)):(N=Ze(r),N.c(),f(N,1),N.m(y.parentNode,y)):N&&(ue(),c(N,1,1,()=>{N=null}),_e()),r[6]?L?(L.p(r,m),m[0]&64&&f(L,1)):(L=er(r),L.c(),f(L,1),L.m(G.parentNode,G)):L&&(ue(),c(L,1,1,()=>{L=null}),_e());const se={};m[0]&32&&(se.data=r[5]),m[0]&64&&(se.seriesColors=Object.fromEntries([...r[6]].map(ir))),B.$set(se),r[7]?j?(j.p(r,m),m[0]&128&&f(j,1)):(j=rr(r),j.c(),f(j,1),j.m(V.parentNode,V)):j&&(ue(),c(j,1,1,()=>{j=null}),_e()),r[8]?T?(T.p(r,m),m[0]&256&&f(T,1)):(T=tr(r),T.c(),f(T,1),T.m(re.parentNode,re)):T&&(ue(),c(T,1,1,()=>{T=null}),_e());const le={};m[0]&128&&(le.data=r[7]),m[0]&256&&(le.seriesColors=Object.fromEntries([...r[8]].map(ar))),te.$set(le),r[9]?E?(E.p(r,m),m[0]&512&&f(E,1)):(E=nr(r),E.c(),f(E,1),E.m(ie.parentNode,ie)):E&&(ue(),c(E,1,1,()=>{E=null}),_e());const pe={};m[0]&512&&(pe.data=r[9]),m[2]&1024&&(pe.$$scope={dirty:m,ctx:r}),ae.$set(pe)},i(r){be||(f(A),f(u.$$.fragment,r),f(U),f(q),f(R),f(M.$$.fragment,r),f(C),f(N),f(L),f(B.$$.fragment,r),f(j),f(T),f(te.$$.fragment,r),f(E),f(ae.$$.fragment,r),be=!0)},o(r){c(A),c(u.$$.fragment,r),c(U),c(q),c(R),c(M.$$.fragment,r),c(C),c(N),c(L),c(B.$$.fragment,r),c(j),c(T),c(te.$$.fragment,r),c(E),c(ae.$$.fragment,r),be=!1},d(r){r&&(d(t),d(l),d(i),d(k),d(o),d(g),d(w),d(O),d(x),d(W),d(_),d(y),d(G),d(ve),d(K),d(ee),d(V),d(re),d(he),d(X),d(ne),d(ie)),Y&&Y.d(r),oe.d(r),d(n),d(e),z&&z.d(r),d(s),A&&A.d(r),D(u,r),U&&U.d(r),q&&q.d(r),R&&R.d(r),D(M,r),C&&C.d(r),N&&N.d(r),L&&L.d(r),D(B,r),j&&j.d(r),T&&T.d(r),D(te,r),E&&E.d(r),D(ae,r)}}}const b={title:"F1 Season Overview"},ir=a=>[a.driver_name,[a.team_colour,a.team_colour]],ar=a=>[a.team_name,[a.team_colour,a.team_colour]];function Nr(a,t,n){let e,s;Ge(a,Tr,$=>n(53,e=$)),Ge(a,We,$=>n(58,s=$));let{data:l}=t,{data:i={},customFormattingSettings:u,__db:k,inputs:o}=l;mr(We,s="6666cd76f96956469e7be39d750cc7d9",s);let g=yr(kr(o));_r(g.subscribe($=>n(12,o=$))),ur(wr,{getCustomFormats:()=>u.customFormats||[]});const w=($,or)=>qr(k.query,$,{query_name:or});$r(w),e.params,fr(()=>!0);let M={initialData:void 0,initialError:void 0},O=P`select distinct year from f1.meetings where is_completed order by year desc`,x="select distinct year from f1.meetings where is_completed order by year desc";i.seasons_data&&(i.seasons_data instanceof Error?M.initialError=i.seasons_data:M.initialData=i.seasons_data,i.seasons_columns&&(M.knownColumns=i.seasons_columns));let Q,W=!1;const _=fe.createReactive({callback:$=>{n(0,Q=$)},execFn:w},{id:"seasons",...M});_(x,{noResolve:O,...M}),globalThis[Symbol.for("seasons")]={get value(){return Q}};let y={initialData:void 0,initialError:void 0},G=P`select
    count(*) filter (is_completed)  as races_completed,
    count(*)                        as races_total,
    count(distinct winner)          as different_winners,
    count(*) filter (is_sprint_weekend and is_completed) as sprints_completed
from f1.meetings
where year = ${o.season.value}`,B=`select
    count(*) filter (is_completed)  as races_completed,
    count(*)                        as races_total,
    count(distinct winner)          as different_winners,
    count(*) filter (is_sprint_weekend and is_completed) as sprints_completed
from f1.meetings
where year = ${o.season.value}`;i.progress_data&&(i.progress_data instanceof Error?y.initialError=i.progress_data:y.initialData=i.progress_data,i.progress_columns&&(y.knownColumns=i.progress_columns));let ve,K=!1;const Te=fe.createReactive({callback:$=>{n(1,ve=$)},execFn:w},{id:"progress",...y});Te(B,{noResolve:G,...y}),globalThis[Symbol.for("progress")]={get value(){return ve}};let ee={initialData:void 0,initialError:void 0},V=P`select driver_name, team_name, championship_points
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position = 1`,re=`select driver_name, team_name, championship_points
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position = 1`;i.leader_data&&(i.leader_data instanceof Error?ee.initialError=i.leader_data:ee.initialData=i.leader_data,i.leader_columns&&(ee.knownColumns=i.leader_columns));let te,he=!1;const X=fe.createReactive({callback:$=>{n(2,te=$)},execFn:w},{id:"leader",...ee});X(re,{noResolve:V,...ee}),globalThis[Symbol.for("leader")]={get value(){return te}};let me={initialData:void 0,initialError:void 0},ne=P`select team_name, championship_points
from f1.team_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position = 1`,ie=`select team_name, championship_points
from f1.team_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position = 1`;i.team_leader_data&&(i.team_leader_data instanceof Error?me.initialError=i.team_leader_data:me.initialData=i.team_leader_data,i.team_leader_columns&&(me.knownColumns=i.team_leader_columns));let ae,be=!1;const Y=fe.createReactive({callback:$=>{n(3,ae=$)},execFn:w},{id:"team_leader",...me});Y(ie,{noResolve:ne,...me}),globalThis[Symbol.for("team_leader")]={get value(){return ae}};let ce={initialData:void 0,initialError:void 0},ye=P`select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10`,oe=`select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10`;i.top_drivers_data&&(i.top_drivers_data instanceof Error?ce.initialError=i.top_drivers_data:ce.initialData=i.top_drivers_data,i.top_drivers_columns&&(ce.knownColumns=i.top_drivers_columns));let z,A=!1;const U=fe.createReactive({callback:$=>{n(4,z=$)},execFn:w},{id:"top_drivers",...ce});U(oe,{noResolve:ye,...ce}),globalThis[Symbol.for("top_drivers")]={get value(){return z}};let q={initialData:void 0,initialError:void 0},R=P`select round_number, short_name, driver_name, team_colour, championship_points
from f1.driver_standings
where year = ${o.season.value}
  and driver_id in (select driver_id from (select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10))
order by round_number, championship_position`,C=`select round_number, short_name, driver_name, team_colour, championship_points
from f1.driver_standings
where year = ${o.season.value}
  and driver_id in (select driver_id from (select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10))
order by round_number, championship_position`;i.driver_points_data&&(i.driver_points_data instanceof Error?q.initialError=i.driver_points_data:q.initialData=i.driver_points_data,i.driver_points_columns&&(q.knownColumns=i.driver_points_columns));let N,L=!1;const j=fe.createReactive({callback:$=>{n(5,N=$)},execFn:w},{id:"driver_points",...q});j(C,{noResolve:R,...q}),globalThis[Symbol.for("driver_points")]={get value(){return N}};let T={initialData:void 0,initialError:void 0},E=P`select driver_name, arg_max(team_colour, round_number) as team_colour
from (select round_number, short_name, driver_name, team_colour, championship_points
from f1.driver_standings
where year = ${o.season.value}
  and driver_id in (select driver_id from (select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10))
order by round_number, championship_position)
group by driver_name`,r=`select driver_name, arg_max(team_colour, round_number) as team_colour
from (select round_number, short_name, driver_name, team_colour, championship_points
from f1.driver_standings
where year = ${o.season.value}
  and driver_id in (select driver_id from (select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10))
order by round_number, championship_position)
group by driver_name`;i.driver_colors_data&&(i.driver_colors_data instanceof Error?T.initialError=i.driver_colors_data:T.initialData=i.driver_colors_data,i.driver_colors_columns&&(T.knownColumns=i.driver_colors_columns));let m,Ee=!1;const De=fe.createReactive({callback:$=>{n(6,m=$)},execFn:w},{id:"driver_colors",...T});De(r,{noResolve:E,...T}),globalThis[Symbol.for("driver_colors")]={get value(){return m}};let se={initialData:void 0,initialError:void 0},le=P`select round_number, short_name, team_name, team_colour, championship_points
from f1.team_standings
where year = ${o.season.value}
order by round_number, championship_position`,pe=`select round_number, short_name, team_name, team_colour, championship_points
from f1.team_standings
where year = ${o.season.value}
order by round_number, championship_position`;i.team_points_data&&(i.team_points_data instanceof Error?se.initialError=i.team_points_data:se.initialData=i.team_points_data,i.team_points_columns&&(se.knownColumns=i.team_points_columns));let Me,Ae=!1;const Ue=fe.createReactive({callback:$=>{n(7,Me=$)},execFn:w},{id:"team_points",...se});Ue(pe,{noResolve:le,...se}),globalThis[Symbol.for("team_points")]={get value(){return Me}};let ge={initialData:void 0,initialError:void 0},we=P`select team_name, arg_max(team_colour, round_number) as team_colour
from (select round_number, short_name, team_name, team_colour, championship_points
from f1.team_standings
where year = ${o.season.value}
order by round_number, championship_position)
group by team_name`,Fe=`select team_name, arg_max(team_colour, round_number) as team_colour
from (select round_number, short_name, team_name, team_colour, championship_points
from f1.team_standings
where year = ${o.season.value}
order by round_number, championship_position)
group by team_name`;i.team_colors_data&&(i.team_colors_data instanceof Error?ge.initialError=i.team_colors_data:ge.initialData=i.team_colors_data,i.team_colors_columns&&(ge.knownColumns=i.team_colors_columns));let Ne,Le=!1;const je=fe.createReactive({callback:$=>{n(8,Ne=$)},execFn:w},{id:"team_colors",...ge});je(Fe,{noResolve:we,...ge}),globalThis[Symbol.for("team_colors")]={get value(){return Ne}};let ke={initialData:void 0,initialError:void 0},qe=P`select
    round_number,
    country_flag_url,
    meeting_name,
    race_date,
    case when is_sprint_weekend then 'Sprint' else '' end as format,
    coalesce(pole_sitter, '-')  as pole,
    coalesce(winner, case when is_completed then '-' else 'Upcoming' end) as winner,
    winner_team,
    race_link
from f1.meetings
where year = ${o.season.value}
order by round_number`,Se=`select
    round_number,
    country_flag_url,
    meeting_name,
    race_date,
    case when is_sprint_weekend then 'Sprint' else '' end as format,
    coalesce(pole_sitter, '-')  as pole,
    coalesce(winner, case when is_completed then '-' else 'Upcoming' end) as winner,
    winner_team,
    race_link
from f1.meetings
where year = ${o.season.value}
order by round_number`;i.calendar_data&&(i.calendar_data instanceof Error?ke.initialError=i.calendar_data:ke.initialData=i.calendar_data,i.calendar_columns&&(ke.knownColumns=i.calendar_columns));let Oe,xe=!1;const Pe=fe.createReactive({callback:$=>{n(9,Oe=$)},execFn:w},{id:"calendar",...ke});return Pe(Se,{noResolve:qe,...ke}),globalThis[Symbol.for("calendar")]={get value(){return Oe}},a.$$set=$=>{"data"in $&&n(10,l=$.data)},a.$$.update=()=>{a.$$.dirty[0]&1024&&n(11,{data:i={},customFormattingSettings:u,__db:k}=l,i),a.$$.dirty[0]&2048&&gr.set(Object.keys(i).length>0),a.$$.dirty[1]&4194304&&e.params,a.$$.dirty[0]&122880&&(O||!W?O||(_(x,{noResolve:O,...M}),n(16,W=!0)):_(x,{noResolve:O})),a.$$.dirty[0]&4096&&n(18,G=P`select
    count(*) filter (is_completed)  as races_completed,
    count(*)                        as races_total,
    count(distinct winner)          as different_winners,
    count(*) filter (is_sprint_weekend and is_completed) as sprints_completed
from f1.meetings
where year = ${o.season.value}`),a.$$.dirty[0]&4096&&n(19,B=`select
    count(*) filter (is_completed)  as races_completed,
    count(*)                        as races_total,
    count(distinct winner)          as different_winners,
    count(*) filter (is_sprint_weekend and is_completed) as sprints_completed
from f1.meetings
where year = ${o.season.value}`),a.$$.dirty[0]&1966080&&(G||!K?G||(Te(B,{noResolve:G,...y}),n(20,K=!0)):Te(B,{noResolve:G})),a.$$.dirty[0]&4096&&n(22,V=P`select driver_name, team_name, championship_points
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position = 1`),a.$$.dirty[0]&4096&&n(23,re=`select driver_name, team_name, championship_points
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position = 1`),a.$$.dirty[0]&31457280&&(V||!he?V||(X(re,{noResolve:V,...ee}),n(24,he=!0)):X(re,{noResolve:V})),a.$$.dirty[0]&4096&&n(26,ne=P`select team_name, championship_points
from f1.team_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position = 1`),a.$$.dirty[0]&4096&&n(27,ie=`select team_name, championship_points
from f1.team_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position = 1`),a.$$.dirty[0]&503316480&&(ne||!be?ne||(Y(ie,{noResolve:ne,...me}),n(28,be=!0)):Y(ie,{noResolve:ne})),a.$$.dirty[0]&4096&&n(30,ye=P`select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10`),a.$$.dirty[0]&4096&&n(31,oe=`select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10`),a.$$.dirty[0]&1610612736|a.$$.dirty[1]&3&&(ye||!A?ye||(U(oe,{noResolve:ye,...ce}),n(32,A=!0)):U(oe,{noResolve:ye})),a.$$.dirty[0]&4096&&n(34,R=P`select round_number, short_name, driver_name, team_colour, championship_points
from f1.driver_standings
where year = ${o.season.value}
  and driver_id in (select driver_id from (select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10))
order by round_number, championship_position`),a.$$.dirty[0]&4096&&n(35,C=`select round_number, short_name, driver_name, team_colour, championship_points
from f1.driver_standings
where year = ${o.season.value}
  and driver_id in (select driver_id from (select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10))
order by round_number, championship_position`),a.$$.dirty[1]&60&&(R||!L?R||(j(C,{noResolve:R,...q}),n(36,L=!0)):j(C,{noResolve:R})),a.$$.dirty[0]&4096&&n(38,E=P`select driver_name, arg_max(team_colour, round_number) as team_colour
from (select round_number, short_name, driver_name, team_colour, championship_points
from f1.driver_standings
where year = ${o.season.value}
  and driver_id in (select driver_id from (select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10))
order by round_number, championship_position)
group by driver_name`),a.$$.dirty[0]&4096&&n(39,r=`select driver_name, arg_max(team_colour, round_number) as team_colour
from (select round_number, short_name, driver_name, team_colour, championship_points
from f1.driver_standings
where year = ${o.season.value}
  and driver_id in (select driver_id from (select driver_id
from f1.driver_standings
where year = ${o.season.value}
qualify round_number = max(round_number) over () and championship_position <= 10))
order by round_number, championship_position)
group by driver_name`),a.$$.dirty[1]&960&&(E||!Ee?E||(De(r,{noResolve:E,...T}),n(40,Ee=!0)):De(r,{noResolve:E})),a.$$.dirty[0]&4096&&n(42,le=P`select round_number, short_name, team_name, team_colour, championship_points
from f1.team_standings
where year = ${o.season.value}
order by round_number, championship_position`),a.$$.dirty[0]&4096&&n(43,pe=`select round_number, short_name, team_name, team_colour, championship_points
from f1.team_standings
where year = ${o.season.value}
order by round_number, championship_position`),a.$$.dirty[1]&15360&&(le||!Ae?le||(Ue(pe,{noResolve:le,...se}),n(44,Ae=!0)):Ue(pe,{noResolve:le})),a.$$.dirty[0]&4096&&n(46,we=P`select team_name, arg_max(team_colour, round_number) as team_colour
from (select round_number, short_name, team_name, team_colour, championship_points
from f1.team_standings
where year = ${o.season.value}
order by round_number, championship_position)
group by team_name`),a.$$.dirty[0]&4096&&n(47,Fe=`select team_name, arg_max(team_colour, round_number) as team_colour
from (select round_number, short_name, team_name, team_colour, championship_points
from f1.team_standings
where year = ${o.season.value}
order by round_number, championship_position)
group by team_name`),a.$$.dirty[1]&245760&&(we||!Le?we||(je(Fe,{noResolve:we,...ge}),n(48,Le=!0)):je(Fe,{noResolve:we})),a.$$.dirty[0]&4096&&n(50,qe=P`select
    round_number,
    country_flag_url,
    meeting_name,
    race_date,
    case when is_sprint_weekend then 'Sprint' else '' end as format,
    coalesce(pole_sitter, '-')  as pole,
    coalesce(winner, case when is_completed then '-' else 'Upcoming' end) as winner,
    winner_team,
    race_link
from f1.meetings
where year = ${o.season.value}
order by round_number`),a.$$.dirty[0]&4096&&n(51,Se=`select
    round_number,
    country_flag_url,
    meeting_name,
    race_date,
    case when is_sprint_weekend then 'Sprint' else '' end as format,
    coalesce(pole_sitter, '-')  as pole,
    coalesce(winner, case when is_completed then '-' else 'Upcoming' end) as winner,
    winner_team,
    race_link
from f1.meetings
where year = ${o.season.value}
order by round_number`),a.$$.dirty[1]&3932160&&(qe||!xe?qe||(Pe(Se,{noResolve:qe,...ke}),n(52,xe=!0)):Pe(Se,{noResolve:qe}))},n(14,O=P`select distinct year from f1.meetings where is_completed order by year desc`),n(15,x="select distinct year from f1.meetings where is_completed order by year desc"),[Q,ve,te,ae,z,N,m,Me,Ne,Oe,l,i,o,M,O,x,W,y,G,B,K,ee,V,re,he,me,ne,ie,be,ce,ye,oe,A,q,R,C,L,T,E,r,Ee,se,le,pe,Ae,ge,we,Fe,Le,ke,qe,Se,xe,e]}class Xr extends vr{constructor(t){super(),hr(this,t,Nr,Ur,sr,{data:10},null,[-1,-1,-1])}}export{Xr as component};
