(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),o=n(6),r=n(8),i=(n(13),n(4)),a=n.n(i),u=n(1),l=(n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="length",h="alphabet",d=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})};var g=function(){var t=Object(u.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(u.useState)(""),i=Object(o.a)(c,2),g=i[0],f=i[1],p=function(t,e,n){var s=Object(r.a)(t);switch(e){case j:s.sort((function(t,e){return t.length-e.length}));break;case h:s.sort((function(t,e){return t.localeCompare(e)}));break;default:s=[].concat(b)}return"reverse"===n&&s.reverse(),s}(b,n,g);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:a()("button is-info",{"is-light":n!==h}),onClick:function(){return s(h)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:a()("button is-success",{"is-light":n!==j}),onClick:function(){return s(j)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:a()("button is-warning",{"is-light":""===g}),onClick:function(){f(""===g?"reverse":"")},children:"Reverse"}),(""!==n||""!==g)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){f(""),s("")},children:"Reset"})]}),Object(l.jsx)(d,{goods:p})]})};c.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.22ec0984.chunk.js.map