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
var explorer_default = '/* "Open Explorer" Button */\n/* DO NOT TOUCH -> It strictly follows standard configuration */\n.explorer-open {\n  cursor: pointer;\n  padding: 0;\n  position: relative;\n  background: none;\n  border: none;\n  width: 20px;\n  height: 32px;\n  margin: 0;\n  text-align: inherit;\n  flex-shrink: 0;\n}\n.explorer-open svg {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: calc(50% - 10px);\n  fill: var(--darkgray);\n  stroke: var(--darkgray);\n  transition: opacity 0.1s ease;\n}\n\n:root[reader-mode=on] .sidebar.left, :root[reader-mode=on] .sidebar.right {\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n:root[reader-mode=on] .sidebar.left:hover, :root[reader-mode=on] .sidebar.right:hover {\n  opacity: 1;\n}\n\n/* Full-Screen Window */\n.explorer-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100dvh; /* dvh accounts for mobile browser UI bars */\n  background: var(--light);\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 15vw; /* Adds breathable margins to the sides on desktop */\n  box-sizing: border-box;\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n}\n\n@media all and (max-width: 800px) {\n  .explorer-content {\n    padding: 1.5rem; /* Reduces side margins for smaller screens */\n  }\n}\n/* Header */\n.explorer-container .explorer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  border-bottom: 1px solid var(--lightgray);\n  /* Title */\n}\n.explorer-container .explorer-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-family: var(--headerFont);\n}\n.explorer-container .explorer-header .explorer-actions {\n  display: flex;\n  gap: 1.2rem; /* Creates exact spacing between collapse and close */\n  align-items: center;\n  /* Buttons inside header */\n  /* DO NOT TOUCH -> It strictly follows standard configuration (the one used also in main page) */\n}\n.explorer-container .explorer-header .explorer-actions button {\n  cursor: pointer;\n  padding: 0;\n  position: relative;\n  background: none;\n  border: none;\n  width: 20px;\n  height: 32px;\n  margin: 0;\n  text-align: inherit;\n  flex-shrink: 0;\n  display: flex;\n}\n.explorer-container .explorer-header .explorer-actions button svg {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: calc(50% - 10px);\n  fill: var(--darkgray);\n  stroke: var(--darkgray);\n  transition: opacity 0.1s ease;\n}\n.explorer-container .explorer-header .explorer-actions button {\n  /*\n  color: var(--dark);\n\n  align-items: center;\n  justify-content: center;\n  opacity: 0.6;\n  transition: opacity 0.2s ease, color 0.2s ease;\n  */\n  /* --- NEW: Hide the collapse button by default --- */\n}\n.explorer-container .explorer-header .explorer-actions button.explorer-collapse-all {\n  display: none;\n}\n\n/* --- NEW: Show it only when folders are open --- */\n/* Added .explorer-actions button to ensure it beats the hide rule */\n.explorer.has-open-folders .explorer-actions button.explorer-collapse-all {\n  display: flex;\n}\n\n/* Collapsed State (Hiding the Full-Screen Menu) */\n.explorer.collapsed .explorer-container {\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(20px); /* Maintains a subtle slide-in effect */\n  pointer-events: none;\n}\n\n/* Tree Content Styling */\n.explorer-ul {\n  overflow-y: auto;\n  flex: 1;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  overscroll-behavior: contain;\n}\n\n.explorer-container ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.explorer-container ul li > a {\n  color: var(--dark);\n  opacity: 0.75;\n  text-decoration: none;\n  display: block;\n  padding: 0.2rem 0;\n}\n\n.explorer-container ul li > a:hover {\n  color: var(--tertiary);\n  opacity: 1;\n}\n\n.explorer-container ul li > a.active {\n  opacity: 1;\n  color: var(--tertiary);\n  font-weight: 600;\n}\n\n.folder-outer {\n  visibility: collapse;\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: all 0.3s ease-in-out;\n}\n.folder-outer.open {\n  visibility: visible;\n  grid-template-rows: 1fr;\n}\n.folder-outer > ul {\n  overflow: hidden;\n  margin-left: 6px;\n  padding-left: 0.8rem;\n  border-left: 1px solid var(--lightgray);\n}\n\n.folder-container {\n  display: flex;\n  align-items: center;\n  user-select: none;\n  margin-top: 0.4rem;\n}\n.folder-container button, .folder-container a {\n  color: var(--secondary);\n  font-family: var(--headerFont);\n  font-weight: 600;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.folder-container button:hover, .folder-container a:hover {\n  color: var(--tertiary);\n}\n\n.folder-icon {\n  margin-right: 5px;\n  color: var(--secondary);\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.folder-icon:hover {\n  color: var(--tertiary);\n}\n\nli:has(> .folder-outer:not(.open)) > .folder-container > svg {\n  transform: rotate(-90deg);\n}\n\nbody:has(.explorer:not(.collapsed)) {\n  overflow: hidden; /* Prevent page scrolling while modal is open */\n}\n\n/*\n@media all and (max-width: 800px) {\n  .page > #quartz-body > :not(.sidebar.left:has(.explorer)) {\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body.lock-scroll > :not(.sidebar.left:has(.explorer)) {\n    transform: translateX(100dvw);\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body .sidebar.left:has(.explorer) {\n    box-sizing: border-box;\n    position: sticky;\n    background-color: var(--light);\n    padding: 1rem 0 1rem 0;\n    margin: 0;\n  }\n  .page > #quartz-body .hide-until-loaded ~ .explorer-content {\n    display: none;\n  }\n}\n\n.explorer {\n  display: flex;\n  flex-direction: column;\n  overflow-y: hidden;\n  min-height: 1.2rem;\n  flex: 0 1 auto;\n}\n.explorer.collapsed {\n  flex: 0 1 1.2rem;\n}\n.explorer.collapsed .fold {\n  transform: rotateZ(-90deg);\n}\n.explorer .fold {\n  margin-left: 0.5rem;\n  transition: transform 0.3s ease;\n  opacity: 0.8;\n}\n@media all and (max-width: 800px) {\n  .explorer {\n    order: -1;\n    height: initial;\n    overflow: hidden;\n    flex-shrink: 0;\n    align-self: flex-start;\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n}\n.explorer button.mobile-explorer {\n  display: none;\n}\n.explorer button.desktop-explorer {\n  display: flex;\n}\n@media all and (max-width: 800px) {\n  .explorer button.mobile-explorer {\n    display: flex;\n  }\n  .explorer button.desktop-explorer {\n    display: none;\n  }\n}\n.explorer svg {\n  pointer-events: all;\n  transition: transform 0.35s ease;\n}\n.explorer svg > polyline {\n  pointer-events: none;\n}\n\nbutton.mobile-explorer,\nbutton.desktop-explorer {\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding: 0;\n  color: var(--dark);\n  display: flex;\n  align-items: center;\n}\nbutton.mobile-explorer h2,\nbutton.desktop-explorer h2 {\n  font-size: 1rem;\n  display: inline-block;\n  margin: 0;\n}\n\n.explorer-content {\n  list-style: none;\n  overflow: hidden;\n  overflow-y: auto;\n  margin-top: 0.5rem;\n}\n.explorer-content ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.explorer-content ul.explorer-ul {\n  overscroll-behavior: contain;\n}\n.explorer-content ul li > a {\n  color: var(--dark);\n  opacity: 0.75;\n  pointer-events: all;\n}\n.explorer-content ul li > a.active {\n  opacity: 1;\n  color: var(--tertiary);\n}\n.explorer-content .folder-outer {\n  visibility: collapse;\n  display: grid;\n  grid-template-rows: 0fr;\n  transition-property: grid-template-rows, visibility;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n.explorer-content .folder-outer.open {\n  visibility: visible;\n  grid-template-rows: 1fr;\n}\n.explorer-content .folder-outer > ul {\n  overflow: hidden;\n  margin-left: 6px;\n  padding-left: 0.8rem;\n  border-left: 1px solid var(--lightgray);\n}\n\n.folder-container {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  user-select: none;\n}\n.folder-container div > a {\n  color: var(--secondary);\n  font-family: var(--headerFont);\n  font-size: 0.95rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n  display: inline-block;\n}\n.folder-container div > a:hover {\n  color: var(--tertiary);\n}\n.folder-container div > button {\n  color: var(--dark);\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding-left: 0;\n  padding-right: 0;\n  display: flex;\n  align-items: center;\n  font-family: var(--headerFont);\n}\n.folder-container div > button span {\n  font-size: 0.95rem;\n  display: inline-block;\n  color: var(--secondary);\n  font-weight: 600;\n  margin: 0;\n  line-height: 1.5rem;\n  pointer-events: none;\n}\n\n.folder-icon {\n  margin-right: 5px;\n  color: var(--secondary);\n  cursor: pointer;\n  transition: transform 0.3s ease;\n  backface-visibility: visible;\n  flex-shrink: 0;\n}\nli:has(> .folder-outer:not(.open)) > .folder-container > svg {\n  transform: rotate(-90deg);\n}\n.folder-icon:hover {\n  color: var(--tertiary);\n}\n\n@media all and (max-width: 800px) {\n  .explorer.collapsed {\n    flex: 0 0 34px;\n  }\n  .explorer.collapsed > .explorer-content {\n    transform: translateX(-100vw);\n    visibility: hidden;\n  }\n  .explorer:not(.collapsed) {\n    flex: 0 0 34px;\n  }\n  .explorer:not(.collapsed) > .explorer-content {\n    transform: translateX(0);\n    visibility: visible;\n  }\n  .explorer .explorer-content {\n    box-sizing: border-box;\n    z-index: 100;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-top: 0;\n    background-color: var(--light);\n    max-width: 100vw;\n    width: 100vw;\n    transform: translateX(-100vw);\n    transition:\n      transform 200ms ease,\n      visibility 200ms ease;\n    overflow: hidden;\n    padding: 4rem 0 2rem 0;\n    height: 100dvh;\n    max-height: 100dvh;\n    visibility: hidden;\n  }\n  .explorer .mobile-explorer {\n    margin: 0;\n    padding: 5px;\n    z-index: 101;\n  }\n  .explorer .mobile-explorer.hide-until-loaded {\n    display: none;\n  }\n  .explorer .mobile-explorer .lucide-menu {\n    stroke: var(--darkgray);\n  }\n}\n\n@media all and (max-width: 800px) {\n  .mobile-no-scroll .explorer-content > .explorer-ul {\n    overscroll-behavior: contain;\n  }\n}\n\n*/';

// src/components/scripts/explorer.inline.ts
var explorer_inline_default = `var M=Object.hasOwnProperty;function y(u){let e=q(j(u,"index"),!0);return e.length===0?"/":e}function W(){return typeof document>"u"?"":document.body?.dataset?.basepath??""}function T(u,e){let t=e??W(),r=u.startsWith("/")?u:"/"+u;return t+r}function O(u,e){return u===e||u.endsWith("/"+e)}function j(u,e){return O(u,e)&&(u=u.slice(0,-e.length)),u}function q(u,e){return u.startsWith("/")&&(u=u.substring(1)),!e&&u.endsWith("/")&&(u=u.slice(0,-1)),u}var w=class u{constructor(e,t){this.children=[],this.slugSegments=e,this.data=t||null,this.isFolder=!1,this.fileSegmentHint=null,this.displayNameOverride=void 0}get displayName(){return this.displayNameOverride!==void 0?this.displayNameOverride:(this.data?.title==="index"?void 0:this.data?.title)||this.fileSegmentHint||this.slugSegment||""}set displayName(e){this.displayNameOverride=e}get slug(){let e=this.slugSegments.join("/");return this.isFolder?e+"/index":e}get slugSegment(){return this.slugSegments[this.slugSegments.length-1]||""}makeChild(e,t){let r=[...this.slugSegments,e[0]],s=new u(r,t);return this.children.push(s),s}insert(e,t){if(e.length===0)return;this.isFolder=!0;let r=e[0];if(e.length===1)r==="index"?this.data||(this.data=t):this.makeChild(e,t);else{let s=this.children.find(l=>l.slugSegment===r);s||(s=this.makeChild(e,void 0));let n=(t.filePath||t.slug||"").split("/");s.fileSegmentHint=n[n.length-e.length],s.insert(e.slice(1),t)}}add(e){this.insert(e.slug.split("/"),e)}sort(e){this.children.sort(e),this.children.forEach(t=>t.sort(e))}filter(e){this.children=this.children.filter(e),this.children.forEach(t=>t.filter(e))}map(e){e(this),this.children.forEach(t=>t.map(e))}static fromEntries(e){let t=new u([],null);return e.forEach(([,r])=>t.add(r)),t}},H=(u,e)=>!u.isFolder&&!e.isFolder||u.isFolder&&e.isFolder?u.displayName.localeCompare(e.displayName,void 0,{numeric:!0,sensitivity:"base"}):!u.isFolder&&e.isFolder?1:-1,R=u=>u.slugSegment!=="tags";function J(u,e,t,r){return t&&u.filter(t),r&&u.map(r),e&&u.sort(e),u}async function $(u){try{console.log("[Explorer] Fetching content index...");let e=await fetchData;if(console.log("[Explorer] Fetched data keys:",Object.keys(e).slice(0,5)),!e)return console.error("[Explorer] No data received"),null;let t=e.content||e,r=Object.entries(t);if(console.log("[Explorer] Entry count:",r.length),r.length===0)return console.warn("[Explorer] No content entries found"),null;let s=w.fromEntries(r);console.log("[Explorer] Trie root children:",s.children.length);let n=H,l=R,c=null;if(u)try{let E=JSON.parse(u);E.sortFn&&(n=new Function("a","b","return ("+E.sortFn+")(a, b)")),E.filterFn&&(l=new Function("node","return ("+E.filterFn+")(node)")),E.mapFn&&(c=new Function("node","("+E.mapFn+")(node)"))}catch(E){console.error("Error parsing data functions:",E)}return J(s,n,l,c)}catch(e){return console.error("Error building file trie:",e),null}}var k=0;function I(u,e,t,r,s,n=""){let l=document.getElementById("template-folder"),c=document.getElementById("template-file");if(!l||!c)return;let E=n?n+"/"+u.slugSegment:u.slugSegment,L=y(t);if(u.isFolder){let i=l.content.cloneNode(!0),a=i.querySelector(".folder-container"),g=i.querySelector(".folder-button"),m=i.querySelector(".folder-title"),x=i.querySelector(".folder-outer"),v=i.querySelector(".content");if(m&&(m.textContent=u.displayName||u.slugSegment),a&&(a.dataset.folderpath=u.slug),r==="link"&&g){let D=document.createElement("a");D.className=g.className;let C=y(u.slug);D.href=T(C||""),m?D.appendChild(m):D.textContent=u.displayName||u.slugSegment,g.replaceWith(D),g=D}let b=s[u.slug]!==void 0?s[u.slug]:!0,S=y(u.slug),F=S&&S===L.slice(0,S.length);if((!b||F)&&x&&x.classList.add("open"),u.children&&u.children.length>0&&v)for(let D of u.children)I(D,v,t,r,s,E);e.appendChild(i)}else if(u.data){let i=c.content.cloneNode(!0),a=i.querySelector("a");a&&(a.href=T(u.data.slug),a.textContent=u.displayName||u.slugSegment,u.data.slug===t&&a.classList.add("active","is-active")),e.appendChild(i)}}async function P(u){let e=++k;try{console.log("[Explorer] Nav event received, generation:",e);let t=(u.detail?.url||"").replace(/^\\/+/,""),r=document.querySelectorAll("div.explorer");console.log("[Explorer] Found",r.length,"explorers");let s={};try{JSON.parse(localStorage.getItem("fileTree")||"[]").forEach(l=>{s[l.path]=l.collapsed})}catch(n){console.error("[Explorer] Error loading saved state:",n)}for(let n of r){let l=()=>{let F=n.querySelectorAll(".folder-outer.open").length>0;n.classList.toggle("has-open-folders",F)},c=n.querySelector(".explorer-ul");if(!c){console.warn("[Explorer] No explorer-ul found");continue}c.innerHTML='<li class="overflow-end"></li>';let E=n.dataset.dataFns,L=n.dataset.behavior||"collapse";console.log("[Explorer] Starting tree build...");let i=await $(E);if(e===k){if(console.log("[Explorer] Render generation is current, rendering tree"),console.log("[Explorer] Trie result:",i?"success":"null"),i&&i.children&&i.children.length>0){c.innerHTML='<li class="overflow-end"></li>',console.log("[Explorer] Rendering",i.children.length,"children");for(let D of i.children)I(D,c,t,L,s,"");console.log("[Explorer] Render complete, final list length:",c.children.length),l()}else console.warn("[Explorer] No trie or empty children");let F=sessionStorage.getItem("explorerScrollTop");if(F)c.scrollTop=parseInt(F,10);else{let D=c.querySelector(".active");D&&D.scrollIntoView({behavior:"smooth"})}}else console.log("[Explorer] Stale render generation, skipping tree render");let a=[],g=n.querySelectorAll(".explorer-open");for(let F of g){let D=function(C){let o=C.currentTarget.closest(".explorer");o&&(o.classList.remove("collapsed"),o.setAttribute("aria-expanded","true"),document.documentElement.classList.add("mobile-no-scroll"))};F.addEventListener("click",D),a.push(()=>F.removeEventListener("click",D))}let m=n.querySelectorAll(".explorer-close");for(let F of m){let D=function(C){let o=C.currentTarget.closest(".explorer");o&&(o.classList.add("collapsed"),o.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll"))};F.addEventListener("click",D),a.push(()=>F.removeEventListener("click",D))}let x=function(F){let D=F.target.closest("a");D&&D.classList.contains("nav-file-title")&&(n.classList.add("collapsed"),n.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll"))};c.addEventListener("click",x),a.push(()=>c.removeEventListener("click",x));let v=n.querySelectorAll(".explorer-collapse-all");for(let F of v){let D=function(C){C.stopPropagation();let o=C.currentTarget.closest(".explorer");if(!o)return;let h=o.querySelectorAll(".folder-outer.open"),d=[];try{d=JSON.parse(localStorage.getItem("fileTree")||"[]")}catch{}for(let B of h){B.classList.remove("open");let A=B.previousElementSibling;if(A&&A.dataset.folderpath){let f=A.dataset.folderpath,p=d.findIndex(N=>N.path===f);p>=0?d[p].collapsed=!0:d.push({path:f,collapsed:!0})}}localStorage.setItem("fileTree",JSON.stringify(d)),l()};F.addEventListener("click",D),a.push(()=>F.removeEventListener("click",D))}let b=n.getElementsByClassName("folder-icon");for(let F of b){let D=function(C){C.stopPropagation();let o=this.parentElement;if(!o)return;let h=o.nextElementSibling;if(!h)return;h.classList.toggle("open");let d=!h.classList.contains("open"),B=o.dataset.folderpath,A=JSON.parse(localStorage.getItem("fileTree")||"[]"),f=A.findIndex(p=>p.path===B);f>=0?A[f].collapsed=d:A.push({path:B,collapsed:d}),localStorage.setItem("fileTree",JSON.stringify(A)),l()};F.addEventListener("click",D),a.push(()=>F.removeEventListener("click",D))}let S=n.getElementsByClassName("folder-button");for(let F of S){let D=function(C){let o=this.closest(".folder-container");if(!o)return;let h=n.dataset.behavior||"collapse",d=o.nextElementSibling,B=o.dataset.folderpath;if(h!=="link"){if(C.stopPropagation(),!d)return;d.classList.toggle("open");let A=!d.classList.contains("open"),f=JSON.parse(localStorage.getItem("fileTree")||"[]"),p=f.findIndex(N=>N.path===B);p>=0?f[p].collapsed=A:f.push({path:B,collapsed:A}),localStorage.setItem("fileTree",JSON.stringify(f)),l()}};F.addEventListener("click",D),a.push(()=>F.removeEventListener("click",D))}typeof window<"u"&&window.addCleanup&&window.addCleanup(()=>a.forEach(F=>F()))}for(let n of document.getElementsByClassName("explorer")){let l=n.querySelector(".mobile-explorer");l&&(l.classList.remove("hide-until-loaded"),l.checkVisibility&&l.checkVisibility()&&(n.classList.add("collapsed"),n.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll")))}}catch(t){console.error("[Explorer] Fatal error in nav handler:",t)}}document.addEventListener("nav",P);document.addEventListener("render",P);document.addEventListener("prenav",()=>{let u=document.querySelector(".explorer-ul");u&&sessionStorage.setItem("explorerScrollTop",u.scrollTop.toString())});
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
  const ExplorerComponent = (props) => {
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
                    fill: "currentColor",
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
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "5 8 14 8",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "folder-icon nav-folder-collapse-indicator collapse-icon",
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
  ExplorerComponent.css = explorer_default;
  ExplorerComponent.afterDOMLoaded = concatenateResources(explorer_inline_default, overflowListAfterDOMLoaded);
  return ExplorerComponent;
});

export { Explorer_default as Explorer };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map