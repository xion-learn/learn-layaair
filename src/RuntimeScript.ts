const { regClass } = Laya;
import { RuntimeScriptBase } from "./RuntimeScript.generated";

@regClass()
export class RuntimeScript extends RuntimeScriptBase {

    onAwake() {
        this.Animation.on(Laya.Event.MOUSE_DOWN, () => {
            this.Panel.visible = false
        })
    }
}