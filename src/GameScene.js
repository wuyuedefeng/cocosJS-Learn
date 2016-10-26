var GameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();

        var size = cc.winSize;

        // add bg
        var bg = new cc.Sprite(res.BackGround_png);
        bg.attr({
            x: size.width/2,
            y: size.height/2
        });
        this.addChild(bg);

        this.schedule(this.update,1,16*1024,1);

        return true;
    },
    update : function() {
        this.addRou();
        this.removeRou();
    },
    rouSprites: [],
    addRou: function () {
        var rou = new cc.Sprite(res.Rou_png);
        this.rouSprites.push(rou);
        var size = cc.winSize;

        rou.attr({
            x:  rou.width/2 + size.width/2 * cc.random0To1(),
            y: size.height - 30
        });
        this.addChild(rou);

        var dropAction = cc.MoveTo.create(4, rou.x, -30);
        rou.runAction(dropAction);
    },
    removeRou: function (rou) {
        cc.log('remove rou....');
        var rouSprites = this.rouSprites;
        for (var i=0; i<rouSprites.length; i++){
            if (rouSprites[i].y < 0){
                rouSprites[i].removeFromParent();
                rouSprites.splice(i, 1);
                i--;
            }
        }

    }
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});