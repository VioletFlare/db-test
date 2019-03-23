
class BaseDemo extends Phaser.Scene {

    constructor() {
        super();
        this.BACKGROUND_URL = "resource/background.png";
    }
    
    preload() {
        //from within the base demo i install the DB plugin
        this.plugins.installScenePlugin('dragonBones', dragonBones.phaser.plugin.DragonBonesScenePlugin, 'dragonbone', this); 
        this.load.image(this.BACKGROUND_URL, this.BACKGROUND_URL);
    }

    create() {
        this.add.image(0, 0, this.BACKGROUND_URL);
    }

    createText(str) {
        const style = { fontSize: 18, color: "#FFFFFF", align: "center" };
        const text = this.add.text(this.cameras.main.centerX, this.cameras.main.height - 100, str, style);
        text.setOrigin(.5, .5);
        return text;
    }

}