"use strict";(self.webpackChunkHKM6=self.webpackChunkHKM6||[]).push([[4120],{54120:function(Y,h,l){l.r(h),l.d(h,{TopNumComponentModule:function(){return F}});var d=l(61116),T=l(11462),a=l(78809),v=l(9185),n=l(95614),Z=l(74805),y=l(24545);function w(i,u){if(1&i&&n._UZ(0,"img",6),2&i){var t=n.oxw().$implicit;n.MGl("src","./assets/images/no_",t[1],".png",n.LSH)}}function N(i,u){if(1&i&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&i){var t=n.oxw().$implicit;n.xp6(1),n.Oqu(t[0])}}function x(i,u){if(1&i&&(n.TgZ(0,"ion-item"),n.TgZ(1,"ion-grid"),n.TgZ(2,"ion-row",3),n.TgZ(3,"ion-col"),n.YNc(4,w,1,1,"img",4),n.qZA(),n.TgZ(5,"ion-col"),n.YNc(6,N,2,1,"span",5),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&i){var t=n.oxw();n.xp6(4),n.Q6J("ngIf",t.loaded),n.xp6(2),n.Q6J("ngIf",t.loaded)}}var A=function(){function i(u,t,s,r,e){this.commonService=u,this.m6service=t,this._router=s,this.navCtrl=r,this.loadingController=e,this.loaded=!1}return i.prototype.ngOnInit=function(){this.doRefresh()},i.prototype.doRefresh=function(){return function(i,u,t,s){return new(t||(t=Promise))(function(e,f){function m(c){try{o(s.next(c))}catch(g){f(g)}}function p(c){try{o(s.throw(c))}catch(g){f(g)}}function o(c){c.done?e(c.value):function(e){return e instanceof t?e:new t(function(f){f(e)})}(c.value).then(m,p)}o((s=s.apply(i,u||[])).next())})}(this,void 0,void 0,function(){var u,t=this;return function(i,u){var s,r,e,f,t={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return f={next:m(0),throw:m(1),return:m(2)},"function"==typeof Symbol&&(f[Symbol.iterator]=function(){return this}),f;function m(o){return function(c){return function(o){if(s)throw new TypeError("Generator is already executing.");for(;t;)try{if(s=1,r&&(e=2&o[0]?r.return:o[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,o[1])).done)return e;switch(r=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return t.label++,{value:o[1],done:!1};case 5:t.label++,r=o[1],o=[0];continue;case 7:o=t.ops.pop(),t.trys.pop();continue;default:if(!(e=(e=t.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){t=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){t.label=o[1];break}if(6===o[0]&&t.label<e[1]){t.label=e[1],e=o;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(o);break}e[2]&&t.ops.pop(),t.trys.pop();continue}o=u.call(i,t)}catch(c){o=[6,c],r=0}finally{s=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,function(s){switch(s.label){case 0:return this.loaded=!1,[4,this.loadingController.create({message:"Loading",spinner:"circles"})];case 1:return(u=s.sent()).present().then(function(){t.m6service.getLast30().subscribe(function(r){t.m6results=r,u.dismiss(),t.topnums=t.m6service.getTopNumbers(t.m6results),t.loaded=!0},function(r){u.dismiss(),t.loaded=!1,console.log(r)})}),[2]}})})},i.\u0275fac=function(t){return new(t||i)(n.Y36(Z.v),n.Y36(y.d),n.Y36(v.F0),n.Y36(a.SH),n.Y36(a.HT))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-topnum"]],decls:9,vars:1,consts:[["slot","start"],[1,"ion-padding"],[4,"ngFor","ngForOf"],[2,"vertical-align","middle","text-align","center"],["class","ball",3,"src",4,"ngIf"],[4,"ngIf"],[1,"ball",3,"src"]],template:function(t,s){1&t&&(n.TgZ(0,"ion-header"),n.TgZ(1,"ion-toolbar"),n.TgZ(2,"ion-buttons",0),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5," \u6700\u8fd130\u671f\u71b1\u9580\u865f\u78bc "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"ion-content",1),n.TgZ(7,"ion-list"),n.YNc(8,x,7,2,"ion-item",2),n.qZA(),n.qZA()),2&t&&(n.xp6(8),n.Q6J("ngForOf",s.topnums))},directives:[a.Gu,a.sr,a.Sm,a.fG,a.wd,a.W2,a.q_,d.sg,a.Ie,a.jY,a.Nd,a.wI,d.O5],styles:[""]}),i}(),F=function(){function i(){}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[d.ez,T.u5,a.Pc,v.Bz.forChild([{path:"",component:A}])]]}),i}()}}]);