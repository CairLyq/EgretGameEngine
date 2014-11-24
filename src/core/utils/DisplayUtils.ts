/**
 * Created by yangsong on 2014/11/24.
 * 显示对象工具类
 */
class DisplayUtils{
    /**
     * 构造函数
     */
    public constructor(){

    }

    /**
     * 从父级移除child
     * @param child
     */
    public removeFromParent(child:egret.DisplayObject){
        if (child && child.parent) {
            child.parent.removeChild(child);
        }
    }
}
