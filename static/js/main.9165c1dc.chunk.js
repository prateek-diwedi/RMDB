(this["webpackJsonpmovie-database"]=this["webpackJsonpmovie-database"]||[]).push([[0],{32:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.ff8991fe.png"},39:function(e,t,a){e.exports=a(87)},44:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),i=(a(44),a(8)),o=a(1),s=a(3),m=a(33),d=a(16);a(45);var p=function(e){return c.a.createElement("div",{style:{background:"black",borderRadius:100,zIndex:50}},c.a.createElement(d.Spring,{from:{percentage:0},to:{percentage:e.rating},config:d.config.molasses},(function(e){var t=e.percentage,a=Math.round(t);return c.a.createElement(m.a,{percentage:a,text:"".concat(a,"%"),styles:{path:{transform:"rotate(180deg)",transformOrigin:"center center",stroke:t>=70?"#22D07A":"#D3D530"},trail:{strokeWidth:0},text:{fontSize:22,fontWeight:800,animation:"fadein 2s",fill:t>=70?"#22D07A":"#D3D530"}}})})))};var u=function(e){var t="";return t=void 0==e.type?"movie":e.type,c.a.createElement("div",null,c.a.createElement(i.b,{to:"/movie/".concat(e.id,"/").concat(t,"/").concat(e.title),style:{textDecoration:"none"}},c.a.createElement("div",{className:"card",id:"movieCardId",style:{width:"270px",border:"none",paddingBottom:"10%",textDecoration:"none",cursor:"pointer"}},c.a.createElement("div",{className:"MovieImage"},c.a.createElement("div",{className:"movieRating",style:{position:"absolute",paddingLeft:"10px",paddingTop:"370px",zIndex:10}},c.a.createElement("div",{className:"movierating",style:{width:"60px"}},c.a.createElement(p,{rating:e.rating}))),c.a.createElement("img",{src:e.poster,alt:"movieImage",style:{height:"400px",borderRadius:"5%"}})),c.a.createElement("div",{className:"movieTitle",style:{paddingTop:"14%",paddingLeft:"2%"}},c.a.createElement("h4",null," ",e.title," "),c.a.createElement("h6",null," ",e.character," ")))))},g=a(9),h=a.n(g);var v=function(){var e=Object(n.useState)({input:""}),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(o.e)();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3 col-md-3 col-xs-3"}),c.a.createElement("div",{className:"col-sm-6 col-md-6 col-xs-6"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search...","aria-label":"Search","aria-describedby":"button-addon2",onChange:function(e){return t=e.target.value,void r({input:t});var t},value:a.input}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return r({input:""}),l.push("/search/".concat(a.input)),void window.location.reload()},type:"button",id:"button-addon2"},"Search")))),c.a.createElement("div",{className:"col-sm-3 col-md-3 col-xs-3"}))},b=(a(82),a(35)),f=a.n(b);var E=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1),i=Object(s.a)(l,2),o=i[0],m=i[1],d=Object(n.useState)(null),p=Object(s.a)(d,2),g=p[0],b=p[1],E="https://api.themoviedb.org/3/trending/all/day?api_key=".concat("73a9009ae1660bba4b1b4f7fb59e2872","&page=").concat(o);Object(n.useEffect)((function(){h.a.get(E).then((function(e){var t=e.data;r(t.results),b(t.total_pages)}),(function(e){console.log("Error while fetching data ----\x3e",e)}))}),[o]);var N=a.map((function(e,t){var a;return a=null==e.poster_path||""==e.poster_path?"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWAFqXrJQ-ZGNDEA0AVJXXF2p55MWpuHRujST0xH9qFjiFNpln&usqp=CAU":"https://image.tmdb.org/t/p/w440_and_h660_face/"+e.poster_path,c.a.createElement(u,{key:e.id||100*Math.random(),id:e.id||100*Math.random(),title:e.title||e.name,rating:10*e.vote_average||0,poster:a,type:e.media_type})}));return c.a.createElement("div",null,c.a.createElement("h1",{id:"prateek",style:{display:"flex",justifyContent:"space-between",paddingLeft:"2%",paddingRight:"2%"}},c.a.createElement("img",{src:f.a,alt:"myLogo",style:{height:"50px"}}),c.a.createElement("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg",alt:"tmdb",style:{height:"50px"}})),c.a.createElement(v,null),0===a.length?c.a.createElement("img",{src:"https://i.imgur.com/FmYeL3j.gif",alt:"loading Image"}):c.a.createElement("div",null,c.a.createElement("h2",{style:{paddingLeft:"14%",paddingTop:"2%"}},"Popular Right Now"),c.a.createElement("div",{className:"card-columns",style:{padding:"5%",marginLeft:"9%"}},N),c.a.createElement("div",{className:"paginationButton",style:{display:"flex",justifyContent:"space-around",paddingBottom:"5%"}},c.a.createElement("button",{onClick:function(){a&&1!==o&&m(o-1)},className:"button"},c.a.createElement("i",{class:"fa  fa-chevron-left"}),"Previous"),c.a.createElement("button",{onClick:function(){a&&o!==g&&m(o+1)},className:"button"},"Next",c.a.createElement("i",{class:"fa  fa-chevron-right"})))))};var N=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(1),o=Object(s.a)(i,2),m=o[0],d=o[1],p=Object(n.useState)(null),g=Object(s.a)(p,2),b=g[0],f=g[1],E="https://api.themoviedb.org/3/search/multi?api_key=".concat("73a9009ae1660bba4b1b4f7fb59e2872","&language=en-US&query=").concat(e.match.params.movie,"&page=").concat(m,"&include_adult=false");Object(n.useEffect)((function(){h.a.get(E).then((function(e){var t=e.data;l(t.results),f(t.total_pages)}),(function(e){console.log("Error while fetching data ----\x3e",e)}))}),[m]);var N=r.map((function(e,t){var a;return a=null==e.poster_path||""==e.poster_path?"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWAFqXrJQ-ZGNDEA0AVJXXF2p55MWpuHRujST0xH9qFjiFNpln&usqp=CAU":"https://image.tmdb.org/t/p/w440_and_h660_face/"+e.poster_path,c.a.createElement(u,{key:e.id||100*Math.random(),id:e.id||100*Math.random(),title:e.title||e.name,rating:10*e.vote_average||0,poster:a,type:e.media_type})}));return c.a.createElement("div",null,c.a.createElement("h1",{id:"prateek"},"Movie Database"),c.a.createElement(v,null),c.a.createElement("h2",{style:{paddingLeft:"14%",paddingTop:"2%"}}," Showing Results For ",e.match.params.movie," "),c.a.createElement("div",{className:"card-columns",style:{padding:"5%",marginLeft:"9%"}},N),c.a.createElement("div",{className:"paginationButton",style:{display:"flex",justifyContent:"space-around",paddingBottom:"5%"}},c.a.createElement("button",{onClick:function(){r&&1!==m&&d(m-1)},className:"button"},c.a.createElement("i",{class:"fa  fa-chevron-left"})," Previous "),c.a.createElement("button",{onClick:function(){r&&m!==b&&d(m+1)},className:"button"}," Next ",c.a.createElement("i",{class:"fa  fa-chevron-right"}))))},y=a(36);var _=function(e){return c.a.createElement("div",null,c.a.createElement(i.b,{to:"/person/".concat(e.id,"/").concat(e.name),style:{textDecoration:"none",cursor:"pointer"}},c.a.createElement("div",null,c.a.createElement("div",{className:"card",id:"castCardId",style:{width:"270px",border:"none",textDecoration:"none",background:"transparent"}},c.a.createElement("div",{className:"MovieImage"},c.a.createElement("img",{src:e.image,alt:"movieImage",style:{height:"400px",borderRadius:"5%"}})),c.a.createElement("div",{className:"castName",style:{paddingLeft:"2%"}},c.a.createElement("h3",null," ",e.name," "),c.a.createElement("h6",null,e.character))))))};a(32);var k=function(e){var t,a=(t=e.releaseDate)?t.slice(0,4):"N/A";return c.a.createElement("div",null,c.a.createElement("div",{className:"card bg-dark text-white"},c.a.createElement("img",{className:"card-img",src:e.background,alt:"Card image"}),c.a.createElement("div",{className:"title"},c.a.createElement("p",null," ",e.title," ( ",a," ) "),c.a.createElement("p",{className:"tagline"}," ",e.tagLine," "),c.a.createElement("p",{className:"discription"}," ",e.overview," ")),c.a.createElement("div",{className:"movieCardRating"},c.a.createElement(p,{rating:e.rating})),c.a.createElement("div",{className:"card-img-overlay"},c.a.createElement("div",{className:"posterDiv"},c.a.createElement("img",{className:"moviePoster",src:e.image,alt:"movie poster"})))))};var j=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),m=o[0],d=o[1],p=e.match.params.id,u=e.match.params.type,g="https://image.tmdb.org/t/p/w440_and_h660_face/",v="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWAFqXrJQ-ZGNDEA0AVJXXF2p55MWpuHRujST0xH9qFjiFNpln&usqp=CAU",b="https://api.themoviedb.org/3/".concat(u,"/").concat(p,"?api_key=").concat("73a9009ae1660bba4b1b4f7fb59e2872","&language=en-US&append_to_response=credits");Object(n.useEffect)((function(){h.a.get(b).then((function(e){var t=e.data,a=e.data.credits;l(t),d(a.cast)}),(function(e){console.log("error while fetching movie data",e)}))}),[]);var f=m.map((function(e,t){var a;return a=null==e.profile_path||""==e.profile_path?v:g+e.profile_path,c.a.createElement(_,{key:e.id,id:e.id,character:e.character,name:e.name,image:a,order:e.order})})),E="";E=null==r.poster_path||""==r.poster_path?v:g+r.poster_path;var N="";return N=null==r.backdrop_path||""==r.backdrop_path?"https://www.pptgrounds.com/wp-content/uploads/2012/08/Blue-movie-film-strip-backgrounds.jpg":"https://image.tmdb.org/t/p/w1280/"+r.backdrop_path,c.a.createElement("div",null,c.a.createElement("div",{className:"movieInfoCard"},c.a.createElement(k,Object(y.a)({key:r.id,id:r.id,background:N,image:E,title:r.title||r.name,overview:r.overview||"N/A",releaseDate:r.release_date||"N/A",revenue:r.revenue||"N/A",tagLine:r.tagline||"N/A",rating:10*r.vote_average||0,homePage:r.homepage},"releaseDate",r.release_date||r.first_air_date))),c.a.createElement("div",{className:"castContainer"},c.a.createElement("h2",null," Cast ")),c.a.createElement("div",{className:"card-columns",style:{padding:"5%",marginLeft:"9%"}},f))};a(83);var w=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),m=o[0],d=o[1],p="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWAFqXrJQ-ZGNDEA0AVJXXF2p55MWpuHRujST0xH9qFjiFNpln&usqp=CAU",g=e.match.params.id,v="https://api.themoviedb.org/3/person/".concat(g,"?api_key=").concat("73a9009ae1660bba4b1b4f7fb59e2872","&language=en-US&append_to_response=credits");Object(n.useEffect)((function(){h.a.get(v).then((function(e){var t=e.data,a=e.data.credits.cast;l(t),d(a)}))}),[]);var b=m.map((function(e,t){var a;return a=null==e.poster_path||""==e.poster_path?p:"https://image.tmdb.org/t/p/w440_and_h660_face/"+e.poster_path,c.a.createElement(u,{key:e.id,id:e.id,poster:a,title:e.title,character:e.character})})),f="";f=null==r.profile_path||""==r.profile_path?p:"https://image.tmdb.org/t/p/w1280/"+r.profile_path;var E="";return E=2===r.gender?"Male":"Female",c.a.createElement("div",null,c.a.createElement("div",{className:"generalFacts"},c.a.createElement("div",{className:"actorImage"},c.a.createElement("img",{src:f,alt:r.name})),c.a.createElement("div",{className:"allfacts"},c.a.createElement("div",{className:"actorName"},c.a.createElement("h2",null,r.name)),c.a.createElement("div",{className:"knownFor"},c.a.createElement("h5",null,"Known For "),c.a.createElement("h6",null,r.known_for_department)),c.a.createElement("div",{className:"biography"},c.a.createElement("h5",null,"Biography "),c.a.createElement("h6",null,r.biography)),c.a.createElement("div",{className:"gender"},c.a.createElement("h5",null,"Gender "),c.a.createElement("h6",null,E)),c.a.createElement("div",{className:"birthday"},c.a.createElement("h5",null,"Birthday "),c.a.createElement("h6",null,r.birthday)),c.a.createElement("div",{className:"placeOfBirth"},c.a.createElement("h5",null,"Place of Birth "),c.a.createElement("h6",null,r.place_of_birth)))),c.a.createElement("div",{className:"also"},c.a.createElement("h4",null," Also known For ")),c.a.createElement("div",{className:"card-columns",style:{padding:"5%",marginLeft:"5%"}},b))},x=function(e){var t=e.checked,a=e.onChange;return c.a.createElement("span",{className:"toggle-control"},c.a.createElement("input",{className:"dmcheck",type:"checkbox",checked:t,onChange:a,id:"dmcheck"}),c.a.createElement("label",{htmlFor:"dmcheck"}))},A=a(37),O=(a(84),function(){var e=Object(A.a)(!1),t=Object(o.e)();return c.a.createElement("div",{className:"dark-mode-toggle"},c.a.createElement("div",{className:"backButton",onClick:function(){return t.goBack()}},c.a.createElement("i",{class:"fa fa-arrow-left my-float",style:{marginTop:"22px"}})),c.a.createElement("button",{type:"button",onClick:e.disable},"\u2600"),c.a.createElement(x,{checked:e.value,onChange:e.toggle}),c.a.createElement("button",{type:"button",onClick:e.enable},"\u263e"))});a(85),a(86);var C=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(O,null),c.a.createElement(o.a,{exact:!0,path:"/",component:E}),c.a.createElement(o.a,{exact:!0,path:"/search/:movie",component:N}),c.a.createElement(o.a,{exact:!0,path:"/movie/:id/:type/:movie",component:j}),c.a.createElement(o.a,{exact:!0,path:"/person/:id/:name",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.9165c1dc.chunk.js.map