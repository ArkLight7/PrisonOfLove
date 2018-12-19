//=============================================================================
// Olivia Engine - TitleSocialMedia - for RPG Maker MV version 1.6.1
// Olivia_TitleSocialMedia.js
//=============================================================================
 /*:
 * @plugindesc <TitleSocialMedia> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that will add social media buttons onto your
 * title screen that can be clicked and taken to desired URLs. You can add as
 * many or remove as many buttons as you want and have them go to custom URLs
 * of your liking. You can also position these buttons anywhere on the screen
 * with provided coordinates, too.
 *
 *
 * 
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * These plugin parameters require that you have at least RPG Maker MV version
 * 1.5.1+ for them to work. Please visit this URL if you don't have the latest
 * version of RPG Maker MV:
 *
 * https://forums.rpgmakerweb.com/index.php?forums/rpg-maker-mv-releases.171/
 *
 * Buttons: This is a list of the social media buttons that are shown on your
 * title screen. You can add new ones or remove old ones from here.
 *
 * Image: The image used for the social media button. This is located in your
 * img/pictures/ folder. It can be any size you want it to be.
 *
 * URL: The URL that clicking the button brings you to. This does not open up a
 * new NodeJS client with the game unlike Yanfly's External Links. This uses the
 * player's desired browser and opens up a new page there.
 *
 * ScreenX: X position on the title screen. Can use code.
 *
 * ScreenY: Y position on the title screen. Can use code.
 *
 * Fade Effect: Perform a fade in effect for the buttons? If true, then the
 * buttons will slowly fade in after the title screen has loaded. The fade in
 * effect will draw more attention to the buttons, making the player more likely
 * to click on them.
 *
 * MS Delay: Delay in milliseconds between each fade in? Put 0 to have no delay.
 * Slowly fading in the buttons one by one gives more focus and volume to the
 * buttons, giving more attention presence to the buttons.
 *
 * Fade Speed: Fade speed when the fading occurs. Lower numbers are slower and
 * higher numbers are faster. Change these speeds to make the plugin match the
 * title screen's aesthetics.
 *
 *
 *
 * -------------------
 * W A R N I N G ! ! !
 * -------------------
 *
 * This plugin is made for RPG Maker MV versions 1.6.1 and 1.5.1+. If you update
 * RPG Maker MV past that and this plugin breaks, I am NOT responsible for it.
 *
 * 
 *
 * -------------
 * Compatibility
 * -------------
 *
 * This plugin should work with the majority of title screen plugins. To ensure
 * top compatibility, place this plugin beneath those plugins in the plugin list
 * as this matters a lot.
 *
 * This plugin is compatible with the following plugins:
 *
 * - Yanfly - Dynamic Title Images
 * - Moghunter - Custom Title Screen
 * - SRDude - Title Command Customizer
 * - SRDude - Title Map Background
 *
 * Place this plugin under those in the Plugin Manager list. Otherwise, I cannot
 * guarantee this plugin will work as intended. I am NOT responsible for the
 * compatibility of the plugins not shown in the above list.
 *
 *
 *
 * ------------
 * Terms of Use
 * ------------
 * 
 * 1. These plugins may be used in free or commercial games.
 * 2. 'Fallen Angel Olivia' must be given credit in your games.
 * 3. You are allowed to edit the code.
 * 4. Do NOT change the filename, parameters, and information of the plugin.
 * 5. You are NOT allowed to redistribute these Plugins.
 * 6. You may NOT take code for your own released Plugins.
 *
 * -------
 * Credits
 * -------
 *
 * If you are using this plugin, credit the following people:
 * 
 * - Fallen Angel Olivia
 *
 * @param 
 * @param 
 * @param ATTENTION!!!
 * @default READ THE HELP FILE
 * @param 
 * @param 
 *
 * @param Buttons
 * @type struct<Button>[]
 * @desc A list of the buttons to appear on the title screen
 * @default ["{\"Image\":\"Facebook\",\"URL\":\"https://www.facebook.com/RPGMakerWeb/\",\"ScreenX\":\"Graphics.boxWidth - 88 * 3\",\"ScreenY\":\"Graphics.boxHeight - 88 * 2\"}","{\"Image\":\"Google+\",\"URL\":\"https://plus.google.com/106764877572503440438\",\"ScreenX\":\"Graphics.boxWidth - 88 * 2\",\"ScreenY\":\"Graphics.boxHeight - 88 * 2\"}","{\"Image\":\"Tumblr\",\"URL\":\"https://www.tumblr.com/dashboard\",\"ScreenX\":\"Graphics.boxWidth - 88 * 1\",\"ScreenY\":\"Graphics.boxHeight - 88 * 2\"}","{\"Image\":\"Twitter\",\"URL\":\"https://twitter.com/RPGmakerweb\",\"ScreenX\":\"Graphics.boxWidth - 88 * 3\",\"ScreenY\":\"Graphics.boxHeight - 88 * 1\"}","{\"Image\":\"YouTube\",\"URL\":\"https://www.youtube.com/channel/UCddGFnTnLkKkDBR7JV2y2eA\",\"ScreenX\":\"Graphics.boxWidth - 88 * 2\",\"ScreenY\":\"Graphics.boxHeight - 88 * 1\"}","{\"Image\":\"Patreon\",\"URL\":\"https://www.patreon.com\",\"ScreenX\":\"Graphics.boxWidth - 88 * 1\",\"ScreenY\":\"Graphics.boxHeight - 88 * 1\"}"]
 *
 * @param
 *
 * @param Fade Effect
 * @type boolean
 * @on YES
 * @off NO
 * @desc Perform a fade in effect for the buttons?
 * @default true
 *
 * @param MS Delay
 * @parent Fade Effect
 * @number
 * @min 0
 * @desc Delay in milliseconds between each fade in? 
 * Put 0 to have no delay.
 * @default 500
 *
 * @param Fade Speed
 * @parent Fade Effect
 * @number
 * @min 1
 * @desc Fade speed when the fading occurs. 
 * Lower = slower. Higher = faster.
 * @default 4
 *
 */
/*~struct~Button:
 *
 * @param Image
 * @type file
 * @dir img/pictures/
 * @desc Image used for the social media button. This is located in your img/pictures/ folder.
 * @default Facebook
 *
 * @param URL
 * @desc The URL that clicking the button brings you to
 * @default https://www.facebook.com/RPGMakerWeb/
 *
 * @param ScreenX
 * @desc X position on the title screen. Can use code.
 * @default Graphics.boxWidth - 88 * 3
 *
 * @param ScreenY
 * @desc Y position on the title screen. Can use code.
 * @default Graphics.boxHeight - 88 * 1
 *
 */
//=============================================================================

var Imported = Imported || {};
Imported.Olivia_TitleSocialMedia = true;

var Olivia = Olivia || {};

var parameters = $plugins.filter(function(p) { return p.description.contains('<TitleSocialMedia>') })[0].parameters;

Olivia.TitleSocialMedia = {
    List:       JSON.parse(parameters['Buttons']),
    FadeEffect: eval(parameters['Fade Effect']),
    MSDelay:    Number(parameters['MS Delay']),
    FadeSpeed:  Number(parameters['Fade Speed']),
};

setupOliviaTitleSocialMediaParameters = function() {
    for (var i = 0; i < Olivia.TitleSocialMedia.List.length; i++) {
        Olivia.TitleSocialMedia.List[i] = JSON.parse(Olivia.TitleSocialMedia.List[i]);
        var data = Olivia.TitleSocialMedia.List[i];
        var code = "var url = \'" + data.URL + "\';\n" +
                   "var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');\n" +
                   "require('child_process').exec(start + ' ' + url);\n" + 
                   "SoundManager.playOk();";
        data.handler = new Function(code);
    }
}();

//-----------------------------------------------------------------------------
// Scene_Title
//
// The scene class of the title screen.

Olivia.TitleSocialMedia.___Scene_Title_create___ = Scene_Title.prototype.create;
Scene_Title.prototype.create = function() {
    Olivia.TitleSocialMedia.___Scene_Title_create___.call(this);
    this.createSocialMediaButtons();
};

Scene_Title.prototype.createSocialMediaButtons = function() {
    this._socialMediaButtons = [];
    for (var i = 0; i < Olivia.TitleSocialMedia.List.length; i++) {
        var data = Olivia.TitleSocialMedia.List[i];
        var sprite = this.setupNewSocialMediaButtonSprite(data, i);
        this._socialMediaButtons.push(sprite);
        this.addChild(sprite);
    }
};

Scene_Title.prototype.setupNewSocialMediaButtonSprite = function(data) {
    var sprite = new Sprite_SocialMediaButton();
    sprite.setup(data);
    return sprite;
};

Olivia.TitleSocialMedia.___Scene_Title_update___ = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
    Olivia.TitleSocialMedia.___Scene_Title_update___.call(this);
    if (!this.isBusy() && !this._socialMediaButtonsFadeIn) {
        this.fadeInSocialMediaButtons();
    }
};

Scene_Title.prototype.fadeInSocialMediaButtons = function() {
    this._socialMediaButtonsFadeIn = true;
    for (var i = 0; i < this._socialMediaButtons.length; i++) {
        var sprite = this._socialMediaButtons[i];
        var delay = Olivia.TitleSocialMedia.MSDelay * i;
        setTimeout(this.executeSocialMediaButtonFadeIn.bind(this, sprite), delay);
    }
};

Scene_Title.prototype.executeSocialMediaButtonFadeIn = function(sprite) {
    sprite.fadeIn();
};

//-----------------------------------------------------------------------------
// Sprite_SocialMediaButton
//
// The sprite for displaying a social media button.

function Sprite_SocialMediaButton() {
    this.initialize.apply(this, arguments);
}

Sprite_SocialMediaButton.prototype = Object.create(Sprite_Button.prototype);
Sprite_SocialMediaButton.prototype.constructor = Sprite_SocialMediaButton;

Sprite_SocialMediaButton.prototype.initialize = function() {
    this._fadeSpeed = 0;
    Sprite_Button.prototype.initialize.call(this);
};

Sprite_SocialMediaButton.prototype.setup = function(data) {
    this.x = eval(data.ScreenX);
    this.y = eval(data.ScreenY);
    this.bitmap = ImageManager.loadPicture(data.Image);
    this.setClickHandler(data.handler.bind(this));
    this.visible = true;
    if (Olivia.TitleSocialMedia.FadeEffect) {
        this.opacity = 0;
    }
};

Sprite_SocialMediaButton.prototype.fadeIn = function() {
    this._fadeSpeed = Olivia.TitleSocialMedia.FadeSpeed;
};

Sprite_SocialMediaButton.prototype.update = function() {
    Sprite_Button.prototype.update.call(this);
    this.updateFadeIn();
};

Sprite_SocialMediaButton.prototype.updateFadeIn = function() {
    if (this.opacity < 255) {
        this.opacity += this._fadeSpeed;
    }
};


























