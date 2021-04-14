goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80995 = arguments.length;
var i__4737__auto___80996 = (0);
while(true){
if((i__4737__auto___80996 < len__4736__auto___80995)){
args__4742__auto__.push((arguments[i__4737__auto___80996]));

var G__80997 = (i__4737__auto___80996 + (1));
i__4737__auto___80996 = G__80997;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq80962){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80962));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81000 = arguments.length;
var i__4737__auto___81001 = (0);
while(true){
if((i__4737__auto___81001 < len__4736__auto___81000)){
args__4742__auto__.push((arguments[i__4737__auto___81001]));

var G__81002 = (i__4737__auto___81001 + (1));
i__4737__auto___81001 = G__81002;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq80967){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80967));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__80970 = "";
var G__80970__$1 = (cljs.core.truth_(re.ignoreCase)?[G__80970,"i"].join(''):G__80970);
var G__80970__$2 = (cljs.core.truth_(re.multiline)?[G__80970__$1,"m"].join(''):G__80970__$1);
if(cljs.core.truth_(re.unicode)){
return [G__80970__$2,"u"].join('');
} else {
return G__80970__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
