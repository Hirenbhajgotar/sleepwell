(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[80],{1287:function(t,e,i){"use strict";i.r(e);var n=i(25),o=i(638),s=i(1),a=i(637),c=i(648),r=i(656),h=i(655),l=i(18),d=i(641),u=i.n(d),p=i(13),b=i(639).default,f=h.b().shape({name:h.c().required()});e.default=function(){var t=Object(l.i)(),e=Object(c.e)({mode:"all",resolver:Object(r.a)(f)}),i=e.control,h=e.handleSubmit,d=e.setValue,j=(e.register,e.formState.errors),m=Object(l.g)(),v=Object(s.useState)(null),g=Object(o.a)(v,2),x=g[0],O=g[1],y=Object(s.useState)(!1),k=Object(o.a)(y,2),w=k[0],S=k[1],C=Object(s.useState)(!1),M=Object(o.a)(C,2),T=M[0],D=M[1],E=Object(s.useState)(""),I=Object(o.a)(E,2),N=I[0],W=I[1],H=Object(s.useState)([]),L=Object(o.a)(H,2),z=L[0],A=L[1],B=Object(s.useState)(""),U=Object(o.a)(B,2),R=U[0],F=U[1],X=sessionStorage.getItem("token");Object(s.useEffect)((function(){b.get("http://markbran.in/apis/admin/advantage/".concat(t.id),{headers:{"auth-token":X}}).then((function(t){console.log(t.data),A(t.data.advantage)})).catch((function(t){t.response&&t.response.data.message?O(t.response.data.message):O("Something went wrong!")})),A&&d("name",z.advantage),D(z.status)}),[z.status,z.advantage]);return Object(p.jsx)("div",{children:Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xs:"12",sm:"12",children:Object(p.jsxs)(a.j,{children:[Object(p.jsx)(a.n,{children:"Edit Advantage"}),Object(p.jsx)(a.k,{children:Object(p.jsxs)(a.J,{onSubmit:h((function(e){var i=new FormData,n=T?1:0;i.append("status",n),i.append("advantage",e.name),i.append("icon",N),i.append("video",R),O(null),S(!0),b.patch("http://markbran.in/apis/admin/advantage/".concat(t.id),i,{headers:{"Content-Type":"multipart/form-data","auth-token":X}}).then((function(t){S(!1),m.push("/advantages")})).catch((function(t){S(!1),t.response&&t.response.data.message?O(t.response.data.message):O("Something went wrong!")}))})),children:[Object(p.jsx)("br",{}),x&&Object(p.jsx)("p",{className:"text-danger",children:x}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xs:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"benifit",children:"Advantage"}),Object(p.jsx)(a.T,{className:"mb-3",children:Object(p.jsx)(c.a,{name:"name",control:i,defaultValue:"",rules:{required:{value:!0,message:"Name is required"}},render:function(t){var e=t.field;return Object(p.jsx)(a.Q,Object(n.a)(Object(n.a)({},e),{},{type:"text",placeholder:"Benifit",autoComplete:"Benifit"}))}})}),Object(p.jsx)(a.L,{className:"help-block text-danger",color:"red",children:j.name&&j.name.message})]})})}),Object(p.jsxs)(a.ub,{children:[Object(p.jsx)(a.u,{xs:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"size",children:"Advantage Icon"}),Object(p.jsxs)(a.T,{className:"mb-3",children:[Object(p.jsx)(a.ab,{htmlFor:"advantageImage",variant:"custom-file",children:"Choose image..."}),Object(p.jsx)(a.S,{onChange:function(t){W(t.target.files[0])},custom:!0,id:"advantageImage",type:"file"})]})]})}),Object(p.jsx)(a.u,{xs:"2",children:Object(p.jsx)("img",{src:"".concat("http://markbran.in/sleepwell/").concat(z.icon),className:"img-fluid",alt:""})})]}),Object(p.jsxs)(a.ub,{children:[Object(p.jsx)(a.u,{xs:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"size",children:"Advantage Video"}),Object(p.jsxs)(a.T,{className:"mb-3",children:[Object(p.jsx)(a.ab,{htmlFor:"categoryVideo",variant:"custom-file",children:"Choose video..."}),Object(p.jsx)(a.S,{onChange:function(t){F(t.target.files[0])},custom:!0,id:"categoryVideo",type:"file"})]})]})}),Object(p.jsx)(a.u,{xs:"1",children:Object(p.jsx)("p",{children:z.videos})})]}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xl:"8",children:Object(p.jsx)(a.K,{children:Object(p.jsx)(a.T,{children:Object(p.jsx)(u.a,{onChange:function(t){D(t)},checked:T})})})})}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xs:"8",children:Object(p.jsx)("button",{className:"btn btn-success",disabled:!!w,type:"submit",children:w?"Loading...":"Update advantage"})})})]})})]})})})})}},641:function(t,e,i){t.exports=i(642)},642:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var n=i(1);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var s=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function c(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function r(t,e,i,n,o){return function(t,e,i,n,o){var s=(t-i)/(e-i);if(0===s)return n;if(1===s)return o;for(var a="#",c=1;c<6;c+=2){var r=parseInt(n.substr(c,2),16),h=parseInt(o.substr(c,2),16),l=Math.round((1-s)*r+s*h).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,i,c(n),c(o))}var h=function(t){function e(e){t.call(this,e);var i=e.height,n=e.width,o=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,i=e.R,n=e.h,o=(this.props.checked?this.i:this.o)+t-i;e.N||t===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==n&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,i=e.h,n=e.N,o=e.B,s=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var c=Date.now()-o;(!n||c<250||s&&i<=a||!s&&i>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,i=t.disabled,s=t.className,a=t.offColor,c=t.onColor,h=t.offHandleColor,l=t.onHandleColor,d=t.checkedIcon,u=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,f=t.boxShadow,j=t.activeBoxShadow,m=t.height,v=t.width,g=t.borderRadius,x=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(i[n]=t[n]);return i}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),O=this.state,y=O.h,k=O.N,w=O.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:m,width:v,margin:Math.max(0,(this.t-m)/2),position:"relative",background:r(y,this.i,this.o,a,c),borderRadius:"number"==typeof g?g:m/2,cursor:i?"default":"pointer",WebkitTransition:k?null:"background 0.25s",MozTransition:k?null:"background 0.25s",transition:k?null:"background 0.25s"},M={height:m,width:Math.min(1.5*m,v-(this.t+m)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},T={height:m,width:Math.min(1.5*m,v-(this.t+m)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:r(y,this.i,this.o,h,l),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof g?g-1:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:w?j:f,border:0,WebkitTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},I={height:this.t,width:this.t,opacity:Math.max(2*((y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"};return n.createElement("div",{className:s,style:S},n.createElement("div",{className:"react-switch-bg",style:C,onClick:i?null:this.T,onMouseDown:function(t){return t.preventDefault()}},d&&n.createElement("div",{style:M},d),u&&n.createElement("div",{style:T},u)),n.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},b&&n.createElement("div",{style:E},b),p&&n.createElement("div",{style:I},p)),n.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},x,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(n.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h}}]);
//# sourceMappingURL=80.022a4496.chunk.js.map