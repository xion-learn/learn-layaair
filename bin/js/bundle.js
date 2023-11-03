"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/Animation.ts
  var { regClass, property } = Laya;
  var Animation = class extends Laya.Script {
    constructor() {
      super();
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      this.ani.autoPlay = true;
      this.ani.wrapMode = 0;
      this.ani.interval = 50;
    }
  };
  __name(Animation, "Animation");
  //在IDE面板中显示属性
  __decorateClass([
    property({ type: Laya.Animation })
  ], Animation.prototype, "ani", 2);
  Animation = __decorateClass([
    regClass("3e0a6acd-9879-4f7a-8fe3-f19b83e1321c", "../src/Animation.ts")
  ], Animation);

  // src/Main.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass2("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

  // src/NewScript.ts
  var { regClass: regClass3, property: property3 } = Laya;
  var NewScript = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.text = "";
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      console.log("onAwake");
      this.ui = this.owner.scene;
      this.loadTexture("resources/image/dragon.png", 500);
    }
    /**加载并显示图片 */
    loadTexture(url, x = 0, y = 0) {
      Laya.loader.load(url).then((res) => {
        let img = new Laya.Image();
        img.texture = res;
        img.scale(0.1, 0.1);
        img.pos(x, y);
        this.owner.addChild(img);
      });
    }
    //组件被启用后执行，例如节点被添加到舞台后
    // onEnable(): void {
    //     console.log('onEnable');
    // }
    //组件被禁用时执行，例如从节点从舞台移除后
    // onDisable(): void {
    //     console.log('onDisable');
    // }
    //第一次执行update之前执行，只会执行一次
    onStart() {
      console.log("onStart");
      this.ui.Panel.visible = false;
      const prefab = Laya.Pool.getItemByCreateFun("prefab", this.prefab.create, this.prefab);
      this.owner.addChild(prefab);
      const rigid = this.ui.Rigid1.getComponent(Laya.RigidBody);
      rigid.setVelocity({ x: 0, y: -10 });
    }
    //手动调用节点销毁时执行
    // onDestroy(): void {
    //     console.log('onDestroy');
    // }
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    // onUpdate(): void {
    //     console.log('onUpdate');
    // }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    // onLateUpdate(): void {
    //     console.log('onLateUpdate');
    // }
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    // onMouseClick(): void {
    //     console.log('onMouseClick');
    // }
  };
  __name(NewScript, "NewScript");
  __decorateClass([
    property3(String)
  ], NewScript.prototype, "text", 2);
  __decorateClass([
    property3({ type: Laya.Prefab, multiline: true })
  ], NewScript.prototype, "prefab", 2);
  NewScript = __decorateClass([
    regClass3("54f70da5-7fba-4862-ae5a-1387c3dcc30c", "../src/NewScript.ts")
  ], NewScript);

  // src/RuntimeScript.generated.ts
  var _RuntimeScriptBase = class _RuntimeScriptBase extends Laya.Scene {
  };
  __name(_RuntimeScriptBase, "RuntimeScriptBase");
  var RuntimeScriptBase = _RuntimeScriptBase;

  // src/RuntimeScript.ts
  var { regClass: regClass4 } = Laya;
  var RuntimeScript = class extends RuntimeScriptBase {
    onAwake() {
      this.Animation.on(Laya.Event.MOUSE_DOWN, () => {
        this.Prefab2D.visible = false;
      });
    }
    onStart() {
      const rigid = this.Rigid1.getComponent(Laya.RigidBody);
      rigid.setVelocity({ x: 0, y: -10 });
    }
  };
  __name(RuntimeScript, "RuntimeScript");
  RuntimeScript = __decorateClass([
    regClass4("9d282a42-410d-4be3-9b17-b18942fc8308", "../src/RuntimeScript.ts")
  ], RuntimeScript);
})();
//# sourceMappingURL=bundle.js.map
