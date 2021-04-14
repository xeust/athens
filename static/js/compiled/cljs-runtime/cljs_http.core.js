goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__96075 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__96075.cljs$core$IFn$_invoke$arity$1 ? fexpr__96075.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__96075.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__96082){
var vec__96083 = p__96082;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96083,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__96086 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__96086)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__96086)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__96086)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__96086)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__96086)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__96086)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__96086)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__96119){
var map__96120 = p__96119;
var map__96120__$1 = (((((!((map__96120 == null))))?(((((map__96120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__96120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__96120):map__96120);
var request = map__96120__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96120__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96120__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96120__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__96133 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__96133,default_headers);

cljs_http.core.apply_response_type_BANG_(G__96133,response_type);

G__96133.setTimeoutInterval(timeout);

G__96133.setWithCredentials(send_credentials);

return G__96133;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__96143){
var map__96144 = p__96143;
var map__96144__$1 = (((((!((map__96144 == null))))?(((((map__96144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__96144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__96144):map__96144);
var request = map__96144__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96144__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96144__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96144__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96144__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96144__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96144__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__96156 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__96156) : cljs_http.core.error_kw.call(null,G__96156));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_96259 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__96163_96267 = xhr;
G__96163_96267.setProgressEventsEnabled(true);

G__96163_96267.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_96259,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__96163_96267.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_96259,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__63830__auto___96270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_96180){
var state_val_96181 = (state_96180[(1)]);
if((state_val_96181 === (1))){
var state_96180__$1 = state_96180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96180__$1,(2),cancel);
} else {
if((state_val_96181 === (2))){
var inst_96171 = (state_96180[(2)]);
var inst_96172 = xhr.isComplete();
var inst_96173 = cljs.core.not(inst_96172);
var state_96180__$1 = (function (){var statearr_96191 = state_96180;
(statearr_96191[(7)] = inst_96171);

return statearr_96191;
})();
if(inst_96173){
var statearr_96193_96271 = state_96180__$1;
(statearr_96193_96271[(1)] = (3));

} else {
var statearr_96194_96272 = state_96180__$1;
(statearr_96194_96272[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96181 === (3))){
var inst_96175 = xhr.abort();
var state_96180__$1 = state_96180;
var statearr_96195_96273 = state_96180__$1;
(statearr_96195_96273[(2)] = inst_96175);

(statearr_96195_96273[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96181 === (4))){
var state_96180__$1 = state_96180;
var statearr_96196_96277 = state_96180__$1;
(statearr_96196_96277[(2)] = null);

(statearr_96196_96277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96181 === (5))){
var inst_96178 = (state_96180[(2)]);
var state_96180__$1 = state_96180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96180__$1,inst_96178);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__63609__auto__ = null;
var cljs_http$core$xhr_$_state_machine__63609__auto____0 = (function (){
var statearr_96197 = [null,null,null,null,null,null,null,null];
(statearr_96197[(0)] = cljs_http$core$xhr_$_state_machine__63609__auto__);

(statearr_96197[(1)] = (1));

return statearr_96197;
});
var cljs_http$core$xhr_$_state_machine__63609__auto____1 = (function (state_96180){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_96180);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e96198){var ex__63612__auto__ = e96198;
var statearr_96199_96282 = state_96180;
(statearr_96199_96282[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_96180[(4)]))){
var statearr_96200_96283 = state_96180;
(statearr_96200_96283[(1)] = cljs.core.first((state_96180[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96284 = state_96180;
state_96180 = G__96284;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__63609__auto__ = function(state_96180){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__63609__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__63609__auto____1.call(this,state_96180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__63609__auto____0;
cljs_http$core$xhr_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__63609__auto____1;
return cljs_http$core$xhr_$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_96208 = f__63831__auto__();
(statearr_96208[(6)] = c__63830__auto___96270);

return statearr_96208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__96217){
var map__96225 = p__96217;
var map__96225__$1 = (((((!((map__96225 == null))))?(((((map__96225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__96225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__96225):map__96225);
var request = map__96225__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96225__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96225__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96225__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96225__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_96285 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_96285], null));

if(cljs.core.truth_(cancel)){
var c__63830__auto___96287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_96243){
var state_val_96244 = (state_96243[(1)]);
if((state_val_96244 === (1))){
var state_96243__$1 = state_96243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96243__$1,(2),cancel);
} else {
if((state_val_96244 === (2))){
var inst_96234 = (state_96243[(2)]);
var inst_96235 = jsonp.cancel(req_96285);
var state_96243__$1 = (function (){var statearr_96246 = state_96243;
(statearr_96246[(7)] = inst_96234);

return statearr_96246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_96243__$1,inst_96235);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__63609__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__63609__auto____0 = (function (){
var statearr_96247 = [null,null,null,null,null,null,null,null];
(statearr_96247[(0)] = cljs_http$core$jsonp_$_state_machine__63609__auto__);

(statearr_96247[(1)] = (1));

return statearr_96247;
});
var cljs_http$core$jsonp_$_state_machine__63609__auto____1 = (function (state_96243){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_96243);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e96248){var ex__63612__auto__ = e96248;
var statearr_96249_96291 = state_96243;
(statearr_96249_96291[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_96243[(4)]))){
var statearr_96250_96292 = state_96243;
(statearr_96250_96292[(1)] = cljs.core.first((state_96243[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96294 = state_96243;
state_96243 = G__96294;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__63609__auto__ = function(state_96243){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__63609__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__63609__auto____1.call(this,state_96243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__63609__auto____0;
cljs_http$core$jsonp_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__63609__auto____1;
return cljs_http$core$jsonp_$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_96251 = f__63831__auto__();
(statearr_96251[(6)] = c__63830__auto___96287);

return statearr_96251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__96252){
var map__96253 = p__96252;
var map__96253__$1 = (((((!((map__96253 == null))))?(((((map__96253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__96253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__96253):map__96253);
var request = map__96253__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96253__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
