(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[107],{1385:function(t,e,i){"use strict";i.r(e);var o=i(25),n=i(638),s=i(1),a=i(637),h=i(647),r=i(18),c=i(640),l=i.n(c),d=i(653),u=i(652),p=i(13),b=i(639).default,f=u.b().shape({title:u.c().required()});e.default=function(){var t=Object(h.e)({mode:"all",resolver:Object(d.a)(f)}),e=t.register,i=t.handleSubmit,c=t.formState.errors,u=Object(r.g)(),m=Object(s.useState)(null),j=Object(n.a)(m,2),y=j[0],v=j[1],g=Object(s.useState)(!1),x=Object(n.a)(g,2),k=x[0],O=x[1],w=Object(s.useState)(!0),S=Object(n.a)(w,2),M=S[0],T=S[1],C=Object(s.useState)(""),D=Object(n.a)(C,2),E=D[0],I=D[1],W=sessionStorage.getItem("token");return Object(p.jsx)("div",{children:Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xs:"12",sm:"12",children:Object(p.jsxs)(a.j,{children:[Object(p.jsx)(a.n,{children:"Add Material"}),Object(p.jsx)(a.k,{children:Object(p.jsxs)(a.J,{onSubmit:i((function(t){var e=new FormData,i=M?1:0;e.append("status",i),e.append("title",t.title),e.append("image",E),v(null),O(!0),b.post("http://markbran.in/apis/admin/material",e,{headers:{"Content-Type":"multipart/form-data","auth-token":W}}).then((function(t){O(!1),u.push("/material"),console.log(t.response.data)})).catch((function(t){O(!1),t.response&&t.response.data.message?v(t.response.data.message):v("Something went wrong!")}))})),children:[Object(p.jsx)("br",{}),y&&Object(p.jsx)("p",{className:"text-danger",children:y}),Object(p.jsxs)(a.ub,{children:[Object(p.jsx)(a.u,{xl:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"Title",children:"Title"}),Object(p.jsx)(a.T,{children:Object(p.jsx)(a.Q,Object(o.a)(Object(o.a)({type:"text"},e("title")),{},{placeholder:"Title",autoComplete:"Title"}))}),Object(p.jsx)(a.L,{className:"help-block text-danger",color:"red",children:c.title&&c.title.message})]})}),Object(p.jsxs)(a.u,{xs:"6",children:[Object(p.jsx)(a.ab,{htmlFor:"category",children:"Image"}),Object(p.jsxs)(a.T,{className:"mb-3",children:[Object(p.jsx)(a.ab,{htmlFor:"categoryImage",variant:"custom-file",children:"Choose image..."}),Object(p.jsx)(a.S,{onChange:function(t){I(t.target.files[0])},custom:!0,id:"categoryImage",type:"file"})]})]})]}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xl:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"category",children:"Status"}),Object(p.jsx)(a.T,{children:Object(p.jsx)(l.a,{onChange:function(t){T(t)},checked:M})})]})})}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xs:"8",children:Object(p.jsx)("button",{className:"btn btn-success",disabled:!!k,type:"submit",children:k?"Loading...":"Add material"})})})]})})]})})})})}},640:function(t,e,i){t.exports=i(641)},641:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var o=i(1);function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}var s=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function h(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function r(t,e,i,o,n){return function(t,e,i,o,n){var s=(t-i)/(e-i);if(0===s)return o;if(1===s)return n;for(var a="#",h=1;h<6;h+=2){var r=parseInt(o.substr(h,2),16),c=parseInt(n.substr(h,2),16),l=Math.round((1-s)*r+s*c).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,i,h(o),h(n))}var c=function(t){function e(e){t.call(this,e);var i=e.height,o=e.width,n=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(o-i,o-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:n?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,i=e.R,o=e.h,n=(this.props.checked?this.i:this.o)+t-i;e.N||t===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,n));s!==o&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,i=e.h,o=e.N,n=e.B,s=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var h=Date.now()-n;(!o||h<250||s&&i<=a||!s&&i>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,i=t.disabled,s=t.className,a=t.offColor,h=t.onColor,c=t.offHandleColor,l=t.onHandleColor,d=t.checkedIcon,u=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,f=t.boxShadow,m=t.activeBoxShadow,j=t.height,y=t.width,v=t.borderRadius,g=function(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(i[o]=t[o]);return i}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),x=this.state,k=x.h,O=x.N,w=x.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:j/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},M={height:j,width:y,margin:Math.max(0,(this.t-j)/2),position:"relative",background:r(k,this.i,this.o,a,h),borderRadius:"number"==typeof v?v:j/2,cursor:i?"default":"pointer",WebkitTransition:O?null:"background 0.25s",MozTransition:O?null:"background 0.25s",transition:O?null:"background 0.25s"},T={height:j,width:Math.min(1.5*j,y-(this.t+j)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:O?null:"opacity 0.25s",MozTransition:O?null:"opacity 0.25s",transition:O?null:"opacity 0.25s"},C={height:j,width:Math.min(1.5*j,y-(this.t+j)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:O?null:"opacity 0.25s",MozTransition:O?null:"opacity 0.25s",transition:O?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:r(k,this.i,this.o,c,l),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof v?v-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(j-this.t)/2),outline:0,boxShadow:w?m:f,border:0,WebkitTransition:O?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:O?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:O?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:O?null:"opacity 0.25s",MozTransition:O?null:"opacity 0.25s",transition:O?null:"opacity 0.25s"},I={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:O?null:"opacity 0.25s",MozTransition:O?null:"opacity 0.25s",transition:O?null:"opacity 0.25s"};return o.createElement("div",{className:s,style:S},o.createElement("div",{className:"react-switch-bg",style:M,onClick:i?null:this.T,onMouseDown:function(t){return t.preventDefault()}},d&&o.createElement("div",{style:T},d),u&&o.createElement("div",{style:C},u)),o.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},b&&o.createElement("div",{style:E},b),p&&o.createElement("div",{style:I},p)),o.createElement("input",n({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(o.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=c}}]);
//# sourceMappingURL=107.74769103.chunk.js.map