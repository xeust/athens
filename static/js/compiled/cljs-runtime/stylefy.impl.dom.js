goog.provide('stylefy.impl.dom');
stylefy.impl.dom.styles_in_dom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.dom_update_requested_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.impl.dom.styles_as_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.keyframes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.font_faces_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_tags_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_classes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.stylefy_node_id = "#_stylefy-styles_";
stylefy.impl.dom.stylefy_constant_node_id = "#_stylefy-constant-styles_";
stylefy.impl.dom.stylefy_base_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
stylefy.impl.dom.stylefy_instance_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(style_hash){
if(cljs.core.truth_(style_hash)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_as_css),style_hash);
} else {
return null;
}
});
stylefy.impl.dom.update_style_tags_BANG_ = (function stylefy$impl$dom$update_style_tags_BANG_(node_stylefy,node_stylefy_constant){
var styles_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),stylefy.impl.dom.style_by_hash),cljs.core.keys(cljs.core.deref(stylefy.impl.dom.styles_as_css)));
var keyframes_in_css = cljs.core.vals(cljs.core.deref(stylefy.impl.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),cljs.core.deref(stylefy.impl.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),cljs.core.deref(stylefy.impl.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),cljs.core.deref(stylefy.impl.dom.custom_classes_in_use));
var new_style_constant_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(font_faces_in_use,keyframes_in_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_tags_in_use,custom_classes_in_use], 0)));
var new_style_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,styles_in_css);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dommy.core.text(node_stylefy_constant),new_style_constant_css)){
} else {
dommy.core.set_text_BANG_(node_stylefy_constant,new_style_constant_css);
}

return dommy.core.set_text_BANG_(node_stylefy,new_style_css);
});
stylefy.impl.dom.mark_all_styles_added_in_dom_BANG_ = (function stylefy$impl$dom$mark_all_styles_added_in_dom_BANG_(){
var seq__94805 = cljs.core.seq(cljs.core.keys(cljs.core.deref(stylefy.impl.dom.styles_in_dom)));
var chunk__94806 = null;
var count__94807 = (0);
var i__94808 = (0);
while(true){
if((i__94808 < count__94807)){
var style_hash = chunk__94806.cljs$core$IIndexed$_nth$arity$2(null,i__94808);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_dom),style_hash),true);


var G__95326 = seq__94805;
var G__95327 = chunk__94806;
var G__95328 = count__94807;
var G__95329 = (i__94808 + (1));
seq__94805 = G__95326;
chunk__94806 = G__95327;
count__94807 = G__95328;
i__94808 = G__95329;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__94805);
if(temp__5735__auto__){
var seq__94805__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__94805__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__94805__$1);
var G__95330 = cljs.core.chunk_rest(seq__94805__$1);
var G__95331 = c__4556__auto__;
var G__95332 = cljs.core.count(c__4556__auto__);
var G__95333 = (0);
seq__94805 = G__95330;
chunk__94806 = G__95331;
count__94807 = G__95332;
i__94808 = G__95333;
continue;
} else {
var style_hash = cljs.core.first(seq__94805__$1);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_dom),style_hash),true);


var G__95334 = cljs.core.next(seq__94805__$1);
var G__95335 = null;
var G__95336 = (0);
var G__95337 = (0);
seq__94805 = G__95334;
chunk__94806 = G__95335;
count__94807 = G__95336;
i__94808 = G__95337;
continue;
}
} else {
return null;
}
}
break;
}
});
stylefy.impl.dom.get_stylefy_node = (function stylefy$impl$dom$get_stylefy_node(id,base_node,instance_id){
var final_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),(cljs.core.truth_(instance_id)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id):null)].join('');
if((base_node == null)){
return document.querySelector(dommy.core.selector(final_id));
} else {
return base_node.querySelector(dommy.core.selector(final_id));
}
});
stylefy.impl.dom.update_dom = (function stylefy$impl$dom$update_dom(){
var node_stylefy = stylefy.impl.dom.get_stylefy_node(stylefy.impl.dom.stylefy_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
var node_stylefy_constant = stylefy.impl.dom.get_stylefy_node(stylefy.impl.dom.stylefy_constant_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
if(cljs.core.truth_((function (){var and__4115__auto__ = node_stylefy;
if(cljs.core.truth_(and__4115__auto__)){
return node_stylefy_constant;
} else {
return and__4115__auto__;
}
})())){
stylefy.impl.dom.update_style_tags_BANG_(node_stylefy,node_stylefy_constant);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_update_requested_QMARK_,false);

try{stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_as_css),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
}catch (e94902){var e_95338 = e94902;
stylefy.impl.log.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_95338)].join(''));

stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));

}
return stylefy.impl.dom.mark_all_styles_added_in_dom_BANG_();
} else {
return stylefy.impl.log.error("stylefy is unable to find the required <style> tags!");
}
});
stylefy.impl.dom.update_dom_if_requested = (function stylefy$impl$dom$update_dom_if_requested(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.dom.dom_update_requested_QMARK_))){
return stylefy.impl.dom.update_dom();
} else {
return null;
}
});
stylefy.impl.dom.request_asynchronous_dom_update = (function stylefy$impl$dom$request_asynchronous_dom_update(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.state.stylefy_initialised_QMARK_))){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.dom.dom_update_requested_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(stylefy.impl.dom.dom_update_requested_QMARK_,true);

var c__63830__auto___95339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_95003){
var state_val_95004 = (state_95003[(1)]);
if((state_val_95004 === (1))){
var inst_94996 = stylefy.impl.dom.update_dom();
var state_95003__$1 = state_95003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95003__$1,inst_94996);
} else {
return null;
}
});
return (function() {
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto__ = null;
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto____0 = (function (){
var statearr_95083 = [null,null,null,null,null,null,null];
(statearr_95083[(0)] = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto__);

(statearr_95083[(1)] = (1));

return statearr_95083;
});
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto____1 = (function (state_95003){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_95003);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e95087){var ex__63612__auto__ = e95087;
var statearr_95088_95341 = state_95003;
(statearr_95088_95341[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_95003[(4)]))){
var statearr_95092_95342 = state_95003;
(statearr_95092_95342[(1)] = cljs.core.first((state_95003[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95343 = state_95003;
state_95003 = G__95343;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto__ = function(state_95003){
switch(arguments.length){
case 0:
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto____0.call(this);
case 1:
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto____1.call(this,state_95003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto____0;
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto____1;
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_95131 = f__63831__auto__();
(statearr_95131[(6)] = c__63830__auto___95339);

return statearr_95131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return null;
}
} else {
return null;
}
});
stylefy.impl.dom.init_multi_instance = (function stylefy$impl$dom$init_multi_instance(p__95176){
var map__95216 = p__95176;
var map__95216__$1 = (((((!((map__95216 == null))))?(((((map__95216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95216):map__95216);
var options = map__95216__$1;
var multi_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95216__$1,new cljs.core.Keyword(null,"multi-instance","multi-instance",-1525956512));
var base_node = new cljs.core.Keyword(null,"base-node","base-node",-275497090).cljs$core$IFn$_invoke$arity$1(multi_instance);
var instance_id = new cljs.core.Keyword(null,"instance-id","instance-id",951361263).cljs$core$IFn$_invoke$arity$1(multi_instance);
if((((instance_id == null)) || (typeof instance_id === 'string'))){
} else {
throw (new Error(["Assert failed: ",["instance-id must be string. Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_node,instance_id], 0))].join(''),"\n","(or (nil? instance-id) (string? instance-id))"].join('')));
}

cljs.core.reset_BANG_(stylefy.impl.dom.stylefy_base_node,base_node);

return cljs.core.reset_BANG_(stylefy.impl.dom.stylefy_instance_id,instance_id);
});
stylefy.impl.dom.init_cache = (function stylefy$impl$dom$init_cache(options){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313).cljs$core$IFn$_invoke$arity$1(options),false)){
stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache-options","cache-options",1443503739).cljs$core$IFn$_invoke$arity$1(options),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));

var temp__5735__auto__ = stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_styles(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id)));
if(cljs.core.truth_(temp__5735__auto__)){
var cached_styles = temp__5735__auto__;
cljs.core.reset_BANG_(stylefy.impl.dom.styles_as_css,(function (){var or__4126__auto__ = cached_styles;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return cljs.core.reset_BANG_(stylefy.impl.dom.styles_in_dom,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95317_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__95317_SHARP_,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)]);
}),cljs.core.keys(cached_styles))));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__95318){
var map__95319 = p__95318;
var map__95319__$1 = (((((!((map__95319 == null))))?(((((map__95319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95319):map__95319);
var style = map__95319__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95319__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(css)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","css"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_to_be_saved = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),css], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.impl.dom.styles_as_css,cljs.core.assoc,hash,style_to_be_saved);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.impl.dom.styles_in_dom,cljs.core.assoc,hash,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false));

return stylefy.impl.dom.request_asynchronous_dom_update();
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$(cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_dom),style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(identifier,garden_syntax){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.impl.dom.keyframes_in_use,cljs.core.assoc,identifier,garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_syntax], 0)));

stylefy.impl.dom.request_asynchronous_dom_update();

return null;
});
stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(garden_syntax){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.font_faces_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_syntax], 0))], null));

stylefy.impl.dom.request_asynchronous_dom_update();

return null;
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(tag_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.custom_tags_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),tag_css], null));

stylefy.impl.dom.request_asynchronous_dom_update();

return null;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(class_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),class_as_css], null));

stylefy.impl.dom.request_asynchronous_dom_update();

return null;
});

//# sourceMappingURL=stylefy.impl.dom.js.map
