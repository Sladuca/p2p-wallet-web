(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{651:function(e,a,t){"use strict";t.r(a)},652:function(e,a,t){"use strict";t.r(a)},653:function(e,a,t){"use strict";t.r(a)},654:function(e,a,t){"use strict";t.r(a)},657:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return se}));var n=t(0),c=t.n(n),l=t(8),s=t(649),r=t(40),o=t(18),i=t(10);const m=Object(s.a)("div")({name:"Wrapper",class:"wrdya2m"}),d=Object(s.a)("div")({name:"Header",class:"h1vh307k"}),u=Object(s.a)("div")({name:"Title",class:"t1qfjroh"}),b=Object(s.a)("div")({name:"Description",class:"d8b2mdb"}),j=Object(s.a)("div")({name:"CloseWrapper",class:"c135gzia"}),v=Object(s.a)(i.c)({name:"CloseIcon",class:"c1whuod3"}),O=Object(s.a)("div")({name:"Content",class:"c12kmdhp"}),p=({title:e,description:a,close:t,children:n,className:l})=>c.a.createElement(m,{className:l},c.a.createElement(d,null,e?c.a.createElement(u,null,e):void 0,a?c.a.createElement(b,null,a):void 0,t?c.a.createElement(j,{onClick:t},c.a.createElement(v,{name:"close"})):void 0),n?c.a.createElement(O,null,n):void 0);t(651);var E=t(20),f=t(29),h=t(24),k=t.n(h),w=t(160),y=t(30),g=t(22),C=t.n(g),B=t(92),S=t(27),x=t(59),N=t(231);const I=Object(s.a)("div")({name:"Wrapper",class:"w2hsup5"}),A=Object(s.a)(i.c)({name:"ChevronIcon",class:"cjk37vx"}),M=Object(s.a)("div")({name:"ChevronWrapper",class:"c1aewuyh"}),T=Object(s.a)("div")({name:"Main",class:"m1x0i73s"}),W=Object(s.a)("div")({name:"Content",class:"c1lrr91s"}),z=Object(s.a)("div")({name:"InfoWrapper",class:"ifuaxgh"}),L=Object(s.a)("div")({name:"Info",class:"isx2g64"}),q=Object(s.a)("div")({name:"Top",class:"t10180ct"}),D=Object(s.a)("div")({name:"Bottom",class:"b1idmxl7"}),F=Object(s.a)("div")({name:"Additional",class:"a5vkidx"}),P=Object(s.a)("div")({name:"TokenInfo",class:"tjtzobz"}),J=Object(s.a)(i.b)({name:"AddButton",class:"ar7kpio"}),H=Object(s.a)("div")({name:"TokenName",class:"t1n4pegg"}),K=Object(s.a)("div")({name:"TokenAddress",class:"t1p1n0ee"}),R=Object(s.a)("div")({name:"PlusIconWrapper",class:"p1sgvivf"}),V=Object(s.a)(i.c)({name:"PlusIcon",class:"p1jvde4q"}),$=Object(s.a)("div")({name:"BottomInfo",class:"b13pkjo5"}),_=Object(s.a)("a")({name:"ExplorerA",class:"e1tqxv0s"}),G=Object(s.a)("div")({name:"RightInfo",class:"ryjcfxl"}),Q=Object(s.a)("div")({name:"Error",class:"ezozms8"}),U=Object(s.a)(B.a)({name:"LoaderBlockStyled",class:"ldjkvyd"}),X=({token:e,fee:a,isInfluencedFunds:t,closeModal:s})=>{const r=Object(l.c)(),[o,i]=Object(n.useState)(!1),[m,d]=Object(n.useState)(!1),[u,b]=Object(n.useState)(!1),[j,v]=Object(n.useState)(!1),O=Object(l.d)(e=>e.wallet.cluster),p=()=>{i(!o)};return c.a.createElement(I,null,c.a.createElement(T,{className:C()({isOpen:o})},c.a.createElement(W,{className:C()({isOpen:o})},c.a.createElement(z,{onClick:p},c.a.createElement(x.a,{symbol:e.symbol,size:45}),c.a.createElement(L,null,c.a.createElement(q,null,c.a.createElement("div",null,e.symbol)," ",c.a.createElement("div",null)),c.a.createElement(D,null,c.a.createElement("div",null,e.name)," ",c.a.createElement("div",null)))),c.a.createElement(M,{onClick:p,className:C()({isOpen:o})},c.a.createElement(A,{name:"chevron"}))),c.a.createElement(F,{className:C()({isOpen:o})},c.a.createElement(P,{onClick:()=>{try{navigator.clipboard.writeText(e.address.toBase58()),v(!0),S.b.info(e.address.toBase58()+" Address Copied!"),setTimeout(()=>{v(!1)},2e3)}catch(e){console.error(e)}}},c.a.createElement(H,{className:C()({isMintCopied:j})},j?"Mint Address Copied!":e.symbol+" Mint Address"),c.a.createElement(K,null,e.address.toBase58())),c.a.createElement(J,{primary:!0,disabled:m,onClick:async()=>{try{d(!0),await r(Object(y.f)({token:e}))}catch(e){b(!0),console.log(e)}finally{d(!1)}s()},className:C()({isExecuting:m})},m?c.a.createElement(U,null):c.a.createElement(R,null,c.a.createElement(V,{name:"plus"})),m?"Adding":"Add token")),c.a.createElement($,{className:C()({isOpen:o,isError:u})},u?c.a.createElement(Q,null,"Something went wrong. We couldn’t add a token to your list."):c.a.createElement(c.a.Fragment,null,c.a.createElement(_,{href:Object(N.a)("address",e.address.toBase58(),O),target:"_blank",rel:"noopener noreferrer noindex",className:"button"},"View in Solana explorer"),c.a.createElement(G,{className:C()({isError:t})},`will cost ${a} SOL`,t?" (Influenced funds)":"")))))};t(652);const Y=Object(s.a)("div")({name:"Wrapper",class:"w1wf7dhi"}),Z=Object(s.a)(w.a)({name:"SearchInputStyled",class:"szvbwf7"}),ee=Object(s.a)("div")({name:"EmptyBlock",class:"eu7x5pj"}),ae=Object(s.a)("div")({name:"EmptyBlockText",class:"e1n4mhdv"}),te=Object(s.a)("div")({name:"EmptyBlockDesc",class:"e15fuiu9"}),ne=({items:e,closeModal:a})=>{const t=Object(l.c)(),[s,r]=Object(n.useState)(0),[m,d]=Object(n.useState)(0),[u,b]=Object(n.useState)(""),j=Object(l.d)(e=>e.wallet.publicKey),v=Object(l.d)(e=>e.wallet.tokenAccounts.map(e=>o.a.from(e))),O=Object(n.useMemo)(()=>v.find(e=>e.address.toBase58()===j),[v,j]);Object(n.useEffect)(()=>{(async()=>{try{const e=Object(E.e)(await t(Object(y.i)(f.a.span)));d(e),r(new k.a(e).div(10**9).toDecimalPlaces(9).toNumber())}catch(e){console.log(e)}})()},[]);const p=Object(n.useMemo)(()=>{if(!e)return;const a=u.toLowerCase();return a.length>0?e.filter(e=>{var t,n;return(null===(t=e.symbol)||void 0===t?void 0:t.toLowerCase().includes(a))||(null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(a))}):e},[u,e]);if(!e)return null;const h=Boolean(null==O?void 0:O.balance.lt(m));return c.a.createElement(Y,null,c.a.createElement(Z,{placeholder:"Search token",value:u,onChange:e=>{const a=e.trim();b(a)}}),(null==p?void 0:p.length)?p.map(e=>c.a.createElement(X,{key:e.address.toBase58(),token:e,fee:s,isInfluencedFunds:h,closeModal:a})):c.a.createElement(ee,null,c.a.createElement(i.c,{name:"search",width:"100",height:"100"}),c.a.createElement(ae,null,"Nothing found"),c.a.createElement(te,null,"Change your search phrase and try again")))};t(653);const ce=Object(s.a)(p)({name:"WrapperModal",class:"wiqml5"}),le=Object(s.a)("div")({name:"ScrollableContainer",class:"s17ynaak"}),se=({close:e})=>{const a=Object(l.d)(e=>e.wallet.tokenAccounts.map(e=>o.a.from(e))),t=Object(l.d)(e=>e.global.availableTokens.map(e=>r.a.from(e))),s=Object(n.useMemo)(()=>{if(!t)return;const e=new Set(a.map(e=>e.mint.address.toBase58()));return t.filter(a=>!e.has(a.address.toBase58()))},[t]);return c.a.createElement(ce,{title:"Add coins",close:e},(null==s?void 0:s.length)?c.a.createElement(le,null,c.a.createElement(ne,{items:s,closeModal:()=>{e()}})):void 0)};t(654)}}]);
//# sourceMappingURL=1.bundle.js.map