(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[140],{1393:function(e,t,c){"use strict";c.r(t);var s=c(1),j=c(637),n=c(638),a=c(648),b=c(18),r=c(13),l=c(639).default,O=function(){var e=Object(a.e)({mode:"all"}),t=(e.control,e.handleSubmit,e.formState.errors,Object(b.g)()),c=Object(s.useState)(null),O=Object(n.a)(c,2),i=O[0],u=O[1],o=Object(s.useState)(!1),h=Object(n.a)(o,2),x=h[0],d=h[1],m=Object(s.useState)(""),p=Object(n.a)(m,2),g=p[0],S=p[1],f=Object(s.useState)(""),v=Object(n.a)(f,2),C=(v[0],v[1]),T=Object(s.useState)(""),y=Object(n.a)(T,2),N=y[0],I=y[1],F=Object(s.useState)(""),w=Object(n.a)(F,2),B=w[0],K=w[1],k=Object(s.useState)(""),D=Object(n.a)(k,2),J=D[0],Q=D[1];return Object(r.jsx)("div",{children:Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xs:"12",sm:"12",children:Object(r.jsxs)(j.J,{encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),u(null),d(!0);var c=new FormData;l.post("/banner/",c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){d(!1),t.push("/banners-manaement/banners")})).catch((function(e){d(!1),e.response.data.errorMessage?u(e.response.data.errorMessage):u("Something went wrong!")}))},children:[Object(r.jsx)("br",{}),i&&Object(r.jsx)("p",{className:"text-danger",children:i}),Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xs:"12",className:"mb-3",children:Object(r.jsx)("h2",{children:"Banner section"})})}),Object(r.jsxs)(j.ub,{children:[Object(r.jsx)(j.u,{xl:"6",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Banner title"}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Q,{type:"text",onChange:function(e){S(e.target.value)},value:g,placeholder:"Title",autoComplete:"title"})})]})}),Object(r.jsxs)(j.u,{xs:"6",children:[Object(r.jsx)(j.ab,{htmlFor:"category",children:"Banner image"}),Object(r.jsxs)(j.T,{className:"mb-3",children:[Object(r.jsx)(j.ab,{htmlFor:"cardOneImage",variant:"custom-file",children:"Choose Image..."}),Object(r.jsx)(j.S,{onChange:function(e){C(e.target.files[0])},custom:!0,id:"cardOneImage",type:"file"})]})]})]}),Object(r.jsxs)(j.ub,{children:[Object(r.jsx)(j.u,{xl:"6",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Button text"}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Q,{type:"text",onChange:function(e){I(e.target.value)},value:N,placeholder:"Button text",autoComplete:"Button text"})})]})}),Object(r.jsx)(j.u,{xl:"6",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Button link"}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Q,{type:"text",onChange:function(e){K(e.target.value)},value:B,placeholder:"Button link",autoComplete:"Button link"})})]})})]}),Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xl:"12",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Description"}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Jb,{id:"content",rows:"3",onChange:function(e){Q(e.target.value)},value:J})})]})})}),Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xs:"8",children:Object(r.jsx)("button",{className:"btn btn-success",disabled:!!x,type:"submit",children:x?"Loading...":"Save"})})})]})})})})},i=c(639).default,u=function(){var e=Object(a.e)({mode:"all"}),t=(e.control,e.handleSubmit,e.formState.errors,Object(b.g)()),c=Object(s.useState)(null),l=Object(n.a)(c,2),O=l[0],u=l[1],o=Object(s.useState)(!1),h=Object(n.a)(o,2),x=h[0],d=h[1],m=Object(s.useState)(""),p=Object(n.a)(m,2),g=(p[0],p[1],Object(s.useState)("")),S=Object(n.a)(g,2),f=(S[0],S[1],Object(s.useState)("")),v=Object(n.a)(f,2),C=(v[0],v[1],Object(s.useState)("")),T=Object(n.a)(C,2),y=(T[0],T[1],Object(s.useState)("")),N=Object(n.a)(y,2),I=(N[0],N[1],Object(s.useState)("")),F=Object(n.a)(I,2),w=F[0],B=F[1],K=Object(s.useState)(""),k=Object(n.a)(K,2),D=(k[0],k[1]),J=Object(s.useState)(""),Q=Object(n.a)(J,2),M=Q[0],L=Q[1],P=Object(s.useState)(""),A=Object(n.a)(P,2),H=A[0],q=A[1],z=Object(s.useState)(""),E=Object(n.a)(z,2),G=(E[0],E[1],Object(s.useState)("")),R=Object(n.a)(G,2),U=(R[0],R[1],Object(s.useState)("")),V=Object(n.a)(U,2),W=(V[0],V[1],Object(s.useState)("")),X=Object(n.a)(W,2),Y=(X[0],X[1],Object(s.useState)("")),Z=Object(n.a)(Y,2);Z[0],Z[1];return Object(r.jsx)("div",{children:Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xs:"12",sm:"12",children:Object(r.jsxs)(j.J,{encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),u(null),d(!0);var c=new FormData;i.post("/banner/",c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){d(!1),t.push("/banners-manaement/banners")})).catch((function(e){d(!1),e.response.data.errorMessage?u(e.response.data.errorMessage):u("Something went wrong!")}))},children:[Object(r.jsx)("br",{}),O&&Object(r.jsx)("p",{className:"text-danger",children:O}),Object(r.jsx)(j.ub,{children:Object(r.jsxs)(j.u,{xs:"12",className:"my-4",children:[Object(r.jsx)("hr",{}),Object(r.jsx)("h2",{children:"Home section"})]})}),Object(r.jsxs)(j.ub,{children:[Object(r.jsx)(j.u,{xl:"6",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Section Title"}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Q,{type:"text",onChange:function(e){B(e.target.value)},value:w,placeholder:"Title",autoComplete:"title"})})]})}),Object(r.jsx)(j.u,{xl:"6",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Phone No."}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Q,{type:"text",onChange:function(e){q(e.target.value)},value:H,placeholder:"Phone number",autoComplete:"Phone number"})})]})})]}),Object(r.jsx)(j.ub,{children:Object(r.jsxs)(j.u,{xs:"6",children:[Object(r.jsx)(j.ab,{htmlFor:"category",children:"Image"}),Object(r.jsxs)(j.T,{className:"mb-3",children:[Object(r.jsx)(j.ab,{htmlFor:"bannerImage",variant:"custom-file",children:"Choose Image..."}),Object(r.jsx)(j.S,{onChange:function(e){D(e.target.files[0])},custom:!0,id:"bannerImage",type:"file"})]})]})}),Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xl:"12",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Description"}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Jb,{id:"content",rows:"3",onChange:function(e){L(e.target.value)},value:M})})]})})}),Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xs:"8",children:Object(r.jsx)("button",{className:"btn btn-success",disabled:!!x,type:"submit",children:x?"Loading...":"Save"})})})]})})})})},o=c(639).default,h=function(){var e=Object(a.e)({mode:"all"}),t=(e.control,e.handleSubmit,e.formState.errors,Object(b.g)()),c=Object(s.useState)(null),l=Object(n.a)(c,2),O=l[0],i=l[1],u=Object(s.useState)(!1),h=Object(n.a)(u,2),x=h[0],d=h[1],m=Object(s.useState)(""),p=Object(n.a)(m,2),g=(p[0],p[1],Object(s.useState)("")),S=Object(n.a)(g,2),f=(S[0],S[1],Object(s.useState)("")),v=Object(n.a)(f,2),C=(v[0],v[1],Object(s.useState)("")),T=Object(n.a)(C,2),y=(T[0],T[1],Object(s.useState)("")),N=Object(n.a)(y,2),I=(N[0],N[1],Object(s.useState)("")),F=Object(n.a)(I,2),w=(F[0],F[1],Object(s.useState)("")),B=Object(n.a)(w,2),K=(B[0],B[1],Object(s.useState)("")),k=Object(n.a)(K,2),D=(k[0],k[1],Object(s.useState)("")),J=Object(n.a)(D,2),Q=(J[0],J[1],Object(s.useState)("")),M=Object(n.a)(Q,2),L=M[0],P=M[1],A=Object(s.useState)(""),H=Object(n.a)(A,2),q=(H[0],H[1]),z=Object(s.useState)(""),E=Object(n.a)(z,2),G=E[0],R=E[1],U=Object(s.useState)(""),V=Object(n.a)(U,2),W=V[0],X=V[1],Y=Object(s.useState)(""),Z=Object(n.a)(Y,2),$=Z[0],_=Z[1];return Object(r.jsx)("div",{children:Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xs:"12",sm:"12",children:Object(r.jsxs)(j.J,{encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),i(null),d(!0);var c=new FormData;o.post("/banner/",c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){d(!1),t.push("/banners-manaement/banners")})).catch((function(e){d(!1),e.response.data.errorMessage?i(e.response.data.errorMessage):i("Something went wrong!")}))},children:[Object(r.jsx)("br",{}),O&&Object(r.jsx)("p",{className:"text-danger",children:O}),Object(r.jsx)(j.ub,{children:Object(r.jsxs)(j.u,{xs:"12",children:[Object(r.jsx)("hr",{}),Object(r.jsx)("h2",{children:"Section 3"})]})}),Object(r.jsxs)(j.ub,{children:[Object(r.jsx)(j.u,{xl:"6",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Title"}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Q,{type:"text",onChange:function(e){P(e.target.value)},value:L,placeholder:"Title",autoComplete:"title"})})]})}),Object(r.jsxs)(j.u,{xs:"6",children:[Object(r.jsx)(j.ab,{htmlFor:"category",children:"Image"}),Object(r.jsxs)(j.T,{className:"mb-3",children:[Object(r.jsx)(j.ab,{htmlFor:"bannerImage",variant:"custom-file",children:"Choose Image..."}),Object(r.jsx)(j.S,{onChange:function(e){q(e.target.files[0])},custom:!0,id:"bannerImage",type:"file"})]})]})]}),Object(r.jsxs)(j.ub,{children:[Object(r.jsx)(j.u,{xl:"6",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Button text"}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Q,{type:"text",onChange:function(e){X(e.target.value)},value:W,placeholder:"Button text",autoComplete:"Button text"})})]})}),Object(r.jsx)(j.u,{xl:"6",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Button link"}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Q,{type:"text",onChange:function(e){_(e.target.value)},value:$,placeholder:"Button link",autoComplete:"Button link"})})]})})]}),Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xl:"12",children:Object(r.jsxs)(j.K,{children:[Object(r.jsx)(j.ab,{htmlFor:"shortItem",children:"Description"}),Object(r.jsx)(j.T,{className:"mb-3",children:Object(r.jsx)(j.Jb,{id:"content",rows:"3",onChange:function(e){R(e.target.value)},value:G})})]})})}),Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xs:"8",children:Object(r.jsx)("button",{className:"btn btn-success",disabled:!!x,type:"submit",children:x?"Loading...":"Save"})})})]})})})})};t.default=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(j.ub,{children:Object(r.jsx)(j.u,{xs:"12",sm:"12",children:Object(r.jsxs)(j.j,{children:[Object(r.jsx)(j.n,{children:"Add service home page"}),Object(r.jsxs)(j.k,{children:[Object(r.jsx)(O,{}),Object(r.jsx)(u,{}),Object(r.jsx)(h,{})]})]})})})})}}}]);
//# sourceMappingURL=140.7530bbea.chunk.js.map