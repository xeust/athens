goog.provide('com.rpl.specter');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__74781__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__74781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74782__i = 0, G__74782__a = new Array(arguments.length -  0);
while (G__74782__i < G__74782__a.length) {G__74782__a[G__74782__i] = arguments[G__74782__i + 0]; ++G__74782__i;}
  args = new cljs.core.IndexedSeq(G__74782__a,0,null);
} 
return G__74781__delegate.call(this,args);};
G__74781.cljs$lang$maxFixedArity = 0;
G__74781.cljs$lang$applyTo = (function (arglist__74783){
var args = cljs.core.seq(arglist__74783);
return G__74781__delegate(args);
});
G__74781.cljs$core$IFn$_invoke$arity$variadic = G__74781__delegate;
return G__74781;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74784 = arguments.length;
var i__4737__auto___74785 = (0);
while(true){
if((i__4737__auto___74785 < len__4736__auto___74784)){
args__4742__auto__.push((arguments[i__4737__auto___74785]));

var G__74786 = (i__4737__auto___74785 + (1));
i__4737__auto___74785 = G__74786;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq73691){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73691));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__73707 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__73708 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__73707,G__73708) : com.rpl.specter.compiled_select.call(null,G__73707,G__73708));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__73712 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__73713 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__73712,G__73713) : com.rpl.specter.compiled_select_one.call(null,G__73712,G__73713));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__73714 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__73715 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__73714,G__73715) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__73714,G__73715));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__73716 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__73717 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__73716,G__73717) : com.rpl.specter.compiled_select_first.call(null,G__73716,G__73717));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__73718 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__73719 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__73718,G__73719) : com.rpl.specter.compiled_select_any.call(null,G__73718,G__73719));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__73720 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__73721 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__73720,G__73721) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__73720,G__73721));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__73725 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__73726 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__73725,G__73726) : com.rpl.specter.compiled_traverse.call(null,G__73725,G__73726));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__73727 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__73727) : com.rpl.specter.compiled_traverse_all.call(null,G__73727));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__73730 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__73731 = transform_fn;
var G__73732 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__73730,G__73731,G__73732) : com.rpl.specter.compiled_transform.call(null,G__73730,G__73731,G__73732));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__73734 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__73735 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__73734,G__73735) : com.rpl.specter.compiled_multi_transform.call(null,G__73734,G__73735));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__73739 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__73741 = val;
var G__73742 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__73739,G__73741,G__73742) : com.rpl.specter.compiled_setval.call(null,G__73739,G__73741,G__73742));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74790 = arguments.length;
var i__4737__auto___74791 = (0);
while(true){
if((i__4737__auto___74791 < len__4736__auto___74790)){
args__4742__auto__.push((arguments[i__4737__auto___74791]));

var G__74792 = (i__4737__auto___74791 + (1));
i__4737__auto___74791 = G__74792;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__73757){
var map__73758 = p__73757;
var map__73758__$1 = (((((!((map__73758 == null))))?(((((map__73758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73758):map__73758);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73758__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__73760 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__73761 = transform_fn;
var G__73762 = structure;
var G__73763 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__73764 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__73760,G__73761,G__73762,G__73763,G__73764) : com.rpl.specter.compiled_replace_in.call(null,G__73760,G__73761,G__73762,G__73763,G__73764));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq73745){
var G__73746 = cljs.core.first(seq73745);
var seq73745__$1 = cljs.core.next(seq73745);
var G__73747 = cljs.core.first(seq73745__$1);
var seq73745__$2 = cljs.core.next(seq73745__$1);
var G__73748 = cljs.core.first(seq73745__$2);
var seq73745__$3 = cljs.core.next(seq73745__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73746,G__73747,G__73748,seq73745__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74793__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__74793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74794__i = 0, G__74794__a = new Array(arguments.length -  0);
while (G__74794__i < G__74794__a.length) {G__74794__a[G__74794__i] = arguments[G__74794__i + 0]; ++G__74794__i;}
  args = new cljs.core.IndexedSeq(G__74794__a,0,null);
} 
return G__74793__delegate.call(this,args);};
G__74793.cljs$lang$maxFixedArity = 0;
G__74793.cljs$lang$applyTo = (function (arglist__74795){
var args = cljs.core.seq(arglist__74795);
return G__74793__delegate(args);
});
G__74793.cljs$core$IFn$_invoke$arity$variadic = G__74793__delegate;
return G__74793;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter73792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter73792 = (function (meta73793){
this.meta73793 = meta73793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter73792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73794,meta73793__$1){
var self__ = this;
var _73794__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter73792(meta73793__$1));
}));

(com.rpl.specter.t_com$rpl$specter73792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73794){
var self__ = this;
var _73794__$1 = this;
return self__.meta73793;
}));

(com.rpl.specter.t_com$rpl$specter73792.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter73792.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter73792.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter73792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta73793","meta73793",1203673458,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter73792.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter73792.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter73792");

(com.rpl.specter.t_com$rpl$specter73792.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter73792");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter73792.
 */
com.rpl.specter.__GT_t_com$rpl$specter73792 = (function com$rpl$specter$__GT_t_com$rpl$specter73792(meta73793){
return (new com.rpl.specter.t_com$rpl$specter73792(meta73793));
});

}

return (new com.rpl.specter.t_com$rpl$specter73792(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter73853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter73853 = (function (afn,meta73854){
this.afn = afn;
this.meta73854 = meta73854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter73853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73855,meta73854__$1){
var self__ = this;
var _73855__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter73853(self__.afn,meta73854__$1));
}));

(com.rpl.specter.t_com$rpl$specter73853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73855){
var self__ = this;
var _73855__$1 = this;
return self__.meta73854;
}));

(com.rpl.specter.t_com$rpl$specter73853.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter73853.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter73853.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter73853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta73854","meta73854",-1060936063,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter73853.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter73853.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter73853");

(com.rpl.specter.t_com$rpl$specter73853.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter73853");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter73853.
 */
com.rpl.specter.__GT_t_com$rpl$specter73853 = (function com$rpl$specter$__GT_t_com$rpl$specter73853(afn__$1,meta73854){
return (new com.rpl.specter.t_com$rpl$specter73853(afn__$1,meta73854));
});

}

return (new com.rpl.specter.t_com$rpl$specter73853(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter73937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter73937 = (function (afn,meta73938){
this.afn = afn;
this.meta73938 = meta73938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter73937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73939,meta73938__$1){
var self__ = this;
var _73939__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter73937(self__.afn,meta73938__$1));
}));

(com.rpl.specter.t_com$rpl$specter73937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73939){
var self__ = this;
var _73939__$1 = this;
return self__.meta73938;
}));

(com.rpl.specter.t_com$rpl$specter73937.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter73937.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter73937.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter73937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta73938","meta73938",1641568638,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter73937.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter73937.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter73937");

(com.rpl.specter.t_com$rpl$specter73937.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter73937");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter73937.
 */
com.rpl.specter.__GT_t_com$rpl$specter73937 = (function com$rpl$specter$__GT_t_com$rpl$specter73937(afn__$1,meta73938){
return (new com.rpl.specter.t_com$rpl$specter73937(afn__$1,meta73938));
});

}

return (new com.rpl.specter.t_com$rpl$specter73937(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__73940 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__73940) : com.rpl.specter.terminal.call(null,G__73940));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter73943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter73943 = (function (meta73944){
this.meta73944 = meta73944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter73943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73945,meta73944__$1){
var self__ = this;
var _73945__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter73943(meta73944__$1));
}));

(com.rpl.specter.t_com$rpl$specter73943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73945){
var self__ = this;
var _73945__$1 = this;
return self__.meta73944;
}));

(com.rpl.specter.t_com$rpl$specter73943.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter73943.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter73943.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter73943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta73944","meta73944",240436100,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter73943.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter73943.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter73943");

(com.rpl.specter.t_com$rpl$specter73943.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter73943");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter73943.
 */
com.rpl.specter.__GT_t_com$rpl$specter73943 = (function com$rpl$specter$__GT_t_com$rpl$specter73943(meta73944){
return (new com.rpl.specter.t_com$rpl$specter73943(meta73944));
});

}

return (new com.rpl.specter.t_com$rpl$specter73943(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter73969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter73969 = (function (meta73970){
this.meta73970 = meta73970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter73969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73971,meta73970__$1){
var self__ = this;
var _73971__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter73969(meta73970__$1));
}));

(com.rpl.specter.t_com$rpl$specter73969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73971){
var self__ = this;
var _73971__$1 = this;
return self__.meta73970;
}));

(com.rpl.specter.t_com$rpl$specter73969.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter73969.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter73969.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter73969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta73970","meta73970",-1184756438,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter73969.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter73969.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter73969");

(com.rpl.specter.t_com$rpl$specter73969.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter73969");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter73969.
 */
com.rpl.specter.__GT_t_com$rpl$specter73969 = (function com$rpl$specter$__GT_t_com$rpl$specter73969(meta73970){
return (new com.rpl.specter.t_com$rpl$specter73969(meta73970));
});

}

return (new com.rpl.specter.t_com$rpl$specter73969(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__66165__auto__,v){
var ret__66166__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__66166__auto__ === com.rpl.specter.NONE)){
return curr__66165__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__66166__auto__)){
return cljs.core.reduced(ret__66166__auto__);
} else {
return ret__66166__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter73982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter73982 = (function (meta73983){
this.meta73983 = meta73983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter73982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73984,meta73983__$1){
var self__ = this;
var _73984__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter73982(meta73983__$1));
}));

(com.rpl.specter.t_com$rpl$specter73982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73984){
var self__ = this;
var _73984__$1 = this;
return self__.meta73983;
}));

(com.rpl.specter.t_com$rpl$specter73982.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter73982.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__66165__auto__,v){
var ret__66166__auto__ = next_fn(v);
if((ret__66166__auto__ === com.rpl.specter.NONE)){
return curr__66165__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__66166__auto__)){
return cljs.core.reduced(ret__66166__auto__);
} else {
return ret__66166__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter73982.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter73982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta73983","meta73983",-1404381663,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter73982.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter73982.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter73982");

(com.rpl.specter.t_com$rpl$specter73982.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter73982");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter73982.
 */
com.rpl.specter.__GT_t_com$rpl$specter73982 = (function com$rpl$specter$__GT_t_com$rpl$specter73982(meta73983){
return (new com.rpl.specter.t_com$rpl$specter73982(meta73983));
});

}

return (new com.rpl.specter.t_com$rpl$specter73982(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__66165__auto__,k){
var ret__66166__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__66166__auto__ === com.rpl.specter.NONE)){
return curr__66165__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__66166__auto__)){
return cljs.core.reduced(ret__66166__auto__);
} else {
return ret__66166__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter73997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter73997 = (function (meta73998){
this.meta73998 = meta73998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter73997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73999,meta73998__$1){
var self__ = this;
var _73999__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter73997(meta73998__$1));
}));

(com.rpl.specter.t_com$rpl$specter73997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73999){
var self__ = this;
var _73999__$1 = this;
return self__.meta73998;
}));

(com.rpl.specter.t_com$rpl$specter73997.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter73997.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__66165__auto__,k){
var ret__66166__auto__ = next_fn(k);
if((ret__66166__auto__ === com.rpl.specter.NONE)){
return curr__66165__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__66166__auto__)){
return cljs.core.reduced(ret__66166__auto__);
} else {
return ret__66166__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter73997.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter73997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta73998","meta73998",1763683954,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter73997.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter73997.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter73997");

(com.rpl.specter.t_com$rpl$specter73997.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter73997");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter73997.
 */
com.rpl.specter.__GT_t_com$rpl$specter73997 = (function com$rpl$specter$__GT_t_com$rpl$specter73997(meta73998){
return (new com.rpl.specter.t_com$rpl$specter73997(meta73998));
});

}

return (new com.rpl.specter.t_com$rpl$specter73997(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74008 = (function (meta74009){
this.meta74009 = meta74009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74010,meta74009__$1){
var self__ = this;
var _74010__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74008(meta74009__$1));
}));

(com.rpl.specter.t_com$rpl$specter74008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74010){
var self__ = this;
var _74010__$1 = this;
return self__.meta74009;
}));

(com.rpl.specter.t_com$rpl$specter74008.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74008.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__72234__auto__,vals__72235__auto__,structure,next_fn__72236__auto__){
var self__ = this;
var this__72234__auto____$1 = this;
var G__74013 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__72235__auto__,structure);
var G__74014 = structure;
return (next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2(G__74013,G__74014) : next_fn__72236__auto__.call(null,G__74013,G__74014));
}));

(com.rpl.specter.t_com$rpl$specter74008.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__72234__auto__,vals__72235__auto__,structure,next_fn__72236__auto__){
var self__ = this;
var this__72234__auto____$1 = this;
var G__74015 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__72235__auto__,structure);
var G__74016 = structure;
return (next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2(G__74015,G__74016) : next_fn__72236__auto__.call(null,G__74015,G__74016));
}));

(com.rpl.specter.t_com$rpl$specter74008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74009","meta74009",1260797371,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74008.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74008.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74008");

(com.rpl.specter.t_com$rpl$specter74008.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74008");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74008.
 */
com.rpl.specter.__GT_t_com$rpl$specter74008 = (function com$rpl$specter$__GT_t_com$rpl$specter74008(meta74009){
return (new com.rpl.specter.t_com$rpl$specter74008(meta74009));
});

}

return (new com.rpl.specter.t_com$rpl$specter74008(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__74024 = structure;
var G__74025 = s;
var G__74026 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__74027 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__74024,G__74025,G__74026,G__74027) : com.rpl.specter.navs.srange_transform.call(null,G__74024,G__74025,G__74026,G__74027));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74029 = (function (start_index_fn,end_index_fn,meta74030){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta74030 = meta74030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74031,meta74030__$1){
var self__ = this;
var _74031__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74029(self__.start_index_fn,self__.end_index_fn,meta74030__$1));
}));

(com.rpl.specter.t_com$rpl$specter74029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74031){
var self__ = this;
var _74031__$1 = this;
return self__.meta74030;
}));

(com.rpl.specter.t_com$rpl$specter74029.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74029.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter74029.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__74037 = structure;
var G__74038 = s;
var G__74039 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__74040 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__74037,G__74038,G__74039,G__74040) : com.rpl.specter.navs.srange_transform.call(null,G__74037,G__74038,G__74039,G__74040));
}));

(com.rpl.specter.t_com$rpl$specter74029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta74030","meta74030",-367421282,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74029.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74029.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74029");

(com.rpl.specter.t_com$rpl$specter74029.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74029");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74029.
 */
com.rpl.specter.__GT_t_com$rpl$specter74029 = (function com$rpl$specter$__GT_t_com$rpl$specter74029(start_index_fn__$1,end_index_fn__$1,meta74030){
return (new com.rpl.specter.t_com$rpl$specter74029(start_index_fn__$1,end_index_fn__$1,meta74030));
});

}

return (new com.rpl.specter.t_com$rpl$specter74029(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74048 = (function (start,end,meta74049){
this.start = start;
this.end = end;
this.meta74049 = meta74049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74050,meta74049__$1){
var self__ = this;
var _74050__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74048(self__.start,self__.end,meta74049__$1));
}));

(com.rpl.specter.t_com$rpl$specter74048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74050){
var self__ = this;
var _74050__$1 = this;
return self__.meta74049;
}));

(com.rpl.specter.t_com$rpl$specter74048.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74048.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter74048.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter74048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta74049","meta74049",498567538,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74048.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74048.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74048");

(com.rpl.specter.t_com$rpl$specter74048.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74048");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74048.
 */
com.rpl.specter.__GT_t_com$rpl$specter74048 = (function com$rpl$specter$__GT_t_com$rpl$specter74048(start__$1,end__$1,meta74049){
return (new com.rpl.specter.t_com$rpl$specter74048(start__$1,end__$1,meta74049));
});

}

return (new com.rpl.specter.t_com$rpl$specter74048(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__66165__auto__,p__74071){
var vec__74073 = p__74071;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74073,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74073,(1),null);
var ret__66166__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__66166__auto__ === com.rpl.specter.NONE)){
return curr__66165__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__66166__auto__)){
return cljs.core.reduced(ret__66166__auto__);
} else {
return ret__66166__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74080 = (function (pred,meta74081){
this.pred = pred;
this.meta74081 = meta74081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74082,meta74081__$1){
var self__ = this;
var _74082__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74080(self__.pred,meta74081__$1));
}));

(com.rpl.specter.t_com$rpl$specter74080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74082){
var self__ = this;
var _74082__$1 = this;
return self__.meta74081;
}));

(com.rpl.specter.t_com$rpl$specter74080.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74080.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__66165__auto__,p__74087){
var vec__74088 = p__74087;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74088,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74088,(1),null);
var ret__66166__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__66166__auto__ === com.rpl.specter.NONE)){
return curr__66165__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__66166__auto__)){
return cljs.core.reduced(ret__66166__auto__);
} else {
return ret__66166__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter74080.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter74080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta74081","meta74081",-435266080,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74080.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74080.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74080");

(com.rpl.specter.t_com$rpl$specter74080.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74080");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74080.
 */
com.rpl.specter.__GT_t_com$rpl$specter74080 = (function com$rpl$specter$__GT_t_com$rpl$specter74080(pred__$1,meta74081){
return (new com.rpl.specter.t_com$rpl$specter74080(pred__$1,meta74081));
});

}

return (new com.rpl.specter.t_com$rpl$specter74080(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__74103 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74103) : next_fn.call(null,G__74103));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__74105 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74105) : next_fn.call(null,G__74105));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74107 = (function (meta74108){
this.meta74108 = meta74108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74109,meta74108__$1){
var self__ = this;
var _74109__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74107(meta74108__$1));
}));

(com.rpl.specter.t_com$rpl$specter74107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74109){
var self__ = this;
var _74109__$1 = this;
return self__.meta74108;
}));

(com.rpl.specter.t_com$rpl$specter74107.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74107.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter74107.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter74107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74108","meta74108",-1803555221,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74107.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74107.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74107");

(com.rpl.specter.t_com$rpl$specter74107.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74107");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74107.
 */
com.rpl.specter.__GT_t_com$rpl$specter74107 = (function com$rpl$specter$__GT_t_com$rpl$specter74107(meta74108){
return (new com.rpl.specter.t_com$rpl$specter74107(meta74108));
});

}

return (new com.rpl.specter.t_com$rpl$specter74107(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__74121 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74121) : next_fn.call(null,G__74121));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__74122 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74122) : next_fn.call(null,G__74122));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74123 = (function (meta74124){
this.meta74124 = meta74124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74125,meta74124__$1){
var self__ = this;
var _74125__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74123(meta74124__$1));
}));

(com.rpl.specter.t_com$rpl$specter74123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74125){
var self__ = this;
var _74125__$1 = this;
return self__.meta74124;
}));

(com.rpl.specter.t_com$rpl$specter74123.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74123.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter74123.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter74123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74124","meta74124",-1625708658,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74123.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74123.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74123");

(com.rpl.specter.t_com$rpl$specter74123.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74123");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74123.
 */
com.rpl.specter.__GT_t_com$rpl$specter74123 = (function com$rpl$specter$__GT_t_com$rpl$specter74123(meta74124){
return (new com.rpl.specter.t_com$rpl$specter74123(meta74124));
});

}

return (new com.rpl.specter.t_com$rpl$specter74123(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74157 = (function (meta74158){
this.meta74158 = meta74158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74159,meta74158__$1){
var self__ = this;
var _74159__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74157(meta74158__$1));
}));

(com.rpl.specter.t_com$rpl$specter74157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74159){
var self__ = this;
var _74159__$1 = this;
return self__.meta74158;
}));

(com.rpl.specter.t_com$rpl$specter74157.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74157.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter74157.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter74157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74158","meta74158",71102077,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74157.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74157.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74157");

(com.rpl.specter.t_com$rpl$specter74157.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74157");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74157.
 */
com.rpl.specter.__GT_t_com$rpl$specter74157 = (function com$rpl$specter$__GT_t_com$rpl$specter74157(meta74158){
return (new com.rpl.specter.t_com$rpl$specter74157(meta74158));
});

}

return (new com.rpl.specter.t_com$rpl$specter74157(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74167 = (function (meta74168){
this.meta74168 = meta74168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74169,meta74168__$1){
var self__ = this;
var _74169__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74167(meta74168__$1));
}));

(com.rpl.specter.t_com$rpl$specter74167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74169){
var self__ = this;
var _74169__$1 = this;
return self__.meta74168;
}));

(com.rpl.specter.t_com$rpl$specter74167.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74167.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter74167.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter74167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74168","meta74168",1556730610,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74167.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74167.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74167");

(com.rpl.specter.t_com$rpl$specter74167.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74167");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74167.
 */
com.rpl.specter.__GT_t_com$rpl$specter74167 = (function com$rpl$specter$__GT_t_com$rpl$specter74167(meta74168){
return (new com.rpl.specter.t_com$rpl$specter74167(meta74168));
});

}

return (new com.rpl.specter.t_com$rpl$specter74167(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74174 = (function (meta74175){
this.meta74175 = meta74175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74176,meta74175__$1){
var self__ = this;
var _74176__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74174(meta74175__$1));
}));

(com.rpl.specter.t_com$rpl$specter74174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74176){
var self__ = this;
var _74176__$1 = this;
return self__.meta74175;
}));

(com.rpl.specter.t_com$rpl$specter74174.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74174.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter74174.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter74174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74175","meta74175",1799878061,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74174.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74174.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74174");

(com.rpl.specter.t_com$rpl$specter74174.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74174");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74174.
 */
com.rpl.specter.__GT_t_com$rpl$specter74174 = (function com$rpl$specter$__GT_t_com$rpl$specter74174(meta74175){
return (new com.rpl.specter.t_com$rpl$specter74174(meta74175));
});

}

return (new com.rpl.specter.t_com$rpl$specter74174(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__74182 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74182) : next_fn.call(null,G__74182));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74183 = (function (aset,meta74184){
this.aset = aset;
this.meta74184 = meta74184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74185,meta74184__$1){
var self__ = this;
var _74185__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74183(self__.aset,meta74184__$1));
}));

(com.rpl.specter.t_com$rpl$specter74183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74185){
var self__ = this;
var _74185__$1 = this;
return self__.meta74184;
}));

(com.rpl.specter.t_com$rpl$specter74183.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74183.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter74183.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter74183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta74184","meta74184",1940053080,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74183.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74183.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74183");

(com.rpl.specter.t_com$rpl$specter74183.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74183");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74183.
 */
com.rpl.specter.__GT_t_com$rpl$specter74183 = (function com$rpl$specter$__GT_t_com$rpl$specter74183(aset__$1,meta74184){
return (new com.rpl.specter.t_com$rpl$specter74183(aset__$1,meta74184));
});

}

return (new com.rpl.specter.t_com$rpl$specter74183(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__74188 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74188) : next_fn.call(null,G__74188));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74189 = (function (m_keys,meta74190){
this.m_keys = m_keys;
this.meta74190 = meta74190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74191,meta74190__$1){
var self__ = this;
var _74191__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74189(self__.m_keys,meta74190__$1));
}));

(com.rpl.specter.t_com$rpl$specter74189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74191){
var self__ = this;
var _74191__$1 = this;
return self__.meta74190;
}));

(com.rpl.specter.t_com$rpl$specter74189.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74189.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter74189.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter74189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta74190","meta74190",1247003863,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74189.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74189.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74189");

(com.rpl.specter.t_com$rpl$specter74189.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74189");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74189.
 */
com.rpl.specter.__GT_t_com$rpl$specter74189 = (function com$rpl$specter$__GT_t_com$rpl$specter74189(m_keys__$1,meta74190){
return (new com.rpl.specter.t_com$rpl$specter74189(m_keys__$1,meta74190));
});

}

return (new com.rpl.specter.t_com$rpl$specter74189(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74848__delegate = function (path){
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74192 = (function (path,late,meta74193){
this.path = path;
this.late = late;
this.meta74193 = meta74193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74194,meta74193__$1){
var self__ = this;
var _74194__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74192(self__.path,self__.late,meta74193__$1));
}));

(com.rpl.specter.t_com$rpl$specter74192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74194){
var self__ = this;
var _74194__$1 = this;
return self__.meta74193;
}));

(com.rpl.specter.t_com$rpl$specter74192.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74192.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter74192.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__74199 = self__.late;
var G__74200 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__74201 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__74199,G__74200,G__74201) : com.rpl.specter.compiled_transform.call(null,G__74199,G__74200,G__74201));
}));

(com.rpl.specter.t_com$rpl$specter74192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta74193","meta74193",-2124773754,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74192.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74192.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74192");

(com.rpl.specter.t_com$rpl$specter74192.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74192");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74192.
 */
com.rpl.specter.__GT_t_com$rpl$specter74192 = (function com$rpl$specter$__GT_t_com$rpl$specter74192(path__$1,late__$1,meta74193){
return (new com.rpl.specter.t_com$rpl$specter74192(path__$1,late__$1,meta74193));
});

}

return (new com.rpl.specter.t_com$rpl$specter74192(path,late,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
};
var G__74848 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__74853__i = 0, G__74853__a = new Array(arguments.length -  0);
while (G__74853__i < G__74853__a.length) {G__74853__a[G__74853__i] = arguments[G__74853__i + 0]; ++G__74853__i;}
  path = new cljs.core.IndexedSeq(G__74853__a,0,null);
} 
return G__74848__delegate.call(this,path);};
G__74848.cljs$lang$maxFixedArity = 0;
G__74848.cljs$lang$applyTo = (function (arglist__74854){
var path = cljs.core.seq(arglist__74854);
return G__74848__delegate(path);
});
G__74848.cljs$core$IFn$_invoke$arity$variadic = G__74848__delegate;
return G__74848;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74204 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74204 = (function (key,meta74205){
this.key = key;
this.meta74205 = meta74205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74206,meta74205__$1){
var self__ = this;
var _74206__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74204(self__.key,meta74205__$1));
}));

(com.rpl.specter.t_com$rpl$specter74204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74206){
var self__ = this;
var _74206__$1 = this;
return self__.meta74205;
}));

(com.rpl.specter.t_com$rpl$specter74204.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74204.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter74204.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter74204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta74205","meta74205",-1969137868,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74204.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74204.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74204");

(com.rpl.specter.t_com$rpl$specter74204.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74204");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74204.
 */
com.rpl.specter.__GT_t_com$rpl$specter74204 = (function com$rpl$specter$__GT_t_com$rpl$specter74204(key__$1,meta74205){
return (new com.rpl.specter.t_com$rpl$specter74204(key__$1,meta74205));
});

}

return (new com.rpl.specter.t_com$rpl$specter74204(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74208 = (function (elem,meta74209){
this.elem = elem;
this.meta74209 = meta74209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74210,meta74209__$1){
var self__ = this;
var _74210__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74208(self__.elem,meta74209__$1));
}));

(com.rpl.specter.t_com$rpl$specter74208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74210){
var self__ = this;
var _74210__$1 = this;
return self__.meta74209;
}));

(com.rpl.specter.t_com$rpl$specter74208.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74208.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter74208.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter74208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta74209","meta74209",-113430389,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74208.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74208.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74208");

(com.rpl.specter.t_com$rpl$specter74208.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74208");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74208.
 */
com.rpl.specter.__GT_t_com$rpl$specter74208 = (function com$rpl$specter$__GT_t_com$rpl$specter74208(elem__$1,meta74209){
return (new com.rpl.specter.t_com$rpl$specter74208(elem__$1,meta74209));
});

}

return (new com.rpl.specter.t_com$rpl$specter74208(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74232 = (function (index,meta74233){
this.index = index;
this.meta74233 = meta74233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74234,meta74233__$1){
var self__ = this;
var _74234__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74232(self__.index,meta74233__$1));
}));

(com.rpl.specter.t_com$rpl$specter74232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74234){
var self__ = this;
var _74234__$1 = this;
return self__.meta74233;
}));

(com.rpl.specter.t_com$rpl$specter74232.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74232.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter74232.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__72244__auto__ = com.rpl.specter.pathcache74249;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74250 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,755,758,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache74249 = info74250;

return info74250;
})():info__72244__auto__);
var precompiled74251 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74257 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled74251.cljs$core$IFn$_invoke$arity$1 ? precompiled74251.cljs$core$IFn$_invoke$arity$1(G__74257) : precompiled74251.call(null,G__74257));
} else {
return precompiled74251;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
}));

(com.rpl.specter.t_com$rpl$specter74232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta74233","meta74233",-1521428661,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74232.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74232.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74232");

(com.rpl.specter.t_com$rpl$specter74232.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74232");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74232.
 */
com.rpl.specter.__GT_t_com$rpl$specter74232 = (function com$rpl$specter$__GT_t_com$rpl$specter74232(index__$1,meta74233){
return (new com.rpl.specter.t_com$rpl$specter74232(index__$1,meta74233));
});

}

return (new com.rpl.specter.t_com$rpl$specter74232(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74262 = (function (i,meta74263){
this.i = i;
this.meta74263 = meta74263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74264,meta74263__$1){
var self__ = this;
var _74264__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74262(self__.i,meta74263__$1));
}));

(com.rpl.specter.t_com$rpl$specter74262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74264){
var self__ = this;
var _74264__$1 = this;
return self__.meta74263;
}));

(com.rpl.specter.t_com$rpl$specter74262.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74262.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter74262.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__74856 = (j - (1));
var G__74857 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__74856;
s = G__74857;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__74859 = (j + (1));
var G__74860 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__74859;
s = G__74860;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__72244__auto__ = com.rpl.specter.pathcache74272;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74273 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,968,971,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache74272 = info74273;

return info74273;
})():info__72244__auto__);
var precompiled74274 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled74274.cljs$core$IFn$_invoke$arity$1 ? precompiled74274.cljs$core$IFn$_invoke$arity$1(G__74276) : precompiled74274.call(null,G__74276));
} else {
return precompiled74274;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__72244__auto__ = com.rpl.specter.pathcache74278;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74279 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache74278 = info74279;

return info74279;
})():info__72244__auto__);
var precompiled74280 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled74280.cljs$core$IFn$_invoke$arity$1 ? precompiled74280.cljs$core$IFn$_invoke$arity$1(G__74283) : precompiled74280.call(null,G__74283));
} else {
return precompiled74280;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter74262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta74263","meta74263",957952442,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74262.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74262.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74262");

(com.rpl.specter.t_com$rpl$specter74262.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74262");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74262.
 */
com.rpl.specter.__GT_t_com$rpl$specter74262 = (function com$rpl$specter$__GT_t_com$rpl$specter74262(i__$1,meta74263){
return (new com.rpl.specter.t_com$rpl$specter74262(i__$1,meta74263));
});

}

return (new com.rpl.specter.t_com$rpl$specter74262(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__66165__auto__,e){
var ret__66166__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__74291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74291) : next_fn.call(null,G__74291));
})()
;
if((ret__66166__auto__ === com.rpl.specter.NONE)){
return curr__66165__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__66166__auto__)){
return cljs.core.reduced(ret__66166__auto__);
} else {
return ret__66166__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__74297 = (function (){var G__74300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74300) : next_fn.call(null,G__74300));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74297,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74297,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__72244__auto__ = com.rpl.specter.pathcache74301;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74302 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__74285_SHARP_){
return (p1__74285_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__74286_SHARP_){
return (p1__74286_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache74301 = info74302;

return info74302;
})():info__72244__auto__);
var precompiled74303 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74306 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__74285_SHARP_){
return (p1__74285_SHARP_ >= (curri + (1)));
}),(function (p1__74286_SHARP_){
return (p1__74286_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__74285_SHARP_){
return (p1__74285_SHARP_ >= (curri + (1)));
}),(function (p1__74286_SHARP_){
return (p1__74286_SHARP_ <= newi);
})], null);
return (precompiled74303.cljs$core$IFn$_invoke$arity$1 ? precompiled74303.cljs$core$IFn$_invoke$arity$1(G__74306) : precompiled74303.call(null,G__74306));
} else {
return precompiled74303;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__72244__auto__ = com.rpl.specter.pathcache74308;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74309 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache74308 = info74309;

return info74309;
})():info__72244__auto__);
var precompiled74310 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74311 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled74310.cljs$core$IFn$_invoke$arity$1 ? precompiled74310.cljs$core$IFn$_invoke$arity$1(G__74311) : precompiled74310.call(null,G__74311));
} else {
return precompiled74310;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__72244__auto__ = com.rpl.specter.pathcache74312;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74313 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache74312 = info74313;

return info74313;
})():info__72244__auto__);
var precompiled74314 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled74314.cljs$core$IFn$_invoke$arity$1 ? precompiled74314.cljs$core$IFn$_invoke$arity$1(G__74315) : precompiled74314.call(null,G__74315));
} else {
return precompiled74314;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74318 = (function (start,meta74319){
this.start = start;
this.meta74319 = meta74319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74320,meta74319__$1){
var self__ = this;
var _74320__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74318(self__.start,meta74319__$1));
}));

(com.rpl.specter.t_com$rpl$specter74318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74320){
var self__ = this;
var _74320__$1 = this;
return self__.meta74319;
}));

(com.rpl.specter.t_com$rpl$specter74318.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74318.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__66165__auto__,e){
var ret__66166__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__66166__auto__ === com.rpl.specter.NONE)){
return curr__66165__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__66166__auto__)){
return cljs.core.reduced(ret__66166__auto__);
} else {
return ret__66166__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter74318.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__74330 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74330,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74330,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__72244__auto__ = com.rpl.specter.pathcache74333;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74334 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__74285_SHARP_){
return (p1__74285_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__74286_SHARP_){
return (p1__74286_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__74285#","p1__74285#",-1732790428,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__74286#","p1__74286#",1118567098,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache74333 = info74334;

return info74334;
})():info__72244__auto__);
var precompiled74335 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74338 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__74285_SHARP_){
return (p1__74285_SHARP_ >= (curri + (1)));
}),(function (p1__74286_SHARP_){
return (p1__74286_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__74285_SHARP_){
return (p1__74285_SHARP_ >= (curri + (1)));
}),(function (p1__74286_SHARP_){
return (p1__74286_SHARP_ <= newi);
})], null);
return (precompiled74335.cljs$core$IFn$_invoke$arity$1 ? precompiled74335.cljs$core$IFn$_invoke$arity$1(G__74338) : precompiled74335.call(null,G__74338));
} else {
return precompiled74335;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__72244__auto__ = com.rpl.specter.pathcache74339;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74340 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache74339 = info74340;

return info74340;
})():info__72244__auto__);
var precompiled74341 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled74341.cljs$core$IFn$_invoke$arity$1 ? precompiled74341.cljs$core$IFn$_invoke$arity$1(G__74344) : precompiled74341.call(null,G__74344));
} else {
return precompiled74341;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__72244__auto__ = com.rpl.specter.pathcache74345;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74346 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache74345 = info74346;

return info74346;
})():info__72244__auto__);
var precompiled74347 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled74347.cljs$core$IFn$_invoke$arity$1 ? precompiled74347.cljs$core$IFn$_invoke$arity$1(G__74352) : precompiled74347.call(null,G__74352));
} else {
return precompiled74347;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter74318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta74319","meta74319",2006901908,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74318.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74318.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74318");

(com.rpl.specter.t_com$rpl$specter74318.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74318");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74318.
 */
com.rpl.specter.__GT_t_com$rpl$specter74318 = (function com$rpl$specter$__GT_t_com$rpl$specter74318(start__$1,meta74319){
return (new com.rpl.specter.t_com$rpl$specter74318(start__$1,meta74319));
});

}

return (new com.rpl.specter.t_com$rpl$specter74318(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74355 = (function (afn,meta74356){
this.afn = afn;
this.meta74356 = meta74356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74357,meta74356__$1){
var self__ = this;
var _74357__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74355(self__.afn,meta74356__$1));
}));

(com.rpl.specter.t_com$rpl$specter74355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74357){
var self__ = this;
var _74357__$1 = this;
return self__.meta74356;
}));

(com.rpl.specter.t_com$rpl$specter74355.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74355.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__74361 = vals;
var G__74362 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__74361,G__74362) : next_fn.call(null,G__74361,G__74362));
}));

(com.rpl.specter.t_com$rpl$specter74355.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__74366 = vals;
var G__74367 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__74366,G__74367) : next_fn.call(null,G__74366,G__74367));
}));

(com.rpl.specter.t_com$rpl$specter74355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta74356","meta74356",-1086484930,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74355.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74355.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74355");

(com.rpl.specter.t_com$rpl$specter74355.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74355");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74355.
 */
com.rpl.specter.__GT_t_com$rpl$specter74355 = (function com$rpl$specter$__GT_t_com$rpl$specter74355(afn__$1,meta74356){
return (new com.rpl.specter.t_com$rpl$specter74355(afn__$1,meta74356));
});

}

return (new com.rpl.specter.t_com$rpl$specter74355(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__74372 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74372) : next_fn.call(null,G__74372));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__74373 = (function (){var G__74374 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74374) : next_fn.call(null,G__74374));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__74373) : unparse_fn.call(null,G__74373));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74375 = (function (parse_fn,unparse_fn,meta74376){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta74376 = meta74376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74377,meta74376__$1){
var self__ = this;
var _74377__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74375(self__.parse_fn,self__.unparse_fn,meta74376__$1));
}));

(com.rpl.specter.t_com$rpl$specter74375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74377){
var self__ = this;
var _74377__$1 = this;
return self__.meta74376;
}));

(com.rpl.specter.t_com$rpl$specter74375.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74375.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter74375.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var G__74380 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__74380) : self__.unparse_fn.call(null,G__74380));
}));

(com.rpl.specter.t_com$rpl$specter74375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta74376","meta74376",-2081016473,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74375.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74375.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74375");

(com.rpl.specter.t_com$rpl$specter74375.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74375");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74375.
 */
com.rpl.specter.__GT_t_com$rpl$specter74375 = (function com$rpl$specter$__GT_t_com$rpl$specter74375(parse_fn__$1,unparse_fn__$1,meta74376){
return (new com.rpl.specter.t_com$rpl$specter74375(parse_fn__$1,unparse_fn__$1,meta74376));
});

}

return (new com.rpl.specter.t_com$rpl$specter74375(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__74383 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74383) : next_fn.call(null,G__74383));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74392 = (function (meta74393){
this.meta74393 = meta74393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74394,meta74393__$1){
var self__ = this;
var _74394__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74392(meta74393__$1));
}));

(com.rpl.specter.t_com$rpl$specter74392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74394){
var self__ = this;
var _74394__$1 = this;
return self__.meta74393;
}));

(com.rpl.specter.t_com$rpl$specter74392.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74392.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter74392.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter74392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74393","meta74393",-412240181,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74392.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74392.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74392");

(com.rpl.specter.t_com$rpl$specter74392.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74392");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74392.
 */
com.rpl.specter.__GT_t_com$rpl$specter74392 = (function com$rpl$specter$__GT_t_com$rpl$specter74392(meta74393){
return (new com.rpl.specter.t_com$rpl$specter74392(meta74393));
});

}

return (new com.rpl.specter.t_com$rpl$specter74392(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__66165__auto__,s){
var ret__66166__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__66166__auto__ === com.rpl.specter.NONE)){
return curr__66165__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__66166__auto__)){
return cljs.core.reduced(ret__66166__auto__);
} else {
return ret__66166__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74415 = (function (re,meta74416){
this.re = re;
this.meta74416 = meta74416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74417,meta74416__$1){
var self__ = this;
var _74417__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74415(self__.re,meta74416__$1));
}));

(com.rpl.specter.t_com$rpl$specter74415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74417){
var self__ = this;
var _74417__$1 = this;
return self__.meta74416;
}));

(com.rpl.specter.t_com$rpl$specter74415.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74415.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__66165__auto__,s){
var ret__66166__auto__ = next_fn(s);
if((ret__66166__auto__ === com.rpl.specter.NONE)){
return curr__66165__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__66166__auto__)){
return cljs.core.reduced(ret__66166__auto__);
} else {
return ret__66166__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter74415.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter74415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta74416","meta74416",848047557,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74415.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74415.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74415");

(com.rpl.specter.t_com$rpl$specter74415.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74415");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74415.
 */
com.rpl.specter.__GT_t_com$rpl$specter74415 = (function com$rpl$specter$__GT_t_com$rpl$specter74415(re__$1,meta74416){
return (new com.rpl.specter.t_com$rpl$specter74415(re__$1,meta74416));
});

}

return (new com.rpl.specter.t_com$rpl$specter74415(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74874__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return afn;
} else {
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74455 = (function (path,temp__5733__auto__,late,meta74456){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta74456 = meta74456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74457,meta74456__$1){
var self__ = this;
var _74457__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74455(self__.path,self__.temp__5733__auto__,self__.late,meta74456__$1));
}));

(com.rpl.specter.t_com$rpl$specter74455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74457){
var self__ = this;
var _74457__$1 = this;
return self__.meta74456;
}));

(com.rpl.specter.t_com$rpl$specter74455.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74455.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__74448_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__74448_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter74455.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__74449_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__74449_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter74455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta74456","meta74456",409782061,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74455.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74455.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74455");

(com.rpl.specter.t_com$rpl$specter74455.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74455");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74455.
 */
com.rpl.specter.__GT_t_com$rpl$specter74455 = (function com$rpl$specter$__GT_t_com$rpl$specter74455(path__$1,temp__5733__auto____$1,late__$1,meta74456){
return (new com.rpl.specter.t_com$rpl$specter74455(path__$1,temp__5733__auto____$1,late__$1,meta74456));
});

}

return (new com.rpl.specter.t_com$rpl$specter74455(path,temp__5733__auto__,late,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
}
};
var G__74874 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__74875__i = 0, G__74875__a = new Array(arguments.length -  0);
while (G__74875__i < G__74875__a.length) {G__74875__a[G__74875__i] = arguments[G__74875__i + 0]; ++G__74875__i;}
  path = new cljs.core.IndexedSeq(G__74875__a,0,null);
} 
return G__74874__delegate.call(this,path);};
G__74874.cljs$lang$maxFixedArity = 0;
G__74874.cljs$lang$applyTo = (function (arglist__74877){
var path = cljs.core.seq(arglist__74877);
return G__74874__delegate(path);
});
G__74874.cljs$core$IFn$_invoke$arity$variadic = G__74874__delegate;
return G__74874;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74878__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74467 = (function (path,temp__5733__auto__,late,meta74468){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta74468 = meta74468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74469,meta74468__$1){
var self__ = this;
var _74469__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74467(self__.path,self__.temp__5733__auto__,self__.late,meta74468__$1));
}));

(com.rpl.specter.t_com$rpl$specter74467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74469){
var self__ = this;
var _74469__$1 = this;
return self__.meta74468;
}));

(com.rpl.specter.t_com$rpl$specter74467.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74467.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__74462_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__74462_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter74467.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__74463_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__74463_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter74467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta74468","meta74468",1969605222,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74467.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74467.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74467");

(com.rpl.specter.t_com$rpl$specter74467.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74467");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74467.
 */
com.rpl.specter.__GT_t_com$rpl$specter74467 = (function com$rpl$specter$__GT_t_com$rpl$specter74467(path__$1,temp__5733__auto____$1,late__$1,meta74468){
return (new com.rpl.specter.t_com$rpl$specter74467(path__$1,temp__5733__auto____$1,late__$1,meta74468));
});

}

return (new com.rpl.specter.t_com$rpl$specter74467(path,temp__5733__auto__,late,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
}
};
var G__74878 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__74880__i = 0, G__74880__a = new Array(arguments.length -  0);
while (G__74880__i < G__74880__a.length) {G__74880__a[G__74880__i] = arguments[G__74880__i + 0]; ++G__74880__i;}
  path = new cljs.core.IndexedSeq(G__74880__a,0,null);
} 
return G__74878__delegate.call(this,path);};
G__74878.cljs$lang$maxFixedArity = 0;
G__74878.cljs$lang$applyTo = (function (arglist__74881){
var path = cljs.core.seq(arglist__74881);
return G__74878__delegate(path);
});
G__74878.cljs$core$IFn$_invoke$arity$variadic = G__74878__delegate;
return G__74878;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74882__delegate = function (path){
var G__74477 = com.rpl.specter.ALL;
var G__74478 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__74477,G__74478) : com.rpl.specter.subselect.call(null,G__74477,G__74478));
};
var G__74882 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__74883__i = 0, G__74883__a = new Array(arguments.length -  0);
while (G__74883__i < G__74883__a.length) {G__74883__a[G__74883__i] = arguments[G__74883__i + 0]; ++G__74883__i;}
  path = new cljs.core.IndexedSeq(G__74883__a,0,null);
} 
return G__74882__delegate.call(this,path);};
G__74882.cljs$lang$maxFixedArity = 0;
G__74882.cljs$lang$applyTo = (function (arglist__74884){
var path = cljs.core.seq(arglist__74884);
return G__74882__delegate(path);
});
G__74882.cljs$core$IFn$_invoke$arity$variadic = G__74882__delegate;
return G__74882;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74479 = (function (path,update_fn,late,late_fn,meta74480){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta74480 = meta74480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74481,meta74480__$1){
var self__ = this;
var _74481__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74479(self__.path,self__.update_fn,self__.late,self__.late_fn,meta74480__$1));
}));

(com.rpl.specter.t_com$rpl$specter74479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74481){
var self__ = this;
var _74481__$1 = this;
return self__.meta74480;
}));

(com.rpl.specter.t_com$rpl$specter74479.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74479.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter74479.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter74479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta74480","meta74480",1136403698,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74479.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74479.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74479");

(com.rpl.specter.t_com$rpl$specter74479.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74479");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74479.
 */
com.rpl.specter.__GT_t_com$rpl$specter74479 = (function com$rpl$specter$__GT_t_com$rpl$specter74479(path__$1,update_fn__$1,late__$1,late_fn__$1,meta74480){
return (new com.rpl.specter.t_com$rpl$specter74479(path__$1,update_fn__$1,late__$1,late_fn__$1,meta74480));
});

}

return (new com.rpl.specter.t_com$rpl$specter74479(path,update_fn,late,late_fn,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74487 = (function (path,reduce_fn,late,late_fn,meta74488){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta74488 = meta74488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74489,meta74488__$1){
var self__ = this;
var _74489__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74487(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta74488__$1));
}));

(com.rpl.specter.t_com$rpl$specter74487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74489){
var self__ = this;
var _74489__$1 = this;
return self__.meta74488;
}));

(com.rpl.specter.t_com$rpl$specter74487.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74487.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter74487.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter74487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta74488","meta74488",-1426865380,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74487.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74487.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74487");

(com.rpl.specter.t_com$rpl$specter74487.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74487");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74487.
 */
com.rpl.specter.__GT_t_com$rpl$specter74487 = (function com$rpl$specter$__GT_t_com$rpl$specter74487(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta74488){
return (new com.rpl.specter.t_com$rpl$specter74487(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta74488));
});

}

return (new com.rpl.specter.t_com$rpl$specter74487(path,reduce_fn,late,late_fn,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__74500 = (function (p1__74498_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__74498_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__74500) : com.rpl.specter.pred.call(null,G__74500));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__74502 = (function (p1__74501_SHARP_){
return (p1__74501_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__74502) : com.rpl.specter.pred.call(null,G__74502));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__74508 = (function (p1__74505_SHARP_){
return (p1__74505_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__74508) : com.rpl.specter.pred.call(null,G__74508));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__74511 = (function (p1__74510_SHARP_){
return (p1__74510_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__74511) : com.rpl.specter.pred.call(null,G__74511));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__74513 = (function (p1__74512_SHARP_){
return (p1__74512_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__74513) : com.rpl.specter.pred.call(null,G__74513));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"null",(function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"string",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"string",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"number",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"boolean",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"function",(function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
}));


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__74526 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74526) : next_fn.call(null,G__74526));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__74527 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74527) : next_fn.call(null,G__74527));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74530 = (function (v,meta74531){
this.v = v;
this.meta74531 = meta74531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74532,meta74531__$1){
var self__ = this;
var _74532__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74530(self__.v,meta74531__$1));
}));

(com.rpl.specter.t_com$rpl$specter74530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74532){
var self__ = this;
var _74532__$1 = this;
return self__.meta74531;
}));

(com.rpl.specter.t_com$rpl$specter74530.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74530.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter74530.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter74530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta74531","meta74531",-1622913372,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74530.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74530.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74530");

(com.rpl.specter.t_com$rpl$specter74530.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74530");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74530.
 */
com.rpl.specter.__GT_t_com$rpl$specter74530 = (function com$rpl$specter$__GT_t_com$rpl$specter74530(v__$1,meta74531){
return (new com.rpl.specter.t_com$rpl$specter74530(v__$1,meta74531));
});

}

return (new com.rpl.specter.t_com$rpl$specter74530(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__74539 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__74539) : com.rpl.specter.nil__GT_val.call(null,G__74539));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__74543 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__74543) : com.rpl.specter.nil__GT_val.call(null,G__74543));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__74546 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__74546) : com.rpl.specter.nil__GT_val.call(null,G__74546));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__74550 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74550) : next_fn.call(null,G__74550));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__74551 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74551) : next_fn.call(null,G__74551));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74554 = (function (meta74555){
this.meta74555 = meta74555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74556,meta74555__$1){
var self__ = this;
var _74556__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74554(meta74555__$1));
}));

(com.rpl.specter.t_com$rpl$specter74554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74556){
var self__ = this;
var _74556__$1 = this;
return self__.meta74555;
}));

(com.rpl.specter.t_com$rpl$specter74554.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74554.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter74554.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter74554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74555","meta74555",1544400842,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74554.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74554.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74554");

(com.rpl.specter.t_com$rpl$specter74554.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74554");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74554.
 */
com.rpl.specter.__GT_t_com$rpl$specter74554 = (function com$rpl$specter$__GT_t_com$rpl$specter74554(meta74555){
return (new com.rpl.specter.t_com$rpl$specter74554(meta74555));
});

}

return (new com.rpl.specter.t_com$rpl$specter74554(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__74564 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74564) : next_fn.call(null,G__74564));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__74565 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74565) : next_fn.call(null,G__74565));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74566 = (function (meta74567){
this.meta74567 = meta74567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74568,meta74567__$1){
var self__ = this;
var _74568__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74566(meta74567__$1));
}));

(com.rpl.specter.t_com$rpl$specter74566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74568){
var self__ = this;
var _74568__$1 = this;
return self__.meta74567;
}));

(com.rpl.specter.t_com$rpl$specter74566.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74566.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter74566.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter74566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74567","meta74567",242389317,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74566.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74566.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74566");

(com.rpl.specter.t_com$rpl$specter74566.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74566");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74566.
 */
com.rpl.specter.__GT_t_com$rpl$specter74566 = (function com$rpl$specter$__GT_t_com$rpl$specter74566(meta74567){
return (new com.rpl.specter.t_com$rpl$specter74566(meta74567));
});

}

return (new com.rpl.specter.t_com$rpl$specter74566(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__74583 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74583) : next_fn.call(null,G__74583));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__74587 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__74587) : next_fn.call(null,G__74587));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74588 = (function (meta74589){
this.meta74589 = meta74589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74590,meta74589__$1){
var self__ = this;
var _74590__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74588(meta74589__$1));
}));

(com.rpl.specter.t_com$rpl$specter74588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74590){
var self__ = this;
var _74590__$1 = this;
return self__.meta74589;
}));

(com.rpl.specter.t_com$rpl$specter74588.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74588.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter74588.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__71450__auto__,vals__71451__auto__,structure,next_fn__71452__auto__){
var self__ = this;
var this__71450__auto____$1 = this;
var next_fn = (function (s__71453__auto__){
return (next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__71452__auto__.cljs$core$IFn$_invoke$arity$2(vals__71451__auto__,s__71453__auto__) : next_fn__71452__auto__.call(null,vals__71451__auto__,s__71453__auto__));
});
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter74588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74589","meta74589",-1526528454,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74588.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74588.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74588");

(com.rpl.specter.t_com$rpl$specter74588.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74588");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74588.
 */
com.rpl.specter.__GT_t_com$rpl$specter74588 = (function com$rpl$specter$__GT_t_com$rpl$specter74588(meta74589){
return (new com.rpl.specter.t_com$rpl$specter74588(meta74589));
});

}

return (new com.rpl.specter.t_com$rpl$specter74588(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74904__delegate = function (path){
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74602 = (function (path,late,meta74603){
this.path = path;
this.late = late;
this.meta74603 = meta74603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74604,meta74603__$1){
var self__ = this;
var _74604__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74602(self__.path,self__.late,meta74603__$1));
}));

(com.rpl.specter.t_com$rpl$specter74602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74604){
var self__ = this;
var _74604__$1 = this;
return self__.meta74603;
}));

(com.rpl.specter.t_com$rpl$specter74602.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74602.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__72234__auto__,vals__72235__auto__,structure,next_fn__72236__auto__){
var self__ = this;
var this__72234__auto____$1 = this;
var G__74607 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__72235__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__74608 = structure;
return (next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2(G__74607,G__74608) : next_fn__72236__auto__.call(null,G__74607,G__74608));
}));

(com.rpl.specter.t_com$rpl$specter74602.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__72234__auto__,vals__72235__auto__,structure,next_fn__72236__auto__){
var self__ = this;
var this__72234__auto____$1 = this;
var G__74609 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__72235__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__74610 = structure;
return (next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2(G__74609,G__74610) : next_fn__72236__auto__.call(null,G__74609,G__74610));
}));

(com.rpl.specter.t_com$rpl$specter74602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta74603","meta74603",-1701642228,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74602.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74602.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74602");

(com.rpl.specter.t_com$rpl$specter74602.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74602");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74602.
 */
com.rpl.specter.__GT_t_com$rpl$specter74602 = (function com$rpl$specter$__GT_t_com$rpl$specter74602(path__$1,late__$1,meta74603){
return (new com.rpl.specter.t_com$rpl$specter74602(path__$1,late__$1,meta74603));
});

}

return (new com.rpl.specter.t_com$rpl$specter74602(path,late,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
};
var G__74904 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__74909__i = 0, G__74909__a = new Array(arguments.length -  0);
while (G__74909__i < G__74909__a.length) {G__74909__a[G__74909__i] = arguments[G__74909__i + 0]; ++G__74909__i;}
  path = new cljs.core.IndexedSeq(G__74909__a,0,null);
} 
return G__74904__delegate.call(this,path);};
G__74904.cljs$lang$maxFixedArity = 0;
G__74904.cljs$lang$applyTo = (function (arglist__74910){
var path = cljs.core.seq(arglist__74910);
return G__74904__delegate(path);
});
G__74904.cljs$core$IFn$_invoke$arity$variadic = G__74904__delegate;
return G__74904;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74911__delegate = function (path){
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74612 = (function (path,late,meta74613){
this.path = path;
this.late = late;
this.meta74613 = meta74613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74614,meta74613__$1){
var self__ = this;
var _74614__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74612(self__.path,self__.late,meta74613__$1));
}));

(com.rpl.specter.t_com$rpl$specter74612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74614){
var self__ = this;
var _74614__$1 = this;
return self__.meta74613;
}));

(com.rpl.specter.t_com$rpl$specter74612.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74612.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__72234__auto__,vals__72235__auto__,structure,next_fn__72236__auto__){
var self__ = this;
var this__72234__auto____$1 = this;
var G__74615 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__72235__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__74616 = structure;
return (next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2(G__74615,G__74616) : next_fn__72236__auto__.call(null,G__74615,G__74616));
}));

(com.rpl.specter.t_com$rpl$specter74612.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__72234__auto__,vals__72235__auto__,structure,next_fn__72236__auto__){
var self__ = this;
var this__72234__auto____$1 = this;
var G__74617 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__72235__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__74618 = structure;
return (next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2(G__74617,G__74618) : next_fn__72236__auto__.call(null,G__74617,G__74618));
}));

(com.rpl.specter.t_com$rpl$specter74612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta74613","meta74613",-383605707,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74612.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74612.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74612");

(com.rpl.specter.t_com$rpl$specter74612.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74612");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74612.
 */
com.rpl.specter.__GT_t_com$rpl$specter74612 = (function com$rpl$specter$__GT_t_com$rpl$specter74612(path__$1,late__$1,meta74613){
return (new com.rpl.specter.t_com$rpl$specter74612(path__$1,late__$1,meta74613));
});

}

return (new com.rpl.specter.t_com$rpl$specter74612(path,late,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
};
var G__74911 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__74914__i = 0, G__74914__a = new Array(arguments.length -  0);
while (G__74914__i < G__74914__a.length) {G__74914__a[G__74914__i] = arguments[G__74914__i + 0]; ++G__74914__i;}
  path = new cljs.core.IndexedSeq(G__74914__a,0,null);
} 
return G__74911__delegate.call(this,path);};
G__74911.cljs$lang$maxFixedArity = 0;
G__74911.cljs$lang$applyTo = (function (arglist__74915){
var path = cljs.core.seq(arglist__74915);
return G__74911__delegate(path);
});
G__74911.cljs$core$IFn$_invoke$arity$variadic = G__74911__delegate;
return G__74911;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74622 = (function (val,meta74624){
this.val = val;
this.meta74624 = meta74624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74625,meta74624__$1){
var self__ = this;
var _74625__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74622(self__.val,meta74624__$1));
}));

(com.rpl.specter.t_com$rpl$specter74622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74625){
var self__ = this;
var _74625__$1 = this;
return self__.meta74624;
}));

(com.rpl.specter.t_com$rpl$specter74622.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74622.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__72234__auto__,vals__72235__auto__,structure,next_fn__72236__auto__){
var self__ = this;
var this__72234__auto____$1 = this;
var G__74632 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__72235__auto__,self__.val);
var G__74633 = structure;
return (next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2(G__74632,G__74633) : next_fn__72236__auto__.call(null,G__74632,G__74633));
}));

(com.rpl.specter.t_com$rpl$specter74622.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__72234__auto__,vals__72235__auto__,structure,next_fn__72236__auto__){
var self__ = this;
var this__72234__auto____$1 = this;
var G__74637 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__72235__auto__,self__.val);
var G__74638 = structure;
return (next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__72236__auto__.cljs$core$IFn$_invoke$arity$2(G__74637,G__74638) : next_fn__72236__auto__.call(null,G__74637,G__74638));
}));

(com.rpl.specter.t_com$rpl$specter74622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta74624","meta74624",1891866120,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74622.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74622.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74622");

(com.rpl.specter.t_com$rpl$specter74622.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74622");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74622.
 */
com.rpl.specter.__GT_t_com$rpl$specter74622 = (function com$rpl$specter$__GT_t_com$rpl$specter74622(val__$1,meta74624){
return (new com.rpl.specter.t_com$rpl$specter74622(val__$1,meta74624));
});

}

return (new com.rpl.specter.t_com$rpl$specter74622(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74921__delegate = function (path){
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74642 = (function (path,late,meta74643){
this.path = path;
this.late = late;
this.meta74643 = meta74643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74644,meta74643__$1){
var self__ = this;
var _74644__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74642(self__.path,self__.late,meta74643__$1));
}));

(com.rpl.specter.t_com$rpl$specter74642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74644){
var self__ = this;
var _74644__$1 = this;
return self__.meta74643;
}));

(com.rpl.specter.t_com$rpl$specter74642.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74642.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter74642.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter74642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta74643","meta74643",1529721835,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74642.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74642.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74642");

(com.rpl.specter.t_com$rpl$specter74642.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74642");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74642.
 */
com.rpl.specter.__GT_t_com$rpl$specter74642 = (function com$rpl$specter$__GT_t_com$rpl$specter74642(path__$1,late__$1,meta74643){
return (new com.rpl.specter.t_com$rpl$specter74642(path__$1,late__$1,meta74643));
});

}

return (new com.rpl.specter.t_com$rpl$specter74642(path,late,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
};
var G__74921 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__74923__i = 0, G__74923__a = new Array(arguments.length -  0);
while (G__74923__i < G__74923__a.length) {G__74923__a[G__74923__i] = arguments[G__74923__i + 0]; ++G__74923__i;}
  path = new cljs.core.IndexedSeq(G__74923__a,0,null);
} 
return G__74921__delegate.call(this,path);};
G__74921.cljs$lang$maxFixedArity = 0;
G__74921.cljs$lang$applyTo = (function (arglist__74924){
var path = cljs.core.seq(arglist__74924);
return G__74921__delegate(path);
});
G__74921.cljs$core$IFn$_invoke$arity$variadic = G__74921__delegate;
return G__74921;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74662 = (function (meta74663){
this.meta74663 = meta74663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74664,meta74663__$1){
var self__ = this;
var _74664__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74662(meta74663__$1));
}));

(com.rpl.specter.t_com$rpl$specter74662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74664){
var self__ = this;
var _74664__$1 = this;
return self__.meta74663;
}));

(com.rpl.specter.t_com$rpl$specter74662.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74662.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__74666 = cljs.core.PersistentVector.EMPTY;
var G__74667 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__74666,G__74667) : next_fn.call(null,G__74666,G__74667));
}));

(com.rpl.specter.t_com$rpl$specter74662.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__74670 = cljs.core.PersistentVector.EMPTY;
var G__74671 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__74670,G__74671) : next_fn.call(null,G__74670,G__74671));
}));

(com.rpl.specter.t_com$rpl$specter74662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74663","meta74663",-703847512,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74662.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74662.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74662");

(com.rpl.specter.t_com$rpl$specter74662.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74662");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74662.
 */
com.rpl.specter.__GT_t_com$rpl$specter74662 = (function com$rpl$specter$__GT_t_com$rpl$specter74662(meta74663){
return (new com.rpl.specter.t_com$rpl$specter74662(meta74663));
});

}

return (new com.rpl.specter.t_com$rpl$specter74662(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__74929 = null;
var G__74929__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__74929__3 = (function (cond_p,then_path,else_path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74680 = (function (cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,meta74681){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta74681 = meta74681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74682,meta74681__$1){
var self__ = this;
var _74682__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74680(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.afn,self__.late_then,self__.late_else,meta74681__$1));
}));

(com.rpl.specter.t_com$rpl$specter74680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74682){
var self__ = this;
var _74682__$1 = this;
return self__.meta74681;
}));

(com.rpl.specter.t_com$rpl$specter74680.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74680.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter74680.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter74680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta74681","meta74681",-1370472919,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74680.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74680.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74680");

(com.rpl.specter.t_com$rpl$specter74680.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74680");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74680.
 */
com.rpl.specter.__GT_t_com$rpl$specter74680 = (function com$rpl$specter$__GT_t_com$rpl$specter74680(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta74681){
return (new com.rpl.specter.t_com$rpl$specter74680(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta74681));
});

}

return (new com.rpl.specter.t_com$rpl$specter74680(cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
} else {
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74683 = (function (cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,meta74684){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta74684 = meta74684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74685,meta74684__$1){
var self__ = this;
var _74685__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74683(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.late_cond,self__.late_then,self__.late_else,meta74684__$1));
}));

(com.rpl.specter.t_com$rpl$specter74683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74685){
var self__ = this;
var _74685__$1 = this;
return self__.meta74684;
}));

(com.rpl.specter.t_com$rpl$specter74683.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74683.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__74674_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__74674_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter74683.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__74675_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__74675_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter74683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta74684","meta74684",366278273,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74683.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74683.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74683");

(com.rpl.specter.t_com$rpl$specter74683.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74683");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74683.
 */
com.rpl.specter.__GT_t_com$rpl$specter74683 = (function com$rpl$specter$__GT_t_com$rpl$specter74683(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta74684){
return (new com.rpl.specter.t_com$rpl$specter74683(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta74684));
});

}

return (new com.rpl.specter.t_com$rpl$specter74683(cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
}
});
G__74929 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__74929__2.call(this,cond_p,then_path);
case 3:
return G__74929__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__74929.cljs$core$IFn$_invoke$arity$2 = G__74929__2;
G__74929.cljs$core$IFn$_invoke$arity$3 = G__74929__3;
return G__74929;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74945__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__74733){
var vec__74735 = p__74733;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74735,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74735,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__74945 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__74946__i = 0, G__74946__a = new Array(arguments.length -  0);
while (G__74946__i < G__74946__a.length) {G__74946__a[G__74946__i] = arguments[G__74946__i + 0]; ++G__74946__i;}
  conds = new cljs.core.IndexedSeq(G__74946__a,0,null);
} 
return G__74945__delegate.call(this,conds);};
G__74945.cljs$lang$maxFixedArity = 0;
G__74945.cljs$lang$applyTo = (function (arglist__74947){
var conds = cljs.core.seq(arglist__74947);
return G__74945__delegate(conds);
});
G__74945.cljs$core$IFn$_invoke$arity$variadic = G__74945__delegate;
return G__74945;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__74948 = null;
var G__74948__0 = (function (){
return com.rpl.specter.STAY;
});
var G__74948__1 = (function (path){
return path;
});
var G__74948__2 = (function (path1,path2){
var builder__72237__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter74741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter74741 = (function (path1,path2,late1,late2,meta74742){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta74742 = meta74742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter74741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74743,meta74742__$1){
var self__ = this;
var _74743__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter74741(self__.path1,self__.path2,self__.late1,self__.late2,meta74742__$1));
}));

(com.rpl.specter.t_com$rpl$specter74741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74743){
var self__ = this;
var _74743__$1 = this;
return self__.meta74742;
}));

(com.rpl.specter.t_com$rpl$specter74741.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter74741.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter74741.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter74741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta74742","meta74742",1641359294,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter74741.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter74741.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter74741");

(com.rpl.specter.t_com$rpl$specter74741.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter74741");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter74741.
 */
com.rpl.specter.__GT_t_com$rpl$specter74741 = (function com$rpl$specter$__GT_t_com$rpl$specter74741(path1__$1,path2__$1,late1__$1,late2__$1,meta74742){
return (new com.rpl.specter.t_com$rpl$specter74741(path1__$1,path2__$1,late1__$1,late2__$1,meta74742));
});

}

return (new com.rpl.specter.t_com$rpl$specter74741(path1,path2,late1,late2,null));
}));
var curr_params__72238__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__72238__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__72237__auto__,curr_params__72238__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__72237__auto__,curr_params__72238__auto__,null);
}
});
var G__74948__3 = (function() { 
var G__74957__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__74957 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__74958__i = 0, G__74958__a = new Array(arguments.length -  2);
while (G__74958__i < G__74958__a.length) {G__74958__a[G__74958__i] = arguments[G__74958__i + 2]; ++G__74958__i;}
  paths = new cljs.core.IndexedSeq(G__74958__a,0,null);
} 
return G__74957__delegate.call(this,path1,path2,paths);};
G__74957.cljs$lang$maxFixedArity = 2;
G__74957.cljs$lang$applyTo = (function (arglist__74959){
var path1 = cljs.core.first(arglist__74959);
arglist__74959 = cljs.core.next(arglist__74959);
var path2 = cljs.core.first(arglist__74959);
var paths = cljs.core.rest(arglist__74959);
return G__74957__delegate(path1,path2,paths);
});
G__74957.cljs$core$IFn$_invoke$arity$variadic = G__74957__delegate;
return G__74957;
})()
;
G__74948 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__74948__0.call(this);
case 1:
return G__74948__1.call(this,path1);
case 2:
return G__74948__2.call(this,path1,path2);
default:
var G__74961 = null;
if (arguments.length > 2) {
var G__74963__i = 0, G__74963__a = new Array(arguments.length -  2);
while (G__74963__i < G__74963__a.length) {G__74963__a[G__74963__i] = arguments[G__74963__i + 2]; ++G__74963__i;}
G__74961 = new cljs.core.IndexedSeq(G__74963__a,0,null);
}
return G__74948__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__74961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__74948.cljs$lang$maxFixedArity = 2;
G__74948.cljs$lang$applyTo = G__74948__3.cljs$lang$applyTo;
G__74948.cljs$core$IFn$_invoke$arity$0 = G__74948__0;
G__74948.cljs$core$IFn$_invoke$arity$1 = G__74948__1;
G__74948.cljs$core$IFn$_invoke$arity$2 = G__74948__2;
G__74948.cljs$core$IFn$_invoke$arity$variadic = G__74948__3.cljs$core$IFn$_invoke$arity$variadic;
return G__74948;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74964__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__74964 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__74965__i = 0, G__74965__a = new Array(arguments.length -  0);
while (G__74965__i < G__74965__a.length) {G__74965__a[G__74965__i] = arguments[G__74965__i + 0]; ++G__74965__i;}
  path = new cljs.core.IndexedSeq(G__74965__a,0,null);
} 
return G__74964__delegate.call(this,path);};
G__74964.cljs$lang$maxFixedArity = 0;
G__74964.cljs$lang$applyTo = (function (arglist__74966){
var path = cljs.core.seq(arglist__74966);
return G__74964__delegate(path);
});
G__74964.cljs$core$IFn$_invoke$arity$variadic = G__74964__delegate;
return G__74964;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74967__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__74967 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__74968__i = 0, G__74968__a = new Array(arguments.length -  0);
while (G__74968__i < G__74968__a.length) {G__74968__a[G__74968__i] = arguments[G__74968__i + 0]; ++G__74968__i;}
  path = new cljs.core.IndexedSeq(G__74968__a,0,null);
} 
return G__74967__delegate.call(this,path);};
G__74967.cljs$lang$maxFixedArity = 0;
G__74967.cljs$lang$applyTo = (function (arglist__74969){
var path = cljs.core.seq(arglist__74969);
return G__74967__delegate(path);
});
G__74967.cljs$core$IFn$_invoke$arity$variadic = G__74967__delegate;
return G__74967;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__72244__auto__ = com.rpl.specter.pathcache74764;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74765 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache74764 = info74765;

return info74765;
})():info__72244__auto__);
var precompiled74766 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74767 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled74766.cljs$core$IFn$_invoke$arity$1 ? precompiled74766.cljs$core$IFn$_invoke$arity$1(G__74767) : precompiled74766.call(null,G__74767));
} else {
return precompiled74766;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__72244__auto__ = com.rpl.specter.pathcache74769;
var info__72244__auto____$1 = (((info__72244__auto__ == null))?(function (){var info74770 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,689,691,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache74769 = info74770;

return info74770;
})():info__72244__auto__);
var precompiled74771 = com.rpl.specter.impl.cached_path_info_precompiled(info__72244__auto____$1);
var dynamic_QMARK___72245__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__72244__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___72245__auto__)){
var G__74772 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled74771.cljs$core$IFn$_invoke$arity$1 ? precompiled74771.cljs$core$IFn$_invoke$arity$1(G__74772) : precompiled74771.call(null,G__74772));
} else {
return precompiled74771;
}
})());

return p;
}));
var empty__GT_NONE_74978 = (function (){var G__74774 = cljs.core.empty_QMARK_;
var G__74775 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__74774,G__74775) : com.rpl.specter.if_path.call(null,G__74774,G__74775));
})();
var compact_STAR__74979 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_74978) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_74978));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__74981__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__74979,path);
};
var G__74981 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__74982__i = 0, G__74982__a = new Array(arguments.length -  0);
while (G__74982__i < G__74982__a.length) {G__74982__a[G__74982__i] = arguments[G__74982__i + 0]; ++G__74982__i;}
  path = new cljs.core.IndexedSeq(G__74982__a,0,null);
} 
return G__74981__delegate.call(this,path);};
G__74981.cljs$lang$maxFixedArity = 0;
G__74981.cljs$lang$applyTo = (function (arglist__74983){
var path = cljs.core.seq(arglist__74983);
return G__74981__delegate(path);
});
G__74981.cljs$core$IFn$_invoke$arity$variadic = G__74981__delegate;
return G__74981;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
