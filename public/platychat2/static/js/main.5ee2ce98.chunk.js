(this["webpackJsonpplatychat-react"]=this["webpackJsonpplatychat-react"]||[]).push([[0],{179:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),s=a.n(c),r=a(14),o=a.n(r),i=a(5),l=a(33),u=a.n(l),j=a(109),b=a(18),d=a(75);a(141);d.a.initializeApp({apiKey:"AIzaSyCSqIX7JgOxs-W0KSP11rWgg_Smyq3dRr0",authDomain:"platychat.firebaseapp.com",databaseURL:"https://platychat.firebaseio.com",projectId:"platychat",storageBucket:"platychat.appspot.com",messagingSenderId:"540254856882",appId:"1:540254856882:web:5eb0db85a5670ceb77cbab"});var O=d.a.auth(),m=(d.a,a(17)),h=a(219),x=a(31),p=a(28),f=a(210),g=a(76),v=a(223),k=a(212),S=a(208),y=Object(S.a)((function(e){return{root:{padding:"20px"},formElement:{width:"100%"},button:{backgroundColor:e.palette.primary.main,color:"#fff","&:hover":{color:"#000"}}}})),C={xs:12,sm:12,md:6,lg:6,xl:6},E=Object(m.g)((function(e){var t=e.history,a=y(),c=s.a.useState({username:"",password:""}),r=Object(p.a)(c,2),o=r[0],l=r[1],u=function(e){var t=e.target,a=t.value,n=t.name;l(Object(i.a)(Object(i.a)({},o),{},Object(x.a)({},n,a)))};return Object(n.jsx)("form",{className:a.root,onSubmit:function(e){e.preventDefault(),O.signInWithEmailAndPassword(o.username,o.password),t.push("/convos")},children:Object(n.jsxs)(f.a,{container:!0,spacing:2,direction:"column",alignContent:"center",children:[Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(n.jsxs)(g.a,{variant:"h5",style:{textAlign:"center"},children:["Platychat ",Object(n.jsx)("span",{children:"\ud83e\udd86"})]})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(n.jsx)(v.a,{name:"username",variant:"outlined",size:"small",placeholder:"username",value:o.username,onChange:u,className:a.formElement})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(n.jsx)(v.a,{name:"password",type:"password",variant:"outlined",placeholder:"password",size:"small",value:o.password,onChange:u,className:a.formElement})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(n.jsx)(k.a,{className:"".concat(a.button," ").concat(a.formElement),type:"submit",variant:"contained",children:"Login"})}))]})})})),w=a(217),N=a(211),M=a(213),R=a(214),A=a(215),I=a(216),T=a(114),W=a.n(T),D=Object(b.b)((function(e){return{socket:e.socket.socket,user:e.base.user}}))((function(e){var t=e.user,a=e.socket,c=e.convo,s=e.history;return Object(n.jsxs)(M.a,{button:!0,onClick:function(){a.emit("convo-join-request",t.token,t.uid,c.convoid),s.push("/messages/".concat(c.convoid))},children:[Object(n.jsx)(R.a,{children:Object(n.jsx)(A.a,{badgeContent:c.unreadCount,color:"primary",children:Object(n.jsx)(W.a,{})})}),Object(n.jsx)(I.a,{primary:c.convoname,secondary:c.participants})]})})),L=Object(S.a)({root:{padding:"20px"},convoList:{maxHeight:"240px",overflowY:"auto"},input:{height:38}}),_={xs:12,sm:12,md:12,lg:12,xl:12},q=Object(b.b)((function(e){return{convos:e.messages.convos,user:e.base.user,socket:e.socket.socket}}))(Object(m.g)((function(e){var t=e.history,a=e.convos,c=e.user,r=e.socket,o=L(),l=s.a.useState({convoName:"",messagesFilter:""}),u=Object(p.a)(l,2),j=u[0],b=u[1],d=function(e){var t=e.target,a=t.name,n=t.value;b(Object(i.a)(Object(i.a)({},j),{},Object(x.a)({},a,n)))};return Object(n.jsx)(w.a,{className:o.root,children:Object(n.jsxs)(f.a,{container:!0,spacing:1,children:[Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},_),{},{children:Object(n.jsx)(g.a,{variant:"h6",children:"Messages"})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},_),{},{children:Object(n.jsxs)(f.a,{container:!0,children:[Object(n.jsx)(f.a,{item:!0,xs:10,sm:10,md:10,lg:10,xl:10,children:Object(n.jsx)(v.a,{InputProps:{className:o.input},name:"convoName",fullWidth:!0,variant:"outlined",placeholder:"Convo Name...",onChange:d,value:j.convoName})}),Object(n.jsx)(f.a,{item:!0,xs:2,sm:2,md:2,lg:2,xl:2,children:Object(n.jsx)(k.a,{fullWidth:!0,onClick:function(){r.emit("convo-create-request",c.token,c.uid,j.convoName),b(Object(i.a)(Object(i.a)({},j),{},{convoName:""}))},children:"Add"})})]})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},_),{},{children:Object(n.jsxs)(f.a,{container:!0,children:[Object(n.jsx)(f.a,{item:!0,xs:10,sm:10,md:10,lg:10,xl:10,children:Object(n.jsx)(v.a,{InputProps:{className:o.input},name:"messagesFilter",fullWidth:!0,variant:"outlined",placeholder:"Search...",value:j.messagesFilter,onChange:d})}),Object(n.jsx)(f.a,{item:!0,xs:2,sm:2,md:2,lg:2,xl:2,children:Object(n.jsx)(k.a,{className:o.input,fullWidth:!0,children:"Filter"})})]})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({className:o.convoList,item:!0},_),{},{children:Object(n.jsx)(N.a,{dense:!0,children:Object.keys(a).map((function(e,c){return Object(n.jsx)(D,{convo:a[e],history:t},c)}))})}))]})})}))),F=Object(S.a)({root:{padding:"20px"},messageResults:{maxHeight:"240px",overflowY:"auto"},input:{height:38}}),U={xs:12,sm:12,md:12,lg:12,xl:12},P=Object(b.b)((function(e){return{socket:e.socket.socket,user:e.base.user,messageSearchResults:e.messages.messageSearchResults}}))((function(e){var t=e.socket,a=e.user,c=e.messageSearchResults,r=F(),o=s.a.useState(""),l=Object(p.a)(o,2),u=l[0],j=l[1];return Object(n.jsx)(w.a,{className:r.root,children:Object(n.jsxs)(f.a,{container:!0,spacing:1,children:[Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},U),{},{children:Object(n.jsx)(v.a,{name:"searchMessages",value:u,onChange:function(e){return j(e.target.value)},fullWidth:!0})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},U),{},{children:Object(n.jsx)(k.a,{fullWidth:!0,variant:"contained",onClick:function(){t&&a&&t.emit("convo-search-request",a.token,a.uid,u),j("")},children:"Search"})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({className:r.messageResults,item:!0},U),{},{children:Object(n.jsx)(N.a,{dense:!0,children:c?c.map((function(e,t){return Object(n.jsx)(M.a,{children:Object(n.jsx)(I.a,{children:"".concat(e.alias," (").concat(e.timestamp,") - ").concat(e.rawtext)})},t)})):null})}))]})})})),B=a(225),G="[BASE] SET_DARK_MODE_ENABLED",J="[BASE] SET_USER",K="lollllllll stay mad idiots, im forcing a rerender using redux, stay mad",z=function(e){return{type:J,payload:e}},H={darkModeEnabled:!1,user:null},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case K:return e;case G:return Object(i.a)(Object(i.a)({},e),{},{darkModeEnabled:n});case J:return Object(i.a)(Object(i.a)({},e),{},{user:n});default:return e}},Y=Object(S.a)({root:{padding:"20px"},input:{height:38}}),X={xs:12,sm:12,md:12,lg:12,xl:12},Q=Object(b.b)((function(e){return{darkModeEnabled:e.base.darkModeEnabled,socket:e.socket.socket,user:e.base.user}}),(function(e){return{setDarkModeEnabled:function(t){return e(function(e){return{type:G,payload:e}}(t))}}}))((function(e){var t=e.darkModeEnabled,a=e.setDarkModeEnabled,c=e.socket,r=e.user,o=Y(),l=s.a.useState(""),u=Object(p.a)(l,2),j=u[0],b=u[1],d=s.a.useState(""),O=Object(p.a)(d,2),m=O[0],h=O[1];return Object(n.jsx)(w.a,{className:o.root,children:Object(n.jsxs)(f.a,{container:!0,children:[Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},X),{},{children:Object(n.jsx)(g.a,{variant:"h6",children:"Settings"})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},X),{},{children:Object(n.jsxs)(f.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(f.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(n.jsx)(g.a,{children:"Dark Mode"})}),Object(n.jsx)(f.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(n.jsx)(B.a,{checked:t,onChange:function(e,t){a(t)}})})]})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},X),{},{children:Object(n.jsxs)(f.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(f.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:6,children:Object(n.jsx)(g.a,{children:"Alias"})}),Object(n.jsx)(f.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(n.jsx)(v.a,{name:"alias",value:j,onChange:function(e){return b(e.target.value)},fullWidth:!0})}),Object(n.jsx)(f.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:3,children:Object(n.jsx)(k.a,{onClick:function(){r&&r.token&&c&&c.emit("user-alias-request",r.token,r.uid,j),b("")},fullWidth:!0,children:"Set"})})]})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},X),{},{children:Object(n.jsxs)(f.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(f.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:6,children:Object(n.jsx)(g.a,{children:"Color"})}),Object(n.jsx)(f.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(n.jsx)(v.a,{name:"color",placeholder:"#123abf",value:m,fullWidth:!0,onChange:function(e){return h(e.target.value)}})}),Object(n.jsx)(f.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:3,children:Object(n.jsx)(k.a,{onClick:function(){r&&r.token&&c&&c.emit("user-color-request",r.token,r.uid,m),h("")},fullWidth:!0,children:"Set"})})]})}))]})})})),Z=Object(S.a)((function(e){return{root:{padding:"20px"}}})),$={xs:12,sm:12,md:4,lg:4,xl:4},ee={xs:12,sm:12,md:12,lg:12,xl:12},te=Object(b.b)((function(e){return{socket:e.socket.socket,user:e.base.user,convos:e.messages.convos}}))(Object(m.g)((function(e){var t=e.history,a=e.socket,c=e.user;s.a.useEffect((function(){a&&c&&a.emit("convo-list-request",c.token,c.uid)}),[a,c]);var r=Z();return Object(n.jsxs)(f.a,{className:r.root,container:!0,spacing:1,children:[Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},ee),{},{children:Object(n.jsx)(k.a,{fullWidth:!0,onClick:function(){O.signOut(),t.push("/login")},children:"Sign Out"})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},$),{},{children:Object(n.jsx)(q,{})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},$),{},{children:Object(n.jsx)(P,{})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},$),{},{children:Object(n.jsx)(Q,{})}))]})}))),ae=a(24),ne=a(74),ce=a(120),se=a(61),re=a(115),oe=Object(re.io)("https://localhost:443"),ie=a(176),le="[SOCKET] SET_SOCKET",ue="[SOCKET] CONVO_LIST_RESPONSE",je={socket:oe,uploader:new ie(oe)},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case le:return Object(i.a)(Object(i.a)({},e),{},{socket:n});default:return e}},de="[MESSAGES] SET_CONVOS",Oe="[MESSAGES] SET_MESSAGE_SEARCH_RESULTS",me="[MESSAGES] SET_CURRENT_CONVOID",he=function(e){return{type:de,payload:e}},xe={convos:{},currentConvoid:null,messageSearchResults:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case de:return Object(i.a)(Object(i.a)({},e),{},{convos:n});case me:return Object(i.a)(Object(i.a)({},e),{},{currentConvoid:n});case Oe:return Object(i.a)(Object(i.a)({},e),{},{messageSearchResults:n});default:return e}},fe=u.a.mark(ve),ge=u.a.mark(ke);function ve(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(ue,u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,e.next=3,Object(se.c)(he(a));case 3:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),fe)}function ke(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.a)([Object(se.b)(ve)]);case 2:case"end":return e.stop()}}),ge)}var Se=a(116),ye={key:"root",storage:a.n(Se).a,whitelist:["base","messages"]},Ce=Object(ae.c)({base:V,messages:pe,socket:be}),Ee=Object(ne.a)(ye,Ce),we=Object(ce.a)(),Ne=[we],Me=Object(ae.e)(Ee,ae.a.apply(void 0,Ne));we.run(ke);var Re=Object(ne.b)(Me),Ae=a(224),Ie=a(218),Te=Object(S.a)((function(e){return{root:{padding:"20px",height:"98vh"},messages:{height:"80vh",overflowY:"auto"},inputGroup:{height:"10vh"},input:{height:38},button:{backgroundColor:e.palette.primary.main,color:"#fff"}}})),We={xs:12,sm:12,md:12,lg:12,xl:12},De={xs:10,sm:10,md:10,lg:10,xl:10},Le={xs:2,sm:2,md:2,lg:2,xl:2},_e=Object(b.b)((function(e){return{user:e.base.user,socket:e.socket.socket,uploader:e.socket.uploader,convos:e.messages.convos,currentConvoid:e.messages.currentConvoid}}),(function(e){return{setCurrentConvoid:function(t){return e(function(e){return{type:me,payload:e}}(t))}}}))(Object(m.g)((function(e){var t=e.match,a=e.user,c=e.socket,r=e.uploader,o=e.convos,l=e.setCurrentConvoid,u=e.currentConvoid,j=t.url.split("/")[2],b=o[j],d=b?b.messages:[];s.a.useEffect((function(){setInterval((function(){var e=Me.getState().socket.socket;e&&e.emit("convo-join-request",a.token,a.uid,j)}),5e3)}),[]),s.a.useEffect((function(){l(j)}),[u]);var O=Te(),m=s.a.useState(""),h=Object(p.a)(m,2),x=h[0],g=h[1],S=s.a.useState(null),y=Object(p.a)(S,2),C=y[0],E=y[1];C&&C.scrollTo&&C.scrollTo({top:1e6});return Object(n.jsxs)(f.a,{className:O.root,container:!0,children:[Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({className:O.messages,item:!0},We),{},{ref:function(e){return E(e)},children:Object(n.jsx)(N.a,{dense:!0,children:d?d.map((function(e,t){var a=e.rawtext;return/images\/platychat.+/.test(a)&&(a=Object(n.jsxs)(Ae.a,{children:[Object(n.jsx)("br",{}),Object(n.jsx)("img",{src:"".concat("https://doxtu.me/platychat","/").concat(a)})]})),Object(n.jsxs)(M.a,{children:[Object(n.jsx)(Ie.a,{children:Object(n.jsx)("span",{children:"\ud83e\udd97"})}),Object(n.jsx)(I.a,{primary:Object(n.jsxs)(Ae.a,{children:[Object(n.jsx)("span",{style:{color:e.color},children:e.alias}),Object(n.jsx)("span",{children:" ".concat(e.timestamp," - ")}),Object(n.jsx)("span",{children:a})]})})]},t)})):null})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},We),{},{children:Object(n.jsx)("input",{name:"fileUpload",type:"file",onChange:function(e){for(var t=e.target.files,n=function(){o=t[s];var e=function(){for(var e="",t=0;t<9;t++)e+=Math.round(9*Math.random()).toString();return e}();o.meta=e,(i=new FileReader).onload=function(t){c.emit("convo-message-request",a.token,a.uid,u,"/image "+e),r.submitFiles([o])},i.readAsDataURL(o)},s=0;s<t.length;s++){var o,i;n()}}})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({className:O.inputGroup,item:!0},We),{},{children:Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),c&&a&&(c.emit("convo-message-request",a.token,a.uid,j,x),g(""))},children:Object(n.jsxs)(f.a,{container:!0,spacing:1,alignItems:"center",justify:"center",children:[Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},De),{},{children:Object(n.jsx)(v.a,{InputProps:{className:O.input},name:"message",value:x,variant:"outlined",fullWidth:!0,onChange:function(e){var t=e.target.value;g(t)}})})),Object(n.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},Le),{},{children:Object(n.jsx)(k.a,{className:"".concat(O.input," ").concat(O.button),fullWidth:!0,type:"submit",variant:"outlined",children:"Send"})}))]})})}))]})}))),qe="/platychat2",Fe=Object(b.b)((function(e){return{user:e.base.user}}))(Object(m.g)((function(e){e.location,e.match;var t=e.user;return Object(n.jsx)(h.a,{className:"App",children:Object(n.jsxs)(m.d,{children:[Object(n.jsx)(m.b,{exact:!0,path:"".concat(qe),render:function(){return t?Object(n.jsx)(m.a,{to:"".concat(qe,"/convos")}):Object(n.jsx)(m.a,{to:"".concat(qe,"/login")})}}),Object(n.jsx)(m.b,{exact:!0,path:"/login",render:function(){return t?Object(n.jsx)(m.a,{to:"".concat(qe,"/convos")}):Object(n.jsx)(E,{})}}),Object(n.jsx)(m.b,{exact:!0,path:"".concat(qe,"/convos"),component:te}),Object(n.jsx)(m.b,{exact:!0,path:"".concat(qe,"/messages/:convoid"),component:_e})]})})}))),Ue=a(46),Pe=a(119);console.warn=function(){};var Be=Object(b.b)((function(e){return{user:e.base.user,socket:e.socket.socket,convos:e.messages.convos}}),(function(e){return{convoListResponse:function(t){return e(function(e){return{type:ue,payload:e}}(t))},setConvos:function(t){return e(he(t))},setUser:function(t){return e(z(t))},forceRerender:function(){return e({type:K,payload:Math.random()})},setMessageSearchResults:function(t){return e(function(e){return{type:Oe,payload:e}}(t))}}}))((function(e){var t=e.user,a=e.socket,n=e.convoListResponse,c=e.setConvos,r=e.forceRerender,o=e.setMessageSearchResults;return s.a.useEffect((function(){a&&(a.on("login-response",(function(e){t&&z(Object(i.a)(Object(i.a)({},t),{},{color:e}))})),a.on("convo-list-response",(function(e){var t=JSON.parse(e).reduce((function(e,t){return e[t.convoid]=t,e}),{});n(t)})),a.on("convo-create-response",(function(e,t){var a=Me.getState().messages.convos;c(Object(i.a)(Object(i.a)({},a),{},Object(x.a)({},e,{convoid:e,convoname:t})))})),a.on("convo-join-response",(function(e,t){c(Object(i.a)(Object(i.a)({},Me.getState().messages.convos),{},Object(x.a)({},e,Object(i.a)(Object(i.a)({},Me.getState().messages.convos[e]),{},{messages:JSON.parse(t)}))))})),a.on("convo-message-incoming",(function(e,t,a,n,s,r){var o=Me.getState().messages.convos;c(Object(i.a)(Object(i.a)({},o),{},Object(x.a)({},e,Object(i.a)(Object(i.a)({},o[e]),{},{messages:[].concat(Object(Pe.a)(o[e].messages?o[e].messages:[]),[{convoid:e,todayString:t,alias:a,color:n,timestamp:s,rawtext:r}])}))))})),a.on("convo-search-response",(function(e){o(JSON.parse(e))})),window.addEventListener("paste",(function(e){for(var t,n=Me.getState().messages.currentConvoid,c=e.clipboardData.items,s=0;s<c.length;s++)if("file"===c[s].kind){t=c[s].getAsFile();break}if("undefined"!==typeof t){var r=new FileReader,o=function(){for(var e="",t=0;t<9;t++)e+=Math.round(9*Math.random()).toString();return e}();t.meta=o,r.onload=function(e){a.emit("convo-message-request",Me.getState().base.user.token,Me.getState().base.user.uid,n,"/image "+o),Me.getState().socket.uploader.submitFiles([t])},r.readAsDataURL(t)}})))}),[a,z,r]),null})),Ge=a(220),Je=a(118),Ke=a(221),ze=a(222),He={palette:{primary:{main:"#7703fc"},secondary:{main:"#333"}}};var Ve=Object(b.b)((function(e){return{darkModeEnabled:e.base.darkModeEnabled,user:e.base.user,socket:e.socket.socket,convos:e.messages.convos}}),(function(e){return{setUser:function(t){return e(z(t))},setConvos:function(t){return e(he(t))}}}))((function(e){var t=e.socket,a=e.user,c=e.darkModeEnabled,r=e.setUser,o=(e.setConvos,Object(Ge.a)("(prefers-color-scheme: dark)"));s.a.useEffect((function(){O.onAuthStateChanged(function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",r(t));case 2:return e.next=4,t.getIdToken(!0);case 4:a=e.sent,t.token=a,r(t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t&&a&&t.emit("login-request",a.token,a.uid)}),[t,a,r]);var l=s.a.useMemo((function(){return Object(Je.a)(Object(i.a)(Object(i.a)({},He),{},{palette:Object(i.a)(Object(i.a)({},He.palette),{},{type:o||c?"dark":"light"})}))}),[o,c]);return Object(n.jsx)(Ue.a,{children:Object(n.jsxs)(Ke.a,{theme:l,children:[Object(n.jsx)(ze.a,{}),Object(n.jsx)(Be,{}),Object(n.jsx)(Fe,{})]})})})),Ye=a(117),Xe=(a(179),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,227)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))});o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b.a,{store:Me,children:Object(n.jsx)(Ye.a,{persistor:Re,children:Object(n.jsx)(Ve,{})})})}),document.getElementById("root")),Xe()}},[[180,1,2]]]);
//# sourceMappingURL=main.5ee2ce98.chunk.js.map