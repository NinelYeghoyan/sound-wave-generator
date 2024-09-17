import{d,j as l}from"./index-zFG7VEap.js";const s=d.button`
    width: ${e=>e.$isFullWidth?"100%":"fit-content"};

    font-family: ${({theme:e})=>e.typography.fontFamily.montserrat}, sans-serif;
    font-weight: ${({theme:e})=>e.typography.weight.bold};

    border: none;
    transition: all 0.3s ease 0.05s;

    &.extra-small {
        height: 26px;
        border-radius: ${({theme:e})=>e.borderRadius.radius6};
        font-size: ${({theme:e})=>e.typography.fontSize.p12};
        line-height: 14px;
    }

    &.small {
        height: 36px;
        border-radius: ${({theme:e})=>e.borderRadius.radius8};
        font-size: ${({theme:e})=>e.typography.fontSize.p12};
        line-height: 14px;
    }

    &.medium {
        height: 40px;
        border-radius: ${({theme:e})=>e.borderRadius.radius4};
        font-size: ${({theme:e})=>e.typography.fontSize.p14};
        line-height: 18px;
    }

    &.large {
        height: 54px;
        border-radius: ${({theme:e})=>e.borderRadius.radius8};
        font-size: ${({theme:e})=>e.typography.fontSize.p18};
        line-height: 22px;
    }

    &.primary {
        box-shadow: 0 6px 12px 0 rgba(118, 109, 232, 0.2);
        background-image: linear-gradient(180deg, #8980f7 0%, #4136c1 100%);
        color: ${e=>e.theme.palette.white};

        &:hover {
            background-image: linear-gradient(180deg, #b5afff 0, #9b94fc 100%);
            box-shadow: 0 6px 24px #766de880;
        }
    }

    &.secondary {
        background-image: linear-gradient(180deg, #5690ff 0%, #3271e6 100%);

        color: ${e=>e.theme.palette.white};

        &:hover {
            background-image: linear-gradient(180deg, #6ea0ff 0, #518dff 100%);
        }
    }

    &.danger {
        background-color: ${e=>e.theme.palette.red};
        color: ${e=>e.theme.palette.white};
    }

    &.outline {
        border: 1px solid ${e=>e.theme.palette.borderColor};
        background-color: transparent;
        color: ${e=>e.theme.palette.primaryTextColor};

        &:hover {
            background-color: ${e=>e.theme.palette.blue};
        }
    }

    &.disable {
        pointer-events: none;
        touch-action: none;
        background-color: ${e=>e.theme.palette.disableButtonBackgroundColor};
        color: ${e=>e.theme.palette.disableButtonTextColor};
    }
`,h=({children:e,type:t="button",variant:o="primary",size:r="medium",isFullWidth:a=!1,className:i="",...n})=>l.jsx(s,{type:t,$isFullWidth:a,className:`BG-button ${r} ${o} ${i} shrink-0 cursor-pointer`,...n,children:e}),g=e=>e;export{h as B,g as n};
