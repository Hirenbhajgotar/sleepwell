(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[18],{1385:function(e,t,c){"use strict";c.r(t);var n=c(25),s=c(710),i=c(638),l=c(1),a=c(637),o=c(656),r=c(655),j=c(648),b=c(18),u=(c(1386),c(1387),c(675)),d=c(13),O=(c(639).default,r.b().shape({sectionTitle:r.c().required(),sectionSubTitle:r.c().required()}));t.default=function(){var e=Object(j.e)({mode:"all",resolver:Object(o.a)(O)}),t=e.control,c=e.handleSubmit,r=e.formState.errors,h=(Object(b.g)(),Object(l.useState)(null)),x=Object(i.a)(h,2),m=x[0],g=x[1],p=Object(l.useState)(!1),f=Object(i.a)(p,2),v=f[0],S=f[1],y=Object(l.useState)(""),T=Object(i.a)(y,2),N=T[0],C=T[1],F=Object(l.useState)([{sectionHeading:"",sectionImage:"",sectionDescription:""}]),I=Object(i.a)(F,2),D=I[0],k=I[1],H=Object(l.useState)(""),q=Object(i.a)(H,2),w=q[0],K=q[1],E=Object(l.useState)(""),J=Object(i.a)(E,2),L=(J[0],J[1],sessionStorage.getItem("token"),function(e,t){var c=e.target,n=c.name,i=c.value,l=c.files;console.log(i);var a=Object(s.a)(D);a[t][n]=l?l[0]:i,k(a)}),V=function(){k([].concat(Object(s.a)(D),[{sectionHeading:"",sectionImage:"",sectionDescription:""}]))};return Object(d.jsx)("div",{children:Object(d.jsx)(a.ub,{children:Object(d.jsx)(a.u,{xs:"12",sm:"12",children:Object(d.jsxs)(a.j,{children:[Object(d.jsx)(a.n,{children:"What Goes Inside"}),Object(d.jsx)(a.k,{children:Object(d.jsxs)(a.J,{onSubmit:c((function(e){var t=[{title:e.sectionTitle},{subTitle:e.sectionSubTitle},{image:N},{description:w},{section:D}];(new FormData).append("innovationData",t),g(null),S(!0)})),children:[Object(d.jsx)("br",{}),m&&Object(d.jsx)("p",{className:"text-danger",children:m}),Object(d.jsxs)(a.ub,{children:[Object(d.jsx)(a.u,{xs:"6",children:Object(d.jsxs)(a.K,{children:[Object(d.jsx)(a.ab,{htmlFor:"category",children:"Section Title"}),Object(d.jsx)(a.T,{className:"mb-3",children:Object(d.jsx)(j.a,{name:"sectionTitle",control:t,defaultValue:"",rules:{required:{value:!0,message:"Section title is required"}},render:function(e){var t=e.field;return Object(d.jsx)(a.Q,Object(n.a)(Object(n.a)({},t),{},{type:"text",placeholder:"Section title",autoComplete:"Section title"}))}})}),Object(d.jsx)(a.L,{className:"help-block text-danger",color:"red",children:r.sectionTitle&&r.sectionTitle.message})]})}),Object(d.jsx)(a.u,{xs:"6",children:Object(d.jsxs)(a.K,{children:[Object(d.jsx)(a.ab,{htmlFor:"category",children:"Section sub title"}),Object(d.jsx)(a.T,{className:"mb-3",children:Object(d.jsx)(j.a,{name:"sectionSubTitle",control:t,defaultValue:"",rules:{required:{value:!0,message:"Sub title is required"}},render:function(e){var t=e.field;return Object(d.jsx)(a.Q,Object(n.a)(Object(n.a)({},t),{},{type:"text",placeholder:"Technology name",autoComplete:"Technology name"}))}})}),Object(d.jsx)(a.L,{className:"help-block text-danger",color:"red",children:r.sectionSubTitle&&r.sectionSubTitle.message})]})})]}),Object(d.jsx)(a.ub,{children:Object(d.jsxs)(a.u,{xs:"6",children:[Object(d.jsx)(a.ab,{htmlFor:"category",children:"Image"}),Object(d.jsxs)(a.T,{className:"mb-3",children:[Object(d.jsx)(a.ab,{htmlFor:"Image",variant:"custom-file",children:"Choose image..."}),Object(d.jsx)(a.S,{onChange:function(e){C(e.target.files[0])},custom:!0,id:"Image",type:"file",multiple:"true"})]})]})}),Object(d.jsx)(a.ub,{children:Object(d.jsx)(a.u,{xl:"12",children:Object(d.jsxs)(a.K,{children:[Object(d.jsx)(a.ab,{htmlFor:"category",children:"Description"}),Object(d.jsx)(u.a,{onEditorValue:function(e){K(e)}}),Object(d.jsx)(a.L,{className:"help-block text-danger",color:"red",children:r.description&&r.description.message})]})})}),Object(d.jsx)(a.ub,{children:Object(d.jsxs)(a.u,{xs:"12",className:"my-4",children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"advantage section"})]})}),D.map((function(e,t){return Object(d.jsxs)(a.ub,{children:[Object(d.jsx)(a.u,{xl:"5",children:Object(d.jsxs)(a.K,{children:[Object(d.jsx)(a.ab,{htmlFor:"category",children:"Heading"}),Object(d.jsx)(a.T,{children:Object(d.jsx)(a.Q,{name:"sectionHeading",onChange:function(e){return L(e,t)},value:e.sectionHeading,type:"text",placeholder:"Heading",autoComplete:"Heading"})})]})}),Object(d.jsxs)(a.u,{xs:"5",children:[Object(d.jsx)(a.ab,{htmlFor:"category",children:"Image"}),Object(d.jsxs)(a.T,{className:"mb-3",children:[Object(d.jsx)(a.ab,{htmlFor:"Image",variant:"custom-file",children:"Choose image..."}),Object(d.jsx)(a.S,{onChange:function(e){return L(e,t)},name:"sectionImage",custom:!0,id:"Image",type:"file",multiple:"true"})]})]}),1!==D.length&&Object(d.jsx)(a.u,{xs:"1",className:"mb-auto mt-auto",children:Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return function(e){var t=Object(s.a)(D);t.splice(e,1),k(t)}(t)},className:"btn btn-danger",type:"button",children:"Remove"})})}),D.length-1===t&&Object(d.jsx)(a.u,{xs:"1",className:"mb-auto mt-auto",children:Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:V,className:"btn btn-success",type:"button",children:"Add"})})}),Object(d.jsx)(a.u,{xl:"12",children:Object(d.jsxs)(a.K,{children:[Object(d.jsx)(a.ab,{htmlFor:"category",children:"Description"}),Object(d.jsx)(a.T,{children:Object(d.jsx)(a.Jb,{id:"content",rows:"3",name:"sectionDescription",onChange:function(e){return L(e,t)},value:e.sectionDescription})})]})})]},t)})),Object(d.jsx)(a.ub,{children:Object(d.jsx)(a.u,{xs:"8",children:Object(d.jsx)("button",{className:"btn btn-success",disabled:!!v,type:"submit",children:v?"Loading...":"Save"})})})]})})]})})})})}},1386:function(e,t,c){},1387:function(e,t,c){},675:function(e,t,c){"use strict";var n=c(1),s=c(637),i=c(702),l=c(703),a=c.n(l),o=c(13);t.a=function(e,t){Object(n.useRef)();return Object(o.jsx)("div",{children:Object(o.jsx)(s.ub,{children:Object(o.jsx)(s.u,{xs:"12",sm:"12",children:Object(o.jsx)(i.CKEditor,{editor:a.a,data:"",onReady:function(e){console.log("Editor is ready to use!",e)},onChange:function(t,c){c.getData()&&e.onEditorValue(c.getData())},onBlur:function(e,t){console.log("Blur.",t)},onFocus:function(e,t){console.log("Focus.",t)}})})})})}}}]);
//# sourceMappingURL=18.042ddcf4.chunk.js.map