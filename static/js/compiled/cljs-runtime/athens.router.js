goog.provide('athens.router');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-route","uid","current-route/uid",-327873095),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-route","name","current-route/name",-1583049420),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db)));
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (_,p__94151){
var vec__94152 = p__94151;
var seq__94153 = cljs.core.seq(vec__94152);
var first__94154 = cljs.core.first(seq__94153);
var seq__94153__$1 = cljs.core.next(seq__94153);
var ___$1 = first__94154;
var route = seq__94153__$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate!","navigate!",79998348),route,new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["current-route/uid",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second(route))], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigated","navigated",540897836),(function (p__94155,p__94156){
var map__94157 = p__94155;
var map__94157__$1 = (((((!((map__94157 == null))))?(((((map__94157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94157):map__94157);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94157__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__94158 = p__94156;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94158,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94158,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
var node = posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(new_match))], null));
var node_title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node));
var route_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match));
var html_title_prefix = (cljs.core.truth_(node_title)?node_title:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"pages","pages",-285406513)))?"All Pages":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"home","home",-74557309)))?"Daily Notes":null)));
var html_title = (cljs.core.truth_(html_title_prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(html_title_prefix)," | Athens"].join(''):"Athens");
(document.title = html_title);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers)),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("local-storage","navigate","local-storage/navigate",-707087458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),"current-route/uid")], null),(function (p__94168,_){
var map__94169 = p__94168;
var map__94169__$1 = (((((!((map__94169 == null))))?(((((map__94169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94169):map__94169);
var local_storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94169__$1,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("null",local_storage)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),local_storage], null)], null)], null);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate!","navigate!",79998348),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (route){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Symbol(null,"route","route",1970422836,null)));

var opts__89627__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__89628__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var opts__89627__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__89628__auto__ = reitit.frontend.easy.push_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__89628__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__89628__auto__;
})(),(function (){var opts__89627__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__89628__auto__ = route;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__89628__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__89628__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__89628__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Symbol(null,"route","route",1970422836,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__89628__auto__;
}catch (e94207){var e = e94207;
throw e;
}}):(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
})));
athens.router.routes = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pages",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pages","pages",-285406513)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page/:id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"page","page",849072397)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["graph",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"graph","graph",1558099509)], null)], null)], null);
athens.router.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(athens.router.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
athens.router.on_navigate = (function athens$router$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigated","navigated",540897836),new_match], null));
} else {
return null;
}
});
athens.router.navigate = (function athens$router$navigate(page){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),page], null));
});
/**
 * When user is already on a date node-page, clicking on daily notes goes to that date and allows scrolling.
 */
athens.router.nav_daily_notes = (function athens$router$nav_daily_notes(){
var route_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-route","uid","current-route/uid",-327873095)], null)));
if(athens.util.is_daily_note(route_uid)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-notes","add","daily-notes/add",1566486218),route_uid], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-notes","reset","daily-notes/reset",1615543639)], null));
}

return athens.router.navigate(new cljs.core.Keyword(null,"home","home",-74557309));
});
/**
 * Don't navigate if already on the page.
 */
athens.router.navigate_uid = (function athens$router$navigate_uid(var_args){
var G__94229 = arguments.length;
switch (G__94229) {
case 1:
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1 = (function (uid){
var vec__94231 = athens.db.uid_and_embed_id(uid);
var uid__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94231,(0),null);
var _embed_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94231,(1),null);
var current_route_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-route","uid","current-route/uid",-327873095)], null)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_route_uid,uid__$1)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uid__$1], null)], null));
} else {
return null;
}
}));

(athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2 = (function (uid,e){
var vec__94240 = athens.db.uid_and_embed_id(uid);
var uid__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94240,(0),null);
var _embed_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94240,(1),null);
var shift = e.shiftKey;
if(cljs.core.truth_(shift)){
window.getSelection().empty();

e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","open-item","right-sidebar/open-item",-1234515614),uid__$1], null));
} else {
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$1);
}
}));

(athens.router.navigate_uid.cljs$lang$maxFixedArity = 2);

athens.router.init_routes_BANG_ = (function athens$router$init_routes_BANG_(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing routes"], 0));

return reitit.frontend.easy.start_BANG_(athens.router.router,athens.router.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});

//# sourceMappingURL=athens.router.js.map
