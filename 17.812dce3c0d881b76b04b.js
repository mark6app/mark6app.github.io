(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Sk8P:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=function(){return function(){}}(),e=u("pMnS"),c=u("oBZk"),o=u("ZZ/e"),b=u("Ip0R"),r=u("mrSG"),s=u("OlR4"),a=u("2OOY"),p=u("u+F5"),m=function(){function l(l,n,u,t,i,e,c){this.commonService=l,this.mark6Service=n,this._router=u,this._activeRoute=t,this.navCtrl=i,this.loadingController=e,this.dataVal=c,this.rows=[0,1,2,3,4,5,6],this.cols=[0,1,2,3,4,5,6],this.balls=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}return l.prototype.ngOnInit=function(){},l.prototype.reset=function(){for(var l=0;l<49;l++)this.balls[l]=!1},l.prototype.toggle=function(l){this.balls[l]=!0!==this.balls[l]},l.prototype.check=function(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var l,n,u,t=this;return Object(r.__generator)(this,(function(i){switch(i.label){case 0:for(l=new Array,n=0;n<this.balls.length;n++)this.balls[n]&&l.push(n+1);return l.length<6?(this.commonService.showAlert("Error","最少選擇6個字"),[2]):(this.commonService.showRewardVideoAds(),[4,this.loadingController.create({message:"核對中...",spinner:"circles"})]);case 1:return(u=i.sent()).present().then((function(){t.mark6Service.getLast30().subscribe((function(n){var i=new Array;if(null!=n&&n.length>0){for(var e=0,c=n;e<c.length;e++){for(var o=c[e],b=0,r=0,s=l;r<s.length;r++){var a=s[r];a===o.number1?(o.matched[0]=!0,b++):a===o.number2?(o.matched[1]=!0,b++):a===o.number3?(o.matched[2]=!0,b++):a===o.number4?(o.matched[3]=!0,b++):a===o.number5?(o.matched[4]=!0,b++):a===o.number6&&(o.matched[5]=!0,b++),a===o.numberX&&(o.matched[6]=!0,b+=.5)}b>=3&&i.push(o)}u.dismiss(),i.length>=1?(t.dataVal.storage=i,t.navCtrl.navigateForward(["checkresult/list"])):t.commonService.showAlert("Info","閣下輸入的號碼在最近30期沒有中獎")}else u.dismiss()}),(function(l){u.dismiss(),console.log(l)}))})),[2]}}))}))},l}(),g=u("ZYCi"),f=t.zb({encapsulation:0,styles:[["ion-row[_ngcontent-%COMP%]{width:100%;height:auto}ion-col[_ngcontent-%COMP%]{width:auto;height:33%}img[_ngcontent-%COMP%]{width:100%;height:100%}"]],data:{}});function h(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,1,"ion-img",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggle(7*l.parent.parent.context.$implicit+l.parent.context.$implicit)&&t),t}),c.F,c.j)),t.Ab(1,49152,null,0,o.E,[t.j,t.p,t.F],{src:[0,"src"]},null)],(function(l,n){l(n,1,0,t.Fb(1,"./assets/images/no_",7*n.parent.parent.context.$implicit+n.parent.context.$implicit+1,".png"))}),null)}function A(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,1,"ion-img",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggle(7*l.parent.parent.context.$implicit+l.parent.context.$implicit)&&t),t}),c.F,c.j)),t.Ab(1,49152,null,0,o.E,[t.j,t.p,t.F],{src:[0,"src"]},null)],(function(l,n){l(n,1,0,t.Fb(1,"./assets/images/no_",7*n.parent.parent.context.$implicit+n.parent.context.$implicit+1,"x.png"))}),null)}function d(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,5,"ion-col",[],null,null,null,c.A,c.e)),t.Ab(1,49152,null,0,o.u,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,h)),t.Ab(3,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,A)),t.Ab(5,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,u.balls[7*n.parent.context.$implicit+n.context.$implicit]),l(n,5,0,!u.balls[7*n.parent.context.$implicit+n.context.$implicit])}),null)}function F(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,3,"ion-row",[],null,null,null,c.N,c.r)),t.Ab(1,49152,null,0,o.kb,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,d)),t.Ab(3,278528,null,0,b.i,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.cols)}),null)}function j(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,18,"ion-header",[],null,null,null,c.D,c.h)),t.Ab(1,49152,null,0,o.C,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,16,"ion-toolbar",[],null,null,null,c.R,c.v)),t.Ab(3,49152,null,0,o.Db,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.z,c.d)),t.Ab(5,49152,null,0,o.m,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,1,"ion-menu-button",[],null,null,null,c.K,c.p)),t.Ab(7,49152,null,0,o.S,[t.j,t.p,t.F],null,null),(l()(),t.Bb(8,0,null,0,7,"ion-buttons",[["class","ion-padding"],["slot","end"]],null,null,null,c.z,c.d)),t.Ab(9,49152,null,0,o.m,[t.j,t.p,t.F],null,null),(l()(),t.Bb(10,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.reset()&&t),t}),c.y,c.c)),t.Ab(11,49152,null,0,o.l,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["重選"])),(l()(),t.Bb(13,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.check()&&t),t}),c.y,c.c)),t.Ab(14,49152,null,0,o.l,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["核對"])),(l()(),t.Bb(16,0,null,0,2,"ion-title",[],null,null,null,c.P,c.t)),t.Ab(17,49152,null,0,o.Bb,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,[" 核對結果 "])),(l()(),t.Bb(19,0,null,null,5,"ion-content",[["class","ion-padding"]],null,null,null,c.B,c.f)),t.Ab(20,49152,null,0,o.v,[t.j,t.p,t.F],null,null),(l()(),t.Bb(21,0,null,0,3,"ion-grid",[],null,null,null,c.C,c.g)),t.Ab(22,49152,null,0,o.B,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,F)),t.Ab(24,278528,null,0,b.i,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,24,0,n.component.rows)}),null)}function B(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,1,"app-checkresult",[],null,null,null,j,f)),t.Ab(1,114688,null,0,m,[s.a,a.a,g.n,g.a,o.Jb,o.Hb,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=t.xb("app-checkresult",m,B,{},{},[]),v=function(){function l(l,n,u,t,i,e){this.dataVal=l,this.commonService=n,this.m6service=u,this._router=t,this.navCtrl=i,this.loadingController=e}return l.prototype.ngOnInit=function(){this.m6results=this.dataVal.storage,null==this.m6results&&this.navCtrl.navigateRoot("/404")},l.prototype.showDetail=function(l){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,u=this;return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,this.loadingController.create({message:"Loading",spinner:"circles"})];case 1:return(n=t.sent()).present().then((function(){u.navCtrl.navigateForward(["last30/detail",l]),n.dismiss()})),[2]}}))}))},l.prototype.toDate=function(l){return null!=l?this.m6service.toDateStr(Number(l)):""},l}(),$=t.zb({encapsulation:0,styles:[[""]],data:{}});function I(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number1,".png"))}))}function W(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number1,"x.png"))}))}function w(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number2,".png"))}))}function k(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number2,"x.png"))}))}function S(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number3,".png"))}))}function _(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number3,"x.png"))}))}function C(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number4,".png"))}))}function O(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number4,"x.png"))}))}function q(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number5,".png"))}))}function y(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number5,"x.png"))}))}function L(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number6,".png"))}))}function z(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.number6,"x.png"))}))}function D(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.numberX,".png"))}))}function R(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"./assets/images/no_",n.parent.context.$implicit.numberX,"x.png"))}))}function M(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,62,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showDetail(l.context.$implicit)&&t),t}),c.H,c.l)),t.Ab(1,49152,null,0,o.I,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,60,"ion-grid",[],null,null,null,c.C,c.g)),t.Ab(3,49152,null,0,o.B,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,46,"ion-row",[["style","vertical-align: middle; text-align: center;"]],null,null,null,c.N,c.r)),t.Ab(5,49152,null,0,o.kb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,5,"ion-col",[],null,null,null,c.A,c.e)),t.Ab(7,49152,null,0,o.u,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,I)),t.Ab(9,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,W)),t.Ab(11,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(12,0,null,0,5,"ion-col",[],null,null,null,c.A,c.e)),t.Ab(13,49152,null,0,o.u,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,w)),t.Ab(15,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,k)),t.Ab(17,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(18,0,null,0,5,"ion-col",[],null,null,null,c.A,c.e)),t.Ab(19,49152,null,0,o.u,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,S)),t.Ab(21,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,_)),t.Ab(23,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(24,0,null,0,5,"ion-col",[],null,null,null,c.A,c.e)),t.Ab(25,49152,null,0,o.u,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,C)),t.Ab(27,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,O)),t.Ab(29,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(30,0,null,0,5,"ion-col",[],null,null,null,c.A,c.e)),t.Ab(31,49152,null,0,o.u,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,q)),t.Ab(33,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,y)),t.Ab(35,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(36,0,null,0,5,"ion-col",[],null,null,null,c.A,c.e)),t.Ab(37,49152,null,0,o.u,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,L)),t.Ab(39,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,z)),t.Ab(41,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(42,0,null,0,2,"ion-col",[["style","margin-top: 5px"]],null,null,null,c.A,c.e)),t.Ab(43,49152,null,0,o.u,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,[" + "])),(l()(),t.Bb(45,0,null,0,5,"ion-col",[],null,null,null,c.A,c.e)),t.Ab(46,49152,null,0,o.u,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,D)),t.Ab(48,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,R)),t.Ab(50,16384,null,0,b.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(51,0,null,0,11,"ion-row",[],null,null,null,c.N,c.r)),t.Ab(52,49152,null,0,o.kb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(53,0,null,0,4,"ion-col",[["size","4"]],null,null,null,c.A,c.e)),t.Ab(54,49152,null,0,o.u,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(55,0,null,0,2,"ion-label",[],null,null,null,c.I,c.m)),t.Ab(56,49152,null,0,o.O,[t.j,t.p,t.F],null,null),(l()(),t.Ub(57,0,["",""])),(l()(),t.Bb(58,0,null,0,4,"ion-col",[["size","8"]],null,null,null,c.A,c.e)),t.Ab(59,49152,null,0,o.u,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(60,0,null,0,2,"ion-label",[],null,null,null,c.I,c.m)),t.Ab(61,49152,null,0,o.O,[t.j,t.p,t.F],null,null),(l()(),t.Ub(62,0,["",""]))],(function(l,n){l(n,9,0,n.context.$implicit.matched[0]),l(n,11,0,!n.context.$implicit.matched[0]),l(n,15,0,n.context.$implicit.matched[1]),l(n,17,0,!n.context.$implicit.matched[1]),l(n,21,0,n.context.$implicit.matched[2]),l(n,23,0,!n.context.$implicit.matched[2]),l(n,27,0,n.context.$implicit.matched[3]),l(n,29,0,!n.context.$implicit.matched[3]),l(n,33,0,n.context.$implicit.matched[4]),l(n,35,0,!n.context.$implicit.matched[4]),l(n,39,0,n.context.$implicit.matched[5]),l(n,41,0,!n.context.$implicit.matched[5]),l(n,48,0,n.context.$implicit.matched[6]),l(n,50,0,!n.context.$implicit.matched[6]),l(n,54,0,"4"),l(n,59,0,"8")}),(function(l,n){var u=n.component;l(n,57,0,n.context.$implicit.drawNo),l(n,62,0,u.toDate(n.context.$implicit.drawDate))}))}function N(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,11,"ion-header",[],null,null,null,c.D,c.h)),t.Ab(1,49152,null,0,o.C,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,c.R,c.v)),t.Ab(3,49152,null,0,o.Db,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.z,c.d)),t.Ab(5,49152,null,0,o.m,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Nb(l,8).onClick(u)&&i),i}),c.x,c.b)),t.Ab(7,49152,null,0,o.h,[t.j,t.p,t.F],null,null),t.Ab(8,16384,null,0,o.i,[[2,o.jb],o.Jb],null,null),(l()(),t.Bb(9,0,null,0,2,"ion-title",[],null,null,null,c.P,c.t)),t.Ab(10,49152,null,0,o.Bb,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,[" 最近30期中獎結果 "])),(l()(),t.Bb(12,0,null,null,5,"ion-content",[],null,null,null,c.B,c.f)),t.Ab(13,49152,null,0,o.v,[t.j,t.p,t.F],null,null),(l()(),t.Bb(14,0,null,0,3,"ion-list",[],null,null,null,c.J,c.n)),t.Ab(15,49152,null,0,o.P,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,M)),t.Ab(17,278528,null,0,b.i,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,17,0,n.component.m6results)}),null)}function P(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,1,"app-checkresultlist",[],null,null,null,N,$)),t.Ab(1,114688,null,0,v,[p.a,s.a,a.a,g.n,o.Jb,o.Hb],null,null)],(function(l,n){l(n,1,0)}),null)}var U=t.xb("app-checkresultlist",v,P,{},{},[]),J=u("gIcY");u.d(n,"CheckResultComponentModuleNgFactory",(function(){return V}));var V=t.yb(i,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[e.a,x,U]],[3,t.m],t.D]),t.Lb(4608,b.l,b.k,[t.z,[2,b.s]]),t.Lb(4608,J.i,J.i,[]),t.Lb(4608,o.b,o.b,[t.F,t.g]),t.Lb(4608,o.Ib,o.Ib,[o.b,t.m,t.w]),t.Lb(4608,o.Mb,o.Mb,[o.b,t.m,t.w]),t.Lb(1073742336,b.b,b.b,[]),t.Lb(1073742336,J.h,J.h,[]),t.Lb(1073742336,J.a,J.a,[]),t.Lb(1073742336,o.Fb,o.Fb,[]),t.Lb(1073742336,g.p,g.p,[[2,g.u],[2,g.n]]),t.Lb(1073742336,i,i,[]),t.Lb(1024,g.l,(function(){return[[{path:"",component:m},{path:"list",component:v}]]}),[])])}))}}]);