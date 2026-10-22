import{s as N,d as o,i as u,b as Q,c as w,e as h,h as B,f as R,g as H,x as V,k,l as D,m as O,n as K,o as X,p as Y,q as z,r as I,j as J,u as L,v as Z}from"../chunks/scheduler.fW7yY31m.js";import{S as ee,i as te,d as M,t as C,a as x,c as ne,m as q,b as A,e as F,g as re}from"../chunks/index.DLlk0QKX.js";import{D as ie,a as ae,s as se,Q as me,p as le,C as U,b as P,r as W,c as oe}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.YyYGKAEJ.js";import{w as ce}from"../chunks/entry.DzP7nCf5.js";import{h as j,p as fe}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as ue}from"../chunks/stores.adFM5OC5.js";import{Q as _e}from"../chunks/QueryViewer.Bv4472B1.js";function pe(_){let r,m=f.title+"",t;return{c(){r=D("h1"),t=Z(m),this.h()},l(i){r=R(i,"H1",{class:!0});var s=J(r);t=L(s,m),s.forEach(o),this.h()},h(){w(r,"class","title")},m(i,s){u(i,r,s),Q(r,t)},p:I,d(i){i&&o(r)}}}function de(_){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:I,p:I,d:I}}function $e(_){let r,m,t,i,s;return document.title=r=f.title,{c(){m=k(),t=D("meta"),i=k(),s=D("meta"),this.h()},l(n){m=h(n),t=R(n,"META",{property:!0,content:!0}),i=h(n),s=R(n,"META",{name:!0,content:!0}),this.h()},h(){var n,l;w(t,"property","og:title"),w(t,"content",((n=f.og)==null?void 0:n.title)??f.title),w(s,"name","twitter:title"),w(s,"content",((l=f.og)==null?void 0:l.title)??f.title)},m(n,l){u(n,m,l),u(n,t,l),u(n,i,l),u(n,s,l)},p(n,l){l&0&&r!==(r=f.title)&&(document.title=r)},d(n){n&&(o(m),o(t),o(i),o(s))}}}function ye(_){var s,n;let r,m,t=(f.description||((s=f.og)==null?void 0:s.description))&&we(),i=((n=f.og)==null?void 0:n.image)&&ge();return{c(){t&&t.c(),r=k(),i&&i.c(),m=H()},l(l){t&&t.l(l),r=h(l),i&&i.l(l),m=H()},m(l,p){t&&t.m(l,p),u(l,r,p),i&&i.m(l,p),u(l,m,p)},p(l,p){var y,g;(f.description||(y=f.og)!=null&&y.description)&&t.p(l,p),(g=f.og)!=null&&g.image&&i.p(l,p)},d(l){l&&(o(r),o(m)),t&&t.d(l),i&&i.d(l)}}}function we(_){let r,m,t,i,s;return{c(){r=D("meta"),m=k(),t=D("meta"),i=k(),s=D("meta"),this.h()},l(n){r=R(n,"META",{name:!0,content:!0}),m=h(n),t=R(n,"META",{property:!0,content:!0}),i=h(n),s=R(n,"META",{name:!0,content:!0}),this.h()},h(){var n,l,p;w(r,"name","description"),w(r,"content",f.description??((n=f.og)==null?void 0:n.description)),w(t,"property","og:description"),w(t,"content",((l=f.og)==null?void 0:l.description)??f.description),w(s,"name","twitter:description"),w(s,"content",((p=f.og)==null?void 0:p.description)??f.description)},m(n,l){u(n,r,l),u(n,m,l),u(n,t,l),u(n,i,l),u(n,s,l)},p:I,d(n){n&&(o(r),o(m),o(t),o(i),o(s))}}}function ge(_){let r,m,t;return{c(){r=D("meta"),m=k(),t=D("meta"),this.h()},l(i){r=R(i,"META",{property:!0,content:!0}),m=h(i),t=R(i,"META",{name:!0,content:!0}),this.h()},h(){var i,s;w(r,"property","og:image"),w(r,"content",P((i=f.og)==null?void 0:i.image)),w(t,"name","twitter:image"),w(t,"content",P((s=f.og)==null?void 0:s.image))},m(i,s){u(i,r,s),u(i,m,s),u(i,t,s)},p:I,d(i){i&&(o(r),o(m),o(t))}}}function G(_){let r,m;return r=new _e({props:{queryID:"races",queryResult:_[0]}}),{c(){F(r.$$.fragment)},l(t){A(r.$$.fragment,t)},m(t,i){q(r,t,i),m=!0},p(t,i){const s={};i&1&&(s.queryResult=t[0]),r.$set(s)},i(t){m||(x(r.$$.fragment,t),m=!0)},o(t){C(r.$$.fragment,t),m=!1},d(t){M(r,t)}}}function be(_){let r,m,t,i,s,n,l,p,y,g,v,d,T,S,E,b,c,a;return r=new U({props:{id:"round_number",title:"Rd"}}),t=new U({props:{id:"country_flag_url",title:" ",contentType:"image",height:"16px",width:"24px"}}),s=new U({props:{id:"meeting_name",title:"Grand Prix"}}),l=new U({props:{id:"race_date",title:"Date",fmt:"d mmm yyyy"}}),y=new U({props:{id:"format",title:"Format"}}),v=new U({props:{id:"winner",title:"Winner"}}),T=new U({props:{id:"winner_team",title:"Team"}}),E=new U({props:{id:"safety_cars",title:"Safety Cars"}}),c=new U({props:{id:"conditions",title:"Conditions"}}),{c(){F(r.$$.fragment),m=k(),F(t.$$.fragment),i=k(),F(s.$$.fragment),n=k(),F(l.$$.fragment),p=k(),F(y.$$.fragment),g=k(),F(v.$$.fragment),d=k(),F(T.$$.fragment),S=k(),F(E.$$.fragment),b=k(),F(c.$$.fragment)},l(e){A(r.$$.fragment,e),m=h(e),A(t.$$.fragment,e),i=h(e),A(s.$$.fragment,e),n=h(e),A(l.$$.fragment,e),p=h(e),A(y.$$.fragment,e),g=h(e),A(v.$$.fragment,e),d=h(e),A(T.$$.fragment,e),S=h(e),A(E.$$.fragment,e),b=h(e),A(c.$$.fragment,e)},m(e,$){q(r,e,$),u(e,m,$),q(t,e,$),u(e,i,$),q(s,e,$),u(e,n,$),q(l,e,$),u(e,p,$),q(y,e,$),u(e,g,$),q(v,e,$),u(e,d,$),q(T,e,$),u(e,S,$),q(E,e,$),u(e,b,$),q(c,e,$),a=!0},p:I,i(e){a||(x(r.$$.fragment,e),x(t.$$.fragment,e),x(s.$$.fragment,e),x(l.$$.fragment,e),x(y.$$.fragment,e),x(v.$$.fragment,e),x(T.$$.fragment,e),x(E.$$.fragment,e),x(c.$$.fragment,e),a=!0)},o(e){C(r.$$.fragment,e),C(t.$$.fragment,e),C(s.$$.fragment,e),C(l.$$.fragment,e),C(y.$$.fragment,e),C(v.$$.fragment,e),C(T.$$.fragment,e),C(E.$$.fragment,e),C(c.$$.fragment,e),a=!1},d(e){e&&(o(m),o(i),o(n),o(p),o(g),o(d),o(S),o(b)),M(r,e),M(t,e),M(s,e),M(l,e),M(y,e),M(v,e),M(T,e),M(E,e),M(c,e)}}}function he(_){let r,m,t,i,s,n,l="Every Grand Prix since 2023. Select a race for results, position changes, tyre strategy and pit stops.",p,y,g,v,d=typeof f<"u"&&f.title&&f.hide_title!==!0&&pe();function T(a,e){return typeof f<"u"&&f.title?$e:de}let E=T()(_),b=typeof f=="object"&&ye(),c=_[0]&&G(_);return g=new ie({props:{data:_[0],rows:"25",search:"true",link:"race_link",groupBy:"year",groupsOpen:"false",$$slots:{default:[be]},$$scope:{ctx:_}}}),{c(){d&&d.c(),r=k(),E.c(),m=D("meta"),t=D("meta"),b&&b.c(),i=H(),s=k(),n=D("p"),n.textContent=l,p=k(),c&&c.c(),y=k(),F(g.$$.fragment),this.h()},l(a){d&&d.l(a),r=h(a);const e=B("svelte-2igo1p",document.head);E.l(e),m=R(e,"META",{name:!0,content:!0}),t=R(e,"META",{name:!0,content:!0}),b&&b.l(e),i=H(),e.forEach(o),s=h(a),n=R(a,"P",{class:!0,"data-svelte-h":!0}),V(n)!=="svelte-15qb8v8"&&(n.textContent=l),p=h(a),c&&c.l(a),y=h(a),A(g.$$.fragment,a),this.h()},h(){w(m,"name","twitter:card"),w(m,"content","summary_large_image"),w(t,"name","twitter:site"),w(t,"content","@evidence_dev"),w(n,"class","markdown")},m(a,e){d&&d.m(a,e),u(a,r,e),E.m(document.head,null),Q(document.head,m),Q(document.head,t),b&&b.m(document.head,null),Q(document.head,i),u(a,s,e),u(a,n,e),u(a,p,e),c&&c.m(a,e),u(a,y,e),q(g,a,e),v=!0},p(a,[e]){typeof f<"u"&&f.title&&f.hide_title!==!0&&d.p(a,e),E.p(a,e),typeof f=="object"&&b.p(a,e),a[0]?c?(c.p(a,e),e&1&&x(c,1)):(c=G(a),c.c(),x(c,1),c.m(y.parentNode,y)):c&&(re(),C(c,1,1,()=>{c=null}),ne());const $={};e&1&&($.data=a[0]),e&262144&&($.$$scope={dirty:e,ctx:a}),g.$set($)},i(a){v||(x(c),x(g.$$.fragment,a),v=!0)},o(a){C(c),C(g.$$.fragment,a),v=!1},d(a){a&&(o(r),o(s),o(n),o(p),o(y)),d&&d.d(a),E.d(a),o(m),o(t),b&&b.d(a),o(i),c&&c.d(a),M(g,a)}}}const f={title:"Races"};function ke(_,r,m){let t,i;O(_,ue,a=>m(7,t=a)),O(_,W,a=>m(13,i=a));let{data:s}=r,{data:n={},customFormattingSettings:l,__db:p,inputs:y}=s;K(W,i="47e6e23282f2337d3fee6f1391554a40",i);let g=ae(ce(y));X(g.subscribe(a=>y=a)),Y(oe,{getCustomFormats:()=>l.customFormats||[]});const v=(a,e)=>fe(p.query,a,{query_name:e});se(v),t.params,z(()=>!0);let d={initialData:void 0,initialError:void 0},T=j`select
    year,
    round_number,
    country_flag_url,
    meeting_name,
    race_date,
    case when is_sprint_weekend then 'Sprint' else '' end as format,
    coalesce(winner, case when is_completed then '-' else 'Upcoming' end) as winner,
    winner_team,
    safety_cars,
    case when wet_race then 'Wet' else '' end as conditions,
    race_link
from f1.meetings
order by year desc, round_number`,S=`select
    year,
    round_number,
    country_flag_url,
    meeting_name,
    race_date,
    case when is_sprint_weekend then 'Sprint' else '' end as format,
    coalesce(winner, case when is_completed then '-' else 'Upcoming' end) as winner,
    winner_team,
    safety_cars,
    case when wet_race then 'Wet' else '' end as conditions,
    race_link
from f1.meetings
order by year desc, round_number`;n.races_data&&(n.races_data instanceof Error?d.initialError=n.races_data:d.initialData=n.races_data,n.races_columns&&(d.knownColumns=n.races_columns));let E,b=!1;const c=me.createReactive({callback:a=>{m(0,E=a)},execFn:v},{id:"races",...d});return c(S,{noResolve:T,...d}),globalThis[Symbol.for("races")]={get value(){return E}},_.$$set=a=>{"data"in a&&m(1,s=a.data)},_.$$.update=()=>{_.$$.dirty&2&&m(2,{data:n={},customFormattingSettings:l,__db:p}=s,n),_.$$.dirty&4&&le.set(Object.keys(n).length>0),_.$$.dirty&128&&t.params,_.$$.dirty&120&&(T||!b?T||(c(S,{noResolve:T,...d}),m(6,b=!0)):c(S,{noResolve:T}))},m(4,T=j`select
    year,
    round_number,
    country_flag_url,
    meeting_name,
    race_date,
    case when is_sprint_weekend then 'Sprint' else '' end as format,
    coalesce(winner, case when is_completed then '-' else 'Upcoming' end) as winner,
    winner_team,
    safety_cars,
    case when wet_race then 'Wet' else '' end as conditions,
    race_link
from f1.meetings
order by year desc, round_number`),m(5,S=`select
    year,
    round_number,
    country_flag_url,
    meeting_name,
    race_date,
    case when is_sprint_weekend then 'Sprint' else '' end as format,
    coalesce(winner, case when is_completed then '-' else 'Upcoming' end) as winner,
    winner_team,
    safety_cars,
    case when wet_race then 'Wet' else '' end as conditions,
    race_link
from f1.meetings
order by year desc, round_number`),[E,s,n,d,T,S,b,t]}class qe extends ee{constructor(r){super(),te(this,r,ke,he,N,{data:1})}}export{qe as component};
