(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[18],{1387:function(e,t,c){"use strict";c.r(t);var n=c(25),s=c(710),i=c(638),a=c(1),l=c(637),r=c(653),j=c(652),o=c(647),b=c(18),u=(c(1388),c(1389),c(661)),d=c(13),O=(c(639).default,j.b().shape({sectionTitle:j.c().required(),sectionSubTitle:j.c().required()}));t.default=function(){var e=Object(o.e)({mode:"all",resolver:Object(r.a)(O)}),t=e.control,c=e.handleSubmit,j=e.formState.errors,h=(Object(b.g)(),Object(a.useState)(null)),x=Object(i.a)(h,2),m=x[0],g=x[1],p=Object(a.useState)(!1),f=Object(i.a)(p,2),v=f[0],S=f[1],T=Object(a.useState)(""),y=Object(i.a)(T,2),N=y[0],C=y[1],I=Object(a.useState)([{sectionHeading:"",sectionImage:"",sectionDescription:""}]),D=Object(i.a)(I,2),F=D[0],k=D[1],H=Object(a.useState)(""),q=Object(i.a)(H,2),w=q[0],K=q[1],V=Object(a.useState)(""),J=Object(i.a)(V,2),L=(J[0],J[1],sessionStorage.getItem("token"),function(e,t){var c=e.target,n=c.name,i=c.value,a=c.files;console.log(i);var l=Object(s.a)(F);l[t][n]=a?a[0]:i,k(l)}),E=function(){k([].concat(Object(s.a)(F),[{sectionHeading:"",sectionImage:"",sectionDescription:""}]))};return Object(d.jsx)("div",{children:Object(d.jsx)(l.ub,{children:Object(d.jsx)(l.u,{xs:"12",sm:"12",children:Object(d.jsxs)(l.j,{children:[Object(d.jsx)(l.n,{children:"What Goes Inside"}),Object(d.jsx)(l.k,{children:Object(d.jsxs)(l.J,{onSubmit:c((function(e){var t=[{title:e.sectionTitle},{subTitle:e.sectionSubTitle},{image:N},{description:w},{section:F}];(new FormData).append("innovationData",t),g(null),S(!0)})),children:[Object(d.jsx)("br",{}),m&&Object(d.jsx)("p",{className:"text-danger",children:m}),Object(d.jsxs)(l.ub,{children:[Object(d.jsx)(l.u,{xs:"6",children:Object(d.jsxs)(l.K,{children:[Object(d.jsx)(l.ab,{htmlFor:"category",children:"Section Title"}),Object(d.jsx)(l.T,{className:"mb-3",children:Object(d.jsx)(o.a,{name:"sectionTitle",control:t,defaultValue:"",rules:{required:{value:!0,message:"Section title is required"}},render:function(e){var t=e.field;return Object(d.jsx)(l.Q,Object(n.a)(Object(n.a)({},t),{},{type:"text",placeholder:"Section title",autoComplete:"Section title"}))}})}),Object(d.jsx)(l.L,{className:"help-block text-danger",color:"red",children:j.sectionTitle&&j.sectionTitle.message})]})}),Object(d.jsx)(l.u,{xs:"6",children:Object(d.jsxs)(l.K,{children:[Object(d.jsx)(l.ab,{htmlFor:"category",children:"Section sub title"}),Object(d.jsx)(l.T,{className:"mb-3",children:Object(d.jsx)(o.a,{name:"sectionSubTitle",control:t,defaultValue:"",rules:{required:{value:!0,message:"Sub title is required"}},render:function(e){var t=e.field;return Object(d.jsx)(l.Q,Object(n.a)(Object(n.a)({},t),{},{type:"text",placeholder:"Technology name",autoComplete:"Technology name"}))}})}),Object(d.jsx)(l.L,{className:"help-block text-danger",color:"red",children:j.sectionSubTitle&&j.sectionSubTitle.message})]})})]}),Object(d.jsx)(l.ub,{children:Object(d.jsxs)(l.u,{xs:"6",children:[Object(d.jsx)(l.ab,{htmlFor:"category",children:"Image"}),Object(d.jsxs)(l.T,{className:"mb-3",children:[Object(d.jsx)(l.ab,{htmlFor:"Image",variant:"custom-file",children:"Choose image..."}),Object(d.jsx)(l.S,{onChange:function(e){C(e.target.files[0])},custom:!0,id:"Image",type:"file",multiple:"true"})]})]})}),Object(d.jsx)(l.ub,{children:Object(d.jsx)(l.u,{xl:"12",children:Object(d.jsxs)(l.K,{children:[Object(d.jsx)(l.ab,{htmlFor:"category",children:"Description"}),Object(d.jsx)(u.a,{onEditorValue:function(e){K(e)}}),Object(d.jsx)(l.L,{className:"help-block text-danger",color:"red",children:j.description&&j.description.message})]})})}),Object(d.jsx)(l.ub,{children:Object(d.jsxs)(l.u,{xs:"12",className:"my-4",children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"advantage section"})]})}),F.map((function(e,t){return Object(d.jsxs)(l.ub,{children:[Object(d.jsx)(l.u,{xl:"5",children:Object(d.jsxs)(l.K,{children:[Object(d.jsx)(l.ab,{htmlFor:"category",children:"Heading"}),Object(d.jsx)(l.T,{children:Object(d.jsx)(l.Q,{name:"sectionHeading",onChange:function(e){return L(e,t)},value:e.sectionHeading,type:"text",placeholder:"Heading",autoComplete:"Heading"})})]})}),Object(d.jsxs)(l.u,{xs:"5",children:[Object(d.jsx)(l.ab,{htmlFor:"category",children:"Image"}),Object(d.jsxs)(l.T,{className:"mb-3",children:[Object(d.jsx)(l.ab,{htmlFor:"Image",variant:"custom-file",children:"Choose image..."}),Object(d.jsx)(l.S,{onChange:function(e){return L(e,t)},name:"sectionImage",custom:!0,id:"Image",type:"file",multiple:"true"})]})]}),1!==F.length&&Object(d.jsx)(l.u,{xs:"1",className:"mb-auto mt-auto",children:Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return function(e){var t=Object(s.a)(F);t.splice(e,1),k(t)}(t)},className:"btn btn-danger",type:"button",children:"Remove"})})}),F.length-1===t&&Object(d.jsx)(l.u,{xs:"1",className:"mb-auto mt-auto",children:Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:E,className:"btn btn-success",type:"button",children:"Add"})})}),Object(d.jsx)(l.u,{xl:"12",children:Object(d.jsxs)(l.K,{children:[Object(d.jsx)(l.ab,{htmlFor:"category",children:"Description"}),Object(d.jsx)(l.T,{children:Object(d.jsx)(l.Jb,{id:"content",rows:"3",name:"sectionDescription",onChange:function(e){return L(e,t)},value:e.sectionDescription})})]})})]},t)})),Object(d.jsx)(l.ub,{children:Object(d.jsx)(l.u,{xs:"8",children:Object(d.jsx)("button",{className:"btn btn-success",disabled:!!v,type:"submit",children:v?"Loading...":"Save"})})})]})})]})})})})}},1388:function(e,t,c){},1389:function(e,t,c){},661:function(e,t,c){"use strict";var n=c(1),s=c(637),i=c(686),a=c(687),l=c.n(a),r=c(13);t.a=function(e,t){Object(n.useRef)();return Object(r.jsx)("div",{children:Object(r.jsx)(s.ub,{children:Object(r.jsx)(s.u,{xs:"12",sm:"12",children:Object(r.jsx)(i.CKEditor,{editor:l.a,data:e.editorValue?e.editorValue:"",onChange:function(t,c){c.getData()&&e.onEditorValue(c.getData())}})})})})}}}]);
//# sourceMappingURL=18.69af7969.chunk.js.map