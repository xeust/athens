goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__59924 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__59925 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__59925);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___60054 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___60054)){
var new_db_60055 = temp__5735__auto___60054;
var fexpr__59930_60056 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__59930_60056.cljs$core$IFn$_invoke$arity$1 ? fexpr__59930_60056.cljs$core$IFn$_invoke$arity$1(new_db_60055) : fexpr__59930_60056.call(null,new_db_60055));
} else {
}

var seq__59933 = cljs.core.seq(effects_without_db);
var chunk__59934 = null;
var count__59935 = (0);
var i__59936 = (0);
while(true){
if((i__59936 < count__59935)){
var vec__59949 = chunk__59934.cljs$core$IIndexed$_nth$arity$2(null,i__59936);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59949,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59949,(1),null);
var temp__5733__auto___60057 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___60057)){
var effect_fn_60058 = temp__5733__auto___60057;
(effect_fn_60058.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60058.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60058.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__60059 = seq__59933;
var G__60060 = chunk__59934;
var G__60061 = count__59935;
var G__60062 = (i__59936 + (1));
seq__59933 = G__60059;
chunk__59934 = G__60060;
count__59935 = G__60061;
i__59936 = G__60062;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59933);
if(temp__5735__auto__){
var seq__59933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59933__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59933__$1);
var G__60063 = cljs.core.chunk_rest(seq__59933__$1);
var G__60064 = c__4556__auto__;
var G__60065 = cljs.core.count(c__4556__auto__);
var G__60066 = (0);
seq__59933 = G__60063;
chunk__59934 = G__60064;
count__59935 = G__60065;
i__59936 = G__60066;
continue;
} else {
var vec__59954 = cljs.core.first(seq__59933__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59954,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59954,(1),null);
var temp__5733__auto___60067 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___60067)){
var effect_fn_60068 = temp__5733__auto___60067;
(effect_fn_60068.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60068.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60068.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__60069 = cljs.core.next(seq__59933__$1);
var G__60070 = null;
var G__60071 = (0);
var G__60072 = (0);
seq__59933 = G__60069;
chunk__59934 = G__60070;
count__59935 = G__60071;
i__59936 = G__60072;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__59427__auto___60073 = re_frame.interop.now();
var duration__59428__auto___60074 = (end__59427__auto___60073 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__59428__auto___60074,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__59427__auto___60073);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__59924);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___60075 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___60075)){
var new_db_60076 = temp__5735__auto___60075;
var fexpr__59959_60077 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__59959_60077.cljs$core$IFn$_invoke$arity$1 ? fexpr__59959_60077.cljs$core$IFn$_invoke$arity$1(new_db_60076) : fexpr__59959_60077.call(null,new_db_60076));
} else {
}

var seq__59961 = cljs.core.seq(effects_without_db);
var chunk__59962 = null;
var count__59963 = (0);
var i__59964 = (0);
while(true){
if((i__59964 < count__59963)){
var vec__59975 = chunk__59962.cljs$core$IIndexed$_nth$arity$2(null,i__59964);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59975,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59975,(1),null);
var temp__5733__auto___60078 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___60078)){
var effect_fn_60079 = temp__5733__auto___60078;
(effect_fn_60079.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60079.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60079.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__60080 = seq__59961;
var G__60081 = chunk__59962;
var G__60082 = count__59963;
var G__60083 = (i__59964 + (1));
seq__59961 = G__60080;
chunk__59962 = G__60081;
count__59963 = G__60082;
i__59964 = G__60083;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59961);
if(temp__5735__auto__){
var seq__59961__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59961__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59961__$1);
var G__60084 = cljs.core.chunk_rest(seq__59961__$1);
var G__60085 = c__4556__auto__;
var G__60086 = cljs.core.count(c__4556__auto__);
var G__60087 = (0);
seq__59961 = G__60084;
chunk__59962 = G__60085;
count__59963 = G__60086;
i__59964 = G__60087;
continue;
} else {
var vec__59981 = cljs.core.first(seq__59961__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59981,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59981,(1),null);
var temp__5733__auto___60088 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___60088)){
var effect_fn_60089 = temp__5733__auto___60088;
(effect_fn_60089.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60089.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60089.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__60090 = cljs.core.next(seq__59961__$1);
var G__60091 = null;
var G__60092 = (0);
var G__60093 = (0);
seq__59961 = G__60090;
chunk__59962 = G__60091;
count__59963 = G__60092;
i__59964 = G__60093;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__59988 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__59989 = null;
var count__59990 = (0);
var i__59991 = (0);
while(true){
if((i__59991 < count__59990)){
var map__59999 = chunk__59989.cljs$core$IIndexed$_nth$arity$2(null,i__59991);
var map__59999__$1 = (((((!((map__59999 == null))))?(((((map__59999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59999):map__59999);
var effect = map__59999__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59999__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59999__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__59988,chunk__59989,count__59990,i__59991,map__59999,map__59999__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__59988,chunk__59989,count__59990,i__59991,map__59999,map__59999__$1,effect,ms,dispatch))
,ms);
}


var G__60097 = seq__59988;
var G__60098 = chunk__59989;
var G__60099 = count__59990;
var G__60100 = (i__59991 + (1));
seq__59988 = G__60097;
chunk__59989 = G__60098;
count__59990 = G__60099;
i__59991 = G__60100;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59988);
if(temp__5735__auto__){
var seq__59988__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59988__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59988__$1);
var G__60104 = cljs.core.chunk_rest(seq__59988__$1);
var G__60105 = c__4556__auto__;
var G__60106 = cljs.core.count(c__4556__auto__);
var G__60107 = (0);
seq__59988 = G__60104;
chunk__59989 = G__60105;
count__59990 = G__60106;
i__59991 = G__60107;
continue;
} else {
var map__60009 = cljs.core.first(seq__59988__$1);
var map__60009__$1 = (((((!((map__60009 == null))))?(((((map__60009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60009):map__60009);
var effect = map__60009__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60009__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60009__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__59988,chunk__59989,count__59990,i__59991,map__60009,map__60009__$1,effect,ms,dispatch,seq__59988__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__59988,chunk__59989,count__59990,i__59991,map__60009,map__60009__$1,effect,ms,dispatch,seq__59988__$1,temp__5735__auto__))
,ms);
}


var G__60118 = cljs.core.next(seq__59988__$1);
var G__60119 = null;
var G__60120 = (0);
var G__60121 = (0);
seq__59988 = G__60118;
chunk__59989 = G__60119;
count__59990 = G__60120;
i__59991 = G__60121;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__60015 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__60016 = null;
var count__60017 = (0);
var i__60018 = (0);
while(true){
if((i__60018 < count__60017)){
var vec__60026 = chunk__60016.cljs$core$IIndexed$_nth$arity$2(null,i__60018);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60026,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60026,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___60133 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___60133)){
var effect_fn_60135 = temp__5733__auto___60133;
(effect_fn_60135.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60135.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60135.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__60138 = seq__60015;
var G__60139 = chunk__60016;
var G__60140 = count__60017;
var G__60141 = (i__60018 + (1));
seq__60015 = G__60138;
chunk__60016 = G__60139;
count__60017 = G__60140;
i__60018 = G__60141;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60015);
if(temp__5735__auto__){
var seq__60015__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60015__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60015__$1);
var G__60144 = cljs.core.chunk_rest(seq__60015__$1);
var G__60145 = c__4556__auto__;
var G__60146 = cljs.core.count(c__4556__auto__);
var G__60147 = (0);
seq__60015 = G__60144;
chunk__60016 = G__60145;
count__60017 = G__60146;
i__60018 = G__60147;
continue;
} else {
var vec__60030 = cljs.core.first(seq__60015__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60030,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60030,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___60148 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___60148)){
var effect_fn_60153 = temp__5733__auto___60148;
(effect_fn_60153.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60153.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60153.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__60155 = cljs.core.next(seq__60015__$1);
var G__60156 = null;
var G__60157 = (0);
var G__60158 = (0);
seq__60015 = G__60155;
chunk__60016 = G__60156;
count__60017 = G__60157;
i__60018 = G__60158;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__60033 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__60034 = null;
var count__60035 = (0);
var i__60036 = (0);
while(true){
if((i__60036 < count__60035)){
var event = chunk__60034.cljs$core$IIndexed$_nth$arity$2(null,i__60036);
re_frame.router.dispatch(event);


var G__60169 = seq__60033;
var G__60170 = chunk__60034;
var G__60171 = count__60035;
var G__60172 = (i__60036 + (1));
seq__60033 = G__60169;
chunk__60034 = G__60170;
count__60035 = G__60171;
i__60036 = G__60172;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60033);
if(temp__5735__auto__){
var seq__60033__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60033__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60033__$1);
var G__60173 = cljs.core.chunk_rest(seq__60033__$1);
var G__60174 = c__4556__auto__;
var G__60175 = cljs.core.count(c__4556__auto__);
var G__60176 = (0);
seq__60033 = G__60173;
chunk__60034 = G__60174;
count__60035 = G__60175;
i__60036 = G__60176;
continue;
} else {
var event = cljs.core.first(seq__60033__$1);
re_frame.router.dispatch(event);


var G__60180 = cljs.core.next(seq__60033__$1);
var G__60181 = null;
var G__60182 = (0);
var G__60183 = (0);
seq__60033 = G__60180;
chunk__60034 = G__60181;
count__60035 = G__60182;
i__60036 = G__60183;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__60043 = cljs.core.seq(value);
var chunk__60044 = null;
var count__60045 = (0);
var i__60046 = (0);
while(true){
if((i__60046 < count__60045)){
var event = chunk__60044.cljs$core$IIndexed$_nth$arity$2(null,i__60046);
clear_event(event);


var G__60184 = seq__60043;
var G__60185 = chunk__60044;
var G__60186 = count__60045;
var G__60187 = (i__60046 + (1));
seq__60043 = G__60184;
chunk__60044 = G__60185;
count__60045 = G__60186;
i__60046 = G__60187;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60043);
if(temp__5735__auto__){
var seq__60043__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60043__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60043__$1);
var G__60191 = cljs.core.chunk_rest(seq__60043__$1);
var G__60192 = c__4556__auto__;
var G__60193 = cljs.core.count(c__4556__auto__);
var G__60194 = (0);
seq__60043 = G__60191;
chunk__60044 = G__60192;
count__60045 = G__60193;
i__60046 = G__60194;
continue;
} else {
var event = cljs.core.first(seq__60043__$1);
clear_event(event);


var G__60196 = cljs.core.next(seq__60043__$1);
var G__60197 = null;
var G__60198 = (0);
var G__60199 = (0);
seq__60043 = G__60196;
chunk__60044 = G__60197;
count__60045 = G__60198;
i__60046 = G__60199;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
