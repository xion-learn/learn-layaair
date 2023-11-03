const { regClass } = Laya;
import { RuntimeScriptBase } from "./RuntimeScript.generated";

@regClass()
export class RuntimeScript extends RuntimeScriptBase {

    onAwake() {
        this.Animation.on(Laya.Event.MOUSE_DOWN, () => {
            this.Prefab2D.visible = false
        })
    }

    onStart() {
        const rigid = this.Rigid1.getComponent(Laya.RigidBody)
        rigid.setVelocity({ x: 0, y: -10 })
    }
}