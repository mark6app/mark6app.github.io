"use strict";(self.webpackChunkHKM6=self.webpackChunkHKM6||[]).push([[980],{40980:function(de,T,g){g.r(T),g.d(T,{ion_route:function(){return F},ion_route_redirect:function(){return z},ion_router:function(){return ce},ion_router_link:function(){return $}});var L=g(42515),b=g(61921),N=g(20738),k=g(36683),C=g(18967),E=g(14105),j=g(26552),p=g.n(j),y=g(42494),O=g(66268),G=g(64991),K=g(15425),F=function(){function o(r){(0,C.Z)(this,o),(0,y.r)(this,r),this.ionRouteDataChanged=(0,y.e)(this,"ionRouteDataChanged",7),this.url=""}return(0,E.Z)(o,[{key:"onUpdate",value:function(e){this.ionRouteDataChanged.emit(e)}},{key:"onComponentProps",value:function(e,t){if(e!==t){var n=e?Object.keys(e):[],a=t?Object.keys(t):[];if(n.length!==a.length)return void this.onUpdate(e);var s,i=(0,k.Z)(n);try{for(i.s();!(s=i.n()).done;){var u=s.value;if(e[u]!==t[u])return void this.onUpdate(e)}}catch(l){i.e(l)}finally{i.f()}}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),o}(),z=function(){function o(r){(0,C.Z)(this,o),(0,y.r)(this,r),this.ionRouteRedirectChanged=(0,y.e)(this,"ionRouteRedirectChanged",7)}return(0,E.Z)(o,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),o}(),w="root",I="forward",P=function(r){return"/"+r.filter(function(t){return t.length>0}).join("/")},X=function(r){var n,e=[],t=(0,k.Z)(r);try{for(t.s();!(n=t.n()).done;){var s,a=n.value,i=(0,k.Z)(a.path);try{for(i.s();!(s=i.n()).done;){var u=s.value;if(":"===u[0]){var l=a.params&&a.params[u.slice(1)];if(!l)return null;e.push(l)}else""!==u&&e.push(u)}}catch(h){i.e(h)}finally{i.f()}}}catch(h){t.e(h)}finally{t.f()}return e},R=function(r){var t,e=[""];if(null!=r){var n=r.indexOf("?");n>-1&&(t=r.substr(n+1),r=r.substr(0,n)),0===(e=r.split("/").map(function(a){return a.trim()}).filter(function(a){return a.length>0})).length&&(e=[""])}return{segments:e,queryString:t}},x=function(r){console.group("[ion-core] ROUTES[".concat(r.length,"]"));var t,e=(0,k.Z)(r);try{var n=function(){var i=t.value,s=[];i.forEach(function(l){return s.push.apply(s,(0,N.Z)(l.path))});var u=i.map(function(l){return l.id});console.debug("%c ".concat(P(s)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(u.join(", "),")"))};for(e.s();!(t=e.n()).done;)n()}catch(a){e.e(a)}finally{e.f()}console.groupEnd()},ee=function(r){console.group("[ion-core] REDIRECTS[".concat(r.length,"]"));var t,e=(0,k.Z)(r);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.to&&console.debug("FROM: ","$c ".concat(P(n.from)),"font-weight: bold"," TO: ","$c ".concat(P(n.to.segments)),"font-weight: bold")}}catch(a){e.e(a)}finally{e.f()}console.groupEnd()},W=function(){var o=(0,b.Z)(p().mark(function r(e,t,n,a){var i,s,u,l,h,f=arguments;return p().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(i=f.length>4&&void 0!==f[4]&&f[4],s=f.length>5?f[5]:void 0,c.prev=2,u=S(e),!(a>=t.length)&&u){c.next=6;break}return c.abrupt("return",i);case 6:return c.next=8,new Promise(function(d){return(0,O.c)(u,d)});case 8:return l=t[a],c.next=11,u.setRouteId(l.id,l.params,n,s);case 11:return(h=c.sent).changed&&(n=w,i=!0),c.next=15,W(h.element,t,n,a+1,i,s);case 15:if(i=c.sent,!h.markVisible){c.next=19;break}return c.next=19,h.markVisible();case 19:return c.abrupt("return",i);case 22:return c.prev=22,c.t0=c.catch(2),console.error(c.t0),c.abrupt("return",!1);case 26:case"end":return c.stop()}},r,null,[[2,22]])}));return function(e,t,n,a){return o.apply(this,arguments)}}(),re=function(){var o=(0,b.Z)(p().mark(function r(e){var t,n,a,i;return p().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:t=[],a=e;case 2:if(!(n=S(a))){u.next=17;break}return u.next=7,n.getRouteId();case 7:if(!(i=u.sent)){u.next=14;break}a=i.element,i.element=void 0,t.push(i),u.next=15;break;case 14:return u.abrupt("break",20);case 15:u.next=18;break;case 17:return u.abrupt("break",20);case 18:u.next=2;break;case 20:return u.abrupt("return",{ids:t,outlet:n});case 21:case"end":return u.stop()}},r)}));return function(e){return o.apply(this,arguments)}}(),H=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",S=function(r){if(r){if(r.matches(H))return r;var e=r.querySelector(H);return null!=e?e:void 0}},A=function(r,e){return e.find(function(t){return function(r,e){var t=e.from;if(void 0===e.to||t.length>r.length)return!1;for(var a=0;a<t.length;a++){var i=t[a];if("*"===i)return!0;if(i!==r[a])return!1}return t.length===r.length}(r,t)})},ae=function(r,e){for(var t=Math.min(r.length,e.length),n=0;n<t&&r[n].toLowerCase()===e[n].id;n++);return n},ie=function(r,e){for(var a,t=new oe(r),n=!1,i=0;i<e.length;i++){var s=e[i].path;if(""===s[0])n=!0;else{var l,u=(0,k.Z)(s);try{for(u.s();!(l=u.n()).done;){var h=l.value,f=t.next();if(":"===h[0]){if(""===f)return null;((a=a||[])[i]||(a[i]={}))[h.slice(1)]=f}else if(f!==h)return null}}catch(d){u.e(d)}finally{u.f()}n=!1}}return n&&n!==(""===t.next())?null:a?e.map(function(d,m){return{id:d.id,path:d.path,params:B(d.params,a[m]),beforeEnter:d.beforeEnter,beforeLeave:d.beforeLeave}}):e},B=function(r,e){return r||e?Object.assign(Object.assign({},r),e):void 0},ue=function(r,e){var s,t=null,n=0,a=r.map(function(h){return h.id}),i=(0,k.Z)(e);try{for(i.s();!(s=i.n()).done;){var u=s.value,l=ae(a,u);l>n&&(t=u,n=l)}}catch(h){i.e(h)}finally{i.f()}return t?t.map(function(h,f){return{id:h.id,path:h.path,params:B(h.params,r[f]&&r[f].params)}}):null},U=function(r,e){var i,t=null,n=0,a=(0,k.Z)(e);try{for(a.s();!(i=a.n()).done;){var u=ie(r,i.value);if(null!==u){var l=se(u);l>n&&(n=l,t=u)}}}catch(h){a.e(h)}finally{a.f()}return t},se=function(r){var a,e=1,t=1,n=(0,k.Z)(r);try{for(n.s();!(a=n.n()).done;){var u,s=(0,k.Z)(a.value.path);try{for(s.s();!(u=s.n()).done;){var l=u.value;":"===l[0]?e+=Math.pow(1,t):""!==l&&(e+=Math.pow(2,t)),t++}}catch(h){s.e(h)}finally{s.f()}}}catch(h){n.e(h)}finally{n.f()}return e},oe=function(){function o(r){(0,C.Z)(this,o),this.path=r.slice()}return(0,E.Z)(o,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),o}(),D=function(r,e){return e in r?r[e]:r.hasAttribute(e)?r.getAttribute(e):null},Z=function(r){return Array.from(r.children).filter(function(e){return"ION-ROUTE-REDIRECT"===e.tagName}).map(function(e){var t=D(e,"to");return{from:R(D(e,"from")).segments,to:null==t?void 0:R(t)}})},M=function(r){return he(le(r))},le=function o(r){return Array.from(r.children).filter(function(e){return"ION-ROUTE"===e.tagName&&e.component}).map(function(e){var t=D(e,"component");return{path:R(D(e,"url")).segments,id:t.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:o(e)}})},he=function(r){var n,e=[],t=(0,k.Z)(r);try{for(t.s();!(n=t.n()).done;)fe([],e,n.value)}catch(i){t.e(i)}finally{t.f()}return e},fe=function o(r,e,t){if((r=r.slice()).push({id:t.id,path:t.path,params:t.params,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter}),0!==t.children.length){var a,n=(0,k.Z)(t.children);try{for(n.s();!(a=n.n()).done;)o(r,e,a.value)}catch(s){n.e(s)}finally{n.f()}}else e.push(r)},ce=function(){function o(r){(0,C.Z)(this,o),(0,y.r)(this,r),this.ionRouteWillChange=(0,y.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,y.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return(0,E.Z)(o,[{key:"componentWillLoad",value:(r=(0,b.Z)(p().mark(function t(){var n,i;return p().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,S(document.body)?Promise.resolve():new Promise(function(r){window.addEventListener("ionNavWillLoad",r,{once:!0})});case 2:return u.next=4,this.runGuards(this.getPath());case 4:if(!0===(n=u.sent)){u.next=14;break}if("object"!=typeof n){u.next=12;break}return i=R(n.redirect),this.setPath(i.segments,w,i.queryString),u.next=12,this.writeNavStateRoot(i.segments,w);case 12:u.next=16;break;case 14:return u.next=16,this.onRoutesChanged();case 16:case"end":return u.stop()}},t,this)})),function(){return r.apply(this,arguments)})},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",(0,O.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,O.n)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:function(){var r=(0,b.Z)(p().mark(function t(){var n,a,i;return p().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return n=this.historyDirection(),a=this.getPath(),u.next=4,this.runGuards(a);case 4:if(!0===(i=u.sent)){u.next=11;break}if("object"!=typeof i){u.next=10;break}a=R(i.redirect).segments,u.next=11;break;case 10:return u.abrupt("return",!1);case 11:return u.abrupt("return",this.writeNavStateRoot(a,n));case 12:case"end":return u.stop()}},t,this)}));return function(){return r.apply(this,arguments)}}()},{key:"onBackButton",value:function(e){var t=this;e.detail.register(0,function(n){t.back(),n()})}},{key:"canTransition",value:function(){var r=(0,b.Z)(p().mark(function t(){var n;return p().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.runGuards();case 2:if(!0===(n=i.sent)){i.next=9;break}if("object"!=typeof n){i.next=8;break}return i.abrupt("return",n.redirect);case 8:return i.abrupt("return",!1);case 9:return i.abrupt("return",!0);case 10:case"end":return i.stop()}},t,this)}));return function(){return r.apply(this,arguments)}}()},{key:"push",value:function(){var r=(0,b.Z)(p().mark(function t(n){var a,i,s,u,l=arguments;return p().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:"forward",i=l.length>2?l[2]:void 0,n.startsWith(".")&&(n=new URL(n,window.location.href).pathname),s=R(n),f.next=6,this.runGuards(s.segments);case 6:if(!0===(u=f.sent)){f.next=13;break}if("object"!=typeof u){f.next=12;break}s=R(u.redirect),f.next=13;break;case 12:return f.abrupt("return",!1);case 13:return this.setPath(s.segments,a,s.queryString),f.abrupt("return",this.writeNavStateRoot(s.segments,a,i));case 15:case"end":return f.stop()}},t,this)}));return function(t){return r.apply(this,arguments)}}()},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:function(){var r=(0,b.Z)(p().mark(function t(){return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:x(M(this.el)),ee(Z(this.el));case 2:case"end":return a.stop()}},t,this)}));return function(){return r.apply(this,arguments)}}()},{key:"navChanged",value:function(){var r=(0,b.Z)(p().mark(function t(n){var a,i,s,u,l,h;return p().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!this.busy){v.next=3;break}return console.warn("[ion-router] router is busy, navChanged was cancelled"),v.abrupt("return",!1);case 3:return v.next=5,re(window.document.body);case 5:if(i=(a=v.sent).ids,s=a.outlet,u=M(this.el),l=ue(i,u)){v.next=13;break}return console.warn("[ion-router] no matching URL for ",i.map(function(c){return c.id})),v.abrupt("return",!1);case 13:if(h=X(l)){v.next=17;break}return console.warn("[ion-router] router could not match path because some required param is missing"),v.abrupt("return",!1);case 17:return this.setPath(h,n),v.next=20,this.safeWriteNavState(s,l,w,h,null,i.length);case 20:return v.abrupt("return",!0);case 21:case"end":return v.stop()}},t,this)}));return function(t){return r.apply(this,arguments)}}()},{key:"onRedirectChanged",value:function(){var e=this.getPath();e&&A(e,Z(this.el))&&this.writeNavStateRoot(e,w)}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),w)}},{key:"historyDirection",value:function(){var e,t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,null===(e=t.document.location)||void 0===e?void 0:e.href));var n=t.history.state,a=this.lastState;return this.lastState=n,n>a||n>=a&&a>0?I:n<a?"back":w}},{key:"writeNavStateRoot",value:function(){var r=(0,b.Z)(p().mark(function t(n,a,i){var s,u,l,h,f,c,d;return p().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(n){_.next=3;break}return console.error("[ion-router] URL is not part of the routing set"),_.abrupt("return",!1);case 3:if(s=Z(this.el),u=A(n,s),l=null,u&&(this.setPath(f=(h=u.to).segments,a,h.queryString),l=u.from,n=f),c=M(this.el),d=U(n,c)){_.next=12;break}return console.error("[ion-router] the path does not match any route"),_.abrupt("return",!1);case 12:return _.abrupt("return",this.safeWriteNavState(document.body,d,a,n,l,0,i));case 13:case"end":return _.stop()}},t,this)}));return function(t,n,a){return r.apply(this,arguments)}}()},{key:"safeWriteNavState",value:function(){var r=(0,b.Z)(p().mark(function t(n,a,i,s,u){var l,h,f,v,c=arguments;return p().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l=c.length>5&&void 0!==c[5]?c[5]:0,h=c.length>6?c[6]:void 0,m.next=4,this.lock();case 4:return f=m.sent,v=!1,m.prev=6,m.next=9,this.writeNavState(n,a,i,s,u,l,h);case 9:v=m.sent,m.next=15;break;case 12:m.prev=12,m.t0=m.catch(6),console.error(m.t0);case 15:return f(),m.abrupt("return",v);case 17:case"end":return m.stop()}},t,this,[[6,12]])}));return function(t,n,a,i,s){return r.apply(this,arguments)}}()},{key:"lock",value:function(){var r=(0,b.Z)(p().mark(function t(){var n,a;return p().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(n=this.waitPromise,this.waitPromise=new Promise(function(u){return a=u}),void 0===n){s.next=5;break}return s.next=5,n;case 5:return s.abrupt("return",a);case 6:case"end":return s.stop()}},t,this)}));return function(){return r.apply(this,arguments)}}()},{key:"runGuards",value:function(){var r=(0,b.Z)(p().mark(function t(){var n,a,i,s,u,l,h,f,v=arguments;return p().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(n=v.length>0&&void 0!==v[0]?v[0]:this.getPath(),void 0===(a=v.length>1?v[1]:void 0)&&(a=R(this.previousPath).segments),n&&a){d.next=5;break}return d.abrupt("return",!0);case 5:if(i=M(this.el),s=U(a,i),!(u=s&&s[s.length-1].beforeLeave)){d.next=14;break}return d.next=11,u();case 11:d.t0=d.sent,d.next=15;break;case 14:d.t0=!0;case 15:if(!1!==(l=d.t0)&&"object"!=typeof l){d.next=18;break}return d.abrupt("return",l);case 18:return h=U(n,i),d.abrupt("return",!(f=h&&h[h.length-1].beforeEnter)||f());case 21:case"end":return d.stop()}},t,this)}));return function(){return r.apply(this,arguments)}}()},{key:"writeNavState",value:function(){var r=(0,b.Z)(p().mark(function t(n,a,i,s,u){var l,h,f,v,c=arguments;return p().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(l=c.length>5&&void 0!==c[5]?c[5]:0,h=c.length>6?c[6]:void 0,!this.busy){m.next=5;break}return console.warn("[ion-router] router is busy, transition was cancelled"),m.abrupt("return",!1);case 5:return this.busy=!0,(f=this.routeChangeEvent(s,u))&&this.ionRouteWillChange.emit(f),m.next=10,W(n,a,i,l,!1,h);case 10:return v=m.sent,this.busy=!1,f&&this.ionRouteDidChange.emit(f),m.abrupt("return",v);case 14:case"end":return m.stop()}},t,this)}));return function(t,n,a,i,s){return r.apply(this,arguments)}}()},{key:"setPath",value:function(e,t,n){this.state++,function(r,e,t,n,a,i,s){var u=function(r,e,t){var n=P(r);return e&&(n="#"+n),void 0!==t&&(n+="?"+t),n}([].concat((0,N.Z)(R(e).segments),(0,N.Z)(n)),t,s);a===I?r.pushState(i,"",u):r.replaceState(i,"",u)}(window.history,this.root,this.useHash,e,t,this.state,n)}},{key:"getPath",value:function(){return function(r,e,t){var n=R(e).segments,a=t?r.hash.slice(1):r.pathname;return function(r,e){if(r.length>e.length)return null;if(r.length<=1&&""===r[0])return e;for(var t=0;t<r.length;t++)if(r[t]!==e[t])return null;return e.length===r.length?[""]:e.slice(r.length)}(n,R(a).segments)}(window.location,this.root,this.useHash)}},{key:"routeChangeEvent",value:function(e,t){var n=this.previousPath,a=P(e);return this.previousPath=a,a===n?null:{from:n,redirectedFrom:t?P(t):null,to:a}}},{key:"el",get:function(){return(0,y.i)(this)}}]),o;var r}(),$=function(){function o(r){var e=this;(0,C.Z)(this,o),(0,y.r)(this,r),this.routerDirection="forward",this.onClick=function(t){(0,K.o)(e.href,t,e.routerDirection,e.routerAnimation)}}return(0,E.Z)(o,[{key:"render",value:function(){var e,t=(0,G.b)(this),n={href:this.href,rel:this.rel,target:this.target};return(0,y.h)(y.H,{onClick:this.onClick,class:(0,K.c)(this.color,(e={},(0,L.Z)(e,t,!0),(0,L.Z)(e,"ion-activatable",!0),e))},(0,y.h)("a",Object.assign({},n),(0,y.h)("slot",null)))}}]),o}();$.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);