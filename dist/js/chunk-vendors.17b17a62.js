(self["webpackChunkmoto_shop_vue"]=self["webpackChunkmoto_shop_vue"]||[]).push([[998],{9662:function(e,t,c){var n=c(614),s=c(6330),r=TypeError;e.exports=function(e){if(n(e))return e;throw r(s(e)+" is not a function")}},6077:function(e,t,c){var n=c(614),s=String,r=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw r("Can't set "+s(e)+" as a prototype")}},5787:function(e,t,c){var n=c(7976),s=TypeError;e.exports=function(e,t){if(n(t,e))return e;throw s("Incorrect invocation")}},9670:function(e,t,c){var n=c(111),s=String,r=TypeError;e.exports=function(e){if(n(e))return e;throw r(s(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,c){"use strict";var n,s,r,i=c(3013),a=c(9781),o=c(7854),l=c(614),u=c(111),h=c(2597),f=c(648),d=c(6330),m=c(8880),p=c(8052),z=c(7045),v=c(7976),g=c(9518),V=c(7674),H=c(5112),M=c(9711),C=c(9909),y=C.enforce,L=C.get,b=o.Int8Array,w=b&&b.prototype,k=o.Uint8ClampedArray,S=k&&k.prototype,_=b&&g(b),I=w&&g(w),A=Object.prototype,E=o.TypeError,x=H("toStringTag"),T=M("TYPED_ARRAY_TAG"),O="TypedArrayConstructor",N=i&&!!V&&"Opera"!==f(o.opera),D=!1,R={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},P={BigInt64Array:8,BigUint64Array:8},F=function(e){if(!u(e))return!1;var t=f(e);return"DataView"===t||h(R,t)||h(P,t)},q=function(e){var t=g(e);if(u(t)){var c=L(t);return c&&h(c,O)?c[O]:q(t)}},j=function(e){if(!u(e))return!1;var t=f(e);return h(R,t)||h(P,t)},U=function(e){if(j(e))return e;throw E("Target is not a typed array")},B=function(e){if(l(e)&&(!V||v(_,e)))return e;throw E(d(e)+" is not a typed array constructor")},$=function(e,t,c,n){if(a){if(c)for(var s in R){var r=o[s];if(r&&h(r.prototype,e))try{delete r.prototype[e]}catch(i){try{r.prototype[e]=t}catch(l){}}}I[e]&&!c||p(I,e,c?t:N&&w[e]||t,n)}},K=function(e,t,c){var n,s;if(a){if(V){if(c)for(n in R)if(s=o[n],s&&h(s,e))try{delete s[e]}catch(r){}if(_[e]&&!c)return;try{return p(_,e,c?t:N&&_[e]||t)}catch(r){}}for(n in R)s=o[n],!s||s[e]&&!c||p(s,e,t)}};for(n in R)s=o[n],r=s&&s.prototype,r?y(r)[O]=s:N=!1;for(n in P)s=o[n],r=s&&s.prototype,r&&(y(r)[O]=s);if((!N||!l(_)||_===Function.prototype)&&(_=function(){throw E("Incorrect invocation")},N))for(n in R)o[n]&&V(o[n],_);if((!N||!I||I===A)&&(I=_.prototype,N))for(n in R)o[n]&&V(o[n].prototype,I);if(N&&g(S)!==I&&V(S,I),a&&!h(I,x))for(n in D=!0,z(I,x,{configurable:!0,get:function(){return u(this)?this[T]:void 0}}),R)o[n]&&m(o[n],T,n);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:N,TYPED_ARRAY_TAG:D&&T,aTypedArray:U,aTypedArrayConstructor:B,exportTypedArrayMethod:$,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:q,isView:F,isTypedArray:j,TypedArray:_,TypedArrayPrototype:I}},7745:function(e,t,c){var n=c(6244);e.exports=function(e,t){var c=0,s=n(t),r=new e(s);while(s>c)r[c]=t[c++];return r}},1318:function(e,t,c){var n=c(5656),s=c(1400),r=c(6244),i=function(e){return function(t,c,i){var a,o=n(t),l=r(o),u=s(i,l);if(e&&c!=c){while(l>u)if(a=o[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in o)&&o[u]===c)return e||u||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},3658:function(e,t,c){"use strict";var n=c(9781),s=c(3157),r=TypeError,i=Object.getOwnPropertyDescriptor,a=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(s(e)&&!i(e,"length").writable)throw r("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},1843:function(e,t,c){var n=c(6244);e.exports=function(e,t){for(var c=n(e),s=new t(c),r=0;r<c;r++)s[r]=e[c-r-1];return s}},1572:function(e,t,c){var n=c(6244),s=c(9303),r=RangeError;e.exports=function(e,t,c,i){var a=n(e),o=s(c),l=o<0?a+o:o;if(l>=a||l<0)throw r("Incorrect index");for(var u=new t(a),h=0;h<a;h++)u[h]=h===l?i:e[h];return u}},4326:function(e,t,c){var n=c(1702),s=n({}.toString),r=n("".slice);e.exports=function(e){return r(s(e),8,-1)}},648:function(e,t,c){var n=c(1694),s=c(614),r=c(4326),i=c(5112),a=i("toStringTag"),o=Object,l="Arguments"==r(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(c){}};e.exports=n?r:function(e){var t,c,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(c=u(t=o(e),a))?c:l?r(t):"Object"==(n=r(t))&&s(t.callee)?"Arguments":n}},9920:function(e,t,c){var n=c(2597),s=c(3887),r=c(1236),i=c(3070);e.exports=function(e,t,c){for(var a=s(t),o=i.f,l=r.f,u=0;u<a.length;u++){var h=a[u];n(e,h)||c&&n(c,h)||o(e,h,l(t,h))}}},8544:function(e,t,c){var n=c(7293);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,c){var n=c(9781),s=c(3070),r=c(9114);e.exports=n?function(e,t,c){return s.f(e,t,r(1,c))}:function(e,t,c){return e[t]=c,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,c){var n=c(6339),s=c(3070);e.exports=function(e,t,c){return c.get&&n(c.get,t,{getter:!0}),c.set&&n(c.set,t,{setter:!0}),s.f(e,t,c)}},8052:function(e,t,c){var n=c(614),s=c(3070),r=c(6339),i=c(3072);e.exports=function(e,t,c,a){a||(a={});var o=a.enumerable,l=void 0!==a.name?a.name:t;if(n(c)&&r(c,l,a),a.global)o?e[t]=c:i(t,c);else{try{a.unsafe?e[t]&&(o=!0):delete e[t]}catch(u){}o?e[t]=c:s.f(e,t,{value:c,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,c){var n=c(7854),s=Object.defineProperty;e.exports=function(e,t){try{s(n,e,{value:t,configurable:!0,writable:!0})}catch(c){n[e]=t}return t}},5117:function(e,t,c){"use strict";var n=c(6330),s=TypeError;e.exports=function(e,t){if(!delete e[t])throw s("Cannot delete property "+n(t)+" of "+n(e))}},9781:function(e,t,c){var n=c(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,c="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:c}},317:function(e,t,c){var n=c(7854),s=c(111),r=n.document,i=s(r)&&s(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},7207:function(e){var t=TypeError,c=9007199254740991;e.exports=function(e){if(e>c)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,c){var n,s,r=c(7854),i=c(8113),a=r.process,o=r.Deno,l=a&&a.versions||o&&o.version,u=l&&l.v8;u&&(n=u.split("."),s=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!s&&i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(s=+n[1]))),e.exports=s},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,c){var n=c(1702),s=Error,r=n("".replace),i=function(e){return String(s(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,o=a.test(i);e.exports=function(e,t){if(o&&"string"==typeof e&&!s.prepareStackTrace)while(t--)e=r(e,a,"");return e}},2109:function(e,t,c){var n=c(7854),s=c(1236).f,r=c(8880),i=c(8052),a=c(3072),o=c(9920),l=c(4705);e.exports=function(e,t){var c,u,h,f,d,m,p=e.target,z=e.global,v=e.stat;if(u=z?n:v?n[p]||a(p,{}):(n[p]||{}).prototype,u)for(h in t){if(d=t[h],e.dontCallGetSet?(m=s(u,h),f=m&&m.value):f=u[h],c=l(z?h:p+(v?".":"#")+h,e.forced),!c&&void 0!==f){if(typeof d==typeof f)continue;o(d,f)}(e.sham||f&&f.sham)&&r(d,"sham",!0),i(u,h,d,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,c){var n=c(7293);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,c){var n=c(4374),s=Function.prototype.call;e.exports=n?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(e,t,c){var n=c(9781),s=c(2597),r=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,a=s(r,"name"),o=a&&"something"===function(){}.name,l=a&&(!n||n&&i(r,"name").configurable);e.exports={EXISTS:a,PROPER:o,CONFIGURABLE:l}},5668:function(e,t,c){var n=c(1702),s=c(9662);e.exports=function(e,t,c){try{return n(s(Object.getOwnPropertyDescriptor(e,t)[c]))}catch(r){}}},1702:function(e,t,c){var n=c(4374),s=Function.prototype,r=s.call,i=n&&s.bind.bind(r,r);e.exports=n?i:function(e){return function(){return r.apply(e,arguments)}}},5005:function(e,t,c){var n=c(7854),s=c(614),r=function(e){return s(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?r(n[e]):n[e]&&n[e][t]}},8173:function(e,t,c){var n=c(9662),s=c(8554);e.exports=function(e,t){var c=e[t];return s(c)?void 0:n(c)}},7854:function(e,t,c){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof c.g&&c.g)||function(){return this}()||Function("return this")()},2597:function(e,t,c){var n=c(1702),s=c(7908),r=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return r(s(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,c){var n=c(9781),s=c(7293),r=c(317);e.exports=!n&&!s((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,c){var n=c(1702),s=c(7293),r=c(4326),i=Object,a=n("".split);e.exports=s((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"==r(e)?a(e,""):i(e)}:i},9587:function(e,t,c){var n=c(614),s=c(111),r=c(7674);e.exports=function(e,t,c){var i,a;return r&&n(i=t.constructor)&&i!==c&&s(a=i.prototype)&&a!==c.prototype&&r(e,a),e}},2788:function(e,t,c){var n=c(1702),s=c(614),r=c(5465),i=n(Function.toString);s(r.inspectSource)||(r.inspectSource=function(e){return i(e)}),e.exports=r.inspectSource},9909:function(e,t,c){var n,s,r,i=c(4811),a=c(7854),o=c(111),l=c(8880),u=c(2597),h=c(5465),f=c(6200),d=c(3501),m="Object already initialized",p=a.TypeError,z=a.WeakMap,v=function(e){return r(e)?s(e):n(e,{})},g=function(e){return function(t){var c;if(!o(t)||(c=s(t)).type!==e)throw p("Incompatible receiver, "+e+" required");return c}};if(i||h.state){var V=h.state||(h.state=new z);V.get=V.get,V.has=V.has,V.set=V.set,n=function(e,t){if(V.has(e))throw p(m);return t.facade=e,V.set(e,t),t},s=function(e){return V.get(e)||{}},r=function(e){return V.has(e)}}else{var H=f("state");d[H]=!0,n=function(e,t){if(u(e,H))throw p(m);return t.facade=e,l(e,H,t),t},s=function(e){return u(e,H)?e[H]:{}},r=function(e){return u(e,H)}}e.exports={set:n,get:s,has:r,enforce:v,getterFor:g}},3157:function(e,t,c){var n=c(4326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},4067:function(e,t,c){var n=c(648);e.exports=function(e){var t=n(e);return"BigInt64Array"==t||"BigUint64Array"==t}},614:function(e,t,c){var n=c(4154),s=n.all;e.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===s}:function(e){return"function"==typeof e}},4705:function(e,t,c){var n=c(7293),s=c(614),r=/#|\.prototype\./,i=function(e,t){var c=o[a(e)];return c==u||c!=l&&(s(t)?n(t):!!t)},a=i.normalize=function(e){return String(e).replace(r,".").toLowerCase()},o=i.data={},l=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,c){var n=c(614),s=c(4154),r=s.all;e.exports=s.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===r}:function(e){return"object"==typeof e?null!==e:n(e)}},1913:function(e){e.exports=!1},2190:function(e,t,c){var n=c(5005),s=c(614),r=c(7976),i=c(3307),a=Object;e.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=n("Symbol");return s(t)&&r(t.prototype,a(e))}},6244:function(e,t,c){var n=c(7466);e.exports=function(e){return n(e.length)}},6339:function(e,t,c){var n=c(1702),s=c(7293),r=c(614),i=c(2597),a=c(9781),o=c(6530).CONFIGURABLE,l=c(2788),u=c(9909),h=u.enforce,f=u.get,d=String,m=Object.defineProperty,p=n("".slice),z=n("".replace),v=n([].join),g=a&&!s((function(){return 8!==m((function(){}),"length",{value:8}).length})),V=String(String).split("String"),H=e.exports=function(e,t,c){"Symbol("===p(d(t),0,7)&&(t="["+z(d(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),c&&c.getter&&(t="get "+t),c&&c.setter&&(t="set "+t),(!i(e,"name")||o&&e.name!==t)&&(a?m(e,"name",{value:t,configurable:!0}):e.name=t),g&&c&&i(c,"arity")&&e.length!==c.arity&&m(e,"length",{value:c.arity});try{c&&i(c,"constructor")&&c.constructor?a&&m(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(s){}var n=h(e);return i(n,"source")||(n.source=v(V,"string"==typeof t?t:"")),e};Function.prototype.toString=H((function(){return r(this)&&f(this).source||l(this)}),"toString")},4758:function(e){var t=Math.ceil,c=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?c:t)(n)}},6277:function(e,t,c){var n=c(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},3070:function(e,t,c){var n=c(9781),s=c(4664),r=c(3353),i=c(9670),a=c(4948),o=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";t.f=n?r?function(e,t,c){if(i(e),t=a(t),i(c),"function"===typeof e&&"prototype"===t&&"value"in c&&d in c&&!c[d]){var n=u(e,t);n&&n[d]&&(e[t]=c.value,c={configurable:f in c?c[f]:n[f],enumerable:h in c?c[h]:n[h],writable:!1})}return l(e,t,c)}:l:function(e,t,c){if(i(e),t=a(t),i(c),s)try{return l(e,t,c)}catch(n){}if("get"in c||"set"in c)throw o("Accessors not supported");return"value"in c&&(e[t]=c.value),e}},1236:function(e,t,c){var n=c(9781),s=c(6916),r=c(5296),i=c(9114),a=c(5656),o=c(4948),l=c(2597),u=c(4664),h=Object.getOwnPropertyDescriptor;t.f=n?h:function(e,t){if(e=a(e),t=o(t),u)try{return h(e,t)}catch(c){}if(l(e,t))return i(!s(r.f,e,t),e[t])}},8006:function(e,t,c){var n=c(6324),s=c(748),r=s.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,c){var n=c(2597),s=c(614),r=c(7908),i=c(6200),a=c(8544),o=i("IE_PROTO"),l=Object,u=l.prototype;e.exports=a?l.getPrototypeOf:function(e){var t=r(e);if(n(t,o))return t[o];var c=t.constructor;return s(c)&&t instanceof c?c.prototype:t instanceof l?u:null}},7976:function(e,t,c){var n=c(1702);e.exports=n({}.isPrototypeOf)},6324:function(e,t,c){var n=c(1702),s=c(2597),r=c(5656),i=c(1318).indexOf,a=c(3501),o=n([].push);e.exports=function(e,t){var c,n=r(e),l=0,u=[];for(c in n)!s(a,c)&&s(n,c)&&o(u,c);while(t.length>l)s(n,c=t[l++])&&(~i(u,c)||o(u,c));return u}},5296:function(e,t){"use strict";var c={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,s=n&&!c.call({1:2},1);t.f=s?function(e){var t=n(this,e);return!!t&&t.enumerable}:c},7674:function(e,t,c){var n=c(5668),s=c(9670),r=c(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,c={};try{e=n(Object.prototype,"__proto__","set"),e(c,[]),t=c instanceof Array}catch(i){}return function(c,n){return s(c),r(n),t?e(c,n):c.__proto__=n,c}}():void 0)},2140:function(e,t,c){var n=c(6916),s=c(614),r=c(111),i=TypeError;e.exports=function(e,t){var c,a;if("string"===t&&s(c=e.toString)&&!r(a=n(c,e)))return a;if(s(c=e.valueOf)&&!r(a=n(c,e)))return a;if("string"!==t&&s(c=e.toString)&&!r(a=n(c,e)))return a;throw i("Can't convert object to primitive value")}},3887:function(e,t,c){var n=c(5005),s=c(1702),r=c(8006),i=c(5181),a=c(9670),o=s([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=r.f(a(e)),c=i.f;return c?o(t,c(e)):t}},4488:function(e,t,c){var n=c(8554),s=TypeError;e.exports=function(e){if(n(e))throw s("Can't call method on "+e);return e}},6200:function(e,t,c){var n=c(2309),s=c(9711),r=n("keys");e.exports=function(e){return r[e]||(r[e]=s(e))}},5465:function(e,t,c){var n=c(7854),s=c(3072),r="__core-js_shared__",i=n[r]||s(r,{});e.exports=i},2309:function(e,t,c){var n=c(1913),s=c(5465);(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.29.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,c){var n=c(7392),s=c(7293);e.exports=!!Object.getOwnPropertySymbols&&!s((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1400:function(e,t,c){var n=c(9303),s=Math.max,r=Math.min;e.exports=function(e,t){var c=n(e);return c<0?s(c+t,0):r(c,t)}},4599:function(e,t,c){var n=c(7593),s=TypeError;e.exports=function(e){var t=n(e,"number");if("number"==typeof t)throw s("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,c){var n=c(8361),s=c(4488);e.exports=function(e){return n(s(e))}},9303:function(e,t,c){var n=c(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:n(t)}},7466:function(e,t,c){var n=c(9303),s=Math.min;e.exports=function(e){return e>0?s(n(e),9007199254740991):0}},7908:function(e,t,c){var n=c(4488),s=Object;e.exports=function(e){return s(n(e))}},7593:function(e,t,c){var n=c(6916),s=c(111),r=c(2190),i=c(8173),a=c(2140),o=c(5112),l=TypeError,u=o("toPrimitive");e.exports=function(e,t){if(!s(e)||r(e))return e;var c,o=i(e,u);if(o){if(void 0===t&&(t="default"),c=n(o,e,t),!s(c)||r(c))return c;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,c){var n=c(7593),s=c(2190);e.exports=function(e){var t=n(e,"string");return s(t)?t:t+""}},1694:function(e,t,c){var n=c(5112),s=n("toStringTag"),r={};r[s]="z",e.exports="[object z]"===String(r)},1340:function(e,t,c){var n=c(648),s=String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(c){return"Object"}}},9711:function(e,t,c){var n=c(1702),s=0,r=Math.random(),i=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++s+r,36)}},3307:function(e,t,c){var n=c(6293);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,c){var n=c(9781),s=c(7293);e.exports=n&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,c){var n=c(7854),s=c(614),r=n.WeakMap;e.exports=s(r)&&/native code/.test(String(r))},5112:function(e,t,c){var n=c(7854),s=c(2309),r=c(2597),i=c(9711),a=c(6293),o=c(3307),l=n.Symbol,u=s("wks"),h=o?l["for"]||l:l&&l.withoutSetter||i;e.exports=function(e){return r(u,e)||(u[e]=a&&r(l,e)?l[e]:h("Symbol."+e)),u[e]}},7658:function(e,t,c){"use strict";var n=c(2109),s=c(7908),r=c(6244),i=c(3658),a=c(7207),o=c(7293),l=o((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=l||!u();n({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=s(this),c=r(t),n=arguments.length;a(c+n);for(var o=0;o<n;o++)t[c]=arguments[o],c++;return i(t,c),c}})},541:function(e,t,c){"use strict";var n=c(2109),s=c(7908),r=c(6244),i=c(3658),a=c(5117),o=c(7207),l=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},h=l||!u();n({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(e){var t=s(this),c=r(t),n=arguments.length;if(n){o(c+n);var l=c;while(l--){var u=l+n;l in t?t[u]=t[l]:a(t,u)}for(var h=0;h<n;h++)t[h]=arguments[h]}return i(t,c+n)}})},1439:function(e,t,c){"use strict";var n=c(1843),s=c(260),r=s.aTypedArray,i=s.exportTypedArrayMethod,a=s.getTypedArrayConstructor;i("toReversed",(function(){return n(r(this),a(this))}))},7585:function(e,t,c){"use strict";var n=c(260),s=c(1702),r=c(9662),i=c(7745),a=n.aTypedArray,o=n.getTypedArrayConstructor,l=n.exportTypedArrayMethod,u=s(n.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&r(e);var t=a(this),c=i(o(t),t);return u(c,e)}))},5315:function(e,t,c){"use strict";var n=c(1572),s=c(260),r=c(4067),i=c(9303),a=c(4599),o=s.aTypedArray,l=s.getTypedArrayConstructor,u=s.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();u("with",{with:function(e,t){var c=o(this),s=i(e),u=r(c)?a(t):+t;return n(c,l(c),s,u)}}["with"],!h)},3767:function(e,t,c){c(1439)},8585:function(e,t,c){c(7585)},8696:function(e,t,c){c(5315)},2801:function(e,t,c){"use strict";var n=c(2109),s=c(7854),r=c(5005),i=c(9114),a=c(3070).f,o=c(2597),l=c(5787),u=c(9587),h=c(6277),f=c(3678),d=c(1060),m=c(9781),p=c(1913),z="DOMException",v=r("Error"),g=r(z),V=function(){l(this,H);var e=arguments.length,t=h(e<1?void 0:arguments[0]),c=h(e<2?void 0:arguments[1],"Error"),n=new g(t,c),s=v(t);return s.name=z,a(n,"stack",i(1,d(s.stack,1))),u(n,this,V),n},H=V.prototype=g.prototype,M="stack"in v(z),C="stack"in new g(1,2),y=g&&m&&Object.getOwnPropertyDescriptor(s,z),L=!!y&&!(y.writable&&y.configurable),b=M&&!L&&!C;n({global:!0,constructor:!0,forced:p||b},{DOMException:b?V:g});var w=r(z),k=w.prototype;if(k.constructor!==w)for(var S in p||a(k,"constructor",i(1,w)),f)if(o(f,S)){var _=f[S],I=_.s;o(w,I)||a(w,I,i(6,_.c))}},7425:function(e,t,c){"use strict";c.d(t,{u7:function(){return mp},Jj:function(){return fm},IX:function(){return Jd},my:function(){return zd},xU:function(){return gp},Lz:function(){return dm},WA:function(){return jn},F8:function(){return pm},$q:function(){return Vp},W:function(){return Hp},EK:function(){return ns},PU:function(){return Pp},l7:function(){return Ns},Ky:function(){return ls},Xb:function(){return os},Cf:function(){return ud},K9:function(){return Pn},Me:function(){return Us},yq:function(){return On},Wi:function(){return id},ET:function(){return xp},Ab:function(){return Kp},vr:function(){return $p},Fc:function(){return rm},hJ:function(){return Vd},B$:function(){return Hd},at:function(){return pd},oe:function(){return Ep},AK:function(){return Up},TF:function(){return om},JU:function(){return Md},ST:function(){return cm},fH:function(){return nm},Ix:function(){return am},Wu:function(){return op},Lx:function(){return ap},qY:function(){return em},GL:function(){return Np},QT:function(){return yp},kl:function(){return bp},Xk:function(){return wp},PL:function(){return kp},UQ:function(){return Sp},zN:function(){return _p},nP:function(){return Gp},b9:function(){return tp},vh:function(){return cp},Pb:function(){return lm},L$:function(){return um},cf:function(){return Tp},sc:function(){return Op},Xo:function(){return Xm},IO:function(){return Wm},iE:function(){return yd},Eo:function(){return Cd},i3:function(){return jp},Bt:function(){return Bp},pl:function(){return Ip},Ub:function(){return En},qK:function(){return Cp},TQ:function(){return rp},e0:function(){return sp},r7:function(){return Ap},Mx:function(){return im},ar:function(){return Qm}});c(3767),c(8585),c(8696),c(7658),c(2801);var n,s=c(7077),r=c(7142),i=c(5168),a=c(223),o=(c(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof c.g?c.g:"undefined"!==typeof self?self:{}),l={},u=u||{},h=o||self;function f(){}function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,z)&&e[z]||(e[z]=++v)}var z="closure_uid_"+(1e9*Math.random()>>>0),v=0;function g(e,t,c){return e.call.apply(e.bind,arguments)}function V(e,t,c){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,n),e.apply(t,c)}}return function(){return e.apply(t,arguments)}}function H(e,t,c){return H=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:V,H.apply(null,arguments)}function M(e,t){var c=Array.prototype.slice.call(arguments,1);return function(){var t=c.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function C(e,t){function c(){}c.prototype=t.prototype,e.X=t.prototype,e.prototype=new c,e.prototype.constructor=e,e.Wb=function(e,c,n){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[c].apply(e,s)}}function y(){this.s=this.s,this.o=this.o}var L=0;y.prototype.s=!1,y.prototype.na=function(){this.s||(this.s=!0,this.M(),0==L)||p(this)},y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let c=0;c<e.length;c++)if(c in e&&e[c]===t)return c;return-1};function w(e){const t=e.length;if(0<t){const c=Array(t);for(let n=0;n<t;n++)c[n]=e[n];return c}return[]}function k(e,t){for(let c=1;c<arguments.length;c++){const t=arguments[c];if(d(t)){const c=e.length||0,n=t.length||0;e.length=c+n;for(let s=0;s<n;s++)e[c+s]=t[s]}else e.push(t)}}function S(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var _=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",f,t),h.removeEventListener("test",f,t)}catch(c){}return e}();function I(e){return/^[\s\xa0]*$/.test(e)}var A=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function E(e,t){return e<t?-1:e>t?1:0}function x(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function T(e){return-1!=x().indexOf(e)}function O(e){return O[" "](e),e}function N(e){var t=Z;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}O[" "]=f;var D,R=T("Opera"),P=T("Trident")||T("MSIE"),F=T("Edge"),q=F||P,j=T("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!T("Edge"))&&!(T("Trident")||T("MSIE"))&&!T("Edge"),U=-1!=x().toLowerCase().indexOf("webkit")&&!T("Edge");function B(){var e=h.document;return e?e.documentMode:void 0}e:{var $="",K=function(){var e=x();return j?/rv:([^\);]+)(\)|;)/.exec(e):F?/Edge\/([\d\.]+)/.exec(e):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):U?/WebKit\/(\S+)/.exec(e):R?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(K&&($=K?K[1]:""),P){var G=B();if(null!=G&&G>parseFloat($)){D=String(G);break e}}D=$}var W,Z={};function Q(){return N((function(){let e=0;const t=A(String(D)).split("."),c=A("9").split("."),n=Math.max(t.length,c.length);for(let i=0;0==e&&i<n;i++){var s=t[i]||"",r=c[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;e=E(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||E(0==s[2].length,0==r[2].length)||E(s[2],r[2]),s=s[3],r=r[3]}while(0==e)}return 0<=e}))}if(h.document&&P){var Y=B();W=Y||(parseInt(D,10)||void 0)}else W=void 0;var J=W;function X(e,t){if(S.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var c=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{O(t.nodeName);var s=!0;break e}catch(r){}s=!1}s||(t=null)}}else"mouseover"==c?t=e.fromElement:"mouseout"==c&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&X.X.h.call(this)}}C(X,S);var ee={2:"touch",3:"pen",4:"mouse"};X.prototype.h=function(){X.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ce=0;function ne(e,t,c,n,s){this.listener=e,this.proxy=null,this.src=t,this.type=c,this.capture=!!n,this.ha=s,this.key=++ce,this.ba=this.ea=!1}function se(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function re(e,t,c){for(const n in e)t.call(c,e[n],n,e)}function ie(e){const t={};for(const c in e)t[c]=e[c];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oe(e,t){let c,n;for(let s=1;s<arguments.length;s++){for(c in n=arguments[s],n)e[c]=n[c];for(let t=0;t<ae.length;t++)c=ae[t],Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}}function le(e){this.src=e,this.g={},this.h=0}function ue(e,t){var c=t.type;if(c in e.g){var n,s=e.g[c],r=b(s,t);(n=0<=r)&&Array.prototype.splice.call(s,r,1),n&&(se(t),0==e.g[c].length&&(delete e.g[c],e.h--))}}function he(e,t,c,n){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ba&&r.listener==t&&r.capture==!!c&&r.ha==n)return s}return-1}le.prototype.add=function(e,t,c,n,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var i=he(e,t,n,s);return-1<i?(t=e[i],c||(t.ea=!1)):(t=new ne(t,this.src,r,!!n,s),t.ea=c,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),de={};function me(e,t,c,n,s){if(n&&n.once)return ve(e,t,c,n,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)me(e,t[r],c,n,s);return null}return c=Le(c),e&&e[te]?e.N(t,c,m(n)?!!n.capture:!!n,s):pe(e,t,c,!1,n,s)}function pe(e,t,c,n,s,r){if(!t)throw Error("Invalid event type");var i=m(s)?!!s.capture:!!s,a=Ce(e);if(a||(e[fe]=a=new le(e)),c=a.add(t,c,n,i,r),c.proxy)return c;if(n=ze(),c.proxy=n,n.src=e,n.listener=c,e.addEventListener)_||(s=i),void 0===s&&(s=!1),e.addEventListener(t.toString(),n,s);else if(e.attachEvent)e.attachEvent(He(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return c}function ze(){function e(c){return t.call(e.src,e.listener,c)}const t=Me;return e}function ve(e,t,c,n,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ve(e,t[r],c,n,s);return null}return c=Le(c),e&&e[te]?e.O(t,c,m(n)?!!n.capture:!!n,s):pe(e,t,c,!0,n,s)}function ge(e,t,c,n,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)ge(e,t[r],c,n,s);else n=m(n)?!!n.capture:!!n,c=Le(c),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],c=he(r,c,n,s),-1<c&&(se(r[c]),Array.prototype.splice.call(r,c,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,c,n,s)),(c=-1<e?t[e]:null)&&Ve(c))}function Ve(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ue(t.i,e);else{var c=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(c,n,e.capture):t.detachEvent?t.detachEvent(He(c),n):t.addListener&&t.removeListener&&t.removeListener(n),(c=Ce(t))?(ue(c,e),0==c.h&&(c.src=null,t[fe]=null)):se(e)}}}function He(e){return e in de?de[e]:de[e]="on"+e}function Me(e,t){if(e.ba)e=!0;else{t=new X(t,this);var c=e.listener,n=e.ha||e.src;e.ea&&Ve(e),e=c.call(n,t)}return e}function Ce(e){return e=e[fe],e instanceof le?e:null}var ye="__closure_events_fn_"+(1e9*Math.random()>>>0);function Le(e){return"function"===typeof e?e:(e[ye]||(e[ye]=function(t){return e.handleEvent(t)}),e[ye])}function be(){y.call(this),this.i=new le(this),this.P=this,this.I=null}function we(e,t){var c,n=e.I;if(n)for(c=[];n;n=n.I)c.push(n);if(e=e.P,n=t.type||t,"string"===typeof t)t=new S(t,e);else if(t instanceof S)t.target=t.target||e;else{var s=t;t=new S(n,e),oe(t,s)}if(s=!0,c)for(var r=c.length-1;0<=r;r--){var i=t.g=c[r];s=ke(i,n,!0,t)&&s}if(i=t.g=e,s=ke(i,n,!0,t)&&s,s=ke(i,n,!1,t)&&s,c)for(r=0;r<c.length;r++)i=t.g=c[r],s=ke(i,n,!1,t)&&s}function ke(e,t,c,n){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var i=t[r];if(i&&!i.ba&&i.capture==c){var a=i.listener,o=i.ha||i.src;i.ea&&ue(e.i,i),s=!1!==a.call(o,n)&&s}}return s&&!n.defaultPrevented}C(be,y),be.prototype[te]=!0,be.prototype.removeEventListener=function(e,t,c,n){ge(this,e,t,c,n)},be.prototype.M=function(){if(be.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var c=t.g[e],n=0;n<c.length;n++)se(c[n]);delete t.g[e],t.h--}}this.I=null},be.prototype.N=function(e,t,c,n){return this.i.add(String(e),t,!1,c,n)},be.prototype.O=function(e,t,c,n){return this.i.add(String(e),t,!0,c,n)};var Se=h.JSON.stringify;function _e(){var e=Re;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ie{constructor(){this.h=this.g=null}add(e,t){const c=Ee.get();c.set(e,t),this.h?this.h.next=c:this.g=c,this.h=c}}var Ae,Ee=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new xe),(e=>e.reset()));class xe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Te(e){h.setTimeout((()=>{throw e}),0)}function Oe(e,t){Ae||Ne(),De||(Ae(),De=!0),Re.add(e,t)}function Ne(){var e=h.Promise.resolve(void 0);Ae=function(){e.then(Pe)}}var De=!1,Re=new Ie;function Pe(){for(var e;e=_e();){try{e.h.call(e.g)}catch(c){Te(c)}var t=Ee;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}De=!1}function Fe(e,t){be.call(this),this.h=e||1,this.g=t||h,this.j=H(this.lb,this),this.l=Date.now()}function qe(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function je(e,t,c){if("function"===typeof e)c&&(e=H(e,c));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=H(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function Ue(e){e.g=je((()=>{e.g=null,e.i&&(e.i=!1,Ue(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}C(Fe,be),n=Fe.prototype,n.ca=!1,n.R=null,n.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),we(this,"tick"),this.ca&&(qe(this),this.start()))}},n.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n.M=function(){Fe.X.M.call(this),qe(this),delete this.g};class Be extends y{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ue(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){y.call(this),this.h=e,this.g={}}C($e,y);var Ke=[];function Ge(e,t,c,n){Array.isArray(c)||(c&&(Ke[0]=c.toString()),c=Ke);for(var s=0;s<c.length;s++){var r=me(t,c[s],n||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function We(e){re(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ve(e)}),e),e.g={}}function Ze(){this.g=!0}function Qe(e,t,c,n,s,r){e.info((function(){if(e.g)if(r)for(var i="",a=r.split("&"),o=0;o<a.length;o++){var l=a[o].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");i=2<=h.length&&"type"==h[1]?i+(u+"=")+l+"&":i+(u+"=redacted&")}}else i=null;else i=r;return"XMLHTTP REQ ("+n+") [attempt "+s+"]: "+t+"\n"+c+"\n"+i}))}function Ye(e,t,c,n,s,r,i){e.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+s+"]: "+t+"\n"+c+"\n"+r+" "+i}))}function Je(e,t,c,n){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,c)+(n?" "+n:"")}))}function Xe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var c=JSON.parse(t);if(c)for(e=0;e<c.length;e++)if(Array.isArray(c[e])){var n=c[e];if(!(2>n.length)){var s=n[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var i=1;i<s.length;i++)s[i]=""}}}return Se(c)}catch(a){return t}}$e.prototype.M=function(){$e.X.M.call(this),We(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ze.prototype.Aa=function(){this.g=!1},Ze.prototype.info=function(){};var tt={},ct=null;function nt(){return ct=ct||new be}function st(e){S.call(this,tt.Pa,e)}function rt(e){const t=nt();we(t,new st(t))}function it(e,t){S.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=nt();we(t,new it(t,e))}function ot(e,t){S.call(this,tt.Qa,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",C(st,S),tt.STAT_EVENT="statevent",C(it,S),tt.Qa="timingevent",C(ot,S);var ut={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ft(){}function dt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var pt,zt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vt(){S.call(this,"d")}function gt(){S.call(this,"c")}function Vt(){}function Ht(e,t,c,n){this.l=e,this.j=t,this.m=c,this.U=n||1,this.S=new $e(this),this.O=Ct,e=q?125:void 0,this.T=new Fe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Mt}function Mt(){this.i=null,this.g="",this.h=!1}C(vt,S),C(gt,S),C(Vt,ft),Vt.prototype.g=function(){return new XMLHttpRequest},Vt.prototype.i=function(){return{}},pt=new Vt;var Ct=45e3,yt={},Lt={};function bt(e,t,c){e.K=1,e.v=Gt(jt(t)),e.s=c,e.P=!0,wt(e,null)}function wt(e,t){e.F=Date.now(),It(e),e.A=jt(e.v);var c=e.A,n=e.U;Array.isArray(n)||(n=[String(n)]),ic(c.i,"t",n),e.C=0,c=e.l.H,e.h=new Mt,e.g=hn(e.l,c?t:null,!e.s),0<e.N&&(e.L=new Be(H(e.La,e,e.g),e.N)),Ge(e.S,e.g,"readystatechange",e.ib),t=e.H?ie(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),rt(),Qe(e.j,e.u,e.A,e.m,e.U,e.s)}function kt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function St(e,t,c){let n,s=!0;for(;!e.I&&e.C<c.length;){if(n=_t(e,c),n==Lt){4==t&&(e.o=4,at(14),s=!1),Je(e.j,e.m,null,"[Incomplete Response]");break}if(n==yt){e.o=4,at(15),Je(e.j,e.m,c,"[Invalid Chunk]"),s=!1;break}Je(e.j,e.m,n,null),Ot(e,n)}kt(e)&&n!=Lt&&n!=yt&&(e.h.g="",e.C=0),4!=t||0!=c.length||e.h.h||(e.o=1,at(16),s=!1),e.i=e.i&&s,s?0<c.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),cn(t),t.K=!0,at(11))):(Je(e.j,e.m,c,"[Invalid Chunked Response]"),Tt(e),xt(e))}function _t(e,t){var c=e.C,n=t.indexOf("\n",c);return-1==n?Lt:(c=Number(t.substring(c,n)),isNaN(c)?yt:(n+=1,n+c>t.length?Lt:(t=t.substr(n,c),e.C=n+c,t)))}function It(e){e.V=Date.now()+e.O,At(e,e.O)}function At(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(H(e.gb,e),t)}function Et(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function xt(e){0==e.l.G||e.I||rn(e.l,e)}function Tt(e){Et(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,qe(e.T),We(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ot(e,t){try{var c=e.l;if(0!=c.G&&(c.g==e||mc(c.h,e)))if(!e.J&&mc(c.h,e)&&3==c.G){try{var n=c.Fa.g.parse(t)}catch(l){n=null}if(Array.isArray(n)&&3==n.length){var s=n;if(0==s[0]){e:if(!c.u){if(c.g){if(!(c.g.F+3e3<e.F))break e;sn(c),Gc(c)}tn(c),at(18)}}else c.Ba=s[1],0<c.Ba-c.T&&37500>s[2]&&c.L&&0==c.A&&!c.v&&(c.v=lt(H(c.cb,c),6e3));if(1>=dc(c.h)&&c.ja){try{c.ja()}catch(l){}c.ja=void 0}}else on(c,11)}else if((e.J||c.g==e)&&sn(c),!I(t))for(s=c.Fa.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(c.T=l[0],l=l[1],2==c.G)if("c"==l[0]){c.I=l[1],c.ka=l[2];const t=l[3];null!=t&&(c.ma=t,c.j.info("VER="+c.ma));const s=l[4];null!=s&&(c.Ca=s,c.j.info("SVER="+c.Ca));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(n=1.5*u,c.J=n,c.j.info("backChannelRequestTimeoutMs_="+n)),n=c;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=n.h;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(pc(r,r.h),r.h=null))}if(n.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.za=e,Kt(n.F,n.D,e))}}c.G=3,c.l&&c.l.xa(),c.$&&(c.P=Date.now()-e.F,c.j.info("Handshake RTT: "+c.P+"ms")),n=c;var i=e;if(n.sa=un(n,n.H?n.ka:null,n.V),i.J){zc(n.h,i);var a=i,o=n.J;o&&a.setTimeout(o),a.B&&(Et(a),It(a)),n.g=i}else en(n);0<c.i.length&&Zc(c)}else"stop"!=l[0]&&"close"!=l[0]||on(c,7);else 3==c.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?on(c,7):Kc(c):"noop"!=l[0]&&c.l&&c.l.wa(l),c.A=0)}rt(4)}catch(l){}}function Nt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],c=e.length,n=0;n<c;n++)t.push(e[n]);return t}for(n in t=[],c=0,e)t[c++]=e[n];return t}function Dt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var c=0;c<e;c++)t.push(c);return t}t=[],c=0;for(const n in e)t[c++]=n;return t}}}function Rt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var c=Dt(e),n=Nt(e),s=n.length,r=0;r<s;r++)t.call(void 0,n[r],c&&c[r],e)}n=Ht.prototype,n.setTimeout=function(e){this.O=e},n.ib=function(e){e=e.target;const t=this.L;t&&3==Fc(e)?t.l():this.La(e)},n.La=function(e){try{if(e==this.g)e:{const u=Fc(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(3!=u||q||this.g&&(this.h.h||this.g.fa()||qc(this.g)))){this.I||4!=u||7==t||rt(8==t||0>=f?3:2),Et(this);var c=this.g.aa();this.Y=c;t:if(kt(this)){var n=qc(this.g);e="";var s=n.length,r=4==Fc(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Tt(this),xt(this);var i="";break t}this.h.i=new h.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:r&&t==s-1});n.splice(0,s),this.h.g+=e,this.C=0,i=this.h.g}else i=this.g.fa();if(this.i=200==c,Ye(this.j,this.u,this.A,this.m,this.U,u,c),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,o=this.g;if((a=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(a)){var l=a;break t}}l=null}if(!(c=l)){this.i=!1,this.o=3,at(12),Tt(this),xt(this);break e}Je(this.j,this.m,c,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ot(this,c)}this.P?(St(this,u,i),q&&this.i&&3==u&&(Ge(this.S,this.T,"tick",this.hb),this.T.start())):(Je(this.j,this.m,i,null),Ot(this,i)),4==u&&Tt(this),this.i&&!this.I&&(4==u?rn(this.l,this):(this.i=!1,It(this)))}else 400==c&&0<i.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Tt(this),xt(this)}}}catch(u){}},n.hb=function(){if(this.g){var e=Fc(this.g),t=this.g.fa();this.C<t.length&&(Et(this),St(this,e,t),this.i&&4!=e&&It(this))}},n.cancel=function(){this.I=!0,Tt(this)},n.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Xe(this.j,this.A),2!=this.K&&(rt(),at(17)),Tt(this),this.o=2,xt(this)):At(this,this.V-e)};var Pt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var c=0;c<e.length;c++){var n=e[c].indexOf("="),s=null;if(0<=n){var r=e[c].substring(0,n);s=e[c].substring(n+1)}else r=e[c];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qt){this.h=void 0!==t?t:e.h,Ut(this,e.j),this.s=e.s,this.g=e.g,Bt(this,e.m),this.l=e.l,t=e.i;var c=new cc;c.i=t.i,t.g&&(c.g=new Map(t.g),c.h=t.h),$t(this,c),this.o=e.o}else e&&(c=String(e).match(Pt))?(this.h=!!t,Ut(this,c[1]||"",!0),this.s=Wt(c[2]||""),this.g=Wt(c[3]||"",!0),Bt(this,c[4]),this.l=Wt(c[5]||"",!0),$t(this,c[6]||"",!0),this.o=Wt(c[7]||"")):(this.h=!!t,this.i=new cc(null,this.h))}function jt(e){return new qt(e)}function Ut(e,t,c){e.j=c?Wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function $t(e,t,c){t instanceof cc?(e.i=t,oc(e.i,e.h)):(c||(t=Zt(t,ec)),e.i=new cc(t,e.h))}function Kt(e,t,c){e.i.set(t,c)}function Gt(e){return Kt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Zt(e,t,c){return"string"===typeof e?(e=encodeURI(e).replace(t,Qt),c&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Qt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}qt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Zt(t,Yt,!0),":");var c=this.g;return(c||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Zt(t,Yt,!0),"@"),e.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.m,null!=c&&e.push(":",String(c))),(c=this.l)&&(this.g&&"/"!=c.charAt(0)&&e.push("/"),e.push(Zt(c,"/"==c.charAt(0)?Xt:Jt,!0))),(c=this.i.toString())&&e.push("?",c),(c=this.o)&&e.push("#",Zt(c,tc)),e.join("")};var Yt=/[#\/\?@]/g,Jt=/[#\?:]/g,Xt=/[#\?]/g,ec=/[#\?@]/g,tc=/#/g;function cc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function nc(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,c){e.add(decodeURIComponent(t.replace(/\+/g," ")),c)})))}function sc(e,t){nc(e),t=ac(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rc(e,t){return nc(e),t=ac(e,t),e.g.has(t)}function ic(e,t,c){sc(e,t),0<c.length&&(e.i=null,e.g.set(ac(e,t),w(c)),e.h+=c.length)}function ac(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function oc(e,t){t&&!e.j&&(nc(e),e.i=null,e.g.forEach((function(e,t){var c=t.toLowerCase();t!=c&&(sc(this,t),ic(this,c,e))}),e)),e.j=t}n=cc.prototype,n.add=function(e,t){nc(this),this.i=null,e=ac(this,e);var c=this.g.get(e);return c||this.g.set(e,c=[]),c.push(t),this.h+=1,this},n.forEach=function(e,t){nc(this),this.g.forEach((function(c,n){c.forEach((function(c){e.call(t,c,n,this)}),this)}),this)},n.oa=function(){nc(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),c=[];for(let n=0;n<t.length;n++){const s=e[n];for(let e=0;e<s.length;e++)c.push(t[n])}return c},n.W=function(e){nc(this);let t=[];if("string"===typeof e)rc(this,e)&&(t=t.concat(this.g.get(ac(this,e))));else{e=Array.from(this.g.values());for(let c=0;c<e.length;c++)t=t.concat(e[c])}return t},n.set=function(e,t){return nc(this),this.i=null,e=ac(this,e),rc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var c=0;c<t.length;c++){var n=t[c];const r=encodeURIComponent(String(n)),i=this.W(n);for(n=0;n<i.length;n++){var s=r;""!==i[n]&&(s+="="+encodeURIComponent(String(i[n]))),e.push(s)}}return this.i=e.join("&")};var lc=class{constructor(e,t){this.h=e,this.g=t}};function uc(e){this.l=e||hc,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hc=10;function fc(e){return!!e.h||!!e.g&&e.g.size>=e.j}function dc(e){return e.h?1:e.g?e.g.size:0}function mc(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function pc(e,t){e.g?e.g.add(t):e.h=t}function zc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function vc(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const c of e.g.values())t=t.concat(c.D);return t}return w(e.i)}function gc(){}function Vc(){this.g=new gc}function Hc(e,t,c){const n=c||"";try{Rt(e,(function(e,c){let s=e;m(e)&&(s=Se(e)),t.push(n+c+"="+encodeURIComponent(s))}))}catch(s){throw t.push(n+"type="+encodeURIComponent("_badmap")),s}}function Mc(e,t){const c=new Ze;if(h.Image){const n=new Image;n.onload=M(Cc,c,n,"TestLoadImage: loaded",!0,t),n.onerror=M(Cc,c,n,"TestLoadImage: error",!1,t),n.onabort=M(Cc,c,n,"TestLoadImage: abort",!1,t),n.ontimeout=M(Cc,c,n,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=e}else t(!1)}function Cc(e,t,c,n,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(n)}catch(r){}}function yc(e){this.l=e.ac||null,this.j=e.jb||!1}function Lc(e,t){be.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=bc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}uc.prototype.cancel=function(){if(this.i=vc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},gc.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},gc.prototype.parse=function(e){return h.JSON.parse(e,void 0)},C(yc,ft),yc.prototype.g=function(){return new Lc(this.l,this.j)},yc.prototype.i=function(e){return function(){return e}}({}),C(Lc,be);var bc=0;function wc(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function kc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Sc(e)}function Sc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}n=Lc.prototype,n.open=function(e,t){if(this.readyState!=bc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Sc(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kc(this)),this.readyState=bc},n.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Sc(this)),this.g&&(this.readyState=3,Sc(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wc(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},n.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?kc(this):Sc(this),3==this.readyState&&wc(this)}},n.Va=function(e){this.g&&(this.response=this.responseText=e,kc(this))},n.Ua=function(e){this.g&&(this.response=e,kc(this))},n.ga=function(){this.g&&kc(this)},n.setRequestHeader=function(e,t){this.v.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var c=t.next();!c.done;)c=c.value,e.push(c[0]+": "+c[1]),c=t.next();return e.join("\r\n")},Object.defineProperty(Lc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var _c=h.JSON.parse;function Ic(e){be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ac,this.K=this.L=!1}C(Ic,be);var Ac="",Ec=/^https?$/i,xc=["POST","PUT"];function Tc(e){return P&&Q()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Oc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Nc(e),Rc(e)}function Nc(e){e.D||(e.D=!0,we(e,"complete"),we(e,"error"))}function Dc(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=Fc(e)||2!=e.aa()))if(e.v&&4==Fc(e))je(e.Ha,0,e);else if(we(e,"readystatechange"),4==Fc(e)){e.h=!1;try{const o=e.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var c;if(!(c=t)){var n;if(n=0===o){var s=String(e.H).match(Pt)[1]||null;if(!s&&h.self&&h.self.location){var r=h.self.location.protocol;s=r.substr(0,r.length-1)}n=!Ec.test(s?s.toLowerCase():"")}c=n}if(c)we(e,"complete"),we(e,"success");else{e.m=6;try{var i=2<Fc(e)?e.g.statusText:""}catch(a){i=""}e.j=i+" ["+e.aa()+"]",Nc(e)}}finally{Rc(e)}}}function Rc(e,t){if(e.g){Pc(e);const n=e.g,s=e.C[0]?f:null;e.g=null,e.C=null,t||we(e,"ready");try{n.onreadystatechange=s}catch(c){}}}function Pc(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Fc(e){return e.g?e.g.readyState:0}function qc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ac:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(kn){return null}}function jc(e){let t="";return re(e,(function(e,c){t+=c,t+=":",t+=e,t+="\r\n"})),t}function Uc(e,t,c){e:{for(n in c){var n=!1;break e}n=!0}n||(c=jc(c),"string"===typeof e?null!=c&&encodeURIComponent(String(c)):Kt(e,t,c))}function Bc(e,t,c){return c&&c.internalChannelParams&&c.internalChannelParams[e]||t}function $c(e){this.Ca=0,this.i=[],this.j=new Ze,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Bc("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Bc("baseRetryDelayMs",5e3,e),this.bb=Bc("retryDelaySeedMs",1e4,e),this.$a=Bc("forwardChannelMaxRetries",2,e),this.ta=Bc("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new uc(e&&e.concurrentRequestLimit),this.Fa=new Vc,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Kc(e){if(Wc(e),3==e.G){var t=e.U++,c=jt(e.F);Kt(c,"SID",e.I),Kt(c,"RID",t),Kt(c,"TYPE","terminate"),Jc(e,c),t=new Ht(e,e.j,t,void 0),t.K=2,t.v=Gt(jt(c)),c=!1,h.navigator&&h.navigator.sendBeacon&&(c=h.navigator.sendBeacon(t.v.toString(),"")),!c&&h.Image&&((new Image).src=t.v,c=!0),c||(t.g=hn(t.l,null),t.g.da(t.v)),t.F=Date.now(),It(t)}ln(e)}function Gc(e){e.g&&(cn(e),e.g.cancel(),e.g=null)}function Wc(e){Gc(e),e.u&&(h.clearTimeout(e.u),e.u=null),sn(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Zc(e){fc(e.h)||e.m||(e.m=!0,Oe(e.Ja,e),e.C=0)}function Qc(e,t){return!(dc(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=lt(H(e.Ja,e,t),an(e,e.C)),e.C++,!0))}function Yc(e,t){var c;c=t?t.m:e.U++;const n=jt(e.F);Kt(n,"SID",e.I),Kt(n,"RID",c),Kt(n,"AID",e.T),Jc(e,n),e.o&&e.s&&Uc(n,e.o,e.s),c=new Ht(e,e.j,c,e.C+1),null===e.o&&(c.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Xc(e,c,1e3),c.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),pc(e.h,c),bt(c,n,t)}function Jc(e,t){e.ia&&re(e.ia,(function(e,c){Kt(t,c,e)})),e.l&&Rt({},(function(e,c){Kt(t,c,e)}))}function Xc(e,t,c){c=Math.min(e.i.length,c);var n=e.l?H(e.l.Ra,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+c];-1==t?0<c?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let i=0;i<c;i++){let c=s[i].h;const a=s[i].g;if(c-=t,0>c)t=Math.max(0,s[i].h-100),r=!1;else try{Hc(a,e,"req"+c+"_")}catch(Pn){n&&n(a)}}if(r){n=e.join("&");break e}}}return e=e.i.splice(0,c),t.D=e,n}function en(e){e.g||e.u||(e.Z=1,Oe(e.Ia,e),e.A=0)}function tn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=lt(H(e.Ia,e),an(e,e.A)),e.A++,!0)}function cn(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function nn(e){e.g=new Ht(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=jt(e.sa);Kt(t,"RID","rpc"),Kt(t,"SID",e.I),Kt(t,"CI",e.L?"0":"1"),Kt(t,"AID",e.T),Kt(t,"TYPE","xmlhttp"),Jc(e,t),e.o&&e.s&&Uc(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var c=e.g;e=e.ka,c.K=1,c.v=Gt(jt(t)),c.s=null,c.P=!0,wt(c,e)}function sn(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function rn(e,t){var c=null;if(e.g==t){sn(e),cn(e),e.g=null;var n=2}else{if(!mc(e.h,t))return;c=t.D,zc(e.h,t),n=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==n){c=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;n=nt(),we(n,new ot(n,c)),Zc(e)}else en(e);else if(s=t.o,3==s||0==s&&0<e.pa||!(1==n&&Qc(e,t)||2==n&&tn(e)))switch(c&&0<c.length&&(t=e.h,t.i=t.i.concat(c)),s){case 1:on(e,5);break;case 4:on(e,10);break;case 3:on(e,6);break;default:on(e,2)}}function an(e,t){let c=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(c*=2),c*t}function on(e,t){if(e.j.info("Error code "+t),2==t){var c=null;e.l&&(c=null);var n=H(e.kb,e);c||(c=new qt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ut(c,"https"),Gt(c)),Mc(c.toString(),n)}else at(2);e.G=0,e.l&&e.l.va(t),ln(e),Wc(e)}function ln(e){if(e.G=0,e.la=[],e.l){const t=vc(e.h);0==t.length&&0==e.i.length||(k(e.la,t),k(e.la,e.i),e.h.i.length=0,w(e.i),e.i.length=0),e.l.ua()}}function un(e,t,c){var n=c instanceof qt?jt(c):new qt(c,void 0);if(""!=n.g)t&&(n.g=t+"."+n.g),Bt(n,n.m);else{var s=h.location;n=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new qt(null,void 0);n&&Ut(r,n),t&&(r.g=t),s&&Bt(r,s),c&&(r.l=c),n=r}return c=e.D,t=e.za,c&&t&&Kt(n,c,t),Kt(n,"VER",e.ma),Jc(e,n),n}function hn(e,t,c){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=c&&e.Da&&!e.ra?new Ic(new yc({jb:!0})):new Ic(e.ra),t.Ka(e.H),t}function fn(){}function dn(){if(P&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function mn(e,t){be.call(this),this.g=new $c(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!I(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vn(this)}function pn(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const c in t){e=c;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function zn(){gt.call(this),this.status=1}function vn(e){this.g=e}n=Ic.prototype,n.Ka=function(e){this.L=e},n.da=function(e,t,c,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pt.g(),this.C=this.u?dt(this.u):dt(pt),this.g.onreadystatechange=H(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){return void Oc(this,r)}if(e=c||"",c=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var s in n)c.set(s,n[s]);else{if("function"!==typeof n.keys||"function"!==typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const e of n.keys())c.set(e,n.get(e))}n=Array.from(c.keys()).find((e=>"content-type"==e.toLowerCase())),s=h.FormData&&e instanceof h.FormData,!(0<=b(xc,t))||n||s||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of c)this.g.setRequestHeader(i,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pc(this),0<this.B&&((this.K=Tc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=H(this.qa,this)):this.A=je(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Oc(this,r)}},n.qa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),Rc(this))},n.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rc(this,!0)),Ic.X.M.call(this)},n.Ha=function(){this.s||(this.F||this.v||this.l?Dc(this):this.fb())},n.fb=function(){Dc(this)},n.aa=function(){try{return 2<Fc(this)?this.g.status:-1}catch(e){return-1}},n.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),_c(t)}},n.Ea=function(){return this.m},n.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},n=$c.prototype,n.ma=8,n.G=1,n.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new Ht(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=ie(r),oe(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)e:{for(var t=0,c=0;c<this.i.length;c++){var n=this.i[c];if(n="__data__"in n.g&&(n=n.g.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(t+=n,4096<t){t=c;break e}if(4096===t||c===this.i.length-1){t=c+1;break e}}t=1e3}else t=1e3;t=Xc(this,s,t),c=jt(this.F),Kt(c,"RID",e),Kt(c,"CVER",22),this.D&&Kt(c,"X-HTTP-Session-Id",this.D),Jc(this,c),r&&(this.N?t="headers="+encodeURIComponent(String(jc(r)))+"&"+t:this.o&&Uc(c,this.o,r)),pc(this.h,s),this.Ya&&Kt(c,"TYPE","init"),this.O?(Kt(c,"$req",t),Kt(c,"SID","null"),s.Z=!0,bt(s,c,null)):bt(s,c,t),this.G=2}}else 3==this.G&&(e?Yc(this,e):0==this.i.length||fc(this.h)||Yc(this))},n.Ia=function(){if(this.u=null,nn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=lt(H(this.eb,this),e)}},n.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Gc(this),nn(this))},n.cb=function(){null!=this.v&&(this.v=null,Gc(this),tn(this),at(19))},n.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},n=fn.prototype,n.xa=function(){},n.wa=function(){},n.va=function(){},n.ua=function(){},n.Ra=function(){},dn.prototype.g=function(e,t){return new mn(e,t)},C(mn,be),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,c=this.h||void 0;at(0),e.V=t,e.ia=c||{},e.L=e.Y,e.F=un(e,null,e.V),Zc(e)},mn.prototype.close=function(){Kc(this.g)},mn.prototype.u=function(e){var t=this.g;if("string"===typeof e){var c={};c.__data__=e,e=c}else this.v&&(c={},c.__data__=Se(e),e=c);t.i.push(new lc(t.ab++,e)),3==t.G&&Zc(t)},mn.prototype.M=function(){this.g.l=null,delete this.j,Kc(this.g),delete this.g,mn.X.M.call(this)},C(pn,vt),C(zn,gt),C(vn,fn),vn.prototype.xa=function(){we(this.g,"a")},vn.prototype.wa=function(e){we(this.g,new pn(e))},vn.prototype.va=function(e){we(this.g,new zn)},vn.prototype.ua=function(){we(this.g,"b")},dn.prototype.createWebChannel=dn.prototype.g,mn.prototype.send=mn.prototype.u,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,ut.NO_ERROR=0,ut.TIMEOUT=8,ut.HTTP_ERROR=6,ht.COMPLETE="complete",mt.EventType=zt,zt.OPEN="a",zt.CLOSE="b",zt.ERROR="c",zt.MESSAGE="d",be.prototype.listen=be.prototype.N,Ic.prototype.listenOnce=Ic.prototype.O,Ic.prototype.getLastError=Ic.prototype.Oa,Ic.prototype.getLastErrorCode=Ic.prototype.Ea,Ic.prototype.getStatus=Ic.prototype.aa,Ic.prototype.getResponseJson=Ic.prototype.Sa,Ic.prototype.getResponseText=Ic.prototype.fa,Ic.prototype.send=Ic.prototype.da,Ic.prototype.setWithCredentials=Ic.prototype.Ka;var gn=l.createWebChannelTransport=function(){return new dn},Vn=l.getStatEventTarget=function(){return nt()},Hn=l.ErrorCode=ut,Mn=l.EventType=ht,Cn=l.Event=tt,yn=l.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ln=l.FetchXmlHttpFactory=yc,bn=l.WebChannel=mt,wn=l.XhrIo=Ic;const kn="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Sn.UNAUTHENTICATED=new Sn(null),Sn.GOOGLE_CREDENTIALS=new Sn("google-credentials-uid"),Sn.FIRST_PARTY=new Sn("first-party-uid"),Sn.MOCK_USER=new Sn("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let _n="9.17.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new i.Yd("@firebase/firestore");function An(){return In.logLevel}function En(e){In.setLogLevel(e)}function xn(e,...t){if(In.logLevel<=i["in"].DEBUG){const c=t.map(Nn);In.debug(`Firestore (${_n}): ${e}`,...c)}}function Tn(e,...t){if(In.logLevel<=i["in"].ERROR){const c=t.map(Nn);In.error(`Firestore (${_n}): ${e}`,...c)}}function On(e,...t){if(In.logLevel<=i["in"].WARN){const c=t.map(Nn);In.warn(`Firestore (${_n}): ${e}`,...c)}}function Nn(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e="Unexpected state"){const t=`FIRESTORE (${_n}) INTERNAL ASSERTION FAILED: `+e;throw Tn(t),new Error(t)}function Rn(e,t){e||Dn()}function Pn(e,t){e||Dn()}function Fn(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jn extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $n{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Sn.UNAUTHENTICATED)))}shutdown(){}}class Kn{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Gn{constructor(e){this.t=e,this.currentUser=Sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let c=this.i;const n=e=>this.i!==c?(c=this.i,t(e)):Promise.resolve();let s=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Un,e.enqueueRetryable((()=>n(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await n(this.currentUser)}))},i=e=>{xn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>i(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?i(e):(xn("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Un)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(xn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Rn("string"==typeof t.accessToken),new Bn(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Rn(null===e||"string"==typeof e),new Sn(e)}}class Wn{constructor(e,t,c,n){this.h=e,this.l=t,this.m=c,this.g=n,this.type="FirstParty",this.user=Sn.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Rn(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Zn{constructor(e,t,c,n){this.h=e,this.l=t,this.m=c,this.g=n}getToken(){return Promise.resolve(new Wn(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qn{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yn{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const c=e=>{null!=e.error&&xn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const c=e.token!==this.A;return this.A=e.token,xn("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>c(t)))};const n=e=>{xn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?n(e):xn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Rn("string"==typeof e.token),this.A=e.token,new Qn(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jn(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(c);else for(let n=0;n<e;n++)c[n]=Math.floor(256*Math.random());return c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let c="";for(;c.length<20;){const n=Jn(40);for(let s=0;s<n.length;++s)c.length<20&&n[s]<t&&(c+=e.charAt(n[s]%e.length))}return c}}function es(e,t){return e<t?-1:e>t?1:0}function ts(e,t,c){return e.length===t.length&&e.every(((e,n)=>c(e,t[n])))}function cs(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new jn(qn.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new jn(qn.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new jn(qn.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new jn(qn.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ns.fromMillis(Date.now())}static fromDate(e){return ns.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),c=Math.floor(1e6*(e-1e3*t));return new ns(t,c)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?es(this.nanoseconds,e.nanoseconds):es(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ss(e)}static min(){return new ss(new ns(0,0))}static max(){return new ss(new ns(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,c){void 0===t?t=0:t>e.length&&Dn(),void 0===c?c=e.length-t:c>e.length-t&&Dn(),this.segments=e,this.offset=t,this.len=c}get length(){return this.len}isEqual(e){return 0===rs.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rs?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,c=this.limit();t<c;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const c=Math.min(e.length,t.length);for(let n=0;n<c;n++){const c=e.get(n),s=t.get(n);if(c<s)return-1;if(c>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class is extends rs{construct(e,t,c){return new is(e,t,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const c of e){if(c.indexOf("//")>=0)throw new jn(qn.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);t.push(...c.split("/").filter((e=>e.length>0)))}return new is(t)}static emptyPath(){return new is([])}}const as=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class os extends rs{construct(e,t,c){return new os(e,t,c)}static isValidIdentifier(e){return as.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),os.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new os(["__name__"])}static fromServerFormat(e){const t=[];let c="",n=0;const s=()=>{if(0===c.length)throw new jn(qn.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(c),c=""};let r=!1;for(;n<e.length;){const t=e[n];if("\\"===t){if(n+1===e.length)throw new jn(qn.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new jn(qn.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);c+=t,n+=2}else"`"===t?(r=!r,n++):"."!==t||r?(c+=t,n++):(s(),n++)}if(s(),r)throw new jn(qn.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new os(t)}static emptyPath(){return new os([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.path=e}static fromPath(e){return new ls(is.fromString(e))}static fromName(e){return new ls(is.fromString(e).popFirst(5))}static empty(){return new ls(is.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===is.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return is.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ls(new is(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,c,n){this.indexId=e,this.collectionGroup=t,this.fields=c,this.indexState=n}}function hs(e){return e.fields.find((e=>2===e.kind))}function fs(e){return e.fields.filter((e=>2!==e.kind))}us.UNKNOWN_ID=-1;class ds{constructor(e,t){this.fieldPath=e,this.kind=t}}class ms{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ms(0,vs.min())}}function ps(e,t){const c=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,s=ss.fromTimestamp(1e9===n?new ns(c+1,0):new ns(c,n));return new vs(s,ls.empty(),t)}function zs(e){return new vs(e.readTime,e.key,-1)}class vs{constructor(e,t,c){this.readTime=e,this.documentKey=t,this.largestBatchId=c}static min(){return new vs(ss.min(),ls.empty(),-1)}static max(){return new vs(ss.max(),ls.empty(),-1)}}function gs(e,t){let c=e.readTime.compareTo(t.readTime);return 0!==c?c:(c=ls.comparator(e.documentKey,t.documentKey),0!==c?c:es(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(e){if(e.code!==qn.FAILED_PRECONDITION||e.message!==Vs)throw e;xn("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Dn(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Cs(((c,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(c,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(c,n)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Cs?t:Cs.resolve(t)}catch(e){return Cs.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Cs.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Cs.reject(t)}static resolve(e){return new Cs(((t,c)=>{t(e)}))}static reject(e){return new Cs(((t,c)=>{c(e)}))}static waitFor(e){return new Cs(((t,c)=>{let n=0,s=0,r=!1;e.forEach((e=>{++n,e.next((()=>{++s,r&&s===n&&t()}),(e=>c(e)))})),r=!0,s===n&&t()}))}static or(e){let t=Cs.resolve(!1);for(const c of e)t=t.next((e=>e?Cs.resolve(e):c()));return t}static forEach(e,t){const c=[];return e.forEach(((e,n)=>{c.push(t.call(this,e,n))})),this.waitFor(c)}static mapArray(e,t){return new Cs(((c,n)=>{const s=e.length,r=new Array(s);let i=0;for(let a=0;a<s;a++){const o=a;t(e[o]).next((e=>{r[o]=e,++i,i===s&&c(r)}),(e=>n(e)))}}))}static doWhile(e,t){return new Cs(((c,n)=>{const s=()=>{!0===e()?t().next((()=>{s()}),n):c()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new Un,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new ws(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{const c=As(t.target.error);this.P.reject(new ws(e,c))}}static open(e,t,c,n){try{return new ys(t,e.transaction(n,c))}catch(e){throw new ws(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(xn("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ss(t)}}class Ls{constructor(e,t,c){this.name=e,this.version=t,this.S=c,12.2===Ls.D((0,a.z$)())&&Tn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return xn("SimpleDb","Removing database:",e),_s(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!(0,a.hl)())return!1;if(Ls.N())return!0;const e=(0,a.z$)(),t=Ls.D(e),c=0<t&&t<10,n=Ls.k(e),s=0<n&&n<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||c||s)}static N(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/moto-shop/"})||void 0===e?void 0:e.O)}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static k(e){const t=e.match(/Android ([\d.]+)/i),c=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async F(e){return this.db||(xn("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,c)=>{const n=indexedDB.open(this.name,this.version);n.onsuccess=e=>{const c=e.target.result;t(c)},n.onblocked=()=>{c(new ws(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},n.onerror=t=>{const n=t.target.error;"VersionError"===n.name?c(new jn(qn.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===n.name?c(new jn(qn.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+n)):c(new ws(e,n))},n.onupgradeneeded=e=>{xn("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.$(t,n.transaction,e.oldVersion,this.version).next((()=>{xn("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,c,n){const s="readonly"===t;let r=0;for(;;){++r;try{this.db=await this.F(e);const t=ys.open(this.db,e,s?"readonly":"readwrite",c),r=n(t).next((e=>(t.V(),e))).catch((e=>(t.abort(e),Cs.reject(e)))).toPromise();return r.catch((()=>{})),await t.v,r}catch(e){const t=e,c="FirebaseError"!==t.name&&r<3;if(xn("SimpleDb","Transaction failed with error:",t.message,"Retrying:",c),this.close(),!c)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class bs{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return _s(this.q.delete())}}class ws extends jn{constructor(e,t){super(qn.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ks(e){return"IndexedDbTransactionError"===e.name}class Ss{constructor(e){this.store=e}put(e,t){let c;return void 0!==t?(xn("SimpleDb","PUT",this.store.name,e,t),c=this.store.put(t,e)):(xn("SimpleDb","PUT",this.store.name,"<auto-key>",e),c=this.store.put(e)),_s(c)}add(e){return xn("SimpleDb","ADD",this.store.name,e,e),_s(this.store.add(e))}get(e){return _s(this.store.get(e)).next((t=>(void 0===t&&(t=null),xn("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return xn("SimpleDb","DELETE",this.store.name,e),_s(this.store.delete(e))}count(){return xn("SimpleDb","COUNT",this.store.name),_s(this.store.count())}W(e,t){const c=this.options(e,t);if(c.index||"function"!=typeof this.store.getAll){const e=this.cursor(c),t=[];return this.H(e,((e,c)=>{t.push(c)})).next((()=>t))}{const e=this.store.getAll(c.range);return new Cs(((t,c)=>{e.onerror=e=>{c(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}J(e,t){const c=this.store.getAll(e,null===t?void 0:t);return new Cs(((e,t)=>{c.onerror=e=>{t(e.target.error)},c.onsuccess=t=>{e(t.target.result)}}))}Y(e,t){xn("SimpleDb","DELETE ALL",this.store.name);const c=this.options(e,t);c.X=!1;const n=this.cursor(c);return this.H(n,((e,t,c)=>c.delete()))}Z(e,t){let c;t?c=e:(c={},t=e);const n=this.cursor(c);return this.H(n,t)}tt(e){const t=this.cursor({});return new Cs(((c,n)=>{t.onerror=e=>{const t=As(e.target.error);n(t)},t.onsuccess=t=>{const n=t.target.result;n?e(n.primaryKey,n.value).next((e=>{e?n.continue():c()})):c()}}))}H(e,t){const c=[];return new Cs(((n,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void n();const r=new bs(s),i=t(s.primaryKey,s.value,r);if(i instanceof Cs){const e=i.catch((e=>(r.done(),Cs.reject(e))));c.push(e)}r.isDone?n():null===r.G?s.continue():s.continue(r.G)}})).next((()=>Cs.waitFor(c)))}options(e,t){let c;return void 0!==e&&("string"==typeof e?c=e:t=e),{index:c,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const c=this.store.index(e.index);return e.X?c.openKeyCursor(e.range,t):c.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function _s(e){return new Cs(((t,c)=>{e.onsuccess=e=>{const c=e.target.result;t(c)},e.onerror=e=>{const t=As(e.target.error);c(t)}}))}let Is=!1;function As(e){const t=Ls.D((0,a.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new jn("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Is||(Is=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Es{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){xn("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{xn("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(e){ks(e)?xn("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Ms(e)}await this.nt(6e4)}))}}class xs{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.it(t,e)))}it(e,t){const c=new Set;let n=t,s=!0;return Cs.doWhile((()=>!0===s&&n>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!c.has(t))return xn("IndexBackiller",`Processing collection: ${t}`),this.rt(e,t,n).next((e=>{n-=e,c.add(t)}));s=!1})))).next((()=>t-n))}rt(e,t,c){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((n=>this.localStore.localDocuments.getNextDocuments(e,t,n,c).next((c=>{const s=c.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next((()=>this.ot(n,c))).next((c=>(xn("IndexBackiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>s.size))}))))}ot(e,t){let c=e;return t.changes.forEach(((e,t)=>{const n=zs(t);gs(n,c)>0&&(c=n)})),new vs(c.readTime,c.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ts.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{constructor(e,t,c,n,s,r,i,a){this.databaseId=e,this.appId=t,this.persistenceKey=c,this.host=n,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=i,this.useFetchStreams=a}}class Ns{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ns("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ns&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){let t=0;for(const c in e)Object.prototype.hasOwnProperty.call(e,c)&&t++;return t}function Rs(e,t){for(const c in e)Object.prototype.hasOwnProperty.call(e,c)&&t(c,e[c])}function Ps(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(e){return null==e}function qs(e){return 0===e&&1/e==-1/0}function js(e){return"number"==typeof e&&Number.isInteger(e)&&!qs(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Bs(t)}static fromUint8Array(e){const t=function(e){let t="";for(let c=0;c<e.length;++c)t+=String.fromCharCode(e[c]);return t}(e);return new Bs(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let c=0;c<e.length;c++)t[c]=e.charCodeAt(c);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return es(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bs.EMPTY_BYTE_STRING=new Bs("");const $s=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ks(e){if(Rn(!!e),"string"==typeof e){let t=0;const c=$s.exec(e);if(Rn(!!c),c[1]){let e=c[1];e=(e+"000000000").substr(0,9),t=Number(e)}const n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Gs(e.seconds),nanos:Gs(e.nanos)}}function Gs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ws(e){return"string"==typeof e?Bs.fromBase64String(e):Bs.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(e){var t,c;return"server_timestamp"===(null===(c=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===c?void 0:c.stringValue)}function Qs(e){const t=e.mapValue.fields.__previous_value__;return Zs(t)?Qs(t):t}function Ys(e){const t=Ks(e.mapValue.fields.__local_write_time__.timestampValue);return new ns(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Xs={nullValue:"NULL_VALUE"};function er(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Zs(e)?4:mr(e)?9007199254740991:10:Dn()}function tr(e,t){if(e===t)return!0;const c=er(e);if(c!==er(t))return!1;switch(c){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ys(e).isEqual(Ys(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const c=Ks(e.timestampValue),n=Ks(t.timestampValue);return c.seconds===n.seconds&&c.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ws(e.bytesValue).isEqual(Ws(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Gs(e.geoPointValue.latitude)===Gs(t.geoPointValue.latitude)&&Gs(e.geoPointValue.longitude)===Gs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Gs(e.integerValue)===Gs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const c=Gs(e.doubleValue),n=Gs(t.doubleValue);return c===n?qs(c)===qs(n):isNaN(c)&&isNaN(n)}return!1}(e,t);case 9:return ts(e.arrayValue.values||[],t.arrayValue.values||[],tr);case 10:return function(e,t){const c=e.mapValue.fields||{},n=t.mapValue.fields||{};if(Ds(c)!==Ds(n))return!1;for(const s in c)if(c.hasOwnProperty(s)&&(void 0===n[s]||!tr(c[s],n[s])))return!1;return!0}(e,t);default:return Dn()}}function cr(e,t){return void 0!==(e.values||[]).find((e=>tr(e,t)))}function nr(e,t){if(e===t)return 0;const c=er(e),n=er(t);if(c!==n)return es(c,n);switch(c){case 0:case 9007199254740991:return 0;case 1:return es(e.booleanValue,t.booleanValue);case 2:return function(e,t){const c=Gs(e.integerValue||e.doubleValue),n=Gs(t.integerValue||t.doubleValue);return c<n?-1:c>n?1:c===n?0:isNaN(c)?isNaN(n)?0:-1:1}(e,t);case 3:return sr(e.timestampValue,t.timestampValue);case 4:return sr(Ys(e),Ys(t));case 5:return es(e.stringValue,t.stringValue);case 6:return function(e,t){const c=Ws(e),n=Ws(t);return c.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const c=e.split("/"),n=t.split("/");for(let s=0;s<c.length&&s<n.length;s++){const e=es(c[s],n[s]);if(0!==e)return e}return es(c.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const c=es(Gs(e.latitude),Gs(t.latitude));return 0!==c?c:es(Gs(e.longitude),Gs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const c=e.values||[],n=t.values||[];for(let s=0;s<c.length&&s<n.length;++s){const e=nr(c[s],n[s]);if(e)return e}return es(c.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Js.mapValue&&t===Js.mapValue)return 0;if(e===Js.mapValue)return 1;if(t===Js.mapValue)return-1;const c=e.fields||{},n=Object.keys(c),s=t.fields||{},r=Object.keys(s);n.sort(),r.sort();for(let i=0;i<n.length&&i<r.length;++i){const e=es(n[i],r[i]);if(0!==e)return e;const t=nr(c[n[i]],s[r[i]]);if(0!==t)return t}return es(n.length,r.length)}(e.mapValue,t.mapValue);default:throw Dn()}}function sr(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return es(e,t);const c=Ks(e),n=Ks(t),s=es(c.seconds,n.seconds);return 0!==s?s:es(c.nanos,n.nanos)}function rr(e){return ir(e)}function ir(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ks(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ws(e.bytesValue).toBase64():"referenceValue"in e?(c=e.referenceValue,ls.fromName(c).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",c=!0;for(const n of e.values||[])c?c=!1:t+=",",t+=ir(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let c="{",n=!0;for(const s of t)n?n=!1:c+=",",c+=`${s}:${ir(e.fields[s])}`;return c+"}"}(e.mapValue):Dn();var t,c}function ar(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function or(e){return!!e&&"integerValue"in e}function lr(e){return!!e&&"arrayValue"in e}function ur(e){return!!e&&"nullValue"in e}function hr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function fr(e){return!!e&&"mapValue"in e}function dr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Rs(e.mapValue.fields,((e,c)=>t.mapValue.fields[e]=dr(c))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let c=0;c<(e.arrayValue.values||[]).length;++c)t.arrayValue.values[c]=dr(e.arrayValue.values[c]);return t}return Object.assign({},e)}function mr(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function pr(e){return"nullValue"in e?Xs:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?ar(Ns.empty(),ls.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Dn()}function zr(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?ar(Ns.empty(),ls.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Js:Dn()}function vr(e,t){const c=nr(e.value,t.value);return 0!==c?c:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function gr(e,t){const c=nr(e.value,t.value);return 0!==c?c:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.position=e,this.inclusive=t}}function Hr(e,t,c){let n=0;for(let s=0;s<e.position.length;s++){const r=t[s],i=e.position[s];if(n=r.field.isKeyField()?ls.comparator(ls.fromName(i.referenceValue),c.key):nr(i,c.data.field(r.field)),"desc"===r.dir&&(n*=-1),0!==n)break}return n}function Mr(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let c=0;c<e.position.length;c++)if(!tr(e.position[c],t.position[c]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{}class yr extends Cr{constructor(e,t,c){super(),this.field=e,this.op=t,this.value=c}static create(e,t,c){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,c):new xr(e,t,c):"array-contains"===t?new Dr(e,c):"in"===t?new Rr(e,c):"not-in"===t?new Pr(e,c):"array-contains-any"===t?new Fr(e,c):new yr(e,t,c)}static createKeyFieldInFilter(e,t,c){return"in"===t?new Tr(e,c):new Or(e,c)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(nr(t,this.value)):null!==t&&er(this.value)===er(t)&&this.matchesComparison(nr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Dn()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Lr extends Cr{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Lr(e,t)}matches(e){return br(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function br(e){return"and"===e.op}function wr(e){return"or"===e.op}function kr(e){return Sr(e)&&br(e)}function Sr(e){for(const t of e.filters)if(t instanceof Lr)return!1;return!0}function _r(e){if(e instanceof yr)return e.field.canonicalString()+e.op.toString()+rr(e.value);if(kr(e))return e.filters.map((e=>_r(e))).join(",");{const t=e.filters.map((e=>_r(e))).join(",");return`${e.op}(${t})`}}function Ir(e,t){return e instanceof yr?function(e,t){return t instanceof yr&&e.op===t.op&&e.field.isEqual(t.field)&&tr(e.value,t.value)}(e,t):e instanceof Lr?function(e,t){return t instanceof Lr&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,c,n)=>e&&Ir(c,t.filters[n])),!0)}(e,t):void Dn()}function Ar(e,t){const c=e.filters.concat(t);return Lr.create(c,e.op)}function Er(e){return e instanceof yr?function(e){return`${e.field.canonicalString()} ${e.op} ${rr(e.value)}`}(e):e instanceof Lr?function(e){return e.op.toString()+" {"+e.getFilters().map(Er).join(" ,")+"}"}(e):"Filter"}class xr extends yr{constructor(e,t,c){super(e,t,c),this.key=ls.fromName(c.referenceValue)}matches(e){const t=ls.comparator(e.key,this.key);return this.matchesComparison(t)}}class Tr extends yr{constructor(e,t){super(e,"in",t),this.keys=Nr("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Or extends yr{constructor(e,t){super(e,"not-in",t),this.keys=Nr("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Nr(e,t){var c;return((null===(c=t.arrayValue)||void 0===c?void 0:c.values)||[]).map((e=>ls.fromName(e.referenceValue)))}class Dr extends yr{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return lr(t)&&cr(t.arrayValue,this.value)}}class Rr extends yr{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&cr(this.value.arrayValue,t)}}class Pr extends yr{constructor(e,t){super(e,"not-in",t)}matches(e){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!cr(this.value.arrayValue,t)}}class Fr extends yr{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!lr(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>cr(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t="asc"){this.field=e,this.dir=t}}function jr(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.comparator=e,this.root=t||$r.EMPTY}insert(e,t){return new Ur(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$r.BLACK,null,null))}remove(e){return new Ur(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$r.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const c=this.comparator(e,t.key);if(0===c)return t.value;c<0?t=t.left:c>0&&(t=t.right)}return null}indexOf(e){let t=0,c=this.root;for(;!c.isEmpty();){const n=this.comparator(e,c.key);if(0===n)return t+c.left.size;n<0?c=c.left:(t+=c.left.size+1,c=c.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,c)=>(e(t,c),!1)))}toString(){const e=[];return this.inorderTraversal(((t,c)=>(e.push(`${t}:${c}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Br(this.root,e,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Br(this.root,e,this.comparator,!0)}}class Br{constructor(e,t,c,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?c(e.key,t):1,t&&n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $r{constructor(e,t,c,n,s){this.key=e,this.value=t,this.color=null!=c?c:$r.RED,this.left=null!=n?n:$r.EMPTY,this.right=null!=s?s:$r.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,c,n,s){return new $r(null!=e?e:this.key,null!=t?t:this.value,null!=c?c:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,c){let n=this;const s=c(e,n.key);return n=s<0?n.copy(null,null,null,n.left.insert(e,t,c),null):0===s?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,c)),n.fixUp()}removeMin(){if(this.left.isEmpty())return $r.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let c,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return $r.EMPTY;c=n.right.min(),n=n.copy(c.key,c.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$r.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$r.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Dn();if(this.right.isRed())throw Dn();const e=this.left.check();if(e!==this.right.check())throw Dn();return e+(this.isRed()?0:1)}}$r.EMPTY=null,$r.RED=!0,$r.BLACK=!1,$r.EMPTY=new class{constructor(){this.size=0}get key(){throw Dn()}get value(){throw Dn()}get color(){throw Dn()}get left(){throw Dn()}get right(){throw Dn()}copy(e,t,c,n,s){return this}insert(e,t,c){return new $r(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(e){this.comparator=e,this.data=new Ur(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,c)=>(e(t),!1)))}forEachInRange(e,t){const c=this.data.getIteratorFrom(e[0]);for(;c.hasNext();){const n=c.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let c;for(c=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();c.hasNext();)if(!e(c.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gr(this.data.getIterator())}getIteratorFrom(e){return new Gr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Kr))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),c=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=c.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Kr(this.comparator);return t.data=e,t}}class Gr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Wr(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.fields=e,e.sort(os.comparator)}static empty(){return new Zr([])}unionWith(e){let t=new Kr(os.comparator);for(const c of this.fields)t=t.add(c);for(const c of e)t=t.add(c);return new Zr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.value=e}static empty(){return new Qr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let c=0;c<e.length-1;++c)if(t=(t.mapValue.fields||{})[e.get(c)],!fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dr(t)}setAll(e){let t=os.emptyPath(),c={},n=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,c,n),c={},n=[],t=s.popLast()}e?c[s.lastSegment()]=dr(e):n.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,c,n)}delete(e){const t=this.field(e.popLast());fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let c=0;c<e.length;++c){let n=t.mapValue.fields[e.get(c)];fr(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(c)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,c){Rs(t,((t,c)=>e[t]=c));for(const n of c)delete e[n]}clone(){return new Qr(dr(this.value))}}function Yr(e){const t=[];return Rs(e.fields,((e,c)=>{const n=new os([e]);if(fr(c)){const e=Yr(c.mapValue).fields;if(0===e.length)t.push(n);else for(const c of e)t.push(n.child(c))}else t.push(n)})),new Zr(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Jr{constructor(e,t,c,n,s,r,i){this.key=e,this.documentType=t,this.version=c,this.readTime=n,this.createTime=s,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Jr(e,0,ss.min(),ss.min(),ss.min(),Qr.empty(),0)}static newFoundDocument(e,t,c,n){return new Jr(e,1,t,ss.min(),c,n,0)}static newNoDocument(e,t){return new Jr(e,2,t,ss.min(),ss.min(),Qr.empty(),0)}static newUnknownDocument(e,t){return new Jr(e,3,t,ss.min(),ss.min(),Qr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ss.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ss.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Jr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t=null,c=[],n=[],s=null,r=null,i=null){this.path=e,this.collectionGroup=t,this.orderBy=c,this.filters=n,this.limit=s,this.startAt=r,this.endAt=i,this.ft=null}}function ei(e,t=null,c=[],n=[],s=null,r=null,i=null){return new Xr(e,t,c,n,s,r,i)}function ti(e){const t=Fn(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>_r(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Fs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>rr(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>rr(e))).join(",")),t.ft=e}return t.ft}function ci(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let c=0;c<e.orderBy.length;c++)if(!jr(e.orderBy[c],t.orderBy[c]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let c=0;c<e.filters.length;c++)if(!Ir(e.filters[c],t.filters[c]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Mr(e.startAt,t.startAt)&&Mr(e.endAt,t.endAt)}function ni(e){return ls.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function si(e,t){return e.filters.filter((e=>e instanceof yr&&e.field.isEqual(t)))}function ri(e,t,c){let n=Xs,s=!0;for(const r of si(e,t)){let e=Xs,t=!0;switch(r.op){case"<":case"<=":e=pr(r.value);break;case"==":case"in":case">=":e=r.value;break;case">":e=r.value,t=!1;break;case"!=":case"not-in":e=Xs}vr({value:n,inclusive:s},{value:e,inclusive:t})<0&&(n=e,s=t)}if(null!==c)for(let r=0;r<e.orderBy.length;++r)if(e.orderBy[r].field.isEqual(t)){const e=c.position[r];vr({value:n,inclusive:s},{value:e,inclusive:c.inclusive})<0&&(n=e,s=c.inclusive);break}return{value:n,inclusive:s}}function ii(e,t,c){let n=Js,s=!0;for(const r of si(e,t)){let e=Js,t=!0;switch(r.op){case">=":case">":e=zr(r.value),t=!1;break;case"==":case"in":case"<=":e=r.value;break;case"<":e=r.value,t=!1;break;case"!=":case"not-in":e=Js}gr({value:n,inclusive:s},{value:e,inclusive:t})>0&&(n=e,s=t)}if(null!==c)for(let r=0;r<e.orderBy.length;++r)if(e.orderBy[r].field.isEqual(t)){const e=c.position[r];gr({value:n,inclusive:s},{value:e,inclusive:c.inclusive})>0&&(n=e,s=c.inclusive);break}return{value:n,inclusive:s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t=null,c=[],n=[],s=null,r="F",i=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=c,this.filters=n,this.limit=s,this.limitType=r,this.startAt=i,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function oi(e,t,c,n,s,r,i,a){return new ai(e,t,c,n,s,r,i,a)}function li(e){return new ai(e)}function ui(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function hi(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function fi(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function di(e){return null!==e.collectionGroup}function mi(e){const t=Fn(e);if(null===t.dt){t.dt=[];const e=fi(t),c=hi(t);if(null!==e&&null===c)e.isKeyField()||t.dt.push(new qr(e)),t.dt.push(new qr(os.keyField(),"asc"));else{let e=!1;for(const c of t.explicitOrderBy)t.dt.push(c),c.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new qr(os.keyField(),e))}}}return t.dt}function pi(e){const t=Fn(e);if(!t._t)if("F"===t.limitType)t._t=ei(t.path,t.collectionGroup,mi(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of mi(t)){const t="desc"===s.dir?"asc":"desc";e.push(new qr(s.field,t))}const c=t.endAt?new Vr(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new Vr(t.startAt.position,t.startAt.inclusive):null;t._t=ei(t.path,t.collectionGroup,e,t.filters,t.limit,c,n)}return t._t}function zi(e,t){t.getFirstInequalityField(),fi(e);const c=e.filters.concat([t]);return new ai(e.path,e.collectionGroup,e.explicitOrderBy.slice(),c,e.limit,e.limitType,e.startAt,e.endAt)}function vi(e,t,c){return new ai(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,c,e.startAt,e.endAt)}function gi(e,t){return ci(pi(e),pi(t))&&e.limitType===t.limitType}function Vi(e){return`${ti(pi(e))}|lt:${e.limitType}`}function Hi(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Er(e))).join(", ")}]`),Fs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>rr(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>rr(e))).join(",")),`Target(${t})`}(pi(e))}; limitType=${e.limitType})`}function Mi(e,t){return t.isFoundDocument()&&function(e,t){const c=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(c):ls.isDocumentKey(e.path)?e.path.isEqual(c):e.path.isImmediateParentOf(c)}(e,t)&&function(e,t){for(const c of mi(e))if(!c.field.isKeyField()&&null===t.data.field(c.field))return!1;return!0}(e,t)&&function(e,t){for(const c of e.filters)if(!c.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,c){const n=Hr(e,t,c);return e.inclusive?n<=0:n<0}(e.startAt,mi(e),t))&&!(e.endAt&&!function(e,t,c){const n=Hr(e,t,c);return e.inclusive?n>=0:n>0}(e.endAt,mi(e),t))}(e,t)}function Ci(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function yi(e){return(t,c)=>{let n=!1;for(const s of mi(e)){const e=Li(s,t,c);if(0!==e)return e;n=n||s.field.isKeyField()}return 0}}function Li(e,t,c){const n=e.field.isKeyField()?ls.comparator(t.key,c.key):function(e,t,c){const n=t.data.field(e),s=c.data.field(e);return null!==n&&null!==s?nr(n,s):Dn()}(e.field,t,c);switch(e.dir){case"asc":return n;case"desc":return-1*n;default:return Dn()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qs(t)?"-0":t}}function wi(e){return{integerValue:""+e}}function ki(e,t){return js(t)?wi(t):bi(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this._=void 0}}function _i(e,t,c){return e instanceof Ei?function(e,t){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(c.fields.__previous_value__=t),{mapValue:c}}(c,t):e instanceof xi?Ti(e,t):e instanceof Oi?Ni(e,t):function(e,t){const c=Ai(e,t),n=Ri(c)+Ri(e.gt);return or(c)&&or(e.gt)?wi(n):bi(e.yt,n)}(e,t)}function Ii(e,t,c){return e instanceof xi?Ti(e,t):e instanceof Oi?Ni(e,t):c}function Ai(e,t){return e instanceof Di?or(c=t)||function(e){return!!e&&"doubleValue"in e}(c)?t:{integerValue:0}:null;var c}class Ei extends Si{}class xi extends Si{constructor(e){super(),this.elements=e}}function Ti(e,t){const c=Pi(t);for(const n of e.elements)c.some((e=>tr(e,n)))||c.push(n);return{arrayValue:{values:c}}}class Oi extends Si{constructor(e){super(),this.elements=e}}function Ni(e,t){let c=Pi(t);for(const n of e.elements)c=c.filter((e=>!tr(e,n)));return{arrayValue:{values:c}}}class Di extends Si{constructor(e,t){super(),this.yt=e,this.gt=t}}function Ri(e){return Gs(e.integerValue||e.doubleValue)}function Pi(e){return lr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t){this.field=e,this.transform=t}}function qi(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof xi&&t instanceof xi||e instanceof Oi&&t instanceof Oi?ts(e.elements,t.elements,tr):e instanceof Di&&t instanceof Di?tr(e.gt,t.gt):e instanceof Ei&&t instanceof Ei}(e.transform,t.transform)}class ji{constructor(e,t){this.version=e,this.transformResults=t}}class Ui{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ui}static exists(e){return new Ui(void 0,e)}static updateTime(e){return new Ui(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bi(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class $i{}function Ki(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ca(e.key,Ui.none()):new Yi(e.key,e.data,Ui.none());{const c=e.data,n=Qr.empty();let s=new Kr(os.comparator);for(let e of t.fields)if(!s.has(e)){let t=c.field(e);null===t&&e.length>1&&(e=e.popLast(),t=c.field(e)),null===t?n.delete(e):n.set(e,t),s=s.add(e)}return new Ji(e.key,n,new Zr(s.toArray()),Ui.none())}}function Gi(e,t,c){e instanceof Yi?function(e,t,c){const n=e.value.clone(),s=ea(e.fieldTransforms,t,c.transformResults);n.setAll(s),t.convertToFoundDocument(c.version,n).setHasCommittedMutations()}(e,t,c):e instanceof Ji?function(e,t,c){if(!Bi(e.precondition,t))return void t.convertToUnknownDocument(c.version);const n=ea(e.fieldTransforms,t,c.transformResults),s=t.data;s.setAll(Xi(e)),s.setAll(n),t.convertToFoundDocument(c.version,s).setHasCommittedMutations()}(e,t,c):function(e,t,c){t.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,c)}function Wi(e,t,c,n){return e instanceof Yi?function(e,t,c,n){if(!Bi(e.precondition,t))return c;const s=e.value.clone(),r=ta(e.fieldTransforms,n,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,c,n):e instanceof Ji?function(e,t,c,n){if(!Bi(e.precondition,t))return c;const s=ta(e.fieldTransforms,n,t),r=t.data;return r.setAll(Xi(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===c?null:c.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,c,n):function(e,t,c){return Bi(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):c}(e,t,c)}function Zi(e,t){let c=null;for(const n of e.fieldTransforms){const e=t.data.field(n.field),s=Ai(n.transform,e||null);null!=s&&(null===c&&(c=Qr.empty()),c.set(n.field,s))}return c||null}function Qi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ts(e,t,((e,t)=>qi(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Yi extends $i{constructor(e,t,c,n=[]){super(),this.key=e,this.value=t,this.precondition=c,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class Ji extends $i{constructor(e,t,c,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=c,this.precondition=n,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Xi(e){const t=new Map;return e.fieldMask.fields.forEach((c=>{if(!c.isEmpty()){const n=e.data.field(c);t.set(c,n)}})),t}function ea(e,t,c){const n=new Map;Rn(e.length===c.length);for(let s=0;s<c.length;s++){const r=e[s],i=r.transform,a=t.data.field(r.field);n.set(r.field,Ii(i,a,c[s]))}return n}function ta(e,t,c){const n=new Map;for(const s of e){const e=s.transform,r=c.data.field(s.field);n.set(s.field,_i(e,r,t))}return n}class ca extends $i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class na extends $i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ra,ia;function aa(e){switch(e){default:return Dn();case qn.CANCELLED:case qn.UNKNOWN:case qn.DEADLINE_EXCEEDED:case qn.RESOURCE_EXHAUSTED:case qn.INTERNAL:case qn.UNAVAILABLE:case qn.UNAUTHENTICATED:return!1;case qn.INVALID_ARGUMENT:case qn.NOT_FOUND:case qn.ALREADY_EXISTS:case qn.PERMISSION_DENIED:case qn.FAILED_PRECONDITION:case qn.ABORTED:case qn.OUT_OF_RANGE:case qn.UNIMPLEMENTED:case qn.DATA_LOSS:return!0}}function oa(e){if(void 0===e)return Tn("GRPC error has no .code"),qn.UNKNOWN;switch(e){case ra.OK:return qn.OK;case ra.CANCELLED:return qn.CANCELLED;case ra.UNKNOWN:return qn.UNKNOWN;case ra.DEADLINE_EXCEEDED:return qn.DEADLINE_EXCEEDED;case ra.RESOURCE_EXHAUSTED:return qn.RESOURCE_EXHAUSTED;case ra.INTERNAL:return qn.INTERNAL;case ra.UNAVAILABLE:return qn.UNAVAILABLE;case ra.UNAUTHENTICATED:return qn.UNAUTHENTICATED;case ra.INVALID_ARGUMENT:return qn.INVALID_ARGUMENT;case ra.NOT_FOUND:return qn.NOT_FOUND;case ra.ALREADY_EXISTS:return qn.ALREADY_EXISTS;case ra.PERMISSION_DENIED:return qn.PERMISSION_DENIED;case ra.FAILED_PRECONDITION:return qn.FAILED_PRECONDITION;case ra.ABORTED:return qn.ABORTED;case ra.OUT_OF_RANGE:return qn.OUT_OF_RANGE;case ra.UNIMPLEMENTED:return qn.UNIMPLEMENTED;case ra.DATA_LOSS:return qn.DATA_LOSS;default:return Dn()}}(ia=ra||(ra={}))[ia.OK=0]="OK",ia[ia.CANCELLED=1]="CANCELLED",ia[ia.UNKNOWN=2]="UNKNOWN",ia[ia.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ia[ia.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ia[ia.NOT_FOUND=5]="NOT_FOUND",ia[ia.ALREADY_EXISTS=6]="ALREADY_EXISTS",ia[ia.PERMISSION_DENIED=7]="PERMISSION_DENIED",ia[ia.UNAUTHENTICATED=16]="UNAUTHENTICATED",ia[ia.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ia[ia.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ia[ia.ABORTED=10]="ABORTED",ia[ia.OUT_OF_RANGE=11]="OUT_OF_RANGE",ia[ia.UNIMPLEMENTED=12]="UNIMPLEMENTED",ia[ia.INTERNAL=13]="INTERNAL",ia[ia.UNAVAILABLE=14]="UNAVAILABLE",ia[ia.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),c=this.inner[t];if(void 0!==c)for(const[n,s]of c)if(this.equalsFn(n,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const c=this.mapKeyFn(e),n=this.inner[c];if(void 0===n)return this.inner[c]=[[e,t]],void this.innerSize++;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return void(n[s]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),c=this.inner[t];if(void 0===c)return!1;for(let n=0;n<c.length;n++)if(this.equalsFn(c[n][0],e))return 1===c.length?delete this.inner[t]:c.splice(n,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,((t,c)=>{for(const[n,s]of c)e(n,s)}))}isEmpty(){return Ps(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Ur(ls.comparator);function ha(){return ua}const fa=new Ur(ls.comparator);function da(...e){let t=fa;for(const c of e)t=t.insert(c.key,c);return t}function ma(e){let t=fa;return e.forEach(((e,c)=>t=t.insert(e,c.overlayedDocument))),t}function pa(){return va()}function za(){return va()}function va(){return new la((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ga=new Ur(ls.comparator),Va=new Kr(ls.comparator);function Ha(...e){let t=Va;for(const c of e)t=t.add(c);return t}const Ma=new Kr(es);function Ca(){return Ma}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t,c,n,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=c,this.documentUpdates=n,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,c){const n=new Map;return n.set(e,La.createSynthesizedTargetChangeForCurrentChange(e,t,c)),new ya(ss.min(),n,Ca(),ha(),Ha())}}class La{constructor(e,t,c,n,s){this.resumeToken=e,this.current=t,this.addedDocuments=c,this.modifiedDocuments=n,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,c){return new La(c,t,Ha(),Ha(),Ha())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t,c,n){this.It=e,this.removedTargetIds=t,this.key=c,this.Tt=n}}class wa{constructor(e,t){this.targetId=e,this.Et=t}}class ka{constructor(e,t,c=Bs.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=c,this.cause=n}}class Sa{constructor(){this.At=0,this.Rt=Aa(),this.bt=Bs.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Ha(),t=Ha(),c=Ha();return this.Rt.forEach(((n,s)=>{switch(s){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:c=c.add(n);break;default:Dn()}})),new La(this.bt,this.Pt,e,t,c)}xt(){this.vt=!1,this.Rt=Aa()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class _a{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=ha(),this.qt=Ia(),this.Ut=new Kr(es)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const c=this.Wt(t);switch(e.state){case 0:this.zt(t)&&c.Dt(e.resumeToken);break;case 1:c.Mt(),c.Vt||c.xt(),c.Dt(e.resumeToken);break;case 2:c.Mt(),c.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(c.Ft(),c.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),c.Dt(e.resumeToken));break;default:Dn()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,c)=>{this.zt(c)&&t(c)}))}Jt(e){const t=e.targetId,c=e.Et.count,n=this.Yt(t);if(n){const e=n.target;if(ni(e))if(0===c){const c=new ls(e.path);this.Qt(t,c,Jr.newNoDocument(c,ss.min()))}else Rn(1===c);else this.Xt(t)!==c&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((c,n)=>{const s=this.Yt(n);if(s){if(c.current&&ni(s.target)){const t=new ls(s.target.path);null!==this.Lt.get(t)||this.te(n,t)||this.Qt(n,t,Jr.newNoDocument(t,e))}c.St&&(t.set(n,c.Ct()),c.xt())}}));let c=Ha();this.qt.forEach(((e,t)=>{let n=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(n=!1,!1)})),n&&(c=c.add(e))})),this.Lt.forEach(((t,c)=>c.setReadTime(e)));const n=new ya(e,t,this.Ut,this.Lt,c);return this.Lt=ha(),this.qt=Ia(),this.Ut=new Kr(es),n}Gt(e,t){if(!this.zt(e))return;const c=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,c),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,c){if(!this.zt(e))return;const n=this.Wt(e);this.te(e,t)?n.Nt(t,1):n.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),c&&(this.Lt=this.Lt.insert(t,c))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Sa,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Kr(es),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||xn("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Sa),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Ia(){return new Ur(ls.comparator)}function Aa(){return new Ur(ls.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),xa=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Ta=(()=>{const e={and:"AND",or:"OR"};return e})();class Oa{constructor(e,t){this.databaseId=e,this.wt=t}}function Na(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Da(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Ra(e,t){return Na(e,t.toTimestamp())}function Pa(e){return Rn(!!e),ss.fromTimestamp(function(e){const t=Ks(e);return new ns(t.seconds,t.nanos)}(e))}function Fa(e,t){return function(e){return new is(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function qa(e){const t=is.fromString(e);return Rn(mo(t)),t}function ja(e,t){return Fa(e.databaseId,t.path)}function Ua(e,t){const c=qa(t);if(c.get(1)!==e.databaseId.projectId)throw new jn(qn.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+e.databaseId.projectId);if(c.get(3)!==e.databaseId.database)throw new jn(qn.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+e.databaseId.database);return new ls(Ga(c))}function Ba(e,t){return Fa(e.databaseId,t)}function $a(e){const t=qa(e);return 4===t.length?is.emptyPath():Ga(t)}function Ka(e){return new is(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ga(e){return Rn(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Wa(e,t,c){return{name:ja(e,t),fields:c.value.mapValue.fields}}function Za(e,t,c){const n=Ua(e,t.name),s=Pa(t.updateTime),r=t.createTime?Pa(t.createTime):ss.min(),i=new Qr({mapValue:{fields:t.fields}}),a=Jr.newFoundDocument(n,s,r,i);return c&&a.setHasCommittedMutations(),c?a.setHasCommittedMutations():a}function Qa(e,t){return"found"in t?function(e,t){Rn(!!t.found),t.found.name,t.found.updateTime;const c=Ua(e,t.found.name),n=Pa(t.found.updateTime),s=t.found.createTime?Pa(t.found.createTime):ss.min(),r=new Qr({mapValue:{fields:t.found.fields}});return Jr.newFoundDocument(c,n,s,r)}(e,t):"missing"in t?function(e,t){Rn(!!t.missing),Rn(!!t.readTime);const c=Ua(e,t.missing),n=Pa(t.readTime);return Jr.newNoDocument(c,n)}(e,t):Dn()}function Ya(e,t){let c;if("targetChange"in t){t.targetChange;const n=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Dn()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(e,t){return e.wt?(Rn(void 0===t||"string"==typeof t),Bs.fromBase64String(t||"")):(Rn(void 0===t||t instanceof Uint8Array),Bs.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),i=t.targetChange.cause,a=i&&function(e){const t=void 0===e.code?qn.UNKNOWN:oa(e.code);return new jn(t,e.message||"")}(i);c=new ka(n,s,r,a||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ua(e,n.document.name),r=Pa(n.document.updateTime),i=n.document.createTime?Pa(n.document.createTime):ss.min(),a=new Qr({mapValue:{fields:n.document.fields}}),o=Jr.newFoundDocument(s,r,i,a),l=n.targetIds||[],u=n.removedTargetIds||[];c=new ba(l,u,o.key,o)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Ua(e,n.document),r=n.readTime?Pa(n.readTime):ss.min(),i=Jr.newNoDocument(s,r),a=n.removedTargetIds||[];c=new ba([],a,i.key,i)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Ua(e,n.document),r=n.removedTargetIds||[];c=new ba([],r,s,null)}else{if(!("filter"in t))return Dn();{t.filter;const e=t.filter;e.targetId;const n=e.count||0,s=new sa(n),r=e.targetId;c=new wa(r,s)}}return c}function Ja(e,t){let c;if(t instanceof Yi)c={update:Wa(e,t.key,t.value)};else if(t instanceof ca)c={delete:ja(e,t.key)};else if(t instanceof Ji)c={update:Wa(e,t.key,t.data),updateMask:fo(t.fieldMask)};else{if(!(t instanceof na))return Dn();c={verify:ja(e,t.key)}}return t.fieldTransforms.length>0&&(c.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const c=t.transform;if(c instanceof Ei)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof xi)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Oi)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Di)return{fieldPath:t.field.canonicalString(),increment:c.gt};throw Dn()}(0,e)))),t.precondition.isNone||(c.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ra(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Dn()}(e,t.precondition)),c}function Xa(e,t){const c=t.currentDocument?function(e){return void 0!==e.updateTime?Ui.updateTime(Pa(e.updateTime)):void 0!==e.exists?Ui.exists(e.exists):Ui.none()}(t.currentDocument):Ui.none(),n=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let c=null;if("setToServerValue"in t)Rn("REQUEST_TIME"===t.setToServerValue),c=new Ei;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];c=new xi(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];c=new Oi(e)}else"increment"in t?c=new Di(e,t.increment):Dn();const n=os.fromServerFormat(t.fieldPath);return new Fi(n,c)}(e,t))):[];if(t.update){t.update.name;const s=Ua(e,t.update.name),r=new Qr({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Zr(t.map((e=>os.fromServerFormat(e))))}(t.updateMask);return new Ji(s,r,e,c,n)}return new Yi(s,r,c,n)}if(t.delete){const n=Ua(e,t.delete);return new ca(n,c)}if(t.verify){const n=Ua(e,t.verify);return new na(n,c)}return Dn()}function eo(e,t){return e&&e.length>0?(Rn(void 0!==t),e.map((e=>function(e,t){let c=e.updateTime?Pa(e.updateTime):Pa(t);return c.isEqual(ss.min())&&(c=Pa(t)),new ji(c,e.transformResults||[])}(e,t)))):[]}function to(e,t){return{documents:[Ba(e,t.path)]}}function co(e,t){const c={structuredQuery:{}},n=t.path;null!==t.collectionGroup?(c.parent=Ba(e,n),c.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(c.parent=Ba(e,n.popLast()),c.structuredQuery.from=[{collectionId:n.lastSegment()}]);const s=function(e){if(0!==e.length)return ho(Lr.create(e,"and"))}(t.filters);s&&(c.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:lo(e.field),direction:io(e.dir)}}(e)))}(t.orderBy);r&&(c.structuredQuery.orderBy=r);const i=function(e,t){return e.wt||Fs(t)?t:{value:t}}(e,t.limit);var a;return null!==i&&(c.structuredQuery.limit=i),t.startAt&&(c.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(c.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),c}function no(e){let t=$a(e.parent);const c=e.structuredQuery,n=c.from?c.from.length:0;let s=null;if(n>0){Rn(1===n);const e=c.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];c.where&&(r=function(e){const t=ro(e);return t instanceof Lr&&kr(t)?t.getFilters():[t]}(c.where));let i=[];c.orderBy&&(i=c.orderBy.map((e=>function(e){return new qr(uo(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;c.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Fs(t)?null:t}(c.limit));let o=null;c.startAt&&(o=function(e){const t=!!e.before,c=e.values||[];return new Vr(c,t)}(c.startAt));let l=null;return c.endAt&&(l=function(e){const t=!e.before,c=e.values||[];return new Vr(c,t)}(c.endAt)),oi(t,s,i,r,a,"F",o,l)}function so(e,t){const c=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Dn()}}(0,t.purpose);return null==c?null:{"goog-listen-tags":c}}function ro(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=uo(e.unaryFilter.field);return yr.create(t,"==",{doubleValue:NaN});case"IS_NULL":const c=uo(e.unaryFilter.field);return yr.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=uo(e.unaryFilter.field);return yr.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=uo(e.unaryFilter.field);return yr.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Dn()}}(e):void 0!==e.fieldFilter?function(e){return yr.create(uo(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Dn()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Lr.create(e.compositeFilter.filters.map((e=>ro(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Dn()}}(e.compositeFilter.op))}(e):Dn()}function io(e){return Ea[e]}function ao(e){return xa[e]}function oo(e){return Ta[e]}function lo(e){return{fieldPath:e.canonicalString()}}function uo(e){return os.fromServerFormat(e.fieldPath)}function ho(e){return e instanceof yr?function(e){if("=="===e.op){if(hr(e.value))return{unaryFilter:{field:lo(e.field),op:"IS_NAN"}};if(ur(e.value))return{unaryFilter:{field:lo(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(hr(e.value))return{unaryFilter:{field:lo(e.field),op:"IS_NOT_NAN"}};if(ur(e.value))return{unaryFilter:{field:lo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lo(e.field),op:ao(e.op),value:e.value}}}(e):e instanceof Lr?function(e){const t=e.getFilters().map((e=>ho(e)));return 1===t.length?t[0]:{compositeFilter:{op:oo(e.op),filters:t}}}(e):Dn()}function fo(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function mo(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e){let t="";for(let c=0;c<e.length;c++)t.length>0&&(t=vo(t)),t=zo(e.get(c),t);return vo(t)}function zo(e,t){let c=t;const n=e.length;for(let s=0;s<n;s++){const t=e.charAt(s);switch(t){case"\0":c+="";break;case"":c+="";break;default:c+=t}}return c}function vo(e){return e+""}function go(e){const t=e.length;if(Rn(t>=2),2===t)return Rn(""===e.charAt(0)&&""===e.charAt(1)),is.emptyPath();const c=t-2,n=[];let s="";for(let r=0;r<t;){const t=e.indexOf("",r);switch((t<0||t>c)&&Dn(),e.charAt(t+1)){case"":const c=e.substring(r,t);let i;0===s.length?i=c:(s+=c,i=s,s=""),n.push(i);break;case"":s+=e.substring(r,t),s+="\0";break;case"":s+=e.substring(r,t+1);break;default:Dn()}r=t+2}return new is(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e,t){return[e,po(t)]}function Mo(e,t,c){return[e,po(t),c]}const Co={},yo=["prefixPath","collectionGroup","readTime","documentId"],Lo=["prefixPath","collectionGroup","documentId"],bo=["collectionGroup","readTime","prefixPath","documentId"],wo=["canonicalId","targetId"],ko=["targetId","path"],So=["path","targetId"],_o=["collectionId","parent"],Io=["indexId","uid"],Ao=["uid","sequenceNumber"],Eo=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],xo=["indexId","uid","orderedDocumentKey"],To=["userId","collectionPath","documentId"],Oo=["userId","collectionPath","largestBatchId"],No=["userId","collectionGroup","largestBatchId"],Do=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ro=[...Do,"documentOverlays"],Po=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Fo=Po,qo=[...Fo,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Hs{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function Uo(e,t){const c=Fn(e);return Ls.M(c.se,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,c,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=c,this.mutations=n}applyToRemoteDocument(e,t){const c=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const t=this.mutations[n];t.key.isEqual(e.key)&&Gi(t,e,c[n])}}applyToLocalView(e,t){for(const c of this.baseMutations)c.key.isEqual(e.key)&&(t=Wi(c,e,t,this.localWriteTime));for(const c of this.mutations)c.key.isEqual(e.key)&&(t=Wi(c,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const c=za();return this.mutations.forEach((n=>{const s=e.get(n.key),r=s.overlayedDocument;let i=this.applyToLocalView(r,s.mutatedFields);i=t.has(n.key)?null:i;const a=Ki(r,i);null!==a&&c.set(n.key,a),r.isValidDocument()||r.convertToNoDocument(ss.min())})),c}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ha())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,((e,t)=>Qi(e,t)))&&ts(this.baseMutations,e.baseMutations,((e,t)=>Qi(e,t)))}}class $o{constructor(e,t,c,n){this.batch=e,this.commitVersion=t,this.mutationResults=c,this.docVersions=n}static from(e,t,c){Rn(e.mutations.length===c.length);let n=ga;const s=e.mutations;for(let r=0;r<s.length;r++)n=n.insert(s[r].key,c[r].version);return new $o(e,t,c,n)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,c,n,s=ss.min(),r=ss.min(),i=Bs.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=c,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=i}withSequenceNumber(e){return new Go(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Go(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Go(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.ie=e}}function Zo(e,t){let c;if(t.document)c=Za(e.ie,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=ls.fromSegments(t.noDocument.path),n=Xo(t.noDocument.readTime);c=Jr.newNoDocument(e,n),t.hasCommittedMutations&&c.setHasCommittedMutations()}else{if(!t.unknownDocument)return Dn();{const e=ls.fromSegments(t.unknownDocument.path),n=Xo(t.unknownDocument.version);c=Jr.newUnknownDocument(e,n)}}return t.readTime&&c.setReadTime(function(e){const t=new ns(e[0],e[1]);return ss.fromTimestamp(t)}(t.readTime)),c}function Qo(e,t){const c=t.key,n={prefixPath:c.getCollectionPath().popLast().toArray(),collectionGroup:c.collectionGroup,documentId:c.path.lastSegment(),readTime:Yo(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(e,t){return{name:ja(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Na(e,t.version.toTimestamp()),createTime:Na(e,t.createTime.toTimestamp())}}(e.ie,t);else if(t.isNoDocument())n.noDocument={path:c.path.toArray(),readTime:Jo(t.version)};else{if(!t.isUnknownDocument())return Dn();n.unknownDocument={path:c.path.toArray(),version:Jo(t.version)}}return n}function Yo(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Jo(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Xo(e){const t=new ns(e.seconds,e.nanoseconds);return ss.fromTimestamp(t)}function el(e,t){const c=(t.baseMutations||[]).map((t=>Xa(e.ie,t)));for(let r=0;r<t.mutations.length-1;++r){const e=t.mutations[r];if(r+1<t.mutations.length&&void 0!==t.mutations[r+1].transform){const c=t.mutations[r+1];e.updateTransforms=c.transform.fieldTransforms,t.mutations.splice(r+1,1),++r}}const n=t.mutations.map((t=>Xa(e.ie,t))),s=ns.fromMillis(t.localWriteTimeMs);return new Bo(t.batchId,s,c,n)}function tl(e){const t=Xo(e.readTime),c=void 0!==e.lastLimboFreeSnapshotVersion?Xo(e.lastLimboFreeSnapshotVersion):ss.min();let n;var s;return void 0!==e.query.documents?(Rn(1===(s=e.query).documents.length),n=pi(li($a(s.documents[0])))):n=function(e){return pi(no(e))}(e.query),new Go(n,e.targetId,0,e.lastListenSequenceNumber,t,c,Bs.fromBase64String(e.resumeToken))}function cl(e,t){const c=Jo(t.snapshotVersion),n=Jo(t.lastLimboFreeSnapshotVersion);let s;s=ni(t.target)?to(e.ie,t.target):co(e.ie,t.target);const r=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ti(t.target),readTime:c,resumeToken:r,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function nl(e){const t=no({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?vi(t,t.limit,"L"):t}function sl(e,t){return new Ko(t.largestBatchId,Xa(e.ie,t.overlayMutation))}function rl(e,t){const c=t.path.lastSegment();return[e,po(t.path.popLast()),c]}function il(e,t,c,n){return{indexId:e,uid:t.uid||"",sequenceNumber:c,readTime:Jo(n.readTime),documentKey:po(n.documentKey.path),largestBatchId:n.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{getBundleMetadata(e,t){return ol(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Xo(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return ol(e).put({bundleId:(c=t).id,createTime:Jo(Pa(c.createTime)),version:c.version});var c}getNamedQuery(e,t){return ll(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:nl(t.bundledQuery),readTime:Xo(t.readTime)};var t}))}saveNamedQuery(e,t){return ll(e).put(function(e){return{name:e.name,readTime:Jo(Pa(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function ol(e){return Uo(e,"bundles")}function ll(e){return Uo(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){const c=t.uid||"";return new ul(e,c)}getOverlay(e,t){return hl(e).get(rl(this.userId,t)).next((e=>e?sl(this.yt,e):null))}getOverlays(e,t){const c=pa();return Cs.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&c.set(t,e)})))).next((()=>c))}saveOverlays(e,t,c){const n=[];return c.forEach(((c,s)=>{const r=new Ko(t,s);n.push(this.oe(e,r))})),Cs.waitFor(n)}removeOverlaysForBatchId(e,t,c){const n=new Set;t.forEach((e=>n.add(po(e.getCollectionPath()))));const s=[];return n.forEach((t=>{const n=IDBKeyRange.bound([this.userId,t,c],[this.userId,t,c+1],!1,!0);s.push(hl(e).Y("collectionPathOverlayIndex",n))})),Cs.waitFor(s)}getOverlaysForCollection(e,t,c){const n=pa(),s=po(t),r=IDBKeyRange.bound([this.userId,s,c],[this.userId,s,Number.POSITIVE_INFINITY],!0);return hl(e).W("collectionPathOverlayIndex",r).next((e=>{for(const t of e){const e=sl(this.yt,t);n.set(e.getKey(),e)}return n}))}getOverlaysForCollectionGroup(e,t,c,n){const s=pa();let r;const i=IDBKeyRange.bound([this.userId,t,c],[this.userId,t,Number.POSITIVE_INFINITY],!0);return hl(e).Z({index:"collectionGroupOverlayIndex",range:i},((e,t,c)=>{const i=sl(this.yt,t);s.size()<n||i.largestBatchId===r?(s.set(i.getKey(),i),r=i.largestBatchId):c.done()})).next((()=>s))}oe(e,t){return hl(e).put(function(e,t,c){const[n,s,r]=rl(t,c.mutation.key);return{userId:t,collectionPath:s,documentId:r,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:Ja(e.ie,c.mutation)}}(this.yt,this.userId,t))}}function hl(e){return Uo(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Gs(e.integerValue));else if("doubleValue"in e){const c=Gs(e.doubleValue);isNaN(c)?this.he(t,13):(this.he(t,15),qs(c)?t.le(0):t.le(c))}else if("timestampValue"in e){const c=e.timestampValue;this.he(t,20),"string"==typeof c?t.fe(c):(t.fe(`${c.seconds||""}`),t.le(c.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Ws(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const c=e.geoPointValue;this.he(t,45),t.le(c.latitude||0),t.le(c.longitude||0)}else"mapValue"in e?mr(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Dn()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const c=e.fields||{};this.he(t,55);for(const n of Object.keys(c))this.de(n,t),this.ce(c[n],t)}ye(e,t){const c=e.values||[];this.he(t,50);for(const n of c)this.ce(n,t)}me(e,t){this.he(t,37),ls.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}}function dl(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function ml(e){const t=64-function(e){let t=0;for(let c=0;c<8;++c){const n=dl(255&e[c]);if(t+=n,8!==n)break}return t}(e);return Math.ceil(t/8)}fl.Ie=new fl;class pl{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const t=e[Symbol.iterator]();let c=t.next();for(;!c.done;)this.Ee(c.value),c=t.next();this.Ae()}Re(e){const t=e[Symbol.iterator]();let c=t.next();for(;!c.done;)this.be(c.value),c=t.next();this.Pe()}ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ee(e);else if(e<2048)this.Ee(960|e>>>6),this.Ee(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ee(480|e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e);else{const e=t.codePointAt(0);this.Ee(240|e>>>18),this.Ee(128|63&e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e)}}this.Ae()}Ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.be(e);else if(e<2048)this.be(960|e>>>6),this.be(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.be(480|e>>>12),this.be(128|63&e>>>6),this.be(128|63&e);else{const e=t.codePointAt(0);this.be(240|e>>>18),this.be(128|63&e>>>12),this.be(128|63&e>>>6),this.be(128|63&e)}}this.Pe()}Se(e){const t=this.De(e),c=ml(t);this.Ce(1+c),this.buffer[this.position++]=255&c;for(let n=t.length-c;n<t.length;++n)this.buffer[this.position++]=255&t[n]}xe(e){const t=this.De(e),c=ml(t);this.Ce(1+c),this.buffer[this.position++]=~(255&c);for(let n=t.length-c;n<t.length;++n)this.buffer[this.position++]=~(255&t[n])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),c=0!=(128&t[0]);t[0]^=c?255:128;for(let n=1;n<t.length;++n)t[n]^=c?255:0;return t}Ee(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(t)}be(e){const t=255&e;0===t?(this.Me(0),this.Me(255)):255===t?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const t=e+this.position;if(t<=this.buffer.length)return;let c=2*this.buffer.length;c<t&&(c=t);const n=new Uint8Array(c);n.set(this.buffer),this.buffer=n}}class zl{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class vl{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class gl{constructor(){this.$e=new pl,this.Be=new zl(this.$e),this.Le=new vl(this.$e)}seed(e){this.$e.seed(e)}qe(e){return 0===e?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t,c,n){this.indexId=e,this.documentKey=t,this.arrayValue=c,this.directionalValue=n}Ue(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,c=new Uint8Array(t);return c.set(this.directionalValue,0),t!==e?c.set([0],this.directionalValue.length):++c[c.length-1],new Vl(this.indexId,this.documentKey,this.arrayValue,c)}}function Hl(e,t){let c=e.indexId-t.indexId;return 0!==c?c:(c=Ml(e.arrayValue,t.arrayValue),0!==c?c:(c=Ml(e.directionalValue,t.directionalValue),0!==c?c:ls.comparator(e.documentKey,t.documentKey)))}function Ml(e,t){for(let c=0;c<e.length&&c<t.length;++c){const n=e[c]-t[c];if(0!==n)return n}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const t of e.filters){const e=t;e.isInequality()?this.Qe=e:this.Ge.push(e)}}je(e){Rn(e.collectionGroup===this.collectionId);const t=hs(e);if(void 0!==t&&!this.We(t))return!1;const c=fs(e);let n=0,s=0;for(;n<c.length&&this.We(c[n]);++n);if(n===c.length)return!0;if(void 0!==this.Qe){const e=c[n];if(!this.ze(this.Qe,e)||!this.He(this.Ke[s++],e))return!1;++n}for(;n<c.length;++n){const e=c[n];if(s>=this.Ke.length||!this.He(this.Ke[s++],e))return!1}return!0}We(e){for(const t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const c="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===c}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(e){var t,c;if(Rn(e instanceof yr||e instanceof Lr),e instanceof yr){if(e instanceof Rr){const n=(null===(c=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===c?void 0:c.map((t=>yr.create(e.field,"==",t))))||[];return Lr.create(n,"or")}return e}const n=e.filters.map((e=>yl(e)));return Lr.create(n,e.op)}function Ll(e){if(0===e.getFilters().length)return[];const t=Sl(yl(e));return Rn(kl(t)),bl(t)||wl(t)?[t]:t.getFilters()}function bl(e){return e instanceof yr}function wl(e){return e instanceof Lr&&kr(e)}function kl(e){return bl(e)||wl(e)||function(e){if(e instanceof Lr&&wr(e)){for(const t of e.getFilters())if(!bl(t)&&!wl(t))return!1;return!0}return!1}(e)}function Sl(e){if(Rn(e instanceof yr||e instanceof Lr),e instanceof yr)return e;if(1===e.filters.length)return Sl(e.filters[0]);const t=e.filters.map((e=>Sl(e)));let c=Lr.create(t,e.op);return c=Al(c),kl(c)?c:(Rn(c instanceof Lr),Rn(br(c)),Rn(c.filters.length>1),c.filters.reduce(((e,t)=>_l(e,t))))}function _l(e,t){let c;return Rn(e instanceof yr||e instanceof Lr),Rn(t instanceof yr||t instanceof Lr),c=e instanceof yr?t instanceof yr?function(e,t){return Lr.create([e,t],"and")}(e,t):Il(e,t):t instanceof yr?Il(t,e):function(e,t){if(Rn(e.filters.length>0&&t.filters.length>0),br(e)&&br(t))return Ar(e,t.getFilters());const c=wr(e)?e:t,n=wr(e)?t:e,s=c.filters.map((e=>_l(e,n)));return Lr.create(s,"or")}(e,t),Al(c)}function Il(e,t){if(br(t))return Ar(t,e.getFilters());{const c=t.filters.map((t=>_l(e,t)));return Lr.create(c,"or")}}function Al(e){if(Rn(e instanceof yr||e instanceof Lr),e instanceof yr)return e;const t=e.getFilters();if(1===t.length)return Al(t[0]);if(Sr(e))return e;const c=t.map((e=>Al(e))),n=[];return c.forEach((t=>{t instanceof yr?n.push(t):t instanceof Lr&&(t.op===e.op?n.push(...t.filters):n.push(t))})),1===n.length?n[0]:Lr.create(n,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class El{constructor(){this.Je=new xl}addToCollectionParentIndex(e,t){return this.Je.add(t),Cs.resolve()}getCollectionParents(e,t){return Cs.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return Cs.resolve()}deleteFieldIndex(e,t){return Cs.resolve()}getDocumentsMatchingTarget(e,t){return Cs.resolve(null)}getIndexType(e,t){return Cs.resolve(0)}getFieldIndexes(e,t){return Cs.resolve([])}getNextCollectionGroupToUpdate(e){return Cs.resolve(null)}getMinOffset(e,t){return Cs.resolve(vs.min())}getMinOffsetFromCollectionGroup(e,t){return Cs.resolve(vs.min())}updateCollectionGroup(e,t,c){return Cs.resolve()}updateIndexEntries(e,t){return Cs.resolve()}}class xl{constructor(){this.index={}}add(e){const t=e.lastSegment(),c=e.popLast(),n=this.index[t]||new Kr(is.comparator),s=!n.has(c);return this.index[t]=n.add(c),s}has(e){const t=e.lastSegment(),c=e.popLast(),n=this.index[t];return n&&n.has(c)}getEntries(e){return(this.index[e]||new Kr(is.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Uint8Array(0);class Ol{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new xl,this.Xe=new la((e=>ti(e)),((e,t)=>ci(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){const c=t.lastSegment(),n=t.popLast();e.addOnCommittedListener((()=>{this.Ye.add(t)}));const s={collectionId:c,parent:po(n)};return Nl(e).put(s)}return Cs.resolve()}getCollectionParents(e,t){const c=[],n=IDBKeyRange.bound([t,""],[cs(t),""],!1,!0);return Nl(e).W(n).next((e=>{for(const n of e){if(n.collectionId!==t)break;c.push(go(n.parent))}return c}))}addFieldIndex(e,t){const c=Rl(e),n=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete n.indexId;const s=c.add(n);if(t.indexState){const c=Pl(e);return s.next((e=>{c.put(il(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const c=Rl(e),n=Pl(e),s=Dl(e);return c.delete(t.indexId).next((()=>n.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const c=Dl(e);let n=!0;const s=new Map;return Cs.forEach(this.Ze(t),(t=>this.tn(e,t).next((e=>{n&&(n=!!e),s.set(t,e)})))).next((()=>{if(n){let e=Ha();const n=[];return Cs.forEach(s,((s,r)=>{var i;xn("IndexedDbIndexManager",`Using index ${i=s,`id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${ti(t)}`);const a=function(e,t){const c=hs(t);if(void 0===c)return null;for(const n of si(e,c.fieldPath))switch(n.op){case"array-contains-any":return n.value.arrayValue.values||[];case"array-contains":return[n.value]}return null}(r,s),o=function(e,t){const c=new Map;for(const n of fs(t))for(const t of si(e,n.fieldPath))switch(t.op){case"==":case"in":c.set(n.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return c.set(n.fieldPath.canonicalString(),t.value),Array.from(c.values())}return null}(r,s),l=function(e,t){const c=[];let n=!0;for(const s of fs(t)){const t=0===s.kind?ri(e,s.fieldPath,e.startAt):ii(e,s.fieldPath,e.startAt);c.push(t.value),n&&(n=t.inclusive)}return new Vr(c,n)}(r,s),u=function(e,t){const c=[];let n=!0;for(const s of fs(t)){const t=0===s.kind?ii(e,s.fieldPath,e.endAt):ri(e,s.fieldPath,e.endAt);c.push(t.value),n&&(n=t.inclusive)}return new Vr(c,n)}(r,s),h=this.en(s,r,l),f=this.en(s,r,u),d=this.nn(s,r,o),m=this.sn(s.indexId,a,h,l.inclusive,f,u.inclusive,d);return Cs.forEach(m,(s=>c.J(s,t.limit).next((t=>{t.forEach((t=>{const c=ls.fromSegments(t.documentKey);e.has(c)||(e=e.add(c),n.push(c))}))}))))})).next((()=>n))}return Cs.resolve(null)}))}Ze(e){let t=this.Xe.get(e);return t||(t=0===e.filters.length?[e]:Ll(Lr.create(e.filters,"and")).map((t=>ei(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.Xe.set(e,t),t)}sn(e,t,c,n,s,r,i){const a=(null!=t?t.length:1)*Math.max(c.length,s.length),o=a/(null!=t?t.length:1),l=[];for(let u=0;u<a;++u){const a=t?this.rn(t[u/o]):Tl,h=this.on(e,a,c[u%o],n),f=this.un(e,a,s[u%o],r),d=i.map((t=>this.on(e,a,t,!0)));l.push(...this.createRange(h,f,d))}return l}on(e,t,c,n){const s=new Vl(e,ls.empty(),t,c);return n?s:s.Ue()}un(e,t,c,n){const s=new Vl(e,ls.empty(),t,c);return n?s.Ue():s}tn(e,t){const c=new Cl(t),n=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,n).next((e=>{let t=null;for(const n of e)c.je(n)&&(!t||n.fields.length>t.fields.length)&&(t=n);return t}))}getIndexType(e,t){let c=2;const n=this.Ze(t);return Cs.forEach(n,(t=>this.tn(e,t).next((e=>{e?0!==c&&e.fields.length<function(e){let t=new Kr(os.comparator),c=!1;for(const n of e.filters)for(const e of n.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?c=!0:t=t.add(e.field));for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(c?1:0)}(t)&&(c=1):c=0})))).next((()=>function(e){return null!==e.limit}(t)&&n.length>1&&2===c?1:c))}cn(e,t){const c=new gl;for(const n of fs(e)){const e=t.data.field(n.fieldPath);if(null==e)return null;const s=c.qe(n.kind);fl.Ie.ue(e,s)}return c.Fe()}rn(e){const t=new gl;return fl.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){const c=new gl;return fl.Ie.ue(ar(this.databaseId,t),c.qe(function(e){const t=fs(e);return 0===t.length?0:t[t.length-1].kind}(e))),c.Fe()}nn(e,t,c){if(null===c)return[];let n=[];n.push(new gl);let s=0;for(const r of fs(e)){const e=c[s++];for(const c of n)if(this.hn(t,r.fieldPath)&&lr(e))n=this.ln(n,r,e);else{const t=c.qe(r.kind);fl.Ie.ue(e,t)}}return this.fn(n)}en(e,t,c){return this.nn(e,t,c.position)}fn(e){const t=[];for(let c=0;c<e.length;++c)t[c]=e[c].Fe();return t}ln(e,t,c){const n=[...e],s=[];for(const r of c.arrayValue.values||[])for(const e of n){const c=new gl;c.seed(e.Fe()),fl.Ie.ue(r,c.qe(t.kind)),s.push(c)}return s}hn(e,t){return!!e.filters.find((e=>e instanceof yr&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const c=Rl(e),n=Pl(e);return(t?c.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):c.W()).next((e=>{const t=[];return Cs.forEach(e,(e=>n.get([e.indexId,this.uid]).next((c=>{t.push(function(e,t){const c=t?new ms(t.sequenceNumber,new vs(Xo(t.readTime),new ls(go(t.documentKey)),t.largestBatchId)):ms.empty(),n=e.fields.map((([e,t])=>new ds(os.fromServerFormat(e),t)));return new us(e.indexId,e.collectionGroup,n,c)}(e,c))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const c=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==c?c:es(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,c){const n=Rl(e),s=Pl(e);return this.dn(e).next((e=>n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Cs.forEach(t,(t=>s.put(il(t.indexId,this.user,e,c))))))))}updateIndexEntries(e,t){const c=new Map;return Cs.forEach(t,((t,n)=>{const s=c.get(t.collectionGroup);return(s?Cs.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next((s=>(c.set(t.collectionGroup,s),Cs.forEach(s,(c=>this._n(e,t,c).next((t=>{const s=this.wn(n,c);return t.isEqual(s)?Cs.resolve():this.mn(e,n,c,t,s)})))))))}))}gn(e,t,c,n){return Dl(e).put({indexId:n.indexId,uid:this.uid,arrayValue:n.arrayValue,directionalValue:n.directionalValue,orderedDocumentKey:this.an(c,t.key),documentKey:t.key.path.toArray()})}yn(e,t,c,n){return Dl(e).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,this.an(c,t.key),t.key.path.toArray()])}_n(e,t,c){const n=Dl(e);let s=new Kr(Hl);return n.Z({index:"documentKeyIndex",range:IDBKeyRange.only([c.indexId,this.uid,this.an(c,t)])},((e,n)=>{s=s.add(new Vl(c.indexId,t,n.arrayValue,n.directionalValue))})).next((()=>s))}wn(e,t){let c=new Kr(Hl);const n=this.cn(t,e);if(null==n)return c;const s=hs(t);if(null!=s){const r=e.data.field(s.fieldPath);if(lr(r))for(const s of r.arrayValue.values||[])c=c.add(new Vl(t.indexId,e.key,this.rn(s),n))}else c=c.add(new Vl(t.indexId,e.key,Tl,n));return c}mn(e,t,c,n,s){xn("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const r=[];return function(e,t,c,n,s){const r=e.getIterator(),i=t.getIterator();let a=Wr(r),o=Wr(i);for(;a||o;){let e=!1,t=!1;if(a&&o){const n=c(a,o);n<0?t=!0:n>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(n(o),o=Wr(i)):t?(s(a),a=Wr(r)):(a=Wr(r),o=Wr(i))}}(n,s,Hl,(n=>{r.push(this.gn(e,t,c,n))}),(n=>{r.push(this.yn(e,t,c,n))})),Cs.waitFor(r)}dn(e){let t=1;return Pl(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,c,n)=>{n.done(),t=c.sequenceNumber+1})).next((()=>t))}createRange(e,t,c){c=c.sort(((e,t)=>Hl(e,t))).filter(((e,t,c)=>!t||0!==Hl(e,c[t-1])));const n=[];n.push(e);for(const r of c){const c=Hl(r,e),s=Hl(r,t);if(0===c)n[0]=e.Ue();else if(c>0&&s<0)n.push(r),n.push(r.Ue());else if(s>0)break}n.push(t);const s=[];for(let r=0;r<n.length;r+=2){if(this.pn(n[r],n[r+1]))return[];const e=[n[r].indexId,this.uid,n[r].arrayValue,n[r].directionalValue,Tl,[]],t=[n[r+1].indexId,this.uid,n[r+1].arrayValue,n[r+1].directionalValue,Tl,[]];s.push(IDBKeyRange.bound(e,t))}return s}pn(e,t){return Hl(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Fl)}getMinOffset(e,t){return Cs.mapArray(this.Ze(t),(t=>this.tn(e,t).next((e=>e||Dn())))).next(Fl)}}function Nl(e){return Uo(e,"collectionParents")}function Dl(e){return Uo(e,"indexEntries")}function Rl(e){return Uo(e,"indexConfiguration")}function Pl(e){return Uo(e,"indexState")}function Fl(e){Rn(0!==e.length);let t=e[0].indexState.offset,c=t.largestBatchId;for(let n=1;n<e.length;n++){const s=e[n].indexState.offset;gs(s,t)<0&&(t=s),c<s.largestBatchId&&(c=s.largestBatchId)}return new vs(t.readTime,t.documentKey,c)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class jl{constructor(e,t,c){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=c}static withCacheSize(e){return new jl(e,jl.DEFAULT_COLLECTION_PERCENTILE,jl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(e,t,c){const n=e.store("mutations"),s=e.store("documentMutations"),r=[],i=IDBKeyRange.only(c.batchId);let a=0;const o=n.Z({range:i},((e,t,c)=>(a++,c.delete())));r.push(o.next((()=>{Rn(1===a)})));const l=[];for(const u of c.mutations){const e=Mo(t,u.key.path,c.batchId);r.push(s.delete(e)),l.push(u.key)}return Cs.waitFor(r).next((()=>l))}function Bl(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Dn();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jl.DEFAULT_COLLECTION_PERCENTILE=10,jl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jl.DEFAULT=new jl(41943040,jl.DEFAULT_COLLECTION_PERCENTILE,jl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jl.DISABLED=new jl(-1,0,0);class $l{constructor(e,t,c,n){this.userId=e,this.yt=t,this.indexManager=c,this.referenceDelegate=n,this.In={}}static re(e,t,c,n){Rn(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new $l(s,t,c,n)}checkEmpty(e){let t=!0;const c=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gl(e).Z({index:"userMutationsIndex",range:c},((e,c,n)=>{t=!1,n.done()})).next((()=>t))}addMutationBatch(e,t,c,n){const s=Wl(e),r=Gl(e);return r.add({}).next((i=>{Rn("number"==typeof i);const a=new Bo(i,t,c,n),o=function(e,t,c){const n=c.baseMutations.map((t=>Ja(e.ie,t))),s=c.mutations.map((t=>Ja(e.ie,t)));return{userId:t,batchId:c.batchId,localWriteTimeMs:c.localWriteTime.toMillis(),baseMutations:n,mutations:s}}(this.yt,this.userId,a),l=[];let u=new Kr(((e,t)=>es(e.canonicalString(),t.canonicalString())));for(const e of n){const t=Mo(this.userId,e.key.path,i);u=u.add(e.key.path.popLast()),l.push(r.put(o)),l.push(s.put(t,Co))}return u.forEach((t=>{l.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.In[i]=a.keys()})),Cs.waitFor(l).next((()=>a))}))}lookupMutationBatch(e,t){return Gl(e).get(t).next((e=>e?(Rn(e.userId===this.userId),el(this.yt,e)):null))}Tn(e,t){return this.In[t]?Cs.resolve(this.In[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const c=e.keys();return this.In[t]=c,c}return null}))}getNextMutationBatchAfterBatchId(e,t){const c=t+1,n=IDBKeyRange.lowerBound([this.userId,c]);let s=null;return Gl(e).Z({index:"userMutationsIndex",range:n},((e,t,n)=>{t.userId===this.userId&&(Rn(t.batchId>=c),s=el(this.yt,t)),n.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let c=-1;return Gl(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,n)=>{c=t.batchId,n.done()})).next((()=>c))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Gl(e).W("userMutationsIndex",t).next((e=>e.map((e=>el(this.yt,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const c=Ho(this.userId,t.path),n=IDBKeyRange.lowerBound(c),s=[];return Wl(e).Z({range:n},((c,n,r)=>{const[i,a,o]=c,l=go(a);if(i===this.userId&&t.path.isEqual(l))return Gl(e).get(o).next((e=>{if(!e)throw Dn();Rn(e.userId===this.userId),s.push(el(this.yt,e))}));r.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let c=new Kr(es);const n=[];return t.forEach((t=>{const s=Ho(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=Wl(e).Z({range:r},((e,n,s)=>{const[r,i,a]=e,o=go(i);r===this.userId&&t.path.isEqual(o)?c=c.add(a):s.done()}));n.push(i)})),Cs.waitFor(n).next((()=>this.En(e,c)))}getAllMutationBatchesAffectingQuery(e,t){const c=t.path,n=c.length+1,s=Ho(this.userId,c),r=IDBKeyRange.lowerBound(s);let i=new Kr(es);return Wl(e).Z({range:r},((e,t,s)=>{const[r,a,o]=e,l=go(a);r===this.userId&&c.isPrefixOf(l)?l.length===n&&(i=i.add(o)):s.done()})).next((()=>this.En(e,i)))}En(e,t){const c=[],n=[];return t.forEach((t=>{n.push(Gl(e).get(t).next((e=>{if(null===e)throw Dn();Rn(e.userId===this.userId),c.push(el(this.yt,e))})))})),Cs.waitFor(n).next((()=>c))}removeMutationBatch(e,t){return Ul(e.se,this.userId,t).next((c=>(e.addOnCommittedListener((()=>{this.An(t.batchId)})),Cs.forEach(c,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Cs.resolve();const c=IDBKeyRange.lowerBound([this.userId]),n=[];return Wl(e).Z({range:c},((e,t,c)=>{if(e[0]===this.userId){const t=go(e[1]);n.push(t)}else c.done()})).next((()=>{Rn(0===n.length)}))}))}containsKey(e,t){return Kl(e,this.userId,t)}Rn(e){return Zl(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Kl(e,t,c){const n=Ho(t,c.path),s=n[1],r=IDBKeyRange.lowerBound(n);let i=!1;return Wl(e).Z({range:r,X:!0},((e,c,n)=>{const[r,a,o]=e;r===t&&a===s&&(i=!0),n.done()})).next((()=>i))}function Gl(e){return Uo(e,"mutations")}function Wl(e){return Uo(e,"documentMutations")}function Zl(e){return Uo(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ql(0)}static vn(){return new Ql(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next((t=>{const c=new Ql(t.highestTargetId);return t.highestTargetId=c.next(),this.Sn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Vn(e).next((e=>ss.fromTimestamp(new ns(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Vn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,c){return this.Vn(e).next((n=>(n.highestListenSequenceNumber=t,c&&(n.lastRemoteSnapshotVersion=c.toTimestamp()),t>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=t),this.Sn(e,n))))}addTargetData(e,t){return this.Dn(e,t).next((()=>this.Vn(e).next((c=>(c.targetCount+=1,this.Cn(t,c),this.Sn(e,c))))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Jl(e).delete(t.targetId))).next((()=>this.Vn(e))).next((t=>(Rn(t.targetCount>0),t.targetCount-=1,this.Sn(e,t))))}removeTargets(e,t,c){let n=0;const s=[];return Jl(e).Z(((r,i)=>{const a=tl(i);a.sequenceNumber<=t&&null===c.get(a.targetId)&&(n++,s.push(this.removeTargetData(e,a)))})).next((()=>Cs.waitFor(s))).next((()=>n))}forEachTarget(e,t){return Jl(e).Z(((e,c)=>{const n=tl(c);t(n)}))}Vn(e){return Xl(e).get("targetGlobalKey").next((e=>(Rn(null!==e),e)))}Sn(e,t){return Xl(e).put("targetGlobalKey",t)}Dn(e,t){return Jl(e).put(cl(this.yt,t))}Cn(e,t){let c=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,c=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,c=!0),c}getTargetCount(e){return this.Vn(e).next((e=>e.targetCount))}getTargetData(e,t){const c=ti(t),n=IDBKeyRange.bound([c,Number.NEGATIVE_INFINITY],[c,Number.POSITIVE_INFINITY]);let s=null;return Jl(e).Z({range:n,index:"queryTargetsIndex"},((e,c,n)=>{const r=tl(c);ci(t,r.target)&&(s=r,n.done())})).next((()=>s))}addMatchingKeys(e,t,c){const n=[],s=eu(e);return t.forEach((t=>{const r=po(t.path);n.push(s.put({targetId:c,path:r})),n.push(this.referenceDelegate.addReference(e,c,t))})),Cs.waitFor(n)}removeMatchingKeys(e,t,c){const n=eu(e);return Cs.forEach(t,(t=>{const s=po(t.path);return Cs.waitFor([n.delete([c,s]),this.referenceDelegate.removeReference(e,c,t)])}))}removeMatchingKeysForTargetId(e,t){const c=eu(e),n=IDBKeyRange.bound([t],[t+1],!1,!0);return c.delete(n)}getMatchingKeysForTargetId(e,t){const c=IDBKeyRange.bound([t],[t+1],!1,!0),n=eu(e);let s=Ha();return n.Z({range:c,X:!0},((e,t,c)=>{const n=go(e[1]),r=new ls(n);s=s.add(r)})).next((()=>s))}containsKey(e,t){const c=po(t.path),n=IDBKeyRange.bound([c],[cs(c)],!1,!0);let s=0;return eu(e).Z({index:"documentTargetsIndex",X:!0,range:n},(([e,t],c,n)=>{0!==e&&(s++,n.done())})).next((()=>s>0))}ne(e,t){return Jl(e).get(t).next((e=>e?tl(e):null))}}function Jl(e){return Uo(e,"targets")}function Xl(e){return Uo(e,"targetGlobal")}function eu(e){return Uo(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu([e,t],[c,n]){const s=es(e,c);return 0===s?es(t,n):s}class cu{constructor(e){this.xn=e,this.buffer=new Kr(tu),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();tu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nu{constructor(e,t,c){this.garbageCollector=e,this.asyncQueue=t,this.localStore=c,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(e){xn("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ks(e)?xn("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ms(e)}await this.Fn(3e5)}))}}class su{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Cs.resolve(Ts.at);const c=new cu(t);return this.$n.forEachTarget(e,(e=>c.On(e.sequenceNumber))).next((()=>this.$n.Ln(e,(e=>c.On(e))))).next((()=>c.maxValue))}removeTargets(e,t,c){return this.$n.removeTargets(e,t,c)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(xn("LruGarbageCollector","Garbage collection skipped; disabled"),Cs.resolve(ql)):this.getCacheSize(e).next((c=>c<this.params.cacheSizeCollectionThreshold?(xn("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ql):this.qn(e,t)))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let c,n,s,r,a,o,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(xn("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,r=Date.now(),this.nthSequenceNumber(e,n)))).next((n=>(c=n,a=Date.now(),this.removeTargets(e,c,t)))).next((t=>(s=t,o=Date.now(),this.removeOrphanedDocuments(e,c)))).next((e=>(l=Date.now(),An()<=i["in"].DEBUG&&xn("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${r-u}ms\n\tDetermined least recently used ${n} in `+(a-r)+"ms\n"+`\tRemoved ${s} targets in `+(o-a)+"ms\n"+`\tRemoved ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),Cs.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:s,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new su(e,t)}(this,t)}Bn(e){const t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Un(e){let t=0;return this.Ln(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,((e,c)=>t(c)))}addReference(e,t,c){return iu(e,c)}removeReference(e,t,c){return iu(e,c)}removeTargets(e,t,c){return this.db.getTargetCache().removeTargets(e,t,c)}markPotentiallyOrphaned(e,t){return iu(e,t)}Gn(e,t){return function(e,t){let c=!1;return Zl(e).tt((n=>Kl(e,n,t).next((e=>(e&&(c=!0),Cs.resolve(!e)))))).next((()=>c))}(e,t)}removeOrphanedDocuments(e,t){const c=this.db.getRemoteDocumentCache().newChangeBuffer(),n=[];let s=0;return this.Kn(e,((r,i)=>{if(i<=t){const t=this.Gn(e,r).next((t=>{if(!t)return s++,c.getEntry(e,r).next((()=>(c.removeEntry(r,ss.min()),eu(e).delete([0,po(r.path)]))))}));n.push(t)}})).next((()=>Cs.waitFor(n))).next((()=>c.apply(e))).next((()=>s))}removeTarget(e,t){const c=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,c)}updateLimboDocument(e,t){return iu(e,t)}Kn(e,t){const c=eu(e);let n,s=Ts.at;return c.Z({index:"documentTargetsIndex"},(([e,c],{path:r,sequenceNumber:i})=>{0===e?(s!==Ts.at&&t(new ls(go(n)),s),s=i,n=r):s=Ts.at})).next((()=>{s!==Ts.at&&t(new ls(go(n)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function iu(e,t){return eu(e).put(function(e,t){return{targetId:0,path:po(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.changes=new la((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Jr.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const c=this.changes.get(t);return void 0!==c?Cs.resolve(c):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,c){return fu(e).put(c)}removeEntry(e,t,c){return fu(e).delete(function(e,t){const c=e.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Yo(t),c[c.length-1]]}(t,c))}updateMetadata(e,t){return this.getMetadata(e).next((c=>(c.byteSize+=t,this.Qn(e,c))))}getEntry(e,t){let c=Jr.newInvalidDocument(t);return fu(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(du(t))},((e,n)=>{c=this.jn(t,n)})).next((()=>c))}Wn(e,t){let c={size:0,document:Jr.newInvalidDocument(t)};return fu(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(du(t))},((e,n)=>{c={document:this.jn(t,n),size:Bl(n)}})).next((()=>c))}getEntries(e,t){let c=ha();return this.zn(e,t,((e,t)=>{const n=this.jn(e,t);c=c.insert(e,n)})).next((()=>c))}Hn(e,t){let c=ha(),n=new Ur(ls.comparator);return this.zn(e,t,((e,t)=>{const s=this.jn(e,t);c=c.insert(e,s),n=n.insert(e,Bl(t))})).next((()=>({documents:c,Jn:n})))}zn(e,t,c){if(t.isEmpty())return Cs.resolve();let n=new Kr(pu);t.forEach((e=>n=n.add(e)));const s=IDBKeyRange.bound(du(n.first()),du(n.last())),r=n.getIterator();let i=r.getNext();return fu(e).Z({index:"documentKeyIndex",range:s},((e,t,n)=>{const s=ls.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;i&&pu(i,s)<0;)c(i,null),i=r.getNext();i&&i.isEqual(s)&&(c(i,t),i=r.hasNext()?r.getNext():null),i?n.j(du(i)):n.done()})).next((()=>{for(;i;)c(i,null),i=r.hasNext()?r.getNext():null}))}getDocumentsMatchingQuery(e,t,c,n){const s=t.path,r=[s.popLast().toArray(),s.lastSegment(),Yo(c.readTime),c.documentKey.path.isEmpty()?"":c.documentKey.path.lastSegment()],i=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return fu(e).W(IDBKeyRange.bound(r,i,!0)).next((e=>{let c=ha();for(const s of e){const e=this.jn(ls.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);e.isFoundDocument()&&(Mi(t,e)||n.has(e.key))&&(c=c.insert(e.key,e))}return c}))}getAllFromCollectionGroup(e,t,c,n){let s=ha();const r=mu(t,c),i=mu(t,vs.max());return fu(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(r,i,!0)},((e,t,c)=>{const r=this.jn(ls.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(r.key,r),s.size===n&&c.done()})).next((()=>s))}newChangeBuffer(e){return new uu(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return hu(e).get("remoteDocumentGlobalKey").next((e=>(Rn(!!e),e)))}Qn(e,t){return hu(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const e=Zo(this.yt,t);if(!e.isNoDocument()||!e.version.isEqual(ss.min()))return e}return Jr.newInvalidDocument(e)}}function lu(e){return new ou(e)}class uu extends au{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new la((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let c=0,n=new Kr(((e,t)=>es(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((s,r)=>{const i=this.Xn.get(s);if(t.push(this.Yn.removeEntry(e,s,i.readTime)),r.isValidDocument()){const a=Qo(this.Yn.yt,r);n=n.add(s.path.popLast());const o=Bl(a);c+=o-i.size,t.push(this.Yn.addEntry(e,s,a))}else if(c-=i.size,this.trackRemovals){const c=Qo(this.Yn.yt,r.convertToNoDocument(ss.min()));t.push(this.Yn.addEntry(e,s,c))}})),n.forEach((c=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,c))})),t.push(this.Yn.updateMetadata(e,c)),Cs.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next((e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next((({documents:e,Jn:t})=>(t.forEach(((t,c)=>{this.Xn.set(t,{size:c,readTime:e.get(t).readTime})})),e)))}}function hu(e){return Uo(e,"remoteDocumentGlobal")}function fu(e){return Uo(e,"remoteDocumentsV14")}function du(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function mu(e,t){const c=t.documentKey.path.toArray();return[e,Yo(t.readTime),c.slice(0,c.length-2),c.length>0?c[c.length-1]:""]}function pu(e,t){const c=e.path.toArray(),n=t.path.toArray();let s=0;for(let r=0;r<c.length-2&&r<n.length-2;++r)if(s=es(c[r],n[r]),s)return s;return s=es(c.length,n.length),s||(s=es(c[c.length-2],n[n.length-2]),s||es(c[c.length-1],n[n.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class zu{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t,c,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=c,this.indexManager=n}getDocument(e,t){let c=null;return this.documentOverlayCache.getOverlay(e,t).next((n=>(c=n,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==c&&Wi(c.mutation,e,Zr.empty(),ns.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ha()).next((()=>t))))}getLocalViewOfDocuments(e,t,c=Ha()){const n=pa();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,c).next((e=>{let t=da();return e.forEach(((e,c)=>{t=t.insert(e,c.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const c=pa();return this.populateOverlays(e,c,t).next((()=>this.computeViews(e,t,c,Ha())))}populateOverlays(e,t,c){const n=[];return c.forEach((e=>{t.has(e)||n.push(e)})),this.documentOverlayCache.getOverlays(e,n).next((e=>{e.forEach(((e,c)=>{t.set(e,c)}))}))}computeViews(e,t,c,n){let s=ha();const r=va(),i=va();return t.forEach(((e,t)=>{const i=c.get(t.key);n.has(t.key)&&(void 0===i||i.mutation instanceof Ji)?s=s.insert(t.key,t):void 0!==i?(r.set(t.key,i.mutation.getFieldMask()),Wi(i.mutation,t,i.mutation.getFieldMask(),ns.now())):r.set(t.key,Zr.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var c;return i.set(e,new zu(t,null!==(c=r.get(e))&&void 0!==c?c:null))})),i)))}recalculateAndSaveOverlays(e,t){const c=va();let n=new Ur(((e,t)=>e-t)),s=Ha();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let i=c.get(e)||Zr.empty();i=s.applyToLocalView(r,i),c.set(e,i);const a=(n.get(s.batchId)||Ha()).add(e);n=n.insert(s.batchId,a)}))})).next((()=>{const r=[],i=n.getReverseIterator();for(;i.hasNext();){const n=i.getNext(),a=n.key,o=n.value,l=za();o.forEach((e=>{if(!s.has(e)){const n=Ki(t.get(e),c.get(e));null!==n&&l.set(e,n),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,l))}return Cs.waitFor(r)})).next((()=>c))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,c){return function(e){return ls.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):di(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,c):this.getDocumentsMatchingCollectionQuery(e,t,c)}getNextDocuments(e,t,c,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,c,n).next((s=>{const r=n-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,c.largestBatchId,n-s.size):Cs.resolve(pa());let i=-1,a=s;return r.next((t=>Cs.forEach(t,((t,c)=>(i<c.largestBatchId&&(i=c.largestBatchId),s.get(t)?Cs.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Ha()))).next((e=>({batchId:i,changes:ma(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ls(t)).next((e=>{let t=da();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,c){const n=t.collectionGroup;let s=da();return this.indexManager.getCollectionParents(e,n).next((r=>Cs.forEach(r,(r=>{const i=function(e,t){return new ai(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,r.child(n));return this.getDocumentsMatchingCollectionQuery(e,i,c).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,c){let n;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,c.largestBatchId).next((s=>(n=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,c,n)))).next((e=>{n.forEach(((t,c)=>{const n=c.getKey();null===e.get(n)&&(e=e.insert(n,Jr.newInvalidDocument(n)))}));let c=da();return e.forEach(((e,s)=>{const r=n.get(e);void 0!==r&&Wi(r.mutation,s,Zr.empty(),ns.now()),Mi(t,s)&&(c=c.insert(e,s))})),c}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return Cs.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var c;return this.Zn.set(t.id,{id:(c=t).id,version:c.version,createTime:Pa(c.createTime)}),Cs.resolve()}getNamedQuery(e,t){return Cs.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:nl(e.bundledQuery),readTime:Pa(e.readTime)}}(t)),Cs.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.overlays=new Ur(ls.comparator),this.es=new Map}getOverlay(e,t){return Cs.resolve(this.overlays.get(t))}getOverlays(e,t){const c=pa();return Cs.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&c.set(t,e)})))).next((()=>c))}saveOverlays(e,t,c){return c.forEach(((c,n)=>{this.oe(e,t,n)})),Cs.resolve()}removeOverlaysForBatchId(e,t,c){const n=this.es.get(c);return void 0!==n&&(n.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(c)),Cs.resolve()}getOverlaysForCollection(e,t,c){const n=pa(),s=t.length+1,r=new ls(t.child("")),i=this.overlays.getIteratorFrom(r);for(;i.hasNext();){const e=i.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>c&&n.set(e.getKey(),e)}return Cs.resolve(n)}getOverlaysForCollectionGroup(e,t,c,n){let s=new Ur(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>c){let t=s.get(e.largestBatchId);null===t&&(t=pa(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const i=pa(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>i.set(e,t))),i.size()>=n)break;return Cs.resolve(i)}oe(e,t,c){const n=this.overlays.get(c.key);if(null!==n){const e=this.es.get(n.largestBatchId).delete(c.key);this.es.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(c.key,new Ko(t,c));let s=this.es.get(t);void 0===s&&(s=Ha(),this.es.set(t,s)),this.es.set(t,s.add(c.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this.ns=new Kr(Mu.ss),this.rs=new Kr(Mu.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const c=new Mu(e,t);this.ns=this.ns.add(c),this.rs=this.rs.add(c)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Mu(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new ls(new is([])),c=new Mu(t,e),n=new Mu(t,e+1),s=[];return this.rs.forEachInRange([c,n],(e=>{this.cs(e),s.push(e.key)})),s}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new ls(new is([])),c=new Mu(t,e),n=new Mu(t,e+1);let s=Ha();return this.rs.forEachInRange([c,n],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Mu(e,0),c=this.ns.firstAfterOrEqual(t);return null!==c&&e.isEqual(c.key)}}class Mu{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return ls.comparator(e.key,t.key)||es(e._s,t._s)}static os(e,t){return es(e._s,t._s)||ls.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Kr(Mu.ss)}checkEmpty(e){return Cs.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,c,n){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Bo(s,t,c,n);this.mutationQueue.push(r);for(const i of n)this.gs=this.gs.add(new Mu(i.key,s)),this.indexManager.addToCollectionParentIndex(e,i.key.path.popLast());return Cs.resolve(r)}lookupMutationBatch(e,t){return Cs.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const c=t+1,n=this.ps(c),s=n<0?0:n;return Cs.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Cs.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Cs.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const c=new Mu(t,0),n=new Mu(t,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([c,n],(e=>{const t=this.ys(e._s);s.push(t)})),Cs.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let c=new Kr(es);return t.forEach((e=>{const t=new Mu(e,0),n=new Mu(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,n],(e=>{c=c.add(e._s)}))})),Cs.resolve(this.Is(c))}getAllMutationBatchesAffectingQuery(e,t){const c=t.path,n=c.length+1;let s=c;ls.isDocumentKey(s)||(s=s.child(""));const r=new Mu(new ls(s),0);let i=new Kr(es);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!c.isPrefixOf(t)&&(t.length===n&&(i=i.add(e._s)),!0)}),r),Cs.resolve(this.Is(i))}Is(e){const t=[];return e.forEach((e=>{const c=this.ys(e);null!==c&&t.push(c)})),t}removeMutationBatch(e,t){Rn(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let c=this.gs;return Cs.forEach(t.mutations,(n=>{const s=new Mu(n.key,t.batchId);return c=c.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)})).next((()=>{this.gs=c}))}An(e){}containsKey(e,t){const c=new Mu(t,0),n=this.gs.firstAfterOrEqual(c);return Cs.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,Cs.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.Es=e,this.docs=new Ur(ls.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const c=t.key,n=this.docs.get(c),s=n?n.size:0,r=this.Es(t);return this.docs=this.docs.insert(c,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,c.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const c=this.docs.get(t);return Cs.resolve(c?c.document.mutableCopy():Jr.newInvalidDocument(t))}getEntries(e,t){let c=ha();return t.forEach((e=>{const t=this.docs.get(e);c=c.insert(e,t?t.document.mutableCopy():Jr.newInvalidDocument(e))})),Cs.resolve(c)}getDocumentsMatchingQuery(e,t,c,n){let s=ha();const r=t.path,i=new ls(r.child("")),a=this.docs.getIteratorFrom(i);for(;a.hasNext();){const{key:e,value:{document:i}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||gs(zs(i),c)<=0||(n.has(i.key)||Mi(t,i))&&(s=s.insert(i.key,i.mutableCopy()))}return Cs.resolve(s)}getAllFromCollectionGroup(e,t,c,n){Dn()}As(e,t){return Cs.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Lu(this)}getSize(e){return Cs.resolve(this.size)}}class Lu extends au{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((c,n)=>{n.isValidDocument()?t.push(this.Yn.addEntry(e,n)):this.Yn.removeEntry(c)})),Cs.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.persistence=e,this.Rs=new la((e=>ti(e)),ci),this.lastRemoteSnapshotVersion=ss.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Hu,this.targetCount=0,this.vs=Ql.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,c)=>t(c))),Cs.resolve()}getLastRemoteSnapshotVersion(e){return Cs.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Cs.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Cs.resolve(this.highestTargetId)}setTargetsMetadata(e,t,c){return c&&(this.lastRemoteSnapshotVersion=c),t>this.bs&&(this.bs=t),Cs.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ql(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,Cs.resolve()}updateTargetData(e,t){return this.Dn(t),Cs.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,Cs.resolve()}removeTargets(e,t,c){let n=0;const s=[];return this.Rs.forEach(((r,i)=>{i.sequenceNumber<=t&&null===c.get(i.targetId)&&(this.Rs.delete(r),s.push(this.removeMatchingKeysForTargetId(e,i.targetId)),n++)})),Cs.waitFor(s).next((()=>n))}getTargetCount(e){return Cs.resolve(this.targetCount)}getTargetData(e,t){const c=this.Rs.get(t)||null;return Cs.resolve(c)}addMatchingKeys(e,t,c){return this.Ps.us(t,c),Cs.resolve()}removeMatchingKeys(e,t,c){this.Ps.hs(t,c);const n=this.persistence.referenceDelegate,s=[];return n&&t.forEach((t=>{s.push(n.markPotentiallyOrphaned(e,t))})),Cs.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),Cs.resolve()}getMatchingKeysForTargetId(e,t){const c=this.Ps.ds(t);return Cs.resolve(c)}containsKey(e,t){return Cs.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Ts(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new bu(this),this.indexManager=new El,this.remoteDocumentCache=function(e){return new yu(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new Wo(t),this.Ns=new gu(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let c=this.Vs[e.toKey()];return c||(c=new Cu(t,this.referenceDelegate),this.Vs[e.toKey()]=c),c}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,c){xn("MemoryPersistence","Starting transaction:",e);const n=new ku(this.Ss.next());return this.referenceDelegate.ks(),c(n).next((e=>this.referenceDelegate.Os(n).next((()=>e)))).toPromise().then((e=>(n.raiseOnCommittedEvent(),e)))}Ms(e,t){return Cs.or(Object.values(this.Vs).map((c=>()=>c.containsKey(e,t))))}}class ku extends Hs{constructor(e){super(),this.currentSequenceNumber=e}}class Su{constructor(e){this.persistence=e,this.Fs=new Hu,this.$s=null}static Bs(e){return new Su(e)}get Ls(){if(this.$s)return this.$s;throw Dn()}addReference(e,t,c){return this.Fs.addReference(c,t),this.Ls.delete(c.toString()),Cs.resolve()}removeReference(e,t,c){return this.Fs.removeReference(c,t),this.Ls.add(c.toString()),Cs.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),Cs.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>c.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Cs.forEach(this.Ls,(c=>{const n=ls.fromPath(c);return this.qs(e,n).next((e=>{e||t.removeEntry(n,ss.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return Cs.or([()=>Cs.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e){this.yt=e}$(e,t,c,n){const s=new ys("createOrUpgrade",t);c<1&&n>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Vo,{unique:!0}),e.createObjectStore("documentMutations")}(e),Iu(e),function(e){e.createObjectStore("remoteDocuments")}(e));let r=Cs.resolve();return c<3&&n>=3&&(0!==c&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Iu(e)),r=r.next((()=>function(e){const t=e.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ss.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",c)}(s)))),c<4&&n>=4&&(0!==c&&(r=r.next((()=>function(e,t){return t.store("mutations").W().next((c=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Vo,{unique:!0});const n=t.store("mutations"),s=c.map((e=>n.put(e)));return Cs.waitFor(s)}))}(e,s)))),r=r.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),c<5&&n>=5&&(r=r.next((()=>this.Us(s)))),c<6&&n>=6&&(r=r.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s))))),c<7&&n>=7&&(r=r.next((()=>this.Gs(s)))),c<8&&n>=8&&(r=r.next((()=>this.Qs(e,s)))),c<9&&n>=9&&(r=r.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),c<10&&n>=10&&(r=r.next((()=>this.js(s)))),c<11&&n>=11&&(r=r.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),c<12&&n>=12&&(r=r.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:To});t.createIndex("collectionPathOverlayIndex",Oo,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",No,{unique:!1})}(e)}))),c<13&&n>=13&&(r=r.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:yo});t.createIndex("documentKeyIndex",Lo),t.createIndex("collectionGroupIndex",bo)}(e))).next((()=>this.Ws(e,s))).next((()=>e.deleteObjectStore("remoteDocuments")))),c<14&&n>=14&&(r=r.next((()=>this.zs(e,s)))),c<15&&n>=15&&(r=r.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Io}).createIndex("sequenceNumberIndex",Ao,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Eo}).createIndex("documentKeyIndex",xo,{unique:!1})}(e)))),r}Ks(e){let t=0;return e.store("remoteDocuments").Z(((e,c)=>{t+=Bl(c)})).next((()=>{const c={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",c)}))}Us(e){const t=e.store("mutationQueues"),c=e.store("mutations");return t.W().next((t=>Cs.forEach(t,(t=>{const n=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return c.W("userMutationsIndex",n).next((c=>Cs.forEach(c,(c=>{Rn(c.userId===t.userId);const n=el(this.yt,c);return Ul(e,t.userId,n).next((()=>{}))}))))}))))}Gs(e){const t=e.store("targetDocuments"),c=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const n=[];return c.Z(((c,s)=>{const r=new is(c),i=function(e){return[0,po(e)]}(r);n.push(t.get(i).next((c=>c?Cs.resolve():(c=>t.put({targetId:0,path:po(c),sequenceNumber:e.highestListenSequenceNumber}))(r))))})).next((()=>Cs.waitFor(n)))}))}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:_o});const c=t.store("collectionParents"),n=new xl,s=e=>{if(n.add(e)){const t=e.lastSegment(),n=e.popLast();return c.put({collectionId:t,parent:po(n)})}};return t.store("remoteDocuments").Z({X:!0},((e,t)=>{const c=new is(e);return s(c.popLast())})).next((()=>t.store("documentMutations").Z({X:!0},(([e,t,c],n)=>{const r=go(t);return s(r.popLast())}))))}js(e){const t=e.store("targets");return t.Z(((e,c)=>{const n=tl(c),s=cl(this.yt,n);return t.put(s)}))}Ws(e,t){const c=t.store("remoteDocuments"),n=[];return c.Z(((e,c)=>{const s=t.store("remoteDocumentsV14"),r=(i=c,i.document?new ls(is.fromString(i.document.name).popFirst(5)):i.noDocument?ls.fromSegments(i.noDocument.path):i.unknownDocument?ls.fromSegments(i.unknownDocument.path):Dn()).path.toArray();var i;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:r.slice(0,r.length-2),collectionGroup:r[r.length-2],documentId:r[r.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};n.push(s.put(a))})).next((()=>Cs.waitFor(n)))}zs(e,t){const c=t.store("mutations"),n=lu(this.yt),s=new wu(Su.Bs,this.yt.ie);return c.W().next((e=>{const c=new Map;return e.forEach((e=>{var t;let n=null!==(t=c.get(e.userId))&&void 0!==t?t:Ha();el(this.yt,e).keys().forEach((e=>n=n.add(e))),c.set(e.userId,n)})),Cs.forEach(c,((e,c)=>{const r=new Sn(c),i=ul.re(this.yt,r),a=s.getIndexManager(r),o=$l.re(r,this.yt,a,s.referenceDelegate);return new vu(n,o,i,a).recalculateAndSaveOverlaysForDocumentKeys(new jo(t,Ts.at),e).next()}))}))}}function Iu(e){e.createObjectStore("targetDocuments",{keyPath:ko}).createIndex("documentTargetsIndex",So,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",wo,{unique:!0}),e.createObjectStore("targetGlobal")}const Au="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Eu{constructor(e,t,c,n,s,r,i,a,o,l,u=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=c,this.Hs=s,this.window=r,this.document=i,this.Js=o,this.Ys=l,this.Xs=u,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!Eu.C())throw new jn(qn.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ru(this,n),this.ii=t+"main",this.yt=new Wo(a),this.ri=new Ls(this.ii,this.Xs,new _u(this.yt)),this.Cs=new Yl(this.referenceDelegate,this.yt),this.remoteDocumentCache=lu(this.yt),this.Ns=new al,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===l&&Tn("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new jn(qn.FAILED_PRECONDITION,Au);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Cs.getHighestSequenceNumber(e)))})).then((e=>{this.Ss=new Ts(e,this.Js)})).then((()=>{this.Ds=!0})).catch((e=>(this.ri&&this.ri.close(),Promise.reject(e))))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget((async()=>{this.started&&await this.ui()})))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Tu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.fi(e).next((e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))))}))})).next((()=>this.di(e))).next((t=>this.isPrimary&&!t?this._i(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(ks(e))return xn("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return xn("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable((()=>this.si(e))),this.isPrimary=e}))}fi(e){return xu(e).get("owner").next((e=>Cs.resolve(this.mi(e))))}gi(e){return Tu(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Uo(e,"clientMetadata");return t.W().next((e=>{const c=this.Ii(e,18e5),n=e.filter((e=>-1===c.indexOf(e)));return Cs.forEach(n,(e=>t.delete(e.clientId))).next((()=>n))}))})).catch((()=>[]));if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ui().then((()=>this.yi())).then((()=>this.hi()))))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?Cs.resolve(!0):xu(e).get("owner").next((t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new jn(qn.FAILED_PRECONDITION,Au);return!1}}return!(!this.networkEnabled||!this.inForeground)||Tu(e).W().next((e=>void 0===this.Ii(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,c=!this.inForeground&&e.inForeground,n=this.networkEnabled===e.networkEnabled;if(t||c&&n)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&xn("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new jo(e,Ts.at);return this._i(t).next((()=>this.gi(t)))})),this.ri.close(),this.Pi()}Ii(e,t){return e.filter((e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId)))}vi(){return this.runTransaction("getActiveClients","readonly",(e=>Tu(e).W().next((e=>this.Ii(e,18e5).map((e=>e.clientId))))))}get started(){return this.Ds}getMutationQueue(e,t){return $l.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ol(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return ul.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,c){xn("IndexedDbPersistence","Starting transaction:",e);const n="readonly"===t?"readonly":"readwrite",s=15===(r=this.Xs)?qo:14===r?Fo:13===r?Po:12===r?Ro:11===r?Do:void Dn();var r;let i;return this.ri.runTransaction(e,n,s,(n=>(i=new jo(n,this.Ss?this.Ss.next():Ts.at),"readwrite-primary"===t?this.fi(i).next((e=>!!e||this.di(i))).next((t=>{if(!t)throw Tn(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))),new jn(qn.FAILED_PRECONDITION,Vs);return c(i)})).next((e=>this.wi(i).next((()=>e)))):this.Vi(i).next((()=>c(i)))))).then((e=>(i.raiseOnCommittedEvent(),e)))}Vi(e){return xu(e).get("owner").next((e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new jn(qn.FAILED_PRECONDITION,Au)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return xu(e).put("owner",t)}static C(){return Ls.C()}_i(e){const t=xu(e);return t.get("owner").next((e=>this.mi(e)?(xn("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Cs.resolve()))}pi(e,t){const c=Date.now();return!(e<c-t)&&(!(e>c)||(Tn(`Detected an update time that is in the future: ${e} > ${c}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ui())))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),(0,a.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const c=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return xn("IndexedDbPersistence",`Client '${e}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(e){return Tn("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(C){Tn("Failed to set zombie client id.",C)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(C){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function xu(e){return Uo(e,"owner")}function Tu(e){return Uo(e,"clientMetadata")}function Ou(e,t){let c=e.projectId;return e.isDefaultDatabase||(c+="."+e.database),"firestore/"+t+"/"+c+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Nu{constructor(e,t,c,n){this.targetId=e,this.fromCache=t,this.Si=c,this.Di=n}static Ci(e,t){let c=Ha(),n=Ha();for(const s of t.docChanges)switch(s.type){case 0:c=c.add(s.doc.key);break;case 1:n=n.add(s.doc.key)}return new Nu(e,t.fromCache,c,n)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,c,n){return this.ki(e,t).next((s=>s||this.Oi(e,t,n,c))).next((c=>c||this.Mi(e,t)))}ki(e,t){if(ui(t))return Cs.resolve(null);let c=pi(t);return this.indexManager.getIndexType(e,c).next((n=>0===n?null:(null!==t.limit&&1===n&&(t=vi(t,null,"F"),c=pi(t)),this.indexManager.getDocumentsMatchingTarget(e,c).next((n=>{const s=Ha(...n);return this.Ni.getDocuments(e,s).next((n=>this.indexManager.getMinOffset(e,c).next((c=>{const r=this.Fi(t,n);return this.$i(t,r,s,c.readTime)?this.ki(e,vi(t,null,"F")):this.Bi(e,r,t,c)}))))})))))}Oi(e,t,c,n){return ui(t)||n.isEqual(ss.min())?this.Mi(e,t):this.Ni.getDocuments(e,c).next((s=>{const r=this.Fi(t,s);return this.$i(t,r,c,n)?this.Mi(e,t):(An()<=i["in"].DEBUG&&xn("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Hi(t)),this.Bi(e,r,t,ps(n,-1)))}))}Fi(e,t){let c=new Kr(yi(e));return t.forEach(((t,n)=>{Mi(e,n)&&(c=c.add(n))})),c}$i(e,t,c,n){if(null===e.limit)return!1;if(c.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Mi(e,t){return An()<=i["in"].DEBUG&&xn("QueryEngine","Using full collection scan to execute query:",Hi(t)),this.Ni.getDocumentsMatchingQuery(e,t,vs.min())}Bi(e,t,c,n){return this.Ni.getDocumentsMatchingQuery(e,c,n).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t,c,n){this.persistence=e,this.Li=t,this.yt=n,this.qi=new Ur(es),this.Ui=new la((e=>ti(e)),ci),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(c)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vu(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}function Pu(e,t,c,n){return new Ru(e,t,c,n)}async function Fu(e,t){const c=Fn(e);return await c.persistence.runTransaction("Handle user change","readonly",(e=>{let n;return c.mutationQueue.getAllMutationBatches(e).next((s=>(n=s,c.Qi(t),c.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let i=Ha();for(const e of n){s.push(e.batchId);for(const t of e.mutations)i=i.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)i=i.add(t.key)}return c.localDocuments.getDocuments(e,i).next((e=>({ji:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function qu(e,t){const c=Fn(e);return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const n=t.batch.keys(),s=c.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,c,n){const s=c.batch,r=s.keys();let i=Cs.resolve();return r.forEach((e=>{i=i.next((()=>n.getEntry(t,e))).next((t=>{const r=c.docVersions.get(e);Rn(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,c),t.isValidDocument()&&(t.setReadTime(c.commitVersion),n.addEntry(t)))}))})),i.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(c,e,t,s).next((()=>s.apply(e))).next((()=>c.mutationQueue.performConsistencyCheck(e))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ha();for(let c=0;c<e.mutationResults.length;++c)e.mutationResults[c].transformResults.length>0&&(t=t.add(e.batch.mutations[c].key));return t}(t)))).next((()=>c.localDocuments.getDocuments(e,n)))}))}function ju(e){const t=Fn(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function Uu(e,t){const c=Fn(e),n=t.snapshotVersion;let s=c.qi;return c.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=c.Gi.newChangeBuffer({trackRemovals:!0});s=c.qi;const i=[];t.targetChanges.forEach(((r,a)=>{const o=s.get(a);if(!o)return;i.push(c.Cs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>c.Cs.addMatchingKeys(e,r.addedDocuments,a))));let l=o.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?l=l.withResumeToken(Bs.EMPTY_BYTE_STRING,ss.min()).withLastLimboFreeSnapshotVersion(ss.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,n)),s=s.insert(a,l),function(e,t,c){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0)}(o,l,r)&&i.push(c.Cs.updateTargetData(e,l))}));let a=ha(),o=Ha();if(t.documentUpdates.forEach((n=>{t.resolvedLimboDocuments.has(n)&&i.push(c.persistence.referenceDelegate.updateLimboDocument(e,n))})),i.push(Bu(e,r,t.documentUpdates).next((e=>{a=e.Wi,o=e.zi}))),!n.isEqual(ss.min())){const t=c.Cs.getLastRemoteSnapshotVersion(e).next((t=>c.Cs.setTargetsMetadata(e,e.currentSequenceNumber,n)));i.push(t)}return Cs.waitFor(i).next((()=>r.apply(e))).next((()=>c.localDocuments.getLocalViewOfDocuments(e,a,o))).next((()=>a))})).then((e=>(c.qi=s,e)))}function Bu(e,t,c){let n=Ha(),s=Ha();return c.forEach((e=>n=n.add(e))),t.getEntries(e,n).next((e=>{let n=ha();return c.forEach(((c,r)=>{const i=e.get(c);r.isFoundDocument()!==i.isFoundDocument()&&(s=s.add(c)),r.isNoDocument()&&r.version.isEqual(ss.min())?(t.removeEntry(c,r.readTime),n=n.insert(c,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(t.addEntry(r),n=n.insert(c,r)):xn("LocalStore","Ignoring outdated watch update for ",c,". Current version:",i.version," Watch version:",r.version)})),{Wi:n,zi:s}}))}function $u(e,t){const c=Fn(e);return c.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),c.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ku(e,t){const c=Fn(e);return c.persistence.runTransaction("Allocate target","readwrite",(e=>{let n;return c.Cs.getTargetData(e,t).next((s=>s?(n=s,Cs.resolve(n)):c.Cs.allocateTargetId(e).next((s=>(n=new Go(t,s,0,e.currentSequenceNumber),c.Cs.addTargetData(e,n).next((()=>n)))))))})).then((e=>{const n=c.qi.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(c.qi=c.qi.insert(e.targetId,e),c.Ui.set(t,e.targetId)),e}))}async function Gu(e,t,c){const n=Fn(e),s=n.qi.get(t),r=c?"readwrite":"readwrite-primary";try{c||await n.persistence.runTransaction("Release target",r,(e=>n.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!ks(e))throw e;xn("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}n.qi=n.qi.remove(t),n.Ui.delete(s.target)}function Wu(e,t,c){const n=Fn(e);let s=ss.min(),r=Ha();return n.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,c){const n=Fn(e),s=n.Ui.get(c);return void 0!==s?Cs.resolve(n.qi.get(s)):n.Cs.getTargetData(t,c)}(n,e,pi(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,n.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>n.Li.getDocumentsMatchingQuery(e,t,c?s:ss.min(),c?r:Ha()))).next((e=>(Yu(n,Ci(t),e),{documents:e,Hi:r})))))}function Zu(e,t){const c=Fn(e),n=Fn(c.Cs),s=c.qi.get(t);return s?Promise.resolve(s.target):c.persistence.runTransaction("Get target data","readonly",(e=>n.ne(e,t).next((e=>e?e.target:null))))}function Qu(e,t){const c=Fn(e),n=c.Ki.get(t)||ss.min();return c.persistence.runTransaction("Get new document changes","readonly",(e=>c.Gi.getAllFromCollectionGroup(e,t,ps(n,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Yu(c,t,e),e)))}function Yu(e,t,c){let n=e.Ki.get(t)||ss.min();c.forEach(((e,t)=>{t.readTime.compareTo(n)>0&&(n=t.readTime)})),e.Ki.set(t,n)}async function Ju(e,t,c,n){const s=Fn(e);let r=Ha(),i=ha();for(const l of c){const e=t.Ji(l.metadata.name);l.document&&(r=r.add(e));const c=t.Yi(l);c.setReadTime(t.Xi(l.metadata.readTime)),i=i.insert(e,c)}const a=s.Gi.newChangeBuffer({trackRemovals:!0}),o=await Ku(s,function(e){return pi(li(is.fromString(`__bundle__/docs/${e}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Bu(e,a,i).next((t=>(a.apply(e),t))).next((t=>s.Cs.removeMatchingKeysForTargetId(e,o.targetId).next((()=>s.Cs.addMatchingKeys(e,r,o.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(e,t.Wi,t.zi))).next((()=>t.Wi))))))}async function Xu(e,t,c=Ha()){const n=await Ku(e,pi(nl(t.bundledQuery))),s=Fn(e);return s.persistence.runTransaction("Save named query","readwrite",(e=>{const r=Pa(t.readTime);if(n.snapshotVersion.compareTo(r)>=0)return s.Ns.saveNamedQuery(e,t);const i=n.withResumeToken(Bs.EMPTY_BYTE_STRING,r);return s.qi=s.qi.insert(i.targetId,i),s.Cs.updateTargetData(e,i).next((()=>s.Cs.removeMatchingKeysForTargetId(e,n.targetId))).next((()=>s.Cs.addMatchingKeys(e,c,n.targetId))).next((()=>s.Ns.saveNamedQuery(e,t)))}))}function eh(e,t){return`firestore_clients_${e}_${t}`}function th(e,t,c){let n=`firestore_mutations_${e}_${c}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}function ch(e,t){return`firestore_targets_${e}_${t}`}class nh{constructor(e,t,c,n){this.user=e,this.batchId=t,this.state=c,this.error=n}static Zi(e,t,c){const n=JSON.parse(c);let s,r="object"==typeof n&&-1!==["pending","acknowledged","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(s=new jn(n.error.code,n.error.message))),r?new nh(e,t,n.state,s):(Tn("SharedClientState",`Failed to parse mutation state for ID '${t}': ${c}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sh{constructor(e,t,c){this.targetId=e,this.state=t,this.error=c}static Zi(e,t){const c=JSON.parse(t);let n,s="object"==typeof c&&-1!==["not-current","current","rejected"].indexOf(c.state)&&(void 0===c.error||"object"==typeof c.error);return s&&c.error&&(s="string"==typeof c.error.message&&"string"==typeof c.error.code,s&&(n=new jn(c.error.code,c.error.message))),s?new sh(e,c.state,n):(Tn("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const c=JSON.parse(t);let n="object"==typeof c&&c.activeTargetIds instanceof Array,s=Ca();for(let r=0;n&&r<c.activeTargetIds.length;++r)n=js(c.activeTargetIds[r]),s=s.add(c.activeTargetIds[r]);return n?new rh(e,s):(Tn("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ih{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new ih(t.clientId,t.onlineState):(Tn("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ah{constructor(){this.activeTargetIds=Ca()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oh{constructor(e,t,c,n,s){this.window=e,this.Hs=t,this.persistenceKey=c,this.sr=n,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Ur(es),this.started=!1,this.cr=[];const r=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=eh(this.persistenceKey,this.sr),this.hr=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ur=this.ur.insert(this.sr,new ah),this.lr=new RegExp(`^firestore_clients_${r}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${r}_(\\d+)$`),this.wr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.mr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const c of e){if(c===this.sr)continue;const e=this.getItem(eh(this.persistenceKey,c));if(e){const t=rh.Zi(c,e);t&&(this.ur=this.ur.insert(t.clientId,t))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const e=this.yr(t);e&&this.pr(e)}for(const c of this.cr)this.rr(c);this.cr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach(((c,n)=>{n.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,c){this.Tr(e,t,c),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const c=this.storage.getItem(ch(this.persistenceKey,e));if(c){const n=sh.Zi(e,c);n&&(t=n.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ch(this.persistenceKey,e))}updateQueryState(e,t,c){this.Rr(e,t,c)}handleUserChange(e,t,c){t.forEach((e=>{this.Er(e)})),this.currentUser=e,c.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return xn("SharedClientState","READ",e,t),t}setItem(e,t){xn("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){xn("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(xn("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void Tn("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.lr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Vr(e,null)}{const e=this.Sr(t.key,t.newValue);if(e)return this.Vr(e.clientId,e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Nr(t.key,t.newValue);if(e)return this.kr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.yr(t.newValue);if(e)return this.pr(e)}}else if(t.key===this.hr){const e=function(e){let t=Ts.at;if(null!=e)try{const c=JSON.parse(e);Rn("number"==typeof c),t=c}catch(e){Tn("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Ts.at&&this.sequenceNumberHandler(e)}else if(t.key===this.mr){const e=this.Or(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Mr(e))))}}else this.cr.push(t)}))}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,c){const n=new nh(this.currentUser,e,t,c),s=th(this.persistenceKey,this.currentUser,e);this.setItem(s,n.tr())}Er(e){const t=th(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,c){const n=ch(this.persistenceKey,e),s=new sh(e,t,c);this.setItem(n,s.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const c=this.vr(e);return rh.Zi(c,t)}Dr(e,t){const c=this.dr.exec(e),n=Number(c[1]),s=void 0!==c[2]?c[2]:null;return nh.Zi(new Sn(s),n,t)}Nr(e,t){const c=this._r.exec(e),n=Number(c[1]);return sh.Zi(n,t)}yr(e){return ih.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);xn("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const c=t?this.ur.insert(e,t):this.ur.remove(e),n=this.Ir(this.ur),s=this.Ir(c),r=[],i=[];return s.forEach((e=>{n.has(e)||r.push(e)})),n.forEach((e=>{s.has(e)||i.push(e)})),this.syncEngine.Br(r,i).then((()=>{this.ur=c}))}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=Ca();return e.forEach(((e,c)=>{t=t.unionWith(c.activeTargetIds)})),t}}class lh{constructor(){this.Lr=new ah,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,c){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,c){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ah,Promise.resolve()}handleUserChange(e,t,c){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){xn("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){xn("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,c,n,s){const r=this.ho(e,t);xn("RestConnection","Sending: ",r,c);const i={};return this.lo(i,n,s),this.fo(e,r,i,c).then((e=>(xn("RestConnection","Received: ",e),e)),(t=>{throw On("RestConnection",`${e} failed with error: `,t,"url: ",r,"request:",c),t}))}_o(e,t,c,n,s,r){return this.ao(e,t,c,n,s)}lo(e,t,c){e["X-Goog-Api-Client"]="gl-js/ fire/"+_n,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,c)=>e[c]=t)),c&&c.headers.forEach(((t,c)=>e[c]=t))}ho(e,t){const c=fh[e];return`${this.oo}/v1/${t}:${c}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,c,n){return new Promise(((s,r)=>{const i=new wn;i.setWithCredentials(!0),i.listenOnce(Mn.COMPLETE,(()=>{try{switch(i.getLastErrorCode()){case Hn.NO_ERROR:const t=i.getResponseJson();xn("Connection","XHR received:",JSON.stringify(t)),s(t);break;case Hn.TIMEOUT:xn("Connection",'RPC "'+e+'" timed out'),r(new jn(qn.DEADLINE_EXCEEDED,"Request time out"));break;case Hn.HTTP_ERROR:const c=i.getStatus();if(xn("Connection",'RPC "'+e+'" failed with status:',c,"response text:",i.getResponseText()),c>0){let e=i.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(qn).indexOf(t)>=0?t:qn.UNKNOWN}(t.status);r(new jn(e,t.message))}else r(new jn(qn.UNKNOWN,"Server responded with status "+i.getStatus()))}else r(new jn(qn.UNAVAILABLE,"Connection failed."));break;default:Dn()}}finally{xn("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(n);i.send(t,"POST",a,c,15)}))}wo(e,t,c){const n=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=gn(),r=Vn(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new Ln({})),this.lo(i.initMessageHeaders,t,c),i.encodeInitMessageHeaders=!0;const a=n.join("");xn("Connection","Creating WebChannel: "+a,i);const o=s.createWebChannel(a,i);let l=!1,u=!1;const h=new dh({Hr:e=>{u?xn("Connection","Not sending because WebChannel is closed:",e):(l||(xn("Connection","Opening WebChannel transport."),o.open(),l=!0),xn("Connection","WebChannel sending:",e),o.send(e))},Jr:()=>o.close()}),f=(e,t,c)=>{e.listen(t,(e=>{try{c(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(o,bn.EventType.OPEN,(()=>{u||xn("Connection","WebChannel transport opened.")})),f(o,bn.EventType.CLOSE,(()=>{u||(u=!0,xn("Connection","WebChannel transport closed"),h.io())})),f(o,bn.EventType.ERROR,(e=>{u||(u=!0,On("Connection","WebChannel transport errored:",e),h.io(new jn(qn.UNAVAILABLE,"The operation could not be completed")))})),f(o,bn.EventType.MESSAGE,(e=>{var t;if(!u){const c=e.data[0];Rn(!!c);const n=c,s=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(s){xn("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=ra[e];if(void 0!==t)return oa(t)}(e),c=s.message;void 0===t&&(t=qn.INTERNAL,c="Unknown error status: "+e+" with message "+s.message),u=!0,h.io(new jn(t,c)),o.close()}else xn("Connection","WebChannel received:",c),h.ro(c)}})),f(r,Cn.STAT_EVENT,(e=>{e.stat===yn.PROXY?xn("Connection","Detected buffering proxy"):e.stat===yn.NOPROXY&&xn("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(){return"undefined"!=typeof window?window:null}function zh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(e){return new Oa(e,!0)}class gh{constructor(e,t,c=1e3,n=1.5,s=6e4){this.Hs=e,this.timerId=t,this.mo=c,this.yo=n,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),c=Math.max(0,Date.now()-this.Eo),n=Math.max(0,t-c);n>0&&xn("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${c} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,n,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t,c,n,s,r,i,a){this.Hs=e,this.vo=c,this.Vo=n,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=i,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new gh(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===qn.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===qn.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,c])=>{this.So===t&&this.Go(e,c)}),(t=>{e((()=>{const e=new jn(qn.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const c=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{c((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{c((()=>this.Qo(e)))})),this.stream.onMessage((e=>{c((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return xn("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(xn("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Hh extends Vh{constructor(e,t,c,n,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,c,n,r),this.yt=s}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=Ya(this.yt,e),c=function(e){if(!("targetChange"in e))return ss.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ss.min():t.readTime?Pa(t.readTime):ss.min()}(e);return this.listener.Wo(t,c)}zo(e){const t={};t.database=Ka(this.yt),t.addTarget=function(e,t){let c;const n=t.target;return c=ni(n)?{documents:to(e,n)}:{query:co(e,n)},c.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?c.resumeToken=Da(e,t.resumeToken):t.snapshotVersion.compareTo(ss.min())>0&&(c.readTime=Na(e,t.snapshotVersion.toTimestamp())),c}(this.yt,e);const c=so(this.yt,e);c&&(t.labels=c),this.Bo(t)}Ho(e){const t={};t.database=Ka(this.yt),t.removeTarget=e,this.Bo(t)}}class Mh extends Vh{constructor(e,t,c,n,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,c,n,r),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Rn(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=eo(e.writeResults,e.commitTime),c=Pa(e.commitTime);return this.listener.Zo(c,t)}return Rn(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ka(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Ja(this.yt,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends class{}{constructor(e,t,c,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=c,this.yt=n,this.nu=!1}su(){if(this.nu)throw new jn(qn.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,c){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([n,s])=>this.connection.ao(e,t,c,n,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===qn.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jn(qn.UNKNOWN,e.toString())}))}_o(e,t,c,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection._o(e,t,c,s,r,n))).catch((e=>{throw"FirebaseError"===e.name?(e.code===qn.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jn(qn.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class yh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Tn(t),this.ou=!1):xn("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t,c,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=c,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur((e=>{c.enqueueAndForget((async()=>{xh(this)&&(xn("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Fn(e);t._u.add(4),await wh(t),t.gu.set("Unknown"),t._u.delete(4),await bh(t)}(this))}))})),this.gu=new yh(c,n)}}async function bh(e){if(xh(e))for(const t of e.wu)await t(!0)}async function wh(e){for(const t of e.wu)await t(!1)}function kh(e,t){const c=Fn(e);c.du.has(t.targetId)||(c.du.set(t.targetId,t),Eh(c)?Ah(c):Yh(c).ko()&&_h(c,t))}function Sh(e,t){const c=Fn(e),n=Yh(c);c.du.delete(t),n.ko()&&Ih(c,t),0===c.du.size&&(n.ko()?n.Fo():xh(c)&&c.gu.set("Unknown"))}function _h(e,t){e.yu.Ot(t.targetId),Yh(e).zo(t)}function Ih(e,t){e.yu.Ot(t),Yh(e).Ho(t)}function Ah(e){e.yu=new _a({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),Yh(e).start(),e.gu.uu()}function Eh(e){return xh(e)&&!Yh(e).No()&&e.du.size>0}function xh(e){return 0===Fn(e)._u.size}function Th(e){e.yu=void 0}async function Oh(e){e.du.forEach(((t,c)=>{_h(e,t)}))}async function Nh(e,t){Th(e),Eh(e)?(e.gu.hu(t),Ah(e)):e.gu.set("Unknown")}async function Dh(e,t,c){if(e.gu.set("Online"),t instanceof ka&&2===t.state&&t.cause)try{await async function(e,t){const c=t.cause;for(const n of t.targetIds)e.du.has(n)&&(await e.remoteSyncer.rejectListen(n,c),e.du.delete(n),e.yu.removeTarget(n))}(e,t)}catch(c){xn("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),c),await Rh(e,c)}else if(t instanceof ba?e.yu.Kt(t):t instanceof wa?e.yu.Jt(t):e.yu.jt(t),!c.isEqual(ss.min()))try{const t=await ju(e.localStore);c.compareTo(t)>=0&&await function(e,t){const c=e.yu.Zt(t);return c.targetChanges.forEach(((c,n)=>{if(c.resumeToken.approximateByteSize()>0){const s=e.du.get(n);s&&e.du.set(n,s.withResumeToken(c.resumeToken,t))}})),c.targetMismatches.forEach((t=>{const c=e.du.get(t);if(!c)return;e.du.set(t,c.withResumeToken(Bs.EMPTY_BYTE_STRING,c.snapshotVersion)),Ih(e,t);const n=new Go(c.target,t,1,c.sequenceNumber);_h(e,n)})),e.remoteSyncer.applyRemoteEvent(c)}(e,c)}catch(t){xn("RemoteStore","Failed to raise snapshot:",t),await Rh(e,t)}}async function Rh(e,t,c){if(!ks(t))throw t;e._u.add(1),await wh(e),e.gu.set("Offline"),c||(c=()=>ju(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{xn("RemoteStore","Retrying IndexedDB access"),await c(),e._u.delete(1),await bh(e)}))}function Ph(e,t){return t().catch((c=>Rh(e,c,t)))}async function Fh(e){const t=Fn(e),c=Jh(t);let n=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;qh(t);)try{const e=await $u(t.localStore,n);if(null===e){0===t.fu.length&&c.Fo();break}n=e.batchId,jh(t,e)}catch(e){await Rh(t,e)}Uh(t)&&Bh(t)}function qh(e){return xh(e)&&e.fu.length<10}function jh(e,t){e.fu.push(t);const c=Jh(e);c.ko()&&c.Yo&&c.Xo(t.mutations)}function Uh(e){return xh(e)&&!Jh(e).No()&&e.fu.length>0}function Bh(e){Jh(e).start()}async function $h(e){Jh(e).eu()}async function Kh(e){const t=Jh(e);for(const c of e.fu)t.Xo(c.mutations)}async function Gh(e,t,c){const n=e.fu.shift(),s=$o.from(n,t,c);await Ph(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Fh(e)}async function Wh(e,t){t&&Jh(e).Yo&&await async function(e,t){if(c=t.code,aa(c)&&c!==qn.ABORTED){const c=e.fu.shift();Jh(e).Mo(),await Ph(e,(()=>e.remoteSyncer.rejectFailedWrite(c.batchId,t))),await Fh(e)}var c}(e,t),Uh(e)&&Bh(e)}async function Zh(e,t){const c=Fn(e);c.asyncQueue.verifyOperationInProgress(),xn("RemoteStore","RemoteStore received new credentials");const n=xh(c);c._u.add(3),await wh(c),n&&c.gu.set("Unknown"),await c.remoteSyncer.handleCredentialChange(t),c._u.delete(3),await bh(c)}async function Qh(e,t){const c=Fn(e);t?(c._u.delete(2),await bh(c)):t||(c._u.add(2),await wh(c),c.gu.set("Unknown"))}function Yh(e){return e.pu||(e.pu=function(e,t,c){const n=Fn(e);return n.su(),new Hh(t,n.connection,n.authCredentials,n.appCheckCredentials,n.yt,c)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Oh.bind(null,e),Zr:Nh.bind(null,e),Wo:Dh.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Eh(e)?Ah(e):e.gu.set("Unknown")):(await e.pu.stop(),Th(e))}))),e.pu}function Jh(e){return e.Iu||(e.Iu=function(e,t,c){const n=Fn(e);return n.su(),new Mh(t,n.connection,n.authCredentials,n.appCheckCredentials,n.yt,c)}(e.datastore,e.asyncQueue,{Yr:$h.bind(null,e),Zr:Wh.bind(null,e),tu:Kh.bind(null,e),Zo:Gh.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await Fh(e)):(await e.Iu.stop(),e.fu.length>0&&(xn("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Xh{constructor(e,t,c,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=c,this.op=n,this.removalCallback=s,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,c,n,s){const r=Date.now()+c,i=new Xh(e,t,r,n,s);return i.start(c),i}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jn(qn.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ef(e,t){if(Tn("AsyncQueue",`${t}: ${e}`),ks(e))return new jn(qn.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.comparator=e?(t,c)=>e(t,c)||ls.comparator(t.key,c.key):(e,t)=>ls.comparator(e.key,t.key),this.keyedMap=da(),this.sortedSet=new Ur(this.comparator)}static emptySet(e){return new tf(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,c)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof tf))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),c=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=c.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const c=new tf;return c.comparator=this.comparator,c.keyedMap=e,c.sortedSet=t,c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.Tu=new Ur(ls.comparator)}track(e){const t=e.doc.key,c=this.Tu.get(t);c?0!==e.type&&3===c.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==c.type?this.Tu=this.Tu.insert(t,{type:c.type,doc:e.doc}):2===e.type&&2===c.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===c.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===c.type?this.Tu=this.Tu.remove(t):1===e.type&&2===c.type?this.Tu=this.Tu.insert(t,{type:1,doc:c.doc}):0===e.type&&1===c.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Dn():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,c)=>{e.push(c)})),e}}class nf{constructor(e,t,c,n,s,r,i,a,o){this.query=e,this.docs=t,this.oldDocs=c,this.docChanges=n,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=i,this.excludesMetadataChanges=a,this.hasCachedResults=o}static fromInitialDocuments(e,t,c,n,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new nf(e,t,tf.emptySet(t),r,c,n,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,c=e.docChanges;if(t.length!==c.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==c[n].type||!t[n].doc.isEqual(c[n].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.Au=void 0,this.listeners=[]}}class rf{constructor(){this.queries=new la((e=>Vi(e)),gi),this.onlineState="Unknown",this.Ru=new Set}}async function af(e,t){const c=Fn(e),n=t.query;let s=!1,r=c.queries.get(n);if(r||(s=!0,r=new sf),s)try{r.Au=await c.onListen(n)}catch(e){const c=ef(e,`Initialization of query '${Hi(t.query)}' failed`);return void t.onError(c)}c.queries.set(n,r),r.listeners.push(t),t.bu(c.onlineState),r.Au&&t.Pu(r.Au)&&hf(c)}async function of(e,t){const c=Fn(e),n=t.query;let s=!1;const r=c.queries.get(n);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return c.queries.delete(n),c.onUnlisten(n)}function lf(e,t){const c=Fn(e);let n=!1;for(const s of t){const e=s.query,t=c.queries.get(e);if(t){for(const e of t.listeners)e.Pu(s)&&(n=!0);t.Au=s}}n&&hf(c)}function uf(e,t,c){const n=Fn(e),s=n.queries.get(t);if(s)for(const r of s.listeners)r.onError(c);n.queries.delete(t)}function hf(e){e.Ru.forEach((e=>{e.next()}))}class ff{constructor(e,t,c){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=c||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const c of e.docChanges)3!==c.type&&t.push(c);e=new nf(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const c="Offline"!==t;return(!this.options.Nu||!c)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=nf.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.yt=e}Ji(e){return Ua(this.yt,e)}Yi(e){return e.metadata.exists?Za(this.yt,e.document,!1):Jr.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Pa(e)}}class pf{constructor(e,t,c){this.Mu=e,this.localStore=t,this.yt=c,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=zf(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const c=is.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(c.get(c.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,c=new mf(this.yt);for(const n of e)if(n.metadata.queries){const e=c.Ji(n.metadata.name);for(const c of n.metadata.queries){const n=(t.get(c)||Ha()).add(e);t.set(c,n)}}return t}async complete(){const e=await Ju(this.localStore,new mf(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(const c of this.queries)await Xu(this.localStore,c,t.get(c.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function zf(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.key=e}}class gf{constructor(e){this.key=e}}class Vf{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Ha(),this.mutatedKeys=Ha(),this.Gu=yi(e),this.Qu=new tf(this.Gu)}get ju(){return this.qu}Wu(e,t){const c=t?t.zu:new cf,n=t?t.Qu:this.Qu;let s=t?t.mutatedKeys:this.mutatedKeys,r=n,i=!1;const a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,o="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal(((e,t)=>{const l=n.get(e),u=Mi(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),f=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let d=!1;l&&u?l.data.isEqual(u.data)?h!==f&&(c.track({type:3,doc:u}),d=!0):this.Hu(l,u)||(c.track({type:2,doc:u}),d=!0,(a&&this.Gu(u,a)>0||o&&this.Gu(u,o)<0)&&(i=!0)):!l&&u?(c.track({type:0,doc:u}),d=!0):l&&!u&&(c.track({type:1,doc:l}),d=!0,(a||o)&&(i=!0)),d&&(u?(r=r.add(u),s=f?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),c.track({type:1,doc:e})}return{Qu:r,zu:c,$i:i,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,c){const n=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort(((e,t)=>function(e,t){const c=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Dn()}};return c(e)-c(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(c);const r=t?this.Yu():[],i=0===this.Ku.size&&this.current?1:0,a=i!==this.Uu;return this.Uu=i,0!==s.length||a?{snapshot:new nf(this.query,e.Qu,n,s,e.mutatedKeys,0===i,a,!1,!!c&&c.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new cf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ha(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new gf(e))})),this.Ku.forEach((c=>{e.has(c)||t.push(new vf(c))})),t}tc(e){this.qu=e.Hi,this.Ku=Ha();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return nf.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Hf{constructor(e,t,c){this.query=e,this.targetId=t,this.view=c}}class Mf{constructor(e){this.key=e,this.nc=!1}}class Cf{constructor(e,t,c,n,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=c,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new la((e=>Vi(e)),gi),this.rc=new Map,this.oc=new Set,this.uc=new Ur(ls.comparator),this.cc=new Map,this.ac=new Hu,this.hc={},this.lc=new Map,this.fc=Ql.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function yf(e,t){const c=Jf(e);let n,s;const r=c.ic.get(t);if(r)n=r.targetId,c.sharedClientState.addLocalQueryTarget(n),s=r.view.ec();else{const e=await Ku(c.localStore,pi(t));c.isPrimaryClient&&kh(c.remoteStore,e);const r=c.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,s=await Lf(c,t,n,"current"===r,e.resumeToken)}return s}async function Lf(e,t,c,n,s){e._c=(t,c,n)=>async function(e,t,c,n){let s=t.view.Wu(c);s.$i&&(s=await Wu(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,s))));const r=n&&n.targetChanges.get(t.targetId),i=t.view.applyChanges(s,e.isPrimaryClient,r);return Df(e,t.targetId,i.Xu),i.snapshot}(e,t,c,n);const r=await Wu(e.localStore,t,!0),i=new Vf(t,r.Hi),a=i.Wu(r.documents),o=La.createSynthesizedTargetChangeForCurrentChange(c,n&&"Offline"!==e.onlineState,s),l=i.applyChanges(a,e.isPrimaryClient,o);Df(e,c,l.Xu);const u=new Hf(t,c,i);return e.ic.set(t,u),e.rc.has(c)?e.rc.get(c).push(t):e.rc.set(c,[t]),l.snapshot}async function bf(e,t){const c=Fn(e),n=c.ic.get(t),s=c.rc.get(n.targetId);if(s.length>1)return c.rc.set(n.targetId,s.filter((e=>!gi(e,t)))),void c.ic.delete(t);c.isPrimaryClient?(c.sharedClientState.removeLocalQueryTarget(n.targetId),c.sharedClientState.isActiveQueryTarget(n.targetId)||await Gu(c.localStore,n.targetId,!1).then((()=>{c.sharedClientState.clearQueryState(n.targetId),Sh(c.remoteStore,n.targetId),Of(c,n.targetId)})).catch(Ms)):(Of(c,n.targetId),await Gu(c.localStore,n.targetId,!0))}async function wf(e,t,c){const n=Xf(e);try{const e=await function(e,t){const c=Fn(e),n=ns.now(),s=t.reduce(((e,t)=>e.add(t.key)),Ha());let r,i;return c.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=ha(),o=Ha();return c.Gi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(o=o.add(e))}))})).next((()=>c.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const i=[];for(const e of t){const t=Zi(e,r.get(e.key).overlayedDocument);null!=t&&i.push(new Ji(e.key,t,Yr(t.value.mapValue),Ui.exists(!0)))}return c.mutationQueue.addMutationBatch(e,n,i,t)})).next((t=>{i=t;const n=t.applyToLocalDocumentSet(r,o);return c.documentOverlayCache.saveOverlays(e,t.batchId,n)}))})).then((()=>({batchId:i.batchId,changes:ma(r)})))}(n.localStore,t);n.sharedClientState.addPendingMutation(e.batchId),function(e,t,c){let n=e.hc[e.currentUser.toKey()];n||(n=new Ur(es)),n=n.insert(t,c),e.hc[e.currentUser.toKey()]=n}(n,e.batchId,c),await Ff(n,e.changes),await Fh(n.remoteStore)}catch(e){const t=ef(e,"Failed to persist write");c.reject(t)}}async function kf(e,t){const c=Fn(e);try{const e=await Uu(c.localStore,t);t.targetChanges.forEach(((e,t)=>{const n=c.cc.get(t);n&&(Rn(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.nc=!0:e.modifiedDocuments.size>0?Rn(n.nc):e.removedDocuments.size>0&&(Rn(n.nc),n.nc=!1))})),await Ff(c,e,t)}catch(e){await Ms(e)}}function Sf(e,t,c){const n=Fn(e);if(n.isPrimaryClient&&0===c||!n.isPrimaryClient&&1===c){const e=[];n.ic.forEach(((c,n)=>{const s=n.view.bu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const c=Fn(e);c.onlineState=t;let n=!1;c.queries.forEach(((e,c)=>{for(const s of c.listeners)s.bu(t)&&(n=!0)})),n&&hf(c)}(n.eventManager,t),e.length&&n.sc.Wo(e),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function _f(e,t,c){const n=Fn(e);n.sharedClientState.updateQueryState(t,"rejected",c);const s=n.cc.get(t),r=s&&s.key;if(r){let e=new Ur(ls.comparator);e=e.insert(r,Jr.newNoDocument(r,ss.min()));const c=Ha().add(r),s=new ya(ss.min(),new Map,new Kr(es),e,c);await kf(n,s),n.uc=n.uc.remove(r),n.cc.delete(t),Pf(n)}else await Gu(n.localStore,t,!1).then((()=>Of(n,t,c))).catch(Ms)}async function If(e,t){const c=Fn(e),n=t.batch.batchId;try{const e=await qu(c.localStore,t);Tf(c,n,null),xf(c,n),c.sharedClientState.updateMutationState(n,"acknowledged"),await Ff(c,e)}catch(e){await Ms(e)}}async function Af(e,t,c){const n=Fn(e);try{const e=await function(e,t){const c=Fn(e);return c.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let n;return c.mutationQueue.lookupMutationBatch(e,t).next((t=>(Rn(null!==t),n=t.keys(),c.mutationQueue.removeMutationBatch(e,t)))).next((()=>c.mutationQueue.performConsistencyCheck(e))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(e,n,t))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n))).next((()=>c.localDocuments.getDocuments(e,n)))}))}(n.localStore,t);Tf(n,t,c),xf(n,t),n.sharedClientState.updateMutationState(t,"rejected",c),await Ff(n,e)}catch(c){await Ms(c)}}async function Ef(e,t){const c=Fn(e);xh(c.remoteStore)||xn("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Fn(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(c.localStore);if(-1===e)return void t.resolve();const n=c.lc.get(e)||[];n.push(t),c.lc.set(e,n)}catch(e){const c=ef(e,"Initialization of waitForPendingWrites() operation failed");t.reject(c)}}function xf(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Tf(e,t,c){const n=Fn(e);let s=n.hc[n.currentUser.toKey()];if(s){const e=s.get(t);e&&(c?e.reject(c):e.resolve(),s=s.remove(t)),n.hc[n.currentUser.toKey()]=s}}function Of(e,t,c=null){e.sharedClientState.removeLocalQueryTarget(t);for(const n of e.rc.get(t))e.ic.delete(n),c&&e.sc.wc(n,c);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||Nf(e,t)}))}function Nf(e,t){e.oc.delete(t.path.canonicalString());const c=e.uc.get(t);null!==c&&(Sh(e.remoteStore,c),e.uc=e.uc.remove(t),e.cc.delete(c),Pf(e))}function Df(e,t,c){for(const n of c)n instanceof vf?(e.ac.addReference(n.key,t),Rf(e,n)):n instanceof gf?(xn("SyncEngine","Document no longer in limbo: "+n.key),e.ac.removeReference(n.key,t),e.ac.containsKey(n.key)||Nf(e,n.key)):Dn()}function Rf(e,t){const c=t.key,n=c.path.canonicalString();e.uc.get(c)||e.oc.has(n)||(xn("SyncEngine","New document in limbo: "+c),e.oc.add(n),Pf(e))}function Pf(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const c=new ls(is.fromString(t)),n=e.fc.next();e.cc.set(n,new Mf(c)),e.uc=e.uc.insert(c,n),kh(e.remoteStore,new Go(pi(li(c.path)),n,2,Ts.at))}}async function Ff(e,t,c){const n=Fn(e),s=[],r=[],i=[];n.ic.isEmpty()||(n.ic.forEach(((e,a)=>{i.push(n._c(a,t,c).then((e=>{if((e||c)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=Nu.Ci(a.targetId,e);r.push(t)}})))})),await Promise.all(i),n.sc.Wo(s),await async function(e,t){const c=Fn(e);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Cs.forEach(t,(t=>Cs.forEach(t.Si,(n=>c.persistence.referenceDelegate.addReference(e,t.targetId,n))).next((()=>Cs.forEach(t.Di,(n=>c.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))))))}catch(e){if(!ks(e))throw e;xn("LocalStore","Failed to update sequence numbers: "+e)}for(const n of t){const e=n.targetId;if(!n.fromCache){const t=c.qi.get(e),n=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(n);c.qi=c.qi.insert(e,s)}}}(n.localStore,r))}async function qf(e,t){const c=Fn(e);if(!c.currentUser.isEqual(t)){xn("SyncEngine","User change. New user:",t.toKey());const e=await Fu(c.localStore,t);c.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new jn(qn.CANCELLED,t))}))})),e.lc.clear()}(c,"'waitForPendingWrites' promise is rejected due to a user change."),c.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ff(c,e.ji)}}function jf(e,t){const c=Fn(e),n=c.cc.get(t);if(n&&n.nc)return Ha().add(n.key);{let e=Ha();const n=c.rc.get(t);if(!n)return e;for(const t of n){const n=c.ic.get(t);e=e.unionWith(n.view.ju)}return e}}async function Uf(e,t){const c=Fn(e),n=await Wu(c.localStore,t.query,!0),s=t.view.tc(n);return c.isPrimaryClient&&Df(c,t.targetId,s.Xu),s}async function Bf(e,t){const c=Fn(e);return Qu(c.localStore,t).then((e=>Ff(c,e)))}async function $f(e,t,c,n){const s=Fn(e),r=await function(e,t){const c=Fn(e),n=Fn(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",(e=>n.Tn(e,t).next((t=>t?c.localDocuments.getDocuments(e,t):Cs.resolve(null)))))}(s.localStore,t);null!==r?("pending"===c?await Fh(s.remoteStore):"acknowledged"===c||"rejected"===c?(Tf(s,t,n||null),xf(s,t),function(e,t){Fn(Fn(e).mutationQueue).An(t)}(s.localStore,t)):Dn(),await Ff(s,r)):xn("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Kf(e,t){const c=Fn(e);if(Jf(c),Xf(c),!0===t&&!0!==c.dc){const e=c.sharedClientState.getAllActiveQueryTargets(),t=await Gf(c,e.toArray());c.dc=!0,await Qh(c.remoteStore,!0);for(const n of t)kh(c.remoteStore,n)}else if(!1===t&&!1!==c.dc){const e=[];let t=Promise.resolve();c.rc.forEach(((n,s)=>{c.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then((()=>(Of(c,s),Gu(c.localStore,s,!0)))),Sh(c.remoteStore,s)})),await t,await Gf(c,e),function(e){const t=Fn(e);t.cc.forEach(((e,c)=>{Sh(t.remoteStore,c)})),t.ac.fs(),t.cc=new Map,t.uc=new Ur(ls.comparator)}(c),c.dc=!1,await Qh(c.remoteStore,!1)}}async function Gf(e,t,c){const n=Fn(e),s=[],r=[];for(const i of t){let e;const t=n.rc.get(i);if(t&&0!==t.length){e=await Ku(n.localStore,pi(t[0]));for(const e of t){const t=n.ic.get(e),c=await Uf(n,t);c.snapshot&&r.push(c.snapshot)}}else{const t=await Zu(n.localStore,i);e=await Ku(n.localStore,t),await Lf(n,Wf(t),i,!1,e.resumeToken)}s.push(e)}return n.sc.Wo(r),s}function Wf(e){return oi(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Zf(e){const t=Fn(e);return Fn(Fn(t.localStore).persistence).vi()}async function Qf(e,t,c,n){const s=Fn(e);if(s.dc)return void xn("SyncEngine","Ignoring unexpected query state notification.");const r=s.rc.get(t);if(r&&r.length>0)switch(c){case"current":case"not-current":{const e=await Qu(s.localStore,Ci(r[0])),n=ya.createSynthesizedRemoteEventForCurrentChange(t,"current"===c,Bs.EMPTY_BYTE_STRING);await Ff(s,e,n);break}case"rejected":await Gu(s.localStore,t,!0),Of(s,t,n);break;default:Dn()}}async function Yf(e,t,c){const n=Jf(e);if(n.dc){for(const e of t){if(n.rc.has(e)){xn("SyncEngine","Adding an already active target "+e);continue}const t=await Zu(n.localStore,e),c=await Ku(n.localStore,t);await Lf(n,Wf(t),c.targetId,!1,c.resumeToken),kh(n.remoteStore,c)}for(const e of c)n.rc.has(e)&&await Gu(n.localStore,e,!1).then((()=>{Sh(n.remoteStore,e),Of(n,e)})).catch(Ms)}}function Jf(e){const t=Fn(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=kf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_f.bind(null,t),t.sc.Wo=lf.bind(null,t.eventManager),t.sc.wc=uf.bind(null,t.eventManager),t}function Xf(e){const t=Fn(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=If.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Af.bind(null,t),t}function ed(e,t,c){const n=Fn(e);(async function(e,t,c){try{const n=await t.getMetadata();if(await function(e,t){const c=Fn(e),n=Pa(t.createTime);return c.persistence.runTransaction("hasNewerBundle","readonly",(e=>c.Ns.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(n)>=0))}(e.localStore,n))return await t.close(),c._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(n)),Promise.resolve(new Set);c._updateProgress(zf(n));const s=new pf(n,e.localStore,t.yt);let r=await t.mc();for(;r;){const e=await s.Fu(r);e&&c._updateProgress(e),r=await t.mc()}const i=await s.complete();return await Ff(e,i.Lu,void 0),await function(e,t){const c=Fn(e);return c.persistence.runTransaction("Save bundle","readwrite",(e=>c.Ns.saveBundleMetadata(e,t)))}(e.localStore,n),c._completeWith(i.progress),Promise.resolve(i.Bu)}catch(e){return On("SyncEngine",`Loading bundle failed with ${e}`),c._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(n,t,c).then((e=>{n.sharedClientState.notifyBundleLoaded(e)}))}class td{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=vh(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return Pu(this.persistence,new Du,e.initialUser,this.yt)}yc(e){return new wu(Su.Bs,this.yt)}gc(e){return new lh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cd extends td{constructor(e,t,c){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=c,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Xf(this.Ac.syncEngine),await Fh(this.Ac.remoteStore),await this.persistence.li((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}Ic(e){return Pu(this.persistence,new Du,e.initialUser,this.yt)}Tc(e,t){const c=this.persistence.referenceDelegate.garbageCollector;return new nu(c,e.asyncQueue,t)}Ec(e,t){const c=new xs(t,this.persistence);return new Es(e.asyncQueue,c)}yc(e){const t=Ou(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),c=void 0!==this.cacheSizeBytes?jl.withCacheSize(this.cacheSizeBytes):jl.DEFAULT;return new Eu(this.synchronizeTabs,t,e.clientId,c,e.asyncQueue,ph(),zh(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new lh}}class nd extends cd{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof oh&&(this.sharedClientState.syncEngine={Fr:$f.bind(null,t),$r:Qf.bind(null,t),Br:Yf.bind(null,t),vi:Zf.bind(null,t),Mr:Bf.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li((async e=>{await Kf(this.Ac.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}gc(e){const t=ph();if(!oh.C(t))throw new jn(qn.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const c=Ou(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new oh(t,e.asyncQueue,c,e.clientId,e.initialUser)}}class sd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Sf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=qf.bind(null,this.syncEngine),await Qh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rf}createDatastore(e){const t=vh(e.databaseInfo.databaseId),c=(n=e.databaseInfo,new mh(n));var n;return function(e,t,c,n){return new Ch(e,t,c,n)}(e.authCredentials,e.appCheckCredentials,c,t)}createRemoteStore(e){return t=this.localStore,c=this.datastore,n=e.asyncQueue,s=e=>Sf(this.syncEngine,e,0),r=hh.C()?new hh:new uh,new Lh(t,c,n,s,r);var t,c,n,s,r}createSyncEngine(e,t){return function(e,t,c,n,s,r,i){const a=new Cf(e,t,c,n,s,r);return i&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Fn(e);xn("RemoteStore","RemoteStore shutting down."),t._u.add(5),await wh(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(e,t,c){if(!c)throw new jn(qn.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function id(e,t,c,n){if(!0===t&&!0===n)throw new jn(qn.INVALID_ARGUMENT,`${e} and ${c} cannot be used together.`)}function ad(e){if(!ls.isDocumentKey(e))throw new jn(qn.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function od(e){if(ls.isDocumentKey(e))throw new jn(qn.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ld(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Dn()}function ud(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new jn(qn.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const c=ld(e);throw new jn(qn.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${c}`)}}return e}function hd(e,t){if(t<=0)throw new jn(qn.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Map;class dd{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new jn(qn.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new jn(qn.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,id("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t,c,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=c,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new jn(qn.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new jn(qn.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dd(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new $n;switch(e.type){case"gapi":const t=e.client;return new Zn(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new jn(qn.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=fd.get(e);t&&(xn("ComponentProvider","Removing Datastore"),fd.delete(e),t.terminate())}(this),Promise.resolve()}}function pd(e,t,c,n={}){var s;const r=(e=ud(e,md))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&On("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${c}`,ssl:!1})),n.mockUserToken){let t,c;if("string"==typeof n.mockUserToken)t=n.mockUserToken,c=Sn.MOCK_USER;else{t=(0,a.Sg)(n.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=n.mockUserToken.sub||n.mockUserToken.user_id;if(!r)throw new jn(qn.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Sn(r)}e._authCredentials=new Kn(new Bn(t,c))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,c){this.converter=t,this._key=c,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gd(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zd(this.firestore,e,this._key)}}class vd{constructor(e,t,c){this.converter=t,this._query=c,this.type="query",this.firestore=e}withConverter(e){return new vd(this.firestore,e,this._query)}}class gd extends vd{constructor(e,t,c){super(e,t,li(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zd(this.firestore,null,new ls(e))}withConverter(e){return new gd(this.firestore,e,this._path)}}function Vd(e,t,...c){if(e=(0,a.m9)(e),rd("collection","path",t),e instanceof md){const n=is.fromString(t,...c);return od(n),new gd(e,null,n)}{if(!(e instanceof zd||e instanceof gd))throw new jn(qn.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(is.fromString(t,...c));return od(n),new gd(e.firestore,null,n)}}function Hd(e,t){if(e=ud(e,md),rd("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new jn(qn.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new vd(e,null,function(e){return new ai(is.emptyPath(),e)}(t))}function Md(e,t,...c){if(e=(0,a.m9)(e),1===arguments.length&&(t=Xn.R()),rd("doc","path",t),e instanceof md){const n=is.fromString(t,...c);return ad(n),new zd(e,null,new ls(n))}{if(!(e instanceof zd||e instanceof gd))throw new jn(qn.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(is.fromString(t,...c));return ad(n),new zd(e.firestore,e instanceof gd?e.converter:null,new ls(n))}}function Cd(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),(e instanceof zd||e instanceof gd)&&(t instanceof zd||t instanceof gd)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function yd(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),e instanceof vd&&t instanceof vd&&e.firestore===t.firestore&&gi(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function Ld(e,t=10240){let c=0;return{async read(){if(c<e.byteLength){const n={value:e.slice(c,c+t),done:!1};return c+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new Un,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then((e=>{e&&e.Ou()?this.metadata.resolve(e.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.ku)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(null===e)return null;const t=this.vc.decode(e),c=Number(t);isNaN(c)&&this.Dc(`length string (${t}) is not valid number`);const n=await this.Cc(c);return new df(JSON.parse(n),e.length+c)}xc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Sc(){for(;this.xc()<0;)if(await this.Nc())break;if(0===this.buffer.length)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kd{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new jn(qn.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const c=Fn(e),n=Ka(c.yt)+"/documents",s={documents:t.map((e=>ja(c.yt,e)))},r=await c._o("BatchGetDocuments",n,s,t.length),i=new Map;r.forEach((e=>{const t=Qa(c.yt,e);i.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=i.get(e.toString());Rn(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new ca(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const c=ls.fromPath(t);this.mutations.push(new na(c,this.precondition(c)))})),await async function(e,t){const c=Fn(e),n=Ka(c.yt)+"/documents",s={writes:t.map((e=>Ja(c.yt,e)))};await c.ao("Commit",n,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Dn();t=ss.min()}const c=this.readVersions.get(e.key.toString());if(c){if(!t.isEqual(c))throw new jn(qn.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ss.min())?Ui.exists(!1):Ui.updateTime(t):Ui.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ss.min()))throw new jn(qn.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ui.updateTime(t)}return Ui.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t,c,n,s){this.asyncQueue=e,this.datastore=t,this.options=c,this.updateFunction=n,this.deferred=s,this.kc=c.maxAttempts,this.xo=new gh(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro((async()=>{const e=new kd(this.datastore),t=this.Mc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Fc(e)}))))})).catch((e=>{this.Fc(e)}))}))}Mc(e){try{const t=this.updateFunction(e);return!Fs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Oc(),Promise.resolve())))):this.deferred.reject(e)}$c(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!aa(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,c,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=c,this.databaseInfo=n,this.user=Sn.UNAUTHENTICATED,this.clientId=Xn.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,(async e=>{xn("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(c,(e=>(xn("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jn(qn.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const c=ef(t,"Failed to shutdown persistence");e.reject(c)}})),e.promise}}async function Id(e,t){e.asyncQueue.verifyOperationInProgress(),xn("FirestoreClient","Initializing OfflineComponentProvider");const c=await e.getConfiguration();await t.initialize(c);let n=c.initialUser;e.setCredentialChangeListener((async e=>{n.isEqual(e)||(await Fu(t.localStore,e),n=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Ad(e,t){e.asyncQueue.verifyOperationInProgress();const c=await Ed(e);xn("FirestoreClient","Initializing OnlineComponentProvider");const n=await e.getConfiguration();await t.initialize(c,n),e.setCredentialChangeListener((e=>Zh(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,c)=>Zh(t.remoteStore,c))),e.onlineComponents=t}async function Ed(e){return e.offlineComponents||(xn("FirestoreClient","Using default OfflineComponentProvider"),await Id(e,new td)),e.offlineComponents}async function xd(e){return e.onlineComponents||(xn("FirestoreClient","Using default OnlineComponentProvider"),await Ad(e,new sd)),e.onlineComponents}function Td(e){return Ed(e).then((e=>e.persistence))}function Od(e){return Ed(e).then((e=>e.localStore))}function Nd(e){return xd(e).then((e=>e.remoteStore))}function Dd(e){return xd(e).then((e=>e.syncEngine))}function Rd(e){return xd(e).then((e=>e.datastore))}async function Pd(e){const t=await xd(e),c=t.eventManager;return c.onListen=yf.bind(null,t.syncEngine),c.onUnlisten=bf.bind(null,t.syncEngine),c}function Fd(e){return e.asyncQueue.enqueue((async()=>{const t=await Td(e),c=await Nd(e);return t.setNetworkEnabled(!0),function(e){const t=Fn(e);return t._u.delete(0),bh(t)}(c)}))}function qd(e){return e.asyncQueue.enqueue((async()=>{const t=await Td(e),c=await Nd(e);return t.setNetworkEnabled(!1),async function(e){const t=Fn(e);t._u.add(0),await wh(t),t.gu.set("Offline")}(c)}))}function jd(e,t){const c=new Un;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,c){try{const n=await function(e,t){const c=Fn(e);return c.persistence.runTransaction("read document","readonly",(e=>c.localDocuments.getDocument(e,t)))}(e,t);n.isFoundDocument()?c.resolve(n):n.isNoDocument()?c.resolve(null):c.reject(new jn(qn.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const n=ef(e,`Failed to get document '${t} from cache`);c.reject(n)}}(await Od(e),t,c))),c.promise}function Ud(e,t,c={}){const n=new Un;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,c,n,s){const r=new bd({next:r=>{t.enqueueAndForget((()=>of(e,i)));const a=r.docs.has(c);!a&&r.fromCache?s.reject(new jn(qn.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&n&&"server"===n.source?s.reject(new jn(qn.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),i=new ff(li(c.path),r,{includeMetadataChanges:!0,Nu:!0});return af(e,i)}(await Pd(e),e.asyncQueue,t,c,n))),n.promise}function Bd(e,t){const c=new Un;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,c){try{const n=await Wu(e,t,!0),s=new Vf(t,n.Hi),r=s.Wu(n.documents),i=s.applyChanges(r,!1);c.resolve(i.snapshot)}catch(e){const n=ef(e,`Failed to execute query '${t} against cache`);c.reject(n)}}(await Od(e),t,c))),c.promise}function $d(e,t,c={}){const n=new Un;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,c,n,s){const r=new bd({next:c=>{t.enqueueAndForget((()=>of(e,i))),c.fromCache&&"server"===n.source?s.reject(new jn(qn.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(c)},error:e=>s.reject(e)}),i=new ff(c,r,{includeMetadataChanges:!0,Nu:!0});return af(e,i)}(await Pd(e),e.asyncQueue,t,c,n))),n.promise}function Kd(e,t){const c=new bd(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Fn(e).Ru.add(t),t.next()}(await Pd(e),c))),()=>{c.bc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Fn(e).Ru.delete(t)}(await Pd(e),c)))}}function Gd(e,t,c,n){const s=function(e,t){let c;return c="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new wd(e,t)}(function(e,t){if(e instanceof Uint8Array)return Ld(e,t);if(e instanceof ArrayBuffer)return Ld(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(c,vh(t));e.asyncQueue.enqueueAndForget((async()=>{ed(await Dd(e),s,n)}))}function Wd(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const c=Fn(e);return c.persistence.runTransaction("Get named query","readonly",(e=>c.Ns.getNamedQuery(e,t)))}(await Od(e),t)))}class Zd{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new gh(this,"async_queue_retry"),this.Wc=()=>{const e=zh();e&&xn("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=zh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=zh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new Un;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(C){if(!ks(C))throw C;xn("AsyncQueue","Operation failed with retryable error: "+C)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Tn("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,c){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const n=Xh.createAndSchedule(this,e,t,c,(e=>this.Yc(e)));return this.Uc.push(n),n}zc(){this.Kc&&Dn()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function Qd(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const c=e;for(const n of t)if(n in c&&"function"==typeof c[n])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Yd{constructor(){this._progressObserver={},this._taskCompletionResolver=new Un,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,c){this._progressObserver={next:e,error:t,complete:c}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=-1;class Xd extends md{constructor(e,t,c,n){super(e,t,c,n),this.type="firestore",this._queue=new Zd,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||tm(this),this._firestoreClient.terminate()}}function em(e){return e._firestoreClient||tm(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function tm(e){var t;const c=e._freezeSettings(),n=function(e,t,c,n){return new Os(e,t,c,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,c);e._firestoreClient=new _d(e._authCredentials,e._appCheckCredentials,e._queue,n)}function cm(e,t){hm(e=ud(e,Xd));const c=em(e),n=e._freezeSettings(),s=new sd;return sm(c,s,new cd(s,n.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function nm(e){hm(e=ud(e,Xd));const t=em(e),c=e._freezeSettings(),n=new sd;return sm(t,n,new nd(n,c.cacheSizeBytes))}function sm(e,t,c){const n=new Un;return e.asyncQueue.enqueue((async()=>{try{await Id(e,c),await Ad(e,t),n.resolve()}catch(e){const c=e;if(!function(e){return"FirebaseError"===e.name?e.code===qn.FAILED_PRECONDITION||e.code===qn.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(c))throw c;On("Error enabling offline persistence. Falling back to persistence disabled: "+c),n.reject(c)}})).then((()=>n.promise))}function rm(e){if(e._initialized&&!e._terminated)throw new jn(qn.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Un;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Ls.C())return Promise.resolve();const t=e+"main";await Ls.delete(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ou(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function im(e){return function(e){const t=new Un;return e.asyncQueue.enqueueAndForget((async()=>Ef(await Dd(e),t))),t.promise}(em(e=ud(e,Xd)))}function am(e){return Fd(em(e=ud(e,Xd)))}function om(e){return qd(em(e=ud(e,Xd)))}function lm(e,t){const c=em(e=ud(e,Xd)),n=new Yd;return Gd(c,e._databaseId,t,n),n}function um(e,t){return Wd(em(e=ud(e,Xd)),t).then((t=>t?new vd(e,null,t.query):null))}function hm(e){if(e._initialized||e._terminated)throw new jn(qn.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fm(Bs.fromBase64String(e))}catch(e){throw new jn(qn.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new fm(Bs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new jn(qn.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new os(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mm{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new jn(qn.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new jn(qn.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return es(this._lat,e._lat)||es(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=/^__.*__$/;class vm{constructor(e,t,c){this.data=e,this.fieldMask=t,this.fieldTransforms=c}toMutation(e,t){return null!==this.fieldMask?new Ji(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yi(e,this.data,t,this.fieldTransforms)}}class gm{constructor(e,t,c){this.data=e,this.fieldMask=t,this.fieldTransforms=c}toMutation(e,t){return new Ji(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Vm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Dn()}}class Hm{constructor(e,t,c,n,s,r){this.settings=e,this.databaseId=t,this.yt=c,this.ignoreUndefinedProperties=n,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Hm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const c=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ia({path:c,oa:!1});return n.ua(e),n}ca(e){var t;const c=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ia({path:c,oa:!1});return n.na(),n}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Fm(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Vm(this.sa)&&zm.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Mm{constructor(e,t,c){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=c||vh(e)}da(e,t,c,n=!1){return new Hm({sa:e,methodName:t,fa:c,path:os.emptyPath(),oa:!1,la:n},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Cm(e){const t=e._freezeSettings(),c=vh(e._databaseId);return new Mm(e._databaseId,!!t.ignoreUndefinedProperties,c)}function ym(e,t,c,n,s,r={}){const i=e.da(r.merge||r.mergeFields?2:0,t,c,s);Nm("Data must be an object, but it was:",i,n);const a=Tm(n,i);let o,l;if(r.merge)o=new Zr(i.fieldMask),l=i.fieldTransforms;else if(r.mergeFields){const e=[];for(const n of r.mergeFields){const s=Dm(t,n,c);if(!i.contains(s))throw new jn(qn.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);qm(e,s)||e.push(s)}o=new Zr(e),l=i.fieldTransforms.filter((e=>o.covers(e.field)))}else o=null,l=i.fieldTransforms;return new vm(new Qr(a),o,l)}class Lm extends mm{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lm}}function bm(e,t,c){return new Hm({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:c},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class wm extends mm{_toFieldTransform(e){return new Fi(e.path,new Ei)}isEqual(e){return e instanceof wm}}class km extends mm{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=bm(this,e,!0),c=this._a.map((e=>xm(e,t))),n=new xi(c);return new Fi(e.path,n)}isEqual(e){return this===e}}class Sm extends mm{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=bm(this,e,!0),c=this._a.map((e=>xm(e,t))),n=new Oi(c);return new Fi(e.path,n)}isEqual(e){return this===e}}class _m extends mm{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new Di(e.yt,ki(e.yt,this.wa));return new Fi(e.path,t)}isEqual(e){return this===e}}function Im(e,t,c,n){const s=e.da(1,t,c);Nm("Data must be an object, but it was:",s,n);const r=[],i=Qr.empty();Rs(n,((e,n)=>{const o=Pm(t,e,c);n=(0,a.m9)(n);const l=s.ca(o);if(n instanceof Lm)r.push(o);else{const e=xm(n,l);null!=e&&(r.push(o),i.set(o,e))}}));const o=new Zr(r);return new gm(i,o,s.fieldTransforms)}function Am(e,t,c,n,s,r){const i=e.da(1,t,c),o=[Dm(t,n,c)],l=[s];if(r.length%2!=0)throw new jn(qn.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<r.length;a+=2)o.push(Dm(t,r[a])),l.push(r[a+1]);const u=[],h=Qr.empty();for(let d=o.length-1;d>=0;--d)if(!qm(u,o[d])){const e=o[d];let t=l[d];t=(0,a.m9)(t);const c=i.ca(e);if(t instanceof Lm)u.push(e);else{const n=xm(t,c);null!=n&&(u.push(e),h.set(e,n))}}const f=new Zr(u);return new gm(h,f,i.fieldTransforms)}function Em(e,t,c,n=!1){return xm(c,e.da(n?4:3,t))}function xm(e,t){if(Om(e=(0,a.m9)(e)))return Nm("Unsupported field value:",t,e),Tm(e,t);if(e instanceof mm)return function(e,t){if(!Vm(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const c=e._toFieldTransform(t);c&&t.fieldTransforms.push(c)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const c=[];let n=0;for(const s of e){let e=xm(s,t.aa(n));null==e&&(e={nullValue:"NULL_VALUE"}),c.push(e),n++}return{arrayValue:{values:c}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ki(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const c=ns.fromDate(e);return{timestampValue:Na(t.yt,c)}}if(e instanceof ns){const c=new ns(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Na(t.yt,c)}}if(e instanceof pm)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof fm)return{bytesValue:Da(t.yt,e._byteString)};if(e instanceof zd){const c=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(c))throw t.ha(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Fa(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${ld(e)}`)}(e,t)}function Tm(e,t){const c={};return Ps(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Rs(e,((e,n)=>{const s=xm(n,t.ra(e));null!=s&&(c[e]=s)})),{mapValue:{fields:c}}}function Om(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ns||e instanceof pm||e instanceof fm||e instanceof zd||e instanceof mm)}function Nm(e,t,c){if(!Om(c)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(c)){const n=ld(c);throw"an object"===n?t.ha(e+" a custom object"):t.ha(e+" "+n)}}function Dm(e,t,c){if((t=(0,a.m9)(t))instanceof dm)return t._internalPath;if("string"==typeof t)return Pm(e,t);throw Fm("Field path arguments must be of type string or ",e,!1,void 0,c)}const Rm=new RegExp("[~\\*/\\[\\]]");function Pm(e,t,c){if(t.search(Rm)>=0)throw Fm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,c);try{return new dm(...t.split("."))._internalPath}catch(n){throw Fm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,c)}}function Fm(e,t,c,n,s){const r=n&&!n.isEmpty(),i=void 0!==s;let a=`Function ${t}() called with invalid data`;c&&(a+=" (via `toFirestore()`)"),a+=". ";let o="";return(r||i)&&(o+=" (found",r&&(o+=` in field ${n}`),i&&(o+=` in document ${s}`),o+=")"),new jn(qn.INVALID_ARGUMENT,a+e+o)}function qm(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,c,n,s){this._firestore=e,this._userDataWriter=t,this._key=c,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zd(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Um(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Bm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Um extends jm{data(){return super.data()}}function Bm(e,t){return"string"==typeof t?Pm(e,t):t instanceof dm?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new jn(qn.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Km{}class Gm extends Km{}function Wm(e,t,...c){let n=[];t instanceof Km&&n.push(t),n=n.concat(c),function(e){const t=e.filter((e=>e instanceof Ym)).length,c=e.filter((e=>e instanceof Zm)).length;if(t>1||t>0&&c>0)throw new jn(qn.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);for(const s of n)e=s._apply(e);return e}class Zm extends Gm{constructor(e,t,c){super(),this._field=e,this._op=t,this._value=c,this.type="where"}static _create(e,t,c){return new Zm(e,t,c)}_apply(e){const t=this._parse(e);return fp(e._query,t),new vd(e.firestore,e.converter,zi(e._query,t))}_parse(e){const t=Cm(e.firestore),c=function(e,t,c,n,s,r,i){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new jn(qn.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){hp(i,r);const t=[];for(const c of i)t.push(up(n,e,c));a={arrayValue:{values:t}}}else a=up(n,e,i)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||hp(i,r),a=Em(c,t,i,"in"===r||"not-in"===r);return yr.create(s,r,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return c}}function Qm(e,t,c){const n=t,s=Bm("where",e);return Zm._create(s,n,c)}class Ym extends Km{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ym(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Lr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let c=e;const n=t.getFlattenedFilters();for(const s of n)fp(c,s),c=zi(c,s)}(e._query,t),new vd(e.firestore,e.converter,zi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Jm extends Gm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Jm(e,t)}_apply(e){const t=function(e,t,c){if(null!==e.startAt)throw new jn(qn.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new jn(qn.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const n=new qr(t,c);return function(e,t){if(null===hi(e)){const c=fi(e);null!==c&&dp(e,c,t.field)}}(e,n),n}(e._query,this._field,this._direction);return new vd(e.firestore,e.converter,function(e,t){const c=e.explicitOrderBy.concat([t]);return new ai(e.path,e.collectionGroup,c,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Xm(e,t="asc"){const c=t,n=Bm("orderBy",e);return Jm._create(n,c)}class ep extends Gm{constructor(e,t,c){super(),this.type=e,this._limit=t,this._limitType=c}static _create(e,t,c){return new ep(e,t,c)}_apply(e){return new vd(e.firestore,e.converter,vi(e._query,this._limit,this._limitType))}}function tp(e){return hd("limit",e),ep._create("limit",e,"F")}function cp(e){return hd("limitToLast",e),ep._create("limitToLast",e,"L")}class np extends Gm{constructor(e,t,c){super(),this.type=e,this._docOrFields=t,this._inclusive=c}static _create(e,t,c){return new np(e,t,c)}_apply(e){const t=lp(e,this.type,this._docOrFields,this._inclusive);return new vd(e.firestore,e.converter,function(e,t){return new ai(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function sp(...e){return np._create("startAt",e,!0)}function rp(...e){return np._create("startAfter",e,!1)}class ip extends Gm{constructor(e,t,c){super(),this.type=e,this._docOrFields=t,this._inclusive=c}static _create(e,t,c){return new ip(e,t,c)}_apply(e){const t=lp(e,this.type,this._docOrFields,this._inclusive);return new vd(e.firestore,e.converter,function(e,t){return new ai(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function ap(...e){return ip._create("endBefore",e,!1)}function op(...e){return ip._create("endAt",e,!0)}function lp(e,t,c,n){if(c[0]=(0,a.m9)(c[0]),c[0]instanceof jm)return function(e,t,c,n,s){if(!n)throw new jn(qn.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const r=[];for(const i of mi(e))if(i.field.isKeyField())r.push(ar(t,n.key));else{const e=n.data.field(i.field);if(Zs(e))throw new jn(qn.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+i.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=i.field.canonicalString();throw new jn(qn.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}r.push(e)}return new Vr(r,s)}(e._query,e.firestore._databaseId,t,c[0]._document,n);{const s=Cm(e.firestore);return function(e,t,c,n,s,r){const i=e.explicitOrderBy;if(s.length>i.length)throw new jn(qn.INVALID_ARGUMENT,`Too many arguments provided to ${n}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let o=0;o<s.length;o++){const r=s[o];if(i[o].field.isKeyField()){if("string"!=typeof r)throw new jn(qn.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${n}(), but got a ${typeof r}`);if(!di(e)&&-1!==r.indexOf("/"))throw new jn(qn.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${n}() must be a plain document ID, but '${r}' contains a slash.`);const c=e.path.child(is.fromString(r));if(!ls.isDocumentKey(c))throw new jn(qn.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${n}() must result in a valid document path, but '${c}' is not because it contains an odd number of segments.`);const s=new ls(c);a.push(ar(t,s))}else{const e=Em(c,n,r);a.push(e)}}return new Vr(a,r)}(e._query,e.firestore._databaseId,s,t,c,n)}}function up(e,t,c){if("string"==typeof(c=(0,a.m9)(c))){if(""===c)throw new jn(qn.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!di(t)&&-1!==c.indexOf("/"))throw new jn(qn.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);const n=t.path.child(is.fromString(c));if(!ls.isDocumentKey(n))throw new jn(qn.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ar(e,new ls(n))}if(c instanceof zd)return ar(e,c._key);throw new jn(qn.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ld(c)}.`)}function hp(e,t){if(!Array.isArray(e)||0===e.length)throw new jn(qn.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new jn(qn.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function fp(e,t){if(t.isInequality()){const c=fi(e),n=t.field;if(null!==c&&!c.isEqual(n))throw new jn(qn.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${c.toString()}' and '${n.toString()}'`);const s=hi(e);null!==s&&dp(e,n,s)}const c=function(e,t){for(const c of e)for(const e of c.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==c)throw c===t.op?new jn(qn.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new jn(qn.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${c.toString()}' filters.`)}function dp(e,t,c){if(!c.isEqual(t))throw new jn(qn.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}class mp{convertValue(e,t="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Gs(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Dn()}}convertObject(e,t){const c={};return Rs(e.fields,((e,n)=>{c[e]=this.convertValue(n,t)})),c}convertGeoPoint(e){return new pm(Gs(e.latitude),Gs(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const c=Qs(e);return null==c?null:this.convertValue(c,t);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const t=Ks(e);return new ns(t.seconds,t.nanos)}convertDocumentKey(e,t){const c=is.fromString(e);Rn(mo(c));const n=new Ns(c.get(1),c.get(3)),s=new ls(c.popFirst(5));return n.isEqual(t)||Tn(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(e,t,c){let n;return n=e?c&&(c.merge||c.mergeFields)?e.toFirestore(t,c):e.toFirestore(t):t,n}class zp extends mp{constructor(e){super(),this.firestore=e}convertBytes(e){return new fm(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new zd(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gp extends jm{constructor(e,t,c,n,s,r){super(e,t,c,n,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const c=this._document.data.field(Bm("DocumentSnapshot.get",e));if(null!==c)return this._userDataWriter.convertValue(c,t.serverTimestamps)}}}class Vp extends gp{data(e={}){return super.data(e)}}class Hp{constructor(e,t,c,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new vp(n.hasPendingWrites,n.fromCache),this.query=c}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((c=>{e.call(t,new Vp(this._firestore,this._userDataWriter,c.key,c,new vp(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new jn(qn.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((c=>{const n=new Vp(e._firestore,e._userDataWriter,c.doc.key,c.doc,new vp(e._snapshot.mutatedKeys.has(c.doc.key),e._snapshot.fromCache),e.query.converter);return c.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}}))}{let c=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const n=new Vp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new vp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=c.indexOf(t.doc.key),c=c.delete(t.doc.key)),1!==t.type&&(c=c.add(t.doc),r=c.indexOf(t.doc.key)),{type:Mp(t.type),doc:n,oldIndex:s,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Mp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Dn()}}function Cp(e,t){return e instanceof gp&&t instanceof gp?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Hp&&t instanceof Hp&&e._firestore===t._firestore&&yd(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(e){e=ud(e,zd);const t=ud(e.firestore,Xd);return Ud(em(t),e._key).then((c=>Dp(t,e,c)))}class Lp extends mp{constructor(e){super(),this.firestore=e}convertBytes(e){return new fm(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new zd(this.firestore,null,t)}}function bp(e){e=ud(e,zd);const t=ud(e.firestore,Xd),c=em(t),n=new Lp(t);return jd(c,e._key).then((c=>new gp(t,n,e._key,c,new vp(null!==c&&c.hasLocalMutations,!0),e.converter)))}function wp(e){e=ud(e,zd);const t=ud(e.firestore,Xd);return Ud(em(t),e._key,{source:"server"}).then((c=>Dp(t,e,c)))}function kp(e){e=ud(e,vd);const t=ud(e.firestore,Xd),c=em(t),n=new Lp(t);return $m(e._query),$d(c,e._query).then((c=>new Hp(t,n,e,c)))}function Sp(e){e=ud(e,vd);const t=ud(e.firestore,Xd),c=em(t),n=new Lp(t);return Bd(c,e._query).then((c=>new Hp(t,n,e,c)))}function _p(e){e=ud(e,vd);const t=ud(e.firestore,Xd),c=em(t),n=new Lp(t);return $d(c,e._query,{source:"server"}).then((c=>new Hp(t,n,e,c)))}function Ip(e,t,c){e=ud(e,zd);const n=ud(e.firestore,Xd),s=pp(e.converter,t,c);return Np(n,[ym(Cm(n),"setDoc",e._key,s,null!==e.converter,c).toMutation(e._key,Ui.none())])}function Ap(e,t,c,...n){e=ud(e,zd);const s=ud(e.firestore,Xd),r=Cm(s);let i;return i="string"==typeof(t=(0,a.m9)(t))||t instanceof dm?Am(r,"updateDoc",e._key,t,c,n):Im(r,"updateDoc",e._key,t),Np(s,[i.toMutation(e._key,Ui.exists(!0))])}function Ep(e){return Np(ud(e.firestore,Xd),[new ca(e._key,Ui.none())])}function xp(e,t){const c=ud(e.firestore,Xd),n=Md(e),s=pp(e.converter,t);return Np(c,[ym(Cm(e.firestore),"addDoc",n._key,s,null!==e.converter,{}).toMutation(n._key,Ui.exists(!1))]).then((()=>n))}function Tp(e,...t){var c,n,s;e=(0,a.m9)(e);let r={includeMetadataChanges:!1},i=0;"object"!=typeof t[i]||Qd(t[i])||(r=t[i],i++);const o={includeMetadataChanges:r.includeMetadataChanges};if(Qd(t[i])){const e=t[i];t[i]=null===(c=e.next)||void 0===c?void 0:c.bind(e),t[i+1]=null===(n=e.error)||void 0===n?void 0:n.bind(e),t[i+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let l,u,h;if(e instanceof zd)u=ud(e.firestore,Xd),h=li(e._key.path),l={next:c=>{t[i]&&t[i](Dp(u,e,c))},error:t[i+1],complete:t[i+2]};else{const c=ud(e,vd);u=ud(c.firestore,Xd),h=c._query;const n=new Lp(u);l={next:e=>{t[i]&&t[i](new Hp(u,n,c,e))},error:t[i+1],complete:t[i+2]},$m(e._query)}return function(e,t,c,n){const s=new bd(n),r=new ff(t,s,c);return e.asyncQueue.enqueueAndForget((async()=>af(await Pd(e),r))),()=>{s.bc(),e.asyncQueue.enqueueAndForget((async()=>of(await Pd(e),r)))}}(em(u),h,o,l)}function Op(e,t){return Kd(em(e=ud(e,Xd)),Qd(t)?t:{next:t})}function Np(e,t){return function(e,t){const c=new Un;return e.asyncQueue.enqueueAndForget((async()=>wf(await Dd(e),t,c))),c.promise}(em(e),t)}function Dp(e,t,c){const n=c.docs.get(t._key),s=new Lp(e);return new gp(e,s,t._key,n,new vp(c.hasPendingWrites,c.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rp={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Cm(e)}set(e,t,c){this._verifyNotCommitted();const n=Fp(e,this._firestore),s=pp(n.converter,t,c),r=ym(this._dataReader,"WriteBatch.set",n._key,s,null!==n.converter,c);return this._mutations.push(r.toMutation(n._key,Ui.none())),this}update(e,t,c,...n){this._verifyNotCommitted();const s=Fp(e,this._firestore);let r;return r="string"==typeof(t=(0,a.m9)(t))||t instanceof dm?Am(this._dataReader,"WriteBatch.update",s._key,t,c,n):Im(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(r.toMutation(s._key,Ui.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Fp(e,this._firestore);return this._mutations=this._mutations.concat(new ca(t._key,Ui.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new jn(qn.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Fp(e,t){if((e=(0,a.m9)(e)).firestore!==t)throw new jn(qn.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Cm(e)}get(e){const t=Fp(e,this._firestore),c=new zp(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Dn();const n=e[0];if(n.isFoundDocument())return new jm(this._firestore,c,n.key,n,t.converter);if(n.isNoDocument())return new jm(this._firestore,c,t._key,null,t.converter);throw Dn()}))}set(e,t,c){const n=Fp(e,this._firestore),s=pp(n.converter,t,c),r=ym(this._dataReader,"Transaction.set",n._key,s,null!==n.converter,c);return this._transaction.set(n._key,r),this}update(e,t,c,...n){const s=Fp(e,this._firestore);let r;return r="string"==typeof(t=(0,a.m9)(t))||t instanceof dm?Am(this._dataReader,"Transaction.update",s._key,t,c,n):Im(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,r),this}delete(e){const t=Fp(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Fp(e,this._firestore),c=new Lp(this._firestore);return super.get(e).then((e=>new gp(this._firestore,c,t._key,e._document,new vp(!1,!1),t.converter)))}}function jp(e,t,c){e=ud(e,Xd);const n=Object.assign(Object.assign({},Rp),c);return function(e){if(e.maxAttempts<1)throw new jn(qn.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(e,t,c){const n=new Un;return e.asyncQueue.enqueueAndForget((async()=>{const s=await Rd(e);new Sd(e.asyncQueue,s,c,t,n).run()})),n.promise}(em(e),(c=>t(new qp(e,c))),n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){return new Lm("deleteField")}function Bp(){return new wm("serverTimestamp")}function $p(...e){return new km("arrayUnion",e)}function Kp(...e){return new Sm("arrayRemove",e)}function Gp(e){return new _m("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){_n=e}(s.SDK_VERSION),(0,s._registerComponent)(new r.wA("firestore",((e,{instanceIdentifier:c,options:n})=>{const s=e.getProvider("app").getImmediate(),r=new Xd(new Gn(e.getProvider("auth-internal")),new Yn(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new jn(qn.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(e.options.projectId,t)}(s,c),s);return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(kn,"3.8.3",e),(0,s.registerVersion)(kn,"3.8.3","esm2017")}()},223:function(e,t,c){"use strict";c.d(t,{BH:function(){return V},G6:function(){return S},L:function(){return a},LL:function(){return x},Pz:function(){return g},Sg:function(){return H},ZB:function(){return l},ZR:function(){return E},aH:function(){return v},b$:function(){return w},eu:function(){return I},hl:function(){return _},jU:function(){return L},m9:function(){return G},ne:function(){return U},pd:function(){return j},q4:function(){return z},r3:function(){return N},ru:function(){return b},tV:function(){return o},uI:function(){return C},vZ:function(){return R},w1:function(){return k},xO:function(){return F},xb:function(){return D},z$:function(){return M},zd:function(){return q}});c(2801),c(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const t=[];let c=0;for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);s<128?t[c++]=s:s<2048?(t[c++]=s>>6|192,t[c++]=63&s|128):55296===(64512&s)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++n)),t[c++]=s>>18|240,t[c++]=s>>12&63|128,t[c++]=s>>6&63|128,t[c++]=63&s|128):(t[c++]=s>>12|224,t[c++]=s>>6&63|128,t[c++]=63&s|128)}return t},s=function(e){const t=[];let c=0,n=0;while(c<e.length){const s=e[c++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[c++];t[n++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=e[c++],i=e[c++],a=e[c++],o=((7&s)<<18|(63&r)<<12|(63&i)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{const r=e[c++],i=e[c++];t[n++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&i)}}return t.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<e.length;s+=3){const t=e[s],r=s+1<e.length,i=r?e[s+1]:0,a=s+2<e.length,o=a?e[s+2]:0,l=t>>2,u=(3&t)<<4|i>>4;let h=(15&i)<<2|o>>6,f=63&o;a||(f=64,r||(h=64)),n.push(c[l],c[u],c[h],c[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const c=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<e.length;){const t=c[e.charAt(s++)],r=s<e.length,i=r?c[e.charAt(s)]:0;++s;const a=s<e.length,o=a?c[e.charAt(s)]:64;++s;const l=s<e.length,u=l?c[e.charAt(s)]:64;if(++s,null==t||null==i||null==o||null==u)throw Error();const h=t<<2|i>>4;if(n.push(h),64!==o){const e=i<<4&240|o>>2;if(n.push(e),64!==u){const e=o<<6&192|u;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){const t=n(e);return r.encodeByteArray(t,!0)},a=function(e){return i(e).replace(/\./g,"")},o=function(e){try{return r.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const c=t;return new Date(c.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const c in t)t.hasOwnProperty(c)&&u(c)&&(e[c]=l(e[c],t[c]));return e}function u(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof c.g)return c.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/moto-shop/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(c){return}const t=e&&o(e[1]);return t&&JSON.parse(t)},p=()=>{try{return f()||d()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},z=e=>{var t,c;return null===(c=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===c?void 0:c[e]},v=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},g=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,c)=>{t?this.reject(t):this.resolve(c),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,c))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},n=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),o="";return[a(JSON.stringify(c)),a(JSON.stringify(i)),o].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function C(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(M())}function y(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(c.g.process)}catch(n){return!1}}function L(){return"object"===typeof self&&self.self===self}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const e=M();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S(){return!y()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){try{return"object"===typeof indexedDB}catch(e){return!1}}function I(){return new Promise(((e,t)=>{try{let c=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),c||self.indexedDB.deleteDatabase(n),e(!0)},s.onupgradeneeded=()=>{c=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(c){t(c)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A="FirebaseError";class E extends Error{constructor(e,t,c){super(t),this.code=e,this.customData=c,this.name=A,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(e,t,c){this.service=e,this.serviceName=t,this.errors=c}create(e,...t){const c=t[0]||{},n=`${this.service}/${e}`,s=this.errors[e],r=s?T(s,c):"Error",i=`${this.serviceName}: ${r} (${n}).`,a=new E(n,i,c);return a}}function T(e,t){return e.replace(O,((e,c)=>{const n=t[c];return null!=n?String(n):`<${c}?>`}))}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t){if(e===t)return!0;const c=Object.keys(e),n=Object.keys(t);for(const s of c){if(!n.includes(s))return!1;const c=e[s],r=t[s];if(P(c)&&P(r)){if(!R(c,r))return!1}else if(c!==r)return!1}for(const s of n)if(!c.includes(s))return!1;return!0}function P(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){const t=[];for(const[c,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(c)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(c)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function q(e){const t={},c=e.replace(/^\?/,"").split("&");return c.forEach((e=>{if(e){const[c,n]=e.split("=");t[decodeURIComponent(c)]=decodeURIComponent(n)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const c=e.indexOf("#",t);return e.substring(t,c>0?c:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){const c=new B(e,t);return c.subscribe.bind(c)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,c){let n;if(void 0===e&&void 0===t&&void 0===c)throw new Error("Missing Observer.");n=$(e,["next","error","complete"])?e:{next:e,error:t,complete:c},void 0===n.next&&(n.next=K),void 0===n.error&&(n.error=K),void 0===n.complete&&(n.complete=K);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(c){"undefined"!==typeof console&&console.error&&console.error(c)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(e,t){if("object"!==typeof e||null===e)return!1;for(const c of t)if(c in e&&"function"===typeof e[c])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){return e&&e._delegate?e._delegate:e}},1129:function(e,t,c){c(7658),
/*!
 * Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/
function(t,c){e.exports=c()}(0,(function(){"use strict";var e={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const t="swal2-",c=e=>{const c={};for(const n in e)c[e[n]]=t+e[n];return c},n=c(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),s=c(["success","warning","info","question","error"]),r="SweetAlert2:",i=e=>{const t=[];for(let c=0;c<e.length;c++)-1===t.indexOf(e[c])&&t.push(e[c]);return t},a=e=>e.charAt(0).toUpperCase()+e.slice(1),o=e=>{console.warn(`${r} ${"object"===typeof e?e.join(" "):e}`)},l=e=>{console.error(`${r} ${e}`)},u=[],h=e=>{u.includes(e)||(u.push(e),o(e))},f=(e,t)=>{h(`"${e}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`)},d=e=>"function"===typeof e?e():e,m=e=>e&&"function"===typeof e.toPromise,p=e=>m(e)?e.toPromise():Promise.resolve(e),z=e=>e&&Promise.resolve(e)===e,v=()=>document.body.querySelector(`.${n.container}`),g=e=>{const t=v();return t?t.querySelector(e):null},V=e=>g(`.${e}`),H=()=>V(n.popup),M=()=>V(n.icon),C=()=>V(n["icon-content"]),y=()=>V(n.title),L=()=>V(n["html-container"]),b=()=>V(n.image),w=()=>V(n["progress-steps"]),k=()=>V(n["validation-message"]),S=()=>g(`.${n.actions} .${n.confirm}`),_=()=>g(`.${n.actions} .${n.cancel}`),I=()=>g(`.${n.actions} .${n.deny}`),A=()=>V(n["input-label"]),E=()=>g(`.${n.loader}`),x=()=>V(n.actions),T=()=>V(n.footer),O=()=>V(n["timer-progress-bar"]),N=()=>V(n.close),D='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',R=()=>{const e=Array.from(H().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((e,t)=>{const c=parseInt(e.getAttribute("tabindex")),n=parseInt(t.getAttribute("tabindex"));return c>n?1:c<n?-1:0})),t=Array.from(H().querySelectorAll(D)).filter((e=>"-1"!==e.getAttribute("tabindex")));return i(e.concat(t)).filter((e=>se(e)))},P=()=>B(document.body,n.shown)&&!B(document.body,n["toast-shown"])&&!B(document.body,n["no-backdrop"]),F=()=>H()&&B(H(),n.toast),q=()=>H().hasAttribute("data-loading"),j={previousBodyPadding:null},U=(e,t)=>{if(e.textContent="",t){const c=new DOMParser,n=c.parseFromString(t,"text/html");Array.from(n.querySelector("head").childNodes).forEach((t=>{e.appendChild(t)})),Array.from(n.querySelector("body").childNodes).forEach((t=>{t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(!0)):e.appendChild(t)}))}},B=(e,t)=>{if(!t)return!1;const c=t.split(/\s+/);for(let n=0;n<c.length;n++)if(!e.classList.contains(c[n]))return!1;return!0},$=(e,t)=>{Array.from(e.classList).forEach((c=>{Object.values(n).includes(c)||Object.values(s).includes(c)||Object.values(t.showClass).includes(c)||e.classList.remove(c)}))},K=(e,t,c)=>{if($(e,t),t.customClass&&t.customClass[c]){if("string"!==typeof t.customClass[c]&&!t.customClass[c].forEach)return void o(`Invalid type of customClass.${c}! Expected string or iterable object, got "${typeof t.customClass[c]}"`);Q(e,t.customClass[c])}},G=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${n.popup} > .${n[t]}`);case"checkbox":return e.querySelector(`.${n.popup} > .${n.checkbox} input`);case"radio":return e.querySelector(`.${n.popup} > .${n.radio} input:checked`)||e.querySelector(`.${n.popup} > .${n.radio} input:first-child`);case"range":return e.querySelector(`.${n.popup} > .${n.range} input`);default:return e.querySelector(`.${n.popup} > .${n.input}`)}},W=e=>{if(e.focus(),"file"!==e.type){const t=e.value;e.value="",e.value=t}},Z=(e,t,c)=>{e&&t&&("string"===typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach((t=>{Array.isArray(e)?e.forEach((e=>{c?e.classList.add(t):e.classList.remove(t)})):c?e.classList.add(t):e.classList.remove(t)})))},Q=(e,t)=>{Z(e,t,!0)},Y=(e,t)=>{Z(e,t,!1)},J=(e,t)=>{const c=Array.from(e.children);for(let n=0;n<c.length;n++){const e=c[n];if(e instanceof HTMLElement&&B(e,t))return e}},X=(e,t,c)=>{c===`${parseInt(c)}`&&(c=parseInt(c)),c||0===parseInt(c)?e.style[t]="number"===typeof c?`${c}px`:c:e.style.removeProperty(t)},ee=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";e.style.display=t},te=e=>{e.style.display="none"},ce=(e,t,c,n)=>{const s=e.querySelector(t);s&&(s.style[c]=n)},ne=function(e,t){let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"flex";t?ee(e,c):te(e)},se=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),re=()=>!se(S())&&!se(I())&&!se(_()),ie=e=>!!(e.scrollHeight>e.clientHeight),ae=e=>{const t=window.getComputedStyle(e),c=parseFloat(t.getPropertyValue("animation-duration")||"0"),n=parseFloat(t.getPropertyValue("transition-duration")||"0");return c>0||n>0},oe=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const c=O();se(c)&&(t&&(c.style.transition="none",c.style.width="100%"),setTimeout((()=>{c.style.transition=`width ${e/1e3}s linear`,c.style.width="0%"}),10))},le=()=>{const e=O(),t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const c=parseInt(window.getComputedStyle(e).width),n=t/c*100;e.style.width=`${n}%`},ue=100,he={},fe=()=>{he.previousActiveElement instanceof HTMLElement?(he.previousActiveElement.focus(),he.previousActiveElement=null):document.body&&document.body.focus()},de=e=>new Promise((t=>{if(!e)return t();const c=window.scrollX,n=window.scrollY;he.restoreFocusTimeout=setTimeout((()=>{fe(),t()}),ue),window.scrollTo(c,n)})),me=()=>"undefined"===typeof window||"undefined"===typeof document,pe=`\n <div aria-labelledby="${n.title}" aria-describedby="${n["html-container"]}" class="${n.popup}" tabindex="-1">\n   <button type="button" class="${n.close}"></button>\n   <ul class="${n["progress-steps"]}"></ul>\n   <div class="${n.icon}"></div>\n   <img class="${n.image}" />\n   <h2 class="${n.title}" id="${n.title}"></h2>\n   <div class="${n["html-container"]}" id="${n["html-container"]}"></div>\n   <input class="${n.input}" />\n   <input type="file" class="${n.file}" />\n   <div class="${n.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${n.select}"></select>\n   <div class="${n.radio}"></div>\n   <label for="${n.checkbox}" class="${n.checkbox}">\n     <input type="checkbox" />\n     <span class="${n.label}"></span>\n   </label>\n   <textarea class="${n.textarea}"></textarea>\n   <div class="${n["validation-message"]}" id="${n["validation-message"]}"></div>\n   <div class="${n.actions}">\n     <div class="${n.loader}"></div>\n     <button type="button" class="${n.confirm}"></button>\n     <button type="button" class="${n.deny}"></button>\n     <button type="button" class="${n.cancel}"></button>\n   </div>\n   <div class="${n.footer}"></div>\n   <div class="${n["timer-progress-bar-container"]}">\n     <div class="${n["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g,""),ze=()=>{const e=v();return!!e&&(e.remove(),Y([document.documentElement,document.body],[n["no-backdrop"],n["toast-shown"],n["has-column"]]),!0)},ve=()=>{he.currentInstance.resetValidationMessage()},ge=()=>{const e=H(),t=J(e,n.input),c=J(e,n.file),s=e.querySelector(`.${n.range} input`),r=e.querySelector(`.${n.range} output`),i=J(e,n.select),a=e.querySelector(`.${n.checkbox} input`),o=J(e,n.textarea);t.oninput=ve,c.onchange=ve,i.onchange=ve,a.onchange=ve,o.oninput=ve,s.oninput=()=>{ve(),r.value=s.value},s.onchange=()=>{ve(),r.value=s.value}},Ve=e=>"string"===typeof e?document.querySelector(e):e,He=e=>{const t=H();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},Me=e=>{"rtl"===window.getComputedStyle(e).direction&&Q(v(),n.rtl)},Ce=e=>{const t=ze();if(me())return void l("SweetAlert2 requires document to initialize");const c=document.createElement("div");c.className=n.container,t&&Q(c,n["no-transition"]),U(c,pe);const s=Ve(e.target);s.appendChild(c),He(e),Me(s),ge()},ye=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"===typeof e?Le(e,t):e&&U(t,e)},Le=(e,t)=>{e.jquery?be(t,e):U(t,e.toString())},be=(e,t)=>{if(e.textContent="",0 in t)for(let c=0;c in t;c++)e.appendChild(t[c].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},we=(()=>{if(me())return!1;const e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&"undefined"!==typeof e.style[c])return t[c];return!1})(),ke=()=>{const e=document.createElement("div");e.className=n["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},Se=(e,t)=>{const c=x(),n=E();t.showConfirmButton||t.showDenyButton||t.showCancelButton?ee(c):te(c),K(c,t,"actions"),_e(c,n,t),U(n,t.loaderHtml),K(n,t,"loader")};function _e(e,t,c){const n=S(),s=I(),r=_();Ae(n,"confirm",c),Ae(s,"deny",c),Ae(r,"cancel",c),Ie(n,s,r,c),c.reverseButtons&&(c.toast?(e.insertBefore(r,n),e.insertBefore(s,n)):(e.insertBefore(r,t),e.insertBefore(s,t),e.insertBefore(n,t)))}function Ie(e,t,c,s){s.buttonsStyling?(Q([e,t,c],n.styled),s.confirmButtonColor&&(e.style.backgroundColor=s.confirmButtonColor,Q(e,n["default-outline"])),s.denyButtonColor&&(t.style.backgroundColor=s.denyButtonColor,Q(t,n["default-outline"])),s.cancelButtonColor&&(c.style.backgroundColor=s.cancelButtonColor,Q(c,n["default-outline"]))):Y([e,t,c],n.styled)}function Ae(e,t,c){ne(e,c[`show${a(t)}Button`],"inline-block"),U(e,c[`${t}ButtonText`]),e.setAttribute("aria-label",c[`${t}ButtonAriaLabel`]),e.className=n[t],K(e,c,`${t}Button`),Q(e,c[`${t}ButtonClass`])}const Ee=(e,t)=>{const c=N();U(c,t.closeButtonHtml),K(c,t,"closeButton"),ne(c,t.showCloseButton),c.setAttribute("aria-label",t.closeButtonAriaLabel)},xe=(e,t)=>{const c=v();c&&(Te(c,t.backdrop),Oe(c,t.position),Ne(c,t.grow),K(c,t,"container"))};function Te(e,t){"string"===typeof t?e.style.background=t:t||Q([document.documentElement,document.body],n["no-backdrop"])}function Oe(e,t){t in n?Q(e,n[t]):(o('The "position" parameter is not valid, defaulting to "center"'),Q(e,n.center))}function Ne(e,t){if(t&&"string"===typeof t){const c=`grow-${t}`;c in n&&Q(e,n[c])}}const De=["input","file","range","select","radio","checkbox","textarea"],Re=(t,c)=>{const s=H(),r=e.innerParams.get(t),i=!r||c.input!==r.input;De.forEach((e=>{const t=J(s,n[e]);qe(e,c.inputAttributes),t.className=n[e],i&&te(t)})),c.input&&(i&&Pe(c),je(c))},Pe=e=>{if(!Ge[e.input])return void l(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);const t=$e(e.input),c=Ge[e.input](t,e);ee(t),e.inputAutoFocus&&setTimeout((()=>{W(c)}))},Fe=e=>{for(let t=0;t<e.attributes.length;t++){const c=e.attributes[t].name;["type","value","style"].includes(c)||e.removeAttribute(c)}},qe=(e,t)=>{const c=G(H(),e);if(c){Fe(c);for(const e in t)c.setAttribute(e,t[e])}},je=e=>{const t=$e(e.input);"object"===typeof e.customClass&&Q(t,e.customClass.input)},Ue=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},Be=(e,t,c)=>{if(c.inputLabel){e.id=n.input;const s=document.createElement("label"),r=n["input-label"];s.setAttribute("for",e.id),s.className=r,"object"===typeof c.customClass&&Q(s,c.customClass.inputLabel),s.innerText=c.inputLabel,t.insertAdjacentElement("beforebegin",s)}},$e=e=>J(H(),n[e]||n.input),Ke=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:z(t)||o(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},Ge={};Ge.text=Ge.email=Ge.password=Ge.number=Ge.tel=Ge.url=(e,t)=>(Ke(e,t.inputValue),Be(e,e,t),Ue(e,t),e.type=t.input,e),Ge.file=(e,t)=>(Be(e,e,t),Ue(e,t),e),Ge.range=(e,t)=>{const c=e.querySelector("input"),n=e.querySelector("output");return Ke(c,t.inputValue),c.type=t.input,Ke(n,t.inputValue),Be(c,e,t),e},Ge.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const c=document.createElement("option");U(c,t.inputPlaceholder),c.value="",c.disabled=!0,c.selected=!0,e.appendChild(c)}return Be(e,e,t),e},Ge.radio=e=>(e.textContent="",e),Ge.checkbox=(e,t)=>{const c=G(H(),"checkbox");c.value="1",c.id=n.checkbox,c.checked=Boolean(t.inputValue);const s=e.querySelector("span");return U(s,t.inputPlaceholder),c},Ge.textarea=(e,t)=>{Ke(e,t.inputValue),Ue(e,t),Be(e,e,t);const c=e=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);return setTimeout((()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(H()).width),n=()=>{const n=e.offsetWidth+c(e);H().style.width=n>t?`${n}px`:null};new MutationObserver(n).observe(e,{attributes:!0,attributeFilter:["style"]})}})),e};const We=(e,t)=>{const c=L();K(c,t,"htmlContainer"),t.html?(ye(t.html,c),ee(c,"block")):t.text?(c.textContent=t.text,ee(c,"block")):te(c),Re(e,t)},Ze=(e,t)=>{const c=T();ne(c,t.footer),t.footer&&ye(t.footer,c),K(c,t,"footer")},Qe=(t,c)=>{const n=e.innerParams.get(t),r=M();if(n&&c.icon===n.icon)return tt(r,c),void Ye(r,c);if(c.icon||c.iconHtml){if(c.icon&&-1===Object.keys(s).indexOf(c.icon))return l(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${c.icon}"`),void te(r);ee(r),tt(r,c),Ye(r,c),Q(r,c.showClass.icon)}else te(r)},Ye=(e,t)=>{for(const c in s)t.icon!==c&&Y(e,s[c]);Q(e,s[t.icon]),ct(e,t),Je(),K(e,t,"icon")},Je=()=>{const e=H(),t=window.getComputedStyle(e).getPropertyValue("background-color"),c=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let n=0;n<c.length;n++)c[n].style.backgroundColor=t},Xe='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',et='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',tt=(e,t)=>{let c,n=e.innerHTML;if(t.iconHtml)c=nt(t.iconHtml);else if("success"===t.icon)c=Xe,n=n.replace(/ style=".*?"/g,"");else if("error"===t.icon)c=et;else{const e={question:"?",warning:"!",info:"i"};c=nt(e[t.icon])}n.trim()!==c.trim()&&U(e,c)},ct=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const c of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ce(e,c,"backgroundColor",t.iconColor);ce(e,".swal2-success-ring","borderColor",t.iconColor)}},nt=e=>`<div class="${n["icon-content"]}">${e}</div>`,st=(e,t)=>{const c=b();t.imageUrl?(ee(c,""),c.setAttribute("src",t.imageUrl),c.setAttribute("alt",t.imageAlt),X(c,"width",t.imageWidth),X(c,"height",t.imageHeight),c.className=n.image,K(c,t,"image")):te(c)},rt=(e,t)=>{const c=v(),n=H();t.toast?(X(c,"width",t.width),n.style.width="100%",n.insertBefore(E(),M())):X(n,"width",t.width),X(n,"padding",t.padding),t.color&&(n.style.color=t.color),t.background&&(n.style.background=t.background),te(k()),it(n,t)},it=(e,t)=>{e.className=`${n.popup} ${se(e)?t.showClass.popup:""}`,t.toast?(Q([document.documentElement,document.body],n["toast-shown"]),Q(e,n.toast)):Q(e,n.modal),K(e,t,"popup"),"string"===typeof t.customClass&&Q(e,t.customClass),t.icon&&Q(e,n[`icon-${t.icon}`])},at=(e,t)=>{const c=w();t.progressSteps&&0!==t.progressSteps.length?(ee(c),c.textContent="",t.currentProgressStep>=t.progressSteps.length&&o("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(((e,s)=>{const r=ot(e);if(c.appendChild(r),s===t.currentProgressStep&&Q(r,n["active-progress-step"]),s!==t.progressSteps.length-1){const e=lt(t);c.appendChild(e)}}))):te(c)},ot=e=>{const t=document.createElement("li");return Q(t,n["progress-step"]),U(t,e),t},lt=e=>{const t=document.createElement("li");return Q(t,n["progress-step-line"]),e.progressStepsDistance&&X(t,"width",e.progressStepsDistance),t},ut=(e,t)=>{const c=y();ne(c,t.title||t.titleText,"block"),t.title&&ye(t.title,c),t.titleText&&(c.innerText=t.titleText),K(c,t,"title")},ht=(e,t)=>{rt(e,t),xe(e,t),at(e,t),Qe(e,t),st(e,t),ut(e,t),Ee(e,t),We(e,t),Se(e,t),Ze(e,t),"function"===typeof t.didRender&&t.didRender(H())};function ft(){const t=e.innerParams.get(this);if(!t)return;const c=e.domCache.get(this);te(c.loader),F()?t.icon&&ee(M()):dt(c),Y([c.popup,c.actions],n.loading),c.popup.removeAttribute("aria-busy"),c.popup.removeAttribute("data-loading"),c.confirmButton.disabled=!1,c.denyButton.disabled=!1,c.cancelButton.disabled=!1}const dt=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?ee(t[0],"inline-block"):re()&&te(e.actions)};function mt(t){const c=e.innerParams.get(t||this),n=e.domCache.get(t||this);return n?G(n.popup,c.input):null}const pt=()=>se(H()),zt=()=>S()&&S().click(),vt=()=>I()&&I().click(),gt=()=>_()&&_().click(),Vt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ht=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},Mt=(e,t,c,n)=>{Ht(t),c.toast||(t.keydownHandler=t=>bt(e,t,n),t.keydownTarget=c.keydownListenerCapture?window:H(),t.keydownListenerCapture=c.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},Ct=(e,t)=>{const c=R();if(c.length)return e+=t,e===c.length?e=0:-1===e&&(e=c.length-1),void c[e].focus();H().focus()},yt=["ArrowRight","ArrowDown"],Lt=["ArrowLeft","ArrowUp"],bt=(t,c,n)=>{const s=e.innerParams.get(t);s&&(c.isComposing||229===c.keyCode||(s.stopKeydownPropagation&&c.stopPropagation(),"Enter"===c.key?wt(t,c,s):"Tab"===c.key?kt(c):[...yt,...Lt].includes(c.key)?St(c.key):"Escape"===c.key&&_t(c,s,n)))},wt=(e,t,c)=>{if(d(c.allowEnterKey)&&t.target&&e.getInput()&&t.target instanceof HTMLElement&&t.target.outerHTML===e.getInput().outerHTML){if(["textarea","file"].includes(c.input))return;zt(),t.preventDefault()}},kt=e=>{const t=e.target,c=R();let n=-1;for(let s=0;s<c.length;s++)if(t===c[s]){n=s;break}e.shiftKey?Ct(n,-1):Ct(n,1),e.stopPropagation(),e.preventDefault()},St=e=>{const t=S(),c=I(),n=_(),s=[t,c,n];if(document.activeElement instanceof HTMLElement&&!s.includes(document.activeElement))return;const r=yt.includes(e)?"nextElementSibling":"previousElementSibling";let i=document.activeElement;for(let a=0;a<x().children.length;a++){if(i=i[r],!i)return;if(i instanceof HTMLButtonElement&&se(i))break}i instanceof HTMLButtonElement&&i.focus()},_t=(e,t,c)=>{d(t.allowEscapeKey)&&(e.preventDefault(),c(Vt.esc))};var It={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const At=()=>{const e=Array.from(document.body.children);e.forEach((e=>{e===v()||e.contains(v())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}))},Et=()=>{const e=Array.from(document.body.children);e.forEach((e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))},xt=()=>{const e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;if(e&&!B(document.body,n.iosfix)){const e=document.body.scrollTop;document.body.style.top=-1*e+"px",Q(document.body,n.iosfix),Ot(),Tt()}},Tt=()=>{const e=navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),c=!!e.match(/WebKit/i),n=t&&c&&!e.match(/CriOS/i);if(n){const e=44;H().scrollHeight>window.innerHeight-e&&(v().style.paddingBottom=`${e}px`)}},Ot=()=>{const e=v();let t;e.ontouchstart=e=>{t=Nt(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},Nt=e=>{const t=e.target,c=v();return!Dt(e)&&!Rt(e)&&(t===c||!ie(c)&&t instanceof HTMLElement&&"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName&&(!ie(L())||!L().contains(t)))},Dt=e=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,Rt=e=>e.touches&&e.touches.length>1,Pt=()=>{if(B(document.body,n.iosfix)){const e=parseInt(document.body.style.top,10);Y(document.body,n.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},Ft=()=>{null===j.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(j.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${j.previousBodyPadding+ke()}px`)},qt=()=>{null!==j.previousBodyPadding&&(document.body.style.paddingRight=`${j.previousBodyPadding}px`,j.previousBodyPadding=null)};function jt(e,t,c,n){F()?Jt(e,n):(de(c).then((()=>Jt(e,n))),Ht(he));const s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);s?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),P()&&(qt(),Pt(),Et()),Ut()}function Ut(){Y([document.documentElement,document.body],[n.shown,n["height-auto"],n["no-backdrop"],n["toast-shown"]])}function Bt(e){e=Zt(e);const t=It.swalPromiseResolve.get(this),c=Kt(this);this.isAwaitingPromise()?e.isDismissed||(Wt(this),t(e)):c&&t(e)}function $t(){return!!e.awaitingPromise.get(this)}const Kt=t=>{const c=H();if(!c)return!1;const n=e.innerParams.get(t);if(!n||B(c,n.hideClass.popup))return!1;Y(c,n.showClass.popup),Q(c,n.hideClass.popup);const s=v();return Y(s,n.showClass.backdrop),Q(s,n.hideClass.backdrop),Qt(t,c,n),!0};function Gt(e){const t=It.swalPromiseReject.get(this);Wt(this),t&&t(e)}const Wt=t=>{t.isAwaitingPromise()&&(e.awaitingPromise.delete(t),e.innerParams.get(t)||t._destroy())},Zt=e=>"undefined"===typeof e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),Qt=(e,t,c)=>{const n=v(),s=we&&ae(t);"function"===typeof c.willClose&&c.willClose(t),s?Yt(e,t,n,c.returnFocus,c.didClose):jt(e,n,c.returnFocus,c.didClose)},Yt=(e,t,c,n,s)=>{he.swalCloseEventFinishedCallback=jt.bind(null,e,c,n,s),t.addEventListener(we,(function(e){e.target===t&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback)}))},Jt=(e,t)=>{setTimeout((()=>{"function"===typeof t&&t.bind(e.params)(),e._destroy()}))};function Xt(t,c,n){const s=e.domCache.get(t);c.forEach((e=>{s[e].disabled=n}))}function ec(e,t){if(e)if("radio"===e.type){const c=e.parentNode.parentNode,n=c.querySelectorAll("input");for(let e=0;e<n.length;e++)n[e].disabled=t}else e.disabled=t}function tc(){Xt(this,["confirmButton","denyButton","cancelButton"],!1)}function cc(){Xt(this,["confirmButton","denyButton","cancelButton"],!0)}function nc(){ec(this.getInput(),!1)}function sc(){ec(this.getInput(),!0)}function rc(t){const c=e.domCache.get(this),s=e.innerParams.get(this);U(c.validationMessage,t),c.validationMessage.className=n["validation-message"],s.customClass&&s.customClass.validationMessage&&Q(c.validationMessage,s.customClass.validationMessage),ee(c.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid",!0),r.setAttribute("aria-describedby",n["validation-message"]),W(r),Q(r,n.inputerror))}function ic(){const t=e.domCache.get(this);t.validationMessage&&te(t.validationMessage);const c=this.getInput();c&&(c.removeAttribute("aria-invalid"),c.removeAttribute("aria-describedby"),Y(c,n.inputerror))}const ac={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},oc=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],lc={},uc=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],hc=e=>Object.prototype.hasOwnProperty.call(ac,e),fc=e=>-1!==oc.indexOf(e),dc=e=>lc[e],mc=e=>{hc(e)||o(`Unknown parameter "${e}"`)},pc=e=>{uc.includes(e)&&o(`The parameter "${e}" is incompatible with toasts`)},zc=e=>{dc(e)&&f(e,dc(e))},vc=e=>{!1===e.backdrop&&e.allowOutsideClick&&o('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const t in e)mc(t),e.toast&&pc(t),zc(t)};function gc(t){const c=H(),n=e.innerParams.get(this);if(!c||B(c,n.hideClass.popup))return void o("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=Vc(t),r=Object.assign({},n,s);ht(this,r),e.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const Vc=e=>{const t={};return Object.keys(e).forEach((c=>{fc(c)?t[c]=e[c]:o(`Invalid parameter to update: ${c}`)})),t};function Hc(){const t=e.domCache.get(this),c=e.innerParams.get(this);c?(t.popup&&he.swalCloseEventFinishedCallback&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback),"function"===typeof c.didDestroy&&c.didDestroy(),Mc(this)):Cc(this)}const Mc=e=>{Cc(e),delete e.params,delete he.keydownHandler,delete he.keydownTarget,delete he.currentInstance},Cc=t=>{t.isAwaitingPromise()?(yc(e,t),e.awaitingPromise.set(t,!0)):(yc(It,t),yc(e,t))},yc=(e,t)=>{for(const c in e)e[c].delete(t)};var Lc=Object.freeze({__proto__:null,_destroy:Hc,close:Bt,closeModal:Bt,closePopup:Bt,closeToast:Bt,disableButtons:cc,disableInput:sc,disableLoading:ft,enableButtons:tc,enableInput:nc,getInput:mt,handleAwaitingPromise:Wt,hideLoading:ft,isAwaitingPromise:$t,rejectPromise:Gt,resetValidationMessage:ic,showValidationMessage:rc,update:gc});const bc=e=>{let t=H();t||new Gn,t=H();const c=E();F()?te(M()):wc(t,e),ee(c),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},wc=(e,t)=>{const c=x(),s=E();!t&&se(S())&&(t=S()),ee(c),t&&(te(t),s.setAttribute("data-button-to-replace",t.className)),s.parentNode.insertBefore(s,t),Q([e,c],n.loading)},kc=(e,t)=>{"select"===t.input||"radio"===t.input?Ec(e,t):["text","email","number","tel","textarea"].includes(t.input)&&(m(t.inputValue)||z(t.inputValue))&&(bc(S()),xc(e,t))},Sc=(e,t)=>{const c=e.getInput();if(!c)return null;switch(t.input){case"checkbox":return _c(c);case"radio":return Ic(c);case"file":return Ac(c);default:return t.inputAutoTrim?c.value.trim():c.value}},_c=e=>e.checked?1:0,Ic=e=>e.checked?e.value:null,Ac=e=>e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,Ec=(e,t)=>{const c=H(),n=e=>{Tc[t.input](c,Oc(e),t)};m(t.inputOptions)||z(t.inputOptions)?(bc(S()),p(t.inputOptions).then((t=>{e.hideLoading(),n(t)}))):"object"===typeof t.inputOptions?n(t.inputOptions):l("Unexpected type of inputOptions! Expected object, Map or Promise, got "+typeof t.inputOptions)},xc=(e,t)=>{const c=e.getInput();te(c),p(t.inputValue).then((n=>{c.value="number"===t.input?`${parseFloat(n)||0}`:`${n}`,ee(c),c.focus(),e.hideLoading()})).catch((t=>{l(`Error in inputValue promise: ${t}`),c.value="",ee(c),c.focus(),e.hideLoading()}))},Tc={select:(e,t,c)=>{const s=J(e,n.select),r=(e,t,n)=>{const s=document.createElement("option");s.value=n,U(s,t),s.selected=Nc(n,c.inputValue),e.appendChild(s)};t.forEach((e=>{const t=e[0],c=e[1];if(Array.isArray(c)){const e=document.createElement("optgroup");e.label=t,e.disabled=!1,s.appendChild(e),c.forEach((t=>r(e,t[1],t[0])))}else r(s,c,t)})),s.focus()},radio:(e,t,c)=>{const s=J(e,n.radio);t.forEach((e=>{const t=e[0],r=e[1],i=document.createElement("input"),a=document.createElement("label");i.type="radio",i.name=n.radio,i.value=t,Nc(t,c.inputValue)&&(i.checked=!0);const o=document.createElement("span");U(o,r),o.className=n.label,a.appendChild(i),a.appendChild(o),s.appendChild(a)}));const r=s.querySelectorAll("input");r.length&&r[0].focus()}},Oc=e=>{const t=[];return"undefined"!==typeof Map&&e instanceof Map?e.forEach(((e,c)=>{let n=e;"object"===typeof n&&(n=Oc(n)),t.push([c,n])})):Object.keys(e).forEach((c=>{let n=e[c];"object"===typeof n&&(n=Oc(n)),t.push([c,n])})),t},Nc=(e,t)=>t&&t.toString()===e.toString(),Dc=t=>{const c=e.innerParams.get(t);t.disableButtons(),c.input?Fc(t,"confirm"):$c(t,!0)},Rc=t=>{const c=e.innerParams.get(t);t.disableButtons(),c.returnInputValueOnDeny?Fc(t,"deny"):jc(t,!1)},Pc=(e,t)=>{e.disableButtons(),t(Vt.cancel)},Fc=(t,c)=>{const n=e.innerParams.get(t);if(!n.input)return void l(`The "input" parameter is needed to be set when using returnInputValueOn${a(c)}`);const s=Sc(t,n);n.inputValidator?qc(t,s,c):t.getInput().checkValidity()?"deny"===c?jc(t,s):$c(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},qc=(t,c,n)=>{const s=e.innerParams.get(t);t.disableInput();const r=Promise.resolve().then((()=>p(s.inputValidator(c,s.validationMessage))));r.then((e=>{t.enableButtons(),t.enableInput(),e?t.showValidationMessage(e):"deny"===n?jc(t,c):$c(t,c)}))},jc=(t,c)=>{const n=e.innerParams.get(t||void 0);if(n.showLoaderOnDeny&&bc(I()),n.preDeny){e.awaitingPromise.set(t||void 0,!0);const s=Promise.resolve().then((()=>p(n.preDeny(c,n.validationMessage))));s.then((e=>{!1===e?(t.hideLoading(),Wt(t)):t.close({isDenied:!0,value:"undefined"===typeof e?c:e})})).catch((e=>Bc(t||void 0,e)))}else t.close({isDenied:!0,value:c})},Uc=(e,t)=>{e.close({isConfirmed:!0,value:t})},Bc=(e,t)=>{e.rejectPromise(t)},$c=(t,c)=>{const n=e.innerParams.get(t||void 0);if(n.showLoaderOnConfirm&&bc(),n.preConfirm){t.resetValidationMessage(),e.awaitingPromise.set(t||void 0,!0);const s=Promise.resolve().then((()=>p(n.preConfirm(c,n.validationMessage))));s.then((e=>{se(k())||!1===e?(t.hideLoading(),Wt(t)):Uc(t,"undefined"===typeof e?c:e)})).catch((e=>Bc(t||void 0,e)))}else Uc(t,c)},Kc=(t,c,n)=>{const s=e.innerParams.get(t);s.toast?Gc(t,c,n):(Qc(c),Yc(c),Jc(t,c,n))},Gc=(t,c,n)=>{c.popup.onclick=()=>{const c=e.innerParams.get(t);c&&(Wc(c)||c.timer||c.input)||n(Vt.close)}},Wc=e=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton;let Zc=!1;const Qc=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(Zc=!0)}}},Yc=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,(t.target===e.popup||e.popup.contains(t.target))&&(Zc=!0)}}},Jc=(t,c,n)=>{c.container.onclick=s=>{const r=e.innerParams.get(t);Zc?Zc=!1:s.target===c.container&&d(r.allowOutsideClick)&&n(Vt.backdrop)}},Xc=e=>"object"===typeof e&&e.jquery,en=e=>e instanceof Element||Xc(e),tn=e=>{const t={};return"object"!==typeof e[0]||en(e[0])?["title","html","icon"].forEach(((c,n)=>{const s=e[n];"string"===typeof s||en(s)?t[c]=s:void 0!==s&&l(`Unexpected type of ${c}! Expected "string" or "Element", got ${typeof s}`)})):Object.assign(t,e[0]),t};function cn(){const e=this;for(var t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];return new e(...c)}function nn(e){class t extends(this){_main(t,c){return super._main(t,Object.assign({},e,c))}}return t}const sn=()=>he.timeout&&he.timeout.getTimerLeft(),rn=()=>{if(he.timeout)return le(),he.timeout.stop()},an=()=>{if(he.timeout){const e=he.timeout.start();return oe(e),e}},on=()=>{const e=he.timeout;return e&&(e.running?rn():an())},ln=e=>{if(he.timeout){const t=he.timeout.increase(e);return oe(t,!0),t}},un=()=>he.timeout&&he.timeout.isRunning();let hn=!1;const fn={};function dn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template";fn[e]=this,hn||(document.body.addEventListener("click",mn),hn=!0)}const mn=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in fn){const c=t.getAttribute(e);if(c)return void fn[e].fire({template:c})}};var pn=Object.freeze({__proto__:null,argsToParams:tn,bindClickHandler:dn,clickCancel:gt,clickConfirm:zt,clickDeny:vt,enableLoading:bc,fire:cn,getActions:x,getCancelButton:_,getCloseButton:N,getConfirmButton:S,getContainer:v,getDenyButton:I,getFocusableElements:R,getFooter:T,getHtmlContainer:L,getIcon:M,getIconContent:C,getImage:b,getInputLabel:A,getLoader:E,getPopup:H,getProgressSteps:w,getTimerLeft:sn,getTimerProgressBar:O,getTitle:y,getValidationMessage:k,increaseTimer:ln,isDeprecatedParameter:dc,isLoading:q,isTimerRunning:un,isUpdatableParameter:fc,isValidParameter:hc,isVisible:pt,mixin:nn,resumeTimer:an,showLoading:bc,stopTimer:rn,toggleTimer:on});class zn{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const vn=["swal-title","swal-html","swal-footer"],gn=e=>{const t="string"===typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};const c=t.content;wn(c);const n=Object.assign(Vn(c),Hn(c),Mn(c),Cn(c),yn(c),Ln(c),bn(c,vn));return n},Vn=e=>{const t={},c=Array.from(e.querySelectorAll("swal-param"));return c.forEach((e=>{kn(e,["name","value"]);const c=e.getAttribute("name"),n=e.getAttribute("value");"boolean"===typeof ac[c]?t[c]="false"!==n:"object"===typeof ac[c]?t[c]=JSON.parse(n):t[c]=n})),t},Hn=e=>{const t={},c=Array.from(e.querySelectorAll("swal-function-param"));return c.forEach((e=>{const c=e.getAttribute("name"),n=e.getAttribute("value");t[c]=new Function(`return ${n}`)()})),t},Mn=e=>{const t={},c=Array.from(e.querySelectorAll("swal-button"));return c.forEach((e=>{kn(e,["type","color","aria-label"]);const c=e.getAttribute("type");t[`${c}ButtonText`]=e.innerHTML,t[`show${a(c)}Button`]=!0,e.hasAttribute("color")&&(t[`${c}ButtonColor`]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(t[`${c}ButtonAriaLabel`]=e.getAttribute("aria-label"))})),t},Cn=e=>{const t={},c=e.querySelector("swal-image");return c&&(kn(c,["src","width","height","alt"]),c.hasAttribute("src")&&(t.imageUrl=c.getAttribute("src")),c.hasAttribute("width")&&(t.imageWidth=c.getAttribute("width")),c.hasAttribute("height")&&(t.imageHeight=c.getAttribute("height")),c.hasAttribute("alt")&&(t.imageAlt=c.getAttribute("alt"))),t},yn=e=>{const t={},c=e.querySelector("swal-icon");return c&&(kn(c,["type","color"]),c.hasAttribute("type")&&(t.icon=c.getAttribute("type")),c.hasAttribute("color")&&(t.iconColor=c.getAttribute("color")),t.iconHtml=c.innerHTML),t},Ln=e=>{const t={},c=e.querySelector("swal-input");c&&(kn(c,["type","label","placeholder","value"]),t.input=c.getAttribute("type")||"text",c.hasAttribute("label")&&(t.inputLabel=c.getAttribute("label")),c.hasAttribute("placeholder")&&(t.inputPlaceholder=c.getAttribute("placeholder")),c.hasAttribute("value")&&(t.inputValue=c.getAttribute("value")));const n=Array.from(e.querySelectorAll("swal-input-option"));return n.length&&(t.inputOptions={},n.forEach((e=>{kn(e,["value"]);const c=e.getAttribute("value"),n=e.innerHTML;t.inputOptions[c]=n}))),t},bn=(e,t)=>{const c={};for(const n in t){const s=t[n],r=e.querySelector(s);r&&(kn(r,[]),c[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return c},wn=e=>{const t=vn.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach((e=>{const c=e.tagName.toLowerCase();t.includes(c)||o(`Unrecognized element <${c}>`)}))},kn=(e,t)=>{Array.from(e.attributes).forEach((c=>{-1===t.indexOf(c.name)&&o([`Unrecognized attribute "${c.name}" on <${e.tagName.toLowerCase()}>.`,""+(t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element.")])}))},Sn=10,_n=e=>{const t=v(),c=H();"function"===typeof e.willOpen&&e.willOpen(c);const s=window.getComputedStyle(document.body),r=s.overflowY;xn(t,c,e),setTimeout((()=>{An(t,c)}),Sn),P()&&(En(t,e.scrollbarPadding,r),At()),F()||he.previousActiveElement||(he.previousActiveElement=document.activeElement),"function"===typeof e.didOpen&&setTimeout((()=>e.didOpen(c))),Y(t,n["no-transition"])},In=e=>{const t=H();if(e.target!==t)return;const c=v();t.removeEventListener(we,In),c.style.overflowY="auto"},An=(e,t)=>{we&&ae(t)?(e.style.overflowY="hidden",t.addEventListener(we,In)):e.style.overflowY="auto"},En=(e,t,c)=>{xt(),t&&"hidden"!==c&&Ft(),setTimeout((()=>{e.scrollTop=0}))},xn=(e,t,c)=>{Q(e,c.showClass.backdrop),t.style.setProperty("opacity","0","important"),ee(t,"grid"),setTimeout((()=>{Q(t,c.showClass.popup),t.style.removeProperty("opacity")}),Sn),Q([document.documentElement,document.body],n.shown),c.heightAuto&&c.backdrop&&!c.toast&&Q([document.documentElement,document.body],n["height-auto"])};var Tn={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function On(e){e.inputValidator||Object.keys(Tn).forEach((t=>{e.input===t&&(e.inputValidator=Tn[t])}))}function Nn(e){(!e.target||"string"===typeof e.target&&!document.querySelector(e.target)||"string"!==typeof e.target&&!e.target.appendChild)&&(o('Target parameter is not valid, defaulting to "body"'),e.target="body")}function Dn(e){On(e),e.showLoaderOnConfirm&&!e.preConfirm&&o("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),Nn(e),"string"===typeof e.title&&(e.title=e.title.split("\n").join("<br />")),Ce(e)}let Rn;class Pn{constructor(){if("undefined"===typeof window)return;Rn=this;for(var t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];const s=Object.freeze(this.constructor.argsToParams(c));Object.defineProperties(this,{params:{value:s,writable:!1,enumerable:!0,configurable:!0}});const r=Rn._main(Rn.params);e.promise.set(this,r)}_main(t){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};vc(Object.assign({},c,t)),he.currentInstance&&(he.currentInstance._destroy(),P()&&Et()),he.currentInstance=Rn;const n=qn(t,c);Dn(n),Object.freeze(n),he.timeout&&(he.timeout.stop(),delete he.timeout),clearTimeout(he.restoreFocusTimeout);const s=jn(Rn);return ht(Rn,n),e.innerParams.set(Rn,n),Fn(Rn,s,n)}then(t){const c=e.promise.get(this);return c.then(t)}finally(t){const c=e.promise.get(this);return c.finally(t)}}const Fn=(e,t,c)=>new Promise(((n,s)=>{const r=t=>{e.close({isDismissed:!0,dismiss:t})};It.swalPromiseResolve.set(e,n),It.swalPromiseReject.set(e,s),t.confirmButton.onclick=()=>{Dc(e)},t.denyButton.onclick=()=>{Rc(e)},t.cancelButton.onclick=()=>{Pc(e,r)},t.closeButton.onclick=()=>{r(Vt.close)},Kc(e,t,r),Mt(e,he,c,r),kc(e,c),_n(c),Un(he,c,r),Bn(t,c),setTimeout((()=>{t.container.scrollTop=0}))})),qn=(e,t)=>{const c=gn(e),n=Object.assign({},ac,t,c,e);return n.showClass=Object.assign({},ac.showClass,n.showClass),n.hideClass=Object.assign({},ac.hideClass,n.hideClass),n},jn=t=>{const c={popup:H(),container:v(),actions:x(),confirmButton:S(),denyButton:I(),cancelButton:_(),loader:E(),closeButton:N(),validationMessage:k(),progressSteps:w()};return e.domCache.set(t,c),c},Un=(e,t,c)=>{const n=O();te(n),t.timer&&(e.timeout=new zn((()=>{c("timer"),delete e.timeout}),t.timer),t.timerProgressBar&&(ee(n),K(n,t,"timerProgressBar"),setTimeout((()=>{e.timeout&&e.timeout.running&&oe(t.timer)}))))},Bn=(e,t)=>{t.toast||(d(t.allowEnterKey)?$n(e,t)||Ct(-1,1):Kn())},$n=(e,t)=>t.focusDeny&&se(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&se(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!se(e.confirmButton))&&(e.confirmButton.focus(),!0),Kn=()=>{document.activeElement instanceof HTMLElement&&"function"===typeof document.activeElement.blur&&document.activeElement.blur()};if("undefined"!==typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const e=new Date,t=localStorage.getItem("swal-initiation");t?(e.getTime()-Date.parse(t))/864e5>3&&setTimeout((()=>{document.body.style.pointerEvents="none";const e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",e.loop=!0,document.body.appendChild(e),setTimeout((()=>{e.play().catch((()=>{}))}),2500)}),500):localStorage.setItem("swal-initiation",`${e}`)}Object.assign(Pn.prototype,Lc),Object.assign(Pn,pn),Object.keys(Lc).forEach((e=>{Pn[e]=function(){if(Rn)return Rn[e](...arguments)}})),Pn.DismissReason=Vt,Pn.version="11.7.3";const Gn=Pn;return Gn.default=Gn,Gn})),"undefined"!==typeof this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2),"undefined"!=typeof document&&function(e,t){var c=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(c),c.styleSheet)c.styleSheet.disabled||(c.styleSheet.cssText=t);else try{c.innerHTML=t}catch(e){c.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')},89:function(e,t){"use strict";t.Z=(e,t)=>{const c=e.__vccOpts||e;for(const[n,s]of t)c[n]=s;return c}},678:function(e,t,c){"use strict";c.d(t,{PO:function(){return $},p7:function(){return tt}});c(7658),c(541);var n=c(3396),s=c(4870);
/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const r="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=e=>r?Symbol(e):"_vr_"+e,a=i("rvlm"),o=i("rvd"),l=i("r"),u=i("rl"),h=i("rvl"),f="undefined"!==typeof window;function d(e){return e.__esModule||r&&"Module"===e[Symbol.toStringTag]}const m=Object.assign;function p(e,t){const c={};for(const n in t){const s=t[n];c[n]=Array.isArray(s)?s.map(e):e(s)}return c}const z=()=>{};const v=/\/$/,g=e=>e.replace(v,"");function V(e,t,c="/"){let n,s={},r="",i="";const a=t.indexOf("?"),o=t.indexOf("#",a>-1?a:0);return a>-1&&(n=t.slice(0,a),r=t.slice(a+1,o>-1?o:t.length),s=e(r)),o>-1&&(n=n||t.slice(0,o),i=t.slice(o,t.length)),n=k(null!=n?n:t,c),{fullPath:n+(r&&"?")+r+i,path:n,query:s,hash:i}}function H(e,t){const c=t.query?e(t.query):"";return t.path+(c&&"?")+c+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function C(e,t,c){const n=t.matched.length-1,s=c.matched.length-1;return n>-1&&n===s&&y(t.matched[n],c.matched[s])&&L(t.params,c.params)&&e(t.query)===e(c.query)&&t.hash===c.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function L(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const c in e)if(!b(e[c],t[c]))return!1;return!0}function b(e,t){return Array.isArray(e)?w(e,t):Array.isArray(t)?w(t,e):e===t}function w(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,c)=>e===t[c])):1===e.length&&e[0]===t}function k(e,t){if(e.startsWith("/"))return e;if(!e)return t;const c=t.split("/"),n=e.split("/");let s,r,i=c.length-1;for(s=0;s<n.length;s++)if(r=n[s],1!==i&&"."!==r){if(".."!==r)break;i--}return c.slice(0,i).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var S,_;(function(e){e["pop"]="pop",e["push"]="push"})(S||(S={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(_||(_={}));function I(e){if(!e)if(f){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),g(e)}const A=/^[^#]+#/;function E(e,t){return e.replace(A,"#")+t}function x(e,t){const c=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-c.left-(t.left||0),top:n.top-c.top-(t.top||0)}}const T=()=>({left:window.pageXOffset,top:window.pageYOffset});function O(e){let t;if("el"in e){const c=e.el,n="string"===typeof c&&c.startsWith("#");0;const s="string"===typeof c?n?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!s)return;t=x(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const c=history.state?history.state.position-t:-1;return c+e}const D=new Map;function R(e,t){D.set(e,t)}function P(e){const t=D.get(e);return D.delete(e),t}let F=()=>location.protocol+"//"+location.host;function q(e,t){const{pathname:c,search:n,hash:s}=t,r=e.indexOf("#");if(r>-1){let t=s.includes(e.slice(r))?e.slice(r).length:1,c=s.slice(t);return"/"!==c[0]&&(c="/"+c),M(c,"")}const i=M(c,e);return i+n+s}function j(e,t,c,n){let s=[],r=[],i=null;const a=({state:r})=>{const a=q(e,location),o=c.value,l=t.value;let u=0;if(r){if(c.value=a,t.value=r,i&&i===o)return void(i=null);u=l?r.position-l.position:0}else n(a);s.forEach((e=>{e(c.value,o,{delta:u,type:S.pop,direction:u?u>0?_.forward:_.back:_.unknown})}))};function o(){i=c.value}function l(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return r.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(m({},e.state,{scroll:T()}),"")}function h(){for(const e of r)e();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:o,listen:l,destroy:h}}function U(e,t,c,n=!1,s=!1){return{back:e,current:t,forward:c,replaced:n,position:window.history.length,scroll:s?T():null}}function B(e){const{history:t,location:c}=window,n={value:q(e,c)},s={value:t.state};function r(n,r,i){const a=e.indexOf("#"),o=a>-1?(c.host&&document.querySelector("base")?e:e.slice(a))+n:F()+e+n;try{t[i?"replaceState":"pushState"](r,"",o),s.value=r}catch(l){console.error(l),c[i?"replace":"assign"](o)}}function i(e,c){const i=m({},t.state,U(s.value.back,e,s.value.forward,!0),c,{position:s.value.position});r(e,i,!0),n.value=e}function a(e,c){const i=m({},s.value,t.state,{forward:e,scroll:T()});r(i.current,i,!0);const a=m({},U(n.value,e,null),{position:i.position+1},c);r(e,a,!1),n.value=e}return s.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:n,state:s,push:a,replace:i}}function $(e){e=I(e);const t=B(e),c=j(e,t.state,t.location,t.replace);function n(e,t=!0){t||c.pauseListeners(),history.go(e)}const s=m({location:"",base:e,go:n,createHref:E.bind(null,e)},t,c);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function K(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Z=i("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function Y(e,t){return m(new Error,{type:e,[Z]:!0},t)}function J(e,t){return e instanceof Error&&Z in e&&(null==t||!!(e.type&t))}const X="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ce(e,t){const c=m({},ee,t),n=[];let s=c.start?"^":"";const r=[];for(const u of e){const e=u.length?[]:[90];c.strict&&!u.length&&(s+="/");for(let t=0;t<u.length;t++){const n=u[t];let i=40+(c.sensitive?.25:0);if(0===n.type)t||(s+="/"),s+=n.value.replace(te,"\\$&"),i+=40;else if(1===n.type){const{value:e,repeatable:c,optional:a,regexp:o}=n;r.push({name:e,repeatable:c,optional:a});const h=o||X;if(h!==X){i+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let f=c?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(f=a&&u.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),s+=f,i+=20,a&&(i+=-8),c&&(i+=-20),".*"===h&&(i+=-50)}e.push(i)}n.push(e)}if(c.strict&&c.end){const e=n.length-1;n[e][n[e].length-1]+=.7000000000000001}c.strict||(s+="/?"),c.end?s+="$":c.strict&&(s+="(?:/|$)");const i=new RegExp(s,c.sensitive?"":"i");function a(e){const t=e.match(i),c={};if(!t)return null;for(let n=1;n<t.length;n++){const e=t[n]||"",s=r[n-1];c[s.name]=e&&s.repeatable?e.split("/"):e}return c}function o(t){let c="",n=!1;for(const s of e){n&&c.endsWith("/")||(c+="/"),n=!1;for(const e of s)if(0===e.type)c+=e.value;else if(1===e.type){const{value:r,repeatable:i,optional:a}=e,o=r in t?t[r]:"";if(Array.isArray(o)&&!i)throw new Error(`Provided param "${r}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(o)?o.join("/"):o;if(!l){if(!a)throw new Error(`Missing required param "${r}"`);s.length<2&&(c.endsWith("/")?c=c.slice(0,-1):n=!0)}c+=l}}return c}return{re:i,score:n,keys:r,parse:a,stringify:o}}function ne(e,t){let c=0;while(c<e.length&&c<t.length){const n=t[c]-e[c];if(n)return n;c++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function se(e,t){let c=0;const n=e.score,s=t.score;while(c<n.length&&c<s.length){const e=ne(n[c],s[c]);if(e)return e;c++}return s.length-n.length}const re={type:0,value:""},ie=/[a-zA-Z0-9_]/;function ae(e){if(!e)return[[]];if("/"===e)return[[re]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${c})/"${l}": ${e}`)}let c=0,n=c;const s=[];let r;function i(){r&&s.push(r),r=[]}let a,o=0,l="",u="";function h(){l&&(0===c?r.push({type:0,value:l}):1===c||2===c||3===c?(r.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function f(){l+=a}while(o<e.length)if(a=e[o++],"\\"!==a||2===c)switch(c){case 0:"/"===a?(l&&h(),i()):":"===a?(h(),c=1):f();break;case 4:f(),c=n;break;case 1:"("===a?c=2:ie.test(a)?f():(h(),c=0,"*"!==a&&"?"!==a&&"+"!==a&&o--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:c=3:u+=a;break;case 3:h(),c=0,"*"!==a&&"?"!==a&&"+"!==a&&o--,u="";break;default:t("Unknown state");break}else n=c,c=4;return 2===c&&t(`Unfinished custom RegExp for param "${l}"`),h(),i(),s}function oe(e,t,c){const n=ce(ae(e.path),c);const s=m(n,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf===!t.record.aliasOf&&t.children.push(s),s}function le(e,t){const c=[],n=new Map;function s(e){return n.get(e)}function r(e,c,n){const s=!n,a=he(e);a.aliasOf=n&&n.record;const l=pe(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(m({},a,{components:n?n.record.components:a.components,path:e,aliasOf:n?n.record:a}))}let h,f;for(const t of u){const{path:u}=t;if(c&&"/"!==u[0]){const e=c.record.path,n="/"===e[e.length-1]?"":"/";t.path=c.record.path+(u&&n+u)}if(h=oe(t,c,l),n?n.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),s&&e.name&&!de(h)&&i(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)r(e[t],h,n&&n.children[t])}n=n||h,o(h)}return f?()=>{i(f)}:z}function i(e){if(G(e)){const t=n.get(e);t&&(n.delete(e),c.splice(c.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{const t=c.indexOf(e);t>-1&&(c.splice(t,1),e.record.name&&n.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function a(){return c}function o(e){let t=0;while(t<c.length&&se(e,c[t])>=0&&(e.record.path!==c[t].record.path||!ze(e,c[t])))t++;c.splice(t,0,e),e.record.name&&!de(e)&&n.set(e.record.name,e)}function l(e,t){let s,r,i,a={};if("name"in e&&e.name){if(s=n.get(e.name),!s)throw Y(1,{location:e});i=s.record.name,a=m(ue(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),r=s.stringify(a)}else if("path"in e)r=e.path,s=c.find((e=>e.re.test(r))),s&&(a=s.parse(r),i=s.record.name);else{if(s=t.name?n.get(t.name):c.find((e=>e.re.test(t.path))),!s)throw Y(1,{location:e,currentLocation:t});i=s.record.name,a=m({},t.params,e.params),r=s.stringify(a)}const o=[];let l=s;while(l)o.unshift(l.record),l=l.parent;return{name:i,path:r,params:a,matched:o,meta:me(o)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>r(e))),{addRoute:r,resolve:l,removeRoute:i,getRoutes:a,getRecordMatcher:s}}function ue(e,t){const c={};for(const n of t)n in e&&(c[n]=e[n]);return c}function he(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},c=e.props||!1;if("component"in e)t.default=c;else for(const n in e.components)t[n]="boolean"===typeof c?c:c[n];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function me(e){return e.reduce(((e,t)=>m(e,t.meta)),{})}function pe(e,t){const c={};for(const n in e)c[n]=n in t?t[n]:e[n];return c}function ze(e,t){return t.children.some((t=>t===e||ze(e,t)))}const ve=/#/g,ge=/&/g,Ve=/\//g,He=/=/g,Me=/\?/g,Ce=/\+/g,ye=/%5B/g,Le=/%5D/g,be=/%5E/g,we=/%60/g,ke=/%7B/g,Se=/%7C/g,_e=/%7D/g,Ie=/%20/g;function Ae(e){return encodeURI(""+e).replace(Se,"|").replace(ye,"[").replace(Le,"]")}function Ee(e){return Ae(e).replace(ke,"{").replace(_e,"}").replace(be,"^")}function xe(e){return Ae(e).replace(Ce,"%2B").replace(Ie,"+").replace(ve,"%23").replace(ge,"%26").replace(we,"`").replace(ke,"{").replace(_e,"}").replace(be,"^")}function Te(e){return xe(e).replace(He,"%3D")}function Oe(e){return Ae(e).replace(ve,"%23").replace(Me,"%3F")}function Ne(e){return null==e?"":Oe(e).replace(Ve,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Re(e){const t={};if(""===e||"?"===e)return t;const c="?"===e[0],n=(c?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const e=n[s].replace(Ce," "),c=e.indexOf("="),r=De(c<0?e:e.slice(0,c)),i=c<0?null:De(e.slice(c+1));if(r in t){let e=t[r];Array.isArray(e)||(e=t[r]=[e]),e.push(i)}else t[r]=i}return t}function Pe(e){let t="";for(let c in e){const n=e[c];if(c=Te(c),null==n){void 0!==n&&(t+=(t.length?"&":"")+c);continue}const s=Array.isArray(n)?n.map((e=>e&&xe(e))):[n&&xe(n)];s.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+c,null!=e&&(t+="="+e))}))}return t}function Fe(e){const t={};for(const c in e){const n=e[c];void 0!==n&&(t[c]=Array.isArray(n)?n.map((e=>null==e?null:""+e)):null==n?n:""+n)}return t}function qe(){let e=[];function t(t){return e.push(t),()=>{const c=e.indexOf(t);c>-1&&e.splice(c,1)}}function c(){e=[]}return{add:t,list:()=>e,reset:c}}function je(e,t,c,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise(((i,a)=>{const o=e=>{!1===e?a(Y(4,{from:c,to:t})):e instanceof Error?a(e):K(e)?a(Y(2,{from:t,to:e})):(r&&n.enterCallbacks[s]===r&&"function"===typeof e&&r.push(e),i())},l=e.call(n&&n.instances[s],t,c,o);let u=Promise.resolve(l);e.length<3&&(u=u.then(o)),u.catch((e=>a(e)))}))}function Ue(e,t,c,n){const s=[];for(const r of e)for(const e in r.components){let i=r.components[e];if("beforeRouteEnter"===t||r.instances[e])if(Be(i)){const a=i.__vccOpts||i,o=a[t];o&&s.push(je(o,c,n,r,e))}else{let a=i();0,s.push((()=>a.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${r.path}"`));const i=d(s)?s.default:s;r.components[e]=i;const a=i.__vccOpts||i,o=a[t];return o&&je(o,c,n,r,e)()}))))}}return s}function Be(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=(0,n.f3)(l),c=(0,n.f3)(u),r=(0,n.Fl)((()=>t.resolve((0,s.SU)(e.to)))),i=(0,n.Fl)((()=>{const{matched:e}=r.value,{length:t}=e,n=e[t-1],s=c.matched;if(!n||!s.length)return-1;const i=s.findIndex(y.bind(null,n));if(i>-1)return i;const a=Qe(e[t-2]);return t>1&&Qe(n)===a&&s[s.length-1].path!==a?s.findIndex(y.bind(null,e[t-2])):i})),a=(0,n.Fl)((()=>i.value>-1&&Ze(c.params,r.value.params))),o=(0,n.Fl)((()=>i.value>-1&&i.value===c.matched.length-1&&L(c.params,r.value.params)));function h(c={}){return We(c)?t[(0,s.SU)(e.replace)?"replace":"push"]((0,s.SU)(e.to)).catch(z):Promise.resolve()}return{route:r,href:(0,n.Fl)((()=>r.value.href)),isActive:a,isExactActive:o,navigate:h}}const Ke=(0,n.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const c=(0,s.qj)($e(e)),{options:r}=(0,n.f3)(l),i=(0,n.Fl)((()=>({[Ye(e.activeClass,r.linkActiveClass,"router-link-active")]:c.isActive,[Ye(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive})));return()=>{const s=t.default&&t.default(c);return e.custom?s:(0,n.h)("a",{"aria-current":c.isExactActive?e.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:i.value},s)}}}),Ge=Ke;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ze(e,t){for(const c in t){const n=t[c],s=e[c];if("string"===typeof n){if(n!==s)return!1}else if(!Array.isArray(s)||s.length!==n.length||n.some(((e,t)=>e!==s[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,c)=>null!=e?e:null!=t?t:c,Je=(0,n.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:c}){const r=(0,n.f3)(h),i=(0,n.Fl)((()=>e.route||r.value)),l=(0,n.f3)(o,0),u=(0,n.Fl)((()=>i.value.matched[l]));(0,n.JJ)(o,l+1),(0,n.JJ)(a,u),(0,n.JJ)(h,i);const f=(0,s.iH)();return(0,n.YP)((()=>[f.value,u.value,e.name]),(([e,t,c],[n,s,r])=>{t&&(t.instances[c]=e,s&&s!==t&&e&&e===n&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&y(t,s)&&n||(t.enterCallbacks[c]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const s=i.value,r=u.value,a=r&&r.components[e.name],o=e.name;if(!a)return Xe(c.default,{Component:a,route:s});const l=r.props[e.name],h=l?!0===l?s.params:"function"===typeof l?l(s):l:null,d=e=>{e.component.isUnmounted&&(r.instances[o]=null)},p=(0,n.h)(a,m({},h,t,{onVnodeUnmounted:d,ref:f}));return Xe(c.default,{Component:p,route:s})||p}}});function Xe(e,t){if(!e)return null;const c=e(t);return 1===c.length?c[0]:c}const et=Je;function tt(e){const t=le(e.routes,e),c=e.parseQuery||Re,r=e.stringifyQuery||Pe,i=e.history;const a=qe(),o=qe(),d=qe(),v=(0,s.XI)(W);let g=W;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const M=p.bind(null,(e=>""+e)),y=p.bind(null,Ne),L=p.bind(null,De);function b(e,c){let n,s;return G(e)?(n=t.getRecordMatcher(e),s=c):s=e,t.addRoute(s,n)}function w(e){const c=t.getRecordMatcher(e);c&&t.removeRoute(c)}function k(){return t.getRoutes().map((e=>e.record))}function _(e){return!!t.getRecordMatcher(e)}function I(e,n){if(n=m({},n||v.value),"string"===typeof e){const s=V(c,e,n.path),r=t.resolve({path:s.path},n),a=i.createHref(s.fullPath);return m(s,r,{params:L(r.params),hash:De(s.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=m({},e,{path:V(c,e.path,n.path).path});else{const t=m({},e.params);for(const e in t)null==t[e]&&delete t[e];s=m({},e,{params:y(e.params)}),n.params=y(n.params)}const a=t.resolve(s,n),o=e.hash||"";a.params=M(L(a.params));const l=H(r,m({},e,{hash:Ee(o),path:a.path})),u=i.createHref(l);return m({fullPath:l,hash:o,query:r===Pe?Fe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function A(e){return"string"===typeof e?V(c,e,v.value.path):m({},e)}function E(e,t){if(g!==e)return Y(8,{from:t,to:e})}function x(e){return q(e)}function D(e){return x(m(A(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:c}=t;let n="function"===typeof c?c(e):c;return"string"===typeof n&&(n=n.includes("?")||n.includes("#")?n=A(n):{path:n},n.params={}),m({query:e.query,hash:e.hash,params:e.params},n)}}function q(e,t){const c=g=I(e),n=v.value,s=e.state,i=e.force,a=!0===e.replace,o=F(c);if(o)return q(m(A(o),{state:s,force:i,replace:a}),t||c);const l=c;let u;return l.redirectedFrom=t,!i&&C(r,n,c)&&(u=Y(16,{to:l,from:n}),se(n,n,!0,!1)),(u?Promise.resolve(u):U(l,n)).catch((e=>J(e)?J(e,2)?e:ne(e):te(e,l,n))).then((e=>{if(e){if(J(e,2))return q(m(A(e.to),{state:s,force:i,replace:a}),t||l)}else e=$(l,n,!0,a,s);return B(l,n,e),e}))}function j(e,t){const c=E(e,t);return c?Promise.reject(c):Promise.resolve()}function U(e,t){let c;const[n,s,r]=nt(e,t);c=Ue(n.reverse(),"beforeRouteLeave",e,t);for(const a of n)a.leaveGuards.forEach((n=>{c.push(je(n,e,t))}));const i=j.bind(null,e,t);return c.push(i),ct(c).then((()=>{c=[];for(const n of a.list())c.push(je(n,e,t));return c.push(i),ct(c)})).then((()=>{c=Ue(s,"beforeRouteUpdate",e,t);for(const n of s)n.updateGuards.forEach((n=>{c.push(je(n,e,t))}));return c.push(i),ct(c)})).then((()=>{c=[];for(const n of e.matched)if(n.beforeEnter&&!t.matched.includes(n))if(Array.isArray(n.beforeEnter))for(const s of n.beforeEnter)c.push(je(s,e,t));else c.push(je(n.beforeEnter,e,t));return c.push(i),ct(c)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),c=Ue(r,"beforeRouteEnter",e,t),c.push(i),ct(c)))).then((()=>{c=[];for(const n of o.list())c.push(je(n,e,t));return c.push(i),ct(c)})).catch((e=>J(e,8)?e:Promise.reject(e)))}function B(e,t,c){for(const n of d.list())n(e,t,c)}function $(e,t,c,n,s){const r=E(e,t);if(r)return r;const a=t===W,o=f?history.state:{};c&&(n||a?i.replace(e.fullPath,m({scroll:a&&o&&o.scroll},s)):i.push(e.fullPath,s)),v.value=e,se(e,t,c,a),ne()}let K;function Z(){K=i.listen(((e,t,c)=>{const n=I(e),s=F(n);if(s)return void q(m(s,{replace:!0}),n).catch(z);g=n;const r=v.value;f&&R(N(r.fullPath,c.delta),T()),U(n,r).catch((e=>J(e,12)?e:J(e,2)?(q(e.to,n).then((e=>{J(e,20)&&!c.delta&&c.type===S.pop&&i.go(-1,!1)})).catch(z),Promise.reject()):(c.delta&&i.go(-c.delta,!1),te(e,n,r)))).then((e=>{e=e||$(n,r,!1),e&&(c.delta?i.go(-c.delta,!1):c.type===S.pop&&J(e,20)&&i.go(-1,!1)),B(n,r,e)})).catch(z)}))}let Q,X=qe(),ee=qe();function te(e,t,c){ne(e);const n=ee.list();return n.length?n.forEach((n=>n(e,t,c))):console.error(e),Promise.reject(e)}function ce(){return Q&&v.value!==W?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function ne(e){return Q||(Q=!e,Z(),X.list().forEach((([t,c])=>e?c(e):t())),X.reset()),e}function se(t,c,s,r){const{scrollBehavior:i}=e;if(!f||!i)return Promise.resolve();const a=!s&&P(N(t.fullPath,0))||(r||!s)&&history.state&&history.state.scroll||null;return(0,n.Y3)().then((()=>i(t,c,a))).then((e=>e&&O(e))).catch((e=>te(e,t,c)))}const re=e=>i.go(e);let ie;const ae=new Set,oe={currentRoute:v,addRoute:b,removeRoute:w,hasRoute:_,getRoutes:k,resolve:I,options:e,push:x,replace:D,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:a.add,beforeResolve:o.add,afterEach:d.add,onError:ee.add,isReady:ce,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(v)}),f&&!ie&&v.value===W&&(ie=!0,x(i.location).catch((e=>{0})));const c={};for(const s in W)c[s]=(0,n.Fl)((()=>v.value[s]));e.provide(l,t),e.provide(u,(0,s.qj)(c)),e.provide(h,v);const r=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(g=W,K&&K(),v.value=W,ie=!1,Q=!1),r()}}};return oe}function ct(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function nt(e,t){const c=[],n=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const r=t.matched[i];r&&(e.matched.find((e=>y(e,r)))?n.push(r):c.push(r));const a=e.matched[i];a&&(t.matched.find((e=>y(e,a)))||s.push(a))}return[c,n,s]}},65:function(e,t,c){"use strict";c.d(t,{MT:function(){return te},oR:function(){return v}});c(7658),c(541);var n=c(3396),s=c(4870);function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof c.g?c.g:{}}const a="function"===typeof Proxy,o="devtools-plugin:setup",l="plugin:settings:set";let u,h;function f(){var e;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,h=window.performance):"undefined"!==typeof c.g&&(null===(e=c.g.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,h=c.g.perf_hooks.performance):u=!1),u}function d(){return f()?h.now():Date.now()}class m{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const c={};if(e.settings)for(const i in e.settings){const t=e.settings[i];c[i]=t.defaultValue}const n=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},c);try{const e=localStorage.getItem(n),t=JSON.parse(e);Object.assign(s,t)}catch(r){}this.fallbacks={getSettings(){return s},setSettings(e){try{localStorage.setItem(n,JSON.stringify(e))}catch(r){}s=e},now(){return d()}},t&&t.on(l,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((c=>{this.targetQueue.push({method:t,args:e,resolve:c})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function p(e,t){const c=e,n=i(),s=r(),l=a&&c.enableEarlyProxy;if(!s||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const e=l?new m(c,s):null,r=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:c,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit(o,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var z="store";function v(e){return void 0===e&&(e=null),(0,n.f3)(null!==e?e:z)}function g(e,t){Object.keys(e).forEach((function(c){return t(e[c],c)}))}function V(e){return null!==e&&"object"===typeof e}function H(e){return e&&"function"===typeof e.then}function M(e,t){return function(){return e(t)}}function C(e,t,c){return t.indexOf(e)<0&&(c&&c.prepend?t.unshift(e):t.push(e)),function(){var c=t.indexOf(e);c>-1&&t.splice(c,1)}}function y(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var c=e.state;b(e,c,[],e._modules.root,!0),L(e,c,t)}function L(e,t,c){var n=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,i={};g(r,(function(t,c){i[c]=M(t,e),Object.defineProperty(e.getters,c,{get:function(){return i[c]()},enumerable:!0})})),e._state=(0,s.qj)({data:t}),e.strict&&A(e),n&&c&&e._withCommit((function(){n.data=null}))}function b(e,t,c,n,s){var r=!c.length,i=e._modules.getNamespace(c);if(n.namespaced&&(e._modulesNamespaceMap[i],e._modulesNamespaceMap[i]=n),!r&&!s){var a=E(t,c.slice(0,-1)),o=c[c.length-1];e._withCommit((function(){a[o]=n.state}))}var l=n.context=w(e,i,c);n.forEachMutation((function(t,c){var n=i+c;S(e,n,t,l)})),n.forEachAction((function(t,c){var n=t.root?c:i+c,s=t.handler||t;_(e,n,s,l)})),n.forEachGetter((function(t,c){var n=i+c;I(e,n,t,l)})),n.forEachChild((function(n,r){b(e,t,c.concat(r),n,s)}))}function w(e,t,c){var n=""===t,s={dispatch:n?e.dispatch:function(c,n,s){var r=x(c,n,s),i=r.payload,a=r.options,o=r.type;return a&&a.root||(o=t+o),e.dispatch(o,i)},commit:n?e.commit:function(c,n,s){var r=x(c,n,s),i=r.payload,a=r.options,o=r.type;a&&a.root||(o=t+o),e.commit(o,i,a)}};return Object.defineProperties(s,{getters:{get:n?function(){return e.getters}:function(){return k(e,t)}},state:{get:function(){return E(e.state,c)}}}),s}function k(e,t){if(!e._makeLocalGettersCache[t]){var c={},n=t.length;Object.keys(e.getters).forEach((function(s){if(s.slice(0,n)===t){var r=s.slice(n);Object.defineProperty(c,r,{get:function(){return e.getters[s]},enumerable:!0})}})),e._makeLocalGettersCache[t]=c}return e._makeLocalGettersCache[t]}function S(e,t,c,n){var s=e._mutations[t]||(e._mutations[t]=[]);s.push((function(t){c.call(e,n.state,t)}))}function _(e,t,c,n){var s=e._actions[t]||(e._actions[t]=[]);s.push((function(t){var s=c.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},t);return H(s)||(s=Promise.resolve(s)),e._devtoolHook?s.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):s}))}function I(e,t,c,n){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return c(n.state,n.getters,e.state,e.getters)})}function A(e){(0,n.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function E(e,t){return t.reduce((function(e,t){return e[t]}),e)}function x(e,t,c){return V(e)&&e.type&&(c=t,t=e,e=e.type),{type:e,payload:t,options:c}}var T="vuex bindings",O="vuex:mutations",N="vuex:actions",D="vuex",R=0;function P(e,t){p({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[T]},(function(c){c.addTimelineLayer({id:O,label:"Vuex Mutations",color:F}),c.addTimelineLayer({id:N,label:"Vuex Actions",color:F}),c.addInspector({id:D,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),c.on.getInspectorTree((function(c){if(c.app===e&&c.inspectorId===D)if(c.filter){var n=[];K(n,t._modules.root,c.filter,""),c.rootNodes=n}else c.rootNodes=[$(t._modules.root,"")]})),c.on.getInspectorState((function(c){if(c.app===e&&c.inspectorId===D){var n=c.nodeId;k(t,n),c.state=G(Z(t._modules,n),"root"===n?t.getters:t._makeLocalGettersCache,n)}})),c.on.editInspectorState((function(c){if(c.app===e&&c.inspectorId===D){var n=c.nodeId,s=c.path;"root"!==n&&(s=n.split("/").filter(Boolean).concat(s)),t._withCommit((function(){c.set(t._state.data,s,c.state.value)}))}})),t.subscribe((function(e,t){var n={};e.payload&&(n.payload=e.payload),n.state=t,c.notifyComponentUpdate(),c.sendInspectorTree(D),c.sendInspectorState(D),c.addTimelineEvent({layerId:O,event:{time:Date.now(),title:e.type,data:n}})})),t.subscribeAction({before:function(e,t){var n={};e.payload&&(n.payload=e.payload),e._id=R++,e._time=Date.now(),n.state=t,c.addTimelineEvent({layerId:N,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:n}})},after:function(e,t){var n={},s=Date.now()-e._time;n.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},e.payload&&(n.payload=e.payload),n.state=t,c.addTimelineEvent({layerId:N,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:n}})}})}))}var F=8702998,q=6710886,j=16777215,U={label:"namespaced",textColor:j,backgroundColor:q};function B(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function $(e,t){return{id:t||"root",label:B(t),tags:e.namespaced?[U]:[],children:Object.keys(e._children).map((function(c){return $(e._children[c],t+c+"/")}))}}function K(e,t,c,n){n.includes(c)&&e.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:t.namespaced?[U]:[]}),Object.keys(t._children).forEach((function(s){K(e,t._children[s],c,n+s+"/")}))}function G(e,t,c){t="root"===c?t:t[c];var n=Object.keys(t),s={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(n.length){var r=W(t);s.getters=Object.keys(r).map((function(e){return{key:e.endsWith("/")?B(e):e,editable:!1,value:Q((function(){return r[e]}))}}))}return s}function W(e){var t={};return Object.keys(e).forEach((function(c){var n=c.split("/");if(n.length>1){var s=t,r=n.pop();n.forEach((function(e){s[e]||(s[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),s=s[e]._custom.value})),s[r]=Q((function(){return e[c]}))}else t[c]=Q((function(){return e[c]}))})),t}function Z(e,t){var c=t.split("/").filter((function(e){return e}));return c.reduce((function(e,n,s){var r=e[n];if(!r)throw new Error('Missing module "'+n+'" for path "'+t+'".');return s===c.length-1?r:r._children}),"root"===t?e:e.root._children)}function Q(e){try{return e()}catch(t){return t}}var Y=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var c=e.state;this.state=("function"===typeof c?c():c)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(e,t){this._children[e]=t},Y.prototype.removeChild=function(e){delete this._children[e]},Y.prototype.getChild=function(e){return this._children[e]},Y.prototype.hasChild=function(e){return e in this._children},Y.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Y.prototype.forEachChild=function(e){g(this._children,e)},Y.prototype.forEachGetter=function(e){this._rawModule.getters&&g(this._rawModule.getters,e)},Y.prototype.forEachAction=function(e){this._rawModule.actions&&g(this._rawModule.actions,e)},Y.prototype.forEachMutation=function(e){this._rawModule.mutations&&g(this._rawModule.mutations,e)},Object.defineProperties(Y.prototype,J);var X=function(e){this.register([],e,!1)};function ee(e,t,c){if(t.update(c),c.modules)for(var n in c.modules){if(!t.getChild(n))return void 0;ee(e.concat(n),t.getChild(n),c.modules[n])}}X.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},X.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,c){return t=t.getChild(c),e+(t.namespaced?c+"/":"")}),"")},X.prototype.update=function(e){ee([],this.root,e)},X.prototype.register=function(e,t,c){var n=this;void 0===c&&(c=!0);var s=new Y(t,c);if(0===e.length)this.root=s;else{var r=this.get(e.slice(0,-1));r.addChild(e[e.length-1],s)}t.modules&&g(t.modules,(function(t,s){n.register(e.concat(s),t,c)}))},X.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),c=e[e.length-1],n=t.getChild(c);n&&n.runtime&&t.removeChild(c)},X.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),c=e[e.length-1];return!!t&&t.hasChild(c)};function te(e){return new ce(e)}var ce=function(e){var t=this;void 0===e&&(e={});var c=e.plugins;void 0===c&&(c=[]);var n=e.strict;void 0===n&&(n=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var r=this,i=this,a=i.dispatch,o=i.commit;this.dispatch=function(e,t){return a.call(r,e,t)},this.commit=function(e,t,c){return o.call(r,e,t,c)},this.strict=n;var l=this._modules.root.state;b(this,l,[],this._modules.root),L(this,l),c.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};ce.prototype.install=function(e,t){e.provide(t||z,this),e.config.globalProperties.$store=this;var c=void 0!==this._devtools&&this._devtools;c&&P(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},ce.prototype.commit=function(e,t,c){var n=this,s=x(e,t,c),r=s.type,i=s.payload,a=(s.options,{type:r,payload:i}),o=this._mutations[r];o&&(this._withCommit((function(){o.forEach((function(e){e(i)}))})),this._subscribers.slice().forEach((function(e){return e(a,n.state)})))},ce.prototype.dispatch=function(e,t){var c=this,n=x(e,t),s=n.type,r=n.payload,i={type:s,payload:r},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(i,c.state)}))}catch(l){0}var o=a.length>1?Promise.all(a.map((function(e){return e(r)}))):a[0](r);return new Promise((function(e,t){o.then((function(t){try{c._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(i,c.state)}))}catch(l){0}e(t)}),(function(e){try{c._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(i,c.state,e)}))}catch(l){0}t(e)}))}))}},ce.prototype.subscribe=function(e,t){return C(e,this._subscribers,t)},ce.prototype.subscribeAction=function(e,t){var c="function"===typeof e?{before:e}:e;return C(c,this._actionSubscribers,t)},ce.prototype.watch=function(e,t,c){var s=this;return(0,n.YP)((function(){return e(s.state,s.getters)}),t,Object.assign({},c))},ce.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},ce.prototype.registerModule=function(e,t,c){void 0===c&&(c={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),b(this,this.state,e,this._modules.get(e),c.preserveState),L(this,this.state)},ce.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var c=E(t.state,e.slice(0,-1));delete c[e[e.length-1]]})),y(this)},ce.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},ce.prototype.hotUpdate=function(e){this._modules.update(e),y(this,!0)},ce.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(ce.prototype,ne);ie((function(e,t){var c={};return se(t).forEach((function(t){var n=t.key,s=t.val;c[n]=function(){var t=this.$store.state,c=this.$store.getters;if(e){var n=ae(this.$store,"mapState",e);if(!n)return;t=n.context.state,c=n.context.getters}return"function"===typeof s?s.call(this,t,c):t[s]},c[n].vuex=!0})),c})),ie((function(e,t){var c={};return se(t).forEach((function(t){var n=t.key,s=t.val;c[n]=function(){var t=[],c=arguments.length;while(c--)t[c]=arguments[c];var n=this.$store.commit;if(e){var r=ae(this.$store,"mapMutations",e);if(!r)return;n=r.context.commit}return"function"===typeof s?s.apply(this,[n].concat(t)):n.apply(this.$store,[s].concat(t))}})),c})),ie((function(e,t){var c={};return se(t).forEach((function(t){var n=t.key,s=t.val;s=e+s,c[n]=function(){if(!e||ae(this.$store,"mapGetters",e))return this.$store.getters[s]},c[n].vuex=!0})),c})),ie((function(e,t){var c={};return se(t).forEach((function(t){var n=t.key,s=t.val;c[n]=function(){var t=[],c=arguments.length;while(c--)t[c]=arguments[c];var n=this.$store.dispatch;if(e){var r=ae(this.$store,"mapActions",e);if(!r)return;n=r.context.dispatch}return"function"===typeof s?s.apply(this,[n].concat(t)):n.apply(this.$store,[s].concat(t))}})),c}));function se(e){return re(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function re(e){return Array.isArray(e)||V(e)}function ie(e){return function(t,c){return"string"!==typeof t?(c=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,c)}}function ae(e,t,c){var n=e._modulesNamespaceMap[c];return n}},2661:function(e,t,c){"use strict";c.d(t,{Z:function(){return v}});var n=c(223),s=c(7142),r=c(7077),i=c(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,r._addComponent)(e,new s.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,r.deleteApp)(this._delegate))))}_getService(e,t=r._DEFAULT_ENTRY_NAME){var c;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(c=n.getComponent())||void 0===c?void 0:c.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=r._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,r._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,r._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new n.LL("app-compat","Firebase",o);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},c={__esModule:!0,initializeApp:a,app:i,registerVersion:r.registerVersion,setLogLevel:r.setLogLevel,onLog:r.onLog,apps:null,SDK_VERSION:r.SDK_VERSION,INTERNAL:{registerComponent:u,removeApp:s,useAsService:h,modularAPIs:r}};function s(e){delete t[e]}function i(e){if(e=e||r._DEFAULT_ENTRY_NAME,!(0,n.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}function a(s,i={}){const a=r.initializeApp(s,i);if((0,n.r3)(t,a.name))return t[a.name];const o=new e(a,c);return t[a.name]=o,o}function o(){return Object.keys(t).map((e=>t[e]))}function u(t){const s=t.name,a=s.replace("-compat","");if(r._registerComponent(t)&&"PUBLIC"===t.type){const r=(e=i())=>{if("function"!==typeof e[a])throw l.create("invalid-app-argument",{appName:s});return e[a]()};void 0!==t.serviceProps&&(0,n.ZB)(r,t.serviceProps),c[a]=r,e.prototype[a]=function(...e){const c=this._getService.bind(this,s);return c.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?c[a]:null}function h(e,t){if("serverAuth"===t)return null;const c=t;return c}return c["default"]=c,Object.defineProperty(c,"apps",{get:o}),i["App"]=e,c}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=u(a);function t(t){(0,n.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:n.ne,ErrorFactory:n.LL,deepExtend:n.ZB}),e}const f=h(),d=new i.Yd("@firebase/app-compat"),m="@firebase/app-compat",p="0.2.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){(0,r.registerVersion)(m,p,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(I(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function I(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const A="@firebase/app",E="0.9.3",x=new s.Yd("@firebase/app"),T="@firebase/app-compat",O="@firebase/analytics-compat",N="@firebase/analytics",D="@firebase/app-check-compat",R="@firebase/app-check",P="@firebase/auth",F="@firebase/auth-compat",q="@firebase/database",j="@firebase/database-compat",U="@firebase/functions",B="@firebase/functions-compat",$="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Z="@firebase/performance",Q="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ce="@firebase/firestore-compat",ne="firebase",se="9.17.1",re="[DEFAULT]",ie={[A]:"fire-core",[T]:"fire-core-compat",[N]:"fire-analytics",[O]:"fire-analytics-compat",[R]:"fire-app-check",[D]:"fire-app-check-compat",[P]:"fire-auth",[F]:"fire-auth-compat",[q]:"fire-rtdb",[j]:"fire-rtdb-compat",[U]:"fire-fn",[B]:"fire-fn-compat",[$]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Z]:"fire-perf",[Q]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ce]:"fire-fst-compat","fire-js":"fire-js",[ne]:"fire-js-all"},ae=new Map,oe=new Map;function le(e,t){try{e.container.addComponent(t)}catch(c){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,c)}}function ue(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(oe.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;oe.set(t,e);for(const c of ae.values())le(c,e);return!0}function fe(e,t){const c=e.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),e.container.getProvider(t)}function de(e,t,c=re){fe(e,t).clearInstance(c)}function me(){oe.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *
 *
/**
 * @license
 *
 *