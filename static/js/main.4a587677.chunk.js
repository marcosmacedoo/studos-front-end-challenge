(this["webpackJsonpstudos-front-end-challenge"]=this["webpackJsonpstudos-front-end-challenge"]||[]).push([[0],{24:function(e,t,i){"use strict";i.r(t);var a=i(1),r=i.n(a),n=i(9),c=i.n(n),s=i(3),o=i(2),d=Object(o.a)({header:{padding:{top:"1.25rem",bottom:"2rem"},gridColumn:"span 12",gridRow:"1 / 2",display:"flex",alignItems:"center",justifyContent:"space-between","& > div":{display:"flex",alignItems:"center",justifyContent:"space-between","& > img":{marginRight:"1.5rem",width:"3.4375rem",height:"3.4375rem",borderRadius:"50%","@media (max-width: 768px)":{marginRight:"1rem"}},"& > h1":{fontSize:"1.375rem"}},"& > :nth-child(2)":{"& > label":{fontSize:"1rem","@media(max-width: 768px)":{visibility:"hidden"}}}}}),l=Object(o.a)((function(e){return{toggleButton:{marginLeft:"1.25rem",height:"1.875rem",width:"3.75rem",borderRadius:"1.5rem",display:"flex",alignItems:"center",position:"relative",background:e.toggleButton.background,"& > div":{width:"100%",height:"100%",padding:"4px 7px",display:"flex",alignItems:"center",position:"absolute",left:0,"& > span":{content:'""',position:"absolute",width:"1.25rem",height:"1.25rem",background:"#fff",borderRadius:"50%",cursor:"pointer",transition:"0.2s linear"}}},active:{"& > div > span":{transform:"translateX(130%)","@media(max-width: 768px)":{transform:"translateX(110%)"}}},notActive:{"& > div > span":{transform:"translateX(0)"}}}})),m=i(11),b=i(0),h=Object(a.createContext)();function g(e){var t=e.children,i=Object(a.useState)("light"),r=Object(m.a)(i,2),n=r[0],c=r[1];return Object(b.jsx)(h.Provider,{value:{themeActive:n,changeTheme:function(){c("light"===n?"dark":"light")}},children:t})}function j(e){var t=l(e),i=Object(a.useContext)(h),r=i.changeTheme,n=i.themeActive;return Object(b.jsx)("button",{className:"".concat(t.toggleButton," ").concat(function(e){return"light"===e?t.notActive:t.active}(n)),onClick:r,children:Object(b.jsx)("div",{children:Object(b.jsx)("span",{})})})}var u=i.p+"static/media/profile.4582b145.svg";function x(){var e=d();return Object(b.jsxs)("header",{className:e.header,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:u,alt:"Profile"}),Object(b.jsx)("h1",{children:"Ol\xe1, Jo\xe3o Paulo"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"toggle-button",children:Object(b.jsx)("strong",{children:"Modo escuro"})}),Object(b.jsx)(j,{})]})]})}var p=Object(o.a)({itemNavBar:{width:"100%",height:"8.625rem",position:"relative",cursor:"pointer","&:not(:first-child)":{marginTop:"1.25rem"},"& > img":{width:"100%",height:"100%",objectFit:"cover",objectPosition:"right",borderRadius:6},"& > div":{padding:"0 3rem",width:"100%",height:"100%",position:"absolute",top:0,display:"flex",alignItems:"center",justifyContent:"space-between","& > strong":{fontSize:"1.125rem",color:"#fff",maxWidth:"5rem"},"@media(max-width: 320px)":{padding:"0 1.5rem"}},"@media (max-width: 960px)":{height:"7.5rem"}}}),f=i.p+"static/media/arrow-right.5731a78c.svg",O=i.p+"static/media/bg-large-blue-light.6147fed1.svg",v=i.p+"static/media/bg-large-blue.c193ddff.svg",w=i.p+"static/media/bg-large-orange.fa817a52.svg",y=i.p+"static/media/bg-large-cyan.24481baa.svg";function k(e){return e.isBgBlueLight?O:e.isBgBlue?v:e.isBgOrange?w:e.isBgCyan?y:void 0}function B(e){var t=p(e);return Object(b.jsxs)("div",{className:t.itemNavBar,children:[Object(b.jsx)("img",{src:k(e),alt:e.alt}),Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:e.title}),Object(b.jsx)("img",{src:f,alt:"Seta para direita"})]})]})}var C=Object(o.a)({sectionNavBar:{gridColumn:"span 8",gridRow:"2 / 3",display:"flex",flexDirection:"column","& nav":{width:"100%"},"& ul li:not(:first-child)":{marginTop:"1.25rem","@media (max-width: 1024px)":{marginTop:"0.5rem"}}}});function F(){var e=C();return Object(b.jsx)("section",{className:e.sectionNavBar,children:Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(B,{title:"Tarefas e materiais",isBgBlueLight:!0,alt:"Um caderno aberto"})}),Object(b.jsx)("li",{children:Object(b.jsx)(B,{title:"Provas e simulados",isBgBlue:!0,alt:"Uma caderneta com checklist, caneta e rel\xf3gio"})}),Object(b.jsx)("li",{children:Object(b.jsx)(B,{title:"Apostilas",isBgOrange:!0,alt:"Dois cadernos e um l\xe1pis"})}),Object(b.jsx)("li",{children:Object(b.jsx)(B,{title:"Meus treinos",isBgCyan:!0,alt:"Um peso de academia"})})]})})})}var R=Object(o.a)((function(e){return{tasks:{gridColumn:"span 4",gridRow:"2 / 4",background:e.aside.background,borderRadius:6,"@media(max-width: 900px)":{margin:"2rem 0"}},content:{padding:"1rem","& > h2":{fontSize:"1.25rem"},"& > ul, li, li > div":{width:"100%"}},inputGroup:{margin:"0.75rem 0",width:"100%",position:"relative",display:"flex",alignItems:"center","& > input[type=text]":{padding:"0.75rem 0 0.75rem 0.75rem",width:"100%",fontSize:"1rem",border:"1px solid ".concat(e.aside.input.border),borderRadius:6,background:e.aside.input.background,color:e.aside.input.text},"& > button":{position:"absolute",right:1,height:"2.6875rem",width:"2.6875rem",background:e.aside.input.background,borderLeft:"1px solid ".concat(e.aside.input.border),borderTopRightRadius:6,borderBottomRightRadius:6,display:"inline-flex",alignItems:"center",justifyContent:"center","& > img":{width:"1.25rem",height:"1.25rem",color:e.aside.input.text}}},tabs:{marginBottom:16,display:"flex",alignItems:"center",justifyContent:"space-between","& > div":{position:"relative","&:after":{content:'""',height:2,width:"100%",position:"absolute",bottom:0,left:0,background:"#339CF7"}},"& > div, > button":{flex:1}},tab:{padding:8,width:"100%",fontSize:"1rem",color:e.aside.tab.text,background:"transparent",position:"relative","&:nth-child(2)":{flex:2,"@media(max-width: 900px)":{flex:1}}},tabActive:{color:"#339CF7"}}})),N=Object(o.a)({taskCard:{marginBottom:12,width:"100%",height:"9.375rem",color:"#fff",position:"relative","& > img":{width:"100%",height:"100%",objectFit:"cover",borderRadius:6},"& > div":{padding:12,width:"100%",height:"100%",position:"absolute",top:0,"& > header":{display:"flex",justifyContent:"space-between","& > div":{display:"flex",alignItems:"center",justifyContent:"center","& > img":{marginRight:"0.5rem"},"& > span":{fontSize:"0.875rem"}}},"& main":{margin:"1rem 0","& h3":{fontSize:"1rem",fontWeight:"bold"}},"& > footer":{display:"flex",flexDirection:"column",fontSize:"0.875rem","& > div":{marginTop:4,display:"flex",alignItems:"center",justifyContent:"space-between","@media(max-width: 375px)":{marginTop:0}}}},"@media(max-width: 900px)":{display:"flex",flexDirection:"column","& > main":{margin:0,flex:2,display:"flex",alignItems:"center"}}}}),z=i.p+"static/media/bg-small-blue-light.b6473981.svg",S=i.p+"static/media/bg-small-blue.0a70f642.svg",A=i.p+"static/media/timer.ce0b62c8.svg",I=i.p+"static/media/success-cloud.4f802ec5.svg";function D(e){return 1===e.type?S:z}function T(e){var t=N();return Object(b.jsxs)("div",{className:t.taskCard,children:[Object(b.jsx)("img",{src:D(e),alt:e.alt}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("header",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:A,alt:"\xcdcone de rel\xf3gio"}),Object(b.jsx)("span",{children:"At\xe9 02/06 8h30"})]}),Object(b.jsx)("img",{src:I,alt:"\xcdcone de nuvem com sinal de conlu\xeddo"})]}),Object(b.jsx)("main",{children:Object(b.jsx)("h3",{children:"Lista 03 - F\xedsica Moderna - Modulo 1 - Modulo 2 - Aula 4"})}),Object(b.jsxs)("footer",{children:[Object(b.jsx)("span",{children:"Matem\xe1tica"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Ricardo"}),Object(b.jsx)("span",{children:"0/100"})]})]})]})]})}var P=i.p+"static/media/search-small.9069d867.svg";function M(){var e=R();return Object(b.jsx)("aside",{className:e.tasks,children:Object(b.jsxs)("div",{className:e.content,children:[Object(b.jsx)("h2",{children:"Pr\xf3ximas entregas"}),Object(b.jsxs)("div",{className:e.inputGroup,children:[Object(b.jsx)("input",{type:"text",placeholder:"Pesquisar"}),Object(b.jsx)("button",{children:Object(b.jsx)("img",{src:P,alt:"\xcdcone de lupa"})})]}),Object(b.jsxs)("div",{className:e.tabs,children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"".concat(e.tab," ").concat(e.tabActive),children:"Novas"})}),Object(b.jsx)("button",{className:e.tab,children:"Em andamento"}),Object(b.jsx)("button",{className:e.tab,children:"Finalizadas"})]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(T,{type:1,alt:"Fundo azul escuro"})}),Object(b.jsx)("li",{children:Object(b.jsx)(T,{type:2,alt:"Fundo azul claro"})}),Object(b.jsx)("li",{children:Object(b.jsx)(T,{type:1,alt:"Fundo azul escuro"})})]})]})})}var L=Object(o.a)((function(e){return{footer:{paddingBottom:"0.5rem",gridColumn:"span 8",display:"flex",justifyContent:"center",color:e.footer.text,"& > div":{display:"flex",alignItems:"center",justifyContent:"center"},"& span":{marginRight:"1rem",fontSize:"0.8125rem",cursor:"pointer"},"& img":{width:"1rem",height:"1rem",color:e.footer.text,cursor:"pointer"},"& img:nth-child(4)":{marginRight:"1rem"}}}})),U=i.p+"static/media/android.25655ccb.svg",E=i.p+"static/media/apple.816f67af.svg";function G(){var e=L();return Object(b.jsx)("footer",{className:e.footer,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Termos de Uso"}),Object(b.jsx)("span",{children:"Pol\xedtica de Privacidade"}),Object(b.jsx)("span",{children:"Blog"}),Object(b.jsx)("img",{src:U,alt:"\xcdcone de Android"}),Object(b.jsx)("img",{src:E,alt:"\xcdcone da Apple"})]})})}var J=Object(o.a)((function(e){return{"@global":{"*":{padding:0,margin:0,boxSizing:"border-box",fontFamily:"Roboto, sans-serif"},"html, body, #root":{height:"100%"},body:{background:"white"},"#root":{display:"flex"},ul:{listStyle:"none"},input:{border:0},button:{border:0,cursor:"pointer"},"@media(max-width: 1024px)":{html:{fontSize:"93%"}},"@media(max-width: 900px)":{html:{fontSize:"90%"},"html, body, #root":{height:"auto"}},"@media(max-width: 768px)":{html:{fontSize:"87.5%"}},"@media(max-width: 400px)":{html:{fontSize:"75%"}}}}})),X=Object(o.a)((function(e){return{wrapper:{height:"100%",width:"100%",background:e.background,color:e.text},container:{margin:"0 auto",width:"min(1140px, 95vw)","@media (max-width: 900px)":{width:"75vw"},"@media (max-width: 768px)":{width:"90vw"}},struct:{height:"100%",display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridTemplateRows:"auto 1fr auto",columnGap:"0.75rem","@media (max-width: 900px)":{display:"flex",flexDirection:"column"}}}}));function W(){J();var e=X();return Object(b.jsx)("div",{className:e.wrapper,children:Object(b.jsxs)("main",{className:"".concat(e.container," ").concat(e.struct),children:[Object(b.jsx)(x,{}),Object(b.jsx)(F,{}),Object(b.jsx)(M,{}),Object(b.jsx)(G,{})]})})}var q={background:"#fff",text:"#414042",toggleButton:{background:"#C4C4C4"},aside:{background:"#DCECFA",input:{background:"#F8F8F8",text:"#7F8182",border:"#D5D5D5"},tab:{text:"#414042"}},footer:{text:"#A7A9AB"}},H={background:"#3B3B3B",text:"#fff",toggleButton:{background:"#339CF7"},aside:{background:"#282829",input:{background:"#313233",text:"#D5D5D5",border:"#212021"},tab:{text:"#FFFFFF"}},footer:{text:"#FFFFFF"}};function K(){var e=Object(a.useContext)(h).themeActive;return Object(b.jsx)(s.b,{theme:function(e){return"light"===e?q:H}(e),children:Object(b.jsx)(W,{})})}c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{children:Object(b.jsx)(K,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4a587677.chunk.js.map