!function(a,b){function c(a){this.string=a.toString()}b.env=b.env||{},c.prototype.toString=function(){return this.string},c.prototype.valueOf=function(){for(var b=this.toString().split("."),c=[],d=0;d<b.length;d++){var e=parseInt(b[d],10);a.isNaN(e)&&(e=0);var f=e.toString();f.length<5&&(f=Array(6-f.length).join("0")+f),c.push(f),1===c.length&&c.push(".")}return a.parseFloat(c.join(""))},c.prototype.gt=function(a){return c.compare(this,a)>0},c.prototype.gte=function(a){return c.compare(this,a)>=0},c.prototype.lt=function(a){return c.compare(this,a)<0},c.prototype.lte=function(a){return c.compare(this,a)<=0},c.prototype.eq=function(a){return 0===c.compare(this,a)},c.compare=function(b,c){b=b.toString().split("."),c=c.toString().split(".");for(var d=0;d<b.length||d<c.length;d++){var e=parseInt(b[d],10),f=parseInt(c[d],10);if(a.isNaN(e)&&(e=0),a.isNaN(f)&&(f=0),f>e)return-1;if(e>f)return 1}return 0},b.version=function(a){return new c(a)}}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.location.search.replace(/^\?/,"");if(b.env.params={},c)for(var d=c.split("&"),e=0;e<d.length;e++)d[e]=d[e].split("="),b.env.params[d[e][0]]=decodeURIComponent(d[e][1])}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;if(c=d.match(/Android[\s\/]([\d\.]+)/))b.env.os={name:"Android",isAndroid:!0,version:c[1]};else if(c=d.match(/(iPhone|iPad|iPod)/)){var e=c[1];c=d.match(/OS ([\d_]+) like Mac OS X/),b.env.os={name:e,isIPhone:"iPhone"===e||"iPod"===e,isIPad:"iPad"===e,isIOS:!0,version:c[1].split("_").join(".")}}else b.env.os={name:"unknown",version:"0.0.0"};b.version&&(b.env.os.version=b.version(b.env.os.version))}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;(c=d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/))?b.env.browser={name:"UC",isUC:!0,version:c[1]}:(c=d.match(/MQQBrowser\/([\d\.]+)/))?b.env.browser={name:"QQ",isQQ:!0,version:c[1]}:d.match(/Version\//)&&d.match(/Android/)||!(c=d.match(/Chrome\/([\d\.]+)/))?d.match(/Mobile Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))?b.env.browser={name:"Android",isAndroid:!0,version:c[1]}:d.match(/iPhone|iPad|iPod/)?d.match(/Safari/)?(c=d.match(/Version\/([\d\.]+)/),b.env.browser={name:"Safari",isSafari:!0,version:c[1]}):(c=d.match(/OS ([\d_]+) like Mac OS X/),b.env.browser={name:"iOS Webview",isWebview:!0,version:c[1].replace(/\_/,".")}):b.env.browser={name:"unknown",version:"0.0.0"}:b.env.browser={name:"Chrome",isChrome:!0,version:c[1]},b.version&&(b.env.browser.version=b.version(b.env.browser.version))}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d,e=b.env.params.ttid,f=a.navigator.userAgent;(d=f.match(/WindVane[\/\s]([\d\.\_]+)/))&&(c=d[1]);var g,h;(d=f.match(/@taobao_(iphone|android|ipad)_([\d\.]+)/))?(g=d[1].replace(/^ip/,"iP").replace(/^a/,"A"),h=d[2]):e&&(d=e.match(/@taobao_(iphone|android|ipad)_([\d\.]+)/))?(g=d[1].replace(/^ip/,"iP").replace(/^a/,"A"),h=d[2]):c&&(c=b.version(c),g=b.env.os.name,b.env.os.isAndroid?c.gte("2.5.1")&&c.lte("2.5.5")?h="3.9.2":c.eq("2.5.6")?h="3.9.3":c.eq("2.6.0")&&(h="3.9.5"):b.env.os.isIOS&&(c.gte("2.5.0")&&c.lt("2.6.0")?h="3.4.0":c.eq("2.6.0")&&(h="3.4.5"))),g&&h&&(b.env.taobaoApp={windvine:b.version(c||"0.0.0"),version:b.version(h||"0.0.0"),platform:g})}(window,window.lib||(window.lib={}));