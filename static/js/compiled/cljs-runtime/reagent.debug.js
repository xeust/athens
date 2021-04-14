goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__58311__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__58311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58312__i = 0, G__58312__a = new Array(arguments.length -  0);
while (G__58312__i < G__58312__a.length) {G__58312__a[G__58312__i] = arguments[G__58312__i + 0]; ++G__58312__i;}
  args = new cljs.core.IndexedSeq(G__58312__a,0,null);
} 
return G__58311__delegate.call(this,args);};
G__58311.cljs$lang$maxFixedArity = 0;
G__58311.cljs$lang$applyTo = (function (arglist__58313){
var args = cljs.core.seq(arglist__58313);
return G__58311__delegate(args);
});
G__58311.cljs$core$IFn$_invoke$arity$variadic = G__58311__delegate;
return G__58311;
})()
);

(o.error = (function() { 
var G__58314__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__58314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58315__i = 0, G__58315__a = new Array(arguments.length -  0);
while (G__58315__i < G__58315__a.length) {G__58315__a[G__58315__i] = arguments[G__58315__i + 0]; ++G__58315__i;}
  args = new cljs.core.IndexedSeq(G__58315__a,0,null);
} 
return G__58314__delegate.call(this,args);};
G__58314.cljs$lang$maxFixedArity = 0;
G__58314.cljs$lang$applyTo = (function (arglist__58316){
var args = cljs.core.seq(arglist__58316);
return G__58314__delegate(args);
});
G__58314.cljs$core$IFn$_invoke$arity$variadic = G__58314__delegate;
return G__58314;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
