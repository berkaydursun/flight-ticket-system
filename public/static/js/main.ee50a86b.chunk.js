(this["webpackJsonpcdbreact-admin"]=this["webpackJsonpcdbreact-admin"]||[]).push([[0],{139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},163:function(e,t,c){},164:function(e,t,c){},165:function(e,t,c){},167:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(1),s=c.n(r),i=c(14),a=c.n(i),l=(c(85),c(9)),j=c(10),d=c(6),o=c(7),h=function(){return Object(n.jsx)("div",{className:"app",style:{display:"flex",height:"100%",overflow:"scroll initial"},children:Object(n.jsxs)(o.b,{textColor:"#fff",backgroundColor:"#333",children:[Object(n.jsx)(o.e,{prefix:Object(n.jsx)("i",{className:"fa fa-bars fa-large"}),children:Object(n.jsx)("a",{href:"/admin",className:"text-decoration-none",style:{color:"inherit"},children:"ADMIN PANEL"})}),Object(n.jsxs)(o.c,{className:"sidebar-content",children:[Object(n.jsxs)(o.f,{children:[Object(n.jsx)(l.c,{exact:!0,to:"/admin",activeClassName:"activeClicked",children:Object(n.jsx)(o.g,{icon:"user-plus",children:"Create Personnel"})}),Object(n.jsx)(l.c,{exact:!0,to:"/admin/listpersonnel",activeClassName:"activeClicked",children:Object(n.jsx)(o.g,{icon:"list-alt",children:"List Staff"})}),Object(n.jsx)(l.c,{exact:!0,to:"/admin/listuser",activeClassName:"activeClicked",children:Object(n.jsx)(o.g,{icon:"list-alt",children:"List User"})})]}),Object(n.jsx)(o.f,{})]}),Object(n.jsx)(o.d,{style:{textAlign:"center"},children:Object(n.jsx)("div",{className:"sidebar-btn-wrapper",style:{padding:"20px 5px"},children:"APRON Fly"})})]})})},b=c(31),x=c(4);function O(){var e=Object(b.a)(["\n\t.input-nav {\n\t\tmargin-left:5rem !important;\n\t\twidth:25rem;\n\t}\n\n\t@media(max-width:920px) {\n\t\t.input-nav {\n\t\t\tdisplay:none;\n\t\t}\n\t}\n"]);return O=function(){return e},e}var u=x.c.header(O()),f=c(74),m=Object(r.createContext)(),p=function(e){var t=JSON.parse(localStorage.getItem("cart"))||[],c=Object(r.useState)(t),s=Object(d.a)(c,2),i=s[0],a=s[1],l=Object(r.useState)(2e3),j=Object(d.a)(l,2),o=j[0],h=j[1];Object(r.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(i))}),[i]);var b=0;return i.forEach((function(e){b+=e.price})),Object(n.jsx)(m.Provider,{value:{addCart:function(e){var t=[].concat(Object(f.a)(i),[e]);a(t),console.log(t)},cart:i,setCart:a,balance:o,setBalance:h,buy:function(){h(o-b),a([])},sum:b},children:e.children})},v=c(5),g=function(){Object(r.useContext)(m).cart;var e=Object(j.e)();return Object(n.jsx)(u,{style:{background:"#333",color:"#fff",paddingBottom:18},children:Object(n.jsx)(o.a,{dark:!0,expand:"md",scrolling:!0,className:"justify-content-start",children:Object(n.jsx)(v.a,{color:"danger",className:"ml-auto mt-3",onClick:function(){e.push("/")},children:"Log Out "})})})},y=c(8),N=c.n(y),w=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)((function(){N.a.get("/api/v1/user").then((function(e){return s(e.data)}))}),[]);return Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("div",{children:Object(n.jsx)(h,{})}),Object(n.jsxs)("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"column",height:"100vh",overflowY:"hidden"},children:[Object(n.jsx)(g,{}),Object(n.jsx)("div",{style:{height:"100%"},children:Object(n.jsxs)("div",{style:{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"text-center",children:"List Users"})}),Object(n.jsxs)(v.j,{dark:!0,children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"TC"}),Object(n.jsx)("th",{children:"First Name"}),Object(n.jsx)("th",{children:"Last Name"}),Object(n.jsx)("th",{children:"E-Mail"}),Object(n.jsx)("th",{children:"Sil"})]}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return console.log("Entered"),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.tc}),Object(n.jsx)("td",{children:e.firstname}),Object(n.jsx)("td",{children:e.lastname}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:Object(n.jsx)(v.a,{color:"info",onClick:function(){return t=e._id,N.a.delete("/api/v1/user/"+t).then((function(){return alert("silindi")})),void s(c.filter((function(e){return e._id!==t})));var t},children:"Sil"})})]},t)}))})]})]})})]})]})},C=(c(139),function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)((function(){N.a.get("/api/v1/staff").then((function(e){return s(e.data)}))}),[]);return Object(n.jsxs)("div",{className:"d-flex profile",children:[Object(n.jsx)("div",{children:Object(n.jsx)(h,{})}),Object(n.jsxs)("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"column",height:"100vh",overflowY:"hidden"},children:[Object(n.jsx)(g,{}),Object(n.jsx)("div",{style:{height:"100%"},children:Object(n.jsxs)("div",{style:{height:"calc(100% - 64px)",padding:"20px 5%",overflowY:"scroll"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"text-center",children:"List Staff"})}),Object(n.jsxs)(v.j,{dark:!0,children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"TC"}),Object(n.jsx)("th",{children:"First Name"}),Object(n.jsx)("th",{children:"Last Name"}),Object(n.jsx)("th",{children:"E-Mail"}),Object(n.jsx)("th",{children:"Sil"})]}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return console.log("Entered"),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.tc}),Object(n.jsx)("td",{children:e.firstname}),Object(n.jsx)("td",{children:e.lastname}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:Object(n.jsx)(v.a,{outline:!0,color:"info",onClick:function(){return t=e._id,N.a.delete("/api/v1/staff/"+t).then((function(){return alert("silindi")})),void s(c.filter((function(e){return e._id!==t})));var t},children:"Delete"})})]},t)}))})]})]})})]})]})}),S=(c(140),function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),a=Object(d.a)(i,2),l=a[0],j=a[1],o=Object(r.useState)(""),b=Object(d.a)(o,2),x=b[0],O=b[1],u=Object(r.useState)(""),f=Object(d.a)(u,2),m=f[0],p=f[1],y=Object(r.useState)(""),w=Object(d.a)(y,2),C=w[0],S=w[1];return Object(n.jsxs)("div",{className:"dashboard d-flex",children:[Object(n.jsx)("div",{children:Object(n.jsx)(h,{})}),Object(n.jsxs)("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"column",height:"100vh",overflowY:"hidden"},children:[Object(n.jsx)(g,{}),Object(n.jsx)("div",{style:{height:"100%"},children:Object(n.jsxs)("div",{style:{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"text-center",children:"Create Personel"})}),Object(n.jsxs)(v.b,{onSubmit:function(e){e.preventDefault();var t={tc:c,firstname:l,lastname:x,email:m,password:C};N.a.post("/api/v1/staff",t).then((function(e){return alert("Staff added succesfully")})).catch((function(e){console.error("There was an error!",e)}))},dark:!0,children:[Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"tcnumber",children:"Tc Number"}),Object(n.jsx)(v.d,{type:"text",name:"text",id:"tcnumber",placeholder:"Enter TC Number",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"firstname",children:"First Name"}),Object(n.jsx)(v.d,{type:"text",name:"firstname",id:"firstname",placeholder:"Enter First Name",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"lastname",children:"Last Name"}),Object(n.jsx)(v.d,{type:"text",name:"lastname",id:"lastname",placeholder:"Enter Last Name",value:x,onChange:function(e){return O(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"email",children:"E - Mail"}),Object(n.jsx)(v.d,{type:"email",name:"email",id:"email",placeholder:"Enter E - Mail",value:m,onChange:function(e){return p(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"password",children:"Password"}),Object(n.jsx)(v.d,{type:"password",name:"password",id:"password",placeholder:"Enter Password",value:C,onChange:function(e){return S(e.target.value)}})]}),Object(n.jsx)(v.a,{type:"submit",children:"Submit"})]})]})})]})]})}),k=function(){return Object(n.jsx)("div",{className:"app",style:{display:"flex",height:"100%",overflow:"scroll initial"},children:Object(n.jsxs)(o.b,{textColor:"#fff",backgroundColor:"#333",children:[Object(n.jsx)(o.e,{prefix:Object(n.jsx)("i",{className:"fa fa-bars fa-large"}),children:Object(n.jsx)("a",{href:"/staff",className:"text-decoration-none",style:{color:"inherit"},children:"STAFF PANEL"})}),Object(n.jsxs)(o.c,{className:"sidebar-content",children:[Object(n.jsxs)(o.f,{children:[Object(n.jsx)(l.c,{exact:!0,to:"/staff",activeClassName:"activeClicked",children:Object(n.jsx)(o.g,{icon:"user-plus",children:"Create Flight"})}),Object(n.jsx)(l.c,{exact:!0,to:"/staff/listflight",activeClassName:"activeClicked",children:Object(n.jsx)(o.g,{icon:"list-alt",children:"List Flight"})})]}),Object(n.jsx)(o.f,{})]}),Object(n.jsx)(o.d,{style:{textAlign:"center"},children:Object(n.jsx)("div",{className:"sidebar-btn-wrapper",style:{padding:"20px 5px"},children:"APRON Fly"})})]})})},T=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),a=Object(d.a)(i,2),l=a[0],j=a[1],o=Object(r.useState)(""),h=Object(d.a)(o,2),b=h[0],x=h[1],O=Object(r.useState)(""),u=Object(d.a)(O,2),f=u[0],m=u[1],p=Object(r.useState)(),y=Object(d.a)(p,2),w=y[0],C=y[1],S=Object(r.useState)(),T=Object(d.a)(S,2),F=T[0],E=T[1];return Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("div",{children:Object(n.jsx)(k,{})}),Object(n.jsxs)("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"column",height:"100vh",overflowY:"hidden"},children:[Object(n.jsx)(g,{}),Object(n.jsx)("div",{style:{height:"100%"},children:Object(n.jsxs)("div",{style:{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"text-center",children:"Create Flight"})}),Object(n.jsxs)(v.b,{onSubmit:function(e){e.preventDefault();var t={code:c,from:l,to:b,time:f,date:w,price:F};N.a.post("/api/v1/flight",t).then((function(e){return alert("Flight added succesfully")})).catch((function(e){console.error("There was an error!",e)}))},dark:!0,children:[Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"code",children:"Code"}),Object(n.jsx)(v.d,{type:"text",name:"code",id:"code",placeholder:"Enter Flight Code",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"from",children:"From"}),Object(n.jsx)(v.d,{type:"text",name:"from",id:"from",placeholder:"From",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"to",children:"To"}),Object(n.jsx)(v.d,{type:"text",name:"to",id:"to",placeholder:"To",value:b,onChange:function(e){return x(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"time",children:"Time"}),Object(n.jsx)(v.d,{type:"text",name:"time",id:"time",placeholder:"Enter Time",value:f,onChange:function(e){return m(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"date",children:"Date"}),Object(n.jsx)(v.d,{type:"date",name:"date",id:"date",placeholder:"Pick a Date",value:w,onChange:function(e){return C(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"price",children:"Price"}),Object(n.jsx)(v.d,{type:"number",name:"price",id:"price",placeholder:"Enter Ticket Price",value:F,onChange:function(e){return E(e.target.value)}})]}),Object(n.jsx)(v.a,{type:"submit",children:"Submit"})]})]})})]})]})},F=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)((function(){N.a.get("/api/v1/flight").then((function(e){return s(e.data)}))}),[]);return Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("div",{children:Object(n.jsx)(k,{})}),Object(n.jsxs)("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"column",height:"100vh",overflowY:"hidden"},children:[Object(n.jsx)(g,{}),Object(n.jsx)("div",{style:{height:"100%"},children:Object(n.jsxs)("div",{style:{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"List Flight",children:"List Flight"})}),Object(n.jsxs)(v.j,{dark:!0,children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"Flight Code"}),Object(n.jsx)("th",{children:"From"}),Object(n.jsx)("th",{children:"To"}),Object(n.jsx)("th",{children:"Time"}),Object(n.jsx)("th",{children:"Date"}),Object(n.jsx)("th",{children:"Price"})]}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return console.log("Entered"),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.code}),Object(n.jsx)("td",{children:e.from}),Object(n.jsx)("td",{children:e.to}),Object(n.jsx)("td",{children:e.time}),Object(n.jsx)("td",{children:e.date}),Object(n.jsx)("td",{children:e.price}),Object(n.jsx)("td",{children:Object(n.jsx)(v.a,{outline:!0,color:"info",onClick:function(){return t=e._id,N.a.delete("/api/v1/flight/"+t).then((function(){return alert("silindi")})),void s(c.filter((function(e){return e._id!==t})));var t},children:"Delete"})})]},t)}))})]})]})})]})]})},E=(c(141),function(){return Object(n.jsx)("div",{className:"app",style:{display:"flex",height:"100%",overflow:"scroll initial"},children:Object(n.jsxs)(o.b,{textColor:"#fff",backgroundColor:"#333",children:[Object(n.jsx)(o.e,{className:"flex",prefix:Object(n.jsx)("i",{className:"fa fa-bars fa-large"}),children:Object(n.jsx)("a",{href:"/user",className:"text-decoration-none",style:{color:"inherit"},children:"USER PANEL"})}),Object(n.jsxs)(o.c,{className:"sidebar-content",children:[Object(n.jsxs)(o.f,{children:[Object(n.jsx)(l.c,{exact:!0,to:"/user",activeClassName:"activeClicked",children:Object(n.jsx)(o.g,{icon:"plane",children:"View Flight"})}),Object(n.jsx)(l.c,{exact:!0,to:"/user/viewticket",activeClassName:"activeClicked",children:Object(n.jsx)(o.g,{icon:"ticket-alt",children:"View Ticket"})})]}),Object(n.jsx)(o.f,{})]}),Object(n.jsx)(o.d,{style:{textAlign:"center"},children:Object(n.jsx)("div",{className:"sidebar-btn-wrapper",style:{padding:"20px 5px"},children:"APRON Fly"})})]})})});function L(){var e=Object(b.a)(["\n\t.input-nav {\n\t\tmargin-left:5rem !important;\n\t\twidth:25rem;\n\t}\n\n\t@media(max-width:920px) {\n\t\t.input-nav {\n\t\t\tdisplay:none;\n\t\t}\n\t}\n"]);return L=function(){return e},e}var D=x.c.header(L()),P=function(){var e=Object(j.e)(),t=Object(r.useContext)(m),c=t.cart,s=t.setCart,i=t.balance,a=(t.setBalance,t.sum),l=t.buy,h=JSON.parse(localStorage.getItem("id")),b=Object(r.useState)(!1),x=Object(d.a)(b,2),O=x[0],u=x[1];function f(){u(!O)}return Object(n.jsx)(D,{style:{background:"#333",color:"#fff",paddingTop:20,paddingBottom:20},children:Object(n.jsxs)(o.a,{dark:!0,expand:"md",scrolling:!0,className:"justify-content-start",children:[Object(n.jsxs)("h3",{className:"ml-auto ",children:["Balance : ",i]}),Object(n.jsxs)("div",{className:"ml-auto mr-4",children:[Object(n.jsxs)(v.a,{color:"info",onClick:f,children:[Object(n.jsx)("i",{class:"fas fa-shopping-cart"})," Cart | ",c.length]}),Object(n.jsxs)(v.f,{isOpen:O,toggle:f,children:[Object(n.jsx)(v.i,{toggle:f,children:"My Cart"}),Object(n.jsx)(v.g,{children:Object(n.jsxs)(v.j,{dark:!0,children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"From"}),Object(n.jsx)("th",{children:"To"}),Object(n.jsx)("th",{children:"Time"}),Object(n.jsx)("th",{children:"Date"}),Object(n.jsx)("th",{children:"Price"})]}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.from}),Object(n.jsx)("td",{children:e.to}),Object(n.jsx)("td",{children:e.time}),Object(n.jsx)("td",{children:e.date}),Object(n.jsx)("td",{children:e.price})]},t)}))})]})}),Object(n.jsxs)(v.h,{children:[Object(n.jsxs)("h4",{children:["Total : ",a,"$"]}),Object(n.jsx)(v.a,{color:"primary",onClick:function(){l(),console.log(c.length);for(var e=0;e<c.length;e++){var t=c[e];N.a.post("/api/v1/user/flight/"+h,t).then((function(e){return console.log(e.data)})).catch((function(e){console.error("There was an error!",e)}))}},children:"Buy"}),Object(n.jsx)(v.a,{color:"secondary",onClick:function(){s([])},children:"Clear"})]})]})]}),Object(n.jsx)(v.a,{color:"danger",onClick:function(){localStorage.clear(),e.push("/")},children:"Log Out"})]})})},I=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(r.useContext)(m).addCart;JSON.parse(localStorage.getItem("id"));return Object(r.useEffect)((function(){N.a.get("/api/v1/flight").then((function(e){return s(e.data)}))}),[]),Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("div",{children:Object(n.jsx)(E,{})}),Object(n.jsxs)("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"column",height:"100vh",overflowY:"hidden"},children:[Object(n.jsx)(P,{}),Object(n.jsx)("div",{style:{height:"100%"},children:Object(n.jsxs)("div",{style:{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"text-center",children:"Our Flights"})}),Object(n.jsxs)(v.j,{dark:!0,children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"Flight Code"}),Object(n.jsx)("th",{children:"From"}),Object(n.jsx)("th",{children:"To"}),Object(n.jsx)("th",{children:"Time"}),Object(n.jsx)("th",{children:"Date"}),Object(n.jsx)("th",{children:"Price"}),Object(n.jsx)("th",{children:"Buy"})]}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return console.log("Entered"),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.code}),Object(n.jsx)("td",{children:e.from}),Object(n.jsx)("td",{children:e.to}),Object(n.jsx)("td",{children:e.time}),Object(n.jsx)("td",{children:e.date}),Object(n.jsx)("td",{children:e.price}),Object(n.jsx)("td",{children:Object(n.jsx)(v.a,{outline:!0,color:"info",onClick:function(t){return i(e)},children:"Buy"})})]},t)}))})]})]})})]})]})},Y=c(73),A=c.n(Y),B=function(){var e=Object(j.f)(),t=Object(r.useState)(""),c=Object(d.a)(t,2),s=c[0],i=c[1];return Object(r.useEffect)((function(){var t="ID : "+e.state.myText._id+"\nFlight Code : "+e.state.myText.code+"\nFrom : "+e.state.myText.from+"\nTo : "+e.state.myText.to+"\nDate : "+e.state.myText.date;A.a.toDataURL(t).then((function(e){i(e)}))}),[]),Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("div",{children:Object(n.jsx)(E,{})}),Object(n.jsxs)("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"column",height:"100vh",overflowY:"hidden"},children:[Object(n.jsx)(P,{}),Object(n.jsx)("div",{style:{height:"100%"},children:Object(n.jsxs)("div",{style:{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"text-center",children:"Ticket Detail"})}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Flight Code :"})," ",e.state.myText.code]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"From :"})," ",e.state.myText.from]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"To : "}),e.state.myText.to]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Date : "}),e.state.myText.date]}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)("img",{src:s})})]})})]})})]})]})},J=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),a=Object(d.a)(i,2),l=(a[0],a[1],JSON.parse(localStorage.getItem("id"))),o=Object(j.e)();Object(r.useEffect)((function(){N.a.get("/api/v1/user/"+l).then((function(e){return s(e.data.flights)}))}),[]);return Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("div",{children:Object(n.jsx)(E,{})}),Object(n.jsxs)("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"column",height:"100vh",overflowY:"hidden"},children:[Object(n.jsx)(P,{}),Object(n.jsx)("div",{style:{height:"100%"},children:Object(n.jsxs)("div",{style:{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"text-center",children:"View Ticket"})}),Object(n.jsxs)(v.j,{dark:!0,children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"Flight Code"}),Object(n.jsx)("th",{children:"From"}),Object(n.jsx)("th",{children:"To"}),Object(n.jsx)("th",{children:"Time"}),Object(n.jsx)("th",{children:"Date"}),Object(n.jsx)("th",{children:"Price"}),Object(n.jsx)("th",{children:"Detail"})]}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.code}),Object(n.jsx)("td",{children:e.from}),Object(n.jsx)("td",{children:e.to}),Object(n.jsx)("td",{children:e.time}),Object(n.jsx)("td",{children:e.date}),Object(n.jsx)("td",{children:e.price}),Object(n.jsx)("td",{children:Object(n.jsx)(v.a,{color:"btn btn-outline-warning",onClick:function(){return e=t,void o.push({pathname:"/ticketdetail",state:{myText:c[e]}});var e},children:"Detail"})})]},t)}))})]})]})})]})]})};c(62);var M=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),a=Object(d.a)(i,2),l=a[0],o=a[1],h=Object(j.e)();return Object(n.jsxs)("div",{className:"compDiv",children:[Object(n.jsx)("h2",{children:"Sign In"}),Object(n.jsxs)(v.b,{className:"form",onSubmit:function(e){e.preventDefault();var t={tc:c,password:l};N.a.post("/api/v1/login",t).then((function(e){localStorage.setItem("id",JSON.stringify(e.data)),h.push("/user")})).catch((function(e){console.error("There was an error!",e)}))},children:[Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"tc",children:"TC Number"}),Object(n.jsx)(v.d,{type:"text",name:"tc",id:"tc",placeholder:"Enter Tc Number",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"password",children:"Password"}),Object(n.jsx)(v.d,{type:"password",name:"password",id:"password",placeholder:"Enter Password",value:l,onChange:function(e){return o(e.target.value)}})]}),Object(n.jsx)(v.a,{type:"submit",color:"primary",children:"Log In"}),Object(n.jsx)(v.a,{type:"submit",color:"dark",className:"mt-2",onClick:function(){h.push("/register")},children:"Register"}),Object(n.jsx)("a",{href:"/staffLogin",className:"btn btn-outline-success mt-2 font-weight-bold",children:"Staff Login"}),Object(n.jsx)("a",{href:"/adminLogin",className:"btn btn-outline-secondary font-weight-bold mt-2",children:"Admin Login"})]})]})};var R=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),a=Object(d.a)(i,2),l=a[0],o=a[1],h=Object(r.useState)(""),b=Object(d.a)(h,2),x=b[0],O=b[1],u=Object(r.useState)(""),f=Object(d.a)(u,2),m=f[0],p=f[1],g=Object(r.useState)(""),y=Object(d.a)(g,2),w=y[0],C=y[1],S=Object(j.e)();return Object(n.jsxs)("div",{className:"compDiv",children:[Object(n.jsx)("h2",{children:"Register"}),Object(n.jsxs)(v.b,{onSubmit:function(e){e.preventDefault();var t={tc:c,firstname:l,lastname:x,email:m,password:w};N.a.post("/api/v1/user",t).then((function(e){localStorage.setItem("id",JSON.stringify(e.status)),S.push("/")})).catch((function(e){console.error("There was an error!",e)}))},dark:!0,children:[Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"tcnumber",children:"Tc Number"}),Object(n.jsx)(v.d,{type:"text",name:"text",id:"tcnumber",placeholder:"Enter TC Number",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"firstname",children:"First Name"}),Object(n.jsx)(v.d,{type:"text",name:"firstname",id:"firstname",placeholder:"Enter First Name",value:l,onChange:function(e){return o(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"lastname",children:"Last Name"}),Object(n.jsx)(v.d,{type:"text",name:"lastname",id:"lastname",placeholder:"Enter Last Name",value:x,onChange:function(e){return O(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"email",children:"E - Mail"}),Object(n.jsx)(v.d,{type:"email",name:"email",id:"email",placeholder:"Enter E - Mail",value:m,onChange:function(e){return p(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"password",children:"Password"}),Object(n.jsx)(v.d,{type:"password",name:"password",id:"password",placeholder:"Enter Password",value:w,onChange:function(e){return C(e.target.value)}})]}),Object(n.jsx)(v.a,{type:"submit",children:"Submit"})]})]})};c(163);var _=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),a=Object(d.a)(i,2),l=a[0],o=a[1],h=Object(j.e)();return Object(n.jsxs)("div",{className:"compDiv",children:[Object(n.jsx)("h2",{children:"Staff Sign In"}),Object(n.jsxs)(v.b,{className:"form",onSubmit:function(e){e.preventDefault();var t={tc:c,password:l};N.a.post("/api/v1/stafflogin",t).then((function(e){localStorage.setItem("id",JSON.stringify(e.data)),h.push("/staff")})).catch((function(e){console.error("There was an error!",e)}))},children:[Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"tc",children:"TC Number"}),Object(n.jsx)(v.d,{type:"text",name:"tc",id:"tc",placeholder:"Enter Tc Number",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"password",children:"Password"}),Object(n.jsx)(v.d,{type:"password",name:"password",id:"password",placeholder:"Enter Password",value:l,onChange:function(e){return o(e.target.value)}})]}),Object(n.jsx)(v.a,{type:"submit",color:"primary",children:"Submit"}),Object(n.jsx)("a",{href:"/",className:"btn btn-outline-danger font-weight-bold mt-2",children:"Go Back"})]})]})};c(164);var U=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),a=Object(d.a)(i,2),l=a[0],o=a[1],h=Object(j.e)();return Object(n.jsxs)("div",{className:"compDiv",children:[Object(n.jsx)("h2",{children:"Admin Sign In"}),Object(n.jsxs)(v.b,{className:"form",onSubmit:function(e){e.preventDefault();var t={username:c,password:l};N.a.post("/api/v1/adminLogin",t).then((function(e){h.push("/admin")})).catch((function(e){console.error("There was an error!",e)}))},children:[Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"username",children:"Username"}),Object(n.jsx)(v.d,{type:"text",name:"username",id:"username",placeholder:"Username",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.e,{for:"password",children:"Password"}),Object(n.jsx)(v.d,{type:"password",name:"password",id:"password",placeholder:"Password",value:l,onChange:function(e){return o(e.target.value)}})]}),Object(n.jsx)(v.a,{type:"submit",color:"primary",children:"Submit"}),Object(n.jsx)("a",{href:"/",className:"btn btn-outline-danger font-weight-bold mt-2",children:"Go Back"})]})]})},V=function(){JSON.parse(localStorage.getItem("id"));return Object(n.jsx)(r.Fragment,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:M}),Object(n.jsx)(j.a,{exact:!0,path:"/register",component:R}),Object(n.jsx)(j.a,{exact:!0,path:"/staffLogin",component:_}),Object(n.jsx)(j.a,{exact:!0,path:"/adminLogin",component:U}),Object(n.jsx)(j.a,{exact:!0,path:"/admin",component:S}),Object(n.jsx)(j.a,{path:"/admin/listpersonnel",component:C}),Object(n.jsx)(j.a,{path:"/admin/listuser",component:w}),Object(n.jsx)(j.a,{exact:!0,path:"/staff",component:T}),Object(n.jsx)(j.a,{path:"/staff/listflight",component:F}),Object(n.jsx)(j.a,{exact:!0,path:"/user",component:I}),Object(n.jsx)(j.a,{path:"/user/viewticket",component:J}),Object(n.jsx)(j.a,{path:"/ticketdetail",component:B})]})})};c(165);var G=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(p,{children:Object(n.jsx)(V,{})})})};c(166);a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root"))},62:function(e,t,c){},85:function(e,t,c){}},[[167,1,2]]]);
//# sourceMappingURL=main.ee50a86b.chunk.js.map