(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(4),r=c.n(n),i=(c(17),c(1)),l=function(){return Object(i.jsx)("footer",{children:Object(i.jsx)("p",{children:"Drag and drop to reorder list"})})},d=c(3),o=(c(19),c.p+"static/media/icon-moon.6c03114b.svg"),j=c.p+"static/media/icon-sun.910b1f9a.svg",u=function(){var e,t="clicked",c=document.body,a="light",n="dark",r=Object(s.useState)(o),l=Object(d.a)(r,2),u=l[0],b=l[1];return localStorage&&(e=localStorage.getItem("theme")),e===a||e===n?c.classList.add(e):c.classList.add(a),Object(i.jsx)("img",{src:u,alt:"moon",className:"dark"===e?t:"",id:"darkMode",onClick:function(s){e===n?(c.classList.replace(n,a),s.target.classList.remove(t),localStorage.setItem("theme","light"),e=a,b(o)):(c.classList.replace(a,n),s.target.classList.add(t),localStorage.setItem("theme","dark"),e=n,b(j))}})},b=function(){return Object(i.jsx)("div",{className:"header",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"TODO"}),Object(i.jsx)(u,{})]})})},O=c(2),m=c(11),p=c(12),f=function(e){var t=Object(s.useState)(""),c=Object(d.a)(t,2),a=c[0],n=c[1];function r(t){t.preventDefault(),""!==a&&(e.addTask(a),n(""),setTimeout((function(){t.target.checked=!1}),300))}return Object(i.jsxs)("form",{className:"add-todo",onSubmit:r,children:[Object(i.jsxs)("label",{className:"checkbox-wrapper",children:[Object(i.jsx)("input",{type:"checkbox",id:"newTodo",onChange:r}),Object(i.jsx)("span",{className:"checkmark"})]}),Object(i.jsx)("input",{type:"text",name:"todoInput",id:"todoInput",placeholder:"Create a new todo...",autoComplete:"off",value:a,onChange:function(e){n(e.target.value)}})]})},h=c(7),x=c.p+"static/media/icon-cross.6ee81d30.svg",k=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"todo-footer",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:[e.taskCount," items left"]})}),Object(i.jsx)("div",{className:"status-wrapper",children:Object(i.jsxs)("ul",{onClick:e.statusHandler,id:"status",children:[Object(i.jsx)("li",{id:"active",children:"All"}),Object(i.jsx)("li",{children:"Active"}),Object(i.jsx)("li",{children:"Completed"})]})}),Object(i.jsx)("div",{children:Object(i.jsx)("span",{onClick:e.clearCompletedTasks,children:"Clear Completed"})})]})})},v=function(e){return Object(i.jsxs)("div",{className:"todo-list",children:[Object(i.jsx)(h.a,{onDragEnd:function(t){var c=Array.from(e.filteredTask),s=c.splice(t.source.index,1),a=Object(d.a)(s,1)[0];c.splice(t.destination.index,0,a),e.setFilteredTask(c)},children:Object(i.jsx)(h.c,{droppableId:"lists",children:function(t){return Object(i.jsxs)("div",Object(O.a)(Object(O.a)({},t.droppableProps),{},{ref:t.innerRef,children:[e.filteredTask.map((function(t){return Object(i.jsx)(h.b,{draggableId:t.id,index:e.filteredTask.indexOf(t),children:function(c){return Object(s.createElement)("div",Object(O.a)(Object(O.a)(Object(O.a)({},c.draggableProps),c.dragHandleProps),{},{ref:c.innerRef,className:"todo ".concat(t.completed?"completed":""),role:"list",key:t.id}),Object(i.jsxs)("label",{className:"checkbox-wrapper",htmlFor:t.id,children:[Object(i.jsx)("input",{type:"checkbox",id:t.id,defaultChecked:t.completed,onChange:function(){return e.toggleTaskCompleted(t.id)}}),Object(i.jsx)("span",{className:"checkmark"})]}),Object(i.jsxs)("p",{className:"todo-content",children:[t.name," "]}),Object(i.jsx)("img",{src:x,alt:"Delete Icon",onClick:function(){return e.deleteTask(t.id)},className:"delete-btn"}))}},t.id)})),t.placeholder]}))}})}),Object(i.jsx)(k,{taskCount:e.taskCount,clearCompletedTasks:e.clearCompletedTasks,statusHandler:e.statusHandler})]})},g=function(e){return Object(i.jsx)("div",{className:"todo-status",children:Object(i.jsxs)("ul",{onClick:e.statusHandler,id:"status",children:[Object(i.jsx)("li",{id:"active",children:"All"}),Object(i.jsx)("li",{children:"Active"}),Object(i.jsx)("li",{children:"Completed"})]})})},C=function(e){var t=Object(s.useState)((function(){var e=localStorage.getItem("tasks");return e?JSON.parse(e):[]})),c=Object(d.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(0),l=Object(d.a)(r,2),o=l[0],j=l[1],u=Object(s.useState)("All"),b=Object(d.a)(u,2),h=b[0],x=b[1],k=Object(s.useState)([]),C=Object(d.a)(k,2),T=C[0],N=C[1];function S(e){x(e.target.innerText)}return Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(a)),function(){switch(h){case"Active":N(a.filter((function(e){return!1===e.completed})));break;case"Completed":N(a.filter((function(e){return!0===e.completed})));break;default:N(a)}}(),function(){var e=a.filter((function(e){return!1===e.completed}));j(e.length)}()}),[a,h]),Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{addTask:function(e){var t={id:Object(p.a)(),name:e,completed:!1};n([].concat(Object(m.a)(a),[t]))}}),Object(i.jsx)(v,{tasks:a,deleteTask:function(e){var t=a.filter((function(t){return t.id!==e}));n(t)},toggleTaskCompleted:function(e){var t=a.map((function(t){return t.id===e?Object(O.a)(Object(O.a)({},t),{},{completed:!t.completed}):t}));n(t)},clearCompletedTasks:function(){var e=a.filter((function(e){return!1===e.completed}));n(e)},setStatus:x,filteredTask:T,taskCount:o,statusHandler:S,setFilteredTask:N}),Object(i.jsx)(g,{statusHandler:S})]})};var T=function(){return Object(i.jsx)("div",{className:"app",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(b,{}),Object(i.jsx)(C,{}),Object(i.jsx)(l,{})]})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.17489bbb.chunk.js.map