(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Sk8P:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("pMnS"),o=u("oBZk"),r=u("ZZ/e"),c=u("Ip0R"),a=u("OlR4"),b=u("2OOY"),s=u("u+F5"),p=function(){function l(l,n,u,t,e,i,o){this.commonService=l,this.mark6Service=n,this._router=u,this._activeRoute=t,this.navCtrl=e,this.loadingController=i,this.dataVal=o,this.rows=[0,1,2,3,4,5,6],this.cols=[0,1,2,3,4,5,6],this.balls=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}return l.prototype.ngOnInit=function(){},l.prototype.reset=function(){for(var l=0;l<49;l++)this.balls[l]=!1},l.prototype.toggle=function(l){this.balls[l]=!0!==this.balls[l]},l.prototype.check=function(){return l=this,void 0,u=function(){var l,n,u,t=this;return function(l,n){var u,t,e,i,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,t&&(e=2&i[0]?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,t=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){o.label=i[1];break}if(6===i[0]&&o.label<e[1]){o.label=e[1],e=i;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(i);break}e[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(l,o)}catch(r){i=[6,r],t=0}finally{u=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}}(this,function(e){switch(e.label){case 0:for(l=new Array,n=0;n<this.balls.length;n++)this.balls[n]&&l.push(n+1);return l.length<6?(this.commonService.showAlert("Error","\u6700\u5c11\u9078\u64c76\u500b\u5b57"),[2]):(this.commonService.showRewardVideoAds(),[4,this.loadingController.create({message:"\u6838\u5c0d\u4e2d...",spinner:"circles"})]);case 1:return(u=e.sent()).present().then(function(){t.mark6Service.getLast30().subscribe(function(n){var e=new Array;if(null!=n&&n.length>0){for(var i=0,o=n;i<o.length;i++){for(var r=o[i],c=0,a=0,b=l;a<b.length;a++){var s=b[a];s===r.number1?(r.matched[0]=!0,c++):s===r.number2?(r.matched[1]=!0,c++):s===r.number3?(r.matched[2]=!0,c++):s===r.number4?(r.matched[3]=!0,c++):s===r.number5?(r.matched[4]=!0,c++):s===r.number6&&(r.matched[5]=!0,c++),s===r.numberX&&(r.matched[6]=!0,c+=.5)}c>=3&&e.push(r)}u.dismiss(),e.length>=1?(t.dataVal.storage=e,t.navCtrl.navigateForward(["checkresult/list"])):t.commonService.showAlert("Info","\u95a3\u4e0b\u8f38\u5165\u7684\u865f\u78bc\u5728\u6700\u8fd130\u671f\u6c92\u6709\u4e2d\u734e")}else u.dismiss()},function(l){u.dismiss(),console.log(l)})}),[2]}})},new((n=void 0)||(n=Promise))(function(t,e){function i(l){try{r(u.next(l))}catch(n){e(n)}}function o(l){try{r(u.throw(l))}catch(n){e(n)}}function r(l){l.done?t(l.value):new n(function(n){n(l.value)}).then(i,o)}r((u=u.apply(l,[])).next())});var l,n,u},l}(),f=u("ZYCi"),h=t.nb({encapsulation:0,styles:[["ion-row[_ngcontent-%COMP%]{width:100%;height:auto}ion-col[_ngcontent-%COMP%]{width:auto;height:33%}img[_ngcontent-%COMP%]{width:100%;height:100%}"]],data:{}});function m(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"ion-img",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggle(7*l.parent.parent.context.$implicit+l.parent.context.$implicit)&&t),t},o.F,o.j)),t.ob(1,49152,null,0,r.D,[t.h,t.k],{src:[0,"src"]},null)],function(l,n){l(n,1,0,t.rb(1,"./assets/images/no_",7*n.parent.parent.context.$implicit+n.parent.context.$implicit+1,".png"))},null)}function g(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"ion-img",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggle(7*l.parent.parent.context.$implicit+l.parent.context.$implicit)&&t),t},o.F,o.j)),t.ob(1,49152,null,0,r.D,[t.h,t.k],{src:[0,"src"]},null)],function(l,n){l(n,1,0,t.rb(1,"./assets/images/no_",7*n.parent.parent.context.$implicit+n.parent.context.$implicit+1,"x.png"))},null)}function d(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,5,"ion-col",[],null,null,null,o.A,o.e)),t.ob(1,49152,null,0,r.t,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,m)),t.ob(3,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,g)),t.ob(5,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.balls[7*n.parent.context.$implicit+n.context.$implicit]),l(n,5,0,!u.balls[7*n.parent.context.$implicit+n.context.$implicit])},null)}function x(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,3,"ion-row",[],null,null,null,o.N,o.r)),t.ob(1,49152,null,0,r.ib,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,d)),t.ob(3,278528,null,0,c.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.cols)},null)}function k(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,18,"ion-header",[],null,null,null,o.D,o.h)),t.ob(1,49152,null,0,r.B,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,16,"ion-toolbar",[],null,null,null,o.R,o.v)),t.ob(3,49152,null,0,r.Bb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.z,o.d)),t.ob(5,49152,null,0,r.l,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.K,o.p)),t.ob(7,49152,null,0,r.R,[t.h,t.k],null,null),(l()(),t.pb(8,0,null,0,7,"ion-buttons",[["padding",""],["slot","end"]],null,null,null,o.z,o.d)),t.ob(9,49152,null,0,r.l,[t.h,t.k],null,null),(l()(),t.pb(10,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.reset()&&t),t},o.y,o.c)),t.ob(11,49152,null,0,r.k,[t.h,t.k],null,null),(l()(),t.Gb(-1,0,["\u91cd\u9078"])),(l()(),t.pb(13,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.check()&&t),t},o.y,o.c)),t.ob(14,49152,null,0,r.k,[t.h,t.k],null,null),(l()(),t.Gb(-1,0,["\u6838\u5c0d"])),(l()(),t.pb(16,0,null,0,2,"ion-title",[],null,null,null,o.P,o.t)),t.ob(17,49152,null,0,r.zb,[t.h,t.k],null,null),(l()(),t.Gb(-1,0,[" \u6838\u5c0d\u7d50\u679c "])),(l()(),t.pb(19,0,null,null,5,"ion-content",[["padding",""]],null,null,null,o.B,o.f)),t.ob(20,49152,null,0,r.u,[t.h,t.k],null,null),(l()(),t.pb(21,0,null,0,3,"ion-grid",[],null,null,null,o.C,o.g)),t.ob(22,49152,null,0,r.A,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,x)),t.ob(24,278528,null,0,c.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,24,0,n.component.rows)},null)}function v(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-checkresult",[],null,null,null,k,h)),t.ob(1,114688,null,0,p,[a.a,b.a,f.n,f.a,r.Hb,r.Fb,s.a],null,null)],function(l,n){l(n,1,0)},null)}var I=t.lb("app-checkresult",p,v,{},{},[]),w=function(){function l(l,n,u,t,e,i){this.dataVal=l,this.commonService=n,this.m6service=u,this._router=t,this.navCtrl=e,this.loadingController=i}return l.prototype.ngOnInit=function(){this.m6results=this.dataVal.storage,null==this.m6results&&this.navCtrl.navigateRoot("/404")},l.prototype.showDetail=function(l){return n=this,void 0,t=function(){var n,u=this;return function(l,n){var u,t,e,i,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,t&&(e=2&i[0]?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,t=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){o.label=i[1];break}if(6===i[0]&&o.label<e[1]){o.label=e[1],e=i;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(i);break}e[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(l,o)}catch(r){i=[6,r],t=0}finally{u=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}}(this,function(t){switch(t.label){case 0:return[4,this.loadingController.create({message:"Loading",spinner:"circles"})];case 1:return(n=t.sent()).present().then(function(){u.navCtrl.navigateForward(["last30/detail",l]),n.dismiss()}),[2]}})},new((u=void 0)||(u=Promise))(function(l,e){function i(l){try{r(t.next(l))}catch(n){e(n)}}function o(l){try{r(t.throw(l))}catch(n){e(n)}}function r(n){n.done?l(n.value):new u(function(l){l(n.value)}).then(i,o)}r((t=t.apply(n,[])).next())});var n,u,t},l.prototype.toDate=function(l){return null!=l?this.m6service.toDateStr(Number(l)):""},l}(),y=t.nb({encapsulation:0,styles:[[""]],data:{}});function $(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number1,".png"))})}function O(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number1,"x.png"))})}function j(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number2,".png"))})}function _(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number2,"x.png"))})}function L(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number3,".png"))})}function C(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number3,"x.png"))})}function A(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number4,".png"))})}function F(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number4,"x.png"))})}function S(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number5,".png"))})}function z(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number5,"x.png"))})}function D(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number6,".png"))})}function G(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.number6,"x.png"))})}function R(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.numberX,".png"))})}function N(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,0,"img",[["class","ball"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,t.rb(1,"./assets/images/no_",n.parent.context.$implicit.numberX,"x.png"))})}function P(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,62,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showDetail(l.context.$implicit)&&t),t},o.H,o.l)),t.ob(1,49152,null,0,r.H,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,60,"ion-grid",[],null,null,null,o.C,o.g)),t.ob(3,49152,null,0,r.A,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,46,"ion-row",[["style","vertical-align: middle; text-align: center;"]],null,null,null,o.N,o.r)),t.ob(5,49152,null,0,r.ib,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,5,"ion-col",[],null,null,null,o.A,o.e)),t.ob(7,49152,null,0,r.t,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,$)),t.ob(9,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,O)),t.ob(11,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(12,0,null,0,5,"ion-col",[],null,null,null,o.A,o.e)),t.ob(13,49152,null,0,r.t,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,j)),t.ob(15,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,_)),t.ob(17,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(18,0,null,0,5,"ion-col",[],null,null,null,o.A,o.e)),t.ob(19,49152,null,0,r.t,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,L)),t.ob(21,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,C)),t.ob(23,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(24,0,null,0,5,"ion-col",[],null,null,null,o.A,o.e)),t.ob(25,49152,null,0,r.t,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,A)),t.ob(27,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,F)),t.ob(29,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(30,0,null,0,5,"ion-col",[],null,null,null,o.A,o.e)),t.ob(31,49152,null,0,r.t,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,S)),t.ob(33,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,z)),t.ob(35,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(36,0,null,0,5,"ion-col",[],null,null,null,o.A,o.e)),t.ob(37,49152,null,0,r.t,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,D)),t.ob(39,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,G)),t.ob(41,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(42,0,null,0,2,"ion-col",[["style","margin-top: 5px"]],null,null,null,o.A,o.e)),t.ob(43,49152,null,0,r.t,[t.h,t.k],null,null),(l()(),t.Gb(-1,0,[" + "])),(l()(),t.pb(45,0,null,0,5,"ion-col",[],null,null,null,o.A,o.e)),t.ob(46,49152,null,0,r.t,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,R)),t.ob(48,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,N)),t.ob(50,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(51,0,null,0,11,"ion-row",[],null,null,null,o.N,o.r)),t.ob(52,49152,null,0,r.ib,[t.h,t.k],null,null),(l()(),t.pb(53,0,null,0,4,"ion-col",[["size","4"]],null,null,null,o.A,o.e)),t.ob(54,49152,null,0,r.t,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(55,0,null,0,2,"ion-label",[],null,null,null,o.I,o.m)),t.ob(56,49152,null,0,r.N,[t.h,t.k],null,null),(l()(),t.Gb(57,0,["",""])),(l()(),t.pb(58,0,null,0,4,"ion-col",[["size","8"]],null,null,null,o.A,o.e)),t.ob(59,49152,null,0,r.t,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(60,0,null,0,2,"ion-label",[],null,null,null,o.I,o.m)),t.ob(61,49152,null,0,r.N,[t.h,t.k],null,null),(l()(),t.Gb(62,0,["",""]))],function(l,n){l(n,9,0,n.context.$implicit.matched[0]),l(n,11,0,!n.context.$implicit.matched[0]),l(n,15,0,n.context.$implicit.matched[1]),l(n,17,0,!n.context.$implicit.matched[1]),l(n,21,0,n.context.$implicit.matched[2]),l(n,23,0,!n.context.$implicit.matched[2]),l(n,27,0,n.context.$implicit.matched[3]),l(n,29,0,!n.context.$implicit.matched[3]),l(n,33,0,n.context.$implicit.matched[4]),l(n,35,0,!n.context.$implicit.matched[4]),l(n,39,0,n.context.$implicit.matched[5]),l(n,41,0,!n.context.$implicit.matched[5]),l(n,48,0,n.context.$implicit.matched[6]),l(n,50,0,!n.context.$implicit.matched[6]),l(n,54,0,"4"),l(n,59,0,"8")},function(l,n){var u=n.component;l(n,57,0,n.context.$implicit.drawNo),l(n,62,0,u.toDate(n.context.$implicit.drawDate))})}function B(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,9,"ion-header",[],null,null,null,o.D,o.h)),t.ob(1,49152,null,0,r.B,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,7,"ion-toolbar",[],null,null,null,o.R,o.v)),t.ob(3,49152,null,0,r.Bb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,6).onClick(u)&&e),e},o.x,o.b)),t.ob(5,49152,null,0,r.g,[t.h,t.k],{text:[0,"text"]},null),t.ob(6,16384,null,0,r.h,[[2,r.hb],r.Hb],null,null),(l()(),t.pb(7,0,null,0,2,"ion-title",[],null,null,null,o.P,o.t)),t.ob(8,49152,null,0,r.zb,[t.h,t.k],null,null),(l()(),t.Gb(-1,0,[" \u6700\u8fd130\u671f\u4e2d\u734e\u7d50\u679c "])),(l()(),t.pb(10,0,null,null,5,"ion-content",[],null,null,null,o.B,o.f)),t.ob(11,49152,null,0,r.u,[t.h,t.k],null,null),(l()(),t.pb(12,0,null,0,3,"ion-list",[],null,null,null,o.J,o.n)),t.ob(13,49152,null,0,r.O,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,P)),t.ob(15,278528,null,0,c.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,5,0,""),l(n,15,0,u.m6results)},null)}function H(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-checkresultlist",[],null,null,null,B,y)),t.ob(1,114688,null,0,w,[s.a,a.a,b.a,f.n,r.Hb,r.Fb],null,null)],function(l,n){l(n,1,0)},null)}var M=t.lb("app-checkresultlist",w,H,{},{},[]),V=u("gIcY");u.d(n,"CheckResultComponentModuleNgFactory",function(){return Z});var Z=t.mb(e,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[i.a,I,M]],[3,t.j],t.x]),t.xb(4608,c.l,c.k,[t.u,[2,c.s]]),t.xb(4608,V.i,V.i,[]),t.xb(4608,r.b,r.b,[t.z,t.g]),t.xb(4608,r.Gb,r.Gb,[r.b,t.j,t.q]),t.xb(4608,r.Kb,r.Kb,[r.b,t.j,t.q]),t.xb(1073742336,c.b,c.b,[]),t.xb(1073742336,V.h,V.h,[]),t.xb(1073742336,V.a,V.a,[]),t.xb(1073742336,r.Db,r.Db,[]),t.xb(1073742336,f.p,f.p,[[2,f.v],[2,f.n]]),t.xb(1073742336,e,e,[]),t.xb(1024,f.l,function(){return[[{path:"",component:p},{path:"list",component:w}]]},[])])})}}]);