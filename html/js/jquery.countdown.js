!function(t){function a(a,s){a.addClass("countdownHolder"),t.each(["Days","Hours","Minutes","Seconds"],function(s){t('<span class="count'+this+'">').html('<span class="position">\t\t\t\t\t<span class="digit static">0</span>\t\t\t\t</span>\t\t\t\t<span class="position">\t\t\t\t\t<span class="digit static">0</span>\t\t\t\t</span>').appendTo(a),"Seconds"!=this&&a.append('<span class="countDiv countDiv'+s+'"><span class="position1"></span></span>')})}function s(a,s){var n=a.find(".digit");if(n.is(":animated"))return!1;if(a.data("digit")==s)return!1;a.data("digit",s);var i=t("<span>",{"class":"digit",css:{top:"-2.1em",opacity:0},html:s});n.before(i).removeClass("static").animate({top:"2.5em",opacity:0},"fast",function(){n.remove()}),i.delay(100).animate({top:0,opacity:1},"fast",function(){i.addClass("static")})}var n=86400,i=3600,o=60;t.fn.countdown=function(c){function e(t,a,n){s(r.eq(t),Math.floor(n/10)%10),s(r.eq(a),n%10)}var p,d,l,f,u,r,m=t.extend({callback:function(){},timestamp:0},c);return a(this,m),r=this.find(".position"),function h(){p=Math.floor((m.timestamp-new Date)/1e3),p<0&&(p=0),d=Math.floor(p/n),e(0,1,d),p-=d*n,l=Math.floor(p/i),e(2,3,l),p-=l*i,f=Math.floor(p/o),e(4,5,f),p-=f*o,u=p,e(6,7,u),m.callback(d,l,f,u),setTimeout(h,1e3)}(),this}}(jQuery);
//# sourceMappingURL=maps/jquery.countdown.js.map
