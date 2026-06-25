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
var explorer_default = '/* "Open Explorer" Button */\n/* DO NOT TOUCH -> It strictly follows standard configuration */\n.explorer-button {\n  cursor: pointer;\n  padding: 0;\n  position: relative;\n  background: none;\n  border: none;\n  width: 20px;\n  height: 32px;\n  margin: 0;\n  text-align: inherit;\n  flex-shrink: 0;\n}\n.explorer-button svg {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: calc(50% - 10px);\n  fill: var(--darkgray);\n  stroke: var(--darkgray);\n  transition: opacity 0.1s ease;\n}\n\n:root[reader-mode=on] .sidebar.left, :root[reader-mode=on] .sidebar.right {\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n:root[reader-mode=on] .sidebar.left:hover, :root[reader-mode=on] .sidebar.right:hover {\n  opacity: 1;\n}\n\n/* Base Buttons & Structural Resets */\n.explorer-toggle {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--dark);\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Full-Screen Window */\n.explorer-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100dvh; /* dvh accounts for mobile browser UI bars */\n  background: var(--light);\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 15vw; /* Adds breathable margins to the sides on desktop */\n  box-sizing: border-box;\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  /* Strip away previous modal aesthetics */\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n}\n\n/* Mobile Adjustments */\n@media all and (max-width: 800px) {\n  .explorer-content {\n    padding: 1.5rem; /* Reduces side margins for smaller screens */\n  }\n}\n/* Header & Close Button */\n.explorer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--lightgray);\n}\n.explorer-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-family: var(--headerFont);\n}\n\n/* Collapsed State (Hiding the Full-Screen Menu) */\n.explorer.collapsed .explorer-container {\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(20px); /* Maintains a subtle slide-in effect */\n  pointer-events: none;\n}\n\n/* Tree Content Styling */\n.explorer-ul {\n  overflow-y: auto;\n  flex: 1;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  overscroll-behavior: contain;\n}\n\n.explorer-container ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.explorer-container ul li > a {\n  color: var(--dark);\n  opacity: 0.75;\n  text-decoration: none;\n  display: block;\n  padding: 0.2rem 0;\n}\n\n.explorer-container ul li > a:hover {\n  color: var(--tertiary);\n  opacity: 1;\n}\n\n.explorer-container ul li > a.active {\n  opacity: 1;\n  color: var(--tertiary);\n  font-weight: 600;\n}\n\n.folder-outer {\n  visibility: collapse;\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: all 0.3s ease-in-out;\n}\n.folder-outer.open {\n  visibility: visible;\n  grid-template-rows: 1fr;\n}\n.folder-outer > ul {\n  overflow: hidden;\n  margin-left: 6px;\n  padding-left: 0.8rem;\n  border-left: 1px solid var(--lightgray);\n}\n\n.folder-container {\n  display: flex;\n  align-items: center;\n  user-select: none;\n  margin-top: 0.4rem;\n}\n.folder-container div > button, .folder-container div > a {\n  color: var(--secondary);\n  font-family: var(--headerFont);\n  font-weight: 600;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.folder-container div > button:hover, .folder-container div > a:hover {\n  color: var(--tertiary);\n}\n\n.folder-icon {\n  margin-right: 5px;\n  color: var(--secondary);\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.folder-icon:hover {\n  color: var(--tertiary);\n}\n\nli:has(> .folder-outer:not(.open)) > .folder-container > svg {\n  transform: rotate(-90deg);\n}\n\nbody:has(.explorer:not(.collapsed)) {\n  overflow: hidden; /* Prevent page scrolling while modal is open */\n}\n\n/*\n@media all and (max-width: 800px) {\n  .page > #quartz-body > :not(.sidebar.left:has(.explorer)) {\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body.lock-scroll > :not(.sidebar.left:has(.explorer)) {\n    transform: translateX(100dvw);\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body .sidebar.left:has(.explorer) {\n    box-sizing: border-box;\n    position: sticky;\n    background-color: var(--light);\n    padding: 1rem 0 1rem 0;\n    margin: 0;\n  }\n  .page > #quartz-body .hide-until-loaded ~ .explorer-content {\n    display: none;\n  }\n}\n\n.explorer {\n  display: flex;\n  flex-direction: column;\n  overflow-y: hidden;\n  min-height: 1.2rem;\n  flex: 0 1 auto;\n}\n.explorer.collapsed {\n  flex: 0 1 1.2rem;\n}\n.explorer.collapsed .fold {\n  transform: rotateZ(-90deg);\n}\n.explorer .fold {\n  margin-left: 0.5rem;\n  transition: transform 0.3s ease;\n  opacity: 0.8;\n}\n@media all and (max-width: 800px) {\n  .explorer {\n    order: -1;\n    height: initial;\n    overflow: hidden;\n    flex-shrink: 0;\n    align-self: flex-start;\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n}\n.explorer button.mobile-explorer {\n  display: none;\n}\n.explorer button.desktop-explorer {\n  display: flex;\n}\n@media all and (max-width: 800px) {\n  .explorer button.mobile-explorer {\n    display: flex;\n  }\n  .explorer button.desktop-explorer {\n    display: none;\n  }\n}\n.explorer svg {\n  pointer-events: all;\n  transition: transform 0.35s ease;\n}\n.explorer svg > polyline {\n  pointer-events: none;\n}\n\nbutton.mobile-explorer,\nbutton.desktop-explorer {\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding: 0;\n  color: var(--dark);\n  display: flex;\n  align-items: center;\n}\nbutton.mobile-explorer h2,\nbutton.desktop-explorer h2 {\n  font-size: 1rem;\n  display: inline-block;\n  margin: 0;\n}\n\n.explorer-content {\n  list-style: none;\n  overflow: hidden;\n  overflow-y: auto;\n  margin-top: 0.5rem;\n}\n.explorer-content ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.explorer-content ul.explorer-ul {\n  overscroll-behavior: contain;\n}\n.explorer-content ul li > a {\n  color: var(--dark);\n  opacity: 0.75;\n  pointer-events: all;\n}\n.explorer-content ul li > a.active {\n  opacity: 1;\n  color: var(--tertiary);\n}\n.explorer-content .folder-outer {\n  visibility: collapse;\n  display: grid;\n  grid-template-rows: 0fr;\n  transition-property: grid-template-rows, visibility;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n.explorer-content .folder-outer.open {\n  visibility: visible;\n  grid-template-rows: 1fr;\n}\n.explorer-content .folder-outer > ul {\n  overflow: hidden;\n  margin-left: 6px;\n  padding-left: 0.8rem;\n  border-left: 1px solid var(--lightgray);\n}\n\n.folder-container {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  user-select: none;\n}\n.folder-container div > a {\n  color: var(--secondary);\n  font-family: var(--headerFont);\n  font-size: 0.95rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n  display: inline-block;\n}\n.folder-container div > a:hover {\n  color: var(--tertiary);\n}\n.folder-container div > button {\n  color: var(--dark);\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding-left: 0;\n  padding-right: 0;\n  display: flex;\n  align-items: center;\n  font-family: var(--headerFont);\n}\n.folder-container div > button span {\n  font-size: 0.95rem;\n  display: inline-block;\n  color: var(--secondary);\n  font-weight: 600;\n  margin: 0;\n  line-height: 1.5rem;\n  pointer-events: none;\n}\n\n.folder-icon {\n  margin-right: 5px;\n  color: var(--secondary);\n  cursor: pointer;\n  transition: transform 0.3s ease;\n  backface-visibility: visible;\n  flex-shrink: 0;\n}\nli:has(> .folder-outer:not(.open)) > .folder-container > svg {\n  transform: rotate(-90deg);\n}\n.folder-icon:hover {\n  color: var(--tertiary);\n}\n\n@media all and (max-width: 800px) {\n  .explorer.collapsed {\n    flex: 0 0 34px;\n  }\n  .explorer.collapsed > .explorer-content {\n    transform: translateX(-100vw);\n    visibility: hidden;\n  }\n  .explorer:not(.collapsed) {\n    flex: 0 0 34px;\n  }\n  .explorer:not(.collapsed) > .explorer-content {\n    transform: translateX(0);\n    visibility: visible;\n  }\n  .explorer .explorer-content {\n    box-sizing: border-box;\n    z-index: 100;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-top: 0;\n    background-color: var(--light);\n    max-width: 100vw;\n    width: 100vw;\n    transform: translateX(-100vw);\n    transition:\n      transform 200ms ease,\n      visibility 200ms ease;\n    overflow: hidden;\n    padding: 4rem 0 2rem 0;\n    height: 100dvh;\n    max-height: 100dvh;\n    visibility: hidden;\n  }\n  .explorer .mobile-explorer {\n    margin: 0;\n    padding: 5px;\n    z-index: 101;\n  }\n  .explorer .mobile-explorer.hide-until-loaded {\n    display: none;\n  }\n  .explorer .mobile-explorer .lucide-menu {\n    stroke: var(--darkgray);\n  }\n}\n\n@media all and (max-width: 800px) {\n  .mobile-no-scroll .explorer-content > .explorer-ul {\n    overscroll-behavior: contain;\n  }\n}\n\n*/';

// src/components/scripts/explorer.inline.ts
var explorer_inline_default = `var J=Object.hasOwnProperty;function y(u){let e=O(P(u,"index"),!0);return e.length===0?"/":e}function W(){return typeof document>"u"?"":document.body?.dataset?.basepath??""}function b(u,e){let D=e??W(),l=u.startsWith("/")?u:"/"+u;return D+l}function I(u,e){return u===e||u.endsWith("/"+e)}function P(u,e){return I(u,e)&&(u=u.slice(0,-e.length)),u}function O(u,e){return u.startsWith("/")&&(u=u.substring(1)),!e&&u.endsWith("/")&&(u=u.slice(0,-1)),u}var L=class u{constructor(e,D){this.children=[],this.slugSegments=e,this.data=D||null,this.isFolder=!1,this.fileSegmentHint=null,this.displayNameOverride=void 0}get displayName(){return this.displayNameOverride!==void 0?this.displayNameOverride:(this.data?.title==="index"?void 0:this.data?.title)||this.fileSegmentHint||this.slugSegment||""}set displayName(e){this.displayNameOverride=e}get slug(){let e=this.slugSegments.join("/");return this.isFolder?e+"/index":e}get slugSegment(){return this.slugSegments[this.slugSegments.length-1]||""}makeChild(e,D){let l=[...this.slugSegments,e[0]],i=new u(l,D);return this.children.push(i),i}insert(e,D){if(e.length===0)return;this.isFolder=!0;let l=e[0];if(e.length===1)l==="index"?this.data||(this.data=D):this.makeChild(e,D);else{let i=this.children.find(n=>n.slugSegment===l);i||(i=this.makeChild(e,void 0));let t=(D.filePath||D.slug||"").split("/");i.fileSegmentHint=t[t.length-e.length],i.insert(e.slice(1),D)}}add(e){this.insert(e.slug.split("/"),e)}sort(e){this.children.sort(e),this.children.forEach(D=>D.sort(e))}filter(e){this.children=this.children.filter(e),this.children.forEach(D=>D.filter(e))}map(e){e(this),this.children.forEach(D=>D.map(e))}static fromEntries(e){let D=new u([],null);return e.forEach(([,l])=>D.add(l)),D}},j=(u,e)=>!u.isFolder&&!e.isFolder||u.isFolder&&e.isFolder?u.displayName.localeCompare(e.displayName,void 0,{numeric:!0,sensitivity:"base"}):!u.isFolder&&e.isFolder?1:-1,R=u=>u.slugSegment!=="tags";function H(u,e,D,l){return D&&u.filter(D),l&&u.map(l),e&&u.sort(e),u}async function q(u){try{console.log("[Explorer] Fetching content index...");let e=await fetchData;if(console.log("[Explorer] Fetched data keys:",Object.keys(e).slice(0,5)),!e)return console.error("[Explorer] No data received"),null;let D=e.content||e,l=Object.entries(D);if(console.log("[Explorer] Entry count:",l.length),l.length===0)return console.warn("[Explorer] No content entries found"),null;let i=L.fromEntries(l);console.log("[Explorer] Trie root children:",i.children.length);let t=j,n=R,d=null;if(u)try{let c=JSON.parse(u);c.sortFn&&(t=new Function("a","b","return ("+c.sortFn+")(a, b)")),c.filterFn&&(n=new Function("node","return ("+c.filterFn+")(node)")),c.mapFn&&(d=new Function("node","("+c.mapFn+")(node)"))}catch(c){console.error("Error parsing data functions:",c)}return H(i,t,n,d)}catch(e){return console.error("Error building file trie:",e),null}}var N=0;function w(u,e,D,l,i,t=""){let n=document.getElementById("template-folder"),d=document.getElementById("template-file");if(!n||!d)return;let c=t?t+"/"+u.slugSegment:u.slugSegment,C=y(D);if(u.isFolder){let s=n.content.cloneNode(!0),a=s.querySelector(".folder-container"),g=s.querySelector(".folder-button"),A=s.querySelector(".folder-title"),x=s.querySelector(".folder-outer"),S=s.querySelector(".content");if(A&&(A.textContent=u.displayName||u.slugSegment),a&&(a.dataset.folderpath=u.slug),l==="link"&&g){let F=document.createElement("a");F.className=g.className;let f=y(u.slug);F.href=b(f||""),A?F.appendChild(A):F.textContent=u.displayName||u.slugSegment,g.replaceWith(F),g=F}let o=i[u.slug]!==void 0?i[u.slug]:!0,r=y(u.slug),E=r&&r===C.slice(0,r.length);if((!o||E)&&x&&x.classList.add("open"),u.children&&u.children.length>0&&S)for(let F of u.children)w(F,S,D,l,i,c);e.appendChild(s)}else if(u.data){let s=d.content.cloneNode(!0),a=s.querySelector("a");a&&(a.href=b(u.data.slug),a.textContent=u.displayName||u.slugSegment,u.data.slug===D&&a.classList.add("active","is-active")),e.appendChild(s)}}async function T(u){let e=++N;try{console.log("[Explorer] Nav event received, generation:",e);let D=(u.detail?.url||"").replace(/^\\/+/,""),l=document.querySelectorAll("div.explorer");console.log("[Explorer] Found",l.length,"explorers");let i={};try{JSON.parse(localStorage.getItem("fileTree")||"[]").forEach(n=>{i[n.path]=n.collapsed})}catch(t){console.error("[Explorer] Error loading saved state:",t)}for(let t of l){let n=t.querySelector(".explorer-ul");if(!n){console.warn("[Explorer] No explorer-ul found");continue}n.innerHTML='<li class="overflow-end"></li>';let d=t.dataset.dataFns,c=t.dataset.behavior||"collapse";console.log("[Explorer] Starting tree build...");let C=await q(d);if(e===N){if(console.log("[Explorer] Render generation is current, rendering tree"),console.log("[Explorer] Trie result:",C?"success":"null"),C&&C.children&&C.children.length>0){n.innerHTML='<li class="overflow-end"></li>',console.log("[Explorer] Rendering",C.children.length,"children");for(let r of C.children)w(r,n,D,c,i,"");console.log("[Explorer] Render complete, final list length:",n.children.length)}else console.warn("[Explorer] No trie or empty children");let o=sessionStorage.getItem("explorerScrollTop");if(o)n.scrollTop=parseInt(o,10);else{let r=n.querySelector(".active");r&&r.scrollIntoView({behavior:"smooth"})}}else console.log("[Explorer] Stale render generation, skipping tree render");let s=[],a=t.querySelectorAll(".explorer-open");for(let o of a){let r=function(E){let F=E.currentTarget.closest(".explorer");F&&(F.classList.remove("collapsed"),F.setAttribute("aria-expanded","true"),document.documentElement.classList.add("mobile-no-scroll"))};o.addEventListener("click",r),s.push(()=>o.removeEventListener("click",r))}let g=t.querySelectorAll(".explorer-close");for(let o of g){let r=function(E){let F=E.currentTarget.closest(".explorer");F&&(F.classList.add("collapsed"),F.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll"))};o.addEventListener("click",r),s.push(()=>o.removeEventListener("click",r))}let A=function(o){let r=o.target.closest("a");r&&r.classList.contains("nav-file-title")&&(t.classList.add("collapsed"),t.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll"))};n.addEventListener("click",A),s.push(()=>n.removeEventListener("click",A));let x=t.getElementsByClassName("folder-icon");for(let o of x){let r=function(E){E.stopPropagation();let F=this.parentElement;if(!F)return;let f=F.nextElementSibling;if(!f)return;f.classList.toggle("open");let p=!f.classList.contains("open"),m=F.dataset.folderpath,B=JSON.parse(localStorage.getItem("fileTree")||"[]"),h=B.findIndex(v=>v.path===m);h>=0?B[h].collapsed=p:B.push({path:m,collapsed:p}),localStorage.setItem("fileTree",JSON.stringify(B))};o.addEventListener("click",r),s.push(()=>o.removeEventListener("click",r))}let S=t.getElementsByClassName("folder-button");for(let o of S){let r=function(E){let F=this.closest(".folder-container");if(!F)return;let f=t.dataset.behavior||"collapse",p=F.nextElementSibling,m=F.dataset.folderpath;if(f!=="link"){if(E.stopPropagation(),!p)return;p.classList.toggle("open");let B=!p.classList.contains("open"),h=JSON.parse(localStorage.getItem("fileTree")||"[]"),v=h.findIndex(k=>k.path===m);v>=0?h[v].collapsed=B:h.push({path:m,collapsed:B}),localStorage.setItem("fileTree",JSON.stringify(h))}};o.addEventListener("click",r),s.push(()=>o.removeEventListener("click",r))}typeof window<"u"&&window.addCleanup&&window.addCleanup(()=>s.forEach(o=>o()))}for(let t of document.getElementsByClassName("explorer")){let n=t.querySelector(".mobile-explorer");n&&(n.classList.remove("hide-until-loaded"),n.checkVisibility&&n.checkVisibility()&&(t.classList.add("collapsed"),t.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll")))}}catch(D){console.error("[Explorer] Fatal error in nav handler:",D)}}document.addEventListener("nav",T);document.addEventListener("render",T);document.addEventListener("prenav",()=>{let u=document.querySelector(".explorer-ul");u&&sessionStorage.setItem("explorerScrollTop",u.scrollTop.toString())});
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
              class: classNames(displayClass, "explorer-button"),
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
              /* @__PURE__ */ u2("button", { type: "button", class: "explorer-close close-button", children: /* @__PURE__ */ u2(
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
                  children: [
                    /* @__PURE__ */ u2("path", { d: "M18 6 6 18" }),
                    /* @__PURE__ */ u2("path", { d: "m6 6 12 12" })
                  ]
                }
              ) })
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
              /* @__PURE__ */ u2("div", { children: /* @__PURE__ */ u2("button", { class: "folder-button", children: /* @__PURE__ */ u2("span", { class: "folder-title" }) }) })
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