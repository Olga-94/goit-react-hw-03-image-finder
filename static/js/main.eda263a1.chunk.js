(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{38:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),o=a.n(i),c=(a(38),a(10)),s=a.n(c),l=a(19),p=a(14),d=a(5),u=a(6),h=a(9),g=a(8),b=a(17),m=a.n(b),x="https://pixabay.com/api/",f="21849965-5d080cd355a76516303a4dd69";m.a.defaults.baseURL=x;var j,y=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,null,[{key:"getImages",value:function(){var e=Object(p.a)(s.a.mark((function e(t,a){var n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?q=".concat(t,"&page=").concat(a,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12\n        "),e.next=3,m.a.get(n);case 3:return r=e.sent,i=r.data,e.abrupt("return",i.hits);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),v=a(28),O=a(29).a.div(j||(j=Object(v.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n"]))),w=a(18),k=(a(62),a(63),a(64),function(){Object(w.info)({title:"Invalid request",text:"The search field is empty!",delay:2e3})}),S=a(2);var I=Object(S.a)("header",{target:"e1j2kal64"})({name:"1iqqyg4",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;margin-bottom:25px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),C=Object(S.a)("form",{target:"e1j2kal63"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),q=Object(S.a)("button",{target:"e1j2kal62"})({name:"1a3m8tj",styles:"display:inline-block;width:48px;height:48px;border:0;background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}"}),z=Object(S.a)("span",{target:"e1j2kal61"})({name:"jnnlmv",styles:"position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0"}),Q=Object(S.a)("input",{target:"e1j2kal60"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),D=a(1),L=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleInputChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):k()},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(D.jsx)(I,{children:Object(D.jsxs)(C,{onSubmit:this.handleSubmit,children:[Object(D.jsx)(q,{type:"submit",children:Object(D.jsx)(z,{children:"Search"})}),Object(D.jsx)(Q,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images",name:"searchQuery",value:this.state.searchQuery,onChange:this.handleInputChange})]})})}}]),a}(n.Component);var M=Object(S.a)("li",{target:"e1af4p3x1"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),B=Object(S.a)("img",{target:"e1af4p3x0"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"});function E(e){var t=e.tags,a=e.previewImg,n=e.selectedImage;return Object(D.jsx)(M,{children:Object(D.jsx)(B,{src:a,alt:t,onClick:n})})}var F=Object(S.a)("ul",{target:"eqr0ccf2"})({name:"1snesqn",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;padding:0;list-style:none;margin-left:auto;margin-right:auto"});Object(S.a)("li",{target:"eqr0ccf1"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),Object(S.a)("img",{target:"eqr0ccf0"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"});function T(e){var t=e.images,a=e.selectedImage;return Object(D.jsx)(F,{children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,i=e.largeImageURL;return Object(D.jsx)(E,{previewImg:n,tags:r,selectedImage:function(){return a(i,r)}},t)}))})}var U=Object(S.a)("button",{target:"e1p727000"})({name:"1plhqif",styles:"padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:block;margin-left:auto;margin-right:auto;margin-bottom:15px;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;min-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,&:focus{background-color:#303f9f;}"});function A(e){var t=e.onClick;return Object(D.jsx)(U,{type:"button",onClick:t,children:"Load more"})}var K=a(31),R=a.n(K);var J=Object(S.a)("div",{target:"eb9kh8h0"})({name:"1o321lm",styles:"position:fixed;display:flex;justify-content:center;align-items:center;width:100vw;height:100vh"});function P(){return Object(D.jsx)(J,{children:Object(D.jsx)(R.a,{type:"ThreeDots",color:"#3f51b5",height:200,width:200,timeout:3e4})})}var _=Object(S.a)("div",{target:"e1d5aw6f2"})({name:"1xsp4p2",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200;padding-top:40px;padding-bottom:40px;margin-bottom:20px"}),H=Object(S.a)("div",{target:"e1d5aw6f1"})({name:"t7kutg",styles:"position:relative;display:flex;justify-content:center;align-items:center;width:70vw;height:auto;margin:auto;border-radius:4px;overflow:hidden"}),W=Object(S.a)("img",{target:"e1d5aw6f0"})({name:"1vfhcql",styles:"object-fit:cover"}),G=document.querySelector("#modal-root"),N=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.selectedImg,a=e.tags;return Object(i.createPortal)(Object(D.jsx)(_,{onClick:this.handleBackdropClick,children:Object(D.jsx)(H,{children:Object(D.jsx)(W,{src:t,alt:a})})}),G)}}]),a}(n.Component),V=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",page:1,images:[],selectedImg:null,alt:null,status:"idle"},e.handleFormSubmit=function(t){e.state.searchQuery!==t&&(e.resetState(),e.setState({searchQuery:t}))},e.loadMoreBtnClick=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleSelectedImage=function(t,a){e.setState({selectedImg:t,alt:a})},e.closeModal=function(){e.setState({selectedImg:null})},e.resetState=function(){e.setState({searchQuery:"",page:1,images:[],selectedImg:null,alt:null,status:"idle"})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(p.a)(s.a.mark((function e(t,a){var n,r,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.searchQuery,i=n.page,a.searchQuery===r&&a.page===i){e.next=17;break}return this.setState({status:"pending"}),e.prev=3,e.next=6,y.getImages(r,i);case 6:if((o=e.sent).length){e.next=9;break}throw new Error;case 9:this.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(o)),status:"resolved"}})),i>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),Object(w.error)({title:"Invalid request",text:"Please enter the right query!",delay:2e3}),this.setState({status:"rejected"});case 17:case"end":return e.stop()}}),e,this,[[3,13]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,a=e.selectedImg,n=e.alt,r=e.status;return"idle"===r?Object(D.jsx)(L,{onSubmit:this.handleFormSubmit}):"pending"===r?Object(D.jsxs)(O,{children:[Object(D.jsx)(L,{onSubmit:this.handleFormSubmit}),Object(D.jsx)(T,{images:t,selectedImage:this.handleSelectedImage}),Object(D.jsx)(P,{}),t.length>0&&Object(D.jsx)(A,{onClick:this.loadMoreBtnClick})]}):"resolved"===r?Object(D.jsxs)(O,{children:[Object(D.jsx)(L,{onSubmit:this.handleFormSubmit}),Object(D.jsx)(T,{images:t,selectedImage:this.handleSelectedImage}),a&&Object(D.jsx)(N,{selectedImg:a,tags:n,onClose:this.closeModal}),t.length>0&&Object(D.jsx)(A,{onClick:this.loadMoreBtnClick})]}):"rejected"===r?Object(D.jsx)(O,{children:Object(D.jsx)(L,{onSubmit:this.handleFormSubmit})}):void 0}}]),a}(n.Component),X=a(32),Y=a.n(X);o.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(V,{})}),document.getElementById("root")),Y.a.polyfill()}},[[86,1,2]]]);
//# sourceMappingURL=main.eda263a1.chunk.js.map