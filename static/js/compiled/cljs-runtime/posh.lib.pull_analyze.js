goog.provide('posh.lib.pull_analyze');
posh.lib.pull_analyze.reverse_lookup_QMARK_ = (function posh$lib$pull_analyze$reverse_lookup_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(attr)),"_");
});
posh.lib.pull_analyze.reverse_lookup = (function posh$lib$pull_analyze$reverse_lookup(attr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(attr)),"_")){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(cljs.core.name(attr))))].join(''));
} else {
return null;
}
});
posh.lib.pull_analyze.dbid_into_vec = (function posh$lib$pull_analyze$dbid_into_vec(v){
if(cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"*","*",345799209,null),null,new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),v))){
return cljs.core.cons(new cljs.core.Keyword("db","id","db/id",-1388397098),v);
} else {
return v;
}
});
posh.lib.pull_analyze.insert_dbid = (function posh$lib$pull_analyze$insert_dbid(pull_pattern){
if(cljs.core.map_QMARK_(pull_pattern)){
return cljs.core.zipmap(cljs.core.keys(pull_pattern),cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.pull_analyze.insert_dbid,cljs.core.vals(pull_pattern)));
} else {
if(cljs.core.vector_QMARK_(pull_pattern)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73147_SHARP_){
if(cljs.core.coll_QMARK_(p1__73147_SHARP_)){
return (posh.lib.pull_analyze.insert_dbid.cljs$core$IFn$_invoke$arity$1 ? posh.lib.pull_analyze.insert_dbid.cljs$core$IFn$_invoke$arity$1(p1__73147_SHARP_) : posh.lib.pull_analyze.insert_dbid.call(null,p1__73147_SHARP_));
} else {
return p1__73147_SHARP_;
}
}),posh.lib.pull_analyze.dbid_into_vec(pull_pattern)));
} else {
return pull_pattern;

}
}
});
posh.lib.pull_analyze.pull_affected_datoms = (function posh$lib$pull_analyze$pull_affected_datoms(pull_fn,db,pull_pattern,eid){
var G__73148 = db;
var G__73149 = posh.lib.pull_analyze.insert_dbid(pull_pattern);
var G__73150 = eid;
return (pull_fn.cljs$core$IFn$_invoke$arity$3 ? pull_fn.cljs$core$IFn$_invoke$arity$3(G__73148,G__73149,G__73150) : pull_fn.call(null,G__73148,G__73149,G__73150));
});
posh.lib.pull_analyze.pull_ref_one_QMARK_ = (function posh$lib$pull_analyze$pull_ref_one_QMARK_(v){
if(cljs.core.map_QMARK_(v)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
} else {
return false;
}
});
posh.lib.pull_analyze.pull_ref_many_QMARK_ = (function posh$lib$pull_analyze$pull_ref_many_QMARK_(v){
if(cljs.core.vector_QMARK_(v)){
return posh.lib.pull_analyze.pull_ref_one_QMARK_(cljs.core.first(v));
} else {
return false;
}
});
posh.lib.pull_analyze.ref_QMARK_ = (function posh$lib$pull_analyze$ref_QMARK_(schema,attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr),new cljs.core.Keyword("db","valueType","db/valueType",1827971944)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
posh.lib.pull_analyze.cardinality_one_QMARK_ = (function posh$lib$pull_analyze$cardinality_one_QMARK_(schema,attr){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr);
if(cljs.core.truth_(temp__5735__auto__)){
var e = temp__5735__auto__;
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234))));
} else {
return null;
}
});
posh.lib.pull_analyze.cardinality_many_QMARK_ = (function posh$lib$pull_analyze$cardinality_many_QMARK_(schema,attr){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr);
if(cljs.core.truth_(temp__5735__auto__)){
var e = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
} else {
return null;
}
});
posh.lib.pull_analyze.tx_datoms_for_pull_map = (function posh$lib$pull_analyze$tx_datoms_for_pull_map(schema,entity_id,pull_map){
if(cljs.core.empty_QMARK_(pull_map)){
return cljs.core.PersistentVector.EMPTY;
} else {
var vec__73195 = cljs.core.first(pull_map);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73195,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73195,(1),null);
var r_QMARK_ = posh.lib.pull_analyze.reverse_lookup_QMARK_(k);
var k__$1 = ((r_QMARK_)?posh.lib.pull_analyze.reverse_lookup(k):k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,new cljs.core.Keyword("db","id","db/id",-1388397098))){
var G__73199 = schema;
var G__73200 = entity_id;
var G__73201 = cljs.core.rest(pull_map);
return (posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3(G__73199,G__73200,G__73201) : posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,G__73199,G__73200,G__73201));
} else {
if(posh.lib.pull_analyze.ref_QMARK_(schema,k__$1)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((((!(r_QMARK_)))?posh.lib.pull_analyze.cardinality_one_QMARK_(schema,k__$1):false))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null)], null),(function (){var G__73202 = schema;
var G__73203 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
var G__73204 = v;
return (posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3(G__73202,G__73203,G__73204) : posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,G__73202,G__73203,G__73204));
})()):(cljs.core.truth_((function (){var or__4126__auto__ = r_QMARK_;
if(or__4126__auto__){
return or__4126__auto__;
} else {
return posh.lib.pull_analyze.cardinality_many_QMARK_(schema,k__$1);
}
})())?cljs.core.concat.cljs$core$IFn$_invoke$arity$2((((!(r_QMARK_)))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__73189_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__73189_SHARP_)], null)],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)):null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__73190_SHARP_){
var G__73206 = schema;
var G__73207 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__73190_SHARP_);
var G__73208 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((r_QMARK_)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),entity_id], null)]):null),p1__73190_SHARP_], 0));
return (posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3(G__73206,G__73207,G__73208) : posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,G__73206,G__73207,G__73208));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,v], null)], null)
)),(function (){var G__73210 = schema;
var G__73211 = entity_id;
var G__73212 = cljs.core.rest(pull_map);
return (posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3(G__73210,G__73211,G__73212) : posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,G__73210,G__73211,G__73212));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(posh.lib.pull_analyze.cardinality_many_QMARK_(schema,k__$1))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__73193_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,p1__73193_SHARP_], null)],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,v], null)], null)),(function (){var G__73213 = schema;
var G__73214 = entity_id;
var G__73215 = cljs.core.rest(pull_map);
return (posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_datoms_for_pull_map.cljs$core$IFn$_invoke$arity$3(G__73213,G__73214,G__73215) : posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,G__73213,G__73214,G__73215));
})());

}
}
}
});
posh.lib.pull_analyze.generate_affected_tx_datoms_for_pull = (function posh$lib$pull_analyze$generate_affected_tx_datoms_for_pull(schema,affected_pull){
return posh.lib.pull_analyze.tx_datoms_for_pull_map(schema,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(affected_pull),affected_pull);
});
posh.lib.pull_analyze.limit_spec_QMARK_ = (function posh$lib$pull_analyze$limit_spec_QMARK_(x){
if(cljs.core.seq_QMARK_(x)){
var G__73225 = cljs.core.first(x);
var fexpr__73224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"limit","limit",284709164,null),null,"limit",null], null), null);
return (fexpr__73224.cljs$core$IFn$_invoke$arity$1 ? fexpr__73224.cljs$core$IFn$_invoke$arity$1(G__73225) : fexpr__73224.call(null,G__73225));
} else {
return false;
}
});
posh.lib.pull_analyze.limit_attr = (function posh$lib$pull_analyze$limit_attr(limit_spec){
return cljs.core.second(limit_spec);
});
posh.lib.pull_analyze.remove_limits = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.walk.postwalk,(function (x){
if(cljs.core.truth_(posh.lib.pull_analyze.limit_spec_QMARK_(x))){
return posh.lib.pull_analyze.limit_attr(x);
} else {
return x;
}
}));
posh.lib.pull_analyze.recursive_val_QMARK_ = (function posh$lib$pull_analyze$recursive_val_QMARK_(v){
return ((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Symbol(null,"...","...",-1926939749,null))));
});
posh.lib.pull_analyze.tx_pattern_for_pull = (function posh$lib$pull_analyze$tx_pattern_for_pull(schema,pull_pattern,affected_pull,refs_only_QMARK_){
var entity_keys = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__73230_SHARP_){
return ((cljs.core.map_QMARK_(p1__73230_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),p1__73230_SHARP_)));
}),pull_pattern);
var val_keys = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__73231_SHARP_){
return ((posh.lib.pull_analyze.reverse_lookup_QMARK_(p1__73231_SHARP_)) || (posh.lib.pull_analyze.ref_QMARK_(schema,p1__73231_SHARP_)));
}),entity_keys);
var ref_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)]);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(val_keys),entity_keys));
var starred_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),val_keys);
var pull_maps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ref_keys,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,pull_pattern)));
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(affected_pull))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.not((function (){var or__4126__auto__ = refs_only_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.empty_QMARK_(val_keys);
}
})()))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(affected_pull),(cljs.core.truth_(starred_QMARK_)?new cljs.core.Symbol(null,"_","_",-1201019570,null):cljs.core.set(val_keys)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null):null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__73241){
var vec__73242 = p__73241;
var ref_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73242,(0),null);
var ref_pull = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73242,(1),null);
var r_QMARK_ = posh.lib.pull_analyze.reverse_lookup_QMARK_(ref_key);
var unrev_key = ((r_QMARK_)?posh.lib.pull_analyze.reverse_lookup(ref_key):ref_key);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((r_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),unrev_key,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(affected_pull)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(affected_pull),ref_key,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null)),((posh.lib.pull_analyze.recursive_val_QMARK_(ref_pull))?(cljs.core.truth_((ref_key.cljs$core$IFn$_invoke$arity$1 ? ref_key.cljs$core$IFn$_invoke$arity$1(affected_pull) : ref_key.call(null,affected_pull)))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__73233_SHARP_){
return (posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$4 ? posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$4(schema,pull_pattern,p1__73233_SHARP_,refs_only_QMARK_) : posh.lib.pull_analyze.tx_pattern_for_pull.call(null,schema,pull_pattern,p1__73233_SHARP_,refs_only_QMARK_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(ref_key.cljs$core$IFn$_invoke$arity$1 ? ref_key.cljs$core$IFn$_invoke$arity$1(affected_pull) : ref_key.call(null,affected_pull))], 0)):null):(cljs.core.truth_((function (){var or__4126__auto__ = r_QMARK_;
if(or__4126__auto__){
return or__4126__auto__;
} else {
return posh.lib.pull_analyze.cardinality_many_QMARK_(schema,unrev_key);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__73234_SHARP_){
return (posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$4 ? posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$4(schema,ref_pull,p1__73234_SHARP_,refs_only_QMARK_) : posh.lib.pull_analyze.tx_pattern_for_pull.call(null,schema,ref_pull,p1__73234_SHARP_,refs_only_QMARK_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(ref_key.cljs$core$IFn$_invoke$arity$1 ? ref_key.cljs$core$IFn$_invoke$arity$1(affected_pull) : ref_key.call(null,affected_pull))], 0)):(function (){var G__73245 = schema;
var G__73246 = ref_pull;
var G__73247 = (ref_key.cljs$core$IFn$_invoke$arity$2 ? ref_key.cljs$core$IFn$_invoke$arity$2(affected_pull,refs_only_QMARK_) : ref_key.call(null,affected_pull,refs_only_QMARK_));
return (posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$3 ? posh.lib.pull_analyze.tx_pattern_for_pull.cljs$core$IFn$_invoke$arity$3(G__73245,G__73246,G__73247) : posh.lib.pull_analyze.tx_pattern_for_pull.call(null,G__73245,G__73246,G__73247));
})()
)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pull_maps], 0)));
} else {
return null;
}
});
posh.lib.pull_analyze.pull_analyze = (function posh$lib$pull_analyze$pull_analyze(dcfg,retrieve,p__73248,pull_pattern,ent_id){
var map__73249 = p__73248;
var map__73249__$1 = (((((!((map__73249 == null))))?(((((map__73249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73249):map__73249);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73249__$1,new cljs.core.Keyword(null,"db","db",993250759));
var db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73249__$1,new cljs.core.Keyword(null,"db-id","db-id",747248515));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73249__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_((function (){var and__4115__auto__ = ent_id;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(retrieve);
} else {
return and__4115__auto__;
}
})())){
var affected_datoms = posh.lib.pull_analyze.pull_affected_datoms(new cljs.core.Keyword(null,"pull","pull",-860544805).cljs$core$IFn$_invoke$arity$1(dcfg),db,pull_pattern,(function (){var fexpr__73252 = new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__73252.cljs$core$IFn$_invoke$arity$2 ? fexpr__73252.cljs$core$IFn$_invoke$arity$2(db,ent_id) : fexpr__73252.call(null,db,ent_id));
})());
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),affected_datoms], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.pull_analyze.generate_affected_tx_datoms_for_pull(schema,affected_datoms);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,datoms])], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),db,datoms)])], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?(function (){var prepped_pull_pattern = posh.lib.pull_analyze.insert_dbid(posh.lib.pull_analyze.remove_limits(pull_pattern));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.datom_matcher.reduce_patterns(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.vector_QMARK_(ent_id))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.first(ent_id),cljs.core.second(ent_id)], null)], null):null),posh.lib.pull_analyze.tx_pattern_for_pull(schema,prepped_pull_pattern,affected_datoms,false)))])], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.datom_matcher.reduce_patterns(posh.lib.pull_analyze.tx_pattern_for_pull(schema,prepped_pull_pattern,affected_datoms,true))])], null):null)], 0));
})():null)], 0));
} else {
return null;
}
});
posh.lib.pull_analyze.pull_many_analyze = (function posh$lib$pull_analyze$pull_many_analyze(dcfg,retrieve,p__73258,pull_pattern,ent_ids){
var map__73259 = p__73258;
var map__73259__$1 = (((((!((map__73259 == null))))?(((((map__73259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73259):map__73259);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73259__$1,new cljs.core.Keyword(null,"db","db",993250759));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73259__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73259__$1,new cljs.core.Keyword(null,"db-id","db-id",747248515));
if(cljs.core.empty_QMARK_(retrieve)){
return null;
} else {
var resolved_ent_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73254_SHARP_){
var fexpr__73261 = new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__73261.cljs$core$IFn$_invoke$arity$2 ? fexpr__73261.cljs$core$IFn$_invoke$arity$2(db,p1__73254_SHARP_) : fexpr__73261.call(null,db,p1__73254_SHARP_));
}),ent_ids);
var affected_datoms = posh.lib.pull_analyze.pull_affected_datoms(new cljs.core.Keyword(null,"pull-many","pull-many",217148130).cljs$core$IFn$_invoke$arity$1(dcfg),db,pull_pattern,ent_ids);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),affected_datoms], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__73255_SHARP_){
return posh.lib.pull_analyze.generate_affected_tx_datoms_for_pull(schema,p1__73255_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([affected_datoms], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,datoms])], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),db,datoms)])], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,(function (){var patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73256_SHARP_){
return posh.lib.pull_analyze.tx_pattern_for_pull(schema,posh.lib.pull_analyze.insert_dbid(posh.lib.pull_analyze.remove_limits(pull_pattern)),p1__73256_SHARP_,false);
}),affected_datoms);
cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.set(resolved_ent_ids),cljs.core.rest(cljs.core.ffirst(patterns)))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([patterns], 0)));

return posh.lib.datom_matcher.reduce_patterns(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,patterns));
})()])], null):null)], 0));
}
});

//# sourceMappingURL=posh.lib.pull_analyze.js.map
