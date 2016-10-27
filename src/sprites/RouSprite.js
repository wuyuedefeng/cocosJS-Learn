var RouSprite = cc.Sprite.extend({
    onEnter: function () {
        cc.log("onEnter");
        this._super();

        // this.disappearAction = this.createDisappearAction();

        this.addTouchEventListenser();
    },
    onExit: function () {
        cc.log('onExit');
    },
    addTouchEventListenser: function () {
       var touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // swallowTouches属性设置是否吃掉事件，事件被吃掉后不会递给下一层监听器
            swallowTouches: true,
            // onTouchBegan方法处理触摸点击按下事件，我们在这里可以获取到触摸点的坐标pos。event.getCurrentTarget()获取当前事件的接受者，并判断当前的是否点击到了RouSprite
            onTouchBegan: function (touch, event) {
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if (cc.rectContainsPoint(target.getBoundingBox(), pos)){
                    cc.log('touched');
                    // target.removeTouchEventListenser;

                    //响应精灵点中
                    cc.log("pos.x="+pos.x+",pos.y="+pos.y);
                    target.stopAllActions();

                    target.getParent().removeRou(target.index - 1);
                    target.removeFromParent();


                    return true;
                }
                return false;
            }
        });
        cc.eventManager.addListener(touchListener, this);
    }
    // createDisappearAction: function () {
    //     var frames = [];
    //     for (var i =0;  i < 11; i++){
    //         var str = "sushi_1n" + i + '.png';
    //         var frame = cc.spriteFrameCache.getSpriteFrame(str);
    //         frames.push(frame);
    //     }
    //
    //     var animation = new cc.Animation(frames,0.2);
    //     var action = new cc.Animate(animation);
    //     return action;
    // }
});