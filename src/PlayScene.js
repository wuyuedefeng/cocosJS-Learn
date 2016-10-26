var PlayLayer = cc.Layer.extend({
    ctor: function () {
        this._super();

        var size = cc.winSize;

        var bgSprite = new cc.Sprite(res.BackGround_png);
        bgSprite.attr({
            x: size.width/2,
            y: size.height/2,
            rotation: 180
        });
        this.addChild(bgSprite);


        //add start menu
        var startItem = new cc.MenuItemImage(res.Start_a_png, res.Start_e_png, function () {
            cc.log("Menu is clicked!");
            // 切换场景 http://www.cocos.com/docs/js/3-jumping-into-cocos2d-js/3-5-transition-between-scenes/zh.html
            // cocos2d-js 3.x 之后场景切换用的是 cc.director.runScene （而不是：cc.director.replaceScene）
            // 网友回答： replace这个方法似乎取消了，所以现在用push、pop、run、popToRoot这几个
            cc.director.runScene(new cc.TransitionPageTurn(1, new GameScene, false));
        }, this);
        startItem.attr({
            x: size.width/2,
            y: size.height/2
        });
        var menu = new cc.Menu(startItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);



        return true;
    }
});

var PlayScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new PlayLayer();
        this.addChild(layer);
    }
})