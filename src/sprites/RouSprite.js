var RouSprite = cc.Sprite.extend({
    onEnter: function () {
        cc.log("onEnter");
        this._super();

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
                    return true;
                }
                return false;
            }
        });
        cc.eventManager.addListener(touchListener, this);
    }
});