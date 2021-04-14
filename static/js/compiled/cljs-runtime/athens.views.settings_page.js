goog.provide('athens.views.settings_page');
var module$node_modules$$material_ui$icons$ToggleOff=shadow.js.require("module$node_modules$$material_ui$icons$ToggleOff", {});
var module$node_modules$$material_ui$icons$ToggleOn=shadow.js.require("module$node_modules$$material_ui$icons$ToggleOn", {});
athens.views.settings_page.opt_out = (function athens$views$settings_page$opt_out(opted_out_QMARK_){
posthog.capture("opt-out");

window.posthog.opt_out_capturing();

localStorage.setItem("sentry","off");

return cljs.core.reset_BANG_(opted_out_QMARK_,true);
});
athens.views.settings_page.opt_in = (function athens$views$settings_page$opt_in(opted_out_QMARK_){
window.posthog.opt_in_capturing();

posthog.capture("opt-in");

localStorage.setItem("sentry","on");

return cljs.core.reset_BANG_(opted_out_QMARK_,false);
});
athens.views.settings_page.handle_click = (function athens$views$settings_page$handle_click(opted_out_QMARK_){
if(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))){
return athens.views.settings_page.opt_in(opted_out_QMARK_);
} else {
return athens.views.settings_page.opt_out(opted_out_QMARK_);
}
});
athens.views.settings_page.handle_debounce_save_input = (function athens$views$settings_page$handle_debounce_save_input(value,debounce_time){
if(((((0) <= value)) && ((value <= (1000))))){
cljs.core.reset_BANG_(debounce_time,value);

(athens.electron.debounce_write_db = goog.functions.debounce(athens.electron.write_db,((1000) * value)));

return localStorage.setItem("debounce-save-time",value);
} else {
return null;
}
});
athens.views.settings_page.handle_change_email = (function athens$views$settings_page$handle_change_email(email,value){
return cljs.core.reset_BANG_(email,value);
});
athens.views.settings_page.handle_click_email = (function athens$views$settings_page$handle_click_email(email,authed_QMARK_,sending_request){
var api = "https://dhx9n94ty5.execute-api.us-east-1.amazonaws.com/Prod/hello";
var email_qs = "?email=";
var query_url = [api,email_qs,cljs.core.str.cljs$core$IFn$_invoke$arity$1(email)].join('');
cljs.core.reset_BANG_(sending_request,true);

var c__63830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__63831__auto__ = (function (){var switch__63608__auto__ = (function (state_98186){
var state_val_98187 = (state_98186[(1)]);
if((state_val_98187 === (7))){
var inst_98147 = (state_98186[(7)]);
var inst_98132 = (state_98186[(8)]);
var inst_98147__$1 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_98132);
var state_98186__$1 = (function (){var statearr_98193 = state_98186;
(statearr_98193[(7)] = inst_98147__$1);

return statearr_98193;
})();
if(cljs.core.truth_(inst_98147__$1)){
var statearr_98200_98252 = state_98186__$1;
(statearr_98200_98252[(1)] = (9));

} else {
var statearr_98202_98253 = state_98186__$1;
(statearr_98202_98253[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (1))){
var inst_98129 = cljs_http.client.get(query_url);
var state_98186__$1 = state_98186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_98186__$1,(2),inst_98129);
} else {
if((state_val_98187 === (4))){
var inst_98133 = (state_98186[(9)]);
var state_98186__$1 = state_98186;
var statearr_98203_98254 = state_98186__$1;
(statearr_98203_98254[(2)] = inst_98133);

(statearr_98203_98254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (15))){
var inst_98132 = (state_98186[(8)]);
var inst_98164 = ["Unexpected error",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_98132)].join('');
var inst_98165 = alert(inst_98164);
var state_98186__$1 = state_98186;
var statearr_98204_98255 = state_98186__$1;
(statearr_98204_98255[(2)] = inst_98165);

(statearr_98204_98255[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (13))){
var state_98186__$1 = state_98186;
var statearr_98205_98256 = state_98186__$1;
(statearr_98205_98256[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (6))){
var inst_98142 = localStorage.setItem("auth/email",email);
var inst_98143 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(true);
var inst_98144 = localStorage.setItem("auth/authed?",inst_98143);
var inst_98145 = cljs.core.reset_BANG_(authed_QMARK_,true);
var state_98186__$1 = (function (){var statearr_98207 = state_98186;
(statearr_98207[(10)] = inst_98144);

(statearr_98207[(11)] = inst_98142);

return statearr_98207;
})();
var statearr_98209_98257 = state_98186__$1;
(statearr_98209_98257[(2)] = inst_98145);

(statearr_98209_98257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (17))){
var inst_98173 = (state_98186[(2)]);
var state_98186__$1 = state_98186;
var statearr_98212_98258 = state_98186__$1;
(statearr_98212_98258[(2)] = inst_98173);

(statearr_98212_98258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (3))){
var inst_98132 = (state_98186[(8)]);
var inst_98135 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_98132);
var inst_98136 = new cljs.core.Keyword(null,"email_exists","email_exists",-1713774167).cljs$core$IFn$_invoke$arity$1(inst_98135);
var inst_98137 = inst_98136 === true;
var state_98186__$1 = state_98186;
var statearr_98213_98259 = state_98186__$1;
(statearr_98213_98259[(2)] = inst_98137);

(statearr_98213_98259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (12))){
var inst_98156 = localStorage.setItem("auth/email",null);
var inst_98158 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(false);
var inst_98159 = localStorage.setItem("auth/authed?",inst_98158);
var inst_98160 = cljs.core.reset_BANG_(authed_QMARK_,false);
var inst_98161 = alert("No OpenCollective account was found with this email address.");
var state_98186__$1 = (function (){var statearr_98214 = state_98186;
(statearr_98214[(12)] = inst_98156);

(statearr_98214[(13)] = inst_98159);

(statearr_98214[(14)] = inst_98160);

return statearr_98214;
})();
var statearr_98215_98260 = state_98186__$1;
(statearr_98215_98260[(2)] = inst_98161);

(statearr_98215_98260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (2))){
var inst_98132 = (state_98186[(8)]);
var inst_98133 = (state_98186[(9)]);
var inst_98132__$1 = (state_98186[(2)]);
var inst_98133__$1 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_98132__$1);
var state_98186__$1 = (function (){var statearr_98216 = state_98186;
(statearr_98216[(8)] = inst_98132__$1);

(statearr_98216[(9)] = inst_98133__$1);

return statearr_98216;
})();
if(cljs.core.truth_(inst_98133__$1)){
var statearr_98217_98261 = state_98186__$1;
(statearr_98217_98261[(1)] = (3));

} else {
var statearr_98218_98262 = state_98186__$1;
(statearr_98218_98262[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (11))){
var inst_98154 = (state_98186[(2)]);
var state_98186__$1 = state_98186;
if(cljs.core.truth_(inst_98154)){
var statearr_98219_98263 = state_98186__$1;
(statearr_98219_98263[(1)] = (12));

} else {
var statearr_98220_98264 = state_98186__$1;
(statearr_98220_98264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (9))){
var inst_98132 = (state_98186[(8)]);
var inst_98149 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_98132);
var inst_98150 = new cljs.core.Keyword(null,"email_exists","email_exists",-1713774167).cljs$core$IFn$_invoke$arity$1(inst_98149);
var inst_98151 = inst_98150 === false;
var state_98186__$1 = state_98186;
var statearr_98221_98265 = state_98186__$1;
(statearr_98221_98265[(2)] = inst_98151);

(statearr_98221_98265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (5))){
var inst_98140 = (state_98186[(2)]);
var state_98186__$1 = state_98186;
if(cljs.core.truth_(inst_98140)){
var statearr_98222_98266 = state_98186__$1;
(statearr_98222_98266[(1)] = (6));

} else {
var statearr_98223_98268 = state_98186__$1;
(statearr_98223_98268[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (14))){
var inst_98175 = (state_98186[(2)]);
var state_98186__$1 = state_98186;
var statearr_98224_98269 = state_98186__$1;
(statearr_98224_98269[(2)] = inst_98175);

(statearr_98224_98269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (16))){
var state_98186__$1 = state_98186;
var statearr_98230_98273 = state_98186__$1;
(statearr_98230_98273[(2)] = null);

(statearr_98230_98273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (10))){
var inst_98147 = (state_98186[(7)]);
var state_98186__$1 = state_98186;
var statearr_98232_98274 = state_98186__$1;
(statearr_98232_98274[(2)] = inst_98147);

(statearr_98232_98274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98187 === (8))){
var inst_98177 = (state_98186[(2)]);
var inst_98178 = cljs.core.reset_BANG_(sending_request,false);
var state_98186__$1 = (function (){var statearr_98233 = state_98186;
(statearr_98233[(15)] = inst_98177);

return statearr_98233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_98186__$1,inst_98178);
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
var athens$views$settings_page$handle_click_email_$_state_machine__63609__auto__ = null;
var athens$views$settings_page$handle_click_email_$_state_machine__63609__auto____0 = (function (){
var statearr_98236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_98236[(0)] = athens$views$settings_page$handle_click_email_$_state_machine__63609__auto__);

(statearr_98236[(1)] = (1));

return statearr_98236;
});
var athens$views$settings_page$handle_click_email_$_state_machine__63609__auto____1 = (function (state_98186){
while(true){
var ret_value__63610__auto__ = (function (){try{while(true){
var result__63611__auto__ = switch__63608__auto__(state_98186);
if(cljs.core.keyword_identical_QMARK_(result__63611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__63611__auto__;
}
break;
}
}catch (e98237){var ex__63612__auto__ = e98237;
var statearr_98238_98275 = state_98186;
(statearr_98238_98275[(2)] = ex__63612__auto__);


if(cljs.core.seq((state_98186[(4)]))){
var statearr_98239_98276 = state_98186;
(statearr_98239_98276[(1)] = cljs.core.first((state_98186[(4)])));

} else {
throw ex__63612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__63610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98277 = state_98186;
state_98186 = G__98277;
continue;
} else {
return ret_value__63610__auto__;
}
break;
}
});
athens$views$settings_page$handle_click_email_$_state_machine__63609__auto__ = function(state_98186){
switch(arguments.length){
case 0:
return athens$views$settings_page$handle_click_email_$_state_machine__63609__auto____0.call(this);
case 1:
return athens$views$settings_page$handle_click_email_$_state_machine__63609__auto____1.call(this,state_98186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$views$settings_page$handle_click_email_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$0 = athens$views$settings_page$handle_click_email_$_state_machine__63609__auto____0;
athens$views$settings_page$handle_click_email_$_state_machine__63609__auto__.cljs$core$IFn$_invoke$arity$1 = athens$views$settings_page$handle_click_email_$_state_machine__63609__auto____1;
return athens$views$settings_page$handle_click_email_$_state_machine__63609__auto__;
})()
})();
var state__63832__auto__ = (function (){var statearr_98240 = f__63831__auto__();
(statearr_98240[(6)] = c__63830__auto__);

return statearr_98240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__63832__auto__);
}));

return c__63830__auto__;
});
athens.views.settings_page.init_email = (function athens$views$settings_page$init_email(){
var email = localStorage.getItem("auth/email");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(email,"null")){
return "";
} else {
return email;
}
});
athens.views.settings_page.settings_page = (function athens$views$settings_page$settings_page(){
var opted_out_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(window.posthog.has_opted_out_capturing());
var authed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(localStorage.getItem("auth/authed?"),"true"));
var email = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.views.settings_page.init_email());
var sending_request = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var debounce_save_time_BANG_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(Number(localStorage.getItem("debounce-save-time")));
return (function (){
var submit_disabled = (function (){var or__4126__auto__ = cljs.core.deref(sending_request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(authed_QMARK_);
}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin","margin",-995903681),"0vh 5vw",new cljs.core.Keyword(null,"width","width",-384071477),"90vw",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Settings"], null),(cljs.core.truth_(cljs.core.deref(authed_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Thank you for using and backing us, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(email))," \u2764\uFE0F"].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"You are using the free version of Athens. You are hosting your own data. Please be careful!"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Email"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"15em"], null),new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(email),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Open Collective Email",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__98242_SHARP_){
return athens.views.settings_page.handle_change_email(email,p1__98242_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.settings_page.handle_click_email(cljs.core.deref(email),authed_QMARK_,sending_request);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),submit_disabled,new cljs.core.Keyword(null,"primary","primary",817773892),true], null),"Submit"], null)], null)], null),(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Opted Out of Product Usage and Error Monitoring"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Opted Into Product Usage and Error Monitoring"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),cljs.core.deref(opted_out_QMARK_) === false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.settings_page.handle_click(opted_out_QMARK_);
})], null),(cljs.core.truth_(cljs.core.deref(opted_out_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$ToggleOn.default], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDE41 Opting out makes it harder to improve Athens, and for us to become sustainable."], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$ToggleOff.default], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDD12 Athens will never sell your data. Athens has never and will never look at the contents of your database and what you are writing."], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Remote Backups"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Backup my DB to the cloud"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Coming soon to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://opencollective.com/athens",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"paid Users and Sponsors"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Auto-save"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"4em"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(debounce_save_time_BANG_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__98243_SHARP_){
return athens.views.settings_page.handle_debounce_save_input(Number(p1__98243_SHARP_.target.value),debounce_save_time_BANG_);
})], null)], null),(function (){var G__98248 = cljs.core.deref(debounce_save_time_BANG_);
switch (G__98248) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Athens will save and create a local backup after each edit."], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Athens will save and create a local backup ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(debounce_save_time_BANG_))," second after your last edit."].join('')], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Athens will save and create a local backup ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(debounce_save_time_BANG_))," seconds after your last edit."].join('')], null);

}
})()], null)], null)], null);
});
});

//# sourceMappingURL=athens.views.settings_page.js.map
