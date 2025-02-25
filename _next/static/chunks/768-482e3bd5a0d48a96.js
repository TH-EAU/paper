"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{1768:(e,t,n)=>{let r,o,i,l,a;n.d(t,{Hl:()=>eQ});var s=n(337),c=n(7274),u=n(2115),f=n(6188),p=n(8010),d=n(9124);let{useSyncExternalStoreWithSelector:v}=p,h=e=>e,m=(e,t)=>{let n=(0,d.y)(e),r=(e,r=t)=>(function(e,t=h,n){let r=v(e.subscribe,e.getState,e.getInitialState,t,n);return u.useDebugValue(r),r})(n,e,r);return Object.assign(r,n),r},b=(e,t)=>e?m(e,t):m;var y=n(5193),g=n.n(y),w=n(6703);let j=e=>"object"==typeof e&&"function"==typeof e.then,C=[];function x(e,t,n=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let r=e.length;if(t.length!==r)return!1;for(let o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}function E(e,t=null,n=!1,r={}){for(let o of(null===t&&(t=[e]),C))if(x(t,o.keys,o.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(o,"error"))throw o.error;if(Object.prototype.hasOwnProperty.call(o,"response"))return r.lifespan&&r.lifespan>0&&(o.timeout&&clearTimeout(o.timeout),o.timeout=setTimeout(o.remove,r.lifespan)),o.response;if(!n)throw o.promise}let o={keys:t,equal:r.equal,remove:()=>{let e=C.indexOf(o);-1!==e&&C.splice(e,1)},promise:(j(e)?e:e(...t)).then(e=>{o.response=e,r.lifespan&&r.lifespan>0&&(o.timeout=setTimeout(o.remove,r.lifespan))}).catch(e=>o.error=e)};if(C.push(o),!n)throw o.promise}let P=(e,t,n)=>E(e,t,!1,n),S=(e,t,n)=>void E(e,t,!0,n),M=e=>{if(void 0===e||0===e.length)C.splice(0,C.length);else{let t=C.find(t=>x(e,t.keys,t.equal));t&&t.remove()}};var _=n(5155);function k(e,t,n){if(!e)return;if(!0===n(e))return e;let r=t?e.return:e.child;for(;r;){let e=k(r,t,n);if(e)return e;r=t?null:r.sibling}}function O(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}(()=>{var e,t;return"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative")})()?u.useLayoutEffect:u.useEffect;let T=O(u.createContext(null));class I extends u.Component{render(){return u.createElement(T.Provider,{value:this._reactInternals},this.props.children)}}function A(){let e=u.useContext(T);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=u.useId();return u.useMemo(()=>{for(let n of[e,null==e?void 0:e.alternate]){if(!n)continue;let e=k(n,!1,e=>{let n=e.memoizedState;for(;n;){if(n.memoizedState===t)return!0;n=n.next}});if(e)return e}},[e,t])}let L=Symbol.for("react.context"),z=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===L;function R(e){let t=e.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}n(2818),u.act;let H=e=>e&&e.isOrthographicCamera,D=e=>e&&e.hasOwnProperty("current"),q=e=>null!=e&&("string"==typeof e||"number"==typeof e||e.isColor),F=((e,t)=>"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative"))()?u.useLayoutEffect:u.useEffect;function U({set:e}){return F(()=>(e(new Promise(()=>null)),()=>e(!1)),[e]),null}let $=(e=>((e=class extends u.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}).getDerivedStateFromError=()=>({error:!0}),e))();function N(e){var t;let n="undefined"!=typeof window?null!=(t=window.devicePixelRatio)?t:2:1;return Array.isArray(e)?Math.min(Math.max(e[0],n),e[1]):e}function W(e){var t;return null==(t=e.__r3f)?void 0:t.root.getState()}let B={obj:e=>e===Object(e)&&!B.arr(e)&&"function"!=typeof e,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,boo:e=>"boolean"==typeof e,und:e=>void 0===e,nul:e=>null===e,arr:e=>Array.isArray(e),equ(e,t,{arrays:n="shallow",objects:r="reference",strict:o=!0}={}){let i;if(typeof e!=typeof t||!!e!=!!t)return!1;if(B.str(e)||B.num(e)||B.boo(e))return e===t;let l=B.obj(e);if(l&&"reference"===r)return e===t;let a=B.arr(e);if(a&&"reference"===n)return e===t;if((a||l)&&e===t)return!0;for(i in e)if(!(i in t))return!1;if(l&&"shallow"===n&&"shallow"===r){for(i in o?t:e)if(!B.equ(e[i],t[i],{strict:o,objects:"reference"}))return!1}else for(i in o?t:e)if(e[i]!==t[i])return!1;if(B.und(i)){if(a&&0===e.length&&0===t.length||l&&0===Object.keys(e).length&&0===Object.keys(t).length)return!0;if(e!==t)return!1}return!0}},V=["children","key","ref"];function Y(e,t,n,r){let o=null==e?void 0:e.__r3f;return!o&&(o={root:t,type:n,parent:null,children:[],props:function(e){let t={};for(let n in e)V.includes(n)||(t[n]=e[n]);return t}(r),object:e,eventCount:0,handlers:{},isHidden:!1},e&&(e.__r3f=o)),o}function X(e,t){var n;let r=e[t];if(!t.includes("-"))return{root:e,key:t,target:r};let o=t.split("-");return r=o.reduce((e,t)=>e[t],e),t=o.pop(),null!=(n=r)&&n.set||(e=o.reduce((e,t)=>e[t],e)),{root:e,key:t,target:r}}let G=/-\d+$/;function Z(e,t){if(B.str(t.props.attach)){if(G.test(t.props.attach)){let n=t.props.attach.replace(G,""),{root:r,key:o}=X(e.object,n);Array.isArray(r[o])||(r[o]=[])}let{root:n,key:r}=X(e.object,t.props.attach);t.previousAttach=n[r],n[r]=t.object}else B.fun(t.props.attach)&&(t.previousAttach=t.props.attach(e.object,t.object))}function K(e,t){if(B.str(t.props.attach)){let{root:n,key:r}=X(e.object,t.props.attach),o=t.previousAttach;void 0===o?delete n[r]:n[r]=o}else null==t.previousAttach||t.previousAttach(e.object,t.object);delete t.previousAttach}let Q=[...V,"args","dispose","attach","object","onUpdate","dispose"],J=new Map,ee=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],et=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function en(e,t){var n,r;let o=e.__r3f,i=o&&R(o).getState(),l=null==o?void 0:o.eventCount;for(let n in t){let l=t[n];if(Q.includes(n))continue;if(o&&et.test(n)){"function"==typeof l?o.handlers[n]=l:delete o.handlers[n],o.eventCount=Object.keys(o.handlers).length;continue}if(void 0===l)continue;let{root:a,key:c,target:u}=X(e,n);u instanceof s.zgK&&l instanceof s.zgK?u.mask=l.mask:u instanceof s.Q1f&&q(l)?u.set(l):null!==u&&"object"==typeof u&&"function"==typeof u.set&&"function"==typeof u.copy&&null!=l&&l.constructor&&u.constructor===l.constructor?u.copy(l):null!==u&&"object"==typeof u&&"function"==typeof u.set&&Array.isArray(l)?"function"==typeof u.fromArray?u.fromArray(l):u.set(...l):null!==u&&"object"==typeof u&&"function"==typeof u.set&&"number"==typeof l?"function"==typeof u.setScalar?u.setScalar(l):u.set(l):(a[c]=l,i&&!i.linear&&ee.includes(c)&&null!=(r=a[c])&&r.isTexture&&a[c].format===s.GWd&&a[c].type===s.OUM&&(a[c].colorSpace=s.er$))}if(null!=o&&o.parent&&null!=i&&i.internal&&null!=(n=o.object)&&n.isObject3D&&l!==o.eventCount){let e=o.object,t=i.internal.interaction.indexOf(e);t>-1&&i.internal.interaction.splice(t,1),o.eventCount&&null!==e.raycast&&i.internal.interaction.push(e)}return o&&void 0===o.props.attach&&(o.object.isBufferGeometry?o.props.attach="geometry":o.object.isMaterial&&(o.props.attach="material")),o&&er(o),e}function er(e){var t;if(!e.parent)return;null==e.props.onUpdate||e.props.onUpdate(e.object);let n=null==(t=e.root)?void 0:null==t.getState?void 0:t.getState();n&&0===n.internal.frames&&n.invalidate()}let eo=e=>null==e?void 0:e.isObject3D;function ei(e){return(e.eventObject||e.object).uuid+"/"+e.index+e.instanceId}function el(e,t,n,r){let o=n.get(t);o&&(n.delete(t),0===n.size&&(e.delete(r),o.target.releasePointerCapture(r)))}let ea=e=>!!(null!=e&&e.render),es=u.createContext(null),ec=(e,t)=>{let n=b((n,r)=>{let o;let i=new s.Pq0,l=new s.Pq0,a=new s.Pq0;function c(e=r().camera,t=l,n=r().size){let{width:o,height:s,top:u,left:f}=n,p=o/s;t.isVector3?a.copy(t):a.set(...t);let d=e.getWorldPosition(i).distanceTo(a);if(H(e))return{width:o/e.zoom,height:s/e.zoom,top:u,left:f,factor:1,distance:d,aspect:p};{let t=2*Math.tan(e.fov*Math.PI/180/2)*d,n=o/s*t;return{width:n,height:t,top:u,left:f,factor:o/n,distance:d,aspect:p}}}let f=e=>n(t=>({performance:{...t.performance,current:e}})),p=new s.I9Y;return{set:n,get:r,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(t=1)=>e(r(),t),advance:(e,n)=>t(e,n,r()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new s.zD7,pointer:p,mouse:p,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let e=r();o&&clearTimeout(o),e.performance.current!==e.performance.min&&f(e.performance.min),o=setTimeout(()=>f(r().performance.max),e.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:c},setEvents:e=>n(t=>({...t,events:{...t.events,...e}})),setSize:(e,t,o=0,i=0)=>{let a=r().camera,s={width:e,height:t,top:o,left:i};n(e=>({size:s,viewport:{...e.viewport,...c(a,l,s)}}))},setDpr:e=>n(t=>{let n=N(e);return{viewport:{...t.viewport,dpr:n,initialDpr:t.viewport.initialDpr||n}}}),setFrameloop:(e="always")=>{let t=r().clock;t.stop(),t.elapsedTime=0,"never"!==e&&(t.start(),t.elapsedTime=0),n(()=>({frameloop:e}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:u.createRef(),active:!1,frames:0,priority:0,subscribe:(e,t,n)=>{let o=r().internal;return o.priority=o.priority+(t>0?1:0),o.subscribers.push({ref:e,priority:t,store:n}),o.subscribers=o.subscribers.sort((e,t)=>e.priority-t.priority),()=>{let n=r().internal;null!=n&&n.subscribers&&(n.priority=n.priority-(t>0?1:0),n.subscribers=n.subscribers.filter(t=>t.ref!==e))}}}}}),r=n.getState(),o=r.size,i=r.viewport.dpr,l=r.camera;return n.subscribe(()=>{let{camera:e,size:t,viewport:r,gl:a,set:s}=n.getState();if(t.width!==o.width||t.height!==o.height||r.dpr!==i){o=t,i=r.dpr,function(e,t){e.manual||(H(e)?(e.left=-(t.width/2),e.right=t.width/2,e.top=t.height/2,e.bottom=-(t.height/2)):e.aspect=t.width/t.height,e.updateProjectionMatrix())}(e,t),r.dpr>0&&a.setPixelRatio(r.dpr);let n="undefined"!=typeof HTMLCanvasElement&&a.domElement instanceof HTMLCanvasElement;a.setSize(t.width,t.height,n)}e!==l&&(l=e,s(t=>({viewport:{...t.viewport,...t.viewport.getCurrentViewport(e)}})))}),n.subscribe(t=>e(t)),n},eu=new WeakMap,ef=e=>{var t;return"function"==typeof e&&(null==e?void 0:null==(t=e.prototype)?void 0:t.constructor)===e};function ep(e,t){return function(n,...r){let o;return ef(n)?(o=eu.get(n))||(o=new n,eu.set(n,o)):o=n,e&&e(o),Promise.all(r.map(e=>new Promise((n,r)=>o.load(e,e=>{eo(null==e?void 0:e.scene)&&Object.assign(e,function(e){let t={nodes:{},materials:{}};return e&&e.traverse(e=>{e.name&&(t.nodes[e.name]=e),e.material&&!t.materials[e.material.name]&&(t.materials[e.material.name]=e.material)}),t}(e.scene)),n(e)},t,t=>r(Error(`Could not load ${e}: ${null==t?void 0:t.message}`))))))}}function ed(e,t,n,r){let o=Array.isArray(t)?t:[t],i=P(ep(n,r),[e,...o],{equal:B.equ});return Array.isArray(t)?i:i[0]}ed.preload=function(e,t,n){let r=Array.isArray(t)?t:[t];return S(ep(n),[e,...r])},ed.clear=function(e,t){return M([e,...Array.isArray(t)?t:[t]])};let ev={},eh=/^three(?=[A-Z])/,em=e=>`${e[0].toUpperCase()}${e.slice(1)}`,eb=0,ey=e=>"function"==typeof e;function eg(e,t){let n=em(e),r=ev[n];if("primitive"!==e&&!r)throw Error(`R3F: ${n} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if("primitive"===e&&!t.object)throw Error("R3F: Primitives without 'object' are invalid!");if(void 0!==t.args&&!Array.isArray(t.args))throw Error("R3F: The args prop must be an array!")}function ew(e){if(e.isHidden){var t;e.props.attach&&null!=(t=e.parent)&&t.object?Z(e.parent,e):eo(e.object)&&!1!==e.props.visible&&(e.object.visible=!0),e.isHidden=!1,er(e)}}function ej(e,t,n){let r=t.root.getState();if(e.parent||e.object===r.scene){if(!t.object){var o,i;let e=ev[em(t.type)];t.object=null!=(o=t.props.object)?o:new e(...null!=(i=t.props.args)?i:[]),t.object.__r3f=t}if(en(t.object,t.props),t.props.attach)Z(e,t);else if(eo(t.object)&&eo(e.object)){let r=e.object.children.indexOf(null==n?void 0:n.object);n&&-1!==r?(t.object.parent=e.object,e.object.children.splice(r,0,t.object),t.object.dispatchEvent({type:"added"}),e.object.dispatchEvent({type:"childadded",child:t.object})):e.object.add(t.object)}for(let e of t.children)ej(t,e);er(t)}}function eC(e,t){t&&(t.parent=e,e.children.push(t),ej(e,t))}function ex(e,t,n){if(!t||!n)return;t.parent=e;let r=e.children.indexOf(n);-1!==r?e.children.splice(r,0,t):e.children.push(t),ej(e,t,n)}function eE(e){if("function"==typeof e.dispose){let t=()=>{try{e.dispose()}catch{}};"undefined"!=typeof IS_REACT_ACT_ENVIRONMENT?t():(0,w.unstable_scheduleCallback)(w.unstable_IdlePriority,t)}}function eP(e,t,n){if(!t)return;t.parent=null;let r=e.children.indexOf(t);-1!==r&&e.children.splice(r,1),t.props.attach?K(e,t):eo(t.object)&&eo(e.object)&&(e.object.remove(t.object),function(e,t){let{internal:n}=e.getState();n.interaction=n.interaction.filter(e=>e!==t),n.initialHits=n.initialHits.filter(e=>e!==t),n.hovered.forEach((e,r)=>{(e.eventObject===t||e.object===t)&&n.hovered.delete(r)}),n.capturedMap.forEach((e,r)=>{el(n.capturedMap,t,e,r)})}(R(t),t.object));let o=null!==t.props.dispose&&!1!==n;for(let e=t.children.length-1;e>=0;e--){let n=t.children[e];eP(t,n,o)}t.children.length=0,delete t.object.__r3f,o&&"primitive"!==t.type&&"Scene"!==t.object.type&&eE(t.object),void 0===n&&er(t)}let eS=[],eM=()=>{},e_={},ek=0,eO=function(e){let t=g()(e);return t.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:u.version}),t}({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:function(e,t,n){var r;return eg(e=em(e)in ev?e:e.replace(eh,""),t),"primitive"===e&&null!=(r=t.object)&&r.__r3f&&delete t.object.__r3f,Y(t.object,n,e,t)},removeChild:eP,appendChild:eC,appendInitialChild:eC,insertBefore:ex,appendChildToContainer(e,t){let n=e.getState().scene.__r3f;t&&n&&eC(n,t)},removeChildFromContainer(e,t){let n=e.getState().scene.__r3f;t&&n&&eP(n,t)},insertInContainerBefore(e,t,n){let r=e.getState().scene.__r3f;t&&n&&r&&ex(r,t,n)},getRootHostContext:()=>e_,getChildHostContext:()=>e_,commitUpdate(e,t,n,r,o){var i,l,a;eg(t,r);let s=!1;if("primitive"===e.type&&n.object!==r.object?s=!0:(null==(i=r.args)?void 0:i.length)!==(null==(l=n.args)?void 0:l.length)?s=!0:null!=(a=r.args)&&a.some((e,t)=>{var r;return e!==(null==(r=n.args)?void 0:r[t])})&&(s=!0),s)eS.push([e,{...r},o]);else{let t=function(e,t){let n={};for(let r in t)if(!Q.includes(r)&&!B.equ(t[r],e.props[r]))for(let e in n[r]=t[r],t)e.startsWith(`${r}-`)&&(n[e]=t[e]);for(let r in e.props){if(Q.includes(r)||t.hasOwnProperty(r))continue;let{root:o,key:i}=X(e.object,r);if(o.constructor&&0===o.constructor.length){let e=function(e){let t=J.get(e.constructor);try{t||(t=new e.constructor,J.set(e.constructor,t))}catch(e){}return t}(o);B.und(e)||(n[i]=e[i])}else n[i]=0}return n}(e,r);Object.keys(t).length&&(Object.assign(e.props,t),en(e.object,t))}(null===o.sibling||(4&o.flags)==0)&&function(){for(let[e]of eS){let t=e.parent;if(t)for(let n of(e.props.attach?K(t,e):eo(e.object)&&eo(t.object)&&t.object.remove(e.object),e.children))n.props.attach?K(e,n):eo(n.object)&&eo(e.object)&&e.object.remove(n.object);e.isHidden&&ew(e),e.object.__r3f&&delete e.object.__r3f,"primitive"!==e.type&&eE(e.object)}for(let[n,r,o]of eS){n.props=r;let i=n.parent;if(i){var e,t;let r=ev[em(n.type)];for(let l of(n.object=null!=(e=n.props.object)?e:new r(...null!=(t=n.props.args)?t:[]),n.object.__r3f=n,!function(e,t){for(let n of[e,e.alternate])if(null!==n){if("function"==typeof n.ref){null==n.refCleanup||n.refCleanup();let e=n.ref(t);"function"==typeof e&&(n.refCleanup=e)}else n.ref&&(n.ref.current=t)}}(o,n.object),en(n.object,n.props),n.props.attach?Z(i,n):eo(n.object)&&eo(i.object)&&i.object.add(n.object),n.children))l.props.attach?Z(n,l):eo(l.object)&&eo(n.object)&&n.object.add(l.object);er(n)}}eS.length=0}()},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:e=>null==e?void 0:e.object,prepareForCommit:()=>null,preparePortalMount:e=>Y(e.getState().scene,e,"",{}),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:function(e){if(!e.isHidden){var t;e.props.attach&&null!=(t=e.parent)&&t.object?K(e.parent,e):eo(e.object)&&(e.object.visible=!1),e.isHidden=!0,er(e)}},unhideInstance:ew,createTextInstance:eM,hideTextInstance:eM,unhideTextInstance:eM,scheduleTimeout:"function"==typeof setTimeout?setTimeout:void 0,cancelTimeout:"function"==typeof clearTimeout?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,startSuspendingCommit(){},suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:u.createContext(null),setCurrentUpdatePriority(e){ek=e},getCurrentUpdatePriority:()=>ek,resolveUpdatePriority(){var e;if(0!==ek)return ek;switch("undefined"!=typeof window&&(null==(e=window.event)?void 0:e.type)){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return f.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return f.ContinuousEventPriority;default:return f.DefaultEventPriority}},resetFormInstance(){}}),eT=new Map,eI={objects:"shallow",strict:!1};function eA({store:e,children:t,onCreated:n,rootElement:r}){return F(()=>{let t=e.getState();t.set(e=>({internal:{...e.internal,active:!0}})),n&&n(t),e.getState().events.connected||null==t.events.connect||t.events.connect(r)},[]),(0,_.jsx)(es.Provider,{value:e,children:t})}function eL(e,t){let n=eT.get(e),r=null==n?void 0:n.fiber;if(r){let o=null==n?void 0:n.store.getState();o&&(o.internal.active=!1),eO.updateContainer(null,r,null,()=>{o&&setTimeout(()=>{try{var n,r,i,l;null==o.events.disconnect||o.events.disconnect(),null==(n=o.gl)||null==(r=n.renderLists)||null==r.dispose||r.dispose(),null==(i=o.gl)||null==i.forceContextLoss||i.forceContextLoss(),null!=(l=o.gl)&&l.xr&&o.xr.disconnect(),function(e){for(let t in"Scene"!==e.type&&(null==e.dispose||e.dispose()),e){let n=e[t];(null==n?void 0:n.type)!=="Scene"&&(null==n||null==n.dispose||n.dispose())}}(o.scene),eT.delete(e),t&&t(e)}catch(e){}},500)})}}let ez=new Set,eR=new Set,eH=new Set;function eD(e,t){if(e.size)for(let{callback:n}of e.values())n(t)}function eq(e,t){switch(e){case"before":return eD(ez,t);case"after":return eD(eR,t);case"tail":return eD(eH,t)}}function eF(e,t,n){let i=t.clock.getDelta();"never"===t.frameloop&&"number"==typeof e&&(i=e-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=e),r=t.internal.subscribers;for(let e=0;e<r.length;e++)(o=r[e]).ref.current(o.store.getState(),i,n);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),"always"===t.frameloop?1:t.internal.frames}let eU=!1,e$=!1;function eN(e){for(let n of(l=requestAnimationFrame(eN),eU=!0,i=0,eq("before",e),e$=!0,eT.values())){var t;(a=n.store.getState()).internal.active&&("always"===a.frameloop||a.internal.frames>0)&&!(null!=(t=a.gl.xr)&&t.isPresenting)&&(i+=eF(e,a))}if(e$=!1,eq("after",e),0===i)return eq("tail",e),eU=!1,cancelAnimationFrame(l)}function eW(e,t=1){var n;if(!e)return eT.forEach(e=>eW(e.store.getState(),t));null!=(n=e.gl.xr)&&n.isPresenting||!e.internal.active||"never"===e.frameloop||(t>1?e.internal.frames=Math.min(60,e.internal.frames+t):e$?e.internal.frames=2:e.internal.frames=1,eU||(eU=!0,requestAnimationFrame(eN)))}function eB(e,t=!0,n,r){if(t&&eq("before",e),n)eF(e,n,r);else for(let t of eT.values())eF(e,t.store.getState());t&&eq("after",e)}let eV={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function eY(e){let{handlePointer:t}=function(e){function t(e){return e.filter(e=>["Move","Over","Enter","Out","Leave"].some(t=>{var n;return null==(n=e.__r3f)?void 0:n.handlers["onPointer"+t]}))}function n(t){let{internal:n}=e.getState();for(let e of n.hovered.values())if(!t.length||!t.find(t=>t.object===e.object&&t.index===e.index&&t.instanceId===e.instanceId)){let r=e.eventObject.__r3f;if(n.hovered.delete(ei(e)),null!=r&&r.eventCount){let n=r.handlers,o={...e,intersections:t};null==n.onPointerOut||n.onPointerOut(o),null==n.onPointerLeave||n.onPointerLeave(o)}}}function r(e,t){for(let n=0;n<t.length;n++){let r=t[n].__r3f;null==r||null==r.handlers.onPointerMissed||r.handlers.onPointerMissed(e)}}return{handlePointer:function(o){switch(o){case"onPointerLeave":case"onPointerCancel":return()=>n([]);case"onLostPointerCapture":return t=>{let{internal:r}=e.getState();"pointerId"in t&&r.capturedMap.has(t.pointerId)&&requestAnimationFrame(()=>{r.capturedMap.has(t.pointerId)&&(r.capturedMap.delete(t.pointerId),n([]))})}}return function(i){let{onPointerMissed:l,internal:a}=e.getState();a.lastEvent.current=i;let c="onPointerMove"===o,u="onClick"===o||"onContextMenu"===o||"onDoubleClick"===o,f=function(t,n){let r=e.getState(),o=new Set,i=[],l=n?n(r.internal.interaction):r.internal.interaction;for(let e=0;e<l.length;e++){let t=W(l[e]);t&&(t.raycaster.camera=void 0)}r.previousRoot||null==r.events.compute||r.events.compute(t,r);let a=l.flatMap(function(e){let n=W(e);if(!n||!n.events.enabled||null===n.raycaster.camera)return[];if(void 0===n.raycaster.camera){var r;null==n.events.compute||n.events.compute(t,n,null==(r=n.previousRoot)?void 0:r.getState()),void 0===n.raycaster.camera&&(n.raycaster.camera=null)}return n.raycaster.camera?n.raycaster.intersectObject(e,!0):[]}).sort((e,t)=>{let n=W(e.object),r=W(t.object);return n&&r&&r.events.priority-n.events.priority||e.distance-t.distance}).filter(e=>{let t=ei(e);return!o.has(t)&&(o.add(t),!0)});for(let e of(r.events.filter&&(a=r.events.filter(a,r)),a)){let t=e.object;for(;t;){var s;null!=(s=t.__r3f)&&s.eventCount&&i.push({...e,eventObject:t}),t=t.parent}}if("pointerId"in t&&r.internal.capturedMap.has(t.pointerId))for(let e of r.internal.capturedMap.get(t.pointerId).values())o.has(ei(e.intersection))||i.push(e.intersection);return i}(i,c?t:void 0),p=u?function(t){let{internal:n}=e.getState(),r=t.offsetX-n.initialClick[0],o=t.offsetY-n.initialClick[1];return Math.round(Math.sqrt(r*r+o*o))}(i):0;"onPointerDown"===o&&(a.initialClick=[i.offsetX,i.offsetY],a.initialHits=f.map(e=>e.eventObject)),u&&!f.length&&p<=2&&(r(i,a.interaction),l&&l(i)),c&&n(f),function(e,t,r,o){if(e.length){let i={stopped:!1};for(let l of e){let a=W(l.object);if(a||l.object.traverseAncestors(e=>{let t=W(e);if(t)return a=t,!1}),a){let{raycaster:c,pointer:u,camera:f,internal:p}=a,d=new s.Pq0(u.x,u.y,0).unproject(f),v=e=>{var t,n;return null!=(t=null==(n=p.capturedMap.get(e))?void 0:n.has(l.eventObject))&&t},h=e=>{let n={intersection:l,target:t.target};p.capturedMap.has(e)?p.capturedMap.get(e).set(l.eventObject,n):p.capturedMap.set(e,new Map([[l.eventObject,n]])),t.target.setPointerCapture(e)},m=e=>{let t=p.capturedMap.get(e);t&&el(p.capturedMap,l.eventObject,t,e)},b={};for(let e in t){let n=t[e];"function"!=typeof n&&(b[e]=n)}let y={...l,...b,pointer:u,intersections:e,stopped:i.stopped,delta:r,unprojectedPoint:d,ray:c.ray,camera:f,stopPropagation(){let r="pointerId"in t&&p.capturedMap.get(t.pointerId);(!r||r.has(l.eventObject))&&(y.stopped=i.stopped=!0,p.hovered.size&&Array.from(p.hovered.values()).find(e=>e.eventObject===l.eventObject)&&n([...e.slice(0,e.indexOf(l)),l]))},target:{hasPointerCapture:v,setPointerCapture:h,releasePointerCapture:m},currentTarget:{hasPointerCapture:v,setPointerCapture:h,releasePointerCapture:m},nativeEvent:t};if(o(y),!0===i.stopped)break}}}}(f,i,p,function(e){let t=e.eventObject,n=t.__r3f;if(!(null!=n&&n.eventCount))return;let l=n.handlers;if(c){if(l.onPointerOver||l.onPointerEnter||l.onPointerOut||l.onPointerLeave){let t=ei(e),n=a.hovered.get(t);n?n.stopped&&e.stopPropagation():(a.hovered.set(t,e),null==l.onPointerOver||l.onPointerOver(e),null==l.onPointerEnter||l.onPointerEnter(e))}null==l.onPointerMove||l.onPointerMove(e)}else{let n=l[o];n?(!u||a.initialHits.includes(t))&&(r(i,a.interaction.filter(e=>!a.initialHits.includes(e))),n(e)):u&&a.initialHits.includes(t)&&r(i,a.interaction.filter(e=>!a.initialHits.includes(e)))}})}}}}(e);return{priority:1,enabled:!0,compute(e,t,n){t.pointer.set(e.offsetX/t.size.width*2-1,-(2*(e.offsetY/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)},connected:void 0,handlers:Object.keys(eV).reduce((e,n)=>({...e,[n]:t(n)}),{}),update:()=>{var t;let{events:n,internal:r}=e.getState();null!=(t=r.lastEvent)&&t.current&&n.handlers&&n.handlers.onPointerMove(r.lastEvent.current)},connect:t=>{let{set:n,events:r}=e.getState();if(null==r.disconnect||r.disconnect(),n(e=>({events:{...e.events,connected:t}})),r.handlers)for(let e in r.handlers){let n=r.handlers[e],[o,i]=eV[e];t.addEventListener(o,n,{passive:i})}},disconnect:()=>{let{set:t,events:n}=e.getState();if(n.connected){if(n.handlers)for(let e in n.handlers){let t=n.handlers[e],[r]=eV[e];n.connected.removeEventListener(r,t)}t(e=>({events:{...e.events,connected:void 0}}))}}}}function eX(e,t){let n;return(...r)=>{window.clearTimeout(n),n=window.setTimeout(()=>e(...r),t)}}let eG=["x","y","top","bottom","left","right","width","height"],eZ=(e,t)=>eG.every(n=>e[n]===t[n]);function eK({ref:e,children:t,fallback:n,resize:r,style:o,gl:i,events:l=eY,eventSource:a,eventPrefix:p,shadows:d,linear:v,flat:h,legacy:m,orthographic:b,frameloop:y,dpr:g,performance:w,raycaster:j,camera:C,scene:x,onPointerMissed:E,onCreated:P,...S}){u.useMemo(()=>(function(e){if(ey(e)){let t=`${eb++}`;return ev[t]=e,t}Object.assign(ev,e)})(c),[]);let M=function(){let e=A(),t=function(){let e=function(){let e=A(),[t]=u.useState(()=>new Map);t.clear();let n=e;for(;n;){let e=n.type;z(e)&&e!==T&&!t.has(e)&&t.set(e,u.use(O(e))),n=n.return}return t}();return u.useMemo(()=>Array.from(e.keys()).reduce((t,n)=>r=>u.createElement(t,null,u.createElement(n.Provider,{...r,value:e.get(n)})),e=>u.createElement(I,{...e})),[e])}();return u.useMemo(()=>({children:n})=>{let r=k(e,!0,e=>e.type===u.StrictMode)?u.StrictMode:u.Fragment;return(0,_.jsx)(r,{children:(0,_.jsx)(t,{children:n})})},[e,t])}(),[L,R]=function({debounce:e,scroll:t,polyfill:n,offsetSize:r}={debounce:0,scroll:!1,offsetSize:!1}){var o;let i=n||("undefined"==typeof window?class{}:window.ResizeObserver);if(!i)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[l,a]=(0,u.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),s=(0,u.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:l,orientationHandler:null}),c=e?"number"==typeof e?e:e.scroll:null,f=e?"number"==typeof e?e:e.resize:null,p=(0,u.useRef)(!1);(0,u.useEffect)(()=>(p.current=!0,()=>void(p.current=!1)));let[d,v,h]=(0,u.useMemo)(()=>{let e=()=>{if(!s.current.element)return;let{left:e,top:t,width:n,height:o,bottom:i,right:l,x:c,y:u}=s.current.element.getBoundingClientRect(),f={left:e,top:t,width:n,height:o,bottom:i,right:l,x:c,y:u};s.current.element instanceof HTMLElement&&r&&(f.height=s.current.element.offsetHeight,f.width=s.current.element.offsetWidth),Object.freeze(f),p.current&&!eZ(s.current.lastBounds,f)&&a(s.current.lastBounds=f)};return[e,f?eX(e,f):e,c?eX(e,c):e]},[a,r,c,f]);function m(){s.current.scrollContainers&&(s.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",h,!0)),s.current.scrollContainers=null),s.current.resizeObserver&&(s.current.resizeObserver.disconnect(),s.current.resizeObserver=null),s.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",s.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",s.current.orientationHandler))}function b(){s.current.element&&(s.current.resizeObserver=new i(h),s.current.resizeObserver.observe(s.current.element),t&&s.current.scrollContainers&&s.current.scrollContainers.forEach(e=>e.addEventListener("scroll",h,{capture:!0,passive:!0})),s.current.orientationHandler=()=>{h()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",s.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",s.current.orientationHandler))}return o=!!t,(0,u.useEffect)(()=>{if(o)return window.addEventListener("scroll",h,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",h,!0)},[h,o]),(0,u.useEffect)(()=>(window.addEventListener("resize",v),()=>void window.removeEventListener("resize",v)),[v]),(0,u.useEffect)(()=>{m(),b()},[t,h,v]),(0,u.useEffect)(()=>m,[]),[e=>{e&&e!==s.current.element&&(m(),s.current.element=e,s.current.scrollContainers=function e(t){let n=[];if(!t||t===document.body)return n;let{overflow:r,overflowX:o,overflowY:i}=window.getComputedStyle(t);return[r,o,i].some(e=>"auto"===e||"scroll"===e)&&n.push(t),[...n,...e(t.parentElement)]}(e),b())},l,d]}({scroll:!0,debounce:{scroll:50,resize:0},...r}),H=u.useRef(null),q=u.useRef(null);u.useImperativeHandle(e,()=>H.current);let W=function(e){let t=u.useRef(e);return F(()=>void(t.current=e),[e]),t}(E),[V,X]=u.useState(!1),[G,Z]=u.useState(!1);if(V)throw V;if(G)throw G;let K=u.useRef(null);F(()=>{let e=H.current;R.width>0&&R.height>0&&e&&(K.current||(K.current=function(e){let t,n;let r=eT.get(e),o=null==r?void 0:r.fiber,i=null==r?void 0:r.store;r&&console.warn("R3F.createRoot should only be called once!");let l="function"==typeof reportError?reportError:console.error,a=i||ec(eW,eB),u=o||eO.createContainer(a,f.ConcurrentRoot,null,!1,null,"",l,l,l,null);r||eT.set(e,{fiber:u,store:a});let p=!1,d=null;return{async configure(r={}){var o,i;let l;d=new Promise(e=>l=e);let{gl:u,size:f,scene:v,events:h,onCreated:m,shadows:b=!1,linear:y=!1,flat:g=!1,legacy:w=!1,orthographic:j=!1,frameloop:C="always",dpr:x=[1,2],performance:E,raycaster:P,camera:S,onPointerMissed:M}=r,_=a.getState(),k=_.gl;if(!_.gl){let t={canvas:e,powerPreference:"high-performance",antialias:!0,alpha:!0},n="function"==typeof u?await u(t):u;k=ea(n)?n:new c.WebGLRenderer({...t,...u}),_.set({gl:k})}let O=_.raycaster;O||_.set({raycaster:O=new s.tBo});let{params:T,...I}=P||{};if(B.equ(I,O,eI)||en(O,{...I}),B.equ(T,O.params,eI)||en(O,{params:{...O.params,...T}}),!_.camera||_.camera===n&&!B.equ(n,S,eI)){n=S;let e=null==S?void 0:S.isCamera,t=e?S:j?new s.qUd(0,0,0,0,.1,1e3):new s.ubm(75,0,.1,1e3);e||(t.position.z=5,S&&(en(t,S),!t.manual&&("aspect"in S||"left"in S||"right"in S||"bottom"in S||"top"in S)&&(t.manual=!0,t.updateProjectionMatrix())),_.camera||null!=S&&S.rotation||t.lookAt(0,0,0)),_.set({camera:t}),O.camera=t}if(!_.scene){let e;null!=v&&v.isScene?Y(e=v,a,"",{}):(Y(e=new s.Z58,a,"",{}),v&&en(e,v)),_.set({scene:e})}h&&!_.events.handlers&&_.set({events:h(a)});let A=function(e,t){if(!t&&"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement&&e.parentElement){let{width:t,height:n,top:r,left:o}=e.parentElement.getBoundingClientRect();return{width:t,height:n,top:r,left:o}}return!t&&"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas?{width:e.width,height:e.height,top:0,left:0}:{width:0,height:0,top:0,left:0,...t}}(e,f);if(B.equ(A,_.size,eI)||_.setSize(A.width,A.height,A.top,A.left),x&&_.viewport.dpr!==N(x)&&_.setDpr(x),_.frameloop!==C&&_.setFrameloop(C),_.onPointerMissed||_.set({onPointerMissed:M}),E&&!B.equ(E,_.performance,eI)&&_.set(e=>({performance:{...e.performance,...E}})),!_.xr){let e=(e,t)=>{let n=a.getState();"never"!==n.frameloop&&eB(e,!0,n,t)},t=()=>{let t=a.getState();t.gl.xr.enabled=t.gl.xr.isPresenting,t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting?e:null),t.gl.xr.isPresenting||eW(t)},n={connect(){let e=a.getState().gl;e.xr.addEventListener("sessionstart",t),e.xr.addEventListener("sessionend",t)},disconnect(){let e=a.getState().gl;e.xr.removeEventListener("sessionstart",t),e.xr.removeEventListener("sessionend",t)}};"function"==typeof(null==(o=k.xr)?void 0:o.addEventListener)&&n.connect(),_.set({xr:n})}if(k.shadowMap){let e=k.shadowMap.enabled,t=k.shadowMap.type;if(k.shadowMap.enabled=!!b,B.boo(b))k.shadowMap.type=s.Wk7;else if(B.str(b)){let e={basic:s.bTm,percentage:s.QP0,soft:s.Wk7,variance:s.RyA};k.shadowMap.type=null!=(i=e[b])?i:s.Wk7}else B.obj(b)&&Object.assign(k.shadowMap,b);(e!==k.shadowMap.enabled||t!==k.shadowMap.type)&&(k.shadowMap.needsUpdate=!0)}return s.ppV.enabled=!w,p||(k.outputColorSpace=y?s.Zr2:s.er$,k.toneMapping=g?s.y_p:s.FV),_.legacy!==w&&_.set(()=>({legacy:w})),_.linear!==y&&_.set(()=>({linear:y})),_.flat!==g&&_.set(()=>({flat:g})),!u||B.fun(u)||ea(u)||B.equ(u,k,eI)||en(k,u),t=m,p=!0,l(),this},render(n){return p||d||this.configure(),d.then(()=>{eO.updateContainer((0,_.jsx)(eA,{store:a,children:n,onCreated:t,rootElement:e}),u,null,()=>void 0)}),a},unmount(){eL(e)}}}(e)),async function(){await K.current.configure({gl:i,scene:x,events:l,shadows:d,linear:v,flat:h,legacy:m,orthographic:b,frameloop:y,dpr:g,performance:w,raycaster:j,camera:C,size:R,onPointerMissed:(...e)=>null==W.current?void 0:W.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(a?D(a)?a.current:a:q.current),p&&e.setEvents({compute:(e,t)=>{let n=e[p+"X"],r=e[p+"Y"];t.pointer.set(n/t.size.width*2-1,-(2*(r/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==P||P(e)}}),K.current.render((0,_.jsx)(M,{children:(0,_.jsx)($,{set:Z,children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(U,{set:X}),children:null!=t?t:null})})}))}())}),u.useEffect(()=>{let e=H.current;if(e)return()=>eL(e)},[]);let Q=a?"none":"auto";return(0,_.jsx)("div",{ref:q,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:Q,...o},...S,children:(0,_.jsx)("div",{ref:L,style:{width:"100%",height:"100%"},children:(0,_.jsx)("canvas",{ref:H,style:{display:"block"},children:n})})})}function eQ(e){return(0,_.jsx)(I,{children:(0,_.jsx)(eK,{...e})})}},7077:(e,t)=>{t.ConcurrentRoot=1,t.ContinuousEventPriority=8,t.DefaultEventPriority=32,t.DiscreteEventPriority=2},6188:(e,t,n)=>{e.exports=n(7077)},5193:(e,t,n)=>{e.exports=n(2733)},3177:(e,t)=>{function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<i(o,t))e[r]=t,e[n]=o,n=r;else break}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,l=o>>>1;r<l;){var a=2*(r+1)-1,s=e[a],c=a+1,u=e[c];if(0>i(s,n))c<o&&0>i(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[a]=n,r=a);else if(c<o&&0>i(u,n))e[r]=u,e[c]=n,r=c;else break}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,c=s.now();t.unstable_now=function(){return s.now()-c}}var u=[],f=[],p=1,d=null,v=3,h=!1,m=!1,b=!1,y="function"==typeof setTimeout?setTimeout:null,g="function"==typeof clearTimeout?clearTimeout:null,w="undefined"!=typeof setImmediate?setImmediate:null;function j(e){for(var t=r(f);null!==t;){if(null===t.callback)o(f);else if(t.startTime<=e)o(f),t.sortIndex=t.expirationTime,n(u,t);else break;t=r(f)}}function C(e){if(b=!1,j(e),!m){if(null!==r(u))m=!0,T();else{var t=r(f);null!==t&&I(C,t.startTime-e)}}}var x=!1,E=-1,P=5,S=-1;function M(){return!(t.unstable_now()-S<P)}function _(){if(x){var e=t.unstable_now();S=e;var n=!0;try{e:{m=!1,b&&(b=!1,g(E),E=-1),h=!0;var i=v;try{t:{for(j(e),d=r(u);null!==d&&!(d.expirationTime>e&&M());){var a=d.callback;if("function"==typeof a){d.callback=null,v=d.priorityLevel;var s=a(d.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof s){d.callback=s,j(e),n=!0;break t}d===r(u)&&o(u),j(e)}else o(u);d=r(u)}if(null!==d)n=!0;else{var c=r(f);null!==c&&I(C,c.startTime-e),n=!1}}break e}finally{d=null,v=i,h=!1}n=void 0}}finally{n?l():x=!1}}}if("function"==typeof w)l=function(){w(_)};else if("undefined"!=typeof MessageChannel){var k=new MessageChannel,O=k.port2;k.port1.onmessage=_,l=function(){O.postMessage(null)}}else l=function(){y(_,0)};function T(){x||(x=!0,l())}function I(e,n){E=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,T())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(v){case 1:case 2:case 3:var t=3;break;default:t=v}var n=v;v=t;try{return e()}finally{v=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=v;v=e;try{return t()}finally{v=n}},t.unstable_scheduleCallback=function(e,o,i){var l=t.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?l+i:l,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=0x3fffffff;break;case 4:a=1e4;break;default:a=5e3}return a=i+a,e={id:p++,callback:o,priorityLevel:e,startTime:i,expirationTime:a,sortIndex:-1},i>l?(e.sortIndex=i,n(f,e),null===r(u)&&e===r(f)&&(b?(g(E),E=-1):b=!0,I(C,i-l))):(e.sortIndex=a,n(u,e),m||h||(m=!0,T())),e},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(e){var t=v;return function(){var n=v;v=t;try{return e.apply(this,arguments)}finally{v=n}}}},6703:(e,t,n)=>{e.exports=n(3177)},3027:(e,t,n)=>{var r=n(2115),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,l=r.useEffect,a=r.useLayoutEffect,s=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,u=r[1];return a(function(){o.value=n,o.getSnapshot=t,c(o)&&u({inst:o})},[e,n,t]),l(function(){return c(o)&&u({inst:o}),e(function(){c(o)&&u({inst:o})})},[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},4564:(e,t,n)=>{var r=n(2115),o=n(4236),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=o.useSyncExternalStore,a=r.useRef,s=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var f=a(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;var d=l(e,(f=c(function(){function e(e){if(!s){if(s=!0,l=e,e=r(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return a=t}return a=e}if(t=a,i(l,e))return t;var n=r(e);return void 0!==o&&o(t,n)?(l=e,t):(l=e,a=n)}var l,a,s=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,o]))[0],f[1]);return s(function(){p.hasValue=!0,p.value=d},[d]),u(d),d}},4236:(e,t,n)=>{e.exports=n(3027)},8010:(e,t,n)=>{e.exports=n(4564)}}]);