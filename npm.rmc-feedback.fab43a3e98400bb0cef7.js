(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{uJlo:function(e,t,n){"use strict";var o=n("QbLZ"),i=n.n(o),s=n("iCc5"),c=n.n(s),u=n("V7oC"),a=n.n(u),r=n("FYw3"),h=n.n(r),v=n("mRg0"),p=n.n(v),l=n("q1tI"),d=n.n(l),g=n("TSYQ"),f=n.n(g),T=function(e){function t(){c()(this,t);var e=h()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(t){e.triggerEvent("TouchStart",!0,t)},e.onTouchMove=function(t){e.triggerEvent("TouchMove",!1,t)},e.onTouchEnd=function(t){e.triggerEvent("TouchEnd",!1,t)},e.onTouchCancel=function(t){e.triggerEvent("TouchCancel",!1,t)},e.onMouseDown=function(t){e.triggerEvent("MouseDown",!0,t)},e.onMouseUp=function(t){e.triggerEvent("MouseUp",!1,t)},e.onMouseLeave=function(t){e.triggerEvent("MouseLeave",!1,t)},e}return p()(t,e),a()(t,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,t,n){var o="on"+e,i=this.props.children;i.props[o]&&i.props[o](n),t!==this.state.active&&this.setState({active:t})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.disabled,o=e.activeClassName,s=e.activeStyle,c=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},u=d.a.Children.only(t);if(!n&&this.state.active){var a=u.props,r=a.style,h=a.className;return!1!==s&&(s&&(r=i()({},r,s)),h=f()(h,o)),d.a.cloneElement(u,i()({className:h,style:r},c))}return d.a.cloneElement(u,c)}}]),t}(d.a.Component),M=T;T.defaultProps={disabled:!1},n.d(t,"a",function(){return M})}}]);