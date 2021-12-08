(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),s=a(15),n=a.n(s),l=(a(22),a(7)),r=(a(23),a(8)),i=a.n(r),d=a(10),b=a(0);function h(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(b.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark"),children:[Object(b.jsx)("input",{className:"form-check-input",onClick:function(){e.toggleMode()},type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})})}function j(e){console.log("Inside Home",e);var t=Object(c.useState)(""),a=Object(l.a)(t,2),o=a[0],s=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"form-group container text-center",children:[Object(b.jsx)("h1",{className:"my-4 ",children:e.heading}),Object(b.jsx)("textarea",{className:"form-control my-5",value:o,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"black":"white",color:"dark"===e.mode?"white":"black"},id:"exampleFormControl",rows:"6"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary mt-4 mx-2 ",onClick:function(){s(o.toUpperCase()),e.showAlert("Success: ","Converted to UpperCase ")},children:"Convert Text to Uppercase"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary mt-4 mx-2",onClick:function(){s(o.toLowerCase()),e.showAlert("Success: ","Converted to LowerCase ")},children:"Convert Text to LowerCase"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary mt-4 mx-2",onClick:function(){s(o.replace(/  +/g," ")),e.showAlert("Success: ","Removed extra spaces ")},children:"Remove extra space"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary mt-4 mx-2",onClick:function(){var t=document.getElementById("exampleFormControl");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Success: ","Text Copied")},children:"Copy Text"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary mt-4 mx-2",onClick:function(){s(""),e.showAlert("Success: ","Text cleared")},children:"Clear Text"})]}),Object(b.jsxs)("div",{className:"container my-5 text-center",children:[Object(b.jsx)("h2",{children:"Your text summary"}),Object(b.jsxs)("p",{children:[Object(b.jsxs)("b",{children:[0===o.length?"0":o.trim().replace(/  +/g," ").split(" ").length," "]})," words and ",Object(b.jsx)("b",{children:o.length})," characters"]}),Object(b.jsxs)("p",{children:[o.split(" ").length/200," min read "]}),Object(b.jsx)("h2",{children:"Preview your text"}),Object(b.jsx)("p",{children:""===o?"Enter text to preview":o})]})]})}function m(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(b.jsx)("strong",{children:e.alert.type})," ",e.alert.message]})}function u(e){console.log("Inside About",e);var t=Object(c.useState)({color:"black",backgroundColor:"white"}),a=Object(l.a)(t,2),o=a[0],s=a[1],n=Object(c.useState)("Dark mode"),r=Object(l.a)(n,2),i=r[0],d=r[1];return Object(b.jsxs)("div",{className:"container my-4 ",children:[Object(b.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(b.jsxs)("div",{className:"accordion-item",style:o,children:[Object(b.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(b.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(b.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(b.jsxs)("div",{className:"accordion-body",children:[Object(b.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(b.jsxs)("div",{className:"accordion-item",style:o,children:[Object(b.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(b.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(b.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(b.jsxs)("div",{className:"accordion-body",children:[Object(b.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(b.jsxs)("div",{className:"accordion-item",style:o,children:[Object(b.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(b.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(b.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(b.jsxs)("div",{className:"accordion-body",children:[Object(b.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary my-3",onClick:function(){"black"===o.color?(s({color:"white",backgroundColor:"rgba(36, 33, 38, 0.82)"}),d("Light Mode")):(s({color:"black",backgroundColor:"white"}),d("Dark Mode"))},children:i})})]})}h.protoTypes={title:i.a.string.isRequired},h.defaultProps={title:"Enter titile here"};var p=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{style:{textAlign:"center"},children:"Opps! Something went wrong! "})})},x=a(2);var g=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],o=t[1],s=Object(c.useState)(null),n=Object(l.a)(s,2),r=n[0],i=n[1],g=function(e,t){i({type:e,message:t}),setTimeout((function(){i(null)}),1200)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(h,{title:"WordConverter",mode:a,toggleMode:function(){"light"===a?(o("dark"),document.body.style.backgroundColor="black",document.body.style.color="white",g("Success",": Dark Mode has been enabled")):(o("light"),document.body.style.backgroundColor="white",document.body.style.color="black",g("Success",": Light Mode has been enabled"))}}),Object(b.jsx)(m,{alert:r}),Object(b.jsxs)(x.c,{children:[Object(b.jsxs)(x.a,{exact:!0,path:"/",children:[" ",Object(b.jsx)(j,{heading:"Enter your text below ",mode:a,showAlert:g})," "]}),Object(b.jsxs)(x.a,{exact:!0,path:"/about",children:[" ",Object(b.jsx)(u,{})," "]}),Object(b.jsx)(x.a,{children:Object(b.jsx)(p,{})})]})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),o(e),s(e),n(e)}))};n.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.cd3ce132.chunk.js.map