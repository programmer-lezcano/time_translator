(this.webpackJsonptime_translator=this.webpackJsonptime_translator||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c,i=n(1),s=n.n(i),r=n(5),a=n.n(r),l=(n(10),n(3)),u=n(2),o=(n(11),n.p+"static/media/ingo.f86ecf87.gif"),d=n(0),m=(c={1:"uno",2:"dos",3:"tres",4:"cuatro",5:"cinco",6:"seis",7:"siete",8:"ocho",9:"nueve",10:"diez",11:"once",12:"doce",13:"trece",14:"catorce",15:"un cuarto",16:"diecis\xe9is",17:"diecisiete",18:"dieciocho",19:"diecinueve",20:"veinte",21:"veintiuno",22:"veintid\xf3s",23:"veintitr\xe9s",24:"veinticuatro",25:"veinticinco",26:"veintis\xe9is"},Object(u.a)(c,"26","veintisiete"),Object(u.a)(c,"26","veintiocho"),Object(u.a)(c,"26","veintinueve"),Object(u.a)(c,30,"treinta"),Object(u.a)(c,40,"cuarenta"),Object(u.a)(c,45,"tres cuartos"),Object(u.a)(c,50,"cincuenta"),c),j=function(){var e=Object(i.useState)(12),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(0),r=Object(l.a)(s,2),a=r[0],u=r[1],j=Object(i.useState)("am"),b=Object(l.a)(j,2),O=b[0],_=b[1],p=Object(i.useRef)(null),h=Object(i.useRef)(null),f=Object(i.useRef)(null),y=Object(i.useRef)(null),v=function(){return 1==n?"Es la una":"Son las "+m[n]},x=function(){if(0==a)return" en punto";if(30==a)return" y media";var e=a%10;return 0==e||a<30||45==a?" y "+m[a]:" y "+m[10*~~(a/10)]+" y "+m[e]},k=function(){return"am"==O?" de la ma\xf1ana":n<6||12==n?" de la tarde":" de la noche"},N=function(e,t,n){switch(e){case"hour":"open"==t?(y.current.classList="modal_background modal_background_hour",p.current.style.display="block"):(c(n),y.current.classList="",p.current.style.display="none");break;case"minute":"open"==t?(y.current.classList="modal_background modal_background_minute",h.current.style.display="block"):(u(n),y.current.classList="",h.current.style.display="none");break;case"meridiem":"open"==t?(y.current.classList="modal_background modal_background_meridiem",f.current.style.display="block"):(_(n),y.current.classList="",f.current.style.display="none")}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("image",{src:o,alt:"ingo"})}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("label",{className:"std_text",children:"Indique la hora"}),Object(d.jsxs)("div",{className:"time_input_container",children:[Object(d.jsx)("div",{ref:y,onClick:function(){y.current.classList="",f.current.style.display="none",h.current.style.display="none",p.current.style.display="none"}}),Object(d.jsxs)("div",{className:"time_input_hour_container",children:[Object(d.jsx)("input",{className:"time_input time_hour",onClick:function(){return N("hour","open",null)},value:n<10?"0".concat(n):n,readOnly:!0}),Object(d.jsx)("div",{ref:p,className:"select_time select_hour",children:Array.from(Array(12).keys()).map((function(e){return Object(d.jsx)("button",{className:"select_time_unit",onClick:function(){return N("hour","close",e+1)},children:e<9?"0".concat(e+1):e+1})}))})]}),Object(d.jsx)("label",{children:":"}),Object(d.jsxs)("div",{className:"time_input_hour_container",children:[Object(d.jsx)("input",{className:"time_input time_minute",onClick:function(){return N("minute","open",null)},value:a<10?"0".concat(a):a,readOnly:!0}),Object(d.jsx)("div",{ref:h,className:"select_time select_minute",children:Array.from(Array(60).keys()).map((function(e){return Object(d.jsx)("button",{className:"select_time_unit",onClick:function(){return N("minute","close",e)},children:e<10?"0".concat(e):e})}))})]}),Object(d.jsxs)("div",{className:"time_input_hour_container",children:[Object(d.jsx)("input",{className:"time_input time_meridiem",onClick:function(){return N("meridiem","open",null)},value:O,readOnly:!0}),Object(d.jsxs)("div",{ref:f,className:"select_time select_meridiem",children:[Object(d.jsx)("button",{className:"select_time_unit",onClick:function(){return N("meridiem","close","am")},children:"am"}),Object(d.jsx)("button",{className:"select_time_unit",onClick:function(){return N("meridiem","close","pm")},children:"pm"})]})]})]}),Object(d.jsx)("label",{className:"result",children:12==n&&0==a?"am"==O?"Es media noche":"Es medio d\xeda":v()+x()+k()})]})]})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c901cd0e.chunk.js.map