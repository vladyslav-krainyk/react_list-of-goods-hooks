(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(8),r=n(6),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var h=function(){var t=Object(a.useState)(s.NONE),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),h=u[0],d=u[1],O=Object(a.useCallback)((function(t,e){var n=e.sortType,c=e.isReversed,o=Object(i.a)(t);switch(n){case s.ALPHABET:o=o.sort((function(t,e){return t.localeCompare(e)}));break;case s.LENGTH:o=o.sort((function(t,e){return t.length-e.length}))}return c&&(o=o.reverse()),o}),[n,h]),N=Object(a.useMemo)((function(){return O(j,{sortType:n,isReversed:h})}),[n,h]);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==s.ALPHABET}),onClick:function(){c(s.ALPHABET),d(!1)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==s.LENGTH}),onClick:function(){c(s.LENGTH),d(!1)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!h}),onClick:function(){d((function(t){return!t}))},children:"Reverse"}),(n||h)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(s.NONE),d(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:N.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.df54a979.chunk.js.map