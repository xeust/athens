goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__60277 = arguments.length;
switch (G__60277) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__60280 = cljs.core.seq(Object.keys(localStorage));
var chunk__60281 = null;
var count__60282 = (0);
var i__60283 = (0);
while(true){
if((i__60283 < count__60282)){
var k = chunk__60281.cljs$core$IIndexed$_nth$arity$2(null,i__60283);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__60286 = seq__60280;
var G__60287 = chunk__60281;
var G__60288 = count__60282;
var G__60289 = (i__60283 + (1));
seq__60280 = G__60286;
chunk__60281 = G__60287;
count__60282 = G__60288;
i__60283 = G__60289;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60280);
if(temp__5735__auto__){
var seq__60280__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60280__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60280__$1);
var G__60290 = cljs.core.chunk_rest(seq__60280__$1);
var G__60291 = c__4556__auto__;
var G__60292 = cljs.core.count(c__4556__auto__);
var G__60293 = (0);
seq__60280 = G__60290;
chunk__60281 = G__60291;
count__60282 = G__60292;
i__60283 = G__60293;
continue;
} else {
var k = cljs.core.first(seq__60280__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__60295 = cljs.core.next(seq__60280__$1);
var G__60296 = null;
var G__60297 = (0);
var G__60298 = (0);
seq__60280 = G__60295;
chunk__60281 = G__60296;
count__60282 = G__60297;
i__60283 = G__60298;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
