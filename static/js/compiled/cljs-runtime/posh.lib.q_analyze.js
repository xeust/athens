goog.provide('posh.lib.q_analyze');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__73286 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__73286) : stop_at_QMARK_.call(null,G__73286));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__73288 = stop_at_QMARK_;
var G__73289 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__73288,G__73289) : posh.lib.q_analyze.take_until.call(null,G__73288,G__73289));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__73300 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__73300) : rest_at_QMARK_.call(null,G__73300));
}
})())){
return ls;
} else {
var G__74418 = rest_at_QMARK_;
var G__74419 = cljs.core.rest(ls);
rest_at_QMARK_ = G__74418;
ls = G__74419;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__73302 = split_at_QMARK_;
var G__73303 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__73302,G__73303) : posh.lib.q_analyze.split_list_at.call(null,G__73302,G__73303));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__73309 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__73309) : posh.lib.q_analyze.get_all_vars.call(null,G__73309));
})(),(function (){var G__73310 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__73310) : posh.lib.q_analyze.get_all_vars.call(null,G__73310));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__73311 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__73311) : posh.lib.q_analyze.get_all_vars.call(null,G__73311));
})(),cljs.core.first(query));
} else {
var G__73312 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__73312) : posh.lib.q_analyze.get_all_vars.call(null,G__73312));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4115__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4115__auto__;
}
})())){
var G__73313 = cljs.core.rest(eav);
var G__73314 = (n - (1));
var G__73315 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__73316 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__73313,G__73314,G__73315,G__73316) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__73313,G__73314,G__73315,G__73316));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__73318 = cljs.core.rest(eav);
var G__73319 = (n - (1));
var G__73320 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__73321 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__73318,G__73319,G__73320,G__73321) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__73318,G__73319,G__73320,G__73321));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__73324 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__73324) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__73324));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__73325 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__73325) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__73325));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__73326 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__73326) : posh.lib.q_analyze.get_eavs.call(null,G__73326));
})(),(function (){var G__73327 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__73327) : posh.lib.q_analyze.get_eavs.call(null,G__73327));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__73328 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__73328) : posh.lib.q_analyze.get_eavs.call(null,G__73328));
})(),(function (){var G__73329 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__73329) : posh.lib.q_analyze.get_eavs.call(null,G__73329));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__73330 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__73330) : posh.lib.q_analyze.get_eavs.call(null,G__73330));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_73348 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_73348)) && ((cljs.core.count(ocr_73348) === 2)))){
try{var ocr_73348_0__73371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73348,(0));
if(((cljs.core.vector_QMARK_(ocr_73348_0__73371)) && ((cljs.core.count(ocr_73348_0__73371) === 5)))){
try{var ocr_73348_0__73371_0__73373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73348_0__73371,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73348_0__73371_0__73373,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73348_0__73371,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73348_0__73371,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73348_0__73371,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73348,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__73394 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__73394) : posh.lib.q_analyze.get_eavs.call(null,G__73394));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e73393){if((e73393 instanceof Error)){
var e__70384__auto__ = e73393;
if((e__70384__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto__;
}
} else {
throw e73393;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73389){if((e73389 instanceof Error)){
var e__70384__auto__ = e73389;
if((e__70384__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto__;
}
} else {
throw e73389;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73384){if((e73384 instanceof Error)){
var e__70384__auto__ = e73384;
if((e__70384__auto__ === cljs.core.match.backtrack)){
var G__73385 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__73385) : posh.lib.q_analyze.get_eavs.call(null,G__73385));
} else {
throw e__70384__auto__;
}
} else {
throw e73384;

}
}} else {
var G__73395 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__73395) : posh.lib.q_analyze.get_eavs.call(null,G__73395));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__73403){
var vec__73404 = p__73403;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73404,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73407_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__73407_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__73407_SHARP_);
} else {
return p1__73407_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__73410 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__73410) : posh.lib.q_analyze.count_qvars.call(null,G__73410));
})(),(function (){var G__73411 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__73411) : posh.lib.q_analyze.count_qvars.call(null,G__73411));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__73412 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__73412) : posh.lib.q_analyze.count_qvars.call(null,G__73412));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4529__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__73413(s__73414){
return (new cljs.core.LazySeq(null,(function (){
var s__73414__$1 = s__73414;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73414__$1);
if(temp__5735__auto__){
var s__73414__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73414__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73414__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73416 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73415 = (0);
while(true){
if((i__73415 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__73415);
cljs.core.chunk_append(b__73416,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__74454 = (i__73415 + (1));
i__73415 = G__74454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73416),posh$lib$q_analyze$fill_qvar_set_$_iter__73413(cljs.core.chunk_rest(s__73414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73416),null);
}
} else {
var r = cljs.core.first(s__73414__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__73413(cljs.core.rest(s__73414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__73429 = cljs.core.first(seq1);
var G__73430 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__73429,G__73430) : f.call(null,G__73429,G__73430));
})(),(function (){var G__73431 = f;
var G__73432 = cljs.core.rest(seq1);
var G__73433 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__73431,G__73432,G__73433) : posh.lib.q_analyze.seq_merge_with.call(null,G__73431,G__73432,G__73433));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__73439){
var vec__73440 = p__73439;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73440,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73440,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73440,(2),null);
var eav = vec__73440;
var vec__73443 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73443,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73443,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73443,(2),null);
var iter__4529__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__73446(s__73447){
return (new cljs.core.LazySeq(null,(function (){
var s__73447__$1 = s__73447;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73447__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__73447__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__73446_$_iter__73448(s__73449){
return (new cljs.core.LazySeq(null,((function (s__73447__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav){
return (function (){
var s__73449__$1 = s__73449;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__73449__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4525__auto__ = ((function (s__73449__$1,s__73447__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__73446_$_iter__73448_$_iter__73450(s__73451){
return (new cljs.core.LazySeq(null,((function (s__73449__$1,s__73447__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav){
return (function (){
var s__73451__$1 = s__73451;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__73451__$1);
if(temp__5735__auto____$2){
var s__73451__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__73451__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73451__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73453 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73452 = (0);
while(true){
if((i__73452 < size__4528__auto__)){
var vv = cljs.core._nth(c__4527__auto__,i__73452);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__73452,s__73451__$1,s__73449__$1,s__73447__$1,vv,c__4527__auto__,size__4528__auto__,b__73453,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav){
return (function (p1__73437_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__73437_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__73452,s__73451__$1,s__73449__$1,s__73447__$1,vv,c__4527__auto__,size__4528__auto__,b__73453,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__73452,s__73451__$1,s__73449__$1,s__73447__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__73453,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav){
return (function (p__73454){
var vec__73455 = p__73454;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73455,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73455,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__73452,s__73451__$1,s__73449__$1,s__73447__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__73453,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__73452,s__73451__$1,s__73449__$1,s__73447__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__73453,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav){
return (function (p1__73438_SHARP_){
if(cljs.core.truth_(p1__73438_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__73452,s__73451__$1,s__73449__$1,s__73447__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__73453,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__73453,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__74470 = (i__73452 + (1));
i__73452 = G__74470;
continue;
} else {
var G__74471 = (i__73452 + (1));
i__73452 = G__74471;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73453),posh$lib$q_analyze$pattern_from_eav__old_$_iter__73446_$_iter__73448_$_iter__73450(cljs.core.chunk_rest(s__73451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73453),null);
}
} else {
var vv = cljs.core.first(s__73451__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__73451__$1,s__73449__$1,s__73447__$1,vv,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav){
return (function (p1__73437_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__73437_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__73451__$1,s__73449__$1,s__73447__$1,vv,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__73451__$1,s__73449__$1,s__73447__$1,wildcard_count,vv,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav){
return (function (p__73472){
var vec__73473 = p__73472;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73473,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73473,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__73451__$1,s__73449__$1,s__73447__$1,wildcard_count,vv,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__73451__$1,s__73449__$1,s__73447__$1,wildcard_count,exposed_qvars,vv,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav){
return (function (p1__73438_SHARP_){
if(cljs.core.truth_(p1__73438_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__73451__$1,s__73449__$1,s__73447__$1,wildcard_count,exposed_qvars,vv,s__73451__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__73446_$_iter__73448_$_iter__73450(cljs.core.rest(s__73451__$2)));
} else {
var G__74472 = cljs.core.rest(s__73451__$2);
s__73451__$1 = G__74472;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__73449__$1,s__73447__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav))
,null,null));
});})(s__73449__$1,s__73447__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__73446_$_iter__73448(cljs.core.rest(s__73449__$1)));
} else {
var G__74473 = cljs.core.rest(s__73449__$1);
s__73449__$1 = G__74473;
continue;
}
} else {
return null;
}
break;
}
});})(s__73447__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav))
,null,null));
});})(s__73447__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__73443,qe,qa,qv,vec__73440,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__73446(cljs.core.rest(s__73447__$1)));
} else {
var G__74474 = cljs.core.rest(s__73447__$1);
s__73447__$1 = G__74474;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_73517 = cljs.core.vec(eav);
var ocr_73518 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_73517)) && ((cljs.core.count(ocr_73517) === 3)))){
try{var ocr_73517_0__73594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_0__73594,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_73517_1__73595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_1__73595,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_73517_2__73596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_2__73596,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74113){if((e74113 instanceof Error)){
var e__70384__auto__ = e74113;
if((e__70384__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_73518)) && ((cljs.core.count(ocr_73518) === 3)))){
try{var ocr_73518_2__73612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73612 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74117){if((e74117 instanceof Error)){
var e__70384__auto____$1 = e74117;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73612 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74119){if((e74119 instanceof Error)){
var e__70384__auto____$2 = e74119;
if((e__70384__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$2;
}
} else {
throw e74119;

}
}} else {
throw e__70384__auto____$1;
}
} else {
throw e74117;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74116){if((e74116 instanceof Error)){
var e__70384__auto____$1 = e74116;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74116;

}
}} else {
throw e__70384__auto__;
}
} else {
throw e74113;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74097){if((e74097 instanceof Error)){
var e__70384__auto__ = e74097;
if((e__70384__auto__ === cljs.core.match.backtrack)){
try{var ocr_73517_2__73596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_2__73596,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_73518)) && ((cljs.core.count(ocr_73518) === 3)))){
try{var ocr_73518_1__73618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73618 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74106){if((e74106 instanceof Error)){
var e__70384__auto____$1 = e74106;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_73518_1__73618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73618 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74110){if((e74110 instanceof Error)){
var e__70384__auto____$2 = e74110;
if((e__70384__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$2;
}
} else {
throw e74110;

}
}} else {
throw e__70384__auto____$1;
}
} else {
throw e74106;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74104){if((e74104 instanceof Error)){
var e__70384__auto____$1 = e74104;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74104;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74101){if((e74101 instanceof Error)){
var e__70384__auto____$1 = e74101;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74101;

}
}} else {
throw e__70384__auto__;
}
} else {
throw e74097;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73947){if((e73947 instanceof Error)){
var e__70384__auto__ = e73947;
if((e__70384__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_73518)) && ((cljs.core.count(ocr_73518) === 3)))){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === false)){
try{var ocr_73517_1__73595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_1__73595,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_73517_2__73596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_2__73596,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74063){if((e74063 instanceof Error)){
var e__70384__auto____$1 = e74063;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74063;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74042){if((e74042 instanceof Error)){
var e__70384__auto____$1 = e74042;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74042;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73949){if((e73949 instanceof Error)){
var e__70384__auto____$1 = e73949;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === true)){
try{var ocr_73517_2__73596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_2__73596,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_73517_1__73595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_1__73595,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74033){if((e74033 instanceof Error)){
var e__70384__auto____$2 = e74033;
if((e__70384__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74034){if((e74034 instanceof Error)){
var e__70384__auto____$3 = e74034;
if((e__70384__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74035){if((e74035 instanceof Error)){
var e__70384__auto____$4 = e74035;
if((e__70384__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$4;
}
} else {
throw e74035;

}
}} else {
throw e__70384__auto____$3;
}
} else {
throw e74034;

}
}} else {
throw e__70384__auto____$2;
}
} else {
throw e74033;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74028){if((e74028 instanceof Error)){
var e__70384__auto____$2 = e74028;
if((e__70384__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$2;
}
} else {
throw e74028;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73950){if((e73950 instanceof Error)){
var e__70384__auto____$2 = e73950;
if((e__70384__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === false)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === true)){
try{var ocr_73517_2__73596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_2__73596,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74023){if((e74023 instanceof Error)){
var e__70384__auto____$3 = e74023;
if((e__70384__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$3;
}
} else {
throw e74023;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74019){if((e74019 instanceof Error)){
var e__70384__auto____$3 = e74019;
if((e__70384__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === false)){
try{var ocr_73517_2__73596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_2__73596,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74022){if((e74022 instanceof Error)){
var e__70384__auto____$4 = e74022;
if((e__70384__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$4;
}
} else {
throw e74022;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74020){if((e74020 instanceof Error)){
var e__70384__auto____$4 = e74020;
if((e__70384__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$4;
}
} else {
throw e74020;

}
}} else {
throw e__70384__auto____$3;
}
} else {
throw e74019;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73951){if((e73951 instanceof Error)){
var e__70384__auto____$3 = e73951;
if((e__70384__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === true)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === true)){
try{var ocr_73517_1__73595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_1__73595,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74018){if((e74018 instanceof Error)){
var e__70384__auto____$4 = e74018;
if((e__70384__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$4;
}
} else {
throw e74018;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74017){if((e74017 instanceof Error)){
var e__70384__auto____$4 = e74017;
if((e__70384__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$4;
}
} else {
throw e74017;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73952){if((e73952 instanceof Error)){
var e__70384__auto____$4 = e73952;
if((e__70384__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === false)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === true)){
try{var ocr_73517_1__73595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_1__73595,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74011){if((e74011 instanceof Error)){
var e__70384__auto____$5 = e74011;
if((e__70384__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$5;
}
} else {
throw e74011;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74007){if((e74007 instanceof Error)){
var e__70384__auto____$5 = e74007;
if((e__70384__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$5;
}
} else {
throw e74007;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73953){if((e73953 instanceof Error)){
var e__70384__auto____$5 = e73953;
if((e__70384__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === true)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === false)){
try{var ocr_73517_1__73595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_1__73595,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74006){if((e74006 instanceof Error)){
var e__70384__auto____$6 = e74006;
if((e__70384__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$6;
}
} else {
throw e74006;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74005){if((e74005 instanceof Error)){
var e__70384__auto____$6 = e74005;
if((e__70384__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$6;
}
} else {
throw e74005;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73954){if((e73954 instanceof Error)){
var e__70384__auto____$6 = e73954;
if((e__70384__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === false)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === false)){
try{var ocr_73517_1__73595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_1__73595,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74004){if((e74004 instanceof Error)){
var e__70384__auto____$7 = e74004;
if((e__70384__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$7;
}
} else {
throw e74004;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74003){if((e74003 instanceof Error)){
var e__70384__auto____$7 = e74003;
if((e__70384__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$7;
}
} else {
throw e74003;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73955){if((e73955 instanceof Error)){
var e__70384__auto____$7 = e73955;
if((e__70384__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === true)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === true)){
try{var ocr_73517_0__73594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_0__73594,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74001){if((e74001 instanceof Error)){
var e__70384__auto____$8 = e74001;
if((e__70384__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$8;
}
} else {
throw e74001;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74000){if((e74000 instanceof Error)){
var e__70384__auto____$8 = e74000;
if((e__70384__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$8;
}
} else {
throw e74000;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73956){if((e73956 instanceof Error)){
var e__70384__auto____$8 = e73956;
if((e__70384__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === false)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === true)){
try{var ocr_73517_0__73594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_0__73594,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73996){if((e73996 instanceof Error)){
var e__70384__auto____$9 = e73996;
if((e__70384__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$9;
}
} else {
throw e73996;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73995){if((e73995 instanceof Error)){
var e__70384__auto____$9 = e73995;
if((e__70384__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$9;
}
} else {
throw e73995;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73957){if((e73957 instanceof Error)){
var e__70384__auto____$9 = e73957;
if((e__70384__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === true)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === false)){
try{var ocr_73517_0__73594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_0__73594,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73994){if((e73994 instanceof Error)){
var e__70384__auto____$10 = e73994;
if((e__70384__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$10;
}
} else {
throw e73994;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73993){if((e73993 instanceof Error)){
var e__70384__auto____$10 = e73993;
if((e__70384__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$10;
}
} else {
throw e73993;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73958){if((e73958 instanceof Error)){
var e__70384__auto____$10 = e73958;
if((e__70384__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === false)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === false)){
try{var ocr_73517_0__73594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_73517_0__73594,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73990){if((e73990 instanceof Error)){
var e__70384__auto____$11 = e73990;
if((e__70384__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$11;
}
} else {
throw e73990;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73988){if((e73988 instanceof Error)){
var e__70384__auto____$11 = e73988;
if((e__70384__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$11;
}
} else {
throw e73988;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73959){if((e73959 instanceof Error)){
var e__70384__auto____$11 = e73959;
if((e__70384__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === true)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === true)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73986){if((e73986 instanceof Error)){
var e__70384__auto____$12 = e73986;
if((e__70384__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$12;
}
} else {
throw e73986;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73978){if((e73978 instanceof Error)){
var e__70384__auto____$12 = e73978;
if((e__70384__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === false)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73985){if((e73985 instanceof Error)){
var e__70384__auto____$13 = e73985;
if((e__70384__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$13;
}
} else {
throw e73985;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73979){if((e73979 instanceof Error)){
var e__70384__auto____$13 = e73979;
if((e__70384__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === true)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73981){if((e73981 instanceof Error)){
var e__70384__auto____$14 = e73981;
if((e__70384__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$14;
}
} else {
throw e73981;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73980){if((e73980 instanceof Error)){
var e__70384__auto____$14 = e73980;
if((e__70384__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$14;
}
} else {
throw e73980;

}
}} else {
throw e__70384__auto____$13;
}
} else {
throw e73979;

}
}} else {
throw e__70384__auto____$12;
}
} else {
throw e73978;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73960){if((e73960 instanceof Error)){
var e__70384__auto____$12 = e73960;
if((e__70384__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === false)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === true)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73977){if((e73977 instanceof Error)){
var e__70384__auto____$13 = e73977;
if((e__70384__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$13;
}
} else {
throw e73977;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73975){if((e73975 instanceof Error)){
var e__70384__auto____$13 = e73975;
if((e__70384__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$13;
}
} else {
throw e73975;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73961){if((e73961 instanceof Error)){
var e__70384__auto____$13 = e73961;
if((e__70384__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === true)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === false)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73974){if((e73974 instanceof Error)){
var e__70384__auto____$14 = e73974;
if((e__70384__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$14;
}
} else {
throw e73974;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73973){if((e73973 instanceof Error)){
var e__70384__auto____$14 = e73973;
if((e__70384__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$14;
}
} else {
throw e73973;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73962){if((e73962 instanceof Error)){
var e__70384__auto____$14 = e73962;
if((e__70384__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_73518_2__73655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(2));
if((ocr_73518_2__73655 === false)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === true)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73972){if((e73972 instanceof Error)){
var e__70384__auto____$15 = e73972;
if((e__70384__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$15;
}
} else {
throw e73972;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73964){if((e73964 instanceof Error)){
var e__70384__auto____$15 = e73964;
if((e__70384__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_73518_0__73653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(0));
if((ocr_73518_0__73653 === false)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73967){if((e73967 instanceof Error)){
var e__70384__auto____$16 = e73967;
if((e__70384__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_73518_1__73654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73518,(1));
if((ocr_73518_1__73654 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_73517,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e73968){if((e73968 instanceof Error)){
var e__70384__auto____$17 = e73968;
if((e__70384__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$17;
}
} else {
throw e73968;

}
}} else {
throw e__70384__auto____$16;
}
} else {
throw e73967;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73965){if((e73965 instanceof Error)){
var e__70384__auto____$16 = e73965;
if((e__70384__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$16;
}
} else {
throw e73965;

}
}} else {
throw e__70384__auto____$15;
}
} else {
throw e73964;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73963){if((e73963 instanceof Error)){
var e__70384__auto____$15 = e73963;
if((e__70384__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$15;
}
} else {
throw e73963;

}
}} else {
throw e__70384__auto____$14;
}
} else {
throw e73962;

}
}} else {
throw e__70384__auto____$13;
}
} else {
throw e73961;

}
}} else {
throw e__70384__auto____$12;
}
} else {
throw e73960;

}
}} else {
throw e__70384__auto____$11;
}
} else {
throw e73959;

}
}} else {
throw e__70384__auto____$10;
}
} else {
throw e73958;

}
}} else {
throw e__70384__auto____$9;
}
} else {
throw e73957;

}
}} else {
throw e__70384__auto____$8;
}
} else {
throw e73956;

}
}} else {
throw e__70384__auto____$7;
}
} else {
throw e73955;

}
}} else {
throw e__70384__auto____$6;
}
} else {
throw e73954;

}
}} else {
throw e__70384__auto____$5;
}
} else {
throw e73953;

}
}} else {
throw e__70384__auto____$4;
}
} else {
throw e73952;

}
}} else {
throw e__70384__auto____$3;
}
} else {
throw e73951;

}
}} else {
throw e__70384__auto____$2;
}
} else {
throw e73950;

}
}} else {
throw e__70384__auto____$1;
}
} else {
throw e73949;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73948){if((e73948 instanceof Error)){
var e__70384__auto____$1 = e73948;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e73948;

}
}} else {
throw e__70384__auto__;
}
} else {
throw e73947;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e73946){if((e73946 instanceof Error)){
var e__70384__auto__ = e73946;
if((e__70384__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__70384__auto__;
}
} else {
throw e73946;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_74126 = cljs.core.vec(eav);
var ocr_74127 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_74126)) && ((cljs.core.count(ocr_74126) === 3)))){
try{var ocr_74126_0__74160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_0__74160,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_74126_1__74161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_1__74161,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_74126_2__74162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_2__74162,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e74275){if((e74275 instanceof Error)){
var e__70384__auto__ = e74275;
if((e__70384__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_74127)) && ((cljs.core.count(ocr_74127) === 3)))){
try{var ocr_74127_2__74166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(2));
if((ocr_74127_2__74166 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74281){if((e74281 instanceof Error)){
var e__70384__auto____$1 = e74281;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_74127_2__74166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(2));
if((ocr_74127_2__74166 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74282){if((e74282 instanceof Error)){
var e__70384__auto____$2 = e74282;
if((e__70384__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$2;
}
} else {
throw e74282;

}
}} else {
throw e__70384__auto____$1;
}
} else {
throw e74281;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74277){if((e74277 instanceof Error)){
var e__70384__auto____$1 = e74277;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74277;

}
}} else {
throw e__70384__auto__;
}
} else {
throw e74275;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74267){if((e74267 instanceof Error)){
var e__70384__auto__ = e74267;
if((e__70384__auto__ === cljs.core.match.backtrack)){
try{var ocr_74126_2__74162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_2__74162,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_74127)) && ((cljs.core.count(ocr_74127) === 3)))){
try{var ocr_74127_1__74171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74171 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74270){if((e74270 instanceof Error)){
var e__70384__auto____$1 = e74270;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_74127_1__74171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74171 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74271){if((e74271 instanceof Error)){
var e__70384__auto____$2 = e74271;
if((e__70384__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$2;
}
} else {
throw e74271;

}
}} else {
throw e__70384__auto____$1;
}
} else {
throw e74270;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74269){if((e74269 instanceof Error)){
var e__70384__auto____$1 = e74269;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74269;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74268){if((e74268 instanceof Error)){
var e__70384__auto____$1 = e74268;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74268;

}
}} else {
throw e__70384__auto__;
}
} else {
throw e74267;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74211){if((e74211 instanceof Error)){
var e__70384__auto__ = e74211;
if((e__70384__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_74127)) && ((cljs.core.count(ocr_74127) === 3)))){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === false)){
try{var ocr_74126_1__74161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_1__74161,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_74126_2__74162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_2__74162,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74266){if((e74266 instanceof Error)){
var e__70384__auto____$1 = e74266;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74266;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74265){if((e74265 instanceof Error)){
var e__70384__auto____$1 = e74265;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74265;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74213){if((e74213 instanceof Error)){
var e__70384__auto____$1 = e74213;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === true)){
try{var ocr_74126_2__74162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_2__74162,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_74126_1__74161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_1__74161,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74259){if((e74259 instanceof Error)){
var e__70384__auto____$2 = e74259;
if((e__70384__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74260){if((e74260 instanceof Error)){
var e__70384__auto____$3 = e74260;
if((e__70384__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74261){if((e74261 instanceof Error)){
var e__70384__auto____$4 = e74261;
if((e__70384__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$4;
}
} else {
throw e74261;

}
}} else {
throw e__70384__auto____$3;
}
} else {
throw e74260;

}
}} else {
throw e__70384__auto____$2;
}
} else {
throw e74259;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74258){if((e74258 instanceof Error)){
var e__70384__auto____$2 = e74258;
if((e__70384__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$2;
}
} else {
throw e74258;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74214){if((e74214 instanceof Error)){
var e__70384__auto____$2 = e74214;
if((e__70384__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === false)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === true)){
try{var ocr_74126_2__74162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_2__74162,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74256){if((e74256 instanceof Error)){
var e__70384__auto____$3 = e74256;
if((e__70384__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$3;
}
} else {
throw e74256;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74255){if((e74255 instanceof Error)){
var e__70384__auto____$3 = e74255;
if((e__70384__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$3;
}
} else {
throw e74255;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74215){if((e74215 instanceof Error)){
var e__70384__auto____$3 = e74215;
if((e__70384__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_74127_2__74179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(2));
if((ocr_74127_2__74179 === true)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === true)){
try{var ocr_74126_1__74161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_1__74161,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74254){if((e74254 instanceof Error)){
var e__70384__auto____$4 = e74254;
if((e__70384__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$4;
}
} else {
throw e74254;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74253){if((e74253 instanceof Error)){
var e__70384__auto____$4 = e74253;
if((e__70384__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$4;
}
} else {
throw e74253;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74216){if((e74216 instanceof Error)){
var e__70384__auto____$4 = e74216;
if((e__70384__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_74127_2__74179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(2));
if((ocr_74127_2__74179 === false)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === true)){
try{var ocr_74126_1__74161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_1__74161,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74252){if((e74252 instanceof Error)){
var e__70384__auto____$5 = e74252;
if((e__70384__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$5;
}
} else {
throw e74252;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74248){if((e74248 instanceof Error)){
var e__70384__auto____$5 = e74248;
if((e__70384__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$5;
}
} else {
throw e74248;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74217){if((e74217 instanceof Error)){
var e__70384__auto____$5 = e74217;
if((e__70384__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_74127_2__74179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(2));
if((ocr_74127_2__74179 === true)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === false)){
try{var ocr_74126_1__74161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_1__74161,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74247){if((e74247 instanceof Error)){
var e__70384__auto____$6 = e74247;
if((e__70384__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$6;
}
} else {
throw e74247;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74244){if((e74244 instanceof Error)){
var e__70384__auto____$6 = e74244;
if((e__70384__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === true)){
try{var ocr_74126_0__74160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_0__74160,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74246){if((e74246 instanceof Error)){
var e__70384__auto____$7 = e74246;
if((e__70384__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$7;
}
} else {
throw e74246;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74245){if((e74245 instanceof Error)){
var e__70384__auto____$7 = e74245;
if((e__70384__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$7;
}
} else {
throw e74245;

}
}} else {
throw e__70384__auto____$6;
}
} else {
throw e74244;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74218){if((e74218 instanceof Error)){
var e__70384__auto____$6 = e74218;
if((e__70384__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_74127_2__74179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(2));
if((ocr_74127_2__74179 === false)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === true)){
try{var ocr_74126_0__74160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_0__74160,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74243){if((e74243 instanceof Error)){
var e__70384__auto____$7 = e74243;
if((e__70384__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$7;
}
} else {
throw e74243;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74242){if((e74242 instanceof Error)){
var e__70384__auto____$7 = e74242;
if((e__70384__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$7;
}
} else {
throw e74242;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74219){if((e74219 instanceof Error)){
var e__70384__auto____$7 = e74219;
if((e__70384__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_74127_2__74179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(2));
if((ocr_74127_2__74179 === true)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === false)){
try{var ocr_74126_0__74160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_74126_0__74160,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74241){if((e74241 instanceof Error)){
var e__70384__auto____$8 = e74241;
if((e__70384__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$8;
}
} else {
throw e74241;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74235){if((e74235 instanceof Error)){
var e__70384__auto____$8 = e74235;
if((e__70384__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === true)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74239){if((e74239 instanceof Error)){
var e__70384__auto____$9 = e74239;
if((e__70384__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74240){if((e74240 instanceof Error)){
var e__70384__auto____$10 = e74240;
if((e__70384__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$10;
}
} else {
throw e74240;

}
}} else {
throw e__70384__auto____$9;
}
} else {
throw e74239;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74236){if((e74236 instanceof Error)){
var e__70384__auto____$9 = e74236;
if((e__70384__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === false)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74238){if((e74238 instanceof Error)){
var e__70384__auto____$10 = e74238;
if((e__70384__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$10;
}
} else {
throw e74238;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74237){if((e74237 instanceof Error)){
var e__70384__auto____$10 = e74237;
if((e__70384__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$10;
}
} else {
throw e74237;

}
}} else {
throw e__70384__auto____$9;
}
} else {
throw e74236;

}
}} else {
throw e__70384__auto____$8;
}
} else {
throw e74235;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74220){if((e74220 instanceof Error)){
var e__70384__auto____$8 = e74220;
if((e__70384__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_74127_2__74179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(2));
if((ocr_74127_2__74179 === false)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === true)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74231){if((e74231 instanceof Error)){
var e__70384__auto____$9 = e74231;
if((e__70384__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$9;
}
} else {
throw e74231;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74230){if((e74230 instanceof Error)){
var e__70384__auto____$9 = e74230;
if((e__70384__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$9;
}
} else {
throw e74230;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74221){if((e74221 instanceof Error)){
var e__70384__auto____$9 = e74221;
if((e__70384__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_74127_2__74179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(2));
if((ocr_74127_2__74179 === true)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === false)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74229){if((e74229 instanceof Error)){
var e__70384__auto____$10 = e74229;
if((e__70384__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$10;
}
} else {
throw e74229;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74228){if((e74228 instanceof Error)){
var e__70384__auto____$10 = e74228;
if((e__70384__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$10;
}
} else {
throw e74228;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74222){if((e74222 instanceof Error)){
var e__70384__auto____$10 = e74222;
if((e__70384__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_74127_2__74179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(2));
if((ocr_74127_2__74179 === false)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === true)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74227){if((e74227 instanceof Error)){
var e__70384__auto____$11 = e74227;
if((e__70384__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$11;
}
} else {
throw e74227;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74224){if((e74224 instanceof Error)){
var e__70384__auto____$11 = e74224;
if((e__70384__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_74127_0__74177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(0));
if((ocr_74127_0__74177 === false)){
try{var ocr_74127_1__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74127,(1));
if((ocr_74127_1__74178 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_74126,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e74226){if((e74226 instanceof Error)){
var e__70384__auto____$12 = e74226;
if((e__70384__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$12;
}
} else {
throw e74226;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74225){if((e74225 instanceof Error)){
var e__70384__auto____$12 = e74225;
if((e__70384__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$12;
}
} else {
throw e74225;

}
}} else {
throw e__70384__auto____$11;
}
} else {
throw e74224;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74223){if((e74223 instanceof Error)){
var e__70384__auto____$11 = e74223;
if((e__70384__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$11;
}
} else {
throw e74223;

}
}} else {
throw e__70384__auto____$10;
}
} else {
throw e74222;

}
}} else {
throw e__70384__auto____$9;
}
} else {
throw e74221;

}
}} else {
throw e__70384__auto____$8;
}
} else {
throw e74220;

}
}} else {
throw e__70384__auto____$7;
}
} else {
throw e74219;

}
}} else {
throw e__70384__auto____$6;
}
} else {
throw e74218;

}
}} else {
throw e__70384__auto____$5;
}
} else {
throw e74217;

}
}} else {
throw e__70384__auto____$4;
}
} else {
throw e74216;

}
}} else {
throw e__70384__auto____$3;
}
} else {
throw e74215;

}
}} else {
throw e__70384__auto____$2;
}
} else {
throw e74214;

}
}} else {
throw e__70384__auto____$1;
}
} else {
throw e74213;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74212){if((e74212 instanceof Error)){
var e__70384__auto____$1 = e74212;
if((e__70384__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__70384__auto____$1;
}
} else {
throw e74212;

}
}} else {
throw e__70384__auto__;
}
} else {
throw e74211;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e74207){if((e74207 instanceof Error)){
var e__70384__auto__ = e74207;
if((e__70384__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__70384__auto__;
}
} else {
throw e74207;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74287){
var vec__74288 = p__74287;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74288,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__74284_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__74284_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74293){
var vec__74294 = p__74293;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74294,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__74292_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__74292_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__74304 = cljs.core.rest(ins);
var G__74305 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__74304,G__74305) : posh.lib.q_analyze.just_qvars.call(null,G__74304,G__74305));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74307_SHARP_){
return cljs.core.zipmap(qvars,p1__74307_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__74323 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74323,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74323,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74323,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74323,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__74629 = var$;
var G__74630 = dbvarmap;
var G__74631 = cljs.core.rest(dbeavs);
var$ = G__74629;
dbvarmap = G__74630;
dbeavs = G__74631;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__74326 = cljs.core.rest(vars);
var G__74327 = dbvarmap;
var G__74328 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__74326,G__74327,G__74328) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__74326,G__74327,G__74328));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__74634 = (n + (1));
var G__74635 = cljs.core.rest(xs__$1);
n = G__74634;
xs__$1 = G__74635;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4115__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74337_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__74337_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__74337_SHARP_) : type.call(null,p1__74337_SHARP_));
} else {
return p1__74337_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__74342 = cljs.core.rest(ins);
var G__74343 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__74342,G__74343) : posh.lib.q_analyze.make_dbarg_map.call(null,G__74342,G__74343));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74348){
var vec__74349 = p__74348;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74349,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74349,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__74354_SHARP_,p2__74353_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__74353_SHARP_)){
return p1__74354_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__74363 = cljs.core._EQ_;
var expr__74364 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__74363.cljs$core$IFn$_invoke$arity$2 ? pred__74363.cljs$core$IFn$_invoke$arity$2((1),expr__74364) : pred__74363.call(null,(1),expr__74364)))){
return true;
} else {
if(cljs.core.truth_((pred__74363.cljs$core$IFn$_invoke$arity$2 ? pred__74363.cljs$core$IFn$_invoke$arity$2((3),expr__74364) : pred__74363.call(null,(3),expr__74364)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__74655 = cljs.core.first(remaining);
var G__74656 = cljs.core.rest(remaining);
clause = G__74655;
remaining = G__74656;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__74657 = cljs.core.first(remaining);
var G__74658 = cljs.core.rest(remaining);
clause = G__74657;
remaining = G__74658;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4529__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__74368(s__74369){
return (new cljs.core.LazySeq(null,(function (){
var s__74369__$1 = s__74369;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__74369__$1);
if(temp__5735__auto__){
var s__74369__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74369__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__74369__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__74371 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__74370 = (0);
while(true){
if((i__74370 < size__4528__auto__)){
var var_value = cljs.core._nth(c__4527__auto__,i__74370);
cljs.core.chunk_append(b__74371,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__74665 = (i__74370 + (1));
i__74370 = G__74665;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74371),posh$lib$q_analyze$resolve_any_idents_$_iter__74368(cljs.core.chunk_rest(s__74369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74371),null);
}
} else {
var var_value = cljs.core.first(s__74369__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__74368(cljs.core.rest(s__74369__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74384){
var vec__74385 = p__74384;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74385,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74385,(1),null);
var or__4126__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74388){
var vec__74389 = p__74388;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74389,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74389,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74395){
var vec__74396 = p__74395;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74396,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74396,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74400){
var vec__74401 = p__74400;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74401,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74401,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__74405 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__74406 = cljs.core.vec(r);
var fexpr__74404 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__74404.cljs$core$IFn$_invoke$arity$2 ? fexpr__74404.cljs$core$IFn$_invoke$arity$2(G__74405,G__74406) : fexpr__74404.call(null,G__74405,G__74406));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74407){
var vec__74408 = p__74407;
var seq__74409 = cljs.core.seq(vec__74408);
var first__74410 = cljs.core.first(seq__74409);
var seq__74409__$1 = cljs.core.next(seq__74409);
var db = first__74410;
var eav = seq__74409__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74411){
var vec__74412 = p__74411;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74412,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__74381_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__74381_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__74381_SHARP_) : linked_qvars.call(null,p1__74381_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__74381_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__74382_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__74382_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__74382_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
