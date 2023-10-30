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

  // src/Main.ts
  var { regClass, property } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

  // src/NewScript.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var NewScript = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.text = "";
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      console.log("onAwake");
    }
    //组件被启用后执行，例如节点被添加到舞台后
    onEnable() {
      console.log("onEnable");
    }
    //组件被禁用时执行，例如从节点从舞台移除后
    onDisable() {
      console.log("onDisable");
    }
    //第一次执行update之前执行，只会执行一次
    onStart() {
      console.log("onStart");
    }
    //手动调用节点销毁时执行
    onDestroy() {
      console.log("onDestroy");
    }
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
      console.log("onUpdate");
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onLateUpdate() {
      console.log("onLateUpdate");
    }
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick() {
      console.log("onMouseClick");
    }
  };
  __name(NewScript, "NewScript");
  __decorateClass([
    property2(String)
  ], NewScript.prototype, "text", 2);
  NewScript = __decorateClass([
    regClass2("54f70da5-7fba-4862-ae5a-1387c3dcc30c", "../src/NewScript.ts")
  ], NewScript);

  // src/RuntimeScript.generated.ts
  var _RuntimeScriptBase = class _RuntimeScriptBase extends Laya.Scene {
  };
  __name(_RuntimeScriptBase, "RuntimeScriptBase");
  var RuntimeScriptBase = _RuntimeScriptBase;

  // src/RuntimeScript.ts
  var { regClass: regClass3 } = Laya;
  var RuntimeScript = class extends RuntimeScriptBase {
  };
  __name(RuntimeScript, "RuntimeScript");
  RuntimeScript = __decorateClass([
    regClass3("9d282a42-410d-4be3-9b17-b18942fc8308", "../src/RuntimeScript.ts")
  ], RuntimeScript);
})();
//# sourceMappingURL=bundle.js.map
