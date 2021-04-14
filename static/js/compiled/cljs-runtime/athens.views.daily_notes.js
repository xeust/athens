goog.provide('athens.views.daily_notes');
athens.views.daily_notes.daily_notes_scroll_area_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"calc(100vh + 1px)",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"1.25rem 0",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null);
athens.views.daily_notes.daily_notes_page_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"16","16",1354114028).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),new cljs.core.Keyword(null,"align-self","align-self",1475936794),"stretch",new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),"stretch",new cljs.core.Keyword(null,"margin","margin",-995903681),"1.25rem 2.5rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),"0s",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.5rem",new cljs.core.Keyword(null,"min-height","min-height",398480837),"calc(100vh - 10rem)"], null);
athens.views.daily_notes.daily_notes_notional_page_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.daily_notes.daily_notes_page_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"4","4",-1197948085).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5"], null)], 0));
athens.views.daily_notes.scroll_daily_notes = (function athens$views$daily_notes$scroll_daily_notes(_){
var daily_notes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573)], null)));
var el = goog.dom.getElement("daily-notes");
var offset_top = el.offsetTop;
var rect = el.getBoundingClientRect();
var from_bottom = rect.bottom;
var from_top = rect.top;
var doc_height = document.documentElement.scrollHeight;
var top_delta = (offset_top - from_top);
var bottom_delta = (from_bottom - doc_height);
if((top_delta < (1))){
return null;
} else {
if((bottom_delta < (1))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),athens.util.get_day.cljs$core$IFn$_invoke$arity$2(athens.util.uid_to_date(cljs.core.last(daily_notes)),(1))], null));
} else {
return null;
}
}
});
athens.views.daily_notes.db_scroll_daily_notes = goog.functions.debounce(athens.views.daily_notes.scroll_daily_notes,(500));
/**
 * Need a safe pull because block/uid doesn't exist yet in datascript, but is found in :daily-notes/items.
 *   This happens because (dispatch [:daily-note/next (get-day)]) updates re-frame faster than the datascript tx can happen
 * 
 *   Bug: It's still possible for a day to not get created. The UI for this just shows an empty page without a title. Acceptable bug :)
 */
athens.views.daily_notes.safe_pull_many = (function athens$views$daily_notes$safe_pull_many(ids){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return (!((x == null)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
try{return cljs.core.deref(posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),x));
}catch (e60679){if((e60679 instanceof Error)){
var _e = e60679;
return null;
} else {
throw e60679;

}
}}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),x], null);
}),ids)));
});
athens.views.daily_notes.daily_notes_panel = (function athens$views$daily_notes$daily_notes_panel(){
var note_refs = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573)], null));
return (function (){
if(cljs.core.empty_QMARK_(cljs.core.deref(note_refs))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),athens.util.get_day.cljs$core$IFn$_invoke$arity$0()], null));
} else {
var notes = athens.views.daily_notes.safe_pull_many(cljs.core.deref(note_refs));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#daily-notes","div#daily-notes",-1983155722),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.daily_notes.daily_notes_scroll_area_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$daily_notes$daily_notes_panel_$_iter__60684(s__60685){
return (new cljs.core.LazySeq(null,(function (){
var s__60685__$1 = s__60685;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60685__$1);
if(temp__5735__auto__){
var s__60685__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60685__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60685__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60687 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60686 = (0);
while(true){
if((i__60686 < size__4528__auto__)){
var map__60688 = cljs.core._nth(c__4527__auto__,i__60686);
var map__60688__$1 = (((((!((map__60688 == null))))?(((((map__60688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60688):map__60688);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60688__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60687,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.daily_notes.daily_notes_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__60695 = (i__60686 + (1));
i__60686 = G__60695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60687),athens$views$daily_notes$daily_notes_panel_$_iter__60684(cljs.core.chunk_rest(s__60685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60687),null);
}
} else {
var map__60692 = cljs.core.first(s__60685__$2);
var map__60692__$1 = (((((!((map__60692 == null))))?(((((map__60692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60692):map__60692);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60692__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.daily_notes.daily_notes_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$views$daily_notes$daily_notes_panel_$_iter__60684(cljs.core.rest(s__60685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(notes);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.daily_notes.daily_notes_notional_page_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Earlier"], null)], null)], null);
}
});
});

//# sourceMappingURL=athens.views.daily_notes.js.map
