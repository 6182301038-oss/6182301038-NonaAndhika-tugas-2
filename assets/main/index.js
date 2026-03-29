System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,o,r,l,s,a,c,p,h,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,s=e.SpriteFrame,a=e.CCFloat,c=e.Collider2D,p=e.Contact2DType,h=e.Sprite,u=e.Component}],execute:function(){var v,d,g,f,C,m,y;r._RF.push({},"1ef28OJh8JL8pS2QdIiuT7e","Bird",void 0);var B=l.ccclass,T=l.property;e("Bird",(v=B("Bird"),d=T({type:[s]}),g=T({type:[a]}),v((m=t((C=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,n(t,"spriteBird",m,o(t)),n(t,"scaleList",y,o(t)),t.listToRemove=[],t.level=0,t}i(t,e);var r=t.prototype;return r.start=function(){var e=this.getComponent(c);e&&(e.on(p.BEGIN_CONTACT,this.onBeginContact,this),e.on(p.END_CONTACT,this.onEndContact,this))},r.onBeginContact=function(e,i,n){e.group==i.group&&e.node.getComponent(t).level==i.node.getComponent(t).level&&(this.levelUp(),this.listToRemove.push(i.node))},r.onEndContact=function(e,t,i){console.log("onEndContact")},r.levelUp=function(){this.level+1<this.spriteBird.length&&(this.level++,this.getComponent(h).spriteFrame=this.spriteBird[this.level%this.spriteBird.length],this.level<this.scaleList.length&&this.node.scale.multiplyScalar(this.scaleList[this.level])),console.log("level: "+this.level)},r.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(u)).prototype,"spriteBird",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=t(C.prototype,"scaleList",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=C))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o,i,a,c,l,p,s,u,y,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Prefab,l=t.input,p=t.Input,s=t.instantiate,u=t.RigidBody2D,y=t.ERigidBody2DType,f=t.Component}],execute:function(){var d,b,h,g,m;i._RF.push({},"b6f29aXcR9KT4R5SbiSKpyX","GameController",void 0);var v=a.ccclass,T=a.property;t("GameController",(d=v("GameController"),b=T({type:c}),d((m=e((g=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",m,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){l.on(p.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){var e=s(this.birdPrefab),r=t.getUILocation();e.setParent(this.node),e.setWorldPosition(r.x,r.y,0),e.getComponent(u).type=y.Dynamic,e.getComponent(u).wakeUp()},i.update=function(t){},e}(f)).prototype,"birdPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=g))||h));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});