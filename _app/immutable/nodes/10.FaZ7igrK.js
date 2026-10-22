import{s as pe,d as _,a as de,i as p,b as Y,c as R,e as w,h as ce,f as G,g as z,j as x,k,l as B,m as te,n as ve,o as $e,p as ge,q as he,r as W,t as ye,u as me,v as _e}from"../chunks/scheduler.fW7yY31m.js";import{S as be,i as we,d as C,t as E,a as h,c as J,m as H,b as N,e as Q,g as L}from"../chunks/index.DLlk0QKX.js";import{D as ke,e as ie,a as Te,s as Ee,Q as Z,p as qe,C as O,b as re,r as se,c as Re}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YyYGKAEJ.js";import{w as De}from"../chunks/entry.DzP7nCf5.js";import{h as X,p as Fe}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as Ae}from"../chunks/Dropdown.D2st2TDs.js";import{p as Se}from"../chunks/stores.adFM5OC5.js";import{Q as ee}from"../chunks/QueryViewer.Bv4472B1.js";function ne(m,r,n){const t=m.slice();return t[30]=r[n],t}function Ie(m){let r,n=v.title+"",t;return{c(){r=B("h1"),t=_e(n),this.h()},l(a){r=G(a,"H1",{class:!0});var l=x(r);t=me(l,n),l.forEach(_),this.h()},h(){R(r,"class","title")},m(a,l){p(a,r,l),Y(r,t)},p:W,d(a){a&&_(r)}}}function Me(m){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:W,p:W,d:W}}function Ce(m){let r,n,t,a,l;return document.title=r=v.title,{c(){n=k(),t=B("meta"),a=k(),l=B("meta"),this.h()},l(s){n=w(s),t=G(s,"META",{property:!0,content:!0}),a=w(s),l=G(s,"META",{name:!0,content:!0}),this.h()},h(){var s,o;R(t,"property","og:title"),R(t,"content",((s=v.og)==null?void 0:s.title)??v.title),R(l,"name","twitter:title"),R(l,"content",((o=v.og)==null?void 0:o.title)??v.title)},m(s,o){p(s,n,o),p(s,t,o),p(s,a,o),p(s,l,o)},p(s,o){o&0&&r!==(r=v.title)&&(document.title=r)},d(s){s&&(_(n),_(t),_(a),_(l))}}}function He(m){var l,s;let r,n,t=(v.description||((l=v.og)==null?void 0:l.description))&&Ne(),a=((s=v.og)==null?void 0:s.image)&&Qe();return{c(){t&&t.c(),r=k(),a&&a.c(),n=z()},l(o){t&&t.l(o),r=w(o),a&&a.l(o),n=z()},m(o,q){t&&t.m(o,q),p(o,r,q),a&&a.m(o,q),p(o,n,q)},p(o,q){var y,S;(v.description||(y=v.og)!=null&&y.description)&&t.p(o,q),(S=v.og)!=null&&S.image&&a.p(o,q)},d(o){o&&(_(r),_(n)),t&&t.d(o),a&&a.d(o)}}}function Ne(m){let r,n,t,a,l;return{c(){r=B("meta"),n=k(),t=B("meta"),a=k(),l=B("meta"),this.h()},l(s){r=G(s,"META",{name:!0,content:!0}),n=w(s),t=G(s,"META",{property:!0,content:!0}),a=w(s),l=G(s,"META",{name:!0,content:!0}),this.h()},h(){var s,o,q;R(r,"name","description"),R(r,"content",v.description??((s=v.og)==null?void 0:s.description)),R(t,"property","og:description"),R(t,"content",((o=v.og)==null?void 0:o.description)??v.description),R(l,"name","twitter:description"),R(l,"content",((q=v.og)==null?void 0:q.description)??v.description)},m(s,o){p(s,r,o),p(s,n,o),p(s,t,o),p(s,a,o),p(s,l,o)},p:W,d(s){s&&(_(r),_(n),_(t),_(a),_(l))}}}function Qe(m){let r,n,t;return{c(){r=B("meta"),n=k(),t=B("meta"),this.h()},l(a){r=G(a,"META",{property:!0,content:!0}),n=w(a),t=G(a,"META",{name:!0,content:!0}),this.h()},h(){var a,l;R(r,"property","og:image"),R(r,"content",re((a=v.og)==null?void 0:a.image)),R(t,"name","twitter:image"),R(t,"content",re((l=v.og)==null?void 0:l.image))},m(a,l){p(a,r,l),p(a,n,l),p(a,t,l)},p:W,d(a){a&&(_(r),_(n),_(t))}}}function ae(m){let r,n;return r=new ee({props:{queryID:"seasons",queryResult:m[0]}}),{c(){Q(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,a){H(r,t,a),n=!0},p(t,a){const l={};a[0]&1&&(l.queryResult=t[0]),r.$set(l)},i(t){n||(h(r.$$.fragment,t),n=!0)},o(t){E(r.$$.fragment,t),n=!1},d(t){C(r,t)}}}function le(m){let r,n;return r=new ee({props:{queryID:"drivers",queryResult:m[1]}}),{c(){Q(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,a){H(r,t,a),n=!0},p(t,a){const l={};a[0]&2&&(l.queryResult=t[1]),r.$set(l)},i(t){n||(h(r.$$.fragment,t),n=!0)},o(t){E(r.$$.fragment,t),n=!1},d(t){C(r,t)}}}function Pe(m){let r,n,t,a,l,s,o,q,y,S,P,F,T,j,D,K,V,I,b,c,d,g,M,$,i,f;return r=new O({props:{id:"championship_position",title:"Pos"}}),t=new O({props:{id:"headshot_url",title:" ",contentType:"image",height:"32px"}}),l=new O({props:{id:"driver_name",title:"Driver"}}),o=new O({props:{id:"team_name",title:"Team"}}),y=new O({props:{id:"championship_points",title:"Points",contentType:"bar"}}),P=new O({props:{id:"wins",title:"Wins"}}),T=new O({props:{id:"podiums",title:"Podiums"}}),D=new O({props:{id:"poles",title:"Poles"}}),V=new O({props:{id:"starts",title:"Starts"}}),b=new O({props:{id:"avg_qualifying",title:"Avg Quali",fmt:"0.0"}}),d=new O({props:{id:"avg_finish",title:"Avg Finish",fmt:"0.0"}}),M=new O({props:{id:"avg_positions_gained",title:"Avg +/-",fmt:"0.0",contentType:"delta"}}),i=new O({props:{id:"dnfs",title:"DNFs"}}),{c(){Q(r.$$.fragment),n=k(),Q(t.$$.fragment),a=k(),Q(l.$$.fragment),s=k(),Q(o.$$.fragment),q=k(),Q(y.$$.fragment),S=k(),Q(P.$$.fragment),F=k(),Q(T.$$.fragment),j=k(),Q(D.$$.fragment),K=k(),Q(V.$$.fragment),I=k(),Q(b.$$.fragment),c=k(),Q(d.$$.fragment),g=k(),Q(M.$$.fragment),$=k(),Q(i.$$.fragment)},l(e){N(r.$$.fragment,e),n=w(e),N(t.$$.fragment,e),a=w(e),N(l.$$.fragment,e),s=w(e),N(o.$$.fragment,e),q=w(e),N(y.$$.fragment,e),S=w(e),N(P.$$.fragment,e),F=w(e),N(T.$$.fragment,e),j=w(e),N(D.$$.fragment,e),K=w(e),N(V.$$.fragment,e),I=w(e),N(b.$$.fragment,e),c=w(e),N(d.$$.fragment,e),g=w(e),N(M.$$.fragment,e),$=w(e),N(i.$$.fragment,e)},m(e,u){H(r,e,u),p(e,n,u),H(t,e,u),p(e,a,u),H(l,e,u),p(e,s,u),H(o,e,u),p(e,q,u),H(y,e,u),p(e,S,u),H(P,e,u),p(e,F,u),H(T,e,u),p(e,j,u),H(D,e,u),p(e,K,u),H(V,e,u),p(e,I,u),H(b,e,u),p(e,c,u),H(d,e,u),p(e,g,u),H(M,e,u),p(e,$,u),H(i,e,u),f=!0},p:W,i(e){f||(h(r.$$.fragment,e),h(t.$$.fragment,e),h(l.$$.fragment,e),h(o.$$.fragment,e),h(y.$$.fragment,e),h(P.$$.fragment,e),h(T.$$.fragment,e),h(D.$$.fragment,e),h(V.$$.fragment,e),h(b.$$.fragment,e),h(d.$$.fragment,e),h(M.$$.fragment,e),h(i.$$.fragment,e),f=!0)},o(e){E(r.$$.fragment,e),E(t.$$.fragment,e),E(l.$$.fragment,e),E(o.$$.fragment,e),E(y.$$.fragment,e),E(P.$$.fragment,e),E(T.$$.fragment,e),E(D.$$.fragment,e),E(V.$$.fragment,e),E(b.$$.fragment,e),E(d.$$.fragment,e),E(M.$$.fragment,e),E(i.$$.fragment,e),f=!1},d(e){e&&(_(n),_(a),_(s),_(q),_(S),_(F),_(j),_(K),_(I),_(c),_(g),_($)),C(r,e),C(t,e),C(l,e),C(o,e),C(y,e),C(P,e),C(T,e),C(D,e),C(V,e),C(b,e),C(d,e),C(M,e),C(i,e)}}}function oe(m){let r,n;return r=new ee({props:{queryID:"all_drivers",queryResult:m[2]}}),{c(){Q(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,a){H(r,t,a),n=!0},p(t,a){const l={};a[0]&4&&(l.queryResult=t[2]),r.$set(l)},i(t){n||(h(r.$$.fragment,t),n=!0)},o(t){E(r.$$.fragment,t),n=!1},d(t){C(r,t)}}}function fe(m){let r,n=m[30].driver_name+"",t,a;return{c(){r=B("a"),t=_e(n),this.h()},l(l){r=G(l,"A",{href:!0});var s=x(r);t=me(s,n),s.forEach(_),this.h()},h(){R(r,"href",a=m[30].driver_link)},m(l,s){p(l,r,s),Y(r,t)},p(l,s){s[0]&4&&n!==(n=l[30].driver_name+"")&&ye(t,n),s[0]&4&&a!==(a=l[30].driver_link)&&R(r,"href",a)},d(l){l&&_(r)}}}function Ue(m){let r,n,t,a,l,s,o,q,y,S,P,F,T,j,D=typeof v<"u"&&v.title&&v.hide_title!==!0&&Ie();function K(i,f){return typeof v<"u"&&v.title?Ce:Me}let I=K()(m),b=typeof v=="object"&&He(),c=m[0]&&ae(m);o=new Ae({props:{name:"season",data:m[0],value:"year",title:"Season"}});let d=m[1]&&le(m);S=new ke({props:{data:m[1],rows:"all",link:"driver_link",$$slots:{default:[Pe]},$$scope:{ctx:m}}});let g=m[2]&&oe(m),M=ie(m[2]),$=[];for(let i=0;i<M.length;i+=1)$[i]=fe(ne(m,M,i));return{c(){D&&D.c(),r=k(),I.c(),n=B("meta"),t=B("meta"),b&&b.c(),a=z(),l=k(),c&&c.c(),s=k(),Q(o.$$.fragment),q=k(),d&&d.c(),y=k(),Q(S.$$.fragment),P=k(),g&&g.c(),F=k(),T=B("div");for(let i=0;i<$.length;i+=1)$[i].c();this.h()},l(i){D&&D.l(i),r=w(i);const f=ce("svelte-2igo1p",document.head);I.l(f),n=G(f,"META",{name:!0,content:!0}),t=G(f,"META",{name:!0,content:!0}),b&&b.l(f),a=z(),f.forEach(_),l=w(i),c&&c.l(i),s=w(i),N(o.$$.fragment,i),q=w(i),d&&d.l(i),y=w(i),N(S.$$.fragment,i),P=w(i),g&&g.l(i),F=w(i),T=G(i,"DIV",{class:!0});var e=x(T);for(let u=0;u<$.length;u+=1)$[u].l(e);e.forEach(_),this.h()},h(){R(n,"name","twitter:card"),R(n,"content","summary_large_image"),R(t,"name","twitter:site"),R(t,"content","@evidence_dev"),R(T,"class","hidden")},m(i,f){D&&D.m(i,f),p(i,r,f),I.m(document.head,null),Y(document.head,n),Y(document.head,t),b&&b.m(document.head,null),Y(document.head,a),p(i,l,f),c&&c.m(i,f),p(i,s,f),H(o,i,f),p(i,q,f),d&&d.m(i,f),p(i,y,f),H(S,i,f),p(i,P,f),g&&g.m(i,f),p(i,F,f),p(i,T,f);for(let e=0;e<$.length;e+=1)$[e]&&$[e].m(T,null);j=!0},p(i,f){typeof v<"u"&&v.title&&v.hide_title!==!0&&D.p(i,f),I.p(i,f),typeof v=="object"&&b.p(i,f),i[0]?c?(c.p(i,f),f[0]&1&&h(c,1)):(c=ae(i),c.c(),h(c,1),c.m(s.parentNode,s)):c&&(L(),E(c,1,1,()=>{c=null}),J());const e={};f[0]&1&&(e.data=i[0]),o.$set(e),i[1]?d?(d.p(i,f),f[0]&2&&h(d,1)):(d=le(i),d.c(),h(d,1),d.m(y.parentNode,y)):d&&(L(),E(d,1,1,()=>{d=null}),J());const u={};if(f[0]&2&&(u.data=i[1]),f[1]&4&&(u.$$scope={dirty:f,ctx:i}),S.$set(u),i[2]?g?(g.p(i,f),f[0]&4&&h(g,1)):(g=oe(i),g.c(),h(g,1),g.m(F.parentNode,F)):g&&(L(),E(g,1,1,()=>{g=null}),J()),f[0]&4){M=ie(i[2]);let U;for(U=0;U<M.length;U+=1){const A=ne(i,M,U);$[U]?$[U].p(A,f):($[U]=fe(A),$[U].c(),$[U].m(T,null))}for(;U<$.length;U+=1)$[U].d(1);$.length=M.length}},i(i){j||(h(c),h(o.$$.fragment,i),h(d),h(S.$$.fragment,i),h(g),j=!0)},o(i){E(c),E(o.$$.fragment,i),E(d),E(S.$$.fragment,i),E(g),j=!1},d(i){i&&(_(r),_(l),_(s),_(q),_(y),_(P),_(F),_(T)),D&&D.d(i),I.d(i),_(n),_(t),b&&b.d(i),_(a),c&&c.d(i),C(o,i),d&&d.d(i),C(S,i),g&&g.d(i),de($,i)}}}const v={title:"Drivers"};function je(m,r,n){let t,a;te(m,Se,A=>n(18,t=A)),te(m,se,A=>n(23,a=A));let{data:l}=r,{data:s={},customFormattingSettings:o,__db:q,inputs:y}=l;ve(se,a="00e03afc6c0d21d55d15ab5a837774c2",a);let S=Te(De(y));$e(S.subscribe(A=>n(5,y=A))),ge(Re,{getCustomFormats:()=>o.customFormats||[]});const P=(A,ue)=>Fe(q.query,A,{query_name:ue});Ee(P),t.params,he(()=>!0);let F={initialData:void 0,initialError:void 0},T=X`select distinct year from f1.drivers order by year desc`,j="select distinct year from f1.drivers order by year desc";s.seasons_data&&(s.seasons_data instanceof Error?F.initialError=s.seasons_data:F.initialData=s.seasons_data,s.seasons_columns&&(F.knownColumns=s.seasons_columns));let D,K=!1;const V=Z.createReactive({callback:A=>{n(0,D=A)},execFn:P},{id:"seasons",...F});V(j,{noResolve:T,...F}),globalThis[Symbol.for("seasons")]={get value(){return D}};let I={initialData:void 0,initialError:void 0},b=X`select
    championship_position,
    headshot_url,
    driver_name,
    team_name,
    championship_points,
    wins,
    podiums,
    poles,
    starts,
    avg_qualifying,
    avg_finish,
    avg_positions_gained,
    dnfs,
    driver_link
from f1.drivers
where year = ${y.season.value}
order by championship_position nulls last, championship_points desc`,c=`select
    championship_position,
    headshot_url,
    driver_name,
    team_name,
    championship_points,
    wins,
    podiums,
    poles,
    starts,
    avg_qualifying,
    avg_finish,
    avg_positions_gained,
    dnfs,
    driver_link
from f1.drivers
where year = ${y.season.value}
order by championship_position nulls last, championship_points desc`;s.drivers_data&&(s.drivers_data instanceof Error?I.initialError=s.drivers_data:I.initialData=s.drivers_data,s.drivers_columns&&(I.knownColumns=s.drivers_columns));let d,g=!1;const M=Z.createReactive({callback:A=>{n(1,d=A)},execFn:P},{id:"drivers",...I});M(c,{noResolve:b,...I}),globalThis[Symbol.for("drivers")]={get value(){return d}};let $={initialData:void 0,initialError:void 0},i=X`select distinct driver_id, driver_name, driver_link from f1.drivers order by driver_name`,f="select distinct driver_id, driver_name, driver_link from f1.drivers order by driver_name";s.all_drivers_data&&(s.all_drivers_data instanceof Error?$.initialError=s.all_drivers_data:$.initialData=s.all_drivers_data,s.all_drivers_columns&&($.knownColumns=s.all_drivers_columns));let e,u=!1;const U=Z.createReactive({callback:A=>{n(2,e=A)},execFn:P},{id:"all_drivers",...$});return U(f,{noResolve:i,...$}),globalThis[Symbol.for("all_drivers")]={get value(){return e}},m.$$set=A=>{"data"in A&&n(3,l=A.data)},m.$$.update=()=>{m.$$.dirty[0]&8&&n(4,{data:s={},customFormattingSettings:o,__db:q}=l,s),m.$$.dirty[0]&16&&qe.set(Object.keys(s).length>0),m.$$.dirty[0]&262144&&t.params,m.$$.dirty[0]&960&&(T||!K?T||(V(j,{noResolve:T,...F}),n(9,K=!0)):V(j,{noResolve:T})),m.$$.dirty[0]&32&&n(11,b=X`select
    championship_position,
    headshot_url,
    driver_name,
    team_name,
    championship_points,
    wins,
    podiums,
    poles,
    starts,
    avg_qualifying,
    avg_finish,
    avg_positions_gained,
    dnfs,
    driver_link
from f1.drivers
where year = ${y.season.value}
order by championship_position nulls last, championship_points desc`),m.$$.dirty[0]&32&&n(12,c=`select
    championship_position,
    headshot_url,
    driver_name,
    team_name,
    championship_points,
    wins,
    podiums,
    poles,
    starts,
    avg_qualifying,
    avg_finish,
    avg_positions_gained,
    dnfs,
    driver_link
from f1.drivers
where year = ${y.season.value}
order by championship_position nulls last, championship_points desc`),m.$$.dirty[0]&15360&&(b||!g?b||(M(c,{noResolve:b,...I}),n(13,g=!0)):M(c,{noResolve:b})),m.$$.dirty[0]&245760&&(i||!u?i||(U(f,{noResolve:i,...$}),n(17,u=!0)):U(f,{noResolve:i}))},n(7,T=X`select distinct year from f1.drivers order by year desc`),n(8,j="select distinct year from f1.drivers order by year desc"),n(15,i=X`select distinct driver_id, driver_name, driver_link from f1.drivers order by driver_name`),n(16,f="select distinct driver_id, driver_name, driver_link from f1.drivers order by driver_name"),[D,d,e,l,s,y,F,T,j,K,I,b,c,g,$,i,f,u,t]}class ze extends be{constructor(r){super(),we(this,r,je,Ue,pe,{data:3},null,[-1,-1])}}export{ze as component};
