!function(a,b){function c(a){Object.defineProperty(this,"val",{value:a.toString(),enumerable:!0}),this.gt=function(a){return c.compare(this,a)>0},this.gte=function(a){return c.compare(this,a)>=0},this.lt=function(a){return c.compare(this,a)<0},this.lte=function(a){return c.compare(this,a)<=0},this.eq=function(a){return 0===c.compare(this,a)}}b.env=b.env||{},c.prototype.toString=function(){return this.val},c.prototype.valueOf=function(){for(var a=this.val.split("."),b=[],c=0;c<a.length;c++){var d=parseInt(a[c],10);isNaN(d)&&(d=0);var e=d.toString();e.length<5&&(e=Array(6-e.length).join("0")+e),b.push(e),1===b.length&&b.push(".")}return parseFloat(b.join(""))},c.compare=function(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d)return-1;if(d>e)return 1}return 0},b.version=function(a){return new c(a)}}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.location.search.replace(/^\?/,"");if(b.env.params={},c)for(var d=c.split("&"),e=0;e<d.length;e++){d[e]=d[e].split("=");try{b.env.params[d[e][0]]=decodeURIComponent(d[e][1])}catch(f){b.env.params[d[e][0]]=d[e][1]}}}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;if(c=d.match(/Android[\s\/]([\d\.]+)/))b.env.os={name:"Android",isAndroid:!0,version:c[1]};else if(c=d.match(/(iPhone|iPad|iPod)/)){var e=c[1];c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.os={name:e,isIPhone:"iPhone"===e||"iPod"===e,isIPad:"iPad"===e,isIOS:!0,version:c[1].split("_").join(".")}}else b.env.os={name:"unknown",version:"0.0.0"};b.version&&(b.env.os.version=b.version(b.env.os.version))}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;(c=d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/))?b.env.browser={name:"UC",isUC:!0,version:c[1]}:(c=d.match(/MQQBrowser\/([\d\.]+)/))?b.env.browser={name:"QQ",isQQ:!0,version:c[1]}:(c=d.match(/(?:Chrome|CriOS)\/([\d\.]+)/))?(b.env.browser={name:"Chrome",isChrome:!0,version:c[1]},d.match(/Version\/[\d+\.]+\s*Chrome/)&&(b.env.browser.isWebview=!0)):d.match(/Mobile Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))?b.env.browser={name:"Android",isAndroid:!0,version:c[1]}:d.match(/iPhone|iPad|iPod/)?d.match(/Safari/)?(c=d.match(/Version\/([\d\.]+)/),b.env.browser={name:"Safari",isSafari:!0,version:c[1]}):(c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.browser={name:"iOS Webview",isWebview:!0,version:c[1].replace(/\_/,".")}):b.env.browser={name:"unknown",version:"0.0.0"},b.version&&(b.env.browser.version=b.version(b.env.browser.version))}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d,e=b.env.params.ttid,f=a.navigator.userAgent;(d=f.match(/WindVane[\/\s]([\d\.\_]+)/))&&(c=d[1]);var g=!1,h="",i="",j="";if(d=f.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/))g=!0,h=d[1],j=d[2],i=h.indexOf("-PD")>0?b.env.os.isIOS?"iPad":b.env.os.isAndroid?"aPad":b.env.os.name:b.env.os.name;else if(d=f.match(/@([^_@]+)_(iphone|android|ipad|apad)_([\d\.]+)/))g=!0,h=d[1],i=d[2].replace(/^ip/,"iP").replace(/^a/,"A"),j=d[3];else if(e&&(d=e.match(/@([^_@]+)_(iphone|android|ipad|apad)_([\d\.]+)/)))g=!0,h=d[1],i=d[2].replace(/^ip/,"iP").replace(/^a/,"A"),j=d[3];else if(c){g=!0,i=b.env.os.name;var k=b.version(c);b.env.os.isAndroid?k.gte("2.5.1")&&k.lte("2.5.5")?(h="taobao",j="3.9.2"):k.eq("2.5.6")?(h="taobao",j="3.9.3"):k.eq("2.6.0")&&(h="taobao",j="3.9.5"):b.env.os.isIOS&&(k.gte("2.5.0")&&k.lt("2.6.0")?(h="taobao",j="3.4.0"):k.eq("2.6.0")&&(h="taobao",j="3.4.5"))}!h&&f.indexOf("TBIOS")>0&&(h="TB"),b.env.aliapp=g?{windvane:b.version(c||"0.0.0"),appname:("taobao"===h?"TB":h)||"unkown",version:b.version(j||"0.0.0"),platform:i||b.env.os.name}:!1,b.env.taobaoApp=b.env.aliapp}(window,window.lib||(window.lib={}));