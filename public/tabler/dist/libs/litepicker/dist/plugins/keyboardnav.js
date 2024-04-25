/*!
 * 
 * plugins/keyboardnav.js
 * Litepicker v2.0.12 (https://github.com/wakirin/Litepicker)
 * Package: litepicker (https://www.npmjs.com/package/litepicker)
 * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 * Copyright 2019-2021 Rinat G.
 *     
 * Hash: b9a648207aabe31b2912
 * 
 */!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function c(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function s(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(m(r.parts[a],t))}else{for(var c=[];a<r.parts.length;a++)c.push(m(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var i=v++;n=b||(b=u(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e,t);return s(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],u=o[a.id];u&&(u.refs--,r.push(u))}e&&s(c(e,t),t);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(e,t,n){"use strict";n.r(t);n(3);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Litepicker.add("keyboardnav",{init:function(e){Object.defineProperties(e,{isMouseDown:{value:!1,writable:!0}});function t(t,r){if(t.classList.contains("day-item")){r.preventDefault();var o=n(e.ui,t,(function(e,t){return e===(t="ArrowLeft"===r.code?t-1:t+1)}));o?o.focus():function(t){var n=e.ui.querySelector("".concat({ArrowLeft:".button-previous-month",ArrowRight:".button-next-month"}[t.code],'[tabindex="1"]'));n&&n.dispatchEvent(new Event("click"));setTimeout((function(){var n=null;switch(t.code){case"ArrowLeft":var r=e.ui.querySelectorAll('[tabindex="2"]');n=r[r.length-1];break;case"ArrowRight":n=e.ui.querySelector('[tabindex="2"]')}n.focus()}))}(r)}}function n(e,t,n){var r=Array.from(e.querySelectorAll('.day-item[tabindex="2"]')),o=r.indexOf(t);return r.filter((function(e,t){return n(t,o)&&2===e.tabIndex}))[0]}function r(t){e.isMouseDown=!0}function i(t){e.isMouseDown?e.isMouseDown=!1:this.options.inlineMode||this.isShowning()||(this.show(t.target),this.ui.querySelector('[tabindex="'.concat(e.options.keyboardnav.firstTabIndex,'"]')).focus())}function a(e){var t=this;this.options.inlineMode||setTimeout((function(){var e=document.activeElement;t.ui.contains(e)||(t.nextFocusElement=e)}))}e.options.keyboardnav=o(o({},{firstTabIndex:1}),e.options.keyboardnav),e.ui.addEventListener("keydown",function(r){var o=this,i=r.target;switch(setTimeout((function(){o.onMouseEnter({target:document.activeElement})})),r.code){case"ArrowUp":case"ArrowDown":!function(t,r){if(t.classList.contains("day-item")){r.preventDefault();var o=n(e.ui,t,(function(e,t){return e===(t="ArrowUp"===r.code?t-7:t+7)}));o&&o.focus()}}(i,r);break;case"ArrowLeft":case"ArrowRight":t(i,r);break;case"Tab":!function(t,n){setTimeout((function(){if(!document.activeElement.closest(".litepicker")){var n=e.ui.querySelector('[tabindex="1"]');if(t===n){var r=e.ui.querySelectorAll('[tabindex="2"]');n=r[r.length-1]}n.focus()}}))}(i);break;case"Enter":case"Space":!function(t,n){t.classList.contains("day-item")&&(n.preventDefault(),document.activeElement.dispatchEvent(new Event("click")),setTimeout((function(){var t=e.ui.querySelector('.is-start-date[tabindex="2"]');t||(t=e.ui.querySelector('[tabindex="2"]')),t.focus()})))}(i,r);break;case"Escape":e.hide()}}.bind(e),!0);var c=e.options;c.element instanceof HTMLElement&&(c.element.addEventListener("mousedown",r.bind(e),!0),c.element.addEventListener("focus",i.bind(e),!0)),c.elementEnd instanceof HTMLElement&&(c.elementEnd.addEventListener("mousedown",r.bind(e),!0),c.elementEnd.addEventListener("focus",i.bind(e),!0)),c.element instanceof HTMLElement&&c.element.addEventListener("blur",a.bind(e),!0),c.elementEnd instanceof HTMLElement&&c.elementEnd.addEventListener("blur",a.bind(e),!0),e.on("render",(function(e){Array.from(e.querySelectorAll([".month-item:first-child:not(.no-previous-month) .button-previous-month",".month-item:last-child:not(.no-next-month) .button-next-month",".reset-button","select"].join(","))).forEach((function(e){return e.tabIndex=1}))})),e.on("render:day",(function(e){e.tabIndex=e.classList.contains("is-locked")?-1:2}))}})},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:function(e){var t=document.querySelector("head"),n=window._lastElementInsertedByStyleLoader;window.disableLitepickerStyles||(n?n.nextSibling?t.insertBefore(e,n.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e)},singleton:!1};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=n(0)(!1)).push([e.i,"",""]),e.exports=t}]);