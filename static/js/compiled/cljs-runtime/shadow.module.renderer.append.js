
shadow.cljs.devtools.client.env.module_loaded('renderer');

try { athens.core.init(); } catch (e) { console.error("An error occurred when calling (athens.core/init)"); throw(e); }