var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"FA5Style",{enumerable:true,get:function get(){return _createIconSetFromFontawesome.FA5Style;}});exports.getImageSource=exports.ToolbarAndroid=exports.TabBarItemIOS=exports.TabBarItem=exports.Button=exports.default=void 0;var _createIconSetFromFontawesome=require("./lib/create-icon-set-from-fontawesome5");var _FontAwesome5Free=_interopRequireDefault(require("./glyphmaps/FontAwesome5Free.json"));var _FontAwesome5Free_meta=_interopRequireDefault(require("./glyphmaps/FontAwesome5Free_meta.json"));var iconSet=(0,_createIconSetFromFontawesome.createFA5iconSet)(_FontAwesome5Free.default,_FontAwesome5Free_meta.default,false);var _default=iconSet;exports.default=_default;var Button=iconSet.Button,TabBarItem=iconSet.TabBarItem,TabBarItemIOS=iconSet.TabBarItemIOS,ToolbarAndroid=iconSet.ToolbarAndroid,getImageSource=iconSet.getImageSource;exports.getImageSource=getImageSource;exports.ToolbarAndroid=ToolbarAndroid;exports.TabBarItemIOS=TabBarItemIOS;exports.TabBarItem=TabBarItem;exports.Button=Button;