(this["webpackJsonpredux-todo-list"]=this["webpackJsonpredux-todo-list"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/Ellipse 1.03a3562d.svg"},15:function(e,t,a){e.exports=a.p+"static/media/Ellipse 2.56f5741a.svg"},16:function(e,t,a){e.exports=a(29)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(6),o=a.n(l),r=a(2),s=a(7),i=a(5),m=a(1),u={todos:[]};var d=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):u,E=Object(s.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return Object(m.a)(Object(m.a)({},e),{},{todos:[].concat(Object(i.a)(e.todos),[{task:t.payload,complete:!1}])});case"DELETE":return Object(m.a)(Object(m.a)({},e),{},{todos:Object(i.a)(e.todos.filter((function(e){return e!==t.payload})))});case"COMPLETE":for(var a=Object(i.a)(e.todos),c=0;c<a.length;c++)if(a[c]===t.payload){a[c].complete=!a[c].complete;break}return Object(m.a)(Object(m.a)({},e),{},{todos:Object(i.a)(a)});default:return e}}),d);E.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(E.getState()))}));var f=E,p=(a(27),a(3));function v(e){return{type:"ADD_TASK",payload:e}}function b(e){return{type:"COMPLETE",payload:e}}function N(e){return{type:"DELETE",payload:e}}a(28);var k=a(14),O=a.n(k),g=a(15),h=a.n(g);var x={addTodo:v,changeTodoStatus:b,deleteFromList:N},y=Object(r.b)((function(e){return{todos:e.todos}}),x)((function(e){var t=Object(c.useState)(!1),a=Object(p.a)(t,2),l=a[0],o=a[1],r=e.item,s=e.index;return n.a.createElement("li",{className:"row",key:s,onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)}},n.a.createElement("div",{className:"col my-auto  mx-auto"},r.complete?n.a.createElement("i",{onClick:function(){return e.changeTodoStatus(r)},className:"far fa-check-circle fa-sm status-icon-done"}):n.a.createElement("i",{onClick:function(){return e.changeTodoStatus(r)},className:"far fa-circle fa-sm status-icon"})),n.a.createElement("div",{className:"col-9 mt-3 task mx-auto"},r.complete?n.a.createElement("p",{className:"done-task"},r.task):n.a.createElement("p",null,r.task)),n.a.createElement("div",{className:"col my-auto mx-auto"},l?n.a.createElement("i",{onClick:function(){return e.deleteFromList(r)},className:"delete far fa-trash-alt fa-sm"}):null))}));var C={addTodo:v,changeTodoStatus:b,deleteFromList:N},j=Object(r.b)((function(e){return{todos:e.todos}}),C)((function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),l=a[0],o=a[1],r=Object(c.useState)("ALL"),s=Object(p.a)(r,2),i=s[0],m=s[1],u=Object(c.useState)(!1),d=Object(p.a)(u,2),E=d[0],f=d[1],v=function(e){e.preventDefault(),m("ALL")},b=function(e){e.preventDefault(),m("ACTIVE")},N=function(e){e.preventDefault(),m("COMPLETE")};return n.a.createElement("div",{className:"App-header"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4 text-center"},n.a.createElement("h1",{className:"title"},"Tasks")),n.a.createElement("div",{className:"col-4"}),n.a.createElement("div",{className:"col-4"}))),n.a.createElement("ul",null,n.a.createElement("div",{className:"container list"},e.todos.length<1?n.a.createElement("div",null,n.a.createElement("p",null,"Add some tasks below!! :D")):e.todos.map((function(e,t){switch(i){case"ALL":return n.a.createElement(y,{item:e,index:t});case"ACTIVE":return e.complete?null:n.a.createElement(y,{item:e,index:t});case"COMPLETE":return e.complete?n.a.createElement(y,{item:e,index:t}):null;default:return null}})),E?n.a.createElement("li",{className:"row hover-and-input",key:e.todos.length+2},n.a.createElement("div",{className:"col my-auto mx-auto"},n.a.createElement("i",{className:"far fa-circle fa-sm status-icon"})),n.a.createElement("div",{className:"col-9 mx-auto"},n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTodo(l),o(""),f(!1)}},n.a.createElement("input",{className:"input",type:"text",placeholder:"Enter task",onChange:function(e){o(e.target.value)},value:l}),n.a.createElement("button",{className:"submit",type:"submit"},n.a.createElement("i",{className:"fas fa-file-medical"})))),n.a.createElement("div",{className:"col mx-auto"})):null)),n.a.createElement("div",{className:"container fixed-bottom footer"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col text-center my-auto mx-auto"},"ALL"===i?n.a.createElement("p",{className:"filter-title-clicked",onClick:v},"All"):n.a.createElement("p",{className:"filter-title",onClick:v},"All")),n.a.createElement("div",{className:"col text-center my-auto mx-auto"},"ACTIVE"===i?n.a.createElement("p",{className:"filter-title-clicked",onClick:b},"Active"):n.a.createElement("p",{className:"filter-title",onClick:b},"Active")),n.a.createElement("div",{className:"col text-center my-auto mx-auto"},"COMPLETE"===i?n.a.createElement("p",{className:"filter-title-clicked",onClick:N},"Completed"):n.a.createElement("p",{className:"filter-title",onClick:N},"Completed")),n.a.createElement("div",{className:"col text-center"},"COMPLETE"===i?n.a.createElement("img",{src:h.a,alt:"disabled button"}):n.a.createElement("img",{onClick:function(){return f(!E)},src:O.a,alt:"add button"})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log(f),o.a.render(n.a.createElement(r.a,{store:f},n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f628e7a4.chunk.js.map