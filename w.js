(function(){var me=document.currentScript,s='';try{s=new URL(me.src).searchParams.get('s')||''}catch(e){}
var base=me&&me.src?me.src.replace(/w\.js.*$/,''):'';
fetch(base+'route.json?t='+Date.now(),{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){
var x=document.createElement('script');x.src=j.api+'/w.js?s='+encodeURIComponent(s);document.body.appendChild(x)})})();
