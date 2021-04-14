goog.provide('athens.db');
athens.db.athens_url = "https://raw.githubusercontent.com/athensresearch/athens/master/data/athens.datoms";
athens.db.help_url = "https://raw.githubusercontent.com/athensresearch/athens/master/data/help.datoms";
athens.db.ego_url = "https://raw.githubusercontent.com/athensresearch/athens/master/data/ego.datoms";
athens.db.default_graph_conf = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hlt-link-levels","hlt-link-levels",-709516433),(1),new cljs.core.Keyword(null,"link-distance","link-distance",1680735939),(50),new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),(-15),new cljs.core.Keyword(null,"local-depth","local-depth",-1114111868),(1),new cljs.core.Keyword(null,"root-links-only?","root-links-only?",1055821711),false,new cljs.core.Keyword(null,"orphans?","orphans?",-706082472),true,new cljs.core.Keyword(null,"daily-notes?","daily-notes?",2097423842),true], null);
if((typeof athens !== 'undefined') && (typeof athens.db !== 'undefined') && (typeof athens.db.rfdb !== 'undefined')){
} else {
athens.db.rfdb = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("selected","items","selected/items",1686402211),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Keyword("db","filepath","db/filepath",1097485287),new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"graph-conf","graph-conf",964064393),new cljs.core.Keyword("left-sidebar","open","left-sidebar/open",-686633270),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Keyword("devtool","open","devtool/open",-1176270029),new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),new cljs.core.Keyword("right-sidebar","width","right-sidebar/width",1529781304),new cljs.core.Keyword("theme","dark","theme/dark",1860051576),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword("db","mtime","db/mtime",963172381),new cljs.core.Keyword("athena","open","athena/open",1253777725),new cljs.core.Keyword("db","synced","db/synced",-1518558434)],[cljs.core.PersistentVector.EMPTY,cljs.core.List.EMPTY,null,null,true,athens.db.default_graph_conf,false,null,cljs.core.PersistentVector.EMPTY,false,false,cljs.core.PersistentArrayMap.EMPTY,false,false,(32),false,"Socrates",null,false,true]);
}
/**
 * Maps attributes from "Export All as JSON" to original datascript attributes.
 */
athens.db.str_kw_mappings = cljs.core.PersistentHashMap.fromArrays(["heading","string","edit-email","emoji","children","create-email","text-align","email","emojis","uid","create-time","users","time","props","title","edit-time"],[new cljs.core.Keyword("block","heading","block/heading",-1941840630),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("edit","email","edit/email",1419195448),new cljs.core.Keyword("ent","emoji","ent/emoji",1031088075),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("create","email","create/email",-1530017530),new cljs.core.Keyword("block","text-align","block/text-align",1776373178),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("ent","emojis","ent/emojis",-2098423410),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("create","time","create/time",-1563077754),null,null,new cljs.core.Keyword("block","props","block/props",-542295228),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("edit","time","edit/time",1384867476)]);
athens.db.convert_key = (function athens$db$convert_key(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(athens.db.str_kw_mappings,k,k);
});
/**
 * Parses JSON retrieved from Roam's "Export all as JSON". Not fully functional.
 */
athens.db.parse_hms = (function athens$db$parse_hms(hms){
if((!(cljs.core.coll_QMARK_(hms)))){
return hms;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86717_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__86719){
var vec__86720 = p__86719;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86720,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86720,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,athens.db.convert_key(k),(athens.db.parse_hms.cljs$core$IFn$_invoke$arity$1 ? athens.db.parse_hms.cljs$core$IFn$_invoke$arity$1(v) : athens.db.parse_hms.call(null,v)));
}),cljs.core.PersistentArrayMap.EMPTY,p1__86717_SHARP_);
}),hms);
}
});
/**
 * Parse tuples exported via method specified in https://roamresearch.com/#/app/ego/page/eJ14YtH2G.
 */
athens.db.parse_tuples = (function athens$db$parse_tuples(tuples){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86726_SHARP_){
return cljs.core.cons(new cljs.core.Keyword("db","add","db/add",235286841),p1__86726_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86725_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string,p1__86725_SHARP_);
}),cljs.core.rest(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),tuples))));
});
/**
 * Convert a JSON str to EDN. May receive JSON through an HTTP request or file upload.
 */
athens.db.json_str_to_edn = (function athens$db$json_str_to_edn(json_str){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(json_str));
});
/**
 * Deserializes a JSON string into EDN and then Datoms.
 */
athens.db.str_to_db_tx = (function athens$db$str_to_db_tx(json_str){
var edn_data = athens.db.json_str_to_edn(json_str);
if(cljs.core.coll_QMARK_(cljs.core.first(edn_data))){
return athens.db.parse_hms(edn_data);
} else {
return athens.db.parse_tuples(edn_data);
}
});
athens.db.schema = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("schema","version","schema/version",1396190655),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("attrs","lookup","attrs/lookup",849089348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
if((typeof athens !== 'undefined') && (typeof athens.db !== 'undefined') && (typeof athens.db.dsdb !== 'undefined')){
} else {
athens.db.dsdb = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
}
posh.reagent.posh_BANG_(athens.db.dsdb);
athens.db.e_by_av = (function athens$db$e_by_av(a,v){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(athens.db.dsdb),new cljs.core.Keyword(null,"avet","avet",1383857032),a,v)));
});
athens.db.v_by_ea = (function athens$db$v_by_ea(e,a){
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(athens.db.dsdb),new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a)));
});
athens.db.rules = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"between","between",-1523336493,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"plus-after","plus-after",1506327611,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"minus-after","minus-after",-1894916029,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"?sib-e","?sib-e",347761702,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?sib-e","?sib-e",347761702,null)], null)], null)], null);
athens.db.inc_after = (function athens$db$inc_after(eid,order){
var G__86752 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__86753 = cljs.core.deref(athens.db.dsdb);
var G__86754 = athens.db.rules;
var G__86755 = eid;
var G__86756 = order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__86752,G__86753,G__86754,G__86755,G__86756) : datascript.core.q.call(null,G__86752,G__86753,G__86754,G__86755,G__86756));
});
athens.db.dec_after = (function athens$db$dec_after(eid,order){
var G__86760 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__86761 = cljs.core.deref(athens.db.dsdb);
var G__86762 = athens.db.rules;
var G__86763 = eid;
var G__86764 = order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__86760,G__86761,G__86762,G__86763,G__86764) : datascript.core.q.call(null,G__86760,G__86761,G__86762,G__86763,G__86764));
});
athens.db.plus_after = (function athens$db$plus_after(eid,order,x){
var G__86771 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"plus-after","plus-after",1506327611,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null))], null);
var G__86772 = cljs.core.deref(athens.db.dsdb);
var G__86773 = athens.db.rules;
var G__86774 = eid;
var G__86775 = order;
var G__86776 = x;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$6 ? datascript.core.q.cljs$core$IFn$_invoke$arity$6(G__86771,G__86772,G__86773,G__86774,G__86775,G__86776) : datascript.core.q.call(null,G__86771,G__86772,G__86773,G__86774,G__86775,G__86776));
});
athens.db.minus_after = (function athens$db$minus_after(eid,order,x){
var G__86783 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"minus-after","minus-after",-1894916029,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null))], null);
var G__86784 = cljs.core.deref(athens.db.dsdb);
var G__86785 = athens.db.rules;
var G__86786 = eid;
var G__86787 = order;
var G__86788 = x;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$6 ? datascript.core.q.cljs$core$IFn$_invoke$arity$6(G__86783,G__86784,G__86785,G__86786,G__86787,G__86788) : datascript.core.q.call(null,G__86783,G__86784,G__86785,G__86786,G__86787,G__86788));
});
athens.db.not_contains_QMARK_ = (function athens$db$not_contains_QMARK_(coll,v){
return (!(cljs.core.contains_QMARK_(coll,v)));
});
athens.db.last_child_QMARK_ = (function athens$db$last_child_QMARK_(uid){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,cljs.core.first(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__86789 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?sib-uid","?sib-uid",-1881170629,null),new cljs.core.Symbol(null,"?sib-o","?sib-o",543429366,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"?sib","?sib",-855475017,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?sib-uid","?sib-uid",-1881170629,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?sib-o","?sib-o",543429366,null)], null)], null);
var G__86790 = cljs.core.deref(athens.db.dsdb);
var G__86791 = athens.db.rules;
var G__86792 = uid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__86789,G__86790,G__86791,G__86792) : datascript.core.q.call(null,G__86789,G__86790,G__86791,G__86792));
})()))));
});
athens.db.uid_and_embed_id = (function athens$db$uid_and_embed_id(uid){
var or__4126__auto__ = (function (){var G__86807 = uid;
var G__86807__$1 = (((G__86807 == null))?null:cljs.core.re_find(/^(.+)-embed-(.+)/,G__86807));
var G__86807__$2 = (((G__86807__$1 == null))?null:cljs.core.rest(G__86807__$1));
if((G__86807__$2 == null)){
return null;
} else {
return cljs.core.vec(G__86807__$2);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null);
}
});
athens.db.sort_block_children = (function athens$db$sort_block_children(block){
var temp__5733__auto__ = cljs.core.seq(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block));
if(temp__5733__auto__){
var children = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.db.sort_block_children,children))));
} else {
return block;
}
});
athens.db.block_document_pull_vector = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","header","block/header",28765025),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null);
athens.db.node_document_pull_vector = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(athens.db.block_document_pull_vector,new cljs.core.Keyword("node","title","node/title",628940777),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","sidebar","page/sidebar",32416927)], 0));
athens.db.get_block_document = (function athens$db$get_block_document(id){
return athens.db.sort_block_children(cljs.core.deref(posh.reagent.pull(athens.db.dsdb,athens.db.block_document_pull_vector,id)));
});
athens.db.get_node_document = (function athens$db$get_node_document(id){
return athens.db.sort_block_children(cljs.core.deref(posh.reagent.pull(athens.db.dsdb,athens.db.node_document_pull_vector,id)));
});
/**
 * Copy REPL output to athens-datoms.cljs
 */
athens.db.get_athens_datoms = (function athens$db$get_athens_datoms(id){
return athens.db.sort_block_children(cljs.core.deref(posh.reagent.pull(athens.db.dsdb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__86817_SHARP_){
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__86817_SHARP_,new cljs.core.Keyword("db","id","db/id",-1388397098))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__86817_SHARP_,new cljs.core.Keyword("block","_refs","block/_refs",830218531))))));
}),athens.db.node_document_pull_vector),id)));
});
/**
 * Normalize path from deeply nested block to root node.
 */
athens.db.shape_parent_query = (function athens$db$shape_parent_query(pull_results){
return cljs.core.vec(cljs.core.reverse(cljs.core.rest((function (){var b = pull_results;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,b);
} else {
var G__87094 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
var G__87095 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword("block","_children","block/_children",1128070632)));
b = G__87094;
res = G__87095;
continue;
}
break;
}
})())));
});
athens.db.get_parents_recursively = (function athens$db$get_parents_recursively(id){
return athens.db.shape_parent_query(cljs.core.deref(posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null),id)));
});
athens.db.get_block = (function athens$db$get_block(id){
return cljs.core.deref(posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437)], null)], null),new cljs.core.Keyword("block","open","block/open",-1875254829)], null),id));
});
athens.db.get_parent = (function athens$db$get_parent(id){
return athens.db.get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1((function (){var G__86819 = cljs.core.deref(athens.db.dsdb);
var G__86820 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__86819,G__86820) : datascript.core.entity.call(null,G__86819,G__86820));
})()))));
});
athens.db.get_older_sib = (function athens$db$get_older_sib(uid){
var sib_uid = (function (){var G__86821 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Symbol(null,"?sib","?sib",-855475017,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?target-e","?target-e",1520876161,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?target-e","?target-e",1520876161,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?target-o","?target-o",1441812721,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?target-o","?target-o",1441812721,null)),new cljs.core.Symbol(null,"?prev-sib-order","?prev-sib-order",-1713092663,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?prev-sib-order","?prev-sib-order",-1713092663,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
var G__86822 = cljs.core.deref(athens.db.dsdb);
var G__86823 = athens.db.rules;
var G__86824 = uid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__86821,G__86822,G__86823,G__86824) : datascript.core.q.call(null,G__86821,G__86822,G__86823,G__86824));
})();
var older_sib = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),sib_uid], null));
return older_sib;
});
/**
 * Given a coll of uids, determine if uids are all direct children of the same parent.
 */
athens.db.same_parent_QMARK_ = (function athens$db$same_parent_QMARK_(uids){
var parents = (function (){var G__86825 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?parents","?parents",-1900044894,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uids","?uids",-1185399981,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uids","?uids",-1185399981,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parents","?parents",-1900044894,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__86826 = cljs.core.deref(athens.db.dsdb);
var G__86827 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,athens.db.uid_and_embed_id),uids);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__86825,G__86826,G__86827) : datascript.core.q.call(null,G__86825,G__86826,G__86827));
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(parents),(1));
});
athens.db.deepest_child_block = (function athens$db$deepest_child_block(id){
var document = athens.db.sort_block_children((function (){var G__86828 = cljs.core.deref(athens.db.dsdb);
var G__86829 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__86830 = id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__86828,G__86829,G__86830) : datascript.core.pull.call(null,G__86828,G__86829,G__86830));
})());
var block = document;
while(true){
var map__86835 = block;
var map__86835__$1 = (((((!((map__86835 == null))))?(((((map__86835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86835):map__86835);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86835__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var n = cljs.core.count(children);
if((n === (0))){
return block;
} else {
var G__87098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children,(n - (1)));
block = G__87098;
continue;
}
break;
}
});
/**
 * Get list of children UIDs for given block ID (including the root block's UID)
 */
athens.db.get_children_recursively = (function athens$db$get_children_recursively(uid){
var temp__5735__auto__ = athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid);
if(cljs.core.truth_(temp__5735__auto__)){
var eid = temp__5735__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167),cljs.core.tree_seq(new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","children","block/children",-1040716209),(function (){var G__86837 = cljs.core.deref(athens.db.dsdb);
var G__86838 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__86839 = eid;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__86837,G__86838,G__86839) : datascript.core.pull.call(null,G__86837,G__86838,G__86839));
})()));
} else {
return null;
}
});
/**
 * Retract all blocks of a page, excluding the page. Used to reset athens/Welcome page.
 *   Page is excluded because block/uid will be generated by walk-string if [[athens/Welcome]] doesn't already exist.
 */
athens.db.retract_page_recursively = (function athens$db$retract_page_recursively(title){
var eid = athens.db.e_by_av(new cljs.core.Keyword("node","title","node/title",628940777),title);
var uid = athens.db.v_by_ea(eid,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.next(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (uid__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null)], null);
}),athens.db.get_children_recursively(uid)));
});
/**
 * Retract all blocks of a page, including the page.
 */
athens.db.retract_uid_recursively = (function athens$db$retract_uid_recursively(uid){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (uid__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null)], null);
}),athens.db.get_children_recursively(uid));
});
/**
 * More options here https://clojuredocs.org/clojure.core/re-pattern
 */
athens.db.re_case_insensitive = (function athens$db$re_case_insensitive(query){
return cljs.core.re_pattern(["(?i)",athens.util.escape_str(query)].join(''));
});
athens.db.search_exact_node_title = (function athens$db$search_exact_node_title(query){
var G__86856 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query","?query",891204063,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?query","?query",891204063,null)], null)], null);
var G__86857 = cljs.core.deref(athens.db.dsdb);
var G__86858 = query;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__86856,G__86857,G__86858) : datascript.core.q.call(null,G__86856,G__86857,G__86858));
});
athens.db.search_in_node_title = (function athens$db$search_in_node_title(var_args){
var G__86864 = arguments.length;
switch (G__86864) {
case 1:
return athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$1 = (function (query){
return athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$3(query,(20),false);
}));

(athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$2 = (function (query,n){
return athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$3(query,n,false);
}));

(athens.db.search_in_node_title.cljs$core$IFn$_invoke$arity$3 = (function (query,n,ignore_dup){
if(clojure.string.blank_QMARK_(query)){
return cljs.core.PersistentVector.EMPTY;
} else {
var results = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,(function (){var G__86876 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?query","?query",891204063,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?query","?query",891204063,null))], null)], null);
var G__86877 = cljs.core.deref(athens.db.dsdb);
var G__86878 = athens.db.re_case_insensitive(query);
var G__86879 = (cljs.core.truth_(ignore_dup)?query:null);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__86876,G__86877,G__86878,G__86879) : datascript.core.q.call(null,G__86876,G__86877,G__86878,G__86879));
})());
return results;
}
}));

(athens.db.search_in_node_title.cljs$lang$maxFixedArity = 3);

athens.db.get_root_parent_node = (function athens$db$get_root_parent_node(block){
var b = block;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),b);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b))){
var G__87100 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
b = G__87100;
continue;
} else {
return null;

}
}
break;
}
});
athens.db.search_in_block_content = (function athens$db$search_in_block_content(var_args){
var G__86882 = arguments.length;
switch (G__86882) {
case 1:
return athens.db.search_in_block_content.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.db.search_in_block_content.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.db.search_in_block_content.cljs$core$IFn$_invoke$arity$1 = (function (query){
return athens.db.search_in_block_content.cljs$core$IFn$_invoke$arity$2(query,(20));
}));

(athens.db.search_in_block_content.cljs$core$IFn$_invoke$arity$2 = (function (query,n){
if(clojure.string.blank_QMARK_(query)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86880_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__86880_SHARP_,new cljs.core.Keyword("block","_children","block/_children",1128070632));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.db.get_root_parent_node,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,(function (){var G__86903 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null))], null)], null);
var G__86904 = cljs.core.deref(athens.db.dsdb);
var G__86905 = athens.db.re_case_insensitive(query);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__86903,G__86904,G__86905) : datascript.core.q.call(null,G__86903,G__86904,G__86905));
})()))));
}
}));

(athens.db.search_in_block_content.cljs$lang$maxFixedArity = 2);

/**
 * Find sibling that has order+n of current block.
 *   Negative n means previous sibling.
 *   Positive n means next sibling.
 */
athens.db.nth_sibling = (function athens$db$nth_sibling(uid,n){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var map__86927 = block;
var map__86927__$1 = (((((!((map__86927 == null))))?(((((map__86927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86927):map__86927);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86927__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var find_order = (n + order);
var G__86934 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?sibs","?sibs",844939406,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?curr-uid","?curr-uid",99740245,null),new cljs.core.Symbol(null,"?find-order","?find-order",-1910843640,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?curr-uid","?curr-uid",99740245,null),new cljs.core.Symbol(null,"?sibs","?sibs",844939406,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sibs","?sibs",844939406,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?find-order","?find-order",-1910843640,null)], null)], null);
var G__86935 = cljs.core.deref(athens.db.dsdb);
var G__86936 = athens.db.rules;
var G__86937 = uid;
var G__86938 = find_order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__86934,G__86935,G__86936,G__86937,G__86938) : datascript.core.q.call(null,G__86934,G__86935,G__86936,G__86937,G__86938));
});
/**
 * If order 0, go to parent.
 * If order n but block is closed, go to prev sibling.
 * If order n and block is OPEN, go to prev sibling's deepest child.
 */
athens.db.prev_block_uid = (function athens$db$prev_block_uid(uid){
var vec__86939 = athens.db.uid_and_embed_id(uid);
var uid__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86939,(0),null);
var embed_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86939,(1),null);
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null));
var prev_sibling = athens.db.nth_sibling(uid__$1,(-1));
var map__86942 = prev_sibling;
var map__86942__$1 = (((((!((map__86942 == null))))?(((((map__86942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86942):map__86942);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86942__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86942__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var prev_block = (((new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) === (0)))?parent:((open === false)?prev_sibling:((open === true)?athens.db.deepest_child_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$2], null)):null)));
var G__86944 = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(prev_block);
if(cljs.core.truth_(embed_id)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86944),"-embed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(embed_id)].join('');
} else {
return G__86944;
}
});
/**
 * Search for next sibling. If not there (i.e. is last child), find sibling of parent.
 *   If parent is root, go to next sibling.
 */
athens.db.next_sibling_recursively = (function athens$db$next_sibling_recursively(uid){
var uid__$1 = uid;
while(true){
var sib = athens.db.nth_sibling(uid__$1,(1));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null));
var map__86951 = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null));
var map__86951__$1 = (((((!((map__86951 == null))))?(((((map__86951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86951):map__86951);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86951__$1,new cljs.core.Keyword("node","title","node/title",628940777));
if(cljs.core.truth_((function (){var or__4126__auto__ = sib;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return node;
}
}
})())){
return sib;
} else {
var G__87104 = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent);
uid__$1 = G__87104;
continue;
}
break;
}
});
/**
 * 1-arity:
 *  if open and children, go to child 0
 *  else recursively find next sibling of parent
 *   2-arity:
 *  used for multi-block-selection; ignores child blocks
 */
athens.db.next_block_uid = (function athens$db$next_block_uid(var_args){
var G__86978 = arguments.length;
switch (G__86978) {
case 1:
return athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$1 = (function (uid){
var vec__86986 = athens.db.uid_and_embed_id(uid);
var uid__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86986,(0),null);
var embed_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86986,(1),null);
var block = athens.db.sort_block_children(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null)));
var map__86995 = block;
var map__86995__$1 = (((((!((map__86995 == null))))?(((((map__86995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86995):map__86995);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86995__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86995__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86995__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var next_block_recursive = athens.db.next_sibling_recursively(uid__$1);
var next_block = (cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = open;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return node;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return children;
} else {
return and__4115__auto__;
}
})())?cljs.core.first(children):(cljs.core.truth_(next_block_recursive)?next_block_recursive:null));
var G__87019 = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(next_block);
if(cljs.core.truth_((function (){var and__4115__auto__ = embed_id;
if(cljs.core.truth_(and__4115__auto__)){
return document.querySelector(["#editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(next_block)),"-embed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(embed_id)].join(''));
} else {
return and__4115__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87019),"-embed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(embed_id)].join('');
} else {
return G__87019;
}
}));

(athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$2 = (function (uid,selection_QMARK_){
if(cljs.core.truth_(selection_QMARK_)){
var vec__87020 = athens.db.uid_and_embed_id(uid);
var o_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87020,(0),null);
var embed_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87020,(1),null);
var next_block_recursive = athens.db.next_sibling_recursively(o_uid);
var G__87026 = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(next_block_recursive);
if(cljs.core.truth_((function (){var and__4115__auto__ = embed_id;
if(cljs.core.truth_(and__4115__auto__)){
return document.querySelector(["#editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(next_block_recursive)),"-embed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(embed_id)].join(''));
} else {
return and__4115__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87026),"-embed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(embed_id)].join('');
} else {
return G__87026;
}
} else {
return athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$1(uid);
}
}));

(athens.db.next_block_uid.cljs$lang$maxFixedArity = 2);

if((typeof athens !== 'undefined') && (typeof athens.db !== 'undefined') && (typeof athens.db.history !== 'undefined')){
} else {
athens.db.history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
}
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,new cljs.core.Keyword(null,"history","history",-247395220),(function (tx_report){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.some((function (datom){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(datom,(1)),new cljs.core.Keyword(null,"from-undo-redo","from-undo-redo",556372434));
}),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));
}
})())){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.history,(function (buff){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__87034){
var vec__87035 = p__87034;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87035,(0),null);
var applied_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87035,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87035,(2),null);
return cljs.core.not(applied_QMARK_);
}),buff));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.history,(function (cur_his){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.first(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report))),(3)),true,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report)], null),cur_his);
}));
}
}));
athens.db.get_ref_ids = (function athens$db$get_ref_ids(pattern){
return cljs.core.deref(posh.reagent.q(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null),athens.db.dsdb,pattern));
});
athens.db.merge_parents_and_block = (function athens$db$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.db.get_parents_recursively(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.db.get_block_document(id);
}),ref_ids);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parents","block/parents",-1954648902),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))], null)], 0));
}),blocks);
});
athens.db.group_by_parent = (function athens$db$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.db.get_data = (function athens$db$get_data(pattern){
return cljs.core.seq(athens.db.group_by_parent(athens.db.merge_parents_and_block(athens.db.get_ref_ids(pattern))));
});
/**
 * For node-page references UI.
 */
athens.db.get_linked_references = (function athens$db$get_linked_references(title){
return cljs.core.rseq(cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),athens.db.group_by_parent(athens.db.merge_parents_and_block(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null))))))))));
});
/**
 * For block-page references UI.
 */
athens.db.get_linked_block_references = (function athens$db$get_linked_block_references(block){
return cljs.core.vec(athens.db.group_by_parent(athens.db.merge_parents_and_block(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block)))));
});
/**
 * For node-page references UI.
 */
athens.db.get_unlinked_references = (function athens$db$get_unlinked_references(title){
return athens.db.get_data(athens.patterns.unlinked(title));
});
athens.db.linked_refs_count = (function athens$db$linked_refs_count(title){
var G__87065 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?u","?u",749886731,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null)], null);
var G__87066 = cljs.core.deref(athens.db.dsdb);
var G__87067 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__87065,G__87066,G__87067) : datascript.core.q.call(null,G__87065,G__87066,G__87067));
});
/**
 * For a given title, unlinks [[brackets]], #[[brackets]], and #brackets.
 */
athens.db.replace_linked_refs = (function athens$db$replace_linked_refs(title){
var pattern = athens.patterns.linked(title);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
var new_str = clojure.string.replace(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(x),pattern,title);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword("block","string","block/string",-2066596447),new_str);
}),(function (){var G__87073 = cljs.core.deref(athens.db.dsdb);
var G__87074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__87075 = athens.db.get_ref_ids(pattern);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__87073,G__87074,G__87075) : datascript.core.pull_many.call(null,G__87073,G__87074,G__87075));
})());
});
athens.db.pull_nil = (function athens$db$pull_nil(db,selector,id){
try{return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(db,selector,id) : datascript.core.pull.call(null,db,selector,id));
}catch (e87076){if((e87076 instanceof Error)){
var _e = e87076;
return null;
} else {
throw e87076;

}
}});
/**
 * uid -> Current block
 * state -> Look at state atom in block-el
 */
athens.db.transact_state_for_uid = (function athens$db$transact_state_for_uid(uid,state){
var map__87077 = cljs.core.deref(state);
var map__87077__$1 = (((((!((map__87077 == null))))?(((((map__87077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87077):map__87077);
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87077__$1,new cljs.core.Keyword("string","local","string/local",-578009907));
var previous = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87077__$1,new cljs.core.Keyword("string","previous","string/previous",1734905219));
var eid = athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid);
if(cljs.core.truth_(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(local,previous))?eid:false))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","previous","string/previous",1734905219),local);

var new_block_string = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),local], null);
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block_string], null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null));
} else {
return null;
}
});

//# sourceMappingURL=athens.db.js.map
