goog.provide('posh.plugin_base');
posh.plugin_base.missing_pull_result = (function posh$plugin_base$missing_pull_result(dcfg,pull_expr){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),pull_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null);
} else {
return null;
}
});
posh.plugin_base.safe_pull = (function posh$plugin_base$safe_pull(dcfg,db,query,id){
if(cljs.core.integer_QMARK_(id)){
var fexpr__75673 = new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75673.cljs$core$IFn$_invoke$arity$3 ? fexpr__75673.cljs$core$IFn$_invoke$arity$3(db,query,id) : fexpr__75673.call(null,db,query,id));
} else {
if(cljs.core.vector_QMARK_(id)){
var temp__5733__auto__ = (function (){var fexpr__75674 = new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75674.cljs$core$IFn$_invoke$arity$2 ? fexpr__75674.cljs$core$IFn$_invoke$arity$2(db,id) : fexpr__75674.call(null,db,id));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var eid = temp__5733__auto__;
var fexpr__75675 = new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75675.cljs$core$IFn$_invoke$arity$3 ? fexpr__75675.cljs$core$IFn$_invoke$arity$3(db,query,eid) : fexpr__75675.call(null,db,query,eid));
} else {
return posh.plugin_base.missing_pull_result(dcfg,query);
}
} else {
if((id == null)){
return posh.plugin_base.missing_pull_result(dcfg,query);
} else {
return null;
}
}
}
});
posh.plugin_base.set_conn_listener_BANG_ = (function posh$plugin_base$set_conn_listener_BANG_(dcfg,posh_atom,conn,db_id){
var posh_vars = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810),posh_atom,new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
var G__75678_75772 = conn;
var G__75679_75773 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766);
var G__75680_75774 = (function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(posh_vars,var$);
} else {
return null;
}
});
var fexpr__75677_75775 = new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg);
(fexpr__75677_75775.cljs$core$IFn$_invoke$arity$3 ? fexpr__75677_75775.cljs$core$IFn$_invoke$arity$3(G__75678_75772,G__75679_75773,G__75680_75774) : fexpr__75677_75775.call(null,G__75678_75772,G__75679_75773,G__75680_75774));

cljs.core.add_watch(conn,new cljs.core.Keyword(null,"posh-schema-listener","posh-schema-listener",-158129486),(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db_id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
}));

var G__75682_75776 = conn;
var G__75683_75777 = new cljs.core.Keyword(null,"posh-listener","posh-listener",-6636061);
var G__75684_75778 = (function (tx_report){
var map__75685 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.createAsIfByAssoc([conn,tx_report]));
var map__75685__$1 = (((((!((map__75685 == null))))?(((((map__75685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75685):map__75685);
var ratoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75685__$1,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364));
var changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75685__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var seq__75690 = cljs.core.seq(changed);
var chunk__75691 = null;
var count__75692 = (0);
var i__75693 = (0);
while(true){
if((i__75693 < count__75692)){
var vec__75700 = chunk__75691.cljs$core$IIndexed$_nth$arity$2(null,i__75693);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75700,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__75780 = seq__75690;
var G__75781 = chunk__75691;
var G__75782 = count__75692;
var G__75783 = (i__75693 + (1));
seq__75690 = G__75780;
chunk__75691 = G__75781;
count__75692 = G__75782;
i__75693 = G__75783;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__75690);
if(temp__5735__auto__){
var seq__75690__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75690__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75690__$1);
var G__75784 = cljs.core.chunk_rest(seq__75690__$1);
var G__75785 = c__4556__auto__;
var G__75786 = cljs.core.count(c__4556__auto__);
var G__75787 = (0);
seq__75690 = G__75784;
chunk__75691 = G__75785;
count__75692 = G__75786;
i__75693 = G__75787;
continue;
} else {
var vec__75703 = cljs.core.first(seq__75690__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75703,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__75788 = cljs.core.next(seq__75690__$1);
var G__75789 = null;
var G__75790 = (0);
var G__75791 = (0);
seq__75690 = G__75788;
chunk__75691 = G__75789;
count__75692 = G__75790;
i__75693 = G__75791;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__75681_75779 = new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg);
(fexpr__75681_75779.cljs$core$IFn$_invoke$arity$3 ? fexpr__75681_75779.cljs$core$IFn$_invoke$arity$3(G__75682_75776,G__75683_75777,G__75684_75778) : fexpr__75681_75779.call(null,G__75682_75776,G__75683_75777,G__75684_75778));

return conn;
});
posh.plugin_base.posh_BANG_ = (function posh$plugin_base$posh_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75792 = arguments.length;
var i__4737__auto___75793 = (0);
while(true){
if((i__4737__auto___75793 < len__4736__auto___75792)){
args__4742__auto__.push((arguments[i__4737__auto___75793]));

var G__75794 = (i__4737__auto___75793 + (1));
i__4737__auto___75793 = G__75794;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return posh.plugin_base.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(posh.plugin_base.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,conns){
var posh_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reset_BANG_(posh_atom,(function (){var n = (0);
var conns__$1 = conns;
var posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.empty_tree(dcfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null)),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.PersistentArrayMap.EMPTY], 0));
while(true){
if(cljs.core.empty_QMARK_(conns__$1)){
return posh_tree;
} else {
var G__75795 = (n + (1));
var G__75796 = cljs.core.rest(conns__$1);
var G__75797 = (function (){var db_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["conn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,posh.plugin_base.set_conn_listener_BANG_(dcfg,posh_atom,cljs.core.first(conns__$1),db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.first(conns__$1))));
})();
n = G__75795;
conns__$1 = G__75796;
posh_tree = G__75797;
continue;
}
break;
}
})());
}));

(posh.plugin_base.posh_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(posh.plugin_base.posh_BANG_.cljs$lang$applyTo = (function (seq75706){
var G__75707 = cljs.core.first(seq75706);
var seq75706__$1 = cljs.core.next(seq75706);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75707,seq75706__$1);
}));

posh.plugin_base.get_conn_var = (function posh$plugin_base$get_conn_var(dcfg,conn,var$){
var fexpr__75713 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn))));
return (fexpr__75713.cljs$core$IFn$_invoke$arity$1 ? fexpr__75713.cljs$core$IFn$_invoke$arity$1(var$) : fexpr__75713.call(null,var$));
});
posh.plugin_base.get_posh_atom = (function posh$plugin_base$get_posh_atom(dcfg,poshdb_or_conn){
if(cljs.core.truth_((function (){var fexpr__75714 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75714.cljs$core$IFn$_invoke$arity$1 ? fexpr__75714.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__75714.call(null,poshdb_or_conn));
})())){
return posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810));
} else {
return posh.stateful.get_posh_atom(poshdb_or_conn);
}
});
posh.plugin_base.get_db = (function posh$plugin_base$get_db(dcfg,poshdb_or_conn){
if(cljs.core.truth_((function (){var fexpr__75715 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75715.cljs$core$IFn$_invoke$arity$1 ? fexpr__75715.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__75715.call(null,poshdb_or_conn));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"db-id","db-id",747248515))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810))], null));
} else {
return poshdb_or_conn;
}
});
posh.plugin_base.rm_posh_item = (function posh$plugin_base$rm_posh_item(dcfg,posh_atom,storage_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key)], 0));
}));
});
posh.plugin_base.make_query_reaction = (function posh$plugin_base$make_query_reaction(var_args){
var G__75717 = arguments.length;
switch (G__75717) {
case 5:
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,posh_atom,storage_key,add_query_fn,options){
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(posh_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reactions","reactions",2029850654),storage_key], null));
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
return r;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
var posh_atom_with_query = (add_query_fn.cljs$core$IFn$_invoke$arity$1 ? add_query_fn.cljs$core$IFn$_invoke$arity$1(posh_atom_val) : add_query_fn.call(null,posh_atom_val));
var query_result = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key));
var query_ratom = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var fexpr__75718 = new cljs.core.Keyword(null,"ratom","ratom",-126521267).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75718.cljs$core$IFn$_invoke$arity$1 ? fexpr__75718.cljs$core$IFn$_invoke$arity$1(query_result) : fexpr__75718.call(null,query_result));
}
})();
var query_reaction = (function (){var G__75720 = (function (){
return cljs.core.deref(query_ratom);
});
var G__75721 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__75722 = (function (_,___$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"forever","forever",2103455015))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val__$1,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key)], 0));
}));
}
});
var fexpr__75719 = new cljs.core.Keyword(null,"make-reaction","make-reaction",295148585).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75719.cljs$core$IFn$_invoke$arity$3 ? fexpr__75719.cljs$core$IFn$_invoke$arity$3(G__75720,G__75721,G__75722) : fexpr__75719.call(null,G__75720,G__75721,G__75722));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_atom_with_query,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_ratom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_reaction)], 0));
}))),storage_key);
}
}));

(posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,posh_atom,storage_key,add_query_fn){
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,add_query_fn,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.make_query_reaction.cljs$lang$maxFixedArity = 5);

/**
 * Returns a reaction of a pull expression. The options argument may specify `:cache :forever`, which keeps query results
 *   cached indefinitely, even if the reaction is disposed.
 */
posh.plugin_base.pull = (function posh$plugin_base$pull(var_args){
var G__75725 = arguments.length;
switch (G__75725) {
case 5:
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,poshdb,pull_pattern,eid,options){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__75723_SHARP_){
return posh.core.add_pull(p1__75723_SHARP_,true_poshdb,pull_pattern,eid);
}),options);
}));

(posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,poshdb,pull_pattern,eid){
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5(dcfg,poshdb,pull_pattern,eid,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.pull.cljs$lang$maxFixedArity = 5);

posh.plugin_base.pull_info = (function posh$plugin_base$pull_info(dcfg,poshdb,pull_pattern,eid){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_pull(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});
posh.plugin_base.pull_many = (function posh$plugin_base$pull_many(var_args){
var G__75728 = arguments.length;
switch (G__75728) {
case 5:
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,poshdb,pull_pattern,eids,options){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),true_poshdb,pull_pattern,eids], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__75726_SHARP_){
return posh.core.add_pull_many(p1__75726_SHARP_,true_poshdb,pull_pattern,eids);
}),options);
}));

(posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,poshdb,pull_pattern,eids){
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5(dcfg,poshdb,pull_pattern,eids,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.pull_many.cljs$lang$maxFixedArity = 5);

posh.plugin_base.pull_tx = (function posh$plugin_base$pull_tx(dcfg,tx_patterns,poshdb,pull_pattern,eid){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pull-tx is deprecated. Calling pull without your tx-patterns."], 0));

return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4(dcfg,poshdb,pull_pattern,eid);
});
posh.plugin_base.parse_q_query = (function posh$plugin_base$parse_q_query(dcfg,query){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__75729,query_item){
var vec__75730 = p__75729;
var parsed_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75730,(0),null);
var last_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75730,(1),null);
if((query_item instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed_query,query_item,cljs.core.PersistentVector.EMPTY),query_item], null);
} else {
if(cljs.core.truth_(last_key)){
} else {
throw (new Error("Assert failed: last-key"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$4(parsed_query,last_key,cljs.core.conj,query_item),last_key], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),query));
});
posh.plugin_base.q_args_count = (function posh$plugin_base$q_args_count(dcfg,query){
var parsed_query = posh.plugin_base.parse_q_query(dcfg,query);
var temp__5733__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_query);
if(cljs.core.truth_(temp__5733__auto__)){
var in_clause = temp__5733__auto__;
return cljs.core.count(in_clause);
} else {
return (1);
}
});
/**
 * Returns a datalog query reaction. If args count doens't match the query's input count, a final options map argument
 *   is accepted. This options map may specify `:cache :forever`, which keeps query results cached even if the reaction is
 *   disposed.
 */
posh.plugin_base.q = (function posh$plugin_base$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75801 = arguments.length;
var i__4737__auto___75802 = (0);
while(true){
if((i__4737__auto___75802 < len__4736__auto___75801)){
args__4742__auto__.push((arguments[i__4737__auto___75802]));

var G__75803 = (i__4737__auto___75802 + (1));
i__4737__auto___75802 = G__75803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.plugin_base.q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var n_query_args = posh.plugin_base.q_args_count(dcfg,query);
var vec__75741 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_query_args,cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((n_query_args + (1)),cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(args),cljs.core.last(args)], null):(function(){throw "Incorrect number of args passed to posh query"})()
));
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75741,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75741,(1),null);
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75733_SHARP_){
if(cljs.core.truth_((function (){var fexpr__75745 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75745.cljs$core$IFn$_invoke$arity$1 ? fexpr__75745.cljs$core$IFn$_invoke$arity$1(p1__75733_SHARP_) : fexpr__75745.call(null,p1__75733_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__75733_SHARP_);
} else {
return p1__75733_SHARP_;
}
}),args__$1);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75734_SHARP_){
return posh.plugin_base.get_posh_atom(dcfg,p1__75734_SHARP_);
}),args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__75735_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.core.add_q,p1__75735_SHARP_,query),true_poshdb_args);
}),options);
}));

(posh.plugin_base.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.q.cljs$lang$applyTo = (function (seq75736){
var G__75737 = cljs.core.first(seq75736);
var seq75736__$1 = cljs.core.next(seq75736);
var G__75738 = cljs.core.first(seq75736__$1);
var seq75736__$2 = cljs.core.next(seq75736__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75737,G__75738,seq75736__$2);
}));

posh.plugin_base.q_info = (function posh$plugin_base$q_info(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75804 = arguments.length;
var i__4737__auto___75805 = (0);
while(true){
if((i__4737__auto___75805 < len__4736__auto___75804)){
args__4742__auto__.push((arguments[i__4737__auto___75805]));

var G__75806 = (i__4737__auto___75805 + (1));
i__4737__auto___75805 = G__75806;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75746_SHARP_){
if(cljs.core.truth_((function (){var fexpr__75753 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75753.cljs$core$IFn$_invoke$arity$1 ? fexpr__75753.cljs$core$IFn$_invoke$arity$1(p1__75746_SHARP_) : fexpr__75753.call(null,p1__75746_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__75746_SHARP_);
} else {
return p1__75746_SHARP_;
}
}),args);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75747_SHARP_){
return posh.plugin_base.get_posh_atom(dcfg,p1__75747_SHARP_);
}),args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_q(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
}));

(posh.plugin_base.q_info.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.q_info.cljs$lang$applyTo = (function (seq75748){
var G__75749 = cljs.core.first(seq75748);
var seq75748__$1 = cljs.core.next(seq75748);
var G__75750 = cljs.core.first(seq75748__$1);
var seq75748__$2 = cljs.core.next(seq75748__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75749,G__75750,seq75748__$2);
}));

posh.plugin_base.q_tx = (function posh$plugin_base$q_tx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75807 = arguments.length;
var i__4737__auto___75808 = (0);
while(true){
if((i__4737__auto___75808 < len__4736__auto___75807)){
args__4742__auto__.push((arguments[i__4737__auto___75808]));

var G__75809 = (i__4737__auto___75808 + (1));
i__4737__auto___75808 = G__75809;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return posh.plugin_base.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(posh.plugin_base.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,tx_patterns,query,args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["q-tx is deprecated. Calling q without your tx-patterns."], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(posh.plugin_base.q,dcfg,query,args);
}));

(posh.plugin_base.q_tx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(posh.plugin_base.q_tx.cljs$lang$applyTo = (function (seq75756){
var G__75757 = cljs.core.first(seq75756);
var seq75756__$1 = cljs.core.next(seq75756);
var G__75758 = cljs.core.first(seq75756__$1);
var seq75756__$2 = cljs.core.next(seq75756__$1);
var G__75759 = cljs.core.first(seq75756__$2);
var seq75756__$3 = cljs.core.next(seq75756__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75757,G__75758,G__75759,seq75756__$3);
}));

posh.plugin_base.filter_tx = (function posh$plugin_base$filter_tx(dcfg,poshdb,tx_patterns){
return posh.stateful.add_filter_tx(posh.plugin_base.get_db(dcfg,poshdb),tx_patterns);
});
posh.plugin_base.filter_pull = (function posh$plugin_base$filter_pull(dcfg,poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull(posh.plugin_base.get_db(dcfg,poshdb),pull_pattern,eid);
});
posh.plugin_base.filter_q = (function posh$plugin_base$filter_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75810 = arguments.length;
var i__4737__auto___75811 = (0);
while(true){
if((i__4737__auto___75811 < len__4736__auto___75810)){
args__4742__auto__.push((arguments[i__4737__auto___75811]));

var G__75812 = (i__4737__auto___75811 + (1));
i__4737__auto___75811 = G__75812;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75762_SHARP_){
if(cljs.core.truth_((function (){var fexpr__75767 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75767.cljs$core$IFn$_invoke$arity$1 ? fexpr__75767.cljs$core$IFn$_invoke$arity$1(p1__75762_SHARP_) : fexpr__75767.call(null,p1__75762_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__75762_SHARP_);
} else {
return p1__75762_SHARP_;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(posh.stateful.add_filter_q,query,true_poshdb_args);
}));

(posh.plugin_base.filter_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.filter_q.cljs$lang$applyTo = (function (seq75763){
var G__75764 = cljs.core.first(seq75763);
var seq75763__$1 = cljs.core.next(seq75763);
var G__75765 = cljs.core.first(seq75763__$1);
var seq75763__$2 = cljs.core.next(seq75763__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75764,G__75765,seq75763__$2);
}));

posh.plugin_base.transact_BANG_ = (function posh$plugin_base$transact_BANG_(dcfg,poshdb_or_conn,txs){
var G__75769 = (cljs.core.truth_((function (){var fexpr__75771 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75771.cljs$core$IFn$_invoke$arity$1 ? fexpr__75771.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__75771.call(null,poshdb_or_conn));
})())?poshdb_or_conn:posh.stateful.poshdb__GT_conn(poshdb_or_conn));
var G__75770 = txs;
var fexpr__75768 = new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__75768.cljs$core$IFn$_invoke$arity$2 ? fexpr__75768.cljs$core$IFn$_invoke$arity$2(G__75769,G__75770) : fexpr__75768.call(null,G__75769,G__75770));
});

//# sourceMappingURL=posh.plugin_base.js.map
