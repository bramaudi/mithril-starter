(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{22:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2);t(39);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c={view:function(e){var n=e.attrs,t=n.id,r=n.label,a=n.control;return o()(".form-group",[o()("label",{for:t},r),o()("input",s({},a))])}},p=(t(3),{username:"",password:"",failed:{status:!1,message:""}}),l=function(e,n){p[e]=n},f=function(e){e.preventDefault();var n=p.username,t=p.password;a.a.actions.login({username:n,password:t}).then((function(e){e?window.location.reload():l("failed",{status:!0,message:"Login failed, invalid credential."})}))},d={view:function(){return o()(".d-center.d-maximize",[o()(".card",[o()("h3","Login"),o()("p","Demo account:",o()("br"),"admin@admin123"),o()("form",{onsubmit:f},[o()(c,{id:"inp-user",label:"Username",control:{type:"text",name:"username",oninput:function(e){return l("username",e.target.value)}}}),o()(c,{id:"inp-pass",label:"Password",control:{type:"password",name:"password",oninput:function(e){return l("password",e.target.value)}}}),o()("button.btn","Login"),p.failed.status&&o()("p",p.failed.message)])])])}};n.default=d},39:function(e,n,t){}}]);