goog.provide('athens.parse_renderer');
var module$node_modules$katex$dist$katex=shadow.js.require("module$node_modules$katex$dist$katex", {});
var module$node_modules$katex$dist$contrib$mhchem=shadow.js.require("module$node_modules$katex$dist$contrib$mhchem", {});
athens.parse_renderer.page_link = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"display","display",242065432),"inline",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".formatting",".formatting",-282112073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1),new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),["0px 0px 0px 1px ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))].join('')], null)], null)], null)], null);
athens.parse_renderer.hashtag = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".formatting",".formatting",-282112073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null)], null);
athens.parse_renderer.image = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.125rem"], null);
athens.parse_renderer.url_link = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.parse_renderer.block_ref = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em",new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.05s ease",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px","solid",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540))], null)], null),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"alias"], null)], null)], null)], null);
/**
 * Title coll is a sequence of plain strings or hiccup elements. If string, return string, otherwise parse the hiccup
 *   for its plain-text representation.
 */
athens.parse_renderer.parse_title = (function athens$parse_renderer$parse_title(title_coll){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (el){
if(typeof el === 'string'){
return el;
} else {
return ["[[",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null))),"]]"].join('');
}
}),title_coll));
});
/**
 * Gets a block's node from the display string name (or partially parsed string tree)
 */
athens.parse_renderer.pull_node_from_string = (function athens$parse_renderer$pull_node_from_string(title_coll){
var title = athens.parse_renderer.parse_title(title_coll);
return posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null));
});
/**
 * Renders a page link given the title of the page.
 */
athens.parse_renderer.render_page_link = (function athens$parse_renderer$render_page_link(title){
var node = athens.parse_renderer.pull_node_from_string(title);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.page_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-link"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"[["], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)),e);
})], null)], null),title),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"]]"], null)], null);
});
athens.parse_renderer.components = new cljs.core.PersistentArrayMap(null, 6, [/\[\[TODO\]\]/,new cljs.core.Keyword(null,"todo","todo",-1046442570),/\[\[DONE\]\]/,new cljs.core.Keyword(null,"done","done",-889844188),/\[\[youtube\]\]\:.*/,new cljs.core.Keyword(null,"youtube","youtube",-1932361085),/iframe\:.*/,new cljs.core.Keyword(null,"iframe","iframe",884422026),/SELF/,new cljs.core.Keyword(null,"self","self",-1547428899),/\[\[embed\]\]: \(\(.+\)\)/,new cljs.core.Keyword(null,"block-embed","block-embed",-417443082)], null);
if((typeof athens !== 'undefined') && (typeof athens.parse_renderer !== 'undefined') && (typeof athens.parse_renderer.component !== 'undefined')){
} else {
athens.parse_renderer.component = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95693 = cljs.core.get_global_hierarchy;
return (fexpr__95693.cljs$core$IFn$_invoke$arity$0 ? fexpr__95693.cljs$core$IFn$_invoke$arity$0() : fexpr__95693.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("athens.parse-renderer","component"),(function (content,_uid){
return cljs.core.some((function (p__95695){
var vec__95697 = p__95695;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95697,(0),null);
var render = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95697,(1),null);
if(cljs.core.truth_(cljs.core.re_matches(pattern,content))){
return render;
} else {
return null;
}
}),athens.parse_renderer.components);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
athens.parse_renderer.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (content,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),content], null);
}));
/**
 * Transforms Instaparse output to Hiccup.
 */
athens.parse_renderer.transform = (function athens$parse_renderer$transform(tree,uid){
var G__95702 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Keyword(null,"latex","latex",-1820161144),new cljs.core.Keyword(null,"url-image","url-image",535142411),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"page-link","page-link",-169621200),new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804),new cljs.core.Keyword(null,"pre-formatted","pre-formatted",797009626),new cljs.core.Keyword(null,"italic","italic",32599196),new cljs.core.Keyword(null,"block-ref","block-ref",362929756),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"url-link","url-link",1615670141)],[(function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents bold"], null),text], null);
}),(function() { 
var G__95739__delegate = function (contents){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block"], null)], null),contents);
};
var G__95739 = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__95743__i = 0, G__95743__a = new Array(arguments.length -  0);
while (G__95743__i < G__95743__a.length) {G__95743__a[G__95743__i] = arguments[G__95743__i + 0]; ++G__95743__i;}
  contents = new cljs.core.IndexedSeq(G__95743__a,0,null);
} 
return G__95739__delegate.call(this,contents);};
G__95739.cljs$lang$maxFixedArity = 0;
G__95739.cljs$lang$applyTo = (function (arglist__95745){
var contents = cljs.core.seq(arglist__95745);
return G__95739__delegate(contents);
});
G__95739.cljs$core$IFn$_invoke$arity$variadic = G__95739__delegate;
return G__95739;
})()
,(function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents highlight"], null),text], null);
}),(function (text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if(cljs.core.truth_(el)){
try{return module$node_modules$katex$dist$katex.render(text,el,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"throwOnError","throwOnError",1177360171),false], null)));
}catch (e95710){var e = e95710;
console.warn("Unexpected KaTeX error",e);

return (el["innerHTML"] = text);
}} else {
return null;
}
})], null)], null);
}),(function (p__95711){
var map__95712 = p__95711;
var map__95712__$1 = (((((!((map__95712 == null))))?(((((map__95712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95712):map__95712);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95712__$1,new cljs.core.Keyword(null,"url","url",276297046));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95712__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"url-image",new cljs.core.Keyword(null,"alt","alt",-3214426),alt,new cljs.core.Keyword(null,"src","src",-1651076051),url], null))], null);
}),(function() { 
var G__95749__delegate = function (contents){
return athens.parse_renderer.component.cljs$core$IFn$_invoke$arity$2(cljs.core.first(contents),uid);
};
var G__95749 = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__95750__i = 0, G__95750__a = new Array(arguments.length -  0);
while (G__95750__i < G__95750__a.length) {G__95750__a[G__95750__i] = arguments[G__95750__i + 0]; ++G__95750__i;}
  contents = new cljs.core.IndexedSeq(G__95750__a,0,null);
} 
return G__95749__delegate.call(this,contents);};
G__95749.cljs$lang$maxFixedArity = 0;
G__95749.cljs$lang$applyTo = (function (arglist__95751){
var contents = cljs.core.seq(arglist__95751);
return G__95749__delegate(contents);
});
G__95749.cljs$core$IFn$_invoke$arity$variadic = G__95749__delegate;
return G__95749;
})()
,(function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents underline"], null),text], null);
}),(function() { 
var G__95752__delegate = function (title_coll){
return athens.parse_renderer.render_page_link(title_coll);
};
var G__95752 = function (var_args){
var title_coll = null;
if (arguments.length > 0) {
var G__95753__i = 0, G__95753__a = new Array(arguments.length -  0);
while (G__95753__i < G__95753__a.length) {G__95753__a[G__95753__i] = arguments[G__95753__i + 0]; ++G__95753__i;}
  title_coll = new cljs.core.IndexedSeq(G__95753__a,0,null);
} 
return G__95752__delegate.call(this,title_coll);};
G__95752.cljs$lang$maxFixedArity = 0;
G__95752.cljs$lang$applyTo = (function (arglist__95754){
var title_coll = cljs.core.seq(arglist__95754);
return G__95752__delegate(title_coll);
});
G__95752.cljs$core$IFn$_invoke$arity$variadic = G__95752__delegate;
return G__95752;
})()
,(function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents del"], null),text], null);
}),(function (text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),text], null);
}),(function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents italic"], null),text], null);
}),(function (ref_uid){
var block = posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null));
if(cljs.core.truth_(cljs.core.deref(block))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.block_ref,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-ref"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__95701_SHARP_){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(ref_uid,p1__95701_SHARP_);
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,ref_uid))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.parse_renderer.parse_and_render,"{{SELF}}"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.parse_renderer.parse_and_render,new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block)),ref_uid], null))], null)], null);
} else {
return ["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_uid),"))"].join('');
}
}),(function() { 
var G__95759__delegate = function (title_coll){
var node = athens.parse_renderer.pull_node_from_string(title_coll);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.hashtag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"hashtag",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__95700_SHARP_){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)),p1__95700_SHARP_);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"#"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents"], null),title_coll], null)], null);
};
var G__95759 = function (var_args){
var title_coll = null;
if (arguments.length > 0) {
var G__95760__i = 0, G__95760__a = new Array(arguments.length -  0);
while (G__95760__i < G__95760__a.length) {G__95760__a[G__95760__i] = arguments[G__95760__i + 0]; ++G__95760__i;}
  title_coll = new cljs.core.IndexedSeq(G__95760__a,0,null);
} 
return G__95759__delegate.call(this,title_coll);};
G__95759.cljs$lang$maxFixedArity = 0;
G__95759.cljs$lang$applyTo = (function (arglist__95761){
var title_coll = cljs.core.seq(arglist__95761);
return G__95759__delegate(title_coll);
});
G__95759.cljs$core$IFn$_invoke$arity$variadic = G__95759__delegate;
return G__95759;
})()
,(function (p__95725,text){
var map__95726 = p__95725;
var map__95726__$1 = (((((!((map__95726 == null))))?(((((map__95726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95726):map__95726);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95726__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.url_link,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"url-link",new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null)),text], null);
})]);
var G__95703 = tree;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__95702,G__95703) : instaparse.core.transform.call(null,G__95702,G__95703));
});
/**
 * Converts a string of block syntax to Hiccup, with fallback formatting if it can’t be parsed.
 */
athens.parse_renderer.parse_and_render = (function athens$parse_renderer$parse_and_render(string,uid){
var result = athens.parser.parse_to_ast(string);
if(instaparse.core.failure_QMARK_(result)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.core.get_failure(result)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),string], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec,athens.parse_renderer.transform(result,uid)], null);
}
});

//# sourceMappingURL=athens.parse_renderer.js.map
