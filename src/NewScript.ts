import { RuntimeScript } from "./RuntimeScript";

const { regClass, property } = Laya;

@regClass()
export class NewScript extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;

    @property(String)
    public text: string = "";

    @property({type: Laya.Prefab, multiline: true})
    public prefab: Laya.Prefab

    private ui : RuntimeScript;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        console.log('onAwake');
        this.ui = this.owner.scene as RuntimeScript

        this.loadTexture("resources/image/dragon.png", 500); //需要在resources/image放入相应的资源
    }

    /**加载并显示图片 */
    loadTexture(url: string, x: number = 0, y: number = 0): void {
        Laya.loader.load(url).then((res: Laya.Texture) => {
            let img = new Laya.Image();
            img.texture = res;
            img.scale(0.1, 0.1)
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
    onStart(): void {
        console.log('onStart');
        this.ui.Panel.visible = false

        const prefab = Laya.Pool.getItemByCreateFun('prefab', this.prefab.create, this.prefab)
        this.owner.addChild(prefab)

        const rigid = this.ui.Rigid1.getComponent(Laya.RigidBody)
        rigid.setVelocity({ x: 0, y: -10 })
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
}