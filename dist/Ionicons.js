var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.getImageSource=exports.ToolbarAndroid=exports.TabBarItemIOS=exports.TabBarItem=exports.Button=exports.default=void 0;var _createIconSet=_interopRequireDefault(require("./lib/create-icon-set"));var _Ionicons=_interopRequireDefault(require("./glyphmaps/Ionicons.json"));var iconSet=(0,_createIconSet.default)(_Ionicons.default,'Ionicons','Ionicons.ttf');var _default=iconSet;exports.default=_default;var Button=iconSet.Button,TabBarItem=iconSet.TabBarItem,TabBarItemIOS=iconSet.TabBarItemIOS,ToolbarAndroid=iconSet.ToolbarAndroid,getImageSource=iconSet.getImageSource;exports.getImageSource=getImageSource;exports.ToolbarAndroid=ToolbarAndroid;exports.TabBarItemIOS=TabBarItemIOS;exports.TabBarItem=TabBarItem;exports.Button=Button;