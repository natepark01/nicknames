module.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(o,a,function(n){return t[n]}.bind(null,a));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=11)}([function(t,n){t.exports=flarum.core.compat["common/extend"]},function(t,n){t.exports=flarum.core.compat["common/components/Button"]},function(t,n){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,n){t.exports=flarum.core.compat["forum/components/EditUserModal"]},function(t,n){t.exports=flarum.core.compat["forum/components/SettingsPage"]},function(t,n){t.exports=flarum.core.compat["common/Model"]},function(t,n){t.exports=flarum.core.compat["common/models/User"]},function(t,n){t.exports=flarum.core.compat["common/utils/extractText"]},function(t,n){t.exports=flarum.core.compat["common/components/Modal"]},,,function(t,n,e){"use strict";e.r(n);var o=e(0),a=e(1),r=e.n(a),i=e(3),c=e.n(i),s=e(4),u=e.n(s),p=e(5),l=e.n(p),f=e(6),d=e.n(f),h=e(7),b=e.n(h),y=e(2),k=e.n(y);var v=e(8),g=function(t){var n,e;function o(){return t.apply(this,arguments)||this}e=t,(n=o).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var a=o.prototype;return a.oninit=function(n){t.prototype.oninit.call(this,n),this.nickname=k()(app.session.user.displayName())},a.className=function(){return"NickameModal Modal--small"},a.title=function(){return app.translator.trans("flarum-nicknames.forum.change_nickname.title")},a.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("input",{type:"text",autocomplete:"off",name:"nickname",className:"FormControl",bidi:this.nickname,disabled:this.loading})),m("div",{className:"Form-group"},r.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("flarum-nicknames.forum.change_nickname.submit_button")))))},a.onsubmit=function(t){var n=this;t.preventDefault(),this.nickname()!==app.session.user.displayName()?(this.loading=!0,app.session.user.save({nickname:this.nickname()},{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).catch((function(){n.loading=!1,m.redraw()}))):this.hide()},o}(e.n(v).a);app.initializers.add("flarum/nicknames",(function(){d.a.prototype.canEditOwnNickname=l.a.attribute("canEditOwnNickname"),Object(o.extend)(u.a.prototype,"accountItems",(function(t){"nickname"===app.forum.attribute("displayNameDriver")&&(this.user.canEditOwnNickname()&&t.add("changeNickname",m(r.a,{className:"Button",onclick:function(){return app.modal.show(g)}},app.translator.trans("flarum-nicknames.forum.settings.change_nickname_button"))),t.remove("changePassword"),t.remove("changeEmail"))})),Object(o.extend)(c.a.prototype,"oninit",(function(){"nickname"===app.forum.attribute("displayNameDriver")&&(this.nickname=k()(this.attrs.user.displayName()))})),Object(o.extend)(c.a.prototype,"fields",(function(t){"nickname"===app.forum.attribute("displayNameDriver")&&t.add("nickname",m("div",{className:"Form-group"},m("label",null,app.translator.trans("flarum-nicknames.forum.edit_user.nicknames_heading")),m("input",{className:"FormControl",placeholder:b()(app.translator.trans("flarum-nicknames.forum.edit_user.nicknames_text")),bidi:this.nickname})),100)})),Object(o.extend)(c.a.prototype,"data",(function(t){if("nickname"===app.forum.attribute("displayNameDriver")){this.attrs.user;this.nickname()!==this.attrs.user.displayName()&&(t.nickname=this.nickname())}}))}))}]);
//# sourceMappingURL=forum.js.map