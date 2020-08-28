class Booster{

    constructor(x,y) {
        this.body=createSprite(x,y,10,10);
        this.body.addImage(booster_enemy);
        this.body.scale=0.5;
    }

    shield() {
        player.body.changeImage("shield",player_shield);
        player.body.scale=0.5;
        shieldImg=1;
        console.log(shieldImg);
    }
}