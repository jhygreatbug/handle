import{N as v}from"./vendor.1d256264.js";var D=globalThis&&globalThis.__awaiter||function(e,t,n,r){function o(c){return c instanceof n?c:new n(function(i){i(c)})}return new(n||(n=Promise))(function(c,i){function l(s){try{u(r.next(s))}catch(a){i(a)}}function f(s){try{u(r.throw(s))}catch(a){i(a)}}function u(s){s.done?c(s.value):o(s.value).then(l,f)}u((r=r.apply(e,t||[])).next())})};const U="application/font-woff",k="image/jpeg",J={woff:U,woff2:U,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:k,jpeg:k,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function Q(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function b(e){const t=Q(e).toLowerCase();return J[t]||""}function Y(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}function P(e){return e.search(/^(data:)/)!==-1}function x(e,t){return`data:${t};base64,${e}`}function Z(e){return e.split(/,/)[1]}const N=function(){let t=0;const n=()=>`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${n()}${t}`)}();function p(e){const t=[];for(let n=0,r=e.length;n<r;n+=1)t.push(e[n]);return t}function S(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}function ee(e){const t=S(e,"border-left-width"),n=S(e,"border-right-width");return e.clientWidth+t+n}function te(e){const t=S(e,"border-top-width"),n=S(e,"border-bottom-width");return e.clientHeight+t+n}function ne(){let e,t;try{t=process}catch{}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}function $(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="sync",r.src=e})}function re(e){return D(this,void 0,void 0,function*(){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)})}function oe(e,t,n){return D(this,void 0,void 0,function*(){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),c=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${t} ${n}`),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("externalResourcesRequired","true"),o.appendChild(c),c.appendChild(e),re(o)})}const C={};function ie(e){let t=e.replace(/\?.*/,"");return/ttf|otf|eot|woff2?/i.test(t)&&(t=t.replace(/.*\//,"")),t}function _(e,t){const n=ie(e);if(C[n]!=null)return C[n];t.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());const r=c=>{let i="";if(t.imagePlaceholder){const f=t.imagePlaceholder.split(/,/);f&&f[1]&&(i=f[1])}let l=`Failed to fetch resource: ${e}`;return c&&(l=typeof c=="string"?c:c.message),l&&console.error(l),{blob:i,contentType:""}},o=window.fetch(e).then(c=>c.blob().then(i=>({blob:i,contentType:c.headers.get("Content-Type")||""}))).then(({blob:c,contentType:i})=>new Promise((l,f)=>{const u=new FileReader;u.onloadend=()=>l({contentType:i,blob:u.result}),u.onerror=f,u.readAsDataURL(c)})).then(({blob:c,contentType:i})=>({contentType:i,blob:Z(c)})).catch(r);return C[n]=o,o}function ce(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function se(e){return p(e).map(t=>{const n=e.getPropertyValue(t),r=e.getPropertyPriority(t);return`${t}: ${n}${r?" !important":""};`}).join(" ")}function ue(e,t,n){const r=`.${e}:${t}`,o=n.cssText?ce(n):se(n);return document.createTextNode(`${r}{${o}}`)}function M(e,t,n){const r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(o===""||o==="none")return;const c=N();try{t.className=`${t.className} ${c}`}catch{return}const i=document.createElement("style");i.appendChild(ue(c,n,r)),t.appendChild(i)}function ae(e,t){M(e,t,":before"),M(e,t,":after")}var g=globalThis&&globalThis.__awaiter||function(e,t,n,r){function o(c){return c instanceof n?c:new n(function(i){i(c)})}return new(n||(n=Promise))(function(c,i){function l(s){try{u(r.next(s))}catch(a){i(a)}}function f(s){try{u(r.throw(s))}catch(a){i(a)}}function u(s){s.done?c(s.value):o(s.value).then(l,f)}u((r=r.apply(e,t||[])).next())})};function le(e){return g(this,void 0,void 0,function*(){const t=e.toDataURL();return t==="data:,"?Promise.resolve(e.cloneNode(!1)):$(t)})}function fe(e,t){return g(this,void 0,void 0,function*(){return Promise.resolve(e.poster).then(n=>_(n,t)).then(n=>x(n.blob,b(e.poster)||n.contentType)).then(n=>$(n))})}function he(e,t){return g(this,void 0,void 0,function*(){return e instanceof HTMLCanvasElement?le(e):e instanceof HTMLVideoElement&&e.poster?fe(e,t):Promise.resolve(e.cloneNode(!1))})}const de=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT";function me(e,t,n){var r;return g(this,void 0,void 0,function*(){const o=de(e)&&e.assignedNodes?p(e.assignedNodes()):p(((r=e.shadowRoot)!==null&&r!==void 0?r:e).childNodes);return o.length===0||e instanceof HTMLVideoElement?Promise.resolve(t):o.reduce((c,i)=>c.then(()=>B(i,n)).then(l=>{l&&t.appendChild(l)}),Promise.resolve()).then(()=>t)})}function pe(e,t){const n=window.getComputedStyle(e),r=t.style;!r||(n.cssText?r.cssText=n.cssText:p(n).forEach(o=>{r.setProperty(o,n.getPropertyValue(o),n.getPropertyPriority(o))}))}function ge(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function we(e,t){return g(this,void 0,void 0,function*(){return t instanceof Element?Promise.resolve().then(()=>pe(e,t)).then(()=>ae(e,t)).then(()=>ge(e,t)).then(()=>t):Promise.resolve(t)})}function B(e,t,n){return g(this,void 0,void 0,function*(){return!n&&t.filter&&!t.filter(e)?Promise.resolve(null):Promise.resolve(e).then(r=>he(r,t)).then(r=>me(e,r,t)).then(r=>we(e,r))})}var ve=globalThis&&globalThis.__awaiter||function(e,t,n,r){function o(c){return c instanceof n?c:new n(function(i){i(c)})}return new(n||(n=Promise))(function(c,i){function l(s){try{u(r.next(s))}catch(a){i(a)}}function f(s){try{u(r.throw(s))}catch(a){i(a)}}function u(s){s.done?c(s.value):o(s.value).then(l,f)}u((r=r.apply(e,t||[])).next())})};const V=/url\((['"]?)([^'"]+?)\1\)/g,ye=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,be=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function xe(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function Se(e){const t=[];return e.replace(V,(n,r,o)=>(t.push(o),n)),t.filter(n=>!P(n))}function Ee(e,t,n,r,o){const c=n?Y(t,n):t;return Promise.resolve(c).then(i=>o?o(i):_(i,r)).then(i=>typeof i=="string"?x(i,b(t)):x(i.blob,b(t)||i.contentType)).then(i=>e.replace(xe(t),`$1${i}$3`)).then(i=>i,()=>c)}function Re(e,{preferredFontFormat:t}){return t?e.replace(be,n=>{for(;;){const[r,,o]=ye.exec(n)||[];if(!o)return"";if(o===t)return`src: ${r};`}}):e}function W(e){return e.search(V)!==-1}function G(e,t,n){return ve(this,void 0,void 0,function*(){if(!W(e))return Promise.resolve(e);const r=Re(e,n);return Promise.resolve(r).then(Se).then(o=>o.reduce((c,i)=>c.then(l=>Ee(l,i,t,n)),Promise.resolve(r)))})}var E=globalThis&&globalThis.__awaiter||function(e,t,n,r){function o(c){return c instanceof n?c:new n(function(i){i(c)})}return new(n||(n=Promise))(function(c,i){function l(s){try{u(r.next(s))}catch(a){i(a)}}function f(s){try{u(r.throw(s))}catch(a){i(a)}}function u(s){s.done?c(s.value):o(s.value).then(l,f)}u((r=r.apply(e,t||[])).next())})};function Te(e,t){var n;return E(this,void 0,void 0,function*(){const r=(n=e.style)===null||n===void 0?void 0:n.getPropertyValue("background");return r?Promise.resolve(r).then(o=>G(o,null,t)).then(o=>(e.style.setProperty("background",o,e.style.getPropertyPriority("background")),e)):Promise.resolve(e)})}function Ce(e,t){return E(this,void 0,void 0,function*(){if(!(e instanceof HTMLImageElement&&!P(e.src))&&!(e instanceof SVGImageElement&&!P(e.href.baseVal)))return Promise.resolve(e);const n=e instanceof HTMLImageElement?e.src:e.href.baseVal;return Promise.resolve(n).then(r=>_(r,t)).then(r=>x(r.blob,b(n)||r.contentType)).then(r=>new Promise((o,c)=>{e.onload=o,e.onerror=c,e instanceof HTMLImageElement?(e.srcset="",e.src=r):e.href.baseVal=r})).then(()=>e,()=>e)})}function Pe(e,t){return E(this,void 0,void 0,function*(){const r=p(e.childNodes).map(o=>X(o,t));return Promise.all(r).then(()=>e)})}function X(e,t){return E(this,void 0,void 0,function*(){return e instanceof Element?Promise.resolve(e).then(n=>Te(n,t)).then(n=>Ce(n,t)).then(n=>Pe(n,t)):Promise.resolve(e)})}function $e(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return r!=null&&Object.keys(r).forEach(o=>{n[o]=r[o]}),e}var y=globalThis&&globalThis.__awaiter||function(e,t,n,r){function o(c){return c instanceof n?c:new n(function(i){i(c)})}return new(n||(n=Promise))(function(c,i){function l(s){try{u(r.next(s))}catch(a){i(a)}}function f(s){try{u(r.throw(s))}catch(a){i(a)}}function u(s){s.done?c(s.value):o(s.value).then(l,f)}u((r=r.apply(e,t||[])).next())})};const I={};function j(e){const t=I[e];if(t!=null)return t;const n=window.fetch(e).then(r=>({url:e,cssText:r.text()}));return I[e]=n,n}function O(e){return y(this,void 0,void 0,function*(){return e.cssText.then(t=>{let n=t;const r=/url\(["']?([^"')]+)["']?\)/g,c=(n.match(/url\([^)]+\)/g)||[]).map(i=>{let l=i.replace(r,"$1");return l.startsWith("https://")||(l=new URL(l,e.url).href),window.fetch(l).then(f=>f.blob()).then(f=>new Promise((u,s)=>{const a=new FileReader;a.onloadend=()=>{n=n.replace(i,`url(${a.result})`),u([i,a.result])},a.onerror=s,a.readAsDataURL(f)}))});return Promise.all(c).then(()=>n)})})}function H(e){if(e==null)return[];const t=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=e.replace(n,"");const o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const f=o.exec(r);if(f===null)break;t.push(f[0])}r=r.replace(o,"");const c=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",l=new RegExp(i,"gi");for(;;){let f=c.exec(r);if(f===null){if(f=l.exec(r),f===null)break;c.lastIndex=l.lastIndex}else l.lastIndex=c.lastIndex;t.push(f[0])}return t}function _e(e){return y(this,void 0,void 0,function*(){const t=[],n=[];return e.forEach(r=>{if("cssRules"in r)try{p(r.cssRules).forEach((o,c)=>{if(o.type===CSSRule.IMPORT_RULE){let i=c+1;const l=o.href,f=j(l).then(u=>u?O(u):"").then(u=>H(u).forEach(s=>{try{r.insertRule(s,s.startsWith("@import")?i+=1:r.cssRules.length)}catch(a){console.error("Error inserting rule from remote css",{rule:s,error:a})}})).catch(u=>{console.error("Error loading remote css",u.toString())});n.push(f)}})}catch(o){const c=e.find(i=>i.href==null)||document.styleSheets[0];r.href!=null&&n.push(j(r.href).then(i=>i?O(i):"").then(i=>H(i).forEach(l=>{c.insertRule(l,r.cssRules.length)})).catch(i=>{console.error("Error loading remote stylesheet",i.toString())})),console.error("Error inlining remote css file",o.toString())}}),Promise.all(n).then(()=>(e.forEach(r=>{if("cssRules"in r)try{p(r.cssRules).forEach(o=>{t.push(o)})}catch(o){console.error(`Error while reading CSS rules from ${r.href}`,o.toString())}}),t))})}function Le(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>W(t.style.getPropertyValue("src")))}function Ae(e){return y(this,void 0,void 0,function*(){return new Promise((t,n)=>{e.ownerDocument==null&&n(new Error("Provided element is not within a Document")),t(p(e.ownerDocument.styleSheets))}).then(t=>_e(t)).then(Le)})}function Fe(e,t){return y(this,void 0,void 0,function*(){return Ae(e).then(n=>Promise.all(n.map(r=>{const o=r.parentStyleSheet?r.parentStyleSheet.href:null;return G(r.cssText,o,t)}))).then(n=>n.join(`
`))})}function Ue(e,t){return y(this,void 0,void 0,function*(){return(t.fontEmbedCSS!=null?Promise.resolve(t.fontEmbedCSS):Fe(e,t)).then(n=>{const r=document.createElement("style"),o=document.createTextNode(n);return r.appendChild(o),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),e})})}var L=globalThis&&globalThis.__awaiter||function(e,t,n,r){function o(c){return c instanceof n?c:new n(function(i){i(c)})}return new(n||(n=Promise))(function(c,i){function l(s){try{u(r.next(s))}catch(a){i(a)}}function f(s){try{u(r.throw(s))}catch(a){i(a)}}function u(s){s.done?c(s.value):o(s.value).then(l,f)}u((r=r.apply(e,t||[])).next())})};function z(e,t={}){const n=t.width||ee(e),r=t.height||te(e);return{width:n,height:r}}function ke(e,t={}){return L(this,void 0,void 0,function*(){const{width:n,height:r}=z(e,t);return Promise.resolve(e).then(o=>B(o,t,!0)).then(o=>Ue(o,t)).then(o=>X(o,t)).then(o=>$e(o,t)).then(o=>oe(o,n,r))})}const m=16384;function Me(e){(e.width>m||e.height>m)&&(e.width>m&&e.height>m?e.width>e.height?(e.height*=m/e.width,e.width=m):(e.width*=m/e.height,e.height=m):e.width>m?(e.height*=m/e.width,e.width=m):(e.width*=m/e.height,e.height=m))}function Ie(e,t={}){return L(this,void 0,void 0,function*(){return ke(e,t).then($).then(n=>{const r=document.createElement("canvas"),o=r.getContext("2d"),c=t.pixelRatio||ne(),{width:i,height:l}=z(e,t),f=t.canvasWidth||i,u=t.canvasHeight||l;return r.width=f*c,r.height=u*c,t.skipAutoScale||Me(r),r.style.width=`${f}`,r.style.height=`${u}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(n,0,0,r.width,r.height),r})})}function je(e,t={}){return L(this,void 0,void 0,function*(){return Ie(e,t).then(n=>n.toDataURL())})}var q={exports:{}};(function(e,t){(function(n,r){r()})(v,function(){function n(u,s){return typeof s=="undefined"?s={autoBom:!1}:typeof s!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function r(u,s,a){var h=new XMLHttpRequest;h.open("GET",u),h.responseType="blob",h.onload=function(){f(h.response,s,a)},h.onerror=function(){console.error("could not download file")},h.send()}function o(u){var s=new XMLHttpRequest;s.open("HEAD",u,!1);try{s.send()}catch{}return 200<=s.status&&299>=s.status}function c(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(s)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof v=="object"&&v.global===v?v:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),f=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(u,s,a){var h=i.URL||i.webkitURL,d=document.createElement("a");s=s||u.name||"download",d.download=s,d.rel="noopener",typeof u=="string"?(d.href=u,d.origin===location.origin?c(d):o(d.href)?r(u,s,a):c(d,d.target="_blank")):(d.href=h.createObjectURL(u),setTimeout(function(){h.revokeObjectURL(d.href)},4e4),setTimeout(function(){c(d)},0))}:"msSaveOrOpenBlob"in navigator?function(u,s,a){if(s=s||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(n(u,a),s);else if(o(u))r(u,s,a);else{var h=document.createElement("a");h.href=u,h.target="_blank",setTimeout(function(){c(h)})}}:function(u,s,a,h){if(h=h||open("","_blank"),h&&(h.document.title=h.document.body.innerText="downloading..."),typeof u=="string")return r(u,s,a);var d=u.type==="application/octet-stream",K=/constructor/i.test(i.HTMLElement)||i.safari,A=/CriOS\/[\d]+/.test(navigator.userAgent);if((A||d&&K||l)&&typeof FileReader!="undefined"){var R=new FileReader;R.onloadend=function(){var w=R.result;w=A?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=w:location=w,h=null},R.readAsDataURL(u)}else{var F=i.URL||i.webkitURL,T=F.createObjectURL(u);h?h.location=T:location.href=T,h=null,setTimeout(function(){F.revokeObjectURL(T)},4e4)}});i.saveAs=f.saveAs=f,e.exports=f})})(q);async function He(e,t){const n=await je(e);q.exports.saveAs(n,t)}export{He as exportImage,je as toPng};
