goog.provide('sci.impl.interpreter');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__99163 = xs;
args__$2 = G__99163;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__99164 = xs;
args__$2 = G__99164;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___99165 = arguments.length;
var i__4737__auto___99166 = (0);
while(true){
if((i__4737__auto___99166 < len__4736__auto___99165)){
args__4742__auto__.push((arguments[i__4737__auto___99166]));

var G__99167 = (i__4737__auto___99166 + (1));
i__4737__auto___99166 = G__99167;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__99168 = ctx__$2;
var G__99169 = rest_let_bindings;
ctx__$1 = G__99168;
let_bindings__$1 = G__99169;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__99170 = nexprs;
exprs__$1 = G__99170;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq98443){
var G__98444 = cljs.core.first(seq98443);
var seq98443__$1 = cljs.core.next(seq98443);
var G__98445 = cljs.core.first(seq98443__$1);
var seq98443__$2 = cljs.core.next(seq98443__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__98444,G__98445,seq98443__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__98446){
var vec__98447 = p__98446;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98447,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98447,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98447,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98447,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__98450 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__98450,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__98450;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__98451 = libspec;
var seq__98452 = cljs.core.seq(vec__98451);
var first__98453 = cljs.core.first(seq__98452);
var seq__98452__$1 = cljs.core.next(seq__98452);
var lib_name = first__98453;
var opts = seq__98452__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__98457 = opts;
var vec__98458 = G__98457;
var seq__98459 = cljs.core.seq(vec__98458);
var first__98460 = cljs.core.first(seq__98459);
var seq__98459__$1 = cljs.core.next(seq__98459);
var opt_name = first__98460;
var first__98460__$1 = cljs.core.first(seq__98459__$1);
var seq__98459__$2 = cljs.core.next(seq__98459__$1);
var fst_opt = first__98460__$1;
var rst_opts = seq__98459__$2;
var ret__$1 = ret;
var G__98457__$1 = G__98457;
while(true){
var ret__$2 = ret__$1;
var vec__98465 = G__98457__$1;
var seq__98466 = cljs.core.seq(vec__98465);
var first__98467 = cljs.core.first(seq__98466);
var seq__98466__$1 = cljs.core.next(seq__98466);
var opt_name__$1 = first__98467;
var first__98467__$1 = cljs.core.first(seq__98466__$1);
var seq__98466__$2 = cljs.core.next(seq__98466__$1);
var fst_opt__$1 = first__98467__$1;
var rst_opts__$1 = seq__98466__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__98468 = opt_name__$1;
var G__98468__$1 = (((G__98468 instanceof cljs.core.Keyword))?G__98468.fqn:null);
switch (G__98468__$1) {
case "as":
var G__99172 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__99173 = rst_opts__$1;
ret__$1 = G__99172;
G__98457__$1 = G__99173;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__99174 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__99175 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__99174;
G__98457__$1 = G__99175;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__99176 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__99177 = rst_opts__$1;
ret__$1 = G__99176;
G__98457__$1 = G__99177;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__98468__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__98469){
var vec__98470 = p__98469;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98470,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__98473){
var map__98474 = p__98473;
var map__98474__$1 = (((((!((map__98474 == null))))?(((((map__98474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98474):map__98474);
var _parsed_libspec = map__98474__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98474__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98474__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98474__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98474__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98474__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__98476 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98476,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98476,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__98479 = sci.impl.interpreter.parse_libspec(libspec);
var map__98479__$1 = (((((!((map__98479 == null))))?(((((map__98479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98479):map__98479);
var parsed_libspec = map__98479__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98479__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98479__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__98481 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__98481) : load_fn.call(null,G__98481));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__98482 = temp__5733__auto____$2;
var map__98482__$1 = (((((!((map__98482 == null))))?(((((map__98482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98482):map__98482);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98482__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98482__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__98485_99178 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__98486_99179 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__98485_99178,G__98486_99179) : sci.impl.interpreter.eval_string_STAR_.call(null,G__98485_99178,G__98486_99179));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e98484){if((e98484 instanceof Error)){
var e_99180 = e98484;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_99180;
} else {
throw e98484;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___99181 = arguments.length;
var i__4737__auto___99182 = (0);
while(true){
if((i__4737__auto___99182 < len__4736__auto___99181)){
args__4742__auto__.push((arguments[i__4737__auto___99182]));

var G__99183 = (i__4737__auto___99182 + (1));
i__4737__auto___99182 = G__99183;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__98495 = ctx;
var G__98496 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98495,G__98496) : sci.impl.interpreter.interpret.call(null,G__98495,G__98496));
})();
if((ret instanceof cljs.core.Symbol)){
var G__99185 = (function (){var G__98497 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__98497,current_libspec);
} else {
return G__98497;
}
})();
var G__99186 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__99187 = cljs.core.next(args__$1);
libspecs = G__99185;
current_libspec = G__99186;
args__$1 = G__99187;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__99189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__99190 = null;
var G__99191 = cljs.core.next(args__$1);
libspecs = G__99189;
current_libspec = G__99190;
args__$1 = G__99191;
continue;
} else {
var G__99192 = (function (){var G__98498 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__98498,current_libspec);
} else {
return G__98498;
}
})();
var G__99193 = ret;
var G__99194 = cljs.core.next(args__$1);
libspecs = G__99192;
current_libspec = G__99193;
args__$1 = G__99194;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__98499 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__98499,current_libspec);
} else {
return G__98499;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__98487_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__98487_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq98488){
var G__98489 = cljs.core.first(seq98488);
var seq98488__$1 = cljs.core.next(seq98488);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__98489,seq98488__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___99196 = arguments.length;
var i__4737__auto___99197 = (0);
while(true){
if((i__4737__auto___99197 < len__4736__auto___99196)){
args__4742__auto__.push((arguments[i__4737__auto___99197]));

var G__99198 = (i__4737__auto___99197 + (1));
i__4737__auto___99197 = G__99198;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq98500){
var G__98501 = cljs.core.first(seq98500);
var seq98500__$1 = cljs.core.next(seq98500);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__98501,seq98500__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__98502){
var vec__98503 = p__98502;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98503,(0),null);
var map__98506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98503,(1),null);
var map__98506__$1 = (((((!((map__98506 == null))))?(((((map__98506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98506):map__98506);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98506__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98506__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98506__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__98508 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98508,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98508,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__98511 = ctx;
var G__98512 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98511,G__98512) : sci.impl.interpreter.interpret.call(null,G__98511,G__98512));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__98513 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__98513__$1 = (((((!((map__98513 == null))))?(((((map__98513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98513):map__98513);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98513__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98513__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98513__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__98521 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__98522 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__98522);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__98521);
}}catch (e98515){if((e98515 instanceof Error)){
var e = e98515;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__98516 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__98517 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98516,G__98517) : sci.impl.interpreter.interpret.call(null,G__98516,G__98517));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__98518 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98518,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98518,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e98515;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__98523){
var vec__98524 = p__98523;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98524,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98524,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__98527_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__98527_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__98527_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__98529){
var vec__98530 = p__98529;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98530,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98530,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98530,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__98528_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__98528_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__98528_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__98535,p__98536){
var map__98537 = p__98535;
var map__98537__$1 = (((((!((map__98537 == null))))?(((((map__98537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__98537):map__98537);
var ctx = map__98537__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98537__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__98538 = p__98536;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98538,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98538,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98538,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98538,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__98534_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__98534_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__98534_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__98542){
var vec__98543 = p__98542;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98543,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98543,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__98546){
var vec__98547 = p__98546;
var seq__98548 = cljs.core.seq(vec__98547);
var first__98549 = cljs.core.first(seq__98548);
var seq__98548__$1 = cljs.core.next(seq__98548);
var _ = first__98549;
var first__98549__$1 = cljs.core.first(seq__98548__$1);
var seq__98548__$2 = cljs.core.next(seq__98548__$1);
var ns_sym = first__98549__$1;
var exprs = seq__98548__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__98550 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98550,(1),null);
var G__98553_99214 = k;
var G__98553_99215__$1 = (((G__98553_99214 instanceof cljs.core.Keyword))?G__98553_99214.fqn:null);
switch (G__98553_99215__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__98553_99214,G__98553_99215__$1,vec__98550,k,v,ns_sym__$1,vec__98547,seq__98548,first__98549,seq__98548__$1,_,first__98549__$1,seq__98548__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__98553_99214,G__98553_99215__$1,vec__98550,k,v,ns_sym__$1,vec__98547,seq__98548,first__98549,seq__98548__$1,_,first__98549__$1,seq__98548__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__98553_99215__$1)].join('')));

}

var G__99219 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__99219;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__98554){
var vec__98555 = p__98554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98555,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98555,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98555,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__98561 = exprs;
var vec__98562 = G__98561;
var seq__98563 = cljs.core.seq(vec__98562);
var first__98564 = cljs.core.first(seq__98563);
var seq__98563__$1 = cljs.core.next(seq__98563);
var expr = first__98564;
var exprs__$1 = seq__98563__$1;
var G__98561__$1 = G__98561;
while(true){
var vec__98565 = G__98561__$1;
var seq__98566 = cljs.core.seq(vec__98565);
var first__98567 = cljs.core.first(seq__98566);
var seq__98566__$1 = cljs.core.next(seq__98566);
var expr__$1 = first__98567;
var exprs__$2 = seq__98566__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e98568){if((e98568 instanceof Error)){
var e = e98568;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e98568;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__99225 = exprs__$3;
G__98561__$1 = G__99225;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__98761 = cljs.core.count(args);
switch (G__98761) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg98571 = (function (){var G__98762 = ctx;
var G__98763 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98762,G__98763) : sci.impl.interpreter.interpret.call(null,G__98762,G__98763));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg98571) : f.call(null,arg98571));

break;
case (2):
var arg98572 = (function (){var G__98764 = ctx;
var G__98765 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98764,G__98765) : sci.impl.interpreter.interpret.call(null,G__98764,G__98765));
})();
var args__$1 = cljs.core.rest(args);
var arg98573 = (function (){var G__98766 = ctx;
var G__98767 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98766,G__98767) : sci.impl.interpreter.interpret.call(null,G__98766,G__98767));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg98572,arg98573) : f.call(null,arg98572,arg98573));

break;
case (3):
var arg98574 = (function (){var G__98768 = ctx;
var G__98769 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98768,G__98769) : sci.impl.interpreter.interpret.call(null,G__98768,G__98769));
})();
var args__$1 = cljs.core.rest(args);
var arg98575 = (function (){var G__98770 = ctx;
var G__98771 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98770,G__98771) : sci.impl.interpreter.interpret.call(null,G__98770,G__98771));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98576 = (function (){var G__98772 = ctx;
var G__98773 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98772,G__98773) : sci.impl.interpreter.interpret.call(null,G__98772,G__98773));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg98574,arg98575,arg98576) : f.call(null,arg98574,arg98575,arg98576));

break;
case (4):
var arg98577 = (function (){var G__98774 = ctx;
var G__98775 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98774,G__98775) : sci.impl.interpreter.interpret.call(null,G__98774,G__98775));
})();
var args__$1 = cljs.core.rest(args);
var arg98578 = (function (){var G__98776 = ctx;
var G__98777 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98776,G__98777) : sci.impl.interpreter.interpret.call(null,G__98776,G__98777));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98579 = (function (){var G__98778 = ctx;
var G__98779 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98778,G__98779) : sci.impl.interpreter.interpret.call(null,G__98778,G__98779));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98580 = (function (){var G__98780 = ctx;
var G__98781 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98780,G__98781) : sci.impl.interpreter.interpret.call(null,G__98780,G__98781));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg98577,arg98578,arg98579,arg98580) : f.call(null,arg98577,arg98578,arg98579,arg98580));

break;
case (5):
var arg98581 = (function (){var G__98782 = ctx;
var G__98783 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98782,G__98783) : sci.impl.interpreter.interpret.call(null,G__98782,G__98783));
})();
var args__$1 = cljs.core.rest(args);
var arg98582 = (function (){var G__98784 = ctx;
var G__98785 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98784,G__98785) : sci.impl.interpreter.interpret.call(null,G__98784,G__98785));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98583 = (function (){var G__98786 = ctx;
var G__98787 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98786,G__98787) : sci.impl.interpreter.interpret.call(null,G__98786,G__98787));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98584 = (function (){var G__98788 = ctx;
var G__98789 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98788,G__98789) : sci.impl.interpreter.interpret.call(null,G__98788,G__98789));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98585 = (function (){var G__98790 = ctx;
var G__98791 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98790,G__98791) : sci.impl.interpreter.interpret.call(null,G__98790,G__98791));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg98581,arg98582,arg98583,arg98584,arg98585) : f.call(null,arg98581,arg98582,arg98583,arg98584,arg98585));

break;
case (6):
var arg98586 = (function (){var G__98792 = ctx;
var G__98793 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98792,G__98793) : sci.impl.interpreter.interpret.call(null,G__98792,G__98793));
})();
var args__$1 = cljs.core.rest(args);
var arg98587 = (function (){var G__98794 = ctx;
var G__98795 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98794,G__98795) : sci.impl.interpreter.interpret.call(null,G__98794,G__98795));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98588 = (function (){var G__98796 = ctx;
var G__98797 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98796,G__98797) : sci.impl.interpreter.interpret.call(null,G__98796,G__98797));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98589 = (function (){var G__98798 = ctx;
var G__98799 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98798,G__98799) : sci.impl.interpreter.interpret.call(null,G__98798,G__98799));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98590 = (function (){var G__98800 = ctx;
var G__98801 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98800,G__98801) : sci.impl.interpreter.interpret.call(null,G__98800,G__98801));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98591 = (function (){var G__98802 = ctx;
var G__98803 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98802,G__98803) : sci.impl.interpreter.interpret.call(null,G__98802,G__98803));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg98586,arg98587,arg98588,arg98589,arg98590,arg98591) : f.call(null,arg98586,arg98587,arg98588,arg98589,arg98590,arg98591));

break;
case (7):
var arg98592 = (function (){var G__98804 = ctx;
var G__98805 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98804,G__98805) : sci.impl.interpreter.interpret.call(null,G__98804,G__98805));
})();
var args__$1 = cljs.core.rest(args);
var arg98593 = (function (){var G__98806 = ctx;
var G__98807 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98806,G__98807) : sci.impl.interpreter.interpret.call(null,G__98806,G__98807));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98594 = (function (){var G__98808 = ctx;
var G__98809 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98808,G__98809) : sci.impl.interpreter.interpret.call(null,G__98808,G__98809));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98595 = (function (){var G__98810 = ctx;
var G__98811 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98810,G__98811) : sci.impl.interpreter.interpret.call(null,G__98810,G__98811));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98596 = (function (){var G__98812 = ctx;
var G__98813 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98812,G__98813) : sci.impl.interpreter.interpret.call(null,G__98812,G__98813));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98597 = (function (){var G__98814 = ctx;
var G__98815 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98814,G__98815) : sci.impl.interpreter.interpret.call(null,G__98814,G__98815));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98598 = (function (){var G__98816 = ctx;
var G__98817 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98816,G__98817) : sci.impl.interpreter.interpret.call(null,G__98816,G__98817));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg98592,arg98593,arg98594,arg98595,arg98596,arg98597,arg98598) : f.call(null,arg98592,arg98593,arg98594,arg98595,arg98596,arg98597,arg98598));

break;
case (8):
var arg98599 = (function (){var G__98818 = ctx;
var G__98819 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98818,G__98819) : sci.impl.interpreter.interpret.call(null,G__98818,G__98819));
})();
var args__$1 = cljs.core.rest(args);
var arg98600 = (function (){var G__98820 = ctx;
var G__98821 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98820,G__98821) : sci.impl.interpreter.interpret.call(null,G__98820,G__98821));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98601 = (function (){var G__98822 = ctx;
var G__98823 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98822,G__98823) : sci.impl.interpreter.interpret.call(null,G__98822,G__98823));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98602 = (function (){var G__98824 = ctx;
var G__98825 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98824,G__98825) : sci.impl.interpreter.interpret.call(null,G__98824,G__98825));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98603 = (function (){var G__98826 = ctx;
var G__98827 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98826,G__98827) : sci.impl.interpreter.interpret.call(null,G__98826,G__98827));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98604 = (function (){var G__98828 = ctx;
var G__98829 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98828,G__98829) : sci.impl.interpreter.interpret.call(null,G__98828,G__98829));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98605 = (function (){var G__98830 = ctx;
var G__98831 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98830,G__98831) : sci.impl.interpreter.interpret.call(null,G__98830,G__98831));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98606 = (function (){var G__98832 = ctx;
var G__98833 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98832,G__98833) : sci.impl.interpreter.interpret.call(null,G__98832,G__98833));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg98599,arg98600,arg98601,arg98602,arg98603,arg98604,arg98605,arg98606) : f.call(null,arg98599,arg98600,arg98601,arg98602,arg98603,arg98604,arg98605,arg98606));

break;
case (9):
var arg98607 = (function (){var G__98834 = ctx;
var G__98835 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98834,G__98835) : sci.impl.interpreter.interpret.call(null,G__98834,G__98835));
})();
var args__$1 = cljs.core.rest(args);
var arg98608 = (function (){var G__98836 = ctx;
var G__98837 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98836,G__98837) : sci.impl.interpreter.interpret.call(null,G__98836,G__98837));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98609 = (function (){var G__98838 = ctx;
var G__98839 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98838,G__98839) : sci.impl.interpreter.interpret.call(null,G__98838,G__98839));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98610 = (function (){var G__98840 = ctx;
var G__98841 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98840,G__98841) : sci.impl.interpreter.interpret.call(null,G__98840,G__98841));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98611 = (function (){var G__98842 = ctx;
var G__98843 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98842,G__98843) : sci.impl.interpreter.interpret.call(null,G__98842,G__98843));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98612 = (function (){var G__98844 = ctx;
var G__98845 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98844,G__98845) : sci.impl.interpreter.interpret.call(null,G__98844,G__98845));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98613 = (function (){var G__98846 = ctx;
var G__98847 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98846,G__98847) : sci.impl.interpreter.interpret.call(null,G__98846,G__98847));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98614 = (function (){var G__98848 = ctx;
var G__98849 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98848,G__98849) : sci.impl.interpreter.interpret.call(null,G__98848,G__98849));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98615 = (function (){var G__98850 = ctx;
var G__98851 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98850,G__98851) : sci.impl.interpreter.interpret.call(null,G__98850,G__98851));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg98607,arg98608,arg98609,arg98610,arg98611,arg98612,arg98613,arg98614,arg98615) : f.call(null,arg98607,arg98608,arg98609,arg98610,arg98611,arg98612,arg98613,arg98614,arg98615));

break;
case (10):
var arg98616 = (function (){var G__98852 = ctx;
var G__98853 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98852,G__98853) : sci.impl.interpreter.interpret.call(null,G__98852,G__98853));
})();
var args__$1 = cljs.core.rest(args);
var arg98617 = (function (){var G__98854 = ctx;
var G__98855 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98854,G__98855) : sci.impl.interpreter.interpret.call(null,G__98854,G__98855));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98618 = (function (){var G__98856 = ctx;
var G__98857 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98856,G__98857) : sci.impl.interpreter.interpret.call(null,G__98856,G__98857));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98619 = (function (){var G__98858 = ctx;
var G__98859 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98858,G__98859) : sci.impl.interpreter.interpret.call(null,G__98858,G__98859));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98620 = (function (){var G__98860 = ctx;
var G__98861 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98860,G__98861) : sci.impl.interpreter.interpret.call(null,G__98860,G__98861));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98621 = (function (){var G__98862 = ctx;
var G__98863 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98862,G__98863) : sci.impl.interpreter.interpret.call(null,G__98862,G__98863));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98622 = (function (){var G__98864 = ctx;
var G__98865 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98864,G__98865) : sci.impl.interpreter.interpret.call(null,G__98864,G__98865));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98623 = (function (){var G__98866 = ctx;
var G__98867 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98866,G__98867) : sci.impl.interpreter.interpret.call(null,G__98866,G__98867));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98624 = (function (){var G__98868 = ctx;
var G__98869 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98868,G__98869) : sci.impl.interpreter.interpret.call(null,G__98868,G__98869));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg98625 = (function (){var G__98870 = ctx;
var G__98871 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98870,G__98871) : sci.impl.interpreter.interpret.call(null,G__98870,G__98871));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg98616,arg98617,arg98618,arg98619,arg98620,arg98621,arg98622,arg98623,arg98624,arg98625) : f.call(null,arg98616,arg98617,arg98618,arg98619,arg98620,arg98621,arg98622,arg98623,arg98624,arg98625));

break;
case (11):
var arg98626 = (function (){var G__98872 = ctx;
var G__98873 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98872,G__98873) : sci.impl.interpreter.interpret.call(null,G__98872,G__98873));
})();
var args__$1 = cljs.core.rest(args);
var arg98627 = (function (){var G__98874 = ctx;
var G__98875 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98874,G__98875) : sci.impl.interpreter.interpret.call(null,G__98874,G__98875));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98628 = (function (){var G__98876 = ctx;
var G__98877 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98876,G__98877) : sci.impl.interpreter.interpret.call(null,G__98876,G__98877));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98629 = (function (){var G__98878 = ctx;
var G__98879 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98878,G__98879) : sci.impl.interpreter.interpret.call(null,G__98878,G__98879));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98630 = (function (){var G__98880 = ctx;
var G__98881 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98880,G__98881) : sci.impl.interpreter.interpret.call(null,G__98880,G__98881));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98631 = (function (){var G__98882 = ctx;
var G__98883 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98882,G__98883) : sci.impl.interpreter.interpret.call(null,G__98882,G__98883));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98632 = (function (){var G__98884 = ctx;
var G__98885 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98884,G__98885) : sci.impl.interpreter.interpret.call(null,G__98884,G__98885));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98633 = (function (){var G__98886 = ctx;
var G__98887 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98886,G__98887) : sci.impl.interpreter.interpret.call(null,G__98886,G__98887));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98634 = (function (){var G__98888 = ctx;
var G__98889 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98888,G__98889) : sci.impl.interpreter.interpret.call(null,G__98888,G__98889));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg98635 = (function (){var G__98890 = ctx;
var G__98891 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98890,G__98891) : sci.impl.interpreter.interpret.call(null,G__98890,G__98891));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg98636 = (function (){var G__98892 = ctx;
var G__98893 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98892,G__98893) : sci.impl.interpreter.interpret.call(null,G__98892,G__98893));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg98626,arg98627,arg98628,arg98629,arg98630,arg98631,arg98632,arg98633,arg98634,arg98635,arg98636) : f.call(null,arg98626,arg98627,arg98628,arg98629,arg98630,arg98631,arg98632,arg98633,arg98634,arg98635,arg98636));

break;
case (12):
var arg98637 = (function (){var G__98894 = ctx;
var G__98895 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98894,G__98895) : sci.impl.interpreter.interpret.call(null,G__98894,G__98895));
})();
var args__$1 = cljs.core.rest(args);
var arg98638 = (function (){var G__98896 = ctx;
var G__98897 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98896,G__98897) : sci.impl.interpreter.interpret.call(null,G__98896,G__98897));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98639 = (function (){var G__98898 = ctx;
var G__98899 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98898,G__98899) : sci.impl.interpreter.interpret.call(null,G__98898,G__98899));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98640 = (function (){var G__98900 = ctx;
var G__98901 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98900,G__98901) : sci.impl.interpreter.interpret.call(null,G__98900,G__98901));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98641 = (function (){var G__98902 = ctx;
var G__98903 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98902,G__98903) : sci.impl.interpreter.interpret.call(null,G__98902,G__98903));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98642 = (function (){var G__98904 = ctx;
var G__98905 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98904,G__98905) : sci.impl.interpreter.interpret.call(null,G__98904,G__98905));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98643 = (function (){var G__98906 = ctx;
var G__98907 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98906,G__98907) : sci.impl.interpreter.interpret.call(null,G__98906,G__98907));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98644 = (function (){var G__98908 = ctx;
var G__98909 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98908,G__98909) : sci.impl.interpreter.interpret.call(null,G__98908,G__98909));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98645 = (function (){var G__98910 = ctx;
var G__98911 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98910,G__98911) : sci.impl.interpreter.interpret.call(null,G__98910,G__98911));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg98646 = (function (){var G__98912 = ctx;
var G__98913 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98912,G__98913) : sci.impl.interpreter.interpret.call(null,G__98912,G__98913));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg98647 = (function (){var G__98914 = ctx;
var G__98915 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98914,G__98915) : sci.impl.interpreter.interpret.call(null,G__98914,G__98915));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg98648 = (function (){var G__98916 = ctx;
var G__98917 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98916,G__98917) : sci.impl.interpreter.interpret.call(null,G__98916,G__98917));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg98637,arg98638,arg98639,arg98640,arg98641,arg98642,arg98643,arg98644,arg98645,arg98646,arg98647,arg98648) : f.call(null,arg98637,arg98638,arg98639,arg98640,arg98641,arg98642,arg98643,arg98644,arg98645,arg98646,arg98647,arg98648));

break;
case (13):
var arg98649 = (function (){var G__98918 = ctx;
var G__98919 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98918,G__98919) : sci.impl.interpreter.interpret.call(null,G__98918,G__98919));
})();
var args__$1 = cljs.core.rest(args);
var arg98650 = (function (){var G__98920 = ctx;
var G__98921 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98920,G__98921) : sci.impl.interpreter.interpret.call(null,G__98920,G__98921));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98651 = (function (){var G__98922 = ctx;
var G__98923 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98922,G__98923) : sci.impl.interpreter.interpret.call(null,G__98922,G__98923));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98652 = (function (){var G__98924 = ctx;
var G__98925 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98924,G__98925) : sci.impl.interpreter.interpret.call(null,G__98924,G__98925));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98653 = (function (){var G__98926 = ctx;
var G__98927 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98926,G__98927) : sci.impl.interpreter.interpret.call(null,G__98926,G__98927));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98654 = (function (){var G__98928 = ctx;
var G__98929 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98928,G__98929) : sci.impl.interpreter.interpret.call(null,G__98928,G__98929));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98655 = (function (){var G__98930 = ctx;
var G__98931 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98930,G__98931) : sci.impl.interpreter.interpret.call(null,G__98930,G__98931));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98656 = (function (){var G__98932 = ctx;
var G__98933 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98932,G__98933) : sci.impl.interpreter.interpret.call(null,G__98932,G__98933));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98657 = (function (){var G__98934 = ctx;
var G__98935 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98934,G__98935) : sci.impl.interpreter.interpret.call(null,G__98934,G__98935));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg98658 = (function (){var G__98936 = ctx;
var G__98937 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98936,G__98937) : sci.impl.interpreter.interpret.call(null,G__98936,G__98937));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg98659 = (function (){var G__98938 = ctx;
var G__98939 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98938,G__98939) : sci.impl.interpreter.interpret.call(null,G__98938,G__98939));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg98660 = (function (){var G__98940 = ctx;
var G__98941 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98940,G__98941) : sci.impl.interpreter.interpret.call(null,G__98940,G__98941));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg98661 = (function (){var G__98942 = ctx;
var G__98943 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98942,G__98943) : sci.impl.interpreter.interpret.call(null,G__98942,G__98943));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg98649,arg98650,arg98651,arg98652,arg98653,arg98654,arg98655,arg98656,arg98657,arg98658,arg98659,arg98660,arg98661) : f.call(null,arg98649,arg98650,arg98651,arg98652,arg98653,arg98654,arg98655,arg98656,arg98657,arg98658,arg98659,arg98660,arg98661));

break;
case (14):
var arg98662 = (function (){var G__98944 = ctx;
var G__98945 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98944,G__98945) : sci.impl.interpreter.interpret.call(null,G__98944,G__98945));
})();
var args__$1 = cljs.core.rest(args);
var arg98663 = (function (){var G__98946 = ctx;
var G__98947 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98946,G__98947) : sci.impl.interpreter.interpret.call(null,G__98946,G__98947));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98664 = (function (){var G__98948 = ctx;
var G__98949 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98948,G__98949) : sci.impl.interpreter.interpret.call(null,G__98948,G__98949));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98665 = (function (){var G__98950 = ctx;
var G__98951 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98950,G__98951) : sci.impl.interpreter.interpret.call(null,G__98950,G__98951));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98666 = (function (){var G__98952 = ctx;
var G__98953 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98952,G__98953) : sci.impl.interpreter.interpret.call(null,G__98952,G__98953));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98667 = (function (){var G__98954 = ctx;
var G__98955 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98954,G__98955) : sci.impl.interpreter.interpret.call(null,G__98954,G__98955));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98668 = (function (){var G__98956 = ctx;
var G__98957 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98956,G__98957) : sci.impl.interpreter.interpret.call(null,G__98956,G__98957));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98669 = (function (){var G__98958 = ctx;
var G__98959 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98958,G__98959) : sci.impl.interpreter.interpret.call(null,G__98958,G__98959));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98670 = (function (){var G__98960 = ctx;
var G__98961 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98960,G__98961) : sci.impl.interpreter.interpret.call(null,G__98960,G__98961));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg98671 = (function (){var G__98962 = ctx;
var G__98963 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98962,G__98963) : sci.impl.interpreter.interpret.call(null,G__98962,G__98963));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg98672 = (function (){var G__98964 = ctx;
var G__98965 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98964,G__98965) : sci.impl.interpreter.interpret.call(null,G__98964,G__98965));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg98673 = (function (){var G__98966 = ctx;
var G__98967 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98966,G__98967) : sci.impl.interpreter.interpret.call(null,G__98966,G__98967));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg98674 = (function (){var G__98968 = ctx;
var G__98969 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98968,G__98969) : sci.impl.interpreter.interpret.call(null,G__98968,G__98969));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg98675 = (function (){var G__98970 = ctx;
var G__98971 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98970,G__98971) : sci.impl.interpreter.interpret.call(null,G__98970,G__98971));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg98662,arg98663,arg98664,arg98665,arg98666,arg98667,arg98668,arg98669,arg98670,arg98671,arg98672,arg98673,arg98674,arg98675) : f.call(null,arg98662,arg98663,arg98664,arg98665,arg98666,arg98667,arg98668,arg98669,arg98670,arg98671,arg98672,arg98673,arg98674,arg98675));

break;
case (15):
var arg98676 = (function (){var G__98972 = ctx;
var G__98973 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98972,G__98973) : sci.impl.interpreter.interpret.call(null,G__98972,G__98973));
})();
var args__$1 = cljs.core.rest(args);
var arg98677 = (function (){var G__98974 = ctx;
var G__98975 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98974,G__98975) : sci.impl.interpreter.interpret.call(null,G__98974,G__98975));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98678 = (function (){var G__98976 = ctx;
var G__98977 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98976,G__98977) : sci.impl.interpreter.interpret.call(null,G__98976,G__98977));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98679 = (function (){var G__98978 = ctx;
var G__98979 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98978,G__98979) : sci.impl.interpreter.interpret.call(null,G__98978,G__98979));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98680 = (function (){var G__98980 = ctx;
var G__98981 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98980,G__98981) : sci.impl.interpreter.interpret.call(null,G__98980,G__98981));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98681 = (function (){var G__98982 = ctx;
var G__98983 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98982,G__98983) : sci.impl.interpreter.interpret.call(null,G__98982,G__98983));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98682 = (function (){var G__98984 = ctx;
var G__98985 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98984,G__98985) : sci.impl.interpreter.interpret.call(null,G__98984,G__98985));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98683 = (function (){var G__98986 = ctx;
var G__98987 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98986,G__98987) : sci.impl.interpreter.interpret.call(null,G__98986,G__98987));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98684 = (function (){var G__98988 = ctx;
var G__98989 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98988,G__98989) : sci.impl.interpreter.interpret.call(null,G__98988,G__98989));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg98685 = (function (){var G__98990 = ctx;
var G__98991 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98990,G__98991) : sci.impl.interpreter.interpret.call(null,G__98990,G__98991));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg98686 = (function (){var G__98992 = ctx;
var G__98993 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98992,G__98993) : sci.impl.interpreter.interpret.call(null,G__98992,G__98993));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg98687 = (function (){var G__98994 = ctx;
var G__98995 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98994,G__98995) : sci.impl.interpreter.interpret.call(null,G__98994,G__98995));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg98688 = (function (){var G__98996 = ctx;
var G__98997 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98996,G__98997) : sci.impl.interpreter.interpret.call(null,G__98996,G__98997));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg98689 = (function (){var G__98998 = ctx;
var G__98999 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__98998,G__98999) : sci.impl.interpreter.interpret.call(null,G__98998,G__98999));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg98690 = (function (){var G__99000 = ctx;
var G__99001 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99000,G__99001) : sci.impl.interpreter.interpret.call(null,G__99000,G__99001));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg98676,arg98677,arg98678,arg98679,arg98680,arg98681,arg98682,arg98683,arg98684,arg98685,arg98686,arg98687,arg98688,arg98689,arg98690) : f.call(null,arg98676,arg98677,arg98678,arg98679,arg98680,arg98681,arg98682,arg98683,arg98684,arg98685,arg98686,arg98687,arg98688,arg98689,arg98690));

break;
case (16):
var arg98691 = (function (){var G__99002 = ctx;
var G__99003 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99002,G__99003) : sci.impl.interpreter.interpret.call(null,G__99002,G__99003));
})();
var args__$1 = cljs.core.rest(args);
var arg98692 = (function (){var G__99004 = ctx;
var G__99005 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99004,G__99005) : sci.impl.interpreter.interpret.call(null,G__99004,G__99005));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98693 = (function (){var G__99006 = ctx;
var G__99007 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99006,G__99007) : sci.impl.interpreter.interpret.call(null,G__99006,G__99007));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98694 = (function (){var G__99008 = ctx;
var G__99009 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99008,G__99009) : sci.impl.interpreter.interpret.call(null,G__99008,G__99009));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98695 = (function (){var G__99010 = ctx;
var G__99011 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99010,G__99011) : sci.impl.interpreter.interpret.call(null,G__99010,G__99011));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98696 = (function (){var G__99012 = ctx;
var G__99013 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99012,G__99013) : sci.impl.interpreter.interpret.call(null,G__99012,G__99013));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98697 = (function (){var G__99014 = ctx;
var G__99015 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99014,G__99015) : sci.impl.interpreter.interpret.call(null,G__99014,G__99015));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98698 = (function (){var G__99016 = ctx;
var G__99017 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99016,G__99017) : sci.impl.interpreter.interpret.call(null,G__99016,G__99017));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98699 = (function (){var G__99018 = ctx;
var G__99019 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99018,G__99019) : sci.impl.interpreter.interpret.call(null,G__99018,G__99019));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg98700 = (function (){var G__99020 = ctx;
var G__99021 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99020,G__99021) : sci.impl.interpreter.interpret.call(null,G__99020,G__99021));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg98701 = (function (){var G__99022 = ctx;
var G__99023 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99022,G__99023) : sci.impl.interpreter.interpret.call(null,G__99022,G__99023));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg98702 = (function (){var G__99024 = ctx;
var G__99025 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99024,G__99025) : sci.impl.interpreter.interpret.call(null,G__99024,G__99025));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg98703 = (function (){var G__99026 = ctx;
var G__99027 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99026,G__99027) : sci.impl.interpreter.interpret.call(null,G__99026,G__99027));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg98704 = (function (){var G__99028 = ctx;
var G__99029 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99028,G__99029) : sci.impl.interpreter.interpret.call(null,G__99028,G__99029));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg98705 = (function (){var G__99030 = ctx;
var G__99031 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99030,G__99031) : sci.impl.interpreter.interpret.call(null,G__99030,G__99031));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg98706 = (function (){var G__99032 = ctx;
var G__99033 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99032,G__99033) : sci.impl.interpreter.interpret.call(null,G__99032,G__99033));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg98691,arg98692,arg98693,arg98694,arg98695,arg98696,arg98697,arg98698,arg98699,arg98700,arg98701,arg98702,arg98703,arg98704,arg98705,arg98706) : f.call(null,arg98691,arg98692,arg98693,arg98694,arg98695,arg98696,arg98697,arg98698,arg98699,arg98700,arg98701,arg98702,arg98703,arg98704,arg98705,arg98706));

break;
case (17):
var arg98707 = (function (){var G__99034 = ctx;
var G__99035 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99034,G__99035) : sci.impl.interpreter.interpret.call(null,G__99034,G__99035));
})();
var args__$1 = cljs.core.rest(args);
var arg98708 = (function (){var G__99036 = ctx;
var G__99037 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99036,G__99037) : sci.impl.interpreter.interpret.call(null,G__99036,G__99037));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98709 = (function (){var G__99038 = ctx;
var G__99039 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99038,G__99039) : sci.impl.interpreter.interpret.call(null,G__99038,G__99039));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98710 = (function (){var G__99040 = ctx;
var G__99041 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99040,G__99041) : sci.impl.interpreter.interpret.call(null,G__99040,G__99041));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98711 = (function (){var G__99042 = ctx;
var G__99043 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99042,G__99043) : sci.impl.interpreter.interpret.call(null,G__99042,G__99043));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98712 = (function (){var G__99044 = ctx;
var G__99045 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99044,G__99045) : sci.impl.interpreter.interpret.call(null,G__99044,G__99045));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98713 = (function (){var G__99046 = ctx;
var G__99047 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99046,G__99047) : sci.impl.interpreter.interpret.call(null,G__99046,G__99047));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98714 = (function (){var G__99048 = ctx;
var G__99049 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99048,G__99049) : sci.impl.interpreter.interpret.call(null,G__99048,G__99049));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98715 = (function (){var G__99050 = ctx;
var G__99051 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99050,G__99051) : sci.impl.interpreter.interpret.call(null,G__99050,G__99051));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg98716 = (function (){var G__99052 = ctx;
var G__99053 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99052,G__99053) : sci.impl.interpreter.interpret.call(null,G__99052,G__99053));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg98717 = (function (){var G__99054 = ctx;
var G__99055 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99054,G__99055) : sci.impl.interpreter.interpret.call(null,G__99054,G__99055));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg98718 = (function (){var G__99056 = ctx;
var G__99057 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99056,G__99057) : sci.impl.interpreter.interpret.call(null,G__99056,G__99057));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg98719 = (function (){var G__99058 = ctx;
var G__99059 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99058,G__99059) : sci.impl.interpreter.interpret.call(null,G__99058,G__99059));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg98720 = (function (){var G__99060 = ctx;
var G__99061 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99060,G__99061) : sci.impl.interpreter.interpret.call(null,G__99060,G__99061));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg98721 = (function (){var G__99062 = ctx;
var G__99063 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99062,G__99063) : sci.impl.interpreter.interpret.call(null,G__99062,G__99063));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg98722 = (function (){var G__99064 = ctx;
var G__99065 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99064,G__99065) : sci.impl.interpreter.interpret.call(null,G__99064,G__99065));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg98723 = (function (){var G__99066 = ctx;
var G__99067 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99066,G__99067) : sci.impl.interpreter.interpret.call(null,G__99066,G__99067));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg98707,arg98708,arg98709,arg98710,arg98711,arg98712,arg98713,arg98714,arg98715,arg98716,arg98717,arg98718,arg98719,arg98720,arg98721,arg98722,arg98723) : f.call(null,arg98707,arg98708,arg98709,arg98710,arg98711,arg98712,arg98713,arg98714,arg98715,arg98716,arg98717,arg98718,arg98719,arg98720,arg98721,arg98722,arg98723));

break;
case (18):
var arg98724 = (function (){var G__99068 = ctx;
var G__99069 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99068,G__99069) : sci.impl.interpreter.interpret.call(null,G__99068,G__99069));
})();
var args__$1 = cljs.core.rest(args);
var arg98725 = (function (){var G__99070 = ctx;
var G__99071 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99070,G__99071) : sci.impl.interpreter.interpret.call(null,G__99070,G__99071));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98726 = (function (){var G__99072 = ctx;
var G__99073 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99072,G__99073) : sci.impl.interpreter.interpret.call(null,G__99072,G__99073));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98727 = (function (){var G__99074 = ctx;
var G__99075 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99074,G__99075) : sci.impl.interpreter.interpret.call(null,G__99074,G__99075));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98728 = (function (){var G__99076 = ctx;
var G__99077 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99076,G__99077) : sci.impl.interpreter.interpret.call(null,G__99076,G__99077));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98729 = (function (){var G__99078 = ctx;
var G__99079 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99078,G__99079) : sci.impl.interpreter.interpret.call(null,G__99078,G__99079));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98730 = (function (){var G__99080 = ctx;
var G__99081 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99080,G__99081) : sci.impl.interpreter.interpret.call(null,G__99080,G__99081));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98731 = (function (){var G__99082 = ctx;
var G__99083 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99082,G__99083) : sci.impl.interpreter.interpret.call(null,G__99082,G__99083));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98732 = (function (){var G__99084 = ctx;
var G__99085 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99084,G__99085) : sci.impl.interpreter.interpret.call(null,G__99084,G__99085));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg98733 = (function (){var G__99086 = ctx;
var G__99087 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99086,G__99087) : sci.impl.interpreter.interpret.call(null,G__99086,G__99087));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg98734 = (function (){var G__99088 = ctx;
var G__99089 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99088,G__99089) : sci.impl.interpreter.interpret.call(null,G__99088,G__99089));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg98735 = (function (){var G__99090 = ctx;
var G__99091 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99090,G__99091) : sci.impl.interpreter.interpret.call(null,G__99090,G__99091));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg98736 = (function (){var G__99092 = ctx;
var G__99093 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99092,G__99093) : sci.impl.interpreter.interpret.call(null,G__99092,G__99093));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg98737 = (function (){var G__99094 = ctx;
var G__99095 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99094,G__99095) : sci.impl.interpreter.interpret.call(null,G__99094,G__99095));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg98738 = (function (){var G__99096 = ctx;
var G__99097 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99096,G__99097) : sci.impl.interpreter.interpret.call(null,G__99096,G__99097));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg98739 = (function (){var G__99098 = ctx;
var G__99099 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99098,G__99099) : sci.impl.interpreter.interpret.call(null,G__99098,G__99099));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg98740 = (function (){var G__99100 = ctx;
var G__99101 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99100,G__99101) : sci.impl.interpreter.interpret.call(null,G__99100,G__99101));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg98741 = (function (){var G__99102 = ctx;
var G__99103 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99102,G__99103) : sci.impl.interpreter.interpret.call(null,G__99102,G__99103));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg98724,arg98725,arg98726,arg98727,arg98728,arg98729,arg98730,arg98731,arg98732,arg98733,arg98734,arg98735,arg98736,arg98737,arg98738,arg98739,arg98740,arg98741) : f.call(null,arg98724,arg98725,arg98726,arg98727,arg98728,arg98729,arg98730,arg98731,arg98732,arg98733,arg98734,arg98735,arg98736,arg98737,arg98738,arg98739,arg98740,arg98741));

break;
case (19):
var arg98742 = (function (){var G__99104 = ctx;
var G__99105 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99104,G__99105) : sci.impl.interpreter.interpret.call(null,G__99104,G__99105));
})();
var args__$1 = cljs.core.rest(args);
var arg98743 = (function (){var G__99106 = ctx;
var G__99107 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99106,G__99107) : sci.impl.interpreter.interpret.call(null,G__99106,G__99107));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg98744 = (function (){var G__99108 = ctx;
var G__99109 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99108,G__99109) : sci.impl.interpreter.interpret.call(null,G__99108,G__99109));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg98745 = (function (){var G__99110 = ctx;
var G__99111 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99110,G__99111) : sci.impl.interpreter.interpret.call(null,G__99110,G__99111));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg98746 = (function (){var G__99112 = ctx;
var G__99113 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99112,G__99113) : sci.impl.interpreter.interpret.call(null,G__99112,G__99113));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg98747 = (function (){var G__99114 = ctx;
var G__99115 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99114,G__99115) : sci.impl.interpreter.interpret.call(null,G__99114,G__99115));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg98748 = (function (){var G__99116 = ctx;
var G__99117 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99116,G__99117) : sci.impl.interpreter.interpret.call(null,G__99116,G__99117));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg98749 = (function (){var G__99118 = ctx;
var G__99119 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99118,G__99119) : sci.impl.interpreter.interpret.call(null,G__99118,G__99119));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg98750 = (function (){var G__99120 = ctx;
var G__99121 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99120,G__99121) : sci.impl.interpreter.interpret.call(null,G__99120,G__99121));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg98751 = (function (){var G__99122 = ctx;
var G__99123 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99122,G__99123) : sci.impl.interpreter.interpret.call(null,G__99122,G__99123));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg98752 = (function (){var G__99124 = ctx;
var G__99125 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99124,G__99125) : sci.impl.interpreter.interpret.call(null,G__99124,G__99125));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg98753 = (function (){var G__99126 = ctx;
var G__99127 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99126,G__99127) : sci.impl.interpreter.interpret.call(null,G__99126,G__99127));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg98754 = (function (){var G__99128 = ctx;
var G__99129 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99128,G__99129) : sci.impl.interpreter.interpret.call(null,G__99128,G__99129));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg98755 = (function (){var G__99130 = ctx;
var G__99131 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99130,G__99131) : sci.impl.interpreter.interpret.call(null,G__99130,G__99131));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg98756 = (function (){var G__99132 = ctx;
var G__99133 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99132,G__99133) : sci.impl.interpreter.interpret.call(null,G__99132,G__99133));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg98757 = (function (){var G__99134 = ctx;
var G__99135 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99134,G__99135) : sci.impl.interpreter.interpret.call(null,G__99134,G__99135));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg98758 = (function (){var G__99136 = ctx;
var G__99137 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99136,G__99137) : sci.impl.interpreter.interpret.call(null,G__99136,G__99137));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg98759 = (function (){var G__99138 = ctx;
var G__99139 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99138,G__99139) : sci.impl.interpreter.interpret.call(null,G__99138,G__99139));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg98760 = (function (){var G__99140 = ctx;
var G__99141 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99140,G__99141) : sci.impl.interpreter.interpret.call(null,G__99140,G__99141));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg98742,arg98743,arg98744,arg98745,arg98746,arg98747,arg98748,arg98749,arg98750,arg98751,arg98752,arg98753,arg98754,arg98755,arg98756,arg98757,arg98758,arg98759,arg98760) : f.call(null,arg98742,arg98743,arg98744,arg98745,arg98746,arg98747,arg98748,arg98749,arg98750,arg98751,arg98752,arg98753,arg98754,arg98755,arg98756,arg98757,arg98758,arg98759,arg98760));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__99142 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__99142)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__99142)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__99142)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__99142)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__99142)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__99142)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__99143 = ctx;
var G__99144 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99143,G__99144) : sci.impl.interpreter.interpret.call(null,G__99143,G__99144));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__99142)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__99142)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__99142)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__99142)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__99142)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__99142)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__99142)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__99142)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__99142)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__99145 = ctx;
var G__99146 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99145,G__99146) : sci.impl.interpreter.interpret.call(null,G__99145,G__99146));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__99142)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__99142)){
return (new cljs.core.LazySeq(null,(function (){var G__99147 = ctx;
var G__99148 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__99147,G__99148) : sci.impl.interpreter.interpret.call(null,G__99147,G__99148));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__99142)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__99142)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__99142)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__99142)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__99142)].join('')));

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
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e99149){if((e99149 instanceof Error)){
var e = e99149;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e99149;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__99156 = op;
var G__99156__$1 = (((G__99156 instanceof cljs.core.Keyword))?G__99156.fqn:null);
switch (G__99156__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__99153_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__99153_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__99153_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__99154_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__99154_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__99154_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__99155_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__99155_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__99155_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__99272 = cljs.core.rest(exprs);
var G__99273 = (function (){var G__99159 = ctx;
var G__99160 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__99159,G__99160) : sci.impl.interpreter.eval_form.call(null,G__99159,G__99160));
})();
exprs = G__99272;
ret = G__99273;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__99278 = ret__$1;
ret = G__99278;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__99162 = arguments.length;
switch (G__99162) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
