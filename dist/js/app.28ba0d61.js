(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],d=0,g=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&g.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(g.length)g.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1acb":function(t,e,n){},"1cdd":function(t,e,n){},"1ff7":function(t,e,n){t.exports=n.p+"img/ayla_logo_dk.f03edaed.png"},"20aa":function(t,e,n){},2262:function(t,e,n){},2944:function(t,e,n){"use strict";var a=n("3ac4"),s=n.n(a);s.a},"2d51":function(t,e,n){},"3a6d":function(t,e,n){},"3ac4":function(t,e,n){},"3bd5":function(t,e,n){"use strict";var a=n("c891"),s=n.n(a);s.a},"4a5f":function(t,e,n){t.exports=n.p+"img/ayla_logo.642aa875.png"},"4bca":function(t,e,n){"use strict";var a=n("1cdd"),s=n.n(a);s.a},"4f63":function(t,e,n){"use strict";var a=n("61a2"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TopBar"),n("NavBar"),n("Hero"),n("LogoBar"),n("Noteworthy"),n("Featured"),n("Explore"),n("About"),n("Testimonials"),n("Blogs"),n("Instagram"),n("Footer")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topbar"},[t.switchOut?t._e():n("TextBlock",{staticClass:"topbar__text psmall topbar__text--message",attrs:{textContent:t.text}}),n("div",{staticClass:"topbar_desktopButtons"},[n("TextBlock",{staticClass:"topbar__text--inverted",attrs:{textContent:t.guide}}),n("TextBlock",{staticClass:"topbar__text psmall topbar__text--link",attrs:{textContent:t.blog}})],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n  "+t._s(t.textContent)+"\n")])},c=[],u={name:"text-block",props:["textContent"]},d=u,g=n("2877"),m=Object(g["a"])(d,l,c,!1,null,"080e70d0",null),f=m.exports,p={name:"top-bar",components:{TextBlock:f},data:function(){return{text:"Free, fast shipping on all orders over $35!",guide:"Let Us Guide You",blog:"Our Blog"}},computed:{switchOut:function(){return window.onresize=function(){var t=window.innerWidth;if(t>1200)return!0},!1}}},h=p,C=(n("3bd5"),Object(g["a"])(h,r,i,!1,null,"1aa21fc1",null)),x=C.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},[n("div",{staticClass:"navigation__left"},[n("div",{staticClass:"navigation__leftIcons"},[n("Hamburger"),n("Search")],1)]),n("div",{staticClass:"navigation__center"},[n("div",{staticClass:"navigation__logo"},[n("Logo",{attrs:{version:t.logoVersion}})],1)]),n("div",{staticClass:"navigation__right"},[n("Bag"),n("CartCounter",{staticClass:"navigation__cartCount"})],1)])},b=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.alternate?a("img",{attrs:{src:n("1ff7"),alt:""}}):a("img",{attrs:{src:n("4a5f"),alt:""}})},w=[],L={name:"logo",props:["version"],data:function(){return{}},computed:{alternate:function(){return"light"!=this.version}}},T=L,B=Object(g["a"])(T,_,w,!1,null,"7dcbf731",null),y=B.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon_hamburger"},[n("svg",{attrs:{width:"25px",height:"14px",viewBox:"0 0 25 14",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"Homepage",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(-19.000000, -44.000000)",id:"Group-8"}},[n("g",[n("g",{attrs:{id:"iconmonstr-menu-thin",transform:"translate(19.000000, 44.000000)"}},[n("path",{attrs:{d:"M25,12.5 L25,13.5 L0,13.5 L0,12.5 L25,12.5 Z M25,6.5 L25,7.5 L0,7.5 L0,6.5 L25,6.5 Z M25,0.5 L25,1.5 L0,1.5 L0,0.5 L25,0.5 Z",id:"Shape",fill:"#1040E2"}}),n("path",{attrs:{d:"M25,13.5 L0,13.5 L0,12.5 L25,12.5 L25,13.5 Z M25,7.5 L0,7.5 L0,6.5 L25,6.5 L25,7.5 Z M25,1.5 L0,1.5 L0,0.5 L25,0.5 L25,1.5 Z",id:"Shape",fill:"#5C4141"}})])])])])])])},E=[],I={},k=I,A=Object(g["a"])(k,O,E,!1,null,"76843e86",null),S=A.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon__search"},[n("svg",{attrs:{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"Homepage",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(-67.000000, -44.000000)",fill:"#5C4141","fill-rule":"nonzero",id:"Group-8"}},[n("g",[n("g",{attrs:{id:"Group-2",transform:"translate(67.000000, 41.000000)"}},[n("g",{attrs:{id:"magnifying-glass",transform:"translate(0.000000, 2.500000)"}},[n("path",{attrs:{d:"M14.8702595,14.7350333 L11.2242182,11.0898004 C12.2022621,9.96563193 12.7944112,8.49889135 12.7944112,6.89578714 C12.7944112,3.36696231 9.92348636,0.5 6.39720559,0.5 C2.86759814,0.5 0,3.37028825 0,6.89578714 C0,10.421286 2.87092482,13.2915743 6.39720559,13.2915743 C8.00066534,13.2915743 9.4677312,12.6995565 10.592149,11.7217295 L14.2381903,15.3669623 C14.324684,15.4534368 14.4411178,15.5 14.5542249,15.5 C14.667332,15.5 14.7837658,15.4567627 14.8702595,15.3669623 C15.0432468,15.1940133 15.0432468,14.9079823 14.8702595,14.7350333 Z M0.894876913,6.89578714 C0.894876913,3.86252772 3.36327345,1.39800443 6.39387891,1.39800443 C9.42781104,1.39800443 11.8928809,3.86585366 11.8928809,6.89578714 C11.8928809,9.92572062 9.42781104,12.3968958 6.39387891,12.3968958 C3.36327345,12.3968958 0.894876913,9.92904656 0.894876913,6.89578714 Z",id:"Shape"}})])])])])])])])},j=[],R={},M=R,F=Object(g["a"])(M,H,j,!1,null,"c676d87e",null),q=F.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon__bag"},[n("svg",{attrs:{width:"15px",height:"18px",viewBox:"0 0 15 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"Homepage",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(-319.000000, -41.000000)",fill:"#5C4141","fill-rule":"nonzero",id:"Group-8"}},[n("g",[n("g",{attrs:{id:"Group-2",transform:"translate(67.000000, 41.000000)"}},[n("g",{attrs:{id:"shopping-bag",transform:"translate(252.000000, 0.000000)"}},[n("path",{attrs:{d:"M14.9961676,15.5595092 L13.9230966,3.95337423 C13.9001022,3.69570552 13.6739908,3.5006135 13.4095554,3.5006135 L11.202095,3.5006135 C11.1714359,1.56441718 9.52350537,0 7.5,0 C5.47649463,0 3.82856413,1.56441718 3.79790496,3.5006135 L1.59044456,3.5006135 C1.3221768,3.5006135 1.0998978,3.69570552 1.07690342,3.95337423 L0.00383239653,15.5595092 C0.00383239653,15.5742331 0,15.5889571 0,15.603681 C0,16.9251534 1.26085846,18 2.81297905,18 L12.187021,18 C13.7391415,18 15,16.9251534 15,15.603681 C15,15.5889571 15,15.5742331 14.9961676,15.5595092 Z M7.5,0.993865031 C8.95247828,0.993865031 10.1366888,2.11288344 10.167348,3.5006135 L4.83265202,3.5006135 C4.86331119,2.11288344 6.04752172,0.993865031 7.5,0.993865031 Z M12.187021,17.006135 L2.81297905,17.006135 C1.83955033,17.006135 1.05007665,16.3877301 1.03474706,15.6257669 L2.06182933,4.49815951 L3.79407256,4.49815951 L3.79407256,6.00736196 C3.79407256,6.28343558 4.02401635,6.50429448 4.31144609,6.50429448 C4.59887583,6.50429448 4.82881962,6.28343558 4.82881962,6.00736196 L4.82881962,4.49815951 L10.167348,4.49815951 L10.167348,6.00736196 C10.167348,6.28343558 10.3972918,6.50429448 10.6847215,6.50429448 C10.9721513,6.50429448 11.202095,6.28343558 11.202095,6.00736196 L11.202095,4.49815951 L12.9343383,4.49815951 L13.9652529,15.6257669 C13.9499234,16.3877301 13.1566173,17.006135 12.187021,17.006135 Z",id:"Shape"}})])])])])])])])},P=[],G={},N=G,X=Object(g["a"])(N,U,P,!1,null,"4f1500b6",null),K=X.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart__counter"},[n("span",{staticClass:"count"},[t._v("3")])])}],Q={},z=Q,D=(n("f327"),Object(g["a"])(z,W,Y,!1,null,"573f68f8",null)),V=D.exports,Z={name:"navigation",components:{Logo:y,Hamburger:S,Search:q,Bag:K,CartCounter:V},data:function(){return{logoVersion:"dark"}}},J=Z,$=(n("79e4"),Object(g["a"])(J,v,b,!1,null,"356121d8",null)),tt=$.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[n("div",{staticClass:"hero__desktopContent"},[n("div",{staticClass:"hero__headlineBlock"},[n("HeadingText",{staticClass:"hero__headline h1",attrs:{headingContent:t.heading}}),n("div",{staticClass:"hero__textBlock"},[n("TextBlock",{staticClass:"hero__text",attrs:{textContent:t.text}})],1),n("div",{staticClass:"hero__buttonBlock"},t._l(t.buttons,(function(t,e){return n("Btn",{key:e,staticClass:"hero__button",attrs:{buttonText:t}})})),1)],1)]),n("div",{staticClass:"hero__mobileContent"},[n("div",{staticClass:"hero__mobileContent--top"},[n("div",{staticClass:"hero__headlineBlock"},[n("HeadingText",{staticClass:"hero__headline",attrs:{headingContent:t.heading}})],1)]),n("div",{staticClass:"hero__mobileContent--bottom"},[n("div",{staticClass:"hero__buttonBlock"},t._l(t.buttons,(function(t,e){return n("Btn",{key:e,staticClass:"hero__button btnMd",attrs:{buttonText:t}})})),1),n("div",{staticClass:"hero__textBlock"},[n("TextBlock",{staticClass:"hero__text",attrs:{textContent:t.text}})],1)])])])},nt=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.secondary?n("h2",[t._v(t._s(t.headingContent))]):n("h1",[t._v(t._s(t.headingContent))])},st=[],ot={name:"heading-block",props:["headingContent","size"],computed:{secondary:function(){return"small"==this.size}}},rt=ot,it=Object(g["a"])(rt,at,st,!1,null,"351954d6",null),lt=it.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{staticClass:"button",class:t.buttonClass,attrs:{type:"button",value:t.buttonText},on:{click:function(t){t.preventDefault()}}})},ut=[],dt={name:"button-component",props:["buttonText","buttonClass"]},gt=dt,mt=Object(g["a"])(gt,ct,ut,!1,null,"491fc5ee",null),ft=mt.exports,pt={name:"hero",components:{HeadingText:lt,Btn:ft,TextBlock:f},data:function(){return{buttons:["Shop Products","Consult Our Experts","Come , Meet Us"],heading:"Lorem ipsum dolor sit amet,",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}},ht=pt,Ct=(n("d474"),Object(g["a"])(ht,et,nt,!1,null,"aa5b434a",null)),xt=Ct.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logobar"},[n("Headline",{staticClass:"logobar__heading",attrs:{headingContent:t.headlineText,size:t.small}}),t._m(0)],1)},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logobar__logos"},[a("img",{staticClass:"logobar__logo",attrs:{src:n("8599"),alt:""}}),a("img",{staticClass:"logobar__logo",attrs:{src:n("684e"),alt:""}}),a("img",{staticClass:"logobar__logo",attrs:{src:n("f8fc"),alt:""}}),a("img",{staticClass:"logobar__logo",attrs:{src:n("b65c"),alt:""}})])}],_t={name:"logo-bar",components:{Headline:lt},data:function(){return{logos:["../../assets/nytimes.png","../../assets/allure.png","../../assets/goop.png","../../assets/wallpaper.png"],headlineText:"As Seen In"}}},wt=_t,Lt=(n("714f"),Object(g["a"])(wt,vt,bt,!1,null,"e21e4f2e",null)),Tt=Lt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"noteworthy"},[n("Headline",{staticClass:"noteworthy__heading",attrs:{size:t.headingSize,headingContent:t.heading}}),n("TextBlock",{staticClass:"noteworthy__text",attrs:{textContent:t.textContent}}),n("Carousel",{attrs:{noteworthySlides:t.noteSlides}})],1)},yt=[],Ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel"},[n("img",{attrs:{src:"https://via.placeholder.com/250x250",alt:""}}),n("p",{staticClass:"plarge carousel__text"},[t._v("Slide Title")])])}],It={name:"carousel",props:["images"],data:function(){return{products:{}}}},kt=It,At=(n("b78d"),Object(g["a"])(kt,Ot,Et,!1,null,"6c2772b3",null)),St=At.exports,Ht={name:"noteworthy",components:{Headline:lt,TextBlock:f,Carousel:St},data:function(){return{heading:"What's Noteworthy",textContent:"Specially Crafted for You",noteSlides:{},headingSize:"small"}}},jt=Ht,Rt=(n("aa7d"),Object(g["a"])(jt,Bt,yt,!1,null,"f22f4a68",null)),Mt=Rt.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"featured"},[n("FeaturedHeading",{staticClass:"featured__header",attrs:{size:t.headingSize,headingContent:t.headingContent}}),n("FeaturedImage",{staticClass:"featured__image",attrs:{imgUrl:t.imgUrl}}),n("FeaturedHeading",{staticClass:"featured__brandName",attrs:{size:t.headingSize,headingContent:t.brandName}}),n("div",{staticClass:"featured__description"},[n("TextBlock",{staticClass:"featured__text",attrs:{textContent:t.textContent}}),n("FeaturedHeading",{staticClass:"featured__carouselHeading plarge",attrs:{headingContent:t.featuredCarouselTitle}}),n("Carousel"),n("div",{staticClass:"carousel__info"},[n("TextBlock",{attrs:{textContent:t.productTitle}})],1),n("ButtonBar",{staticClass:"btnMd secondary",attrs:{buttonText:t.btnText}}),t._m(0)],1)],1)},qt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"featured__link"},[n("a",{attrs:{href:"#"}},[t._v("See All Brands")])])}],Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:t.imgUrl,alt:""}})},Pt=[],Gt={name:"image",props:["imgUrl"]},Nt=Gt,Xt=Object(g["a"])(Nt,Ut,Pt,!1,null,"56c7fb78",null),Kt=Xt.exports,Wt={name:"featured",components:{FeaturedHeading:lt,FeaturedImage:Kt,TextBlock:f,Carousel:St,ButtonBar:ft},data:function(){return{featuredCarouselTitle:"MyHavtron Products",headingContent:"Featured Brand",brandName:"Name of Brand",imgUrl:"https://via.placeholder.com/250x250",textContent:"MyHavtorn is a small company from Sweden's Bollebygd Valley that has sustainably grown and harvested its own sea buckthorn for the past 100 years. To avoid irritating preservatives, MyHavtorn freshly makes their sea buckthorn oil just for us. Their vitamin- and EFA-rich products work wonders on sensitive skin & rosacea.",btnText:"See All Myhavtron products",btnClass:"featured__button",headingSize:"small",productTitle:"Product Title"}}},Yt=Wt,Qt=(n("2944"),Object(g["a"])(Yt,Ft,qt,!1,null,"008dcfd6",null)),zt=Qt.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"explore"},[n("ExploreHeader",{staticClass:"explore__heading",attrs:{size:t.headingSize,headingContent:t.headingText}}),n("TextBlock",{staticClass:"explore__text",attrs:{textContent:t.exploreText}}),n("Carousel",{staticClass:"explore__carousel"})],1)},Vt=[],Zt={name:"explore",components:{Carousel:St,ExploreHeader:lt,TextBlock:f},data:function(){return{headingText:"Explore More",headingSize:"small",exploreText:"Lorem ipsum dolor sit amet"}}},Jt=Zt,$t=(n("4f63"),Object(g["a"])(Jt,Dt,Vt,!1,null,"62870882",null)),te=$t.exports,ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("AboutImage"),t._m(0),n("div",{staticClass:"about__textContent"},[n("Heading",{staticClass:"about__heading",attrs:{headingContent:t.heading,size:t.headingSize}}),n("TextBlock",{staticClass:"about__text",attrs:{textContent:t.text}}),n("AboutButton",{staticClass:"about__button",attrs:{buttonText:t.button}})],1)],1)},ne=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inlineImage",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://via.placeholder.com/250x250",alt:""}})])}],ae={name:"about",components:{AboutImage:Kt,Heading:lt,TextBlock:f,AboutButton:ft},data:function(){return{headingSize:"small",heading:"About",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",button:"Know More"}}},se=ae,oe=(n("4bca"),Object(g["a"])(se,ee,ne,!1,null,"604a438c",null)),re=oe.exports,ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonial"},[n("Carousel"),n("TextBlock",{staticClass:"testimonial__text h2",attrs:{textContent:t.text}}),n("TextBlock",{staticClass:"testimonial__name",attrs:{textContent:t.testiName}})],1)},le=[],ce={name:"testimonial",components:{Carousel:St,TextBlock:f},data:function(){return{text:"“Awesome. It already healed a red pimple scar on my chin”",testiName:"Sarita"}}},ue=ce,de=(n("80b3"),Object(g["a"])(ue,ie,le,!1,null,"5330304a",null)),ge=de.exports,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blogs"},[n("BlogsHeading",{staticClass:"blogs__heading",attrs:{headingContent:t.heading}}),t._l(t.blogPosts,(function(t,e){return n("BlogPost",{key:e,attrs:{topic:t.topic,title:t.title,image:t.image}})})),n("div",{staticClass:"blogs__buttonBar"},[n("BlogsButton",{staticClass:"blogs__button",attrs:{buttonText:t.btnText,buttonClass:"btnMd secondary"}})],1)],2)},fe=[],pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blogPost"},[n("BlogImg",{attrs:{imgUrl:t.image}}),n("BlogText",{staticClass:"blogPost__text--topic",attrs:{textContent:t.topic}}),n("BlogHeading",{staticClass:"blogPost__title h3",attrs:{headingContent:t.title}}),t._m(0)],1)},he=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blogPost__text--link"},[n("a",[t._v("Read More")])])}],Ce={name:"blog-post",props:["title","topic","image"],components:{BlogImg:Kt,BlogText:f,BlogHeading:lt},data:function(){return{}}},xe=Ce,ve=(n("6558"),Object(g["a"])(xe,pe,he,!1,null,"2ad3d14a",null)),be=ve.exports,_e={name:"blogs",components:{BlogsHeading:lt,BlogPost:be,BlogsButton:ft},data:function(){return{heading:"Our Latest Blogs",blogPosts:[{image:"https://via.placeholder.com/250x250",topic:"Skincare Concerns",title:"Kristina Holey & Marie Veronique On Perioral Dermatitis"},{image:"https://via.placeholder.com/250x250",topic:"Inside Our Brands",title:"The Story Behind Foot Therapy"}],btnText:"See All Blog Posts"}}},we=_e,Le=(n("aa81"),Object(g["a"])(we,me,fe,!1,null,"a32cd168",null)),Te=Le.exports,Be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"instagram"},[n("InstaHeading",{staticClass:"instagram__heading h2",attrs:{headingContent:t.instaHeading}}),n("Carousel",{attrs:{images:t.instaFeed}})],1)},ye=[],Oe={name:"instagram",components:{InstaHeading:lt,Carousel:St},data:function(){return{instaHeading:"Our Insta Feed",instaFeed:{}}}},Ee=Oe,Ie=(n("b012"),Object(g["a"])(Ee,Be,ye,!1,null,"5b34615e",null)),ke=Ie.exports,Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"})},Se=[],He={name:"site-footer",components:{},data:function(){return{twitter:"twitter",pinterest:"pinterest",facebook:"facebook",instagram:"instagram",bag:"bag",search:"search",hamburger:"hamburger"}}},je=He,Re=(n("6741"),Object(g["a"])(je,Ae,Se,!1,null,"79b3df68",null)),Me=Re.exports,Fe={name:"app",components:{TopBar:x,NavBar:tt,Hero:xt,LogoBar:Tt,Noteworthy:Mt,Featured:zt,Explore:te,About:re,Testimonials:ge,Blogs:Te,Instagram:ke,Footer:Me}},qe=Fe,Ue=(n("5c0b"),Object(g["a"])(qe,s,o,!1,null,null,null)),Pe=Ue.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Pe)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("1acb"),s=n.n(a);s.a},"61a2":function(t,e,n){},6558:function(t,e,n){"use strict";var a=n("ee5c"),s=n.n(a);s.a},6741:function(t,e,n){"use strict";var a=n("7b4d"),s=n.n(a);s.a},"684e":function(t,e){t.exports="data:image/png;base64,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"},"714f":function(t,e,n){"use strict";var a=n("a7bc"),s=n.n(a);s.a},"79e4":function(t,e,n){"use strict";var a=n("20aa"),s=n.n(a);s.a},"7b4d":function(t,e,n){},"80b3":function(t,e,n){"use strict";var a=n("cd1d"),s=n.n(a);s.a},"857a":function(t,e,n){},8599:function(t,e,n){t.exports=n.p+"img/_nytimes2.461ffefe.png"},"9f44":function(t,e,n){},a7bc:function(t,e,n){},a88d:function(t,e,n){},aa7d:function(t,e,n){"use strict";var a=n("a88d"),s=n.n(a);s.a},aa81:function(t,e,n){"use strict";var a=n("857a"),s=n.n(a);s.a},b012:function(t,e,n){"use strict";var a=n("3a6d"),s=n.n(a);s.a},b65c:function(t,e,n){t.exports=n.p+"img/_wallpaper2.22a3cd75.png"},b78d:function(t,e,n){"use strict";var a=n("2262"),s=n.n(a);s.a},c891:function(t,e,n){},cd1d:function(t,e,n){},d474:function(t,e,n){"use strict";var a=n("2d51"),s=n.n(a);s.a},ee5c:function(t,e,n){},f327:function(t,e,n){"use strict";var a=n("9f44"),s=n.n(a);s.a},f8fc:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAAxCAYAAAD9T50MAAAHi0lEQVR4nO2dbYiVRRTH/7mmbW9CYcLiolgrZmTCEkJFgixCRX2wiMAvIhURJCxSH4yiIioIQyToQ2Ekhb3Yh0ihNC0qwsqyFzR7sQx3tXVdc3XXdd29e2O4Z7jTzJnnee6693pf/j8Ydu88Z87zPPfeOc+ZM2fmghBCCCGEEEIIIYQQQgghhBAiTAGwEUAOwCEAC/nGEEKyMhvAKQB5pwwDaOE7SKqJJn4aVct+AFd4F2c+r34Anzf6m0Oqh0n8LKqSVQBmRC7sUFBDCCGKochLLMQdzvxD75EQkoURADslsLoUwHsA1tGAkGpkMj+VqmIRgLvFWHwoQ5ptUsbLfAC3AGiT4esBAF8B+GGCbtzoXQxgrlz3QdH/XSBZGtMBHBdvzOU2AAvktTnHJ7Xx0RJSPh6Sjm28jzEAZwAMAhiV10MAvgHQUcIVmKngT6VtXvQMSrFDJHOer8UAlMo8ANsBnBbdY/L/gKN/WDr50hKvewOAPtFlPa85Ekw+6w3v7H28HmgipAG4XmIcbofY6tx2u2MErCHYnWFIs0NkbbvDAG50js8Xo+XrbQ406WzxYjXHxNOxmA6/z9P/M4BpijZjNJ4VYzPoXfeIyGzy6mOlu4R7IKTm6ZBO4naIU8pN3a90mB6JlfiYTnrUkz0ZSBXpUc7fFkgVaZaO6rY5HUgV+VuRtclyTU7wOFaMJ9YrBsR4JV3yNyafl6EUIXXPNHHB/Q6gxT2mSGfyZT8LJEMDYsqDgVSRDkV+UMlNsXQp8msCqSLtigdxxkmWWw3gT0WnbwTv8vSuirwntrwYXAkhdca7yhfflGcitzmoyOa8PJKPFJmzgaYQPyPWlL2BFPC2Ijca8YhcjivtDngy6xUZqz/GHYqByuIdEVIXnFC++KasjNzcv4qsKY/I8bZIh8ri2u9S2uW9p3+Lkq+Sl3hOGtuUdqYs99pp+kdSdG9X2mjXT8oMM1Yrz8WRMw4GNQXGgpoCs+XvWgAXBEcLwc00dkWOv+D9r31PfI9C4wulDhJMdfGncbPwgBgMjXuVOlImtC8HKS+xL34sZyc2G2M78a3BkQK/BTUhPwU1Ba5xznt7cPT/508ipr91AmZSDoqXprFAqSNlgkak8nRHznhVUFNAizsY7+R96YiXBUcLdAU1IUeCmgIXyhQ0IlOzyDicORzUFDAG6uagtnS0+A3ECJIKQSNSeR6LnFF7ehojMTWoLczOmCnaWZGhDFKmdy39QU0R0xEvTfCEtClpTSbmeV0b1JTOr5EWQ0ENKRs0IpVnM4B3lLNqGanLlc+o28kCvShoUSQWS3FJikVMjXhBlqTZE0uS/iTdWTkWkcsSDyITBI3I+eE+AE9707AzAXQ6r1tk0Z3F5ofMdDrn0YSrzxJzSDJCPeKpxDyJc9UfG+qUQsxL2hPUEFLHPCdPVDs9OSD5FTahakiMR3vkLRhWpjiT8k5clint8uLFTBe5IeW4KS8H2kKWKO2s/jmOtLYmJm2KF7LORtN/UyBJykZsRoCUn4cBPCqeBWSKd0AWnx2SRXcfZFgN2+V1SMusoCYkluZ+UlLOIbMw1wUSxSnmJGIyQ5Kteq5o1z8gq4gJqVuavAVqvSWudPXpVJ7EpnwbSIbEsmdfdSRXKMdN+SXQFvKK0i4vM0sumieSJebSq7RbF0gRUmfs8L70E7GD+0mlM50IpEIOKu2GZVbGpU+RiyXHuexT2o04QyWLZkRyCet4IMf8TNcsM1KE1DTNyurd4/L0XCFrQhbLmL5dcjVmK53aZ5mS+u7HHXyaIwvZOgPJwsyRllofi9NYNOOgxWo0uXyKh7ZRMTpLAilC6oz5kc4YK3bDn5x4CIel82ibOL+k6NgZSBXRgpKbAqkiTyrXvjuQKrJW0b81kCoQMyIx+TbPAI6lrFgmpG6YoXTE8ZRRMRo+TyidS/Ms7vGuI5cxlrBK8aSeCqQKWxjmvOvYEEgViRmRnOhyWeLNGA0oMoTUNUeUzjLeslp5o8xT+kevE5sNgt6QjvyH17n3ZxiWuLRK0NbVbxLg3gTwmugbc/Qf8HY+04gZEVt6JJDb5+g+zW0RSaPSGtmUaDwlKW29RYYUeyXIavdY7ZeOvj4lZpKGCY4+L4vsXP0muPm7zMzMS9Fh0YxITq5xt0xjd0ug9i2JHRHSsGySIcGIs7HxeIc4Y5H4SK2hGZEsyWakCmCyWeVoEtd+lnSQuTLF2iwJZ5fLepVJImv2HblEPIqFMkPSqlztleLuE0LqHHf2RAtGZmGN4vLHlurXEvRECMmAm12ZFmhMwo2n9CbI1RI0IjUMV/FWDnetSFISVRruytXHU2RrBW1PFK2OkIZmkRNAPROJb6TxsfOk3pIiWyvENprOlzj1TEhD0Okkg43KQre02ZUm+RGrI067LMvwq50pkq4f280+L1PHK1PW0BDScMyRXdBt5qf9nVyz/P97Wca+RxLE+p3f6B2W35dpqZM3TFucFysnJmgnNFIGOO48v5jfR7kTwA0ArnaeuDYL9C8xLGZLxS/r7N47ZIFh2pL/yWJgNwdHCCGEEEIIIYQQQgghhBBCCGksAPwHsCdtI6PDBiMAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.28ba0d61.js.map