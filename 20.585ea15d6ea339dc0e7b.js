(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{aBKi:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=function(){return function(){}}(),t=u("pMnS"),b=u("oBZk"),i=u("ZZ/e"),r=u("Ip0R"),s=u("OlR4"),c=u("2OOY"),a=function(){function l(l,n,u){this.loadingController=l,this.commonService=n,this.m6service=u,this.firstTime=!0,this.loaded=!1}return l.prototype.ngOnInit=function(){this.commonService.hideBannerAd(),this.doRefresh()},l.prototype.ionViewDidEnter=function(){this.commonService.hideBannerAd()},l.prototype.ionViewWillLeave=function(){this.commonService.showBannerAd()},l.prototype.doRefresh=function(){return l=this,void 0,u=function(){var l,n=this;return function(l,n){var u,o,e,t,b={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return t={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function i(t){return function(i){return function(t){if(u)throw new TypeError("Generator is already executing.");for(;b;)try{if(u=1,o&&(e=2&t[0]?o.return:t[0]?o.throw||((e=o.return)&&e.call(o),0):o.next)&&!(e=e.call(o,t[1])).done)return e;switch(o=0,e&&(t=[2&t[0],e.value]),t[0]){case 0:case 1:e=t;break;case 4:return b.label++,{value:t[1],done:!1};case 5:b.label++,o=t[1],t=[0];continue;case 7:t=b.ops.pop(),b.trys.pop();continue;default:if(!(e=(e=b.trys).length>0&&e[e.length-1])&&(6===t[0]||2===t[0])){b=0;continue}if(3===t[0]&&(!e||t[1]>e[0]&&t[1]<e[3])){b.label=t[1];break}if(6===t[0]&&b.label<e[1]){b.label=e[1],e=t;break}if(e&&b.label<e[2]){b.label=e[2],b.ops.push(t);break}e[2]&&b.ops.pop(),b.trys.pop();continue}t=n.call(l,b)}catch(i){t=[6,i],o=0}finally{u=e=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,i])}}}(this,function(u){switch(u.label){case 0:return!1===this.firstTime&&this.commonService.showInterstitialAds(),this.firstTime=!1,this.loaded=!1,[4,this.loadingController.create({message:"Loading",spinner:"circles"})];case 1:return(l=u.sent()).present().then(function(){n.m6service.getResult().subscribe(function(u){n.m6result=u.parameters.result,n.loaded=!0,l.dismiss()},function(u){l.dismiss(),n.loaded=!1,console.log(u)})}),[2]}})},new((n=void 0)||(n=Promise))(function(o,e){function t(l){try{i(u.next(l))}catch(n){e(n)}}function b(l){try{i(u.throw(l))}catch(n){e(n)}}function i(l){l.done?o(l.value):new n(function(n){n(l.value)}).then(t,b)}i((u=u.apply(l,[])).next())});var l,n,u},l.prototype.toDate=function(l){return null!=l?this.m6service.toDateStr(l):""},l.prototype.getNextDrawDate=function(l){return null!=l.nextInfo&&null!=l.nextInfo.drawDate?this.toDate(l.nextInfo.drawDate):""},l.prototype.getNextDrawNo=function(l){return null!=l.nextInfo&&null!=l.nextInfo.drawNo?l.nextInfo.drawNo:""},l.prototype.getNextJackpot=function(l){return null!=l.nextInfo&&null!=l.nextInfo.jackpot?l.nextInfo.jackpot:""},l.prototype.shareToFacebook=function(){this.commonService.shareToFacebook()},l}(),p=o.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["\u65e5\u671f \xa0\xa0 ",""]))],null,function(l,n){var u=n.component;l(n,1,0,u.toDate(u.m6result.drawDate))})}function g(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[["style","color: green"]],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.drawNo)})}function d(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,o.rb(1,"./assets/images/no_",n.component.m6result.number1,".png"))})}function I(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"],["src","./assets/images/redno.png"]],null,null,null,null,null))],null,null)}function m(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,o.rb(1,"./assets/images/no_",n.component.m6result.number2,".png"))})}function h(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"],["src","./assets/images/redno.png"]],null,null,null,null,null))],null,null)}function k(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,o.rb(1,"./assets/images/no_",n.component.m6result.number3,".png"))})}function z(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"],["src","./assets/images/redno.png"]],null,null,null,null,null))],null,null)}function j(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,o.rb(1,"./assets/images/no_",n.component.m6result.number4,".png"))})}function G(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"],["src","./assets/images/redno.png"]],null,null,null,null,null))],null,null)}function O(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,o.rb(1,"./assets/images/no_",n.component.m6result.number5,".png"))})}function L(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"],["src","./assets/images/redno.png"]],null,null,null,null,null))],null,null)}function A(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,o.rb(1,"./assets/images/no_",n.component.m6result.number6,".png"))})}function y(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"],["src","./assets/images/redno.png"]],null,null,null,null,null))],null,null)}function w(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,o.rb(1,"./assets/images/no_",n.component.m6result.number1,".png"))})}function v(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,0,"img",[["class","ball"],["src","./assets/images/redno.png"]],null,null,null,null,null))],null,null)}function x(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize1Qty)})}function N(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function D(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize1Amount)})}function S(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function C(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize2Qty)})}function R(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function B(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize2Amount)})}function Q(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function T(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize3Qty)})}function _(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function F(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize3Amount)})}function J(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function K(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize4Qty)})}function Z(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function $(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["$",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize4Amount)})}function E(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function Y(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize5Qty)})}function q(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function M(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["$",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize5Amount)})}function P(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function V(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize6Qty)})}function W(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function H(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["$",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize6Amount)})}function U(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function X(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize7Qty)})}function ll(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function nl(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["$",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize7Amount)})}function ul(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function ol(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){var u=n.component;l(n,1,0,u.getNextDrawDate(u.m6result))})}function el(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function tl(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){var u=n.component;l(n,1,0,u.getNextDrawNo(u.m6result))})}function bl(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function il(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){var u=n.component;l(n,1,0,u.getNextJackpot(u.m6result))})}function rl(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function sl(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,18,"ion-header",[],null,null,null,b.D,b.h)),o.ob(1,49152,null,0,i.B,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,16,"ion-toolbar",[],null,null,null,b.R,b.v)),o.ob(3,49152,null,0,i.Bb,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.z,b.d)),o.ob(5,49152,null,0,i.l,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,b.K,b.p)),o.ob(7,49152,null,0,i.R,[o.h,o.k],null,null),(l()(),o.pb(8,0,null,0,3,"ion-buttons",[["padding",""],["slot","end"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.shareToFacebook()&&o),o},b.z,b.d)),o.ob(9,49152,null,0,i.l,[o.h,o.k],null,null),(l()(),o.pb(10,0,null,0,1,"ion-img",[["height","16"],["src","./assets/icon/facebook.png"],["width","16"]],null,null,null,b.F,b.j)),o.ob(11,49152,null,0,i.D,[o.h,o.k],{src:[0,"src"]},null),(l()(),o.pb(12,0,null,0,3,"ion-buttons",[["padding",""],["slot","end"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doRefresh()&&o),o},b.z,b.d)),o.ob(13,49152,null,0,i.l,[o.h,o.k],null,null),(l()(),o.pb(14,0,null,0,1,"ion-icon",[["name","refresh"]],null,null,null,b.E,b.i)),o.ob(15,49152,null,0,i.C,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.pb(16,0,null,0,2,"ion-title",[],null,null,null,b.P,b.t)),o.ob(17,49152,null,0,i.zb,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u6700\u65b0\u7d50\u679c "])),(l()(),o.pb(19,0,null,null,217,"ion-content",[["padding",""]],null,null,null,b.B,b.f)),o.ob(20,49152,null,0,i.u,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,f)),o.ob(22,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.Gb(-1,0,["\xa0\xa0 \xa0"])),(l()(),o.gb(16777216,null,0,1,null,g)),o.ob(25,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(26,0,null,0,48,"ion-grid",[],null,null,null,b.C,b.g)),o.ob(27,49152,null,0,i.A,[o.h,o.k],null,null),(l()(),o.pb(28,0,null,0,46,"ion-row",[["style","vertical-align: middle; text-align: center;"]],null,null,null,b.N,b.r)),o.ob(29,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(30,0,null,0,5,"ion-col",[],null,null,null,b.A,b.e)),o.ob(31,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,d)),o.ob(33,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,I)),o.ob(35,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(36,0,null,0,5,"ion-col",[],null,null,null,b.A,b.e)),o.ob(37,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,m)),o.ob(39,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,h)),o.ob(41,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(42,0,null,0,5,"ion-col",[],null,null,null,b.A,b.e)),o.ob(43,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,k)),o.ob(45,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,z)),o.ob(47,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(48,0,null,0,5,"ion-col",[],null,null,null,b.A,b.e)),o.ob(49,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,j)),o.ob(51,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,G)),o.ob(53,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(54,0,null,0,5,"ion-col",[],null,null,null,b.A,b.e)),o.ob(55,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,O)),o.ob(57,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,L)),o.ob(59,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(60,0,null,0,5,"ion-col",[],null,null,null,b.A,b.e)),o.ob(61,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,A)),o.ob(63,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,y)),o.ob(65,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(66,0,null,0,2,"ion-col",[["style","margin-top: 5px"]],null,null,null,b.A,b.e)),o.ob(67,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" + "])),(l()(),o.pb(69,0,null,0,5,"ion-col",[],null,null,null,b.A,b.e)),o.ob(70,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,w)),o.ob(72,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,v)),o.ob(74,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(75,0,null,0,131,"ion-grid",[],null,null,null,b.C,b.g)),o.ob(76,49152,null,0,i.A,[o.h,o.k],null,null),(l()(),o.pb(77,0,null,0,10,"ion-row",[["style","vertical-align: middle;"]],null,null,null,b.N,b.r)),o.ob(78,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(79,0,null,0,2,"ion-col",[],null,null,null,b.A,b.e)),o.ob(80,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \xa0 "])),(l()(),o.pb(82,0,null,0,2,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(83,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.Gb(-1,0,[" \u4e2d\u734e\u6ce8\u6578 "])),(l()(),o.pb(85,0,null,0,2,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(86,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.Gb(-1,0,[" \u734e\u91d1 "])),(l()(),o.pb(88,0,null,0,16,"ion-row",[["style","vertical-align: middle;"]],null,null,null,b.N,b.r)),o.ob(89,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(90,0,null,0,2,"ion-col",[],null,null,null,b.A,b.e)),o.ob(91,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u982d\u734e "])),(l()(),o.pb(93,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(94,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,x)),o.ob(96,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,N)),o.ob(98,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(99,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(100,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,D)),o.ob(102,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,S)),o.ob(104,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(105,0,null,0,16,"ion-row",[["style","vertical-align: middle;"]],null,null,null,b.N,b.r)),o.ob(106,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(107,0,null,0,2,"ion-col",[],null,null,null,b.A,b.e)),o.ob(108,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u4e8c\u734e "])),(l()(),o.pb(110,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(111,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,C)),o.ob(113,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,R)),o.ob(115,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(116,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(117,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,B)),o.ob(119,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,Q)),o.ob(121,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(122,0,null,0,16,"ion-row",[["style","vertical-align: middle;"]],null,null,null,b.N,b.r)),o.ob(123,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(124,0,null,0,2,"ion-col",[],null,null,null,b.A,b.e)),o.ob(125,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u4e09\u734e "])),(l()(),o.pb(127,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(128,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,T)),o.ob(130,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,_)),o.ob(132,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(133,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(134,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,F)),o.ob(136,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,J)),o.ob(138,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(139,0,null,0,16,"ion-row",[["style","vertical-align: middle;"]],null,null,null,b.N,b.r)),o.ob(140,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(141,0,null,0,2,"ion-col",[],null,null,null,b.A,b.e)),o.ob(142,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u56db\u734e "])),(l()(),o.pb(144,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(145,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,K)),o.ob(147,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,Z)),o.ob(149,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(150,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(151,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,$)),o.ob(153,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,E)),o.ob(155,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(156,0,null,0,16,"ion-row",[["style","vertical-align: middle;"]],null,null,null,b.N,b.r)),o.ob(157,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(158,0,null,0,2,"ion-col",[],null,null,null,b.A,b.e)),o.ob(159,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u4e94\u734e "])),(l()(),o.pb(161,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(162,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,Y)),o.ob(164,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,q)),o.ob(166,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(167,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(168,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,M)),o.ob(170,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,P)),o.ob(172,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(173,0,null,0,16,"ion-row",[["style","vertical-align: middle;"]],null,null,null,b.N,b.r)),o.ob(174,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(175,0,null,0,2,"ion-col",[],null,null,null,b.A,b.e)),o.ob(176,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u516d\u734e "])),(l()(),o.pb(178,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(179,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,V)),o.ob(181,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,W)),o.ob(183,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(184,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(185,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,H)),o.ob(187,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,U)),o.ob(189,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(190,0,null,0,16,"ion-row",[["style","vertical-align: middle;"]],null,null,null,b.N,b.r)),o.ob(191,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(192,0,null,0,2,"ion-col",[],null,null,null,b.A,b.e)),o.ob(193,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u4e03\u734e "])),(l()(),o.pb(195,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(196,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,X)),o.ob(198,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,ll)),o.ob(200,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(201,0,null,0,5,"ion-col",[["size","5"]],null,null,null,b.A,b.e)),o.ob(202,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,nl)),o.ob(204,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,ul)),o.ob(206,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(207,0,null,0,29,"ion-grid",[["style","font-size: 85%"]],null,null,null,b.C,b.g)),o.ob(208,49152,null,0,i.A,[o.h,o.k],null,null),(l()(),o.pb(209,0,null,0,16,"ion-row",[["style","vertical-align: middle;"]],null,null,null,b.N,b.r)),o.ob(210,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(211,0,null,0,2,"ion-col",[],null,null,null,b.A,b.e)),o.ob(212,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u4e0b\u6b21\u652a\u73e0 "])),(l()(),o.pb(214,0,null,0,5,"ion-col",[["size","6"]],null,null,null,b.A,b.e)),o.ob(215,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,ol)),o.ob(217,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,el)),o.ob(219,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(220,0,null,0,5,"ion-col",[["size","3"],["style","color: green"]],null,null,null,b.A,b.e)),o.ob(221,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,tl)),o.ob(223,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,bl)),o.ob(225,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(226,0,null,0,10,"ion-row",[],null,null,null,b.N,b.r)),o.ob(227,49152,null,0,i.ib,[o.h,o.k],null,null),(l()(),o.pb(228,0,null,0,2,"ion-col",[],null,null,null,b.A,b.e)),o.ob(229,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u4f30\u8a08\u982d\u734e "])),(l()(),o.pb(231,0,null,0,5,"ion-col",[["size","9"],["style","color: red; vertical-align: top; text-align: left; font-weight: bold; font-size: 110%"]],null,null,null,b.A,b.e)),o.ob(232,49152,null,0,i.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,il)),o.ob(234,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,rl)),o.ob(236,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,11,0,"./assets/icon/facebook.png"),l(n,15,0,"refresh"),l(n,22,0,u.loaded),l(n,25,0,u.loaded),l(n,33,0,u.loaded),l(n,35,0,!u.loaded),l(n,39,0,u.loaded),l(n,41,0,!u.loaded),l(n,45,0,u.loaded),l(n,47,0,!u.loaded),l(n,51,0,u.loaded),l(n,53,0,!u.loaded),l(n,57,0,u.loaded),l(n,59,0,!u.loaded),l(n,63,0,u.loaded),l(n,65,0,!u.loaded),l(n,72,0,u.loaded),l(n,74,0,!u.loaded),l(n,83,0,"5"),l(n,86,0,"5"),l(n,94,0,"5"),l(n,96,0,u.loaded),l(n,98,0,!u.loaded),l(n,100,0,"5"),l(n,102,0,u.loaded),l(n,104,0,!u.loaded),l(n,111,0,"5"),l(n,113,0,u.loaded),l(n,115,0,!u.loaded),l(n,117,0,"5"),l(n,119,0,u.loaded),l(n,121,0,!u.loaded),l(n,128,0,"5"),l(n,130,0,u.loaded),l(n,132,0,!u.loaded),l(n,134,0,"5"),l(n,136,0,u.loaded),l(n,138,0,!u.loaded),l(n,145,0,"5"),l(n,147,0,u.loaded),l(n,149,0,!u.loaded),l(n,151,0,"5"),l(n,153,0,u.loaded),l(n,155,0,!u.loaded),l(n,162,0,"5"),l(n,164,0,u.loaded),l(n,166,0,!u.loaded),l(n,168,0,"5"),l(n,170,0,u.loaded),l(n,172,0,!u.loaded),l(n,179,0,"5"),l(n,181,0,u.loaded),l(n,183,0,!u.loaded),l(n,185,0,"5"),l(n,187,0,u.loaded),l(n,189,0,!u.loaded),l(n,196,0,"5"),l(n,198,0,u.loaded),l(n,200,0,!u.loaded),l(n,202,0,"5"),l(n,204,0,u.loaded),l(n,206,0,!u.loaded),l(n,215,0,"6"),l(n,217,0,u.loaded),l(n,219,0,!u.loaded),l(n,221,0,"3"),l(n,223,0,u.loaded),l(n,225,0,!u.loaded),l(n,232,0,"9"),l(n,234,0,u.loaded),l(n,236,0,!u.loaded)},null)}function cl(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"app-result",[],null,null,null,sl,p)),o.ob(1,114688,null,0,a,[i.Fb,s.a,c.a],null,null)],function(l,n){l(n,1,0)},null)}var al=o.lb("app-result",a,cl,{},{},[]),pl=u("gIcY"),fl=u("ZYCi");u.d(n,"ResultComponentModuleNgFactory",function(){return gl});var gl=o.mb(e,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[t.a,al]],[3,o.j],o.x]),o.xb(4608,r.l,r.k,[o.u,[2,r.s]]),o.xb(4608,pl.i,pl.i,[]),o.xb(4608,i.b,i.b,[o.z,o.g]),o.xb(4608,i.Gb,i.Gb,[i.b,o.j,o.q]),o.xb(4608,i.Kb,i.Kb,[i.b,o.j,o.q]),o.xb(1073742336,r.b,r.b,[]),o.xb(1073742336,pl.h,pl.h,[]),o.xb(1073742336,pl.a,pl.a,[]),o.xb(1073742336,i.Db,i.Db,[]),o.xb(1073742336,fl.p,fl.p,[[2,fl.v],[2,fl.n]]),o.xb(1073742336,e,e,[]),o.xb(1024,fl.l,function(){return[[{path:"",component:a}]]},[])])})}}]);