!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequire2afd;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequire2afd=r);var l=r("1WSnx"),i=document.querySelector("iframe"),a=new Vimeo.Player(i);a.on("play",(function(){console.log("played the video!")})),a.getVideoTitle().then((function(e){console.log("title:",e)}));a.setCurrentTime(localStorage.getItem("videoplayer-current-time")),a.on("timeupdate",e(l).throttle((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).seconds;localStorage.setItem("videoplayer-current-time",e)}),1e3))}();
//# sourceMappingURL=02-video.3d54b6cb.js.map
