(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[50],{1319:function(e,t,n){"use strict";n.r(t);var r=n(638),a=n(1),o=n(637),c=n(639),i=n.n(c),s=n(643),u=n.n(s),l=n(645),d=(n(646),n(13));t.default=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),m=Object(r.a)(s,2),f=m[0],y=m[1],b=Object(a.useState)(!1),h=Object(r.a)(b,2),p=h[0],j=h[1],v=Object(a.useState)(""),g=Object(r.a)(v,2),O=g[0],M=g[1],C=sessionStorage.getItem("token"),N=function(e){i.a.delete("http://markbran.in/apis/admin/faq/".concat(e),{headers:{"auth-token":C}}).then((function(e){y(!0),j(!1),D()})).catch((function(e){y(!1),j(!0),M(e.response.data.message)}))},D=function(){i.a.get("http://markbran.in/apis/admin/faq",{headers:{"auth-token":C}}).then((function(e){c(e.data.faqs)})).catch((function(e){e.response&&e.response.data.message&&(y(!1),j(!0),M(e.response.data.message))}))};return Object(a.useEffect)((function(){D()}),[]),Object(d.jsx)(o.ub,{children:Object(d.jsx)(o.u,{xl:12,children:Object(d.jsxs)(o.j,{children:[Object(d.jsxs)(o.n,{children:["FAQ",Object(d.jsx)(o.bb,{style:{float:"right"},className:"btn btn-success",to:"/faq/add-faq",children:"Add FAQ"})]}),Object(d.jsxs)(o.k,{children:[f?Object(d.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(d.jsx)("strong",{children:"Deleted"})," Your item has been deleted successfully.",Object(d.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(d.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,p?Object(d.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(d.jsx)("strong",{children:"Alert "})," ",O||"Something went wrong try again later !.",Object(d.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(d.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,Object(d.jsxs)("table",{className:"table table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"#"}),Object(d.jsx)("th",{scope:"col",children:"Question"}),Object(d.jsx)("th",{scope:"col",children:"Answer"}),Object(d.jsx)("th",{scope:"col",children:"Create at"}),Object(d.jsx)("th",{scope:"col",children:"Action"})]})}),Object(d.jsx)("tbody",{children:n.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:t+1}),Object(d.jsx)("td",{children:e.question}),Object(d.jsx)("td",{children:e.answer}),Object(d.jsx)("td",{children:u()(e.createdAt,"mmmm dS, yyyy")}),Object(d.jsxs)("td",{children:[Object(d.jsx)(o.bb,{className:"btn btn-sm btn-outline-warning",to:"/faq/edit-faq/".concat(e.id),children:"Edit"}),Object(d.jsx)("button",{onClick:function(){return t=e.id,void Object(l.confirmAlert)({title:"Are you sure?",message:"You want to delete this item?",buttons:[{label:"Yes, Delete it",onClick:function(){return N(t)}},{label:"No"}]});var t},type:"button",className:"btn btn-sm btn-outline-danger",children:"Delete"})]})]},e.id)}))})]})]})]})})})}},643:function(e,t,n){"use strict";var r;function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o){var c=arguments,i=function(){var e=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(r,a,o,f){if(1!==c.length||"string"!==m(r)||/\d/.test(r)||(a=r,r=void 0),(r=r||0===r?r:new Date)instanceof Date||(r=new Date(r)),isNaN(r))throw TypeError("Invalid date");var y=(a=String(i.masks[a]||a||i.masks.default)).slice(0,4);"UTC:"!==y&&"GMT:"!==y||(a=a.slice(4),o=!0,"GMT:"===y&&(f=!0));var b=function(){return o?"getUTC":"get"},h=function(){return r[b()+"Date"]()},p=function(){return r[b()+"Day"]()},j=function(){return r[b()+"Month"]()},v=function(){return r[b()+"FullYear"]()},g=function(){return r[b()+"Hours"]()},O=function(){return r[b()+"Minutes"]()},M=function(){return r[b()+"Seconds"]()},C=function(){return r[b()+"Milliseconds"]()},N=function(){return o?0:r.getTimezoneOffset()},D=function(){return l(r)},T={d:function(){return h()},dd:function(){return s(h())},ddd:function(){return i.i18n.dayNames[p()]},DDD:function(){return u({y:v(),m:j(),d:h(),_:b(),dayName:i.i18n.dayNames[p()],short:!0})},dddd:function(){return i.i18n.dayNames[p()+7]},DDDD:function(){return u({y:v(),m:j(),d:h(),_:b(),dayName:i.i18n.dayNames[p()+7]})},m:function(){return j()+1},mm:function(){return s(j()+1)},mmm:function(){return i.i18n.monthNames[j()]},mmmm:function(){return i.i18n.monthNames[j()+12]},yy:function(){return String(v()).slice(2)},yyyy:function(){return s(v(),4)},h:function(){return g()%12||12},hh:function(){return s(g()%12||12)},H:function(){return g()},HH:function(){return s(g())},M:function(){return O()},MM:function(){return s(O())},s:function(){return M()},ss:function(){return s(M())},l:function(){return s(C(),3)},L:function(){return s(Math.floor(C()/10))},t:function(){return g()<12?i.i18n.timeNames[0]:i.i18n.timeNames[1]},tt:function(){return g()<12?i.i18n.timeNames[2]:i.i18n.timeNames[3]},T:function(){return g()<12?i.i18n.timeNames[4]:i.i18n.timeNames[5]},TT:function(){return g()<12?i.i18n.timeNames[6]:i.i18n.timeNames[7]},Z:function(){return f?"GMT":o?"UTC":(String(r).match(t)||[""]).pop().replace(n,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(N()>0?"-":"+")+s(100*Math.floor(Math.abs(N())/60)+Math.abs(N())%60,4)},p:function(){return(N()>0?"-":"+")+s(Math.floor(Math.abs(N())/60),2)+":"+s(Math.floor(Math.abs(N())%60),2)},S:function(){return["th","st","nd","rd"][h()%10>3?0:(h()%100-h()%10!=10)*h()%10]},W:function(){return D()},WW:function(){return s(D())},N:function(){return d(r)}};return a.replace(e,(function(e){return e in T?T[e]():e.slice(1,e.length-1)}))}}();i.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},i.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var s=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},u=function(e){var t=e.y,n=e.m,r=e.d,a=e._,o=e.dayName,c=e.short,i=void 0!==c&&c,s=new Date,u=new Date;u.setDate(u[a+"Date"]()-1);var l=new Date;l.setDate(l[a+"Date"]()+1);return s[a+"FullYear"]()===t&&s[a+"Month"]()===n&&s[a+"Date"]()===r?i?"Tdy":"Today":u[a+"FullYear"]()===t&&u[a+"Month"]()===n&&u[a+"Date"]()===r?i?"Ysd":"Yesterday":l[a+"FullYear"]()===t&&l[a+"Month"]()===n&&l[a+"Date"]()===r?i?"Tmw":"Tomorrow":o},l=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var a=(t-n)/6048e5;return 1+Math.floor(a)},d=function(e){var t=e.getDay();return 0===t&&(t=7),t},m=function(e){return null===e?"null":void 0===e?"undefined":"object"!==a(e)?a(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}(void 0)},645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,u.render)(i.default.createElement(f,e),t)}(e)};var c=n(1),i=l(c),s=l(n(58)),u=n(86);function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=(a=r=function(e){function t(){var e,n,r;d(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,a=t.onClickOutside,o=e.target===r.overlay;n&&o&&(a(),r.close())},r.close=function(){var e=r.props.afterClose;h(),b(),y(e)},r.keyboardClose=function(e){var t=r.props,n=t.closeOnEscape,a=t.onKeypressEscape,o=27===e.keyCode;n&&o&&(a(e),r.close())},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboardClose,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboardClose,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,a=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:a,onClose:r.close})},m(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,a=t.buttons,o=t.childrenElement,c=t.customUI,s=t.overlayClassName;return i.default.createElement("div",{className:"react-confirm-alert-overlay "+s,ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},i.default.createElement("div",{className:"react-confirm-alert"},c?this.renderCustomUI():i.default.createElement("div",{className:"react-confirm-alert-body"},n&&i.default.createElement("h1",null,n),r,o(),i.default.createElement("div",{className:"react-confirm-alert-button-group"},a.map((function(t,n){return i.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(c.Component),r.propTypes={title:s.default.string,message:s.default.string,buttons:s.default.array.isRequired,childrenElement:s.default.func,customUI:s.default.func,closeOnClickOutside:s.default.bool,closeOnEscape:s.default.bool,willUnmount:s.default.func,afterClose:s.default.func,onClickOutside:s.default.func,onKeypressEscape:s.default.func,overlayClassName:s.default.string},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},a);function y(e){var t=document.getElementById("react-confirm-alert-firm-svg");t&&t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function b(){var e=document.getElementById("react-confirm-alert");e&&((0,u.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function h(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=f},646:function(e,t,n){}}]);
//# sourceMappingURL=50.bdbe8d0d.chunk.js.map