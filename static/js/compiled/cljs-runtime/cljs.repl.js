goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__86710){
var map__86711 = p__86710;
var map__86711__$1 = (((((!((map__86711 == null))))?(((((map__86711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86711):map__86711);
var m = map__86711__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86711__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86711__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__86713_86945 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__86714_86946 = null;
var count__86715_86947 = (0);
var i__86716_86948 = (0);
while(true){
if((i__86716_86948 < count__86715_86947)){
var f_86949 = chunk__86714_86946.cljs$core$IIndexed$_nth$arity$2(null,i__86716_86948);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_86949], 0));


var G__86950 = seq__86713_86945;
var G__86952 = chunk__86714_86946;
var G__86953 = count__86715_86947;
var G__86954 = (i__86716_86948 + (1));
seq__86713_86945 = G__86950;
chunk__86714_86946 = G__86952;
count__86715_86947 = G__86953;
i__86716_86948 = G__86954;
continue;
} else {
var temp__5735__auto___86955 = cljs.core.seq(seq__86713_86945);
if(temp__5735__auto___86955){
var seq__86713_86957__$1 = temp__5735__auto___86955;
if(cljs.core.chunked_seq_QMARK_(seq__86713_86957__$1)){
var c__4556__auto___86958 = cljs.core.chunk_first(seq__86713_86957__$1);
var G__86959 = cljs.core.chunk_rest(seq__86713_86957__$1);
var G__86960 = c__4556__auto___86958;
var G__86961 = cljs.core.count(c__4556__auto___86958);
var G__86962 = (0);
seq__86713_86945 = G__86959;
chunk__86714_86946 = G__86960;
count__86715_86947 = G__86961;
i__86716_86948 = G__86962;
continue;
} else {
var f_86963 = cljs.core.first(seq__86713_86957__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_86963], 0));


var G__86964 = cljs.core.next(seq__86713_86957__$1);
var G__86965 = null;
var G__86966 = (0);
var G__86967 = (0);
seq__86713_86945 = G__86964;
chunk__86714_86946 = G__86965;
count__86715_86947 = G__86966;
i__86716_86948 = G__86967;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_86969 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_86969], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_86969)))?cljs.core.second(arglists_86969):arglists_86969)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__86729_86974 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__86730_86975 = null;
var count__86731_86976 = (0);
var i__86732_86977 = (0);
while(true){
if((i__86732_86977 < count__86731_86976)){
var vec__86748_86979 = chunk__86730_86975.cljs$core$IIndexed$_nth$arity$2(null,i__86732_86977);
var name_86980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86748_86979,(0),null);
var map__86751_86981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86748_86979,(1),null);
var map__86751_86982__$1 = (((((!((map__86751_86981 == null))))?(((((map__86751_86981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86751_86981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86751_86981):map__86751_86981);
var doc_86983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86751_86982__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_86984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86751_86982__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_86980], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_86984], 0));

if(cljs.core.truth_(doc_86983)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_86983], 0));
} else {
}


var G__86989 = seq__86729_86974;
var G__86990 = chunk__86730_86975;
var G__86991 = count__86731_86976;
var G__86992 = (i__86732_86977 + (1));
seq__86729_86974 = G__86989;
chunk__86730_86975 = G__86990;
count__86731_86976 = G__86991;
i__86732_86977 = G__86992;
continue;
} else {
var temp__5735__auto___86996 = cljs.core.seq(seq__86729_86974);
if(temp__5735__auto___86996){
var seq__86729_87000__$1 = temp__5735__auto___86996;
if(cljs.core.chunked_seq_QMARK_(seq__86729_87000__$1)){
var c__4556__auto___87001 = cljs.core.chunk_first(seq__86729_87000__$1);
var G__87002 = cljs.core.chunk_rest(seq__86729_87000__$1);
var G__87003 = c__4556__auto___87001;
var G__87004 = cljs.core.count(c__4556__auto___87001);
var G__87005 = (0);
seq__86729_86974 = G__87002;
chunk__86730_86975 = G__87003;
count__86731_86976 = G__87004;
i__86732_86977 = G__87005;
continue;
} else {
var vec__86765_87010 = cljs.core.first(seq__86729_87000__$1);
var name_87011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86765_87010,(0),null);
var map__86768_87012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86765_87010,(1),null);
var map__86768_87013__$1 = (((((!((map__86768_87012 == null))))?(((((map__86768_87012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86768_87012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86768_87012):map__86768_87012);
var doc_87014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86768_87013__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_87015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86768_87013__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_87011], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_87015], 0));

if(cljs.core.truth_(doc_87014)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_87014], 0));
} else {
}


var G__87038 = cljs.core.next(seq__86729_87000__$1);
var G__87039 = null;
var G__87040 = (0);
var G__87041 = (0);
seq__86729_86974 = G__87038;
chunk__86730_86975 = G__87039;
count__86731_86976 = G__87040;
i__86732_86977 = G__87041;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__86777 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__86778 = null;
var count__86779 = (0);
var i__86780 = (0);
while(true){
if((i__86780 < count__86779)){
var role = chunk__86778.cljs$core$IIndexed$_nth$arity$2(null,i__86780);
var temp__5735__auto___87042__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___87042__$1)){
var spec_87043 = temp__5735__auto___87042__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_87043)], 0));
} else {
}


var G__87044 = seq__86777;
var G__87045 = chunk__86778;
var G__87046 = count__86779;
var G__87047 = (i__86780 + (1));
seq__86777 = G__87044;
chunk__86778 = G__87045;
count__86779 = G__87046;
i__86780 = G__87047;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__86777);
if(temp__5735__auto____$1){
var seq__86777__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__86777__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__86777__$1);
var G__87048 = cljs.core.chunk_rest(seq__86777__$1);
var G__87049 = c__4556__auto__;
var G__87050 = cljs.core.count(c__4556__auto__);
var G__87051 = (0);
seq__86777 = G__87048;
chunk__86778 = G__87049;
count__86779 = G__87050;
i__86780 = G__87051;
continue;
} else {
var role = cljs.core.first(seq__86777__$1);
var temp__5735__auto___87052__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___87052__$2)){
var spec_87053 = temp__5735__auto___87052__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_87053)], 0));
} else {
}


var G__87054 = cljs.core.next(seq__86777__$1);
var G__87055 = null;
var G__87056 = (0);
var G__87057 = (0);
seq__86777 = G__87054;
chunk__86778 = G__87055;
count__86779 = G__87056;
i__86780 = G__87057;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__87058 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__87059 = cljs.core.ex_cause(t);
via = G__87058;
t = G__87059;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__86842 = datafied_throwable;
var map__86842__$1 = (((((!((map__86842 == null))))?(((((map__86842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86842):map__86842);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86842__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86842__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__86842__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__86843 = cljs.core.last(via);
var map__86843__$1 = (((((!((map__86843 == null))))?(((((map__86843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86843):map__86843);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86843__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86843__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86843__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__86844 = data;
var map__86844__$1 = (((((!((map__86844 == null))))?(((((map__86844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86844):map__86844);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86844__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86844__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86844__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__86846 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__86846__$1 = (((((!((map__86846 == null))))?(((((map__86846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86846):map__86846);
var top_data = map__86846__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86846__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__86851 = phase;
var G__86851__$1 = (((G__86851 instanceof cljs.core.Keyword))?G__86851.fqn:null);
switch (G__86851__$1) {
case "read-source":
var map__86854 = data;
var map__86854__$1 = (((((!((map__86854 == null))))?(((((map__86854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86854):map__86854);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86854__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86854__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__86860 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__86860__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86860,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__86860);
var G__86860__$2 = (cljs.core.truth_((function (){var fexpr__86861 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__86861.cljs$core$IFn$_invoke$arity$1 ? fexpr__86861.cljs$core$IFn$_invoke$arity$1(source) : fexpr__86861.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__86860__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__86860__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86860__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__86860__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__86863 = top_data;
var G__86863__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86863,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__86863);
var G__86863__$2 = (cljs.core.truth_((function (){var fexpr__86865 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__86865.cljs$core$IFn$_invoke$arity$1 ? fexpr__86865.cljs$core$IFn$_invoke$arity$1(source) : fexpr__86865.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__86863__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__86863__$1);
var G__86863__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86863__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__86863__$2);
var G__86863__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86863__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__86863__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86863__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__86863__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__86866 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86866,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86866,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86866,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86866,(3),null);
var G__86869 = top_data;
var G__86869__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86869,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__86869);
var G__86869__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86869__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__86869__$1);
var G__86869__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86869__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__86869__$2);
var G__86869__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86869__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__86869__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86869__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__86869__$4;
}

break;
case "execution":
var vec__86870 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86870,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86870,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86870,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86870,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__86832_SHARP_){
var or__4126__auto__ = (p1__86832_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__86874 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__86874.cljs$core$IFn$_invoke$arity$1 ? fexpr__86874.cljs$core$IFn$_invoke$arity$1(p1__86832_SHARP_) : fexpr__86874.call(null,p1__86832_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__86875 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__86875__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86875,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__86875);
var G__86875__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86875__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__86875__$1);
var G__86875__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86875__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__86875__$2);
var G__86875__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86875__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__86875__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86875__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__86875__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86851__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__86885){
var map__86886 = p__86885;
var map__86886__$1 = (((((!((map__86886 == null))))?(((((map__86886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86886):map__86886);
var triage_data = map__86886__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86886__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86886__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86886__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86886__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86886__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86886__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86886__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86886__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__86888 = phase;
var G__86888__$1 = (((G__86888 instanceof cljs.core.Keyword))?G__86888.fqn:null);
switch (G__86888__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__86889 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__86890 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__86891 = loc;
var G__86892 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__86893_87069 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__86894_87070 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__86895_87071 = true;
var _STAR_print_fn_STAR__temp_val__86896_87072 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__86895_87071);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__86896_87072);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86883_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__86883_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__86894_87070);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__86893_87069);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__86889,G__86890,G__86891,G__86892) : format.call(null,G__86889,G__86890,G__86891,G__86892));

break;
case "macroexpansion":
var G__86897 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__86898 = cause_type;
var G__86899 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__86900 = loc;
var G__86901 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__86897,G__86898,G__86899,G__86900,G__86901) : format.call(null,G__86897,G__86898,G__86899,G__86900,G__86901));

break;
case "compile-syntax-check":
var G__86908 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__86909 = cause_type;
var G__86910 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__86911 = loc;
var G__86912 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__86908,G__86909,G__86910,G__86911,G__86912) : format.call(null,G__86908,G__86909,G__86910,G__86911,G__86912));

break;
case "compilation":
var G__86913 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__86914 = cause_type;
var G__86915 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__86916 = loc;
var G__86917 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__86913,G__86914,G__86915,G__86916,G__86917) : format.call(null,G__86913,G__86914,G__86915,G__86916,G__86917));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__86918 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__86919 = symbol;
var G__86920 = loc;
var G__86921 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__86923_87078 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__86924_87079 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__86925_87080 = true;
var _STAR_print_fn_STAR__temp_val__86926_87081 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__86925_87080);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__86926_87081);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86884_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__86884_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__86924_87079);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__86923_87078);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__86918,G__86919,G__86920,G__86921) : format.call(null,G__86918,G__86919,G__86920,G__86921));
} else {
var G__86929 = "Execution error%s at %s(%s).\n%s\n";
var G__86930 = cause_type;
var G__86931 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__86932 = loc;
var G__86933 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__86929,G__86930,G__86931,G__86932,G__86933) : format.call(null,G__86929,G__86930,G__86931,G__86932,G__86933));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86888__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
