(this["webpackJsonpplatychat-react"]=this["webpackJsonpplatychat-react"]||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),s=n.n(c),r=n(14),o=n.n(r),i=n(4),u=n(34),l=n.n(u),j=n(112),b=n(16),d=n(78);n(143);d.a.initializeApp({apiKey:"AIzaSyCSqIX7JgOxs-W0KSP11rWgg_Smyq3dRr0",authDomain:"platychat.firebaseapp.com",databaseURL:"https://platychat.firebaseio.com",projectId:"platychat",storageBucket:"platychat.appspot.com",messagingSenderId:"540254856882",appId:"1:540254856882:web:5eb0db85a5670ceb77cbab"});var O=d.a.auth(),m=(d.a,n(18)),h=n(222),x=n(32),f=n(28),p=n(211),g=n(62),v=n(226),k=n(213),S=n(209),y=Object(S.a)((function(e){return{root:{padding:"20px"},formElement:{width:"100%"},button:{backgroundColor:e.palette.primary.main,color:"#fff","&:hover":{color:"#000"}}}})),C={xs:12,sm:12,md:6,lg:6,xl:6},E=Object(m.g)((function(e){var t=e.history,n=y(),c=s.a.useState({username:"",password:""}),r=Object(f.a)(c,2),o=r[0],u=r[1],l=function(e){var t=e.target,n=t.value,a=t.name;u(Object(i.a)(Object(i.a)({},o),{},Object(x.a)({},a,n)))};return Object(a.jsx)("form",{className:n.root,onSubmit:function(e){e.preventDefault(),O.signInWithEmailAndPassword(o.username,o.password),t.push("/convos")},children:Object(a.jsxs)(p.a,{container:!0,spacing:2,direction:"column",alignContent:"center",children:[Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(a.jsxs)(g.a,{variant:"h5",style:{textAlign:"center"},children:["Platychat ",Object(a.jsx)("span",{children:"\ud83e\udd86"})]})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(a.jsx)(v.a,{name:"username",variant:"outlined",size:"small",placeholder:"email",value:o.username,onChange:l,className:n.formElement})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(a.jsx)(v.a,{name:"password",type:"password",variant:"outlined",placeholder:"password",size:"small",value:o.password,onChange:l,className:n.formElement})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},C),{},{children:Object(a.jsx)(k.a,{className:"".concat(n.button," ").concat(n.formElement),type:"submit",variant:"contained",children:"Login"})}))]})})})),w=n(218),N=n(212),R=n(214),A=n(215),M=n(216),T=n(217),_=n(117),I=n.n(_),U=Object(b.b)((function(e){return{socket:e.socket.socket,user:e.base.user}}))((function(e){var t=e.user,n=e.socket,c=e.convo,s=e.history;return Object(a.jsxs)(R.a,{button:!0,onClick:function(){n.emit("convo-join-request",t.token,t.uid,c.convoid),s.push("/messages/".concat(c.convoid))},children:[Object(a.jsx)(A.a,{children:Object(a.jsx)(M.a,{badgeContent:c.unreadCount,color:"primary",children:Object(a.jsx)(I.a,{})})}),Object(a.jsx)(T.a,{primary:c.convoname,secondary:c.participants})]})})),q=Object(S.a)({root:{padding:"20px"},convoList:{maxHeight:"240px",overflowY:"auto"},input:{height:38}}),L={xs:12,sm:12,md:12,lg:12,xl:12},W=Object(b.b)((function(e){return{convos:e.messages.convos,user:e.base.user,socket:e.socket.socket}}))(Object(m.g)((function(e){var t=e.history,n=e.convos,c=e.user,r=e.socket,o=q(),u=s.a.useState({convoName:"",messagesFilter:""}),l=Object(f.a)(u,2),j=l[0],b=l[1],d=function(e){var t=e.target,n=t.name,a=t.value;b(Object(i.a)(Object(i.a)({},j),{},Object(x.a)({},n,a)))};return Object(a.jsx)(w.a,{className:o.root,children:Object(a.jsxs)(p.a,{container:!0,spacing:1,children:[Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},L),{},{children:Object(a.jsx)(g.a,{variant:"h6",children:"Messages"})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},L),{},{children:Object(a.jsxs)(p.a,{container:!0,children:[Object(a.jsx)(p.a,{item:!0,xs:10,sm:10,md:10,lg:10,xl:10,children:Object(a.jsx)(v.a,{InputProps:{className:o.input},name:"convoName",fullWidth:!0,variant:"outlined",placeholder:"Convo Name...",onChange:d,value:j.convoName})}),Object(a.jsx)(p.a,{item:!0,xs:2,sm:2,md:2,lg:2,xl:2,children:Object(a.jsx)(k.a,{fullWidth:!0,onClick:function(){r.emit("convo-create-request",c.token,c.uid,j.convoName),b(Object(i.a)(Object(i.a)({},j),{},{convoName:""}))},children:"Add"})})]})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},L),{},{children:Object(a.jsxs)(p.a,{container:!0,children:[Object(a.jsx)(p.a,{item:!0,xs:10,sm:10,md:10,lg:10,xl:10,children:Object(a.jsx)(v.a,{InputProps:{className:o.input},name:"messagesFilter",fullWidth:!0,variant:"outlined",placeholder:"Search...",value:j.messagesFilter,onChange:d})}),Object(a.jsx)(p.a,{item:!0,xs:2,sm:2,md:2,lg:2,xl:2,children:Object(a.jsx)(k.a,{className:o.input,fullWidth:!0,children:"Filter"})})]})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({className:o.convoList,item:!0},L),{},{children:Object(a.jsx)(N.a,{dense:!0,children:Object.keys(n).sort((function(e,t){return n[e].unreadCount>n[t].unreadCount?-1:n[e].unreadCount<n[t].unreadCount?1:0})).map((function(e,c){return Object(a.jsx)(U,{convo:n[e],history:t},c)}))})}))]})})}))),D=Object(S.a)({root:{padding:"20px"},messageResults:{maxHeight:"240px",overflowY:"auto"},input:{height:38}}),F={xs:12,sm:12,md:12,lg:12,xl:12},G=Object(b.b)((function(e){return{socket:e.socket.socket,user:e.base.user,messageSearchResults:e.messages.messageSearchResults}}))((function(e){var t=e.socket,n=e.user,c=e.messageSearchResults,r=D(),o=s.a.useState(""),u=Object(f.a)(o,2),l=u[0],j=u[1];return Object(a.jsx)(w.a,{className:r.root,children:Object(a.jsxs)(p.a,{container:!0,spacing:1,children:[Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},F),{},{children:Object(a.jsx)(v.a,{name:"searchMessages",value:l,onChange:function(e){return j(e.target.value)},fullWidth:!0})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},F),{},{children:Object(a.jsx)(k.a,{fullWidth:!0,variant:"contained",onClick:function(){t&&n&&t.emit("convo-search-request",n.token,n.uid,l),j("")},children:"Search"})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({className:r.messageResults,item:!0},F),{},{children:Object(a.jsx)(N.a,{dense:!0,children:c?c.map((function(e,t){return Object(a.jsx)(R.a,{children:Object(a.jsx)(T.a,{children:"".concat(e.alias," (").concat(e.timestamp,") - ").concat(e.rawtext)})},t)})):null})}))]})})})),P=n(228),z="[BASE] SET_DARK_MODE_ENABLED",K="[BASE] SET_USER",J="lollllllll stay mad idiots, im forcing a rerender using redux, stay mad",B=function(e){return{type:K,payload:e}},Z={darkModeEnabled:!1,user:null,rerender:0},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case J:return e;case z:return Object(i.a)(Object(i.a)({},e),{},{darkModeEnabled:a});case K:return Object(i.a)(Object(i.a)({},e),{},{user:a});case J:return console.log("so mad"),Object(i.a)(Object(i.a)({},e),{},{rerender:a});default:return e}},H=Object(S.a)({root:{padding:"20px"},input:{height:38}}),V={xs:12,sm:12,md:12,lg:12,xl:12},X=Object(b.b)((function(e){return{darkModeEnabled:e.base.darkModeEnabled,socket:e.socket.socket,user:e.base.user}}),(function(e){return{setDarkModeEnabled:function(t){return e(function(e){return{type:z,payload:e}}(t))}}}))((function(e){var t=e.darkModeEnabled,n=e.setDarkModeEnabled,c=e.socket,r=e.user,o=H(),u=s.a.useState(""),l=Object(f.a)(u,2),j=l[0],b=l[1],d=s.a.useState(""),O=Object(f.a)(d,2),m=O[0],h=O[1];return Object(a.jsx)(w.a,{className:o.root,children:Object(a.jsxs)(p.a,{container:!0,children:[Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},V),{},{children:Object(a.jsx)(g.a,{variant:"h6",children:"Settings"})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},V),{},{children:Object(a.jsxs)(p.a,{container:!0,alignItems:"center",children:[Object(a.jsx)(p.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(a.jsx)(g.a,{children:"Dark Mode"})}),Object(a.jsx)(p.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(a.jsx)(P.a,{checked:t,onChange:function(e,t){n(t)}})})]})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},V),{},{children:Object(a.jsxs)(p.a,{container:!0,alignItems:"center",children:[Object(a.jsx)(p.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:6,children:Object(a.jsx)(g.a,{children:"Alias"})}),Object(a.jsx)(p.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(a.jsx)(v.a,{name:"alias",value:j,onChange:function(e){return b(e.target.value)},fullWidth:!0})}),Object(a.jsx)(p.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:3,children:Object(a.jsx)(k.a,{onClick:function(){r&&r.token&&c&&c.emit("user-alias-request",r.token,r.uid,j),b("")},fullWidth:!0,children:"Set"})})]})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},V),{},{children:Object(a.jsxs)(p.a,{container:!0,alignItems:"center",children:[Object(a.jsx)(p.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:6,children:Object(a.jsx)(g.a,{children:"Color"})}),Object(a.jsx)(p.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6,children:Object(a.jsx)(v.a,{name:"color",placeholder:"#123abf",value:m,fullWidth:!0,onChange:function(e){return h(e.target.value)}})}),Object(a.jsx)(p.a,{item:!0,xs:3,sm:3,md:3,lg:3,xl:3,children:Object(a.jsx)(k.a,{onClick:function(){r&&r.token&&c&&c.emit("user-color-request",r.token,r.uid,m),h("")},fullWidth:!0,children:"Set"})})]})}))]})})})),Q=Object(S.a)({root:{padding:"20px",maxHeight:"480px",overflowY:"auto"},img:{width:"100%"}}),$={xs:12,sm:12,md:3,lg:3,xl:3},ee=Object(b.b)((function(e){return{user:e.base.user,socket:e.socket.socket,urls:e.messages.galleryUrls}}))((function(e){var t=e.socket,n=e.user,c=e.urls,r=Q();return s.a.useEffect((function(){t&&n&&t.emit("convo-gallery-request",n.token,n.uid)}),[t,n]),Object(a.jsx)(w.a,{className:r.root,children:Object(a.jsx)(p.a,{container:!0,spacing:1,alignItems:"center",children:c?c.map((function(e,t){return Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},$),{},{children:Object(a.jsx)("img",{className:r.img,alt:"happy-face",src:"".concat("https://doxtu.me","/platychat/").concat(e.rawtext)})}),t)})):null})})})),te=n(219),ne=Object(S.a)({root:{padding:"20px"},alignText:{textAlign:"center"}}),ae=Object(b.b)((function(e){return{user:e.base.user,socket:e.socket.socket,suckCount:e.messages.suckCount}}))((function(e){var t=e.user,n=e.socket,c=e.suckCount,s=ne();return Object(a.jsx)(w.a,{className:s.root,children:Object(a.jsxs)(p.a,{container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(p.a,{item:!0,children:Object(a.jsx)(g.a,{variant:"h6",children:"SUCK COUNTER"})}),Object(a.jsx)(p.a,{item:!0,children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)("span",{children:"\ud83d\ude1b"}),Object(a.jsx)("span",{children:"\ud83d\ude1b"}),Object(a.jsx)("span",{children:"\ud83d\ude1b"})]})}),Object(a.jsx)(p.a,{item:!0,style:{width:"100%"},children:Object(a.jsxs)(p.a,{container:!0,spacing:1,alignItems:"center",children:[Object(a.jsx)(p.a,{item:!0,xs:2,sm:2,md:2,lg:2,xl:2,children:Object(a.jsx)(te.a,{color:"primary",onClick:function(){n&&t&&n.emit("suck-increment-request",t.token,t.uid,-1)},children:"OPPS"})}),Object(a.jsx)(p.a,{item:!0,xs:8,sm:8,md:8,lg:8,xl:8,children:Object(a.jsx)(g.a,{className:s.alignText,variant:"h1",children:c})}),Object(a.jsx)(p.a,{item:!0,xs:2,sm:2,md:2,lg:2,xl:2,children:Object(a.jsx)(te.a,{color:"primary",onClick:function(){n&&t&&n.emit("suck-increment-request",t.token,t.uid,1)},children:"SUCK"})})]})})]})})})),ce=Object(S.a)((function(e){return{root:{padding:"20px"}}})),se={xs:12,sm:12,md:4,lg:4,xl:4},re={xs:12,sm:12,md:12,lg:12,xl:12},oe=Object(b.b)((function(e){return{socket:e.socket.socket,user:e.base.user,convos:e.messages.convos}}))(Object(m.g)((function(e){var t=e.history,n=e.socket,c=e.user;s.a.useEffect((function(){n&&c&&(n.emit("convo-list-request",c.token,c.uid),n.emit("suck-counter-request",c.token,c.uid))}),[n,c]);var r=ce();return Object(a.jsxs)(p.a,{className:r.root,container:!0,spacing:1,children:[Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},re),{},{children:Object(a.jsx)(k.a,{fullWidth:!0,onClick:function(){O.signOut(),localStorage.clear(),t.push("/login")},children:"Sign Out"})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},se),{},{children:Object(a.jsx)(W,{})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},se),{},{children:Object(a.jsx)(G,{})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},se),{},{children:Object(a.jsx)(X,{})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},re),{},{children:Object(a.jsx)(ee,{})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},se),{},{children:Object(a.jsx)(ae,{})}))]})}))),ie=n(227),ue=n(220),le=n(221),je=Object(S.a)((function(e){return{root:{padding:"20px",height:"90vh"},messages:{height:"80vh",overflowY:"auto"},inputGroup:{height:"10vh"},input:{height:38},button:{backgroundColor:e.palette.primary.main,color:"#fff"}}})),be="[MESSAGES] SET_CONVOS",de="[MESSAGES] SET_MESSAGE_SEARCH_RESULTS",Oe="[MESSAGES] SET_CURRENT_CONVOID",me="[MESSAGES] SET_GALLERY_URLS",he="[MESSAGES] SET_SUCK_COUNTER",xe=function(e){return{type:be,payload:e}},fe={convos:{},currentConvoid:null,messageSearchResults:[],galleryUrls:[],suckCount:0},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case be:return Object(i.a)(Object(i.a)({},e),{},{convos:a});case Oe:return Object(i.a)(Object(i.a)({},e),{},{currentConvoid:a});case de:return Object(i.a)(Object(i.a)({},e),{},{messageSearchResults:a});case me:return Object(i.a)(Object(i.a)({},e),{},{galleryUrls:a});case he:return Object(i.a)(Object(i.a)({},e),{},{suckCount:a});default:return e}},ge={xs:12,sm:12,md:12,lg:12,xl:12},ve={xs:10,sm:10,md:10,lg:10,xl:10},ke={xs:2,sm:2,md:2,lg:2,xl:2},Se=Object(b.b)((function(e){return{user:e.base.user,socket:e.socket.socket,uploader:e.socket.uploader,convos:e.messages.convos,currentConvoid:e.messages.currentConvoid}}),(function(e){return{setCurrentConvoid:function(t){return e(function(e){return{type:Oe,payload:e}}(t))}}}))(Object(m.g)((function(e){var t=e.match,n=e.user,c=e.socket,r=e.uploader,o=e.convos,u=e.setCurrentConvoid,l=e.currentConvoid,j=t.url.split("/")[2],b=o[j],d=b?b.messages:[];s.a.useEffect((function(){u(j)}),[l]),s.a.useEffect((function(){c.emit("convo-join-request",n.token,n.uid,l)}),[c,n]);var O=je(),m=s.a.useState(""),h=Object(f.a)(m,2),x=h[0],g=h[1],S=s.a.useState(null),y=Object(f.a)(S,2),C=y[0],E=y[1];s.a.useEffect((function(){C&&C.scrollTo&&C.scrollTo({top:1e6})}),[C,o]);return Object(a.jsxs)(p.a,{className:O.root,container:!0,children:[Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({className:O.messages,item:!0},ge),{},{ref:function(e){return E(e)},children:Object(a.jsx)(N.a,{dense:!0,children:d?d.map((function(e,t){var n=e.rawtext;if(/images\/platychat.+/.test(n)&&(n=Object(a.jsxs)(ie.a,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("img",{src:"".concat("https://doxtu.me/platychat","/").concat(n),style:{width:"100%"}})]})),/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(n)){var c=n.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);c.forEach((function(e){n=n.replace(e,"~")}));var s=n.split("~");n=Object(a.jsx)("span",{children:s.map((function(e,t){return Object(a.jsxs)("span",{children:[e,c[t]?Object(a.jsx)(ue.a,{href:c[t],target:"_blank",children:c[t]}):null," "]},t)}))})}return Object(a.jsxs)(R.a,{children:[Object(a.jsx)(le.a,{children:Object(a.jsx)("span",{children:"\ud83e\udd97"})}),Object(a.jsx)(T.a,{primary:Object(a.jsxs)(ie.a,{children:[Object(a.jsx)("span",{style:{color:e.color},children:e.alias}),Object(a.jsx)("span",{children:" ".concat(e.timestamp," - ")}),Object(a.jsx)("span",{children:n})]})})]},t)})):null})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},ge),{},{children:Object(a.jsx)("input",{name:"fileUpload",type:"file",onChange:function(e){for(var t=e.target.files,a=function(){o=t[s];var e=function(){for(var e="",t=0;t<9;t++)e+=Math.round(9*Math.random()).toString();return e}();o.meta=e,(i=new FileReader).onload=function(t){c.emit("convo-message-request",n.token,n.uid,l,"/image "+e),r.submitFiles([o])},i.readAsDataURL(o)},s=0;s<t.length;s++){var o,i;a()}}})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({className:O.inputGroup,item:!0},ge),{},{children:Object(a.jsx)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),c&&n&&(c.emit("convo-message-request",n.token,n.uid,j,x),g(""))},children:Object(a.jsxs)(p.a,{container:!0,spacing:1,alignItems:"center",justify:"center",children:[Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},ve),{},{children:Object(a.jsx)(v.a,{InputProps:{className:O.input},name:"message",value:x,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:function(e){var t=e.target.value;g(t)}})})),Object(a.jsx)(p.a,Object(i.a)(Object(i.a)({item:!0},ke),{},{children:Object(a.jsx)(k.a,{className:"".concat(O.input," ").concat(O.button),fullWidth:!0,type:"submit",variant:"outlined",children:"Send"})}))]})})}))]})}))),ye=Object(b.b)((function(e){return{user:e.base.user}}))((function(e){var t=e.user;return Object(a.jsx)(h.a,{className:"App",children:Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{exact:!0,path:"/",render:function(){return t?Object(a.jsx)(m.a,{to:"/convos"}):Object(a.jsx)(m.a,{to:"/login"})}}),Object(a.jsx)(m.b,{exact:!0,path:"/login",render:function(){return t?Object(a.jsx)(m.a,{to:"/convos"}):Object(a.jsx)(E,{})}}),Object(a.jsx)(m.b,{exact:!0,path:"/convos",render:function(){return t?Object(a.jsx)(oe,{}):Object(a.jsx)(m.a,{to:"/login"})}}),Object(a.jsx)(m.b,{exact:!0,path:"/messages/:convoid",render:function(){return t?Object(a.jsx)(Se,{}):Object(a.jsx)(m.a,{to:"/login"})}})]})})})),Ce=n(47),Ee=n(121),we=n(24),Ne=n(77),Re=n(122),Ae=n(61),Me=n(76),Te=Object(Me.io)("https://doxtu.me",{timeout:18e4}),_e=n(178),Ie="[SOCKET] SET_SOCKET",Ue="[SOCKET] CONVO_LIST_RESPONSE",qe={socket:Te,uploader:new _e(Te)},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case Ie:return console.log("RECONNECTING",a),Object(i.a)(Object(i.a)({},e),{},{socket:a,uploader:new _e(a)});default:return e}},We=l.a.mark(Fe),De=l.a.mark(Ge);function Fe(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.d)(Ue,l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.next=3,Object(Ae.c)(xe(n));case 3:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),We)}function Ge(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ae.a)([Object(Ae.b)(Fe)]);case 2:case"end":return e.stop()}}),De)}var Pe=n(118),ze={key:"root",storage:n.n(Pe).a,whitelist:["base","messages"]},Ke=Object(we.c)({base:Y,messages:pe,socket:Le}),Je=Object(Ne.a)(ze,Ke),Be=Object(Re.a)(),Ze=[Be],Ye=Object(we.e)(Je,we.a.apply(void 0,Ze));Be.run(Ge);var He=Object(Ne.b)(Ye);console.warn=function(){};var Ve=Object(b.b)((function(e){return{user:e.base.user,socket:e.socket.socket,convos:e.messages.convos}}),(function(e){return{convoListResponse:function(t){return e(function(e){return{type:Ue,payload:e}}(t))},setConvos:function(t){return e(xe(t))},setUser:function(t){return e(B(t))},setMessageSearchResults:function(t){return e(function(e){return{type:de,payload:e}}(t))},setSocket:function(t){return e(function(e){return{type:Ie,payload:e}}(t))},setGalleryUrls:function(t){return e(function(e){return{type:me,payload:e}}(t))},setSuckCounter:function(t){return e(function(e){return{type:he,payload:e}}(t))},forceRerender:function(t){return e(function(e){return{type:J,payload:e}}(t))}}}))((function(e){var t=e.user,n=e.socket,a=e.convoListResponse,c=e.setConvos,r=e.setSocket,o=e.setMessageSearchResults,u=e.setGalleryUrls,l=e.setSuckCounter;e.forceRerender;return s.a.useEffect((function(){n&&(n.on("login-response",(function(e){t&&B(Object(i.a)(Object(i.a)({},t),{},{color:e}))})),n.on("convo-list-response",(function(e){var t=JSON.parse(e).reduce((function(e,t){return e[t.convoid]=t,e}),{});a(t)})),n.on("convo-gallery-response",(function(e){var t=JSON.parse(e);u(t)})),n.on("convo-create-response",(function(e,t){var n=Ye.getState().messages.convos;c(Object(i.a)(Object(i.a)({},n),{},Object(x.a)({},e,{convoid:e,convoname:t})))})),n.on("convo-join-response",(function(e,t){c(Object(i.a)(Object(i.a)({},Ye.getState().messages.convos),{},Object(x.a)({},e,Object(i.a)(Object(i.a)({},Ye.getState().messages.convos[e]),{},{messages:JSON.parse(t)}))))})),n.on("convo-message-response",(function(){})),n.on("convo-message-incoming",(function(e,t,n,a,s,r){console.log("message arrived");var o=Ye.getState().messages.convos;c(Object(i.a)(Object(i.a)({},o),{},Object(x.a)({},e,Object(i.a)(Object(i.a)({},o[e]),{},{messages:[].concat(Object(Ee.a)(o[e].messages?o[e].messages:[]),[{convoid:e,todayString:t,alias:n,color:a,timestamp:s,rawtext:r}])}))))})),n.on("convo-search-response",(function(e){o(JSON.parse(e))})),n.on("convo-image-response",(function(){var e=Ye.getState().messages.currentConvoid,t=Ye.getState().base.user,n=Ye.getState().socket.socket;n&&t&&n.emit("convo-join-request",t.token,t.uid,e)})),n.on("suck-counter-response",l))}),[n,B]),s.a.useEffect((function(){window.addEventListener("focus",(function(){Ye.getState().socket.socket.off(),r(Object(Me.io)("https://doxtu.me",{timeout:18e4}))})),window.addEventListener("paste",(function(e){for(var t,a=Ye.getState().messages.currentConvoid,c=e.clipboardData.items,s=0;s<c.length;s++)if("file"===c[s].kind){t=c[s].getAsFile();break}if("undefined"!==typeof t){var r=new FileReader,o=function(){for(var e="",t=0;t<9;t++)e+=Math.round(9*Math.random()).toString();return e}();t.meta=o,r.onload=function(e){n.emit("convo-message-request",Ye.getState().base.user.token,Ye.getState().base.user.uid,a,"/image "+o),Ye.getState().socket.uploader.submitFiles([t])},r.readAsDataURL(t)}}))}),[]),null})),Xe=n(223),Qe=n(120),$e=n(224),et=n(225),tt={palette:{primary:{main:"#7703fc"},secondary:{main:"#333"}}};var nt=Object(b.b)((function(e){return{darkModeEnabled:e.base.darkModeEnabled,user:e.base.user,socket:e.socket.socket,convos:e.messages.convos}}),(function(e){return{setUser:function(t){return e(B(t))},setConvos:function(t){return e(xe(t))}}}))((function(e){var t=e.socket,n=e.user,c=e.darkModeEnabled,r=e.setUser,o=(e.setConvos,Object(Xe.a)("(prefers-color-scheme: dark)"));s.a.useEffect((function(){O.onAuthStateChanged(function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",r(t));case 2:return e.next=4,t.getIdToken(!0);case 4:n=e.sent,t.token=n,r(t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),s.a.useEffect((function(){t&&n&&t.emit("login-request",n.token,n.uid)}),[t,n]);var u=s.a.useMemo((function(){return Object(Qe.a)(Object(i.a)(Object(i.a)({},tt),{},{palette:Object(i.a)(Object(i.a)({},tt.palette),{},{type:o||c?"dark":"light"})}))}),[o,c]);return Object(a.jsx)(Ce.a,{basename:"/platychat",children:Object(a.jsxs)($e.a,{theme:u,children:[Object(a.jsx)(et.a,{}),Object(a.jsx)(Ve,{}),Object(a.jsx)(ye,{})]})})})),at=n(119),ct=(n(181),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))});o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b.a,{store:Ye,children:Object(a.jsx)(at.a,{persistor:He,children:Object(a.jsx)(nt,{})})})}),document.getElementById("root")),ct()}},[[182,1,2]]]);
//# sourceMappingURL=main.6bfddfd5.chunk.js.map