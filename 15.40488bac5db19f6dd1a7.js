(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Wnq7:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=function(){return function(){}}(),t=u("pMnS"),b=u("Ip0R"),i=u("oBZk"),r=u("ZZ/e"),a=u("gIcY"),g=u("2OOY"),s=u("OlR4"),p=u("Ns5P"),h=function(){function l(l,n){this.m6service=l,this.commonService=n,this.loaded=!1,this.totalLegs=0,this.bankerWinNoIncludeX=!1,this.legWinNoIncludeX=!1}return l.prototype.ngOnInit=function(){},l.prototype.onTotalBetNoChange=function(){this.totalBets=null,this.amount10=null,this.amount5=null,null!=this.totalBankerNo&&null!=this.totalLegNo&&this.totalBankerNo>=1&&this.totalBankerNo<=5&&this.totalLegNo>=1&&this.totalLegNo<=48&&this.totalBankerNo+this.totalLegNo>=6&&(this.totalBets=Math.round(this.m6service.nCr(this.totalLegNo,6-this.totalBankerNo)),this.amount10=10*this.totalBets,this.amount5=5*this.totalBets)},l.prototype.onCalClick=function(){this.m6result=new p.a,this.m6result.prize1Qty="-",this.m6result.prize2Qty="-",this.m6result.prize3Qty="-",this.m6result.prize4Qty="-",this.m6result.prize4Amount="-",this.m6result.prize5Qty="-",this.m6result.prize5Amount="-",this.m6result.prize6Qty="-",this.m6result.prize6Amount="-",this.m6result.prize7Qty="-",this.m6result.prize7Amount="-";var l=this.m6service.calBankerLegChance(this.totalBankerNo,this.bankerWinNum,this.bankerWinNoIncludeX,this.totalLegNo,this.legWinNum,this.legWinNoIncludeX);if(null!=l&&l.length>0)for(var n=0,u=l;n<u.length;n++){var o=u[n],e=o.PRIZE,t=o.MATCH,b=Number(e),i=Number(t),r=String(t),a=this.m6service.calBonusAmount(Number(b-1))*Number(i),g="$"+this.m6service.formatNumber(a);switch(e){case 1:this.m6result.prize1Qty=r;break;case 2:this.m6result.prize2Qty=r;break;case 3:this.m6result.prize3Qty=r;break;case 4:this.m6result.prize4Amount=g,this.m6result.prize4Qty=r;break;case 5:this.m6result.prize5Amount=g,this.m6result.prize5Qty=r;break;case 6:this.m6result.prize6Amount=g,this.m6result.prize6Qty=r;break;case 7:this.m6result.prize7Amount=g,this.m6result.prize7Qty=r}}this.loaded=!0},l.prototype.onClearClick=function(){this.totalLegs=0,this.totalBankerNo=null,this.totalLegNo=null,this.bankerWinNum=0,this.legWinNum=0,this.bankerWinNoIncludeX=!1,this.legWinNoIncludeX=!1,this.totalBets=null,this.amount10=null,this.amount5=null,this.loaded=!1,this.m6result=null},l}(),c=o.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["$"]))],null,null)}function m(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["$"]))],null,null)}function k(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize1Qty)})}function f(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function I(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize2Qty)})}function z(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function C(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize3Qty)})}function N(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function G(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize4Qty)})}function v(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function y(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize4Amount)})}function A(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function B(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize5Qty)})}function L(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function j(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize5Amount)})}function O(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function w(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize6Qty)})}function D(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function Q(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize6Amount)})}function M(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function W(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize7Qty)})}function q(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function H(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.m6result.prize7Amount)})}function P(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["-"]))],null,null)}function x(l){return o.Ib(0,[o.Bb(0,b.d,[o.u]),(l()(),o.pb(1,0,null,null,18,"ion-header",[],null,null,null,i.D,i.h)),o.ob(2,49152,null,0,r.B,[o.h,o.k],null,null),(l()(),o.pb(3,0,null,0,16,"ion-toolbar",[],null,null,null,i.R,i.v)),o.ob(4,49152,null,0,r.Bb,[o.h,o.k],null,null),(l()(),o.pb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.z,i.d)),o.ob(6,49152,null,0,r.l,[o.h,o.k],null,null),(l()(),o.pb(7,0,null,0,1,"ion-menu-button",[],null,null,null,i.K,i.p)),o.ob(8,49152,null,0,r.R,[o.h,o.k],null,null),(l()(),o.pb(9,0,null,0,7,"ion-buttons",[["padding",""],["slot","end"]],null,null,null,i.z,i.d)),o.ob(10,49152,null,0,r.l,[o.h,o.k],null,null),(l()(),o.pb(11,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onClearClick()&&o),o},i.y,i.c)),o.ob(12,49152,null,0,r.k,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u6e05\u9664"])),(l()(),o.pb(14,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onCalClick()&&o),o},i.y,i.c)),o.ob(15,49152,null,0,r.k,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u8a08\u7b97"])),(l()(),o.pb(17,0,null,0,2,"ion-title",[],null,null,null,i.P,i.t)),o.ob(18,49152,null,0,r.zb,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" \u81bd\u62d6\u8a08\u7b97\u5668 "])),(l()(),o.pb(20,0,null,null,260,"ion-content",[["padding",""]],null,null,null,i.B,i.f)),o.ob(21,49152,null,0,r.u,[o.h,o.k],null,null),(l()(),o.pb(22,0,null,0,33,"ion-row",[],null,null,null,i.N,i.r)),o.ob(23,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(24,0,null,0,15,"ion-col",[],null,null,null,i.A,i.e)),o.ob(25,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.pb(26,0,null,0,13,"ion-item",[],null,null,null,i.H,i.l)),o.ob(27,49152,null,0,r.H,[o.h,o.k],null,null),(l()(),o.pb(28,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,i.I,i.m)),o.ob(29,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u8cb7\u81bd\u5b57\u6578:"])),(l()(),o.pb(31,0,null,0,8,"ion-input",[["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var e=!0,t=l.component;return"ionBlur"===n&&(e=!1!==o.zb(l,34)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==o.zb(l,34)._handleIonChange(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.totalBankerNo=u)&&e),"input"===n&&(e=!1!==t.onTotalBetNoChange()&&e),"ionChange"===n&&(e=!1!==t.onTotalBetNoChange()&&e),e},i.G,i.k)),o.ob(32,16384,null,0,a.g,[],{required:[0,"required"]},null),o.Db(1024,null,a.b,function(l){return[l]},[a.g]),o.ob(34,16384,null,0,r.Ib,[o.k],null,null),o.Db(1024,null,a.c,function(l){return[l]},[r.Ib]),o.ob(36,671744,null,0,a.f,[[8,null],[6,a.b],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),o.Db(2048,null,a.d,null,[a.f]),o.ob(38,16384,null,0,a.e,[[4,a.d]],null,null),o.ob(39,49152,null,0,r.G,[o.h,o.k],{required:[0,"required"],type:[1,"type"]},null),(l()(),o.pb(40,0,null,0,15,"ion-col",[],null,null,null,i.A,i.e)),o.ob(41,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.pb(42,0,null,0,13,"ion-item",[],null,null,null,i.H,i.l)),o.ob(43,49152,null,0,r.H,[o.h,o.k],null,null),(l()(),o.pb(44,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,i.I,i.m)),o.ob(45,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u62d6\u5b57\u6578:"])),(l()(),o.pb(47,0,null,0,8,"ion-input",[["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var e=!0,t=l.component;return"ionBlur"===n&&(e=!1!==o.zb(l,50)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==o.zb(l,50)._handleIonChange(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.totalLegNo=u)&&e),"input"===n&&(e=!1!==t.onTotalBetNoChange()&&e),"ionChange"===n&&(e=!1!==t.onTotalBetNoChange()&&e),e},i.G,i.k)),o.ob(48,16384,null,0,a.g,[],{required:[0,"required"]},null),o.Db(1024,null,a.b,function(l){return[l]},[a.g]),o.ob(50,16384,null,0,r.Ib,[o.k],null,null),o.Db(1024,null,a.c,function(l){return[l]},[r.Ib]),o.ob(52,671744,null,0,a.f,[[8,null],[6,a.b],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),o.Db(2048,null,a.d,null,[a.f]),o.ob(54,16384,null,0,a.e,[[4,a.d]],null,null),o.ob(55,49152,null,0,r.G,[o.h,o.k],{required:[0,"required"],type:[1,"type"]},null),(l()(),o.pb(56,0,null,0,11,"ion-row",[],null,null,null,i.N,i.r)),o.ob(57,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(58,0,null,0,4,"ion-col",[["size","4"]],null,null,null,i.A,i.e)),o.ob(59,49152,null,0,r.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(60,0,null,0,2,"ion-label",[],null,null,null,i.I,i.m)),o.ob(61,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u7e3d\u6ce8\u6578: "])),(l()(),o.pb(63,0,null,0,4,"ion-col",[],null,null,null,i.A,i.e)),o.ob(64,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.pb(65,0,null,0,2,"ion-label",[],null,null,null,i.I,i.m)),o.ob(66,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.Gb(67,0,["",""])),(l()(),o.pb(68,0,null,0,14,"ion-row",[],null,null,null,i.N,i.r)),o.ob(69,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(70,0,null,0,4,"ion-col",[["size","4"]],null,null,null,i.A,i.e)),o.ob(71,49152,null,0,r.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(72,0,null,0,2,"ion-label",[],null,null,null,i.I,i.m)),o.ob(73,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["HK$10: "])),(l()(),o.pb(75,0,null,0,7,"ion-col",[],null,null,null,i.A,i.e)),o.ob(76,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.pb(77,0,null,0,5,"ion-label",[],null,null,null,i.I,i.m)),o.ob(78,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,d)),o.ob(80,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.Gb(81,0,["",""])),o.Cb(82,2),(l()(),o.pb(83,0,null,0,14,"ion-row",[],null,null,null,i.N,i.r)),o.ob(84,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(85,0,null,0,4,"ion-col",[["size","4"]],null,null,null,i.A,i.e)),o.ob(86,49152,null,0,r.t,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(87,0,null,0,2,"ion-label",[],null,null,null,i.I,i.m)),o.ob(88,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["HK$5: "])),(l()(),o.pb(90,0,null,0,7,"ion-col",[],null,null,null,i.A,i.e)),o.ob(91,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.pb(92,0,null,0,5,"ion-label",[],null,null,null,i.I,i.m)),o.ob(93,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,m)),o.ob(95,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.Gb(96,0,["",""])),o.Cb(97,2),(l()(),o.pb(98,0,null,0,29,"ion-row",[],null,null,null,i.N,i.r)),o.ob(99,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(100,0,null,0,13,"ion-col",[],null,null,null,i.A,i.e)),o.ob(101,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.pb(102,0,null,0,11,"ion-item",[],null,null,null,i.H,i.l)),o.ob(103,49152,null,0,r.H,[o.h,o.k],null,null),(l()(),o.pb(104,0,null,0,2,"ion-label",[["floating",""]],null,null,null,i.I,i.m)),o.ob(105,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u4e2d\u51fa\u81bd\u6578:"])),(l()(),o.pb(107,0,null,0,6,"ion-input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,t=l.component;return"ionBlur"===n&&(e=!1!==o.zb(l,108)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==o.zb(l,108)._handleIonChange(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.bankerWinNum=u)&&e),e},i.G,i.k)),o.ob(108,16384,null,0,r.Ib,[o.k],null,null),o.Db(1024,null,a.c,function(l){return[l]},[r.Ib]),o.ob(110,671744,null,0,a.f,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),o.Db(2048,null,a.d,null,[a.f]),o.ob(112,16384,null,0,a.e,[[4,a.d]],null,null),o.ob(113,49152,null,0,r.G,[o.h,o.k],{type:[0,"type"]},null),(l()(),o.pb(114,0,null,0,13,"ion-col",[],null,null,null,i.A,i.e)),o.ob(115,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.pb(116,0,null,0,11,"ion-item",[],null,null,null,i.H,i.l)),o.ob(117,49152,null,0,r.H,[o.h,o.k],null,null),(l()(),o.pb(118,0,null,0,2,"ion-label",[["floating",""]],null,null,null,i.I,i.m)),o.ob(119,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u5305\u62ec\u7279\u5225\u865f\u78bc:"])),(l()(),o.pb(121,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,t=l.component;return"ionBlur"===n&&(e=!1!==o.zb(l,122)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==o.zb(l,122)._handleIonChange(u.target.checked)&&e),"ngModelChange"===n&&(e=!1!==(t.bankerWinNoIncludeX=u)&&e),e},i.Q,i.u)),o.ob(122,16384,null,0,r.c,[o.k],null,null),o.Db(1024,null,a.c,function(l){return[l]},[r.c]),o.ob(124,671744,null,0,a.f,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),o.Db(2048,null,a.d,null,[a.f]),o.ob(126,16384,null,0,a.e,[[4,a.d]],null,null),o.ob(127,49152,null,0,r.Ab,[o.h,o.k],null,null),(l()(),o.pb(128,0,null,0,29,"ion-row",[],null,null,null,i.N,i.r)),o.ob(129,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(130,0,null,0,13,"ion-col",[],null,null,null,i.A,i.e)),o.ob(131,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.pb(132,0,null,0,11,"ion-item",[],null,null,null,i.H,i.l)),o.ob(133,49152,null,0,r.H,[o.h,o.k],null,null),(l()(),o.pb(134,0,null,0,2,"ion-label",[["floating",""]],null,null,null,i.I,i.m)),o.ob(135,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u4e2d\u51fa\u62d6\u6578:"])),(l()(),o.pb(137,0,null,0,6,"ion-input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,t=l.component;return"ionBlur"===n&&(e=!1!==o.zb(l,138)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==o.zb(l,138)._handleIonChange(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.legWinNum=u)&&e),e},i.G,i.k)),o.ob(138,16384,null,0,r.Ib,[o.k],null,null),o.Db(1024,null,a.c,function(l){return[l]},[r.Ib]),o.ob(140,671744,null,0,a.f,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),o.Db(2048,null,a.d,null,[a.f]),o.ob(142,16384,null,0,a.e,[[4,a.d]],null,null),o.ob(143,49152,null,0,r.G,[o.h,o.k],{type:[0,"type"]},null),(l()(),o.pb(144,0,null,0,13,"ion-col",[],null,null,null,i.A,i.e)),o.ob(145,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.pb(146,0,null,0,11,"ion-item",[],null,null,null,i.H,i.l)),o.ob(147,49152,null,0,r.H,[o.h,o.k],null,null),(l()(),o.pb(148,0,null,0,2,"ion-label",[["floating",""]],null,null,null,i.I,i.m)),o.ob(149,49152,null,0,r.N,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u5305\u62ec\u7279\u5225\u865f\u78bc:"])),(l()(),o.pb(151,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,t=l.component;return"ionBlur"===n&&(e=!1!==o.zb(l,152)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==o.zb(l,152)._handleIonChange(u.target.checked)&&e),"ngModelChange"===n&&(e=!1!==(t.legWinNoIncludeX=u)&&e),e},i.Q,i.u)),o.ob(152,16384,null,0,r.c,[o.k],null,null),o.Db(1024,null,a.c,function(l){return[l]},[r.c]),o.ob(154,671744,null,0,a.f,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),o.Db(2048,null,a.d,null,[a.f]),o.ob(156,16384,null,0,a.e,[[4,a.d]],null,null),o.ob(157,49152,null,0,r.Ab,[o.h,o.k],null,null),(l()(),o.pb(158,0,null,0,122,"ion-grid",[],null,null,null,i.C,i.g)),o.ob(159,49152,null,0,r.A,[o.h,o.k],null,null),(l()(),o.pb(160,0,null,0,10,"ion-row",[],null,null,null,i.N,i.r)),o.ob(161,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(162,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(163,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\xa0"])),(l()(),o.pb(165,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(166,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u4e2d\u734e\u6ce8\u6578"])),(l()(),o.pb(168,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(169,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u734e\u91d1"])),(l()(),o.pb(171,0,null,0,13,"ion-row",[],null,null,null,i.N,i.r)),o.ob(172,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(173,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(174,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u982d\u734e"])),(l()(),o.pb(176,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(177,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,k)),o.ob(179,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,f)),o.ob(181,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(182,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(183,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u99ac\u6703\u516c\u4f48"])),(l()(),o.pb(185,0,null,0,13,"ion-row",[],null,null,null,i.N,i.r)),o.ob(186,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(187,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(188,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u4e8c\u734e"])),(l()(),o.pb(190,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(191,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,I)),o.ob(193,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,z)),o.ob(195,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(196,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(197,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u99ac\u6703\u516c\u4f48"])),(l()(),o.pb(199,0,null,0,13,"ion-row",[],null,null,null,i.N,i.r)),o.ob(200,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(201,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(202,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u4e09\u734e"])),(l()(),o.pb(204,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(205,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,C)),o.ob(207,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,N)),o.ob(209,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(210,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(211,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u99ac\u6703\u516c\u4f48"])),(l()(),o.pb(213,0,null,0,16,"ion-row",[],null,null,null,i.N,i.r)),o.ob(214,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(215,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(216,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u56db\u734e"])),(l()(),o.pb(218,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(219,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,G)),o.ob(221,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,v)),o.ob(223,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(224,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(225,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,y)),o.ob(227,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,A)),o.ob(229,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(230,0,null,0,16,"ion-row",[],null,null,null,i.N,i.r)),o.ob(231,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(232,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(233,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u4e94\u734e"])),(l()(),o.pb(235,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(236,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,B)),o.ob(238,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,L)),o.ob(240,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(241,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(242,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,j)),o.ob(244,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,O)),o.ob(246,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(247,0,null,0,16,"ion-row",[],null,null,null,i.N,i.r)),o.ob(248,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(249,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(250,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u516d\u734e"])),(l()(),o.pb(252,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(253,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,w)),o.ob(255,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,D)),o.ob(257,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(258,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(259,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,Q)),o.ob(261,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,M)),o.ob(263,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(264,0,null,0,16,"ion-row",[],null,null,null,i.N,i.r)),o.ob(265,49152,null,0,r.ib,[o.h,o.k],null,null),(l()(),o.pb(266,0,null,0,2,"ion-col",[],null,null,null,i.A,i.e)),o.ob(267,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["\u4e03\u734e"])),(l()(),o.pb(269,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(270,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,W)),o.ob(272,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,q)),o.ob(274,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(275,0,null,0,5,"ion-col",[],null,null,null,i.A,i.e)),o.ob(276,49152,null,0,r.t,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,H)),o.ob(278,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,P)),o.ob(280,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,32,0,""),l(n,36,0,u.totalBankerNo),l(n,39,0,"","number"),l(n,48,0,""),l(n,52,0,u.totalLegNo),l(n,55,0,"","number"),l(n,59,0,"4"),l(n,71,0,"4"),l(n,80,0,u.amount10>0),l(n,86,0,"4"),l(n,95,0,u.amount5>0),l(n,110,0,u.bankerWinNum),l(n,113,0,"number"),l(n,124,0,u.bankerWinNoIncludeX),l(n,140,0,u.legWinNum),l(n,143,0,"number"),l(n,154,0,u.legWinNoIncludeX),l(n,179,0,u.loaded),l(n,181,0,!u.loaded),l(n,193,0,u.loaded),l(n,195,0,!u.loaded),l(n,207,0,u.loaded),l(n,209,0,!u.loaded),l(n,221,0,u.loaded),l(n,223,0,!u.loaded),l(n,227,0,u.loaded),l(n,229,0,!u.loaded),l(n,238,0,u.loaded),l(n,240,0,!u.loaded),l(n,244,0,u.loaded),l(n,246,0,!u.loaded),l(n,255,0,u.loaded),l(n,257,0,!u.loaded),l(n,261,0,u.loaded),l(n,263,0,!u.loaded),l(n,272,0,u.loaded),l(n,274,0,!u.loaded),l(n,278,0,u.loaded),l(n,280,0,!u.loaded)},function(l,n){var u=n.component;l(n,31,0,o.zb(n,32).required?"":null,o.zb(n,38).ngClassUntouched,o.zb(n,38).ngClassTouched,o.zb(n,38).ngClassPristine,o.zb(n,38).ngClassDirty,o.zb(n,38).ngClassValid,o.zb(n,38).ngClassInvalid,o.zb(n,38).ngClassPending),l(n,47,0,o.zb(n,48).required?"":null,o.zb(n,54).ngClassUntouched,o.zb(n,54).ngClassTouched,o.zb(n,54).ngClassPristine,o.zb(n,54).ngClassDirty,o.zb(n,54).ngClassValid,o.zb(n,54).ngClassInvalid,o.zb(n,54).ngClassPending),l(n,67,0,u.totalBets);var e=o.Hb(n,81,0,l(n,82,0,o.zb(n,0),u.amount10,"2."));l(n,81,0,e);var t=o.Hb(n,96,0,l(n,97,0,o.zb(n,0),u.amount5,"2."));l(n,96,0,t),l(n,107,0,o.zb(n,112).ngClassUntouched,o.zb(n,112).ngClassTouched,o.zb(n,112).ngClassPristine,o.zb(n,112).ngClassDirty,o.zb(n,112).ngClassValid,o.zb(n,112).ngClassInvalid,o.zb(n,112).ngClassPending),l(n,121,0,o.zb(n,126).ngClassUntouched,o.zb(n,126).ngClassTouched,o.zb(n,126).ngClassPristine,o.zb(n,126).ngClassDirty,o.zb(n,126).ngClassValid,o.zb(n,126).ngClassInvalid,o.zb(n,126).ngClassPending),l(n,137,0,o.zb(n,142).ngClassUntouched,o.zb(n,142).ngClassTouched,o.zb(n,142).ngClassPristine,o.zb(n,142).ngClassDirty,o.zb(n,142).ngClassValid,o.zb(n,142).ngClassInvalid,o.zb(n,142).ngClassPending),l(n,151,0,o.zb(n,156).ngClassUntouched,o.zb(n,156).ngClassTouched,o.zb(n,156).ngClassPristine,o.zb(n,156).ngClassDirty,o.zb(n,156).ngClassValid,o.zb(n,156).ngClassInvalid,o.zb(n,156).ngClassPending)})}function T(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"app-bankercal",[],null,null,null,x,c)),o.ob(1,114688,null,0,h,[g.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var _=o.lb("app-bankercal",h,T,{},{},[]),X=u("ZYCi");u.d(n,"BankerCalComponentModuleNgFactory",function(){return E});var E=o.mb(e,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[t.a,_]],[3,o.j],o.x]),o.xb(4608,b.l,b.k,[o.u,[2,b.s]]),o.xb(4608,a.i,a.i,[]),o.xb(4608,r.b,r.b,[o.z,o.g]),o.xb(4608,r.Gb,r.Gb,[r.b,o.j,o.q]),o.xb(4608,r.Kb,r.Kb,[r.b,o.j,o.q]),o.xb(1073742336,b.b,b.b,[]),o.xb(1073742336,a.h,a.h,[]),o.xb(1073742336,a.a,a.a,[]),o.xb(1073742336,r.Db,r.Db,[]),o.xb(1073742336,X.p,X.p,[[2,X.v],[2,X.n]]),o.xb(1073742336,e,e,[]),o.xb(1024,X.l,function(){return[[{path:"",component:h}]]},[])])})}}]);