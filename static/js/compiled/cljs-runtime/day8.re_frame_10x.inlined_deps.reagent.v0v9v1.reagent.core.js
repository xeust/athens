goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.is_client = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *   ```cljs
 *   (r/create-element "div" #js{:className "foo"}
 *  "Hi " (r/as-element [:strong "world!"])
 *   ```
 * 
 *   which is equivalent to
 * 
 *   ```cljs
 *   [:div.foo "Hi" [:strong "world!"]]
 *   ```
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$create_element(var_args){
var G__54663 = arguments.length;
switch (G__54663) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54765 = arguments.length;
var i__4737__auto___54766 = (0);
while(true){
if((i__4737__auto___54766 < len__4736__auto___54765)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54766]));

var G__54768 = (i__4737__auto___54766 + (1));
i__4737__auto___54766 = G__54768;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props,child);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(module$node_modules$react$index.createElement,type,props,child,children);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$lang$applyTo = (function (seq54659){
var G__54660 = cljs.core.first(seq54659);
var seq54659__$1 = cljs.core.next(seq54659);
var G__54661 = cljs.core.first(seq54659__$1);
var seq54659__$2 = cljs.core.next(seq54659__$1);
var G__54662 = cljs.core.first(seq54659__$2);
var seq54659__$3 = cljs.core.next(seq54659__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54660,G__54661,G__54662,seq54659__$3);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_element.cljs$lang$maxFixedArity = (3));

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$as_element(form){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element(form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.reactify_component(c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$render(var_args){
var G__54668 = arguments.length;
switch (G__54668) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$2(comp,container);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.unmount_component_at_node(container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.as_component = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.as_element;
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.render_component = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.render;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.flush_BANG_();

day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.force_update_all();

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.batching.flush_after_render();
});
/**
 * Creates JS class based on provided Clojure map, for example:
 * 
 *   ```cljs
 *   {;; Constructor
 * :constructor (fn [this props])
 * :get-initial-state (fn [this])
 * ;; Static methods
 * :get-derived-state-from-props (fn [props state] partial-state)
 * :get-derived-state-from-error (fn [error] partial-state)
 * ;; Methods
 * :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)
 * :should-component-update (fn [this old-argv new-argv])
 * :component-did-mount (fn [this])
 * :component-did-update (fn [this old-argv old-state snapshot])
 * :component-will-unmount (fn [this])
 * :component-did-catch (fn [this error info])
 * :reagent-render (fn [args....])
 * ;; Or alternatively:
 * :render (fn [this])
 * ;; Deprecated methods:
 * :UNSAFE_component-will-receive-props (fn [this new-argv])
 * :UNSAFE_component-will-update (fn [this new-argv new-state])
 * :UNSAFE_component-will-mount (fn [this])}
 *   ```
 * 
 *   Everything is optional, except either :reagent-render or :render.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 * 
 *   State can be initialized using constructor, which matches React.Component class,
 *   or using getInitialState which matches old React createClass function and is
 *   now implemented by Reagent for compatibility.
 * 
 *   State can usually be anything, e.g. Cljs object. But if using getDerivedState
 *   methods, the state has to be plain JS object as React implementation uses
 *   Object.assign to merge partial state into the current state.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$create_class(spec){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.create_class(spec);
});
/**
 * Returns the current React component (a.k.a `this`) in a component
 *   function.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.current_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$current_component(){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$state_atom(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to `(deref (r/state-atom this))`
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.state = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$state(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.state_atom(this$));
});
/**
 * Set state of a component.
 *   Equivalent to `(reset! (state-atom this) new-state)`
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.replace_state = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$replace_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.state_atom(this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to `(swap! (state-atom this) merge new-state)`
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.set_state = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$set_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.force_update = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$force_update(var_args){
var G__54680 = arguments.length;
switch (G__54680) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.flush_BANG_();

day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.force_update(this$,deep);

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.batching.flush_after_render();
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.force_update.cljs$lang$maxFixedArity = 2);

/**
 * Returns the props passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.props = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$props(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.children = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$children(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$argv(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.get_argv(this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$dom_node(this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.dom_node(this$);
});
/**
 * Function which normalizes and combines class values to a string
 * 
 *   Reagent allows classes to be defined as:
 *   - Strings
 *   - Named objects (Symbols or Keywords)
 *   - Collections of previous types
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$class_names(var_args){
var G__54709 = arguments.length;
switch (G__54709) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54780 = arguments.length;
var i__4737__auto___54781 = (0);
while(true){
if((i__4737__auto___54781 < len__4736__auto___54780)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54781]));

var G__54782 = (i__4737__auto___54781 + (1));
i__4737__auto___54781 = G__54782;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2 = (function (class1,class2){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class1,class2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (class1,class2,others){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.class_names,class1,class2,others);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names.cljs$lang$applyTo = (function (seq54706){
var G__54707 = cljs.core.first(seq54706);
var seq54706__$1 = cljs.core.next(seq54706);
var G__54708 = cljs.core.first(seq54706__$1);
var seq54706__$2 = cljs.core.next(seq54706__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54707,G__54708,seq54706__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.class_names.cljs$lang$maxFixedArity = (2));

/**
 * Utility function that merges some maps, handling `:class` and `:style`.
 * 
 *   The :class value is always normalized (using `class-names`) even if no
 *   merging is done.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$merge_props(var_args){
var G__54714 = arguments.length;
switch (G__54714) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54784 = arguments.length;
var i__4737__auto___54785 = (0);
while(true){
if((i__4737__auto___54785 < len__4736__auto___54784)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54785]));

var G__54786 = (i__4737__auto___54785 + (1));
i__4737__auto___54785 = G__54786;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (defaults){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1(defaults);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (defaults,props){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2(defaults,props);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (defaults,props,others){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.merge_props,defaults,props,others);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props.cljs$lang$applyTo = (function (seq54711){
var G__54712 = cljs.core.first(seq54711);
var seq54711__$1 = cljs.core.next(seq54711);
var G__54713 = cljs.core.first(seq54711__$1);
var seq54711__$2 = cljs.core.next(seq54711__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54712,G__54713,seq54711__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.merge_props.cljs$lang$maxFixedArity = (2));

/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.flush = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$flush(){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$atom(var_args){
var G__54721 = arguments.length;
switch (G__54721) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54791 = arguments.length;
var i__4737__auto___54792 = (0);
while(true){
if((i__4737__auto___54792 < len__4736__auto___54791)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54792]));

var G__54793 = (i__4737__auto___54792 + (1));
i__4737__auto___54792 = G__54793;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.atom,x,rest);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.atom.cljs$lang$applyTo = (function (seq54719){
var G__54720 = cljs.core.first(seq54719);
var seq54719__$1 = cljs.core.next(seq54719);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54720,seq54719__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.atom.cljs$lang$maxFixedArity = (1));

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, `@(track foo bar)` will produce the same result
 *   as `(foo bar)`, but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.track = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54798 = arguments.length;
var i__4737__auto___54799 = (0);
while(true){
if((i__4737__auto___54799 < len__4736__auto___54798)){
args__4742__auto__.push((arguments[i__4737__auto___54799]));

var G__54800 = (i__4737__auto___54799 + (1));
i__4737__auto___54799 = G__54800;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.make_track(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.track.cljs$lang$applyTo = (function (seq54723){
var G__54724 = cljs.core.first(seq54723);
var seq54723__$1 = cljs.core.next(seq54723);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54724,seq54723__$1);
}));

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$track_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54801 = arguments.length;
var i__4737__auto___54802 = (0);
while(true){
if((i__4737__auto___54802 < len__4736__auto___54801)){
args__4742__auto__.push((arguments[i__4737__auto___54802]));

var G__54803 = (i__4737__auto___54802 + (1));
i__4737__auto___54802 = G__54803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.make_track_BANG_(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq54725){
var G__54726 = cljs.core.first(seq54725);
var seq54725__$1 = cljs.core.next(seq54725);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54726,seq54725__$1);
}));

/**
 * Stop the result of track! from updating.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$dispose_BANG_(x){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   ```cljs
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 *   ```
 * 
 *   Probably useful only for passing to child components.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.wrap = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$wrap(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54804 = arguments.length;
var i__4737__auto___54805 = (0);
while(true){
if((i__4737__auto___54805 < len__4736__auto___54804)){
args__4742__auto__.push((arguments[i__4737__auto___54805]));

var G__54806 = (i__4737__auto___54805 + (1));
i__4737__auto___54805 = G__54806;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reset_fn], 0))].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.make_wrapper(value,reset_fn,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.wrap.cljs$lang$applyTo = (function (seq54731){
var G__54733 = cljs.core.first(seq54731);
var seq54731__$1 = cljs.core.next(seq54731);
var G__54734 = cljs.core.first(seq54731__$1);
var seq54731__$2 = cljs.core.next(seq54731__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54733,G__54734,seq54731__$2);
}));

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 * 
 *   ```cljs
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 *   ```
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *   ```cljs
 *   (defn set-get
 *  ([k] (get-in @state k))
 *  ([k v] (swap! state assoc-in k v)))
 *   ```
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   `(cursor state [:foo])` and `(cursor set-get [:foo])`.
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$cursor(src,path){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be `(apply f current-value-of-atom args)`.
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.rswap_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$rswap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54807 = arguments.length;
var i__4737__auto___54808 = (0);
while(true){
if((i__4737__auto___54808 < len__4736__auto___54807)){
args__4742__auto__.push((arguments[i__4737__auto___54808]));

var G__54809 = (i__4737__auto___54808 + (1));
i__4737__auto___54808 = G__54809;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__4126__auto__ = a.rswapfs;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (a.rswapfs = []);
}
})().push((function (p1__54735_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__54735_SHARP_,args);
}));
} else {
(a.rswapping = true);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__5737__auto__ = (function (){var G__54754 = a.rswapfs;
if((G__54754 == null)){
return null;
} else {
return G__54754.shift();
}
})();
if((temp__5737__auto__ == null)){
return s;
} else {
var sf = temp__5737__auto__;
var G__54811 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null,s));
s = G__54811;
continue;
}
break;
}
}));
}finally {(a.rswapping = false);
}}

return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq54736){
var G__54737 = cljs.core.first(seq54736);
var seq54736__$1 = cljs.core.next(seq54736);
var G__54738 = cljs.core.first(seq54736__$1);
var seq54736__$2 = cljs.core.next(seq54736__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54737,G__54738,seq54736__$2);
}));

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.next_tick = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$next_tick(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.after_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$after_render(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.partial = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$partial(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54815 = arguments.length;
var i__4737__auto___54816 = (0);
while(true){
if((i__4737__auto___54816 < len__4736__auto___54815)){
args__4742__auto__.push((arguments[i__4737__auto___54816]));

var G__54817 = (i__4737__auto___54816 + (1));
i__4737__auto___54816 = G__54817;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util.make_partial_fn(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.partial.cljs$lang$applyTo = (function (seq54758){
var G__54759 = cljs.core.first(seq54758);
var seq54758__$1 = cljs.core.next(seq54758);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54759,seq54758__$1);
}));

day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$core$component_path(c){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.component.component_path(c);
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.core.js.map
