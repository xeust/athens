goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__59483){
var map__59484 = p__59483;
var map__59484__$1 = (((((!((map__59484 == null))))?(((((map__59484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59484):map__59484);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59484__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59484__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59484__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59484__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__59489_59572 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__59490_59573 = null;
var count__59491_59574 = (0);
var i__59492_59575 = (0);
while(true){
if((i__59492_59575 < count__59491_59574)){
var vec__59508_59576 = chunk__59490_59573.cljs$core$IIndexed$_nth$arity$2(null,i__59492_59575);
var k_59577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59508_59576,(0),null);
var cb_59578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59508_59576,(1),null);
try{var G__59512_59579 = cljs.core.deref(re_frame.trace.traces);
(cb_59578.cljs$core$IFn$_invoke$arity$1 ? cb_59578.cljs$core$IFn$_invoke$arity$1(G__59512_59579) : cb_59578.call(null,G__59512_59579));
}catch (e59511){var e_59580 = e59511;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_59577,"while storing",cljs.core.deref(re_frame.trace.traces),e_59580], 0));
}

var G__59581 = seq__59489_59572;
var G__59582 = chunk__59490_59573;
var G__59583 = count__59491_59574;
var G__59584 = (i__59492_59575 + (1));
seq__59489_59572 = G__59581;
chunk__59490_59573 = G__59582;
count__59491_59574 = G__59583;
i__59492_59575 = G__59584;
continue;
} else {
var temp__5735__auto___59585 = cljs.core.seq(seq__59489_59572);
if(temp__5735__auto___59585){
var seq__59489_59586__$1 = temp__5735__auto___59585;
if(cljs.core.chunked_seq_QMARK_(seq__59489_59586__$1)){
var c__4556__auto___59587 = cljs.core.chunk_first(seq__59489_59586__$1);
var G__59588 = cljs.core.chunk_rest(seq__59489_59586__$1);
var G__59589 = c__4556__auto___59587;
var G__59590 = cljs.core.count(c__4556__auto___59587);
var G__59591 = (0);
seq__59489_59572 = G__59588;
chunk__59490_59573 = G__59589;
count__59491_59574 = G__59590;
i__59492_59575 = G__59591;
continue;
} else {
var vec__59513_59592 = cljs.core.first(seq__59489_59586__$1);
var k_59593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59513_59592,(0),null);
var cb_59594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59513_59592,(1),null);
try{var G__59517_59595 = cljs.core.deref(re_frame.trace.traces);
(cb_59594.cljs$core$IFn$_invoke$arity$1 ? cb_59594.cljs$core$IFn$_invoke$arity$1(G__59517_59595) : cb_59594.call(null,G__59517_59595));
}catch (e59516){var e_59596 = e59516;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_59593,"while storing",cljs.core.deref(re_frame.trace.traces),e_59596], 0));
}

var G__59597 = cljs.core.next(seq__59489_59586__$1);
var G__59598 = null;
var G__59599 = (0);
var G__59600 = (0);
seq__59489_59572 = G__59597;
chunk__59490_59573 = G__59598;
count__59491_59574 = G__59599;
i__59492_59575 = G__59600;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
