import{b as R}from"./antd-BmrhB3rb.js";import{r as w}from"./index-Byl3IXer.js";function A(y,m){for(var c=0;c<m.length;c++){const u=m[c];if(typeof u!="string"&&!Array.isArray(u)){for(const d in u)if(d!=="default"&&!(d in y)){const b=Object.getOwnPropertyDescriptor(u,d);b&&Object.defineProperty(y,d,b.get?b:{enumerable:!0,get:()=>u[d]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}var C={exports:{}};(function(y,m){(function(c){c(w())})(function(c){var u={addition:"positive",attributes:"attribute",bold:"strong",cite:"keyword",code:"atom",definitionList:"number",deletion:"negative",div:"punctuation",em:"em",footnote:"variable",footCite:"qualifier",header:"header",html:"comment",image:"string",italic:"em",link:"link",linkDefinition:"link",list1:"variable-2",list2:"variable-3",list3:"keyword",notextile:"string-2",pre:"operator",p:"property",quote:"bracket",span:"quote",specialChar:"tag",strong:"strong",sub:"builtin",sup:"builtin",table:"variable-3",tableHeading:"operator"};function d(t,e){e.mode=l.newLayout,e.tableHeading=!1,e.layoutType==="definitionList"&&e.spanningLayout&&t.match(r("definitionListEnd"),!1)&&(e.spanningLayout=!1)}function b(t,e,i){if(i==="_")return t.eat("_")?f(t,e,"italic",/__/,2):f(t,e,"em",/_/,1);if(i==="*")return t.eat("*")?f(t,e,"bold",/\*\*/,2):f(t,e,"strong",/\*/,1);if(i==="[")return t.match(/\d+\]/)&&(e.footCite=!0),a(e);if(i==="("){var o=t.match(/^(r|tm|c)\)/);if(o)return p(e,u.specialChar)}if(i==="<"&&t.match(/(\w+)[^>]+>[^<]+<\/\1>/))return p(e,u.html);if(i==="?"&&t.eat("?"))return f(t,e,"cite",/\?\?/,2);if(i==="="&&t.eat("="))return f(t,e,"notextile",/==/,2);if(i==="-"&&!t.eat("-"))return f(t,e,"deletion",/-/,1);if(i==="+")return f(t,e,"addition",/\+/,1);if(i==="~")return f(t,e,"sub",/~/,1);if(i==="^")return f(t,e,"sup",/\^/,1);if(i==="%")return f(t,e,"span",/%/,1);if(i==="@")return f(t,e,"code",/@/,1);if(i==="!"){var s=f(t,e,"image",/(?:\([^\)]+\))?!/,1);return t.match(/^:\S+/),s}return a(e)}function f(t,e,i,o,s){var g=t.pos>s?t.string.charAt(t.pos-s-1):null,h=t.peek();if(e[i]){if((!h||/\W/.test(h))&&g&&/\S/.test(g)){var L=a(e);return e[i]=!1,L}}else(!g||/\W/.test(g))&&h&&/\S/.test(h)&&t.match(new RegExp("^.*\\S"+o.source+"(?:\\W|$)"),!1)&&(e[i]=!0,e.mode=l.attributes);return a(e)}function a(t){var e=v(t);if(e)return e;var i=[];return t.layoutType&&i.push(u[t.layoutType]),i=i.concat(x(t,"addition","bold","cite","code","deletion","em","footCite","image","italic","link","span","strong","sub","sup","table","tableHeading")),t.layoutType==="header"&&i.push(u.header+"-"+t.header),i.length?i.join(" "):null}function v(t){var e=t.layoutType;switch(e){case"notextile":case"code":case"pre":return u[e];default:return t.notextile?u.notextile+(e?" "+u[e]:""):null}}function p(t,e){var i=v(t);if(i)return i;var o=a(t);return e?o?o+" "+e:e:o}function x(t){for(var e=[],i=1;i<arguments.length;++i)t[arguments[i]]&&e.push(u[arguments[i]]);return e}function T(t){var e=t.spanningLayout,i=t.layoutType;for(var o in t)t.hasOwnProperty(o)&&delete t[o];t.mode=l.newLayout,e&&(t.layoutType=i,t.spanningLayout=!0)}var n={cache:{},single:{bc:"bc",bq:"bq",definitionList:/- .*?:=+/,definitionListEnd:/.*=:\s*$/,div:"div",drawTable:/\|.*\|/,foot:/fn\d+/,header:/h[1-6]/,html:/\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,link:/[^"]+":\S/,linkDefinition:/\[[^\s\]]+\]\S+/,list:/(?:#+|\*+)/,notextile:"notextile",para:"p",pre:"pre",table:"table",tableCellAttributes:/[\/\\]\d+/,tableHeading:/\|_\./,tableText:/[^"_\*\[\(\?\+~\^%@|-]+/,text:/[^!"_=\*\[\(<\?\+~\^%@-]+/},attributes:{align:/(?:<>|<|>|=)/,selector:/\([^\(][^\)]+\)/,lang:/\[[^\[\]]+\]/,pad:/(?:\(+|\)+){1,2}/,css:/\{[^\}]+\}/},createRe:function(t){switch(t){case"drawTable":return n.makeRe("^",n.single.drawTable,"$");case"html":return n.makeRe("^",n.single.html,"(?:",n.single.html,")*","$");case"linkDefinition":return n.makeRe("^",n.single.linkDefinition,"$");case"listLayout":return n.makeRe("^",n.single.list,r("allAttributes"),"*\\s+");case"tableCellAttributes":return n.makeRe("^",n.choiceRe(n.single.tableCellAttributes,r("allAttributes")),"+\\.");case"type":return n.makeRe("^",r("allTypes"));case"typeLayout":return n.makeRe("^",r("allTypes"),r("allAttributes"),"*\\.\\.?","(\\s+|$)");case"attributes":return n.makeRe("^",r("allAttributes"),"+");case"allTypes":return n.choiceRe(n.single.div,n.single.foot,n.single.header,n.single.bc,n.single.bq,n.single.notextile,n.single.pre,n.single.table,n.single.para);case"allAttributes":return n.choiceRe(n.attributes.selector,n.attributes.css,n.attributes.lang,n.attributes.align,n.attributes.pad);default:return n.makeRe("^",n.single[t])}},makeRe:function(){for(var t="",e=0;e<arguments.length;++e){var i=arguments[e];t+=typeof i=="string"?i:i.source}return new RegExp(t)},choiceRe:function(){for(var t=[arguments[0]],e=1;e<arguments.length;++e)t[e*2-1]="|",t[e*2]=arguments[e];return t.unshift("(?:"),t.push(")"),n.makeRe.apply(null,t)}};function r(t){return n.cache[t]||(n.cache[t]=n.createRe(t))}var l={newLayout:function(t,e){if(t.match(r("typeLayout"),!1))return e.spanningLayout=!1,(e.mode=l.blockType)(t,e);var i;return v(e)||(t.match(r("listLayout"),!1)?i=l.list:t.match(r("drawTable"),!1)?i=l.table:t.match(r("linkDefinition"),!1)?i=l.linkDefinition:t.match(r("definitionList"))?i=l.definitionList:t.match(r("html"),!1)&&(i=l.html)),(e.mode=i||l.text)(t,e)},blockType:function(t,e){var i,o;if(e.layoutType=null,i=t.match(r("type")))o=i[0];else return(e.mode=l.text)(t,e);return(i=o.match(r("header")))?(e.layoutType="header",e.header=parseInt(i[0][1])):o.match(r("bq"))?e.layoutType="quote":o.match(r("bc"))?e.layoutType="code":o.match(r("foot"))?e.layoutType="footnote":o.match(r("notextile"))?e.layoutType="notextile":o.match(r("pre"))?e.layoutType="pre":o.match(r("div"))?e.layoutType="div":o.match(r("table"))&&(e.layoutType="table"),e.mode=l.attributes,a(e)},text:function(t,e){if(t.match(r("text")))return a(e);var i=t.next();return i==='"'?(e.mode=l.link)(t,e):b(t,e,i)},attributes:function(t,e){return e.mode=l.layoutLength,t.match(r("attributes"))?p(e,u.attributes):a(e)},layoutLength:function(t,e){return t.eat(".")&&t.eat(".")&&(e.spanningLayout=!0),e.mode=l.text,a(e)},list:function(t,e){var i=t.match(r("list"));e.listDepth=i[0].length;var o=(e.listDepth-1)%3;return o?o===1?e.layoutType="list2":e.layoutType="list3":e.layoutType="list1",e.mode=l.attributes,a(e)},link:function(t,e){return e.mode=l.text,t.match(r("link"))?(t.match(/\S+/),p(e,u.link)):a(e)},linkDefinition:function(t,e){return t.skipToEnd(),p(e,u.linkDefinition)},definitionList:function(t,e){return t.match(r("definitionList")),e.layoutType="definitionList",t.match(/\s*$/)?e.spanningLayout=!0:e.mode=l.attributes,a(e)},html:function(t,e){return t.skipToEnd(),p(e,u.html)},table:function(t,e){return e.layoutType="table",(e.mode=l.tableCell)(t,e)},tableCell:function(t,e){return t.match(r("tableHeading"))?e.tableHeading=!0:t.eat("|"),e.mode=l.tableCellAttributes,a(e)},tableCellAttributes:function(t,e){return e.mode=l.tableText,t.match(r("tableCellAttributes"))?p(e,u.attributes):a(e)},tableText:function(t,e){return t.match(r("tableText"))?a(e):t.peek()==="|"?(e.mode=l.tableCell,a(e)):b(t,e,t.next())}};c.defineMode("textile",function(){return{startState:function(){return{mode:l.newLayout}},token:function(t,e){return t.sol()&&d(t,e),e.mode(t,e)},blankLine:T}}),c.defineMIME("text/x-textile","textile")})})();var k=C.exports;const _=R(k),S=A({__proto__:null,default:_},[k]);export{S as t};
