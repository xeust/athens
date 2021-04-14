goog.provide('sci.impl.interop');
sci.impl.interop.toJS = (function sci$impl$interop$toJS(v){
if((v instanceof cljs.core.MetaFn)){
return v.afn;
} else {
return cljs.core.clj__GT_js(v);
}
});

sci.impl.interop.js_object_array = (function sci$impl$interop$js_object_array(args){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sci.impl.interop.toJS,args));
});
sci.impl.interop.invoke_instance_method = (function sci$impl$interop$invoke_instance_method(obj,_target_class,method_name,args){
if(("-" === method_name.charAt((0)))){
return (obj[cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1))]);
} else {
var temp__5733__auto__ = (obj[method_name]);
if(cljs.core.truth_(temp__5733__auto__)){
var method = temp__5733__auto__;
return method.apply(obj,sci.impl.interop.js_object_array(args));
} else {
throw (new Error(["Could not find instance method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)].join('')));
}
}
});
sci.impl.interop.get_static_field = (function sci$impl$interop$get_static_field(p__97230){
var vec__97231 = p__97230;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97231,(0),null);
var field_name_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97231,(1),null);
return goog.object.get(class$,field_name_sym);
});
sci.impl.interop.invoke_js_constructor = (function sci$impl$interop$invoke_js_constructor(constructor$,args){
var ctor = Function.prototype.bind.apply(constructor$);
var args__$1 = sci.impl.interop.js_object_array(args);
var G__97234 = ((args__$1).length);
switch (G__97234) {
case (0):
return (new ctor());

break;
case (1):
return (new ctor(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(0))));

break;
case (2):
return (new ctor(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(1))));

break;
case (3):
return (new ctor(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(2))));

break;
case (4):
return (new ctor(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(3))));

break;
case (5):
return (new ctor(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(4))));

break;
case (6):
return (new ctor(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(5))));

break;
case (7):
return (new ctor(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args__$1,(6))));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Constructors with more than 7 arguments are not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),constructor$], null));

}
});
sci.impl.interop.invoke_constructor = (function sci$impl$interop$invoke_constructor(constructor$,args){
return sci.impl.interop.invoke_js_constructor(constructor$,args);
});
sci.impl.interop.invoke_static_method = (function sci$impl$interop$invoke_static_method(p__97243,args){
var vec__97244 = p__97243;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97244,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97244,(1),null);
var temp__5733__auto__ = goog.object.get(class$,method_name);
if(cljs.core.truth_(temp__5733__auto__)){
var method = temp__5733__auto__;
return method.apply(class$,sci.impl.interop.js_object_array(args));
} else {
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var vec__97250 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(method_name__$1,/\./);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97250,(0),null);
var sub_method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97250,(1),null);
if(cljs.core.truth_(sub_method_name)){
return sci.impl.interop.invoke_instance_method(sci.impl.interop.get_static_field(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,field], null)),null,sub_method_name,args);
} else {
if(clojure.string.ends_with_QMARK_(method_name__$1,".")){
return sci.impl.interop.invoke_js_constructor(sci.impl.interop.get_static_field(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,field], null)),args);
} else {
throw (new Error(["Could not find static method ",method_name__$1].join('')));

}
}
}
});
sci.impl.interop.fully_qualify_class = (function sci$impl$interop$fully_qualify_class(p__97257,sym){
var map__97258 = p__97257;
var map__97258__$1 = (((((!((map__97258 == null))))?(((((map__97258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__97258):map__97258);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97258__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97258__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var or__4126__auto__ = (function (){var temp__5733__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5733__auto__)){
var ns_STAR_ = temp__5733__auto__;
if(("js" === ns_STAR_)){
if(cljs.core.contains_QMARK_(class__GT_opts,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)))){
return sym;
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.contains_QMARK_(class__GT_opts,sym)){
return sym;
} else {
return null;
}
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var env__$1 = cljs.core.deref(env);
var or__4126__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(env__$1),sym);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym], null));
}
}
});
sci.impl.interop.resolve_class_opts = (function sci$impl$interop$resolve_class_opts(p__97260,sym){
var map__97261 = p__97260;
var map__97261__$1 = (((((!((map__97261 == null))))?(((((map__97261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__97261):map__97261);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97261__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97261__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var class_opts = (function (){var or__4126__auto__ = (function (){var temp__5733__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5733__auto__)){
var ns_STAR_ = temp__5733__auto__;
if(("js" === ns_STAR_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
} else {
return null;
}
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,sym);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var env__$1 = cljs.core.deref(env);
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"imports","imports",-1249933394),sym], null));
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,v);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var cnn = sci.impl.vars.current_ns_name();
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym], null));
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,v);
} else {
return null;
}
}
}
})();
return class_opts;
});
sci.impl.interop.resolve_class = (function sci$impl$interop$resolve_class(ctx,sym){
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(sci.impl.interop.resolve_class_opts(ctx,sym));
});

//# sourceMappingURL=sci.impl.interop.js.map
