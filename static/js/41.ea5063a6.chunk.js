(this.webpackJsonphiddenGems=this.webpackJsonphiddenGems||[]).push([[41],{169:function(n,t,e){"use strict";e.r(t),e.d(t,"startFocusVisible",(function(){return s}));var o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],s=function(){var n=[],t=!0,e=document,s=function(t){n.forEach((function(n){return n.classList.remove("ion-focused")})),t.forEach((function(n){return n.classList.add("ion-focused")})),n=t},i=function(){t=!1,s([])};e.addEventListener("keydown",(function(n){(t=o.includes(n.key))||s([])})),e.addEventListener("focusin",(function(n){if(t&&n.composedPath){var e=n.composedPath().filter((function(n){return!!n.classList&&n.classList.contains("ion-focusable")}));s(e)}})),e.addEventListener("focusout",(function(){e.activeElement===e.body&&s([])})),e.addEventListener("touchstart",i),e.addEventListener("mousedown",i)}}}]);
//# sourceMappingURL=41.ea5063a6.chunk.js.map