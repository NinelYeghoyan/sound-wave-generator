import{j as t,d as o}from"./index-zFG7VEap.js";import{L as r}from"./index-Bazb3RhJ.js";import{u as i}from"./useTranslation-DGErjT_Y.js";const n=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"20",fill:"none",viewBox:"0 0 10 20",children:t.jsx("path",{fill:"currentColor",d:"M2.444 4.41v2.5H.616v3.048h1.828v9.069H6.2v-9.07h2.52S8.957 8.5 9.07 6.9H6.217V4.809a.886.886 0 01.814-.731h2.045V.9H6.293c-3.941 0-3.85 3.055-3.85 3.51z"})}),a=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",fill:"none",viewBox:"0 0 19 20",children:t.jsx("path",{fill:"currentColor",d:"M12.544 19.027h-6.8a5.673 5.673 0 01-5.67-5.665v-6.8A5.672 5.672 0 015.744.9h6.8a5.673 5.673 0 015.668 5.664v6.8a5.673 5.673 0 01-5.667 5.663zm-3.4-13.6a4.532 4.532 0 104.53 4.537 4.538 4.538 0 00-4.53-4.532v-.005zm4.875-.944a.6.6 0 10.6.6.6.6 0 00-.601-.595v-.005zM9.144 12.8a2.832 2.832 0 11-.002-5.664 2.832 2.832 0 01.002 5.664z"})}),s=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"20",fill:"none",viewBox:"0 0 15 20",children:t.jsx("path",{fill:"currentColor",d:"M7.82.9C2.854.9.21 4.084.21 7.555c0 1.61.9 3.618 2.34 4.254.22.1.339.057.387-.146.043-.154.232-.9.324-1.246a.32.32 0 00-.077-.317 4.128 4.128 0 01-.858-2.5 4.883 4.883 0 015.2-4.772c2.832 0 4.814 1.84 4.814 4.472 0 2.974-1.574 5.032-3.62 5.032a1.62 1.62 0 01-1.71-1.99 21.54 21.54 0 00.957-3.66 1.406 1.406 0 00-1.451-1.547c-1.152 0-2.087 1.141-2.087 2.673a3.81 3.81 0 00.344 1.63L3.422 14.9a12.227 12.227 0 00.084 4.016.119.119 0 00.218.056A14.276 14.276 0 005.6 15.438c.14-.518.717-2.617.717-2.617a3.132 3.132 0 002.642 1.26c3.472 0 5.98-3.05 5.98-6.838C14.926 3.616 11.819.9 7.82.9z"})}),l=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"20",fill:"none",viewBox:"0 0 24 20",children:t.jsx("path",{fill:"currentColor",d:"M23.255 3.042a9.141 9.141 0 01-2.63.721 4.6 4.6 0 002.014-2.53c-.9.532-1.884.907-2.91 1.11a4.582 4.582 0 00-7.8 4.174 13 13 0 01-9.435-4.783 4.583 4.583 0 001.417 6.11 4.578 4.578 0 01-2.072-.574v.057a4.583 4.583 0 003.67 4.49c-.393.105-.799.16-1.206.16-.29 0-.578-.029-.862-.086a4.58 4.58 0 004.276 3.18 9.184 9.184 0 01-5.686 1.956c-.365 0-.73-.021-1.092-.063a12.94 12.94 0 007.017 2.06A12.934 12.934 0 0020.98 5.997l-.015-.593a9.14 9.14 0 002.289-2.362z"})}),c=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"17",fill:"none",viewBox:"0 0 23 17",children:t.jsx("path",{fill:"currentColor",d:"M18.204 16.979H4.96a4.71 4.71 0 01-4.705-4.706v-6.62A4.71 4.71 0 014.96.948h13.244a4.71 4.71 0 014.7 4.705v6.62a4.71 4.71 0 01-4.7 4.706zM8.72 5.673a.249.249 0 00-.248.249v6.094a.25.25 0 00.356.224l6.194-2.954a.25.25 0 00.005-.447l-6.194-3.14a.25.25 0 00-.113-.026z"})}),h=[{id:1,ref:"https://www.facebook.com/Renderforest/",logo:t.jsx(n,{}),name:"facebook"},{id:2,ref:"https://www.instagram.com/renderforestcom/",logo:t.jsx(a,{}),name:"instagram"},{id:3,ref:"https://www.pinterest.com/renderforest/",logo:t.jsx(s,{}),name:"pinterest"},{id:4,ref:"https://x.com/renderforestcom",logo:t.jsx(l,{}),name:"twitter"},{id:5,ref:"https://www.youtube.com/user/renderforest",logo:t.jsx(c,{}),name:"youtube"}],d=o.ul`
    > li {
        color: ${e=>e.theme.palette.primaryTextColor};
        transition: opacity 0.4s ease;

        ~ li {
            margin-left: 24px;
        }

        &:hover {
            opacity: 0.6;
        }
    }

    a {
        width: 100%;
        height: 100%;
        display: block;

        color: inherit;
    }
`,p=()=>t.jsx(d,{className:"SG-social flex align-center",children:h.map(e=>t.jsx("li",{children:t.jsx("a",{href:e.ref,rel:"noreferrer",target:"_blank","aria-label":"logo",children:e.logo})},e.id))}),m=o.footer`
    padding-top: 24px;
    background-color: ${e=>e.theme.palette.secondary};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        padding-top: 40px;
    }

    .SG-footer__inner {
        border-top: 1px solid ${e=>e.theme.palette.borderColor};
    }

    .SG-footer__container {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 26px 16px;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            padding-right: 32px;
            padding-left: 32px;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
            max-width: 1320px;

            padding-right: 0;
            padding-left: 0;
        }
    }

    .SG-footer__copyright {
        font-size: ${e=>e.theme.typography.fontSize.p14};
        font-weight: ${e=>e.theme.typography.weight.medium};
        line-height: 18px;

        color: ${e=>e.theme.palette.primaryTextColor};
        margin-top: 16px;
        margin-bottom: 20px;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
`,f=()=>{const{t:e}=i();return t.jsx(m,{className:"SG-footer",children:t.jsx("div",{className:"SG-footer__inner",children:t.jsxs("div",{className:"SG-footer__container flex-center flex-column flex-sm-row justify-sm-between",children:[t.jsx(r,{}),t.jsx("p",{className:"SG-footer__copyright",children:e("copyright")}),t.jsx(p,{})]})})})};export{f as default};
