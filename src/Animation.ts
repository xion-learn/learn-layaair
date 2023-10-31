const { regClass, property } = Laya;

@regClass()
export class Animation extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property({ type: Laya.Animation }) //在IDE面板中显示属性
    ani: Laya.Animation;

    constructor() {
        super();
    }

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.ani.autoPlay = true; //开启自动播放
        this.ani.wrapMode = 0; //播放模式为正序播放模式（POSITIVE）
        this.ani.interval = 50; //动画播放的帧间隔时间为50毫秒
    }
}