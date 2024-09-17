import{g as Q,a as U,r as u,b as K,d as L,j as t,m as ee,l as Z}from"./index-zFG7VEap.js";import{n as R,B as te}from"./index-DDTgZxmY.js";import{w as ae,i as W,a as D,b as H,I as ie,u as F}from"./useTranslation-DGErjT_Y.js";var se={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const re=Q(se);var ne=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function P(e){var a={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=e.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(a.name=i[1],(re[i[1]]||e.charAt(e.length-2)==="/")&&(a.voidElement=!0),a.name.startsWith("!--"))){var r=e.indexOf("-->");return{type:"comment",comment:r!==-1?e.slice(4,r):""}}for(var d=new RegExp(ne),s=null;(s=d.exec(e))!==null;)if(s[0].trim())if(s[1]){var l=s[1].trim(),w=[l,""];l.indexOf("=")>-1&&(w=l.split("=")),a.attrs[w[0]]=w[1],d.lastIndex--}else s[2]&&(a.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return a}var le=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,oe=/^\s*$/,he=Object.create(null);function q(e,a){switch(a.type){case"text":return e+a.content;case"tag":return e+="<"+a.name+(a.attrs?function(i){var r=[];for(var d in i)r.push(d+'="'+i[d]+'"');return r.length?" "+r.join(" "):""}(a.attrs):"")+(a.voidElement?"/>":">"),a.voidElement?e:e+a.children.reduce(q,"")+"</"+a.name+">";case"comment":return e+"<!--"+a.comment+"-->"}}var ce={parse:function(e,a){a||(a={}),a.components||(a.components=he);var i,r=[],d=[],s=-1,l=!1;if(e.indexOf("<")!==0){var w=e.indexOf("<");r.push({type:"text",content:w===-1?e:e.substring(0,w)})}return e.replace(le,function(c,v){if(l){if(c!=="</"+i.name+">")return;l=!1}var f,b=c.charAt(1)!=="/",C=c.startsWith("<!--"),$=v+c.length,x=e.charAt($);if(C){var _=P(c);return s<0?(r.push(_),r):((f=d[s]).children.push(_),r)}if(b&&(s++,(i=P(c)).type==="tag"&&a.components[i.name]&&(i.type="component",l=!0),i.voidElement||l||!x||x==="<"||i.children.push({type:"text",content:e.slice($,e.indexOf("<",$))}),s===0&&r.push(i),(f=d[s-1])&&f.children.push(i),d[s]=i),(!b||i.voidElement)&&(s>-1&&(i.voidElement||i.name===c.slice(2,-1))&&(s--,i=s===-1?r:d[s]),!l&&x!=="<"&&x)){f=s===-1?r:d[s].children;var o=e.indexOf("<",$),m=e.slice($,o===-1?void 0:o);oe.test(m)&&(m=" "),(o>-1&&s+f.length>=0||m!==" ")&&f.push({type:"text",content:m})}}),r},stringify:function(e){return e.reduce(function(a,i){return a+q("",i)},"")}};const O=(e,a)=>{var r;if(!e)return!1;const i=((r=e.props)==null?void 0:r.children)??e.children;return a?i.length>0:!!i},I=e=>{var i,r;if(!e)return[];const a=((i=e.props)==null?void 0:i.children)??e.children;return(r=e.props)!=null&&r.i18nIsDynamicList?M(a):a},de=e=>Array.isArray(e)&&e.every(u.isValidElement),M=e=>Array.isArray(e)?e:[e],me=(e,a)=>{const i={...a};return i.props=Object.assign(e.props,a.props),i},J=(e,a)=>{if(!e)return"";let i="";const r=M(e),d=a!=null&&a.transSupportBasicHtmlNodes?a.transKeepBasicHtmlNodesFor??[]:[];return r.forEach((s,l)=>{if(W(s))i+=`${s}`;else if(u.isValidElement(s)){const{props:w,type:c}=s,v=Object.keys(w).length,f=d.indexOf(c)>-1,b=w.children;if(!b&&f&&!v)i+=`<${c}/>`;else if(!b&&(!f||v)||w.i18nIsDynamicList)i+=`<${l}></${l}>`;else if(f&&v===1&&W(b))i+=`<${c}>${b}</${c}>`;else{const C=J(b,a);i+=`<${l}>${C}</${l}>`}}else if(s===null)D("Trans: the passed in value is invalid - seems you passed in a null child.");else if(H(s)){const{format:w,...c}=s,v=Object.keys(c);if(v.length===1){const f=w?`${v[0]}, ${w}`:v[0];i+=`{{${f}}}`}else D("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else D("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),i},pe=(e,a,i,r,d,s)=>{if(a==="")return[];const l=r.transKeepBasicHtmlNodesFor||[],w=a&&new RegExp(l.map(o=>`<${o}`).join("|")).test(a);if(!e&&!w&&!s)return[a];const c={},v=o=>{M(o).forEach(h=>{W(h)||(O(h)?v(I(h)):H(h)&&!u.isValidElement(h)&&Object.assign(c,h))})};v(e);const f=ce.parse(`<0>${a}</0>`),b={...c,...d},C=(o,m,h)=>{var p;const y=I(o),S=x(y,m.children,h);return de(y)&&S.length===0||(p=o.props)!=null&&p.i18nIsDynamicList?y:S},$=(o,m,h,y,S)=>{o.dummy?(o.children=m,h.push(u.cloneElement(o,{key:y},S?void 0:m))):h.push(...u.Children.map([o],p=>{const n={...p.props};return delete n.i18nIsDynamicList,u.createElement(p.type,{...n,key:y,ref:p.ref},S?null:m)}))},x=(o,m,h)=>{const y=M(o);return M(m).reduce((p,n,k)=>{var V,A;const T=((A=(V=n.children)==null?void 0:V[0])==null?void 0:A.content)&&i.services.interpolator.interpolate(n.children[0].content,b,i.language);if(n.type==="tag"){let N=y[parseInt(n.name,10)];h.length===1&&!N&&(N=h[0][n.name]),N||(N={});const g=Object.keys(n.attrs).length!==0?me({props:n.attrs},N):N,z=u.isValidElement(g),B=z&&O(n,!0)&&!n.voidElement,E=w&&H(g)&&g.dummy&&!z,G=H(e)&&Object.hasOwnProperty.call(e,n.name);if(W(g)){const j=i.services.interpolator.interpolate(g,b,i.language);p.push(j)}else if(O(g)||B){const j=C(g,n,h);$(g,j,p,k)}else if(E){const j=x(y,n.children,h);$(g,j,p,k)}else if(Number.isNaN(parseFloat(n.name)))if(G){const j=C(g,n,h);$(g,j,p,k,n.voidElement)}else if(r.transSupportBasicHtmlNodes&&l.indexOf(n.name)>-1)if(n.voidElement)p.push(u.createElement(n.name,{key:`${n.name}-${k}`}));else{const j=x(y,n.children,h);p.push(u.createElement(n.name,{key:`${n.name}-${k}`},j))}else if(n.voidElement)p.push(`<${n.name} />`);else{const j=x(y,n.children,h);p.push(`<${n.name}>${j}</${n.name}>`)}else if(H(g)&&!z){const j=n.children[0]?T:null;j&&p.push(j)}else $(g,T,p,k,n.children.length!==1||!T)}else if(n.type==="text"){const N=r.transWrapTextNodes,g=s?r.unescape(i.services.interpolator.interpolate(n.content,b,i.language)):i.services.interpolator.interpolate(n.content,b,i.language);N?p.push(u.createElement(N,{key:`${n.name}-${k}`},g)):p.push(g)}return p},[])},_=x([{dummy:!0,children:e||[]}],f,M(e||[]));return I(_[0])};function xe({children:e,count:a,parent:i,i18nKey:r,context:d,tOptions:s={},values:l,defaults:w,components:c,ns:v,i18n:f,t:b,shouldUnescape:C,...$}){var N,g,z,B;const x=f||K();if(!x)return ae("You will need to pass in an i18next instance by using i18nextReactModule"),e;const _=b||x.t.bind(x)||(E=>E),o={...U(),...(N=x.options)==null?void 0:N.react};let m=v||_.ns||((g=x.options)==null?void 0:g.defaultNS);m=W(m)?[m]:m||["translation"];const h=J(e,o),y=w||h||o.transEmptyNodeValue||r,{hashTransKey:S}=o,p=r||(S?S(h||y):h||y);(B=(z=x.options)==null?void 0:z.interpolation)!=null&&B.defaultVariables&&(l=l&&Object.keys(l).length>0?{...l,...x.options.interpolation.defaultVariables}:{...x.options.interpolation.defaultVariables});const n=l||a!==void 0||!e?s.interpolation:{interpolation:{...s.interpolation,prefix:"#$?",suffix:"?$#"}},k={...s,context:d||s.context,count:a,...l,...n,defaultValue:y,ns:m},T=p?_(p,k):y;c&&Object.keys(c).forEach(E=>{const G=c[E];if(typeof G.type=="function"||!G.props||!G.props.children||T.indexOf(`${E}/>`)<0&&T.indexOf(`${E} />`)<0)return;function j(){return u.createElement(u.Fragment,null,G)}c[E]=u.createElement(j)});const V=pe(c||e,T,x,o,k,C),A=i??o.defaultTransParent;return A?u.createElement(A,$,V):V}function we({children:e,count:a,parent:i,i18nKey:r,context:d,tOptions:s={},values:l,defaults:w,components:c,ns:v,i18n:f,t:b,shouldUnescape:C,...$}){var h;const{i18n:x,defaultNS:_}=u.useContext(ie)||{},o=f||x||K(),m=b||(o==null?void 0:o.t.bind(o));return xe({children:e,count:a,parent:i,i18nKey:r,context:d,tOptions:s,values:l,defaults:w,components:c,ns:v||(m==null?void 0:m.ns)||_||((h=o==null?void 0:o.options)==null?void 0:h.defaultNS),i18n:o,t:b,shouldUnescape:C,...$})}const ge="/sound-wave-generator/assets/banner_sm-99UHRDmD.webp",fe="/sound-wave-generator/assets/banner_xl-BJVES_it.webp",be=L.div`
    border-radius: ${e=>e.theme.borderRadius.radius24};
    background: linear-gradient(180deg, #eff8ff 0%, #c7e4ff 45.51%, #9aceff 65.12%, #6272ff 100%);

    padding: 40px 16px;
    margin: 0 auto;

    @media (min-width: ${({theme:e})=>e.breakpoints.xs}) {
        max-width: calc(100vw - 32px);
        background-image: radial-gradient(
            81.41% 207.84% at 17.81% 36.38%,
            #eff8ff 0%,
            #b6dbfd 45.08%,
            #9aceff 61.89%,
            #6272ff 100%
        );
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        max-width: calc(100vw - 64px);
        border-radius: ${e=>e.theme.borderRadius.radius28};

        padding: 56px 86px;
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
        border-radius: ${e=>e.theme.borderRadius.radius30};
        padding: 110px 138px;
    }

    .SG-banner__order {
        ~ .SG-banner__order {
            margin-top: 40px;

            @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
                margin-top: 0;
                margin-left: 60px;
            }

            @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
                margin-left: 100px;
            }
        }
    }

    .SG-banner__title {
        font-size: ${e=>e.theme.typography.fontSize.p32};
        font-weight: ${e=>e.theme.typography.weight.black};
        line-height: 40px;
        text-align: center;

        color: ${e=>e.theme.palette.primaryTextColor};

        @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
            text-align: left;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            font-size: ${({theme:e})=>e.typography.fontSize.p38};
            line-height: 46px;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
            font-size: ${({theme:e})=>e.typography.fontSize.h1};
            line-height: 68px;
        }
    }

    .SG-banner__text {
        font-size: ${e=>e.theme.typography.fontSize.p14};
        font-weight: ${e=>e.theme.typography.weight.medium};
        line-height: 24px;
        text-align: center;

        margin-top: 16px;
        margin-bottom: 32px;
        color: ${e=>e.theme.palette.secondaryTextColor};

        @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
            text-align: left;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            font-size: ${({theme:e})=>e.typography.fontSize.p16};
            line-height: 24px;

            margin-bottom: 40px;
        }
    }

    .BG-button {
        width: 100%;

        @media (min-width: ${({theme:e})=>e.breakpoints.xs}) {
            width: fit-content;
        }
    }
`,X=({assetWeb:e,assetMobile:a,alt:i})=>{const{t:r}=F();return t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 480px)",className:"responsive-img",type:"image/png",srcSet:e}),t.jsx("img",{className:"responsive-img",draggable:"false",alt:r(R(i)),src:a})]})},Y="/sound-wave-generator/assets/sound-Cuf2IwjX.mp3",ue=L.div`
    z-index: ${e=>e.theme.zIndex.index1};

    .SG-wave-animation {
        width: 84%;

        position: relative;
        z-index: -1;

        transform: translate(18%, 12px);
    }
`,ve=ee`
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2);
  }
`,ye=L.svg`
    .wave-bar {
        transform-origin: bottom;
        ${({$isPlaying:e})=>e&&Z`
                animation: ${ve} 1s infinite ease-in-out;
            `}
    }

    ${Array.from({length:80},(e,a)=>Z`
            .wave-bar:nth-child(${a+1}) {
                animation-delay: ${a*.05}s;
            }
        `)}
`,je=({isPlaying:e=!1})=>t.jsx(ye,{width:"636",height:"47",viewBox:"0 0 636 47",fill:"none",xmlns:"http://www.w3.org/2000/svg",$isPlaying:e,className:"SG-wave-animation",children:t.jsxs("g",{opacity:"0.5",children:[t.jsx("rect",{className:"wave-bar",x:"10",width:"6",height:"56",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"30",y:"6",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"40",y:"10",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"130",y:"6",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"160",y:"15",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"50",y:"21",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"140",y:"10",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"170",y:"19",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"60",y:"22",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"150",y:"11",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"180",y:"20",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"70",y:"17",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"80",y:"14",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"90",y:"6",width:"6",height:"41",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"100",y:"10",width:"6",height:"53",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"190",y:"5",width:"6",height:"53",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"250",y:"14",width:"6",height:"53",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"400",y:"28",width:"6",height:"81",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"280",y:"23",width:"6",height:"53",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"430",y:"22",width:"6",height:"81",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"310",y:"15",width:"6",height:"53",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"460",y:"9",width:"6",height:"82",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"510",y:"14",width:"6",height:"82",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"340",y:"28",width:"6",height:"53",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"490",y:"29",width:"6",height:"82",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"540",y:"14",width:"6",height:"82",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"600",y:"15",width:"6",height:"82",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"580",y:"19",width:"6",height:"82",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"220",y:"14",width:"6",height:"53",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"370",y:"8",width:"6",height:"81",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"110",y:"1",width:"6",height:"60",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"200",width:"6",height:"58",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"260",y:"14",width:"6",height:"53",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"410",y:"24",width:"6",height:"81",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"290",y:"23",width:"6",height:"53",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"440",y:"22",width:"6",height:"81",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"320",y:"11",width:"6",height:"57",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"470",y:"3",width:"6",height:"88",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"520",y:"8",width:"6",height:"88",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"560",y:"33",width:"6",height:"88",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"620",y:"14",width:"6",height:"88",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"350",y:"24",width:"6",height:"57",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"500",y:"23",width:"6",height:"88",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"550",y:"28",width:"6",height:"88",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"610",y:"9",width:"6",height:"88",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"590",y:"13",width:"6",height:"88",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"230",y:"18",width:"6",height:"53",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"380",y:"14",width:"6",height:"82",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"120",width:"6",height:"47",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"210",y:"11",width:"6",height:"47",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"360",y:"3",width:"6",height:"73",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"270",y:"20",width:"6",height:"47",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"420",y:"17",width:"6",height:"72",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"300",y:"29",width:"6",height:"47",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"450",y:"31",width:"6",height:"72",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"330",y:"21",width:"6",height:"47",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"480",y:"18",width:"6",height:"73",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"530",y:"23",width:"6",height:"73",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"570",y:"21",width:"6",height:"73",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"630",y:"29",width:"6",height:"73",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"240",y:"20",width:"6",height:"47",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"390",y:"17",width:"6",height:"72",fill:"white"}),t.jsx("rect",{className:"wave-bar",width:"6",height:"56",fill:"white"}),t.jsx("rect",{className:"wave-bar",x:"20",width:"6",height:"56",fill:"white"})]})}),$e=({audioRef:e,isPlaying:a,children:i})=>t.jsxs(ue,{className:"SG-equalizer relative",children:[t.jsx(je,{isPlaying:a}),t.jsx("audio",{ref:e,src:Y,controls:!0,className:"display-none",children:t.jsx("track",{kind:"captions",src:Y,srcLang:"en",label:"English",default:!0})}),i]}),Ne=()=>{const{t:e}=F(),[a,i]=u.useState(!1),r=u.useRef(null),d=()=>{r.current?(r.current.load(),r.current.play(),i(!0)):i(!1)};return u.useEffect(()=>{const s=()=>{i(!1)},l=r.current;return l&&l.addEventListener("ended",s),()=>{l&&l.removeEventListener("ended",s)}},[]),t.jsxs(be,{className:"SG-banner sm-flex align-sm-center",children:[t.jsxs("div",{className:"SG-banner__order sm-w50",children:[t.jsx("h1",{className:"SG-banner__title lg-space-pre-line",children:e("bannerTitle")}),t.jsx("p",{className:"SG-banner__text xl-space-pre-line",children:e("bannerText")}),t.jsx("div",{className:"flex justify-center justify-sm-start",children:t.jsx(te,{onClick:d,size:"large",className:"ph-30",children:e("animateSoundWaves")})})]}),t.jsx("div",{className:"SG-banner__order sm-w50 relative",children:t.jsx($e,{audioRef:r,isPlaying:a,children:t.jsx(X,{assetWeb:fe,assetMobile:ge,alt:"bannerTitle"})})})]})},Ce=L.div`
    padding: 20px 32px;

    border-radius: ${e=>e.theme.borderRadius.radius30};
    background-image: linear-gradient(135.78deg, #ffffff 33.22%, rgba(255, 255, 255, 0.24) 98.34%);

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        padding: 32px 56px;
    }

    ~ .SG-card {
        margin-top: 32px;

        @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
            margin-top: 56px;
        }
    }

    .SG-card__title {
        font-size: ${e=>e.theme.typography.fontSize.p18};
        font-weight: ${e=>e.theme.typography.weight.black};
        line-height: 28px;

        margin-bottom: 14px;
        color: ${e=>e.theme.palette.primaryTextColor};

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            font-size: ${({theme:e})=>e.typography.fontSize.p24};
            line-height: 28px;

            margin-bottom: 16px;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
            font-size: ${({theme:e})=>e.typography.fontSize.p32};
            line-height: 38px;
        }
    }

    .SG-card__text {
        font-size: ${e=>e.theme.typography.fontSize.p14};
        font-weight: ${e=>e.theme.typography.weight.medium};
        line-height: 20px;

        color: ${e=>e.theme.palette.primaryTextColor};

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            font-size: ${({theme:e})=>e.typography.fontSize.p16};
            line-height: 24px;
        }
    }

    &.primary {
        flex-direction: column-reverse;

        @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
            flex-direction: row;
        }

        .SG-card__order1 {
            margin-top: 16px;

            @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
                margin-top: 0;
                margin-right: 30px;
            }

            @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
                margin-right: 56px;
            }
        }
    }

    &.secondary {
        flex-direction: column-reverse;

        @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
            flex-direction: row-reverse;
        }

        .SG-card__order1 {
            margin-top: 16px;

            @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
                margin-top: 0;
                margin-left: 30px;
            }

            @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
                margin-left: 56px;
            }
        }
    }
`,ke=({title:e="",text:a="",assetWeb:i="",assetMobile:r="",alt:d="",variant:s="primary"})=>{const{t:l}=F();return t.jsxs(Ce,{className:`SG-card flex align-sm-center ${s}`,children:[t.jsxs("div",{className:"SG-card__order1 sm-w50",children:[t.jsx("h3",{className:"SG-card__title xl-space-pre-line",children:l(R(e))}),t.jsx("p",{className:"SG-card__text xl-space-pre-line",children:l(R(a))})]}),t.jsx("div",{className:"SG-card__order2 sm-w50 margin-center",children:t.jsx(X,{assetWeb:i,assetMobile:r,alt:d})})]})},_e=L.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    padding-right: 16px;
    padding-left: 16px;

    @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
        padding-right: 0;
        padding-left: 0;
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        max-width: calc(100vw - 240px);
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
        max-width: calc(100vw - 340px);
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
        max-width: calc(100vw - 526px);
    }

    .SG-partners__header {
        @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
            &:before,
            &:after {
                content: '';
                display: block;
                width: 100%;
                height: 2px;
            }

            &:before {
                background-image: linear-gradient(270deg, #c1c9e0 0%, rgba(193, 201, 224, 0) 100%);
                margin-right: 30px;
            }

            &:after {
                background-image: linear-gradient(90deg, #c1c9e0 0%, rgba(193, 201, 224, 0) 100%);
                margin-left: 30px;
            }
        }
    }

    .SG-partners__title {
        font-size: ${e=>e.theme.typography.fontSize.p16};
        font-weight: ${e=>e.theme.typography.weight.medium};
        line-height: 20px;
        text-align: center;

        > span {
            font-weight: ${e=>e.theme.typography.weight.black};
        }
    }

    .SG-partners__list {
        margin-top: 12px;
    }
`,Se="/sound-wave-generator/assets/booking_logo-pxgpB3XE.svg",Ee="/sound-wave-generator/assets/hootsuite_logo-CvYFDsNG.svg",Te="data:image/svg+xml,%3csvg%20width='147'%20height='54'%20viewBox='0%200%20147%2054'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M59.7901%2018.291H63.2019L68.9827%2028.7562L74.7637%2018.291H78.0806V35.5442H75.3322V22.3456L70.2147%2031.4896H67.5611L62.4437%2022.3456V35.5442H59.6952L59.7901%2018.291Z'%20fill='%23545F7E'/%3e%3cpath%20d='M87.2772%2035.8266C86.0452%2035.8266%2084.9079%2035.5434%2083.8654%2034.9778C82.9177%2034.4121%2082.0649%2033.5636%2081.591%2032.6209C81.0224%2031.5839%2080.7382%2030.3581%2080.7382%2029.1325C80.7382%2027.9069%2081.0223%2026.6821%2081.4962%2025.645C81.97%2024.7023%2082.8231%2023.8538%2083.7708%2023.2882C84.7185%2022.7225%2085.8557%2022.4393%2087.0877%2022.4393C89.3621%2022.345%2091.4471%2023.6649%2092.3%2025.739C92.7738%2026.8703%2093.0582%2028.1905%2093.0582%2029.4161V30.1701H83.5813C83.676%2031.1128%2084.1497%2031.961%2084.8131%2032.6209C85.5712%2033.2808%2086.4243%2033.5636%2087.372%2033.5636C88.1302%2033.5636%2088.7934%2033.4699%2089.5515%2033.1871C90.2149%2032.9043%2090.7836%2032.527%2091.2574%2032.0556L92.7738%2033.8463C91.2575%2035.1661%2089.2673%2035.9209%2087.2772%2035.8266ZM89.2674%2025.645C88.6988%2025.0794%2087.8457%2024.7019%2086.9928%2024.7962C86.1399%2024.7962%2085.2871%2025.079%2084.7185%2025.739C84.0551%2026.3989%2083.676%2027.247%2083.5813%2028.1898H90.4046C90.3098%2027.1527%2089.9308%2026.305%2089.2674%2025.645Z'%20fill='%23545F7E'/%3e%3cpath%20d='M96.3753%2024.9852H93.8163V22.7222H96.3753V18.9512H99.0286V22.7222H102.914V24.9852H99.0286V30.7356C98.9339%2031.4898%2099.1234%2032.1499%2099.5025%2032.8099C99.9763%2033.2812%20100.545%2033.47%20101.208%2033.47C101.493%2033.47%20101.777%2033.47%20102.156%2033.47C102.44%2033.47%20102.63%2033.3752%20103.009%2033.3752V35.6381C102.63%2035.7324%20102.346%2035.8269%20101.967%2035.8269C101.588%2035.9211%20101.208%2035.9208%20100.735%2035.9208C97.7967%2035.9208%2096.3753%2034.3181%2096.3753%2031.207V24.9852Z'%20fill='%23545F7E'/%3e%3cpath%20d='M117.036%2035.544H114.383V33.7524C113.909%2034.4123%20113.34%2034.9781%20112.582%2035.3552C111.824%2035.7323%20110.971%2035.9205%20110.118%2035.9205C109.076%2035.9205%20108.033%2035.6382%20107.085%2035.0726C106.232%2034.5069%20105.474%2033.6585%20105%2032.7157C104.526%2031.6787%20104.242%2030.4529%20104.242%2029.2273C104.242%2028.0017%20104.526%2026.8702%20105%2025.7389C105.474%2024.7962%20106.232%2023.9477%20107.085%2023.3821C108.033%2022.8164%20109.075%2022.5332%20110.213%2022.5332C111.066%2022.5332%20111.824%2022.7218%20112.582%2023.0046C113.245%2023.3817%20113.909%2023.8531%20114.288%2024.4187V22.8168H116.941L117.036%2035.544ZM114.383%2027.1531C114.098%2026.4931%20113.624%2025.8334%20113.056%2025.4563C112.392%2024.9849%20111.634%2024.7962%20110.876%2024.7962C109.833%2024.7962%20108.791%2025.1735%20108.128%2025.9277C107.37%2026.7762%20107.085%2027.9073%20107.085%2029.0386C106.99%2030.1699%20107.369%2031.301%20108.033%2032.1495C108.696%2032.9037%20109.739%2033.3753%20110.686%2033.281C111.445%2033.281%20112.298%2033.0923%20112.866%2032.6209C113.53%2032.2438%20114.003%2031.584%20114.288%2030.9241L114.383%2027.1531Z'%20fill='%23545F7E'/%3e%3cpath%20d='M29.5617%2029.6988C29.5617%2025.2678%2031.7413%2020.7426%2034.3948%2020.7426C35.8164%2020.7426%2037.0483%2021.5913%2038.8489%2024.231C37.1431%2026.8707%2036.0059%2028.5673%2036.0059%2028.5673C33.6366%2032.1497%2032.8785%2032.9984%2031.5517%2032.9984C30.4145%2032.9041%2029.5617%2031.7728%2029.5617%2029.6988ZM44.9143%2028.002L43.3033%2025.3615C42.8294%2024.7016%2042.4503%2024.042%2042.0712%2023.3821C43.4928%2021.1195%2044.7248%2020.0825%2046.1463%2020.0825C49.0842%2020.0825%2051.4533%2024.4193%2051.4533%2029.6988C51.4533%2031.6786%2050.7899%2032.9036%2049.3684%2032.9036C48.0416%2032.9036%2047.4731%2032.0558%2044.9143%2028.002ZM40.7443%2021.5905C38.5646%2018.8565%2036.764%2017.7256%2034.5843%2017.7256C30.1302%2017.7256%2026.7187%2023.476%2026.7187%2029.6039C26.7187%2033.4692%2028.614%2035.8267%2031.6466%2035.8267C33.9211%2035.8267%2035.532%2034.7893%2038.3751%2029.7927L40.3653%2026.2104C40.6496%2026.6818%2040.9339%2027.1528%2041.313%2027.7184L42.6397%2029.9814C45.2932%2034.3181%2046.7149%2035.8267%2049.3684%2035.8267C52.401%2035.8267%2054.1069%2033.3753%2054.1069%2029.51C54.1069%2023.0993%2050.6004%2017.7256%2046.3358%2017.7256C44.0614%2017.7256%2042.2606%2019.4222%2040.7443%2021.5905Z'%20fill='%23545F7E'/%3e%3c/svg%3e",ze="data:image/svg+xml,%3csvg%20width='113'%20height='55'%20viewBox='0%200%20113%2055'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M41.3361%2017.6543C41.3361%2017.6543%2039.2924%2021.0591%2039.2924%2024.157C39.2924%2027.4671%2041.7408%2029.288%2044.8311%2029.288C48.3014%2029.288%2050.5832%2028.2478%2056.6429%2026.6628L90.0685%2017.8911C90.0685%2017.8911%2061.7303%2030.116%2048.1815%2035.696C45.541%2036.9462%2042.6662%2037.6311%2039.7429%2037.7063C36.1783%2037.7063%2033.207%2035.5776%2033.207%2032.0306C33.207%2029.3353%2034.087%2027.325%2035.5602%2024.842C37.1814%2022.2192%2039.1213%2019.8051%2041.3361%2017.6543V17.6543Z'%20fill='%23545F7E'/%3e%3c/svg%3e",Ge="/sound-wave-generator/assets/stanford_logo-DsEOAAhv.svg",Me=[{id:1,logo:Ge,alt:"Stanford Logo"},{id:2,logo:Te,alt:"Meta Logo"},{id:3,logo:Se,alt:"Booking Logo"},{id:4,logo:Ee,alt:"Hootsuite Logo"},{id:5,logo:ze,alt:"Nike Logo"}],Le=()=>t.jsxs(_e,{className:"SG-partners",children:[t.jsx("div",{className:"SG-partners__header flex-center sm-relative",children:t.jsx("p",{className:"SG-partners__title flex-sm-shrink-0",children:t.jsx(we,{i18nKey:"partnersTitle",components:{strong:t.jsx("span",{})},values:{users:"25M+",companies:"100k+"}})})}),t.jsx("ul",{className:"SG-partners__list flex-center flex-wrap",children:Me.map(e=>t.jsx("li",{children:t.jsx("img",{src:e.logo,alt:e.alt,width:"100%",height:"100%",loading:"lazy"})},e.id))})]}),Ve="/sound-wave-generator/assets/card1_sm-BdZ9slsG.webp",Ae="/sound-wave-generator/assets/card1_xl-DCJ0Y0FD.webp",He="/sound-wave-generator/assets/card2_sm-BaRdQqVM.webp",We="/sound-wave-generator/assets/card2_xl-BqfERNIB.webp",Be="/sound-wave-generator/assets/card3_sm-7P_LCYH3.webp",Fe="/sound-wave-generator/assets/card3_xl-BT2L9Y53.webp",De="/sound-wave-generator/assets/card4_sm-dB6CWdnW.webp",Oe="/sound-wave-generator/assets/card4_xl-Bvkzv6eG.webp",Ie="/sound-wave-generator/assets/card5_sm-C6dPs51H.webp",Re="/sound-wave-generator/assets/card5_xl-CPZHTbRp.webp",Ze=[{id:1,title:"cardTitle1",text:"cardText1",assetWeb:Ae,assetMobile:Ve,alt:"cardTitle1"},{id:2,title:"cardTitle2",text:"cardText2",assetWeb:We,assetMobile:He,alt:"cardTitle2",variant:"secondary"},{id:3,title:"cardTitle3",text:"cardText3",assetWeb:Fe,assetMobile:Be,alt:"cardTitle3"},{id:4,title:"cardTitle4",text:"cardText4",assetWeb:Oe,assetMobile:De,alt:"cardTitle4",variant:"secondary"},{id:5,title:"cardTitle5",text:"cardText5",assetWeb:Re,assetMobile:Ie,alt:"cardTitle5"}],Pe=L.main`
    .SG-main__inner {
        width: 100%;
        max-width: 100%;
        margin: 40px auto;

        border-radius: ${e=>e.theme.borderRadius.radius24};
        background-color: ${e=>e.theme.palette.primary};
        padding: 40px 16px;

        @media (min-width: ${({theme:e})=>e.breakpoints.xs}) {
            max-width: calc(100vw - 60px);
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            max-width: calc(100vw - 140px);
            border-radius: ${e=>e.theme.borderRadius.radius28};

            padding: 56px 86px;
            margin-top: 60px;
            margin-bottom: 60px;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
            max-width: calc(100vw - 240px);

            margin-top: 80px;
            margin-bottom: 96px;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
            max-width: calc(100vw - 340px);
            border-radius: ${e=>e.theme.borderRadius.radius32};
        }
    }

    .SG-banner {
        margin-top: 40px;
        margin-bottom: 40px;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            margin-top: 18px;
            margin-bottom: 96px;
        }
    }

    .SG-main__title {
        font-size: ${e=>e.theme.typography.fontSize.p24};
        font-weight: ${e=>e.theme.typography.weight.black};
        line-height: 28px;
        text-align: center;

        margin-bottom: 32px;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            font-size: ${({theme:e})=>e.typography.fontSize.p28};
            line-height: 36px;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
            font-size: ${({theme:e})=>e.typography.fontSize.p36};
            line-height: 44px;

            margin-bottom: 56px;
        }
    }
`,Je=()=>{const{t:e}=F();return t.jsxs(Pe,{className:"SG-main",children:[t.jsx(Ne,{}),t.jsx(Le,{}),t.jsxs("div",{className:"SG-main__inner",children:[t.jsx("h2",{className:"SG-main__title sm-space-pre-line",children:e("headerText")}),Ze.map(a=>t.jsx(ke,{title:a.title,text:a.text,assetWeb:a.assetWeb,assetMobile:a.assetMobile,alt:a.alt,variant:a.variant},a.id))]})]})};export{Je as default};
