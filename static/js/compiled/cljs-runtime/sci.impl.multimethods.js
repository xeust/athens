goog.provide('sci.impl.multimethods');
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
sci.impl.multimethods.check_valid_options = (function sci$impl$multimethods$check_valid_options(var_args){
var args__4742__auto__ = [];
var len__4736__auto___97516 = arguments.length;
var i__4737__auto___97517 = (0);
while(true){
if((i__4737__auto___97517 < len__4736__auto___97516)){
args__4742__auto__.push((arguments[i__4737__auto___97517]));

var G__97519 = (i__4737__auto___97517 + (1));
i__4737__auto___97517 = G__97519;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.multimethods.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.multimethods.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__97435_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__97435_SHARP_)].join('');
}),cljs.core.rest(valid_keys)))));
} else {
return null;
}
}));

(sci.impl.multimethods.check_valid_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.multimethods.check_valid_options.cljs$lang$applyTo = (function (seq97437){
var G__97441 = cljs.core.first(seq97437);
var seq97437__$1 = cljs.core.next(seq97437);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97441,seq97437__$1);
}));

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attr-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 * 
 *   :default
 * 
 *   The default dispatch value, defaults to :default
 * 
 *   :hierarchy
 * 
 *   The value used for hierarchical dispatch (e.g. ::square is-a ::shape)
 * 
 *   Hierarchies are type-like relationships that do not depend upon type
 *   inheritance. By default Clojure's multimethods dispatch off of a
 *   global hierarchy map.  However, a hierarchy relationship can be
 *   created with the derive function used to augment the root ancestor
 *   created with make-hierarchy.
 * 
 *   Multimethods expect the value of the hierarchy option to be supplied as
 *   a reference type e.g. a var (i.e. via the Var-quote dispatch macro #'
 *   or the var special form).
 */
sci.impl.multimethods.defmulti = (function sci$impl$multimethods$defmulti(var_args){
var args__4742__auto__ = [];
var len__4736__auto___97528 = arguments.length;
var i__4737__auto___97529 = (0);
while(true){
if((i__4737__auto___97529 < len__4736__auto___97528)){
args__4742__auto__.push((arguments[i__4737__auto___97529]));

var G__97530 = (i__4737__auto___97529 + (1));
i__4737__auto___97529 = G__97530;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.multimethods.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.multimethods.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_name__$1 = cljs.core.with_meta(mm_name,m__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
var hierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),sci.impl.hierarchies.global_hierarchy(ctx));
sci.impl.multimethods.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defonce","cljs.core/defonce",-1291833100,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(mm_name__$1,m__$2),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__97460__auto__","method-table__97460__auto__",1417483336,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__97461__auto__","prefer-table__97461__auto__",-1087894955,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__97462__auto__","method-cache__97462__auto__",-230648405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__97463__auto__","cached-hierarchy__97463__auto__",-1805364389,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","multi-fn-impl","cljs.core/multi-fn-impl",1399453884,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mm_name__$1)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dispatch_fn,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null)),(new cljs.core.List(null,hierarchy,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__97460__auto__","method-table__97460__auto__",1417483336,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__97461__auto__","prefer-table__97461__auto__",-1087894955,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__97462__auto__","method-cache__97462__auto__",-230648405,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__97463__auto__","cached-hierarchy__97463__auto__",-1805364389,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.multimethods.defmulti.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.multimethods.defmulti.cljs$lang$applyTo = (function (seq97468){
var G__97469 = cljs.core.first(seq97468);
var seq97468__$1 = cljs.core.next(seq97468);
var G__97470 = cljs.core.first(seq97468__$1);
var seq97468__$2 = cljs.core.next(seq97468__$1);
var G__97471 = cljs.core.first(seq97468__$2);
var seq97468__$3 = cljs.core.next(seq97468__$2);
var G__97472 = cljs.core.first(seq97468__$3);
var seq97468__$4 = cljs.core.next(seq97468__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97469,G__97470,G__97471,G__97472,seq97468__$4);
}));

sci.impl.multimethods.multi_fn_QMARK__impl = (function sci$impl$multimethods$multi_fn_QMARK__impl(x){
return (x instanceof cljs.core.MultiFn);
});
sci.impl.multimethods.multi_fn_impl = (function sci$impl$multimethods$multi_fn_impl(name,dispatch_fn,default$,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default$,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
sci.impl.multimethods.multi_fn_add_method_impl = (function sci$impl$multimethods$multi_fn_add_method_impl(multifn,dispatch_val,f){
return cljs.core._add_method(multifn,dispatch_val,f);
});
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
sci.impl.multimethods.defmethod = (function sci$impl$multimethods$defmethod(var_args){
var args__4742__auto__ = [];
var len__4736__auto___97547 = arguments.length;
var i__4737__auto___97548 = (0);
while(true){
if((i__4737__auto___97548 < len__4736__auto___97547)){
args__4742__auto__.push((arguments[i__4737__auto___97548]));

var G__97549 = (i__4737__auto___97548 + (1));
i__4737__auto___97548 = G__97549;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.multimethods.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.multimethods.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","multi-fn-add-method-impl","cljs.core/multi-fn-add-method-impl",-1207709569,null),null,(1),null)),(new cljs.core.List(null,multifn,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dispatch_val,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),fn_tail))),null,(1),null))], 0))));
}));

(sci.impl.multimethods.defmethod.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.multimethods.defmethod.cljs$lang$applyTo = (function (seq97497){
var G__97498 = cljs.core.first(seq97497);
var seq97497__$1 = cljs.core.next(seq97497);
var G__97499 = cljs.core.first(seq97497__$1);
var seq97497__$2 = cljs.core.next(seq97497__$1);
var G__97500 = cljs.core.first(seq97497__$2);
var seq97497__$3 = cljs.core.next(seq97497__$2);
var G__97501 = cljs.core.first(seq97497__$3);
var seq97497__$4 = cljs.core.next(seq97497__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97498,G__97499,G__97500,G__97501,seq97497__$4);
}));


//# sourceMappingURL=sci.impl.multimethods.js.map
