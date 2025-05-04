"use strict";(self.webpackChunkferma_u_romana=self.webpackChunkferma_u_romana||[]).push([[118],{404:(e,t,i)=>{i.d(t,{s:()=>n});var o=i(464),a=i(164);const n=o.Ay.h2`
  font-family: ${e=>e.theme.fonts.main};
  font-weight: ${e=>e.theme.fontWeights.fw700};
  font-size: ${e=>e.theme.fontSizes.fs24};
  line-height: 1.37;
  color: ${e=>e.theme.colors.mainText};
  @media ${a.j.tablet} {
    font-size: ${e=>e.theme.fontSizes.fs32};
  }
`},519:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var o=i(43),a=i(464),n=i(164);const s=a.Ay.section`
padding-bottom: 30px;
`,r=a.Ay.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
`,l=(a.Ay.h2`
  font-family: ${e=>e.theme.fonts.main};
  font-weight: ${e=>e.theme.fontWeights.fw700};
  font-size: ${e=>e.theme.fontSizes.fs24};
  line-height: 1.37;
  color: ${e=>e.theme.colors.mainText};
  @media ${n.j.tablet} {
    font-size: ${e=>e.theme.fontSizes.fs32};
  }
`,a.Ay.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
 > li {
flex-basis: calc((100% - 40px)/3);
height: 180px;
 }
  @media ${n.j.tablet} {
   
  }
`),c=a.Ay.a`
display: block;
border: 1px solid brown;
padding: 10px;
width: 100%;
height: 100%;
  @media ${n.j.tablet} {
  }
`;var m=i(404),d=i(825),u=i(342);const p=a.Ay.form`
  display: block;
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,h=a.Ay.input`
  padding: 10px 40px 10px 20px;
  border: none;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: ${e=>e.theme.radii.br20};
  width: 100%;

  &:focus {
    outline: ${e=>e.theme.borders.main};
  }
`,f=a.Ay.button`
  position: absolute;
  padding: 12px 14px;
  right: 0;
  top: 0;
  background-color: transparent;
  border: none;
  transition: color 250ms linear;
  cursor: pointer;
  color: black;

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hoverAccent};
  }
`;var g=i(579);const x=e=>{let{value:t,onChange:i,onSubmit:o,onReset:a,searchValue:n}=e;return(0,g.jsxs)(p,{onSubmit:o,onReset:a,children:[(0,g.jsx)(h,{type:"text",name:"title",placeholder:"\u0417\u043d\u0430\u0439\u0442\u0438",onChange:i,value:t}),!n&&(0,g.jsx)(f,{type:"submit",children:(0,g.jsx)(d.fUO,{})}),n&&(0,g.jsx)(f,{type:"reset",children:(0,g.jsx)(u.hoO,{})})]})};var b=i(965),j=i(184);const w=i.p+"static/media/good.efeaa6aac2147ecb75e6.jfif",S=i.p+"static/media/good_b.fe262e49d22fd2c28bcf.jfif",$=[{id:1,image:`${w}`,name:"\u042f\u0439\u0446\u044f \u043a\u0443\u0440\u044f\u0447\u0456, 1 \u0434\u0435\u0441\u044f\u0442\u043e\u043a",description:"       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.",count:1e3,priceN:60,priceStr:"60 \u0433\u0440\u043d/\u0434\u0435\u0441\u044f\u0442\u043e\u043a",sale:0,likes:3},{id:2,image:`${w}`,name:"\u042f\u0439\u0446\u044f \u043f\u0435\u0440\u0435\u043f\u0435\u043b\u0438\u043d\u0456, 1 \u0434\u0435\u0441\u044f\u0442\u043e\u043a",description:"       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.",count:500,priceN:90,priceStr:"90 \u0433\u0440\u043d/\u0434\u0435\u0441\u044f\u0442\u043e\u043a",sale:0,likes:8},{id:3,image:`${S}`,name:"\u041c'\u044f\u0441\u043e \u043c\u043e\u043b\u043e\u0434\u0438\u0445 \u043f\u0435\u0440\u0435\u043f\u0435\u043b\u0456\u0432",description:"       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.",count:100,priceN:140,priceStr:"140 \u0433\u0440\u043d/\u043a\u0433",sale:0,likes:2},{id:4,image:`${S}`,name:"\u041c'\u044f\u0441\u043e \u043a\u0443\u0440\u044f\u0447\u0435",description:"       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem maiores et, aliquam odio consequuntur eligendi obcaecati accusantium autem mollitia.",count:1e3,priceN:120,priceStr:"120 \u0433\u0440\u043d/\u0434\u0435\u0441\u044f\u0442\u043e\u043a",sale:0,likes:4}],y="goods",v=()=>{const[e,t]=(0,o.useState)(""),[i,a]=(0,o.useState)(""),[n]=(0,o.useState)((()=>{var e;return null!==(e=JSON.parse(window.localStorage.getItem(y)))&&void 0!==e?e:$})),[d,u]=(0,o.useState)([]);(0,o.useEffect)((()=>{window.localStorage.setItem(y,JSON.stringify(n)),window.localStorage.setItem("basket",JSON.stringify((e=>{const t=[];return e.map((e=>{const i=t.find((t=>t.id===e.id));return i?t.map((e=>e.id===i.id?e.count=e.count+1:{})):t.push({...e,count:1}),t})),t})(d)))}),[n,d]);return(0,g.jsx)("main",{children:(0,g.jsx)(s,{children:(0,g.jsxs)(b.m,{children:[(0,g.jsxs)(r,{children:[(0,g.jsx)(m.s,{children:"\u0422\u043e\u0432\u0430\u0440\u0438 \u0442\u0430 \u043f\u043e\u0441\u043b\u0443\u0433\u0438"}),(0,g.jsx)(x,{value:e,onChange:e=>{t(e.target.value)},onSubmit:t=>{t.preventDefault(),a(e)},onReset:e=>{e.preventDefault(),t(""),a("")},searchValue:i.trim()})]}),(0,g.jsxs)(l,{children:[n.map((e=>(0,g.jsx)("li",{children:(0,g.jsxs)(c,{href:"",data:e,children:[(0,g.jsx)("img",{src:e.image,alt:"eggs",width:"70px"}),(0,g.jsx)("h3",{children:e.name}),(0,g.jsx)("p",{children:e.priceStr}),(0,g.jsx)("p",{children:" \u0441\u0447\u0435\u0442\u0447\u0438\u043a \u043a\u043e\u043b\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430"}),(0,g.jsxs)("button",{onClick:t=>{var i;t.preventDefault(),i=e,console.log(i),u((e=>[...e,i]))},children:[(0,g.jsx)(j.mH$,{})," \u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})," "]})},e.id)))," "]})," "]})})})}}}]);
//# sourceMappingURL=118.9926b64c.chunk.js.map