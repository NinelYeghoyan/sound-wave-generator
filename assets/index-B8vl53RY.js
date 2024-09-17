const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CBZ5Byys.js","assets/index-zFG7VEap.js","assets/index-CzocIWW6.css","assets/index-DDTgZxmY.js","assets/useTranslation-DGErjT_Y.js","assets/index-Bazb3RhJ.js"])))=>i.map(i=>d[i]);
import{d as p,j as t,r as m,_}from"./index-zFG7VEap.js";import{B as u,n as M}from"./index-DDTgZxmY.js";import{u as y}from"./useTranslation-DGErjT_Y.js";import{L as x}from"./index-Bazb3RhJ.js";const H=p.div`
    padding: 30px 18px;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        padding: 0;
    }

    .BG-button {
        width: 100%;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            width: fit-content;
        }

        ~ .BG-button {
            margin-bottom: 12px;

            @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
                width: fit-content;
                margin-bottom: 0;
                margin-left: 12px;
            }

            @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
                margin-left: 16px;
            }
        }
    }
`,b=()=>{const{t:e}=y();return t.jsxs(H,{className:"SG-auth-btn flex flex-column-reverse flex-md-row flex-md-shrink-0",children:[t.jsx(u,{variant:"outline",className:"ph-22",children:e("signIn")}),t.jsx(u,{variant:"secondary",className:"ph-22",children:e("tryForFree")})]})},o="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_38419)'%3e%3cmask%20id='mask0_1_38419'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='-1'%20y='0'%20width='25'%20height='24'%3e%3cpath%20d='M23.9966%2012C23.9966%205.37258%2018.624%200%2011.9966%200C5.36916%200%20-0.00341797%205.37258%20-0.00341797%2012C-0.00341797%2018.6274%205.36916%2024%2011.9966%2024C18.624%2024%2023.9966%2018.6274%2023.9966%2012Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1_38419)'%3e%3cpath%20d='M-0.00341797%200H23.9966V24H-0.00341797V0Z'%20fill='%23012169'/%3e%3cpath%20d='M23.9966%200V3L15.0902%2012L23.9966%2020.7656V24H20.8558L11.903%2015.1872L3.18378%2024H-0.00341797V20.8128L8.71658%2012.0472L-0.00341797%203.4688V0H2.90298L11.903%208.8128L20.6214%200H23.9966Z'%20fill='white'/%3e%3cpath%20d='M8.62138%2015.1872L9.13738%2016.7808L1.96538%2024H-0.00341797V23.8592L8.62138%2015.1872ZM14.4342%2014.6272L16.9654%2015.0024L23.9966%2021.8904V24L14.4342%2014.6272ZM23.9966%200L14.9966%209.1872L14.8094%207.1248L21.8366%200H23.9966ZM-0.00341797%200.0472L9.04378%208.9064L6.27818%208.5312L-0.00341797%202.2968V0.0472Z'%20fill='%23C8102E'/%3e%3cpath%20d='M8.24698%200V24H15.747V0H8.24698ZM-0.00341797%208.2504V15.7504H23.9966V8.2504H-0.00341797Z'%20fill='white'/%3e%3cpath%20d='M-0.00341797%209.7504V14.2504H23.9966V9.7504H-0.00341797ZM9.74698%200V24H14.247V0H9.74698Z'%20fill='%23C8102E'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_38419'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(-0.00341797)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",r=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"6",fill:"none",viewBox:"0 0 8 6",children:t.jsx("path",{fill:"currentColor",d:"M2.918 5.778c-.035-.034-.184-.162-.306-.281A13.014 13.014 0 01.197 2.02a2.77 2.77 0 01-.2-.707c0-.187.044-.371.13-.537C.252.562.443.395.67.3a5.9 5.9 0 01.638-.154C2.066.036 2.83-.012 3.597 0c.738-.006 1.476.036 2.209.128a5.1 5.1 0 01.8.2 1.071 1.071 0 01.59.95v.035a2.927 2.927 0 01-.244.793 13.014 13.014 0 01-2.38 3.4 3.4 3.4 0 01-.332.289A1.07 1.07 0 013.597 6a1.125 1.125 0 01-.683-.222"})}),T=p.div`
    min-width: 200px;
    position: absolute;
    top: 100%;
    left: ${e=>e.$isSecondary?"initial":"-20px"};
    right: ${e=>e.$isSecondary?"-20px":"initial"};

    z-index: ${e=>e.theme.zIndex.index8};

    visibility: hidden;
    opacity: 0;

    border-radius: ${e=>e.theme.borderRadius.radius16};
    box-shadow: 0 2px 12px 0 rgba(0, 82, 224, 0.12);
    background-color: ${e=>e.theme.palette.white};

    padding: 24px;
`,S=({component:e,$isSecondary:a=!1})=>t.jsx(T,{$isSecondary:a,className:"SG-dropdown",children:e}),I=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),D=p.div`
    height: 60px;

    padding-right: 20px;
    padding-left: 20px;
    border-bottom: 1px solid ${e=>e.theme.palette.borderColor};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        height: 100%;

        border: none;
        padding-right: 0;
        padding-left: 0;
    }

    .SG-language__flag {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid ${e=>e.theme.palette.borderColor};

        @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
            width: 28px;
            height: 28px;
        }
    }

    .SG-language__text {
        font-size: ${e=>e.theme.typography.fontSize.p14};
        font-weight: ${e=>e.theme.typography.weight.black};
        line-height: 18px;

        color: ${e=>e.theme.palette.navbarTextColor};
        transition: 0.2s linear;

        &:hover {
            color: ${e=>e.theme.palette.primaryTextColor};
        }
    }
`,B=p.ul`
    > li {
        height: 50px;
    }

    .SG-lang-menu__asset {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .SG-lang-menu__title {
        font-size: ${e=>e.theme.typography.fontSize.p12};
        font-weight: ${e=>e.theme.typography.weight.medium};
        line-height: 16px;

        color: ${e=>e.theme.palette.primaryTextColor};
        transition: 0.2s linear;

        @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
            font-size: ${e=>e.theme.typography.fontSize.p14};
            line-height: 18px;
        }

        &:hover {
            color: ${e=>e.theme.palette.navbarTextColor};
        }
    }
`,O=[{id:1,title:"Português",icon:o},{id:2,title:"Español",icon:o},{id:3,title:"Deutsch",icon:o},{id:4,title:"Français",icon:o},{id:5,title:"العربية",icon:o},{id:6,title:"日本語",icon:o},{id:7,title:"Հայերեն",icon:o},{id:8,title:"Türkçe",icon:o},{id:9,title:"Русский",icon:o}],Z=()=>t.jsx(B,{className:"SG-lang-menu",children:O.map(e=>t.jsxs("li",{className:"flex align-center cursor-pointer",children:[t.jsx("div",{className:"SG-lang-menu__asset flex-center",children:t.jsx("img",{src:e.icon,alt:e.title,width:"100%",height:"100%",loading:"lazy"})}),t.jsx("span",{className:"SG-lang-menu__title ml-12",children:e.title})]},e.id))});var n=(e=>(e[e.xs=480]="xs",e[e.sm=768]="sm",e[e.md=1200]="md",e[e.lg=1440]="lg",e[e.xl=1920]="xl",e))(n||{});const j=()=>{const[e,a]=m.useState(window.innerWidth);return m.useEffect(()=>{const s=()=>{a(window.innerWidth)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),(()=>{const s=e<n.sm,l=e>=n.sm&&e<n.md,h=e>=n.md&&e<n.lg,c=e>=n.lg&&e<n.xl,i=e>=n.xl,G=e<=n.xs,$=e<=n.sm,C=e<=n.md,k=e<=n.lg,V=e<=n.xl,L=e>=n.xs,A=e>=n.sm,N=e>=n.md,E=e>=n.lg,z=e>=n.xl;return{xs:s,xsDown:G,xsUp:L,sm:l,smDown:$,smUp:A,md:h,mdDown:C,mdUp:N,lg:c,lgDown:k,lgUp:E,xl:i,xlDown:V,xlUp:z}})()},w=()=>{const{mdUp:e}=j();return t.jsxs(D,{className:"SG-language relative",children:[t.jsxs("div",{className:"h100 flex-between flex-md-start cursor-pointer",children:[t.jsxs("div",{className:"flex align-center",children:[t.jsx("div",{className:"SG-language__flag flex-center",children:t.jsx("img",{src:o,alt:"Flag",width:"24px",height:"24px",loading:"lazy"})}),t.jsx("p",{className:"SG-language__text md-display-none ml-12",children:"English"})]}),t.jsx("div",{className:"SG-language__icon flex-center",children:t.jsx(r,{})})]}),e&&t.jsx(S,{component:t.jsx(Z,{}),$isSecondary:!0})]})},P=p.nav`
    &.SG-nav {
        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            margin-left: 24px;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
            margin-left: 40px;
        }
    }

    .SG-nav__item {
        width: 100%;
        height: 60px;

        border-bottom: 1px solid ${e=>e.theme.palette.borderColor};
        padding-right: 20px;
        padding-left: 20px;
        cursor: pointer;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            width: fit-content;
            height: 100%;

            border: none;
            padding-right: 0;
            padding-left: 0;
            cursor: default;
        }

        ~ .SG-nav__item {
            @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
                margin-left: 12px;
            }

            @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
                margin-left: 16px;
            }
        }

        &.growClass {
            flex-grow: 1;
        }
    }

    .SG-nav__title {
        font-size: ${e=>e.theme.typography.fontSize.p14};
        font-weight: ${e=>e.theme.typography.weight.black};
        line-height: 18px;

        color: ${e=>e.theme.palette.navbarTextColor};
        transition: 0.2s linear;

        &:hover {
            color: ${e=>e.theme.palette.primaryTextColor};
        }
    }
`,g=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"16",fill:"none",viewBox:"0 0 18 16",children:t.jsx("path",{fill:"currentColor",d:"M3.707 15.071a3.598 3.598 0 01-3.7-3.829V4.757a3.601 3.601 0 013.7-3.829H8.92a3.597 3.597 0 013.7 3.83v6.484a3.6 3.6 0 01-3.7 3.83H3.707zm12.455-2.243l-1.331-.705a1.542 1.542 0 01-.8-1.374v-5.5a1.536 1.536 0 01.8-1.371l1.332-.706a1.196 1.196 0 011.235.06A1.367 1.367 0 0118 4.381v7.238a1.366 1.366 0 01-.602 1.15 1.199 1.199 0 01-1.236.06z"})}),U=[{id:1,title:"video",icon:t.jsx(r,{}),submenu:{header:"createVideo",icon:t.jsx(g,{}),headerClass:"blue",hasMoreBtn:!0,category:{title:"categories",items:[{id:1,title:"intros"},{id:2,title:"animations"},{id:3,title:"musicVisualizations"},{id:4,title:"videoEditing"},{id:5,title:"youtubeVideos"},{id:6,title:"slideshows"},{id:7,title:"videoPresentations"},{id:8,title:"videoInvitations"},{id:9,title:"openerAnimations"},{id:10,title:"greetingCards"}]},featured:{title:"featured",items:[{id:1,title:"animatedExplainers"},{id:2,title:"youtubeIntros"},{id:3,title:"animatedTexts"},{id:4,title:"logoAnimations"},{id:5,title:"birthdayGreetings"},{id:6,title:"outroAnimation"},{id:7,title:"2DAnimations"},{id:8,title:"animatedECards"},{id:9,title:"worldOfVideos"},{id:10,title:"greetingCards"}]}}},{id:2,title:"website",icon:t.jsx(r,{}),submenu:{header:"Build Website",icon:t.jsx(g,{}),headerClass:"purple",hasMoreBtn:!0,category:{title:"categories",items:[{id:1,title:"intros"},{id:2,title:"animations"},{id:3,title:"musicVisualizations"},{id:4,title:"videoEditing"},{id:5,title:"youtubeVideos"},{id:6,title:"slideshows"},{id:7,title:"videoPresentations"},{id:8,title:"videoInvitations"},{id:9,title:"openerAnimations"},{id:10,title:"greetingCards"}]},featured:{title:"featured",items:[{id:1,title:"animatedExplainers"},{id:2,title:"youtubeIntros"},{id:3,title:"animatedTexts"},{id:4,title:"logoAnimations"},{id:5,title:"birthdayGreetings"},{id:6,title:"outroAnimation"},{id:7,title:"2DAnimations"},{id:8,title:"animatedECards"},{id:9,title:"worldOfVideos"},{id:10,title:"greetingCards"}]}}},{id:3,title:"logos",icon:t.jsx(r,{}),submenu:{header:"makeLogos",icon:t.jsx(g,{}),headerClass:"yellow",hasMoreBtn:!0,category:{title:"categories",items:[{id:1,title:"intros"},{id:2,title:"animations"},{id:3,title:"musicVisualizations"},{id:4,title:"videoEditing"},{id:5,title:"youtubeVideos"},{id:6,title:"slideshows"},{id:7,title:"videoPresentations"},{id:8,title:"videoInvitations"},{id:9,title:"openerAnimations"},{id:10,title:"greetingCards"}]},featured:{title:"featured",items:[{id:1,title:"animatedExplainers"},{id:2,title:"youtubeIntros"},{id:3,title:"animatedTexts"},{id:4,title:"logoAnimations"},{id:5,title:"birthdayGreetings"},{id:6,title:"outroAnimation"},{id:7,title:"2DAnimations"},{id:8,title:"animatedECards"},{id:9,title:"worldOfVideos"},{id:10,title:"greetingCards"}]}}},{id:4,title:"mockups",icon:t.jsx(r,{}),submenu:{header:"generateMockups",icon:t.jsx(g,{}),headerClass:"green",hasMoreBtn:!0,category:{title:"categories",items:[{id:1,title:"intros"},{id:2,title:"animations"},{id:3,title:"musicVisualizations"},{id:4,title:"videoEditing"},{id:5,title:"youtubeVideos"},{id:6,title:"slideshows"},{id:7,title:"videoPresentations"},{id:8,title:"videoInvitations"},{id:9,title:"openerAnimations"},{id:10,title:"greetingCards"}]},featured:{title:"featured",items:[{id:1,title:"animatedExplainers"},{id:2,title:"youtubeIntros"},{id:3,title:"animatedTexts"},{id:4,title:"logoAnimations"},{id:5,title:"birthdayGreetings"},{id:6,title:"outroAnimation"},{id:7,title:"2DAnimations"},{id:8,title:"animatedECards"},{id:9,title:"worldOfVideos"},{id:10,title:"greetingCards"}]}}},{id:5,title:"graphics",icon:t.jsx(r,{}),submenu:{header:"designGraphics",icon:t.jsx(g,{}),headerClass:"rose",hasMoreBtn:!0,category:{title:"categories",items:[{id:1,title:"intros"},{id:2,title:"animations"},{id:3,title:"musicVisualizations"},{id:4,title:"videoEditing"},{id:5,title:"youtubeVideos"},{id:6,title:"slideshows"},{id:7,title:"videoPresentations"},{id:8,title:"videoInvitations"},{id:9,title:"openerAnimations"},{id:10,title:"greetingCards"}]},featured:{title:"featured",items:[{id:1,title:"animatedExplainers"},{id:2,title:"youtubeIntros"},{id:3,title:"animatedTexts"},{id:4,title:"logoAnimations"},{id:5,title:"birthdayGreetings"},{id:6,title:"outroAnimation"},{id:7,title:"2DAnimations"},{id:8,title:"animatedECards"},{id:9,title:"worldOfVideos"},{id:10,title:"greetingCards"}]}}},{id:6,title:"explore",icon:t.jsx(r,{}),submenu:{header:"exploreAi",icon:t.jsx(g,{}),hasMoreBtn:!0,category:{title:"categories",items:[{id:1,title:"intros"},{id:2,title:"animations"},{id:3,title:"musicVisualizations"},{id:4,title:"videoEditing"},{id:5,title:"youtubeVideos"},{id:6,title:"slideshows"},{id:7,title:"videoPresentations"},{id:8,title:"videoInvitations"},{id:9,title:"openerAnimations"},{id:10,title:"greetingCards"}]},featured:{title:"featured",items:[{id:1,title:"animatedExplainers"},{id:2,title:"youtubeIntros"},{id:3,title:"animatedTexts"},{id:4,title:"logoAnimations"},{id:5,title:"birthdayGreetings"},{id:6,title:"outroAnimation"},{id:7,title:"2DAnimations"},{id:8,title:"animatedECards"},{id:9,title:"worldOfVideos"},{id:10,title:"greetingCards"}]}}}],W=[{id:7,title:"pricing"},{id:8,title:"learn",icon:t.jsx(r,{}),isSecondary:!0,submenu:{header:"blogAndHelp",hasMoreBtn:!1,category:{title:"blog",items:[{id:1,title:"intros"},{id:2,title:"animations"},{id:3,title:"musicVisualizations"},{id:4,title:"videoEditing"},{id:5,title:"youtubeVideos"}]},featured:{title:"help",items:[{id:1,title:"animatedExplainers"},{id:2,title:"youtubeIntros"},{id:3,title:"animatedTexts"},{id:4,title:"logoAnimations"},{id:5,title:"birthdayGreetings"}]}}}],F=m.lazy(()=>_(()=>Promise.resolve().then(()=>I),void 0)),f=m.lazy(()=>_(()=>import("./index-CBZ5Byys.js"),__vite__mapDeps([0,1,2,3,4,5]))),v=({isOpenSubmenu:e,setIsOpenSubmenu:a,menuRef:d})=>{const{t:s}=y(),{mdUp:l}=j(),h=i=>{!l&&(d!=null&&d.current)&&(d.current.scrollTo({top:0}),a==null||a(e===i?null:i))},c=i=>t.jsxs("li",{className:`${i.isSecondary} SG-nav__item flex-between flex-md-start md-relative`,onClick:()=>{i.submenu&&h(i.id)},onKeyDown:()=>{i.submenu&&h(i.id)},children:[t.jsx("span",{className:"SG-nav__title",children:s(M(i.title))}),i.icon&&t.jsx("div",{className:"SG-nav__icon flex-center",children:i.icon}),!l&&i.submenu&&t.jsx(f,{data:i.submenu,isOpen:e,isClose:a,isActive:e===i.id}),l&&i.submenu&&t.jsx(F,{component:t.jsx(f,{data:i.submenu}),$isSecondary:i.isSecondary})]},i.id);return t.jsxs(P,{className:"SG-nav md-h100 md-flex justify-md-between flex-md-grow-1",children:[t.jsxs("ul",{className:"SG-nav__list md-flex h100",children:[" ",U.map(i=>c(i))]}),t.jsxs("ul",{className:"SG-nav__list md-flex h100",children:[" ",W.map(i=>c(i))]})]})},K=p.header`
    height: 64px;
    position: sticky;
    top: 0;
    z-index: ${e=>e.theme.zIndex.index6};

    box-shadow: 0 4px 4px 0 rgba(27, 85, 216, 0.06);
    background-color: ${e=>e.theme.palette.base};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        height: 70px;
        box-shadow: none;
    }

    .SG-header__container {
        max-width: calc(100vw - 48px);
        margin: 0 auto;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            max-width: calc(100vw - 64px);
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
            max-width: calc(100vw - 220px);
        }
    }

    .SG-nav__icon,
    .SG-language__icon {
        width: 24px;
        height: 24px;
        transform: rotate(-90deg);

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            transform: rotate(0deg);
        }

        > svg {
            color: ${e=>e.theme.palette.navbarTextColor};
            transition: all 0.3s ease;
        }
    }

    .SG-nav__item,
    .SG-language {
        &:hover {
            .SG-nav__icon,
            .SG-language__icon {
                > svg {
                    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
                        transform: rotate(-180deg);
                        transform-origin: 50% 52%;
                    }
                }
            }

            .SG-dropdown {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    .SG-language {
        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            margin-right: 14px;
            margin-left: 14px;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
            margin-right: 24px;
            margin-left: 24px;
        }
    }

    .SG-hamburger {
        border: none;
        padding: 0;
        background: transparent;

        width: 30px;
        height: 20px;
    }

    .SG-hamburger__bar {
        width: 100%;
        height: 4px;

        border-radius: ${e=>e.theme.borderRadius.radius4};
        background-color: ${e=>e.theme.palette.blue300};
        transition: all 0.3s ease-in-out;
    }

    .SG-hamburger {
        &.SG-hamburger--show {
            .SG-hamburger__bar {
                &:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }

                &:nth-child(2) {
                    transform: translateY(-8px) rotate(-45deg);
                }
            }
        }
    }

    .SG-mobile-menu__layer {
        width: 100%;
        height: calc(100vh - 64px);

        position: fixed;
        top: 64px;
        left: 0;
        transform: translateX(100%);
        z-index: ${e=>e.theme.zIndex.index10};

        background-color: ${e=>e.theme.palette.primaryTransparent};
        backdrop-filter: blur(2px);
        transition:
            background-color 0.3s ease,
            backdrop-filter 0.3s ease;
    }

    .SG-mobile-menu__content {
        width: 306px;
        height: 100%;

        position: absolute;
        right: 0;

        transform: translateX(306px);

        background-color: ${e=>e.theme.palette.white};
        box-shadow: inset 0 6px 12px 0 rgba(0, 82, 224, 0.101);

        transition: transform 0.3s ease-in-out;
        overflow: hidden auto;

        &.hidden {
            overflow-y: hidden;
        }
    }

    .SG-mobile-menu__layer {
        &.SG-mobile-menu--show {
            transform: translateX(0);

            .SG-mobile-menu__content {
                transform: translateX(0);
            }
        }
    }
`,X=()=>{const[e,a]=m.useState(!1),[d,s]=m.useState(null),l=m.useRef(null);m.useEffect(()=>{e?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")},[e]);const h=()=>{a(i=>!i),s(null)},c=()=>{a(!1),s(null)};return t.jsx(K,{className:"SG-header",children:t.jsxs("div",{className:"SG-header__container w100 h100",children:[t.jsxs("div",{className:"display-none flex-md-between h100",children:[t.jsxs("div",{className:"h100 flex align-center flex-grow-1",children:[t.jsx(x,{isHeader:!0}),t.jsx(v,{})]}),t.jsxs("div",{className:"h100 flex align-center",children:[t.jsx(w,{}),t.jsx(b,{})]})]}),t.jsxs("div",{className:"md-display-none h100",children:[t.jsxs("div",{className:"flex-between h100 w100",children:[t.jsx(x,{isHeader:!0}),t.jsxs("button",{className:`SG-hamburger ${e?"SG-hamburger--show":""} flex justify-between flex-column cursor-pointer`,type:"button","aria-label":"Close",onClick:h,children:[t.jsx("span",{className:"SG-hamburger__bar"}),t.jsx("span",{className:"SG-hamburger__bar"})]})]}),t.jsx("div",{className:`SG-mobile-menu__layer ${e?"SG-mobile-menu--show":""}`,onClick:c,onKeyDown:c,role:"button",tabIndex:0,children:t.jsxs("div",{className:`SG-mobile-menu__content ${d?"hidden":""}`,ref:l,role:"button",tabIndex:0,"aria-label":"Stop Propagation",onClick:i=>i.stopPropagation(),onKeyDown:i=>i.stopPropagation(),children:[t.jsx(v,{isOpenSubmenu:d,setIsOpenSubmenu:s,menuRef:l}),t.jsx(w,{}),t.jsx(b,{})]})})]})]})})},Q=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{Q as i,j as u};
