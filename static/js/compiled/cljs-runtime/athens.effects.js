goog.provide('athens.effects');
var module$node_modules$deta$index=shadow.js.require("module$node_modules$deta$index", {});
athens.effects.get_pk = (function athens$effects$get_pk(in$){
if((typeof athens !== 'undefined') && (typeof athens.effects !== 'undefined') && (typeof athens.effects.full_str !== 'undefined')){
} else {
athens.effects.full_str = ["(^|;)\\s*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$),"\\s*=\\s*([^;]+)"].join('');
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find((new RegExp(athens.effects.full_str)),document.cookie),(2));
});
if((typeof athens !== 'undefined') && (typeof athens.effects !== 'undefined') && (typeof athens.effects.deta !== 'undefined')){
} else {
athens.effects.deta = module$node_modules$deta$index(athens.effects.get_pk("pk"));
}
if((typeof athens !== 'undefined') && (typeof athens.effects !== 'undefined') && (typeof athens.effects.notes !== 'undefined')){
} else {
athens.effects.notes = athens.effects.deta.Base("athens_notes");
}
/**
 * Filter: node/title doesn't exist yet in the db or in the titles being asserted (e.g. when renaming a page and changing it's references).
 *   Map: new node/title entity.
 */
athens.effects.new_titles_to_tx_data = (function athens$effects$new_titles_to_tx_data(new_titles,assert_titles){
var now = athens.util.now_ts();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("node","title","node/title",628940777),t,new cljs.core.Keyword("block","uid","block/uid",-1623585167),athens.util.gen_block_uid(),new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return (((athens.db.search_exact_node_title(x) == null)) && ((!(cljs.core.contains_QMARK_(assert_titles,x)))));
}),new_titles));
});
/**
 * Purpose is to remove orphan pages. However, if entire entity is retracted, orphan pages are still created.
 * 
 *   Filter: new-str doesn't include link, page exists, page has no children, and has no other [[linked refs]].
 *   Map: retractEntity
 */
athens.effects.old_titles_to_tx_data = (function athens$effects$old_titles_to_tx_data(old_titles,new_str,with_db){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (title){
var temp__5735__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null)));
if(cljs.core.truth_(temp__5735__auto__)){
var eid = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),eid], null);
} else {
return null;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (title){
var node = athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null));
if((!(clojure.string.includes_QMARK_(new_str,title)))){
var and__4115__auto__ = node;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.empty_QMARK_(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(node))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),athens.db.linked_refs_count(title))));
} else {
return and__4115__auto__;
}
} else {
return false;
}
}),old_titles));
});
/**
 * Filter: ((ref-uid)) points to a valid block (no :node/title).
 *   Map: add block/ref relationship.
 */
athens.effects.new_refs_to_tx_data = (function athens$effects$new_refs_to_tx_data(new_block_refs,e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
var block = (function (){var G__60492 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
var G__60493 = cljs.core.deref(athens.db.dsdb);
var G__60494 = ref_uid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60492,G__60493,G__60494) : datascript.core.q.call(null,G__60492,G__60493,G__60494));
})();
var map__60491 = block;
var map__60491__$1 = (((((!((map__60491 == null))))?(((((map__60491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60491):map__60491);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60491__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var and__4115__auto__ = block;
if(cljs.core.truth_(and__4115__auto__)){
return (title == null);
} else {
return and__4115__auto__;
}
}),new_block_refs));
});
/**
 * Filter: No filter.
 *   Map: add block/ref relationship.
 */
athens.effects.new_page_refs_to_tx_data = (function athens$effects$new_page_refs_to_tx_data(new_page_refs,source_eid){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),source_eid,new cljs.core.Keyword("block","refs","block/refs",-1214495349),page_id], null);
}),new_page_refs);
});
/**
 * Filter: new-str doesn't include block ref anymore, ((ref-uid)) points to an actual block, and block/ref relationship exists.
 *   Map: retract relationship.
 */
athens.effects.old_block_refs_to_tx_data = (function athens$effects$old_block_refs_to_tx_data(old_block_refs,e,new_str){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
var eid = athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid);
var and__4115__auto__ = eid;
if(cljs.core.truth_(and__4115__auto__)){
return (!(clojure.string.includes_QMARK_(new_str,["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_uid),"))"].join(''))));
} else {
return and__4115__auto__;
}
}),old_block_refs));
});
/**
 * Filter: [[page]] points to a page and block/ref relationship does exist.
 *   Map: retract block/ref relationship.
 * 
 *   Edge Cases:
 *   1. Merging two pages (renaming a page to a title that already exists).
 *   - This attempt to update all the Linked References strings
 *   - Querying with-db rather than the current-db to check that entity retraction already takes care of block/ref retraction.
 * 
 *   2. Deleting an orphan page, i.e. deleting a [[link]] when the [[link]] has no children and no other linked references
 *   - In this case, we can't use with-db, because the orphan page retraction happens in old-titles-to-tx-data.
 *   - Pass `old-titles` and check that the block/ref being deleted is not there to avoid double retraction.
 *   - Don't use :db.fn/retractAttribute because :db.cardinality/many
 */
athens.effects.old_page_refs_to_tx_data = (function athens$effects$old_page_refs_to_tx_data(old_page_refs,source_eid,new_str,with_db,old_titles){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page_id){
var temp__5735__auto__ = athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),page_id);
if(cljs.core.truth_(temp__5735__auto__)){
var page = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),source_eid,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(page)], null)], null);
} else {
return null;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (page_id){
var page = athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),page_id);
var old_pages_eids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,old_titles));
var map__60496 = page;
var map__60496__$1 = (((((!((map__60496 == null))))?(((((map__60496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60496):map__60496);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60496__$1,new cljs.core.Keyword("node","title","node/title",628940777));
if((!(clojure.string.includes_QMARK_(new_str,["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"]]"].join(''))))){
var and__4115__auto__ = page;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = title;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_pages_eids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
} else {
return false;
}
}),old_page_refs));
});
/**
 * When block/string is asserted, parse for links and block refs to add.
 *   When block/string is retracted, parse for links and block refs to remove.
 *   Retractions need to look at asserted block/string. Use empty string if only retract.
 */
athens.effects.parse_for_links = (function athens$effects$parse_for_links(with_tx){
var with_tx_data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(with_tx);
var with_db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(with_tx);
var assert_titles = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60499_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__60499_SHARP_,(2));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60498_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__60498_SHARP_),new cljs.core.Keyword("node","title","node/title",628940777))) && (cljs.core.last(p1__60498_SHARP_) === true));
}),with_tx_data)));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__60502){
var vec__60503 = p__60502;
var assertion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60503,(0),null);
var retraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60503,(1),null);
if(((cljs.core.last(assertion) === true) && (cljs.core.last(retraction) === false))){
var eid = cljs.core.first(assertion);
var assert_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assertion,(2));
var retract_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(retraction,(2));
var assert_data = athens.walk.walk_string(assert_string);
var retract_data = athens.walk.walk_string(retract_string);
var new_block_refs = athens.effects.new_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var old_titles = athens.effects.old_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(retract_data),assert_string,with_db);
var new_titles = athens.effects.new_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(assert_data),assert_titles);
var new_page_refs = athens.effects.new_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var old_block_refs = athens.effects.old_block_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string);
var old_page_refs = athens.effects.old_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string,with_db,old_titles);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,new_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_block_refs,new_page_refs,old_titles,old_block_refs,old_page_refs], 0));
return tx_data;
} else {
if(((cljs.core.last(assertion) === true) && ((retraction == null)))){
var eid = cljs.core.first(assertion);
var assert_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assertion,(2));
var assert_data = athens.walk.walk_string(assert_string);
var new_titles = athens.effects.new_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(assert_data),assert_titles);
var new_page_refs = athens.effects.new_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var new_block_refs = athens.effects.new_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,new_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_block_refs,new_page_refs], 0));
return tx_data;
} else {
if(((cljs.core.last(assertion) === false) && ((retraction == null)))){
var eid = cljs.core.first(retraction);
var assert_string = "";
var retract_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(retraction,(2));
var retract_data = athens.walk.walk_string(retract_string);
var old_titles = athens.effects.old_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(retract_data),assert_string,with_db);
var old_block_refs = athens.effects.old_block_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string);
var old_page_refs = athens.effects.old_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string,with_db,old_titles);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,old_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_block_refs,old_page_refs], 0));
return tx_data;
} else {
return null;
}
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__60506){
var vec__60507 = p__60506;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60507,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60507,(1),null);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60501_SHARP_){
return cljs.core.not(cljs.core.last(p1__60501_SHARP_));
}),datoms);
}),cljs.core.group_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60500_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__60500_SHARP_),new cljs.core.Keyword("block","string","block/string",-2066596447));
}),with_tx_data)))], 0));
});
/**
 * Only creates `link-created` events for now.
 *   TODO: link-deleted events
 */
athens.effects.ph_link_created_BANG_ = (function athens$effects$ph_link_created_BANG_(outputs){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return posthog.capture("link-created",cljs.core.clj__GT_js(x));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60510){
var vec__60511 = p__60510;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60511,(0),null);
var _a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60511,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60511,(2),null);
var _t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60511,(3),null);
var _t_or_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60511,(4),null);
var num_refs = cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1((function (){var G__60514 = cljs.core.deref(athens.db.dsdb);
var G__60515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null);
var G__60516 = v;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__60514,G__60515,G__60516) : datascript.core.pull.call(null,G__60514,G__60515,G__60516));
})()));
var block_or_page = (cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1((function (){var G__60517 = cljs.core.deref(athens.db.dsdb);
var G__60518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__60519 = e;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__60517,G__60518,G__60519) : datascript.core.pull.call(null,G__60517,G__60518,G__60519));
})()))?new cljs.core.Keyword(null,"page","page",849072397):new cljs.core.Keyword(null,"block","block",664686210));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"refs","refs",-1560051448),num_refs,new cljs.core.Keyword(null,"attr","attr",-604132353),block_or_page], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__60520){
var vec__60521 = p__60520;
var _e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60521,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60521,(1),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60521,(2),null);
var _t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60521,(3),null);
var t_or_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60521,(4),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword("block","refs","block/refs",-1214495349))){
return t_or_f;
} else {
return false;
}
}),outputs))));
});
athens.effects.walk_transact = (function athens$effects$walk_transact(tx_data){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX RAW INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(tx_data);

try{var with_tx = datascript.core.with$.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(athens.db.dsdb),tx_data);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX WITH"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(with_tx));

var more_tx_data = athens.effects.parse_for_links(with_tx);
var final_tx_data = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx_data,more_tx_data));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX MORE"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(more_tx_data);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX FINAL INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(final_tx_data);

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(posh.reagent.transact_BANG_(athens.db.dsdb,final_tx_data));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

athens.effects.latest_dump = datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb));

var c__43699__auto___60724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43700__auto__ = (function (){var switch__43629__auto__ = (function (state_60541){
var state_val_60542 = (state_60541[(1)]);
if((state_val_60542 === (1))){
var inst_60525 = athens.effects.notes.put(athens.effects.latest_dump,"athens_db_str");
var inst_60526 = cljs.core.async.interop.p__GT_c(inst_60525);
var state_60541__$1 = state_60541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60541__$1,(2),inst_60526);
} else {
if((state_val_60542 === (2))){
var inst_60528 = (state_60541[(7)]);
var inst_60528__$1 = (state_60541[(2)]);
var inst_60529 = (inst_60528__$1 instanceof cljs.core.ExceptionInfo);
var inst_60530 = cljs.core.ex_data(inst_60528__$1);
var inst_60531 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_60530);
var inst_60532 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60531,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_60533 = ((inst_60529) && (inst_60532));
var state_60541__$1 = (function (){var statearr_60543 = state_60541;
(statearr_60543[(7)] = inst_60528__$1);

return statearr_60543;
})();
if(cljs.core.truth_(inst_60533)){
var statearr_60544_60725 = state_60541__$1;
(statearr_60544_60725[(1)] = (3));

} else {
var statearr_60545_60726 = state_60541__$1;
(statearr_60545_60726[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60542 === (3))){
var inst_60528 = (state_60541[(7)]);
var inst_60535 = (function(){throw inst_60528})();
var state_60541__$1 = state_60541;
var statearr_60546_60727 = state_60541__$1;
(statearr_60546_60727[(2)] = inst_60535);

(statearr_60546_60727[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60542 === (4))){
var inst_60528 = (state_60541[(7)]);
var state_60541__$1 = state_60541;
var statearr_60547_60728 = state_60541__$1;
(statearr_60547_60728[(2)] = inst_60528);

(statearr_60547_60728[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60542 === (5))){
var inst_60538 = (state_60541[(2)]);
var inst_60539 = athens.effects.resp = inst_60538;
var state_60541__$1 = state_60541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60541__$1,inst_60539);
} else {
return null;
}
}
}
}
}
});
return (function() {
var athens$effects$walk_transact_$_state_machine__43630__auto__ = null;
var athens$effects$walk_transact_$_state_machine__43630__auto____0 = (function (){
var statearr_60548 = [null,null,null,null,null,null,null,null];
(statearr_60548[(0)] = athens$effects$walk_transact_$_state_machine__43630__auto__);

(statearr_60548[(1)] = (1));

return statearr_60548;
});
var athens$effects$walk_transact_$_state_machine__43630__auto____1 = (function (state_60541){
while(true){
var ret_value__43631__auto__ = (function (){try{while(true){
var result__43632__auto__ = switch__43629__auto__(state_60541);
if(cljs.core.keyword_identical_QMARK_(result__43632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43632__auto__;
}
break;
}
}catch (e60549){var ex__43633__auto__ = e60549;
var statearr_60550_60729 = state_60541;
(statearr_60550_60729[(2)] = ex__43633__auto__);


if(cljs.core.seq((state_60541[(4)]))){
var statearr_60551_60730 = state_60541;
(statearr_60551_60730[(1)] = cljs.core.first((state_60541[(4)])));

} else {
throw ex__43633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60731 = state_60541;
state_60541 = G__60731;
continue;
} else {
return ret_value__43631__auto__;
}
break;
}
});
athens$effects$walk_transact_$_state_machine__43630__auto__ = function(state_60541){
switch(arguments.length){
case 0:
return athens$effects$walk_transact_$_state_machine__43630__auto____0.call(this);
case 1:
return athens$effects$walk_transact_$_state_machine__43630__auto____1.call(this,state_60541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$walk_transact_$_state_machine__43630__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$walk_transact_$_state_machine__43630__auto____0;
athens$effects$walk_transact_$_state_machine__43630__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$walk_transact_$_state_machine__43630__auto____1;
return athens$effects$walk_transact_$_state_machine__43630__auto__;
})()
})();
var state__43701__auto__ = (function (){var statearr_60552 = f__43700__auto__();
(statearr_60552[(6)] = c__43699__auto___60724);

return statearr_60552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43701__auto__);
}));


return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
}catch (e60524){if((e60524 instanceof Error)){
var e = e60524;
alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EXCEPTION",e], 0));
} else {
throw e60524;

}
}});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"transact!","transact!",-822725810),(function (tx_data){
return athens.effects.walk_transact(tx_data);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),(function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"reset-conn-deta!","reset-conn-deta!",1252412079),(function (str){
var c__43699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43700__auto__ = (function (){var switch__43629__auto__ = (function (state_60592){
var state_val_60593 = (state_60592[(1)]);
if((state_val_60593 === (7))){
var state_60592__$1 = state_60592;
var statearr_60594_60732 = state_60592__$1;
(statearr_60594_60732[(2)] = null);

(statearr_60594_60732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60593 === (1))){
var inst_60553 = athens.effects.notes.get("athens_db_str");
var inst_60554 = cljs.core.async.interop.p__GT_c(inst_60553);
var state_60592__$1 = state_60592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60592__$1,(2),inst_60554);
} else {
if((state_val_60593 === (4))){
var inst_60556 = (state_60592[(7)]);
var state_60592__$1 = state_60592;
var statearr_60595_60733 = state_60592__$1;
(statearr_60595_60733[(2)] = inst_60556);

(statearr_60595_60733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60593 === (6))){
var inst_60566 = (state_60592[(8)]);
var inst_60568 = inst_60566.value;
var inst_60569 = athens.effects.db_str = inst_60568;
var inst_60570 = datascript.transit.read_transit_str(athens.effects.db_str);
var inst_60571 = athens.effects.new_db = inst_60570;
var inst_60572 = datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,athens.effects.new_db);
var inst_60573 = athens.effects.notes.put(athens.effects.db_str,"athens_db_str");
var inst_60574 = cljs.core.async.interop.p__GT_c(inst_60573);
var state_60592__$1 = (function (){var statearr_60596 = state_60592;
(statearr_60596[(9)] = inst_60572);

(statearr_60596[(10)] = inst_60569);

(statearr_60596[(11)] = inst_60571);

return statearr_60596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60592__$1,(9),inst_60574);
} else {
if((state_val_60593 === (3))){
var inst_60556 = (state_60592[(7)]);
var inst_60563 = (function(){throw inst_60556})();
var state_60592__$1 = state_60592;
var statearr_60597_60734 = state_60592__$1;
(statearr_60597_60734[(2)] = inst_60563);

(statearr_60597_60734[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60593 === (12))){
var inst_60586 = (state_60592[(2)]);
var inst_60587 = athens.effects.next_resp = inst_60586;
var state_60592__$1 = state_60592;
var statearr_60598_60735 = state_60592__$1;
(statearr_60598_60735[(2)] = inst_60587);

(statearr_60598_60735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60593 === (2))){
var inst_60556 = (state_60592[(7)]);
var inst_60556__$1 = (state_60592[(2)]);
var inst_60557 = (inst_60556__$1 instanceof cljs.core.ExceptionInfo);
var inst_60558 = cljs.core.ex_data(inst_60556__$1);
var inst_60559 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_60558);
var inst_60560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60559,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_60561 = ((inst_60557) && (inst_60560));
var state_60592__$1 = (function (){var statearr_60599 = state_60592;
(statearr_60599[(7)] = inst_60556__$1);

return statearr_60599;
})();
if(cljs.core.truth_(inst_60561)){
var statearr_60600_60736 = state_60592__$1;
(statearr_60600_60736[(1)] = (3));

} else {
var statearr_60601_60737 = state_60592__$1;
(statearr_60601_60737[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60593 === (11))){
var inst_60576 = (state_60592[(12)]);
var state_60592__$1 = state_60592;
var statearr_60602_60738 = state_60592__$1;
(statearr_60602_60738[(2)] = inst_60576);

(statearr_60602_60738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60593 === (9))){
var inst_60576 = (state_60592[(12)]);
var inst_60576__$1 = (state_60592[(2)]);
var inst_60577 = (inst_60576__$1 instanceof cljs.core.ExceptionInfo);
var inst_60578 = cljs.core.ex_data(inst_60576__$1);
var inst_60579 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_60578);
var inst_60580 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60579,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_60581 = ((inst_60577) && (inst_60580));
var state_60592__$1 = (function (){var statearr_60603 = state_60592;
(statearr_60603[(12)] = inst_60576__$1);

return statearr_60603;
})();
if(cljs.core.truth_(inst_60581)){
var statearr_60604_60739 = state_60592__$1;
(statearr_60604_60739[(1)] = (10));

} else {
var statearr_60605_60740 = state_60592__$1;
(statearr_60605_60740[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60593 === (5))){
var inst_60566 = (state_60592[(8)]);
var inst_60566__$1 = (state_60592[(2)]);
var state_60592__$1 = (function (){var statearr_60606 = state_60592;
(statearr_60606[(8)] = inst_60566__$1);

return statearr_60606;
})();
if(cljs.core.truth_(inst_60566__$1)){
var statearr_60607_60741 = state_60592__$1;
(statearr_60607_60741[(1)] = (6));

} else {
var statearr_60608_60742 = state_60592__$1;
(statearr_60608_60742[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60593 === (10))){
var inst_60576 = (state_60592[(12)]);
var inst_60583 = (function(){throw inst_60576})();
var state_60592__$1 = state_60592;
var statearr_60609_60743 = state_60592__$1;
(statearr_60609_60743[(2)] = inst_60583);

(statearr_60609_60743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60593 === (8))){
var inst_60590 = (state_60592[(2)]);
var state_60592__$1 = state_60592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60592__$1,inst_60590);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__43630__auto__ = null;
var athens$effects$state_machine__43630__auto____0 = (function (){
var statearr_60610 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60610[(0)] = athens$effects$state_machine__43630__auto__);

(statearr_60610[(1)] = (1));

return statearr_60610;
});
var athens$effects$state_machine__43630__auto____1 = (function (state_60592){
while(true){
var ret_value__43631__auto__ = (function (){try{while(true){
var result__43632__auto__ = switch__43629__auto__(state_60592);
if(cljs.core.keyword_identical_QMARK_(result__43632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43632__auto__;
}
break;
}
}catch (e60611){var ex__43633__auto__ = e60611;
var statearr_60612_60744 = state_60592;
(statearr_60612_60744[(2)] = ex__43633__auto__);


if(cljs.core.seq((state_60592[(4)]))){
var statearr_60613_60745 = state_60592;
(statearr_60613_60745[(1)] = cljs.core.first((state_60592[(4)])));

} else {
throw ex__43633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60746 = state_60592;
state_60592 = G__60746;
continue;
} else {
return ret_value__43631__auto__;
}
break;
}
});
athens$effects$state_machine__43630__auto__ = function(state_60592){
switch(arguments.length){
case 0:
return athens$effects$state_machine__43630__auto____0.call(this);
case 1:
return athens$effects$state_machine__43630__auto____1.call(this,state_60592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__43630__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__43630__auto____0;
athens$effects$state_machine__43630__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__43630__auto____1;
return athens$effects$state_machine__43630__auto__;
})()
})();
var state__43701__auto__ = (function (){var statearr_60614 = f__43700__auto__();
(statearr_60614[(6)] = c__43699__auto__);

return statearr_60614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43701__auto__);
}));

return c__43699__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),(function (p__60615){
var vec__60616 = p__60615;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60616,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60616,(1),null);
return localStorage.setItem(key,value);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),(function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__60619){
var map__60620 = p__60619;
var map__60620__$1 = (((((!((map__60620 == null))))?(((((map__60620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60620):map__60620);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60620__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60620__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60620__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60620__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60620__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__43699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43700__auto__ = (function (){var switch__43629__auto__ = (function (state_60664){
var state_val_60665 = (state_60664[(1)]);
if((state_val_60665 === (7))){
var inst_60631 = (state_60664[(7)]);
var inst_60631__$1 = (state_60664[(2)]);
var inst_60633 = (inst_60631__$1 == null);
var inst_60634 = cljs.core.not(inst_60633);
var state_60664__$1 = (function (){var statearr_60666 = state_60664;
(statearr_60666[(7)] = inst_60631__$1);

return statearr_60666;
})();
if(inst_60634){
var statearr_60667_60747 = state_60664__$1;
(statearr_60667_60747[(1)] = (8));

} else {
var statearr_60668_60748 = state_60664__$1;
(statearr_60668_60748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (1))){
var state_60664__$1 = state_60664;
var G__60669_60749 = method;
var G__60669_60750__$1 = (((G__60669_60749 instanceof cljs.core.Keyword))?G__60669_60749.fqn:null);
switch (G__60669_60750__$1) {
case "post":
var statearr_60670_60752 = state_60664__$1;
(statearr_60670_60752[(1)] = (3));


break;
case "get":
var statearr_60671_60753 = state_60664__$1;
(statearr_60671_60753[(1)] = (4));


break;
case "put":
var statearr_60672_60754 = state_60664__$1;
(statearr_60672_60754[(1)] = (5));


break;
case "delete":
var statearr_60673_60755 = state_60664__$1;
(statearr_60673_60755[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60669_60750__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (4))){
var state_60664__$1 = state_60664;
var statearr_60674_60756 = state_60664__$1;
(statearr_60674_60756[(2)] = cljs_http.client.get);

(statearr_60674_60756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (15))){
var inst_60631 = (state_60664[(7)]);
var state_60664__$1 = state_60664;
var statearr_60675_60757 = state_60664__$1;
(statearr_60675_60757[(2)] = inst_60631);

(statearr_60675_60757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (13))){
var inst_60644 = (state_60664[(2)]);
var state_60664__$1 = state_60664;
var statearr_60676_60758 = state_60664__$1;
(statearr_60676_60758[(2)] = inst_60644);

(statearr_60676_60758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (6))){
var state_60664__$1 = state_60664;
var statearr_60677_60759 = state_60664__$1;
(statearr_60677_60759[(2)] = cljs_http.client.delete$);

(statearr_60677_60759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (17))){
var inst_60654 = (state_60664[(8)]);
var inst_60656 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60654);
var inst_60657 = re_frame.core.dispatch(inst_60656);
var state_60664__$1 = state_60664;
var statearr_60678_60760 = state_60664__$1;
(statearr_60678_60760[(2)] = inst_60657);

(statearr_60678_60760[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (3))){
var state_60664__$1 = state_60664;
var statearr_60679_60761 = state_60664__$1;
(statearr_60679_60761[(2)] = cljs_http.client.post);

(statearr_60679_60761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (12))){
var state_60664__$1 = state_60664;
var statearr_60680_60762 = state_60664__$1;
(statearr_60680_60762[(2)] = false);

(statearr_60680_60762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (2))){
var inst_60628 = (state_60664[(2)]);
var inst_60629 = (inst_60628.cljs$core$IFn$_invoke$arity$2 ? inst_60628.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60628.call(null,url,opts));
var state_60664__$1 = state_60664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60664__$1,(7),inst_60629);
} else {
if((state_val_60665 === (19))){
var inst_60662 = (state_60664[(2)]);
var state_60664__$1 = state_60664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60664__$1,inst_60662);
} else {
if((state_val_60665 === (11))){
var state_60664__$1 = state_60664;
var statearr_60681_60763 = state_60664__$1;
(statearr_60681_60763[(2)] = true);

(statearr_60681_60763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (9))){
var state_60664__$1 = state_60664;
var statearr_60682_60764 = state_60664__$1;
(statearr_60682_60764[(2)] = false);

(statearr_60682_60764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (5))){
var state_60664__$1 = state_60664;
var statearr_60683_60765 = state_60664__$1;
(statearr_60683_60765[(2)] = cljs_http.client.put);

(statearr_60683_60765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (14))){
var inst_60631 = (state_60664[(7)]);
var inst_60649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60631);
var state_60664__$1 = state_60664;
var statearr_60684_60766 = state_60664__$1;
(statearr_60684_60766[(2)] = inst_60649);

(statearr_60684_60766[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (16))){
var inst_60652 = (state_60664[(9)]);
var inst_60652__$1 = (state_60664[(2)]);
var inst_60653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60652__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60652__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60664__$1 = (function (){var statearr_60685 = state_60664;
(statearr_60685[(8)] = inst_60654);

(statearr_60685[(9)] = inst_60652__$1);

return statearr_60685;
})();
if(cljs.core.truth_(inst_60653)){
var statearr_60686_60767 = state_60664__$1;
(statearr_60686_60767[(1)] = (17));

} else {
var statearr_60687_60768 = state_60664__$1;
(statearr_60687_60768[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (10))){
var inst_60647 = (state_60664[(2)]);
var state_60664__$1 = state_60664;
if(cljs.core.truth_(inst_60647)){
var statearr_60688_60769 = state_60664__$1;
(statearr_60688_60769[(1)] = (14));

} else {
var statearr_60689_60770 = state_60664__$1;
(statearr_60689_60770[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (18))){
var inst_60652 = (state_60664[(9)]);
var inst_60659 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60652);
var inst_60660 = re_frame.core.dispatch(inst_60659);
var state_60664__$1 = state_60664;
var statearr_60690_60771 = state_60664__$1;
(statearr_60690_60771[(2)] = inst_60660);

(statearr_60690_60771[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (8))){
var inst_60631 = (state_60664[(7)]);
var inst_60636 = inst_60631.cljs$lang$protocol_mask$partition0$;
var inst_60637 = (inst_60636 & (64));
var inst_60638 = inst_60631.cljs$core$ISeq$;
var inst_60639 = (cljs.core.PROTOCOL_SENTINEL === inst_60638);
var inst_60640 = ((inst_60637) || (inst_60639));
var state_60664__$1 = state_60664;
if(cljs.core.truth_(inst_60640)){
var statearr_60691_60772 = state_60664__$1;
(statearr_60691_60772[(1)] = (11));

} else {
var statearr_60692_60773 = state_60664__$1;
(statearr_60692_60773[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__43630__auto__ = null;
var athens$effects$state_machine__43630__auto____0 = (function (){
var statearr_60693 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60693[(0)] = athens$effects$state_machine__43630__auto__);

(statearr_60693[(1)] = (1));

return statearr_60693;
});
var athens$effects$state_machine__43630__auto____1 = (function (state_60664){
while(true){
var ret_value__43631__auto__ = (function (){try{while(true){
var result__43632__auto__ = switch__43629__auto__(state_60664);
if(cljs.core.keyword_identical_QMARK_(result__43632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43632__auto__;
}
break;
}
}catch (e60694){var ex__43633__auto__ = e60694;
var statearr_60695_60774 = state_60664;
(statearr_60695_60774[(2)] = ex__43633__auto__);


if(cljs.core.seq((state_60664[(4)]))){
var statearr_60696_60775 = state_60664;
(statearr_60696_60775[(1)] = cljs.core.first((state_60664[(4)])));

} else {
throw ex__43633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60776 = state_60664;
state_60664 = G__60776;
continue;
} else {
return ret_value__43631__auto__;
}
break;
}
});
athens$effects$state_machine__43630__auto__ = function(state_60664){
switch(arguments.length){
case 0:
return athens$effects$state_machine__43630__auto____0.call(this);
case 1:
return athens$effects$state_machine__43630__auto____1.call(this,state_60664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__43630__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__43630__auto____0;
athens$effects$state_machine__43630__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__43630__auto____1;
return athens$effects$state_machine__43630__auto__;
})()
})();
var state__43701__auto__ = (function (){var statearr_60697 = f__43700__auto__();
(statearr_60697[(6)] = c__43699__auto__);

return statearr_60697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43701__auto__);
}));

return c__43699__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60698){
var map__60699 = p__60698;
var map__60699__$1 = (((((!((map__60699 == null))))?(((((map__60699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60699):map__60699);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60701 = action;
var G__60701__$1 = (((G__60701 instanceof cljs.core.Keyword))?G__60701.fqn:null);
switch (G__60701__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return re_frame.core.dispatch(event);
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60701__$1)].join('')));

}
});
})());
re_frame.core.reg_fx(new cljs.core.Keyword("editing","focus","editing/focus",-1669016321),(function (p__60702){
var vec__60703 = p__60702;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60703,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60703,(1),null);
if((uid == null)){
var temp__5735__auto__ = document.activeElement;
if(cljs.core.truth_(temp__5735__auto__)){
var active_el = temp__5735__auto__;
return active_el.blur();
} else {
return null;
}
} else {
return setTimeout((function (){
var vec__60706 = athens.db.uid_and_embed_id(uid);
var uid__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60706,(0),null);
var embed_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60706,(1),null);
var html_id = ["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('');
var el = document.querySelector((cljs.core.truth_(embed_id)?(function (){var or__4126__auto__ = ["textarea[id='",html_id,"-embed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(embed_id),"']"].join('');
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["textarea[id^='",html_id,"-embed-']"].join('');
}
})():["#",html_id].join('')));
if(cljs.core.truth_(el)){
el.focus();

if(cljs.core.truth_(index)){
return goog.dom.selection.setCursorPosition(el,index);
} else {
return null;
}
} else {
return null;
}
}),(100));
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"set-cursor-position","set-cursor-position",1058534914),(function (p__60709){
var vec__60710 = p__60709;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60710,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60710,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60710,(2),null);
return setTimeout((function (){
var temp__5735__auto__ = document.querySelector(["#editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''));
if(cljs.core.truth_(temp__5735__auto__)){
var target = temp__5735__auto__;
target.focus();

(target.selectionStart = start);

return (target.selectionEnd = end);
} else {
return null;
}
}),(100));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("stylefy","tag","stylefy/tag",1120934997),(function (p__60713){
var vec__60714 = p__60713;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60714,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60714,(1),null);
return stylefy.core.tag(tag,properties);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("alert","js!","alert/js!",-1297535531),(function (message){
return alert(message);
}));

//# sourceMappingURL=athens.effects.js.map
