(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[118],{1272:function(t,e,i){"use strict";i.r(e);var n=i(25),s=i(638),o=i(1),h=i(637),a=i(648),r=i(656),c=i(655),l=i(18),u=i(641),d=i.n(u),p=i(13),b=i(639).default,f=c.b().shape({thickness:c.a().required().positive()});e.default=function(){var t=Object(l.i)(),e=Object(a.e)({mode:"all",resolver:Object(r.a)(f)}),i=e.control,c=e.handleSubmit,u=e.setValue,m=(e.register,e.formState.errors),j=Object(l.g)(),k=Object(o.useState)(null),v=Object(s.a)(k,2),y=v[0],g=v[1],x=Object(o.useState)(!1),w=Object(s.a)(x,2),O=w[0],S=w[1],M=Object(o.useState)(!1),T=Object(s.a)(M,2),C=T[0],D=T[1],E=Object(o.useState)([]),I=Object(s.a)(E,2),W=I[0],H=I[1],N=sessionStorage.getItem("token");Object(o.useEffect)((function(){b.get("http://markbran.in/apis/admin/thickness/".concat(t.id),{headers:{"auth-token":N}}).then((function(t){H(t.data.thickness),g(null)})).catch((function(t){t.response.data.message?g(t.response.data.message):g("Something went wrong!")})),W&&u("thickness",W.thickness),D(!!W.status)}),[W.status,W.thickness]);return Object(p.jsx)(o.Fragment,{children:Object(p.jsx)(h.ub,{children:Object(p.jsx)(h.u,{xs:"12",sm:"12",children:Object(p.jsxs)(h.j,{children:[Object(p.jsx)(h.n,{children:"Edit Size"}),Object(p.jsx)(h.k,{children:Object(p.jsxs)(h.J,{onSubmit:c((function(e){var i=new FormData,n=C?1:0;i.append("status",n),i.append("thickness",e.thickness),g(null),S(!0),b.patch("http://markbran.in/apis/admin/thickness/".concat(t.id),i,{headers:{"auth-token":N}}).then((function(t){S(!1),j.push("/thickness")})).catch((function(t){S(!1),t.response&&t.response.data.message?g(t.response.data.message):g("Something went wrong!")}))})),children:[Object(p.jsx)("br",{}),y&&Object(p.jsx)("p",{className:"text-danger",children:y}),Object(p.jsx)(h.ub,{children:Object(p.jsx)(h.u,{xs:"6",children:Object(p.jsxs)(h.K,{children:[Object(p.jsx)(h.ab,{htmlFor:"size",children:"Thickness"}),Object(p.jsx)(h.T,{className:"mb-3",children:Object(p.jsx)(a.a,{name:"thickness",control:i,defaultValue:"",rules:{required:{value:!0,message:"Thickness is required"}},render:function(t){var e=t.field;return Object(p.jsx)(h.Q,Object(n.a)(Object(n.a)({},e),{},{type:"text",placeholder:"Thickness",autoComplete:"Thickness"}))}})}),Object(p.jsx)(h.L,{className:"help-block text-danger",color:"red",children:m.thickness&&m.thickness.message})]})})}),Object(p.jsx)(h.ub,{children:Object(p.jsx)(h.u,{xl:"8",children:Object(p.jsx)(h.K,{children:Object(p.jsx)(h.T,{children:Object(p.jsx)(d.a,{onChange:function(t){D(t)},checked:C})})})})}),Object(p.jsx)(h.ub,{children:Object(p.jsx)(h.u,{xs:"8",children:Object(p.jsx)("button",{className:"btn btn-success",disabled:!!O,type:"submit",children:O?"Loading...":"Update Size"})})})]})})]})})})})}},641:function(t,e,i){t.exports=i(642)},642:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var n=i(1);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var o=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),h=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function r(t,e,i,n,s){return function(t,e,i,n,s){var o=(t-i)/(e-i);if(0===o)return n;if(1===o)return s;for(var h="#",a=1;a<6;a+=2){var r=parseInt(n.substr(a,2),16),c=parseInt(s.substr(a,2),16),l=Math.round((1-o)*r+o*c).toString(16);1===l.length&&(l="0"+l),h+=l}return h}(t,e,i,a(n),a(s))}var c=function(t){function e(e){t.call(this,e);var i=e.height,n=e.width,s=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:s?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,i=e.R,n=e.h,s=(this.props.checked?this.i:this.o)+t-i;e.N||t===i||this.setState({N:!0});var o=Math.min(this.i,Math.max(this.o,s));o!==n&&this.setState({h:o})},e.prototype.U=function(t){var e=this.state,i=e.h,n=e.N,s=e.B,o=this.props.checked,h=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-s;(!n||a<250||o&&i<=h||!o&&i>=h)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,i=t.disabled,o=t.className,h=t.offColor,a=t.onColor,c=t.offHandleColor,l=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,f=t.boxShadow,m=t.activeBoxShadow,j=t.height,k=t.width,v=t.borderRadius,y=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(i[n]=t[n]);return i}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),g=this.state,x=g.h,w=g.N,O=g.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:j/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},M={height:j,width:k,margin:Math.max(0,(this.t-j)/2),position:"relative",background:r(x,this.i,this.o,h,a),borderRadius:"number"==typeof v?v:j/2,cursor:i?"default":"pointer",WebkitTransition:w?null:"background 0.25s",MozTransition:w?null:"background 0.25s",transition:w?null:"background 0.25s"},T={height:j,width:Math.min(1.5*j,k-(this.t+j)/2+1),position:"relative",opacity:(x-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},C={height:j,width:Math.min(1.5*j,k-(this.t+j)/2+1),position:"absolute",opacity:1-(x-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:r(x,this.i,this.o,c,l),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof v?v-1:"50%",position:"absolute",transform:"translateX("+x+"px)",top:Math.max(0,(j-this.t)/2),outline:0,boxShadow:O?m:f,border:0,WebkitTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(x-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},I={height:this.t,width:this.t,opacity:Math.max(2*((x-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"};return n.createElement("div",{className:o,style:S},n.createElement("div",{className:"react-switch-bg",style:M,onClick:i?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&n.createElement("div",{style:T},u),d&&n.createElement("div",{style:C},d)),n.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},b&&n.createElement("div",{style:E},b),p&&n.createElement("div",{style:I},p)),n.createElement("input",s({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},y,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(n.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:o,checkedIcon:h,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=c}}]);
//# sourceMappingURL=118.bc570904.chunk.js.map