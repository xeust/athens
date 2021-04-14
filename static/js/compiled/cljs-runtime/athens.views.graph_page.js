goog.provide('athens.views.graph_page');
var module$node_modules$$material_ui$core$ExpansionPanel$index=shadow.js.require("module$node_modules$$material_ui$core$ExpansionPanel$index", {});
var module$node_modules$$material_ui$core$ExpansionPanelDetails$index=shadow.js.require("module$node_modules$$material_ui$core$ExpansionPanelDetails$index", {});
var module$node_modules$$material_ui$core$ExpansionPanelSummary$index=shadow.js.require("module$node_modules$$material_ui$core$ExpansionPanelSummary$index", {});
var module$node_modules$$material_ui$core$Slider$index=shadow.js.require("module$node_modules$$material_ui$core$Slider$index", {});
var module$node_modules$$material_ui$core$Switch$index=shadow.js.require("module$node_modules$$material_ui$core$Switch$index", {});
var module$node_modules$$material_ui$icons$KeyboardArrowRight=shadow.js.require("module$node_modules$$material_ui$icons$KeyboardArrowRight", {});
var module$node_modules$$material_ui$icons$KeyboardArrowUp=shadow.js.require("module$node_modules$$material_ui$icons$KeyboardArrowUp", {});
var module$node_modules$react_force_graph_2d$dist$react_force_graph_2d_common=shadow.js.require("module$node_modules$react_force_graph_2d$dist$react_force_graph_2d_common", {});
athens.views.graph_page.graph_ref_map = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
athens.views.graph_page.m_slider = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$Slider$index.default);
athens.views.graph_page.m_expansion_panel = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$ExpansionPanel$index.default);
athens.views.graph_page.m_expansion_panel_details = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$ExpansionPanelDetails$index.default);
athens.views.graph_page.m_expansion_panel_summary = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$ExpansionPanelSummary$index.default);
athens.views.graph_page.m_switch = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$Switch$index.default);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("graph","conf","graph/conf",-1141223894),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"graph-conf","graph-conf",964064393).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graph","set-graph-ref","graph/set-graph-ref",-1788714132),(function (db,p__97894){
var vec__97895 = p__97894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97895,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97895,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97895,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-ref","graph-ref",-641285426),key], null),val);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("graph","ref","graph/ref",1191380693),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__97899){
var vec__97900 = p__97899;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97900,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97900,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-ref","graph-ref",-641285426),key], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graph","set-conf","graph/set-conf",-194856732),(function (db,p__97903){
var vec__97904 = p__97903;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97904,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97904,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97904,(2),null);
var n_gc = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"graph-conf","graph-conf",964064393).cljs$core$IFn$_invoke$arity$1(db),key,val);
localStorage.setItem("graph-conf",n_gc);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"graph-conf","graph-conf",964064393),n_gc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graph","load-graph-conf","graph/load-graph-conf",1633257339),(function (db,_){
var conf = (function (){var or__4126__auto__ = (function (){var G__97908 = "graph-conf";
var G__97908__$1 = (((G__97908 == null))?null:localStorage.getItem(G__97908));
if((G__97908__$1 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__97908__$1);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return athens.db.default_graph_conf;
}
})();
localStorage.setItem("graph-conf",conf);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"graph-conf","graph-conf",964064393),conf);
}));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","load-graph-conf","graph/load-graph-conf",1633257339)], null));
athens.views.graph_page.build_nodes = (function athens$views$graph_page$build_nodes(){
var all_nodes = (function (){var G__97917 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__97918 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__97917,G__97918) : datascript.core.q.call(null,G__97917,G__97918));
})();
var nodes_with_refs = (function (){var G__97919 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__97920 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__97919,G__97920) : datascript.core.q.call(null,G__97919,G__97920));
})();
var nodes_without_refs = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(all_nodes),cljs.core.set(nodes_with_refs));
var nodes_with_refs__$1 = (function (){var G__97921 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__97922 = cljs.core.deref(athens.db.dsdb);
var G__97923 = nodes_with_refs;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__97921,G__97922,G__97923) : datascript.core.q.call(null,G__97921,G__97922,G__97923));
})();
var nodes_without_refs__$1 = (function (){var G__97924 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"always-nil-value","always-nil-value",1360251043),(1)),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null)], null);
var G__97925 = cljs.core.deref(athens.db.dsdb);
var G__97926 = nodes_without_refs;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__97924,G__97925,G__97926) : datascript.core.q.call(null,G__97924,G__97925,G__97926));
})();
var all_nodes__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__97927){
var vec__97928 = p__97927;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97928,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97928,(1),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97928,(2),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97928,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, ["id",e,"uid",u,"label",t,"val",val], null);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nodes_with_refs__$1,nodes_without_refs__$1));
return all_nodes__$1;
});
athens.views.graph_page.build_links = (function athens$views$graph_page$build_links(){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (x){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,"source"),null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,"target"),null)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__97931){
var vec__97932 = p__97931;
var node_eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97932,(0),null);
var node_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97932,(1),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97932,(2),null);
var first_parent = cljs.core.first(athens.db.get_parents_recursively(ref));
return new cljs.core.PersistentArrayMap(null, 4, ["source",new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(first_parent),"source-uid",node_uid,"target",node_eid,"target-uid",new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(first_parent)], null);
}),(function (){var G__97935 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__97936 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__97935,G__97936) : datascript.core.q.call(null,G__97935,G__97936));
})()));
});
athens.views.graph_page.linked_nodes = (function athens$views$graph_page$linked_nodes(all_links,node_id){
return cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (link){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(link,"source"),node_id)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(link,"target");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(link,"target"),node_id)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(link,"source");
} else {
return null;

}
}
}),all_links)));
});
/**
 * Nodes that are n levels away from current node
 */
athens.views.graph_page.n_level_linked = (function athens$views$graph_page$n_level_linked(all_links,node_id,levels){
var cur_nodes = cljs.core.PersistentHashSet.createAsIfByAssoc([node_id]);
var levels__$1 = levels;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(levels__$1,(0))){
return cur_nodes;
} else {
var G__98071 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cur_nodes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (cur_nodes,levels__$1){
return (function (p1__97937_SHARP_){
return athens.views.graph_page.linked_nodes(all_links,p1__97937_SHARP_);
});})(cur_nodes,levels__$1))
,cur_nodes));
var G__98072 = (levels__$1 - (1));
cur_nodes = G__98071;
levels__$1 = G__98072;
continue;
}
break;
}
});
athens.views.graph_page.graph_control_style = (function athens$views$graph_page$graph_control_style(theme){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".MuiExpansionPanelDetails-root",".MuiExpansionPanelDetails-root",-536465261),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column",new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".switch",".switch",216338333),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".MuiSvgIcon-root",".MuiSvgIcon-root",2093876191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".MuiExpansionPanelSummary-content",".MuiExpansionPanelSummary-content",-2045066208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.Mui-expanded","&.Mui-expanded",1602545424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0",new cljs.core.Keyword(null,"min-height","min-height",398480837),"unset"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".MuiExpansionPanelSummary-root",".MuiExpansionPanelSummary-root",-789864447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.Mui-expanded","&.Mui-expanded",1602545424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"unset"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".MuiPaper-root",".MuiPaper-root",-1634227425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"graph-control-bg","graph-control-bg",720513248).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"graph-control-color","graph-control-color",950612455).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 2px 0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.Mui-expanded","&.Mui-expanded",1602545424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 5px 0"], null)], null)], null)], null)], null);
});
athens.views.graph_page.expansion_panel = (function athens$views$graph_page$expansion_panel(p__97942,local_node_eid){
var map__97947 = p__97942;
var map__97947__$1 = (((((!((map__97947 == null))))?(((((map__97947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__97947):map__97947);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97947__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97947__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var with_let97949 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let97949","with-let97949",-1619073620));
var temp__5739__auto___98073 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___98073 == null)){
} else {
var c__54632__auto___98074 = temp__5739__auto___98073;
if((with_let97949.generation === c__54632__auto___98074.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let97949.generation = c__54632__auto___98074.ratomGeneration);
}


var init97950 = (with_let97949.length === (0));
var is_open_QMARK_ = ((init97950)?(with_let97949[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let97949[(0)]));
var res__54633__auto__ = (function (){var graph_conf = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","conf","graph/conf",-1141223894)], null)));
var graph_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(athens.views.graph_page.graph_ref_map),(function (){var or__4126__auto__ = local_node_eid;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.graph_page.m_expansion_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.graph_page.m_expansion_panel_summary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(is_open_QMARK_,cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),heading], null),(cljs.core.truth_(cljs.core.deref(is_open_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$KeyboardArrowUp.default], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$KeyboardArrowRight.default], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.graph_page.m_expansion_panel_details,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$graph_page$expansion_panel_$_iter__97955(s__97956){
return (new cljs.core.LazySeq(null,(function (){
var s__97956__$1 = s__97956;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__97956__$1);
if(temp__5735__auto__){
var s__97956__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__97956__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__97956__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__97958 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__97957 = (0);
while(true){
if((i__97957 < size__4528__auto__)){
var map__97959 = cljs.core._nth(c__4527__auto__,i__97957);
var map__97959__$1 = (((((!((map__97959 == null))))?(((((map__97959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__97959):map__97959);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97959__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var comp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97959__$1,new cljs.core.Keyword(null,"comp","comp",1191953630));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97959__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97959__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var no_simulation_reheat_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97959__$1,new cljs.core.Keyword(null,"no-simulation-reheat?","no-simulation-reheat?",1894361536));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97959__$1,new cljs.core.Keyword(null,"props","props",453281727));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97959__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
cljs.core.chunk_append(b__97958,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(graph_conf) : key.call(null,graph_conf));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(athens.db.default_graph_conf) : key.call(null,athens.db.default_graph_conf));
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (i__97957,map__97959,map__97959__$1,key,comp,label,onChange,no_simulation_reheat_QMARK_,props,class$,c__4527__auto__,size__4528__auto__,b__97958,s__97956__$2,temp__5735__auto__,graph_conf,graph_ref,init97950,is_open_QMARK_,with_let97949,map__97947,map__97947__$1,heading,controls){
return (function (_,n_val){
var and__4115__auto___98079 = onChange;
if(cljs.core.truth_(and__4115__auto___98079)){
(onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(n_val) : onChange.call(null,n_val));
} else {
}

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","set-conf","graph/set-conf",-194856732),key,n_val], null));

if(cljs.core.truth_(no_simulation_reheat_QMARK_)){
return null;
} else {
return graph_ref.d3ReheatSimulation();
}
});})(i__97957,map__97959,map__97959__$1,key,comp,label,onChange,no_simulation_reheat_QMARK_,props,class$,c__4527__auto__,size__4528__auto__,b__97958,s__97956__$2,temp__5735__auto__,graph_conf,graph_ref,init97950,is_open_QMARK_,with_let97949,map__97947,map__97947__$1,heading,controls))
], null)], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__98080 = (i__97957 + (1));
i__97957 = G__98080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__97958),athens$views$graph_page$expansion_panel_$_iter__97955(cljs.core.chunk_rest(s__97956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__97958),null);
}
} else {
var map__97965 = cljs.core.first(s__97956__$2);
var map__97965__$1 = (((((!((map__97965 == null))))?(((((map__97965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__97965):map__97965);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97965__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var comp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97965__$1,new cljs.core.Keyword(null,"comp","comp",1191953630));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97965__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97965__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var no_simulation_reheat_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97965__$1,new cljs.core.Keyword(null,"no-simulation-reheat?","no-simulation-reheat?",1894361536));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97965__$1,new cljs.core.Keyword(null,"props","props",453281727));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97965__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(graph_conf) : key.call(null,graph_conf));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(athens.db.default_graph_conf) : key.call(null,athens.db.default_graph_conf));
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__97965,map__97965__$1,key,comp,label,onChange,no_simulation_reheat_QMARK_,props,class$,s__97956__$2,temp__5735__auto__,graph_conf,graph_ref,init97950,is_open_QMARK_,with_let97949,map__97947,map__97947__$1,heading,controls){
return (function (_,n_val){
var and__4115__auto___98081 = onChange;
if(cljs.core.truth_(and__4115__auto___98081)){
(onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(n_val) : onChange.call(null,n_val));
} else {
}

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","set-conf","graph/set-conf",-194856732),key,n_val], null));

if(cljs.core.truth_(no_simulation_reheat_QMARK_)){
return null;
} else {
return graph_ref.d3ReheatSimulation();
}
});})(map__97965,map__97965__$1,key,comp,label,onChange,no_simulation_reheat_QMARK_,props,class$,s__97956__$2,temp__5735__auto__,graph_conf,graph_ref,init97950,is_open_QMARK_,with_let97949,map__97947,map__97947__$1,heading,controls))
], null)], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),athens$views$graph_page$expansion_panel_$_iter__97955(cljs.core.rest(s__97956__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(controls);
})())], null)], null);
})();

return res__54633__auto__;
});
/**
 * Uses a generic expansion panel(not super generic)
 * while this comp dictates all the controls and manipulations that can be made to the graph
 * Look at comment below for code theme - to get a sense of the structure
 */
athens.views.graph_page.graph_controls = (function athens$views$graph_page$graph_controls(var_args){
var G__97971 = arguments.length;
switch (G__97971) {
case 0:
return athens.views.graph_page.graph_controls.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return athens.views.graph_page.graph_controls.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.views.graph_page.graph_controls.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.graph_page.graph_controls,null], null);
}));

(athens.views.graph_page.graph_controls.cljs$core$IFn$_invoke$arity$1 = (function (local_node_eid){
return (function (){
var graph_conf = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","conf","graph/conf",-1141223894)], null)));
var graph_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(athens.views.graph_page.graph_ref_map),(function (){var or__4126__auto__ = local_node_eid;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})());
var theme = (cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme","dark","theme/dark",1860051576)], null))))?athens.style.THEME_DARK:athens.style.THEME_LIGHT);
var node_controls = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hlt-link-levels","hlt-link-levels",-709516433),new cljs.core.Keyword(null,"label","label",1718410804),"No. of link levels to highlight",new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(5),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"marks","marks",-1844991497),true], null),new cljs.core.Keyword(null,"comp","comp",1191953630),athens.views.graph_page.m_slider,new cljs.core.Keyword(null,"no-simulation-reheat?","no-simulation-reheat?",1894361536),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"orphans?","orphans?",-706082472),new cljs.core.Keyword(null,"label","label",1718410804),"Orphan nodes",new cljs.core.Keyword(null,"comp","comp",1191953630),athens.views.graph_page.m_switch,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"orphans?","orphans?",-706082472).cljs$core$IFn$_invoke$arity$1(graph_conf)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"switch",new cljs.core.Keyword(null,"no-simulation-reheat?","no-simulation-reheat?",1894361536),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"daily-notes?","daily-notes?",2097423842),new cljs.core.Keyword(null,"label","label",1718410804),"Daily notes",new cljs.core.Keyword(null,"comp","comp",1191953630),athens.views.graph_page.m_switch,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"daily-notes?","daily-notes?",2097423842).cljs$core$IFn$_invoke$arity$1(graph_conf)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"switch",new cljs.core.Keyword(null,"no-simulation-reheat?","no-simulation-reheat?",1894361536),true], null)], null);
var node_section = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Nodes",new cljs.core.Keyword(null,"controls","controls",1340701452),node_controls], null);
var force_controls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"link-distance","link-distance",1680735939),new cljs.core.Keyword(null,"label","label",1718410804),"Link Distance",new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(95)], null),new cljs.core.Keyword(null,"comp","comp",1191953630),athens.views.graph_page.m_slider,new cljs.core.Keyword(null,"class","class",-2030961996),"slider",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (val){
var and__4115__auto__ = graph_ref;
if(cljs.core.truth_(and__4115__auto__)){
return graph_ref.d3Force("link").distance(val);
} else {
return and__4115__auto__;
}
})], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"label","label",1718410804),"Attraction force",new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(-30),new cljs.core.Keyword(null,"max","max",61366548),(0)], null),new cljs.core.Keyword(null,"comp","comp",1191953630),athens.views.graph_page.m_slider,new cljs.core.Keyword(null,"class","class",-2030961996),"slider",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (val){
var and__4115__auto__ = graph_ref;
if(cljs.core.truth_(and__4115__auto__)){
return graph_ref.d3Force("charge").strength(val);
} else {
return and__4115__auto__;
}
})], null)], null);
var force_section = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Forces",new cljs.core.Keyword(null,"controls","controls",1340701452),force_controls], null);
var local_controls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"local-depth","local-depth",-1114111868),new cljs.core.Keyword(null,"label","label",1718410804),"Local Depth",new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(5),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"marks","marks",-1844991497),true], null),new cljs.core.Keyword(null,"class","class",-2030961996),"slider",new cljs.core.Keyword(null,"comp","comp",1191953630),athens.views.graph_page.m_slider,new cljs.core.Keyword(null,"no-simulation-reheat?","no-simulation-reheat?",1894361536),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"root-links-only?","root-links-only?",1055821711),new cljs.core.Keyword(null,"label","label",1718410804),"Only root links",new cljs.core.Keyword(null,"comp","comp",1191953630),athens.views.graph_page.m_switch,new cljs.core.Keyword(null,"class","class",-2030961996),"switch",new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"root-links-only?","root-links-only?",1055821711).cljs$core$IFn$_invoke$arity$1(graph_conf)], null),new cljs.core.Keyword(null,"no-simulation-reheat?","no-simulation-reheat?",1894361536),true], null)], null);
var local_section = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Local options",new cljs.core.Keyword(null,"controls","controls",1340701452),local_controls], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.graph_page.graph_control_style(theme)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$graph_page$iter__97980(s__97981){
return (new cljs.core.LazySeq(null,(function (){
var s__97981__$1 = s__97981;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__97981__$1);
if(temp__5735__auto__){
var s__97981__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__97981__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__97981__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__97983 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__97982 = (0);
while(true){
if((i__97982 < size__4528__auto__)){
var map__97984 = cljs.core._nth(c__4527__auto__,i__97982);
var map__97984__$1 = (((((!((map__97984 == null))))?(((((map__97984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__97984):map__97984);
var section = map__97984__$1;
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97984__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__97983,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.graph_page.expansion_panel,section,local_node_eid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),heading], null)));

var G__98083 = (i__97982 + (1));
i__97982 = G__98083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__97983),athens$views$graph_page$iter__97980(cljs.core.chunk_rest(s__97981__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__97983),null);
}
} else {
var map__97986 = cljs.core.first(s__97981__$2);
var map__97986__$1 = (((((!((map__97986 == null))))?(((((map__97986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__97986):map__97986);
var section = map__97986__$1;
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97986__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.graph_page.expansion_panel,section,local_node_eid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),heading], null)),athens$views$graph_page$iter__97980(cljs.core.rest(s__97981__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(local_node_eid)?null:node_section),force_section,(cljs.core.truth_(local_node_eid)?local_section:null)], null)));
})())], null);
});
}));

(athens.views.graph_page.graph_controls.cljs$lang$maxFixedArity = 1);

/**
 * Main graph-root where react-force-graph comp is rendered
 * Flow:
 *  build-links -> find nodes based on conf or build all nodes(local, daily and orphan node filter)
 *  further filter down links based on nodes(cleaning up)
 */
athens.views.graph_page.graph_root = (function athens$views$graph_page$graph_root(var_args){
var G__98001 = arguments.length;
switch (G__98001) {
case 0:
return athens.views.graph_page.graph_root.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return athens.views.graph_page.graph_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.views.graph_page.graph_root.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.graph_page.graph_root,null], null);
}));

(athens.views.graph_page.graph_root.cljs$core$IFn$_invoke$arity$1 = (function (local_node_eid){
var highlight_nodes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var highlight_links = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var dimensions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var dom_node = reagent.dom.dom_node(this$);
var graph_conf = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","conf","graph/conf",-1141223894)], null)));
var graph_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(athens.views.graph_page.graph_ref_map),(function (){var or__4126__auto__ = local_node_eid;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dimensions,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),dom_node.closest(".graph-page").parentNode.clientWidth);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dimensions,cljs.core.assoc,new cljs.core.Keyword(null,"height","height",1025178622),dom_node.closest(".graph-page").parentNode.clientHeight);

if(cljs.core.truth_(graph_ref)){
graph_ref.d3Force("charge").distanceMax(((function (){var x__4217__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dimensions));
var y__4218__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dimensions));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})() / (2)));

var c_force_98085 = graph_ref.d3Force("center");
var G__98004_98086 = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dimensions)) / (2));
var G__98005_98087 = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dimensions)) / (2));
(c_force_98085.cljs$core$IFn$_invoke$arity$2 ? c_force_98085.cljs$core$IFn$_invoke$arity$2(G__98004_98086,G__98005_98087) : c_force_98085.call(null,G__98004_98086,G__98005_98087));

graph_ref.d3Force("charge").strength(new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883).cljs$core$IFn$_invoke$arity$1(graph_conf));

graph_ref.d3Force("link").distance(new cljs.core.Keyword(null,"link-distance","link-distance",1680735939).cljs$core$IFn$_invoke$arity$1(graph_conf));

return graph_ref.d3ReheatSimulation();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_this){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.views.graph_page.graph_ref_map,cljs.core.assoc,(function (){var or__4126__auto__ = local_node_eid;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})(),null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (local_node_eid__$1){
var dark_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("theme","dark","theme/dark",1860051576)], null)));
var graph_conf = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","conf","graph/conf",-1141223894)], null)));
var all_links = athens.views.graph_page.build_links();
var all_nodes_with_links = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__97992_SHARP_){
return cljs.core.vals(p1__97992_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_links], 0)));
var linked_nodes_without_daily_notes = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__97993_SHARP_){
return cljs.core.vals(p1__97993_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (link){
return ((athens.util.is_daily_note(cljs.core.get.cljs$core$IFn$_invoke$arity$2(link,"source-uid"))) || (athens.util.is_daily_note(cljs.core.get.cljs$core$IFn$_invoke$arity$2(link,"target-uid"))));
}),all_links)], 0)));
var nodes = (function (){var G__98022 = (cljs.core.truth_(local_node_eid__$1)?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (node_obj){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_obj,"uid") == null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__98023){
var vec__98024 = p__98023;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98024,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98024,(1),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98024,(2),null);
var _val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98024,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, ["id",e,"uid",u,"label",t,"val",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,local_node_eid__$1))?(8):(1))], null);
}),(function (){var G__98027 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__98028 = cljs.core.deref(athens.db.dsdb);
var G__98029 = athens.views.graph_page.n_level_linked(all_links,local_node_eid__$1,new cljs.core.Keyword(null,"local-depth","local-depth",-1114111868).cljs$core$IFn$_invoke$arity$1(graph_conf));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__98027,G__98028,G__98029) : datascript.core.q.call(null,G__98027,G__98028,G__98029));
})()))):athens.views.graph_page.build_nodes());
var G__98022__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"daily-notes?","daily-notes?",2097423842).cljs$core$IFn$_invoke$arity$1(graph_conf)))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (node){
return athens.util.is_daily_note(cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"uid"));
}),G__98022):G__98022);
var G__98022__$2 = ((cljs.core.not(new cljs.core.Keyword(null,"orphans?","orphans?",-706082472).cljs$core$IFn$_invoke$arity$1(graph_conf)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.contains_QMARK_(all_nodes_with_links,cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"id"));
}),G__98022__$1):G__98022__$1);
if(((cljs.core.not(new cljs.core.Keyword(null,"daily-notes?","daily-notes?",2097423842).cljs$core$IFn$_invoke$arity$1(graph_conf))) && (cljs.core.not(new cljs.core.Keyword(null,"orphans?","orphans?",-706082472).cljs$core$IFn$_invoke$arity$1(graph_conf))))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.contains_QMARK_(linked_nodes_without_daily_notes,cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"id"));
}),G__98022__$2);
} else {
return G__98022__$2;
}
})();
var filtered_nodes_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__97994_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__97994_SHARP_,"id");
}),nodes));
var links = (function (){var G__98031 = all_links;
var G__98031__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = local_node_eid__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core.not(new cljs.core.Keyword(null,"daily-notes?","daily-notes?",2097423842).cljs$core$IFn$_invoke$arity$1(graph_conf))) || (cljs.core.not(new cljs.core.Keyword(null,"orphans?","orphans?",-706082472).cljs$core$IFn$_invoke$arity$1(graph_conf))));
}
})())?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (link_obj){
return ((cljs.core.contains_QMARK_(filtered_nodes_set,cljs.core.get.cljs$core$IFn$_invoke$arity$2(link_obj,"source"))) && (cljs.core.contains_QMARK_(filtered_nodes_set,cljs.core.get.cljs$core$IFn$_invoke$arity$2(link_obj,"target"))));
}),G__98031):G__98031);
var G__98031__$2 = (cljs.core.truth_((function (){var and__4115__auto__ = local_node_eid__$1;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"root-links-only?","root-links-only?",1055821711).cljs$core$IFn$_invoke$arity$1(graph_conf);
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-depth","local-depth",-1114111868).cljs$core$IFn$_invoke$arity$1(graph_conf),(1));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (link_obj){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(link_obj,"source"),local_node_eid__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(link_obj,"target"),local_node_eid__$1)));
}),G__98031__$1):G__98031__$1);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (link_obj){
return ((cljs.core.contains_QMARK_(filtered_nodes_set,cljs.core.get.cljs$core$IFn$_invoke$arity$2(link_obj,"source"))) || (cljs.core.contains_QMARK_(filtered_nodes_set,cljs.core.get.cljs$core$IFn$_invoke$arity$2(link_obj,"target"))));
}),G__98031__$2);

})();
var theme = (cljs.core.truth_(dark_QMARK_)?athens.style.THEME_DARK:athens.style.THEME_LIGHT);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_force_graph_2d$dist$react_force_graph_2d_common,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"graphData","graphData",-1789512421),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"links","links",-654507394),links], null),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dimensions)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dimensions)),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__97995_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.views.graph_page.graph_ref_map,cljs.core.assoc,(function (){var or__4126__auto__ = local_node_eid__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})(),p1__97995_SHARP_);
}),new cljs.core.Keyword(null,"linkColor","linkColor",-779092884),(function (){
return new cljs.core.Keyword(null,"graph-link-normal","graph-link-normal",624731669).cljs$core$IFn$_invoke$arity$1(theme);
}),new cljs.core.Keyword(null,"nodeCanvasObject","nodeCanvasObject",157753005),(function (node,ctx,global_scale){
var label = node.label;
var val = node.val;
var node_id = node.id;
var x = node.x;
var y = node.y;
var scale_factor = (3);
var font_size = ((10) / global_scale);
var text_width = ctx.measureText(label).width;
var radius = (function (){var x__4214__auto__ = 1.3;
var y__4215__auto__ = ((Math.sqrt(val) / global_scale) * scale_factor);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var highlighted_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(highlight_nodes),node_id);
var local_root_node_QMARK_ = (function (){var and__4115__auto__ = local_node_eid__$1;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = node_id;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(local_node_eid__$1,node_id);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
(ctx.fillStyle = (cljs.core.truth_(local_root_node_QMARK_)?new cljs.core.Keyword(null,"graph-node-hlt","graph-node-hlt",-102104596).cljs$core$IFn$_invoke$arity$1(theme):((((highlighted_QMARK_) && (cljs.core.not(local_node_eid__$1))))?new cljs.core.Keyword(null,"graph-node-hlt","graph-node-hlt",-102104596).cljs$core$IFn$_invoke$arity$1(theme):new cljs.core.Keyword(null,"graph-node-normal","graph-node-normal",-474341170).cljs$core$IFn$_invoke$arity$1(theme)
)));

if((global_scale > 1.75)){
(ctx.font = [((((highlighted_QMARK_) && (cljs.core.not(local_node_eid__$1))))?"bold ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px IBM Plex Sans, Sans-Serif"].join(''));

ctx.fillText(label,(x - (text_width / (2))),((y + radius) + font_size));
} else {
}

ctx.beginPath();

ctx.arc(x,y,radius,(0),(Math.PI * (2)));

return ctx.fill();
}),new cljs.core.Keyword(null,"onNodeClick","onNodeClick",-722717046),(function (node,event){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(node.uid,event);
}),new cljs.core.Keyword(null,"onNodeHover","onNodeHover",1649826192),(function (node){
var _ = cljs.core.reset_BANG_(highlight_nodes,cljs.core.PersistentHashSet.EMPTY);
var ___$1 = cljs.core.reset_BANG_(highlight_links,cljs.core.PersistentHashSet.EMPTY);
var graph_conf__$1 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","conf","graph/conf",-1141223894)], null)));
var temp__5735__auto__ = (function (){var G__98054 = node;
if((G__98054 == null)){
return null;
} else {
return G__98054.id;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var node_id = temp__5735__auto__;
return cljs.core.reset_BANG_(highlight_nodes,athens.views.graph_page.n_level_linked(all_links,node_id,new cljs.core.Keyword(null,"hlt-link-levels","hlt-link-levels",-709516433).cljs$core$IFn$_invoke$arity$1(graph_conf__$1)));
} else {
return null;
}
})], null)], null);
})], null));
}));

(athens.views.graph_page.graph_root.cljs$lang$maxFixedArity = 1);

/**
 * Designed to work with local or global graphs
 * Keep in mind block-uid -> db/id (more convenient)
 */
athens.views.graph_page.graph_page = (function athens$views$graph_page$graph_page(var_args){
var G__98056 = arguments.length;
switch (G__98056) {
case 0:
return athens.views.graph_page.graph_page.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return athens.views.graph_page.graph_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.views.graph_page.graph_page.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.graph_page.graph_page,null], null);
}));

(athens.views.graph_page.graph_page.cljs$core$IFn$_invoke$arity$1 = (function (block_uid){
var local_node_eid = (cljs.core.truth_(block_uid)?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__98060 = cljs.core.deref(athens.db.dsdb);
var G__98061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__98062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),block_uid], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__98060,G__98061,G__98062) : datascript.core.pull.call(null,G__98060,G__98061,G__98062));
})()):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-page","div.graph-page",296096433),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(local_node_eid)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"500px"], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.graph_page.graph_controls,local_node_eid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.graph_page.graph_root,local_node_eid], null)], null);
}));

(athens.views.graph_page.graph_page.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=athens.views.graph_page.js.map
