(this["webpackJsonpplatychat-react"]=this["webpackJsonpplatychat-react"]||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),s=n.n(a),r=n(14),o=n.n(r),i=n(4),l=n(34),u=n.n(l),j=n(79),d=n(16),b=n(66);n(110);b.a.initializeApp({apiKey:"AIzaSyCSqIX7JgOxs-W0KSP11rWgg_Smyq3dRr0",authDomain:"platychat.firebaseapp.com",databaseURL:"https://platychat.firebaseio.com",projectId:"platychat",storageBucket:"platychat.appspot.com",messagingSenderId:"540254856882",appId:"1:540254856882:web:5eb0db85a5670ceb77cbab"});var O=b.a.auth(),m=(b.a,n(18)),h=n(158),x=n(32),p=n(28),f=n(147),g=n(54),v=n(162),k=n(149),y=n(145),S=Object(y.a)((function(e){return{root:{padding:"20px"},formElement:{width:"100%"},button:{backgroundColor:e.palette.primary.main,color:"#fff","&:hover":{color:"#000"}}}})),C={xs:12,sm:12,md:6,lg:6,xl:6},E=Object(m.g)((function(e){var t=e.history,n=S(),a=s.a.useState({username:"",password:""}),r=Object(p.a)(a,2),o=r[0],l=r[1],u=function(e){var t=e.target,n=t.value,c=t.name;l(Object(i.a)(Object(i.a)({},o),{},Object(x.a)({},c,n)))};return Object(c.jsx)("form",{className:n.root,onSubmit:function(e){e.preventDefault(),O.signInWithEmailAndPassword(o.username,o.password),t.push("/convos")},children:Object(c.jsxs)(f.a,{container:!0,spacing:2,direction:"column",alignContent:"center",children:[Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(c.jsxs)(g.a,{variant:"h5",style:{textAlign:"center"},children:["Platychat ",Object(c.jsx)("span",{children:"\ud83e\udd86"})]})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(c.jsx)(v.a,{name:"username",variant:"outlined",size:"small",placeholder:"email",value:o.username,onChange:u,className:n.formElement})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(c.jsx)(v.a,{name:"password",type:"password",variant:"outlined",placeholder:"password",size:"small",value:o.password,onChange:u,className:n.formElement})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(c.jsx)(k.a,{className:"".concat(n.button," ").concat(n.formElement),type:"submit",variant:"contained",children:"Login"})}))]})})})),w=n(154),N=n(148),A=n(150),T=n(151),M=n(152),R=n(153),_=n(84),I=n.n(_),U=Object(d.b)((function(e){return{socket:e.socket.socket,isConnected:e.socket.isConnected,user:e.base.user}}))((function(e){var t=e.user,n=e.socket,a=e.isConnected,s=e.convo,r=e.history;return Object(c.jsxs)(A.a,{button:!0,onClick:function(){a&&(n.send(JSON.stringify({type:"convo-join-request",payload:{jwt:t.token,userid:t.uid,convoid:s.convoid}})),r.push("/messages/".concat(s.convoid)))},children:[Object(c.jsx)(T.a,{children:Object(c.jsx)(M.a,{badgeContent:s.unreadCount,color:"primary",children:Object(c.jsx)(I.a,{})})}),Object(c.jsx)(R.a,{primary:s.convoname,secondary:s.participants})]})})),J=Object(y.a)({root:{padding:"20px"},convoList:{maxHeight:"240px",overflowY:"auto"},input:{height:38}}),L={xs:12,sm:12,md:12,lg:12,xl:12},W=Object(d.b)((function(e){return{convos:e.messages.convos,user:e.base.user,socket:e.socket.socket,isConnected:e.socket.isConnected}}))(Object(m.g)((function(e){var t=e.history,n=e.convos,a=e.user,r=e.socket,o=e.isConnected,l=J(),u=s.a.useState({convoName:"",messagesFilter:""}),j=Object(p.a)(u,2),d=j[0],b=j[1],O=function(e){var t=e.target,n=t.name,c=t.value;b(Object(i.a)(Object(i.a)({},d),{},Object(x.a)({},n,c)))};return Object(c.jsx)(w.a,{className:l.root,children:Object(c.jsxs)(f.a,{container:!0,spacing:1,children:[Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},L),{},{children:Object(c.jsx)(g.a,{variant:"h6",children:"Messages"})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},L),{},{children:Object(c.jsxs)(f.a,{container:!0,children:[Object(c.jsx)(f.a,{item:!0,xs:10,sm:10,md:10,lg:10,xl:10,children:Object(c.jsx)(v.a,{InputProps:{className:l.input},name:"convoName",fullWidth:!0,variant:"outlined",placeholder:"Convo Name...",onChange:O,value:d.convoName})}),Object(c.jsx)(f.a,{item:!0,xs:2,sm:2,md:2,lg:2,xl:2,children:Object(c.jsx)(k.a,{fullWidth:!0,onClick:function(){r&&a&&o&&r.send(JSON.stringify({type:"convo-create-request",payload:{jwt:a.token,userid:a.uid,convoname:d.convoName}})),b(Object(i.a)(Object(i.a)({},d),{},{convoName:""}))},children:"Add"})})]})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},L),{},{children:Object(c.jsxs)(f.a,{container:!0,children:[Object(c.jsx)(f.a,{item:!0,xs:10,sm:10,md:10,lg:10,xl:10,children:Object(c.jsx)(v.a,{InputProps:{className:l.input},name:"messagesFilter",fullWidth:!0,variant:"outlined",placeholder:"Search...",value:d.messagesFilter,onChange:O})}),Object(c.jsx)(f.a,{item:!0,xs:2,sm:2,md:2,lg:2,xl:2,children:Object(c.jsx)(k.a,{className:l.input,fullWidth:!0,children:"Filter"})})]})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({className:l.convoList,item:!0},L),{},{children:Object(c.jsx)(N.a,{dense:!0,children:Object.keys(n).sort((function(e,t){return n[e].unreadCount>n[t].unreadCount?-1:n[e].unreadCount<n[t].unreadCount?1:0})).map((function(e,a){return Object(c.jsx)(U,{convo:n[e],history:t},a)}))})}))]})})}))),q=Object(y.a)({root:{padding:"20px"},messageResults:{maxHeight:"240px",overflowY:"auto"},input:{height:38}}),D={xs:12,sm:12,md:12,lg:12,xl:12},G=Object(d.b)((function(e){return{socket:e.socket.socket,isConnected:e.socket.isConnected,user:e.base.user,messageSearchResults:e.messages.messageSearchResults}}))((function(e){var t=e.socket,n=e.isConnected,a=e.user,r=e.messageSearchResults,o=q(),l=s.a.useState(""),u=Object(p.a)(l,2),j=u[0],d=u[1];return Object(c.jsx)(w.a,{className:o.root,children:Object(c.jsxs)(f.a,{container:!0,spacing:1,children:[Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},D),{},{children:Object(c.jsx)(v.a,{name:"searchMessages",value:j,onChange:function(e){return d(e.target.value)},fullWidth:!0})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},D),{},{children:Object(c.jsx)(k.a,{fullWidth:!0,variant:"contained",onClick:function(){t&&n&&a&&t.send(JSON.stringify({type:"convo-search-request",payload:{jwt:a.token,userid:a.uid,searchText:j}})),d("")},children:"Search"})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({className:o.messageResults,item:!0},D),{},{children:Object(c.jsx)(N.a,{dense:!0,children:r?r.map((function(e,t){return Object(c.jsx)(A.a,{children:Object(c.jsx)(R.a,{children:"".concat(e.alias," (").concat(e.timestamp,") - ").concat(e.rawtext)})},t)})):null})}))]})})})),P=n(164),z="[BASE] SET_DARK_MODE_ENABLED",K="[BASE] SET_USER",F="lollllllll stay mad idiots, im forcing a rerender using redux, stay mad",H=function(e){return{type:K,payload:e}},B={darkModeEnabled:!1,user:null,rerender:0},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case F:return e;case z:return Object(i.a)(Object(i.a)({},e),{},{darkModeEnabled:c});case K:return Object(i.a)(Object(i.a)({},e),{},{user:c});case F:return console.log("so mad"),Object(i.a)(Object(i.a)({},e),{},{rerender:c});default:return e}},Y=Object(y.a)({root:{padding:"20px"},input:{height:38}}),V={xs:12,sm:12,md:12,lg:12,xl:12},X=Object(d.b)((function(e){return{darkModeEnabled:e.base.darkModeEnabled,socket:e.socket.socket,isConnected:e.socket.isConnected,user:e.base.user}}),(function(e){return{setDarkModeEnabled:function(t){return e(function(e){return{type:z,payload:e}}(t))}}}))((function(e){var t=e.darkModeEnabled,n=e.setDarkModeEnabled,a=e.socket,r=e.isConnected,o=e.user,l=Y(),u=s.a.useState(""),j=Object(p.a)(u,2),d=j[0],b=j[1],O=s.a.useState(""),m=Object(p.a)(O,2),h=m[0],x=m[1];return Object(c.jsx)(w.a,{className:l.root,children:Object(c.jsxs)(f.a,{container:!0,children:[Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},V),{},{children:Object(c.jsx)(g.a,{variant:"h6",children:"Settings"})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},V),{},{children:Object(c.jsxs)(f.a,{container:!0,alignItems:"center",children:[Object(c.jsx)(f.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(c.jsx)(g.a,{children:"Dark Mode"})}),Object(c.jsx)(f.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(c.jsx)(P.a,{checked:t,onChange:function(e,t){n(t)}})})]})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},V),{},{children:Object(c.jsxs)(f.a,{container:!0,alignItems:"center",children:[Object(c.jsx)(f.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:6,children:Object(c.jsx)(g.a,{children:"Alias"})}),Object(c.jsx)(f.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(c.jsx)(v.a,{name:"alias",value:d,onChange:function(e){return b(e.target.value)},fullWidth:!0})}),Object(c.jsx)(f.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:3,children:Object(c.jsx)(k.a,{onClick:function(){o&&o.token&&a&&r&&a.send(JSON.stringify({type:"user-alias-request",payload:{jwt:o.token,userid:o.uid,alias:d}})),b("")},fullWidth:!0,children:"Set"})})]})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},V),{},{children:Object(c.jsxs)(f.a,{container:!0,alignItems:"center",children:[Object(c.jsx)(f.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:6,children:Object(c.jsx)(g.a,{children:"Color"})}),Object(c.jsx)(f.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(c.jsx)(v.a,{name:"color",placeholder:"#123abf",value:h,fullWidth:!0,onChange:function(e){return x(e.target.value)}})}),Object(c.jsx)(f.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:3,children:Object(c.jsx)(k.a,{onClick:function(){o&&o.token&&a&&a.send(JSON.stringify({type:"user-color-request",payload:{jwt:o.token,userid:o.uid,color:h}})),x("")},fullWidth:!0,children:"Set"})})]})}))]})})})),Q=Object(y.a)({root:{padding:"20px",maxHeight:"480px",overflowY:"auto"},img:{width:"100%"}}),$={xs:12,sm:12,md:3,lg:3,xl:3},ee=Object(d.b)((function(e){return{user:e.base.user,socket:e.socket.socket,isConnected:e.socket.isConnected,urls:e.messages.galleryUrls}}))((function(e){var t=e.socket,n=e.isConnected,a=e.user,r=e.urls,o=Q();return s.a.useEffect((function(){t&&n&&a&&t.send(JSON.stringify({type:"convo-gallery-request",payload:{jwt:a.token,userid:a.uid}}))}),[t,n,a]),Object(c.jsx)(w.a,{className:o.root,children:Object(c.jsx)(f.a,{container:!0,spacing:1,alignItems:"center",children:r?r.map((function(e,t){return Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},$),{},{children:Object(c.jsx)("img",{className:o.img,alt:"happy-face",src:"".concat("https://doxtu.me","/platychat/").concat(e.rawtext)})}),t)})):null})})})),te=n(155),ne=Object(y.a)({root:{padding:"20px"},alignText:{textAlign:"center"}}),ce=Object(d.b)((function(e){return{user:e.base.user,socket:e.socket.socket,isConnected:e.socket.isConnected,suckCount:e.messages.suckCount}}))((function(e){var t=e.user,n=e.socket,a=e.isConnected,s=e.suckCount,r=ne();return Object(c.jsx)(w.a,{className:r.root,children:Object(c.jsxs)(f.a,{container:!0,direction:"column",alignItems:"center",children:[Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(g.a,{variant:"h6",children:"SUCK COUNTER"})}),Object(c.jsx)(f.a,{item:!0,children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)("span",{children:"\ud83d\ude1b"}),Object(c.jsx)("span",{children:"\ud83d\ude1b"}),Object(c.jsx)("span",{children:"\ud83d\ude1b"})]})}),Object(c.jsx)(f.a,{item:!0,style:{width:"100%"},children:Object(c.jsxs)(f.a,{container:!0,spacing:1,alignItems:"center",children:[Object(c.jsx)(f.a,{item:!0,xs:2,sm:2,md:2,lg:2,xl:2,children:Object(c.jsx)(te.a,{color:"primary",onClick:function(){n&&a&&t&&n.send(JSON.stringify({type:"suck-increment-request",payload:{jwt:t.token,userid:t.uid,valueToAdd:-1}}))},children:"OPPS"})}),Object(c.jsx)(f.a,{item:!0,xs:8,sm:8,md:8,lg:8,xl:8,children:Object(c.jsx)(g.a,{className:r.alignText,variant:"h1",children:s})}),Object(c.jsx)(f.a,{item:!0,xs:2,sm:2,md:2,lg:2,xl:2,children:Object(c.jsx)(te.a,{color:"primary",onClick:function(){n&&a&&t&&n.send(JSON.stringify({type:"suck-increment-request",payload:{jwt:t.token,userid:t.uid,valueToAdd:1}}))},children:"SUCK"})})]})})]})})})),ae=Object(y.a)((function(e){return{root:{padding:"20px"}}})),se={xs:12,sm:12,md:4,lg:4,xl:4},re={xs:12,sm:12,md:12,lg:12,xl:12},oe=Object(d.b)((function(e){return{socket:e.socket.socket,user:e.base.user,isConnected:e.socket.isConnected,convos:e.messages.convos}}))(Object(m.g)((function(e){var t=e.history,n=e.socket,a=e.isConnected,r=e.user;s.a.useEffect((function(){n&&r&&a&&(n.send(JSON.stringify({type:"convo-list-request",payload:{jwt:r.token,userid:r.uid}})),n.send(JSON.stringify({type:"suck-counter-request",payload:{jwt:r.token,userid:r.uid}})))}),[n,a,r]);var o=ae();return Object(c.jsxs)(f.a,{className:o.root,container:!0,spacing:1,children:[Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},re),{},{children:Object(c.jsx)(k.a,{fullWidth:!0,onClick:function(){O.signOut(),localStorage.clear(),t.push("/login")},children:"Sign Out"})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},se),{},{children:Object(c.jsx)(W,{})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},se),{},{children:Object(c.jsx)(G,{})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},se),{},{children:Object(c.jsx)(X,{})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},re),{},{children:Object(c.jsx)(ee,{})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},se),{},{children:Object(c.jsx)(ce,{})}))]})}))),ie=n(163),le=n(156),ue=n(157),je=Object(y.a)((function(e){return{root:{padding:"20px",height:"90vh"},messages:{height:"80vh",overflowY:"auto"},inputGroup:{height:"10vh"},input:{height:38},button:{backgroundColor:e.palette.primary.main,color:"#fff"}}})),de="[MESSAGES] SET_CONVOS",be="[MESSAGES] SET_MESSAGE_SEARCH_RESULTS",Oe="[MESSAGES] SET_CURRENT_CONVOID",me="[MESSAGES] SET_GALLERY_URLS",he="[MESSAGES] SET_SUCK_COUNTER",xe=function(e){return{type:de,payload:e}},pe={convos:{},currentConvoid:null,messageSearchResults:[],galleryUrls:[],suckCount:0},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case de:return Object(i.a)(Object(i.a)({},e),{},{convos:c});case Oe:return Object(i.a)(Object(i.a)({},e),{},{currentConvoid:c});case be:return Object(i.a)(Object(i.a)({},e),{},{messageSearchResults:c});case me:return Object(i.a)(Object(i.a)({},e),{},{galleryUrls:c});case he:return Object(i.a)(Object(i.a)({},e),{},{suckCount:c});default:return e}},ge={xs:12,sm:12,md:12,lg:12,xl:12},ve={xs:10,sm:10,md:10,lg:10,xl:10},ke={xs:2,sm:2,md:2,lg:2,xl:2},ye=Object(d.b)((function(e){return{user:e.base.user,socket:e.socket.socket,isConnected:e.socket.isConnected,uploader:e.socket.uploader,convos:e.messages.convos,currentConvoid:e.messages.currentConvoid}}),(function(e){return{setCurrentConvoid:function(t){return e(function(e){return{type:Oe,payload:e}}(t))}}}))(Object(m.g)((function(e){var t=e.match,n=e.user,a=e.socket,r=e.isConnected,o=(e.uploader,e.convos),l=e.setCurrentConvoid,u=e.currentConvoid,j=t.url.split("/")[2],d=o[j],b=d?d.messages:[];s.a.useEffect((function(){l(j)}),[u]),s.a.useEffect((function(){a&&n&&r&&a.send(JSON.stringify({type:"convo-join-request",payload:{jwt:n.token,userid:n.uid,convoid:u}}))}),[a,r,n]);var O=je(),m=s.a.useState(""),h=Object(p.a)(m,2),x=h[0],g=h[1],y=s.a.useState(null),S=Object(p.a)(y,2),C=S[0],E=S[1];s.a.useEffect((function(){C&&C.scrollTo&&C.scrollTo({top:1e6})}),[C,o]);return Object(c.jsxs)(f.a,{className:O.root,container:!0,children:[Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({className:O.messages,item:!0},ge),{},{ref:function(e){return E(e)},children:Object(c.jsx)(N.a,{dense:!0,children:b?b.map((function(e,t){var n=e.rawtext;if(/images\/platychat.+/.test(n)&&(n=Object(c.jsxs)(ie.a,{children:[Object(c.jsx)("br",{}),Object(c.jsx)("img",{src:"".concat("https://doxtu.me/platychat","/").concat(n),style:{width:"100%"}})]})),/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(n)){var a=n.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);a.forEach((function(e){n=n.replace(e,"~")}));var s=n.split("~");n=Object(c.jsx)("span",{children:s.map((function(e,t){return Object(c.jsxs)("span",{children:[e,a[t]?Object(c.jsx)(le.a,{href:a[t],target:"_blank",children:a[t]}):null," "]},t)}))})}return Object(c.jsxs)(A.a,{children:[Object(c.jsx)(ue.a,{children:Object(c.jsx)("span",{children:"\ud83e\udd97"})}),Object(c.jsx)(R.a,{primary:Object(c.jsxs)(ie.a,{children:[Object(c.jsx)("span",{style:{color:e.color},children:e.alias}),Object(c.jsx)("span",{children:" ".concat(e.timestamp," - ")}),Object(c.jsx)("span",{children:n})]})})]},t)})):null})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},ge),{},{children:Object(c.jsx)("input",{name:"fileUpload",type:"file",onChange:function(e){for(var t=e.target.files,n=0;n<t.length;n++){var c=t[n],a=function(){for(var e="",t=0;t<9;t++)e+=Math.round(9*Math.random()).toString();return e}();c.meta=a;var s=new FileReader;s.onload=function(e){},s.readAsDataURL(c)}}})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({className:O.inputGroup,item:!0},ge),{},{children:Object(c.jsx)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),a&&r&&n&&(a.send(JSON.stringify({type:"convo-message-request",payload:{jwt:n.token,userid:n.uid,convoid:j,rawtext:x}})),g(""))},children:Object(c.jsxs)(f.a,{container:!0,spacing:1,alignItems:"center",justify:"center",children:[Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},ve),{},{children:Object(c.jsx)(v.a,{InputProps:{className:O.input},name:"message",value:x,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:function(e){var t=e.target.value;g(t)}})})),Object(c.jsx)(f.a,Object(i.a)(Object(i.a)({item:!0},ke),{},{children:Object(c.jsx)(k.a,{className:"".concat(O.input," ").concat(O.button),fullWidth:!0,type:"submit",variant:"outlined",children:"Send"})}))]})})}))]})}))),Se=Object(d.b)((function(e){return{user:e.base.user}}))((function(e){var t=e.user;return Object(c.jsx)(h.a,{className:"App",children:Object(c.jsxs)(m.d,{children:[Object(c.jsx)(m.b,{exact:!0,path:"/",render:function(){return t?Object(c.jsx)(m.a,{to:"/convos"}):Object(c.jsx)(m.a,{to:"/login"})}}),Object(c.jsx)(m.b,{exact:!0,path:"/login",render:function(){return t?Object(c.jsx)(m.a,{to:"/convos"}):Object(c.jsx)(E,{})}}),Object(c.jsx)(m.b,{exact:!0,path:"/convos",render:function(){return t?Object(c.jsx)(oe,{}):Object(c.jsx)(m.a,{to:"/login"})}}),Object(c.jsx)(m.b,{exact:!0,path:"/messages/:convoid",render:function(){return t?Object(c.jsx)(ye,{}):Object(c.jsx)(m.a,{to:"/login"})}})]})})})),Ce=n(43),Ee=n(88),we=n(24),Ne=n(65),Ae=n(89),Te=n(53),Me=new WebSocket("wss://doxtu.me"),Re="[SOCKET] SET_SOCKET",_e="[SOCKET] SET_IS_CONNECTED",Ie="[SOCKET] CONVO_LIST_RESPONSE",Ue={socket:Me,isConnected:!1},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case Re:return Object(i.a)(Object(i.a)({},e),{},{socket:c});case _e:return Object(i.a)(Object(i.a)({},e),{},{isConnected:c});default:return e}},Le=u.a.mark(qe),We=u.a.mark(De);function qe(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)(Ie,u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.next=3,Object(Te.c)(xe(n));case 3:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),Le)}function De(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.a)([Object(Te.b)(qe)]);case 2:case"end":return e.stop()}}),We)}var Ge=n(85),Pe={key:"root",storage:n.n(Ge).a,whitelist:["base","messages"]},ze=Object(we.c)({base:Z,messages:fe,socket:Je}),Ke=Object(Ne.a)(Pe,ze),Fe=Object(Ae.a)(),He=[Fe],Be=Object(we.e)(Ke,we.a.apply(void 0,He));Fe.run(De);var Ze,Ye=Object(Ne.b)(Be);console.warn=function(){},void 0!==typeof document.hidden?("hidden",Ze="visibilitychange"):"undefined"!==typeof document.msHidden?("msHidden",Ze="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&("webkitHidden",Ze="webkitvisibilitychange");var Ve=Object(d.b)((function(e){return{user:e.base.user,socket:e.socket.socket,isConnected:e.socket.isConnected,convos:e.messages.convos}}),(function(e){return{convoListResponse:function(t){return e(function(e){return{type:Ie,payload:e}}(t))},setConvos:function(t){return e(xe(t))},setUser:function(t){return e(H(t))},setMessageSearchResults:function(t){return e(function(e){return{type:be,payload:e}}(t))},setSocket:function(t){return e(function(e){return{type:Re,payload:e}}(t))},setGalleryUrls:function(t){return e(function(e){return{type:me,payload:e}}(t))},setSuckCounter:function(t){return e(function(e){return{type:he,payload:e}}(t))},setIsConnected:function(t){return e(function(e){return{type:_e,payload:e}}(t))}}}))((function(e){var t=e.user,n=e.socket,c=e.isConnected,a=e.convoListResponse,r=e.setConvos,o=(e.setSocket,e.setIsConnected),l=e.setMessageSearchResults,u=e.setGalleryUrls,j=e.setSuckCounter;return s.a.useEffect((function(){n&&(n.onopen=function(){o(!0)},n.onmessage=function(e){var n=e.data,s=(n=JSON.parse(n)).type,o=n.payload;switch(s){case"login-response":if(!t)return;H(Object(i.a)(Object(i.a)({},t),{},{color:o.color}));break;case"convo-list-response":var d=o.convos.reduce((function(e,t){return e[t.convoid]=t,e}),{});a(d);break;case"convo-gallery-response":var b=o.imageUrls;u(b);break;case"convo-create-response":var O=Be.getState().messages.convos;r(Object(i.a)(Object(i.a)({},O),{},Object(x.a)({},o.convoid,{convoid:o.convoid,convoname:o.convoname})));break;case"convo-join-response":r(Object(i.a)(Object(i.a)({},Be.getState().messages.convos),{},Object(x.a)({},o.convoid,Object(i.a)(Object(i.a)({},Be.getState().messages.convos[o.convoid]),{},{messages:o.messages}))));break;case"convo-message-response":break;case"convo-message-incoming":var m=Be.getState().messages.convos;r(Object(i.a)(Object(i.a)({},m),{},Object(x.a)({},o.convoid,Object(i.a)(Object(i.a)({},m[o.convoid]),{},{messages:[].concat(Object(Ee.a)(m[o.convoid].messages?m[o.convoid].messages:[]),[{convoid:o.convoid,todayString:o.todayString,alias:o.alias,color:o.color,timestamp:o.timestamp,rawtext:o.rawtext}])}))));break;case"convo-search-response":l(o.messages);break;case"convo-image-response":var h=Be.getState().messages.currentConvoid,p=Be.getState().base.user,f=Be.getState().socket.socket;f&&p&&c&&f.send(JSON.stringify({type:"convo-join-request",payload:{jwt:p.token,userid:p.uid,convoid:h}}));break;case"suck-counter-response":j(o.count)}})}),[n,H]),s.a.useEffect((function(){window.addEventListener("focus",(function(){})),document.addEventListener(Ze,(function(){}))}),[]),null})),Xe=n(159),Qe=n(87),$e=n(160),et=n(161),tt={palette:{primary:{main:"#7703fc"},secondary:{main:"#333"}}};var nt=Object(d.b)((function(e){return{darkModeEnabled:e.base.darkModeEnabled,user:e.base.user,socket:e.socket.socket,isConnected:e.socket.isConnected,convos:e.messages.convos}}),(function(e){return{setUser:function(t){return e(H(t))},setConvos:function(t){return e(xe(t))}}}))((function(e){var t=e.socket,n=e.isConnected,a=e.user,r=e.darkModeEnabled,o=e.setUser,l=(e.setConvos,Object(Xe.a)("(prefers-color-scheme: dark)"));s.a.useEffect((function(){O.onAuthStateChanged(function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",o(t));case 2:return e.next=4,t.getIdToken(!0);case 4:n=e.sent,t.token=n,o(t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),s.a.useEffect((function(){t&&a&&n&&t.send(JSON.stringify({type:"login-request",payload:{jwt:a.token,userid:a.uid}}))}),[t,a]);var d=s.a.useMemo((function(){return Object(Qe.a)(Object(i.a)(Object(i.a)({},tt),{},{palette:Object(i.a)(Object(i.a)({},tt.palette),{},{type:l||r?"dark":"light"})}))}),[l,r]);return Object(c.jsx)(Ce.a,{basename:"/platychat",children:Object(c.jsxs)($e.a,{theme:d,children:[Object(c.jsx)(et.a,{}),Object(c.jsx)(Ve,{}),Object(c.jsx)(Se,{})]})})})),ct=n(86),at=(n(117),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))});o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d.a,{store:Be,children:Object(c.jsx)(ct.a,{persistor:Ye,children:Object(c.jsx)(nt,{})})})}),document.getElementById("root")),at()}},[[118,1,2]]]);
//# sourceMappingURL=main.b7d6a03c.chunk.js.map