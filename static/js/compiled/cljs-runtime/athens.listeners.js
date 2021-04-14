goog.provide('athens.listeners');
/**
 * When blocks are selected, handle various keypresses:
 *   - shift+up/down: increase/decrease selection.
 *   - enter: deselect and begin editing textarea
 *   - backspace: delete all blocks
 *   - up/down: change editing textarea
 *   - tab: indent/unindent blocks
 *   Can't use textarea-key-down from keybindings.cljs because textarea is no longer focused.
 */
athens.listeners.multi_block_selection = (function athens$listeners$multi_block_selection(e){
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.truth_(cljs.core.not_empty(selected_items))){
var shift = e.shiftKey;
var key_code = e.keyCode;
var enter_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ENTER);
var bksp_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.BACKSPACE);
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP);
var down_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN);
var tab_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.TAB);
var delete_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DELETE);
if(enter_QMARK_){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),cljs.core.first(selected_items)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null));
} else {
if(((bksp_QMARK_) || (delete_QMARK_))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","delete","selected/delete",-812991161),selected_items], null));
} else {
if(tab_QMARK_){
e.preventDefault();

if(cljs.core.truth_(shift)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unindent","multi","unindent/multi",-555006624),selected_items], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("indent","multi","indent/multi",-1413321465),selected_items], null));
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = shift;
if(cljs.core.truth_(and__4115__auto__)){
return up_QMARK_;
} else {
return and__4115__auto__;
}
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","up","selected/up",921350754),selected_items], null));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = shift;
if(cljs.core.truth_(and__4115__auto__)){
return down_QMARK_;
} else {
return and__4115__auto__;
}
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","down","selected/down",-1806586329),selected_items], null));
} else {
if(((up_QMARK_) || (down_QMARK_))){
e.preventDefault();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null));

if(up_QMARK_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),cljs.core.first(selected_items),e], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.last(selected_items),e], null));
}
} else {
return null;
}
}
}
}
}
}
} else {
return null;
}
});
/**
 * Clears editing/uid when user clicks anywhere besides bullets, header, or on a block.
 *   Clears selected/items when user clicks somewhere besides a bullet point.
 */
athens.listeners.unfocus = (function athens$listeners$unfocus(e){
var selected_items_QMARK_ = cljs.core.not_empty(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null))));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var closest_block = e.target.closest(".block-content");
var closest_block_header = e.target.closest(".block-header");
var closest_page_header = e.target.closest(".page-header");
var closest_bullet = e.target.closest(".bullet");
var closest_dropdown = e.target.closest("#dropdown-menu");
var closest = (function (){var or__4126__auto__ = closest_block;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = closest_block_header;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = closest_page_header;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return closest_dropdown;
}
}
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_items_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (closest_bullet == null);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null));
} else {
}

if(cljs.core.truth_((((closest == null))?editing_uid:false))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null));
} else {
return null;
}
});
athens.listeners.key_down = (function athens$listeners$key_down(e){
var map__95412 = athens.util.destruct_key_down(e);
var map__95412__$1 = (((((!((map__95412 == null))))?(((((map__95412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95412):map__95412);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95412__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var ctrl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95412__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95412__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95412__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95412__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
if(cljs.core.truth_(athens.util.shortcut_key_QMARK_(meta,ctrl))){
var pred__95418 = cljs.core._EQ_;
var expr__95419 = key_code;
if(cljs.core.truth_((pred__95418.cljs$core$IFn$_invoke$arity$2 ? pred__95418.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.S,expr__95419) : pred__95418.call(null,goog.events.KeyCodes.S,expr__95419)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149)], null));
} else {
if(cljs.core.truth_((pred__95418.cljs$core$IFn$_invoke$arity$2 ? pred__95418.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.K,expr__95419) : pred__95418.call(null,goog.events.KeyCodes.K,expr__95419)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null));
} else {
if(cljs.core.truth_((pred__95418.cljs$core$IFn$_invoke$arity$2 ? pred__95418.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.G,expr__95419) : pred__95418.call(null,goog.events.KeyCodes.G,expr__95419)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("devtool","toggle","devtool/toggle",-1442703685)], null));
} else {
if(cljs.core.truth_((pred__95418.cljs$core$IFn$_invoke$arity$2 ? pred__95418.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.Z,expr__95419) : pred__95418.call(null,goog.events.KeyCodes.Z,expr__95419)))){
var editing_uid__$1 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.truth_((function (){var or__4126__auto__ = (editing_uid__$1 == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.not_empty(selected_items);
}
})())){
if(cljs.core.truth_(shift)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo","redo",501190664)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__95418.cljs$core$IFn$_invoke$arity$2 ? pred__95418.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.BACKSLASH,expr__95419) : pred__95418.call(null,goog.events.KeyCodes.BACKSLASH,expr__95419)))){
if(cljs.core.truth_(shift)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("left-sidebar","toggle","left-sidebar/toggle",212949860)], null));
}
} else {
if(cljs.core.truth_((pred__95418.cljs$core$IFn$_invoke$arity$2 ? pred__95418.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.T,expr__95419) : pred__95418.call(null,goog.events.KeyCodes.T,expr__95419)))){
return athens.util.toggle_10x();
} else {
return null;
}
}
}
}
}
}
} else {
if(cljs.core.truth_(alt)){
var pred__95423 = cljs.core._EQ_;
var expr__95424 = key_code;
if(cljs.core.truth_((pred__95423.cljs$core$IFn$_invoke$arity$2 ? pred__95423.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.LEFT,expr__95424) : pred__95423.call(null,goog.events.KeyCodes.LEFT,expr__95424)))){
if((editing_uid == null)){
return window.history.back();
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__95423.cljs$core$IFn$_invoke$arity$2 ? pred__95423.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.RIGHT,expr__95424) : pred__95423.call(null,goog.events.KeyCodes.RIGHT,expr__95424)))){
if((editing_uid == null)){
return window.history.forward();
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__95423.cljs$core$IFn$_invoke$arity$2 ? pred__95423.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.D,expr__95424) : pred__95423.call(null,goog.events.KeyCodes.D,expr__95424)))){
return athens.router.nav_daily_notes();
} else {
return null;
}
}
}
} else {
return null;
}
}
});
/**
 * https://github.com/ryanguill/roam-tools/blob/eda72040622555b52e40f7a28a14744bce0496e5/src/index.js#L336-L345
 */
athens.listeners.unformat_double_brackets = (function athens$listeners$unformat_double_brackets(s){
return clojure.string.replace(clojure.string.replace(s,/\[([^\[\]]+)\]\((\[\[|\(\()([^\[\]]+)(\]\]|\)\))\)/,"$1"),/\[\[([^\[\]]+)\]\]/,"$1");
});
/**
 * If there is a valid ((uid)), find the original block's string.
 *   If invalid ((uid)), no-op.
 *   TODO: If deep block ref, convert deep block ref to plain-text.
 * 
 *   Want to put this in athens.util, but circular dependency from athens.db
 */
athens.listeners.block_refs_to_plain_text = (function athens$listeners$block_refs_to_plain_text(s){
var replacements = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__95436){
var vec__95437 = p__95436;
var orig_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95437,(0),null);
var match_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95437,(1),null);
var eid = athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),match_str);
if(cljs.core.truth_(eid)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_str,athens.db.v_by_ea(eid,new cljs.core.Keyword("block","string","block/string",-2066596447))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_str,["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match_str),"))"].join('')], null);
}
}),cljs.core.re_seq(/\(\(([^\(\)]+)\)\)/,s));
var replacements__$1 = replacements;
var s__$1 = s;
while(true){
var orig_str = cljs.core.first(cljs.core.first(replacements__$1));
var replace_str = cljs.core.second(cljs.core.first(replacements__$1));
if(cljs.core.empty_QMARK_(replacements__$1)){
return s__$1;
} else {
var G__95512 = cljs.core.rest(replacements__$1);
var G__95513 = clojure.string.replace(s__$1,orig_str,replace_str);
replacements__$1 = G__95512;
s__$1 = G__95513;
continue;
}
break;
}
});
/**
 * Four spaces per depth level.
 */
athens.listeners.blocks_to_clipboard_data = (function athens$listeners$blocks_to_clipboard_data(var_args){
var G__95463 = arguments.length;
switch (G__95463) {
case 2:
return athens.listeners.blocks_to_clipboard_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return athens.listeners.blocks_to_clipboard_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.listeners.blocks_to_clipboard_data.cljs$core$IFn$_invoke$arity$2 = (function (depth,node){
return athens.listeners.blocks_to_clipboard_data.cljs$core$IFn$_invoke$arity$3(depth,node,false);
}));

(athens.listeners.blocks_to_clipboard_data.cljs$core$IFn$_invoke$arity$3 = (function (depth,node,unformat_QMARK_){
var map__95466 = node;
var map__95466__$1 = (((((!((map__95466 == null))))?(((((map__95466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95466):map__95466);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95466__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95466__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95466__$1,new cljs.core.Keyword("block","header","block/header",28765025));
var left_offset = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(depth,"    "));
var walk_children = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95461_SHARP_){
return athens.listeners.blocks_to_clipboard_data.cljs$core$IFn$_invoke$arity$3((depth + (1)),p1__95461_SHARP_,unformat_QMARK_);
}),children));
var string__$1 = (function (){var header_to_str = (function (){var G__95476 = header;
switch (G__95476) {
case (1):
return "# ";

break;
case (2):
return "## ";

break;
case (3):
return "### ";

break;
default:
return "";

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(header_to_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(string)].join('');
})();
var string__$2 = (cljs.core.truth_(unformat_QMARK_)?athens.listeners.block_refs_to_plain_text(athens.listeners.unformat_double_brackets(string__$1)):string__$1);
var dash = (cljs.core.truth_(unformat_QMARK_)?"":"- ");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_offset),dash,cljs.core.str.cljs$core$IFn$_invoke$arity$1(string__$2),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(walk_children)].join('');
}));

(athens.listeners.blocks_to_clipboard_data.cljs$lang$maxFixedArity = 3);

/**
 * If blocks are selected, copy blocks as markdown list.
 *   Use -event_ because goog events quirk 
 */
athens.listeners.copy = (function athens$listeners$copy(e){
var uids = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.truth_(cljs.core.not_empty(uids))){
var copy_data = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95478_SHARP_){
return athens.listeners.blocks_to_clipboard_data.cljs$core$IFn$_invoke$arity$2((0),p1__95478_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95477_SHARP_){
return athens.db.get_block_document(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__95477_SHARP_], null));
}),uids)));
e.preventDefault();

return e.event_.clipboardData.setData("text/plain",copy_data);
} else {
return null;
}
});
/**
 * Cut is essentially copy AND delete selected blocks
 */
athens.listeners.cut = (function athens$listeners$cut(e){
var uids = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.truth_(cljs.core.not_empty(uids))){
var copy_data = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95481_SHARP_){
return athens.listeners.blocks_to_clipboard_data.cljs$core$IFn$_invoke$arity$2((0),p1__95481_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95480_SHARP_){
return athens.db.get_block_document(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__95480_SHARP_], null));
}),uids)));
e.preventDefault();

e.event_.clipboardData.setData("text/plain",copy_data);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","delete","selected/delete",-812991161),uids], null));
} else {
return null;
}
});
/**
 * Google Closure's events/listen isn't working for some reason anymore.
 * 
 *   beforeunload is called before unload, where the window would be redirected/refreshed/quit.
 *   https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event 
 */
athens.listeners.prevent_save = (function athens$listeners$prevent_save(){
return window.addEventListener(goog.events.EventType.BEFOREUNLOAD,(function (e){
var synced_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","synced","db/synced",-1518558434)], null)));
if(cljs.core.truth_(synced_QMARK_)){
return null;
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("alert","js","alert/js",1692948327),"Athens hasn't finished saving yet. Athens is finished saving when the sync dot is green. Try refreshing or quitting again once the sync is complete."], null));

e.preventDefault();

(e.returnValue = "Setting e.returnValue to string prevents exit for some browsers.");

return "Returning a string also prevents exit on other browsers.";
}
}));
});
athens.listeners.init = (function athens$listeners$init(){
goog.events.listen(document,goog.events.EventType.MOUSEDOWN,athens.listeners.unfocus);

goog.events.listen(window,goog.events.EventType.KEYDOWN,athens.listeners.multi_block_selection);

goog.events.listen(window,goog.events.EventType.KEYDOWN,athens.listeners.key_down);

goog.events.listen(window,goog.events.EventType.COPY,athens.listeners.copy);

goog.events.listen(window,goog.events.EventType.CUT,athens.listeners.cut);

return athens.listeners.prevent_save();
});

//# sourceMappingURL=athens.listeners.js.map
