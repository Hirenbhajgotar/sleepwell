(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[164],{1406:function(e,t,s){"use strict";s.r(t);var a=s(638),c=s(1),r=s(18),n=s(637),l=s(640),i=s.n(l),d=s(13);t.default=function(){var e=Object(r.g)(),t=Object(r.h)().search.match(/page=([0-9]+)/,""),s=Number(t&&t[1]?t[1]:1),l=Object(c.useState)(s),o=Object(a.a)(l,2),u=o[0],b=o[1],j=Object(c.useState)([]),h=Object(a.a)(j,2),O=h[0],g=h[1],p=Object(c.useState)(!1),m=Object(a.a)(p,2),x=m[0],f=m[1],w=Object(c.useState)(!1),y=Object(a.a)(w,2),v=y[0],S=y[1],k=Object(c.useState)(""),P=Object(a.a)(k,2),N=P[0],A=P[1],C=sessionStorage.getItem("token");Object(c.useEffect)((function(){i.a.get("http://markbran.in/apis/admin/product",{headers:{"auth-token":C}}).then((function(e){console.log(e.data.products),g(e.data.products)})).catch((function(e){e.response&&e.response.data.message&&(f(!1),S(!0),A(e.response.data.message))})),s!==u&&b(s)}),[s,u]);var I=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};return Object(d.jsx)(n.ub,{children:Object(d.jsx)(n.u,{xl:12,children:Object(d.jsxs)(n.j,{children:[Object(d.jsxs)(n.n,{children:["Products",Object(d.jsx)(n.bb,{className:"btn btn-success",style:{float:"right"},to:"/add-product",children:"Add Product"})]}),Object(d.jsxs)(n.k,{children:[x?Object(d.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(d.jsx)("strong",{children:"Deleted"})," Your item has been deleted successfully.",Object(d.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(d.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,v?Object(d.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(d.jsx)("strong",{children:"Alert "})," ",N||"Something went wrong try again later !.",Object(d.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(d.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,Object(d.jsx)(n.y,{items:O,fields:[{key:"productName",_classes:"font-weight-bold"},"category","subCategory","subSubCategory"],hover:!0,striped:!0,itemsPerPage:5,activePage:u,clickableRows:!0,scopedSlots:{status:function(e){return Object(d.jsx)("td",{children:Object(d.jsx)(n.b,{color:I(e.status),children:e.status})})}}}),Object(d.jsx)(n.qb,{activePage:u,onActivePageChange:function(t){s!==t&&e.push("/products?page=".concat(t))},pages:1,doubleArrows:!1,align:"center"})]})]})})})}}}]);
//# sourceMappingURL=164.4a7acb79.chunk.js.map