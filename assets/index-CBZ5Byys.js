import{j as t,d as m}from"./index-zFG7VEap.js";import{u as p}from"./index-B8vl53RY.js";import{n}from"./index-DDTgZxmY.js";import{u as h}from"./useTranslation-DGErjT_Y.js";import"./index-Bazb3RhJ.js";const u=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7",height:"9",fill:"currentColor",viewBox:"0 0 7 9",children:t.jsx("path",{fillRule:"evenodd",d:"M5.497 8.988a.517.517 0 01-.32-.113L.218 4.888a.512.512 0 010-.797L5.155.124a.511.511 0 01.64.797l-4.44 3.568 4.462 3.59a.511.511 0 01-.32.909z",clipRule:"evenodd"})}),b=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"14",fill:"none",viewBox:"0 0 16 14",children:t.jsx("path",{fill:"currentColor",d:"M15.711 7.25l-.007.023v.025a.924.924 0 01-.21.341l-5.28 5.334a.883.883 0 01-.64.27.902.902 0 01-.643-.273.92.92 0 01-.084-1.188l.01-.013.064-.075s.007-.01.014-.013l3.733-3.776H1.748A.918.918 0 01.85 7.05a.915.915 0 01.773-.967h.016l.09-.006h10.922L8.92 2.302a.908.908 0 011.178-1.38l.013.011.075.065.012.013 5.28 5.334c.17.172.267.404.267.646.001.088-.01.175-.034.259z"})}),g=m.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    right: 0;
    z-index: ${e=>e.theme.zIndex.index12};

    background-color: ${e=>e.theme.palette.white};
    transform: translateX(306px);
    transition: all 0.3s ease-in-out;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        width: initial;
        height: initial;

        position: initial;
        z-index: initial;
        background-color: transparent;
        transform: initial;
        transition: initial;
    }

    &.SG-submenu__mobile--show {
        transform: translateX(0);
    }

    .SG-submenu__header {
        width: 100%;
        height: 60px;

        position: fixed;
        top: 0;

        font-size: ${e=>e.theme.typography.fontSize.p14};
        font-weight: ${e=>e.theme.typography.weight.black};
        line-height: 18px;

        border-bottom: 1px solid ${e=>e.theme.palette.borderColor};
        box-shadow: inset 0 6px 12px 0 rgba(0, 82, 224, 0.101);
        background-color: ${e=>e.theme.palette.blue100};
        color: ${e=>e.theme.palette.primaryTextColor};

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            height: initial;
            position: initial;
            border-bottom: none;
            border-radius: ${e=>e.theme.borderRadius.radius8};
            box-shadow: none;

            margin-bottom: 24px;
            color: ${e=>e.theme.palette.navbarTextColor};
            padding: 16px;
            cursor: pointer;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
            font-size: ${e=>e.theme.typography.fontSize.p16};
            line-height: 20px;
        }
    }

    .SG-submenu__icon {
        width: 32px;
        height: 32px;
        border-radius: ${e=>e.theme.borderRadius.radius10};

        background-image: linear-gradient(180deg, #47d6e2 0%, #3271e6 100%);
        box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.3);
        color: ${e=>e.theme.palette.white};
    }

    .SG-submenu__back {
        border: none;
        padding: 0;
        background-color: transparent;

        width: 32px;
        height: 32px;

        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: ${e=>e.theme.palette.navbarCategoryColor};
    }

    .SG-submenu__header--title {
        border-bottom: 1px solid ${e=>e.theme.palette.borderColor};

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            border-bottom: none;
            margin-left: 12px;
        }
    }

    .SG-submenu__container {
        height: 100%;
        max-height: calc(100% - 120px);

        overflow-y: auto;
        padding: 16px 24px;
        margin-top: 60px;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            height: initial;
            max-height: initial;
            overflow-y: initial;
            padding: 0;
            margin-top: 0;

            gap: 48px;
        }
    }

    .SG-submenu__category,
    .SG-submenu__featured {
        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            padding-right: 8px;
            padding-left: 8px;
        }
    }

    .SG-submenu__category {
        border-bottom: 1px solid ${e=>e.theme.palette.borderColor};
        padding-bottom: 16px;
        margin-bottom: 24px;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;

            &:after {
                content: '';
                display: block;
                width: 1px;
                height: 100%;
                background-color: ${e=>e.theme.palette.borderColor};

                position: absolute;
                top: 0;
                right: -22px;
            }
        }
    }

    .SG-submenu__title {
        font-size: ${e=>e.theme.typography.fontSize.p14};
        font-weight: ${e=>e.theme.typography.weight.bold};
        line-height: 18px;

        margin-bottom: 12px;
        color: ${e=>e.theme.palette.navbarCategoryColor};
    }

    .SG-submenu__list {
        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            display: grid;
            column-gap: 32px;
            grid-template-rows: repeat(5, 1fr);
            grid-auto-flow: column;
        }
    }

    .SG-submenu__item {
        font-size: ${e=>e.theme.typography.fontSize.p14};
        font-weight: ${e=>e.theme.typography.weight.medium};
        line-height: 18px;

        padding-top: 10px;
        padding-bottom: 10px;
        transition: 0.2s linear;
        color: ${e=>e.theme.palette.primaryTextColor};

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            font-size: ${e=>e.theme.typography.fontSize.p12};
            line-height: 16px;
            white-space: nowrap;
            padding-top: 8px;
            padding-bottom: 8px;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
            font-size: ${e=>e.theme.typography.fontSize.p14};
            line-height: 18px;
        }

        &:hover {
            color: ${e=>e.theme.palette.navbarTextColor};
        }
    }

    .SG-submenu__btn {
        border: none;
        padding: 0;

        width: 100%;
        height: 60px;
        position: fixed;
        bottom: 0;

        font-size: ${e=>e.theme.typography.fontSize.p14};
        font-weight: ${e=>e.theme.typography.weight.medium};
        line-height: 18px;

        border-top: 1px solid ${e=>e.theme.palette.borderColor};
        box-shadow: 0 -4px 10px 0 rgba(0, 82, 224, 0.08);
        background-color: ${e=>e.theme.palette.blue100};
        color: ${e=>e.theme.palette.blue200};

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            height: initial;
            position: initial;
            border-top: none;
            box-shadow: none;

            font-size: ${e=>e.theme.typography.fontSize.p12};
            line-height: 16px;

            background-color: transparent;
        }

        @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
            font-size: ${e=>e.theme.typography.fontSize.p14};
            line-height: 18px;

            margin-top: 24px;
        }
    }

    .blue {
        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            background-color: ${e=>e.theme.palette.blue};

            .SG-submenu__icon {
                background-image: linear-gradient(180deg, #f45fe8 0, #766de8 100%);
            }
        }
    }

    .purple {
        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            background-color: ${e=>e.theme.palette.purple};

            .SG-submenu__icon {
                background-image: linear-gradient(180deg, #f45fe8 0, #766de8 100%);
            }
        }
    }

    .yellow {
        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            background-color: ${e=>e.theme.palette.yellow};

            .SG-submenu__icon {
                background-image: linear-gradient(180deg, #ffd200 0, #baac00 100%);
            }
        }
    }

    .green {
        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            background-color: ${e=>e.theme.palette.green};

            .SG-submenu__icon {
                background-image: linear-gradient(180deg, #5cf0be 0, #41ba82 100%);
            }
        }
    }

    .rose {
        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
            background-color: ${e=>e.theme.palette.rose};

            .SG-submenu__icon {
                background-image: linear-gradient(180deg, #f560b6 0, #f2446c 100%);
            }
        }
    }
`,$=({data:e,isOpen:l,isClose:r,isActive:s})=>{const{t:o}=h(),{mdUp:a}=p(),d=()=>{r==null||r(null)};return t.jsxs(g,{className:`SG-submenu ${l&&s?"SG-submenu__mobile--show":""}`,onClick:i=>i.stopPropagation(),children:[e.header&&t.jsxs("div",{className:`SG-submenu__header ${e.headerClass} flex align-center justify-center justify-md-start`,children:[e.icon&&a&&t.jsx("div",{className:"SG-submenu__icon flex-center flex-shrink-0",children:e.icon}),!a&&t.jsx("button",{type:"button","aria-label":"Close",onClick:d,className:"SG-submenu__back flex-center cursor-pointer",children:t.jsx(u,{})}),t.jsx("h3",{className:"SG-submenu__header--title",children:o(n(e.header))})]}),t.jsxs("div",{className:"SG-submenu__container md-flex",children:[e.category&&t.jsxs("div",{className:"SG-submenu__category relative",children:[t.jsx("h4",{className:"SG-submenu__title",children:o(n(e.category.title))}),t.jsx("ul",{className:"SG-submenu__list",children:e.category.items.map(i=>t.jsx("li",{className:"SG-submenu__item cursor-pointer",children:o(n(i.title))},i.id))})]}),e.featured&&t.jsxs("div",{className:"SG-submenu__featured relative",children:[t.jsx("h4",{className:"SG-submenu__title",children:o(n(e.featured.title))}),t.jsx("ul",{className:"SG-submenu__list",children:e.featured.items.map(i=>t.jsx("li",{className:"SG-submenu__item cursor-pointer",children:o(n(i.title))},i.id))})]})]}),e.hasMoreBtn&&t.jsxs("button",{type:"button",className:"SG-submenu__btn flex-center cursor-pointer",children:[t.jsx("span",{className:"mr-8",children:o("browseMore")}),t.jsx(b,{})]})]})};export{$ as default};
