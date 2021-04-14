goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__95811_95822 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__95824__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__95798_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__95798_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__95802_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__95802_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__95824 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__95827__i = 0, G__95827__a = new Array(arguments.length -  0);
while (G__95827__i < G__95827__a.length) {G__95827__a[G__95827__i] = arguments[G__95827__i + 0]; ++G__95827__i;}
  title = new cljs.core.IndexedSeq(G__95827__a,0,null);
} 
return G__95824__delegate.call(this,title);};
G__95824.cljs$lang$maxFixedArity = 0;
G__95824.cljs$lang$applyTo = (function (arglist__95828){
var title = cljs.core.seq(arglist__95828);
return G__95824__delegate(title);
});
G__95824.cljs$core$IFn$_invoke$arity$variadic = G__95824__delegate;
return G__95824;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__95829__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__95803_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__95803_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__95804_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__95804_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__95829 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__95838__i = 0, G__95838__a = new Array(arguments.length -  0);
while (G__95838__i < G__95838__a.length) {G__95838__a[G__95838__i] = arguments[G__95838__i + 0]; ++G__95838__i;}
  title = new cljs.core.IndexedSeq(G__95838__a,0,null);
} 
return G__95829__delegate.call(this,title);};
G__95829.cljs$lang$maxFixedArity = 0;
G__95829.cljs$lang$applyTo = (function (arglist__95842){
var title = cljs.core.seq(arglist__95842);
return G__95829__delegate(title);
});
G__95829.cljs$core$IFn$_invoke$arity$variadic = G__95829__delegate;
return G__95829;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__95806_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__95806_SHARP_,uid);
}));
})], null);
var G__95812_95823 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__95811_95822,G__95812_95823) : instaparse.core.transform.call(null,G__95811_95822,G__95812_95823));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
