goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__65056,p__65057){
var map__65062 = p__65056;
var map__65062__$1 = (((((!((map__65062 == null))))?(((((map__65062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65062):map__65062);
var svc = map__65062__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65062__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65062__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65062__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__65063 = p__65057;
var map__65063__$1 = (((((!((map__65063 == null))))?(((((map__65063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65063):map__65063);
var msg = map__65063__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65063__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65063__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65063__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65063__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__65078,p__65079){
var map__65080 = p__65078;
var map__65080__$1 = (((((!((map__65080 == null))))?(((((map__65080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65080):map__65080);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__65081 = p__65079;
var map__65081__$1 = (((((!((map__65081 == null))))?(((((map__65081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65081):map__65081);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65081__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__65088,p__65089){
var map__65091 = p__65088;
var map__65091__$1 = (((((!((map__65091 == null))))?(((((map__65091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65091):map__65091);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65091__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65091__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__65092 = p__65089;
var map__65092__$1 = (((((!((map__65092 == null))))?(((((map__65092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65092):map__65092);
var msg = map__65092__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65092__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__65099,tid){
var map__65100 = p__65099;
var map__65100__$1 = (((((!((map__65100 == null))))?(((((map__65100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65100):map__65100);
var svc = map__65100__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65100__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__65107 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__65108 = null;
var count__65109 = (0);
var i__65110 = (0);
while(true){
if((i__65110 < count__65109)){
var vec__65117 = chunk__65108.cljs$core$IIndexed$_nth$arity$2(null,i__65110);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65117,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65117,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__65145 = seq__65107;
var G__65146 = chunk__65108;
var G__65147 = count__65109;
var G__65148 = (i__65110 + (1));
seq__65107 = G__65145;
chunk__65108 = G__65146;
count__65109 = G__65147;
i__65110 = G__65148;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65107);
if(temp__5735__auto__){
var seq__65107__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65107__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65107__$1);
var G__65149 = cljs.core.chunk_rest(seq__65107__$1);
var G__65150 = c__4556__auto__;
var G__65151 = cljs.core.count(c__4556__auto__);
var G__65152 = (0);
seq__65107 = G__65149;
chunk__65108 = G__65150;
count__65109 = G__65151;
i__65110 = G__65152;
continue;
} else {
var vec__65120 = cljs.core.first(seq__65107__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65120,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65120,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__65155 = cljs.core.next(seq__65107__$1);
var G__65156 = null;
var G__65157 = (0);
var G__65158 = (0);
seq__65107 = G__65155;
chunk__65108 = G__65156;
count__65109 = G__65157;
i__65110 = G__65158;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__65102_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__65102_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__65103_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__65103_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__65104_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__65104_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__65105_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__65105_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__65123){
var map__65124 = p__65123;
var map__65124__$1 = (((((!((map__65124 == null))))?(((((map__65124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65124):map__65124);
var svc = map__65124__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65124__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65124__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
