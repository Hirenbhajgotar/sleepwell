(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[114],{1371:function(t,e,i){"use strict";i.r(e);var n=i(25),o=i(638),s=i(1),c=i(637),r=i(647),a=i(18),h=i(640),l=i.n(h),u=i(653),d=i(652),p=i(13),b=(i(639).default,d.b().shape({title:d.c().required()}));e.default=function(){var t=Object(r.e)({mode:"all",resolver:Object(u.a)(b)}),e=t.control,i=t.handleSubmit,h=t.formState.errors,d=(Object(a.g)(),Object(s.useState)(null)),j=Object(o.a)(d,2),f=j[0],x=j[1],m=Object(s.useState)(!1),O=Object(o.a)(m,2),v=O[0],y=O[1],g=Object(s.useState)(!1),k=Object(o.a)(g,2),w=k[0],S=k[1],C=Object(s.useState)(""),T=Object(o.a)(C,2),M=T[0],D=T[1],E=Object(s.useState)(""),L=Object(o.a)(E,2),B=L[0],I=L[1],N=Object(s.useState)(""),W=Object(o.a)(N,2),H=W[0],F=W[1],R=Object(s.useState)(""),U=Object(o.a)(R,2),z=U[0],A=U[1],K=Object(s.useState)(""),X=Object(o.a)(K,2),_=X[0],J=X[1];sessionStorage.getItem("token");return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(c.ub,{children:Object(p.jsx)(c.u,{xs:"12",sm:"12",children:Object(p.jsxs)(c.j,{children:[Object(p.jsx)(c.n,{children:"Add service action card"}),Object(p.jsx)(c.k,{children:Object(p.jsxs)(c.J,{onSubmit:i((function(t){var e=new FormData,i=w?1:0;e.append("status",i),e.append("title",t.title),e.append("image",M),e.append("buttonText",B),e.append("buttonLink",H),e.append("description",z),x(null),y(!0)})),children:[Object(p.jsx)("br",{}),f&&Object(p.jsx)("p",{className:"text-danger",children:f}),Object(p.jsxs)(c.ub,{children:[Object(p.jsx)(c.u,{xs:"6",children:Object(p.jsxs)(c.K,{children:[Object(p.jsx)(c.ab,{htmlFor:"category",children:"Title"}),Object(p.jsx)(c.T,{className:"mb-3",children:Object(p.jsx)(r.a,{name:"title",control:e,defaultValue:"",rules:{required:{value:!0,message:"Categoty is required"}},render:function(t){var e=t.field;return Object(p.jsx)(c.Q,Object(n.a)(Object(n.a)({},e),{},{type:"text",placeholder:"Category",autoComplete:"category"}))}})}),Object(p.jsx)(c.L,{className:"help-block text-danger",color:"red",children:h.title&&h.title.message})]})}),Object(p.jsxs)(c.u,{xs:"6",children:[Object(p.jsx)(c.ab,{htmlFor:"category",children:"Image"}),Object(p.jsxs)(c.T,{className:"mb-3",children:[Object(p.jsx)(c.ab,{htmlFor:"categoryImage",variant:"custom-file",children:"Choose image..."}),Object(p.jsx)(c.S,{onChange:function(t){D(t.target.files[0])},custom:!0,id:"categoryImage",type:"file"})]})]})]}),Object(p.jsxs)(c.ub,{children:[Object(p.jsx)(c.u,{xl:"6",children:Object(p.jsxs)(c.K,{children:[Object(p.jsx)(c.ab,{htmlFor:"Button Text",children:"Button Text"}),Object(p.jsx)(c.T,{children:Object(p.jsx)(c.Q,{type:"text",onChange:function(t){I(t.target.value)},value:B,placeholder:"Button Text",autoComplete:"Button Text"})})]})}),Object(p.jsx)(c.u,{xl:"6",children:Object(p.jsxs)(c.K,{children:[Object(p.jsx)(c.ab,{htmlFor:"Button Link",children:"Button Link"}),Object(p.jsx)(c.T,{children:Object(p.jsx)(c.Q,{type:"text",onChange:function(t){F(t.target.value)},value:H,placeholder:"Button Link",autoComplete:"Button Link"})})]})})]}),Object(p.jsx)(c.ub,{children:Object(p.jsx)(c.u,{xl:"6",children:Object(p.jsxs)(c.K,{children:[Object(p.jsx)(c.ab,{htmlFor:"Button Link",children:"Sort Order"}),Object(p.jsx)(c.T,{children:Object(p.jsx)(c.Q,{type:"text",onChange:function(t){J(t.target.value)},value:_,placeholder:"Button Link",autoComplete:"Button Link"})})]})})}),Object(p.jsx)(c.ub,{children:Object(p.jsx)(c.u,{xl:"12",children:Object(p.jsxs)(c.K,{children:[Object(p.jsx)(c.ab,{htmlFor:"category",children:"Description"}),Object(p.jsx)(c.T,{children:Object(p.jsx)(c.Jb,{id:"content",rows:"3",onChange:function(t){A(t.target.value)},value:z})})]})})}),Object(p.jsx)(c.ub,{children:Object(p.jsx)(c.u,{xl:"6",children:Object(p.jsxs)(c.K,{children:[Object(p.jsx)(c.ab,{htmlFor:"category",children:"Status"}),Object(p.jsx)(c.T,{children:Object(p.jsx)(l.a,{onChange:function(t){S(t)},checked:w})})]})})}),Object(p.jsx)(c.ub,{children:Object(p.jsx)(c.u,{xs:"8",children:Object(p.jsx)("button",{className:"btn btn-success",disabled:!!v,type:"submit",children:v?"Loading...":"Add card"})})})]})})]})})})})}},640:function(t,e,i){t.exports=i(641)},641:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var n=i(1);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var s=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),c=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function a(t,e,i,n,o){return function(t,e,i,n,o){var s=(t-i)/(e-i);if(0===s)return n;if(1===s)return o;for(var c="#",r=1;r<6;r+=2){var a=parseInt(n.substr(r,2),16),h=parseInt(o.substr(r,2),16),l=Math.round((1-s)*a+s*h).toString(16);1===l.length&&(l="0"+l),c+=l}return c}(t,e,i,r(n),r(o))}var h=function(t){function e(e){t.call(this,e);var i=e.height,n=e.width,o=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,i=e.R,n=e.h,o=(this.props.checked?this.i:this.o)+t-i;e.N||t===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==n&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,i=e.h,n=e.N,o=e.B,s=this.props.checked,c=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-o;(!n||r<250||s&&i<=c||!s&&i>=c)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,i=t.disabled,s=t.className,c=t.offColor,r=t.onColor,h=t.offHandleColor,l=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,j=t.boxShadow,f=t.activeBoxShadow,x=t.height,m=t.width,O=t.borderRadius,v=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(i[n]=t[n]);return i}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),y=this.state,g=y.h,k=y.N,w=y.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:x/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:x,width:m,margin:Math.max(0,(this.t-x)/2),position:"relative",background:a(g,this.i,this.o,c,r),borderRadius:"number"==typeof O?O:x/2,cursor:i?"default":"pointer",WebkitTransition:k?null:"background 0.25s",MozTransition:k?null:"background 0.25s",transition:k?null:"background 0.25s"},T={height:x,width:Math.min(1.5*x,m-(this.t+x)/2+1),position:"relative",opacity:(g-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},M={height:x,width:Math.min(1.5*x,m-(this.t+x)/2+1),position:"absolute",opacity:1-(g-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:a(g,this.i,this.o,h,l),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof O?O-1:"50%",position:"absolute",transform:"translateX("+g+"px)",top:Math.max(0,(x-this.t)/2),outline:0,boxShadow:w?f:j,border:0,WebkitTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(g-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},L={height:this.t,width:this.t,opacity:Math.max(2*((g-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"};return n.createElement("div",{className:s,style:S},n.createElement("div",{className:"react-switch-bg",style:C,onClick:i?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&n.createElement("div",{style:T},u),d&&n.createElement("div",{style:M},d)),n.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},b&&n.createElement("div",{style:E},b),p&&n.createElement("div",{style:L},p)),n.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},v,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(n.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:c,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h}}]);
//# sourceMappingURL=114.19747a5b.chunk.js.map