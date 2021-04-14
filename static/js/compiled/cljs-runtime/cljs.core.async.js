goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__63900 = arguments.length;
switch (G__63900) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63901 = (function (f,blockable,meta63902){
this.f = f;
this.blockable = blockable;
this.meta63902 = meta63902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63903,meta63902__$1){
var self__ = this;
var _63903__$1 = this;
return (new cljs.core.async.t_cljs$core$async63901(self__.f,self__.blockable,meta63902__$1));
}));

(cljs.core.async.t_cljs$core$async63901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63903){
var self__ = this;
var _63903__$1 = this;
return self__.meta63902;
}));

(cljs.core.async.t_cljs$core$async63901.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63901.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async63901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async63901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta63902","meta63902",118854879,null)], null);
}));

(cljs.core.async.t_cljs$core$async63901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63901");

(cljs.core.async.t_cljs$core$async63901.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63901.
 */
cljs.core.async.__GT_t_cljs$core$async63901 = (function cljs$core$async$__GT_t_cljs$core$async63901(f__$1,blockable__$1,meta63902){
return (new cljs.core.async.t_cljs$core$async63901(f__$1,blockable__$1,meta63902));
});

}

return (new cljs.core.async.t_cljs$core$async63901(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__63908 = arguments.length;
switch (G__63908) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__63919 = arguments.length;
switch (G__63919) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__63930 = arguments.length;
switch (G__63930) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_65985 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_65985) : fn1.call(null,val_65985));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_65985) : fn1.call(null,val_65985));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__63934 = arguments.length;
switch (G__63934) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___65987 = n;
var x_65988 = (0);
while(true){
if((x_65988 < n__4613__auto___65987)){
(a[x_65988] = x_65988);

var G__65989 = (x_65988 + (1));
x_65988 = G__65989;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63941 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63941 = (function (flag,meta63942){
this.flag = flag;
this.meta63942 = meta63942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63943,meta63942__$1){
var self__ = this;
var _63943__$1 = this;
return (new cljs.core.async.t_cljs$core$async63941(self__.flag,meta63942__$1));
}));

(cljs.core.async.t_cljs$core$async63941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63943){
var self__ = this;
var _63943__$1 = this;
return self__.meta63942;
}));

(cljs.core.async.t_cljs$core$async63941.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async63941.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async63941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta63942","meta63942",452167944,null)], null);
}));

(cljs.core.async.t_cljs$core$async63941.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63941");

(cljs.core.async.t_cljs$core$async63941.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63941");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63941.
 */
cljs.core.async.__GT_t_cljs$core$async63941 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async63941(flag__$1,meta63942){
return (new cljs.core.async.t_cljs$core$async63941(flag__$1,meta63942));
});

}

return (new cljs.core.async.t_cljs$core$async63941(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63946 = (function (flag,cb,meta63947){
this.flag = flag;
this.cb = cb;
this.meta63947 = meta63947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63948,meta63947__$1){
var self__ = this;
var _63948__$1 = this;
return (new cljs.core.async.t_cljs$core$async63946(self__.flag,self__.cb,meta63947__$1));
}));

(cljs.core.async.t_cljs$core$async63946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63948){
var self__ = this;
var _63948__$1 = this;
return self__.meta63947;
}));

(cljs.core.async.t_cljs$core$async63946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async63946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async63946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta63947","meta63947",-2077925517,null)], null);
}));

(cljs.core.async.t_cljs$core$async63946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63946");

(cljs.core.async.t_cljs$core$async63946.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63946.
 */
cljs.core.async.__GT_t_cljs$core$async63946 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async63946(flag__$1,cb__$1,meta63947){
return (new cljs.core.async.t_cljs$core$async63946(flag__$1,cb__$1,meta63947));
});

}

return (new cljs.core.async.t_cljs$core$async63946(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__63953_SHARP_){
var G__63956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63953_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__63956) : fret.call(null,G__63956));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__63954_SHARP_){
var G__63957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63954_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__63957) : fret.call(null,G__63957));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__65990 = (i + (1));
i = G__65990;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65991 = arguments.length;
var i__4737__auto___65992 = (0);
while(true){
if((i__4737__auto___65992 < len__4736__auto___65991)){
args__4742__auto__.push((arguments[i__4737__auto___65992]));

var G__65993 = (i__4737__auto___65992 + (1));
i__4737__auto___65992 = G__65993;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__63970){
var map__63980 = p__63970;
var map__63980__$1 = (((((!((map__63980 == null))))?(((((map__63980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63980):map__63980);
var opts = map__63980__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq63958){
var G__63959 = cljs.core.first(seq63958);
var seq63958__$1 = cljs.core.next(seq63958);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63959,seq63958__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__63988 = arguments.length;
switch (G__63988) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__63830__auto___65995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_64091){
var state_val_64092 = (state_64091[(1)]);
if((state_val_64092 === (7))){
var inst_64087 = (state_64091[(2)]);
var state_64091__$1 = state_64091;
var statearr_64095_65996 = state_64091__$1;
(statearr_64095_65996[(2)] = inst_64087);

(statearr_64095_65996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (1))){
var state_64091__$1 = state_64091;
var statearr_64096_65997 = state_64091__$1;
(statearr_64096_65997[(2)] = null);

(statearr_64096_65997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (4))){
var inst_64069 = (state_64091[(7)]);
var inst_64069__$1 = (state_64091[(2)]);
var inst_64071 = (inst_64069__$1 == null);
var state_64091__$1 = (function (){var statearr_64097 = state_64091;
(statearr_64097[(7)] = inst_64069__$1);

return statearr_64097;
})();
if(cljs.core.truth_(inst_64071)){
var statearr_64098_65998 = state_64091__$1;
(statearr_64098_65998[(1)] = (5));

} else {
var statearr_64099_65999 = state_64091__$1;
(statearr_64099_65999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (13))){
var state_64091__$1 = state_64091;
var statearr_64100_66000 = state_64091__$1;
(statearr_64100_66000[(2)] = null);

(statearr_64100_66000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (6))){
var inst_64069 = (state_64091[(7)]);
var state_64091__$1 = state_64091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64091__$1,(11),to,inst_64069);
} else {
if((state_val_64092 === (3))){
var inst_64089 = (state_64091[(2)]);
var state_64091__$1 = state_64091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64091__$1,inst_64089);
} else {
if((state_val_64092 === (12))){
var state_64091__$1 = state_64091;
var statearr_64101_66001 = state_64091__$1;
(statearr_64101_66001[(2)] = null);

(statearr_64101_66001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (2))){
var state_64091__$1 = state_64091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64091__$1,(4),from);
} else {
if((state_val_64092 === (11))){
var inst_64080 = (state_64091[(2)]);
var state_64091__$1 = state_64091;
if(cljs.core.truth_(inst_64080)){
var statearr_64102_66003 = state_64091__$1;
(statearr_64102_66003[(1)] = (12));

} else {
var statearr_64103_66004 = state_64091__$1;
(statearr_64103_66004[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (9))){
var state_64091__$1 = state_64091;
var statearr_64104_66005 = state_64091__$1;
(statearr_64104_66005[(2)] = null);

(statearr_64104_66005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (5))){
var state_64091__$1 = state_64091;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64105_66006 = state_64091__$1;
(statearr_64105_66006[(1)] = (8));

} else {
var statearr_64106_66007 = state_64091__$1;
(statearr_64106_66007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (14))){
var inst_64085 = (state_64091[(2)]);
var state_64091__$1 = state_64091;
var statearr_64107_66008 = state_64091__$1;
(statearr_64107_66008[(2)] = inst_64085);

(statearr_64107_66008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (10))){
var inst_64077 = (state_64091[(2)]);
var state_64091__$1 = state_64091;
var statearr_64108_66009 = state_64091__$1;
(statearr_64108_66009[(2)] = inst_64077);

(statearr_64108_66009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (8))){
var inst_64074 = cljs.core.async.close_BANG_(to);
var state_64091__$1 = state_64091;
var statearr_64109_66010 = state_64091__$1;
(statearr_64109_66010[(2)] = inst_64074);

(statearr_64109_66010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_64110 = [null,null,null,null,null,null,null,null];
(statearr_64110[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_64110[(1)] = (1));

return statearr_64110;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_64091){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64091);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64111){var ex__63612__auto__ = e64111;
var statearr_64112_66011 = state_64091;
(statearr_64112_66011[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64091[(4)]))){
var statearr_64113_66012 = state_64091;
(statearr_64113_66012[(1)] = cljs.core.first((state_64091[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66013 = state_64091;
state_64091 = G__66013;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_64091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_64091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_64114 = f__63831__auto__();
(statearr_64114[(6)] = c__63830__auto___65995);

return statearr_64114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__64116){
var vec__64117 = p__64116;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64117,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64117,(1),null);
var job = vec__64117;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__63830__auto___66015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_64124){
var state_val_64125 = (state_64124[(1)]);
if((state_val_64125 === (1))){
var state_64124__$1 = state_64124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64124__$1,(2),res,v);
} else {
if((state_val_64125 === (2))){
var inst_64121 = (state_64124[(2)]);
var inst_64122 = cljs.core.async.close_BANG_(res);
var state_64124__$1 = (function (){var statearr_64126 = state_64124;
(statearr_64126[(7)] = inst_64121);

return statearr_64126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64124__$1,inst_64122);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0 = (function (){
var statearr_64127 = [null,null,null,null,null,null,null,null];
(statearr_64127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__);

(statearr_64127[(1)] = (1));

return statearr_64127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1 = (function (state_64124){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64124);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64128){var ex__63612__auto__ = e64128;
var statearr_64129_66016 = state_64124;
(statearr_64129_66016[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64124[(4)]))){
var statearr_64130_66017 = state_64124;
(statearr_64130_66017[(1)] = cljs.core.first((state_64124[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66018 = state_64124;
state_64124 = G__66018;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__ = function(state_64124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1.call(this,state_64124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_64131 = f__63831__auto__();
(statearr_64131[(6)] = c__63830__auto___66015);

return statearr_64131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__64132){
var vec__64133 = p__64132;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64133,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64133,(1),null);
var job = vec__64133;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___66019 = n;
var __66020 = (0);
while(true){
if((__66020 < n__4613__auto___66019)){
var G__64137_66021 = type;
var G__64137_66022__$1 = (((G__64137_66021 instanceof cljs.core.Keyword))?G__64137_66021.fqn:null);
switch (G__64137_66022__$1) {
case "compute":
var c__63830__auto___66024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__66020,c__63830__auto___66024,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async){
return (function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = ((function (__66020,c__63830__auto___66024,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async){
return (function (state_64150){
var state_val_64151 = (state_64150[(1)]);
if((state_val_64151 === (1))){
var state_64150__$1 = state_64150;
var statearr_64152_66025 = state_64150__$1;
(statearr_64152_66025[(2)] = null);

(statearr_64152_66025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64151 === (2))){
var state_64150__$1 = state_64150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64150__$1,(4),jobs);
} else {
if((state_val_64151 === (3))){
var inst_64148 = (state_64150[(2)]);
var state_64150__$1 = state_64150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64150__$1,inst_64148);
} else {
if((state_val_64151 === (4))){
var inst_64140 = (state_64150[(2)]);
var inst_64141 = process(inst_64140);
var state_64150__$1 = state_64150;
if(cljs.core.truth_(inst_64141)){
var statearr_64153_66026 = state_64150__$1;
(statearr_64153_66026[(1)] = (5));

} else {
var statearr_64154_66027 = state_64150__$1;
(statearr_64154_66027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64151 === (5))){
var state_64150__$1 = state_64150;
var statearr_64155_66028 = state_64150__$1;
(statearr_64155_66028[(2)] = null);

(statearr_64155_66028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64151 === (6))){
var state_64150__$1 = state_64150;
var statearr_64156_66029 = state_64150__$1;
(statearr_64156_66029[(2)] = null);

(statearr_64156_66029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64151 === (7))){
var inst_64146 = (state_64150[(2)]);
var state_64150__$1 = state_64150;
var statearr_64157_66030 = state_64150__$1;
(statearr_64157_66030[(2)] = inst_64146);

(statearr_64157_66030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__66020,c__63830__auto___66024,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async))
;
return ((function (__66020,switch__63608__auto__,c__63830__auto___66024,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0 = (function (){
var statearr_64158 = [null,null,null,null,null,null,null];
(statearr_64158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__);

(statearr_64158[(1)] = (1));

return statearr_64158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1 = (function (state_64150){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64150);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64159){var ex__63612__auto__ = e64159;
var statearr_64160_66031 = state_64150;
(statearr_64160_66031[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64150[(4)]))){
var statearr_64161_66032 = state_64150;
(statearr_64161_66032[(1)] = cljs.core.first((state_64150[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66033 = state_64150;
state_64150 = G__66033;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__ = function(state_64150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1.call(this,state_64150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__;
})()
;})(__66020,switch__63608__auto__,c__63830__auto___66024,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async))
})();
var state__63832__auto__ = (function (){var statearr_64162 = f__63831__auto__();
(statearr_64162[(6)] = c__63830__auto___66024);

return statearr_64162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
});})(__66020,c__63830__auto___66024,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async))
);


break;
case "async":
var c__63830__auto___66034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__66020,c__63830__auto___66034,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async){
return (function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = ((function (__66020,c__63830__auto___66034,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async){
return (function (state_64175){
var state_val_64176 = (state_64175[(1)]);
if((state_val_64176 === (1))){
var state_64175__$1 = state_64175;
var statearr_64177_66035 = state_64175__$1;
(statearr_64177_66035[(2)] = null);

(statearr_64177_66035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64176 === (2))){
var state_64175__$1 = state_64175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64175__$1,(4),jobs);
} else {
if((state_val_64176 === (3))){
var inst_64173 = (state_64175[(2)]);
var state_64175__$1 = state_64175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64175__$1,inst_64173);
} else {
if((state_val_64176 === (4))){
var inst_64165 = (state_64175[(2)]);
var inst_64166 = async(inst_64165);
var state_64175__$1 = state_64175;
if(cljs.core.truth_(inst_64166)){
var statearr_64178_66036 = state_64175__$1;
(statearr_64178_66036[(1)] = (5));

} else {
var statearr_64179_66037 = state_64175__$1;
(statearr_64179_66037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64176 === (5))){
var state_64175__$1 = state_64175;
var statearr_64180_66038 = state_64175__$1;
(statearr_64180_66038[(2)] = null);

(statearr_64180_66038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64176 === (6))){
var state_64175__$1 = state_64175;
var statearr_64181_66039 = state_64175__$1;
(statearr_64181_66039[(2)] = null);

(statearr_64181_66039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64176 === (7))){
var inst_64171 = (state_64175[(2)]);
var state_64175__$1 = state_64175;
var statearr_64182_66040 = state_64175__$1;
(statearr_64182_66040[(2)] = inst_64171);

(statearr_64182_66040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__66020,c__63830__auto___66034,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async))
;
return ((function (__66020,switch__63608__auto__,c__63830__auto___66034,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0 = (function (){
var statearr_64183 = [null,null,null,null,null,null,null];
(statearr_64183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__);

(statearr_64183[(1)] = (1));

return statearr_64183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1 = (function (state_64175){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64175);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64184){var ex__63612__auto__ = e64184;
var statearr_64185_66041 = state_64175;
(statearr_64185_66041[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64175[(4)]))){
var statearr_64186_66042 = state_64175;
(statearr_64186_66042[(1)] = cljs.core.first((state_64175[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66043 = state_64175;
state_64175 = G__66043;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__ = function(state_64175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1.call(this,state_64175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__;
})()
;})(__66020,switch__63608__auto__,c__63830__auto___66034,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async))
})();
var state__63832__auto__ = (function (){var statearr_64187 = f__63831__auto__();
(statearr_64187[(6)] = c__63830__auto___66034);

return statearr_64187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
});})(__66020,c__63830__auto___66034,G__64137_66021,G__64137_66022__$1,n__4613__auto___66019,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64137_66022__$1)].join('')));

}

var G__66044 = (__66020 + (1));
__66020 = G__66044;
continue;
} else {
}
break;
}

var c__63830__auto___66045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_64209){
var state_val_64210 = (state_64209[(1)]);
if((state_val_64210 === (7))){
var inst_64205 = (state_64209[(2)]);
var state_64209__$1 = state_64209;
var statearr_64211_66046 = state_64209__$1;
(statearr_64211_66046[(2)] = inst_64205);

(statearr_64211_66046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64210 === (1))){
var state_64209__$1 = state_64209;
var statearr_64212_66047 = state_64209__$1;
(statearr_64212_66047[(2)] = null);

(statearr_64212_66047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64210 === (4))){
var inst_64190 = (state_64209[(7)]);
var inst_64190__$1 = (state_64209[(2)]);
var inst_64191 = (inst_64190__$1 == null);
var state_64209__$1 = (function (){var statearr_64213 = state_64209;
(statearr_64213[(7)] = inst_64190__$1);

return statearr_64213;
})();
if(cljs.core.truth_(inst_64191)){
var statearr_64214_66048 = state_64209__$1;
(statearr_64214_66048[(1)] = (5));

} else {
var statearr_64215_66049 = state_64209__$1;
(statearr_64215_66049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64210 === (6))){
var inst_64190 = (state_64209[(7)]);
var inst_64195 = (state_64209[(8)]);
var inst_64195__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_64196 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64197 = [inst_64190,inst_64195__$1];
var inst_64198 = (new cljs.core.PersistentVector(null,2,(5),inst_64196,inst_64197,null));
var state_64209__$1 = (function (){var statearr_64216 = state_64209;
(statearr_64216[(8)] = inst_64195__$1);

return statearr_64216;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64209__$1,(8),jobs,inst_64198);
} else {
if((state_val_64210 === (3))){
var inst_64207 = (state_64209[(2)]);
var state_64209__$1 = state_64209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64209__$1,inst_64207);
} else {
if((state_val_64210 === (2))){
var state_64209__$1 = state_64209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64209__$1,(4),from);
} else {
if((state_val_64210 === (9))){
var inst_64202 = (state_64209[(2)]);
var state_64209__$1 = (function (){var statearr_64217 = state_64209;
(statearr_64217[(9)] = inst_64202);

return statearr_64217;
})();
var statearr_64218_66052 = state_64209__$1;
(statearr_64218_66052[(2)] = null);

(statearr_64218_66052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64210 === (5))){
var inst_64193 = cljs.core.async.close_BANG_(jobs);
var state_64209__$1 = state_64209;
var statearr_64219_66053 = state_64209__$1;
(statearr_64219_66053[(2)] = inst_64193);

(statearr_64219_66053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64210 === (8))){
var inst_64195 = (state_64209[(8)]);
var inst_64200 = (state_64209[(2)]);
var state_64209__$1 = (function (){var statearr_64220 = state_64209;
(statearr_64220[(10)] = inst_64200);

return statearr_64220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64209__$1,(9),results,inst_64195);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0 = (function (){
var statearr_64221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__);

(statearr_64221[(1)] = (1));

return statearr_64221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1 = (function (state_64209){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64209);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64222){var ex__63612__auto__ = e64222;
var statearr_64223_66054 = state_64209;
(statearr_64223_66054[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64209[(4)]))){
var statearr_64224_66055 = state_64209;
(statearr_64224_66055[(1)] = cljs.core.first((state_64209[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66056 = state_64209;
state_64209 = G__66056;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__ = function(state_64209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1.call(this,state_64209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_64225 = f__63831__auto__();
(statearr_64225[(6)] = c__63830__auto___66045);

return statearr_64225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


var c__63830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_64263){
var state_val_64264 = (state_64263[(1)]);
if((state_val_64264 === (7))){
var inst_64259 = (state_64263[(2)]);
var state_64263__$1 = state_64263;
var statearr_64268_66057 = state_64263__$1;
(statearr_64268_66057[(2)] = inst_64259);

(statearr_64268_66057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (20))){
var state_64263__$1 = state_64263;
var statearr_64269_66058 = state_64263__$1;
(statearr_64269_66058[(2)] = null);

(statearr_64269_66058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (1))){
var state_64263__$1 = state_64263;
var statearr_64270_66060 = state_64263__$1;
(statearr_64270_66060[(2)] = null);

(statearr_64270_66060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (4))){
var inst_64228 = (state_64263[(7)]);
var inst_64228__$1 = (state_64263[(2)]);
var inst_64229 = (inst_64228__$1 == null);
var state_64263__$1 = (function (){var statearr_64271 = state_64263;
(statearr_64271[(7)] = inst_64228__$1);

return statearr_64271;
})();
if(cljs.core.truth_(inst_64229)){
var statearr_64272_66061 = state_64263__$1;
(statearr_64272_66061[(1)] = (5));

} else {
var statearr_64273_66062 = state_64263__$1;
(statearr_64273_66062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (15))){
var inst_64241 = (state_64263[(8)]);
var state_64263__$1 = state_64263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64263__$1,(18),to,inst_64241);
} else {
if((state_val_64264 === (21))){
var inst_64254 = (state_64263[(2)]);
var state_64263__$1 = state_64263;
var statearr_64276_66063 = state_64263__$1;
(statearr_64276_66063[(2)] = inst_64254);

(statearr_64276_66063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (13))){
var inst_64256 = (state_64263[(2)]);
var state_64263__$1 = (function (){var statearr_64277 = state_64263;
(statearr_64277[(9)] = inst_64256);

return statearr_64277;
})();
var statearr_64278_66064 = state_64263__$1;
(statearr_64278_66064[(2)] = null);

(statearr_64278_66064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (6))){
var inst_64228 = (state_64263[(7)]);
var state_64263__$1 = state_64263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64263__$1,(11),inst_64228);
} else {
if((state_val_64264 === (17))){
var inst_64249 = (state_64263[(2)]);
var state_64263__$1 = state_64263;
if(cljs.core.truth_(inst_64249)){
var statearr_64279_66065 = state_64263__$1;
(statearr_64279_66065[(1)] = (19));

} else {
var statearr_64280_66066 = state_64263__$1;
(statearr_64280_66066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (3))){
var inst_64261 = (state_64263[(2)]);
var state_64263__$1 = state_64263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64263__$1,inst_64261);
} else {
if((state_val_64264 === (12))){
var inst_64238 = (state_64263[(10)]);
var state_64263__$1 = state_64263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64263__$1,(14),inst_64238);
} else {
if((state_val_64264 === (2))){
var state_64263__$1 = state_64263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64263__$1,(4),results);
} else {
if((state_val_64264 === (19))){
var state_64263__$1 = state_64263;
var statearr_64281_66067 = state_64263__$1;
(statearr_64281_66067[(2)] = null);

(statearr_64281_66067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (11))){
var inst_64238 = (state_64263[(2)]);
var state_64263__$1 = (function (){var statearr_64282 = state_64263;
(statearr_64282[(10)] = inst_64238);

return statearr_64282;
})();
var statearr_64283_66068 = state_64263__$1;
(statearr_64283_66068[(2)] = null);

(statearr_64283_66068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (9))){
var state_64263__$1 = state_64263;
var statearr_64284_66069 = state_64263__$1;
(statearr_64284_66069[(2)] = null);

(statearr_64284_66069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (5))){
var state_64263__$1 = state_64263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64285_66070 = state_64263__$1;
(statearr_64285_66070[(1)] = (8));

} else {
var statearr_64286_66071 = state_64263__$1;
(statearr_64286_66071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (14))){
var inst_64241 = (state_64263[(8)]);
var inst_64241__$1 = (state_64263[(2)]);
var inst_64242 = (inst_64241__$1 == null);
var inst_64243 = cljs.core.not(inst_64242);
var state_64263__$1 = (function (){var statearr_64287 = state_64263;
(statearr_64287[(8)] = inst_64241__$1);

return statearr_64287;
})();
if(inst_64243){
var statearr_64288_66072 = state_64263__$1;
(statearr_64288_66072[(1)] = (15));

} else {
var statearr_64289_66073 = state_64263__$1;
(statearr_64289_66073[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (16))){
var state_64263__$1 = state_64263;
var statearr_64290_66074 = state_64263__$1;
(statearr_64290_66074[(2)] = false);

(statearr_64290_66074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (10))){
var inst_64235 = (state_64263[(2)]);
var state_64263__$1 = state_64263;
var statearr_64291_66075 = state_64263__$1;
(statearr_64291_66075[(2)] = inst_64235);

(statearr_64291_66075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (18))){
var inst_64246 = (state_64263[(2)]);
var state_64263__$1 = state_64263;
var statearr_64292_66076 = state_64263__$1;
(statearr_64292_66076[(2)] = inst_64246);

(statearr_64292_66076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64264 === (8))){
var inst_64232 = cljs.core.async.close_BANG_(to);
var state_64263__$1 = state_64263;
var statearr_64293_66077 = state_64263__$1;
(statearr_64293_66077[(2)] = inst_64232);

(statearr_64293_66077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0 = (function (){
var statearr_64294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__);

(statearr_64294[(1)] = (1));

return statearr_64294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1 = (function (state_64263){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64263);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64295){var ex__63612__auto__ = e64295;
var statearr_64296_66078 = state_64263;
(statearr_64296_66078[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64263[(4)]))){
var statearr_64297_66079 = state_64263;
(statearr_64297_66079[(1)] = cljs.core.first((state_64263[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66080 = state_64263;
state_64263 = G__66080;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__ = function(state_64263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1.call(this,state_64263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__63609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_64300 = f__63831__auto__();
(statearr_64300[(6)] = c__63830__auto__);

return statearr_64300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));

return c__63830__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__64302 = arguments.length;
switch (G__64302) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__64307 = arguments.length;
switch (G__64307) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__64309 = arguments.length;
switch (G__64309) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__63830__auto___66085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_64338){
var state_val_64339 = (state_64338[(1)]);
if((state_val_64339 === (7))){
var inst_64334 = (state_64338[(2)]);
var state_64338__$1 = state_64338;
var statearr_64340_66086 = state_64338__$1;
(statearr_64340_66086[(2)] = inst_64334);

(statearr_64340_66086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64339 === (1))){
var state_64338__$1 = state_64338;
var statearr_64341_66087 = state_64338__$1;
(statearr_64341_66087[(2)] = null);

(statearr_64341_66087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64339 === (4))){
var inst_64315 = (state_64338[(7)]);
var inst_64315__$1 = (state_64338[(2)]);
var inst_64316 = (inst_64315__$1 == null);
var state_64338__$1 = (function (){var statearr_64342 = state_64338;
(statearr_64342[(7)] = inst_64315__$1);

return statearr_64342;
})();
if(cljs.core.truth_(inst_64316)){
var statearr_64343_66089 = state_64338__$1;
(statearr_64343_66089[(1)] = (5));

} else {
var statearr_64344_66090 = state_64338__$1;
(statearr_64344_66090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64339 === (13))){
var state_64338__$1 = state_64338;
var statearr_64345_66091 = state_64338__$1;
(statearr_64345_66091[(2)] = null);

(statearr_64345_66091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64339 === (6))){
var inst_64315 = (state_64338[(7)]);
var inst_64321 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_64315) : p.call(null,inst_64315));
var state_64338__$1 = state_64338;
if(cljs.core.truth_(inst_64321)){
var statearr_64346_66092 = state_64338__$1;
(statearr_64346_66092[(1)] = (9));

} else {
var statearr_64347_66094 = state_64338__$1;
(statearr_64347_66094[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64339 === (3))){
var inst_64336 = (state_64338[(2)]);
var state_64338__$1 = state_64338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64338__$1,inst_64336);
} else {
if((state_val_64339 === (12))){
var state_64338__$1 = state_64338;
var statearr_64348_66096 = state_64338__$1;
(statearr_64348_66096[(2)] = null);

(statearr_64348_66096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64339 === (2))){
var state_64338__$1 = state_64338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64338__$1,(4),ch);
} else {
if((state_val_64339 === (11))){
var inst_64315 = (state_64338[(7)]);
var inst_64325 = (state_64338[(2)]);
var state_64338__$1 = state_64338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64338__$1,(8),inst_64325,inst_64315);
} else {
if((state_val_64339 === (9))){
var state_64338__$1 = state_64338;
var statearr_64349_66098 = state_64338__$1;
(statearr_64349_66098[(2)] = tc);

(statearr_64349_66098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64339 === (5))){
var inst_64318 = cljs.core.async.close_BANG_(tc);
var inst_64319 = cljs.core.async.close_BANG_(fc);
var state_64338__$1 = (function (){var statearr_64350 = state_64338;
(statearr_64350[(8)] = inst_64318);

return statearr_64350;
})();
var statearr_64352_66099 = state_64338__$1;
(statearr_64352_66099[(2)] = inst_64319);

(statearr_64352_66099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64339 === (14))){
var inst_64332 = (state_64338[(2)]);
var state_64338__$1 = state_64338;
var statearr_64355_66100 = state_64338__$1;
(statearr_64355_66100[(2)] = inst_64332);

(statearr_64355_66100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64339 === (10))){
var state_64338__$1 = state_64338;
var statearr_64356_66101 = state_64338__$1;
(statearr_64356_66101[(2)] = fc);

(statearr_64356_66101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64339 === (8))){
var inst_64327 = (state_64338[(2)]);
var state_64338__$1 = state_64338;
if(cljs.core.truth_(inst_64327)){
var statearr_64357_66102 = state_64338__$1;
(statearr_64357_66102[(1)] = (12));

} else {
var statearr_64358_66103 = state_64338__$1;
(statearr_64358_66103[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_64359 = [null,null,null,null,null,null,null,null,null];
(statearr_64359[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_64359[(1)] = (1));

return statearr_64359;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_64338){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64338);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64363){var ex__63612__auto__ = e64363;
var statearr_64364_66104 = state_64338;
(statearr_64364_66104[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64338[(4)]))){
var statearr_64365_66105 = state_64338;
(statearr_64365_66105[(1)] = cljs.core.first((state_64338[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66106 = state_64338;
state_64338 = G__66106;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_64338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_64338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_64366 = f__63831__auto__();
(statearr_64366[(6)] = c__63830__auto___66085);

return statearr_64366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__63830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_64388){
var state_val_64389 = (state_64388[(1)]);
if((state_val_64389 === (7))){
var inst_64384 = (state_64388[(2)]);
var state_64388__$1 = state_64388;
var statearr_64395_66107 = state_64388__$1;
(statearr_64395_66107[(2)] = inst_64384);

(statearr_64395_66107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64389 === (1))){
var inst_64367 = init;
var inst_64368 = inst_64367;
var state_64388__$1 = (function (){var statearr_64396 = state_64388;
(statearr_64396[(7)] = inst_64368);

return statearr_64396;
})();
var statearr_64397_66108 = state_64388__$1;
(statearr_64397_66108[(2)] = null);

(statearr_64397_66108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64389 === (4))){
var inst_64371 = (state_64388[(8)]);
var inst_64371__$1 = (state_64388[(2)]);
var inst_64372 = (inst_64371__$1 == null);
var state_64388__$1 = (function (){var statearr_64398 = state_64388;
(statearr_64398[(8)] = inst_64371__$1);

return statearr_64398;
})();
if(cljs.core.truth_(inst_64372)){
var statearr_64399_66109 = state_64388__$1;
(statearr_64399_66109[(1)] = (5));

} else {
var statearr_64400_66110 = state_64388__$1;
(statearr_64400_66110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64389 === (6))){
var inst_64368 = (state_64388[(7)]);
var inst_64371 = (state_64388[(8)]);
var inst_64375 = (state_64388[(9)]);
var inst_64375__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_64368,inst_64371) : f.call(null,inst_64368,inst_64371));
var inst_64376 = cljs.core.reduced_QMARK_(inst_64375__$1);
var state_64388__$1 = (function (){var statearr_64401 = state_64388;
(statearr_64401[(9)] = inst_64375__$1);

return statearr_64401;
})();
if(inst_64376){
var statearr_64402_66111 = state_64388__$1;
(statearr_64402_66111[(1)] = (8));

} else {
var statearr_64403_66112 = state_64388__$1;
(statearr_64403_66112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64389 === (3))){
var inst_64386 = (state_64388[(2)]);
var state_64388__$1 = state_64388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64388__$1,inst_64386);
} else {
if((state_val_64389 === (2))){
var state_64388__$1 = state_64388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64388__$1,(4),ch);
} else {
if((state_val_64389 === (9))){
var inst_64375 = (state_64388[(9)]);
var inst_64368 = inst_64375;
var state_64388__$1 = (function (){var statearr_64404 = state_64388;
(statearr_64404[(7)] = inst_64368);

return statearr_64404;
})();
var statearr_64405_66113 = state_64388__$1;
(statearr_64405_66113[(2)] = null);

(statearr_64405_66113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64389 === (5))){
var inst_64368 = (state_64388[(7)]);
var state_64388__$1 = state_64388;
var statearr_64406_66114 = state_64388__$1;
(statearr_64406_66114[(2)] = inst_64368);

(statearr_64406_66114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64389 === (10))){
var inst_64382 = (state_64388[(2)]);
var state_64388__$1 = state_64388;
var statearr_64407_66115 = state_64388__$1;
(statearr_64407_66115[(2)] = inst_64382);

(statearr_64407_66115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64389 === (8))){
var inst_64375 = (state_64388[(9)]);
var inst_64378 = cljs.core.deref(inst_64375);
var state_64388__$1 = state_64388;
var statearr_64408_66116 = state_64388__$1;
(statearr_64408_66116[(2)] = inst_64378);

(statearr_64408_66116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__63609__auto__ = null;
var cljs$core$async$reduce_$_state_machine__63609__auto____0 = (function (){
var statearr_64409 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64409[(0)] = cljs$core$async$reduce_$_state_machine__63609__auto__);

(statearr_64409[(1)] = (1));

return statearr_64409;
});
var cljs$core$async$reduce_$_state_machine__63609__auto____1 = (function (state_64388){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64388);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64410){var ex__63612__auto__ = e64410;
var statearr_64411_66117 = state_64388;
(statearr_64411_66117[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64388[(4)]))){
var statearr_64415_66118 = state_64388;
(statearr_64415_66118[(1)] = cljs.core.first((state_64388[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66121 = state_64388;
state_64388 = G__66121;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__63609__auto__ = function(state_64388){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__63609__auto____1.call(this,state_64388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__63609__auto____0;
cljs$core$async$reduce_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__63609__auto____1;
return cljs$core$async$reduce_$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_64418 = f__63831__auto__();
(statearr_64418[(6)] = c__63830__auto__);

return statearr_64418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));

return c__63830__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__63830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_64430){
var state_val_64431 = (state_64430[(1)]);
if((state_val_64431 === (1))){
var inst_64424 = cljs.core.async.reduce(f__$1,init,ch);
var state_64430__$1 = state_64430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64430__$1,(2),inst_64424);
} else {
if((state_val_64431 === (2))){
var inst_64426 = (state_64430[(2)]);
var inst_64428 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_64426) : f__$1.call(null,inst_64426));
var state_64430__$1 = state_64430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64430__$1,inst_64428);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__63609__auto__ = null;
var cljs$core$async$transduce_$_state_machine__63609__auto____0 = (function (){
var statearr_64435 = [null,null,null,null,null,null,null];
(statearr_64435[(0)] = cljs$core$async$transduce_$_state_machine__63609__auto__);

(statearr_64435[(1)] = (1));

return statearr_64435;
});
var cljs$core$async$transduce_$_state_machine__63609__auto____1 = (function (state_64430){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64430);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64436){var ex__63612__auto__ = e64436;
var statearr_64437_66123 = state_64430;
(statearr_64437_66123[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64430[(4)]))){
var statearr_64438_66124 = state_64430;
(statearr_64438_66124[(1)] = cljs.core.first((state_64430[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66125 = state_64430;
state_64430 = G__66125;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__63609__auto__ = function(state_64430){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__63609__auto____1.call(this,state_64430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__63609__auto____0;
cljs$core$async$transduce_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__63609__auto____1;
return cljs$core$async$transduce_$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_64439 = f__63831__auto__();
(statearr_64439[(6)] = c__63830__auto__);

return statearr_64439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));

return c__63830__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__64441 = arguments.length;
switch (G__64441) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__63830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_64472){
var state_val_64474 = (state_64472[(1)]);
if((state_val_64474 === (7))){
var inst_64454 = (state_64472[(2)]);
var state_64472__$1 = state_64472;
var statearr_64477_66129 = state_64472__$1;
(statearr_64477_66129[(2)] = inst_64454);

(statearr_64477_66129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64474 === (1))){
var inst_64448 = cljs.core.seq(coll);
var inst_64449 = inst_64448;
var state_64472__$1 = (function (){var statearr_64478 = state_64472;
(statearr_64478[(7)] = inst_64449);

return statearr_64478;
})();
var statearr_64479_66130 = state_64472__$1;
(statearr_64479_66130[(2)] = null);

(statearr_64479_66130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64474 === (4))){
var inst_64449 = (state_64472[(7)]);
var inst_64452 = cljs.core.first(inst_64449);
var state_64472__$1 = state_64472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64472__$1,(7),ch,inst_64452);
} else {
if((state_val_64474 === (13))){
var inst_64466 = (state_64472[(2)]);
var state_64472__$1 = state_64472;
var statearr_64480_66131 = state_64472__$1;
(statearr_64480_66131[(2)] = inst_64466);

(statearr_64480_66131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64474 === (6))){
var inst_64457 = (state_64472[(2)]);
var state_64472__$1 = state_64472;
if(cljs.core.truth_(inst_64457)){
var statearr_64482_66132 = state_64472__$1;
(statearr_64482_66132[(1)] = (8));

} else {
var statearr_64483_66133 = state_64472__$1;
(statearr_64483_66133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64474 === (3))){
var inst_64470 = (state_64472[(2)]);
var state_64472__$1 = state_64472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64472__$1,inst_64470);
} else {
if((state_val_64474 === (12))){
var state_64472__$1 = state_64472;
var statearr_64484_66136 = state_64472__$1;
(statearr_64484_66136[(2)] = null);

(statearr_64484_66136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64474 === (2))){
var inst_64449 = (state_64472[(7)]);
var state_64472__$1 = state_64472;
if(cljs.core.truth_(inst_64449)){
var statearr_64489_66137 = state_64472__$1;
(statearr_64489_66137[(1)] = (4));

} else {
var statearr_64490_66138 = state_64472__$1;
(statearr_64490_66138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64474 === (11))){
var inst_64463 = cljs.core.async.close_BANG_(ch);
var state_64472__$1 = state_64472;
var statearr_64491_66141 = state_64472__$1;
(statearr_64491_66141[(2)] = inst_64463);

(statearr_64491_66141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64474 === (9))){
var state_64472__$1 = state_64472;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64492_66142 = state_64472__$1;
(statearr_64492_66142[(1)] = (11));

} else {
var statearr_64493_66143 = state_64472__$1;
(statearr_64493_66143[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64474 === (5))){
var inst_64449 = (state_64472[(7)]);
var state_64472__$1 = state_64472;
var statearr_64494_66144 = state_64472__$1;
(statearr_64494_66144[(2)] = inst_64449);

(statearr_64494_66144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64474 === (10))){
var inst_64468 = (state_64472[(2)]);
var state_64472__$1 = state_64472;
var statearr_64495_66145 = state_64472__$1;
(statearr_64495_66145[(2)] = inst_64468);

(statearr_64495_66145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64474 === (8))){
var inst_64449 = (state_64472[(7)]);
var inst_64459 = cljs.core.next(inst_64449);
var inst_64449__$1 = inst_64459;
var state_64472__$1 = (function (){var statearr_64496 = state_64472;
(statearr_64496[(7)] = inst_64449__$1);

return statearr_64496;
})();
var statearr_64497_66146 = state_64472__$1;
(statearr_64497_66146[(2)] = null);

(statearr_64497_66146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_64498 = [null,null,null,null,null,null,null,null];
(statearr_64498[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_64498[(1)] = (1));

return statearr_64498;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_64472){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64472);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64499){var ex__63612__auto__ = e64499;
var statearr_64500_66147 = state_64472;
(statearr_64500_66147[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64472[(4)]))){
var statearr_64501_66148 = state_64472;
(statearr_64501_66148[(1)] = cljs.core.first((state_64472[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66149 = state_64472;
state_64472 = G__66149;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_64472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_64472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_64505 = f__63831__auto__();
(statearr_64505[(6)] = c__63830__auto__);

return statearr_64505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));

return c__63830__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__64510 = arguments.length;
switch (G__64510) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_66153 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_66153(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_66157 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_66157(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_66159 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_66159(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_66160 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_66160(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64531 = (function (ch,cs,meta64532){
this.ch = ch;
this.cs = cs;
this.meta64532 = meta64532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64533,meta64532__$1){
var self__ = this;
var _64533__$1 = this;
return (new cljs.core.async.t_cljs$core$async64531(self__.ch,self__.cs,meta64532__$1));
}));

(cljs.core.async.t_cljs$core$async64531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64533){
var self__ = this;
var _64533__$1 = this;
return self__.meta64532;
}));

(cljs.core.async.t_cljs$core$async64531.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async64531.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64531.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async64531.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async64531.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async64531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta64532","meta64532",1561901710,null)], null);
}));

(cljs.core.async.t_cljs$core$async64531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64531");

(cljs.core.async.t_cljs$core$async64531.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64531.
 */
cljs.core.async.__GT_t_cljs$core$async64531 = (function cljs$core$async$mult_$___GT_t_cljs$core$async64531(ch__$1,cs__$1,meta64532){
return (new cljs.core.async.t_cljs$core$async64531(ch__$1,cs__$1,meta64532));
});

}

return (new cljs.core.async.t_cljs$core$async64531(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__63830__auto___66167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_64724){
var state_val_64725 = (state_64724[(1)]);
if((state_val_64725 === (7))){
var inst_64720 = (state_64724[(2)]);
var state_64724__$1 = state_64724;
var statearr_64726_66168 = state_64724__$1;
(statearr_64726_66168[(2)] = inst_64720);

(statearr_64726_66168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (20))){
var inst_64601 = (state_64724[(7)]);
var inst_64613 = cljs.core.first(inst_64601);
var inst_64614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64613,(0),null);
var inst_64615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64613,(1),null);
var state_64724__$1 = (function (){var statearr_64727 = state_64724;
(statearr_64727[(8)] = inst_64614);

return statearr_64727;
})();
if(cljs.core.truth_(inst_64615)){
var statearr_64728_66169 = state_64724__$1;
(statearr_64728_66169[(1)] = (22));

} else {
var statearr_64729_66170 = state_64724__$1;
(statearr_64729_66170[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (27))){
var inst_64570 = (state_64724[(9)]);
var inst_64668 = (state_64724[(10)]);
var inst_64673 = (state_64724[(11)]);
var inst_64666 = (state_64724[(12)]);
var inst_64673__$1 = cljs.core._nth(inst_64666,inst_64668);
var inst_64674 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_64673__$1,inst_64570,done);
var state_64724__$1 = (function (){var statearr_64730 = state_64724;
(statearr_64730[(11)] = inst_64673__$1);

return statearr_64730;
})();
if(cljs.core.truth_(inst_64674)){
var statearr_64732_66173 = state_64724__$1;
(statearr_64732_66173[(1)] = (30));

} else {
var statearr_64733_66174 = state_64724__$1;
(statearr_64733_66174[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (1))){
var state_64724__$1 = state_64724;
var statearr_64734_66175 = state_64724__$1;
(statearr_64734_66175[(2)] = null);

(statearr_64734_66175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (24))){
var inst_64601 = (state_64724[(7)]);
var inst_64620 = (state_64724[(2)]);
var inst_64621 = cljs.core.next(inst_64601);
var inst_64579 = inst_64621;
var inst_64580 = null;
var inst_64581 = (0);
var inst_64582 = (0);
var state_64724__$1 = (function (){var statearr_64738 = state_64724;
(statearr_64738[(13)] = inst_64580);

(statearr_64738[(14)] = inst_64582);

(statearr_64738[(15)] = inst_64620);

(statearr_64738[(16)] = inst_64581);

(statearr_64738[(17)] = inst_64579);

return statearr_64738;
})();
var statearr_64739_66176 = state_64724__$1;
(statearr_64739_66176[(2)] = null);

(statearr_64739_66176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (39))){
var state_64724__$1 = state_64724;
var statearr_64743_66177 = state_64724__$1;
(statearr_64743_66177[(2)] = null);

(statearr_64743_66177[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (4))){
var inst_64570 = (state_64724[(9)]);
var inst_64570__$1 = (state_64724[(2)]);
var inst_64571 = (inst_64570__$1 == null);
var state_64724__$1 = (function (){var statearr_64744 = state_64724;
(statearr_64744[(9)] = inst_64570__$1);

return statearr_64744;
})();
if(cljs.core.truth_(inst_64571)){
var statearr_64745_66178 = state_64724__$1;
(statearr_64745_66178[(1)] = (5));

} else {
var statearr_64746_66179 = state_64724__$1;
(statearr_64746_66179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (15))){
var inst_64580 = (state_64724[(13)]);
var inst_64582 = (state_64724[(14)]);
var inst_64581 = (state_64724[(16)]);
var inst_64579 = (state_64724[(17)]);
var inst_64597 = (state_64724[(2)]);
var inst_64598 = (inst_64582 + (1));
var tmp64740 = inst_64580;
var tmp64741 = inst_64581;
var tmp64742 = inst_64579;
var inst_64579__$1 = tmp64742;
var inst_64580__$1 = tmp64740;
var inst_64581__$1 = tmp64741;
var inst_64582__$1 = inst_64598;
var state_64724__$1 = (function (){var statearr_64747 = state_64724;
(statearr_64747[(13)] = inst_64580__$1);

(statearr_64747[(14)] = inst_64582__$1);

(statearr_64747[(18)] = inst_64597);

(statearr_64747[(16)] = inst_64581__$1);

(statearr_64747[(17)] = inst_64579__$1);

return statearr_64747;
})();
var statearr_64749_66181 = state_64724__$1;
(statearr_64749_66181[(2)] = null);

(statearr_64749_66181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (21))){
var inst_64624 = (state_64724[(2)]);
var state_64724__$1 = state_64724;
var statearr_64755_66182 = state_64724__$1;
(statearr_64755_66182[(2)] = inst_64624);

(statearr_64755_66182[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (31))){
var inst_64673 = (state_64724[(11)]);
var inst_64677 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_64673);
var state_64724__$1 = state_64724;
var statearr_64756_66183 = state_64724__$1;
(statearr_64756_66183[(2)] = inst_64677);

(statearr_64756_66183[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (32))){
var inst_64667 = (state_64724[(19)]);
var inst_64668 = (state_64724[(10)]);
var inst_64665 = (state_64724[(20)]);
var inst_64666 = (state_64724[(12)]);
var inst_64679 = (state_64724[(2)]);
var inst_64680 = (inst_64668 + (1));
var tmp64752 = inst_64667;
var tmp64753 = inst_64665;
var tmp64754 = inst_64666;
var inst_64665__$1 = tmp64753;
var inst_64666__$1 = tmp64754;
var inst_64667__$1 = tmp64752;
var inst_64668__$1 = inst_64680;
var state_64724__$1 = (function (){var statearr_64757 = state_64724;
(statearr_64757[(21)] = inst_64679);

(statearr_64757[(19)] = inst_64667__$1);

(statearr_64757[(10)] = inst_64668__$1);

(statearr_64757[(20)] = inst_64665__$1);

(statearr_64757[(12)] = inst_64666__$1);

return statearr_64757;
})();
var statearr_64759_66185 = state_64724__$1;
(statearr_64759_66185[(2)] = null);

(statearr_64759_66185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (40))){
var inst_64692 = (state_64724[(22)]);
var inst_64696 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_64692);
var state_64724__$1 = state_64724;
var statearr_64762_66188 = state_64724__$1;
(statearr_64762_66188[(2)] = inst_64696);

(statearr_64762_66188[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (33))){
var inst_64683 = (state_64724[(23)]);
var inst_64685 = cljs.core.chunked_seq_QMARK_(inst_64683);
var state_64724__$1 = state_64724;
if(inst_64685){
var statearr_64763_66189 = state_64724__$1;
(statearr_64763_66189[(1)] = (36));

} else {
var statearr_64764_66190 = state_64724__$1;
(statearr_64764_66190[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (13))){
var inst_64591 = (state_64724[(24)]);
var inst_64594 = cljs.core.async.close_BANG_(inst_64591);
var state_64724__$1 = state_64724;
var statearr_64765_66191 = state_64724__$1;
(statearr_64765_66191[(2)] = inst_64594);

(statearr_64765_66191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (22))){
var inst_64614 = (state_64724[(8)]);
var inst_64617 = cljs.core.async.close_BANG_(inst_64614);
var state_64724__$1 = state_64724;
var statearr_64769_66192 = state_64724__$1;
(statearr_64769_66192[(2)] = inst_64617);

(statearr_64769_66192[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (36))){
var inst_64683 = (state_64724[(23)]);
var inst_64687 = cljs.core.chunk_first(inst_64683);
var inst_64688 = cljs.core.chunk_rest(inst_64683);
var inst_64689 = cljs.core.count(inst_64687);
var inst_64665 = inst_64688;
var inst_64666 = inst_64687;
var inst_64667 = inst_64689;
var inst_64668 = (0);
var state_64724__$1 = (function (){var statearr_64774 = state_64724;
(statearr_64774[(19)] = inst_64667);

(statearr_64774[(10)] = inst_64668);

(statearr_64774[(20)] = inst_64665);

(statearr_64774[(12)] = inst_64666);

return statearr_64774;
})();
var statearr_64775_66194 = state_64724__$1;
(statearr_64775_66194[(2)] = null);

(statearr_64775_66194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (41))){
var inst_64683 = (state_64724[(23)]);
var inst_64698 = (state_64724[(2)]);
var inst_64700 = cljs.core.next(inst_64683);
var inst_64665 = inst_64700;
var inst_64666 = null;
var inst_64667 = (0);
var inst_64668 = (0);
var state_64724__$1 = (function (){var statearr_64778 = state_64724;
(statearr_64778[(19)] = inst_64667);

(statearr_64778[(10)] = inst_64668);

(statearr_64778[(20)] = inst_64665);

(statearr_64778[(12)] = inst_64666);

(statearr_64778[(25)] = inst_64698);

return statearr_64778;
})();
var statearr_64780_66195 = state_64724__$1;
(statearr_64780_66195[(2)] = null);

(statearr_64780_66195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (43))){
var state_64724__$1 = state_64724;
var statearr_64781_66196 = state_64724__$1;
(statearr_64781_66196[(2)] = null);

(statearr_64781_66196[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (29))){
var inst_64708 = (state_64724[(2)]);
var state_64724__$1 = state_64724;
var statearr_64782_66197 = state_64724__$1;
(statearr_64782_66197[(2)] = inst_64708);

(statearr_64782_66197[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (44))){
var inst_64717 = (state_64724[(2)]);
var state_64724__$1 = (function (){var statearr_64786 = state_64724;
(statearr_64786[(26)] = inst_64717);

return statearr_64786;
})();
var statearr_64787_66198 = state_64724__$1;
(statearr_64787_66198[(2)] = null);

(statearr_64787_66198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (6))){
var inst_64657 = (state_64724[(27)]);
var inst_64656 = cljs.core.deref(cs);
var inst_64657__$1 = cljs.core.keys(inst_64656);
var inst_64658 = cljs.core.count(inst_64657__$1);
var inst_64659 = cljs.core.reset_BANG_(dctr,inst_64658);
var inst_64664 = cljs.core.seq(inst_64657__$1);
var inst_64665 = inst_64664;
var inst_64666 = null;
var inst_64667 = (0);
var inst_64668 = (0);
var state_64724__$1 = (function (){var statearr_64788 = state_64724;
(statearr_64788[(19)] = inst_64667);

(statearr_64788[(10)] = inst_64668);

(statearr_64788[(27)] = inst_64657__$1);

(statearr_64788[(20)] = inst_64665);

(statearr_64788[(12)] = inst_64666);

(statearr_64788[(28)] = inst_64659);

return statearr_64788;
})();
var statearr_64789_66200 = state_64724__$1;
(statearr_64789_66200[(2)] = null);

(statearr_64789_66200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (28))){
var inst_64665 = (state_64724[(20)]);
var inst_64683 = (state_64724[(23)]);
var inst_64683__$1 = cljs.core.seq(inst_64665);
var state_64724__$1 = (function (){var statearr_64790 = state_64724;
(statearr_64790[(23)] = inst_64683__$1);

return statearr_64790;
})();
if(inst_64683__$1){
var statearr_64792_66201 = state_64724__$1;
(statearr_64792_66201[(1)] = (33));

} else {
var statearr_64793_66202 = state_64724__$1;
(statearr_64793_66202[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (25))){
var inst_64667 = (state_64724[(19)]);
var inst_64668 = (state_64724[(10)]);
var inst_64670 = (inst_64668 < inst_64667);
var inst_64671 = inst_64670;
var state_64724__$1 = state_64724;
if(cljs.core.truth_(inst_64671)){
var statearr_64795_66204 = state_64724__$1;
(statearr_64795_66204[(1)] = (27));

} else {
var statearr_64796_66205 = state_64724__$1;
(statearr_64796_66205[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (34))){
var state_64724__$1 = state_64724;
var statearr_64797_66206 = state_64724__$1;
(statearr_64797_66206[(2)] = null);

(statearr_64797_66206[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (17))){
var state_64724__$1 = state_64724;
var statearr_64798_66208 = state_64724__$1;
(statearr_64798_66208[(2)] = null);

(statearr_64798_66208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (3))){
var inst_64722 = (state_64724[(2)]);
var state_64724__$1 = state_64724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64724__$1,inst_64722);
} else {
if((state_val_64725 === (12))){
var inst_64629 = (state_64724[(2)]);
var state_64724__$1 = state_64724;
var statearr_64802_66210 = state_64724__$1;
(statearr_64802_66210[(2)] = inst_64629);

(statearr_64802_66210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (2))){
var state_64724__$1 = state_64724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64724__$1,(4),ch);
} else {
if((state_val_64725 === (23))){
var state_64724__$1 = state_64724;
var statearr_64806_66211 = state_64724__$1;
(statearr_64806_66211[(2)] = null);

(statearr_64806_66211[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (35))){
var inst_64706 = (state_64724[(2)]);
var state_64724__$1 = state_64724;
var statearr_64810_66213 = state_64724__$1;
(statearr_64810_66213[(2)] = inst_64706);

(statearr_64810_66213[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (19))){
var inst_64601 = (state_64724[(7)]);
var inst_64605 = cljs.core.chunk_first(inst_64601);
var inst_64606 = cljs.core.chunk_rest(inst_64601);
var inst_64607 = cljs.core.count(inst_64605);
var inst_64579 = inst_64606;
var inst_64580 = inst_64605;
var inst_64581 = inst_64607;
var inst_64582 = (0);
var state_64724__$1 = (function (){var statearr_64811 = state_64724;
(statearr_64811[(13)] = inst_64580);

(statearr_64811[(14)] = inst_64582);

(statearr_64811[(16)] = inst_64581);

(statearr_64811[(17)] = inst_64579);

return statearr_64811;
})();
var statearr_64812_66214 = state_64724__$1;
(statearr_64812_66214[(2)] = null);

(statearr_64812_66214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (11))){
var inst_64601 = (state_64724[(7)]);
var inst_64579 = (state_64724[(17)]);
var inst_64601__$1 = cljs.core.seq(inst_64579);
var state_64724__$1 = (function (){var statearr_64813 = state_64724;
(statearr_64813[(7)] = inst_64601__$1);

return statearr_64813;
})();
if(inst_64601__$1){
var statearr_64814_66215 = state_64724__$1;
(statearr_64814_66215[(1)] = (16));

} else {
var statearr_64815_66216 = state_64724__$1;
(statearr_64815_66216[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (9))){
var inst_64631 = (state_64724[(2)]);
var state_64724__$1 = state_64724;
var statearr_64816_66220 = state_64724__$1;
(statearr_64816_66220[(2)] = inst_64631);

(statearr_64816_66220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (5))){
var inst_64577 = cljs.core.deref(cs);
var inst_64578 = cljs.core.seq(inst_64577);
var inst_64579 = inst_64578;
var inst_64580 = null;
var inst_64581 = (0);
var inst_64582 = (0);
var state_64724__$1 = (function (){var statearr_64817 = state_64724;
(statearr_64817[(13)] = inst_64580);

(statearr_64817[(14)] = inst_64582);

(statearr_64817[(16)] = inst_64581);

(statearr_64817[(17)] = inst_64579);

return statearr_64817;
})();
var statearr_64818_66221 = state_64724__$1;
(statearr_64818_66221[(2)] = null);

(statearr_64818_66221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (14))){
var state_64724__$1 = state_64724;
var statearr_64821_66222 = state_64724__$1;
(statearr_64821_66222[(2)] = null);

(statearr_64821_66222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (45))){
var inst_64714 = (state_64724[(2)]);
var state_64724__$1 = state_64724;
var statearr_64823_66223 = state_64724__$1;
(statearr_64823_66223[(2)] = inst_64714);

(statearr_64823_66223[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (26))){
var inst_64657 = (state_64724[(27)]);
var inst_64710 = (state_64724[(2)]);
var inst_64711 = cljs.core.seq(inst_64657);
var state_64724__$1 = (function (){var statearr_64824 = state_64724;
(statearr_64824[(29)] = inst_64710);

return statearr_64824;
})();
if(inst_64711){
var statearr_64825_66229 = state_64724__$1;
(statearr_64825_66229[(1)] = (42));

} else {
var statearr_64826_66230 = state_64724__$1;
(statearr_64826_66230[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (16))){
var inst_64601 = (state_64724[(7)]);
var inst_64603 = cljs.core.chunked_seq_QMARK_(inst_64601);
var state_64724__$1 = state_64724;
if(inst_64603){
var statearr_64830_66232 = state_64724__$1;
(statearr_64830_66232[(1)] = (19));

} else {
var statearr_64831_66233 = state_64724__$1;
(statearr_64831_66233[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (38))){
var inst_64703 = (state_64724[(2)]);
var state_64724__$1 = state_64724;
var statearr_64837_66234 = state_64724__$1;
(statearr_64837_66234[(2)] = inst_64703);

(statearr_64837_66234[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (30))){
var state_64724__$1 = state_64724;
var statearr_64839_66235 = state_64724__$1;
(statearr_64839_66235[(2)] = null);

(statearr_64839_66235[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (10))){
var inst_64580 = (state_64724[(13)]);
var inst_64582 = (state_64724[(14)]);
var inst_64590 = cljs.core._nth(inst_64580,inst_64582);
var inst_64591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64590,(0),null);
var inst_64592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64590,(1),null);
var state_64724__$1 = (function (){var statearr_64840 = state_64724;
(statearr_64840[(24)] = inst_64591);

return statearr_64840;
})();
if(cljs.core.truth_(inst_64592)){
var statearr_64841_66236 = state_64724__$1;
(statearr_64841_66236[(1)] = (13));

} else {
var statearr_64843_66237 = state_64724__$1;
(statearr_64843_66237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (18))){
var inst_64627 = (state_64724[(2)]);
var state_64724__$1 = state_64724;
var statearr_64846_66238 = state_64724__$1;
(statearr_64846_66238[(2)] = inst_64627);

(statearr_64846_66238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (42))){
var state_64724__$1 = state_64724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64724__$1,(45),dchan);
} else {
if((state_val_64725 === (37))){
var inst_64570 = (state_64724[(9)]);
var inst_64692 = (state_64724[(22)]);
var inst_64683 = (state_64724[(23)]);
var inst_64692__$1 = cljs.core.first(inst_64683);
var inst_64693 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_64692__$1,inst_64570,done);
var state_64724__$1 = (function (){var statearr_64848 = state_64724;
(statearr_64848[(22)] = inst_64692__$1);

return statearr_64848;
})();
if(cljs.core.truth_(inst_64693)){
var statearr_64851_66239 = state_64724__$1;
(statearr_64851_66239[(1)] = (39));

} else {
var statearr_64852_66240 = state_64724__$1;
(statearr_64852_66240[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64725 === (8))){
var inst_64582 = (state_64724[(14)]);
var inst_64581 = (state_64724[(16)]);
var inst_64584 = (inst_64582 < inst_64581);
var inst_64585 = inst_64584;
var state_64724__$1 = state_64724;
if(cljs.core.truth_(inst_64585)){
var statearr_64853_66241 = state_64724__$1;
(statearr_64853_66241[(1)] = (10));

} else {
var statearr_64854_66243 = state_64724__$1;
(statearr_64854_66243[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__63609__auto__ = null;
var cljs$core$async$mult_$_state_machine__63609__auto____0 = (function (){
var statearr_64860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64860[(0)] = cljs$core$async$mult_$_state_machine__63609__auto__);

(statearr_64860[(1)] = (1));

return statearr_64860;
});
var cljs$core$async$mult_$_state_machine__63609__auto____1 = (function (state_64724){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_64724);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e64861){var ex__63612__auto__ = e64861;
var statearr_64862_66244 = state_64724;
(statearr_64862_66244[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_64724[(4)]))){
var statearr_64863_66248 = state_64724;
(statearr_64863_66248[(1)] = cljs.core.first((state_64724[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66249 = state_64724;
state_64724 = G__66249;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__63609__auto__ = function(state_64724){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__63609__auto____1.call(this,state_64724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__63609__auto____0;
cljs$core$async$mult_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__63609__auto____1;
return cljs$core$async$mult_$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_64864 = f__63831__auto__();
(statearr_64864[(6)] = c__63830__auto___66167);

return statearr_64864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__64866 = arguments.length;
switch (G__64866) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_66252 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_66252(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_66253 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_66253(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_66254 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_66254(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_66256 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_66256(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_66257 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_66257(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66259 = arguments.length;
var i__4737__auto___66260 = (0);
while(true){
if((i__4737__auto___66260 < len__4736__auto___66259)){
args__4742__auto__.push((arguments[i__4737__auto___66260]));

var G__66261 = (i__4737__auto___66260 + (1));
i__4737__auto___66260 = G__66261;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__64887){
var map__64888 = p__64887;
var map__64888__$1 = (((((!((map__64888 == null))))?(((((map__64888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64888):map__64888);
var opts = map__64888__$1;
var statearr_64890_66267 = state;
(statearr_64890_66267[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_64893_66270 = state;
(statearr_64893_66270[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_64897_66272 = state;
(statearr_64897_66272[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq64878){
var G__64881 = cljs.core.first(seq64878);
var seq64878__$1 = cljs.core.next(seq64878);
var G__64882 = cljs.core.first(seq64878__$1);
var seq64878__$2 = cljs.core.next(seq64878__$1);
var G__64883 = cljs.core.first(seq64878__$2);
var seq64878__$3 = cljs.core.next(seq64878__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64881,G__64882,G__64883,seq64878__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64907 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta64908){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta64908 = meta64908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64909,meta64908__$1){
var self__ = this;
var _64909__$1 = this;
return (new cljs.core.async.t_cljs$core$async64907(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta64908__$1));
}));

(cljs.core.async.t_cljs$core$async64907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64909){
var self__ = this;
var _64909__$1 = this;
return self__.meta64908;
}));

(cljs.core.async.t_cljs$core$async64907.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async64907.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64907.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64907.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64907.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64907.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64907.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta64908","meta64908",1027292227,null)], null);
}));

(cljs.core.async.t_cljs$core$async64907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64907");

(cljs.core.async.t_cljs$core$async64907.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64907.
 */
cljs.core.async.__GT_t_cljs$core$async64907 = (function cljs$core$async$mix_$___GT_t_cljs$core$async64907(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64908){
return (new cljs.core.async.t_cljs$core$async64907(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64908));
});

}

return (new cljs.core.async.t_cljs$core$async64907(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__63830__auto___66287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_65045){
var state_val_65046 = (state_65045[(1)]);
if((state_val_65046 === (7))){
var inst_64953 = (state_65045[(2)]);
var state_65045__$1 = state_65045;
var statearr_65047_66289 = state_65045__$1;
(statearr_65047_66289[(2)] = inst_64953);

(statearr_65047_66289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (20))){
var inst_64965 = (state_65045[(7)]);
var state_65045__$1 = state_65045;
var statearr_65048_66290 = state_65045__$1;
(statearr_65048_66290[(2)] = inst_64965);

(statearr_65048_66290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (27))){
var state_65045__$1 = state_65045;
var statearr_65049_66292 = state_65045__$1;
(statearr_65049_66292[(2)] = null);

(statearr_65049_66292[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (1))){
var inst_64937 = (state_65045[(8)]);
var inst_64937__$1 = calc_state();
var inst_64942 = (inst_64937__$1 == null);
var inst_64943 = cljs.core.not(inst_64942);
var state_65045__$1 = (function (){var statearr_65050 = state_65045;
(statearr_65050[(8)] = inst_64937__$1);

return statearr_65050;
})();
if(inst_64943){
var statearr_65051_66293 = state_65045__$1;
(statearr_65051_66293[(1)] = (2));

} else {
var statearr_65052_66294 = state_65045__$1;
(statearr_65052_66294[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (24))){
var inst_65015 = (state_65045[(9)]);
var inst_64989 = (state_65045[(10)]);
var inst_64998 = (state_65045[(11)]);
var inst_65015__$1 = (inst_64989.cljs$core$IFn$_invoke$arity$1 ? inst_64989.cljs$core$IFn$_invoke$arity$1(inst_64998) : inst_64989.call(null,inst_64998));
var state_65045__$1 = (function (){var statearr_65053 = state_65045;
(statearr_65053[(9)] = inst_65015__$1);

return statearr_65053;
})();
if(cljs.core.truth_(inst_65015__$1)){
var statearr_65054_66299 = state_65045__$1;
(statearr_65054_66299[(1)] = (29));

} else {
var statearr_65055_66301 = state_65045__$1;
(statearr_65055_66301[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (4))){
var inst_64956 = (state_65045[(2)]);
var state_65045__$1 = state_65045;
if(cljs.core.truth_(inst_64956)){
var statearr_65058_66303 = state_65045__$1;
(statearr_65058_66303[(1)] = (8));

} else {
var statearr_65059_66304 = state_65045__$1;
(statearr_65059_66304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (15))){
var inst_64983 = (state_65045[(2)]);
var state_65045__$1 = state_65045;
if(cljs.core.truth_(inst_64983)){
var statearr_65060_66305 = state_65045__$1;
(statearr_65060_66305[(1)] = (19));

} else {
var statearr_65061_66307 = state_65045__$1;
(statearr_65061_66307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (21))){
var inst_64988 = (state_65045[(12)]);
var inst_64988__$1 = (state_65045[(2)]);
var inst_64989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64988__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_64990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64988__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_64991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64988__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_65045__$1 = (function (){var statearr_65065 = state_65045;
(statearr_65065[(12)] = inst_64988__$1);

(statearr_65065[(13)] = inst_64990);

(statearr_65065[(10)] = inst_64989);

return statearr_65065;
})();
return cljs.core.async.ioc_alts_BANG_(state_65045__$1,(22),inst_64991);
} else {
if((state_val_65046 === (31))){
var inst_65023 = (state_65045[(2)]);
var state_65045__$1 = state_65045;
if(cljs.core.truth_(inst_65023)){
var statearr_65067_66311 = state_65045__$1;
(statearr_65067_66311[(1)] = (32));

} else {
var statearr_65068_66312 = state_65045__$1;
(statearr_65068_66312[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (32))){
var inst_64997 = (state_65045[(14)]);
var state_65045__$1 = state_65045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65045__$1,(35),out,inst_64997);
} else {
if((state_val_65046 === (33))){
var inst_64988 = (state_65045[(12)]);
var inst_64965 = inst_64988;
var state_65045__$1 = (function (){var statearr_65069 = state_65045;
(statearr_65069[(7)] = inst_64965);

return statearr_65069;
})();
var statearr_65070_66315 = state_65045__$1;
(statearr_65070_66315[(2)] = null);

(statearr_65070_66315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (13))){
var inst_64965 = (state_65045[(7)]);
var inst_64972 = inst_64965.cljs$lang$protocol_mask$partition0$;
var inst_64973 = (inst_64972 & (64));
var inst_64974 = inst_64965.cljs$core$ISeq$;
var inst_64975 = (cljs.core.PROTOCOL_SENTINEL === inst_64974);
var inst_64976 = ((inst_64973) || (inst_64975));
var state_65045__$1 = state_65045;
if(cljs.core.truth_(inst_64976)){
var statearr_65071_66319 = state_65045__$1;
(statearr_65071_66319[(1)] = (16));

} else {
var statearr_65072_66320 = state_65045__$1;
(statearr_65072_66320[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (22))){
var inst_64997 = (state_65045[(14)]);
var inst_64998 = (state_65045[(11)]);
var inst_64996 = (state_65045[(2)]);
var inst_64997__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64996,(0),null);
var inst_64998__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64996,(1),null);
var inst_65001 = (inst_64997__$1 == null);
var inst_65003 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64998__$1,change);
var inst_65004 = ((inst_65001) || (inst_65003));
var state_65045__$1 = (function (){var statearr_65073 = state_65045;
(statearr_65073[(14)] = inst_64997__$1);

(statearr_65073[(11)] = inst_64998__$1);

return statearr_65073;
})();
if(cljs.core.truth_(inst_65004)){
var statearr_65074_66327 = state_65045__$1;
(statearr_65074_66327[(1)] = (23));

} else {
var statearr_65075_66328 = state_65045__$1;
(statearr_65075_66328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (36))){
var inst_64988 = (state_65045[(12)]);
var inst_64965 = inst_64988;
var state_65045__$1 = (function (){var statearr_65076 = state_65045;
(statearr_65076[(7)] = inst_64965);

return statearr_65076;
})();
var statearr_65077_66330 = state_65045__$1;
(statearr_65077_66330[(2)] = null);

(statearr_65077_66330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (29))){
var inst_65015 = (state_65045[(9)]);
var state_65045__$1 = state_65045;
var statearr_65083_66332 = state_65045__$1;
(statearr_65083_66332[(2)] = inst_65015);

(statearr_65083_66332[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (6))){
var state_65045__$1 = state_65045;
var statearr_65085_66333 = state_65045__$1;
(statearr_65085_66333[(2)] = false);

(statearr_65085_66333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (28))){
var inst_65011 = (state_65045[(2)]);
var inst_65012 = calc_state();
var inst_64965 = inst_65012;
var state_65045__$1 = (function (){var statearr_65086 = state_65045;
(statearr_65086[(7)] = inst_64965);

(statearr_65086[(15)] = inst_65011);

return statearr_65086;
})();
var statearr_65087_66335 = state_65045__$1;
(statearr_65087_66335[(2)] = null);

(statearr_65087_66335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (25))){
var inst_65040 = (state_65045[(2)]);
var state_65045__$1 = state_65045;
var statearr_65090_66339 = state_65045__$1;
(statearr_65090_66339[(2)] = inst_65040);

(statearr_65090_66339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (34))){
var inst_65038 = (state_65045[(2)]);
var state_65045__$1 = state_65045;
var statearr_65094_66340 = state_65045__$1;
(statearr_65094_66340[(2)] = inst_65038);

(statearr_65094_66340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (17))){
var state_65045__$1 = state_65045;
var statearr_65095_66342 = state_65045__$1;
(statearr_65095_66342[(2)] = false);

(statearr_65095_66342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (3))){
var state_65045__$1 = state_65045;
var statearr_65097_66346 = state_65045__$1;
(statearr_65097_66346[(2)] = false);

(statearr_65097_66346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (12))){
var inst_65042 = (state_65045[(2)]);
var state_65045__$1 = state_65045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65045__$1,inst_65042);
} else {
if((state_val_65046 === (2))){
var inst_64937 = (state_65045[(8)]);
var inst_64945 = inst_64937.cljs$lang$protocol_mask$partition0$;
var inst_64946 = (inst_64945 & (64));
var inst_64947 = inst_64937.cljs$core$ISeq$;
var inst_64948 = (cljs.core.PROTOCOL_SENTINEL === inst_64947);
var inst_64949 = ((inst_64946) || (inst_64948));
var state_65045__$1 = state_65045;
if(cljs.core.truth_(inst_64949)){
var statearr_65098_66348 = state_65045__$1;
(statearr_65098_66348[(1)] = (5));

} else {
var statearr_65106_66349 = state_65045__$1;
(statearr_65106_66349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (23))){
var inst_64997 = (state_65045[(14)]);
var inst_65006 = (inst_64997 == null);
var state_65045__$1 = state_65045;
if(cljs.core.truth_(inst_65006)){
var statearr_65126_66351 = state_65045__$1;
(statearr_65126_66351[(1)] = (26));

} else {
var statearr_65127_66352 = state_65045__$1;
(statearr_65127_66352[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (35))){
var inst_65029 = (state_65045[(2)]);
var state_65045__$1 = state_65045;
if(cljs.core.truth_(inst_65029)){
var statearr_65128_66353 = state_65045__$1;
(statearr_65128_66353[(1)] = (36));

} else {
var statearr_65129_66354 = state_65045__$1;
(statearr_65129_66354[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (19))){
var inst_64965 = (state_65045[(7)]);
var inst_64985 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64965);
var state_65045__$1 = state_65045;
var statearr_65130_66360 = state_65045__$1;
(statearr_65130_66360[(2)] = inst_64985);

(statearr_65130_66360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (11))){
var inst_64965 = (state_65045[(7)]);
var inst_64969 = (inst_64965 == null);
var inst_64970 = cljs.core.not(inst_64969);
var state_65045__$1 = state_65045;
if(inst_64970){
var statearr_65131_66362 = state_65045__$1;
(statearr_65131_66362[(1)] = (13));

} else {
var statearr_65132_66363 = state_65045__$1;
(statearr_65132_66363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (9))){
var inst_64937 = (state_65045[(8)]);
var state_65045__$1 = state_65045;
var statearr_65133_66364 = state_65045__$1;
(statearr_65133_66364[(2)] = inst_64937);

(statearr_65133_66364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (5))){
var state_65045__$1 = state_65045;
var statearr_65134_66366 = state_65045__$1;
(statearr_65134_66366[(2)] = true);

(statearr_65134_66366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (14))){
var state_65045__$1 = state_65045;
var statearr_65135_66368 = state_65045__$1;
(statearr_65135_66368[(2)] = false);

(statearr_65135_66368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (26))){
var inst_64998 = (state_65045[(11)]);
var inst_65008 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_64998);
var state_65045__$1 = state_65045;
var statearr_65136_66369 = state_65045__$1;
(statearr_65136_66369[(2)] = inst_65008);

(statearr_65136_66369[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (16))){
var state_65045__$1 = state_65045;
var statearr_65137_66370 = state_65045__$1;
(statearr_65137_66370[(2)] = true);

(statearr_65137_66370[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (38))){
var inst_65034 = (state_65045[(2)]);
var state_65045__$1 = state_65045;
var statearr_65138_66374 = state_65045__$1;
(statearr_65138_66374[(2)] = inst_65034);

(statearr_65138_66374[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (30))){
var inst_64990 = (state_65045[(13)]);
var inst_64989 = (state_65045[(10)]);
var inst_64998 = (state_65045[(11)]);
var inst_65018 = cljs.core.empty_QMARK_(inst_64989);
var inst_65019 = (inst_64990.cljs$core$IFn$_invoke$arity$1 ? inst_64990.cljs$core$IFn$_invoke$arity$1(inst_64998) : inst_64990.call(null,inst_64998));
var inst_65020 = cljs.core.not(inst_65019);
var inst_65021 = ((inst_65018) && (inst_65020));
var state_65045__$1 = state_65045;
var statearr_65142_66379 = state_65045__$1;
(statearr_65142_66379[(2)] = inst_65021);

(statearr_65142_66379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (10))){
var inst_64937 = (state_65045[(8)]);
var inst_64961 = (state_65045[(2)]);
var inst_64962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64961,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_64963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64961,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_64964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64961,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_64965 = inst_64937;
var state_65045__$1 = (function (){var statearr_65143 = state_65045;
(statearr_65143[(16)] = inst_64964);

(statearr_65143[(7)] = inst_64965);

(statearr_65143[(17)] = inst_64962);

(statearr_65143[(18)] = inst_64963);

return statearr_65143;
})();
var statearr_65144_66380 = state_65045__$1;
(statearr_65144_66380[(2)] = null);

(statearr_65144_66380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (18))){
var inst_64980 = (state_65045[(2)]);
var state_65045__$1 = state_65045;
var statearr_65153_66383 = state_65045__$1;
(statearr_65153_66383[(2)] = inst_64980);

(statearr_65153_66383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (37))){
var state_65045__$1 = state_65045;
var statearr_65154_66384 = state_65045__$1;
(statearr_65154_66384[(2)] = null);

(statearr_65154_66384[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65046 === (8))){
var inst_64937 = (state_65045[(8)]);
var inst_64958 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64937);
var state_65045__$1 = state_65045;
var statearr_65159_66388 = state_65045__$1;
(statearr_65159_66388[(2)] = inst_64958);

(statearr_65159_66388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__63609__auto__ = null;
var cljs$core$async$mix_$_state_machine__63609__auto____0 = (function (){
var statearr_65160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65160[(0)] = cljs$core$async$mix_$_state_machine__63609__auto__);

(statearr_65160[(1)] = (1));

return statearr_65160;
});
var cljs$core$async$mix_$_state_machine__63609__auto____1 = (function (state_65045){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_65045);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e65161){var ex__63612__auto__ = e65161;
var statearr_65162_66395 = state_65045;
(statearr_65162_66395[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_65045[(4)]))){
var statearr_65163_66396 = state_65045;
(statearr_65163_66396[(1)] = cljs.core.first((state_65045[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66397 = state_65045;
state_65045 = G__66397;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__63609__auto__ = function(state_65045){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__63609__auto____1.call(this,state_65045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__63609__auto____0;
cljs$core$async$mix_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__63609__auto____1;
return cljs$core$async$mix_$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_65164 = f__63831__auto__();
(statearr_65164[(6)] = c__63830__auto___66287);

return statearr_65164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_66409 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_66409(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_66411 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_66411(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_66413 = (function() {
var G__66414 = null;
var G__66414__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__66414__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__66414 = function(p,v){
switch(arguments.length){
case 1:
return G__66414__1.call(this,p);
case 2:
return G__66414__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__66414.cljs$core$IFn$_invoke$arity$1 = G__66414__1;
G__66414.cljs$core$IFn$_invoke$arity$2 = G__66414__2;
return G__66414;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__65166 = arguments.length;
switch (G__65166) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_66413(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_66413(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__65169 = arguments.length;
switch (G__65169) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__65167_SHARP_){
if(cljs.core.truth_((p1__65167_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__65167_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__65167_SHARP_.call(null,topic)))){
return p1__65167_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__65167_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65170 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta65171){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta65171 = meta65171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65172,meta65171__$1){
var self__ = this;
var _65172__$1 = this;
return (new cljs.core.async.t_cljs$core$async65170(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta65171__$1));
}));

(cljs.core.async.t_cljs$core$async65170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65172){
var self__ = this;
var _65172__$1 = this;
return self__.meta65171;
}));

(cljs.core.async.t_cljs$core$async65170.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async65170.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65170.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async65170.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async65170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async65170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async65170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta65171","meta65171",2080654429,null)], null);
}));

(cljs.core.async.t_cljs$core$async65170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65170");

(cljs.core.async.t_cljs$core$async65170.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async65170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65170.
 */
cljs.core.async.__GT_t_cljs$core$async65170 = (function cljs$core$async$__GT_t_cljs$core$async65170(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta65171){
return (new cljs.core.async.t_cljs$core$async65170(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta65171));
});

}

return (new cljs.core.async.t_cljs$core$async65170(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__63830__auto___66440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_65275){
var state_val_65276 = (state_65275[(1)]);
if((state_val_65276 === (7))){
var inst_65271 = (state_65275[(2)]);
var state_65275__$1 = state_65275;
var statearr_65277_66441 = state_65275__$1;
(statearr_65277_66441[(2)] = inst_65271);

(statearr_65277_66441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (20))){
var state_65275__$1 = state_65275;
var statearr_65278_66442 = state_65275__$1;
(statearr_65278_66442[(2)] = null);

(statearr_65278_66442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (1))){
var state_65275__$1 = state_65275;
var statearr_65279_66443 = state_65275__$1;
(statearr_65279_66443[(2)] = null);

(statearr_65279_66443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (24))){
var inst_65254 = (state_65275[(7)]);
var inst_65263 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_65254);
var state_65275__$1 = state_65275;
var statearr_65280_66444 = state_65275__$1;
(statearr_65280_66444[(2)] = inst_65263);

(statearr_65280_66444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (4))){
var inst_65205 = (state_65275[(8)]);
var inst_65205__$1 = (state_65275[(2)]);
var inst_65206 = (inst_65205__$1 == null);
var state_65275__$1 = (function (){var statearr_65281 = state_65275;
(statearr_65281[(8)] = inst_65205__$1);

return statearr_65281;
})();
if(cljs.core.truth_(inst_65206)){
var statearr_65282_66445 = state_65275__$1;
(statearr_65282_66445[(1)] = (5));

} else {
var statearr_65283_66446 = state_65275__$1;
(statearr_65283_66446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (15))){
var inst_65248 = (state_65275[(2)]);
var state_65275__$1 = state_65275;
var statearr_65284_66447 = state_65275__$1;
(statearr_65284_66447[(2)] = inst_65248);

(statearr_65284_66447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (21))){
var inst_65268 = (state_65275[(2)]);
var state_65275__$1 = (function (){var statearr_65285 = state_65275;
(statearr_65285[(9)] = inst_65268);

return statearr_65285;
})();
var statearr_65286_66449 = state_65275__$1;
(statearr_65286_66449[(2)] = null);

(statearr_65286_66449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (13))){
var inst_65229 = (state_65275[(10)]);
var inst_65231 = cljs.core.chunked_seq_QMARK_(inst_65229);
var state_65275__$1 = state_65275;
if(inst_65231){
var statearr_65287_66453 = state_65275__$1;
(statearr_65287_66453[(1)] = (16));

} else {
var statearr_65288_66454 = state_65275__$1;
(statearr_65288_66454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (22))){
var inst_65260 = (state_65275[(2)]);
var state_65275__$1 = state_65275;
if(cljs.core.truth_(inst_65260)){
var statearr_65289_66455 = state_65275__$1;
(statearr_65289_66455[(1)] = (23));

} else {
var statearr_65290_66456 = state_65275__$1;
(statearr_65290_66456[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (6))){
var inst_65254 = (state_65275[(7)]);
var inst_65205 = (state_65275[(8)]);
var inst_65256 = (state_65275[(11)]);
var inst_65254__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_65205) : topic_fn.call(null,inst_65205));
var inst_65255 = cljs.core.deref(mults);
var inst_65256__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65255,inst_65254__$1);
var state_65275__$1 = (function (){var statearr_65291 = state_65275;
(statearr_65291[(7)] = inst_65254__$1);

(statearr_65291[(11)] = inst_65256__$1);

return statearr_65291;
})();
if(cljs.core.truth_(inst_65256__$1)){
var statearr_65292_66460 = state_65275__$1;
(statearr_65292_66460[(1)] = (19));

} else {
var statearr_65293_66461 = state_65275__$1;
(statearr_65293_66461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (25))){
var inst_65265 = (state_65275[(2)]);
var state_65275__$1 = state_65275;
var statearr_65294_66462 = state_65275__$1;
(statearr_65294_66462[(2)] = inst_65265);

(statearr_65294_66462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (17))){
var inst_65229 = (state_65275[(10)]);
var inst_65238 = cljs.core.first(inst_65229);
var inst_65240 = cljs.core.async.muxch_STAR_(inst_65238);
var inst_65241 = cljs.core.async.close_BANG_(inst_65240);
var inst_65242 = cljs.core.next(inst_65229);
var inst_65215 = inst_65242;
var inst_65216 = null;
var inst_65217 = (0);
var inst_65218 = (0);
var state_65275__$1 = (function (){var statearr_65295 = state_65275;
(statearr_65295[(12)] = inst_65241);

(statearr_65295[(13)] = inst_65218);

(statearr_65295[(14)] = inst_65217);

(statearr_65295[(15)] = inst_65216);

(statearr_65295[(16)] = inst_65215);

return statearr_65295;
})();
var statearr_65296_66471 = state_65275__$1;
(statearr_65296_66471[(2)] = null);

(statearr_65296_66471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (3))){
var inst_65273 = (state_65275[(2)]);
var state_65275__$1 = state_65275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65275__$1,inst_65273);
} else {
if((state_val_65276 === (12))){
var inst_65250 = (state_65275[(2)]);
var state_65275__$1 = state_65275;
var statearr_65297_66477 = state_65275__$1;
(statearr_65297_66477[(2)] = inst_65250);

(statearr_65297_66477[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (2))){
var state_65275__$1 = state_65275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65275__$1,(4),ch);
} else {
if((state_val_65276 === (23))){
var state_65275__$1 = state_65275;
var statearr_65298_66485 = state_65275__$1;
(statearr_65298_66485[(2)] = null);

(statearr_65298_66485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (19))){
var inst_65205 = (state_65275[(8)]);
var inst_65256 = (state_65275[(11)]);
var inst_65258 = cljs.core.async.muxch_STAR_(inst_65256);
var state_65275__$1 = state_65275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65275__$1,(22),inst_65258,inst_65205);
} else {
if((state_val_65276 === (11))){
var inst_65229 = (state_65275[(10)]);
var inst_65215 = (state_65275[(16)]);
var inst_65229__$1 = cljs.core.seq(inst_65215);
var state_65275__$1 = (function (){var statearr_65299 = state_65275;
(statearr_65299[(10)] = inst_65229__$1);

return statearr_65299;
})();
if(inst_65229__$1){
var statearr_65300_66489 = state_65275__$1;
(statearr_65300_66489[(1)] = (13));

} else {
var statearr_65301_66490 = state_65275__$1;
(statearr_65301_66490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (9))){
var inst_65252 = (state_65275[(2)]);
var state_65275__$1 = state_65275;
var statearr_65302_66491 = state_65275__$1;
(statearr_65302_66491[(2)] = inst_65252);

(statearr_65302_66491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (5))){
var inst_65212 = cljs.core.deref(mults);
var inst_65213 = cljs.core.vals(inst_65212);
var inst_65214 = cljs.core.seq(inst_65213);
var inst_65215 = inst_65214;
var inst_65216 = null;
var inst_65217 = (0);
var inst_65218 = (0);
var state_65275__$1 = (function (){var statearr_65303 = state_65275;
(statearr_65303[(13)] = inst_65218);

(statearr_65303[(14)] = inst_65217);

(statearr_65303[(15)] = inst_65216);

(statearr_65303[(16)] = inst_65215);

return statearr_65303;
})();
var statearr_65304_66497 = state_65275__$1;
(statearr_65304_66497[(2)] = null);

(statearr_65304_66497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (14))){
var state_65275__$1 = state_65275;
var statearr_65308_66498 = state_65275__$1;
(statearr_65308_66498[(2)] = null);

(statearr_65308_66498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (16))){
var inst_65229 = (state_65275[(10)]);
var inst_65233 = cljs.core.chunk_first(inst_65229);
var inst_65234 = cljs.core.chunk_rest(inst_65229);
var inst_65235 = cljs.core.count(inst_65233);
var inst_65215 = inst_65234;
var inst_65216 = inst_65233;
var inst_65217 = inst_65235;
var inst_65218 = (0);
var state_65275__$1 = (function (){var statearr_65309 = state_65275;
(statearr_65309[(13)] = inst_65218);

(statearr_65309[(14)] = inst_65217);

(statearr_65309[(15)] = inst_65216);

(statearr_65309[(16)] = inst_65215);

return statearr_65309;
})();
var statearr_65310_66499 = state_65275__$1;
(statearr_65310_66499[(2)] = null);

(statearr_65310_66499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (10))){
var inst_65218 = (state_65275[(13)]);
var inst_65217 = (state_65275[(14)]);
var inst_65216 = (state_65275[(15)]);
var inst_65215 = (state_65275[(16)]);
var inst_65223 = cljs.core._nth(inst_65216,inst_65218);
var inst_65224 = cljs.core.async.muxch_STAR_(inst_65223);
var inst_65225 = cljs.core.async.close_BANG_(inst_65224);
var inst_65226 = (inst_65218 + (1));
var tmp65305 = inst_65217;
var tmp65306 = inst_65216;
var tmp65307 = inst_65215;
var inst_65215__$1 = tmp65307;
var inst_65216__$1 = tmp65306;
var inst_65217__$1 = tmp65305;
var inst_65218__$1 = inst_65226;
var state_65275__$1 = (function (){var statearr_65311 = state_65275;
(statearr_65311[(13)] = inst_65218__$1);

(statearr_65311[(14)] = inst_65217__$1);

(statearr_65311[(15)] = inst_65216__$1);

(statearr_65311[(16)] = inst_65215__$1);

(statearr_65311[(17)] = inst_65225);

return statearr_65311;
})();
var statearr_65312_66505 = state_65275__$1;
(statearr_65312_66505[(2)] = null);

(statearr_65312_66505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (18))){
var inst_65245 = (state_65275[(2)]);
var state_65275__$1 = state_65275;
var statearr_65313_66506 = state_65275__$1;
(statearr_65313_66506[(2)] = inst_65245);

(statearr_65313_66506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65276 === (8))){
var inst_65218 = (state_65275[(13)]);
var inst_65217 = (state_65275[(14)]);
var inst_65220 = (inst_65218 < inst_65217);
var inst_65221 = inst_65220;
var state_65275__$1 = state_65275;
if(cljs.core.truth_(inst_65221)){
var statearr_65314_66507 = state_65275__$1;
(statearr_65314_66507[(1)] = (10));

} else {
var statearr_65315_66508 = state_65275__$1;
(statearr_65315_66508[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_65316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65316[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_65316[(1)] = (1));

return statearr_65316;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_65275){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_65275);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e65317){var ex__63612__auto__ = e65317;
var statearr_65318_66509 = state_65275;
(statearr_65318_66509[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_65275[(4)]))){
var statearr_65319_66513 = state_65275;
(statearr_65319_66513[(1)] = cljs.core.first((state_65275[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66514 = state_65275;
state_65275 = G__66514;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_65275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_65275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_65320 = f__63831__auto__();
(statearr_65320[(6)] = c__63830__auto___66440);

return statearr_65320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__65322 = arguments.length;
switch (G__65322) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__65324 = arguments.length;
switch (G__65324) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__65326 = arguments.length;
switch (G__65326) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__63830__auto___66519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_65381){
var state_val_65382 = (state_65381[(1)]);
if((state_val_65382 === (7))){
var state_65381__$1 = state_65381;
var statearr_65383_66520 = state_65381__$1;
(statearr_65383_66520[(2)] = null);

(statearr_65383_66520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (1))){
var state_65381__$1 = state_65381;
var statearr_65384_66521 = state_65381__$1;
(statearr_65384_66521[(2)] = null);

(statearr_65384_66521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (4))){
var inst_65336 = (state_65381[(7)]);
var inst_65335 = (state_65381[(8)]);
var inst_65338 = (inst_65336 < inst_65335);
var state_65381__$1 = state_65381;
if(cljs.core.truth_(inst_65338)){
var statearr_65388_66522 = state_65381__$1;
(statearr_65388_66522[(1)] = (6));

} else {
var statearr_65389_66523 = state_65381__$1;
(statearr_65389_66523[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (15))){
var inst_65365 = (state_65381[(9)]);
var inst_65370 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_65365);
var state_65381__$1 = state_65381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65381__$1,(17),out,inst_65370);
} else {
if((state_val_65382 === (13))){
var inst_65365 = (state_65381[(9)]);
var inst_65365__$1 = (state_65381[(2)]);
var inst_65366 = cljs.core.some(cljs.core.nil_QMARK_,inst_65365__$1);
var state_65381__$1 = (function (){var statearr_65391 = state_65381;
(statearr_65391[(9)] = inst_65365__$1);

return statearr_65391;
})();
if(cljs.core.truth_(inst_65366)){
var statearr_65393_66525 = state_65381__$1;
(statearr_65393_66525[(1)] = (14));

} else {
var statearr_65394_66526 = state_65381__$1;
(statearr_65394_66526[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (6))){
var state_65381__$1 = state_65381;
var statearr_65395_66527 = state_65381__$1;
(statearr_65395_66527[(2)] = null);

(statearr_65395_66527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (17))){
var inst_65372 = (state_65381[(2)]);
var state_65381__$1 = (function (){var statearr_65408 = state_65381;
(statearr_65408[(10)] = inst_65372);

return statearr_65408;
})();
var statearr_65410_66529 = state_65381__$1;
(statearr_65410_66529[(2)] = null);

(statearr_65410_66529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (3))){
var inst_65377 = (state_65381[(2)]);
var state_65381__$1 = state_65381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65381__$1,inst_65377);
} else {
if((state_val_65382 === (12))){
var _ = (function (){var statearr_65413 = state_65381;
(statearr_65413[(4)] = cljs.core.rest((state_65381[(4)])));

return statearr_65413;
})();
var state_65381__$1 = state_65381;
var ex65405 = (state_65381__$1[(2)]);
var statearr_65414_66530 = state_65381__$1;
(statearr_65414_66530[(5)] = ex65405);


if((ex65405 instanceof Object)){
var statearr_65418_66531 = state_65381__$1;
(statearr_65418_66531[(1)] = (11));

(statearr_65418_66531[(5)] = null);

} else {
throw ex65405;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (2))){
var inst_65333 = cljs.core.reset_BANG_(dctr,cnt);
var inst_65335 = cnt;
var inst_65336 = (0);
var state_65381__$1 = (function (){var statearr_65422 = state_65381;
(statearr_65422[(11)] = inst_65333);

(statearr_65422[(7)] = inst_65336);

(statearr_65422[(8)] = inst_65335);

return statearr_65422;
})();
var statearr_65423_66534 = state_65381__$1;
(statearr_65423_66534[(2)] = null);

(statearr_65423_66534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (11))){
var inst_65344 = (state_65381[(2)]);
var inst_65345 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_65381__$1 = (function (){var statearr_65426 = state_65381;
(statearr_65426[(12)] = inst_65344);

return statearr_65426;
})();
var statearr_65427_66535 = state_65381__$1;
(statearr_65427_66535[(2)] = inst_65345);

(statearr_65427_66535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (9))){
var inst_65336 = (state_65381[(7)]);
var _ = (function (){var statearr_65429 = state_65381;
(statearr_65429[(4)] = cljs.core.cons((12),(state_65381[(4)])));

return statearr_65429;
})();
var inst_65351 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_65336) : chs__$1.call(null,inst_65336));
var inst_65352 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_65336) : done.call(null,inst_65336));
var inst_65353 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_65351,inst_65352);
var ___$1 = (function (){var statearr_65430 = state_65381;
(statearr_65430[(4)] = cljs.core.rest((state_65381[(4)])));

return statearr_65430;
})();
var state_65381__$1 = state_65381;
var statearr_65431_66536 = state_65381__$1;
(statearr_65431_66536[(2)] = inst_65353);

(statearr_65431_66536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (5))){
var inst_65363 = (state_65381[(2)]);
var state_65381__$1 = (function (){var statearr_65432 = state_65381;
(statearr_65432[(13)] = inst_65363);

return statearr_65432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65381__$1,(13),dchan);
} else {
if((state_val_65382 === (14))){
var inst_65368 = cljs.core.async.close_BANG_(out);
var state_65381__$1 = state_65381;
var statearr_65433_66538 = state_65381__$1;
(statearr_65433_66538[(2)] = inst_65368);

(statearr_65433_66538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (16))){
var inst_65375 = (state_65381[(2)]);
var state_65381__$1 = state_65381;
var statearr_65435_66539 = state_65381__$1;
(statearr_65435_66539[(2)] = inst_65375);

(statearr_65435_66539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (10))){
var inst_65336 = (state_65381[(7)]);
var inst_65356 = (state_65381[(2)]);
var inst_65357 = (inst_65336 + (1));
var inst_65336__$1 = inst_65357;
var state_65381__$1 = (function (){var statearr_65438 = state_65381;
(statearr_65438[(7)] = inst_65336__$1);

(statearr_65438[(14)] = inst_65356);

return statearr_65438;
})();
var statearr_65439_66540 = state_65381__$1;
(statearr_65439_66540[(2)] = null);

(statearr_65439_66540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65382 === (8))){
var inst_65361 = (state_65381[(2)]);
var state_65381__$1 = state_65381;
var statearr_65440_66541 = state_65381__$1;
(statearr_65440_66541[(2)] = inst_65361);

(statearr_65440_66541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_65441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65441[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_65441[(1)] = (1));

return statearr_65441;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_65381){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_65381);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e65442){var ex__63612__auto__ = e65442;
var statearr_65443_66542 = state_65381;
(statearr_65443_66542[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_65381[(4)]))){
var statearr_65444_66543 = state_65381;
(statearr_65444_66543[(1)] = cljs.core.first((state_65381[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66544 = state_65381;
state_65381 = G__66544;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_65381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_65381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_65445 = f__63831__auto__();
(statearr_65445[(6)] = c__63830__auto___66519);

return statearr_65445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__65453 = arguments.length;
switch (G__65453) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__63830__auto___66547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_65487){
var state_val_65488 = (state_65487[(1)]);
if((state_val_65488 === (7))){
var inst_65467 = (state_65487[(7)]);
var inst_65466 = (state_65487[(8)]);
var inst_65466__$1 = (state_65487[(2)]);
var inst_65467__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65466__$1,(0),null);
var inst_65468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65466__$1,(1),null);
var inst_65469 = (inst_65467__$1 == null);
var state_65487__$1 = (function (){var statearr_65491 = state_65487;
(statearr_65491[(9)] = inst_65468);

(statearr_65491[(7)] = inst_65467__$1);

(statearr_65491[(8)] = inst_65466__$1);

return statearr_65491;
})();
if(cljs.core.truth_(inst_65469)){
var statearr_65492_66548 = state_65487__$1;
(statearr_65492_66548[(1)] = (8));

} else {
var statearr_65493_66549 = state_65487__$1;
(statearr_65493_66549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65488 === (1))){
var inst_65454 = cljs.core.vec(chs);
var inst_65456 = inst_65454;
var state_65487__$1 = (function (){var statearr_65494 = state_65487;
(statearr_65494[(10)] = inst_65456);

return statearr_65494;
})();
var statearr_65495_66550 = state_65487__$1;
(statearr_65495_66550[(2)] = null);

(statearr_65495_66550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65488 === (4))){
var inst_65456 = (state_65487[(10)]);
var state_65487__$1 = state_65487;
return cljs.core.async.ioc_alts_BANG_(state_65487__$1,(7),inst_65456);
} else {
if((state_val_65488 === (6))){
var inst_65483 = (state_65487[(2)]);
var state_65487__$1 = state_65487;
var statearr_65497_66551 = state_65487__$1;
(statearr_65497_66551[(2)] = inst_65483);

(statearr_65497_66551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65488 === (3))){
var inst_65485 = (state_65487[(2)]);
var state_65487__$1 = state_65487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65487__$1,inst_65485);
} else {
if((state_val_65488 === (2))){
var inst_65456 = (state_65487[(10)]);
var inst_65458 = cljs.core.count(inst_65456);
var inst_65459 = (inst_65458 > (0));
var state_65487__$1 = state_65487;
if(cljs.core.truth_(inst_65459)){
var statearr_65499_66552 = state_65487__$1;
(statearr_65499_66552[(1)] = (4));

} else {
var statearr_65501_66553 = state_65487__$1;
(statearr_65501_66553[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65488 === (11))){
var inst_65456 = (state_65487[(10)]);
var inst_65476 = (state_65487[(2)]);
var tmp65498 = inst_65456;
var inst_65456__$1 = tmp65498;
var state_65487__$1 = (function (){var statearr_65505 = state_65487;
(statearr_65505[(10)] = inst_65456__$1);

(statearr_65505[(11)] = inst_65476);

return statearr_65505;
})();
var statearr_65506_66554 = state_65487__$1;
(statearr_65506_66554[(2)] = null);

(statearr_65506_66554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65488 === (9))){
var inst_65467 = (state_65487[(7)]);
var state_65487__$1 = state_65487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65487__$1,(11),out,inst_65467);
} else {
if((state_val_65488 === (5))){
var inst_65481 = cljs.core.async.close_BANG_(out);
var state_65487__$1 = state_65487;
var statearr_65507_66555 = state_65487__$1;
(statearr_65507_66555[(2)] = inst_65481);

(statearr_65507_66555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65488 === (10))){
var inst_65479 = (state_65487[(2)]);
var state_65487__$1 = state_65487;
var statearr_65508_66556 = state_65487__$1;
(statearr_65508_66556[(2)] = inst_65479);

(statearr_65508_66556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65488 === (8))){
var inst_65468 = (state_65487[(9)]);
var inst_65467 = (state_65487[(7)]);
var inst_65456 = (state_65487[(10)]);
var inst_65466 = (state_65487[(8)]);
var inst_65471 = (function (){var cs = inst_65456;
var vec__65462 = inst_65466;
var v = inst_65467;
var c = inst_65468;
return (function (p1__65450_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__65450_SHARP_);
});
})();
var inst_65472 = cljs.core.filterv(inst_65471,inst_65456);
var inst_65456__$1 = inst_65472;
var state_65487__$1 = (function (){var statearr_65509 = state_65487;
(statearr_65509[(10)] = inst_65456__$1);

return statearr_65509;
})();
var statearr_65510_66557 = state_65487__$1;
(statearr_65510_66557[(2)] = null);

(statearr_65510_66557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_65511 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65511[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_65511[(1)] = (1));

return statearr_65511;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_65487){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_65487);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e65512){var ex__63612__auto__ = e65512;
var statearr_65513_66560 = state_65487;
(statearr_65513_66560[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_65487[(4)]))){
var statearr_65514_66561 = state_65487;
(statearr_65514_66561[(1)] = cljs.core.first((state_65487[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66562 = state_65487;
state_65487 = G__66562;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_65487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_65487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_65515 = f__63831__auto__();
(statearr_65515[(6)] = c__63830__auto___66547);

return statearr_65515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__65522 = arguments.length;
switch (G__65522) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__63830__auto___66567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_65546){
var state_val_65547 = (state_65546[(1)]);
if((state_val_65547 === (7))){
var inst_65528 = (state_65546[(7)]);
var inst_65528__$1 = (state_65546[(2)]);
var inst_65529 = (inst_65528__$1 == null);
var inst_65530 = cljs.core.not(inst_65529);
var state_65546__$1 = (function (){var statearr_65550 = state_65546;
(statearr_65550[(7)] = inst_65528__$1);

return statearr_65550;
})();
if(inst_65530){
var statearr_65551_66569 = state_65546__$1;
(statearr_65551_66569[(1)] = (8));

} else {
var statearr_65552_66571 = state_65546__$1;
(statearr_65552_66571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65547 === (1))){
var inst_65523 = (0);
var state_65546__$1 = (function (){var statearr_65553 = state_65546;
(statearr_65553[(8)] = inst_65523);

return statearr_65553;
})();
var statearr_65554_66572 = state_65546__$1;
(statearr_65554_66572[(2)] = null);

(statearr_65554_66572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65547 === (4))){
var state_65546__$1 = state_65546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65546__$1,(7),ch);
} else {
if((state_val_65547 === (6))){
var inst_65541 = (state_65546[(2)]);
var state_65546__$1 = state_65546;
var statearr_65556_66574 = state_65546__$1;
(statearr_65556_66574[(2)] = inst_65541);

(statearr_65556_66574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65547 === (3))){
var inst_65543 = (state_65546[(2)]);
var inst_65544 = cljs.core.async.close_BANG_(out);
var state_65546__$1 = (function (){var statearr_65557 = state_65546;
(statearr_65557[(9)] = inst_65543);

return statearr_65557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65546__$1,inst_65544);
} else {
if((state_val_65547 === (2))){
var inst_65523 = (state_65546[(8)]);
var inst_65525 = (inst_65523 < n);
var state_65546__$1 = state_65546;
if(cljs.core.truth_(inst_65525)){
var statearr_65558_66576 = state_65546__$1;
(statearr_65558_66576[(1)] = (4));

} else {
var statearr_65559_66577 = state_65546__$1;
(statearr_65559_66577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65547 === (11))){
var inst_65523 = (state_65546[(8)]);
var inst_65533 = (state_65546[(2)]);
var inst_65534 = (inst_65523 + (1));
var inst_65523__$1 = inst_65534;
var state_65546__$1 = (function (){var statearr_65560 = state_65546;
(statearr_65560[(10)] = inst_65533);

(statearr_65560[(8)] = inst_65523__$1);

return statearr_65560;
})();
var statearr_65561_66579 = state_65546__$1;
(statearr_65561_66579[(2)] = null);

(statearr_65561_66579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65547 === (9))){
var state_65546__$1 = state_65546;
var statearr_65565_66583 = state_65546__$1;
(statearr_65565_66583[(2)] = null);

(statearr_65565_66583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65547 === (5))){
var state_65546__$1 = state_65546;
var statearr_65566_66586 = state_65546__$1;
(statearr_65566_66586[(2)] = null);

(statearr_65566_66586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65547 === (10))){
var inst_65538 = (state_65546[(2)]);
var state_65546__$1 = state_65546;
var statearr_65567_66587 = state_65546__$1;
(statearr_65567_66587[(2)] = inst_65538);

(statearr_65567_66587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65547 === (8))){
var inst_65528 = (state_65546[(7)]);
var state_65546__$1 = state_65546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65546__$1,(11),out,inst_65528);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_65568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65568[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_65568[(1)] = (1));

return statearr_65568;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_65546){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_65546);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e65569){var ex__63612__auto__ = e65569;
var statearr_65570_66590 = state_65546;
(statearr_65570_66590[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_65546[(4)]))){
var statearr_65571_66591 = state_65546;
(statearr_65571_66591[(1)] = cljs.core.first((state_65546[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66592 = state_65546;
state_65546 = G__66592;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_65546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_65546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_65572 = f__63831__auto__();
(statearr_65572[(6)] = c__63830__auto___66567);

return statearr_65572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65575 = (function (f,ch,meta65576){
this.f = f;
this.ch = ch;
this.meta65576 = meta65576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65577,meta65576__$1){
var self__ = this;
var _65577__$1 = this;
return (new cljs.core.async.t_cljs$core$async65575(self__.f,self__.ch,meta65576__$1));
}));

(cljs.core.async.t_cljs$core$async65575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65577){
var self__ = this;
var _65577__$1 = this;
return self__.meta65576;
}));

(cljs.core.async.t_cljs$core$async65575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65583 = (function (f,ch,meta65576,_,fn1,meta65584){
this.f = f;
this.ch = ch;
this.meta65576 = meta65576;
this._ = _;
this.fn1 = fn1;
this.meta65584 = meta65584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65585,meta65584__$1){
var self__ = this;
var _65585__$1 = this;
return (new cljs.core.async.t_cljs$core$async65583(self__.f,self__.ch,self__.meta65576,self__._,self__.fn1,meta65584__$1));
}));

(cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65585){
var self__ = this;
var _65585__$1 = this;
return self__.meta65584;
}));

(cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__65574_SHARP_){
var G__65589 = (((p1__65574_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__65574_SHARP_) : self__.f.call(null,p1__65574_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__65589) : f1.call(null,G__65589));
});
}));

(cljs.core.async.t_cljs$core$async65583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65576","meta65576",179127787,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async65575","cljs.core.async/t_cljs$core$async65575",1050015094,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta65584","meta65584",-1301772870,null)], null);
}));

(cljs.core.async.t_cljs$core$async65583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65583");

(cljs.core.async.t_cljs$core$async65583.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async65583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65583.
 */
cljs.core.async.__GT_t_cljs$core$async65583 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async65583(f__$1,ch__$1,meta65576__$1,___$2,fn1__$1,meta65584){
return (new cljs.core.async.t_cljs$core$async65583(f__$1,ch__$1,meta65576__$1,___$2,fn1__$1,meta65584));
});

}

return (new cljs.core.async.t_cljs$core$async65583(self__.f,self__.ch,self__.meta65576,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__65590 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__65590) : self__.f.call(null,G__65590));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async65575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async65575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65576","meta65576",179127787,null)], null);
}));

(cljs.core.async.t_cljs$core$async65575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65575");

(cljs.core.async.t_cljs$core$async65575.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async65575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65575.
 */
cljs.core.async.__GT_t_cljs$core$async65575 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async65575(f__$1,ch__$1,meta65576){
return (new cljs.core.async.t_cljs$core$async65575(f__$1,ch__$1,meta65576));
});

}

return (new cljs.core.async.t_cljs$core$async65575(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65594 = (function (f,ch,meta65595){
this.f = f;
this.ch = ch;
this.meta65595 = meta65595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65596,meta65595__$1){
var self__ = this;
var _65596__$1 = this;
return (new cljs.core.async.t_cljs$core$async65594(self__.f,self__.ch,meta65595__$1));
}));

(cljs.core.async.t_cljs$core$async65594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65596){
var self__ = this;
var _65596__$1 = this;
return self__.meta65595;
}));

(cljs.core.async.t_cljs$core$async65594.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65594.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65594.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65594.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async65594.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65594.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async65594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65595","meta65595",1272186612,null)], null);
}));

(cljs.core.async.t_cljs$core$async65594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65594");

(cljs.core.async.t_cljs$core$async65594.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async65594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65594.
 */
cljs.core.async.__GT_t_cljs$core$async65594 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async65594(f__$1,ch__$1,meta65595){
return (new cljs.core.async.t_cljs$core$async65594(f__$1,ch__$1,meta65595));
});

}

return (new cljs.core.async.t_cljs$core$async65594(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65603 = (function (p,ch,meta65604){
this.p = p;
this.ch = ch;
this.meta65604 = meta65604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65605,meta65604__$1){
var self__ = this;
var _65605__$1 = this;
return (new cljs.core.async.t_cljs$core$async65603(self__.p,self__.ch,meta65604__$1));
}));

(cljs.core.async.t_cljs$core$async65603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65605){
var self__ = this;
var _65605__$1 = this;
return self__.meta65604;
}));

(cljs.core.async.t_cljs$core$async65603.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65603.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async65603.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async65603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65604","meta65604",1505180895,null)], null);
}));

(cljs.core.async.t_cljs$core$async65603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65603");

(cljs.core.async.t_cljs$core$async65603.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async65603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65603.
 */
cljs.core.async.__GT_t_cljs$core$async65603 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async65603(p__$1,ch__$1,meta65604){
return (new cljs.core.async.t_cljs$core$async65603(p__$1,ch__$1,meta65604));
});

}

return (new cljs.core.async.t_cljs$core$async65603(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__65623 = arguments.length;
switch (G__65623) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__63830__auto___66607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_65650){
var state_val_65651 = (state_65650[(1)]);
if((state_val_65651 === (7))){
var inst_65646 = (state_65650[(2)]);
var state_65650__$1 = state_65650;
var statearr_65653_66610 = state_65650__$1;
(statearr_65653_66610[(2)] = inst_65646);

(statearr_65653_66610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65651 === (1))){
var state_65650__$1 = state_65650;
var statearr_65654_66611 = state_65650__$1;
(statearr_65654_66611[(2)] = null);

(statearr_65654_66611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65651 === (4))){
var inst_65629 = (state_65650[(7)]);
var inst_65629__$1 = (state_65650[(2)]);
var inst_65632 = (inst_65629__$1 == null);
var state_65650__$1 = (function (){var statearr_65655 = state_65650;
(statearr_65655[(7)] = inst_65629__$1);

return statearr_65655;
})();
if(cljs.core.truth_(inst_65632)){
var statearr_65656_66612 = state_65650__$1;
(statearr_65656_66612[(1)] = (5));

} else {
var statearr_65657_66613 = state_65650__$1;
(statearr_65657_66613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65651 === (6))){
var inst_65629 = (state_65650[(7)]);
var inst_65636 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_65629) : p.call(null,inst_65629));
var state_65650__$1 = state_65650;
if(cljs.core.truth_(inst_65636)){
var statearr_65658_66614 = state_65650__$1;
(statearr_65658_66614[(1)] = (8));

} else {
var statearr_65659_66615 = state_65650__$1;
(statearr_65659_66615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65651 === (3))){
var inst_65648 = (state_65650[(2)]);
var state_65650__$1 = state_65650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65650__$1,inst_65648);
} else {
if((state_val_65651 === (2))){
var state_65650__$1 = state_65650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65650__$1,(4),ch);
} else {
if((state_val_65651 === (11))){
var inst_65640 = (state_65650[(2)]);
var state_65650__$1 = state_65650;
var statearr_65661_66618 = state_65650__$1;
(statearr_65661_66618[(2)] = inst_65640);

(statearr_65661_66618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65651 === (9))){
var state_65650__$1 = state_65650;
var statearr_65670_66619 = state_65650__$1;
(statearr_65670_66619[(2)] = null);

(statearr_65670_66619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65651 === (5))){
var inst_65634 = cljs.core.async.close_BANG_(out);
var state_65650__$1 = state_65650;
var statearr_65672_66620 = state_65650__$1;
(statearr_65672_66620[(2)] = inst_65634);

(statearr_65672_66620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65651 === (10))){
var inst_65643 = (state_65650[(2)]);
var state_65650__$1 = (function (){var statearr_65674 = state_65650;
(statearr_65674[(8)] = inst_65643);

return statearr_65674;
})();
var statearr_65675_66621 = state_65650__$1;
(statearr_65675_66621[(2)] = null);

(statearr_65675_66621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65651 === (8))){
var inst_65629 = (state_65650[(7)]);
var state_65650__$1 = state_65650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65650__$1,(11),out,inst_65629);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_65676 = [null,null,null,null,null,null,null,null,null];
(statearr_65676[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_65676[(1)] = (1));

return statearr_65676;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_65650){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_65650);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e65677){var ex__63612__auto__ = e65677;
var statearr_65678_66629 = state_65650;
(statearr_65678_66629[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_65650[(4)]))){
var statearr_65679_66630 = state_65650;
(statearr_65679_66630[(1)] = cljs.core.first((state_65650[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66633 = state_65650;
state_65650 = G__66633;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_65650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_65650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_65680 = f__63831__auto__();
(statearr_65680[(6)] = c__63830__auto___66607);

return statearr_65680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__65682 = arguments.length;
switch (G__65682) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__63830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_65746){
var state_val_65747 = (state_65746[(1)]);
if((state_val_65747 === (7))){
var inst_65742 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
var statearr_65748_66640 = state_65746__$1;
(statearr_65748_66640[(2)] = inst_65742);

(statearr_65748_66640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (20))){
var inst_65712 = (state_65746[(7)]);
var inst_65723 = (state_65746[(2)]);
var inst_65724 = cljs.core.next(inst_65712);
var inst_65698 = inst_65724;
var inst_65699 = null;
var inst_65700 = (0);
var inst_65701 = (0);
var state_65746__$1 = (function (){var statearr_65749 = state_65746;
(statearr_65749[(8)] = inst_65723);

(statearr_65749[(9)] = inst_65701);

(statearr_65749[(10)] = inst_65700);

(statearr_65749[(11)] = inst_65698);

(statearr_65749[(12)] = inst_65699);

return statearr_65749;
})();
var statearr_65750_66642 = state_65746__$1;
(statearr_65750_66642[(2)] = null);

(statearr_65750_66642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (1))){
var state_65746__$1 = state_65746;
var statearr_65751_66643 = state_65746__$1;
(statearr_65751_66643[(2)] = null);

(statearr_65751_66643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (4))){
var inst_65687 = (state_65746[(13)]);
var inst_65687__$1 = (state_65746[(2)]);
var inst_65688 = (inst_65687__$1 == null);
var state_65746__$1 = (function (){var statearr_65752 = state_65746;
(statearr_65752[(13)] = inst_65687__$1);

return statearr_65752;
})();
if(cljs.core.truth_(inst_65688)){
var statearr_65753_66644 = state_65746__$1;
(statearr_65753_66644[(1)] = (5));

} else {
var statearr_65754_66645 = state_65746__$1;
(statearr_65754_66645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (15))){
var state_65746__$1 = state_65746;
var statearr_65758_66646 = state_65746__$1;
(statearr_65758_66646[(2)] = null);

(statearr_65758_66646[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (21))){
var state_65746__$1 = state_65746;
var statearr_65759_66648 = state_65746__$1;
(statearr_65759_66648[(2)] = null);

(statearr_65759_66648[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (13))){
var inst_65701 = (state_65746[(9)]);
var inst_65700 = (state_65746[(10)]);
var inst_65698 = (state_65746[(11)]);
var inst_65699 = (state_65746[(12)]);
var inst_65708 = (state_65746[(2)]);
var inst_65709 = (inst_65701 + (1));
var tmp65755 = inst_65700;
var tmp65756 = inst_65698;
var tmp65757 = inst_65699;
var inst_65698__$1 = tmp65756;
var inst_65699__$1 = tmp65757;
var inst_65700__$1 = tmp65755;
var inst_65701__$1 = inst_65709;
var state_65746__$1 = (function (){var statearr_65760 = state_65746;
(statearr_65760[(14)] = inst_65708);

(statearr_65760[(9)] = inst_65701__$1);

(statearr_65760[(10)] = inst_65700__$1);

(statearr_65760[(11)] = inst_65698__$1);

(statearr_65760[(12)] = inst_65699__$1);

return statearr_65760;
})();
var statearr_65761_66650 = state_65746__$1;
(statearr_65761_66650[(2)] = null);

(statearr_65761_66650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (22))){
var state_65746__$1 = state_65746;
var statearr_65762_66657 = state_65746__$1;
(statearr_65762_66657[(2)] = null);

(statearr_65762_66657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (6))){
var inst_65687 = (state_65746[(13)]);
var inst_65696 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_65687) : f.call(null,inst_65687));
var inst_65697 = cljs.core.seq(inst_65696);
var inst_65698 = inst_65697;
var inst_65699 = null;
var inst_65700 = (0);
var inst_65701 = (0);
var state_65746__$1 = (function (){var statearr_65763 = state_65746;
(statearr_65763[(9)] = inst_65701);

(statearr_65763[(10)] = inst_65700);

(statearr_65763[(11)] = inst_65698);

(statearr_65763[(12)] = inst_65699);

return statearr_65763;
})();
var statearr_65764_66658 = state_65746__$1;
(statearr_65764_66658[(2)] = null);

(statearr_65764_66658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (17))){
var inst_65712 = (state_65746[(7)]);
var inst_65716 = cljs.core.chunk_first(inst_65712);
var inst_65717 = cljs.core.chunk_rest(inst_65712);
var inst_65718 = cljs.core.count(inst_65716);
var inst_65698 = inst_65717;
var inst_65699 = inst_65716;
var inst_65700 = inst_65718;
var inst_65701 = (0);
var state_65746__$1 = (function (){var statearr_65765 = state_65746;
(statearr_65765[(9)] = inst_65701);

(statearr_65765[(10)] = inst_65700);

(statearr_65765[(11)] = inst_65698);

(statearr_65765[(12)] = inst_65699);

return statearr_65765;
})();
var statearr_65766_66659 = state_65746__$1;
(statearr_65766_66659[(2)] = null);

(statearr_65766_66659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (3))){
var inst_65744 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65746__$1,inst_65744);
} else {
if((state_val_65747 === (12))){
var inst_65732 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
var statearr_65767_66660 = state_65746__$1;
(statearr_65767_66660[(2)] = inst_65732);

(statearr_65767_66660[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (2))){
var state_65746__$1 = state_65746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65746__$1,(4),in$);
} else {
if((state_val_65747 === (23))){
var inst_65740 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
var statearr_65768_66661 = state_65746__$1;
(statearr_65768_66661[(2)] = inst_65740);

(statearr_65768_66661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (19))){
var inst_65727 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
var statearr_65769_66662 = state_65746__$1;
(statearr_65769_66662[(2)] = inst_65727);

(statearr_65769_66662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (11))){
var inst_65712 = (state_65746[(7)]);
var inst_65698 = (state_65746[(11)]);
var inst_65712__$1 = cljs.core.seq(inst_65698);
var state_65746__$1 = (function (){var statearr_65770 = state_65746;
(statearr_65770[(7)] = inst_65712__$1);

return statearr_65770;
})();
if(inst_65712__$1){
var statearr_65771_66663 = state_65746__$1;
(statearr_65771_66663[(1)] = (14));

} else {
var statearr_65772_66665 = state_65746__$1;
(statearr_65772_66665[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (9))){
var inst_65734 = (state_65746[(2)]);
var inst_65735 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_65746__$1 = (function (){var statearr_65773 = state_65746;
(statearr_65773[(15)] = inst_65734);

return statearr_65773;
})();
if(cljs.core.truth_(inst_65735)){
var statearr_65774_66666 = state_65746__$1;
(statearr_65774_66666[(1)] = (21));

} else {
var statearr_65775_66667 = state_65746__$1;
(statearr_65775_66667[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (5))){
var inst_65690 = cljs.core.async.close_BANG_(out);
var state_65746__$1 = state_65746;
var statearr_65776_66673 = state_65746__$1;
(statearr_65776_66673[(2)] = inst_65690);

(statearr_65776_66673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (14))){
var inst_65712 = (state_65746[(7)]);
var inst_65714 = cljs.core.chunked_seq_QMARK_(inst_65712);
var state_65746__$1 = state_65746;
if(inst_65714){
var statearr_65777_66675 = state_65746__$1;
(statearr_65777_66675[(1)] = (17));

} else {
var statearr_65778_66676 = state_65746__$1;
(statearr_65778_66676[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (16))){
var inst_65730 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
var statearr_65779_66677 = state_65746__$1;
(statearr_65779_66677[(2)] = inst_65730);

(statearr_65779_66677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (10))){
var inst_65701 = (state_65746[(9)]);
var inst_65699 = (state_65746[(12)]);
var inst_65706 = cljs.core._nth(inst_65699,inst_65701);
var state_65746__$1 = state_65746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65746__$1,(13),out,inst_65706);
} else {
if((state_val_65747 === (18))){
var inst_65712 = (state_65746[(7)]);
var inst_65721 = cljs.core.first(inst_65712);
var state_65746__$1 = state_65746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65746__$1,(20),out,inst_65721);
} else {
if((state_val_65747 === (8))){
var inst_65701 = (state_65746[(9)]);
var inst_65700 = (state_65746[(10)]);
var inst_65703 = (inst_65701 < inst_65700);
var inst_65704 = inst_65703;
var state_65746__$1 = state_65746;
if(cljs.core.truth_(inst_65704)){
var statearr_65780_66685 = state_65746__$1;
(statearr_65780_66685[(1)] = (10));

} else {
var statearr_65781_66686 = state_65746__$1;
(statearr_65781_66686[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__63609__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__63609__auto____0 = (function (){
var statearr_65782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65782[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__63609__auto__);

(statearr_65782[(1)] = (1));

return statearr_65782;
});
var cljs$core$async$mapcat_STAR__$_state_machine__63609__auto____1 = (function (state_65746){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_65746);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e65783){var ex__63612__auto__ = e65783;
var statearr_65784_66692 = state_65746;
(statearr_65784_66692[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_65746[(4)]))){
var statearr_65785_66693 = state_65746;
(statearr_65785_66693[(1)] = cljs.core.first((state_65746[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66694 = state_65746;
state_65746 = G__66694;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__63609__auto__ = function(state_65746){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__63609__auto____1.call(this,state_65746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__63609__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__63609__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_65786 = f__63831__auto__();
(statearr_65786[(6)] = c__63830__auto__);

return statearr_65786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));

return c__63830__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__65788 = arguments.length;
switch (G__65788) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__65790 = arguments.length;
switch (G__65790) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__65792 = arguments.length;
switch (G__65792) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__63830__auto___66708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_65816){
var state_val_65817 = (state_65816[(1)]);
if((state_val_65817 === (7))){
var inst_65811 = (state_65816[(2)]);
var state_65816__$1 = state_65816;
var statearr_65818_66709 = state_65816__$1;
(statearr_65818_66709[(2)] = inst_65811);

(statearr_65818_66709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65817 === (1))){
var inst_65793 = null;
var state_65816__$1 = (function (){var statearr_65819 = state_65816;
(statearr_65819[(7)] = inst_65793);

return statearr_65819;
})();
var statearr_65820_66711 = state_65816__$1;
(statearr_65820_66711[(2)] = null);

(statearr_65820_66711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65817 === (4))){
var inst_65796 = (state_65816[(8)]);
var inst_65796__$1 = (state_65816[(2)]);
var inst_65797 = (inst_65796__$1 == null);
var inst_65798 = cljs.core.not(inst_65797);
var state_65816__$1 = (function (){var statearr_65821 = state_65816;
(statearr_65821[(8)] = inst_65796__$1);

return statearr_65821;
})();
if(inst_65798){
var statearr_65822_66712 = state_65816__$1;
(statearr_65822_66712[(1)] = (5));

} else {
var statearr_65823_66713 = state_65816__$1;
(statearr_65823_66713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65817 === (6))){
var state_65816__$1 = state_65816;
var statearr_65824_66714 = state_65816__$1;
(statearr_65824_66714[(2)] = null);

(statearr_65824_66714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65817 === (3))){
var inst_65813 = (state_65816[(2)]);
var inst_65814 = cljs.core.async.close_BANG_(out);
var state_65816__$1 = (function (){var statearr_65825 = state_65816;
(statearr_65825[(9)] = inst_65813);

return statearr_65825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65816__$1,inst_65814);
} else {
if((state_val_65817 === (2))){
var state_65816__$1 = state_65816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65816__$1,(4),ch);
} else {
if((state_val_65817 === (11))){
var inst_65796 = (state_65816[(8)]);
var inst_65805 = (state_65816[(2)]);
var inst_65793 = inst_65796;
var state_65816__$1 = (function (){var statearr_65826 = state_65816;
(statearr_65826[(7)] = inst_65793);

(statearr_65826[(10)] = inst_65805);

return statearr_65826;
})();
var statearr_65827_66721 = state_65816__$1;
(statearr_65827_66721[(2)] = null);

(statearr_65827_66721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65817 === (9))){
var inst_65796 = (state_65816[(8)]);
var state_65816__$1 = state_65816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65816__$1,(11),out,inst_65796);
} else {
if((state_val_65817 === (5))){
var inst_65793 = (state_65816[(7)]);
var inst_65796 = (state_65816[(8)]);
var inst_65800 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65796,inst_65793);
var state_65816__$1 = state_65816;
if(inst_65800){
var statearr_65829_66728 = state_65816__$1;
(statearr_65829_66728[(1)] = (8));

} else {
var statearr_65830_66729 = state_65816__$1;
(statearr_65830_66729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65817 === (10))){
var inst_65808 = (state_65816[(2)]);
var state_65816__$1 = state_65816;
var statearr_65831_66733 = state_65816__$1;
(statearr_65831_66733[(2)] = inst_65808);

(statearr_65831_66733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65817 === (8))){
var inst_65793 = (state_65816[(7)]);
var tmp65828 = inst_65793;
var inst_65793__$1 = tmp65828;
var state_65816__$1 = (function (){var statearr_65832 = state_65816;
(statearr_65832[(7)] = inst_65793__$1);

return statearr_65832;
})();
var statearr_65833_66734 = state_65816__$1;
(statearr_65833_66734[(2)] = null);

(statearr_65833_66734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_65834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65834[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_65834[(1)] = (1));

return statearr_65834;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_65816){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_65816);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e65835){var ex__63612__auto__ = e65835;
var statearr_65836_66738 = state_65816;
(statearr_65836_66738[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_65816[(4)]))){
var statearr_65837_66739 = state_65816;
(statearr_65837_66739[(1)] = cljs.core.first((state_65816[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66740 = state_65816;
state_65816 = G__66740;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_65816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_65816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_65838 = f__63831__auto__();
(statearr_65838[(6)] = c__63830__auto___66708);

return statearr_65838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__65840 = arguments.length;
switch (G__65840) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__63830__auto___66742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_65878){
var state_val_65879 = (state_65878[(1)]);
if((state_val_65879 === (7))){
var inst_65874 = (state_65878[(2)]);
var state_65878__$1 = state_65878;
var statearr_65880_66743 = state_65878__$1;
(statearr_65880_66743[(2)] = inst_65874);

(statearr_65880_66743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (1))){
var inst_65841 = (new Array(n));
var inst_65842 = inst_65841;
var inst_65843 = (0);
var state_65878__$1 = (function (){var statearr_65881 = state_65878;
(statearr_65881[(7)] = inst_65843);

(statearr_65881[(8)] = inst_65842);

return statearr_65881;
})();
var statearr_65882_66744 = state_65878__$1;
(statearr_65882_66744[(2)] = null);

(statearr_65882_66744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (4))){
var inst_65846 = (state_65878[(9)]);
var inst_65846__$1 = (state_65878[(2)]);
var inst_65847 = (inst_65846__$1 == null);
var inst_65848 = cljs.core.not(inst_65847);
var state_65878__$1 = (function (){var statearr_65883 = state_65878;
(statearr_65883[(9)] = inst_65846__$1);

return statearr_65883;
})();
if(inst_65848){
var statearr_65884_66745 = state_65878__$1;
(statearr_65884_66745[(1)] = (5));

} else {
var statearr_65885_66746 = state_65878__$1;
(statearr_65885_66746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (15))){
var inst_65868 = (state_65878[(2)]);
var state_65878__$1 = state_65878;
var statearr_65886_66747 = state_65878__$1;
(statearr_65886_66747[(2)] = inst_65868);

(statearr_65886_66747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (13))){
var state_65878__$1 = state_65878;
var statearr_65887_66748 = state_65878__$1;
(statearr_65887_66748[(2)] = null);

(statearr_65887_66748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (6))){
var inst_65843 = (state_65878[(7)]);
var inst_65864 = (inst_65843 > (0));
var state_65878__$1 = state_65878;
if(cljs.core.truth_(inst_65864)){
var statearr_65888_66749 = state_65878__$1;
(statearr_65888_66749[(1)] = (12));

} else {
var statearr_65889_66750 = state_65878__$1;
(statearr_65889_66750[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (3))){
var inst_65876 = (state_65878[(2)]);
var state_65878__$1 = state_65878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65878__$1,inst_65876);
} else {
if((state_val_65879 === (12))){
var inst_65842 = (state_65878[(8)]);
var inst_65866 = cljs.core.vec(inst_65842);
var state_65878__$1 = state_65878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65878__$1,(15),out,inst_65866);
} else {
if((state_val_65879 === (2))){
var state_65878__$1 = state_65878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65878__$1,(4),ch);
} else {
if((state_val_65879 === (11))){
var inst_65858 = (state_65878[(2)]);
var inst_65859 = (new Array(n));
var inst_65842 = inst_65859;
var inst_65843 = (0);
var state_65878__$1 = (function (){var statearr_65890 = state_65878;
(statearr_65890[(7)] = inst_65843);

(statearr_65890[(10)] = inst_65858);

(statearr_65890[(8)] = inst_65842);

return statearr_65890;
})();
var statearr_65891_66753 = state_65878__$1;
(statearr_65891_66753[(2)] = null);

(statearr_65891_66753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (9))){
var inst_65842 = (state_65878[(8)]);
var inst_65856 = cljs.core.vec(inst_65842);
var state_65878__$1 = state_65878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65878__$1,(11),out,inst_65856);
} else {
if((state_val_65879 === (5))){
var inst_65843 = (state_65878[(7)]);
var inst_65846 = (state_65878[(9)]);
var inst_65851 = (state_65878[(11)]);
var inst_65842 = (state_65878[(8)]);
var inst_65850 = (inst_65842[inst_65843] = inst_65846);
var inst_65851__$1 = (inst_65843 + (1));
var inst_65852 = (inst_65851__$1 < n);
var state_65878__$1 = (function (){var statearr_65892 = state_65878;
(statearr_65892[(12)] = inst_65850);

(statearr_65892[(11)] = inst_65851__$1);

return statearr_65892;
})();
if(cljs.core.truth_(inst_65852)){
var statearr_65893_66754 = state_65878__$1;
(statearr_65893_66754[(1)] = (8));

} else {
var statearr_65894_66755 = state_65878__$1;
(statearr_65894_66755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (14))){
var inst_65871 = (state_65878[(2)]);
var inst_65872 = cljs.core.async.close_BANG_(out);
var state_65878__$1 = (function (){var statearr_65896 = state_65878;
(statearr_65896[(13)] = inst_65871);

return statearr_65896;
})();
var statearr_65897_66756 = state_65878__$1;
(statearr_65897_66756[(2)] = inst_65872);

(statearr_65897_66756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (10))){
var inst_65862 = (state_65878[(2)]);
var state_65878__$1 = state_65878;
var statearr_65898_66757 = state_65878__$1;
(statearr_65898_66757[(2)] = inst_65862);

(statearr_65898_66757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (8))){
var inst_65851 = (state_65878[(11)]);
var inst_65842 = (state_65878[(8)]);
var tmp65895 = inst_65842;
var inst_65842__$1 = tmp65895;
var inst_65843 = inst_65851;
var state_65878__$1 = (function (){var statearr_65899 = state_65878;
(statearr_65899[(7)] = inst_65843);

(statearr_65899[(8)] = inst_65842__$1);

return statearr_65899;
})();
var statearr_65900_66758 = state_65878__$1;
(statearr_65900_66758[(2)] = null);

(statearr_65900_66758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_65901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65901[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_65901[(1)] = (1));

return statearr_65901;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_65878){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_65878);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e65902){var ex__63612__auto__ = e65902;
var statearr_65903_66759 = state_65878;
(statearr_65903_66759[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_65878[(4)]))){
var statearr_65904_66760 = state_65878;
(statearr_65904_66760[(1)] = cljs.core.first((state_65878[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66761 = state_65878;
state_65878 = G__66761;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_65878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_65878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_65905 = f__63831__auto__();
(statearr_65905[(6)] = c__63830__auto___66742);

return statearr_65905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__65907 = arguments.length;
switch (G__65907) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__63830__auto___66765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_65949){
var state_val_65950 = (state_65949[(1)]);
if((state_val_65950 === (7))){
var inst_65945 = (state_65949[(2)]);
var state_65949__$1 = state_65949;
var statearr_65951_66767 = state_65949__$1;
(statearr_65951_66767[(2)] = inst_65945);

(statearr_65951_66767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65950 === (1))){
var inst_65908 = [];
var inst_65909 = inst_65908;
var inst_65910 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_65949__$1 = (function (){var statearr_65952 = state_65949;
(statearr_65952[(7)] = inst_65909);

(statearr_65952[(8)] = inst_65910);

return statearr_65952;
})();
var statearr_65953_66772 = state_65949__$1;
(statearr_65953_66772[(2)] = null);

(statearr_65953_66772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65950 === (4))){
var inst_65913 = (state_65949[(9)]);
var inst_65913__$1 = (state_65949[(2)]);
var inst_65914 = (inst_65913__$1 == null);
var inst_65915 = cljs.core.not(inst_65914);
var state_65949__$1 = (function (){var statearr_65954 = state_65949;
(statearr_65954[(9)] = inst_65913__$1);

return statearr_65954;
})();
if(inst_65915){
var statearr_65955_66773 = state_65949__$1;
(statearr_65955_66773[(1)] = (5));

} else {
var statearr_65956_66774 = state_65949__$1;
(statearr_65956_66774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65950 === (15))){
var inst_65939 = (state_65949[(2)]);
var state_65949__$1 = state_65949;
var statearr_65957_66775 = state_65949__$1;
(statearr_65957_66775[(2)] = inst_65939);

(statearr_65957_66775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65950 === (13))){
var state_65949__$1 = state_65949;
var statearr_65958_66776 = state_65949__$1;
(statearr_65958_66776[(2)] = null);

(statearr_65958_66776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65950 === (6))){
var inst_65909 = (state_65949[(7)]);
var inst_65934 = inst_65909.length;
var inst_65935 = (inst_65934 > (0));
var state_65949__$1 = state_65949;
if(cljs.core.truth_(inst_65935)){
var statearr_65959_66777 = state_65949__$1;
(statearr_65959_66777[(1)] = (12));

} else {
var statearr_65960_66778 = state_65949__$1;
(statearr_65960_66778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65950 === (3))){
var inst_65947 = (state_65949[(2)]);
var state_65949__$1 = state_65949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65949__$1,inst_65947);
} else {
if((state_val_65950 === (12))){
var inst_65909 = (state_65949[(7)]);
var inst_65937 = cljs.core.vec(inst_65909);
var state_65949__$1 = state_65949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65949__$1,(15),out,inst_65937);
} else {
if((state_val_65950 === (2))){
var state_65949__$1 = state_65949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65949__$1,(4),ch);
} else {
if((state_val_65950 === (11))){
var inst_65913 = (state_65949[(9)]);
var inst_65917 = (state_65949[(10)]);
var inst_65927 = (state_65949[(2)]);
var inst_65928 = [];
var inst_65929 = inst_65928.push(inst_65913);
var inst_65909 = inst_65928;
var inst_65910 = inst_65917;
var state_65949__$1 = (function (){var statearr_65961 = state_65949;
(statearr_65961[(11)] = inst_65927);

(statearr_65961[(7)] = inst_65909);

(statearr_65961[(8)] = inst_65910);

(statearr_65961[(12)] = inst_65929);

return statearr_65961;
})();
var statearr_65962_66779 = state_65949__$1;
(statearr_65962_66779[(2)] = null);

(statearr_65962_66779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65950 === (9))){
var inst_65909 = (state_65949[(7)]);
var inst_65925 = cljs.core.vec(inst_65909);
var state_65949__$1 = state_65949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65949__$1,(11),out,inst_65925);
} else {
if((state_val_65950 === (5))){
var inst_65910 = (state_65949[(8)]);
var inst_65913 = (state_65949[(9)]);
var inst_65917 = (state_65949[(10)]);
var inst_65917__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_65913) : f.call(null,inst_65913));
var inst_65918 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65917__$1,inst_65910);
var inst_65919 = cljs.core.keyword_identical_QMARK_(inst_65910,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_65920 = ((inst_65918) || (inst_65919));
var state_65949__$1 = (function (){var statearr_65963 = state_65949;
(statearr_65963[(10)] = inst_65917__$1);

return statearr_65963;
})();
if(cljs.core.truth_(inst_65920)){
var statearr_65964_66782 = state_65949__$1;
(statearr_65964_66782[(1)] = (8));

} else {
var statearr_65965_66783 = state_65949__$1;
(statearr_65965_66783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65950 === (14))){
var inst_65942 = (state_65949[(2)]);
var inst_65943 = cljs.core.async.close_BANG_(out);
var state_65949__$1 = (function (){var statearr_65967 = state_65949;
(statearr_65967[(13)] = inst_65942);

return statearr_65967;
})();
var statearr_65968_66784 = state_65949__$1;
(statearr_65968_66784[(2)] = inst_65943);

(statearr_65968_66784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65950 === (10))){
var inst_65932 = (state_65949[(2)]);
var state_65949__$1 = state_65949;
var statearr_65969_66785 = state_65949__$1;
(statearr_65969_66785[(2)] = inst_65932);

(statearr_65969_66785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65950 === (8))){
var inst_65909 = (state_65949[(7)]);
var inst_65913 = (state_65949[(9)]);
var inst_65917 = (state_65949[(10)]);
var inst_65922 = inst_65909.push(inst_65913);
var tmp65966 = inst_65909;
var inst_65909__$1 = tmp65966;
var inst_65910 = inst_65917;
var state_65949__$1 = (function (){var statearr_65971 = state_65949;
(statearr_65971[(7)] = inst_65909__$1);

(statearr_65971[(8)] = inst_65910);

(statearr_65971[(14)] = inst_65922);

return statearr_65971;
})();
var statearr_65972_66786 = state_65949__$1;
(statearr_65972_66786[(2)] = null);

(statearr_65972_66786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__63609__auto__ = null;
var cljs$core$async$state_machine__63609__auto____0 = (function (){
var statearr_65973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65973[(0)] = cljs$core$async$state_machine__63609__auto__);

(statearr_65973[(1)] = (1));

return statearr_65973;
});
var cljs$core$async$state_machine__63609__auto____1 = (function (state_65949){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_65949);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e65974){var ex__63612__auto__ = e65974;
var statearr_65975_66789 = state_65949;
(statearr_65975_66789[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_65949[(4)]))){
var statearr_65977_66790 = state_65949;
(statearr_65977_66790[(1)] = cljs.core.first((state_65949[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66791 = state_65949;
state_65949 = G__66791;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
cljs$core$async$state_machine__63609__auto__ = function(state_65949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__63609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__63609__auto____1.call(this,state_65949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__63609__auto____0;
cljs$core$async$state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__63609__auto____1;
return cljs$core$async$state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_65980 = f__63831__auto__();
(statearr_65980[(6)] = c__63830__auto___66765);

return statearr_65980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
