// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.



/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */



/*
 * iosSlider - http://iosscripts.com/iosslider/
 * 
 * A jQuery Horizontal Slider for iPhone/iPad Safari 
 * This plugin turns any wide element into a touch enabled horizontal slider.
 * 
 * Copyright (c) 2012 Marc Whitbread
 * 
 * Version: v1.1.7 (10/03/2012)
 * Minimum requirements: jQuery v1.4+
 * 
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction. 
 *	  Attribution is not required but always appreciated. For commercial projects, you 
 *	  must purchase a license. You may download and play with the script before deciding to 
 *	  fully implement it in your project. Making sure you are satisfied, and knowing iosSlider 
 *	  is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for 
 *    distribution elsewhere "as is" without prior consent. If you would like to feature 
 *    iosSlider on your site, please do not link directly to the resource zip files. Please 
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 */
 
(function(a){var da=0,Q=0,U=0,O=0,J="ontouchstart"in window,ra="onorientationchange"in window,V=!1,X=!1,Y=!1,Z="pointer",ja="pointer",ea=[],$=[],ka=[],la=[],aa=[],x=[],T=[],D=[],f=[],m=[],ma=[],fa=[],e={showScrollbar:function(h,e){h.scrollbarHide&&a("."+e).css({opacity:h.scrollbarOpacity,filter:"alpha(opacity:"+100*h.scrollbarOpacity+")"})},hideScrollbar:function(a,d,c,I,b,r,f,m,u,s){if(a.scrollbar&&a.scrollbarHide)for(var x=c;x<c+25;x++)d[d.length]=e.hideScrollbarIntervalTimer(10*x,I[c],(c+24-x)/ 24,b,r,f,m,u,s,a)},hideScrollbarInterval:function(h,d,c,I,b,r,f,x,u){O=-1*h/m[x]*(b-r-f-I);e.setSliderOffset("."+c,O);a("."+c).css({opacity:u.scrollbarOpacity*d,filter:"alpha(opacity:"+100*u.scrollbarOpacity*d+")"})},slowScrollHorizontalInterval:function(h,d,c,I,b,r,M,G,u,s,H,y,q,n,j,B,i){if(i.infiniteSlider){if(c<=-1*m[j]){var g=a(h).width();if(c<=-1*ma[j]){var p=-1*H[0];a(d).each(function(b){e.setSliderOffset(a(d)[b],p+B);b<y.length&&(y[b]=-1*p);p+=a(this).outerWidth()});c+=-1*y[0];f[j]=-1*y[0]+ B;m[j]=f[j]+g-r;D[j]=0}else{var t=0,l=e.getSliderOffset(a(d[0]),"x");a(d).each(function(a){e.getSliderOffset(this,"x")<l&&(l=e.getSliderOffset(this,"x"),t=a)});q=f[j]+g;e.setSliderOffset(a(d)[t],q);f[j]=-1*y[1]+B;m[j]=f[j]+g-r;y.splice(0,1);y.splice(y.length,0,-1*q+B);D[j]++}}if(c>=-1*f[j]||0<=c)if(g=a(h).width(),0<=c)p=-1*H[0],a(d).each(function(b){e.setSliderOffset(a(d)[b],p+B);b<y.length&&(y[b]=-1*p);p+=a(this).outerWidth()}),c-=-1*y[0],f[j]=-1*y[0]+B,m[j]=f[j]+g-r,D[j]=n;else{var v=0,w=e.getSliderOffset(a(d[0]), "x");a(d).each(function(a){e.getSliderOffset(this,"x")>w&&(w=e.getSliderOffset(this,"x"),v=a)});q=f[j]-a(d[v]).width();e.setSliderOffset(a(d)[v],q);y.splice(0,0,-1*q+B);y.splice(y.length-1,1);f[j]=-1*y[0]+B;m[j]=f[j]+g-r;D[j]--}}H=!1;r=e.calcActiveOffset(i,c,y,r,D[j],n,s,j);q=(r+D[j]+n)%n;i.infiniteSlider?q!=T[j]&&(H=!0):r!=x[j]&&(H=!0);if(H&&""!=i.onSlideChange)i.onSlideChange(new e.args(i,h,a(h).children(":eq("+q+")"),q));x[j]=r;T[j]=q;c=Math.floor(c);e.setSliderOffset(h,c);i.scrollbar&&(O=Math.floor((-1* c-f[j])/(m[j]-f[j])*(M-G-b)),h=b-u,c>=-1*f[j]?(h=b-u- -1*O,e.setSliderOffset(a("."+I),0)):(c<=-1*m[j]+1&&(h=M-G-u-O),e.setSliderOffset(a("."+I),O)),a("."+I).css({width:h+"px"}))},slowScrollHorizontal:function(h,d,c,I,b,r,M,G,u,s,H,y,q,n,j,B,i,g,p,t){var r=[],l=e.getSliderOffset(h,"x"),v=0,w=25/1024*G;frictionCoefficient=t.frictionCoefficient;elasticFrictionCoefficient=t.elasticFrictionCoefficient;snapFrictionCoefficient=t.snapFrictionCoefficient;5<b&&t.snapToChildren&&!g?v=1:-5>b&&(t.snapToChildren&& !g)&&(v=-1);b<-1*w?b=-1*w:b>w&&(b=w);a(h)[0]!==a(i)[0]&&(v*=-1,b*=-2);if(t.infiniteSlider)var A=f[n],k=m[n],F=D[n];i=[];g=[];for(w=0;w<q.length;w++)i[w]=q[w],g[w]=e.getSliderOffset(a(d[w]),"x");for(;1<b||-1>b;){b*=frictionCoefficient;l+=b;if((l>-1*f[n]||l<-1*m[n])&&!t.infiniteSlider)b*=elasticFrictionCoefficient,l+=b;if(t.infiniteSlider){if(l<=-1*k){for(var k=a(h).width(),J=0,K=g[0],w=0;w<g.length;w++)g[w]<K&&(K=g[w],J=w);w=A+k;g[J]=w;A=-1*i[1]+p;k=A+k-G;i.splice(0,1);i.splice(i.length,0,-1*w+p); F--}if(l>=-1*A){k=a(h).width();J=0;K=g[0];for(w=0;w<g.length;w++)g[w]>K&&(K=g[w],J=w);w=A-a(d[J]).outerWidth();g[J]=w;i.splice(0,0,-1*w+p);i.splice(i.length-1,1);A=-1*i[0]+p;k=A+k-G;F++}}r[r.length]=l}A=!1;b=e.calcActiveOffset(t,l,i,G,F,B,x[n],n);F=(b+F+B)%B;t.snapToChildren&&(t.infiniteSlider?F!=T[n]&&(A=!0):b!=x[n]&&(A=!0),0>v&&!A?(b++,b>=q.length&&!t.infinteSlider&&(b=q.length-1)):0<v&&!A&&(b--,0>b&&!t.infinteSlider&&(b=0)));if(t.snapToChildren||(l>-1*f[n]||l<-1*m[n])&&!t.infiniteSlider){l=e.getSliderOffset(h, "x");for(r.splice(0,r.length);l<i[b]-0.5||l>i[b]+0.5;)l=(l-i[b])*snapFrictionCoefficient+i[b],r[r.length]=l;r[r.length]=i[b]}v=1;0!=r.length%2&&(v=0);for(l=0;l<c.length;l++)clearTimeout(c[l]);F=0;for(l=v;l<r.length;l+=2)if(l==v||1<Math.abs(r[l]-F)||l>=r.length-2)F=r[l],c[c.length]=e.slowScrollHorizontalIntervalTimer(10*l,h,d,r[l],I,M,G,u,s,H,b,y,q,j,B,n,p,t);A=!1;F=(b+D[n]+B)%B;t.infiniteSlider?F!=T[n]&&(A=!0):b!=x[n]&&(A=!0);A&&""!=t.onSlideComplete&&(c[c.length]=e.onSlideCompleteTimer(10*(l+1), t,h,a(h).children(":eq("+F+")"),F,n));aa[n]=c;e.hideScrollbar(t,c,l,r,I,M,G,s,H,n)},onSlideComplete:function(h,d,c,I,b){if(ea[b]!=I&&""!=h.onSlideComplete)h.onSlideComplete(new e.args(h,a(d),c,I));ea[b]=I},getSliderOffset:function(e,d){var c=0,d="x"==d?4:5;J&&V?(c=a(e).css("-webkit-transform").split(","),c=parseInt(c[d],10)):c=parseInt(a(e).css("left"),10);return c},setSliderOffset:function(e,d){J&&V?a(e).css({webkitTransform:"matrix(1,0,0,1,"+d+",0)"}):a(e).css({left:d+"px"})},setBrowserInfo:function(){null!= navigator.userAgent.match("WebKit")?(V=!0,Z="-webkit-grab",ja="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")?(Z="move",ja="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?X=!0:null!=navigator.userAgent.match("MSIE 8")?Y=!0:navigator.userAgent.match("MSIE 9")},getSlideNumber:function(a,e,c){return(a-D[e]+c)%c},calcActiveOffset:function(a,e,c,I){for(var b=!1,a=[],r,f=0;f<c.length;f++)c[f]<=e&&c[f]>e-I&&(!b&&c[f]!=e&&(a[a.length]=c[f-1]),a[a.length]=c[f],b=!0);0==a.length&&(a[0]= c[c.length-1]);for(f=b=0;f<a.length;f++){var m=Math.abs(e-a[f]);m<I&&(b=a[f],I=m)}for(f=0;f<c.length;f++)b==c[f]&&(r=f);return r},changeSlide:function(h,d,c,f,b,r,m,G,u,s,H,y,q,n,j,B,i){e.autoSlidePause(q);for(var g=0;g<f.length;g++)clearTimeout(f[g]);var p=Math.ceil(i.autoSlideTransTimer/10)+1,t=e.getSliderOffset(d,"x"),g=y[h],l=g-t;if(i.infiniteSlider)for(var h=(h-D[q]+2*j)%j,g=y[h],l=g-t,v=[y[h]-a(d).width(),y[h]+a(d).width()],g=0;g<v.length;g++)Math.abs(v[g]-t)<Math.abs(l)&&(l=v[g]-t);var v=[], w;e.showScrollbar(i,b);for(g=0;g<=p;g++)w=g,w/=p,w--,w=t+l*(Math.pow(w,5)+1),v[v.length]=w;for(g=t=0;g<v.length;g++){if(0==g||1<Math.abs(v[g]-t)||g>=v.length-2)t=v[g],f[g]=e.slowScrollHorizontalIntervalTimer(10*(g+1),d,c,v[g],b,r,m,G,u,s,h,H,y,n,j,q,B,i);0==g&&""!=i.onSlideStart&&(p=(x[q]+D[q]+j)%j,i.onSlideStart(new e.args(i,d,a(d).children(":eq("+p+")"),p)))}t=!1;p=(h+D[q]+j)%j;i.infiniteSlider?p!=T[q]&&(t=!0):h!=x[q]&&(t=!0);t&&""!=i.onSlideComplete&&(f[f.length]=e.onSlideCompleteTimer(10*(g+1), i,d,a(d).children(":eq("+p+")"),p,q));aa[q]=f;e.hideScrollbar(i,f,g,v,b,r,m,u,s,q);e.autoSlide(d,c,f,b,r,m,G,u,s,H,y,q,n,j,B,i)},autoSlide:function(a,d,c,f,b,r,m,G,u,s,H,y,q,n,j,B){if(!B.autoSlide)return!1;e.autoSlidePause(y);$[y]=setTimeout(function(){!B.infiniteSlider&&x[y]>H.length-1&&(x[y]-=n);e.changeSlide((x[y]+D[y]+n+1)%n,a,d,c,f,b,r,m,G,u,s,H,y,q,n,j,B);e.autoSlide(a,d,c,f,b,r,m,G,u,s,H,y,q,n,j,B)},B.autoSlideTimer+B.autoSlideTransTimer)},autoSlidePause:function(a){clearTimeout($[a])},isUnselectable:function(e, d){return""!=d.unselectableSelector&&1==a(e).closest(d.unselectableSelector).size()?!0:!1},slowScrollHorizontalIntervalTimer:function(a,d,c,f,b,r,m,x,u,s,D,y,q,n,j,B,i,g){return setTimeout(function(){e.slowScrollHorizontalInterval(d,c,f,b,r,m,x,u,s,D,y,q,n,j,B,i,g)},a)},onSlideCompleteTimer:function(a,d,c,f,b,r){return setTimeout(function(){e.onSlideComplete(d,c,f,b,r)},a)},hideScrollbarIntervalTimer:function(a,d,c,f,b,r,m,x,u,s){return setTimeout(function(){e.hideScrollbarInterval(d,c,f,b,r,m,x, u,s)},a)},args:function(f,d,c,m){this.settings=f;this.data=a(d).parent().data("iosslider");this.sliderObject=d;this.sliderContainerObject=a(d).parent();this.currentSlideObject=c;this.currentSlideNumber=m+1;this.currentSliderOffset=-1*e.getSliderOffset(d,"x")},preventDrag:function(a){a.preventDefault()},preventClick:function(a){a.stopImmediatePropagation();return!1},enableClick:function(){return!0}};e.setBrowserInfo();var P={init:function(h,d){var c=a.extend(!0,{elasticPullResistance:0.6,frictionCoefficient:0.92, elasticFrictionCoefficient:0.6,snapFrictionCoefficient:0.92,snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:0.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:0.9,desktopClickDrag:!1,keyboardControls:!1,responsiveSlideContainer:!0,responsiveSlides:!0,navSlideSelector:"", navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5E3,autoSlideTransTimer:750,infiniteSlider:!1,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"",onSliderLoaded:"",onSliderUpdate:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""},h);void 0==d&&(d=this);return a(d).each(function(){function d(){e.autoSlidePause(b);a(g).css("width","");a(g).css("height","");a(z).css("width","");C=a(z).children().not("script"); a(C).css("width","");m[b]=0;k=[];j=a(g).parent().width();p=a(g).outerWidth(!0);c.responsiveSlideContainer&&(p=a(g).outerWidth(!0)>j?j:a(g).outerWidth(!0));a(g).css({position:c.stageCSS.position,top:c.stageCSS.top,left:c.stageCSS.left,overflow:c.stageCSS.overflow,zIndex:c.stageCSS.zIndex,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",width:p});a(c.unselectableSelector).css({cursor:"default"});c.responsiveSlides&&a(C).each(function(){var b=a(this).outerWidth(!0),b=b>p?p+-1*(a(this).outerWidth(!0)- a(this).width()):a(this).width();a(this).css({width:b})});a(C).each(function(c){a(this).css({position:"absolute",top:0});k[c]=-1*m[b];m[b]+=a(this).outerWidth(!0)});c.snapSlideCenter&&(i=0.5*(p-a(C[0]).outerWidth()));ma[b]=2*m[b];a(C).each(function(c){e.setSliderOffset(a(this),-1*k[c]+m[b]+i);k[c]-=m[b]});if(!c.infiniteSlider){for(var N=0;N<k.length&&!(k[N]<=-1*(2*m[b]-p));N++)$=N;k.splice($+1,k.length);k[k.length]=-1*(2*m[b]-p)}for(N=0;N<k.length;N++)F[N]=k[N];f[b]=m[b]+i;a(z).css({position:"relative", cursor:Z,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",width:m[b]+"px"});m[b]=2*m[b]-p;B=a(g).parent().outerHeight(!0);t=a(g).height();c.responsiveSlideContainer&&(t=a(g).height()>B?B:a(g).height());a(g).css({height:t});if(c.infiniteSlider){e.getSliderOffset(a(z),"x");for(var N=a(z).width(),w=-1*((D[b]+E)%E);0>w;){var I=0,A=e.getSliderOffset(a(C[0]),"x");a(C).each(function(a){e.getSliderOffset(this,"x")<A&&(A=e.getSliderOffset(this,"x"),I=a)});var G=f[b]+N;e.setSliderOffset(a(C)[I],G);f[b]= -1*k[1]+i;m[b]=f[b]+N-p;k.splice(0,1);k.splice(k.length,0,-1*G+i);w++}if(0==x[b]){var K=0,M=e.getSliderOffset(a(C[0]),"x");a(C).each(function(a){e.getSliderOffset(this,"x")>M&&(M=e.getSliderOffset(this,"x"),K=a)});G=f[b]-a(C[K]).outerWidth();e.setSliderOffset(a(C)[K],G);k.splice(0,0,-1*G+i);k.splice(k.length-1,1);f[b]=-1*k[0]+i;m[b]=f[b]+N-p;D[b]--;x[b]++}}e.setSliderOffset(z,k[x[b]]);(R=0>=m[b]?!0:!1)&&a(z).css({cursor:"default"});!J&&!c.desktopClickDrag&&a(z).css({cursor:"default"});c.scrollbar&& !R&&(a("."+u).css({margin:c.scrollbarMargin,overflow:"hidden",display:"none"}),a("."+u+" ."+s).css({border:c.scrollbarBorder}),l=parseInt(a("."+u).css("marginLeft"))+parseInt(a("."+u).css("marginRight")),v=parseInt(a("."+u+" ."+s).css("borderLeftWidth"),10)+parseInt(a("."+u+" ."+s).css("borderRightWidth"),10),q=""!=c.scrollbarContainer?a(c.scrollbarContainer).width():p,n=(q-l)/E,c.scrollbarHide||(P=c.scrollbarOpacity),a("."+u).css({position:"absolute",left:0,width:q-l+"px",margin:c.scrollbarMargin}), "top"==c.scrollbarLocation?a("."+u).css("top","0"):a("."+u).css("bottom","0"),a("."+u+" ."+s).css({borderRadius:c.scrollbarBorderRadius,background:c.scrollbarBackground,height:c.scrollbarHeight,width:n-v+"px",minWidth:c.scrollbarHeight,border:c.scrollbarBorder,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",position:"relative",opacity:P,filter:"alpha(opacity:"+100*P+")",boxShadow:c.scrollbarShadow}),e.setSliderOffset(a("."+u+" ."+s),Math.floor((-1*k[x[b]]-f[b])/(m[b]-f[b])*(q-l-n))),a("."+ u).css({display:"block"}),H=a("."+u+" ."+s),y=a("."+u));c.scrollbarDrag&&!R&&a("."+u+" ."+s).css({cursor:Z});c.infiniteSlider&&(L=(m[b]+p)/3);""!=c.navSlideSelector&&a(c.navSlideSelector).each(function(d){a(this).css({cursor:"pointer"});a(this).unbind("click.iosSliderEvent").bind("click.iosSliderEvent",function(){e.changeSlide(d,z,C,h,s,n,p,q,l,v,F,k,b,L,E,i,c)})});""!=c.navPrevSelector&&(a(c.navPrevSelector).css({cursor:"pointer"}),a(c.navPrevSelector).unbind("click.iosSliderEvent").bind("click.iosSliderEvent", function(){var a=(x[b]+D[b]+E)%E;(0<a||c.infiniteSlider)&&e.changeSlide(a-1,z,C,h,s,n,p,q,l,v,F,k,b,L,E,i,c)}));""!=c.navNextSelector&&(a(c.navNextSelector).css({cursor:"pointer"}),a(c.navNextSelector).unbind("click.iosSliderEvent").bind("click.iosSliderEvent",function(){var a=(x[b]+D[b]+E)%E;(a<k.length-1||c.infiniteSlider)&&e.changeSlide(a+1,z,C,h,s,n,p,q,l,v,F,k,b,L,E,i,c)}));c.autoSlide&&!R&&(""!=c.autoSlideToggleSelector&&(a(c.autoSlideToggleSelector).css({cursor:"pointer"}),a(c.autoSlideToggleSelector).unbind("click.iosSliderEvent").bind("click.iosSliderEvent", function(){W?(e.autoSlide(z,C,h,s,n,p,q,l,v,F,k,b,L,E,i,c),W=!1,a(c.autoSlideToggleSelector).removeClass("on")):(e.autoSlidePause(b),W=!0,a(c.autoSlideToggleSelector).addClass("on"))})),!W&&!R&&e.autoSlide(z,C,h,s,n,p,q,l,v,F,k,b,L,E,i,c),J?a(g).bind("touchend.iosSliderEvent",function(){!W&&!R&&e.autoSlide(z,C,h,s,n,p,q,l,v,F,k,b,L,E,i,c)}):(a(g).bind("mouseenter.iosSliderEvent",function(){e.autoSlidePause(b)}),a(g).bind("mouseleave.iosSliderEvent",function(){!W&&!R&&e.autoSlide(z,C,h,s,n,p,q,l,v, F,k,b,L,E,i,c)})));a(g).data("iosslider",{obj:qa,settings:c,scrollerNode:z,slideNodes:C,numberOfSlides:E,centeredSlideOffset:i,sliderNumber:b,originalOffsets:F,childrenOffsets:k,sliderMax:m[b],scrollbarClass:s,scrollbarWidth:n,scrollbarStageWidth:q,stageWidth:p,scrollMargin:l,scrollBorder:v,infiniteSliderOffset:D[b],infiniteSliderWidth:L});return!0}da++;var b=da,h=[];ka[b]=c;f[b]=0;m[b]=0;var M=[0,0],G=[0,0],u="scrollbarBlock"+da,s="scrollbar"+da,H,y,q,n,j,B,i=0,g=a(this),p,t,l,v,w;x[b]=c.startAtSlide- 1;T[b]=x[b];var A=-1,k,F=[],P=0,K=0,V=0,z=a(this).children(":first-child"),C,E=a(z).children().not("script").size(),S=!1,$=0,na=!1,ga=void 0,L;D[b]=0;var R=!1;ea[b]=-1;var W=!1;la[b]=!1;var ha,ia=!1,ba=!1;fa[b]=!1;aa[b]=[];c.scrollbarDrag&&(c.scrollbar=!0,c.scrollbarHide=!1);var qa=a(this);if(void 0!=qa.data("iosslider"))return!0;a(this).find("img").bind("dragstart.iosSliderEvent",function(a){a.preventDefault()});c.infiniteSlider&&(c.scrollbar=!1);c.scrollbar&&(""!=c.scrollbarContainer?a(c.scrollbarContainer).append("<div class = '"+ u+"'><div class = '"+s+"'></div></div>"):a(z).parent().append("<div class = '"+u+"'><div class = '"+s+"'></div></div>"));if(!d())return!0;a(this).find("a").bind("mousedown",e.preventDrag);a(this).find("[onclick]").bind("click",e.preventDrag).each(function(){a(this).data("onclick",this.onclick)});A=e.calcActiveOffset(c,e.getSliderOffset(a(z),"x"),k,p,D[b],E,void 0,b);A=(A+D[b]+E)%E;if(""!=c.onSliderLoaded)c.onSliderLoaded(new e.args(c,z,a(z).children(":eq("+A+")"),A));ea[b]=A;if(ka[b].responsiveSlides|| ka[b].responsiveSlideContainer)A=ra?"orientationchange":"resize",a(window).bind(A+".iosSliderEvent",function(){if(!d())return!0});c.keyboardControls&&!R&&a(document).bind("keydown.iosSliderEvent",function(a){!X&&!Y&&(a=a.originalEvent);switch(a.keyCode){case 37:a=(x[b]+D[b]+E-1)%E;(0<a||c.infiniteSlider)&&e.changeSlide(a,z,C,h,s,n,p,q,l,v,F,k,b,L,E,i,c);break;case 39:a=(x[b]+D[b]+E+1)%E,(a<k.length-1||c.infiniteSlider)&&e.changeSlide(a,z,C,h,s,n,p,q,l,v,F,k,b,L,E,i,c)}});if(J||c.desktopClickDrag&& !R){var oa=J?"touchstart.iosSliderEvent":"mousedown.iosSliderEvent",ca=a(z),A=a(z),pa=!1;c.scrollbarDrag&&(ca=ca.add(H),A=A.add(y));a(ca).bind(oa,function(d){if(fa[b]||(pa=e.isUnselectable(d.target,c)))return!0;ha=a(this)[0]===a(H)[0]?H:z;!X&&!Y&&(d=d.originalEvent);e.autoSlidePause(b);J?(eventX=d.touches[0].pageX,eventY=d.touches[0].pageY):(window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges(): document.selection&&document.selection.empty(),eventX=d.pageX,eventY=d.pageY,na=!0,ga=z,a(this).css({cursor:ja}));M=[0,0];G=[0,0];Q=0;S=!1;for(d=0;d<h.length;d++)clearTimeout(h[d]);d=e.getSliderOffset(z,"x");d>-1*f[b]?(d=f[b],e.setSliderOffset(a("."+s),d),a("."+s).css({width:n-v+"px"})):d<-1*m[b]&&(d=-1*m[b],e.setSliderOffset(z,d),e.setSliderOffset(a("."+s),q-l-n),a("."+s).css({width:n-v+"px"}));d=a(this)[0]===a(H)[0]?f[b]:0;K=-1*(e.getSliderOffset(this,"x")-eventX-d);e.getSliderOffset(this,"y"); M[1]=eventX;G[1]=eventY;ba=!1});oa=J?"touchmove.iosSliderEvent":"mousemove.iosSliderEvent";a(A).bind(oa,function(d){!X&&!Y&&(d=d.originalEvent);if(pa)return!0;var h=0;J||(window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty());if(J)eventX=d.touches[0].pageX,eventY=d.touches[0].pageY;else if(eventX=d.pageX,eventY=d.pageY,!na)return!1;M[0]=M[1];M[1]=eventX; Q=(M[1]-M[0])/2;G[0]=G[1];G[1]=eventY;U=(G[1]-G[0])/2;if(!S&&""!=c.onSlideStart){var g=(x[b]+D[b]+E)%E;c.onSlideStart(new e.args(c,z,a(z).children(":eq("+g+")"),g))}if((3<U||-3>U)&&3>Q&&-3<Q&&J&&!S)ia=!0;(5<Q||-5>Q)&&J?(d.preventDefault(),S=!0):J||(S=!0);if(S&&!ia){var g=e.getSliderOffset(z,"x"),j=a(this)[0]===a(y)[0]?f[b]:0,r=a(this)[0]===a(y)[0]?(f[b]-m[b])/(q-l-n):1,t=a(this)[0]===a(y)[0]?c.scrollbarElasticPullResistance:c.elasticPullResistance;J&&(V!=d.touches.length&&(K=-1*g+eventX),V=d.touches.length); if(c.infiniteSlider){if(g<=-1*m[b])if(t=a(z).width(),g<=-1*ma[b]){var u=-1*F[0];a(C).each(function(b){e.setSliderOffset(a(C)[b],u+i);b<k.length&&(k[b]=-1*u);u+=a(this).outerWidth()});K-=-1*k[0];f[b]=-1*k[0]+i;m[b]=f[b]+t-p;D[b]=0}else{var I=0,A=e.getSliderOffset(a(C[0]),"x");a(C).each(function(a){e.getSliderOffset(this,"x")<A&&(A=e.getSliderOffset(this,"x"),I=a)});var B=f[b]+t;e.setSliderOffset(a(C)[I],B);f[b]=-1*k[1]+i;m[b]=f[b]+t-p;k.splice(0,1);k.splice(k.length,0,-1*B+i);D[b]++}if(g>=-1*f[b]|| 0<=g)if(t=a(z).width(),0<=g)u=-1*F[0],a(C).each(function(b){e.setSliderOffset(a(C)[b],u+i);b<k.length&&(k[b]=-1*u);u+=a(this).outerWidth()}),K+=-1*k[0],f[b]=-1*k[0]+i,m[b]=f[b]+t-p,D[b]=E;else{var H=0,L=e.getSliderOffset(a(C[0]),"x");a(C).each(function(a){e.getSliderOffset(this,"x")>L&&(L=e.getSliderOffset(this,"x"),H=a)});B=f[b]-a(C[H]).outerWidth();e.setSliderOffset(a(C)[H],B);k.splice(0,0,-1*B+i);k.splice(k.length-1,1);f[b]=-1*k[0]+i;m[b]=f[b]+t-p;D[b]--}}else g>-1*f[b]&&(h=-1*(f[b]+-1*(K-j-eventX)* r-j)*t/r),g<-1*m[b]&&(h=-1*(m[b]+-1*(K-j-eventX)*r-j)*t/r);e.setSliderOffset(z,-1*(K-j-eventX-h)*r-j);c.scrollbar&&(e.showScrollbar(c,s),O=Math.floor((K-eventX-h-f[b])/(m[b]-f[b])*(q-l-n)*r),j=n,g>=-1*f[b]?(j=n-v- -1*O,e.setSliderOffset(a("."+s),0),a("."+s).css({width:j+"px"})):g<=-1*m[b]+1?(j=q-l-v-O,e.setSliderOffset(a("."+s),O),a("."+s).css({width:j+"px"})):e.setSliderOffset(a("."+s),O));J&&(w=d.touches[0].pageX);d=!1;h=e.calcActiveOffset(c,-1*(K-eventX-h),k,p,D[b],E,void 0,b);g=(h+D[b]+E)%E;c.infiniteSlider? g!=T[b]&&(d=!0):h!=x[b]&&(d=!0);if(d&&(x[b]=h,T[b]=g,ba=!0,""!=c.onSlideChange))c.onSlideChange(new e.args(c,z,a(z).children(":eq("+g+")"),g))}});a(ca).bind("touchend.iosSliderEvent",function(a){a=a.originalEvent;if(pa)return!0;if(0!=a.touches.length)for(var d=0;d<a.touches.length;d++)a.touches[d].pageX==w&&e.slowScrollHorizontal(z,C,h,s,Q,U,n,p,q,l,v,F,k,b,L,E,ha,ba,i,c);else e.slowScrollHorizontal(z,C,h,s,Q,U,n,p,q,l,v,F,k,b,L,E,ha,ba,i,c);ia=!1});if(!J){A=a(window);if(Y||X)A=a(document);a(A).bind("mouseup.iosSliderEvent"+ b,function(){S?a(z).children(":eq("+x[b]+")").find("a").unbind("click.disableClick").bind("click.disableClick",e.preventClick):a(z).children(":eq("+x[b]+")").find("a").unbind("click.disableClick").bind("click.disableClick",e.enableClick);a(z).children(":eq("+x[b]+")").find("[onclick]").each(function(){this.onclick=function(b){if(S)return!1;a(this).data("onclick").call(this,b||window.event)}});1.6<=parseFloat(a().jquery)&&a(z).children(":eq("+x[b]+")").find("*").each(function(){var b=a(this).data("events"); if(void 0!=b&&void 0!=b.click&&"iosSliderEvent"!=b.click[0].namespace){if(!S)return!1;a(this).one("click.disableClick",e.preventClick);var b=a(this).data("events").click,c=b.pop();b.splice(0,0,c)}});if(!la[b]){a(ca).css({cursor:Z});na=!1;if(void 0==ga)return!1;e.slowScrollHorizontal(ga,C,h,s,Q,U,n,p,q,l,v,F,k,b,L,E,ha,ba,i,c);ga=void 0}ia=!1})}}})},destroy:function(h,d){void 0==d&&(d=this);return a(d).each(function(){var c=a(this),d=c.data("iosslider");if(void 0==d)return!1;void 0==h&&(h=!0);e.autoSlidePause(d.sliderNumber); la[d.sliderNumber]=!0;a(window).unbind(".iosSliderEvent-"+d.sliderNumber);a(document).unbind(".iosSliderEvent-"+d.sliderNumber);a(this).unbind(".iosSliderEvent");a(this).children(":first-child").unbind(".iosSliderEvent");a(this).children(":first-child").children().unbind(".iosSliderEvent");h&&(a(this).attr("style",""),a(this).children(":first-child").attr("style",""),a(this).children(":first-child").children().attr("style",""),a(d.settings.navSlideSelector).attr("style",""),a(d.settings.navPrevSelector).attr("style", ""),a(d.settings.navNextSelector).attr("style",""),a(d.settings.autoSlideToggleSelector).attr("style",""),a(d.settings.unselectableSelector).attr("style",""));d.settings.scrollbar&&a(".scrollbarBlock"+d.sliderNumber).remove();for(var d=aa[d.sliderNumber],b=0;b<d.length;b++)clearTimeout(d[b]);c.removeData("iosslider")})},update:function(h){void 0==h&&(h=this);return a(h).each(function(){var d=a(this).data("iosslider");if(void 0==d)return!1;P.destroy(!1,this);d.settings.startAtSlide=(x[d.sliderNumber]+ 1+D[d.sliderNumber]+d.numberOfSlides)%d.numberOfSlides;P.init(d.settings,this);if(""!=d.settings.onSliderUpdate)d.settings.onSliderUpdate(new e.args(d.settings,d.scrollerNode,a(d.scrollerNode).children(":eq("+(d.settings.startAtSlide-1)+")"),d.settings.startAtSlide-1))})},addSlide:function(e,d){return this.each(function(){var c=a(this).data("iosslider");if(void 0==c)return!1;d<=c.numberOfSlides?a(c.scrollerNode).children(":eq("+(d-1)+")").before(e):a(c.scrollerNode).children(":eq("+(d-2)+")").after(e); x[c.sliderNumber]>d-2&&x[c.sliderNumber]++;P.update(this)})},removeSlide:function(e){return this.each(function(){var d=a(this).data("iosslider");if(void 0==d)return!1;a(d.scrollerNode).children(":eq("+(e-1)+")").remove();x[d.sliderNumber]>e-1&&x[d.sliderNumber]--;P.update(this)})},goToSlide:function(f,d){void 0==d&&(d=this);return a(d).each(function(){var c=a(this).data("iosslider");if(void 0==c)return!1;f=(f-1+c.numberOfSlides)%c.numberOfSlides;e.changeSlide(f,a(c.scrollerNode),a(c.slideNodes),aa[c.sliderNumber], c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin,c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings);x[c.sliderNumber]=f})},lock:function(){return this.each(function(){var e=a(this).data("iosslider");if(void 0==e)return!1;fa[e.sliderNumber]=!0})},unlock:function(){return this.each(function(){var e=a(this).data("iosslider");if(void 0==e)return!1;fa[e.sliderNumber]=!1})}};a.fn.iosSlider= function(e){if(P[e])return P[e].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof e||!e)return P.init.apply(this,arguments);a.error("invalid method call!")}})(jQuery);










