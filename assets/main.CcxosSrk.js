var C=Object.defineProperty;var S=(r,i,t)=>i in r?C(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t;var c=(r,i,t)=>S(r,typeof i!="symbol"?i+"":i,t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();class E extends Error{constructor(i,t,a){super(a??`Failed to load font for ${i}${t?` from ${t}`:""}`),this.system=i,this.url=t,this.name="FontLoadError"}}const P=""+new URL("ninjal_hentaigana.ZV3gqHt3.woff2",import.meta.url).href,F=""+new URL("ninjal_hentaigana.DM189ZoV.woff",import.meta.url).href,I={hentaigana:`
    @font-face {
      font-family: 'NINJAL Hentaigana';
      src: url('${P}') format('woff2'),
           url('${F}') format('woff');
      font-display: swap;
    }
  `},y={hentaigana:"NINJAL Hentaigana",siddham:"Noto Sans Siddham",itaiji:"Noto Sans JP"},v={hentaigana:{type:"local",style:I.hentaigana,family:y.hentaigana},siddham:{type:"remote",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Siddham&display=swap",family:y.siddham},itaiji:{type:"remote",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap",family:y.itaiji}};class L{constructor(){c(this,"loadedFonts",new Set);c(this,"loadingPromises",new Map);c(this,"styleElement",null);this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement)}async loadFonts(i){const t=Object.entries(i).filter(([a,e])=>e).map(([a])=>a);try{await Promise.all(t.map(a=>this.loadFont(a)))}catch(a){if(a instanceof E)throw a;const e=new Error("Failed to load fonts");throw a instanceof Error&&(e.cause=a),e}}async loadFont(i){if(this.loadedFonts.has(i))return;const t=this.loadingPromises.get(i);if(t)return t;const a=v[i];let e;if(a.type==="local")e=new Promise(n=>{this.styleElement&&(this.styleElement.textContent=(this.styleElement.textContent??"")+a.style),n()});else{const n=document.createElement("link");n.rel="stylesheet",n.href=a.url,e=new Promise((s,o)=>{n.addEventListener("load",()=>{s()}),n.addEventListener("error",()=>{o(new E(i,a.url))}),document.head.appendChild(n)})}this.loadingPromises.set(i,e);try{await e,this.loadedFonts.add(i),this.loadingPromises.delete(i)}catch(n){throw this.loadingPromises.delete(i),n}}getFontFamilyString(i){const t=Object.entries(i).filter(([a,e])=>e).map(([a])=>v[a].family);return t.length>0?t.concat(["serif"]).join(", "):"serif"}isFontLoaded(i){return this.loadedFonts.has(i)}}const R="modulepreload",T=function(r,i){return new URL(r,i).href},w={},k=function(i,t,a){let e=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),h=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.allSettled(t.map(d=>{if(d=T(d,a),d in w)return;w[d]=!0;const u=d.endsWith(".css"),x=u?'[rel="stylesheet"]':"";if(!!a)for(let m=s.length-1;m>=0;m--){const f=s[m];if(f.href===d&&(!u||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${x}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":R,u||(p.as="script"),p.crossOrigin="",p.href=d,h&&p.setAttribute("nonce",h),document.head.appendChild(p),u)return new Promise((m,f)=>{p.addEventListener("load",m),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return e.then(s=>{for(const o of s||[])o.status==="rejected"&&n(o.reason);return i().catch(n)})};class b extends Error{constructor(i){super(i),this.name="IMEError"}}class j{constructor(i={enabledTypes:{}}){c(this,"dictionary",[]);c(this,"options");this.options=i}setDictionary(i){this.dictionary=i}updateOptions(i){this.options=i}search(i){if(!i)return[];if(!/^[ぁ-んー]*$/.test(i))throw new b("Reading must be hiragana");const t=this.dictionary.filter(e=>!this.options.enabledTypes[e.type]||e.isBuddhaName&&!this.options.enabledTypes.buddha_name?!1:e.reading.startsWith(i)).map(e=>({char:e.char,reading:e.reading,type:e.type})),a=new Map;return t.forEach(e=>{const n=e.char,s=a.get(n);(!s||s.reading.length>e.reading.length)&&a.set(n,{...e,fullReading:(s==null?void 0:s.fullReading)||e.reading})}),Array.from(a.values())}searchExact(i){if(!i)return[];if(!/^[ぁ-んー]*$/.test(i))throw new b("Reading must be hiragana");const t=this.dictionary.filter(e=>!this.options.enabledTypes[e.type]||e.isBuddhaName&&!this.options.enabledTypes.buddha_name?!1:e.reading===i).map(e=>({char:e.char,reading:e.reading,type:e.type})),a=new Map;return t.forEach(e=>{const n=e.char,s=a.get(n);(!s||s.reading.length>e.reading.length)&&a.set(n,{...e,fullReading:(s==null?void 0:s.fullReading)||e.reading})}),Array.from(a.values())}}class O extends HTMLElement{constructor(){super();c(this,"props",{target:document.createElement("input"),options:{enabledTypes:{}}});c(this,"state",{input:"",candidates:[],cursorPosition:null});c(this,"ime");c(this,"fontLoader");c(this,"container");c(this,"input");c(this,"candidateList");this.attachShadow({mode:"open"}),this.ime=new j({enabledTypes:{hentaigana:!0,siddham:!0,itaiji:!0,buddha_name:!1}}),k(async()=>{const{dictionary:t}=await import("./dictionary.Dzu1QF-1.js");return{dictionary:t}},[],import.meta.url).then(({dictionary:t})=>{console.log("Loaded dictionary:",t),this.ime.setDictionary(t)}).catch(t=>{console.error("Failed to load dictionary:",t)}),this.fontLoader=new L,this.fontLoader.loadFonts({hentaigana:!0,siddham:!0,itaiji:!0}).catch(t=>{console.error("Failed to load fonts:",t)})}connectedCallback(){this.render(),this.setupStyles(),this.setupEventListeners()}render(){const t=`
      <div class="ime-container">
        <div class="ime-input-area">
          <input type="text" class="ime-input" placeholder="ひらがなで入力">
          <button type="button" class="ime-close">×</button>
        </div>
        <div class="ime-candidates"></div>
     </div>
    `;this.shadowRoot&&(this.shadowRoot.innerHTML=t,this.setupElements())}setupStyles(){var e;const t=document.createElement("style"),a=this.fontLoader.getFontFamilyString({hentaigana:!0,siddham:!0,itaiji:!0});t.textContent=`
      .ime-container {
        position: absolute;
        z-index: 1000;
        background: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        width: 300px;
        max-width: 90vw;
      }
  
      .ime-input-area {
        display: flex;
        padding: 8px;
        border-bottom: 1px solid #eee;
      }
  
      .ime-input {
        flex: 1;
        border: 1px solid #ccc;
        padding: 4px;
        font-size: 16px;
      }
  
      .ime-close {
        border: none;
        background: none;
        padding: 4px 8px;
        cursor: pointer;
        font-size: 16px;
      }
  
      .ime-candidates {
        max-height: 200px;
        overflow-y: auto;
        padding: 8px;
        font-family: ${a};
      }
  
      .ime-candidate {
        padding: 4px 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: ${a};
      }
  
      .ime-candidate:hover {
        background: #f5f5f5;
      }
  
      .ime-candidate-char {
        font-family: ${a};
        margin-right: 8px;
      }
  
      .ime-candidate-reading {
        color: #666;
        font-size: 0.9em;
      }
    `,(e=this.shadowRoot)==null||e.appendChild(t)}setupElements(){this.shadowRoot&&(this.container=this.shadowRoot.querySelector(".ime-container"),this.input=this.shadowRoot.querySelector(".ime-input"),this.candidateList=this.shadowRoot.querySelector(".ime-candidates"))}setupEventListeners(){var t,a,e,n,s;(t=this.input)==null||t.addEventListener("input",this.handleInput.bind(this)),(a=this.props.target)==null||a.addEventListener("select",this.updatePosition.bind(this)),(e=this.props.target)==null||e.addEventListener("click",this.updatePosition.bind(this)),(s=(n=this.shadowRoot)==null?void 0:n.querySelector(".ime-close"))==null||s.addEventListener("click",this.handleClose.bind(this))}handleInput(t){const a=t.target,e=a.value,n=e.replace(/[^ぁ-んー]/g,"");n!==this.state.input&&(this.state.input=n,e!==n&&(a.value=n),this.updateCandidates())}async updateCandidates(){try{const t=this.ime.search(this.state.input);this.state.candidates=t,this.renderCandidates()}catch(t){console.warn("Search failed:",t)}}renderCandidates(){this.candidateList&&(this.candidateList.innerHTML=this.state.candidates.map(t=>`
        <div class="ime-candidate" data-char="${t.char}">
          <span class="ime-candidate-char">${t.char}</span>
          <span class="ime-candidate-reading">(${t.reading})</span>
        </div>
      `).join(""),this.candidateList.querySelectorAll(".ime-candidate").forEach(t=>{t.addEventListener("click",a=>{const n=a.currentTarget.dataset.char;n&&this.handleCandidateSelect(n)})}))}handleCandidateSelect(t){var a,e;if(this.props.target){const n=this.props.target,s=n.selectionStart||0,o=n.selectionEnd||0,h=n.value,d=this.fontLoader.getFontFamilyString({hentaigana:!0,siddham:!0,itaiji:!0});n.style.fontFamily=d,n.value=h.slice(0,s)+t+h.slice(o),n.selectionStart=n.selectionEnd=s+t.length,this.input.value="",this.state.input="",this.state.candidates=[],this.renderCandidates(),(e=(a=this.props).onChange)==null||e.call(a,n.value)}}handleClose(){var t,a;(a=(t=this.props).onClose)==null||a.call(t)}updatePosition(){if(!this.props.target||!this.container)return;const t=this.props.target,a=t.getBoundingClientRect(),e=window.scrollX,n=window.scrollY,s=window.getComputedStyle(t),o=parseInt(s.lineHeight||"0")||parseInt(s.fontSize||"16")*1.2,h=o*2;this.container.style.position="absolute",this.container.style.top=`${a.top+n+h}px`,this.container.style.left=`${a.left+e}px`;const d=this.container.getBoundingClientRect();d.right>window.innerWidth&&(this.container.style.left=`${window.innerWidth-d.width-10+e}px`),d.bottom>window.innerHeight&&(this.container.style.top=`${a.top+n-d.height-o*2}px`)}updateOptions(t){this.props&&(this.props.options=t,this.ime.updateOptions(t))}}window.customElements.get("ime-ui")||window.customElements.define("ime-ui",O);const l=class l{constructor(){c(this,"activeElement",null);c(this,"eventCleanup")}static getInstance(){return l.instance||(l.instance=new l),l.instance}static resetInstance(){l.instance&&l.instance.detach(),l.instance=new l}attach(i,t={}){var o;this.detach();const e=new L().getFontFamilyString({hentaigana:!0,siddham:!0,itaiji:!0});i.style.fontFamily=e;const n=document.createElement("ime-ui");Object.assign(n,{props:{target:i,options:{enabledTypes:((o=t.options)==null?void 0:o.enabledTypes)||{hentaigana:!0,siddham:!0,itaiji:!0,buddha_name:!1}},position:t.position||"bottom",onClose:()=>this.detach(),onChange:t.onChange}}),document.body.appendChild(n),this.activeElement=n,n.updatePosition();const s=h=>{const u=h.relatedTarget;(!u||!n.contains(u))&&this.detach()};i.addEventListener("blur",s),i.addEventListener("click",()=>n.updatePosition()),i.addEventListener("select",()=>n.updatePosition()),i.addEventListener("keyup",()=>n.updatePosition()),window.addEventListener("resize",()=>n.updatePosition()),this.eventCleanup=()=>{i.removeEventListener("blur",s),i.removeEventListener("click",()=>n.updatePosition()),i.removeEventListener("select",()=>n.updatePosition()),i.removeEventListener("keyup",()=>n.updatePosition()),window.removeEventListener("resize",()=>n.updatePosition())}}detach(){this.eventCleanup&&(this.eventCleanup(),this.eventCleanup=void 0),this.activeElement&&(this.activeElement.remove(),this.activeElement=null)}updateOptions(i){this.activeElement&&this.activeElement.updateOptions({enabledTypes:{hentaigana:!1,siddham:!1,itaiji:!1,buddha_name:!1,...i.enabledTypes}})}};c(l,"instance");let g=l;document.getElementById("version").textContent="0.1.3";document.addEventListener("DOMContentLoaded",()=>{g.resetInstance();const r=g.getInstance();["hentaigana","siddham","itaiji","buddha_name"].forEach(i=>{var t;(t=document.getElementById(i))==null||t.addEventListener("change",()=>{var e,n,s,o;const a={enabledTypes:{hentaigana:((e=document.getElementById("hentaigana"))==null?void 0:e.checked)??!1,siddham:((n=document.getElementById("siddham"))==null?void 0:n.checked)??!1,itaiji:((s=document.getElementById("itaiji"))==null?void 0:s.checked)??!1,buddha_name:((o=document.getElementById("buddha_name"))==null?void 0:o.checked)??!1}};r.updateOptions(a)})}),document.querySelectorAll(".ime-enabled").forEach(i=>{(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&i.addEventListener("focus",()=>{var a,e,n,s;const t={enabledTypes:{hentaigana:((a=document.getElementById("hentaigana"))==null?void 0:a.checked)??!1,siddham:((e=document.getElementById("siddham"))==null?void 0:e.checked)??!1,itaiji:((n=document.getElementById("itaiji"))==null?void 0:n.checked)??!1,buddha_name:((s=document.getElementById("buddha_name"))==null?void 0:s.checked)??!1}};r.attach(i,{options:t})})})});
