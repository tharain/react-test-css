(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"+/oj":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getVendorPrefixes=i,t.getVendorPrefixedEventName=l,t.getTransitionName=function(e,t){if(!e)return null;if("object"==typeof e){var n=t.replace(/-\w/g,function(e){return e[1].toUpperCase()});return e[n]}return e+"-"+t};var a=!("undefined"==typeof window||!window.document||!window.document.createElement);function o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}function i(e,t){var n={animationend:o("Animation","AnimationEnd"),transitionend:o("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete n.animationend.animation,"TransitionEvent"in t||delete n.transitionend.transition),n}var r=i(a,"undefined"!=typeof window?window:{}),s={};a&&(s=document.createElement("div").style);var u={};function l(e){if(u[e])return u[e];var t=r[e];if(t)for(var n=Object.keys(t),a=n.length,o=0;o<a;o+=1){var i=n[o];if(Object.prototype.hasOwnProperty.call(t,i)&&i in s)return u[e]=t[i],u[e]}return""}var c=t.animationEndName=l("animationend"),p=t.transitionEndName=l("transitionend");t.supportTransition=!(!c||!p)},"0F8K":function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"d",function(){return v}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return m});var a=!("undefined"==typeof window||!window.document||!window.document.createElement);function o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}var i,r,s,u=(i=a,r="undefined"!=typeof window?window:{},s={animationend:o("Animation","AnimationEnd"),transitionend:o("Transition","TransitionEnd")},i&&("AnimationEvent"in r||delete s.animationend.animation,"TransitionEvent"in r||delete s.transitionend.transition),s),l={};a&&(l=document.createElement("div").style);var c={};function p(e){if(c[e])return c[e];var t=u[e];if(t)for(var n=Object.keys(t),a=n.length,o=0;o<a;o+=1){var i=n[o];if(Object.prototype.hasOwnProperty.call(t,i)&&i in l)return c[e]=t[i],c[e]}return""}var f=p("animationend"),v=p("transitionend"),d=!(!f||!v);function m(e,t){return e?"object"==typeof e?e[t.replace(/-\w/g,function(e){return e[1].toUpperCase()})]:e+"-"+t:null}},JUMm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(n("YEIV")),o=y(n("QbLZ")),i=y(n("iCc5")),r=y(n("V7oC")),s=y(n("FYw3")),u=y(n("mRg0"));t.genCSSMotion=L;var l=y(n("q1tI")),c=y(n("i8i4")),p=y(n("17x9")),f=n("VCL8"),v=y(n("TSYQ")),d=y(n("xEkU")),m=n("+/oj");function y(e){return e&&e.__esModule?e:{default:e}}var h="none",E="appear",k="enter",A="leave";function L(e){function t(t){return!(!t.motionName||!e)}var n=function(e){function n(){(0,i.default)(this,n);var e=(0,s.default)(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.onDomUpdate=function(){var n=e.state,a=n.status,o=n.newStatus,i=e.props,r=i.onAppearStart,s=i.onEnterStart,u=i.onLeaveStart,l=i.onAppearActive,p=i.onEnterActive,f=i.onLeaveActive,v=i.motionAppear,d=i.motionEnter,m=i.motionLeave;if(t(e.props)){var y=c.default.findDOMNode(e);e.$ele!==y&&(e.removeEventListener(e.$ele),e.addEventListener(y),e.$ele=y),o&&a===E&&v?e.updateStatus(r,null,null,function(){e.updateActiveStatus(l,E)}):o&&a===k&&d?e.updateStatus(s,null,null,function(){e.updateActiveStatus(p,k)}):o&&a===A&&m&&e.updateStatus(u,null,null,function(){e.updateActiveStatus(f,A)})}},e.onMotionEnd=function(t){var n=e.state,a=n.status,o=n.statusActive,i=e.props,r=i.onAppearEnd,s=i.onEnterEnd,u=i.onLeaveEnd;a===E&&o?e.updateStatus(r,{status:h},t):a===k&&o?e.updateStatus(s,{status:h},t):a===A&&o&&e.updateStatus(u,{status:h},t)},e.addEventListener=function(t){t&&(t.addEventListener(m.transitionEndName,e.onMotionEnd),t.addEventListener(m.animationEndName,e.onMotionEnd))},e.removeEventListener=function(t){t&&(t.removeEventListener(m.transitionEndName,e.onMotionEnd),t.removeEventListener(m.animationEndName,e.onMotionEnd))},e.updateStatus=function(t,n,a,i){var r=t?t(c.default.findDOMNode(e),a):null;if(!1!==r&&!e._destroyed){var s=void 0;i&&(s=function(){e.nextFrame(i)}),e.setState((0,o.default)({statusStyle:"object"==typeof r?r:null,newStatus:!1},n),s)}},e.updateActiveStatus=function(t,n){e.nextFrame(function(){e.state.status===n&&e.updateStatus(t,{statusActive:!0})})},e.nextFrame=function(t){e.cancelNextFrame(),e.raf=(0,d.default)(t)},e.cancelNextFrame=function(){e.raf&&(d.default.cancel(e.raf),e.raf=null)},e.state={status:h,statusActive:!1,newStatus:!1,statusStyle:null},e.$ele=null,e.raf=null,e}return(0,u.default)(n,e),(0,r.default)(n,[{key:"componentDidMount",value:function(){this.onDomUpdate()}},{key:"componentDidUpdate",value:function(){this.onDomUpdate()}},{key:"componentWillUnmount",value:function(){this._destroyed=!0,this.removeEventListener(this.$ele),this.cancelNextFrame()}},{key:"render",value:function(){var e,n=this.state,i=n.status,r=n.statusActive,s=n.statusStyle,u=this.props,l=u.children,c=u.motionName,p=u.visible,f=u.removeOnLeave,d=u.leavedClassName,y=u.eventProps;return l?i!==h&&t(this.props)?l((0,o.default)({},y,{className:(0,v.default)((e={},(0,a.default)(e,(0,m.getTransitionName)(c,i),i!==h),(0,a.default)(e,(0,m.getTransitionName)(c,i+"-active"),i!==h&&r),(0,a.default)(e,c,"string"==typeof c),e)),style:s})):p?l((0,o.default)({},y)):f?null:l((0,o.default)({},y,{className:d})):null}}],[{key:"getDerivedStateFromProps",value:function(e,n){var a=n.prevProps;if(!t(e))return{};var o=e.visible,i=e.motionAppear,r=e.motionEnter,s=e.motionLeave,u=e.motionLeaveImmediately,l={prevProps:e};return!a&&o&&i&&(l.status=E,l.statusActive=!1,l.newStatus=!0),a&&!a.visible&&o&&r&&(l.status=k,l.statusActive=!1,l.newStatus=!0),(a&&a.visible&&!o&&s||!a&&u&&!o&&s)&&(l.status=A,l.statusActive=!1,l.newStatus=!0),l}}]),n}(l.default.Component);return n.propTypes={eventProps:p.default.object,visible:p.default.bool,children:p.default.func,motionName:p.default.oneOfType([p.default.string,p.default.object]),motionAppear:p.default.bool,motionEnter:p.default.bool,motionLeave:p.default.bool,motionLeaveImmediately:p.default.bool,removeOnLeave:p.default.bool,leavedClassName:p.default.string,onAppearStart:p.default.func,onAppearActive:p.default.func,onAppearEnd:p.default.func,onEnterStart:p.default.func,onEnterActive:p.default.func,onEnterEnd:p.default.func,onLeaveStart:p.default.func,onLeaveActive:p.default.func,onLeaveEnd:p.default.func},n.defaultProps={visible:!0,motionEnter:!0,motionAppear:!0,motionLeave:!0,removeOnLeave:!0},(0,f.polyfill)(n),n}t.default=L(m.supportTransition)},MFj2:function(e,t,n){"use strict";n.r(t);var a=n("QbLZ"),o=n.n(a),i=n("YEIV"),r=n.n(i),s=n("iCc5"),u=n.n(s),l=n("V7oC"),c=n.n(l),p=n("FYw3"),f=n.n(p),v=n("mRg0"),d=n.n(v),m=n("q1tI"),y=n.n(m),h=n("17x9"),E=n.n(h);function k(e){var t=[];return y.a.Children.forEach(e,function(e){t.push(e)}),t}function A(e,t){var n=null;return e&&e.forEach(function(e){n||e&&e.key===t&&(n=e)}),n}function L(e,t,n){var a=null;return e&&e.forEach(function(e){if(e&&e.key===t&&e.props[n]){if(a)throw new Error("two child with same key for <rc-animate> children");a=e}}),a}var b=n("i8i4"),S=n.n(b),w=n("J9Du"),g={isAppearSupported:function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},isEnterSupported:function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},isLeaveSupported:function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},allowAppearCallback:function(e){return e.transitionAppear||e.animation.appear},allowEnterCallback:function(e){return e.transitionEnter||e.animation.enter},allowLeaveCallback:function(e){return e.transitionLeave||e.animation.leave}},N={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},O=function(e){function t(){return u()(this,t),f()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d()(t,e),c()(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){g.isEnterSupported(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){g.isAppearSupported(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){g.isLeaveSupported(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,t){var n=this,a=S.a.findDOMNode(this),o=this.props,i=o.transitionName,r="object"==typeof i;this.stop();var s=function(){n.stopper=null,t()};if((w.isCssAnimationSupported||!o.animation[e])&&i&&o[N[e]]){var u=r?i[e]:i+"-"+e,l=u+"-active";r&&i[e+"Active"]&&(l=i[e+"Active"]),this.stopper=Object(w.default)(a,{name:u,active:l},s)}else this.stopper=o.animation[e](a,s)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(y.a.Component);O.propTypes={children:E.a.any};var C=O,P="rc_animate_"+Date.now();function j(e){var t=e.children;return y.a.isValidElement(t)&&!t.key?y.a.cloneElement(t,{key:P}):t}function T(){}var _=function(e){function t(e){u()(this,t);var n=f()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return x.call(n),n.currentlyAnimatingKeys={},n.keysToEnter=[],n.keysToLeave=[],n.state={children:k(j(e))},n.childrenRefs={},n}return d()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter(function(e){return!!e.props[t]})),n.forEach(function(t){t&&e.performAppear(t.key)})}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.nextProps=e;var n=k(j(e)),a=this.props;a.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach(function(e){t.stop(e)});var o,i,s,u,l=a.showProp,c=this.currentlyAnimatingKeys,p=a.exclusive?k(j(a)):this.state.children,f=[];l?(p.forEach(function(e){var t=e&&A(n,e.key),a=void 0;(a=t&&t.props[l]||!e.props[l]?t:y.a.cloneElement(t||e,r()({},l,!0)))&&f.push(a)}),n.forEach(function(e){e&&A(p,e.key)||f.push(e)})):(o=n,i=[],s={},u=[],p.forEach(function(e){e&&A(o,e.key)?u.length&&(s[e.key]=u,u=[]):u.push(e)}),o.forEach(function(e){e&&Object.prototype.hasOwnProperty.call(s,e.key)&&(i=i.concat(s[e.key])),i.push(e)}),f=i=i.concat(u)),this.setState({children:f}),n.forEach(function(e){var n=e&&e.key;if(!e||!c[n]){var a=e&&A(p,n);if(l){var o=e.props[l];if(a)!L(p,n,l)&&o&&t.keysToEnter.push(n);else o&&t.keysToEnter.push(n)}else a||t.keysToEnter.push(n)}}),p.forEach(function(e){var a=e&&e.key;if(!e||!c[a]){var o=e&&A(n,a);if(l){var i=e.props[l];if(o)!L(n,a,l)&&i&&t.keysToLeave.push(a);else i&&t.keysToLeave.push(a)}else o||t.keysToLeave.push(a)}})}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?L(e,t,n):A(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop()}},{key:"render",value:function(){var e=this,t=this.props;this.nextProps=t;var n=this.state.children,a=null;n&&(a=n.map(function(n){if(null==n)return n;if(!n.key)throw new Error("must set key for <rc-animate> children");return y.a.createElement(C,{key:n.key,ref:function(t){e.childrenRefs[n.key]=t},animation:t.animation,transitionName:t.transitionName,transitionEnter:t.transitionEnter,transitionAppear:t.transitionAppear,transitionLeave:t.transitionLeave},n)}));var i=t.component;if(i){var r=t;return"string"==typeof i&&(r=o()({className:t.className,style:t.style},t.componentProps)),y.a.createElement(i,r,a)}return a[0]||null}}]),t}(y.a.Component);_.isAnimate=!0,_.propTypes={component:E.a.any,componentProps:E.a.object,animation:E.a.object,transitionName:E.a.oneOfType([E.a.string,E.a.object]),transitionEnter:E.a.bool,transitionAppear:E.a.bool,exclusive:E.a.bool,transitionLeave:E.a.bool,onEnd:E.a.func,onEnter:E.a.func,onLeave:E.a.func,onAppear:E.a.func,showProp:E.a.string,children:E.a.node},_.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:T,onEnter:T,onLeave:T,onAppear:T};var x=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")))},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")))},this.handleDoneAdding=function(t,n){var a=e.props;if(delete e.currentlyAnimatingKeys[t],!a.exclusive||a===e.nextProps){var o=k(j(a));e.isValidChildByKey(o,t)?"appear"===n?g.allowAppearCallback(a)&&(a.onAppear(t),a.onEnd(t,!0)):g.allowEnterCallback(a)&&(a.onEnter(t),a.onEnd(t,!0)):e.performLeave(t)}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)))},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var a,o,i,r,s=k(j(n));if(e.isValidChildByKey(s,t))e.performEnter(t);else{var u=function(){g.allowLeaveCallback(n)&&(n.onLeave(t),n.onEnd(t,!1))};a=e.state.children,o=s,i=n.showProp,(r=a.length===o.length)&&a.forEach(function(e,t){var n=o[t];e&&n&&(e&&!n||!e&&n?r=!1:e.key!==n.key?r=!1:i&&e.props[i]!==n.props[i]&&(r=!1))}),r?u():e.setState({children:s},u)}}}};t.default=_},lCnp:function(e,t,n){"use strict";var a=n("YEIV"),o=n.n(a),i=n("QbLZ"),r=n.n(i),s=n("iCc5"),u=n.n(s),l=n("V7oC"),c=n.n(l),p=n("FYw3"),f=n.n(p),v=n("mRg0"),d=n.n(v),m=n("q1tI"),y=n.n(m),h=n("i8i4"),E=n.n(h),k=n("17x9"),A=n.n(k),L=n("VCL8"),b=n("TSYQ"),S=n.n(b),w=n("xEkU"),g=n.n(w),N=n("0F8K"),O="none",C="appear",P="enter",j="leave";t.a=function(e){function t(t){return!(!t.motionName||!e)}var n=function(e){function n(){u()(this,n);var e=f()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.onDomUpdate=function(){var n=e.state,a=n.status,o=n.newStatus,i=e.props,r=i.onAppearStart,s=i.onEnterStart,u=i.onLeaveStart,l=i.onAppearActive,c=i.onEnterActive,p=i.onLeaveActive,f=i.motionAppear,v=i.motionEnter,d=i.motionLeave;if(t(e.props)){var m=E.a.findDOMNode(e);e.$ele!==m&&(e.removeEventListener(e.$ele),e.addEventListener(m),e.$ele=m),o&&a===C&&f?e.updateStatus(r,null,null,function(){e.updateActiveStatus(l,C)}):o&&a===P&&v?e.updateStatus(s,null,null,function(){e.updateActiveStatus(c,P)}):o&&a===j&&d&&e.updateStatus(u,null,null,function(){e.updateActiveStatus(p,j)})}},e.onMotionEnd=function(t){var n=e.state,a=n.status,o=n.statusActive,i=e.props,r=i.onAppearEnd,s=i.onEnterEnd,u=i.onLeaveEnd;a===C&&o?e.updateStatus(r,{status:O},t):a===P&&o?e.updateStatus(s,{status:O},t):a===j&&o&&e.updateStatus(u,{status:O},t)},e.addEventListener=function(t){t&&(t.addEventListener(N.d,e.onMotionEnd),t.addEventListener(N.a,e.onMotionEnd))},e.removeEventListener=function(t){t&&(t.removeEventListener(N.d,e.onMotionEnd),t.removeEventListener(N.a,e.onMotionEnd))},e.updateStatus=function(t,n,a,o){var i=t?t(E.a.findDOMNode(e),a):null;if(!1!==i&&!e._destroyed){var s=void 0;o&&(s=function(){e.nextFrame(o)}),e.setState(r()({statusStyle:"object"==typeof i?i:null,newStatus:!1},n),s)}},e.updateActiveStatus=function(t,n){e.nextFrame(function(){e.state.status===n&&e.updateStatus(t,{statusActive:!0})})},e.nextFrame=function(t){e.cancelNextFrame(),e.raf=g()(t)},e.cancelNextFrame=function(){e.raf&&(g.a.cancel(e.raf),e.raf=null)},e.state={status:O,statusActive:!1,newStatus:!1,statusStyle:null},e.$ele=null,e.raf=null,e}return d()(n,e),c()(n,[{key:"componentDidMount",value:function(){this.onDomUpdate()}},{key:"componentDidUpdate",value:function(){this.onDomUpdate()}},{key:"componentWillUnmount",value:function(){this._destroyed=!0,this.removeEventListener(this.$ele),this.cancelNextFrame()}},{key:"render",value:function(){var e,n=this.state,a=n.status,i=n.statusActive,s=n.statusStyle,u=this.props,l=u.children,c=u.motionName,p=u.visible,f=u.removeOnLeave,v=u.leavedClassName,d=u.eventProps;return l?a!==O&&t(this.props)?l(r()({},d,{className:S()((e={},o()(e,Object(N.b)(c,a),a!==O),o()(e,Object(N.b)(c,a+"-active"),a!==O&&i),o()(e,c,"string"==typeof c),e)),style:s})):p?l(r()({},d)):f?null:l(r()({},d,{className:v})):null}}],[{key:"getDerivedStateFromProps",value:function(e,n){var a=n.prevProps;if(!t(e))return{};var o=e.visible,i=e.motionAppear,r=e.motionEnter,s=e.motionLeave,u=e.motionLeaveImmediately,l={prevProps:e};return!a&&o&&i&&(l.status=C,l.statusActive=!1,l.newStatus=!0),a&&!a.visible&&o&&r&&(l.status=P,l.statusActive=!1,l.newStatus=!0),(a&&a.visible&&!o&&s||!a&&u&&!o&&s)&&(l.status=j,l.statusActive=!1,l.newStatus=!0),l}}]),n}(y.a.Component);return n.propTypes={eventProps:A.a.object,visible:A.a.bool,children:A.a.func,motionName:A.a.oneOfType([A.a.string,A.a.object]),motionAppear:A.a.bool,motionEnter:A.a.bool,motionLeave:A.a.bool,motionLeaveImmediately:A.a.bool,removeOnLeave:A.a.bool,leavedClassName:A.a.string,onAppearStart:A.a.func,onAppearActive:A.a.func,onAppearEnd:A.a.func,onEnterStart:A.a.func,onEnterActive:A.a.func,onEnterEnd:A.a.func,onLeaveStart:A.a.func,onLeaveActive:A.a.func,onLeaveEnd:A.a.func},n.defaultProps={visible:!0,motionEnter:!0,motionAppear:!0,motionLeave:!0,removeOnLeave:!0},Object(L.polyfill)(n),n}(N.c)},nclK:function(e,t,n){"use strict";var a=n("jo6Y"),o=n.n(a),i=n("QbLZ"),r=n.n(i),s=n("iCc5"),u=n.n(s),l=n("V7oC"),c=n.n(l),p=n("FYw3"),f=n.n(p),v=n("mRg0"),d=n.n(v),m=n("q1tI"),y=n.n(m),h=n("VCL8"),E=n("17x9"),k=n.n(E),A=n("lCnp"),L=n("0F8K"),b="add",S="keep",w="remove",g="removed";function N(e){return e&&"object"==typeof e&&"key"in e?e:{key:e}}function O(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(N)}var C=Object.keys(A.a.propTypes);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A.a,n=function(n){function a(){var e,t,n,o;u()(this,a);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return t=n=f()(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(s))),n.state={keyEntities:[]},n.removeKey=function(e){n.setState(function(t){return{keyEntities:t.keyEntities.map(function(t){return t.key!==e?t:r()({},t,{status:g})})}})},o=t,f()(n,o)}return d()(a,n),c()(a,[{key:"render",value:function(){var e=this,n=this.state.keyEntities,a=this.props,i=a.component,s=a.children,u=o()(a,["component","children"]),l={};return C.forEach(function(e){l[e]=u[e],delete u[e]}),delete u.keys,y.a.createElement(i,u,n.map(function(n){var a=n.status,i=o()(n,["status"]),u=a===b||a===S;return y.a.createElement(t,r()({},l,{key:i.key,visible:u,eventProps:i,onLeaveEnd:function(){l.onLeaveEnd&&l.onLeaveEnd.apply(l,arguments),e.removeKey(i.key)}}),s)}))}}],[{key:"getDerivedStateFromProps",value:function(t,n){var a=t.keys,o=n.keyEntities,i=O(a);if(!e)return{keyEntities:i.map(function(e){return r()({},e,{status:S})})};var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],a=0,o=t.length,i=O(e),s=O(t);i.forEach(function(e){for(var t=!1,i=a;i<o;i+=1){var u=s[i];if(u.key===e.key){a<i&&(n=n.concat(s.slice(a,i).map(function(e){return r()({},e,{status:b})})),a=i),n.push(r()({},u,{status:S})),a+=1,t=!0;break}}t||n.push(r()({},e,{status:w}))}),a<o&&(n=n.concat(s.slice(a).map(function(e){return r()({},e,{status:b})})));var u={};return n.forEach(function(e){var t=e.key;u[t]=(u[t]||0)+1}),Object.keys(u).filter(function(e){return u[e]>1}).forEach(function(e){(n=n.filter(function(t){var n=t.key,a=t.status;return n!==e||a!==w})).forEach(function(t){t.key===e&&(t.status=S)})}),n}(o,i),u=o.length;return{keyEntities:s.filter(function(e){for(var t=null,n=0;n<u;n+=1){var a=o[n];if(a.key===e.key){t=a;break}}return!t||t.status!==g||e.status!==w})}}}]),a}(y.a.Component);return n.propTypes=r()({},t.propTypes,{component:k.a.string,keys:k.a.array}),n.defaultProps={component:"div"},Object(h.polyfill)(n),n}(L.c)}}]);