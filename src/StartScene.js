var StartLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var bgSprite = new cc.Sprite(res.BackGround_png);
        bgSprite.attr({
            x: size.width/2,
            y: size.height/2
        });
        this.addChild(bgSprite);

        var helloLabel = new cc.LabelTTF("Hello World", "", 38);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2;
        this.addChild(helloLabel);

        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});