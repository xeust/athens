goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__94319 = arguments.length;
switch (G__94319) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__94331 = arguments.length;
switch (G__94331) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__94334 = arguments.length;
switch (G__94334) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__94332_SHARP_){
return (!((p1__94332_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___94771 = arguments.length;
var i__4737__auto___94772 = (0);
while(true){
if((i__4737__auto___94772 < len__4736__auto___94771)){
args__4742__auto__.push((arguments[i__4737__auto___94772]));

var G__94773 = (i__4737__auto___94772 + (1));
i__4737__auto___94772 = G__94773;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__94342_94774 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__94343_94775 = null;
var count__94344_94776 = (0);
var i__94345_94777 = (0);
while(true){
if((i__94345_94777 < count__94344_94776)){
var vec__94355_94778 = chunk__94343_94775.cljs$core$IIndexed$_nth$arity$2(null,i__94345_94777);
var k_94779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94355_94778,(0),null);
var v_94780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94355_94778,(1),null);
style.setProperty(dommy.utils.as_str(k_94779),v_94780);


var G__94781 = seq__94342_94774;
var G__94782 = chunk__94343_94775;
var G__94783 = count__94344_94776;
var G__94784 = (i__94345_94777 + (1));
seq__94342_94774 = G__94781;
chunk__94343_94775 = G__94782;
count__94344_94776 = G__94783;
i__94345_94777 = G__94784;
continue;
} else {
var temp__5735__auto___94785 = cljs.core.seq(seq__94342_94774);
if(temp__5735__auto___94785){
var seq__94342_94786__$1 = temp__5735__auto___94785;
if(cljs.core.chunked_seq_QMARK_(seq__94342_94786__$1)){
var c__4556__auto___94787 = cljs.core.chunk_first(seq__94342_94786__$1);
var G__94788 = cljs.core.chunk_rest(seq__94342_94786__$1);
var G__94789 = c__4556__auto___94787;
var G__94790 = cljs.core.count(c__4556__auto___94787);
var G__94791 = (0);
seq__94342_94774 = G__94788;
chunk__94343_94775 = G__94789;
count__94344_94776 = G__94790;
i__94345_94777 = G__94791;
continue;
} else {
var vec__94361_94792 = cljs.core.first(seq__94342_94786__$1);
var k_94793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94361_94792,(0),null);
var v_94794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94361_94792,(1),null);
style.setProperty(dommy.utils.as_str(k_94793),v_94794);


var G__94797 = cljs.core.next(seq__94342_94786__$1);
var G__94798 = null;
var G__94799 = (0);
var G__94800 = (0);
seq__94342_94774 = G__94797;
chunk__94343_94775 = G__94798;
count__94344_94776 = G__94799;
i__94345_94777 = G__94800;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq94337){
var G__94339 = cljs.core.first(seq94337);
var seq94337__$1 = cljs.core.next(seq94337);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94339,seq94337__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___94801 = arguments.length;
var i__4737__auto___94802 = (0);
while(true){
if((i__4737__auto___94802 < len__4736__auto___94801)){
args__4742__auto__.push((arguments[i__4737__auto___94802]));

var G__94803 = (i__4737__auto___94802 + (1));
i__4737__auto___94802 = G__94803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__94371_94813 = cljs.core.seq(keywords);
var chunk__94372_94814 = null;
var count__94373_94815 = (0);
var i__94374_94816 = (0);
while(true){
if((i__94374_94816 < count__94373_94815)){
var kw_94817 = chunk__94372_94814.cljs$core$IIndexed$_nth$arity$2(null,i__94374_94816);
style.removeProperty(dommy.utils.as_str(kw_94817));


var G__94818 = seq__94371_94813;
var G__94819 = chunk__94372_94814;
var G__94820 = count__94373_94815;
var G__94821 = (i__94374_94816 + (1));
seq__94371_94813 = G__94818;
chunk__94372_94814 = G__94819;
count__94373_94815 = G__94820;
i__94374_94816 = G__94821;
continue;
} else {
var temp__5735__auto___94822 = cljs.core.seq(seq__94371_94813);
if(temp__5735__auto___94822){
var seq__94371_94823__$1 = temp__5735__auto___94822;
if(cljs.core.chunked_seq_QMARK_(seq__94371_94823__$1)){
var c__4556__auto___94824 = cljs.core.chunk_first(seq__94371_94823__$1);
var G__94825 = cljs.core.chunk_rest(seq__94371_94823__$1);
var G__94826 = c__4556__auto___94824;
var G__94827 = cljs.core.count(c__4556__auto___94824);
var G__94828 = (0);
seq__94371_94813 = G__94825;
chunk__94372_94814 = G__94826;
count__94373_94815 = G__94827;
i__94374_94816 = G__94828;
continue;
} else {
var kw_94832 = cljs.core.first(seq__94371_94823__$1);
style.removeProperty(dommy.utils.as_str(kw_94832));


var G__94833 = cljs.core.next(seq__94371_94823__$1);
var G__94834 = null;
var G__94835 = (0);
var G__94836 = (0);
seq__94371_94813 = G__94833;
chunk__94372_94814 = G__94834;
count__94373_94815 = G__94835;
i__94374_94816 = G__94836;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq94365){
var G__94366 = cljs.core.first(seq94365);
var seq94365__$1 = cljs.core.next(seq94365);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94366,seq94365__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___94837 = arguments.length;
var i__4737__auto___94838 = (0);
while(true){
if((i__4737__auto___94838 < len__4736__auto___94837)){
args__4742__auto__.push((arguments[i__4737__auto___94838]));

var G__94839 = (i__4737__auto___94838 + (1));
i__4737__auto___94838 = G__94839;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__94379_94844 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__94380_94845 = null;
var count__94381_94846 = (0);
var i__94382_94847 = (0);
while(true){
if((i__94382_94847 < count__94381_94846)){
var vec__94390_94849 = chunk__94380_94845.cljs$core$IIndexed$_nth$arity$2(null,i__94382_94847);
var k_94850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94390_94849,(0),null);
var v_94851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94390_94849,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_94850,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_94851),"px"].join('')], 0));


var G__94852 = seq__94379_94844;
var G__94853 = chunk__94380_94845;
var G__94854 = count__94381_94846;
var G__94855 = (i__94382_94847 + (1));
seq__94379_94844 = G__94852;
chunk__94380_94845 = G__94853;
count__94381_94846 = G__94854;
i__94382_94847 = G__94855;
continue;
} else {
var temp__5735__auto___94856 = cljs.core.seq(seq__94379_94844);
if(temp__5735__auto___94856){
var seq__94379_94857__$1 = temp__5735__auto___94856;
if(cljs.core.chunked_seq_QMARK_(seq__94379_94857__$1)){
var c__4556__auto___94858 = cljs.core.chunk_first(seq__94379_94857__$1);
var G__94859 = cljs.core.chunk_rest(seq__94379_94857__$1);
var G__94860 = c__4556__auto___94858;
var G__94861 = cljs.core.count(c__4556__auto___94858);
var G__94862 = (0);
seq__94379_94844 = G__94859;
chunk__94380_94845 = G__94860;
count__94381_94846 = G__94861;
i__94382_94847 = G__94862;
continue;
} else {
var vec__94396_94863 = cljs.core.first(seq__94379_94857__$1);
var k_94864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94396_94863,(0),null);
var v_94865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94396_94863,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_94864,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_94865),"px"].join('')], 0));


var G__94866 = cljs.core.next(seq__94379_94857__$1);
var G__94867 = null;
var G__94868 = (0);
var G__94869 = (0);
seq__94379_94844 = G__94866;
chunk__94380_94845 = G__94867;
count__94381_94846 = G__94868;
i__94382_94847 = G__94869;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq94376){
var G__94377 = cljs.core.first(seq94376);
var seq94376__$1 = cljs.core.next(seq94376);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94377,seq94376__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__94407 = arguments.length;
switch (G__94407) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___94871 = arguments.length;
var i__4737__auto___94872 = (0);
while(true){
if((i__4737__auto___94872 < len__4736__auto___94871)){
args_arr__4757__auto__.push((arguments[i__4737__auto___94872]));

var G__94873 = (i__4737__auto___94872 + (1));
i__4737__auto___94872 = G__94873;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__94409 = elem;
(G__94409[k__$1] = v);

return G__94409;
} else {
var G__94410 = elem;
G__94410.setAttribute(k__$1,v);

return G__94410;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__94413_94877 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__94414_94878 = null;
var count__94415_94879 = (0);
var i__94416_94880 = (0);
while(true){
if((i__94416_94880 < count__94415_94879)){
var vec__94425_94881 = chunk__94414_94878.cljs$core$IIndexed$_nth$arity$2(null,i__94416_94880);
var k_94882__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94425_94881,(0),null);
var v_94883__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94425_94881,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_94882__$1,v_94883__$1);


var G__94884 = seq__94413_94877;
var G__94885 = chunk__94414_94878;
var G__94886 = count__94415_94879;
var G__94887 = (i__94416_94880 + (1));
seq__94413_94877 = G__94884;
chunk__94414_94878 = G__94885;
count__94415_94879 = G__94886;
i__94416_94880 = G__94887;
continue;
} else {
var temp__5735__auto___94888 = cljs.core.seq(seq__94413_94877);
if(temp__5735__auto___94888){
var seq__94413_94889__$1 = temp__5735__auto___94888;
if(cljs.core.chunked_seq_QMARK_(seq__94413_94889__$1)){
var c__4556__auto___94890 = cljs.core.chunk_first(seq__94413_94889__$1);
var G__94891 = cljs.core.chunk_rest(seq__94413_94889__$1);
var G__94892 = c__4556__auto___94890;
var G__94893 = cljs.core.count(c__4556__auto___94890);
var G__94894 = (0);
seq__94413_94877 = G__94891;
chunk__94414_94878 = G__94892;
count__94415_94879 = G__94893;
i__94416_94880 = G__94894;
continue;
} else {
var vec__94428_94895 = cljs.core.first(seq__94413_94889__$1);
var k_94896__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94428_94895,(0),null);
var v_94897__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94428_94895,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_94896__$1,v_94897__$1);


var G__94898 = cljs.core.next(seq__94413_94889__$1);
var G__94899 = null;
var G__94900 = (0);
var G__94901 = (0);
seq__94413_94877 = G__94898;
chunk__94414_94878 = G__94899;
count__94415_94879 = G__94900;
i__94416_94880 = G__94901;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq94403){
var G__94404 = cljs.core.first(seq94403);
var seq94403__$1 = cljs.core.next(seq94403);
var G__94405 = cljs.core.first(seq94403__$1);
var seq94403__$2 = cljs.core.next(seq94403__$1);
var G__94406 = cljs.core.first(seq94403__$2);
var seq94403__$3 = cljs.core.next(seq94403__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94404,G__94405,G__94406,seq94403__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__94436 = arguments.length;
switch (G__94436) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___94904 = arguments.length;
var i__4737__auto___94905 = (0);
while(true){
if((i__4737__auto___94905 < len__4736__auto___94904)){
args_arr__4757__auto__.push((arguments[i__4737__auto___94905]));

var G__94906 = (i__4737__auto___94905 + (1));
i__4737__auto___94905 = G__94906;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_94907__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__94437 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__94437.cljs$core$IFn$_invoke$arity$1 ? fexpr__94437.cljs$core$IFn$_invoke$arity$1(k_94907__$1) : fexpr__94437.call(null,k_94907__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_94907__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__94438_94908 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__94439_94909 = null;
var count__94440_94910 = (0);
var i__94441_94911 = (0);
while(true){
if((i__94441_94911 < count__94440_94910)){
var k_94912__$1 = chunk__94439_94909.cljs$core$IIndexed$_nth$arity$2(null,i__94441_94911);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_94912__$1);


var G__94913 = seq__94438_94908;
var G__94914 = chunk__94439_94909;
var G__94915 = count__94440_94910;
var G__94916 = (i__94441_94911 + (1));
seq__94438_94908 = G__94913;
chunk__94439_94909 = G__94914;
count__94440_94910 = G__94915;
i__94441_94911 = G__94916;
continue;
} else {
var temp__5735__auto___94917 = cljs.core.seq(seq__94438_94908);
if(temp__5735__auto___94917){
var seq__94438_94918__$1 = temp__5735__auto___94917;
if(cljs.core.chunked_seq_QMARK_(seq__94438_94918__$1)){
var c__4556__auto___94919 = cljs.core.chunk_first(seq__94438_94918__$1);
var G__94920 = cljs.core.chunk_rest(seq__94438_94918__$1);
var G__94921 = c__4556__auto___94919;
var G__94922 = cljs.core.count(c__4556__auto___94919);
var G__94923 = (0);
seq__94438_94908 = G__94920;
chunk__94439_94909 = G__94921;
count__94440_94910 = G__94922;
i__94441_94911 = G__94923;
continue;
} else {
var k_94924__$1 = cljs.core.first(seq__94438_94918__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_94924__$1);


var G__94925 = cljs.core.next(seq__94438_94918__$1);
var G__94926 = null;
var G__94927 = (0);
var G__94928 = (0);
seq__94438_94908 = G__94925;
chunk__94439_94909 = G__94926;
count__94440_94910 = G__94927;
i__94441_94911 = G__94928;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq94433){
var G__94434 = cljs.core.first(seq94433);
var seq94433__$1 = cljs.core.next(seq94433);
var G__94435 = cljs.core.first(seq94433__$1);
var seq94433__$2 = cljs.core.next(seq94433__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94434,G__94435,seq94433__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__94445 = arguments.length;
switch (G__94445) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__94450 = arguments.length;
switch (G__94450) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___94931 = arguments.length;
var i__4737__auto___94932 = (0);
while(true){
if((i__4737__auto___94932 < len__4736__auto___94931)){
args_arr__4757__auto__.push((arguments[i__4737__auto___94932]));

var G__94933 = (i__4737__auto___94932 + (1));
i__4737__auto___94932 = G__94933;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___94934 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___94934)){
var class_list_94935 = temp__5733__auto___94934;
var seq__94454_94936 = cljs.core.seq(classes__$1);
var chunk__94455_94937 = null;
var count__94456_94938 = (0);
var i__94457_94939 = (0);
while(true){
if((i__94457_94939 < count__94456_94938)){
var c_94940 = chunk__94455_94937.cljs$core$IIndexed$_nth$arity$2(null,i__94457_94939);
class_list_94935.add(c_94940);


var G__94941 = seq__94454_94936;
var G__94942 = chunk__94455_94937;
var G__94943 = count__94456_94938;
var G__94944 = (i__94457_94939 + (1));
seq__94454_94936 = G__94941;
chunk__94455_94937 = G__94942;
count__94456_94938 = G__94943;
i__94457_94939 = G__94944;
continue;
} else {
var temp__5735__auto___94945 = cljs.core.seq(seq__94454_94936);
if(temp__5735__auto___94945){
var seq__94454_94946__$1 = temp__5735__auto___94945;
if(cljs.core.chunked_seq_QMARK_(seq__94454_94946__$1)){
var c__4556__auto___94947 = cljs.core.chunk_first(seq__94454_94946__$1);
var G__94948 = cljs.core.chunk_rest(seq__94454_94946__$1);
var G__94949 = c__4556__auto___94947;
var G__94950 = cljs.core.count(c__4556__auto___94947);
var G__94951 = (0);
seq__94454_94936 = G__94948;
chunk__94455_94937 = G__94949;
count__94456_94938 = G__94950;
i__94457_94939 = G__94951;
continue;
} else {
var c_94952 = cljs.core.first(seq__94454_94946__$1);
class_list_94935.add(c_94952);


var G__94953 = cljs.core.next(seq__94454_94946__$1);
var G__94954 = null;
var G__94955 = (0);
var G__94956 = (0);
seq__94454_94936 = G__94953;
chunk__94455_94937 = G__94954;
count__94456_94938 = G__94955;
i__94457_94939 = G__94956;
continue;
}
} else {
}
}
break;
}
} else {
var seq__94461_94957 = cljs.core.seq(classes__$1);
var chunk__94462_94958 = null;
var count__94463_94959 = (0);
var i__94464_94960 = (0);
while(true){
if((i__94464_94960 < count__94463_94959)){
var c_94961 = chunk__94462_94958.cljs$core$IIndexed$_nth$arity$2(null,i__94464_94960);
var class_name_94962 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_94962,c_94961))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_94962 === ""))?c_94961:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_94962)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_94961)].join('')));
}


var G__94963 = seq__94461_94957;
var G__94964 = chunk__94462_94958;
var G__94965 = count__94463_94959;
var G__94966 = (i__94464_94960 + (1));
seq__94461_94957 = G__94963;
chunk__94462_94958 = G__94964;
count__94463_94959 = G__94965;
i__94464_94960 = G__94966;
continue;
} else {
var temp__5735__auto___94967 = cljs.core.seq(seq__94461_94957);
if(temp__5735__auto___94967){
var seq__94461_94968__$1 = temp__5735__auto___94967;
if(cljs.core.chunked_seq_QMARK_(seq__94461_94968__$1)){
var c__4556__auto___94969 = cljs.core.chunk_first(seq__94461_94968__$1);
var G__94970 = cljs.core.chunk_rest(seq__94461_94968__$1);
var G__94971 = c__4556__auto___94969;
var G__94972 = cljs.core.count(c__4556__auto___94969);
var G__94973 = (0);
seq__94461_94957 = G__94970;
chunk__94462_94958 = G__94971;
count__94463_94959 = G__94972;
i__94464_94960 = G__94973;
continue;
} else {
var c_94974 = cljs.core.first(seq__94461_94968__$1);
var class_name_94975 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_94975,c_94974))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_94975 === ""))?c_94974:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_94975)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_94974)].join('')));
}


var G__94976 = cljs.core.next(seq__94461_94968__$1);
var G__94977 = null;
var G__94978 = (0);
var G__94979 = (0);
seq__94461_94957 = G__94976;
chunk__94462_94958 = G__94977;
count__94463_94959 = G__94978;
i__94464_94960 = G__94979;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__94465_94980 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__94466_94981 = null;
var count__94467_94982 = (0);
var i__94468_94983 = (0);
while(true){
if((i__94468_94983 < count__94467_94982)){
var c_94984 = chunk__94466_94981.cljs$core$IIndexed$_nth$arity$2(null,i__94468_94983);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_94984);


var G__94985 = seq__94465_94980;
var G__94986 = chunk__94466_94981;
var G__94987 = count__94467_94982;
var G__94988 = (i__94468_94983 + (1));
seq__94465_94980 = G__94985;
chunk__94466_94981 = G__94986;
count__94467_94982 = G__94987;
i__94468_94983 = G__94988;
continue;
} else {
var temp__5735__auto___94989 = cljs.core.seq(seq__94465_94980);
if(temp__5735__auto___94989){
var seq__94465_94990__$1 = temp__5735__auto___94989;
if(cljs.core.chunked_seq_QMARK_(seq__94465_94990__$1)){
var c__4556__auto___94991 = cljs.core.chunk_first(seq__94465_94990__$1);
var G__94992 = cljs.core.chunk_rest(seq__94465_94990__$1);
var G__94993 = c__4556__auto___94991;
var G__94994 = cljs.core.count(c__4556__auto___94991);
var G__94995 = (0);
seq__94465_94980 = G__94992;
chunk__94466_94981 = G__94993;
count__94467_94982 = G__94994;
i__94468_94983 = G__94995;
continue;
} else {
var c_94997 = cljs.core.first(seq__94465_94990__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_94997);


var G__94999 = cljs.core.next(seq__94465_94990__$1);
var G__95000 = null;
var G__95001 = (0);
var G__95002 = (0);
seq__94465_94980 = G__94999;
chunk__94466_94981 = G__95000;
count__94467_94982 = G__95001;
i__94468_94983 = G__95002;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq94447){
var G__94448 = cljs.core.first(seq94447);
var seq94447__$1 = cljs.core.next(seq94447);
var G__94449 = cljs.core.first(seq94447__$1);
var seq94447__$2 = cljs.core.next(seq94447__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94448,G__94449,seq94447__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__94482 = arguments.length;
switch (G__94482) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___95006 = arguments.length;
var i__4737__auto___95007 = (0);
while(true){
if((i__4737__auto___95007 < len__4736__auto___95006)){
args_arr__4757__auto__.push((arguments[i__4737__auto___95007]));

var G__95008 = (i__4737__auto___95007 + (1));
i__4737__auto___95007 = G__95008;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___95009 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___95009)){
var class_list_95010 = temp__5733__auto___95009;
class_list_95010.remove(c__$1);
} else {
var class_name_95011 = dommy.core.class$(elem);
var new_class_name_95012 = dommy.utils.remove_class_str(class_name_95011,c__$1);
if((class_name_95011 === new_class_name_95012)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_95012);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__94486 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__94487 = null;
var count__94488 = (0);
var i__94489 = (0);
while(true){
if((i__94489 < count__94488)){
var c = chunk__94487.cljs$core$IIndexed$_nth$arity$2(null,i__94489);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__95013 = seq__94486;
var G__95014 = chunk__94487;
var G__95015 = count__94488;
var G__95016 = (i__94489 + (1));
seq__94486 = G__95013;
chunk__94487 = G__95014;
count__94488 = G__95015;
i__94489 = G__95016;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__94486);
if(temp__5735__auto__){
var seq__94486__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__94486__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__94486__$1);
var G__95017 = cljs.core.chunk_rest(seq__94486__$1);
var G__95018 = c__4556__auto__;
var G__95019 = cljs.core.count(c__4556__auto__);
var G__95020 = (0);
seq__94486 = G__95017;
chunk__94487 = G__95018;
count__94488 = G__95019;
i__94489 = G__95020;
continue;
} else {
var c = cljs.core.first(seq__94486__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__95021 = cljs.core.next(seq__94486__$1);
var G__95022 = null;
var G__95023 = (0);
var G__95024 = (0);
seq__94486 = G__95021;
chunk__94487 = G__95022;
count__94488 = G__95023;
i__94489 = G__95024;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq94477){
var G__94478 = cljs.core.first(seq94477);
var seq94477__$1 = cljs.core.next(seq94477);
var G__94480 = cljs.core.first(seq94477__$1);
var seq94477__$2 = cljs.core.next(seq94477__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94478,G__94480,seq94477__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__94494 = arguments.length;
switch (G__94494) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___95026 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___95026)){
var class_list_95027 = temp__5733__auto___95026;
class_list_95027.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__94496 = arguments.length;
switch (G__94496) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__94498 = arguments.length;
switch (G__94498) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__94504 = arguments.length;
switch (G__94504) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___95031 = arguments.length;
var i__4737__auto___95032 = (0);
while(true){
if((i__4737__auto___95032 < len__4736__auto___95031)){
args_arr__4757__auto__.push((arguments[i__4737__auto___95032]));

var G__95033 = (i__4737__auto___95032 + (1));
i__4737__auto___95032 = G__95033;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__94505 = parent;
G__94505.appendChild(child);

return G__94505;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__94506_95034 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__94507_95035 = null;
var count__94508_95036 = (0);
var i__94509_95037 = (0);
while(true){
if((i__94509_95037 < count__94508_95036)){
var c_95038 = chunk__94507_95035.cljs$core$IIndexed$_nth$arity$2(null,i__94509_95037);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_95038);


var G__95039 = seq__94506_95034;
var G__95040 = chunk__94507_95035;
var G__95041 = count__94508_95036;
var G__95042 = (i__94509_95037 + (1));
seq__94506_95034 = G__95039;
chunk__94507_95035 = G__95040;
count__94508_95036 = G__95041;
i__94509_95037 = G__95042;
continue;
} else {
var temp__5735__auto___95043 = cljs.core.seq(seq__94506_95034);
if(temp__5735__auto___95043){
var seq__94506_95044__$1 = temp__5735__auto___95043;
if(cljs.core.chunked_seq_QMARK_(seq__94506_95044__$1)){
var c__4556__auto___95045 = cljs.core.chunk_first(seq__94506_95044__$1);
var G__95046 = cljs.core.chunk_rest(seq__94506_95044__$1);
var G__95047 = c__4556__auto___95045;
var G__95048 = cljs.core.count(c__4556__auto___95045);
var G__95049 = (0);
seq__94506_95034 = G__95046;
chunk__94507_95035 = G__95047;
count__94508_95036 = G__95048;
i__94509_95037 = G__95049;
continue;
} else {
var c_95050 = cljs.core.first(seq__94506_95044__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_95050);


var G__95051 = cljs.core.next(seq__94506_95044__$1);
var G__95052 = null;
var G__95053 = (0);
var G__95054 = (0);
seq__94506_95034 = G__95051;
chunk__94507_95035 = G__95052;
count__94508_95036 = G__95053;
i__94509_95037 = G__95054;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq94501){
var G__94502 = cljs.core.first(seq94501);
var seq94501__$1 = cljs.core.next(seq94501);
var G__94503 = cljs.core.first(seq94501__$1);
var seq94501__$2 = cljs.core.next(seq94501__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94502,G__94503,seq94501__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__94514 = arguments.length;
switch (G__94514) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___95056 = arguments.length;
var i__4737__auto___95057 = (0);
while(true){
if((i__4737__auto___95057 < len__4736__auto___95056)){
args_arr__4757__auto__.push((arguments[i__4737__auto___95057]));

var G__95058 = (i__4737__auto___95057 + (1));
i__4737__auto___95057 = G__95058;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__94515 = parent;
G__94515.insertBefore(child,parent.firstChild);

return G__94515;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__94516_95059 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__94517_95060 = null;
var count__94518_95061 = (0);
var i__94519_95062 = (0);
while(true){
if((i__94519_95062 < count__94518_95061)){
var c_95063 = chunk__94517_95060.cljs$core$IIndexed$_nth$arity$2(null,i__94519_95062);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_95063);


var G__95064 = seq__94516_95059;
var G__95065 = chunk__94517_95060;
var G__95066 = count__94518_95061;
var G__95067 = (i__94519_95062 + (1));
seq__94516_95059 = G__95064;
chunk__94517_95060 = G__95065;
count__94518_95061 = G__95066;
i__94519_95062 = G__95067;
continue;
} else {
var temp__5735__auto___95068 = cljs.core.seq(seq__94516_95059);
if(temp__5735__auto___95068){
var seq__94516_95069__$1 = temp__5735__auto___95068;
if(cljs.core.chunked_seq_QMARK_(seq__94516_95069__$1)){
var c__4556__auto___95070 = cljs.core.chunk_first(seq__94516_95069__$1);
var G__95071 = cljs.core.chunk_rest(seq__94516_95069__$1);
var G__95072 = c__4556__auto___95070;
var G__95073 = cljs.core.count(c__4556__auto___95070);
var G__95074 = (0);
seq__94516_95059 = G__95071;
chunk__94517_95060 = G__95072;
count__94518_95061 = G__95073;
i__94519_95062 = G__95074;
continue;
} else {
var c_95075 = cljs.core.first(seq__94516_95069__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_95075);


var G__95076 = cljs.core.next(seq__94516_95069__$1);
var G__95077 = null;
var G__95078 = (0);
var G__95079 = (0);
seq__94516_95059 = G__95076;
chunk__94517_95060 = G__95077;
count__94518_95061 = G__95078;
i__94519_95062 = G__95079;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq94511){
var G__94512 = cljs.core.first(seq94511);
var seq94511__$1 = cljs.core.next(seq94511);
var G__94513 = cljs.core.first(seq94511__$1);
var seq94511__$2 = cljs.core.next(seq94511__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94512,G__94513,seq94511__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___95080 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___95080)){
var next_95081 = temp__5733__auto___95080;
dommy.core.insert_before_BANG_(elem,next_95081);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__94521 = arguments.length;
switch (G__94521) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__94522 = p;
G__94522.removeChild(elem);

return G__94522;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__94523){
var vec__94524 = p__94523;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94524,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94524,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___95084 = arguments.length;
var i__4737__auto___95085 = (0);
while(true){
if((i__4737__auto___95085 < len__4736__auto___95084)){
args__4742__auto__.push((arguments[i__4737__auto___95085]));

var G__95086 = (i__4737__auto___95085 + (1));
i__4737__auto___95085 = G__95086;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq94527){
var G__94528 = cljs.core.first(seq94527);
var seq94527__$1 = cljs.core.next(seq94527);
var G__94529 = cljs.core.first(seq94527__$1);
var seq94527__$2 = cljs.core.next(seq94527__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94528,G__94529,seq94527__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___95089 = arguments.length;
var i__4737__auto___95090 = (0);
while(true){
if((i__4737__auto___95090 < len__4736__auto___95089)){
args__4742__auto__.push((arguments[i__4737__auto___95090]));

var G__95091 = (i__4737__auto___95090 + (1));
i__4737__auto___95090 = G__95091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__94532_95093 = dommy.core.elem_and_selector(elem_sel);
var elem_95094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94532_95093,(0),null);
var selector_95095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94532_95093,(1),null);
var seq__94535_95096 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__94542_95097 = null;
var count__94543_95098 = (0);
var i__94544_95099 = (0);
while(true){
if((i__94544_95099 < count__94543_95098)){
var vec__94597_95100 = chunk__94542_95097.cljs$core$IIndexed$_nth$arity$2(null,i__94544_95099);
var orig_type_95101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94597_95100,(0),null);
var f_95102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94597_95100,(1),null);
var seq__94545_95103 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_95101,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_95101,cljs.core.identity])));
var chunk__94547_95104 = null;
var count__94548_95105 = (0);
var i__94549_95106 = (0);
while(true){
if((i__94549_95106 < count__94548_95105)){
var vec__94610_95107 = chunk__94547_95104.cljs$core$IIndexed$_nth$arity$2(null,i__94549_95106);
var actual_type_95108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94610_95107,(0),null);
var factory_95109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94610_95107,(1),null);
var canonical_f_95110 = (function (){var G__94614 = (factory_95109.cljs$core$IFn$_invoke$arity$1 ? factory_95109.cljs$core$IFn$_invoke$arity$1(f_95102) : factory_95109.call(null,f_95102));
var fexpr__94613 = (cljs.core.truth_(selector_95095)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_95094,selector_95095):cljs.core.identity);
return (fexpr__94613.cljs$core$IFn$_invoke$arity$1 ? fexpr__94613.cljs$core$IFn$_invoke$arity$1(G__94614) : fexpr__94613.call(null,G__94614));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_95094,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_95095,actual_type_95108,f_95102], null),canonical_f_95110], 0));

if(cljs.core.truth_(elem_95094.addEventListener)){
elem_95094.addEventListener(cljs.core.name(actual_type_95108),canonical_f_95110);
} else {
elem_95094.attachEvent(cljs.core.name(actual_type_95108),canonical_f_95110);
}


var G__95111 = seq__94545_95103;
var G__95112 = chunk__94547_95104;
var G__95113 = count__94548_95105;
var G__95114 = (i__94549_95106 + (1));
seq__94545_95103 = G__95111;
chunk__94547_95104 = G__95112;
count__94548_95105 = G__95113;
i__94549_95106 = G__95114;
continue;
} else {
var temp__5735__auto___95115 = cljs.core.seq(seq__94545_95103);
if(temp__5735__auto___95115){
var seq__94545_95116__$1 = temp__5735__auto___95115;
if(cljs.core.chunked_seq_QMARK_(seq__94545_95116__$1)){
var c__4556__auto___95117 = cljs.core.chunk_first(seq__94545_95116__$1);
var G__95118 = cljs.core.chunk_rest(seq__94545_95116__$1);
var G__95119 = c__4556__auto___95117;
var G__95120 = cljs.core.count(c__4556__auto___95117);
var G__95121 = (0);
seq__94545_95103 = G__95118;
chunk__94547_95104 = G__95119;
count__94548_95105 = G__95120;
i__94549_95106 = G__95121;
continue;
} else {
var vec__94615_95122 = cljs.core.first(seq__94545_95116__$1);
var actual_type_95123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94615_95122,(0),null);
var factory_95124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94615_95122,(1),null);
var canonical_f_95125 = (function (){var G__94619 = (factory_95124.cljs$core$IFn$_invoke$arity$1 ? factory_95124.cljs$core$IFn$_invoke$arity$1(f_95102) : factory_95124.call(null,f_95102));
var fexpr__94618 = (cljs.core.truth_(selector_95095)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_95094,selector_95095):cljs.core.identity);
return (fexpr__94618.cljs$core$IFn$_invoke$arity$1 ? fexpr__94618.cljs$core$IFn$_invoke$arity$1(G__94619) : fexpr__94618.call(null,G__94619));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_95094,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_95095,actual_type_95123,f_95102], null),canonical_f_95125], 0));

if(cljs.core.truth_(elem_95094.addEventListener)){
elem_95094.addEventListener(cljs.core.name(actual_type_95123),canonical_f_95125);
} else {
elem_95094.attachEvent(cljs.core.name(actual_type_95123),canonical_f_95125);
}


var G__95126 = cljs.core.next(seq__94545_95116__$1);
var G__95127 = null;
var G__95128 = (0);
var G__95129 = (0);
seq__94545_95103 = G__95126;
chunk__94547_95104 = G__95127;
count__94548_95105 = G__95128;
i__94549_95106 = G__95129;
continue;
}
} else {
}
}
break;
}

var G__95130 = seq__94535_95096;
var G__95132 = chunk__94542_95097;
var G__95133 = count__94543_95098;
var G__95134 = (i__94544_95099 + (1));
seq__94535_95096 = G__95130;
chunk__94542_95097 = G__95132;
count__94543_95098 = G__95133;
i__94544_95099 = G__95134;
continue;
} else {
var temp__5735__auto___95135 = cljs.core.seq(seq__94535_95096);
if(temp__5735__auto___95135){
var seq__94535_95136__$1 = temp__5735__auto___95135;
if(cljs.core.chunked_seq_QMARK_(seq__94535_95136__$1)){
var c__4556__auto___95137 = cljs.core.chunk_first(seq__94535_95136__$1);
var G__95138 = cljs.core.chunk_rest(seq__94535_95136__$1);
var G__95139 = c__4556__auto___95137;
var G__95140 = cljs.core.count(c__4556__auto___95137);
var G__95141 = (0);
seq__94535_95096 = G__95138;
chunk__94542_95097 = G__95139;
count__94543_95098 = G__95140;
i__94544_95099 = G__95141;
continue;
} else {
var vec__94620_95142 = cljs.core.first(seq__94535_95136__$1);
var orig_type_95143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94620_95142,(0),null);
var f_95144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94620_95142,(1),null);
var seq__94536_95145 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_95143,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_95143,cljs.core.identity])));
var chunk__94538_95146 = null;
var count__94539_95147 = (0);
var i__94540_95148 = (0);
while(true){
if((i__94540_95148 < count__94539_95147)){
var vec__94633_95149 = chunk__94538_95146.cljs$core$IIndexed$_nth$arity$2(null,i__94540_95148);
var actual_type_95150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94633_95149,(0),null);
var factory_95151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94633_95149,(1),null);
var canonical_f_95152 = (function (){var G__94637 = (factory_95151.cljs$core$IFn$_invoke$arity$1 ? factory_95151.cljs$core$IFn$_invoke$arity$1(f_95144) : factory_95151.call(null,f_95144));
var fexpr__94636 = (cljs.core.truth_(selector_95095)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_95094,selector_95095):cljs.core.identity);
return (fexpr__94636.cljs$core$IFn$_invoke$arity$1 ? fexpr__94636.cljs$core$IFn$_invoke$arity$1(G__94637) : fexpr__94636.call(null,G__94637));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_95094,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_95095,actual_type_95150,f_95144], null),canonical_f_95152], 0));

if(cljs.core.truth_(elem_95094.addEventListener)){
elem_95094.addEventListener(cljs.core.name(actual_type_95150),canonical_f_95152);
} else {
elem_95094.attachEvent(cljs.core.name(actual_type_95150),canonical_f_95152);
}


var G__95153 = seq__94536_95145;
var G__95154 = chunk__94538_95146;
var G__95155 = count__94539_95147;
var G__95156 = (i__94540_95148 + (1));
seq__94536_95145 = G__95153;
chunk__94538_95146 = G__95154;
count__94539_95147 = G__95155;
i__94540_95148 = G__95156;
continue;
} else {
var temp__5735__auto___95157__$1 = cljs.core.seq(seq__94536_95145);
if(temp__5735__auto___95157__$1){
var seq__94536_95158__$1 = temp__5735__auto___95157__$1;
if(cljs.core.chunked_seq_QMARK_(seq__94536_95158__$1)){
var c__4556__auto___95159 = cljs.core.chunk_first(seq__94536_95158__$1);
var G__95160 = cljs.core.chunk_rest(seq__94536_95158__$1);
var G__95161 = c__4556__auto___95159;
var G__95162 = cljs.core.count(c__4556__auto___95159);
var G__95163 = (0);
seq__94536_95145 = G__95160;
chunk__94538_95146 = G__95161;
count__94539_95147 = G__95162;
i__94540_95148 = G__95163;
continue;
} else {
var vec__94638_95164 = cljs.core.first(seq__94536_95158__$1);
var actual_type_95165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94638_95164,(0),null);
var factory_95166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94638_95164,(1),null);
var canonical_f_95167 = (function (){var G__94642 = (factory_95166.cljs$core$IFn$_invoke$arity$1 ? factory_95166.cljs$core$IFn$_invoke$arity$1(f_95144) : factory_95166.call(null,f_95144));
var fexpr__94641 = (cljs.core.truth_(selector_95095)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_95094,selector_95095):cljs.core.identity);
return (fexpr__94641.cljs$core$IFn$_invoke$arity$1 ? fexpr__94641.cljs$core$IFn$_invoke$arity$1(G__94642) : fexpr__94641.call(null,G__94642));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_95094,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_95095,actual_type_95165,f_95144], null),canonical_f_95167], 0));

if(cljs.core.truth_(elem_95094.addEventListener)){
elem_95094.addEventListener(cljs.core.name(actual_type_95165),canonical_f_95167);
} else {
elem_95094.attachEvent(cljs.core.name(actual_type_95165),canonical_f_95167);
}


var G__95168 = cljs.core.next(seq__94536_95158__$1);
var G__95169 = null;
var G__95170 = (0);
var G__95171 = (0);
seq__94536_95145 = G__95168;
chunk__94538_95146 = G__95169;
count__94539_95147 = G__95170;
i__94540_95148 = G__95171;
continue;
}
} else {
}
}
break;
}

var G__95172 = cljs.core.next(seq__94535_95136__$1);
var G__95173 = null;
var G__95174 = (0);
var G__95175 = (0);
seq__94535_95096 = G__95172;
chunk__94542_95097 = G__95173;
count__94543_95098 = G__95174;
i__94544_95099 = G__95175;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq94530){
var G__94531 = cljs.core.first(seq94530);
var seq94530__$1 = cljs.core.next(seq94530);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94531,seq94530__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___95177 = arguments.length;
var i__4737__auto___95178 = (0);
while(true){
if((i__4737__auto___95178 < len__4736__auto___95177)){
args__4742__auto__.push((arguments[i__4737__auto___95178]));

var G__95179 = (i__4737__auto___95178 + (1));
i__4737__auto___95178 = G__95179;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__94645_95180 = dommy.core.elem_and_selector(elem_sel);
var elem_95181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94645_95180,(0),null);
var selector_95182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94645_95180,(1),null);
var seq__94648_95183 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__94655_95184 = null;
var count__94656_95185 = (0);
var i__94657_95186 = (0);
while(true){
if((i__94657_95186 < count__94656_95185)){
var vec__94701_95187 = chunk__94655_95184.cljs$core$IIndexed$_nth$arity$2(null,i__94657_95186);
var orig_type_95188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94701_95187,(0),null);
var f_95189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94701_95187,(1),null);
var seq__94658_95190 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_95188,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_95188,cljs.core.identity])));
var chunk__94660_95191 = null;
var count__94661_95192 = (0);
var i__94662_95193 = (0);
while(true){
if((i__94662_95193 < count__94661_95192)){
var vec__94710_95194 = chunk__94660_95191.cljs$core$IIndexed$_nth$arity$2(null,i__94662_95193);
var actual_type_95195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94710_95194,(0),null);
var __95196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94710_95194,(1),null);
var keys_95197 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_95182,actual_type_95195,f_95189], null);
var canonical_f_95198 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_95181),keys_95197);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_95181,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_95197], 0));

if(cljs.core.truth_(elem_95181.removeEventListener)){
elem_95181.removeEventListener(cljs.core.name(actual_type_95195),canonical_f_95198);
} else {
elem_95181.detachEvent(cljs.core.name(actual_type_95195),canonical_f_95198);
}


var G__95200 = seq__94658_95190;
var G__95201 = chunk__94660_95191;
var G__95202 = count__94661_95192;
var G__95203 = (i__94662_95193 + (1));
seq__94658_95190 = G__95200;
chunk__94660_95191 = G__95201;
count__94661_95192 = G__95202;
i__94662_95193 = G__95203;
continue;
} else {
var temp__5735__auto___95207 = cljs.core.seq(seq__94658_95190);
if(temp__5735__auto___95207){
var seq__94658_95208__$1 = temp__5735__auto___95207;
if(cljs.core.chunked_seq_QMARK_(seq__94658_95208__$1)){
var c__4556__auto___95209 = cljs.core.chunk_first(seq__94658_95208__$1);
var G__95210 = cljs.core.chunk_rest(seq__94658_95208__$1);
var G__95211 = c__4556__auto___95209;
var G__95212 = cljs.core.count(c__4556__auto___95209);
var G__95213 = (0);
seq__94658_95190 = G__95210;
chunk__94660_95191 = G__95211;
count__94661_95192 = G__95212;
i__94662_95193 = G__95213;
continue;
} else {
var vec__94713_95214 = cljs.core.first(seq__94658_95208__$1);
var actual_type_95215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94713_95214,(0),null);
var __95217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94713_95214,(1),null);
var keys_95218 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_95182,actual_type_95215,f_95189], null);
var canonical_f_95219 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_95181),keys_95218);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_95181,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_95218], 0));

if(cljs.core.truth_(elem_95181.removeEventListener)){
elem_95181.removeEventListener(cljs.core.name(actual_type_95215),canonical_f_95219);
} else {
elem_95181.detachEvent(cljs.core.name(actual_type_95215),canonical_f_95219);
}


var G__95220 = cljs.core.next(seq__94658_95208__$1);
var G__95221 = null;
var G__95222 = (0);
var G__95223 = (0);
seq__94658_95190 = G__95220;
chunk__94660_95191 = G__95221;
count__94661_95192 = G__95222;
i__94662_95193 = G__95223;
continue;
}
} else {
}
}
break;
}

var G__95224 = seq__94648_95183;
var G__95225 = chunk__94655_95184;
var G__95226 = count__94656_95185;
var G__95227 = (i__94657_95186 + (1));
seq__94648_95183 = G__95224;
chunk__94655_95184 = G__95225;
count__94656_95185 = G__95226;
i__94657_95186 = G__95227;
continue;
} else {
var temp__5735__auto___95231 = cljs.core.seq(seq__94648_95183);
if(temp__5735__auto___95231){
var seq__94648_95232__$1 = temp__5735__auto___95231;
if(cljs.core.chunked_seq_QMARK_(seq__94648_95232__$1)){
var c__4556__auto___95233 = cljs.core.chunk_first(seq__94648_95232__$1);
var G__95234 = cljs.core.chunk_rest(seq__94648_95232__$1);
var G__95235 = c__4556__auto___95233;
var G__95236 = cljs.core.count(c__4556__auto___95233);
var G__95237 = (0);
seq__94648_95183 = G__95234;
chunk__94655_95184 = G__95235;
count__94656_95185 = G__95236;
i__94657_95186 = G__95237;
continue;
} else {
var vec__94716_95238 = cljs.core.first(seq__94648_95232__$1);
var orig_type_95239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94716_95238,(0),null);
var f_95240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94716_95238,(1),null);
var seq__94649_95241 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_95239,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_95239,cljs.core.identity])));
var chunk__94651_95242 = null;
var count__94652_95243 = (0);
var i__94653_95244 = (0);
while(true){
if((i__94653_95244 < count__94652_95243)){
var vec__94725_95246 = chunk__94651_95242.cljs$core$IIndexed$_nth$arity$2(null,i__94653_95244);
var actual_type_95247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94725_95246,(0),null);
var __95248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94725_95246,(1),null);
var keys_95249 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_95182,actual_type_95247,f_95240], null);
var canonical_f_95250 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_95181),keys_95249);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_95181,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_95249], 0));

if(cljs.core.truth_(elem_95181.removeEventListener)){
elem_95181.removeEventListener(cljs.core.name(actual_type_95247),canonical_f_95250);
} else {
elem_95181.detachEvent(cljs.core.name(actual_type_95247),canonical_f_95250);
}


var G__95251 = seq__94649_95241;
var G__95252 = chunk__94651_95242;
var G__95253 = count__94652_95243;
var G__95254 = (i__94653_95244 + (1));
seq__94649_95241 = G__95251;
chunk__94651_95242 = G__95252;
count__94652_95243 = G__95253;
i__94653_95244 = G__95254;
continue;
} else {
var temp__5735__auto___95255__$1 = cljs.core.seq(seq__94649_95241);
if(temp__5735__auto___95255__$1){
var seq__94649_95256__$1 = temp__5735__auto___95255__$1;
if(cljs.core.chunked_seq_QMARK_(seq__94649_95256__$1)){
var c__4556__auto___95257 = cljs.core.chunk_first(seq__94649_95256__$1);
var G__95261 = cljs.core.chunk_rest(seq__94649_95256__$1);
var G__95262 = c__4556__auto___95257;
var G__95263 = cljs.core.count(c__4556__auto___95257);
var G__95264 = (0);
seq__94649_95241 = G__95261;
chunk__94651_95242 = G__95262;
count__94652_95243 = G__95263;
i__94653_95244 = G__95264;
continue;
} else {
var vec__94728_95265 = cljs.core.first(seq__94649_95256__$1);
var actual_type_95266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94728_95265,(0),null);
var __95267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94728_95265,(1),null);
var keys_95268 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_95182,actual_type_95266,f_95240], null);
var canonical_f_95269 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_95181),keys_95268);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_95181,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_95268], 0));

if(cljs.core.truth_(elem_95181.removeEventListener)){
elem_95181.removeEventListener(cljs.core.name(actual_type_95266),canonical_f_95269);
} else {
elem_95181.detachEvent(cljs.core.name(actual_type_95266),canonical_f_95269);
}


var G__95270 = cljs.core.next(seq__94649_95256__$1);
var G__95271 = null;
var G__95272 = (0);
var G__95273 = (0);
seq__94649_95241 = G__95270;
chunk__94651_95242 = G__95271;
count__94652_95243 = G__95272;
i__94653_95244 = G__95273;
continue;
}
} else {
}
}
break;
}

var G__95274 = cljs.core.next(seq__94648_95232__$1);
var G__95275 = null;
var G__95276 = (0);
var G__95277 = (0);
seq__94648_95183 = G__95274;
chunk__94655_95184 = G__95275;
count__94656_95185 = G__95276;
i__94657_95186 = G__95277;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq94643){
var G__94644 = cljs.core.first(seq94643);
var seq94643__$1 = cljs.core.next(seq94643);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94644,seq94643__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___95281 = arguments.length;
var i__4737__auto___95282 = (0);
while(true){
if((i__4737__auto___95282 < len__4736__auto___95281)){
args__4742__auto__.push((arguments[i__4737__auto___95282]));

var G__95283 = (i__4737__auto___95282 + (1));
i__4737__auto___95282 = G__95283;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__94737_95287 = dommy.core.elem_and_selector(elem_sel);
var elem_95288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94737_95287,(0),null);
var selector_95289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94737_95287,(1),null);
var seq__94740_95290 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__94741_95291 = null;
var count__94742_95292 = (0);
var i__94743_95293 = (0);
while(true){
if((i__94743_95293 < count__94742_95292)){
var vec__94753_95294 = chunk__94741_95291.cljs$core$IIndexed$_nth$arity$2(null,i__94743_95293);
var type_95295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94753_95294,(0),null);
var f_95296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94753_95294,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_95295,((function (seq__94740_95290,chunk__94741_95291,count__94742_95292,i__94743_95293,vec__94753_95294,type_95295,f_95296,vec__94737_95287,elem_95288,selector_95289){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_95295,dommy$core$this_fn], 0));

return (f_95296.cljs$core$IFn$_invoke$arity$1 ? f_95296.cljs$core$IFn$_invoke$arity$1(e) : f_95296.call(null,e));
});})(seq__94740_95290,chunk__94741_95291,count__94742_95292,i__94743_95293,vec__94753_95294,type_95295,f_95296,vec__94737_95287,elem_95288,selector_95289))
], 0));


var G__95297 = seq__94740_95290;
var G__95298 = chunk__94741_95291;
var G__95299 = count__94742_95292;
var G__95300 = (i__94743_95293 + (1));
seq__94740_95290 = G__95297;
chunk__94741_95291 = G__95298;
count__94742_95292 = G__95299;
i__94743_95293 = G__95300;
continue;
} else {
var temp__5735__auto___95301 = cljs.core.seq(seq__94740_95290);
if(temp__5735__auto___95301){
var seq__94740_95302__$1 = temp__5735__auto___95301;
if(cljs.core.chunked_seq_QMARK_(seq__94740_95302__$1)){
var c__4556__auto___95303 = cljs.core.chunk_first(seq__94740_95302__$1);
var G__95304 = cljs.core.chunk_rest(seq__94740_95302__$1);
var G__95305 = c__4556__auto___95303;
var G__95306 = cljs.core.count(c__4556__auto___95303);
var G__95307 = (0);
seq__94740_95290 = G__95304;
chunk__94741_95291 = G__95305;
count__94742_95292 = G__95306;
i__94743_95293 = G__95307;
continue;
} else {
var vec__94759_95308 = cljs.core.first(seq__94740_95302__$1);
var type_95309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94759_95308,(0),null);
var f_95310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94759_95308,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_95309,((function (seq__94740_95290,chunk__94741_95291,count__94742_95292,i__94743_95293,vec__94759_95308,type_95309,f_95310,seq__94740_95302__$1,temp__5735__auto___95301,vec__94737_95287,elem_95288,selector_95289){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_95309,dommy$core$this_fn], 0));

return (f_95310.cljs$core$IFn$_invoke$arity$1 ? f_95310.cljs$core$IFn$_invoke$arity$1(e) : f_95310.call(null,e));
});})(seq__94740_95290,chunk__94741_95291,count__94742_95292,i__94743_95293,vec__94759_95308,type_95309,f_95310,seq__94740_95302__$1,temp__5735__auto___95301,vec__94737_95287,elem_95288,selector_95289))
], 0));


var G__95311 = cljs.core.next(seq__94740_95302__$1);
var G__95312 = null;
var G__95313 = (0);
var G__95314 = (0);
seq__94740_95290 = G__95311;
chunk__94741_95291 = G__95312;
count__94742_95292 = G__95313;
i__94743_95293 = G__95314;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq94735){
var G__94736 = cljs.core.first(seq94735);
var seq94735__$1 = cljs.core.next(seq94735);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94736,seq94735__$1);
}));


//# sourceMappingURL=dommy.core.js.map
