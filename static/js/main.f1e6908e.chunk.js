(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=(a(16),a(5)),s=a(6),l=a(9),u=a(7),d=a(10),w=a(1),m=a(8),v=a.n(m),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={text:"**Mark My words**"},a.updateText=a.updateText.bind(Object(w.a)(Object(w.a)(a))),a.getPreview=a.getPreview.bind(Object(w.a)(Object(w.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"updateText",value:function(e){this.setState({text:e.target.value})}},{key:"getPreview",value:function(){return v()(this.state.text)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"markdown col"},r.a.createElement("textarea",{id:"input-markdown",rows:"30",cols:"60",onChange:this.updateText,value:this.state.text})),r.a.createElement("div",{className:"preview col"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.getPreview()}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.f1e6908e.chunk.js.map