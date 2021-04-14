goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__55745 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__55746 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__55746);

try{try{var seq__55748 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__55749 = null;
var count__55750 = (0);
var i__55751 = (0);
while(true){
if((i__55751 < count__55750)){
var vec__55763 = chunk__55749.cljs$core$IIndexed$_nth$arity$2(null,i__55751);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55763,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55763,(1),null);
var temp__5733__auto___55828 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___55828)){
var effect_fn_55829 = temp__5733__auto___55828;
(effect_fn_55829.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55829.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55829.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55830 = seq__55748;
var G__55831 = chunk__55749;
var G__55832 = count__55750;
var G__55833 = (i__55751 + (1));
seq__55748 = G__55830;
chunk__55749 = G__55831;
count__55750 = G__55832;
i__55751 = G__55833;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55748);
if(temp__5735__auto__){
var seq__55748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55748__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55748__$1);
var G__55834 = cljs.core.chunk_rest(seq__55748__$1);
var G__55835 = c__4556__auto__;
var G__55836 = cljs.core.count(c__4556__auto__);
var G__55837 = (0);
seq__55748 = G__55834;
chunk__55749 = G__55835;
count__55750 = G__55836;
i__55751 = G__55837;
continue;
} else {
var vec__55766 = cljs.core.first(seq__55748__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55766,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55766,(1),null);
var temp__5733__auto___55838 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___55838)){
var effect_fn_55841 = temp__5733__auto___55838;
(effect_fn_55841.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55841.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55841.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55842 = cljs.core.next(seq__55748__$1);
var G__55843 = null;
var G__55844 = (0);
var G__55845 = (0);
seq__55748 = G__55842;
chunk__55749 = G__55843;
count__55750 = G__55844;
i__55751 = G__55845;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__55389__auto___55846 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__55390__auto___55847 = (end__55389__auto___55846 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__55390__auto___55847,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__55389__auto___55846);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__55745);
}} else {
var seq__55770 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__55771 = null;
var count__55772 = (0);
var i__55773 = (0);
while(true){
if((i__55773 < count__55772)){
var vec__55780 = chunk__55771.cljs$core$IIndexed$_nth$arity$2(null,i__55773);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55780,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55780,(1),null);
var temp__5733__auto___55848 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___55848)){
var effect_fn_55849 = temp__5733__auto___55848;
(effect_fn_55849.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55849.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55849.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55850 = seq__55770;
var G__55851 = chunk__55771;
var G__55852 = count__55772;
var G__55853 = (i__55773 + (1));
seq__55770 = G__55850;
chunk__55771 = G__55851;
count__55772 = G__55852;
i__55773 = G__55853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55770);
if(temp__5735__auto__){
var seq__55770__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55770__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55770__$1);
var G__55854 = cljs.core.chunk_rest(seq__55770__$1);
var G__55855 = c__4556__auto__;
var G__55856 = cljs.core.count(c__4556__auto__);
var G__55857 = (0);
seq__55770 = G__55854;
chunk__55771 = G__55855;
count__55772 = G__55856;
i__55773 = G__55857;
continue;
} else {
var vec__55783 = cljs.core.first(seq__55770__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55783,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55783,(1),null);
var temp__5733__auto___55858 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___55858)){
var effect_fn_55859 = temp__5733__auto___55858;
(effect_fn_55859.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55859.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55859.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55860 = cljs.core.next(seq__55770__$1);
var G__55861 = null;
var G__55862 = (0);
var G__55863 = (0);
seq__55770 = G__55860;
chunk__55771 = G__55861;
count__55772 = G__55862;
i__55773 = G__55863;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__55787 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__55788 = null;
var count__55789 = (0);
var i__55790 = (0);
while(true){
if((i__55790 < count__55789)){
var map__55810 = chunk__55788.cljs$core$IIndexed$_nth$arity$2(null,i__55790);
var map__55810__$1 = (((((!((map__55810 == null))))?(((((map__55810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55810):map__55810);
var effect = map__55810__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__55787,chunk__55788,count__55789,i__55790,map__55810,map__55810__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__55787,chunk__55788,count__55789,i__55790,map__55810,map__55810__$1,effect,ms,dispatch))
,ms);
}


var G__55864 = seq__55787;
var G__55865 = chunk__55788;
var G__55866 = count__55789;
var G__55867 = (i__55790 + (1));
seq__55787 = G__55864;
chunk__55788 = G__55865;
count__55789 = G__55866;
i__55790 = G__55867;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55787);
if(temp__5735__auto__){
var seq__55787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55787__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55787__$1);
var G__55868 = cljs.core.chunk_rest(seq__55787__$1);
var G__55869 = c__4556__auto__;
var G__55870 = cljs.core.count(c__4556__auto__);
var G__55871 = (0);
seq__55787 = G__55868;
chunk__55788 = G__55869;
count__55789 = G__55870;
i__55790 = G__55871;
continue;
} else {
var map__55812 = cljs.core.first(seq__55787__$1);
var map__55812__$1 = (((((!((map__55812 == null))))?(((((map__55812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55812):map__55812);
var effect = map__55812__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55812__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55812__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__55787,chunk__55788,count__55789,i__55790,map__55812,map__55812__$1,effect,ms,dispatch,seq__55787__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__55787,chunk__55788,count__55789,i__55790,map__55812,map__55812__$1,effect,ms,dispatch,seq__55787__$1,temp__5735__auto__))
,ms);
}


var G__55872 = cljs.core.next(seq__55787__$1);
var G__55873 = null;
var G__55874 = (0);
var G__55875 = (0);
seq__55787 = G__55872;
chunk__55788 = G__55873;
count__55789 = G__55874;
i__55790 = G__55875;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__55814 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__55815 = null;
var count__55816 = (0);
var i__55817 = (0);
while(true){
if((i__55817 < count__55816)){
var event = chunk__55815.cljs$core$IIndexed$_nth$arity$2(null,i__55817);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__55876 = seq__55814;
var G__55877 = chunk__55815;
var G__55878 = count__55816;
var G__55879 = (i__55817 + (1));
seq__55814 = G__55876;
chunk__55815 = G__55877;
count__55816 = G__55878;
i__55817 = G__55879;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55814);
if(temp__5735__auto__){
var seq__55814__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55814__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55814__$1);
var G__55880 = cljs.core.chunk_rest(seq__55814__$1);
var G__55881 = c__4556__auto__;
var G__55882 = cljs.core.count(c__4556__auto__);
var G__55883 = (0);
seq__55814 = G__55880;
chunk__55815 = G__55881;
count__55816 = G__55882;
i__55817 = G__55883;
continue;
} else {
var event = cljs.core.first(seq__55814__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__55884 = cljs.core.next(seq__55814__$1);
var G__55885 = null;
var G__55886 = (0);
var G__55887 = (0);
seq__55814 = G__55884;
chunk__55815 = G__55885;
count__55816 = G__55886;
i__55817 = G__55887;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__55818 = cljs.core.seq(value);
var chunk__55819 = null;
var count__55820 = (0);
var i__55821 = (0);
while(true){
if((i__55821 < count__55820)){
var event = chunk__55819.cljs$core$IIndexed$_nth$arity$2(null,i__55821);
clear_event(event);


var G__55888 = seq__55818;
var G__55889 = chunk__55819;
var G__55890 = count__55820;
var G__55891 = (i__55821 + (1));
seq__55818 = G__55888;
chunk__55819 = G__55889;
count__55820 = G__55890;
i__55821 = G__55891;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55818);
if(temp__5735__auto__){
var seq__55818__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55818__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55818__$1);
var G__55892 = cljs.core.chunk_rest(seq__55818__$1);
var G__55893 = c__4556__auto__;
var G__55894 = cljs.core.count(c__4556__auto__);
var G__55895 = (0);
seq__55818 = G__55892;
chunk__55819 = G__55893;
count__55820 = G__55894;
i__55821 = G__55895;
continue;
} else {
var event = cljs.core.first(seq__55818__$1);
clear_event(event);


var G__55896 = cljs.core.next(seq__55818__$1);
var G__55897 = null;
var G__55898 = (0);
var G__55899 = (0);
seq__55818 = G__55896;
chunk__55819 = G__55897;
count__55820 = G__55898;
i__55821 = G__55899;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
