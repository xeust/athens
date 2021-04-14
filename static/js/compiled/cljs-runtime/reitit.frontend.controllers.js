goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__92001,match){
var map__92002 = p__92001;
var map__92002__$1 = (((((!((map__92002 == null))))?(((((map__92002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92002):map__92002);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92002__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92002__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92002__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__92009(s__92010){
return (new cljs.core.LazySeq(null,(function (){
var s__92010__$1 = s__92010;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__92010__$1);
if(temp__5735__auto__){
var s__92010__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__92010__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__92010__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__92012 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__92011 = (0);
while(true){
if((i__92011 < size__4528__auto__)){
var vec__92013 = cljs.core._nth(c__4527__auto__,i__92011);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92013,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92013,(1),null);
cljs.core.chunk_append(b__92012,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__92079 = (i__92011 + (1));
i__92011 = G__92079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__92012),reitit$frontend$controllers$get_identity_$_iter__92009(cljs.core.chunk_rest(s__92010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__92012),null);
}
} else {
var vec__92016 = cljs.core.first(s__92010__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92016,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92016,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__92009(cljs.core.rest(s__92010__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__92028 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__92028) : f.call(null,G__92028));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__92038_92087 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__92039_92088 = null;
var count__92040_92089 = (0);
var i__92041_92090 = (0);
while(true){
if((i__92041_92090 < count__92040_92089)){
var controller_92095 = chunk__92039_92088.cljs$core$IIndexed$_nth$arity$2(null,i__92041_92090);
reitit.frontend.controllers.apply_controller(controller_92095,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__92097 = seq__92038_92087;
var G__92098 = chunk__92039_92088;
var G__92099 = count__92040_92089;
var G__92100 = (i__92041_92090 + (1));
seq__92038_92087 = G__92097;
chunk__92039_92088 = G__92098;
count__92040_92089 = G__92099;
i__92041_92090 = G__92100;
continue;
} else {
var temp__5735__auto___92101 = cljs.core.seq(seq__92038_92087);
if(temp__5735__auto___92101){
var seq__92038_92102__$1 = temp__5735__auto___92101;
if(cljs.core.chunked_seq_QMARK_(seq__92038_92102__$1)){
var c__4556__auto___92103 = cljs.core.chunk_first(seq__92038_92102__$1);
var G__92104 = cljs.core.chunk_rest(seq__92038_92102__$1);
var G__92105 = c__4556__auto___92103;
var G__92106 = cljs.core.count(c__4556__auto___92103);
var G__92107 = (0);
seq__92038_92087 = G__92104;
chunk__92039_92088 = G__92105;
count__92040_92089 = G__92106;
i__92041_92090 = G__92107;
continue;
} else {
var controller_92108 = cljs.core.first(seq__92038_92102__$1);
reitit.frontend.controllers.apply_controller(controller_92108,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__92109 = cljs.core.next(seq__92038_92102__$1);
var G__92110 = null;
var G__92111 = (0);
var G__92112 = (0);
seq__92038_92087 = G__92109;
chunk__92039_92088 = G__92110;
count__92040_92089 = G__92111;
i__92041_92090 = G__92112;
continue;
}
} else {
}
}
break;
}

var seq__92051_92113 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__92052_92114 = null;
var count__92053_92115 = (0);
var i__92054_92116 = (0);
while(true){
if((i__92054_92116 < count__92053_92115)){
var controller_92118 = chunk__92052_92114.cljs$core$IIndexed$_nth$arity$2(null,i__92054_92116);
reitit.frontend.controllers.apply_controller(controller_92118,new cljs.core.Keyword(null,"start","start",-355208981));


var G__92119 = seq__92051_92113;
var G__92120 = chunk__92052_92114;
var G__92121 = count__92053_92115;
var G__92122 = (i__92054_92116 + (1));
seq__92051_92113 = G__92119;
chunk__92052_92114 = G__92120;
count__92053_92115 = G__92121;
i__92054_92116 = G__92122;
continue;
} else {
var temp__5735__auto___92123 = cljs.core.seq(seq__92051_92113);
if(temp__5735__auto___92123){
var seq__92051_92124__$1 = temp__5735__auto___92123;
if(cljs.core.chunked_seq_QMARK_(seq__92051_92124__$1)){
var c__4556__auto___92125 = cljs.core.chunk_first(seq__92051_92124__$1);
var G__92126 = cljs.core.chunk_rest(seq__92051_92124__$1);
var G__92127 = c__4556__auto___92125;
var G__92128 = cljs.core.count(c__4556__auto___92125);
var G__92129 = (0);
seq__92051_92113 = G__92126;
chunk__92052_92114 = G__92127;
count__92053_92115 = G__92128;
i__92054_92116 = G__92129;
continue;
} else {
var controller_92130 = cljs.core.first(seq__92051_92124__$1);
reitit.frontend.controllers.apply_controller(controller_92130,new cljs.core.Keyword(null,"start","start",-355208981));


var G__92131 = cljs.core.next(seq__92051_92124__$1);
var G__92132 = null;
var G__92133 = (0);
var G__92134 = (0);
seq__92051_92113 = G__92131;
chunk__92052_92114 = G__92132;
count__92053_92115 = G__92133;
i__92054_92116 = G__92134;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
