import{b as F}from"./antd-BmrhB3rb.js";import{r as P}from"./index-Byl3IXer.js";function O(a,l){for(var i=0;i<l.length;i++){const u=l[i];if(typeof u!="string"&&!Array.isArray(u)){for(const o in u)if(o!=="default"&&!(o in a)){const f=Object.getOwnPropertyDescriptor(u,o);f&&Object.defineProperty(a,o,f.get?f:{enumerable:!0,get:()=>u[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var _={exports:{}};(function(a,l){(function(i){i(P())})(function(i){i.defineMode("oz",function(u){function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var f=/[\^@!\|<>#~\.\*\-\+\\/,=]/,v=/(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/,x=/(:::)|(\.\.\.)|(=<:)|(>=:)/,s=["in","then","else","of","elseof","elsecase","elseif","catch","finally","with","require","prepare","import","export","define","do"],p=["end"],b=o(["true","false","nil","unit"]),y=o(["andthen","at","attr","declare","feat","from","lex","mod","div","mode","orelse","parser","prod","prop","scanner","self","syn","token"]),w=o(["local","proc","fun","case","class","if","cond","or","dis","choice","not","thread","try","raise","lock","for","suchthat","meth","functor"]),h=o(s),k=o(p);function c(e,n){if(e.eatSpace())return null;if(e.match(/[{}]/))return"bracket";if(e.match("[]"))return"keyword";if(e.match(x)||e.match(v))return"operator";if(e.match(b))return"atom";var t=e.match(w);if(t)return n.doInCurrentLine?n.doInCurrentLine=!1:n.currentIndent++,t[0]=="proc"||t[0]=="fun"?n.tokenize=E:t[0]=="class"?n.tokenize=S:t[0]=="meth"&&(n.tokenize=I),"keyword";if(e.match(h)||e.match(y))return"keyword";if(e.match(k))return n.currentIndent--,"keyword";var r=e.next();if(r=='"'||r=="'")return n.tokenize=C(r),n.tokenize(e,n);if(/[~\d]/.test(r)){if(r=="~")if(/^[0-9]/.test(e.peek())){if(e.next()=="0"&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))return"number"}else return null;return r=="0"&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)?"number":null}return r=="%"?(e.skipToEnd(),"comment"):r=="/"&&e.eat("*")?(n.tokenize=m,m(e,n)):f.test(r)?"operator":(e.eatWhile(/\w/),"variable")}function S(e,n){return e.eatSpace()?null:(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/),n.tokenize=c,"variable-3")}function I(e,n){return e.eatSpace()?null:(e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/),n.tokenize=c,"def")}function E(e,n){return e.eatSpace()?null:!n.hasPassedFirstStage&&e.eat("{")?(n.hasPassedFirstStage=!0,"bracket"):n.hasPassedFirstStage?(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/),n.hasPassedFirstStage=!1,n.tokenize=c,"def"):(n.tokenize=c,null)}function m(e,n){for(var t=!1,r;r=e.next();){if(r=="/"&&t){n.tokenize=c;break}t=r=="*"}return"comment"}function C(e){return function(n,t){for(var r=!1,d,z=!1;(d=n.next())!=null;){if(d==e&&!r){z=!0;break}r=!r&&d=="\\"}return(z||!r)&&(t.tokenize=c),"string"}}function A(){var e=s.concat(p);return new RegExp("[\\[\\]]|("+e.join("|")+")$")}return{startState:function(){return{tokenize:c,currentIndent:0,doInCurrentLine:!1,hasPassedFirstStage:!1}},token:function(e,n){return e.sol()&&(n.doInCurrentLine=0),n.tokenize(e,n)},indent:function(e,n){var t=n.replace(/^\s+|\s+$/g,"");return t.match(k)||t.match(h)||t.match(/(\[])/)?u.indentUnit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*u.indentUnit},fold:"indent",electricInput:A(),lineComment:"%",blockCommentStart:"/*",blockCommentEnd:"*/"}}),i.defineMIME("text/x-oz","oz")})})();var g=_.exports;const j=F(g),K=O({__proto__:null,default:j},[g]);export{K as o};
