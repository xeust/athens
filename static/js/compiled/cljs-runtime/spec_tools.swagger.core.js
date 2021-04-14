goog.provide('spec_tools.swagger.core');
spec_tools.swagger.core.spec_dispatch = (function spec_tools$swagger$core$spec_dispatch(dispatch,_,___$1,___$2){
return dispatch;
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.swagger !== 'undefined') && (typeof spec_tools.swagger.core !== 'undefined') && (typeof spec_tools.swagger.core.accept_spec !== 'undefined')){
} else {
spec_tools.swagger.core.accept_spec = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.swagger.core","default","spec-tools.swagger.core/default",1361779456)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__91022 = cljs.core.get_global_hierarchy;
return (fexpr__91022.cljs$core$IFn$_invoke$arity$0 ? fexpr__91022.cljs$core$IFn$_invoke$arity$0() : fexpr__91022.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.swagger.core","accept-spec"),spec_tools.swagger.core.spec_dispatch,new cljs.core.Keyword("spec-tools.swagger.core","default","spec-tools.swagger.core/default",1361779456),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","float?","clojure.core/float?",-99660463,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"float"], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","double?","clojure.core/double?",1847770331,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (_,___$1,children,___$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (_,___$1,children,___$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),new cljs.core.Keyword(null,"x-allOf","x-allOf",-1697874638),children);
}));
spec_tools.swagger.core.accept_merge = (function spec_tools$swagger$core$accept_merge(children){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"object",new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(children,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"x-allOf","x-allOf",-1697874638),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))], 0)))),new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.sorted_set(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"x-allOf","x-allOf",-1697874638),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))))))], null);
});
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (_,___$1,children,___$2){
return spec_tools.swagger.core.accept_merge(children);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (_,___$1,children,___$2){
return spec_tools.swagger.core.accept_merge(children);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (_,___$1,children,___$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children)], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"x-items","x-items",-710213657),children], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enum","enum",1679018432),children,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (_,___$1,children,p__91070){
var map__91072 = p__91070;
var map__91072__$1 = (((((!((map__91072 == null))))?(((((map__91072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91072):map__91072);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91072__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91072__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var k = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"parameter","parameter",1978789597))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(in$,new cljs.core.Keyword(null,"body","body",-2049205669)))))?new cljs.core.Keyword(null,"allowEmptyValue","allowEmptyValue",-1066530890):new cljs.core.Keyword(null,"x-nullable","x-nullable",1492681247));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec_tools.impl.unwrap(children),k,true);
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200),(function (dispatch,spec,children,options){
var vec__91075 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91075,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91075,(1),null);
var swagger_meta = spec_tools.impl.unlift_keys(data,"swagger");
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4(dispatch,spec,children,options),swagger_meta], 0));
}));
spec_tools.swagger.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.swagger.core","default","spec-tools.swagger.core/default",1361779456),(function (dispatch,spec,children,options){
return spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4(dispatch,spec,children,options);
}));
/**
 * Generate Swagger schema matching the given clojure.spec spec.
 * 
 *   Since clojure.spec is more expressive than Swagger schemas, everything that
 *   satisfies the spec should satisfy the resulting schema, but the converse is
 *   not true.
 */
spec_tools.swagger.core.transform = (function spec_tools$swagger$core$transform(var_args){
var G__91102 = arguments.length;
switch (G__91102) {
case 1:
return spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(spec,null);
}));

(spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 = (function (spec,options){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,spec_tools.swagger.core.accept_spec,options);
}));

(spec_tools.swagger.core.transform.cljs$lang$maxFixedArity = 2);

if((typeof spec_tools !== 'undefined') && (typeof spec_tools.swagger !== 'undefined') && (typeof spec_tools.swagger.core !== 'undefined') && (typeof spec_tools.swagger.core.extract_parameter !== 'undefined')){
} else {
spec_tools.swagger.core.extract_parameter = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__91145 = cljs.core.get_global_hierarchy;
return (fexpr__91145.cljs$core$IFn$_invoke$arity$0 ? fexpr__91145.cljs$core$IFn$_invoke$arity$0() : fexpr__91145.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.swagger.core","extract-parameter"),(function (in$,_){
return in$;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.swagger.core.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"body","body",-2049205669),(function (_,spec){
var schema = spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),"body",new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__4126__auto__ = spec_tools.impl.qualified_name(spec_tools.core.spec_name(spec));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__4126__auto__ = spec_tools.core.spec_description(spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"required","required",1807647006),(!(spec_tools.impl.nilable_spec_QMARK_(spec))),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null)], null);
}));
spec_tools.swagger.core.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (in$,spec){
var map__91156 = spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
var map__91156__$1 = (((((!((map__91156 == null))))?(((((map__91156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91156):map__91156);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91156__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91156__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__91163){
var vec__91164 = p__91163;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91164,(0),null);
var map__91167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91164,(1),null);
var map__91167__$1 = (((((!((map__91167 == null))))?(((((map__91167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91167):map__91167);
var schema = map__91167__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91167__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.name(in$),new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__4126__auto__ = spec_tools.core.spec_description(spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.contains_QMARK_(cljs.core.set(required),k)], null),schema], 0));
}),properties);
}));
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.swagger !== 'undefined') && (typeof spec_tools.swagger.core !== 'undefined') && (typeof spec_tools.swagger.core.expand !== 'undefined')){
} else {
spec_tools.swagger.core.expand = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__91188 = cljs.core.get_global_hierarchy;
return (fexpr__91188.cljs$core$IFn$_invoke$arity$0 ? fexpr__91188.cljs$core$IFn$_invoke$arity$0() : fexpr__91188.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.swagger.core","expand"),(function (k,_,___$1,___$2){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.swagger.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.swagger.core","responses","spec-tools.swagger.core/responses",308528333),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"responses","responses",1257546453),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4529__auto__ = (function spec_tools$swagger$core$iter__91192(s__91193){
return (new cljs.core.LazySeq(null,(function (){
var s__91193__$1 = s__91193;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__91193__$1);
if(temp__5735__auto__){
var s__91193__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__91193__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__91193__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__91195 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__91194 = (0);
while(true){
if((i__91194 < size__4528__auto__)){
var vec__91205 = cljs.core._nth(c__4527__auto__,i__91194);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91205,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91205,(1),null);
cljs.core.chunk_append(b__91195,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var $ = response;
var $__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($))?cljs.core.update.cljs$core$IFn$_invoke$arity$4($,new cljs.core.Keyword(null,"schema","schema",-1582001791),spec_tools.swagger.core.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null)):$);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,""));
})()], null));

var G__91266 = (i__91194 + (1));
i__91194 = G__91266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91195),spec_tools$swagger$core$iter__91192(cljs.core.chunk_rest(s__91193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91195),null);
}
} else {
var vec__91212 = cljs.core.first(s__91193__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91212,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91212,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var $ = response;
var $__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($))?cljs.core.update.cljs$core$IFn$_invoke$arity$4($,new cljs.core.Keyword(null,"schema","schema",-1582001791),spec_tools.swagger.core.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null)):$);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,""));
})()], null),spec_tools$swagger$core$iter__91192(cljs.core.rest(s__91193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(v);
})())], null);
}));
spec_tools.swagger.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.swagger.core","parameters","spec-tools.swagger.core/parameters",-239005676),(function (_,v,acc,___$1){
var old = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new$ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__91218){
var vec__91219 = p__91218;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91219,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91219,(1),null);
return spec_tools.swagger.core.extract_parameter.cljs$core$IFn$_invoke$arity$2(in$,spec);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
var merged = cljs.core.vec(cljs.core.reverse(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__91222,p){
var vec__91223 = p__91222;
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91223,(0),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91223,(1),null);
var acc__$1 = vec__91223;
var c = cljs.core.select_keys(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.not((cache.cljs$core$IFn$_invoke$arity$1 ? cache.cljs$core$IFn$_invoke$arity$1(c) : cache.call(null,c)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,p),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,c)], null);
} else {
return acc__$1;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.reverse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(old,new$))))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),merged], null);
}));
spec_tools.swagger.core.expand_qualified_keywords = (function spec_tools$swagger$core$expand_qualified_keywords(x,options){
var accept_QMARK_ = cljs.core.set(cljs.core.keys(cljs.core.methods$(spec_tools.swagger.core.expand)));
return clojure.walk.postwalk((function (x__$1){
if(cljs.core.map_QMARK_(x__$1)){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : accept_QMARK_.call(null,k)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k),spec_tools.swagger.core.expand.cljs$core$IFn$_invoke$arity$4(k,v,acc,options)], 0));
} else {
return acc;
}
}),x__$1,x__$1);
} else {
return x__$1;
}
}),x);
});
/**
 * Transforms data into a swagger2 spec. Input data must conform
 *   to the Swagger2 Spec (http://swagger.io/specification/) with a
 *   exception that it can have any qualified keywords that are expanded
 *   with the `spec-tools.swagger.core/expand` multimethod.
 */
spec_tools.swagger.core.swagger_spec = (function spec_tools$swagger$core$swagger_spec(var_args){
var G__91227 = arguments.length;
switch (G__91227) {
case 1:
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1 = (function (x){
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2(x,null);
}));

(spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return spec_tools.swagger.core.expand_qualified_keywords(x,options);
}));

(spec_tools.swagger.core.swagger_spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=spec_tools.swagger.core.js.map
