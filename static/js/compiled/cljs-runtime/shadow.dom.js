goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_67365 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_67365(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_67367 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_67367(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__66171 = coll;
var G__66172 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__66171,G__66172) : shadow.dom.lazy_native_coll_seq.call(null,G__66171,G__66172));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__66262 = arguments.length;
switch (G__66262) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__66275 = arguments.length;
switch (G__66275) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__66278 = arguments.length;
switch (G__66278) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__66283 = arguments.length;
switch (G__66283) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__66310 = arguments.length;
switch (G__66310) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__66350 = arguments.length;
switch (G__66350) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e66387){if((e66387 instanceof Object)){
var e = e66387;
return console.log("didnt support attachEvent",el,e);
} else {
throw e66387;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__66405 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__66406 = null;
var count__66407 = (0);
var i__66408 = (0);
while(true){
if((i__66408 < count__66407)){
var el = chunk__66406.cljs$core$IIndexed$_nth$arity$2(null,i__66408);
var handler_67377__$1 = ((function (seq__66405,chunk__66406,count__66407,i__66408,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__66405,chunk__66406,count__66407,i__66408,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_67377__$1);


var G__67380 = seq__66405;
var G__67381 = chunk__66406;
var G__67382 = count__66407;
var G__67383 = (i__66408 + (1));
seq__66405 = G__67380;
chunk__66406 = G__67381;
count__66407 = G__67382;
i__66408 = G__67383;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66405);
if(temp__5735__auto__){
var seq__66405__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66405__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66405__$1);
var G__67384 = cljs.core.chunk_rest(seq__66405__$1);
var G__67385 = c__4556__auto__;
var G__67386 = cljs.core.count(c__4556__auto__);
var G__67387 = (0);
seq__66405 = G__67384;
chunk__66406 = G__67385;
count__66407 = G__67386;
i__66408 = G__67387;
continue;
} else {
var el = cljs.core.first(seq__66405__$1);
var handler_67388__$1 = ((function (seq__66405,chunk__66406,count__66407,i__66408,el,seq__66405__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__66405,chunk__66406,count__66407,i__66408,el,seq__66405__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_67388__$1);


var G__67389 = cljs.core.next(seq__66405__$1);
var G__67390 = null;
var G__67391 = (0);
var G__67392 = (0);
seq__66405 = G__67389;
chunk__66406 = G__67390;
count__66407 = G__67391;
i__66408 = G__67392;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__66423 = arguments.length;
switch (G__66423) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__66426 = cljs.core.seq(events);
var chunk__66427 = null;
var count__66428 = (0);
var i__66429 = (0);
while(true){
if((i__66429 < count__66428)){
var vec__66457 = chunk__66427.cljs$core$IIndexed$_nth$arity$2(null,i__66429);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66457,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__67396 = seq__66426;
var G__67397 = chunk__66427;
var G__67398 = count__66428;
var G__67399 = (i__66429 + (1));
seq__66426 = G__67396;
chunk__66427 = G__67397;
count__66428 = G__67398;
i__66429 = G__67399;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66426);
if(temp__5735__auto__){
var seq__66426__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66426__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66426__$1);
var G__67400 = cljs.core.chunk_rest(seq__66426__$1);
var G__67401 = c__4556__auto__;
var G__67402 = cljs.core.count(c__4556__auto__);
var G__67403 = (0);
seq__66426 = G__67400;
chunk__66427 = G__67401;
count__66428 = G__67402;
i__66429 = G__67403;
continue;
} else {
var vec__66463 = cljs.core.first(seq__66426__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66463,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__67404 = cljs.core.next(seq__66426__$1);
var G__67405 = null;
var G__67406 = (0);
var G__67407 = (0);
seq__66426 = G__67404;
chunk__66427 = G__67405;
count__66428 = G__67406;
i__66429 = G__67407;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__66473 = cljs.core.seq(styles);
var chunk__66474 = null;
var count__66475 = (0);
var i__66476 = (0);
while(true){
if((i__66476 < count__66475)){
var vec__66502 = chunk__66474.cljs$core$IIndexed$_nth$arity$2(null,i__66476);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66502,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66502,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__67409 = seq__66473;
var G__67410 = chunk__66474;
var G__67411 = count__66475;
var G__67412 = (i__66476 + (1));
seq__66473 = G__67409;
chunk__66474 = G__67410;
count__66475 = G__67411;
i__66476 = G__67412;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66473);
if(temp__5735__auto__){
var seq__66473__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66473__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66473__$1);
var G__67413 = cljs.core.chunk_rest(seq__66473__$1);
var G__67414 = c__4556__auto__;
var G__67415 = cljs.core.count(c__4556__auto__);
var G__67416 = (0);
seq__66473 = G__67413;
chunk__66474 = G__67414;
count__66475 = G__67415;
i__66476 = G__67416;
continue;
} else {
var vec__66510 = cljs.core.first(seq__66473__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66510,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66510,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__67417 = cljs.core.next(seq__66473__$1);
var G__67418 = null;
var G__67419 = (0);
var G__67420 = (0);
seq__66473 = G__67417;
chunk__66474 = G__67418;
count__66475 = G__67419;
i__66476 = G__67420;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__66518_67422 = key;
var G__66518_67423__$1 = (((G__66518_67422 instanceof cljs.core.Keyword))?G__66518_67422.fqn:null);
switch (G__66518_67423__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_67425 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_67425,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_67425,"aria-");
}
})())){
el.setAttribute(ks_67425,value);
} else {
(el[ks_67425] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__66570){
var map__66573 = p__66570;
var map__66573__$1 = (((((!((map__66573 == null))))?(((((map__66573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66573):map__66573);
var props = map__66573__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__66580 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66580,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66580,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66580,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__66589 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__66589,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__66589;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__66594 = arguments.length;
switch (G__66594) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__66601){
var vec__66603 = p__66601;
var seq__66604 = cljs.core.seq(vec__66603);
var first__66605 = cljs.core.first(seq__66604);
var seq__66604__$1 = cljs.core.next(seq__66604);
var nn = first__66605;
var first__66605__$1 = cljs.core.first(seq__66604__$1);
var seq__66604__$2 = cljs.core.next(seq__66604__$1);
var np = first__66605__$1;
var nc = seq__66604__$2;
var node = vec__66603;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__66608 = nn;
var G__66609 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__66608,G__66609) : create_fn.call(null,G__66608,G__66609));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__66616 = nn;
var G__66617 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__66616,G__66617) : create_fn.call(null,G__66616,G__66617));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__66622 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66622,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66622,(1),null);
var seq__66625_67436 = cljs.core.seq(node_children);
var chunk__66626_67437 = null;
var count__66627_67438 = (0);
var i__66628_67439 = (0);
while(true){
if((i__66628_67439 < count__66627_67438)){
var child_struct_67440 = chunk__66626_67437.cljs$core$IIndexed$_nth$arity$2(null,i__66628_67439);
var children_67441 = shadow.dom.dom_node(child_struct_67440);
if(cljs.core.seq_QMARK_(children_67441)){
var seq__66679_67442 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_67441));
var chunk__66681_67443 = null;
var count__66682_67444 = (0);
var i__66683_67445 = (0);
while(true){
if((i__66683_67445 < count__66682_67444)){
var child_67446 = chunk__66681_67443.cljs$core$IIndexed$_nth$arity$2(null,i__66683_67445);
if(cljs.core.truth_(child_67446)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67446);


var G__67447 = seq__66679_67442;
var G__67448 = chunk__66681_67443;
var G__67449 = count__66682_67444;
var G__67450 = (i__66683_67445 + (1));
seq__66679_67442 = G__67447;
chunk__66681_67443 = G__67448;
count__66682_67444 = G__67449;
i__66683_67445 = G__67450;
continue;
} else {
var G__67451 = seq__66679_67442;
var G__67452 = chunk__66681_67443;
var G__67453 = count__66682_67444;
var G__67454 = (i__66683_67445 + (1));
seq__66679_67442 = G__67451;
chunk__66681_67443 = G__67452;
count__66682_67444 = G__67453;
i__66683_67445 = G__67454;
continue;
}
} else {
var temp__5735__auto___67455 = cljs.core.seq(seq__66679_67442);
if(temp__5735__auto___67455){
var seq__66679_67456__$1 = temp__5735__auto___67455;
if(cljs.core.chunked_seq_QMARK_(seq__66679_67456__$1)){
var c__4556__auto___67457 = cljs.core.chunk_first(seq__66679_67456__$1);
var G__67458 = cljs.core.chunk_rest(seq__66679_67456__$1);
var G__67459 = c__4556__auto___67457;
var G__67460 = cljs.core.count(c__4556__auto___67457);
var G__67461 = (0);
seq__66679_67442 = G__67458;
chunk__66681_67443 = G__67459;
count__66682_67444 = G__67460;
i__66683_67445 = G__67461;
continue;
} else {
var child_67462 = cljs.core.first(seq__66679_67456__$1);
if(cljs.core.truth_(child_67462)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67462);


var G__67463 = cljs.core.next(seq__66679_67456__$1);
var G__67464 = null;
var G__67465 = (0);
var G__67466 = (0);
seq__66679_67442 = G__67463;
chunk__66681_67443 = G__67464;
count__66682_67444 = G__67465;
i__66683_67445 = G__67466;
continue;
} else {
var G__67467 = cljs.core.next(seq__66679_67456__$1);
var G__67468 = null;
var G__67469 = (0);
var G__67470 = (0);
seq__66679_67442 = G__67467;
chunk__66681_67443 = G__67468;
count__66682_67444 = G__67469;
i__66683_67445 = G__67470;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_67441);
}


var G__67471 = seq__66625_67436;
var G__67472 = chunk__66626_67437;
var G__67473 = count__66627_67438;
var G__67474 = (i__66628_67439 + (1));
seq__66625_67436 = G__67471;
chunk__66626_67437 = G__67472;
count__66627_67438 = G__67473;
i__66628_67439 = G__67474;
continue;
} else {
var temp__5735__auto___67476 = cljs.core.seq(seq__66625_67436);
if(temp__5735__auto___67476){
var seq__66625_67477__$1 = temp__5735__auto___67476;
if(cljs.core.chunked_seq_QMARK_(seq__66625_67477__$1)){
var c__4556__auto___67478 = cljs.core.chunk_first(seq__66625_67477__$1);
var G__67479 = cljs.core.chunk_rest(seq__66625_67477__$1);
var G__67480 = c__4556__auto___67478;
var G__67481 = cljs.core.count(c__4556__auto___67478);
var G__67482 = (0);
seq__66625_67436 = G__67479;
chunk__66626_67437 = G__67480;
count__66627_67438 = G__67481;
i__66628_67439 = G__67482;
continue;
} else {
var child_struct_67483 = cljs.core.first(seq__66625_67477__$1);
var children_67484 = shadow.dom.dom_node(child_struct_67483);
if(cljs.core.seq_QMARK_(children_67484)){
var seq__66702_67485 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_67484));
var chunk__66704_67486 = null;
var count__66705_67487 = (0);
var i__66706_67488 = (0);
while(true){
if((i__66706_67488 < count__66705_67487)){
var child_67490 = chunk__66704_67486.cljs$core$IIndexed$_nth$arity$2(null,i__66706_67488);
if(cljs.core.truth_(child_67490)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67490);


var G__67491 = seq__66702_67485;
var G__67492 = chunk__66704_67486;
var G__67493 = count__66705_67487;
var G__67494 = (i__66706_67488 + (1));
seq__66702_67485 = G__67491;
chunk__66704_67486 = G__67492;
count__66705_67487 = G__67493;
i__66706_67488 = G__67494;
continue;
} else {
var G__67495 = seq__66702_67485;
var G__67496 = chunk__66704_67486;
var G__67497 = count__66705_67487;
var G__67498 = (i__66706_67488 + (1));
seq__66702_67485 = G__67495;
chunk__66704_67486 = G__67496;
count__66705_67487 = G__67497;
i__66706_67488 = G__67498;
continue;
}
} else {
var temp__5735__auto___67500__$1 = cljs.core.seq(seq__66702_67485);
if(temp__5735__auto___67500__$1){
var seq__66702_67501__$1 = temp__5735__auto___67500__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66702_67501__$1)){
var c__4556__auto___67502 = cljs.core.chunk_first(seq__66702_67501__$1);
var G__67503 = cljs.core.chunk_rest(seq__66702_67501__$1);
var G__67504 = c__4556__auto___67502;
var G__67505 = cljs.core.count(c__4556__auto___67502);
var G__67506 = (0);
seq__66702_67485 = G__67503;
chunk__66704_67486 = G__67504;
count__66705_67487 = G__67505;
i__66706_67488 = G__67506;
continue;
} else {
var child_67507 = cljs.core.first(seq__66702_67501__$1);
if(cljs.core.truth_(child_67507)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67507);


var G__67508 = cljs.core.next(seq__66702_67501__$1);
var G__67509 = null;
var G__67510 = (0);
var G__67511 = (0);
seq__66702_67485 = G__67508;
chunk__66704_67486 = G__67509;
count__66705_67487 = G__67510;
i__66706_67488 = G__67511;
continue;
} else {
var G__67512 = cljs.core.next(seq__66702_67501__$1);
var G__67513 = null;
var G__67514 = (0);
var G__67515 = (0);
seq__66702_67485 = G__67512;
chunk__66704_67486 = G__67513;
count__66705_67487 = G__67514;
i__66706_67488 = G__67515;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_67484);
}


var G__67516 = cljs.core.next(seq__66625_67477__$1);
var G__67517 = null;
var G__67518 = (0);
var G__67519 = (0);
seq__66625_67436 = G__67516;
chunk__66626_67437 = G__67517;
count__66627_67438 = G__67518;
i__66628_67439 = G__67519;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__66838 = cljs.core.seq(node);
var chunk__66839 = null;
var count__66840 = (0);
var i__66841 = (0);
while(true){
if((i__66841 < count__66840)){
var n = chunk__66839.cljs$core$IIndexed$_nth$arity$2(null,i__66841);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__67521 = seq__66838;
var G__67522 = chunk__66839;
var G__67523 = count__66840;
var G__67524 = (i__66841 + (1));
seq__66838 = G__67521;
chunk__66839 = G__67522;
count__66840 = G__67523;
i__66841 = G__67524;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66838);
if(temp__5735__auto__){
var seq__66838__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66838__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66838__$1);
var G__67525 = cljs.core.chunk_rest(seq__66838__$1);
var G__67526 = c__4556__auto__;
var G__67527 = cljs.core.count(c__4556__auto__);
var G__67528 = (0);
seq__66838 = G__67525;
chunk__66839 = G__67526;
count__66840 = G__67527;
i__66841 = G__67528;
continue;
} else {
var n = cljs.core.first(seq__66838__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__67529 = cljs.core.next(seq__66838__$1);
var G__67530 = null;
var G__67531 = (0);
var G__67532 = (0);
seq__66838 = G__67529;
chunk__66839 = G__67530;
count__66840 = G__67531;
i__66841 = G__67532;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__66849 = arguments.length;
switch (G__66849) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__66861 = arguments.length;
switch (G__66861) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__66863 = arguments.length;
switch (G__66863) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67538 = arguments.length;
var i__4737__auto___67539 = (0);
while(true){
if((i__4737__auto___67539 < len__4736__auto___67538)){
args__4742__auto__.push((arguments[i__4737__auto___67539]));

var G__67542 = (i__4737__auto___67539 + (1));
i__4737__auto___67539 = G__67542;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__66865_67543 = cljs.core.seq(nodes);
var chunk__66866_67544 = null;
var count__66867_67545 = (0);
var i__66868_67546 = (0);
while(true){
if((i__66868_67546 < count__66867_67545)){
var node_67547 = chunk__66866_67544.cljs$core$IIndexed$_nth$arity$2(null,i__66868_67546);
fragment.appendChild(shadow.dom._to_dom(node_67547));


var G__67548 = seq__66865_67543;
var G__67549 = chunk__66866_67544;
var G__67550 = count__66867_67545;
var G__67551 = (i__66868_67546 + (1));
seq__66865_67543 = G__67548;
chunk__66866_67544 = G__67549;
count__66867_67545 = G__67550;
i__66868_67546 = G__67551;
continue;
} else {
var temp__5735__auto___67552 = cljs.core.seq(seq__66865_67543);
if(temp__5735__auto___67552){
var seq__66865_67553__$1 = temp__5735__auto___67552;
if(cljs.core.chunked_seq_QMARK_(seq__66865_67553__$1)){
var c__4556__auto___67554 = cljs.core.chunk_first(seq__66865_67553__$1);
var G__67555 = cljs.core.chunk_rest(seq__66865_67553__$1);
var G__67556 = c__4556__auto___67554;
var G__67557 = cljs.core.count(c__4556__auto___67554);
var G__67558 = (0);
seq__66865_67543 = G__67555;
chunk__66866_67544 = G__67556;
count__66867_67545 = G__67557;
i__66868_67546 = G__67558;
continue;
} else {
var node_67559 = cljs.core.first(seq__66865_67553__$1);
fragment.appendChild(shadow.dom._to_dom(node_67559));


var G__67560 = cljs.core.next(seq__66865_67553__$1);
var G__67561 = null;
var G__67562 = (0);
var G__67563 = (0);
seq__66865_67543 = G__67560;
chunk__66866_67544 = G__67561;
count__66867_67545 = G__67562;
i__66868_67546 = G__67563;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq66864){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66864));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__66869_67565 = cljs.core.seq(scripts);
var chunk__66870_67566 = null;
var count__66871_67567 = (0);
var i__66872_67568 = (0);
while(true){
if((i__66872_67568 < count__66871_67567)){
var vec__66881_67570 = chunk__66870_67566.cljs$core$IIndexed$_nth$arity$2(null,i__66872_67568);
var script_tag_67571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66881_67570,(0),null);
var script_body_67572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66881_67570,(1),null);
eval(script_body_67572);


var G__67574 = seq__66869_67565;
var G__67575 = chunk__66870_67566;
var G__67576 = count__66871_67567;
var G__67577 = (i__66872_67568 + (1));
seq__66869_67565 = G__67574;
chunk__66870_67566 = G__67575;
count__66871_67567 = G__67576;
i__66872_67568 = G__67577;
continue;
} else {
var temp__5735__auto___67578 = cljs.core.seq(seq__66869_67565);
if(temp__5735__auto___67578){
var seq__66869_67579__$1 = temp__5735__auto___67578;
if(cljs.core.chunked_seq_QMARK_(seq__66869_67579__$1)){
var c__4556__auto___67580 = cljs.core.chunk_first(seq__66869_67579__$1);
var G__67581 = cljs.core.chunk_rest(seq__66869_67579__$1);
var G__67582 = c__4556__auto___67580;
var G__67583 = cljs.core.count(c__4556__auto___67580);
var G__67584 = (0);
seq__66869_67565 = G__67581;
chunk__66870_67566 = G__67582;
count__66871_67567 = G__67583;
i__66872_67568 = G__67584;
continue;
} else {
var vec__66884_67585 = cljs.core.first(seq__66869_67579__$1);
var script_tag_67586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66884_67585,(0),null);
var script_body_67587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66884_67585,(1),null);
eval(script_body_67587);


var G__67589 = cljs.core.next(seq__66869_67579__$1);
var G__67590 = null;
var G__67591 = (0);
var G__67592 = (0);
seq__66869_67565 = G__67589;
chunk__66870_67566 = G__67590;
count__66871_67567 = G__67591;
i__66872_67568 = G__67592;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__66887){
var vec__66888 = p__66887;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66888,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66888,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__66894 = arguments.length;
switch (G__66894) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__66899 = cljs.core.seq(style_keys);
var chunk__66900 = null;
var count__66901 = (0);
var i__66902 = (0);
while(true){
if((i__66902 < count__66901)){
var it = chunk__66900.cljs$core$IIndexed$_nth$arity$2(null,i__66902);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__67598 = seq__66899;
var G__67599 = chunk__66900;
var G__67600 = count__66901;
var G__67601 = (i__66902 + (1));
seq__66899 = G__67598;
chunk__66900 = G__67599;
count__66901 = G__67600;
i__66902 = G__67601;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66899);
if(temp__5735__auto__){
var seq__66899__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66899__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66899__$1);
var G__67602 = cljs.core.chunk_rest(seq__66899__$1);
var G__67603 = c__4556__auto__;
var G__67604 = cljs.core.count(c__4556__auto__);
var G__67605 = (0);
seq__66899 = G__67602;
chunk__66900 = G__67603;
count__66901 = G__67604;
i__66902 = G__67605;
continue;
} else {
var it = cljs.core.first(seq__66899__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__67606 = cljs.core.next(seq__66899__$1);
var G__67607 = null;
var G__67608 = (0);
var G__67609 = (0);
seq__66899 = G__67606;
chunk__66900 = G__67607;
count__66901 = G__67608;
i__66902 = G__67609;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k66905,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__66909 = k66905;
var G__66909__$1 = (((G__66909 instanceof cljs.core.Keyword))?G__66909.fqn:null);
switch (G__66909__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66905,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__66910){
var vec__66911 = p__66910;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66911,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66911,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66904){
var self__ = this;
var G__66904__$1 = this;
return (new cljs.core.RecordIter((0),G__66904__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66906,other66907){
var self__ = this;
var this66906__$1 = this;
return (((!((other66907 == null)))) && ((this66906__$1.constructor === other66907.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66906__$1.x,other66907.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66906__$1.y,other66907.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66906__$1.__extmap,other66907.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__66904){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__66932 = cljs.core.keyword_identical_QMARK_;
var expr__66933 = k__4388__auto__;
if(cljs.core.truth_((pred__66932.cljs$core$IFn$_invoke$arity$2 ? pred__66932.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__66933) : pred__66932.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__66933)))){
return (new shadow.dom.Coordinate(G__66904,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66932.cljs$core$IFn$_invoke$arity$2 ? pred__66932.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__66933) : pred__66932.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__66933)))){
return (new shadow.dom.Coordinate(self__.x,G__66904,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__66904),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__66904){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__66904,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__66908){
var extmap__4419__auto__ = (function (){var G__66940 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66908,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__66908)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66940);
} else {
return G__66940;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__66908),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__66908),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k66946,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__66951 = k66946;
var G__66951__$1 = (((G__66951 instanceof cljs.core.Keyword))?G__66951.fqn:null);
switch (G__66951__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66946,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__66952){
var vec__66953 = p__66952;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66953,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66953,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66945){
var self__ = this;
var G__66945__$1 = this;
return (new cljs.core.RecordIter((0),G__66945__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66947,other66948){
var self__ = this;
var this66947__$1 = this;
return (((!((other66948 == null)))) && ((this66947__$1.constructor === other66948.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66947__$1.w,other66948.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66947__$1.h,other66948.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66947__$1.__extmap,other66948.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__66945){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__66972 = cljs.core.keyword_identical_QMARK_;
var expr__66973 = k__4388__auto__;
if(cljs.core.truth_((pred__66972.cljs$core$IFn$_invoke$arity$2 ? pred__66972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__66973) : pred__66972.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__66973)))){
return (new shadow.dom.Size(G__66945,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66972.cljs$core$IFn$_invoke$arity$2 ? pred__66972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__66973) : pred__66972.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__66973)))){
return (new shadow.dom.Size(self__.w,G__66945,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__66945),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__66945){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__66945,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__66950){
var extmap__4419__auto__ = (function (){var G__66982 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66950,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__66950)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66982);
} else {
return G__66982;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__66950),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__66950),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__67613 = (i + (1));
var G__67614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__67613;
ret = G__67614;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67038){
var vec__67039 = p__67038;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67039,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67039,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__67054 = arguments.length;
switch (G__67054) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__67625 = ps;
var G__67626 = (i + (1));
el__$1 = G__67625;
i = G__67626;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__67094 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67094,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67094,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67094,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__67104_67631 = cljs.core.seq(props);
var chunk__67105_67632 = null;
var count__67106_67633 = (0);
var i__67107_67634 = (0);
while(true){
if((i__67107_67634 < count__67106_67633)){
var vec__67116_67635 = chunk__67105_67632.cljs$core$IIndexed$_nth$arity$2(null,i__67107_67634);
var k_67636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67116_67635,(0),null);
var v_67637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67116_67635,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_67636);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_67636),v_67637);


var G__67638 = seq__67104_67631;
var G__67640 = chunk__67105_67632;
var G__67641 = count__67106_67633;
var G__67642 = (i__67107_67634 + (1));
seq__67104_67631 = G__67638;
chunk__67105_67632 = G__67640;
count__67106_67633 = G__67641;
i__67107_67634 = G__67642;
continue;
} else {
var temp__5735__auto___67643 = cljs.core.seq(seq__67104_67631);
if(temp__5735__auto___67643){
var seq__67104_67644__$1 = temp__5735__auto___67643;
if(cljs.core.chunked_seq_QMARK_(seq__67104_67644__$1)){
var c__4556__auto___67645 = cljs.core.chunk_first(seq__67104_67644__$1);
var G__67646 = cljs.core.chunk_rest(seq__67104_67644__$1);
var G__67647 = c__4556__auto___67645;
var G__67648 = cljs.core.count(c__4556__auto___67645);
var G__67649 = (0);
seq__67104_67631 = G__67646;
chunk__67105_67632 = G__67647;
count__67106_67633 = G__67648;
i__67107_67634 = G__67649;
continue;
} else {
var vec__67119_67650 = cljs.core.first(seq__67104_67644__$1);
var k_67651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67119_67650,(0),null);
var v_67652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67119_67650,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_67651);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_67651),v_67652);


var G__67653 = cljs.core.next(seq__67104_67644__$1);
var G__67654 = null;
var G__67655 = (0);
var G__67656 = (0);
seq__67104_67631 = G__67653;
chunk__67105_67632 = G__67654;
count__67106_67633 = G__67655;
i__67107_67634 = G__67656;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__67128 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67128,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67128,(1),null);
var seq__67131_67658 = cljs.core.seq(node_children);
var chunk__67133_67659 = null;
var count__67134_67660 = (0);
var i__67135_67661 = (0);
while(true){
if((i__67135_67661 < count__67134_67660)){
var child_struct_67662 = chunk__67133_67659.cljs$core$IIndexed$_nth$arity$2(null,i__67135_67661);
if((!((child_struct_67662 == null)))){
if(typeof child_struct_67662 === 'string'){
var text_67663 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_67663),child_struct_67662].join(''));
} else {
var children_67665 = shadow.dom.svg_node(child_struct_67662);
if(cljs.core.seq_QMARK_(children_67665)){
var seq__67174_67666 = cljs.core.seq(children_67665);
var chunk__67176_67667 = null;
var count__67177_67668 = (0);
var i__67178_67669 = (0);
while(true){
if((i__67178_67669 < count__67177_67668)){
var child_67670 = chunk__67176_67667.cljs$core$IIndexed$_nth$arity$2(null,i__67178_67669);
if(cljs.core.truth_(child_67670)){
node.appendChild(child_67670);


var G__67671 = seq__67174_67666;
var G__67672 = chunk__67176_67667;
var G__67673 = count__67177_67668;
var G__67674 = (i__67178_67669 + (1));
seq__67174_67666 = G__67671;
chunk__67176_67667 = G__67672;
count__67177_67668 = G__67673;
i__67178_67669 = G__67674;
continue;
} else {
var G__67675 = seq__67174_67666;
var G__67676 = chunk__67176_67667;
var G__67677 = count__67177_67668;
var G__67678 = (i__67178_67669 + (1));
seq__67174_67666 = G__67675;
chunk__67176_67667 = G__67676;
count__67177_67668 = G__67677;
i__67178_67669 = G__67678;
continue;
}
} else {
var temp__5735__auto___67679 = cljs.core.seq(seq__67174_67666);
if(temp__5735__auto___67679){
var seq__67174_67680__$1 = temp__5735__auto___67679;
if(cljs.core.chunked_seq_QMARK_(seq__67174_67680__$1)){
var c__4556__auto___67681 = cljs.core.chunk_first(seq__67174_67680__$1);
var G__67682 = cljs.core.chunk_rest(seq__67174_67680__$1);
var G__67683 = c__4556__auto___67681;
var G__67684 = cljs.core.count(c__4556__auto___67681);
var G__67685 = (0);
seq__67174_67666 = G__67682;
chunk__67176_67667 = G__67683;
count__67177_67668 = G__67684;
i__67178_67669 = G__67685;
continue;
} else {
var child_67686 = cljs.core.first(seq__67174_67680__$1);
if(cljs.core.truth_(child_67686)){
node.appendChild(child_67686);


var G__67687 = cljs.core.next(seq__67174_67680__$1);
var G__67688 = null;
var G__67689 = (0);
var G__67690 = (0);
seq__67174_67666 = G__67687;
chunk__67176_67667 = G__67688;
count__67177_67668 = G__67689;
i__67178_67669 = G__67690;
continue;
} else {
var G__67691 = cljs.core.next(seq__67174_67680__$1);
var G__67692 = null;
var G__67693 = (0);
var G__67694 = (0);
seq__67174_67666 = G__67691;
chunk__67176_67667 = G__67692;
count__67177_67668 = G__67693;
i__67178_67669 = G__67694;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_67665);
}
}


var G__67695 = seq__67131_67658;
var G__67696 = chunk__67133_67659;
var G__67697 = count__67134_67660;
var G__67698 = (i__67135_67661 + (1));
seq__67131_67658 = G__67695;
chunk__67133_67659 = G__67696;
count__67134_67660 = G__67697;
i__67135_67661 = G__67698;
continue;
} else {
var G__67699 = seq__67131_67658;
var G__67700 = chunk__67133_67659;
var G__67701 = count__67134_67660;
var G__67702 = (i__67135_67661 + (1));
seq__67131_67658 = G__67699;
chunk__67133_67659 = G__67700;
count__67134_67660 = G__67701;
i__67135_67661 = G__67702;
continue;
}
} else {
var temp__5735__auto___67703 = cljs.core.seq(seq__67131_67658);
if(temp__5735__auto___67703){
var seq__67131_67704__$1 = temp__5735__auto___67703;
if(cljs.core.chunked_seq_QMARK_(seq__67131_67704__$1)){
var c__4556__auto___67705 = cljs.core.chunk_first(seq__67131_67704__$1);
var G__67706 = cljs.core.chunk_rest(seq__67131_67704__$1);
var G__67707 = c__4556__auto___67705;
var G__67708 = cljs.core.count(c__4556__auto___67705);
var G__67709 = (0);
seq__67131_67658 = G__67706;
chunk__67133_67659 = G__67707;
count__67134_67660 = G__67708;
i__67135_67661 = G__67709;
continue;
} else {
var child_struct_67710 = cljs.core.first(seq__67131_67704__$1);
if((!((child_struct_67710 == null)))){
if(typeof child_struct_67710 === 'string'){
var text_67711 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_67711),child_struct_67710].join(''));
} else {
var children_67712 = shadow.dom.svg_node(child_struct_67710);
if(cljs.core.seq_QMARK_(children_67712)){
var seq__67199_67715 = cljs.core.seq(children_67712);
var chunk__67201_67716 = null;
var count__67202_67717 = (0);
var i__67203_67718 = (0);
while(true){
if((i__67203_67718 < count__67202_67717)){
var child_67719 = chunk__67201_67716.cljs$core$IIndexed$_nth$arity$2(null,i__67203_67718);
if(cljs.core.truth_(child_67719)){
node.appendChild(child_67719);


var G__67720 = seq__67199_67715;
var G__67721 = chunk__67201_67716;
var G__67722 = count__67202_67717;
var G__67723 = (i__67203_67718 + (1));
seq__67199_67715 = G__67720;
chunk__67201_67716 = G__67721;
count__67202_67717 = G__67722;
i__67203_67718 = G__67723;
continue;
} else {
var G__67724 = seq__67199_67715;
var G__67725 = chunk__67201_67716;
var G__67726 = count__67202_67717;
var G__67727 = (i__67203_67718 + (1));
seq__67199_67715 = G__67724;
chunk__67201_67716 = G__67725;
count__67202_67717 = G__67726;
i__67203_67718 = G__67727;
continue;
}
} else {
var temp__5735__auto___67728__$1 = cljs.core.seq(seq__67199_67715);
if(temp__5735__auto___67728__$1){
var seq__67199_67729__$1 = temp__5735__auto___67728__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67199_67729__$1)){
var c__4556__auto___67730 = cljs.core.chunk_first(seq__67199_67729__$1);
var G__67731 = cljs.core.chunk_rest(seq__67199_67729__$1);
var G__67732 = c__4556__auto___67730;
var G__67733 = cljs.core.count(c__4556__auto___67730);
var G__67734 = (0);
seq__67199_67715 = G__67731;
chunk__67201_67716 = G__67732;
count__67202_67717 = G__67733;
i__67203_67718 = G__67734;
continue;
} else {
var child_67735 = cljs.core.first(seq__67199_67729__$1);
if(cljs.core.truth_(child_67735)){
node.appendChild(child_67735);


var G__67736 = cljs.core.next(seq__67199_67729__$1);
var G__67737 = null;
var G__67738 = (0);
var G__67739 = (0);
seq__67199_67715 = G__67736;
chunk__67201_67716 = G__67737;
count__67202_67717 = G__67738;
i__67203_67718 = G__67739;
continue;
} else {
var G__67740 = cljs.core.next(seq__67199_67729__$1);
var G__67741 = null;
var G__67742 = (0);
var G__67743 = (0);
seq__67199_67715 = G__67740;
chunk__67201_67716 = G__67741;
count__67202_67717 = G__67742;
i__67203_67718 = G__67743;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_67712);
}
}


var G__67744 = cljs.core.next(seq__67131_67704__$1);
var G__67745 = null;
var G__67746 = (0);
var G__67747 = (0);
seq__67131_67658 = G__67744;
chunk__67133_67659 = G__67745;
count__67134_67660 = G__67746;
i__67135_67661 = G__67747;
continue;
} else {
var G__67748 = cljs.core.next(seq__67131_67704__$1);
var G__67749 = null;
var G__67750 = (0);
var G__67751 = (0);
seq__67131_67658 = G__67748;
chunk__67133_67659 = G__67749;
count__67134_67660 = G__67750;
i__67135_67661 = G__67751;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67753 = arguments.length;
var i__4737__auto___67754 = (0);
while(true){
if((i__4737__auto___67754 < len__4736__auto___67753)){
args__4742__auto__.push((arguments[i__4737__auto___67754]));

var G__67755 = (i__4737__auto___67754 + (1));
i__4737__auto___67754 = G__67755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq67245){
var G__67252 = cljs.core.first(seq67245);
var seq67245__$1 = cljs.core.next(seq67245);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67252,seq67245__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__67277 = arguments.length;
switch (G__67277) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__63830__auto___67762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_67304){
var state_val_67306 = (state_67304[(1)]);
if((state_val_67306 === (1))){
var state_67304__$1 = state_67304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67304__$1,(2),once_or_cleanup);
} else {
if((state_val_67306 === (2))){
var inst_67301 = (state_67304[(2)]);
var inst_67302 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_67304__$1 = (function (){var statearr_67308 = state_67304;
(statearr_67308[(7)] = inst_67301);

return statearr_67308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67304__$1,inst_67302);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__63609__auto__ = null;
var shadow$dom$state_machine__63609__auto____0 = (function (){
var statearr_67310 = [null,null,null,null,null,null,null,null];
(statearr_67310[(0)] = shadow$dom$state_machine__63609__auto__);

(statearr_67310[(1)] = (1));

return statearr_67310;
});
var shadow$dom$state_machine__63609__auto____1 = (function (state_67304){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_67304);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e67313){var ex__63612__auto__ = e67313;
var statearr_67314_67772 = state_67304;
(statearr_67314_67772[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_67304[(4)]))){
var statearr_67328_67773 = state_67304;
(statearr_67328_67773[(1)] = cljs.core.first((state_67304[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67774 = state_67304;
state_67304 = G__67774;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
shadow$dom$state_machine__63609__auto__ = function(state_67304){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__63609__auto____0.call(this);
case 1:
return shadow$dom$state_machine__63609__auto____1.call(this,state_67304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__63609__auto____0;
shadow$dom$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__63609__auto____1;
return shadow$dom$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_67347 = f__63831__auto__();
(statearr_67347[(6)] = c__63830__auto___67762);

return statearr_67347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
