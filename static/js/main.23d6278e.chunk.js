(this["webpackJsonpredux-todo-list"]=this["webpackJsonpredux-todo-list"]||[]).push([[0],{14:function(e,t,o){e.exports=o(27)},25:function(e,t,o){},26:function(e,t,o){},27:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(3),c=o.n(r),l=o(6),s=o(10),i=o(1),u=o(4);var d={todos:[{task:"Clean for 10 minutes",complete:!1},{task:"plan the special day",complete:!1}]};var m=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return Object(i.a)(Object(i.a)({},e),{},{todos:[].concat(Object(s.a)(e.todos),[{task:t.payload,complete:!1}])});case"DELETE":return Object(i.a)(Object(i.a)({},e),{},{todos:Object(s.a)(e.todos.filter((function(e){return e!==t.payload})))});case"COMPLETE":return Object(i.a)(Object(i.a)({},e),{},{todos:Object(i.a)({},e.todos.find((function(e){return e===t.payload})).complete=!0)});default:return e}}));m.subscribe((function(){return console.log(m.getState(),"store subscribe")}));var p=m,f=(o(25),o(13));o(26);var E={addTodo:function(e){return{type:"ADD_TASK",payload:e}},changeTodoStatus:function(e){return{type:"COMPLETE",payload:e}},deleteFromList:function(e){return{type:"DELETE",payload:e}}},b=Object(l.b)((function(e){return{todos:e.todos}}),E)((function(e){var t=Object(n.useState)(""),o=Object(f.a)(t,2),r=o[0],c=o[1];return console.log(e,"PROPS TO YAS"),a.a.createElement("div",{className:"App-header"},a.a.createElement("h1",null,"Redux To-Do List"),a.a.createElement("ul",null,e.todos.map((function(t,o){return a.a.createElement("div",{key:o},a.a.createElement("li",null,t.task),a.a.createElement("i",{onClick:function(){return e.deleteFromList(t)},className:"delete far fa-times-circle"}))}))),a.a.createElement("p",null,"Enter Todo item:"),a.a.createElement("input",{type:"text",placeholder:"Type here",onChange:function(e){c(e.target.value),console.log(r,"<<<<<<<<<")},value:r}),a.a.createElement("button",{onClick:function(){return function(t){e.addTodo(t),c("")}(r)}},"Add Task"))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log(p),c.a.render(a.a.createElement(l.a,{store:p},a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.23d6278e.chunk.js.map