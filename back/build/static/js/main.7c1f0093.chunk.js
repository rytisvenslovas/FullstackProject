(this.webpackJsonpmastis=this.webpackJsonpmastis||[]).push([[0],{101:function(e,s,a){"use strict";a.r(s);var t=a(0),l=a(1),c=a.n(l),i=a(27),n=a.n(i),r=(a(72),a(7)),d=a(117),o=a(64),b=a.n(o),j=a(5),u=function(e){var s=Object(j.g)().id;if(s){var a=e.servicesDB.find((function(e){return e.service.split(" ").join("")===s}));return a?Object(t.jsxs)("div",{class:"container",children:[Object(t.jsx)("h1",{class:"title py-6",children:a.service}),Object(t.jsx)("h3",{class:"subtitle",children:a.description}),Object(t.jsxs)("h3",{class:"subtitle",children:["If you wish to start or consult regarding this procedure please contact us via ",Object(t.jsx)("a",{href:"tel:+447450225137",children:Object(t.jsx)("strong",{children:"+447450 225 137"})})," , ",Object(t.jsx)("a",{href:"mailto:info@mastis.co.uk",children:Object(t.jsx)("strong",{children:"info@mastis.co.uk"})})," or trough contact us ",Object(t.jsx)("strong",{children:Object(t.jsx)("a",{role:"button",onClick:function(){e.toggleVisibility()},children:"form"})})," and you will receive further instructions shortly after."]})]}):null}return null},h=function(e){var s=e.Link;return Object(t.jsx)("div",{class:"container",children:Object(t.jsx)("div",{class:"columns",children:Object(t.jsxs)("div",{class:"column",children:[Object(t.jsx)("div",{className:"container py-3",children:Object(t.jsx)("h2",{className:"title",children:"Welcome to Mastis Accounting"})}),Object(t.jsx)("div",{className:"container py-1",children:Object(t.jsx)("h2",{className:"subtitle",children:"We are accountancy firm based in South London, Mitcham. We offer wide range of specialist financial services for businesses and individuals. "})}),Object(t.jsx)("div",{className:"container py-1",children:Object(t.jsx)("h2",{className:"subtitle",children:"By hard work we will try to deliver essential advice for your business in order to improve your business and personal wealth."})}),Object(t.jsx)("div",{className:"container py-1",children:Object(t.jsxs)("h2",{className:"subtitle",children:["For assistance with any of your accountancy, taxation and business support requirements please ",Object(t.jsx)("strong",{children:Object(t.jsx)(s,{role:"button",dissabled:!0,to:"/contact",children:"contact us"})})]})})]})})})},m=(a(45),a(57),a(24)),p=a.n(m),O=a(3),x=a(19),v=a(33),f=function(e){var s=e.field,a=(e.label,e.placeholder);return Object(t.jsxs)("div",{children:[Object(t.jsx)(O.b,Object(v.a)({className:"input",placeholder:a},s)),Object(t.jsx)("div",{style:{color:"red"},children:Object(t.jsx)(O.a,{name:s.name})})]})},y=function(e){var s=e.field,a=(e.label,e.placeholder);return Object(t.jsxs)("div",{children:[Object(t.jsx)(O.b,Object(v.a)({className:"textarea",as:"textarea",placeholder:a},s)),Object(t.jsx)("div",{style:{color:"red"},children:Object(t.jsx)(O.a,{name:s.name})})]})},N=function(e){return Object(t.jsx)("div",{children:Object(t.jsx)("input",{className:"input",onChange:function(s){if(e.values.file){if(e.values.file){var a=e.uploadedFile.filter((function(s){return s.name!==e.values.file}));e.setUploadedFile([].concat(Object(x.a)(a),[s.target.files[0]])),e.values.file=s.target.files[0].name}}else e.setUploadedFile([].concat(Object(x.a)(e.uploadedFile),[s.target.files[0]])),e.values.file=s.target.files[0].name},name:"file",type:"file"})})},g=function(e){var s=e.validate,a=e.name,l=(e.label,e.options);return Object(t.jsx)("div",{className:"select",children:Object(t.jsx)(O.b,{as:"select",name:a,style:{width:"260px"},validate:s,children:l.map((function(e){return Object(t.jsx)("option",{value:e.value,children:e.label},e.value)}))})})},A=function(e){var s=e.field,a=(e.label,e.min),l=e.max,c=e.placeholder;return Object(t.jsxs)("div",{children:[Object(t.jsx)(O.b,Object(v.a)(Object(v.a)({className:"input"},s),{},{placeholder:c,type:"number",min:a,max:l})),Object(t.jsx)("div",{style:{color:"red"},children:Object(t.jsx)(O.a,{name:s.name})})]})},F=function(e){var s=function(e){var s;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(s="Invalid email address"):s="Field is required",s},a=function(e){var s;return e||(s="Field is required"),s},l=function(e){var s;return e?isNaN(e)&&(s="Invalid phone number"):s="Field is required",s};return Object(t.jsx)("div",{children:Object(t.jsx)(O.d,{initialValues:{type:e.type,name:"",email:"",telephone:"",file:"",message:""},onSubmit:e.handleSubmit,children:function(c){var i=c.isValid,n=c.dirty,r=(c.setFieldValue,c.setFieldTouched,c.values);c.errors,c.touched;return Object(t.jsxs)(O.c,{style:{paddingTop:"10px",width:"260px"},children:[Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Name",name:"name",validate:a,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"E-mail",name:"email",validate:s,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Telephone",name:"telephone",validate:l,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(N,{values:r,uploadedFile:e.uploadedFile,setUploadedFile:e.setUploadedFile})}),Object(t.jsx)("div",{children:Object(t.jsx)(O.b,{placeholder:"Message",name:"message",validate:a,component:y})}),Object(t.jsx)("div",{style:{paddingTop:"10px",width:"260px"},children:Object(t.jsx)("button",{className:"button is-success",type:"submit",disabled:!n||!i,children:"submit"})})]})}})})},S=a(62),C=a.n(S),V=a(61),T=a.n(V),k=a(63),w=a.n(k),B=function(e){var s=Object(l.useState)(""),a=Object(r.a)(s,2),c=(a[0],a[1],Object(l.useState)("")),i=Object(r.a)(c,2),n=(i[0],i[1],Object(l.useState)("")),o=Object(r.a)(n,2),b=(o[0],o[1],Object(l.useState)("")),j=Object(r.a)(b,2);j[0],j[1];return Object(t.jsx)("div",{className:"block",children:Object(t.jsxs)("div",{className:"columns ",style:{width:"100%"},children:[Object(t.jsx)("div",{className:"column px-6",children:Object(t.jsx)("a",{href:"mailto:info@mastis.co.uk",children:Object(t.jsxs)("div",{className:"notification",style:{opacity:"0.9"},children:[Object(t.jsx)(d.a,{children:Object(t.jsx)(T.a,{color:"primary",fontSize:"large"})}),Object(t.jsx)("strong",{style:{color:"black"},children:"info@mastis.co.uk"})]})})}),Object(t.jsx)("div",{className:"column px-6",children:Object(t.jsx)("a",{href:"tel:+447450225137",children:Object(t.jsxs)("div",{className:"notification",style:{opacity:"0.9"},children:[Object(t.jsx)(d.a,{children:Object(t.jsx)(C.a,{color:"primary",fontSize:"large"})}),Object(t.jsx)("strong",{style:{color:"black"},children:"+447450225137"})]})})}),Object(t.jsx)("div",{className:"column px-6",children:Object(t.jsx)("a",{type:"button",onClick:function(){e.toggleVisibility()},children:Object(t.jsxs)("div",{className:"notification",style:{opacity:"0.9"},children:[Object(t.jsx)(d.a,{children:Object(t.jsx)(w.a,{color:"primary",fontSize:"large",onClick:function(){e.toggleVisibility()}})}),Object(t.jsx)("strong",{style:{color:"black"},children:"Contact us form"})]})})})]})})},H=function(e){var s=function(e){var s;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(s="Invalid email address"):s="Field is required",s},a=function(e){var s;return e||(s="Field is required"),s},l=function(e){var s;return e?isNaN(e)&&(s="Invalid phone number"):s="Field is required",s};return Object(t.jsx)("div",{children:Object(t.jsx)(O.d,{initialValues:{type:e.type,name:"",surname:"",email:"",telephone:"",address:"",postcode:"",dateOfBirth:"",UTRnumber:"",NINnumber:"",file:"",message:""},onSubmit:e.handleSubmit,children:function(c){var i=c.isValid,n=c.dirty,r=(c.setFieldValue,c.setFieldTouched,c.values);c.errors,c.touched;return Object(t.jsxs)(O.c,{style:{paddingTop:"10px",width:"260px"},children:[Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Name",name:"name",validate:a,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Surname",name:"surname",validate:a,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Date of Birth DD/MM/YYYY",name:"dateOfBirth",validate:a,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"E-mail",name:"email",validate:s,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Telephone",name:"telephone",validate:l,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Address",name:"address",component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Postcode",name:"postcode",component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"UTR number",name:"UTRnumber",component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"National insurance number",name:"NINnumber",component:f})}),Object(t.jsxs)("div",{className:"field",children:[Object(t.jsx)("span",{children:"Picture of ID :"}),Object(t.jsx)(N,{values:r,uploadedFile:e.uploadedFile,setUploadedFile:e.setUploadedFile})]}),Object(t.jsx)("div",{children:Object(t.jsx)(O.b,{placeholder:"Message",name:"message",validate:a,component:y})}),Object(t.jsxs)("div",{style:{paddingTop:"10px",width:"260px"},children:[Object(t.jsx)("button",{className:"button is-success",type:"submit",disabled:!n||!i,children:"submit"}),Object(t.jsx)("button",{type:"button",onClick:function(){console.log(r)},children:"values"})]})]})}})})},I=function(e){var s=function(e){var s;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(s="Invalid email address"):s="Field is required",s},a=function(e){var s;return e||(s="Field is required"),s},l=function(e){var s;return e?isNaN(e)&&(s="Invalid phone number"):s="Field is required",s};return Object(t.jsx)("div",{children:Object(t.jsx)(O.d,{initialValues:{type:e.type,companyName:"",companyNumber:"",email:"",telephone:"",VATNumber:"",UTRNumber:"",message:"",file:""},onSubmit:e.handleSubmit,children:function(c){var i=c.isValid,n=c.dirty,r=(c.setFieldValue,c.setFieldTouched,c.values);c.errors,c.touched;return Object(t.jsxs)(O.c,{style:{paddingTop:"10px",width:"260px"},children:[Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Company Name",name:"companyName",validate:a,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Company Number",name:"companyNumber",component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"E-mail",name:"email",validate:s,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Telephone",name:"telephone",validate:l,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"VAT registration number",name:"VATNumber",component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"UTR number",name:"UTRNumber",component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(N,{values:r,uploadedFile:e.uploadedFile,setUploadedFile:e.setUploadedFile})}),Object(t.jsx)("div",{children:Object(t.jsx)(O.b,{placeholder:"Message",name:"message",validate:a,component:y})}),Object(t.jsx)("div",{style:{paddingTop:"10px",width:"260px"},children:Object(t.jsx)("button",{className:"button is-success",type:"submit",disabled:!n||!i,children:"submit"})})]})}})})},U=function(e){var s=Object(l.useState)(0),a=Object(r.a)(s,2),c=a[0],i=a[1],n=Object(l.useState)(0),d=Object(r.a)(n,2),o=d[0],b=d[1],j=function(e){var s;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(s="Invalid email address"):s="Field is required",s},u=function(e){var s;return e||(s="Field is required"),s},h=function(e){var s;return e?isNaN(e)&&(s="Invalid value"):s="Field is required",s},m=function(e){var s;return e?isNaN(e)&&(s="Invalid phone number"):s="Field is required",s},p=function(e){var s;return e<1||0===e||!e?s="Field is required or value is invalid":isNaN(e)?s="Must be a number":e>3&&(s="If more than 3 contacts us directly"),s},x=function(e){var s;return e||(s="Field is required"),"Type of the company"===e&&(s="Please select type of the company"),"Position of shareholder"===e&&(s="Please select position of the shareholder"),s},v=function(e){var s;return e||(s="Field is required"),isNaN(e)&&(s="value must be a number"),b(o-e),s},F=function(e){var s;return e||(s="Field is required"),/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(e)||(s="Invalid value of date of birth"),s},S=[{value:null,label:"Type of the company"},{value:"LTD",label:"LTD"},{value:"LIMITED",label:"LIMITED"}],C=[{value:null,label:"Position of shareholder"},{value:"Director",label:"Director"},{value:"Secretary ",label:"Secretary "},{value:"Only shareholder",label:"Only shareholder"}],V=function(){i(c+1),e.scrollToTop()},T=function(){i(c-1),e.scrollToTop()};return Object(t.jsx)("div",{children:Object(t.jsx)(O.d,{initialValues:{type:e.type,preferredCompanyName:"",alternativeCompanyName:"",typeOfCompany:"",natureOfBusiness:"",email:"",telephone:"",companyAdress:"",companyPostcode:"",numberOfShares:"",valueOfAllShares:"",numberOfShareHolders:"",shareHolders:[],confirmed:!1,message:""},onSubmit:e.handleSubmit,children:function(s){var a=s.isValid,l=s.dirty,n=(s.setFieldValue,s.setFieldTouched,s.values),r=s.errors,d=(s.touched,n.numberOfShareHolders>3||n.numberOfShareHolders<1||r.alternativeCompanyName||r.companyAdress||r.companyPostcode||r.email||r.natureOfBusiness||r.numberOfShareHolders||r.numberOfShares||r.preferredCompanyName||r.telephone||r.typeOfCompany||r.valueOfAllShares);return Object(t.jsxs)(O.c,{style:{paddingTop:"10px",width:"260px"},children:[0===c?[Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Preferred company name",name:"preferredCompanyName",validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Alternative company name",name:"alternativeCompanyName",validate:u,component:f})}),Object(t.jsxs)("div",{className:"field",children:[Object(t.jsx)(g,{label:"Entry type",name:"typeOfCompany",options:S,validate:x}),Object(t.jsx)("div",{style:{color:"red"},children:r.typeOfCompany?Object(t.jsx)("p",{children:"Please select a type of a company"}):null})]}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Nature of business",name:"natureOfBusiness",validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"E-mail",name:"email",validate:j,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Telephone",name:"telephone",validate:m,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Company address",name:"companyAdress",validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Company postcode",name:"companyPostcode",validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Number of shares e.g. 100",name:"numberOfShares",validate:h,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Value of shares",name:"valueOfAllShares",validate:h,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Number of Share Holders",name:"numberOfShareHolders",component:A,min:1,max:3,validate:p})}),Object(t.jsxs)("div",{className:"buttons",children:[Object(t.jsx)("button",{className:"button is-success",disabled:n.numberOfShareHolders>3||n.numberOfShareHolders<1||d,type:"button",onClick:function(){!function(s){(s.numberOfShareHolders>3||s.numberOfShareHolders<1)&&p(s.numberOfShareHolders),s.shareHolders.splice(0,s.shareHolders.length);for(var a=1;a<=s.numberOfShareHolders;a++)s.shareHolders.push({shareholder:a,position:"",numberOfShares:"",name:"",surname:"",dateOfBirth:"",NINnumber:"",UTRnumber:"",nationality:"",email:"",phonenumber:"",address:"",postcode:"",homeTown:"",mothersMaidenName:"",fathersName:"",file:""});i(c+1),b(s.numberOfShares),e.scrollToTop()}(n)},children:"Next"}),Object(t.jsx)("div",{children:d?Object(t.jsx)("p",{style:{color:"red"},children:"Please check the fields!"}):null})]})]:null,c>0?Object(t.jsx)("div",{children:n.shareHolders.map((function(s,a){var l=!!r.shareHolders&&(!!r.shareHolders[a]&&!!(r.shareHolders[a].position||r.shareHolders[a].numberOfShares||r.shareHolders[a].name||r.shareHolders[a].surname||r.shareHolders[a].dateOfBirth||r.shareHolders[a].nationality||r.shareHolders[a].email||r.shareHolders[a].phonenumber||r.shareHolders[a].address||r.shareHolders[a].postcode||r.shareHolders[a].homeTown||r.shareHolders[a].mothersMaidenName||r.shareHolders[a].fathersName));return Object(t.jsx)("div",{children:c===s.shareholder?[Object(t.jsxs)("h3",{className:"subtitle is-4",children:["Shareholder ",s.shareholder," of ",n.shareHolders.length]}),Object(t.jsxs)("div",{className:"field",children:[Object(t.jsx)(g,{label:"Position",name:"shareHolders[".concat(a,"].position"),options:C,validate:x}),Object(t.jsx)("div",{style:{color:"red"},children:r.shareHolders&&r.shareHolders[a]&&r.shareHolders[a].position?Object(t.jsx)("p",{children:r.shareHolders[a].position}):null})]}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Number of shares holding e.g. 100",name:"shareHolders[".concat(a,"].numberOfShares"),validate:v,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Name",name:"shareHolders[".concat(a,"].name"),validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Surname",name:"shareHolders[".concat(a,"].surname"),validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Date of Birth DD/MM/YYYY",name:"shareHolders[".concat(a,"].dateOfBirth"),validate:F,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"E-mail",name:"shareHolders[".concat(a,"].email"),validate:j,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Phonenumber",name:"shareHolders[".concat(a,"].phonenumber"),validate:m,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Address",name:"shareHolders[".concat(a,"].address"),validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Postcode",name:"shareHolders[".concat(a,"].postcode"),validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"National insurance number",name:"shareHolders[".concat(a,"].NINnumber"),component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"UTR number",name:"shareHolders[".concat(a,"].UTRnumber"),component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Nationality",name:"shareHolders[".concat(a,"].nationality"),validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Home town",name:"shareHolders[".concat(a,"].homeTown"),validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Mothers maiden name",name:"shareHolders[".concat(a,"].mothersMaidenName"),validate:u,component:f})}),Object(t.jsx)("div",{className:"field",children:Object(t.jsx)(O.b,{placeholder:"Fathers name",name:"shareHolders[".concat(a,"].fathersName"),validate:u,component:f})}),Object(t.jsxs)("div",{className:"field",children:[Object(t.jsx)("label",{children:"Copy of ID: "}),Object(t.jsx)(N,{values:n.shareHolders[a],uploadedFile:e.uploadedFile,setUploadedFile:e.setUploadedFile})]}),Object(t.jsxs)("div",{className:"buttons",children:[Object(t.jsx)("button",{type:"button",className:"button is-success",disabled:!s.position||l,onClick:V,children:"Next"}),Object(t.jsx)("button",{type:"button",className:"button is-danger is-inverted",onClick:T,children:"Back"}),Object(t.jsx)("div",{children:l?Object(t.jsx)("p",{style:{color:"red"},children:"Please check the fields!"}):null})]})]:null})}))}):null,c===n.shareHolders.length+1?[Object(t.jsx)("div",{children:Object(t.jsx)(O.b,{placeholder:"Aditional informnation",name:"message",component:y})}),Object(t.jsxs)("label",{className:"checkbox",style:{color:"".concat(!1===n.confirmed?"red":"white")},children:[Object(t.jsx)(O.b,{type:"checkbox",name:"confirmed",checked:n.confirmed})," I confirm that all information provided is correct"]}),Object(t.jsxs)("div",{className:"buttons",children:[Object(t.jsx)("button",{className:"button is-success",type:"submit",disabled:!l||!a||!1===n.confirmed,children:"Submit"}),Object(t.jsx)("button",{type:"button",className:"button is-success is-inverted",onClick:function(){i(c-1)},children:"Back"}),Object(t.jsx)("button",{type:"button",onClick:function(){console.log(a)},children:"valid"})]})]:null]})}})})},P=function(e){var s=Object(l.useState)(null),a=Object(r.a)(s,2),i=a[0],n=a[1],d=Object(l.useState)(!1),o=Object(r.a)(d,2),b=o[0],j=o[1],u=Object(l.useState)(""),h=Object(r.a)(u,2),m=h[0],O=h[1],x=Object(l.useState)([]),v=Object(r.a)(x,2),f=v[0],y=v[1],N=function(e){j("loading"),n(null);var s=new FormData;if(s.append("values",JSON.stringify(e)),null!==f)for(var a=0;a<f.length;a++)s.append("file",f[a]);p.a.post("/swx",s).then((function(e){e.data.successful?(O(e.data.successful),j("successful")):e.data.error?(O(e.data.error),j("error")):(O("error"),j("error"))}))},g=c.a.useRef(null);return Object(t.jsx)("div",{children:Object(t.jsxs)("div",{className:"modal py-6",style:e.showWhenVisible,children:[Object(t.jsx)("div",{className:"modal-background"}),Object(t.jsx)("div",{className:"container px-5",children:Object(t.jsx)("p",{className:"title",children:"Contact us"})}),Object(t.jsxs)("div",{className:"modal-content py-4 px-6",style:{padding:"10px",width:"375px"},children:[Object(t.jsx)("div",{ref:g,className:"columns is-vcentered is-centered py-3",style:{paddingTop:"10px",width:"300px"},children:Object(t.jsxs)("div",{className:"column is-centered",children:["loading"===b?Object(t.jsx)("div",{className:"loader-wrapper",style:{height:"100%",width:"300px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(t.jsx)("div",{className:"loader is-loading",style:{height:"100px",width:"100px"}})}):"successful"===b?Object(t.jsxs)("div",{className:"notification is-success",style:{width:"250px"},children:[Object(t.jsx)("button",{className:"delete",onClick:function(){j(!1)}}),Object(t.jsx)("p",{className:"subtitle",children:m})]}):"error"===b?Object(t.jsxs)("div",{className:"notification is-danger",style:{width:"250px"},children:[Object(t.jsx)("button",{className:"delete",onClick:function(){j(!1)}}),Object(t.jsx)("p",{className:"subtitle",children:m})]}):Object(t.jsx)("div",{className:"select",style:{paddingBottom:"5px"},children:Object(t.jsxs)("select",{style:{width:"260px"},onChange:function(e){n(e.target.value),y([])},children:[Object(t.jsx)("option",{disabled:!0,selected:!0,children:"Reason for contacting us"}),Object(t.jsx)("option",{value:"Other queries",children:"Other queries"}),Object(t.jsx)("option",{value:"New company establish",children:"New company establish"}),Object(t.jsx)("option",{value:"Company matters",children:"Company matters"}),Object(t.jsx)("option",{value:"Self employed",children:"Self employed"})]})}),"Other queries"===i?Object(t.jsx)(F,{type:i,handleSubmit:N,uploadedFile:f,setUploadedFile:y}):null,"Self employed"===i?Object(t.jsx)(H,{type:i,handleSubmit:N,uploadedFile:f,setUploadedFile:y}):null,"Company matters"===i?Object(t.jsx)(I,{type:i,handleSubmit:N,uploadedFile:f,setUploadedFile:y}):null,"New company establish"===i?Object(t.jsx)(U,{scrollToTop:function(){g.current.scrollIntoView()},type:i,handleSubmit:N,uploadedFile:f,setUploadedFile:y}):null]})}),Object(t.jsx)("button",{onClick:function(){e.toggleVisibility(),j(!1),y([])},className:"modal-close is-large","aria-label":"close"})]})]})})},q=a.p+"static/media/bg.4b6e310f.jpg",X=(a(99),a(100),a(26)),L=function(){var e=Object(l.useState)("General"),s=Object(r.a)(e,2),a=s[0],c=s[1],i=Object(l.useState)(null),n=Object(r.a)(i,2),o=(n[0],n[1]),m=Object(l.useState)([]),O=Object(r.a)(m,2),x=O[0],v=O[1],f=Object(l.useState)(!1),y=Object(r.a)(f,2),N=y[0],g=y[1],A={display:N?"block":"none"},F=(Object(j.f)(),function(){g(!N)});Object(l.useEffect)((function(){p.a.get("/api/services").then((function(e){v(e.data)}))}),[]);return Object(t.jsxs)(X.a,{children:[Object(t.jsxs)("div",{class:"hero is-fullheight is-dark has-background",children:[Object(t.jsx)("img",{alt:"Background",class:"hero-background is-transparent",src:q}),Object(t.jsx)("div",{class:"hero-head",children:Object(t.jsxs)("nav",{role:"navigation","aria-label":"main navigation",class:"navbar is-dark is-transparent",id:"nav",children:[Object(t.jsxs)("div",{class:"navbar-brand",children:[Object(t.jsx)("a",{class:"navbar-item",href:"/",children:Object(t.jsx)("img",{alt:"",src:"data:image/png;base64,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"})}),Object(t.jsxs)("a",{role:"button",onClick:function(){document.querySelector("#navbar-links").classList.toggle("is-active")},class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",children:[Object(t.jsx)("span",{"aria-hidden":"true"}),Object(t.jsx)("span",{"aria-hidden":"true"}),Object(t.jsx)("span",{"aria-hidden":"true"})]})]}),Object(t.jsxs)("div",{class:"navbar-menu",id:"navbar-links",children:[Object(t.jsxs)("div",{class:"navbar-start",children:[Object(t.jsx)(X.b,{class:"navbar-item",to:"/",onClick:function(){document.querySelector("#navbar-links").classList.toggle("is-active")},children:"Home"}),Object(t.jsx)("div",{className:"navbar-item",children:Object(t.jsxs)("div",{className:"dropdown is-hoverable",children:[Object(t.jsx)("div",{className:"dropdown-trigger",children:Object(t.jsx)("a",{className:"navbar-link","aria-haspopup":"true","aria-controls":"dropdown-menu4",children:"Services"})}),Object(t.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu4",role:"menu",style:{backgroundColor:"grey"},children:x.map((function(e){return Object(t.jsx)(X.b,{role:"button",to:"/services/".concat(e.service.split(" ").join("")),onClick:function(){c(e.service),document.querySelector("#navbar-links").classList.toggle("is-active")},class:"navbar-item",children:e.service},e.service)}))})]})}),Object(t.jsx)("a",{className:"navbar-item",href:"https://www.employedandselfemployed.co.uk/tax-calculator",children:"Calculator"})]}),Object(t.jsx)("div",{class:"navbar-end",children:Object(t.jsx)(X.b,{role:"button",dissabled:!0,class:"navbar-item",to:"/contact",onClick:function(){document.querySelector("#navbar-links").classList.toggle("is-active")},children:"Contact us"})})]})]})}),Object(t.jsx)("div",{class:"hero-body",children:Object(t.jsxs)("div",{class:"container is-fluid py-6",children:[Object(t.jsxs)(j.c,{children:[Object(t.jsx)(j.a,{path:"/services/:id",children:Object(t.jsx)(u,{servicesDB:x,setVisible:g,visible:N,showWhenVisible:A,toggleVisibility:F})}),Object(t.jsx)(j.a,{path:"/contact",children:Object(t.jsx)(B,{toggleVisibility:F,inform:function(e){o(e),setTimeout((function(){o(null)}),3e3),console.log("pasikeite")},subject:a})}),Object(t.jsx)(j.a,{path:"/",exact:!0,children:Object(t.jsx)(h,{Link:X.b})})]}),Object(t.jsx)(P,{showWhenVisible:A,toggleVisibility:F})]})})]}),Object(t.jsx)("div",{id:"contact-us-fab",children:Object(t.jsx)(d.a,{"aria-label":"contact-us",children:Object(t.jsx)(b.a,{onClick:function(){F()}})})})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,118)).then((function(s){var a=s.getCLS,t=s.getFID,l=s.getFCP,c=s.getLCP,i=s.getTTFB;a(e),t(e),l(e),c(e),i(e)}))};n.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(L,{})}),document.getElementById("root")),M()},72:function(e,s,a){},99:function(e,s,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.7c1f0093.chunk.js.map