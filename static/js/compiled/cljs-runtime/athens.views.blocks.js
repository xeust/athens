goog.provide('athens.views.blocks');
var module$node_modules$$material_ui$icons$KeyboardArrowDown=shadow.js.require("module$node_modules$$material_ui$icons$KeyboardArrowDown", {});
athens.views.blocks.block_container_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"2em",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.125rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.show-tree-indicator:before","&.show-tree-indicator:before",-1154852006),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"left","left",-399115937),"calc(1.25em + 1px)",new cljs.core.Keyword(null,"top","top",-1856271961),"2em",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(50%)",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0 0.25rem 0.5rem -0.25rem",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190))], null)], null),"0.75px","opacity 0.075s ease","0.75px","''",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),(-1),(0),(0),"absolute","0.25rem","none",(0)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.is-selected:after","&.is-selected:after",1596277889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".block-body",".block-body",-1609622921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.5rem",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.1s ease",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.block-edit-toggle","button.block-edit-toggle",-1106137104),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"appearance","appearance",-216383432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"left","left",-399115937)],[(0),(0),"100%","none","text",(1),(0),"block","none","absolute",(0),(0)])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.is-linked-ref","&.is-linked-ref",61763869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-plus-2","background-plus-2",-2111504159))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".block-container",".block-container",1999389124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"2rem"], null)], null)], null)], null);
stylefy.core.class$("block-container",athens.views.blocks.block_container_style);
athens.views.blocks.block_disclosure_toggle_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622)],["center",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":is(button)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null),"all 0.05s ease","1em","none","0",(2),"none","0","center",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.closed","&.closed",693427658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-90deg)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:empty","&:empty",1539258694),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null)], null),"flex","relative","none","2em"]);
athens.views.blocks.bullet_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"height","height",1025178622)],[athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"after","after",594996914),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["0 0 0 0.125rem transparent","translate(-50%, -50%)","all 0.05s ease","''","0.3125em","currentColor","inline-flex","100px","0.3125em","50% 0 0 50%"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null)], null),"all 0.05s ease","0.75em","pointer","0",(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.closed-with-children","&.closed-with-children",-466895087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60426 = (garden.selectors.after.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.after.cljs$core$IFn$_invoke$arity$0() : garden.selectors.after.call(null));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__60426) : garden.selectors._AMPERSAND_.call(null,G__60426));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),["0 0 0 0.125rem ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936))].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.closed-with-children","&.closed-with-children",-466895087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60427 = (garden.selectors.before.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.before.cljs$core$IFn$_invoke$arity$0() : garden.selectors.before.call(null));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__60427) : garden.selectors._AMPERSAND_.call(null,G__60427));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover:after","&:hover:after",975745128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%, -50%) scale(1.3)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.dragging","&.dragging",-781884845),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"grabbing",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936))], null)], null)], null),"relative","0.25em","2em"]);
stylefy.core.class$("bullet",athens.views.blocks.bullet_style);
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("drop-area-appear",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null)], 0));
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("drop-area-color-pulse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], 0));
athens.views.blocks.drop_area_indicator = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"height","height",1025178622)],[athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),"100%",(3),(0),"left",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"top","top",-1856271961),"-0.5px",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-0.5px",new cljs.core.Keyword(null,"left","left",-399115937),"2em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100px",new cljs.core.Keyword(null,"background","background",-863952629),"currentColor"], null)], null)], null),"block","relative","none","-1px","1px"]);
athens.views.blocks.block_content_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"word-break","word-break",-407281356),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120)],["stretch","visible","1",(2),"break-word","stretch",new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60428 = (garden.selectors.not.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.not.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493)) : garden.selectors.not.call(null,new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493)));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__60428) : garden.selectors._AMPERSAND_.call(null,G__60428));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit",["-0.25rem 0 0 0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179))].join(''),"translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","hidden",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179)),"text","none","none","0","0","main",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","0.25rem","inherit","0"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"main"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">span",">span",-829299283),new cljs.core.Keyword(null,">a",">a",-1602186974),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".media-16-9",".media-16-9",330250969),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),new cljs.core.Keyword(null,"height","height",1025178622)],["0.25rem","all 0.2s ease","0.25rem","calc(100% - 0.25rem)",(1),"right center","relative",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((9) / (16)) * (100))),"%"].join(''),(0)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inset 0 0 0 0.125rem",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179))], null)], null),(0),(0),"100%","default",(0),"absolute",(0),"0.25rem","100%",(0)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"calc(100% - 0.25rem)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),garden.selectors.attr_EQ_(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"appearance","appearance",-216383432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["inset 0 0 0 1px","scale(1)",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0.25rem","all 0.05s ease","0.13em","1rem","pointer","none","relative","0.25rem","1rem"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["solid","rotate(45deg) translate(-40%, -50%)","45%","''","30%","0 1.5px 1.5px 0",(0),"absolute","60%","20%"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:checked","&:checked",-93007205),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-color","background-color",570434026))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:active","&:active",-1687810105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.9)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark.contents.highlight","mark.contents.highlight",1237777620),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffeb7a"], null)], null)], null),"grid","relative","'main'"]);
stylefy.core.class$("block-content",athens.views.blocks.block_content_style);
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("tooltip-appear",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1)"], null)], null)], 0));
athens.views.blocks.tooltip_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["1.75rem","9rem",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"64","64",977820579).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),", 0 0 0 1px ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null),"tooltip-appear .2s ease",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),"background .1s ease","2rem",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-plus-1","background-plus-1",-1065812304)),new cljs.core.Keyword(null,"zindex-dropdown","zindex-dropdown",116119971).cljs$core$IFn$_invoke$arity$1(athens.style.ZINDICES),"0.25rem","0.5rem 0.75rem","0.5rem 1.5rem",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"table-row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.1em",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"all"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],["-1rem","-0.75rem","''",(-1),"-1rem","block","absolute","inherit","-1rem"])], null)], null),"table","absolute","0.25rem","column","0.5rem"]);
athens.views.blocks.dragging_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.25"], null);
stylefy.core.class$("dragging",athens.views.blocks.dragging_style);
athens.views.blocks.toggle = (function athens$views$blocks$toggle(id,open){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.not(open)], null)], null)], null));
});
athens.views.blocks.toggle_el = (function athens$views$blocks$toggle_el(p__60429,state,linked_ref){
var map__60430 = p__60429;
var map__60430__$1 = (((((!((map__60430 == null))))?(((((map__60430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60430):map__60430);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60430__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60430__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60430__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
if(cljs.core.seq(children)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.blocks.block_disclosure_toggle_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__4126__auto__ = ((linked_ref === true)?new cljs.core.Keyword("linked-ref","open","linked-ref/open",-1495774079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)):false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(linked_ref === false){
return open;
} else {
return false;
}
}
})())?"open":"closed"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(linked_ref === true){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("linked-ref","open","linked-ref/open",-1495774079),cljs.core.not);
} else {
return athens.views.blocks.toggle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),open);
}
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$KeyboardArrowDown.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.block_disclosure_toggle_style)], null);
}
});
athens.views.blocks.tooltip_el = (function athens$views$blocks$tooltip_el(block,state){
var map__60432 = block;
var map__60432__$1 = (((((!((map__60432 == null))))?(((((map__60432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60432):map__60432);
var dbid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60432__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60432__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60432__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60432__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60432__$1,new cljs.core.Keyword("block","refs","block/refs",-1214495349));
var map__60433 = cljs.core.deref(state);
var map__60433__$1 = (((((!((map__60433 == null))))?(((((map__60433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60433):map__60433);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60433__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60433__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
if(cljs.core.truth_((function (){var and__4115__auto__ = tooltip;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(dragging)){
return athens.util.re_frame_10x_open_QMARK_();
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.blocks.tooltip_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"tooltip",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),false);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"db/id"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),dbid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"uid"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),uid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"order"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),order], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"open"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.str.cljs$core$IFn$_invoke$arity$1(open)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"refs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.str.cljs$core$IFn$_invoke$arity$1(refs)], null)], null)], null);
} else {
return null;
}
});
athens.views.blocks.inline_item_click = (function athens$views$blocks$inline_item_click(state,uid,expansion){
var id = ["#editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('');
var target = document.querySelector(id);
var G__60436 = new cljs.core.Keyword("search","type","search/type",-1745335484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var G__60436__$1 = (((G__60436 instanceof cljs.core.Keyword))?G__60436.fqn:null);
switch (G__60436__$1) {
case "hashtag":
return athens.keybindings.auto_complete_hashtag.cljs$core$IFn$_invoke$arity$3(state,target,expansion);

break;
default:
return athens.keybindings.auto_complete_inline.cljs$core$IFn$_invoke$arity$3(state,target,expansion);

}
});
athens.views.blocks.inline_search_el = (function athens$views$blocks$inline_search_el(_block,state){
var ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var handle_click_outside = (function (e){
var map__60439 = cljs.core.deref(state);
var map__60439__$1 = (((((!((map__60439 == null))))?(((((map__60439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60439):map__60439);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60439__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899))))) && (cljs.core.not(cljs.core.deref(ref).contains(e.target))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),false);
} else {
return null;
}
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"inline-search",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_this){
return goog.events.listen(document,"mousedown",handle_click_outside);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_this){
return goog.events.unlisten(document,"mousedown",handle_click_outside);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (block,state__$1){
var map__60441 = cljs.core.deref(state__$1);
var map__60441__$1 = (((((!((map__60441 == null))))?(((((map__60441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60441):map__60441);
var caret_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword(null,"caret-position","caret-position",1352592340));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var map__60442 = caret_position;
var map__60442__$1 = (((((!((map__60442 == null))))?(((((map__60442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60442):map__60442);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60442__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60442__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
if(cljs.core.truth_(cljs.core.some((function (p1__60437_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__60437_SHARP_,type);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.dropdown.dropdown_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__60438_SHARP_){
return cljs.core.reset_BANG_(ref,p1__60438_SHARP_);
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return e.preventDefault();
})], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"20rem",new cljs.core.Keyword(null,"top","top",-1856271961),((24) + top),new cljs.core.Keyword(null,"left","left",-399115937),((24) + left)], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#dropdown-menu","div#dropdown-menu",-1653601360),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),((((clojure.string.blank_QMARK_(query)) || (cljs.core.empty_QMARK_(results))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(athens.style.OPACITIES.cljs$core$IFn$_invoke$arity$1 ? athens.style.OPACITIES.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)) : athens.style.OPACITIES.call(null,new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)))], null)),["Search for a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(type))].join('')], null):cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$blocks$inline_search_el_$_iter__60445(s__60446){
return (new cljs.core.LazySeq(null,(function (){
var s__60446__$1 = s__60446;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60446__$1);
if(temp__5735__auto__){
var s__60446__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60446__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60446__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60448 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60447 = (0);
while(true){
if((i__60447 < size__4528__auto__)){
var vec__60449 = cljs.core._nth(c__4527__auto__,i__60447);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60449,(0),null);
var map__60452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60449,(1),null);
var map__60452__$1 = (((((!((map__60452 == null))))?(((((map__60452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60452):map__60452);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60452__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60452__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60452__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60448,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),["inline-search-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),["dropdown-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,i),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60447,vec__60449,i,map__60452,map__60452__$1,title,string,uid,c__4527__auto__,size__4528__auto__,b__60448,s__60446__$2,temp__5735__auto__,map__60441,map__60441__$1,caret_position,query,results,index,type,map__60442,map__60442__$1,left,top,ref,handle_click_outside){
return (function (_){
return athens.views.blocks.inline_item_click(state__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block),(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uid;
}
})());
});})(i__60447,vec__60449,i,map__60452,map__60452__$1,title,string,uid,c__4527__auto__,size__4528__auto__,b__60448,s__60446__$2,temp__5735__auto__,map__60441,map__60441__$1,caret_position,query,results,index,type,map__60442,map__60442__$1,left,top,ref,handle_click_outside))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__60544 = (i__60447 + (1));
i__60447 = G__60544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60448),athens$views$blocks$inline_search_el_$_iter__60445(cljs.core.chunk_rest(s__60446__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60448),null);
}
} else {
var vec__60454 = cljs.core.first(s__60446__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60454,(0),null);
var map__60457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60454,(1),null);
var map__60457__$1 = (((((!((map__60457 == null))))?(((((map__60457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60457):map__60457);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60457__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60457__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60457__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),["inline-search-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),["dropdown-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,i),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__60454,i,map__60457,map__60457__$1,title,string,uid,s__60446__$2,temp__5735__auto__,map__60441,map__60441__$1,caret_position,query,results,index,type,map__60442,map__60442__$1,left,top,ref,handle_click_outside){
return (function (_){
return athens.views.blocks.inline_item_click(state__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block),(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uid;
}
})());
});})(vec__60454,i,map__60457,map__60457__$1,title,string,uid,s__60446__$2,temp__5735__auto__,map__60441,map__60441__$1,caret_position,query,results,index,type,map__60442,map__60442__$1,left,top,ref,handle_click_outside))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$blocks$inline_search_el_$_iter__60445(cljs.core.rest(s__60446__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,results));
})()))], null)], null);
} else {
return null;
}
})], null));
});
athens.views.blocks.slash_item_click = (function athens$views$blocks$slash_item_click(state,block,item){
var id = ["#editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('');
var target = document.querySelector(id);
return athens.keybindings.auto_complete_slash.cljs$core$IFn$_invoke$arity$3(state,target,item);
});
athens.views.blocks.slash_menu_el = (function athens$views$blocks$slash_menu_el(_block,state){
var ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var handle_click_outside = (function (e){
var map__60460 = cljs.core.deref(state);
var map__60460__$1 = (((((!((map__60460 == null))))?(((((map__60460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60460):map__60460);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60460__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))) && (cljs.core.not(cljs.core.deref(ref).contains(e.target))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),false);
} else {
return null;
}
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"slash-menu",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_this){
return goog.events.listen(document,"mousedown",handle_click_outside);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_this){
return goog.events.unlisten(document,"mousedown",handle_click_outside);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (block,state__$1){
var map__60462 = cljs.core.deref(state__$1);
var map__60462__$1 = (((((!((map__60462 == null))))?(((((map__60462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60462):map__60462);
var caret_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword(null,"caret-position","caret-position",1352592340));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var map__60463 = caret_position;
var map__60463__$1 = (((((!((map__60463 == null))))?(((((map__60463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60463):map__60463);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.dropdown.dropdown_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__60459_SHARP_){
return cljs.core.reset_BANG_(ref,p1__60459_SHARP_);
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return e.preventDefault();
})], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(left + (24)),new cljs.core.Keyword(null,"top","top",-1856271961),(top + (24))], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#dropdown-menu","div#dropdown-menu",-1653601360),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"8em"], null)], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$blocks$slash_menu_el_$_iter__60466(s__60467){
return (new cljs.core.LazySeq(null,(function (){
var s__60467__$1 = s__60467;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60467__$1);
if(temp__5735__auto__){
var s__60467__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60467__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60467__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60469 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60468 = (0);
while(true){
if((i__60468 < size__4528__auto__)){
var vec__60470 = cljs.core._nth(c__4527__auto__,i__60468);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60470,(0),null);
var vec__60473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60470,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60473,(0),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60473,(1),null);
var _expansion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60473,(2),null);
var kbd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60473,(3),null);
var _pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60473,(4),null);
var item = vec__60473;
cljs.core.chunk_append(b__60469,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),text,new cljs.core.Keyword(null,"id","id",-1388402092),["dropdown-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60468,vec__60470,i,vec__60473,text,icon,_expansion,kbd,_pos,item,c__4527__auto__,size__4528__auto__,b__60469,s__60467__$2,temp__5735__auto__,map__60462,map__60462__$1,caret_position,index,results,type,map__60463,map__60463__$1,left,top,ref,handle_click_outside){
return (function (_){
return athens.views.blocks.slash_item_click(state__$1,block,item);
});})(i__60468,vec__60470,i,vec__60473,text,icon,_expansion,kbd,_pos,item,c__4527__auto__,size__4528__auto__,b__60469,s__60467__$2,temp__5735__auto__,map__60462,map__60462__$1,caret_position,index,results,type,map__60463,map__60463__$1,left,top,ref,handle_click_outside))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(icon)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text], null),(cljs.core.truth_(kbd)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),kbd], null):null)], null)], null));

var G__60558 = (i__60468 + (1));
i__60468 = G__60558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60469),athens$views$blocks$slash_menu_el_$_iter__60466(cljs.core.chunk_rest(s__60467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60469),null);
}
} else {
var vec__60476 = cljs.core.first(s__60467__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60476,(0),null);
var vec__60479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60476,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60479,(0),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60479,(1),null);
var _expansion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60479,(2),null);
var kbd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60479,(3),null);
var _pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60479,(4),null);
var item = vec__60479;
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),text,new cljs.core.Keyword(null,"id","id",-1388402092),["dropdown-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__60476,i,vec__60479,text,icon,_expansion,kbd,_pos,item,s__60467__$2,temp__5735__auto__,map__60462,map__60462__$1,caret_position,index,results,type,map__60463,map__60463__$1,left,top,ref,handle_click_outside){
return (function (_){
return athens.views.blocks.slash_item_click(state__$1,block,item);
});})(vec__60476,i,vec__60479,text,icon,_expansion,kbd,_pos,item,s__60467__$2,temp__5735__auto__,map__60462,map__60462__$1,caret_position,index,results,type,map__60463,map__60463__$1,left,top,ref,handle_click_outside))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(icon)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text], null),(cljs.core.truth_(kbd)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),kbd], null):null)], null)], null),athens$views$blocks$slash_menu_el_$_iter__60466(cljs.core.rest(s__60467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,results));
})())], null)], null);
} else {
return null;
}
})], null));
});
/**
 * Clipboard data can only be accessed if user triggers JavaScript paste event.
 *   Uses previous keydown event to determine if shift was held, since the paste event has no knowledge of shift key.
 * 
 *   Image Cases:
 *   - items N=1, image/png
 *   - items N=2, text/html and image/png
 *   For both of these, just write image to filesystem. Roam behavior is to copy the <img> src and alt of the copied picture.
 *   Roam's approach is useful to preserve the original source url and description, but is unsafe in case the link breaks.
 *   Writing to filesystem (or to Firebase a la Roam) is useful, but has storage costs.
 *   Writing to filesystem each time for now until get feedback otherwise that user doesn't want to save the image.
 *   Can eventually become a setting.
 * 
 *   Plaintext cases:
 *   - User pastes and last keydown has shift -> default
 *   - User pastes and clipboard data doesn't have new lines -> default
 *   - User pastes without shift and clipboard data has new line characters -> PREVENT default and convert to outliner blocks
 */
athens.views.blocks.textarea_paste = (function athens$views$blocks$textarea_paste(e,uid,state){
var data = e.clipboardData;
var text_data = data.getData("text");
var line_breaks = cljs.core.re_find(/\r?\n/,text_data);
var no_shift = cljs.core.not(new cljs.core.Keyword(null,"shift","shift",997140064).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last-keydown","last-keydown",348696018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
var items = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.clipboardData.items);
var map__60482 = athens.keybindings.destruct_target(e.target);
var map__60482__$1 = (((((!((map__60482 == null))))?(((((map__60482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60482):map__60482);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60482__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60482__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var img_regex = /^image\/(p?jpeg|gif|png)$/i;
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
var datatype = item.type;
return cljs.core.re_find(img_regex,datatype);
}),items))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
var datatype = item.type;
if(cljs.core.truth_(cljs.core.re_find(img_regex,datatype))){
if(athens.util.electron_QMARK_()){
var new_str = athens.electron.save_image.cljs$core$IFn$_invoke$arity$4(head,tail,item,"png");
return setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","local","string/local",-578009907),new_str);
}),(50));
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/text\/html/,datatype))){
return item.getAsString((function (_){
return null;
}));
} else {
return null;
}
}
}),items);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = line_breaks;
if(cljs.core.truth_(and__4115__auto__)){
return no_shift;
} else {
return and__4115__auto__;
}
})())){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paste","paste",1975741548),uid,text_data], null));
} else {
return null;
}

}
});
athens.views.blocks.textarea_change = (function athens$views$blocks$textarea_change(e,_uid,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("string","local","string/local",-578009907),e.target.value);
});
/**
 * Used by both shift-click and click-drag for multi-block-selection.
 *   Given a mouse event, a source block, and a target block, highlight blocks.
 *   Find all blocks on the page using the DOM.
 *   Determine if direction is up or down.
 *   Algorithm: call select-up or select-down until start and end of vector are source and target.
 * 
 *   Bug: there isn't an algorithmic path for all pairs of source and target blocks, because sometimes the parent is
 *   highlighted, meaning a child block might not be selected itself. Rather, it inherits selection from parent.
 *   
 *   e.g.: 1 and 3 as source and target, or vice versa.
 *   • 1
 *   • 2
 * • 3
 *   Because of this bug, add additional exit cases to prevent stack overflow.
 */
athens.views.blocks.find_selected_items = (function athens$views$blocks$find_selected_items(e,source_uid,target_uid){
var target = e.target;
var page = (function (){var or__4126__auto__ = target.closest(".node-page");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return target.closest(".block-page");
}
})();
var blocks = cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(page.querySelectorAll(".block-container")));
var uids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.util.get_dataset_uid,blocks);
var start_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,uid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,source_uid)){
return i;
} else {
return null;
}
}),uids));
var end_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,uid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,target_uid)){
return i;
} else {
return null;
}
}),uids));
if(cljs.core.truth_((function (){var and__4115__auto__ = start_idx;
if(cljs.core.truth_(and__4115__auto__)){
return end_idx;
} else {
return and__4115__auto__;
}
})())){
var up_QMARK_ = (start_idx > end_idx);
var delta = Math.abs((start_idx - end_idx));
var select_fn = ((up_QMARK_)?athens.events.select_up:athens.events.select_down);
var start_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uids,start_idx);
var end_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uids,end_idx);
var new_items = (function (){var new_items = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_uid], null);
var prev_items = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_items,new_items)){
return new_items;
} else {
if((cljs.core.count(new_items) > delta)){
return new_items;
} else {
if((new_items == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new_items),start_uid)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(new_items),end_uid)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(new_items),start_uid)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new_items),end_uid)))))){
return new_items;
} else {
var G__60570 = (select_fn.cljs$core$IFn$_invoke$arity$1 ? select_fn.cljs$core$IFn$_invoke$arity$1(new_items) : select_fn.call(null,new_items));
var G__60571 = new_items;
new_items = G__60570;
prev_items = G__60571;
continue;

}
}
}
}
break;
}
})();
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-items","selected/add-items",142460854),new_items], null));
} else {
return null;
}
});
/**
 * If shift key is held when user clicks across multiple blocks, select the blocks.
 */
athens.views.blocks.textarea_click = (function athens$views$blocks$textarea_click(e,target_uid,_state){
var vec__60484 = athens.db.uid_and_embed_id(target_uid);
var target_uid__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60484,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60484,(1),null);
var source_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
if(cljs.core.truth_((function (){var and__4115__auto__ = source_uid;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = target_uid__$1;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_uid,target_uid__$1)){
return e.shiftKey;
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return athens.views.blocks.find_selected_items(e,source_uid,target_uid__$1);
} else {
return null;
}
});
/**
 * Detach global mouseup listener (self).
 */
athens.views.blocks.global_mouseup = (function athens$views$blocks$global_mouseup(_){
goog.events.unlisten(document,goog.events.EventType.MOUSEUP,athens.views.blocks.global_mouseup);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mouse-down","unset","mouse-down/unset",-1566717652)], null));
});
/**
 * Attach global mouseup listener. Listener can't be local because user might let go of mousedown off of a block.
 *   See https://javascript.info/mouse-events-basics#events-order
 */
athens.views.blocks.textarea_mouse_down = (function athens$views$blocks$textarea_mouse_down(e,_uid,_){
e.stopPropagation();

if(e.shiftKey === false){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","target","editing/target",-1618170463),e.target], null));

var mouse_down = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567)], null)));
if(mouse_down === false){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mouse-down","set","mouse-down/set",685623064)], null));

return goog.events.listen(document,goog.events.EventType.MOUSEUP,athens.views.blocks.global_mouseup);
} else {
return null;
}
} else {
return null;
}
});
/**
 * When mouse-down, user is selecting multiple blocks with click+drag.
 *   Use same algorithm as shift-enter, only updating the source and target.
 */
athens.views.blocks.textarea_mouse_enter = (function athens$views$blocks$textarea_mouse_enter(e,target_uid,_){
var source_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var mouse_down = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567)], null)));
if(cljs.core.truth_(mouse_down)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null));

return athens.views.blocks.find_selected_items(e,source_uid,target_uid);
} else {
return null;
}
});
/**
 * Actual string contents. Two elements, one for reading and one for writing.
 *   The CSS class is-editing is used for many things, such as block selection.
 *   Opacity is 0 when block is selected, so that the block is entirely blue, rather than darkened like normal editing.
 *   is-editing can be used for shift up/down, so it is used in both editing and selection.
 */
athens.views.blocks.block_content_el = (function athens$views$blocks$block_content_el(_,___$1){
return (function (block,state){
var map__60488 = block;
var map__60488__$1 = (((((!((map__60488 == null))))?(((((map__60488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60488):map__60488);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60488__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var original_uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60488__$1,new cljs.core.Keyword("block","original-uid","block/original-uid",591552700));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60488__$1,new cljs.core.Keyword("block","header","block/header",28765025));
var map__60489 = cljs.core.deref(state);
var map__60489__$1 = (((((!((map__60489 == null))))?(((((map__60489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60489):map__60489);
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60489__$1,new cljs.core.Keyword("string","local","string/local",-578009907));
var is_editing = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","is-editing","editing/is-editing",-1509220484),uid], null)));
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
var font_size = (function (){var G__60492 = header;
switch (G__60492) {
case (1):
return "2.1em";

break;
case (2):
return "1.7em";

break;
case (3):
return "1.3em";

break;
default:
return "1em";

}
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-content",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),font_size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-paste","on-paste",-50859856),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[(function (e){
return athens.views.blocks.textarea_mouse_enter(e,uid,state);
}),new cljs.core.Keyword("string","local","string/local",-578009907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(function (___$2){
return athens.db.transact_state_for_uid((function (){var or__4126__auto__ = original_uid;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uid;
}
})(),state);
}),(function (e){
return athens.views.blocks.textarea_mouse_down(e,uid,state);
}),(function (e){
return athens.views.blocks.textarea_click(e,uid,state);
}),(function (e){
return athens.views.blocks.textarea_paste(e,uid,state);
}),["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textarea",(cljs.core.truth_(((cljs.core.empty_QMARK_(selected_items))?is_editing:false))?"is-editing":null)], null),(function (e){
return athens.views.blocks.textarea_change(e,uid,state);
}),(function (e){
return athens.keybindings.textarea_key_down(e,uid,state);
})])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.parse_renderer.parse_and_render,local,uid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.blocks.drop_area_indicator,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"drag-target","drag-target",2017061919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null):null)], 0)))], null)], null);
});
});
/**
 * Hide tooltip.
 */
athens.views.blocks.bullet_mouse_out = (function athens$views$blocks$bullet_mouse_out(e,_uid,state){
var related = e.relatedTarget;
if(cljs.core.truth_((function (){var and__4115__auto__ = related;
if(cljs.core.truth_(and__4115__auto__)){
return goog.dom.classlist.contains(related,"tooltip");
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),false);
}
});
/**
 * Show tooltip.
 */
athens.views.blocks.bullet_mouse_over = (function athens$views$blocks$bullet_mouse_over(_e,_uid,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true);
});
/**
 * Handle right click. If no blocks are selected, just give option for copying current block's uid.
 */
athens.views.blocks.bullet_context_menu = (function athens$views$blocks$bullet_context_menu(e,_uid,state){
e.preventDefault();

var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("context-menu","x","context-menu/x",1022133854),rect.left,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","y","context-menu/y",1468921341),rect.bottom,new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002),true], 0));
});
/**
 * Begin drag event: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API#Define_the_drags_data
 */
athens.views.blocks.bullet_drag_start = (function athens$views$blocks$bullet_drag_start(e,uid,state){
var effect_allowed_60578 = (cljs.core.truth_(e.shiftKey)?"link":"move");
(e.dataTransfer.effectAllowed = effect_allowed_60578);

e.dataTransfer.setData("text/plain",cljs.core.first(athens.db.uid_and_embed_id(uid)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
});
/**
 * End drag event.
 */
athens.views.blocks.bullet_drag_end = (function athens$views$blocks$bullet_drag_end(_e,_uid,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);
});
athens.views.blocks.bullet_el = (function athens$views$blocks$bullet_el(_,___$1,___$2){
return (function (block,state,linked_ref){
var map__60493 = block;
var map__60493__$1 = (((((!((map__60493 == null))))?(((((map__60493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60493):map__60493);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60493__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60493__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60493__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bullet",((((cljs.core.seq(children)) && (((((linked_ref === true) && (cljs.core.not(new cljs.core.Keyword("linked-ref","open","linked-ref/open",-1495774079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))))) || (((linked_ref === false) && (cljs.core.not(open))))))))?"closed-with-children":null)], null),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(uid,e);
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
return athens.views.blocks.bullet_context_menu(e,uid,state);
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (e){
return athens.views.blocks.bullet_mouse_over(e,uid,state);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (e){
return athens.views.blocks.bullet_mouse_out(e,uid,state);
}),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (e){
return athens.views.blocks.bullet_drag_start(e,uid,state);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (e){
return athens.views.blocks.bullet_drag_end(e,uid,state);
})], null)], null);
});
});
athens.views.blocks.copy_refs_mouse_down = (function athens$views$blocks$copy_refs_mouse_down(_,uid,state){
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
var data = ((cljs.core.empty_QMARK_(selected_items))?["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid),"))"].join(''):clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (uid__$1){
return ["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1),"))\n"].join('');
}),selected_items)));
navigator.clipboard.writeText(data);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002),false);
});
/**
 * If copying only a single block, dissoc children to not copy subtree.
 */
athens.views.blocks.handle_copy_unformatted = (function athens$views$blocks$handle_copy_unformatted(e,uid,state){
var uids_60581 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.empty_QMARK_(uids_60581)){
var block_60582 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(athens.db.get_block_document(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)),new cljs.core.Keyword("block","children","block/children",-1040716209));
var data_60583 = athens.listeners.blocks_to_clipboard_data.cljs$core$IFn$_invoke$arity$3((0),block_60582,true);
navigator.clipboard.writeText(data_60583);
} else {
var data_60585 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60496_SHARP_){
return athens.listeners.blocks_to_clipboard_data.cljs$core$IFn$_invoke$arity$3((0),p1__60496_SHARP_,true);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60495_SHARP_){
return athens.db.get_block_document(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__60495_SHARP_], null));
}),uids_60581)));
navigator.clipboard.writeText(data_60585);
}

e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002),false);
});
/**
 * Only option in context menu right now is copy block ref(s).
 */
athens.views.blocks.context_menu_el = (function athens$views$blocks$context_menu_el(_block,state){
var ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var handle_click_outside = (function (e){
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.deref(ref).contains(e.target));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002),false);
} else {
return null;
}
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"context-menu",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_this){
return goog.events.listen(document,"mousedown",handle_click_outside);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_this){
return goog.events.unlisten(document,"mousedown",handle_click_outside);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (block,state__$1){
var map__60498 = block;
var map__60498__$1 = (((((!((map__60498 == null))))?(((((map__60498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60498):map__60498);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60498__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__60499 = cljs.core.deref(state__$1);
var map__60499__$1 = (((((!((map__60499 == null))))?(((((map__60499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60499):map__60499);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60499__$1,new cljs.core.Keyword("context-menu","x","context-menu/x",1022133854));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60499__$1,new cljs.core.Keyword("context-menu","y","context-menu/y",1468921341));
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60499__$1,new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002));
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.truth_(show)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.dropdown.dropdown_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__60497_SHARP_){
return cljs.core.reset_BANG_(ref,p1__60497_SHARP_);
})], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return athens.views.blocks.copy_refs_mouse_down(e,uid,state__$1);
})], null),((cljs.core.empty_QMARK_(selected_items))?"Copy block ref":"Copy block refs")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return athens.views.blocks.handle_copy_unformatted(e,uid,state__$1);
})], null),"Copy unformatted"], null)], null)], null);
} else {
return null;
}
})], null));
});
athens.views.blocks.block_refs_count_el = (function athens$views$blocks$block_refs_count_el(count,uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1em",new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"zindex-dropdown","zindex-dropdown",116119971).cljs$core$IFn$_invoke$arity$1(athens.style.ZINDICES),new cljs.core.Keyword(null,"visibility","visibility",1338380893),(((count > (0)))?null:"hidden")], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","open-item","right-sidebar/open-item",-1234515614),uid], null));
})], null),count], null)], null);
});
/**
 * If block or ancestor has CSS dragging class, do not show drop indicator; do not allow block to drop onto itself.
 *   If above midpoint, show drop indicator above block.
 *   If no children and over X pixels from the left, show child drop indicator.
 *   If below midpoint, show drop indicator below.
 */
athens.views.blocks.block_drag_over = (function athens$views$blocks$block_drag_over(e,block,state){
e.preventDefault();

e.stopPropagation();

var map__60502 = block;
var map__60502__$1 = (((((!((map__60502 == null))))?(((((map__60502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60502):map__60502);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60502__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60502__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60502__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var closest_container = e.target.closest(".block-container");
var map__60503 = athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$2(e,closest_container);
var map__60503__$1 = (((((!((map__60503 == null))))?(((((map__60503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60503):map__60503);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var middle_y = athens.util.vertical_center(closest_container);
var dragging_ancestor = e.target.closest(".dragging");
var dragging_QMARK_ = dragging_ancestor;
var is_selected_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","is-selected","selected/is-selected",689082595),uid], null)));
var target = (cljs.core.truth_(dragging_QMARK_)?null:(cljs.core.truth_(is_selected_QMARK_)?null:(((((y < (0))) || ((y < middle_y))))?new cljs.core.Keyword(null,"above","above",-1286866470):((((cljs.core.not(open)) || (((cljs.core.empty_QMARK_(children)) && (((50) < x))))))?new cljs.core.Keyword(null,"child","child",623967545):(((middle_y < y))?new cljs.core.Keyword(null,"below","below",-926774883):null)))));
if(cljs.core.truth_(target)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919),target);
} else {
return null;
}
});
/**
 * When a drop occurs: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API#Define_a_drop_zone
 */
athens.views.blocks.block_drop = (function athens$views$blocks$block_drop(e,block,state){
e.stopPropagation();

var map__60506 = block;
var map__60506__$1 = (((((!((map__60506 == null))))?(((((map__60506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60506):map__60506);
var target_uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60506__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var vec__60507 = athens.db.uid_and_embed_id(target_uid);
var target_uid__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60507,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60507,(1),null);
var map__60510 = cljs.core.deref(state);
var map__60510__$1 = (((((!((map__60510 == null))))?(((((map__60510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60510):map__60510);
var drag_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60510__$1,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919));
var source_uid = e.dataTransfer.getData("text/plain");
var effect_allowed = e.dataTransfer.effectAllowed;
var items = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.dataTransfer.items);
var item = cljs.core.first(items);
var datatype = item.type;
var img_regex = /^image\/(p?jpeg|gif|png)$/i;
var valid_text_drop = (((!((drag_target == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_uid,target_uid__$1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(effect_allowed,"link")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(effect_allowed,"move")))));
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
if(cljs.core.truth_(cljs.core.re_find(img_regex,datatype))){
if(athens.util.electron_QMARK_()){
athens.electron.dnd_image(target_uid__$1,drag_target,item,cljs.core.second(cljs.core.re_find(img_regex,datatype)));
} else {
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/text\/plain/,datatype))){
if(valid_text_drop){
if(cljs.core.empty_QMARK_(selected_items)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop","drop",364481611),source_uid,target_uid__$1,drag_target,effect_allowed], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop-multi","drop-multi",-339580846),selected_items,target_uid__$1,drag_target], null));
}
} else {
}
} else {
}
}

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mouse-down","unset","mouse-down/unset",-1566717652)], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919),null);
});
/**
 * When mouse leaves block, remove any drop area indicator.
 *   Ignore if target-uid and related-uid are the same — user went over a child component and we don't want flicker.
 */
athens.views.blocks.block_drag_leave = (function athens$views$blocks$block_drag_leave(e,block,state){
e.preventDefault();

e.stopPropagation();

var map__60513 = block;
var map__60513__$1 = (((((!((map__60513 == null))))?(((((map__60513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60513):map__60513);
var target_uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60513__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var related_uid = athens.util.get_dataset_uid(e.relatedTarget);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(related_uid,target_uid)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919),null);
}
});
/**
 * Two checks dec to make sure block is open or not: children exist and :block/open bool
 */
athens.views.blocks.block_el = (function athens$views$blocks$block_el(var_args){
var G__60517 = arguments.length;
switch (G__60517) {
case 1:
return athens.views.blocks.block_el.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.views.blocks.block_el.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return athens.views.blocks.block_el.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.views.blocks.block_el.cljs$core$IFn$_invoke$arity$1 = (function (block){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"linked-ref","linked-ref",-925333945),false], null),cljs.core.PersistentArrayMap.EMPTY], null);
}));

(athens.views.blocks.block_el.cljs$core$IFn$_invoke$arity$2 = (function (block,linked_ref_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block,linked_ref_data,cljs.core.PersistentArrayMap.EMPTY], null);
}));

(athens.views.blocks.block_el.cljs$core$IFn$_invoke$arity$3 = (function (_block,linked_ref_data,_opts){
var map__60518 = linked_ref_data;
var map__60518__$1 = (((((!((map__60518 == null))))?(((((map__60518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60518):map__60518);
var linked_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60518__$1,new cljs.core.Keyword(null,"linked-ref","linked-ref",-925333945));
var initial_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60518__$1,new cljs.core.Keyword(null,"initial-open","initial-open",1546246992));
var linked_ref_uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60518__$1,new cljs.core.Keyword(null,"linked-ref-uid","linked-ref-uid",-1584425507));
var parent_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60518__$1,new cljs.core.Keyword(null,"parent-uids","parent-uids",605223671));
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("linked-ref","open","linked-ref/open",-1495774079),new cljs.core.Keyword("string","previous","string/previous",1734905219),new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword("string","local","string/local",-578009907),new cljs.core.Keyword(null,"dragging","dragging",1185097613),new cljs.core.Keyword("search","index","search/index",1990835117),new cljs.core.Keyword(null,"last-keydown","last-keydown",348696018),new cljs.core.Keyword("search","query","search/query",1830322034),new cljs.core.Keyword(null,"caret-position","caret-position",1352592340),new cljs.core.Keyword("search","results","search/results",107824727),new cljs.core.Keyword("context-menu","y","context-menu/y",1468921341),new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002),new cljs.core.Keyword("context-menu","x","context-menu/x",1022133854),new cljs.core.Keyword(null,"drag-target","drag-target",2017061919)],[(function (){var or__4126__auto__ = linked_ref === false;
if(or__4126__auto__){
return or__4126__auto__;
} else {
return initial_open;
}
})(),null,null,null,false,null,null,null,null,null,null,false,null,null]));
return (function (block,linked_ref_data__$1,opts){
var map__60520 = block;
var map__60520__$1 = (((((!((map__60520 == null))))?(((((map__60520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60520):map__60520);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60520__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60520__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60520__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60520__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var _refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60520__$1,new cljs.core.Keyword("block","_refs","block/_refs",830218531));
var uid_sanitized_block = com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__47270__auto__ = athens.views.blocks.pathcache60523;
var info__47270__auto____$1 = (((info__47270__auto__ == null))?(function (){var info60524 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(athens.util.specter_recursive_path,new cljs.core.Var(function(){return athens.util.specter_recursive_path;},new cljs.core.Symbol("athens.util","specter-recursive-path","athens.util/specter-recursive-path",1130829370,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"athens.util","athens.util",-1545422462,null),new cljs.core.Symbol(null,"specter-recursive-path","specter-recursive-path",1981312529,null),"athens/util.cljs",(29),(1),(226),(226),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null)], null)),"Navigates across maps and lists to find the sub that\n   satisfies the function",(cljs.core.truth_(athens.util.specter_recursive_path)?athens.util.specter_recursive_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"specter-recursive-path","specter-recursive-path",1981312529,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__60515_SHARP_){
return cljs.core.contains_QMARK_(p1__60515_SHARP_,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60515#","p1__60515#",528443684,null)], null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"p1__60515#","p1__60515#",528443684,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167))))], null),cljs.core.list(new cljs.core.Symbol(null,"specter-recursive-path","specter-recursive-path",1981312529,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60515#","p1__60515#",528443684,null)], null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"p1__60515#","p1__60515#",528443684,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167)))))], null),"athens.views.blocks",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"specter-recursive-path","specter-recursive-path",1981312529,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__60515#","p1__60515#",528443684,null)], null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"p1__60515#","p1__60515#",528443684,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167)))], null));
athens.views.blocks.pathcache60523 = info60524;

return info60524;
})():info__47270__auto__);
var precompiled60525 = com.rpl.specter.impl.cached_path_info_precompiled(info__47270__auto____$1);
var dynamic_QMARK___47271__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__47270__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___47271__auto__)){
var G__60526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.util.specter_recursive_path,(function (p1__60515_SHARP_){
return cljs.core.contains_QMARK_(p1__60515_SHARP_,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
})], null);
return (precompiled60525.cljs$core$IFn$_invoke$arity$1 ? precompiled60525.cljs$core$IFn$_invoke$arity$1(G__60526) : precompiled60525.call(null,G__60526));
} else {
return precompiled60525;
}
})(),(function (p__60527){
var map__60528 = p__60527;
var map__60528__$1 = (((((!((map__60528 == null))))?(((((map__60528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60528):map__60528);
var block__$1 = map__60528__$1;
var original_uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60528__$1,new cljs.core.Keyword("block","original-uid","block/original-uid",591552700));
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60528__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var or__4126__auto__ = original_uid;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uid__$1;
}
})());
}),block);
var map__60521 = cljs.core.deref(state);
var map__60521__$1 = (((((!((map__60521 == null))))?(((((map__60521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60521):map__60521);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919));
var is_editing = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","is-editing","editing/is-editing",-1509220484),uid], null)));
var is_selected = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","is-selected","selected/is-selected",689082595),uid], null)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(string,new cljs.core.Keyword("string","previous","string/previous",1734905219).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("string","previous","string/previous",1734905219),string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("string","local","string/local",-578009907),string], 0));
} else {
}

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block-container",(cljs.core.truth_((function (){var and__4115__auto__ = dragging;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(is_selected);
} else {
return and__4115__auto__;
}
})())?"dragging":null),(cljs.core.truth_(is_editing)?"is-editing":null),(cljs.core.truth_(is_selected)?"is-selected":null),(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.seq(children);
if(and__4115__auto__){
return open;
} else {
return and__4115__auto__;
}
})())?"show-tree-indicator":null),((((initial_open === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,linked_ref_uid))))?"is-linked-ref":null)], null),new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (e){
return athens.views.blocks.block_drag_over(e,block,state);
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (e){
return athens.views.blocks.block_drag_leave(e,block,state);
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (e){
return athens.views.blocks.block_drop(e,block,state);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.blocks.drop_area_indicator,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_target,new cljs.core.Keyword(null,"above","above",-1286866470)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null):null)], 0)))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-body","div.block-body",-1586332448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.block-edit-toggle","button.block-edit-toggle",-1106137104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(e.shiftKey === false){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid], null));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.toggle_el,uid_sanitized_block,state,linked_ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.context_menu_el,uid_sanitized_block,state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.bullet_el,block,state,linked_ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.tooltip_el,uid_sanitized_block,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_content_el,block,state], null),(cljs.core.truth_(new cljs.core.Keyword(null,"block-embed?","block-embed?",-216201089).cljs$core$IFn$_invoke$arity$1(opts))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_refs_count_el,cljs.core.count(_refs),uid], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.inline_search_el,block,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.slash_menu_el,block,state], null),(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.seq(children);
if(and__4115__auto__){
var or__4126__auto__ = ((linked_ref === true)?new cljs.core.Keyword("linked-ref","open","linked-ref/open",-1495774079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)):false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(linked_ref === false){
return open;
} else {
return false;
}
}
} else {
return and__4115__auto__;
}
})())?(function (){var iter__4529__auto__ = (function athens$views$blocks$iter__60531(s__60532){
return (new cljs.core.LazySeq(null,(function (){
var s__60532__$1 = s__60532;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60532__$1);
if(temp__5735__auto__){
var s__60532__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60532__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60532__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60534 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60533 = (0);
while(true){
if((i__60533 < size__4528__auto__)){
var child = cljs.core._nth(c__4527__auto__,i__60533);
cljs.core.chunk_append(b__60534,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(linked_ref_data__$1,new cljs.core.Keyword(null,"initial-open","initial-open",1546246992),cljs.core.contains_QMARK_(parent_uids,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(child))),opts], null)], null));

var G__60592 = (i__60533 + (1));
i__60533 = G__60592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60534),athens$views$blocks$iter__60531(cljs.core.chunk_rest(s__60532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60534),null);
}
} else {
var child = cljs.core.first(s__60532__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(linked_ref_data__$1,new cljs.core.Keyword(null,"initial-open","initial-open",1546246992),cljs.core.contains_QMARK_(parent_uids,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(child))),opts], null)], null),athens$views$blocks$iter__60531(cljs.core.rest(s__60532__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.blocks.drop_area_indicator,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_target,new cljs.core.Keyword(null,"below","below",-926774883)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null):null)], 0)))], null)], null);
});
}));

(athens.views.blocks.block_el.cljs$lang$maxFixedArity = 3);

athens.views.blocks.block_component = (function athens$views$blocks$block_component(ident){
var block = athens.db.get_block_document(ident);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null);
});

//# sourceMappingURL=athens.views.blocks.js.map
