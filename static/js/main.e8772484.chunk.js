(this["webpackJsonpnotice-board"]=this["webpackJsonpnotice-board"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/headerIllustration.5cc01f50.png"},20:function(e,t,a){e.exports=a(31)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),s=a.n(i),l=a(2),o=a(17),c=a(3),m=a(4),u=a(6),d=a(5),p=a(9),h=a.n(p);a(25);h.a.initializeApp({apiKey:"AIzaSyDmSix-wdSV4tDARg3NL-kualIgw0uRz0s",authDomain:"noticeboard-b9420.firebaseapp.com",databaseURL:"https://noticeboard-b9420.firebaseio.com",projectId:"noticeboard-b9420",storageBucket:"noticeboard-b9420.appspot.com",messagingSenderId:"595528946730",appId:"1:595528946730:web:d9053d6e53bd9e36405f53"});var b=h.a,f=a(18),g=a.n(f),E=(a(28),a(19)),v=a.n(E),k=(a(29),function(e){return r.a.createElement("header",{className:"wrapper"},r.a.createElement("h1",null,"Notice Board"),r.a.createElement("p",{className:"headingText"},"Have you noticed something nice about someone you know lately? Let them know you\u2019re thinking of them by leaving a note on our notice board."),r.a.createElement("section",{className:"headerEls"},r.a.createElement("div",{className:"newNotice"},r.a.createElement("h2",null,"New Notice"),r.a.createElement("form",{action:"",onSubmit:e.submit},r.a.createElement("button",{type:"submit",className:"plus",tabIndex:"0","aria-label":"addNotice"},"+"),r.a.createElement("label",{htmlFor:"recipient",className:"visuallyHidden"},"Name of your recipient (required)"),r.a.createElement("input",{tabIndex:"0",onChange:e.userInput,id:"recipient",type:"text",className:"name",placeholder:"Name of your recipient *",maxLength:"30",value:e.values.recipient}),r.a.createElement("label",{htmlFor:"message",className:"visuallyHidden"},"What did you notice? (required)"),r.a.createElement("textarea",{tabIndex:"0",onChange:e.userInput,id:"message",type:"text",className:"newMessage",placeholder:"What did you notice? *",maxLength:"250",value:e.values.message}),r.a.createElement("label",{htmlFor:"sender",className:"visuallyHidden"},"Your Name (optional)"),r.a.createElement("input",{tabIndex:"0",onChange:e.userInput,id:"sender",type:"text",className:"senderName",placeholder:"Your Name (optional)",maxLength:"30",value:e.values.sender})),r.a.createElement("p",{className:"required"},"* = Required Field")),r.a.createElement("div",{className:"illustration"},r.a.createElement("img",{src:v.a,alt:"Illustration of a person walking up to a wall with notes pinned to it."}))))}),N=(a(30),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={liked:!1},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"likesContainer"},r.a.createElement("button",{className:"likes",onClick:function(){e.props.likeButton(e.props.noticeId),e.setState({liked:!0})},disabled:this.state.liked,tabIndex:"0"},r.a.createElement("span",{"aria-label":"heart emoji like button",role:"img"},"\u2764\ufe0f")," ",this.props.likes))}}]),a}(n.Component)),y=function(e){return r.a.createElement("main",{className:"wrapper"},r.a.createElement("h4",null,"Notices:"),r.a.createElement("section",{className:"notices"},e.notices.map((function(t,a){return r.a.createElement("div",{key:a,className:"notice"},r.a.createElement("p",{className:"date"},t.datePosted),r.a.createElement("h3",{className:"hi"},"Hi ",t.recipient,"!"),r.a.createElement("p",{className:"message"},t.message),r.a.createElement("h5",{className:"from"},"From ",t.sender||"Anonymous"),r.a.createElement(N,{likeButton:e.likeButton,noticeId:t.noticeId,likes:t.likes}))}))))},I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var a={recipient:e.state.recipient,message:e.state.message,sender:e.state.sender,likes:0,datePosted:(new Date).toDateString()};""!==a.recipient&&""!==a.message?(b.database().ref().push(a),e.setState({recipient:"",message:"",sender:""})):g()("Uh-oh!","You need to fill in the required fields.")},e.handleLikeButton=function(t){var a=Object(o.a)({},e.state).notices,n=a.map((function(e,n){a[n].noticeId===t&&(e.likes=e.likes+1,b.database().ref(t).update({likes:e.likes}));return e}));e.setState({notices:n})},e.handleUserInput=function(t){e.setState(Object(l.a)({},t.target.id,t.target.value))},e.state={notices:[],recipient:"",message:"",sender:""},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.database().ref().on("value",(function(t){var a=[],n=t.val();for(var r in n)a.unshift({noticeId:r,recipient:n[r].recipient,message:n[r].message,sender:n[r].sender,likes:n[r].likes,datePosted:n[r].datePosted});e.setState({notices:a})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"headerBG largeWrapper"},r.a.createElement(k,{submit:this.handleSubmit,userInput:this.handleUserInput,values:this.state})),r.a.createElement("div",{className:"mainBG largeWrapper"},r.a.createElement(y,{date:this.state.date,notices:this.state.notices,likeButton:this.handleLikeButton})),r.a.createElement("footer",{className:"largeWrapper"},r.a.createElement("p",null,"\xa9 ",r.a.createElement("a",{href:"https://shanelbeebe.com",target:"_blank",rel:"noopener noreferrer"},"Shanel Beebe")," 2020"),r.a.createElement("p",null,"Illustration by ",r.a.createElement("a",{href:"https://undraw.co/illustrations",target:"_blank",rel:"noopener noreferrer"}," undraw.co"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.e8772484.chunk.js.map