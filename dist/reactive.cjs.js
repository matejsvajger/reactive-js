"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}var Reactive=function(){var e=new WeakMap,n=new WeakMap,t=function(e){return"function"==typeof e},r=function(n,t,r){var i=e.get(r)||{};i.hasOwnProperty(n)||(i[n]=[]),i[n].push(t),e.set(r,i),t(r[n])},i=function(e,t,r){var i=n.get(r)||{};i[e]=t,n.set(r,i),a(e,r)},a=function(n,t){var r=e.get(t)||{};if(r.hasOwnProperty(n))for(var i in r[n])r[n][i](t[n])},o=function(e,n){for(var r in e)t(e[r])&&a(r,n)},f=function(e){var n={};for(var r in e)n[r]=t(e[r])?e[r](e):e[r];return n};return function(){function e(r){var i=this;_classCallCheck(this,e);var s=function(e){Object.defineProperty(i,e,{get:function(){var i=t(r[e])?r[e](f(r)):r[e],a=n.get(this);return a&&a.hasOwnProperty(e)?a[e](i):i},set:function(n){t(r[e])||(r[e]=n,a(e,this),o(r,this))}})};for(var c in r)s(c)}return _createClass(e,[{key:"observe",value:function(e,n){if("string"==typeof e)r(e,n,this);else for(var t in e)r(t,e[t],this)}},{key:"format",value:function(e,n){if("string"==typeof e)i(e,n,this);else for(var t in e)i(t,e[t],this)}}]),e}()}();module.exports=Reactive;
