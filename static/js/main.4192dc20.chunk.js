(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(36)},19:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),i=a.n(c),r=(a(19),a(8)),l=a(9),s=a(12),h=a(10),d=a(13),m=a(2),u=a.n(m),f=a(11),b=a.n(f),g=function(e){return o.a.createElement("img",{className:"single-photo",src:e.img.urls.thumb})},p=(a(35),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).fetchRandomImages=function(){new u.a({applicationId:"76bb6285cf43bd300d2bf95da9dfa3658729c5770c211ba53756cc7e1493f594",secret:"7059170e8e0467f99b8a80951d30c21acba4bd8809317bcdabf05946aa4a93c7",callbackUrl:"http://localhost:3000/"}).photos.getRandomPhoto({count:30}).then(m.toJson).then(function(e){for(var t=a.state.data,n=0;n<e.length;n++)t.push(e[n]);a.setState({data:t})})},a.state={data:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchRandomImages()}},{key:"render",value:function(){var e=this.state.data;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"heading"},"Infinite Scroll UnSplash Code Challenge"),o.a.createElement("p",null,"Coded by ",o.a.createElement("a",{href:"http://zachlynch123.github.io"},"Zach Lynch")),o.a.createElement("div",{className:"images"},o.a.createElement(b.a,{dataLength:this.state.data.length,next:this.fetchRandomImages,hasMore:!0,loader:o.a.createElement("h4",null,"loading..")},e.map(function(e){return o.a.createElement(g,{key:e.id,img:e})}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.4192dc20.chunk.js.map