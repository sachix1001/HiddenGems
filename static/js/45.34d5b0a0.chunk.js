(this.webpackJsonphiddenGems=this.webpackJsonphiddenGems||[]).push([[45],{134:function(t,i,o){"use strict";o.r(i),o.d(i,"ion_img",(function(){return r}));var e=o(5),n=o(13),r=function(){function t(t){var i=this;Object(e.q)(this,t),this.ionImgWillLoad=Object(e.i)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(e.i)(this,"ionImgDidLoad",7),this.ionError=Object(e.i)(this,"ionError",7),this.onLoad=function(){i.ionImgDidLoad.emit()},this.onError=function(){i.ionError.emit()}}return t.prototype.srcChanged=function(){this.addIO()},t.prototype.componentDidLoad=function(){this.addIO()},t.prototype.addIO=function(){var t=this;void 0!==this.src&&("undefined"!==typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(i){i[0].isIntersecting&&(t.load(),t.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return t.load()}),200))},t.prototype.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},t.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.render=function(){return Object(e.l)(e.c,{class:Object(n.b)(this)},Object(e.l)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.m)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:!1,configurable:!0}),t}();r.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);
//# sourceMappingURL=45.34d5b0a0.chunk.js.map