(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[163],{1406:function(e,t,s){"use strict";s.r(t);var a=s(638),d=s(1),c=s(18),r=s(637),n=s(639),i=s.n(n),l=[{id:0,name:"lorem2",category:"sdfsdfdsfd",sub_category:"sdfsdfdvxced",created_at:"2018/01/01"},{id:1,name:"Lorem Ipsum is simply",category:"scrambled it to make",sub_category:"sdfsdfdvxced",created_at:"2018/01/01"},{id:2,name:"Lorem Ipsum is simply",category:"scrambled it to make",sub_category:"sdfsdfdvxced",created_at:"2018/02/01"},{id:3,name:"Lorem Ipsum is simply",category:"scrambled it to make",sub_category:"sdfsdfdvxced",created_at:"2018/02/01"},{id:4,name:"Derick Maximinus",category:"default model text",sub_category:"sdfsdfdvxced",created_at:"2018/03/01"},{id:5,name:"1500s, when",category:"default model text",sub_category:"sdfsdfdvxced",created_at:"2018/01/21"},{id:6,name:"1500s, when",category:"default model text",sub_category:"sdfsdfdvxced",created_at:"2018/01/01"},{id:7,name:"essentially unchanged",category:"sdfsd dfsdf dfjks",sub_category:"sdfsdfdvxced",created_at:"2018/02/01"},{id:8,name:"essentially unchanged",category:"sdfsd dfsdf dfjks",sub_category:"sdfsdfdvxced",created_at:"2018/02/01"},{id:9,name:"essentially unchanged",category:"sdfsd dfsdf dfjks",sub_category:"sdfsdfdvxced",created_at:"2018/03/01"},{id:10,name:"PageMaker including",category:"sdfsd dfsdf dfjks",sub_category:"sdfsdfdvxced",created_at:"2018/01/21"}],o=s(13);t.default=function(){var e=Object(c.g)(),t=Object(c.h)().search.match(/page=([0-9]+)/,""),s=Number(t&&t[1]?t[1]:1),n=Object(d.useState)(s),u=Object(a.a)(n,2),b=u[0],f=u[1],g=Object(d.useState)([]),j=Object(a.a)(g,2),m=(j[0],j[1]),h=Object(d.useState)(!1),y=Object(a.a)(h,2),p=y[0],x=y[1],O=Object(d.useState)(!1),_=Object(a.a)(O,2),v=_[0],k=_[1],w=Object(d.useState)(""),P=Object(a.a)(w,2),S=P[0],N=P[1],A=sessionStorage.getItem("token");Object(d.useEffect)((function(){i.a.get("http://markbran.in/apis/admin/product",{headers:{"auth-token":A}}).then((function(e){console.log(e.data.products),m(e.data.products)})).catch((function(e){e.response&&e.response.data.message&&(x(!1),k(!0),N(e.response.data.message))})),s!==b&&f(s)}),[s,b]);var I=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};return Object(o.jsx)(r.ub,{children:Object(o.jsx)(r.u,{xl:12,children:Object(o.jsxs)(r.j,{children:[Object(o.jsxs)(r.n,{children:["Products",Object(o.jsx)(r.bb,{className:"btn btn-success",style:{float:"right"},to:"/add-product",children:"Add Product"})]}),Object(o.jsxs)(r.k,{children:[p?Object(o.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(o.jsx)("strong",{children:"Deleted"})," Your item has been deleted successfully.",Object(o.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,v?Object(o.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(o.jsx)("strong",{children:"Alert "})," ",S||"Something went wrong try again later !.",Object(o.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,Object(o.jsx)(r.y,{items:l,fields:[{key:"name",_classes:"font-weight-bold"},"category","sub_category","created_at"],hover:!0,striped:!0,itemsPerPage:5,activePage:b,clickableRows:!0,scopedSlots:{status:function(e){return Object(o.jsx)("td",{children:Object(o.jsx)(r.b,{color:I(e.status),children:e.status})})}}}),Object(o.jsx)(r.qb,{activePage:b,onActivePageChange:function(t){s!==t&&e.push("/products?page=".concat(t))},pages:2,doubleArrows:!1,align:"center"})]})]})})})}}}]);
//# sourceMappingURL=163.39b116e1.chunk.js.map