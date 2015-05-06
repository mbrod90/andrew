!function(t){t.fn.justifiedGallery=function(e){function i(t,e,i){var n;return n=t>e?t:e,100>=n?i.settings.sizeRangeSuffixes.lt100:240>=n?i.settings.sizeRangeSuffixes.lt240:320>=n?i.settings.sizeRangeSuffixes.lt320:500>=n?i.settings.sizeRangeSuffixes.lt500:640>=n?i.settings.sizeRangeSuffixes.lt640:i.settings.sizeRangeSuffixes.lt1024}function n(t,e){return-1!==t.indexOf(e,t.length-e.length)}function o(t,e){return t.substring(0,t.length-e.length)}function a(t,e){var i=!1;for(var o in e.settings.sizeRangeSuffixes)if(0!==e.settings.sizeRangeSuffixes[o].length){if(n(t,e.settings.sizeRangeSuffixes[o]))return e.settings.sizeRangeSuffixes[o]}else i=!0;if(i)return"";throw"unknown suffix for "+t}function s(t,e,n,s){var r=t.match(s.settings.extension),l=null!=r?r[0]:"",d=t.replace(s.settings.extension,"");return d=o(d,a(d,s)),d+=i(e,n,s)+l}function r(e){var i=t(e.currentTarget).find(".caption");e.data.settings.cssAnimation?i.addClass("caption-visible").removeClass("caption-hidden"):i.stop().fadeTo(e.data.settings.captionSettings.animationDuration,e.data.settings.captionSettings.visibleOpacity)}function l(e){var i=t(e.currentTarget).find(".caption");e.data.settings.cssAnimation?i.removeClass("caption-visible").removeClass("caption-hidden"):i.stop().fadeTo(e.data.settings.captionSettings.animationDuration,e.data.settings.captionSettings.nonVisibleOpacity)}function d(t,e,i){i.settings.cssAnimation?(t.addClass("entry-visible"),e()):t.stop().fadeTo(i.settings.imagesAnimationDuration,1,e)}function g(t,e){e.settings.cssAnimation?t.removeClass("entry-visible"):t.stop().fadeTo(0,0)}function h(t){var e=t.find("> img");return 0===e.length&&(e=t.find("> a > img")),e}function u(e,i,n,o,a,g,u){function f(){p!==m&&c.attr("src",m)}var c=h(e);c.css("width",o),c.css("height",a),c.css("margin-left",-o/2),c.css("margin-top",-a/2),e.width(o),e.height(g),e.css("top",n),e.css("left",i);var p=c.attr("src"),m=s(p,o,a,u);c.one("error",function(){c.attr("src",c.data("jg.originalSrc"))}),"skipped"===c.data("jg.loaded")?j(p,function(){d(e,f,u),c.data("jg.loaded",!0)}):d(e,f,u);var w=e.data("jg.captionMouseEvents");if(u.settings.captions===!0){var v=e.find(".caption");if(0===v.length){var b=c.attr("alt");"undefined"==typeof b&&(b=e.attr("title")),"undefined"!=typeof b&&(v=t('<div class="caption">'+b+"</div>"),e.append(v))}0!==v.length&&(u.settings.cssAnimation||v.stop().fadeTo(u.settings.imagesAnimationDuration,u.settings.captionSettings.nonVisibleOpacity),"undefined"==typeof w&&(w={mouseenter:r,mouseleave:l},e.on("mouseenter",void 0,u,w.mouseenter),e.on("mouseleave",void 0,u,w.mouseleave),e.data("jg.captionMouseEvents",w)))}else"undefined"!=typeof w&&(e.off("mouseenter",void 0,u,w.mouseenter),e.off("mouseleave",void 0,u,w.mouseleave),e.removeData("jg.captionMouseEvents"))}function f(t,e){var i,n,o,a,s,r,l=t.settings,d=!0,g=0,u=t.galleryWidth-2*t.border-(t.buildingRow.entriesBuff.length-1)*l.margins,f=u/t.buildingRow.aspectRatio,c=t.buildingRow.width/u>l.justifyThreshold;if(e&&"hide"===l.lastRow&&!c){for(i=0;i<t.buildingRow.entriesBuff.length;i++)n=t.buildingRow.entriesBuff[i],l.cssAnimation?n.removeClass("entry-visible"):n.stop().fadeTo(0,0);return-1}for(e&&!c&&"nojustify"===l.lastRow&&(d=!1),i=0;i<t.buildingRow.entriesBuff.length;i++)o=h(t.buildingRow.entriesBuff[i]),a=o.data("jg.imgw")/o.data("jg.imgh"),d?(s=i===t.buildingRow.entriesBuff.length-1?u:f*a,r=f):(s=l.rowHeight*a,r=l.rowHeight),u-=Math.round(s),o.data("jg.jimgw",Math.round(s)),o.data("jg.jimgh",Math.ceil(r)),(0===i||g>r)&&(g=r);return l.fixedHeight&&g>l.rowHeight&&(g=l.rowHeight),{minHeight:g,justify:d}}function c(t){t.lastAnalyzedIndex=-1,t.buildingRow.entriesBuff=[],t.buildingRow.aspectRatio=0,t.buildingRow.width=0,t.offY=t.border}function p(t,e){var i,n,o,a,s=t.settings,r=t.border;if(a=f(t,e),o=a.minHeight,e&&"hide"===s.lastRow&&-1===o)return t.buildingRow.entriesBuff=[],t.buildingRow.aspectRatio=0,void(t.buildingRow.width=0);s.maxRowHeight>0&&s.maxRowHeight<o?o=s.maxRowHeight:0===s.maxRowHeight&&1.5*s.rowHeight<o&&(o=1.5*s.rowHeight);for(var l=0;l<t.buildingRow.entriesBuff.length;l++)i=t.buildingRow.entriesBuff[l],n=h(i),u(i,r,t.offY,n.data("jg.jimgw"),n.data("jg.jimgh"),o,t),r+=n.data("jg.jimgw")+s.margins;t.$gallery.height(t.offY+o+t.border+(t.spinner.active?t.spinner.$el.innerHeight():0)),(!e||o<=t.settings.rowHeight&&a.justify)&&(t.offY+=o+t.settings.margins,t.buildingRow.entriesBuff=[],t.buildingRow.aspectRatio=0,t.buildingRow.width=0,t.$gallery.trigger("jg.rowflush"))}function m(t){t.checkWidthIntervalId=setInterval(function(){var e=parseInt(t.$gallery.width(),10);t.galleryWidth!==e&&(t.galleryWidth=e,c(t),y(t,!0))},t.settings.refreshTime)}function w(t){clearInterval(t.intervalId),t.intervalId=setInterval(function(){t.phase<t.$points.length?t.$points.eq(t.phase).fadeTo(t.timeslot,1):t.$points.eq(t.phase-t.$points.length).fadeTo(t.timeslot,0),t.phase=(t.phase+1)%(2*t.$points.length)},t.timeslot)}function v(t){clearInterval(t.intervalId),t.intervalId=null}function b(t){t["yield"].flushed=0,null!==t.imgAnalyzerTimeout&&clearTimeout(t.imgAnalyzerTimeout)}function y(t,e){b(t),t.imgAnalyzerTimeout=setTimeout(function(){x(t,e)},.001),x(t,e)}function x(e,i){for(var n,o=e.settings,a=e.lastAnalyzedIndex+1;a<e.entries.length;a++){var s=t(e.entries[a]),r=h(s);if(r.data("jg.loaded")===!0||"skipped"===r.data("jg.loaded")){n=a>=e.entries.length-1;var l=e.galleryWidth-2*e.border-(e.buildingRow.entriesBuff.length-1)*o.margins,d=r.data("jg.imgw")/r.data("jg.imgh");if(l/(e.buildingRow.aspectRatio+d)<o.rowHeight&&(p(e,n),++e["yield"].flushed>=e["yield"].every))return void y(e,i);e.buildingRow.entriesBuff.push(s),e.buildingRow.aspectRatio+=d,e.buildingRow.width+=d*o.rowHeight,e.lastAnalyzedIndex=a}else if("error"!==r.data("jg.loaded"))return}e.buildingRow.entriesBuff.length>0&&p(e,!0),e.spinner.active&&(e.spinner.active=!1,e.$gallery.height(e.$gallery.height()-e.spinner.$el.innerHeight()),e.spinner.$el.detach(),v(e.spinner)),b(e),e.$gallery.trigger(i?"jg.resize":"jg.complete")}function R(t){function e(t){if("string"!=typeof n.sizeRangeSuffixes[t])throw"sizeRangeSuffixes."+t+" must be a string"}function i(t,e){if("string"==typeof t[e]){if(t[e]=parseFloat(t[e],10),isNaN(t[e]))throw"invalid number for "+e}else{if("number"!=typeof t[e])throw e+" must be a number";if(isNaN(t[e]))throw"invalid number for "+e}}var n=t.settings;if("object"!=typeof n.sizeRangeSuffixes)throw"sizeRangeSuffixes must be defined and must be an object";if(e("lt100"),e("lt240"),e("lt320"),e("lt500"),e("lt640"),e("lt1024"),i(n,"rowHeight"),i(n,"maxRowHeight"),n.maxRowHeight>0&&n.maxRowHeight<n.rowHeight&&(n.maxRowHeight=n.rowHeight),i(n,"margins"),i(n,"border"),"nojustify"!==n.lastRow&&"justify"!==n.lastRow&&"hide"!==n.lastRow)throw'lastRow must be "nojustify", "justify" or "hide"';if(i(n,"justifyThreshold"),n.justifyThreshold<0||n.justifyThreshold>1)throw"justifyThreshold must be in the interval [0,1]";if("boolean"!=typeof n.cssAnimation)throw"cssAnimation must be a boolean";if(i(n.captionSettings,"animationDuration"),i(n,"imagesAnimationDuration"),i(n.captionSettings,"visibleOpacity"),n.captionSettings.visibleOpacity<0||n.captionSettings.visibleOpacity>1)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";if(i(n.captionSettings,"nonVisibleOpacity"),n.captionSettings.visibleOpacity<0||n.captionSettings.visibleOpacity>1)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";if("boolean"!=typeof n.fixedHeight)throw"fixedHeight must be a boolean";if("boolean"!=typeof n.captions)throw"captions must be a boolean";if(i(n,"refreshTime"),"boolean"!=typeof n.randomize)throw"randomize must be a boolean"}function j(e,i,n){if(i||n){var o=new Image,a=t(o);i&&a.one("load",function(){a.off("load error"),i(o)}),n&&a.one("error",function(){a.off("load error"),n(o)}),o.src=e}}var T={sizeRangeSuffixes:{lt100:"",lt240:"",lt320:"",lt500:"",lt640:"",lt1024:""},rowHeight:120,maxRowHeight:0,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.75,fixedHeight:!1,waitThumbnailsLoad:!0,captions:!0,cssAnimation:!1,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\/]+$/,refreshTime:100,randomize:!1};return this.each(function(i,n){var o=t(n);o.addClass("justified-gallery");var a=o.data("jg.context");if("undefined"==typeof a){if("undefined"!=typeof e&&null!==e&&"object"!=typeof e)throw"The argument must be an object";var s=t('<div class="spinner"><span></span><span></span><span></span></div>'),r=t.extend({},T,e),l=r.border>=0?r.border:r.margins;a={settings:r,imgAnalyzerTimeout:null,entries:null,buildingRow:{entriesBuff:[],width:0,aspectRatio:0},lastAnalyzedIndex:-1,"yield":{every:2,flushed:0},border:l,offY:l,spinner:{active:!1,phase:0,timeslot:150,$el:s,$points:s.find("span"),intervalId:null},checkWidthIntervalId:null,galleryWidth:o.width(),$gallery:o},o.data("jg.context",a)}else if("norewind"===e)for(var d=0;d<a.buildingRow.entriesBuff.length;d++)g(a.buildingRow.entriesBuff[d],a);else a.settings=t.extend({},a.settings,e),a.border=a.settings.border>=0?a.settings.border:a.settings.margins,c(a);if(R(a),a.entries=o.find("> a, > div:not(.spinner)").toArray(),0!==a.entries.length){a.settings.randomize&&(a.entries.sort(function(){return 2*Math.random()-1}),t.each(a.entries,function(){t(this).appendTo(o)}));var u=!1,f=!1;t.each(a.entries,function(e,i){var n=t(i),s=h(n);if(n.addClass("jg-entry"),s.data("jg.loaded")!==!0&&"skipped"!==s.data("jg.loaded")){null!==a.settings.rel&&n.attr("rel",a.settings.rel),null!==a.settings.target&&n.attr("target",a.settings.target);var r="undefined"!=typeof s.data("safe-src")?s.data("safe-src"):s.attr("src");s.data("jg.originalSrc",r),s.attr("src",r);var l=parseInt(s.attr("width"),10),d=parseInt(s.attr("height"),10);if(a.settings.waitThumbnailsLoad!==!0&&!isNaN(l)&&!isNaN(d))return s.data("jg.imgw",l),s.data("jg.imgh",d),s.data("jg.loaded","skipped"),f=!0,y(a,!1),!0;s.data("jg.loaded",!1),u=!0,a.spinner.active===!1&&(a.spinner.active=!0,o.append(a.spinner.$el),o.height(a.offY+a.spinner.$el.innerHeight()),w(a.spinner)),j(r,function(t){s.data("jg.imgw",t.width),s.data("jg.imgh",t.height),s.data("jg.loaded",!0),y(a,!1)},function(){s.data("jg.loaded","error"),y(a,!1)})}}),u||f||y(a,!1),m(a)}})}}(jQuery),function(t,e,i){function n(i,n,o){var a=e.createElement(i);return n&&(a.id=Z+n),o&&(a.style.cssText=o),t(a)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function a(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.get=function(e){var n,o;return void 0!==this.cache[e]?o=this.cache[e]:(n=t(this.el).attr("data-cbox-"+e),void 0!==n?o=n:void 0!==i[e]?o=i[e]:void 0!==J[e]&&(o=J[e]),this.cache[e]=o),t.isFunction(o)?o.call(this.el):o}}function s(t){var e=S.length,i=(_+t)%e;return 0>i?e+i:i}function r(t,e){return Math.round((/%/.test(t)?("x"===e?C.width():o())/100:1)*parseInt(t,10))}function l(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function d(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function g(t){"contains"in b[0]&&!b[0].contains(t.target)&&(t.stopPropagation(),b.focus())}function h(t){h.str!==t&&(b.add(v).removeClass(h.str).addClass(t),h.str=t)}function u(){_=0,rel&&"nofollow"!==rel?(S=t("."+te).filter(function(){var e=t.data(this,X),i=new a(this,e);return i.get("rel")===rel}),_=S.index(L.el),-1===_&&(S=S.add(L.el),_=S.length-1)):S=t(L.el)}function f(i){t(e).trigger(i),re.triggerHandler(i)}function c(i){var o;q||(o=t(i).data("colorbox"),L=new a(i,o),rel=L.get("rel"),u(),$||($=V=!0,h(L.get("className")),b.css({visibility:"hidden",display:"block"}),z=n(le,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),x.css({width:"",height:""}).append(z),N=R.height()+H.height()+x.outerHeight(!0)-x.height(),F=j.width()+T.width()+x.outerWidth(!0)-x.width(),K=z.outerHeight(!0),P=z.outerWidth(!0),L.w=r(L.get("initialWidth"),"x"),L.h=r(L.get("initialHeight"),"y"),z.css({width:"",height:L.h}),Q.position(),f(ee),L.get("onOpen"),D.add(B).hide(),b.focus(),L.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",g,!0),re.one(ae,function(){e.removeEventListener("focus",g,!0)})),L.get("returnFocus")&&re.one(ae,function(){t(L.el).focus()})),v.css({opacity:parseFloat(L.get("opacity")),cursor:L.get("overlayClose")?"pointer":"auto",visibility:"visible"}).show(),L.get("closeButton")?M.html(L.get("close")).appendTo(x):M.appendTo("<div/>"),w())}function p(){!b&&e.body&&(U=!1,C=t(i),b=n(le).attr({id:X,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(le,"Overlay").hide(),A=t([n(le,"LoadingOverlay")[0],n(le,"LoadingGraphic")[0]]),y=n(le,"Wrapper"),x=n(le,"Content").append(B=n(le,"Title"),k=n(le,"Current"),E=t('<button type="button"/>').attr({id:Z+"Previous"}),W=t('<button type="button"/>').attr({id:Z+"Next"}),O=n("button","Slideshow"),A),M=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(le).append(n(le,"TopLeft"),R=n(le,"TopCenter"),n(le,"TopRight")),n(le,!1,"clear:left").append(j=n(le,"MiddleLeft"),x,T=n(le,"MiddleRight")),n(le,!1,"clear:left").append(n(le,"BottomLeft"),H=n(le,"BottomCenter"),n(le,"BottomRight"))).find("div div").css({"float":"left"}),I=n(le,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),D=W.add(E).add(k).add(O),t(e.body).append(v,b.append(y,I)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),c(this))}return b?(U||(U=!0,W.click(function(){Q.next()}),E.click(function(){Q.prev()}),M.click(function(){Q.close()}),v.click(function(){L.get("overlayClose")&&Q.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&L.get("escKey")&&27===e&&(t.preventDefault(),Q.close()),$&&L.get("arrowKey")&&S[1]&&!t.altKey&&(37===e?(t.preventDefault(),E.click()):39===e&&(t.preventDefault(),W.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var o,a,s,g=Q.prep,h=++de;V=!0,Y=!1,f(se),f(ie),L.get("onLoad"),L.h=L.get("height")?r(L.get("height"),"y")-K-N:L.get("innerHeight")&&r(L.get("innerHeight"),"y"),L.w=L.get("width")?r(L.get("width"),"x")-P-F:L.get("innerWidth")&&r(L.get("innerWidth"),"x"),L.mw=L.w,L.mh=L.h,L.get("maxWidth")&&(L.mw=r(L.get("maxWidth"),"x")-P-F,L.mw=L.w&&L.w<L.mw?L.w:L.mw),L.get("maxHeight")&&(L.mh=r(L.get("maxHeight"),"y")-K-N,L.mh=L.h&&L.h<L.mh?L.h:L.mh),o=L.get("href"),G=setTimeout(function(){A.show()},100),L.get("inline")?(s=n(le).hide().insertBefore(t(o)[0]),re.one(se,function(){s.replaceWith(z.children())}),g(t(o))):L.get("iframe")?g(" "):L.get("html")?g(L.get("html")):l(L,o)?(o=d(L,o),Y=e.createElement("img"),t(Y).addClass(Z+"Photo").bind("error",function(){g(n(le,"Error").html(L.get("imgError")))}).one("load",function(){var e;h===de&&(t.each(["alt","longdesc","aria-describedby"],function(e,i){var n=t(L.el).attr(i)||t(L.el).attr("data-"+i);n&&Y.setAttribute(i,n)}),L.get("retinaImage")&&i.devicePixelRatio>1&&(Y.height=Y.height/i.devicePixelRatio,Y.width=Y.width/i.devicePixelRatio),L.get("scalePhotos")&&(a=function(){Y.height-=Y.height*e,Y.width-=Y.width*e},L.mw&&Y.width>L.mw&&(e=(Y.width-L.mw)/Y.width,a()),L.mh&&Y.height>L.mh&&(e=(Y.height-L.mh)/Y.height,a())),L.h&&(Y.style.marginTop=Math.max(L.mh-Y.height,0)/2+"px"),S[1]&&(L.get("loop")||S[_+1])&&(Y.style.cursor="pointer",Y.onclick=function(){Q.next()}),Y.style.width=Y.width+"px",Y.style.height=Y.height+"px",setTimeout(function(){g(Y)},1))}),setTimeout(function(){Y.src=o},1)):o&&I.load(o,L.get("data"),function(e,i){h===de&&g("error"===i?n(le,"Error").html(L.get("xhrError")):t(this).contents())})}var v,b,y,x,R,j,T,H,S,C,z,I,A,B,k,O,W,E,M,D,L,N,F,K,P,_,Y,$,V,q,G,Q,U,J={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},X="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",ae=Z+"_closed",se=Z+"_purge",re=t("<a/>"),le="div",de=0,ge={},he=function(){function t(){clearTimeout(s)}function e(){(L.get("loop")||S[_+1])&&(t(),s=setTimeout(Q.next,L.get("slideshowSpeed")))}function i(){O.html(L.get("slideshowStop")).unbind(l).one(l,n),re.bind(ne,e).bind(ie,t),b.removeClass(r+"off").addClass(r+"on")}function n(){t(),re.unbind(ne,e).unbind(ie,t),O.html(L.get("slideshowStart")).unbind(l).one(l,function(){Q.next(),i()}),b.removeClass(r+"on").addClass(r+"off")}function o(){a=!1,O.hide(),t(),re.unbind(ne,e).unbind(ie,t),b.removeClass(r+"off "+r+"on")}var a,s,r=Z+"Slideshow_",l="click."+Z;return function(){a?L.get("slideshow")||(re.unbind(oe,o),o()):L.get("slideshow")&&S[1]&&(a=!0,re.one(oe,o),L.get("slideshowAuto")?i():n(),O.show())}}();t.colorbox||(t(p),Q=t.fn[X]=t[X]=function(e,i){var n,o=this;if(e=e||{},t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;return o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,X)||{};t.data(this,X,t.extend(i,e))}).addClass(te),n=new a(o[0],e),n.get("open")&&c(o[0])),o):o},Q.position=function(e,i){function n(){R[0].style.width=H[0].style.width=x[0].style.width=parseInt(b[0].style.width,10)-F+"px",x[0].style.height=j[0].style.height=T[0].style.height=parseInt(b[0].style.height,10)-N+"px"}var a,s,l,d=0,g=0,h=b.offset();if(C.unbind("resize."+Z),b.css({top:-9e4,left:-9e4}),s=C.scrollTop(),l=C.scrollLeft(),L.get("fixed")?(h.top-=s,h.left-=l,b.css({position:"fixed"})):(d=s,g=l,b.css({position:"absolute"})),g+=L.get("right")!==!1?Math.max(C.width()-L.w-P-F-r(L.get("right"),"x"),0):L.get("left")!==!1?r(L.get("left"),"x"):Math.round(Math.max(C.width()-L.w-P-F,0)/2),d+=L.get("bottom")!==!1?Math.max(o()-L.h-K-N-r(L.get("bottom"),"y"),0):L.get("top")!==!1?r(L.get("top"),"y"):Math.round(Math.max(o()-L.h-K-N,0)/2),b.css({top:h.top,left:h.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",a={width:L.w+P+F,height:L.h+K+N,top:d,left:g},e){var u=0;t.each(a,function(t){return a[t]!==ge[t]?void(u=e):void 0}),e=u}ge=a,e||b.css(a),b.dequeue().animate(a,{duration:e||0,complete:function(){n(),V=!1,y[0].style.width=L.w+P+F+"px",y[0].style.height=L.h+K+N+"px",L.get("reposition")&&setTimeout(function(){C.bind("resize."+Z,Q.position)},1),i&&i()},step:n})},Q.resize=function(t){var e;$&&(t=t||{},t.width&&(L.w=r(t.width,"x")-P-F),t.innerWidth&&(L.w=r(t.innerWidth,"x")),z.css({width:L.w}),t.height&&(L.h=r(t.height,"y")-K-N),t.innerHeight&&(L.h=r(t.innerHeight,"y")),t.innerHeight||t.height||(e=z.scrollTop(),z.css({height:"auto"}),L.h=z.height()),z.css({height:L.h}),e&&z.scrollTop(e),Q.position("none"===L.get("transition")?0:L.get("speed")))},Q.prep=function(i){function o(){return L.w=L.w||z.width(),L.w=L.mw&&L.mw<L.w?L.mw:L.w,L.w}function r(){return L.h=L.h||z.height(),L.h=L.mh&&L.mh<L.h?L.mh:L.h,L.h}if($){var g,u="none"===L.get("transition")?0:L.get("speed");z.remove(),z=n(le,"LoadedContent").append(i),z.hide().appendTo(I.show()).css({width:o(),overflow:L.get("scrolling")?"auto":"hidden"}).css({height:r()}).prependTo(x),I.hide(),t(Y).css({"float":"none"}),h(L.get("className")),g=function(){function i(){t.support.opacity===!1&&b[0].style.removeAttribute("filter")}var n,o,r=S.length;$&&(o=function(){clearTimeout(G),A.hide(),f(ne),L.get("onComplete")},B.html(L.get("title")).show(),z.show(),r>1?("string"==typeof L.get("current")&&k.html(L.get("current").replace("{current}",_+1).replace("{total}",r)).show(),W[L.get("loop")||r-1>_?"show":"hide"]().html(L.get("next")),E[L.get("loop")||_?"show":"hide"]().html(L.get("previous")),he(),L.get("preloading")&&t.each([s(-1),s(1)],function(){var i,n=S[this],o=new a(n,t.data(n,X)),s=o.get("href");s&&l(o,s)&&(s=d(o,s),i=e.createElement("img"),i.src=s)})):D.hide(),L.get("iframe")?(n=e.createElement("iframe"),"frameBorder"in n&&(n.frameBorder=0),"allowTransparency"in n&&(n.allowTransparency="true"),L.get("scrolling")||(n.scrolling="no"),t(n).attr({src:L.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",o).appendTo(z),re.one(se,function(){n.src="//about:blank"}),L.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===L.get("transition")?b.fadeTo(u,1,i):i())},"fade"===L.get("transition")?b.fadeTo(u,0,function(){Q.position(0,g)}):Q.position(u,g)}},Q.next=function(){!V&&S[1]&&(L.get("loop")||S[_+1])&&(_=s(1),c(S[_]))},Q.prev=function(){!V&&S[1]&&(L.get("loop")||_)&&(_=s(-1),c(S[_]))},Q.close=function(){$&&!q&&(q=!0,$=!1,f(oe),L.get("onCleanup"),C.unbind("."+Z),v.fadeTo(L.get("fadeOut")||0,0),b.stop().fadeTo(L.get("fadeOut")||0,0,function(){b.add(v).css({opacity:1,cursor:"auto"}).hide(),f(se),z.remove(),setTimeout(function(){q=!1,f(ae),L.get("onClosed")},1)}))},Q.remove=function(){b&&(b.stop(),t.colorbox.close(),b.stop().remove(),v.remove(),q=!1,b=null,t("."+te).removeData(X).removeClass(te),t(e).unbind("click."+Z))},Q.element=function(){return t(L.el)},Q.settings=J)}(jQuery,document,window);