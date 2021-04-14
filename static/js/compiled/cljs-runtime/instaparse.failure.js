goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__81004 = (line + (1));
var G__81005 = (1);
var G__81006 = (counter + (1));
line = G__81004;
col = G__81005;
counter = G__81006;
continue;
} else {
var G__81008 = line;
var G__81009 = (col + (1));
var G__81010 = (counter + (1));
line = G__81008;
col = G__81009;
counter = G__81010;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__81011 = cljs.core.next(chars);
var G__81012 = (n__$1 - (1));
chars = G__81011;
n__$1 = G__81012;
continue;
} else {
var G__81013 = cljs.core.next(chars);
var G__81014 = n__$1;
chars = G__81013;
n__$1 = G__81014;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__80973){
var map__80974 = p__80973;
var map__80974__$1 = (((((!((map__80974 == null))))?(((((map__80974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80974):map__80974);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80974__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80974__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80974__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80974__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__80982_81015 = cljs.core.seq(full_reasons);
var chunk__80987_81016 = null;
var count__80988_81017 = (0);
var i__80989_81018 = (0);
while(true){
if((i__80989_81018 < count__80988_81017)){
var r_81019 = chunk__80987_81016.cljs$core$IIndexed$_nth$arity$2(null,i__80989_81018);
instaparse.failure.print_reason(r_81019);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__81020 = seq__80982_81015;
var G__81021 = chunk__80987_81016;
var G__81022 = count__80988_81017;
var G__81023 = (i__80989_81018 + (1));
seq__80982_81015 = G__81020;
chunk__80987_81016 = G__81021;
count__80988_81017 = G__81022;
i__80989_81018 = G__81023;
continue;
} else {
var temp__5735__auto___81024 = cljs.core.seq(seq__80982_81015);
if(temp__5735__auto___81024){
var seq__80982_81026__$1 = temp__5735__auto___81024;
if(cljs.core.chunked_seq_QMARK_(seq__80982_81026__$1)){
var c__4556__auto___81027 = cljs.core.chunk_first(seq__80982_81026__$1);
var G__81028 = cljs.core.chunk_rest(seq__80982_81026__$1);
var G__81029 = c__4556__auto___81027;
var G__81030 = cljs.core.count(c__4556__auto___81027);
var G__81031 = (0);
seq__80982_81015 = G__81028;
chunk__80987_81016 = G__81029;
count__80988_81017 = G__81030;
i__80989_81018 = G__81031;
continue;
} else {
var r_81032 = cljs.core.first(seq__80982_81026__$1);
instaparse.failure.print_reason(r_81032);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__81033 = cljs.core.next(seq__80982_81026__$1);
var G__81034 = null;
var G__81035 = (0);
var G__81036 = (0);
seq__80982_81015 = G__81033;
chunk__80987_81016 = G__81034;
count__80988_81017 = G__81035;
i__80989_81018 = G__81036;
continue;
}
} else {
}
}
break;
}

var seq__80991 = cljs.core.seq(partial_reasons);
var chunk__80992 = null;
var count__80993 = (0);
var i__80994 = (0);
while(true){
if((i__80994 < count__80993)){
var r = chunk__80992.cljs$core$IIndexed$_nth$arity$2(null,i__80994);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__81037 = seq__80991;
var G__81038 = chunk__80992;
var G__81039 = count__80993;
var G__81040 = (i__80994 + (1));
seq__80991 = G__81037;
chunk__80992 = G__81038;
count__80993 = G__81039;
i__80994 = G__81040;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__80991);
if(temp__5735__auto__){
var seq__80991__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80991__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__80991__$1);
var G__81043 = cljs.core.chunk_rest(seq__80991__$1);
var G__81044 = c__4556__auto__;
var G__81045 = cljs.core.count(c__4556__auto__);
var G__81046 = (0);
seq__80991 = G__81043;
chunk__80992 = G__81044;
count__80993 = G__81045;
i__80994 = G__81046;
continue;
} else {
var r = cljs.core.first(seq__80991__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__81047 = cljs.core.next(seq__80991__$1);
var G__81048 = null;
var G__81049 = (0);
var G__81050 = (0);
seq__80991 = G__81047;
chunk__80992 = G__81048;
count__80993 = G__81049;
i__80994 = G__81050;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
