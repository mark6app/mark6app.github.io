"use strict";(self.webpackChunkHKM6=self.webpackChunkHKM6||[]).push([[5670],{85670:function(w,b,o){o.r(b),o.d(b,{ion_tab:function(){return _},ion_tabs:function(){return m}});var h=o(8239),v=o(75134),p=o(47289),g=o(88774),l=o.n(g),s=o(52322),y=o(39498),_=function(){function c(t){(0,v.Z)(this,c),(0,s.r)(this,t),this.loaded=!1,this.active=!1}return(0,p.Z)(c,[{key:"componentWillLoad",value:(t=(0,h.Z)(l().mark(function n(){return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!this.active){a.next=3;break}return a.next=3,this.setActive();case 3:case"end":return a.stop()}},n,this)})),function(){return t.apply(this,arguments)})},{key:"setActive",value:function(){var t=(0,h.Z)(l().mark(function n(){return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.prepareLazyLoaded();case 2:this.active=!0;case 3:case"end":return a.stop()}},n,this)}));return function(){return t.apply(this,arguments)}}()},{key:"changeActive",value:function(e){e&&this.prepareLazyLoaded()}},{key:"prepareLazyLoaded",value:function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,y.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}},{key:"render",value:function(){var n=this.active,r=this.component;return(0,s.h)(s.H,{role:"tabpanel","aria-hidden":n?null:"true","aria-labelledby":"tab-button-".concat(this.tab),class:{"ion-page":void 0===r,"tab-hidden":!n}},(0,s.h)("slot",null))}},{key:"el",get:function(){return(0,s.i)(this)}}],[{key:"watchers",get:function(){return{active:["changeActive"]}}}]),c;var t}();_.style=":host(.tab-hidden){display:none !important}";var m=function(){function c(t){var e=this;(0,v.Z)(this,c),(0,s.r)(this,t),this.ionNavWillLoad=(0,s.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,s.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,s.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(n){var r=n.detail,a=r.href,i=r.tab;if(e.useRouter&&void 0!==a){var u=document.querySelector("ion-router");u&&u.push(a)}else e.select(i)}}return(0,p.Z)(c,[{key:"componentWillLoad",value:(t=(0,h.Z)(l().mark(function n(){var r;return l().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter){i.next=6;break}if(!((r=this.tabs).length>0)){i.next=6;break}return i.next=6,this.select(r[0]);case 6:this.ionNavWillLoad.emit();case 7:case"end":return i.stop()}},n,this)})),function(){return t.apply(this,arguments)})},{key:"componentWillRender",value:function(){var e=this.el.querySelector("ion-tab-bar");e&&(e.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}},{key:"select",value:function(){var t=(0,h.Z)(l().mark(function n(r){var a;return l().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(a=f(this.tabs,r),this.shouldSwitch(a)){u.next=3;break}return u.abrupt("return",!1);case 3:return u.next=5,this.setActive(a);case 5:return u.next=7,this.notifyRouter();case 7:return this.tabSwitch(),u.abrupt("return",!0);case 9:case"end":return u.stop()}},n,this)}));return function(n){return t.apply(this,arguments)}}()},{key:"getTab",value:function(){var t=(0,h.Z)(l().mark(function n(r){return l().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",f(this.tabs,r));case 1:case"end":return i.stop()}},n,this)}));return function(n){return t.apply(this,arguments)}}()},{key:"getSelected",value:function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}},{key:"setRouteId",value:function(){var t=(0,h.Z)(l().mark(function n(r){var i,a=this;return l().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(i=f(this.tabs,r),this.shouldSwitch(i)){d.next=3;break}return d.abrupt("return",{changed:!1,element:this.selectedTab});case 3:return d.next=5,this.setActive(i);case 5:return d.abrupt("return",{changed:!0,element:this.selectedTab,markVisible:function(){return a.tabSwitch()}});case 6:case"end":return d.stop()}},n,this)}));return function(n){return t.apply(this,arguments)}}()},{key:"getRouteId",value:function(){var t=(0,h.Z)(l().mark(function n(){var r;return l().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",void 0!==(r=this.selectedTab&&this.selectedTab.tab)?{id:r,element:this.selectedTab}:void 0);case 2:case"end":return i.stop()}},n,this)}));return function(){return t.apply(this,arguments)}}()},{key:"setActive",value:function(e){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=e,this.ionTabsWillChange.emit({tab:e.tab}),e.active=!0,Promise.resolve())}},{key:"tabSwitch",value:function(){var e=this.selectedTab,n=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,e&&n!==e&&(n&&(n.active=!1),this.ionTabsDidChange.emit({tab:e.tab}))}},{key:"notifyRouter",value:function(){if(this.useRouter){var e=document.querySelector("ion-router");if(e)return e.navChanged("forward")}return Promise.resolve(!1)}},{key:"shouldSwitch",value:function(e){return void 0!==e&&e!==this.selectedTab&&!this.transitioning}},{key:"tabs",get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))}},{key:"render",value:function(){return(0,s.h)(s.H,{onIonTabButtonClick:this.onTabClicked},(0,s.h)("slot",{name:"top"}),(0,s.h)("div",{class:"tabs-inner"},(0,s.h)("slot",null)),(0,s.h)("slot",{name:"bottom"}))}},{key:"el",get:function(){return(0,s.i)(this)}}]),c;var t}(),f=function(t,e){var n="string"==typeof e?t.find(function(r){return r.tab===e}):e;return n||console.error('tab with id: "'.concat(n,'" does not exist')),n};m.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}]);