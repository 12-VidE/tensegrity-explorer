// node_modules/preact/dist/preact.mjs
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/OverflowList.tsx
var OverflowList = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ u2("ul", { ...props, class: [props.class, "overflow"].filter(Boolean).join(" "), id: props.id, children: [
    children,
    /* @__PURE__ */ u2("li", { class: "overflow-end" })
  ] });
};
var numLists = 0;
var OverflowList_default = () => {
  const id = `list-${numLists++}`;
  return {
    OverflowList: (props) => /* @__PURE__ */ u2(OverflowList, { ...props, id }),
    overflowListAfterDOMLoaded: `
document.addEventListener("nav", (e) => {
  const ul = document.getElementById("${id}")
  if (!ul) return

  const end = ul.querySelector(".overflow-end")
  if (!end) return

  const scrollContainer = ul.parentElement
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const parentUl = entry.target.parentElement
      if (!parentUl) return
      if (entry.isIntersecting) {
        parentUl.classList.remove("gradient-active")
      } else {
        parentUl.classList.add("gradient-active")
      }
    }
  }, scrollContainer ? { root: scrollContainer } : undefined)

  observer.observe(end)
  window.addCleanup(() => observer.disconnect())
})
`
  };
};

// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/i18n/locales/en-US.ts
var en_US_default = {
  components: {
    explorer: {
      title: "Explorer"
    }
  }
};

// src/i18n/locales/en-GB.ts
var en_GB_default = {
  components: {
    explorer: {
      title: "Explorer"
    }
  }
};

// src/i18n/locales/ar-SA.ts
var ar_SA_default = {
  components: {
    explorer: {
      title: "\u0627\u0644\u0645\u0633\u062A\u0639\u0631\u0636"
    }
  }
};

// src/i18n/locales/ca-ES.ts
var ca_ES_default = {
  components: {
    explorer: {
      title: "Explorador"
    }
  }
};

// src/i18n/locales/cs-CZ.ts
var cs_CZ_default = {
  components: {
    explorer: {
      title: "Proch\xE1zet"
    }
  }
};

// src/i18n/locales/de-DE.ts
var de_DE_default = {
  components: {
    explorer: {
      title: "Explorer"
    }
  }
};

// src/i18n/locales/es-ES.ts
var es_ES_default = {
  components: {
    explorer: {
      title: "Explorador"
    }
  }
};

// src/i18n/locales/fa-IR.ts
var fa_IR_default = {
  components: {
    explorer: {
      title: "\u0645\u0637\u0627\u0644\u0628"
    }
  }
};

// src/i18n/locales/fi-FI.ts
var fi_FI_default = {
  components: {
    explorer: {
      title: "Selain"
    }
  }
};

// src/i18n/locales/fr-FR.ts
var fr_FR_default = {
  components: {
    explorer: {
      title: "Explorateur"
    }
  }
};

// src/i18n/locales/he-IL.ts
var he_IL_default = {
  components: {
    explorer: {
      title: "\u05E1\u05D9\u05D9\u05E8"
    }
  }
};

// src/i18n/locales/hu-HU.ts
var hu_HU_default = {
  components: {
    explorer: {
      title: "F\xE1jlb\xF6ng\xE9sz\u0151"
    }
  }
};

// src/i18n/locales/id-ID.ts
var id_ID_default = {
  components: {
    explorer: {
      title: "Penjelajah"
    }
  }
};

// src/i18n/locales/it-IT.ts
var it_IT_default = {
  components: {
    explorer: {
      title: "Esplora"
    }
  }
};

// src/i18n/locales/ja-JP.ts
var ja_JP_default = {
  components: {
    explorer: {
      title: "\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC"
    }
  }
};

// src/i18n/locales/kk-KZ.ts
var kk_KZ_default = {
  components: {
    explorer: {
      title: "\u0417\u0435\u0440\u0442\u0442\u0435\u0443\u0448\u0456"
    }
  }
};

// src/i18n/locales/ko-KR.ts
var ko_KR_default = {
  components: {
    explorer: {
      title: "\uD0D0\uC0C9\uAE30"
    }
  }
};

// src/i18n/locales/lt-LT.ts
var lt_LT_default = {
  components: {
    explorer: {
      title: "Nar\u0161ykl\u0117"
    }
  }
};

// src/i18n/locales/nb-NO.ts
var nb_NO_default = {
  components: {
    explorer: {
      title: "Utforsker"
    }
  }
};

// src/i18n/locales/nl-NL.ts
var nl_NL_default = {
  components: {
    explorer: {
      title: "Verkenner"
    }
  }
};

// src/i18n/locales/pl-PL.ts
var pl_PL_default = {
  components: {
    explorer: {
      title: "Przegl\u0105daj"
    }
  }
};

// src/i18n/locales/pt-BR.ts
var pt_BR_default = {
  components: {
    explorer: {
      title: "Explorador"
    }
  }
};

// src/i18n/locales/ro-RO.ts
var ro_RO_default = {
  components: {
    explorer: {
      title: "Explorator"
    }
  }
};

// src/i18n/locales/ru-RU.ts
var ru_RU_default = {
  components: {
    explorer: {
      title: "\u041F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A"
    }
  }
};

// src/i18n/locales/th-TH.ts
var th_TH_default = {
  components: {
    explorer: {
      title: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2B\u0E19\u0E49\u0E32"
    }
  }
};

// src/i18n/locales/tr-TR.ts
var tr_TR_default = {
  components: {
    explorer: {
      title: "Gezgin"
    }
  }
};

// src/i18n/locales/uk-UA.ts
var uk_UA_default = {
  components: {
    explorer: {
      title: "\u041F\u0440\u043E\u0432\u0456\u0434\u043D\u0438\u043A"
    }
  }
};

// src/i18n/locales/vi-VN.ts
var vi_VN_default = {
  components: {
    explorer: {
      title: "N\u1ED9i dung"
    }
  }
};

// src/i18n/locales/zh-CN.ts
var zh_CN_default = {
  components: {
    explorer: {
      title: "\u63A2\u7D22"
    }
  }
};

// src/i18n/locales/zh-TW.ts
var zh_TW_default = {
  components: {
    explorer: {
      title: "\u63A2\u7D22"
    }
  }
};

// src/i18n/index.ts
var locales = {
  "en-US": en_US_default,
  "en-GB": en_GB_default,
  "ar-SA": ar_SA_default,
  "ca-ES": ca_ES_default,
  "cs-CZ": cs_CZ_default,
  "de-DE": de_DE_default,
  "es-ES": es_ES_default,
  "fa-IR": fa_IR_default,
  "fi-FI": fi_FI_default,
  "fr-FR": fr_FR_default,
  "he-IL": he_IL_default,
  "hu-HU": hu_HU_default,
  "id-ID": id_ID_default,
  "it-IT": it_IT_default,
  "ja-JP": ja_JP_default,
  "kk-KZ": kk_KZ_default,
  "ko-KR": ko_KR_default,
  "lt-LT": lt_LT_default,
  "nb-NO": nb_NO_default,
  "nl-NL": nl_NL_default,
  "pl-PL": pl_PL_default,
  "pt-BR": pt_BR_default,
  "ro-RO": ro_RO_default,
  "ru-RU": ru_RU_default,
  "th-TH": th_TH_default,
  "tr-TR": tr_TR_default,
  "uk-UA": uk_UA_default,
  "vi-VN": vi_VN_default,
  "zh-CN": zh_CN_default,
  "zh-TW": zh_TW_default
};
function i18n(locale) {
  return locales[locale] || en_US_default;
}

// src/components/styles/explorer.scss
var explorer_default = '/* --- "Open Explorer" Button --- */\n/* DO NOT TOUCH -> It strictly follows standard configuration */\n.explorer-open {\n  cursor: pointer;\n  padding: 0;\n  position: relative;\n  background: none;\n  border: none;\n  width: 20px;\n  height: 32px;\n  margin: 0;\n  text-align: inherit;\n  flex-shrink: 0;\n}\n.explorer-open svg {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: calc(50% - 10px);\n  fill: var(--darkgray);\n  stroke: var(--darkgray);\n  transition: opacity 0.1s ease;\n}\n\n:root[reader-mode=on] .sidebar.left, :root[reader-mode=on] .sidebar.right {\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n:root[reader-mode=on] .sidebar.left:hover, :root[reader-mode=on] .sidebar.right:hover {\n  opacity: 1;\n}\n\n/* --- Full-Screen Window --- */\n.explorer-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100dvh; /* dvh accounts for mobile browser UI bars */\n  background: var(--light);\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 15vw; /* Adds breathable margins to the sides on desktop */\n  box-sizing: border-box;\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n}\n\n@media all and (max-width: 800px) {\n  .explorer-content {\n    padding: 1.5rem; /* Reduces side margins for smaller screens */\n  }\n}\n/* --- Header --- */\n.explorer-container .explorer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  border-bottom: 1px solid var(--lightgray);\n  /* Title */\n}\n.explorer-container .explorer-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-family: var(--headerFont);\n}\n.explorer-container .explorer-header {\n  /* Custom Buttons */\n}\n.explorer-container .explorer-header .explorer-actions {\n  display: flex;\n  gap: 1.2rem; /* Creates exact spacing between collapse and close */\n  align-items: center;\n}\n.explorer-container .explorer-header .explorer-actions button {\n  /* DO NOT TOUCH -> It strictly follows standard configuration (the one used also in main page) */\n  cursor: pointer;\n  padding: 0;\n  position: relative;\n  background: none;\n  border: none;\n  width: 20px;\n  height: 32px;\n  margin: 0;\n  text-align: inherit;\n  flex-shrink: 0;\n  display: flex;\n  /* Icon */\n}\n.explorer-container .explorer-header .explorer-actions button svg {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: calc(50% - 10px);\n  fill: var(--darkgray);\n  stroke: var(--darkgray);\n  transition: opacity 0.1s ease;\n}\n.explorer-container .explorer-header .explorer-actions button {\n  /* Collapse-all Button */\n}\n.explorer-container .explorer-header .explorer-actions button.explorer-collapse-all {\n  display: none; /*Hidden by default*/\n}\n.explorer-container .explorer-header .explorer-actions button {\n  /* Reveal Button */\n}\n.explorer-container .explorer-header .explorer-actions button.explorer-reveal {\n  display: none !important; /*Hidden by default*/\n}\n\n/* "Reveal" button blink animation */\n@keyframes explorer-item-blink {\n  0% {\n    background-color: transparent;\n    padding-left: 0;\n  }\n  50% {\n    background-color: var(--darkgray);\n    padding-left: 0.5rem; /* Pushes the text to the right */\n  }\n  100% {\n    background-color: transparent;\n    padding-left: 0;\n  }\n}\n.explorer-blink {\n  animation: explorer-item-blink 1s ease-in-out 1;\n  border-radius: 4px; /* Optional: smooths the edges of the background pulse */\n}\n\n/* Show "Reveal" button IFF  .has-active-file */\n.explorer.has-active-file .explorer-container .explorer-header .explorer-actions button.explorer-reveal {\n  display: flex !important;\n}\n\n/* Show "Collapse-all" button IFF .has-open-folders */\n.explorer.has-open-folders .explorer-actions button.explorer-collapse-all {\n  display: flex;\n}\n\n/* Collapsed State (Hiding the Full-Screen Menu) */\n.explorer.collapsed .explorer-container {\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(20px); /* Maintains a subtle slide-in effect */\n  pointer-events: none;\n}\n\n/* --- Explorer Tree --- */\n.explorer-ul {\n  overflow-y: auto;\n  flex: 1;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  overscroll-behavior: contain;\n}\n\n.explorer-container ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.explorer-container ul li {\n  line-height: 1.3rem;\n}\n.explorer-container ul li > a {\n  opacity: 0.65;\n  color: var(--dark);\n  text-decoration: none;\n  display: block;\n  padding: 0.2rem 0;\n}\n.explorer-container ul li > a:hover {\n  opacity: 1;\n  font-weight: 600;\n}\n.explorer-container ul li > a.active {\n  opacity: 1;\n  color: var(--tertiary);\n  font-weight: 600;\n}\n.explorer-container ul li {\n  /* Highlight every line on hover */\n}\n.explorer-container ul li > a.tree-item-self:hover, .explorer-container ul li div.folder-container:hover {\n  border-radius: 5px;\n  background-color: color-mix(in srgb, var(--lightgray) 40%, transparent);\n  transition: background-color 0.2s ease-in-out;\n  cursor: default;\n}\n\n.folder-container {\n  display: flex;\n  align-items: center;\n  user-select: none;\n  margin-top: 0.4rem;\n  cursor: default;\n}\n.folder-container button, .folder-container a {\n  color: var(--secondary);\n  font-family: var(--headerFont);\n  font-weight: 600;\n  background: none;\n  border: none;\n  font-size: 0.95rem;\n}\n.folder-container .folder-icon {\n  margin-right: 5px;\n  color: var(--secondary);\n  transition: transform 0.3s ease;\n}\n.folder-container .folder-title {\n  text-decoration: none;\n}\n.folder-container .folder-title.is-link {\n  text-decoration: underline;\n  text-underline-offset: 2px;\n  cursor: pointer;\n}\n\n.folder-outer {\n  visibility: collapse;\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: all 0.3s ease-in-out;\n}\n.folder-outer.open {\n  visibility: visible;\n  grid-template-rows: 1fr;\n}\n.folder-outer > ul {\n  overflow: hidden;\n  margin-left: 6px;\n  padding-left: 0.8rem;\n  border-left: 1px solid var(--lightgray);\n}\n\nli:has(> .folder-outer:not(.open)) > .folder-container > svg {\n  transform: rotate(-90deg);\n}\n\nbody:has(.explorer:not(.collapsed)) {\n  overflow: hidden; /* Prevent page scrolling while modal is open */\n}\n\n/*\n@media all and (max-width: 800px) {\n  .page > #quartz-body > :not(.sidebar.left:has(.explorer)) {\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body.lock-scroll > :not(.sidebar.left:has(.explorer)) {\n    transform: translateX(100dvw);\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body .sidebar.left:has(.explorer) {\n    box-sizing: border-box;\n    position: sticky;\n    background-color: var(--light);\n    padding: 1rem 0 1rem 0;\n    margin: 0;\n  }\n  .page > #quartz-body .hide-until-loaded ~ .explorer-content {\n    display: none;\n  }\n}\n\n.explorer {\n  display: flex;\n  flex-direction: column;\n  overflow-y: hidden;\n  min-height: 1.2rem;\n  flex: 0 1 auto;\n}\n.explorer.collapsed {\n  flex: 0 1 1.2rem;\n}\n.explorer.collapsed .fold {\n  transform: rotateZ(-90deg);\n}\n.explorer .fold {\n  margin-left: 0.5rem;\n  transition: transform 0.3s ease;\n  opacity: 0.8;\n}\n@media all and (max-width: 800px) {\n  .explorer {\n    order: -1;\n    height: initial;\n    overflow: hidden;\n    flex-shrink: 0;\n    align-self: flex-start;\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n}\n.explorer button.mobile-explorer {\n  display: none;\n}\n.explorer button.desktop-explorer {\n  display: flex;\n}\n@media all and (max-width: 800px) {\n  .explorer button.mobile-explorer {\n    display: flex;\n  }\n  .explorer button.desktop-explorer {\n    display: none;\n  }\n}\n.explorer svg {\n  pointer-events: all;\n  transition: transform 0.35s ease;\n}\n.explorer svg > polyline {\n  pointer-events: none;\n}\n\nbutton.mobile-explorer,\nbutton.desktop-explorer {\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding: 0;\n  color: var(--dark);\n  display: flex;\n  align-items: center;\n}\nbutton.mobile-explorer h2,\nbutton.desktop-explorer h2 {\n  font-size: 1rem;\n  display: inline-block;\n  margin: 0;\n}\n\n.explorer-content {\n  list-style: none;\n  overflow: hidden;\n  overflow-y: auto;\n  margin-top: 0.5rem;\n}\n.explorer-content ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.explorer-content ul.explorer-ul {\n  overscroll-behavior: contain;\n}\n.explorer-content ul li > a {\n  color: var(--dark);\n  opacity: 0.75;\n  pointer-events: all;\n}\n.explorer-content ul li > a.active {\n  opacity: 1;\n  color: var(--tertiary);\n}\n.explorer-content .folder-outer {\n  visibility: collapse;\n  display: grid;\n  grid-template-rows: 0fr;\n  transition-property: grid-template-rows, visibility;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n.explorer-content .folder-outer.open {\n  visibility: visible;\n  grid-template-rows: 1fr;\n}\n.explorer-content .folder-outer > ul {\n  overflow: hidden;\n  margin-left: 6px;\n  padding-left: 0.8rem;\n  border-left: 1px solid var(--lightgray);\n}\n\n.folder-container {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  user-select: none;\n}\n.folder-container div > a {\n  color: var(--secondary);\n  font-family: var(--headerFont);\n  font-size: 0.95rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n  display: inline-block;\n}\n.folder-container div > a:hover {\n  color: var(--tertiary);\n}\n.folder-container div > button {\n  color: var(--dark);\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding-left: 0;\n  padding-right: 0;\n  display: flex;\n  align-items: center;\n  font-family: var(--headerFont);\n}\n.folder-container div > button span {\n  font-size: 0.95rem;\n  display: inline-block;\n  color: var(--secondary);\n  font-weight: 600;\n  margin: 0;\n  line-height: 1.5rem;\n  pointer-events: none;\n}\n\n.folder-icon {\n  margin-right: 5px;\n  color: var(--secondary);\n  cursor: pointer;\n  transition: transform 0.3s ease;\n  backface-visibility: visible;\n  flex-shrink: 0;\n}\nli:has(> .folder-outer:not(.open)) > .folder-container > svg {\n  transform: rotate(-90deg);\n}\n.folder-icon:hover {\n  color: var(--tertiary);\n}\n\n@media all and (max-width: 800px) {\n  .explorer.collapsed {\n    flex: 0 0 34px;\n  }\n  .explorer.collapsed > .explorer-content {\n    transform: translateX(-100vw);\n    visibility: hidden;\n  }\n  .explorer:not(.collapsed) {\n    flex: 0 0 34px;\n  }\n  .explorer:not(.collapsed) > .explorer-content {\n    transform: translateX(0);\n    visibility: visible;\n  }\n  .explorer .explorer-content {\n    box-sizing: border-box;\n    z-index: 100;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-top: 0;\n    background-color: var(--light);\n    max-width: 100vw;\n    width: 100vw;\n    transform: translateX(-100vw);\n    transition:\n      transform 200ms ease,\n      visibility 200ms ease;\n    overflow: hidden;\n    padding: 4rem 0 2rem 0;\n    height: 100dvh;\n    max-height: 100dvh;\n    visibility: hidden;\n  }\n  .explorer .mobile-explorer {\n    margin: 0;\n    padding: 5px;\n    z-index: 101;\n  }\n  .explorer .mobile-explorer.hide-until-loaded {\n    display: none;\n  }\n  .explorer .mobile-explorer .lucide-menu {\n    stroke: var(--darkgray);\n  }\n}\n\n@media all and (max-width: 800px) {\n  .mobile-no-scroll .explorer-content > .explorer-ul {\n    overscroll-behavior: contain;\n  }\n}\n\n*/';

// src/components/scripts/explorer.inline.ts
var explorer_inline_default = `var Z=Object.hasOwnProperty;function b(u){let e=J(R(u,"index"),!0);return e.length===0?"/":e}function j(){return typeof document>"u"?"":document.body?.dataset?.basepath??""}function k(u,e){let t=e??j(),F=u.startsWith("/")?u:"/"+u;return t+F}function H(u,e){return u===e||u.endsWith("/"+e)}function R(u,e){return H(u,e)&&(u=u.slice(0,-e.length)),u}function J(u,e){return u.startsWith("/")&&(u=u.substring(1)),!e&&u.endsWith("/")&&(u=u.slice(0,-1)),u}var w=class u{constructor(e,t){this.children=[],this.slugSegments=e,this.data=t||null,this.isFolder=!1,this.fileSegmentHint=null,this.displayNameOverride=void 0}get displayName(){return this.displayNameOverride!==void 0?this.displayNameOverride:(this.data?.title==="index"?void 0:this.data?.title)||this.fileSegmentHint||this.slugSegment||""}set displayName(e){this.displayNameOverride=e}get slug(){let e=this.slugSegments.join("/");return this.isFolder?e+"/index":e}get slugSegment(){return this.slugSegments[this.slugSegments.length-1]||""}makeChild(e,t){let F=[...this.slugSegments,e[0]],s=new u(F,t);return this.children.push(s),s}insert(e,t){if(e.length===0)return;this.isFolder=!0;let F=e[0];if(e.length===1)F==="index"?this.data||(this.data=t):this.makeChild(e,t);else{let s=this.children.find(o=>o.slugSegment===F);s||(s=this.makeChild(e,void 0));let n=(t.filePath||t.slug||"").split("/");s.fileSegmentHint=n[n.length-e.length],s.insert(e.slice(1),t)}}add(e){this.insert(e.slug.split("/"),e)}sort(e){this.children.sort(e),this.children.forEach(t=>t.sort(e))}filter(e){this.children=this.children.filter(e),this.children.forEach(t=>t.filter(e))}map(e){e(this),this.children.forEach(t=>t.map(e))}static fromEntries(e){let t=new u([],null);return e.forEach(([,F])=>t.add(F)),t}},$=(u,e)=>!u.isFolder&&!e.isFolder||u.isFolder&&e.isFolder?u.displayName.localeCompare(e.displayName,void 0,{numeric:!0,sensitivity:"base"}):!u.isFolder&&e.isFolder?1:-1,U=u=>u.slugSegment!=="tags";function _(u,e,t,F){return t&&u.filter(t),F&&u.map(F),e&&u.sort(e),u}async function V(u){try{console.log("[Explorer] Fetching content index...");let e=await fetchData;if(console.log("[Explorer] Fetched data keys:",Object.keys(e).slice(0,5)),!e)return console.error("[Explorer] No data received"),null;let t=e.content||e,F=Object.entries(t);if(console.log("[Explorer] Entry count:",F.length),F.length===0)return console.warn("[Explorer] No content entries found"),null;let s=w.fromEntries(F);console.log("[Explorer] Trie root children:",s.children.length);let n=$,o=U,g=null;if(u)try{let l=JSON.parse(u);l.sortFn&&(n=new Function("a","b","return ("+l.sortFn+")(a, b)")),l.filterFn&&(o=new Function("node","return ("+l.filterFn+")(node)")),l.mapFn&&(g=new Function("node","("+l.mapFn+")(node)"))}catch(l){console.error("Error parsing data functions:",l)}return _(s,n,o,g)}catch(e){return console.error("Error building file trie:",e),null}}var W=0;function P(u,e,t,F,s,n=""){let o=document.getElementById("template-folder"),g=document.getElementById("template-file");if(!o||!g)return;let l=n?n+"/"+u.slugSegment:u.slugSegment,v=b(t);if(u.isFolder){let A=o.content.cloneNode(!0),c=A.querySelector(".folder-container"),B=A.querySelector(".folder-button"),m=A.querySelector(".folder-title"),y=A.querySelector(".folder-outer"),x=A.querySelector(".content");if(m&&(m.textContent=u.displayName||u.slugSegment),c&&(c.dataset.folderpath=u.slug),F==="link"&&m&&u.data&&B){let D=document.createElement("a");D.className=(m.className||"")+" is-link";let r=b(u.slug);D.href=k(r||""),D.textContent=u.displayName||u.slugSegment,(u.slug===t||r===v)&&D.classList.add("active","is-active"),m.replaceWith(D)}let T=s[u.slug]!==void 0?s[u.slug]:!0,S=b(u.slug),N=S&&S===v.slice(0,S.length);if((!T||N)&&y&&y.classList.add("open"),u.children&&u.children.length>0&&x)for(let D of u.children)P(D,x,t,F,s,l);e.appendChild(A)}else if(u.data){let A=g.content.cloneNode(!0),c=A.querySelector("a");c&&(c.href=k(u.data.slug),c.textContent=u.displayName||u.slugSegment,u.data.slug===t&&c.classList.add("active","is-active")),e.appendChild(A)}}async function O(u){let e=++W;try{console.log("[Explorer] Nav event received, generation:",e);let t=(u.detail?.url||"").replace(/^\\/+/,""),F=document.querySelectorAll("div.explorer");console.log("[Explorer] Found",F.length,"explorers");let s={};try{JSON.parse(localStorage.getItem("fileTree")||"[]").forEach(o=>{s[o.path]=o.collapsed})}catch(n){console.error("[Explorer] Error loading saved state:",n)}for(let n of F){let o=()=>{let D=n.querySelectorAll(".folder-outer.open").length>0;n.classList.toggle("has-open-folders",D)},g=()=>{let D=l.querySelector("a.active")!==null;n.classList.toggle("has-active-file",D)},l=n.querySelector(".explorer-ul");if(!l){console.warn("[Explorer] No explorer-ul found");continue}l.innerHTML='<li class="overflow-end"></li>';let v=n.dataset.dataFns,A=n.dataset.behavior||"collapse";console.log("[Explorer] Starting tree build...");let c=await V(v);if(e===W){if(console.log("[Explorer] Render generation is current, rendering tree"),console.log("[Explorer] Trie result:",c?"success":"null"),c&&c.children&&c.children.length>0){l.innerHTML='<li class="overflow-end"></li>',console.log("[Explorer] Rendering",c.children.length,"children");for(let r of c.children)P(r,l,t,A,s,"");console.log("[Explorer] Render complete, final list length:",l.children.length),o(),g()}else console.warn("[Explorer] No trie or empty children");let D=sessionStorage.getItem("explorerScrollTop");if(D)l.scrollTop=parseInt(D,10);else{let r=l.querySelector(".active");r&&r.scrollIntoView({behavior:"smooth"})}}else console.log("[Explorer] Stale render generation, skipping tree render");let B=[],m=n.querySelectorAll(".explorer-open");for(let D of m){let r=function(d){let i=d.currentTarget.closest(".explorer");i&&(i.classList.remove("collapsed"),i.setAttribute("aria-expanded","true"),document.documentElement.classList.add("mobile-no-scroll"))};D.addEventListener("click",r),B.push(()=>D.removeEventListener("click",r))}let y=n.querySelectorAll(".explorer-close");for(let D of y){let r=function(d){let i=d.currentTarget.closest(".explorer");i&&(i.classList.add("collapsed"),i.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll"))};D.addEventListener("click",r),B.push(()=>D.removeEventListener("click",r))}let x=function(D){let r=D.target.closest("a");r&&r.classList.contains("nav-file-title")&&(n.classList.add("collapsed"),n.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll"))};l.addEventListener("click",x),B.push(()=>l.removeEventListener("click",x));let T=n.querySelectorAll(".explorer-collapse-all");for(let D of T){let r=function(d){d.stopPropagation();let i=d.currentTarget.closest(".explorer");if(!i)return;let E=i.querySelectorAll(".folder-outer.open"),a=[];try{a=JSON.parse(localStorage.getItem("fileTree")||"[]")}catch{}for(let f of E){f.classList.remove("open");let C=f.previousElementSibling;if(C&&C.dataset.folderpath){let h=C.dataset.folderpath,p=a.findIndex(L=>L.path===h);p>=0?a[p].collapsed=!0:a.push({path:h,collapsed:!0})}}localStorage.setItem("fileTree",JSON.stringify(a)),o()};D.addEventListener("click",r),B.push(()=>D.removeEventListener("click",r))}let S=n.querySelectorAll(".explorer-reveal");for(let D of S){let r=function(d){d.stopPropagation();let i=d.currentTarget.closest(".explorer");if(!i)return;let E=i.querySelector("a.active");if(!E)return;let a=[];try{a=JSON.parse(localStorage.getItem("fileTree")||"[]")}catch{}let f=[],C=E.closest(".folder-outer");for(;C;)f.push(C),C=C.parentElement.closest(".folder-outer");f.reverse();for(let h of f){h.classList.add("open");let p=h.previousElementSibling;if(p&&p.dataset.folderpath){let L=p.dataset.folderpath,I=a.findIndex(q=>q.path===L);I>=0?a[I].collapsed=!1:a.push({path:L,collapsed:!1})}}localStorage.setItem("fileTree",JSON.stringify(a)),o(),setTimeout(()=>{E.scrollIntoView({behavior:"smooth",block:"center"}),E.classList.remove("explorer-blink"),E.offsetWidth,E.classList.add("explorer-blink"),setTimeout(()=>E.classList.remove("explorer-blink"),1500)},300)};D.addEventListener("click",r),B.push(()=>D.removeEventListener("click",r))}let N=n.getElementsByClassName("folder-container");for(let D of N){let r=function(d){if(d.target.closest("a"))return;d.stopPropagation();let i=this;if(!i)return;let E=i.nextElementSibling;if(!E)return;E.classList.toggle("open");let a=!E.classList.contains("open"),f=i.dataset.folderpath,C=JSON.parse(localStorage.getItem("fileTree")||"[]"),h=C.findIndex(p=>p.path===f);h>=0?C[h].collapsed=a:C.push({path:f,collapsed:a}),localStorage.setItem("fileTree",JSON.stringify(C)),o()};D.addEventListener("click",r),B.push(()=>D.removeEventListener("click",r))}typeof window<"u"&&window.addCleanup&&window.addCleanup(()=>B.forEach(D=>D()))}for(let n of document.getElementsByClassName("explorer")){let o=n.querySelector(".mobile-explorer");o&&(o.classList.remove("hide-until-loaded"),o.checkVisibility&&o.checkVisibility()&&(n.classList.add("collapsed"),n.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll")))}}catch(t){console.error("[Explorer] Fatal error in nav handler:",t)}}document.addEventListener("nav",O);document.addEventListener("render",O);document.addEventListener("prenav",()=>{let u=document.querySelector(".explorer-ul");u&&sessionStorage.setItem("explorerScrollTop",u.scrollTop.toString())});
`;

// src/components/Explorer.tsx
var defaultOptions = {
  folderDefaultState: "collapsed",
  folderClickBehavior: "link",
  useSavedState: true,
  mapFn: (node) => {
    return node;
  },
  sortFn: (a2, b2) => {
    if (!a2.isFolder && !b2.isFolder || a2.isFolder && b2.isFolder) {
      return (a2.displayName || "").localeCompare(b2.displayName || "", void 0, {
        numeric: true,
        sensitivity: "base"
      });
    }
    if (!a2.isFolder && b2.isFolder) {
      return 1;
    }
    return -1;
  },
  filterFn: (node) => node.slugSegment !== "tags",
  order: ["filter", "map", "sort"]
};
var numExplorers = 0;
function concatenateResources(...resources) {
  return resources.filter((r2) => !!r2).join("\n");
}
var Explorer_default = ((userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  const { OverflowList: OverflowList2, overflowListAfterDOMLoaded } = OverflowList_default();
  const TensegrityExplorerComponent = (props) => {
    const { cfg } = props;
    const displayClass = props.displayClass;
    const id = `explorer-${numExplorers++}`;
    const title = i18n(cfg?.locale ?? "en-US").components.explorer.title;
    return /* @__PURE__ */ u2(
      "div",
      {
        class: classNames(displayClass, "explorer", "nav-files-container", "collapsed"),
        "data-behavior": opts.folderClickBehavior,
        "data-collapsed": opts.folderDefaultState,
        "data-savestate": opts.useSavedState,
        "data-data-fns": JSON.stringify({
          order: opts.order,
          sortFn: opts.sortFn?.toString(),
          filterFn: opts.filterFn?.toString(),
          mapFn: opts.mapFn?.toString()
        }),
        children: [
          /* @__PURE__ */ u2(
            "button",
            {
              class: classNames(displayClass, "explorer-open"),
              "aria-controls": id,
              "aria-label": title,
              children: /* @__PURE__ */ u2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                  version: "1.1",
                  class: "readerIcon",
                  fill: "currentColor",
                  stroke: "currentColor",
                  "stroke-width": "0.2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  width: "64px",
                  height: "64px",
                  viewBox: "0 0 24 24",
                  "aria-label": title,
                  children: [
                    /* @__PURE__ */ u2("title", { children: title }),
                    /* @__PURE__ */ u2("g", { transform: "translate(-1.8, -1.8) scale(1.15, 1.2)", children: [
                      /* @__PURE__ */ u2("path", { d: "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }),
                      /* @__PURE__ */ u2("path", { d: "m8 16 3-3-3-3" })
                    ] })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ u2("div", { id, class: "explorer-container", "aria-expanded": false, role: "group", children: [
            /* @__PURE__ */ u2("div", { class: "explorer-header", children: [
              /* @__PURE__ */ u2("h2", { children: title }),
              /* @__PURE__ */ u2("div", { class: "explorer-actions", children: [
                /* @__PURE__ */ u2("button", { type: "button", class: "explorer-collapse-all", "aria-label": "Collapse all folders", title: "Collapse All", children: /* @__PURE__ */ u2(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    version: "1.1",
                    class: "readerIcon",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    width: "64px",
                    height: "64px",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ u2("path", { d: "m4 14 8-8 8 8" }),
                      /* @__PURE__ */ u2("path", { d: "m4 21 8-8 8 8" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ u2("button", { type: "button", class: "explorer-reveal", "aria-label": "Reveal current file", title: "Reveal Current File", children: /* @__PURE__ */ u2(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    version: "1.1",
                    class: "readerIcon",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    width: "64px",
                    height: "64px",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ u2("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
                      /* @__PURE__ */ u2("circle", { cx: "12", cy: "10", r: "3" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ u2("button", { type: "button", class: "explorer-close close-button", "aria-label": "Close Explorer", title: "Close Explorer", children: /* @__PURE__ */ u2(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    version: "1.1",
                    class: "readerIcon",
                    fill: "currentColor",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    width: "64px",
                    height: "64px",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ u2("path", { d: "M18 6 6 18" }),
                      /* @__PURE__ */ u2("path", { d: "m6 6 12 12" })
                    ]
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ u2(OverflowList2, { class: "explorer-ul" })
          ] }),
          /* @__PURE__ */ u2("template", { id: "template-file", children: /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href: "#", class: "nav-file-title tree-item-self" }) }) }),
          /* @__PURE__ */ u2("template", { id: "template-folder", children: /* @__PURE__ */ u2("li", { children: [
            /* @__PURE__ */ u2("div", { class: "folder-container nav-folder-title tree-item-self", children: [
              /* @__PURE__ */ u2(
                "svg",
                {
                  class: "folder-icon nav-folder-collapse-indicator collapse-icon",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "5 8 14 8",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  children: /* @__PURE__ */ u2("polyline", { points: "6 9 12 15 18 9" })
                }
              ),
              /* @__PURE__ */ u2("button", { class: "folder-button", children: /* @__PURE__ */ u2("span", { class: "folder-title" }) })
            ] }),
            /* @__PURE__ */ u2("div", { class: "folder-outer", children: /* @__PURE__ */ u2("ul", { class: "content tree-item-children" }) })
          ] }) })
        ]
      }
    );
  };
  TensegrityExplorerComponent.css = explorer_default;
  TensegrityExplorerComponent.afterDOMLoaded = concatenateResources(explorer_inline_default, overflowListAfterDOMLoaded);
  return TensegrityExplorerComponent;
});

export { Explorer_default as Explorer };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map