goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors');
/**
 * An interceptor which logs/instruments an event handler's actions to
 *   `js/console.debug`. See examples/todomvc/src/events.cljs for use.
 * 
 *   Output includes:
 *   1. the event vector
 *   2. a `clojure.data/diff` of db, before vs after, which shows
 *   the changes caused by the event handler.  You will absolutely have
 *   to understand https://clojuredocs.org/clojure.data/diff to
 *   understand the output.
 * 
 *   You'd typically include this interceptor after (to the right of) any
 *   path interceptor.
 * 
 *   Warning:  calling clojure.data/diff on large, complex data structures
 *   can be slow. So, you won't want this interceptor present in production
 *   code. So condition it out like this :
 * 
 *    (re-frame.core/reg-event-db
 *       :evt-id
 *       [(when ^boolean goog.DEBUG re-frame.core/debug)]  ;; <-- conditional
 *       (fn [db v]
 *         ...))
 * 
 *   To make this code fragment work, you'll also have to set goog.DEBUG to
 *   false in your production builds - look in `project.clj` of /examples/todomvc.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.debug = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$debug_before(context){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling re-frame event:",day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442))], 0));

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$debug_after(context){
var event = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors/not-found",1701055823));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors/not-found",1701055823))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes in:",event], 0));
} else {
var vec__55567_55697 = clojure.data.diff(orig_db,new_db);
var only_before_55698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55567_55697,(0),null);
var only_after_55699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55567_55697,(1),null);
var db_changed_QMARK__55700 = (((!((only_before_55698 == null)))) || ((!((only_after_55699 == null)))));
if(db_changed_QMARK__55700){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["db clojure.data/diff for:",event], 0));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only before:",only_before_55698], 0));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only after :",only_after_55699], 0));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console(new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes resulted from:",event], 0));
}
}

return context;
})], 0));
/**
 * An interceptor which removes the first element of the event vector,
 *   allowing you to write more aesthetically pleasing event handlers. No
 *   leading underscore on the event-v!
 *   Your event handlers will look like this:
 * 
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.trim_v = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"trim-v","trim-v",-1274938640),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$trimv_before(context){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null),cljs.core.subvec,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors","untrimmed-event","day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors/untrimmed-event",128725477)], null),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442)));
}),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$trimv_after(context){
return cljs.core.assoc_in(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.utils.dissoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors","untrimmed-event","day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors/untrimmed-event",128725477)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors","untrimmed-event","day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors/untrimmed-event",128725477)));
})], 0));
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *    (fn [db event]
 *       ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.db_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"db-handler","db-handler",579530098),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__55585 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__55586 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__55586);

try{try{var map__55612 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__55612__$1 = (((((!((map__55612 == null))))?(((((map__55612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55612):map__55612);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55612__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55612__$1,new cljs.core.Keyword(null,"event","event",301435442));
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__55389__auto___55701 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__55390__auto___55702 = (end__55389__auto___55701 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__55390__auto___55702,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__55389__auto___55701);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__55585);
}})():(function (){var map__55617 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__55617__$1 = (((((!((map__55617 == null))))?(((((map__55617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55617):map__55617);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55617__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55617__$1,new cljs.core.Keyword(null,"event","event",301435442));
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
})());
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__55391__auto___55703 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = new_trace__55391__auto___55703);

} else {
}

return new_context;
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *    (fn [coeffects event]
 *       {:db ...
 *        :dispatch ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.fx_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__55651 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__55652 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__55652);

try{try{var map__55656 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__55656__$1 = (((((!((map__55656 == null))))?(((((map__55656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55656):map__55656);
var coeffects = map__55656__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55656__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event)));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__55389__auto___55704 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__55390__auto___55705 = (end__55389__auto___55704 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__55390__auto___55705,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__55389__auto___55704);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__55651);
}})():(function (){var map__55658 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__55658__$1 = (((((!((map__55658 == null))))?(((((map__55658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55658):map__55658);
var coeffects = map__55658__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55658__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event)));
})());
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__55391__auto___55706 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = new_trace__55391__auto___55706);

} else {
}

return new_context;
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 * 
 *    (fn [context]
 *       (enqueue context [more interceptors]))
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.ctx_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ctx-handler","ctx-handler",-1777672230),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$ctx_handler__GT_interceptor_$_ctx_handler_before(context){
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__55665 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__55667 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__55667);

try{try{return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null,context));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__55389__auto___55707 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__55390__auto___55708 = (end__55389__auto___55707 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__55390__auto___55708,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__55389__auto___55707);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__55665);
}})():(handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null,context)));
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__55391__auto___55709 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = new_trace__55391__auto___55709);

} else {
}

return new_context;
})], 0));
});
/**
 * returns an interceptor whose `:before` substitutes the coeffects `:db` with
 *   a sub-path of `:db`. Within `:after` it grafts the handler's return value
 *   back into db, at the right path.
 * 
 *   So, its overall action is to make the event handler behave like the function
 *   you might give to clojure's `update-in`.
 * 
 *   Examples:
 * 
 *    (path :some :path)
 *    (path [:some :path])
 *    (path [:some :path] :to :here)
 *    (path [:some :path] [:to] :here)
 * 
 *   Example Use:
 * 
 *    (reg-event-db
 *      :event-id
 *      (path [:a :b])  ;; used here, in interceptor chain
 *      (fn [b v]       ;; 1st arg is now not db. Is the value from path [:a :b] within db
 *        ... new-b))   ;; returns a new value for that path (not the entire db)
 * 
 *   Notes:
 *  1. `path` may appear more than once in an interceptor chain. Progressive narrowing.
 *  2. if `:effects` contains no `:db` effect, can't graft a value back in.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.path = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55710 = arguments.length;
var i__4737__auto___55711 = (0);
while(true){
if((i__4737__auto___55711 < len__4736__auto___55710)){
args__4742__auto__.push((arguments[i__4737__auto___55711]));

var G__55712 = (i__4737__auto___55711 + (1));
i__4737__auto___55711 = G__55712;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten(args);
var db_store_key = new cljs.core.Keyword("re-frame-path","db-store","re-frame-path/db-store",655758490);
if(cljs.core.empty_QMARK_(path)){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"path\" interceptor given no params"], 0));
} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var original_db = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.assoc_coeffect(cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,db_store_key,cljs.core.conj,original_db),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(original_db,path));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var db_store = db_store_key.cljs$core$IFn$_invoke$arity$1(context);
var original_db = cljs.core.peek(db_store);
var new_db_store = cljs.core.pop(db_store);
var context_SINGLEQUOTE_ = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.assoc_coeffect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,db_store_key,new_db_store),new cljs.core.Keyword(null,"db","db",993250759),original_db);
var db = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors/not-found",1701055823));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v11v0.re-frame.std-interceptors/not-found",1701055823))){
return context_SINGLEQUOTE_;
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.assoc_effect(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(original_db,path,db));
}
})], 0));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq55677){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55677));
}));

/**
 * Interceptor factory which runs the given function `f` in the `after handler`
 *   position.  `f` is called with two arguments: `db` and `v`, and is expected to
 *   return a modified `db`.
 * 
 *   Unlike the `after` interceptor which is only about side effects, `enrich`
 *   expects `f` to process and alter the given `db` coeffect in some useful way,
 *   contributing to the derived data, flowing vibe.
 * 
 *   Example Use:
 *   ------------
 * 
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them via a warning
 *   at the bottom of the panel.
 * 
 *   Almost any user action (edit text, add new todo, remove a todo) requires a
 *   complete reassessment of duplication errors and warnings. Eg: that edit
 *   just made might have introduced a new duplicate, or removed one. Same with
 *   any todo removal. So we need to re-calculate warnings after any CRUD events
 *   associated with the todos list.
 * 
 *   Unless we are careful, we might end up coding subtly different checks
 *   for each kind of CRUD operation.  The duplicates check made after
 *   'delete todo' event might be subtly different to that done after an
 *   editing operation. Nice and efficient, but fiddly. A bug generator
 *   approach.
 * 
 *   So, instead, we create an `f` which recalculates ALL warnings from scratch
 *   every time there is ANY change. It will inspect all the todos, and
 *   reset ALL FLAGS every time (overwriting what was there previously)
 *   and fully recalculate the list of duplicates (displayed at the bottom?).
 * 
 *   https://twitter.com/nathanmarz/status/879722740776939520
 * 
 *   By applying `f` in an `:enrich` interceptor, after every CRUD event,
 *   we keep the handlers simple and yet we ensure this important step
 *   (of getting warnings right) is not missed on any change.
 * 
 *   We can test `f` easily - it is a pure function - independently of
 *   any CRUD operation.
 * 
 *   This brings huge simplicity at the expense of some re-computation
 *   each time. This may be a very satisfactory trade-off in many cases.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.enrich = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$enrich(f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enrich","enrich",-2108921925),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var db = ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)):day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)));
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event)));
})], 0));
});
/**
 * returns an interceptor which runs a given function `f` in the `:after`
 *   position, presumably for side effects.
 * 
 *   `f` is called with two arguments: the `:effects` value for `:db`
 *   (or the `coeffect` value of db if no db effect is returned) and the event.
 *   Its return value is ignored, so `f` can only side-effect.
 * 
 *   Examples use can be seen in the /examples/todomvc:
 *   - `f` runs schema validation (reporting any errors found).
 *   - `f` writes to localstorage.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.after = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$after(f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)));
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event));

return context;
})], 0));
});
/**
 * Interceptor factory which acts a bit like `reaction`  (but it flows into
 *   `db`, rather than out). It observes N paths within `db` and if any of them
 *   test not identical? to their previous value  (as a result of a event handler
 *   being run) then it runs `f` to compute a new value, which is then assoc-ed
 *   into the given `out-path` within `db`.
 * 
 *   Usage:
 * 
 *    (defn my-f
 *      [a-val b-val]
 *      ... some computation on a and b in here)
 * 
 *    (on-changes my-f [:c]  [:a] [:b])
 * 
 *   Put this Interceptor on the right handlers (ones which might change :a or :b).
 *   It will:
 *   - call `f` each time the value at path [:a] or [:b] changes
 *   - call `f` with the values extracted from [:a] [:b]
 *   - assoc the return value from `f` into the path  [:c]
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.on_changes = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$on_changes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55713 = arguments.length;
var i__4737__auto___55714 = (0);
while(true){
if((i__4737__auto___55714 < len__4736__auto___55713)){
args__4742__auto__.push((arguments[i__4737__auto___55714]));

var G__55715 = (i__4737__auto___55714 + (1));
i__4737__auto___55714 = G__55715;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-changes","on-changes",1345912602),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$std_interceptors$on_change_after(context){
var new_db = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var old_db = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55692_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,p1__55692_SHARP_);
}),in_paths);
var old_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55693_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_db,p1__55693_SHARP_);
}),in_paths);
var changed_ins_QMARK_ = ((cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.identical_QMARK_,new_ins,old_ins)):false);
if(cljs.core.truth_(changed_ins_QMARK_)){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new_db,out_path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new_ins)));
} else {
return context;
}
})], 0));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq55694){
var G__55695 = cljs.core.first(seq55694);
var seq55694__$1 = cljs.core.next(seq55694);
var G__55696 = cljs.core.first(seq55694__$1);
var seq55694__$2 = cljs.core.next(seq55694__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55695,G__55696,seq55694__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.js.map
