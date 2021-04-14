goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73774 = arguments.length;
var i__4737__auto___73775 = (0);
while(true){
if((i__4737__auto___73775 < len__4736__auto___73774)){
args__4742__auto__.push((arguments[i__4737__auto___73775]));

var G__73776 = (i__4737__auto___73775 + (1));
i__4737__auto___73775 = G__73776;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq73487){
var G__73488 = cljs.core.first(seq73487);
var seq73487__$1 = cljs.core.next(seq73487);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73488,seq73487__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__73498 = cljs.core.seq(sources);
var chunk__73499 = null;
var count__73500 = (0);
var i__73501 = (0);
while(true){
if((i__73501 < count__73500)){
var map__73519 = chunk__73499.cljs$core$IIndexed$_nth$arity$2(null,i__73501);
var map__73519__$1 = (((((!((map__73519 == null))))?(((((map__73519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73519):map__73519);
var src = map__73519__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73519__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73519__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73519__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73519__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e73527){var e_73777 = e73527;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73777);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73777.message)].join('')));
}

var G__73778 = seq__73498;
var G__73779 = chunk__73499;
var G__73780 = count__73500;
var G__73781 = (i__73501 + (1));
seq__73498 = G__73778;
chunk__73499 = G__73779;
count__73500 = G__73780;
i__73501 = G__73781;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73498);
if(temp__5735__auto__){
var seq__73498__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73498__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73498__$1);
var G__73782 = cljs.core.chunk_rest(seq__73498__$1);
var G__73783 = c__4556__auto__;
var G__73784 = cljs.core.count(c__4556__auto__);
var G__73785 = (0);
seq__73498 = G__73782;
chunk__73499 = G__73783;
count__73500 = G__73784;
i__73501 = G__73785;
continue;
} else {
var map__73531 = cljs.core.first(seq__73498__$1);
var map__73531__$1 = (((((!((map__73531 == null))))?(((((map__73531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73531):map__73531);
var src = map__73531__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73531__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73531__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73531__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73531__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e73537){var e_73786 = e73537;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_73786);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_73786.message)].join('')));
}

var G__73787 = cljs.core.next(seq__73498__$1);
var G__73788 = null;
var G__73789 = (0);
var G__73790 = (0);
seq__73498 = G__73787;
chunk__73499 = G__73788;
count__73500 = G__73789;
i__73501 = G__73790;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__73542 = cljs.core.seq(js_requires);
var chunk__73543 = null;
var count__73544 = (0);
var i__73545 = (0);
while(true){
if((i__73545 < count__73544)){
var js_ns = chunk__73543.cljs$core$IIndexed$_nth$arity$2(null,i__73545);
var require_str_73795 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73795);


var G__73796 = seq__73542;
var G__73797 = chunk__73543;
var G__73798 = count__73544;
var G__73799 = (i__73545 + (1));
seq__73542 = G__73796;
chunk__73543 = G__73797;
count__73544 = G__73798;
i__73545 = G__73799;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73542);
if(temp__5735__auto__){
var seq__73542__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73542__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73542__$1);
var G__73801 = cljs.core.chunk_rest(seq__73542__$1);
var G__73802 = c__4556__auto__;
var G__73803 = cljs.core.count(c__4556__auto__);
var G__73804 = (0);
seq__73542 = G__73801;
chunk__73543 = G__73802;
count__73544 = G__73803;
i__73545 = G__73804;
continue;
} else {
var js_ns = cljs.core.first(seq__73542__$1);
var require_str_73805 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_73805);


var G__73806 = cljs.core.next(seq__73542__$1);
var G__73807 = null;
var G__73808 = (0);
var G__73809 = (0);
seq__73542 = G__73806;
chunk__73543 = G__73807;
count__73544 = G__73808;
i__73545 = G__73809;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__73578){
var map__73579 = p__73578;
var map__73579__$1 = (((((!((map__73579 == null))))?(((((map__73579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73579):map__73579);
var msg = map__73579__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73579__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73579__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73581(s__73582){
return (new cljs.core.LazySeq(null,(function (){
var s__73582__$1 = s__73582;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73582__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__73591 = cljs.core.first(xs__6292__auto__);
var map__73591__$1 = (((((!((map__73591 == null))))?(((((map__73591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73591):map__73591);
var src = map__73591__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73591__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73591__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__73582__$1,map__73591,map__73591__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73579,map__73579__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73581_$_iter__73583(s__73584){
return (new cljs.core.LazySeq(null,((function (s__73582__$1,map__73591,map__73591__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73579,map__73579__$1,msg,info,reload_info){
return (function (){
var s__73584__$1 = s__73584;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__73584__$1);
if(temp__5735__auto____$1){
var s__73584__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73584__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__73584__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__73586 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__73585 = (0);
while(true){
if((i__73585 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__73585);
cljs.core.chunk_append(b__73586,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__73810 = (i__73585 + (1));
i__73585 = G__73810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73586),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73581_$_iter__73583(cljs.core.chunk_rest(s__73584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73586),null);
}
} else {
var warning = cljs.core.first(s__73584__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73581_$_iter__73583(cljs.core.rest(s__73584__$2)));
}
} else {
return null;
}
break;
}
});})(s__73582__$1,map__73591,map__73591__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73579,map__73579__$1,msg,info,reload_info))
,null,null));
});})(s__73582__$1,map__73591,map__73591__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__73579,map__73579__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__73581(cljs.core.rest(s__73582__$1)));
} else {
var G__73811 = cljs.core.rest(s__73582__$1);
s__73582__$1 = G__73811;
continue;
}
} else {
var G__73812 = cljs.core.rest(s__73582__$1);
s__73582__$1 = G__73812;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__73597_73813 = cljs.core.seq(warnings);
var chunk__73598_73814 = null;
var count__73599_73815 = (0);
var i__73600_73816 = (0);
while(true){
if((i__73600_73816 < count__73599_73815)){
var map__73608_73817 = chunk__73598_73814.cljs$core$IIndexed$_nth$arity$2(null,i__73600_73816);
var map__73608_73818__$1 = (((((!((map__73608_73817 == null))))?(((((map__73608_73817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73608_73817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73608_73817):map__73608_73817);
var w_73819 = map__73608_73818__$1;
var msg_73820__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73608_73818__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_73821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73608_73818__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_73822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73608_73818__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_73823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73608_73818__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_73823)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_73821),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_73822),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_73820__$1)].join(''));


var G__73824 = seq__73597_73813;
var G__73825 = chunk__73598_73814;
var G__73826 = count__73599_73815;
var G__73827 = (i__73600_73816 + (1));
seq__73597_73813 = G__73824;
chunk__73598_73814 = G__73825;
count__73599_73815 = G__73826;
i__73600_73816 = G__73827;
continue;
} else {
var temp__5735__auto___73828 = cljs.core.seq(seq__73597_73813);
if(temp__5735__auto___73828){
var seq__73597_73829__$1 = temp__5735__auto___73828;
if(cljs.core.chunked_seq_QMARK_(seq__73597_73829__$1)){
var c__4556__auto___73830 = cljs.core.chunk_first(seq__73597_73829__$1);
var G__73831 = cljs.core.chunk_rest(seq__73597_73829__$1);
var G__73832 = c__4556__auto___73830;
var G__73833 = cljs.core.count(c__4556__auto___73830);
var G__73834 = (0);
seq__73597_73813 = G__73831;
chunk__73598_73814 = G__73832;
count__73599_73815 = G__73833;
i__73600_73816 = G__73834;
continue;
} else {
var map__73613_73835 = cljs.core.first(seq__73597_73829__$1);
var map__73613_73836__$1 = (((((!((map__73613_73835 == null))))?(((((map__73613_73835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73613_73835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73613_73835):map__73613_73835);
var w_73837 = map__73613_73836__$1;
var msg_73838__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73613_73836__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_73839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73613_73836__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_73840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73613_73836__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_73841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73613_73836__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_73841)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_73839),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_73840),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_73838__$1)].join(''));


var G__73842 = cljs.core.next(seq__73597_73829__$1);
var G__73843 = null;
var G__73844 = (0);
var G__73845 = (0);
seq__73597_73813 = G__73842;
chunk__73598_73814 = G__73843;
count__73599_73815 = G__73844;
i__73600_73816 = G__73845;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__73577_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__73577_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__73620){
var map__73621 = p__73620;
var map__73621__$1 = (((((!((map__73621 == null))))?(((((map__73621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73621):map__73621);
var msg = map__73621__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73621__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__73626 = cljs.core.seq(updates);
var chunk__73630 = null;
var count__73631 = (0);
var i__73632 = (0);
while(true){
if((i__73632 < count__73631)){
var path = chunk__73630.cljs$core$IIndexed$_nth$arity$2(null,i__73632);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73680_73846 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73683_73847 = null;
var count__73684_73848 = (0);
var i__73685_73849 = (0);
while(true){
if((i__73685_73849 < count__73684_73848)){
var node_73850 = chunk__73683_73847.cljs$core$IIndexed$_nth$arity$2(null,i__73685_73849);
var path_match_73851 = shadow.cljs.devtools.client.browser.match_paths(node_73850.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73851)){
var new_link_73852 = (function (){var G__73692 = node_73850.cloneNode(true);
G__73692.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73851),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73692;
})();
(new_link_73852.onload = ((function (seq__73680_73846,chunk__73683_73847,count__73684_73848,i__73685_73849,seq__73626,chunk__73630,count__73631,i__73632,new_link_73852,path_match_73851,node_73850,path,map__73621,map__73621__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_73850);
});})(seq__73680_73846,chunk__73683_73847,count__73684_73848,i__73685_73849,seq__73626,chunk__73630,count__73631,i__73632,new_link_73852,path_match_73851,node_73850,path,map__73621,map__73621__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73851], 0));

goog.dom.insertSiblingAfter(new_link_73852,node_73850);


var G__73856 = seq__73680_73846;
var G__73857 = chunk__73683_73847;
var G__73858 = count__73684_73848;
var G__73859 = (i__73685_73849 + (1));
seq__73680_73846 = G__73856;
chunk__73683_73847 = G__73857;
count__73684_73848 = G__73858;
i__73685_73849 = G__73859;
continue;
} else {
var G__73860 = seq__73680_73846;
var G__73861 = chunk__73683_73847;
var G__73862 = count__73684_73848;
var G__73863 = (i__73685_73849 + (1));
seq__73680_73846 = G__73860;
chunk__73683_73847 = G__73861;
count__73684_73848 = G__73862;
i__73685_73849 = G__73863;
continue;
}
} else {
var temp__5735__auto___73864 = cljs.core.seq(seq__73680_73846);
if(temp__5735__auto___73864){
var seq__73680_73865__$1 = temp__5735__auto___73864;
if(cljs.core.chunked_seq_QMARK_(seq__73680_73865__$1)){
var c__4556__auto___73866 = cljs.core.chunk_first(seq__73680_73865__$1);
var G__73867 = cljs.core.chunk_rest(seq__73680_73865__$1);
var G__73868 = c__4556__auto___73866;
var G__73869 = cljs.core.count(c__4556__auto___73866);
var G__73870 = (0);
seq__73680_73846 = G__73867;
chunk__73683_73847 = G__73868;
count__73684_73848 = G__73869;
i__73685_73849 = G__73870;
continue;
} else {
var node_73871 = cljs.core.first(seq__73680_73865__$1);
var path_match_73872 = shadow.cljs.devtools.client.browser.match_paths(node_73871.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73872)){
var new_link_73873 = (function (){var G__73693 = node_73871.cloneNode(true);
G__73693.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73872),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73693;
})();
(new_link_73873.onload = ((function (seq__73680_73846,chunk__73683_73847,count__73684_73848,i__73685_73849,seq__73626,chunk__73630,count__73631,i__73632,new_link_73873,path_match_73872,node_73871,seq__73680_73865__$1,temp__5735__auto___73864,path,map__73621,map__73621__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_73871);
});})(seq__73680_73846,chunk__73683_73847,count__73684_73848,i__73685_73849,seq__73626,chunk__73630,count__73631,i__73632,new_link_73873,path_match_73872,node_73871,seq__73680_73865__$1,temp__5735__auto___73864,path,map__73621,map__73621__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73872], 0));

goog.dom.insertSiblingAfter(new_link_73873,node_73871);


var G__73874 = cljs.core.next(seq__73680_73865__$1);
var G__73875 = null;
var G__73876 = (0);
var G__73877 = (0);
seq__73680_73846 = G__73874;
chunk__73683_73847 = G__73875;
count__73684_73848 = G__73876;
i__73685_73849 = G__73877;
continue;
} else {
var G__73878 = cljs.core.next(seq__73680_73865__$1);
var G__73879 = null;
var G__73880 = (0);
var G__73881 = (0);
seq__73680_73846 = G__73878;
chunk__73683_73847 = G__73879;
count__73684_73848 = G__73880;
i__73685_73849 = G__73881;
continue;
}
}
} else {
}
}
break;
}


var G__73882 = seq__73626;
var G__73883 = chunk__73630;
var G__73884 = count__73631;
var G__73885 = (i__73632 + (1));
seq__73626 = G__73882;
chunk__73630 = G__73883;
count__73631 = G__73884;
i__73632 = G__73885;
continue;
} else {
var G__73886 = seq__73626;
var G__73887 = chunk__73630;
var G__73888 = count__73631;
var G__73889 = (i__73632 + (1));
seq__73626 = G__73886;
chunk__73630 = G__73887;
count__73631 = G__73888;
i__73632 = G__73889;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73626);
if(temp__5735__auto__){
var seq__73626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73626__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73626__$1);
var G__73890 = cljs.core.chunk_rest(seq__73626__$1);
var G__73891 = c__4556__auto__;
var G__73892 = cljs.core.count(c__4556__auto__);
var G__73893 = (0);
seq__73626 = G__73890;
chunk__73630 = G__73891;
count__73631 = G__73892;
i__73632 = G__73893;
continue;
} else {
var path = cljs.core.first(seq__73626__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__73694_73894 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__73697_73895 = null;
var count__73698_73896 = (0);
var i__73699_73897 = (0);
while(true){
if((i__73699_73897 < count__73698_73896)){
var node_73898 = chunk__73697_73895.cljs$core$IIndexed$_nth$arity$2(null,i__73699_73897);
var path_match_73899 = shadow.cljs.devtools.client.browser.match_paths(node_73898.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73899)){
var new_link_73900 = (function (){var G__73704 = node_73898.cloneNode(true);
G__73704.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73899),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73704;
})();
(new_link_73900.onload = ((function (seq__73694_73894,chunk__73697_73895,count__73698_73896,i__73699_73897,seq__73626,chunk__73630,count__73631,i__73632,new_link_73900,path_match_73899,node_73898,path,seq__73626__$1,temp__5735__auto__,map__73621,map__73621__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_73898);
});})(seq__73694_73894,chunk__73697_73895,count__73698_73896,i__73699_73897,seq__73626,chunk__73630,count__73631,i__73632,new_link_73900,path_match_73899,node_73898,path,seq__73626__$1,temp__5735__auto__,map__73621,map__73621__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73899], 0));

goog.dom.insertSiblingAfter(new_link_73900,node_73898);


var G__73901 = seq__73694_73894;
var G__73902 = chunk__73697_73895;
var G__73903 = count__73698_73896;
var G__73904 = (i__73699_73897 + (1));
seq__73694_73894 = G__73901;
chunk__73697_73895 = G__73902;
count__73698_73896 = G__73903;
i__73699_73897 = G__73904;
continue;
} else {
var G__73905 = seq__73694_73894;
var G__73906 = chunk__73697_73895;
var G__73907 = count__73698_73896;
var G__73908 = (i__73699_73897 + (1));
seq__73694_73894 = G__73905;
chunk__73697_73895 = G__73906;
count__73698_73896 = G__73907;
i__73699_73897 = G__73908;
continue;
}
} else {
var temp__5735__auto___73909__$1 = cljs.core.seq(seq__73694_73894);
if(temp__5735__auto___73909__$1){
var seq__73694_73910__$1 = temp__5735__auto___73909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73694_73910__$1)){
var c__4556__auto___73911 = cljs.core.chunk_first(seq__73694_73910__$1);
var G__73912 = cljs.core.chunk_rest(seq__73694_73910__$1);
var G__73913 = c__4556__auto___73911;
var G__73914 = cljs.core.count(c__4556__auto___73911);
var G__73915 = (0);
seq__73694_73894 = G__73912;
chunk__73697_73895 = G__73913;
count__73698_73896 = G__73914;
i__73699_73897 = G__73915;
continue;
} else {
var node_73916 = cljs.core.first(seq__73694_73910__$1);
var path_match_73917 = shadow.cljs.devtools.client.browser.match_paths(node_73916.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73917)){
var new_link_73918 = (function (){var G__73706 = node_73916.cloneNode(true);
G__73706.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73917),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__73706;
})();
(new_link_73918.onload = ((function (seq__73694_73894,chunk__73697_73895,count__73698_73896,i__73699_73897,seq__73626,chunk__73630,count__73631,i__73632,new_link_73918,path_match_73917,node_73916,seq__73694_73910__$1,temp__5735__auto___73909__$1,path,seq__73626__$1,temp__5735__auto__,map__73621,map__73621__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_73916);
});})(seq__73694_73894,chunk__73697_73895,count__73698_73896,i__73699_73897,seq__73626,chunk__73630,count__73631,i__73632,new_link_73918,path_match_73917,node_73916,seq__73694_73910__$1,temp__5735__auto___73909__$1,path,seq__73626__$1,temp__5735__auto__,map__73621,map__73621__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73917], 0));

goog.dom.insertSiblingAfter(new_link_73918,node_73916);


var G__73919 = cljs.core.next(seq__73694_73910__$1);
var G__73920 = null;
var G__73921 = (0);
var G__73922 = (0);
seq__73694_73894 = G__73919;
chunk__73697_73895 = G__73920;
count__73698_73896 = G__73921;
i__73699_73897 = G__73922;
continue;
} else {
var G__73923 = cljs.core.next(seq__73694_73910__$1);
var G__73924 = null;
var G__73925 = (0);
var G__73926 = (0);
seq__73694_73894 = G__73923;
chunk__73697_73895 = G__73924;
count__73698_73896 = G__73925;
i__73699_73897 = G__73926;
continue;
}
}
} else {
}
}
break;
}


var G__73928 = cljs.core.next(seq__73626__$1);
var G__73929 = null;
var G__73930 = (0);
var G__73931 = (0);
seq__73626 = G__73928;
chunk__73630 = G__73929;
count__73631 = G__73930;
i__73632 = G__73931;
continue;
} else {
var G__73932 = cljs.core.next(seq__73626__$1);
var G__73933 = null;
var G__73934 = (0);
var G__73935 = (0);
seq__73626 = G__73932;
chunk__73630 = G__73933;
count__73631 = G__73934;
i__73632 = G__73935;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__73709){
var map__73710 = p__73709;
var map__73710__$1 = (((((!((map__73710 == null))))?(((((map__73710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73710):map__73710);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73710__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__73722){
var map__73723 = p__73722;
var map__73723__$1 = (((((!((map__73723 == null))))?(((((map__73723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73723):map__73723);
var _ = map__73723__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73723__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__73728,done,error){
var map__73729 = p__73728;
var map__73729__$1 = (((((!((map__73729 == null))))?(((((map__73729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73729):map__73729);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73729__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__73736,done,error){
var map__73737 = p__73736;
var map__73737__$1 = (((((!((map__73737 == null))))?(((((map__73737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73737):map__73737);
var msg = map__73737__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73737__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73737__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73737__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__73740){
var map__73743 = p__73740;
var map__73743__$1 = (((((!((map__73743 == null))))?(((((map__73743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73743):map__73743);
var src = map__73743__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73743__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__73749 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__73749) : done.call(null,G__73749));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__73750){
var map__73751 = p__73750;
var map__73751__$1 = (((((!((map__73751 == null))))?(((((map__73751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73751):map__73751);
var msg__$1 = map__73751__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73751__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e73753){var ex = e73753;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__73754){
var map__73755 = p__73754;
var map__73755__$1 = (((((!((map__73755 == null))))?(((((map__73755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73755):map__73755);
var env = map__73755__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73755__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__73765){
var map__73766 = p__73765;
var map__73766__$1 = (((((!((map__73766 == null))))?(((((map__73766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73766):map__73766);
var msg = map__73766__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73766__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__73768){
var map__73769 = p__73768;
var map__73769__$1 = (((((!((map__73769 == null))))?(((((map__73769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73769):map__73769);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73769__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73769__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__73771){
var map__73772 = p__73771;
var map__73772__$1 = (((((!((map__73772 == null))))?(((((map__73772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73772):map__73772);
var svc = map__73772__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73772__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
