(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[156],{1374:function(e,t,c){"use strict";c.r(t);var s=c(638),j=c(1),n=c(637),l=c(648),a=c(18),r=c(13),b=c(639).default;t.default=function(){var e=Object(l.e)({mode:"all"}),t=(e.control,e.handleSubmit,e.formState.errors),c=Object(a.g)(),i=Object(j.useState)(null),o=Object(s.a)(i,2),h=o[0],d=o[1],O=Object(j.useState)(!1),x=Object(s.a)(O,2),u=x[0],m=x[1],g=Object(j.useState)(""),p=Object(s.a)(g,2),v=p[0],f=p[1],S=Object(j.useState)(""),I=Object(s.a)(S,2),y=(I[0],I[1]),C=Object(j.useState)(""),T=Object(s.a)(C,2),N=(T[0],T[1],Object(j.useState)("")),F=Object(s.a)(N,2),w=(F[0],F[1],Object(j.useState)("")),K=Object(s.a)(w,2),B=K[0],k=K[1],A=Object(j.useState)(""),J=Object(s.a)(A,2),D=J[0],Q=J[1],L=Object(j.useState)(""),M=Object(s.a)(L,2),R=(M[0],M[1]),H=Object(j.useState)(""),q=Object(s.a)(H,2),z=q[0],E=q[1],G=Object(j.useState)(""),P=Object(s.a)(G,2),U=(P[0],P[1],Object(j.useState)("")),V=Object(s.a)(U,2),W=V[0],X=V[1],Y=Object(j.useState)(""),Z=Object(s.a)(Y,2),$=(Z[0],Z[1]),_=Object(j.useState)(""),ee=Object(s.a)(_,2),te=ee[0],ce=ee[1],se=Object(j.useState)(""),je=Object(s.a)(se,2),ne=je[0],le=je[1],ae=Object(j.useState)(""),re=Object(s.a)(ae,2),be=re[0],ie=re[1];return Object(r.jsx)("div",{children:Object(r.jsx)(n.ub,{children:Object(r.jsx)(n.u,{xs:"12",sm:"12",children:Object(r.jsxs)(n.j,{children:[Object(r.jsxs)(n.n,{children:["Add service home page",Object(r.jsx)(n.bb,{style:{float:"right"},className:"btn btn-success",to:"/service-page/add/add-grid",children:"Add grid section"})]}),Object(r.jsx)(n.k,{children:Object(r.jsxs)(n.J,{encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),d(null),m(!0);var t=new FormData;b.post("/banner/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){m(!1),c.push("/banners-manaement/banners")})).catch((function(e){m(!1),e.response.data.errorMessage?d(e.response.data.errorMessage):d("Something went wrong!")}))},children:[Object(r.jsx)("br",{}),h&&Object(r.jsx)("p",{className:"text-danger",children:h}),Object(r.jsx)(n.ub,{children:Object(r.jsx)(n.u,{xs:"12",children:Object(r.jsx)("h2",{children:"Banner section"})})}),Object(r.jsxs)(n.ub,{children:[Object(r.jsx)(n.u,{xl:"6",children:Object(r.jsxs)(n.K,{children:[Object(r.jsx)(n.ab,{htmlFor:"shortItem",children:"Banner title"}),Object(r.jsx)(n.T,{className:"mb-3",children:Object(r.jsx)(n.Q,{type:"text",onChange:function(e){f(e.target.value)},value:v,placeholder:"Title",autoComplete:"title"})})]})}),Object(r.jsxs)(n.u,{xs:"6",children:[Object(r.jsx)(n.ab,{htmlFor:"category",children:"Banner image"}),Object(r.jsxs)(n.T,{className:"mb-3",children:[Object(r.jsx)(n.ab,{htmlFor:"cardOneImage",variant:"custom-file",children:"Choose Image..."}),Object(r.jsx)(n.S,{onChange:function(e){y(e.target.files[0])},custom:!0,id:"cardOneImage",type:"file"})]})]})]}),Object(r.jsx)(n.ub,{children:Object(r.jsx)(n.u,{xl:"12",children:Object(r.jsxs)(n.K,{children:[Object(r.jsx)(n.ab,{htmlFor:"shortItem",children:"Description"}),Object(r.jsx)(n.T,{className:"mb-3",children:Object(r.jsx)(n.Jb,{id:"content",rows:"3",onChange:function(e){k(e.target.value)},value:B})})]})})}),Object(r.jsx)(n.ub,{children:Object(r.jsxs)(n.u,{xs:"12",children:[Object(r.jsx)("hr",{}),Object(r.jsx)("h2",{children:"Hero section"})]})}),Object(r.jsxs)(n.ub,{children:[Object(r.jsx)(n.u,{xl:"6",children:Object(r.jsxs)(n.K,{children:[Object(r.jsx)(n.ab,{htmlFor:"shortItem",children:"Section Title"}),Object(r.jsx)(n.T,{className:"mb-3",children:Object(r.jsx)(n.Q,{type:"text",onChange:function(e){Q(e.target.value)},value:D,placeholder:"Title",autoComplete:"title"})})]})}),Object(r.jsxs)(n.u,{xs:"6",children:[Object(r.jsx)(n.ab,{htmlFor:"category",children:"Image"}),Object(r.jsxs)(n.T,{className:"mb-3",children:[Object(r.jsx)(n.ab,{htmlFor:"bannerImage",variant:"custom-file",children:"Choose Image..."}),Object(r.jsx)(n.S,{onChange:function(e){R(e.target.files[0])},custom:!0,id:"bannerImage",type:"file"})]})]})]}),Object(r.jsx)(n.ub,{children:Object(r.jsx)(n.u,{xl:"12",children:Object(r.jsxs)(n.K,{children:[Object(r.jsx)(n.ab,{htmlFor:"shortItem",children:"Description"}),Object(r.jsx)(n.T,{className:"mb-3",children:Object(r.jsx)(n.Jb,{id:"content",rows:"3",onChange:function(e){E(e.target.value)},value:z})})]})})}),Object(r.jsx)(n.ub,{children:Object(r.jsxs)(n.u,{xs:"12",children:[Object(r.jsx)("hr",{}),Object(r.jsx)("h2",{children:"Section 4"})]})}),Object(r.jsxs)(n.ub,{children:[Object(r.jsx)(n.u,{xl:"6",children:Object(r.jsxs)(n.K,{children:[Object(r.jsx)(n.ab,{htmlFor:"shortItem",children:"Title"}),Object(r.jsx)(n.T,{className:"mb-3",children:Object(r.jsx)(n.Q,{type:"text",onChange:function(e){X(e.target.value)},value:W,placeholder:"Title",autoComplete:"title"})})]})}),Object(r.jsxs)(n.u,{xs:"6",children:[Object(r.jsx)(n.ab,{htmlFor:"category",children:"Image"}),Object(r.jsxs)(n.T,{className:"mb-3",children:[Object(r.jsx)(n.ab,{htmlFor:"bannerImage",variant:"custom-file",children:"Choose Image..."}),Object(r.jsx)(n.S,{onChange:function(e){$(e.target.files[0])},custom:!0,id:"bannerImage",type:"file"})]})]})]}),Object(r.jsxs)(n.ub,{children:[Object(r.jsx)(n.u,{xl:"6",children:Object(r.jsxs)(n.K,{children:[Object(r.jsx)(n.ab,{htmlFor:"shortItem",children:"Button text"}),Object(r.jsx)(n.T,{className:"mb-3",children:Object(r.jsx)(n.Q,{type:"text",onChange:function(e){le(e.target.value)},value:ne,placeholder:"Button text",autoComplete:"Button text"})})]})}),Object(r.jsx)(n.u,{xl:"6",children:Object(r.jsxs)(n.K,{children:[Object(r.jsx)(n.ab,{htmlFor:"shortItem",children:"Button link"}),Object(r.jsx)(n.T,{className:"mb-3",children:Object(r.jsx)(n.Q,{type:"text",onChange:function(e){ie(e.target.value)},value:be,placeholder:"Button link",autoComplete:"Button link"})})]})})]}),Object(r.jsx)(n.ub,{children:Object(r.jsx)(n.u,{xl:"12",children:Object(r.jsxs)(n.K,{children:[Object(r.jsx)(n.ab,{htmlFor:"shortItem",children:"Description"}),Object(r.jsx)(n.T,{className:"mb-3",children:Object(r.jsx)(n.Jb,{id:"content",rows:"3",onChange:function(e){ce(e.target.value)},value:te})})]})})}),Object(r.jsx)(n.ub,{children:Object(r.jsxs)(n.u,{xs:"12",children:[Object(r.jsx)("hr",{}),Object(r.jsx)("h2",{children:"Action card section"})]})}),Object(r.jsx)(n.ub,{children:Object(r.jsx)(n.u,{xs:"6",children:Object(r.jsxs)(n.K,{children:[Object(r.jsx)(n.ab,{htmlFor:"category",children:"Action card"}),Object(r.jsx)(n.T,{className:"mb-3",children:Object(r.jsxs)(n.vb,{custom:!0,name:"categoryId",id:"categoryId",children:[Object(r.jsx)("option",{value:"",children:"Select Action card"}),Object(r.jsx)("option",{value:"1",children:"Select Action card 1"}),Object(r.jsx)("option",{value:"2",children:"Select Action card 2"})]})}),Object(r.jsx)(n.L,{className:"help-block text-danger",color:"red",children:t.categoryId&&t.categoryId.message})]})})}),Object(r.jsx)(n.ub,{children:Object(r.jsxs)(n.u,{xs:"12",children:[Object(r.jsx)("hr",{}),Object(r.jsx)("h2",{children:"Review section "})]})}),Object(r.jsx)(n.ub,{children:Object(r.jsx)(n.u,{xs:"6",children:Object(r.jsxs)(n.K,{children:[Object(r.jsx)(n.ab,{htmlFor:"category",children:"Review"}),Object(r.jsx)(n.T,{className:"mb-3",children:Object(r.jsxs)(n.vb,{custom:!0,name:"categoryId",id:"categoryId",children:[Object(r.jsx)("option",{value:"",children:"Select review"}),Object(r.jsx)("option",{value:"1",children:"review 1"}),Object(r.jsx)("option",{value:"2",children:"review 2"})]})}),Object(r.jsx)(n.L,{className:"help-block text-danger",color:"red",children:t.categoryId&&t.categoryId.message})]})})}),Object(r.jsx)(n.ub,{children:Object(r.jsx)(n.u,{xs:"8",children:Object(r.jsx)("button",{className:"btn btn-success",disabled:!!u,type:"submit",children:u?"Loading...":"Add Content"})})})]})})]})})})})}}}]);
//# sourceMappingURL=156.17ab93b2.chunk.js.map