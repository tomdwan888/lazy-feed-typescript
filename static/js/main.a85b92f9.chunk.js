(this["webpackJsonplazy-feed-typescript"]=this["webpackJsonplazy-feed-typescript"]||[]).push([[0],{17:function(e,t,n){e.exports={overlay:"LeftSideControls_overlay__PPMbH",wrapper:"LeftSideControls_wrapper__3k4b_",open:"LeftSideControls_open__107sJ"}},2:function(e,t,n){e.exports={overlay:"Auth_overlay__3M_T6",signUp:"Auth_signUp__1uAT5",title:"Auth_title__i9wAD",inputWrapper:"Auth_inputWrapper__2Acdx",input:"Auth_input__3S_7x",submit:"Auth_submit__1HBju",errorMessage:"Auth_errorMessage__2kp6Z"}},22:function(e,t,n){e.exports={App:"App_App__3H_6h",feedContainer:"App_feedContainer__2bCc6"}},25:function(e,t,n){e.exports={postsWall:"PostsWall_postsWall__3HJuy",showNewPosts:"PostsWall_showNewPosts__1ODxM"}},26:function(e,t,n){e.exports={container:"FixedControls_container__1vgVr",fixedControls:"FixedControls_fixedControls__2ABI3"}},30:function(e,t,n){e.exports={scrollTopBtn:"ScrollTopBtn_scrollTopBtn__1mqKu"}},35:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(18),a=n.n(s),o=(n(35),n(22)),c=n.n(o),r=n(7),i=n.n(r),l=n.p+"static/media/user.1775f3e4.jpg",m=n(16),u=function(){return Object(m.b)()},d=m.c,j=n(11),p=Object(j.c)({name:"auth",initialState:{firstname:null,lastname:null,isAuth:!1},reducers:{setAuthData:function(e,t){e.firstname=t.payload.firstname,e.lastname=t.payload.lastname,e.isAuth=!0}}}),h=p.actions.setAuthData,b=p.reducer,f=Object(j.c)({name:"modals",initialState:{signUp:{isOpen:!1},signIn:{isOpen:!1},controls:{isOpen:!1}},reducers:{setSignUpIsOpen:function(e,t){e.signUp.isOpen=t.payload},setSignInIsOpen:function(e,t){e.signIn.isOpen=t.payload},setControlsIsOpen:function(e){e.controls.isOpen=!e.controls.isOpen}},extraReducers:function(e){e.addCase(h,(function(e,t){e.signUp.isOpen=!1}))}}),O=f.actions,_=O.setSignInIsOpen,x=O.setSignUpIsOpen,v=O.setControlsIsOpen,N=f.reducer,g=n(1),C=n.n(g),A=n(0),P=function(){var e=d((function(e){return e.auth.isAuth}));return Object(A.jsx)("header",{className:i.a.header,children:Object(A.jsx)("div",{className:i.a.fixedHeader,children:Object(A.jsxs)("div",{className:i.a.headerContainer,children:[Object(A.jsx)(y,{}),Object(A.jsx)("div",{className:i.a.logo,children:"LazyFeed"}),Object(A.jsx)("div",{className:i.a.rightPanel,children:e?Object(A.jsx)(w,{}):Object(A.jsx)(I,{})})]})})})},y=function(){var e=u();return Object(A.jsx)("div",{className:i.a.burgerMenu,onClick:function(){e(v())},children:Object(A.jsx)("i",{className:"fas fa-bars"})})},w=function(){var e=d((function(e){return e.auth})),t=e.firstname,n=e.lastname;return Object(A.jsxs)("div",{className:i.a.userBar,children:[Object(A.jsxs)("ul",{className:i.a.userInfo,children:[Object(A.jsx)("li",{children:t}),Object(A.jsx)("li",{children:n})]}),Object(A.jsx)("img",{className:i.a.userAvatar,src:l,alt:"user avatar"})]})},I=function(){var e=u();return Object(A.jsxs)("div",{className:i.a.authBar,children:[Object(A.jsx)("button",{className:i.a.authBtn,onClick:function(){e(_(!0))},children:"Log In"}),Object(A.jsx)("button",{className:i.a.authBtn,onClick:function(){e(x(!0))},children:"Sign Up"})]})},U=n(25),S=n.n(U),H=n(10),F=n(5),B=n.n(F),k=n(8),M=n.p+"static/media/user.1775f3e4.jpg",T=n(4),W=n(6),L=n.n(W),E={getPosts:function(e){return Promise.all([this.getRandomUsers(e),this.getRandomContentPhotos(e)]).then((function(t){for(var n=[],s=Object(H.a)(t,2),a=s[0],o=s[1],c=0;c<e;c++)n.push({author:a[c],contentImageUrl:o[c],id:Math.random()});return n}))},getRandomUsers:function(e){return fetch("https://randomuser.me/api/?results=".concat(e,"&inc=name,picture,login")).then((function(e){return e.json()})).then((function(e){var t=[];return e.results.forEach((function(e){t.push({firstname:e.name.first,lastname:e.name.last,avatarUrl:e.picture.large,id:e.login.uuid})})),t}))},getRandomContentPhotos:function(e){for(var t=[],n=0;n<e;n++)t.push(fetch("https://picsum.photos/500/600"));return Promise.all(t).then((function(e){var t=[];return e.forEach((function(e){return t.push(e.url)})),t}))}},R=Object(j.b)("posts/requestPosts",(function(e,t){var n=t.getState(),s=n.posts.posts.length+n.posts.hiddenPosts.length>=50;return!n.posts.clearOld&&s?[]:E.getPosts(e).then((function(e){return e}))})),q=Object(j.c)({name:"posts",initialState:{posts:[],hiddenPosts:[],autoUpload:!1,autoUpdate:!0,clearOld:!0},reducers:{setAutoUpload:function(e,t){e.autoUpload=t.payload},setAutoUpdate:function(e,t){e.autoUpdate=t.payload,e.autoUpdate&&(e.posts=[].concat(Object(k.a)(e.hiddenPosts),Object(k.a)(e.posts)),e.hiddenPosts=[])},setClearOld:function(e,t){e.clearOld=t.payload},showHiddenPosts:function(e){e.posts=[].concat(Object(k.a)(e.hiddenPosts),Object(k.a)(e.posts)),e.hiddenPosts=[]},removePost:function(e,t){e.posts=e.posts.filter((function(e){return e.id!==t.payload}))}},extraReducers:function(e){e.addCase(R.fulfilled,(function(e,t){if(t.payload.length){var n=e.posts.length,s=n+e.hiddenPosts.length,a=function(e){return e.splice(-1,1)};!e.autoUpdate&&s>=50&&n&&a(e.posts),!e.autoUpdate&&s>=50&&!n&&a(e.hiddenPosts),e.autoUpdate&&n>=50&&a(e.posts),e.autoUpdate?e.posts=[].concat(Object(k.a)(t.payload),Object(k.a)(e.posts)):e.hiddenPosts=[].concat(Object(k.a)(t.payload),Object(k.a)(e.hiddenPosts))}}))}}),J=q.actions,K=J.setAutoUpload,D=J.setAutoUpdate,V=J.setClearOld,z=J.showHiddenPosts,G=J.removePost,Y=q.reducer,X=C.a.memo((function(e){var t=e.commentsIsShow,n=e.setShowComments,s=e.comments,a=e.addComment,o=d((function(e){return e.auth.firstname+" "+e.auth.lastname})),c=d((function(e){return e.auth.isAuth})),r=u();return Object(A.jsxs)("div",{children:[t&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:L.a.hideComments,onClick:function(){return n(!1)},children:"Hide comments"}),Object(A.jsx)("div",{className:L.a.commentsHolder,children:s.map((function(e,t){return Object(A.jsx)(Z,{comment:e,userName:o},t)}))})]}),Object(A.jsx)(Q,{isAuth:c,addComment:a,setShowComments:n,onCommentFieldFocus:function(){r(D(!1))}})]})})),Z=function(e){var t=e.comment,n=e.userName;return Object(A.jsxs)("div",{className:L.a.comment,children:[Object(A.jsx)("div",{className:L.a.commentsAvatarWrapper,children:Object(A.jsx)("img",{className:L.a.commentAvatar,src:M,alt:"avatar"})}),Object(A.jsxs)("div",{className:L.a.commentBody,children:[Object(A.jsx)("div",{className:L.a.commentUsername,children:n}),Object(A.jsx)("div",{className:L.a.commentText,children:t})]})]})},Q=function(e){var t=e.isAuth,n=e.addComment,s=e.setShowComments,a=e.onCommentFieldFocus;return Object(A.jsxs)("div",{className:L.a.writeComment,children:[t&&Object(A.jsx)("img",{className:L.a.commentAvatar,src:M,alt:"avatar"}),Object(A.jsx)(T.d,{initialValues:{comment:""},onSubmit:function(e,a){var o=a.resetForm,c=a.setFieldError;t?e.comment.length?(n((function(t){return[].concat(Object(k.a)(t),[e.comment])})),s(!0),o()):c("comment","Please enter something"):(c("comment","You should be registered for writing comments"),setTimeout((function(){return o({values:{comment:e.comment}})}),3e3))},children:Object(A.jsxs)(T.c,{className:L.a.commentForm,children:[Object(A.jsx)(T.b,{className:L.a.commentFormInput,onFocus:a,name:"comment",type:"text",placeholder:"Write you comment here"}),Object(A.jsx)(T.a,{name:"comment",children:function(e){return Object(A.jsx)("div",{className:L.a.errorMessage,children:e})}}),Object(A.jsx)("button",{className:L.a.commentFormButton,type:"submit"})]})})]})},$=function(e){var t=e.postId,n=e.firstname,s=e.lastname,a=e.avatar,o=e.contentImage,c=Object(g.useState)(U(0,1e3)),r=Object(H.a)(c,2),i=r[0],l=r[1],m=Object(g.useState)(!1),d=Object(H.a)(m,2),j=d[0],p=d[1],h=Object(g.useState)(U(i,10*i)),b=Object(H.a)(h,2),f=b[0],O=b[1],_=Object(g.useState)(!1),x=Object(H.a)(_,2),v=x[0],N=x[1],C=Object(g.useState)([]),P=Object(H.a)(C,2),y=P[0],w=P[1],I=u();function U(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}return Object(g.useEffect)((function(){var e=setInterval((function(){return l((function(e){return++e}))}),U(1e3,3e3)),t=setInterval((function(){return O((function(e){return++e}))}),U(1e3,2e3));return function(){clearInterval(e),clearInterval(t)}}),[]),Object(A.jsxs)("div",{className:B.a.post,children:[Object(A.jsxs)("div",{className:B.a.postHeader,children:[Object(A.jsx)("img",{className:B.a.postUserPhoto,src:a,alt:"avatar"}),Object(A.jsxs)("div",{className:B.a.postInfo,children:[Object(A.jsx)("div",{className:B.a.postCreatorName,children:n+" "+s}),Object(A.jsx)("div",{className:B.a.postCreationDate,children:"14 Jun at 16:46:36"})]}),Object(A.jsx)("span",{className:B.a.closeBtn,onClick:function(){I(G(t))},children:Object(A.jsx)("i",{className:"far fa-window-close"})})]}),Object(A.jsx)("div",{className:B.a.postContent,children:Object(A.jsx)("img",{className:B.a.postContentImage,src:o,alt:"content"})}),Object(A.jsxs)("div",{className:B.a.postActivities,children:[Object(A.jsxs)("div",{className:B.a.postActivity,onClick:function(){l(j?--i:++i),p(!j)},children:[Object(A.jsx)("div",{className:B.a.postActivityIcon,children:Object(A.jsx)("i",{className:j?"fas fa-heart":"far fa-heart"})}),Object(A.jsx)("div",{className:B.a.likeCount,children:i})]}),Object(A.jsxs)("div",{className:B.a.postActivity,onClick:function(){y.length&&N(!v)},children:[Object(A.jsx)("div",{className:B.a.postActivityIcon,children:Object(A.jsx)("i",{className:"far fa-comment-alt"})}),Object(A.jsx)("div",{className:B.a.commentCount,children:y.length})]}),Object(A.jsxs)("div",{className:B.a.postActivity,children:[Object(A.jsx)("div",{className:B.a.postActivityIcon,children:Object(A.jsx)("i",{className:"far fa-eye"})}),Object(A.jsx)("div",{className:B.a.viewsCount,children:f})]})]}),Object(A.jsx)(X,{commentsIsShow:v,setShowComments:N,comments:y,addComment:w})]})},ee=function(){var e=d((function(e){return e.posts.posts})),t=d((function(e){return e.posts.hiddenPosts})),n=d((function(e){return e.posts.autoUpload})),s=u();Object(g.useEffect)((function(){s(R(1))}),[s]),Object(g.useEffect)((function(){var e;return n&&(e=setInterval((function(){return s(R(1))}),5e3)),function(){clearInterval(e)}}),[n,s]);return Object(A.jsxs)("div",{className:S.a.postsWall,children:[0!==t.length&&Object(A.jsx)(te,{onShowNewPostsClick:function(){s(z())},hiddenPostsLength:t.length}),e.map((function(e){return Object(A.jsx)($,{postId:e.id,firstname:e.author.firstname,lastname:e.author.lastname,avatar:e.author.avatarUrl,contentImage:e.contentImageUrl},e.id)}))]})},te=function(e){var t=e.onShowNewPostsClick,n=e.hiddenPostsLength;return Object(A.jsxs)("div",{className:S.a.showNewPosts,onClick:t,children:["Show ",Object(A.jsx)("b",{children:n})," new posts"]})},ne=n(2),se=n.n(ne),ae=function(){var e=u();return Object(A.jsx)(T.d,{initialValues:{firstname:"",lastname:"",password:""},onSubmit:function(t){e(h({firstname:t.firstname,lastname:t.lastname}))},children:Object(A.jsx)("div",{className:se.a.signUp,children:Object(A.jsxs)(T.c,{children:[Object(A.jsx)("h3",{className:se.a.title,children:"Hey!"}),Object(A.jsx)("div",{className:se.a.inputWrapper,children:Object(A.jsx)(T.b,{className:se.a.input,name:"firstname",type:"text",placeholder:"Firstname"})}),Object(A.jsx)("div",{className:se.a.inputWrapper,children:Object(A.jsx)(T.b,{className:se.a.input,name:"lastname",type:"text",placeholder:"Lastname"})}),Object(A.jsx)("div",{className:se.a.inputWrapper,children:Object(A.jsx)(T.b,{className:se.a.input,name:"password",type:"text",placeholder:"Password"})}),Object(A.jsx)("button",{className:se.a.submit,type:"submit",children:"SignIn"})]})})})},oe=function(){var e=u();return Object(A.jsx)(T.d,{initialValues:{firstname:"",lastname:"",password:""},onSubmit:function(t){var n=t.firstname,s=t.lastname;n=n[0].toUpperCase()+n.slice(1),s=s[0].toUpperCase()+s.slice(1),e(h({firstname:n,lastname:s}))},validate:function(e){var t={};return e.password||(t.password="Required"),e.firstname||(t.firstname="Required"),e.lastname||(t.lastname="Required"),t},children:Object(A.jsx)("div",{className:se.a.signUp,children:Object(A.jsxs)(T.c,{children:[Object(A.jsx)("h3",{className:se.a.title,children:"Join Lazy Feed today"}),Object(A.jsxs)("div",{className:se.a.inputWrapper,children:[Object(A.jsx)(T.b,{className:se.a.input,name:"firstname",type:"text",placeholder:"Firstname"}),Object(A.jsx)(T.a,{name:"firstname",children:function(e){return Object(A.jsx)("div",{className:se.a.errorMessage,children:e})}})]}),Object(A.jsxs)("div",{className:se.a.inputWrapper,children:[Object(A.jsx)(T.b,{className:se.a.input,name:"lastname",type:"text",placeholder:"Lastname"}),Object(A.jsx)(T.a,{name:"lastname",children:function(e){return Object(A.jsx)("div",{className:se.a.errorMessage,children:e})}})]}),Object(A.jsxs)("div",{className:se.a.inputWrapper,children:[Object(A.jsx)(T.b,{className:se.a.input,name:"password",type:"text",placeholder:"Password"}),Object(A.jsx)(T.a,{name:"password",children:function(e){return Object(A.jsx)("div",{className:se.a.errorMessage,children:e})}})]}),Object(A.jsx)("button",{className:se.a.submit,type:"submit",children:"SignUp"})]})})})},ce=function(){var e=u(),t=d((function(e){return e.modals.signUp.isOpen})),n=d((function(e){return e.modals.signIn.isOpen}));return t||n?Object(A.jsx)("div",{className:se.a.overlay,onClick:function(t){t.target===t.currentTarget&&(e(x(!1)),e(_(!1)))},children:t?Object(A.jsx)(oe,{}):n?Object(A.jsx)(ae,{}):null}):null},re=n(30),ie=n.n(re),le=function(){var e=Object(g.useState)(!1),t=Object(H.a)(e,2),n=t[0],s=t[1];return Object(g.useEffect)((function(){window.addEventListener("scroll",(function(){return s(window.pageYOffset>100)}))}),[]),n?Object(A.jsx)("div",{className:ie.a.scrollTopBtn,onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},children:Object(A.jsx)("i",{className:"far fa-caret-square-up"})}):null},me=n(9),ue=n.n(me),de=function(){return Object(A.jsxs)("div",{className:ue.a.controls,children:[Object(A.jsx)(je,{}),Object(A.jsx)(be,{})]})},je=function(){var e=u(),t=d((function(e){return e.posts.autoUpload})),n=d((function(e){return e.posts.autoUpdate})),s=d((function(e){return e.posts.clearOld}));return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h4",{className:ue.a.controlsTitle,children:"Feed Controls"}),Object(A.jsx)(pe,{controlName:"Autoupload",isActive:t,onControlClick:function(){e(K(!t))}}),Object(A.jsx)(pe,{controlName:"Autoupdate",isActive:n,onControlClick:function(){e(D(!n))}}),Object(A.jsx)(pe,{controlName:"Clear old",isActive:s,onControlClick:function(){e(V(!s))}})]})},pe=function(e){var t=e.controlName,n=e.isActive,s=e.onControlClick;return Object(A.jsxs)("div",{className:ue.a.control,onClick:s,children:[Object(A.jsx)("div",{className:ue.a.controlLabel,children:t}),Object(A.jsx)(he,{isActive:n})]})},he=function(e){var t=e.isActive?ue.a.round+" "+ue.a.roundSwitchedOn:ue.a.round;return Object(A.jsx)("div",{className:ue.a.toggle,children:Object(A.jsx)("div",{className:t})})},be=function(){var e=d((function(e){return e.posts.posts.length+e.posts.hiddenPosts.length})),t=d((function(e){return e.posts.posts.length}));return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h4",{className:ue.a.controlsTitle,children:"App Info"}),Object(A.jsx)(fe,{name:"Total posts",value:e}),Object(A.jsx)(fe,{name:"On screen",value:t}),Object(A.jsx)(fe,{name:"Max posts",value:50})]})},fe=function(e){var t=e.name,n=e.value;return Object(A.jsxs)("div",{className:ue.a.infoField,children:[Object(A.jsx)("span",{children:t}),Object(A.jsx)("span",{children:n})]})},Oe=n(26),_e=n.n(Oe),xe=function(e){e.children;return Object(A.jsx)("div",{className:_e.a.container,children:Object(A.jsx)("div",{className:_e.a.fixedControls,children:Object(A.jsx)(de,{})})})},ve=n(17),Ne=n.n(ve),ge=function(){var e=d((function(e){return e.modals.controls.isOpen})),t=u(),n=e?Ne.a.overlay+" "+Ne.a.open:Ne.a.overlay;return Object(A.jsx)("div",{className:n,onClick:function(e){e.currentTarget===e.target&&t(v())},children:Object(A.jsx)("div",{className:Ne.a.wrapper,children:Object(A.jsx)(de,{})})})};var Ce=function(){return Object(A.jsxs)("div",{className:c.a.App,children:[Object(A.jsx)(P,{}),Object(A.jsx)("main",{className:c.a.feed,children:Object(A.jsxs)("div",{className:c.a.feedContainer,children:[Object(A.jsx)(ee,{}),Object(A.jsx)(xe,{})]})}),Object(A.jsx)(ce,{}),Object(A.jsx)(le,{}),Object(A.jsx)(ge,{})]})},Ae=Object(j.a)({reducer:{posts:Y,auth:b,modals:N}});a.a.render(Object(A.jsx)(m.a,{store:Ae,children:Object(A.jsx)(Ce,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={post:"Post_post__7VWiG",postHeader:"Post_postHeader__1MH5m",postUserPhoto:"Post_postUserPhoto__uPql1",postInfo:"Post_postInfo__1F6n8",closeBtn:"Post_closeBtn__2-Yup",postContent:"Post_postContent__2lqS9",postContentImage:"Post_postContentImage__N4LbR",postActivities:"Post_postActivities__F-49k",postActivity:"Post_postActivity__36BI0",postActivityIcon:"Post_postActivityIcon__1xtgp"}},6:function(e,t,n){e.exports={hideComments:"Comments_hideComments__3WcKo",writeComment:"Comments_writeComment__3Ha1f",commentAvatar:"Comments_commentAvatar__1O-3e",commentForm:"Comments_commentForm__3lRcn",commentFormInput:"Comments_commentFormInput__pwj6E",commentFormButton:"Comments_commentFormButton__2hltp",commentsHolder:"Comments_commentsHolder__2fwHe",comment:"Comments_comment__2WfXa",commentBody:"Comments_commentBody__2KSVr",commentUsername:"Comments_commentUsername__1KcPX",commentText:"Comments_commentText__3mmUg",errorMessage:"Comments_errorMessage__1Ifnl"}},7:function(e,t,n){e.exports={header:"Header_header__RCiui",fixedHeader:"Header_fixedHeader__2ngQe",headerContainer:"Header_headerContainer__3vJq9",burgerMenu:"Header_burgerMenu__RsJ3G",logo:"Header_logo__3EIES",rightPanel:"Header_rightPanel__3E1o7",userBar:"Header_userBar__2swOw",userInfo:"Header_userInfo__3qHIM",userAvatar:"Header_userAvatar__1tGR1",authBtn:"Header_authBtn__3ZYOU"}},9:function(e,t,n){e.exports={controls:"Controls_controls__2Dh15",controlsTitle:"Controls_controlsTitle__1KJx8",control:"Controls_control__2zjWr",controlLabel:"Controls_controlLabel__1yI1T",toggle:"Controls_toggle__1dgPh",round:"Controls_round__1KHuN",roundSwitchedOn:"Controls_roundSwitchedOn__2GGve",infoField:"Controls_infoField__3WKgf"}}},[[44,1,2]]]);
//# sourceMappingURL=main.a85b92f9.chunk.js.map