(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[20],{1123:function(t,e,c){"use strict";c.r(e);var n=c(710),r=c(638),o=c(1),a=c(637),s=c(651),i=c(13);e.default=function(){var t=Object(o.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(r.a)(t,2),c=e[0],u=e[1],l=Object(o.useState)("top-right"),b=Object(r.a)(l,2),j=b[0],h=b[1],d=Object(o.useState)(!0),m=Object(r.a)(d,2),f=m[0],O=m[1],p=Object(o.useState)(5e3),x=Object(r.a)(p,2),y=x[0],v=x[1],g=Object(o.useState)(!0),k=Object(r.a)(g,2),w=k[0],S=k[1],A=Object(o.useState)(!0),N=Object(r.a)(A,2),C=N[0],T=N[1],K=c.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return Object(i.jsxs)(a.j,{children:[Object(i.jsxs)(a.n,{children:["Toasts.",Object(i.jsx)(s.a,{name:"-Toast"})]}),Object(i.jsx)(a.k,{children:Object(i.jsx)(a.w,{children:Object(i.jsxs)(a.ub,{children:[Object(i.jsx)(a.u,{sm:"12",lg:"6",children:Object(i.jsxs)(a.J,{children:[Object(i.jsx)("h5",{children:"Add toast with following props:"}),Object(i.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(i.jsx)(a.R,{id:"autohide",checked:f,onChange:function(t){O(t.target.checked)},custom:!0}),Object(i.jsx)(a.ab,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),f&&Object(i.jsxs)(a.K,{className:"my-2",children:[Object(i.jsx)(a.ab,{htmlFor:"ccyear",children:"Time to autohide"}),Object(i.jsx)(a.Q,{type:"number",value:y,onChange:function(t){v(Number(t.target.value))}})]}),Object(i.jsxs)(a.K,{className:"my-2",children:[Object(i.jsx)(a.ab,{htmlFor:"ccyear",children:"Position"}),Object(i.jsx)("select",{className:"form-control",value:j,onChange:function(t){h(t.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return Object(i.jsx)("option",{children:t},e)}))})]}),Object(i.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(a.R,{id:"fade",checked:C,onChange:function(t){T(t.target.checked)},custom:!0}),Object(i.jsx)(a.ab,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(i.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(a.R,{id:"close",custom:!0,checked:w,onChange:function(t){S(t.target.checked)}}),Object(i.jsx)(a.ab,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(i.jsx)(a.f,{className:"mr-1 w-25",color:"success",onClick:function(){u([].concat(Object(n.a)(c),[{position:j,autohide:f&&y,closeButton:w,fade:C}]))},children:"Add toast"})]})}),Object(i.jsx)(a.u,{sm:"12",lg:"6",children:Object.keys(K).map((function(t){return Object(i.jsx)(a.Nb,{position:t,children:K[t].map((function(e,c){return Object(i.jsxs)(a.Kb,{show:!0,autohide:e.autohide,fade:e.fade,children:[Object(i.jsx)(a.Mb,{closeButton:e.closeButton,children:"Toast title"}),Object(i.jsx)(a.Lb,{children:"This is a toast in ".concat(t," positioned toaster number ").concat(c+1,".")})]},"toast"+c)}))},"toaster"+t)}))})]})})})]})}},638:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(659);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],n=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(c.push(a.value),!e||c.length!==e);n=!0);}catch(i){r=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return c}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},651:function(t,e,c){"use strict";c.d(e,"a",(function(){return b}));var n=c(25),r=c(59),o=c(1),a=c.n(o),s=c(637),i=c(13),u=["name","text"],l=function(t){var e=t.name,c=t.text,o=Object(r.a)(t,u),a=e?"https://coreui.io/react/docs/components/".concat(e):t.href;return Object(i.jsx)("div",{className:"card-header-actions",children:Object(i.jsx)(s.bb,Object(n.a)(Object(n.a)({},o),{},{href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},b=a.a.memo(l)},659:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(660);function r(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(n.a)(t,e):void 0}}},660:function(t,e,c){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var c=0,n=new Array(e);c<e;c++)n[c]=t[c];return n}c.d(e,"a",(function(){return n}))},710:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var n=c(660);var r=c(659);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=20.00156ba7.chunk.js.map