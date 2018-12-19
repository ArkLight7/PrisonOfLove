//=============================================================================
// Olivia Engine - Item Concoction - for RPG Maker MV version 1.6.1
// Olivia_ItemConcoct.js
//=============================================================================
 /*:
 * @plugindesc <ItemConcoct> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that adds a "Concoct" command to any actor you
 * want in battle. Concoct allows the actor to combine together two items to
 * make a new item effect. Concoctions will be composed of a primary component,
 * secondary component, and a resulting effect.
 *
 * There is also an Item Concoction Preview Window that comes with this plugin.
 * It can be enabled or disabled (up to you). It will display the resulting
 * effect of the two mixed items together if the concoction combination has been
 * made before. If it hasn't, the effects will be hidden.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Concoct Command: How the command appears in the Actor Command list.
 *
 * Position: Where do you want to put the Concoct Command in the command list?
 *
 * Preview Window: Add a preview window to the battle scene if true.
 *
 * Window Scale: Scale the size of the contents of the preview window down by
 * this much. This is in case the contents of the window become too big.
 *
 * Window X, Y, Width: Changes the properties of the preview window. Set the 
 * setting to "auto" if you wish for the plugin to calculate the ideal position.
 *
 * Show Unknown Result?: If set to true, it will always show resulting effects
 * of concoction combinations, even if they haven't been performed by the party
 * yet. If set to false, the resulting effect will not be shown until the party
 * has performed the combination at least once.
 *
 * Show Battle Test?: If this is true, always show unknown results during
 * battle testing.
 *
 * Unknown Icon, Name, Help: How unknown results will appear.
 *
 *
 *
 * --------
 * Notetags
 * --------
 *
 * Actor, Class, Weapon, Armor, State Notetags
 *
 * <Item Concoct>
 * If an actor is affected by this notetag either directly or indirectly through
 * related traits, the actor can use the Concoct command in battle.
 *
 *
 *
 * State Notetag
 *
 * <Item Concoct Seal>
 * If an actor is affected by a state with this notetag, the actor's Concoct
 * command will be disabled.
 *
 *
 *
 * Item Notetags
 *
 * <Item Concoct>
 * list
 * list
 * list
 * list
 * </Item Concoct>
 * Makes the item with the notetag a primary component for item concoctions.
 * Insert multiple 'list' items to make it combinable with more items.
 *
 * 'list' can be formatted in any of these four ways:
 *
 * Item x: Item x
 * Item x: name
 * name: name
 * name: Item x
 *
 * If you are using Item x, replace x with the ID of the item you wish to refer
 * to. If you are using a name version, replace name with the full name of the
 * item (it is case sensitive). The first item on the list before the : is the 
 * secondary component for item concoctions. The second item on the list after
 * the : is the item effect that will occur when the first and second components
 * are combined. The effects of the first and second items are unrelated to the
 * combined item effect.
 *
 * Here is an example of how an Item Concoction notetag and list could look:
 *
 * <Item Concoct>
 * Item 51: Item 61
 * Item 52: Item 62
 * Item 53: Lucid Mist
 * Item 54: Healing Mist
 * Plum Essence: Inspiriting Mist
 * Tomato Essence: Boosting Mist
 * Onion Bloom: Item 67
 * Curious Bloom: Item 68
 * </Item Concoct>
 *
 * Concoctions will be composed of a primary component, secondary component, and
 * a resulting effect. In this case, the primary component is the item with the
 * notetag. The secondary component can be any of the items before the : in the
 * list. The resulting effect is the item after the : next to the secondary
 * component selected on the list.
 *
 * -------------------
 * W A R N I N G ! ! !
 * -------------------
 *
 * This plugin is made for RPG Maker MV versions 1.6.1 and below. If you update
 * RPG Maker MV past that and this plugin breaks, I am NOT responsible for it.
 *
 * -------------
 * Compatibility
 * -------------
 *
 * If you are using Boost Point System, Battle System OTB, or OctoBattle, place
 * this plugin under those plugins in the plugin manager list.
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
 * 6. You may NOT take code for your own released Plugins without credit.
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
 * @param Concoct Command
 * @desc How the command appears in the Actor Command list
 * @default Concoct
 *
 * @param Concoct Command Position
 * @text Position
 * @parent Concoct Command
 * @type select
 * @option Top (Before Attack)
 * @value 0
 * @option After Attack
 * @value 1
 * @option After Skill Types
 * @value 2
 * @option After Guard
 * @value 3
 * @option After Item
 * @value 4
 * @option At the Bottom
 * @value 5
 * @desc Where do you want to put the Concoct Command in the Actor Command list?
 * @default 1
 * 
 * @param
 *
 * @param Preview Window
 * @type boolean
 * @on YES
 * @off NO
 * @desc Add a preview window to the battle scene if true
 * @default true
 *
 * @param Preview Window Scale
 * @text Window Scale
 * @parent Preview Window
 * @desc Scale the size of the contents of the preview window down by this much
 * @default 0.8
 *
 * @param Preview Window X
 * @text Window X
 * @parent Preview Window Scale
 * @desc X position of the preview window. Put 'auto' if you want it to automatically position itself.
 * @default auto
 *
 * @param Preview Window Y
 * @text Window Y
 * @parent Preview Window Scale
 * @desc Y position of the preview window. Put 'auto' if you want it to automatically position itself.
 * @default auto
 *
 * @param Preview Window Width
 * @text Window Width
 * @parent Preview Window Scale
 * @desc Width of the preview window. Put 'auto' if you want it to automatically calculate the width.
 * @default auto
 *
 * @param Preview Window Show Unknown Result
 * @text Show Unknown Result?
 * @parent Preview Window
 * @type boolean
 * @on YES
 * @off NO
 * @desc Always show unknown results?
 * @default false
 *
 * @param Preview Window Show Battle Test
 * @text Show Battle Test?
 * @parent Preview Window Show Unknown Result
 * @type boolean
 * @on YES
 * @off NO
 * @desc Always show unknown results in battle test?
 * @default true
 *
 * @param Preview Window Unknown Icon
 * @text Unknown Icon
 * @parent Preview Window Show Unknown Result
 * @desc Icon used for unknown combinations.
 * @default 16
 *
 * @param Preview Window Unknown Name
 * @text Unknown Name
 * @parent Preview Window Show Unknown Result
 * @desc Name used for unknown combinations.
 * @default ????????
 *
 * @param Preview Window Unknown Help
 * @text Unknown Help
 * @parent Preview Window Show Unknown Result
 * @type note
 * @desc Help used for unknown combinations.
 * @default "This concoction combination\nhas not been made yet."
 *
 */
//=============================================================================

var Imported = Imported || {};
Imported.Olivia_ItemConcoct = true;

var Olivia = Olivia || {};
Olivia.ItemConcoct = Olivia.ItemConcoct || {};

var parameters = $plugins.filter(function(p) { return p.description.contains('<ItemConcoct>') })[0].parameters;

Olivia.ItemConcoct.CommandName = String(parameters['Concoct Command'] || 'Concoct');
Olivia.ItemConcoct.CommandPosition = Number(parameters['Concoct Command Position'] || 0);

Olivia.ItemConcoct.PreviewWindow = eval(String(parameters['Preview Window']));
Olivia.ItemConcoct.PreviewScale = Number(parameters['Preview Window Scale'] || 0.8);
Olivia.ItemConcoct.PreviewX = String(parameters['Preview Window X']);
Olivia.ItemConcoct.PreviewY = String(parameters['Preview Window Y']);
Olivia.ItemConcoct.PreviewWidth = String(parameters['Preview Window Width']);

Olivia.ItemConcoct.PreviewShowUnk = eval(String(parameters['Preview Window Show Unknown Result']));
Olivia.ItemConcoct.PreviewShowBattleTest = eval(String(parameters['Preview Window Show Battle Test']));
Olivia.ItemConcoct.PreviewUnkIcon = Number(parameters['Preview Window Unknown Icon'] || 0);
Olivia.ItemConcoct.PreviewUnkName = String(parameters['Preview Window Unknown Name'] || "");
Olivia.ItemConcoct.PreviewUnkHelp = JSON.parse(parameters['Preview Window Unknown Help'] || "");

//-----------------------------------------------------------------------------
// DataManager
//
// The static class that manages the database and game objects.

DataManager.getItemConcoctList = function(item) {
    var list = [];
    if (!!item && item.note.match(/<Item Concoct>/i)) {
        if (!item._itemConcoctList) {
            this.makeItemConcoctList(item);
        }
        list = item._itemConcoctList;
    }
    return list;
};

DataManager.makeItemConcoctList = function(item) {
    item._itemConcoctList = [];
    item._itemConcoctEffect = [];
    var notedata = item.note.split(/[\r\n]+/);
    var active = false;
    for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(/<Item Concoct>/i)) {
            active = true;
        } else if (line.match(/<\/Item Concoct>/i)) {
            active = false;
        } else if (active && line.match(/(.*):[ ](.*)/i)) {
            var string1 = this.retrieveItemConcoctID(String(RegExp.$1));
            var string2 = this.retrieveItemConcoctID(String(RegExp.$2));
            item._itemConcoctList.push(string1);
            item._itemConcoctEffect.push(string2);
        }
    }
};

DataManager.retrieveItemConcoctID = function(string) {
    if (string.match(/Item (\d+)/i)) {
        return parseInt(RegExp.$1);
    } else {
        for (var i = 1; i < $dataItems.length; i++) {
            var item = $dataItems[i];
            if (!!item && item.name.trim() === string.trim()) {
                return i;
            }
        }
    }
};

//-----------------------------------------------------------------------------
// Game_System
//
// The game object class for the system data.

Olivia.ItemConcoct.___Game_System_initialize___ = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Olivia.ItemConcoct.___Game_System_initialize___.call(this);
    this.initializeItemConcoctCombos();
};

Game_System.prototype.initializeItemConcoctCombos = function() {
    this._itemConcoctCombos = {};
};

Game_System.prototype.getItemConcoctCombos = function(item) {
    if (this._itemConcoctCombos === undefined) {
        this.initializeItemConcoctCombos();
    }
    if (this._itemConcoctCombos[item.id] === undefined) {
        this._itemConcoctCombos[item.id] = [];
    }
    return this._itemConcoctCombos[item.id];
};

Game_System.prototype.isItemConcoctComboRevealed = function(item1, item2) {
    var array = this.getItemConcoctCombos(item1);
    return array.contains(item2.id);
};

Game_System.prototype.revealItemConcoctCombo = function(item1, item2) {
    var array = this.getItemConcoctCombos(item1);
    if (!array.contains(item2.id)) {
        array.push(item2.id);
    }
};

//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.

Olivia.ItemConcoct.___Game_Action_clear___ = Game_Action.prototype.clear;
Game_Action.prototype.clear = function() {
    Olivia.ItemConcoct.___Game_Action_clear___.call(this);
    this._itemConcoct1 = 0;
    this._itemConcoct2 = 0;
};

Game_Action.prototype.setItemConcoctCost = function(item1, item2) {
    this._itemConcoct1 = item1.id;
    this._itemConcoct2 = item2.id;
};

Game_Action.prototype.isItemConcoct = function() {
    return this._itemConcoct1 > 0 || this._itemConcoct2 > 0;
};

//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.

Olivia.ItemConcoct.___Game_BattlerBase_canUse___ = Game_BattlerBase.prototype.canUse;
Game_BattlerBase.prototype.canUse = function(item) {
    if ($gameParty.inBattle() && this.currentAction() && this.currentAction().isItemConcoct()) {
        return this.meetsItemConcoctConditions();
    } else {
        return Olivia.ItemConcoct.___Game_BattlerBase_canUse___.call(this, item);
    }
};

Game_BattlerBase.prototype.meetsItemConcoctConditions = function() {
    var item1 = $dataItems[this.currentAction()._itemConcoct1];
    var item2 = $dataItems[this.currentAction()._itemConcoct2];
    if (item1 !== item2) {
        return $gameParty.hasItem(item1) && $gameParty.hasItem(item2);
    } else {
        return $gameParty.numItems(item1) >= 2;
    }
};

//-----------------------------------------------------------------------------
// Game_Battler
//
// The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
// and actions.

Olivia.ItemConcoct.___Game_Battler_useItem___ = Game_Battler.prototype.useItem;
Game_Battler.prototype.useItem = function(item) {
    if ($gameParty.inBattle() && this.currentAction() && this.currentAction().isItemConcoct()) {
        this.consumeItemConcoct();
    } else {
        Olivia.ItemConcoct.___Game_Battler_useItem___.call(this, item);
    }
};

Game_Battler.prototype.consumeItemConcoct = function() {
    var item1 = $dataItems[this.currentAction()._itemConcoct1];
    var item2 = $dataItems[this.currentAction()._itemConcoct2];
    $gameParty.consumeItem(item1);
    $gameParty.consumeItem(item2);
    $gameSystem.revealItemConcoctCombo(item1, item2);
};

//-----------------------------------------------------------------------------
// Game_Actor
//
// The game object class for an actor.

Game_Actor.prototype.hasItemConcoct = function() {
    if (this.actor().note.match(/<Item (?:Concoct|Concoction)>/i)) {
        return true;
    }
    if (this.currentClass().note.match(/<Item (?:Concoct|Concoction)>/i)) {
        return true;
    }
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var state = states[i];
        if (!!state && state.note.match(/<Item (?:Concoct|Concoction)>/i)) {
            return true;
        }
    }
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var equip = equips[i];
        if (!!equip && equip.note.match(/<Item (?:Concoct|Concoction)>/i)) {
            return true;
        }
    }
    return false;
};

//-----------------------------------------------------------------------------
// Scene_Battle
//
// The scene class of the battle screen.

Olivia.ItemConcoct.___Scene_Battle_isAnyInputWindowActive___ = Scene_Battle.prototype.isAnyInputWindowActive;
Scene_Battle.prototype.isAnyInputWindowActive = function() {
    return Olivia.ItemConcoct.___Scene_Battle_isAnyInputWindowActive___.call(this) ||
        this._itemConcoct1Window.active ||
        this._itemConcoct2Window.active;
};

Olivia.ItemConcoct.___Scene_Battle_createActorCommandWindow___ = Scene_Battle.prototype.createActorCommandWindow;
Scene_Battle.prototype.createActorCommandWindow = function() {
    Olivia.ItemConcoct.___Scene_Battle_createActorCommandWindow___.call(this);
    this._actorCommandWindow.setHandler('ItemConcoct', this.commandItemConcoct.bind(this));
};

Scene_Battle.prototype.commandItemConcoct = function() {
    this._itemConcoct1Window.refresh();
    this._itemConcoct1Window.show();
    this._itemConcoct1Window.activate();
};

Olivia.ItemConcoct.___Scene_Battle_createItemWindow___ = Scene_Battle.prototype.createItemWindow;
Scene_Battle.prototype.createItemWindow = function() {
    Olivia.ItemConcoct.___Scene_Battle_createItemWindow___.call(this);
    this.createItemConcoctWindows();
};

Scene_Battle.prototype.createItemConcoctWindows = function() {
    this.createItemConcoctWindow1();
    this.createItemConcoctWindow2();
    this.createItemConcoctPreviewWindow();
};

Scene_Battle.prototype.createItemConcoctWindow1 = function() {
    this._itemConcoct1Window = new Window_BattleItemConcoct1(this._itemWindow);
    this._itemConcoct1Window.setHelpWindow(this._helpWindow);
    this._itemConcoct1Window.setHandler('ok',     this.onItemConcoct1Ok.bind(this));
    this._itemConcoct1Window.setHandler('cancel', this.onItemConcoct1Cancel.bind(this));
    this.addWindow(this._itemConcoct1Window);
};

Scene_Battle.prototype.createItemConcoctWindow2 = function() {
    this._itemConcoct2Window = new Window_BattleItemConcoct2(this._itemWindow);
    this._itemConcoct2Window.setHelpWindow(this._helpWindow);
    this._itemConcoct2Window.setHandler('ok',     this.onItemConcoct2Ok.bind(this));
    this._itemConcoct2Window.setHandler('cancel', this.onItemConcoct2Cancel.bind(this));
    this.addWindow(this._itemConcoct2Window);
};

Scene_Battle.prototype.createItemConcoctPreviewWindow = function() {
    if (Olivia.ItemConcoct.PreviewWindow) {
        this._itemConcoctPreviewWindow = new Window_ItemConcoctPreview();
        this.addWindow(this._itemConcoctPreviewWindow);
        this._itemConcoct2Window.setPreviewWindow(this._itemConcoctPreviewWindow);
    }
};

Scene_Battle.prototype.onItemConcoct1Ok = function() {
    this._itemConcoct1Window._tempIndex = this._itemConcoct1Window.index();
    var item = this._itemConcoct1Window.item();
    this._itemConcoct2Window.setBaseItem(item);
    this._itemConcoct2Window.refresh();
    this._itemConcoct1Window.hide();
    this._itemConcoct2Window.show();
    this._itemConcoct2Window.activate();
    if (this._itemConcoctPreviewWindow) {
        if (Olivia.OctoBattle && Olivia.OctoBattle.BoostPoint && Olivia.OctoBattle.BoostPoint.Enabled) {
            this._itemConcoctPreviewWindow.setBPSubject(BattleManager.actor());
        }
        this._itemConcoctPreviewWindow.setItem1(this._itemConcoct1Window.item());
        this._itemConcoctPreviewWindow.setItem2(this._itemConcoct2Window.item());
        this.itemConcoctPreviewShow();
        this._itemConcoctPreviewWindow.autoPosition(this._itemConcoct1Window, this._helpWindow);
    }
};

Scene_Battle.prototype.onItemConcoct1Cancel = function() {
    this._itemConcoct1Window.hide();
    this._actorCommandWindow.activate();
};

Scene_Battle.prototype.onItemConcoct2Ok = function() {
    this._itemConcoct2Window._tempIndex = this._itemConcoct2Window.index();
    var item1 = this._itemConcoct1Window.item();
    var item2 = this._itemConcoct2Window.item();
    var effectItem = $dataItems[item1._itemConcoctEffect[item1._itemConcoctList.indexOf(item2.id)]];
    var action = BattleManager.inputtingAction();
    action.setItem(effectItem.id);
    action.setItemConcoctCost(item1, item2);
    if (Imported.YEP_BattleEngineCore && Olivia.OctoBattle && Olivia.OctoBattle.SideBattleUI && Olivia.OctoBattle.SideBattleUI.Enabled) {
        this._itemConcoct2Window.hide();
        this.itemConcoctPreviewHide();
    }
    this.onSelectAction();
};

Scene_Battle.prototype.onItemConcoct2Cancel = function() {
    this._itemConcoct2Window.hide();
    this._itemConcoct1Window.show();
    this._itemConcoct1Window.select(this._itemConcoct1Window._tempIndex);
    this._itemConcoct1Window.activate();
    this.itemConcoctPreviewHide();
};

Olivia.ItemConcoct.___Scene_Battle_onActorOk___ = Scene_Battle.prototype.onActorOk;
Scene_Battle.prototype.onActorOk = function() {
    Olivia.ItemConcoct.___Scene_Battle_onActorOk___.call(this);
    this.itemConcoctHideWindows();
    this.itemConcoctPreviewHide();
};

Olivia.ItemConcoct.___Scene_Battle_onActorCancel___ = Scene_Battle.prototype.onActorCancel;
Scene_Battle.prototype.onActorCancel = function() {
    Olivia.ItemConcoct.___Scene_Battle_onActorCancel___.call(this);
    this.itemConcoctReturn();
};

Olivia.ItemConcoct.___Scene_Battle_onEnemyOk___ = Scene_Battle.prototype.onEnemyOk;
Scene_Battle.prototype.onEnemyOk = function() {
    Olivia.ItemConcoct.___Scene_Battle_onEnemyOk___.call(this);
    this.itemConcoctHideWindows();
    this.itemConcoctPreviewHide();
};

Olivia.ItemConcoct.___Scene_Battle_onEnemyCancel___ = Scene_Battle.prototype.onEnemyCancel;
Scene_Battle.prototype.onEnemyCancel = function() {
    Olivia.ItemConcoct.___Scene_Battle_onEnemyCancel___.call(this);
    this.itemConcoctReturn();
};

Scene_Battle.prototype.itemConcoctReturn = function() {
    if (this._actorCommandWindow.currentSymbol() === 'ItemConcoct') {
        this._itemConcoct2Window.show();
        this._itemConcoct2Window.activate();
        this._itemConcoct2Window.select(this._itemConcoct2Window._tempIndex);
        this._actorCommandWindow.opacity = 255;
        this._actorCommandWindow.contentsOpacity = 255;
        this.itemConcoctPreviewShow();
    }
};

Scene_Battle.prototype.itemConcoctHideWindows = function() {
    this._itemConcoct1Window.hide();
    this._itemConcoct2Window.hide();
};

Scene_Battle.prototype.itemConcoctPreviewShow = function() {
    if (this._itemConcoctPreviewWindow) {
        this._itemConcoctPreviewWindow.show();
    }
};

Scene_Battle.prototype.itemConcoctPreviewHide = function() {
    if (this._itemConcoctPreviewWindow) {
        this._itemConcoctPreviewWindow.hide();
    }
};

if (Olivia.OctoBattle && Olivia.OctoBattle.BoostPoint && Olivia.OctoBattle.BoostPoint.Enabled) {

Olivia.ItemConcoct.___Scene_Battle_commandBoost___ = Scene_Battle.prototype.commandBoost;
Scene_Battle.prototype.commandBoost = function() {
    Olivia.ItemConcoct.___Scene_Battle_commandBoost___.call(this);
    if (this._itemConcoctPreviewWindow) {
        this._itemConcoctPreviewWindow.refresh();
    }
};

Olivia.ItemConcoct.___Scene_Battle_commandUnboost___ = Scene_Battle.prototype.commandUnboost;
Scene_Battle.prototype.commandUnboost = function() {
    Olivia.ItemConcoct.___Scene_Battle_commandUnboost___.call(this);
    if (this._itemConcoctPreviewWindow) {
        this._itemConcoctPreviewWindow.refresh();
    }
};

}

//-----------------------------------------------------------------------------
// Window_ActorCommand
//
// The window for selecting an actor's action on the battle screen.

Olivia.ItemConcoct.___Window_ActorCommand_makeCommandList___ = Window_ActorCommand.prototype.makeCommandList;
Window_ActorCommand.prototype.makeCommandList = function() {
    if (Olivia.ItemConcoct.CommandPosition === 0) {
        this.addItemConcoctCommand();
    }
    Olivia.ItemConcoct.___Window_ActorCommand_makeCommandList___.call(this);
    if (Olivia.ItemConcoct.CommandPosition >= 5) {
        this.addItemConcoctCommand();
    }
};

Olivia.ItemConcoct.___Window_ActorCommand_addAttackCommand___ = Window_ActorCommand.prototype.addAttackCommand;
Window_ActorCommand.prototype.addAttackCommand = function() {
    Olivia.ItemConcoct.___Window_ActorCommand_addAttackCommand___.call(this);
    if (Olivia.ItemConcoct.CommandPosition === 1) {
        this.addItemConcoctCommand();
    }
};

Olivia.ItemConcoct.___Window_ActorCommand_addSkillCommands___ = Window_ActorCommand.prototype.addSkillCommands;
Window_ActorCommand.prototype.addSkillCommands = function() {
    Olivia.ItemConcoct.___Window_ActorCommand_addSkillCommands___.call(this);
    if (Olivia.ItemConcoct.CommandPosition === 2) {
        this.addItemConcoctCommand();
    }
};

Olivia.ItemConcoct.___Window_ActorCommand_addGuardCommand___ = Window_ActorCommand.prototype.addGuardCommand;
Window_ActorCommand.prototype.addGuardCommand = function() {
    Olivia.ItemConcoct.___Window_ActorCommand_addGuardCommand___.call(this);
    if (Olivia.ItemConcoct.CommandPosition === 3) {
        this.addItemConcoctCommand();
    }
};

Olivia.ItemConcoct.___Window_ActorCommand_addItemCommand___ = Window_ActorCommand.prototype.addItemCommand;
Window_ActorCommand.prototype.addItemCommand = function() {
    Olivia.ItemConcoct.___Window_ActorCommand_addItemCommand___.call(this);
    if (Olivia.ItemConcoct.CommandPosition === 4) {
        this.addItemConcoctCommand();
    }
};

Window_ActorCommand.prototype.addItemConcoctCommand = function() {
    if (!!this._actor && this._actor.hasItemConcoct()) {
        var name = Olivia.ItemConcoct.CommandName;
        var enabled = this.isItemConcoctEnabled();
        this.addCommand(name, 'ItemConcoct', enabled);
    }
};

Window_ActorCommand.prototype.isItemConcoctEnabled = function() {
    if (!!this._actor) {
        var states = this._actor.states();
        for (var i = 0; i < states.length; i++) {
            var state = states[i];
            if (!!state && state.note.match(/<Item Concoct Seal>/i)) {
                return false;
            }
        }
    }
    return true;
};

//-----------------------------------------------------------------------------
// Window_BattleItemConcoct1Concoct1
//
// New window for the battle scene for the first part of concoct ingredients.

function Window_BattleItemConcoct1() {
    this.initialize.apply(this, arguments);
}

Window_BattleItemConcoct1.prototype = Object.create(Window_BattleItem.prototype);
Window_BattleItemConcoct1.prototype.constructor = Window_BattleItemConcoct1;

Window_BattleItemConcoct1.prototype.initialize = function(baseWindow) {
    var x = baseWindow.x;
    var y = baseWindow.y;
    var width = baseWindow.width;
    var height = baseWindow.height;
    Window_BattleItem.prototype.initialize.call(this, x, y, width, height);
    this._positionXCorrection = 16;
    this._positionYCorrection = 16;
    this.hide();
};

Window_BattleItemConcoct1.prototype.includes = function(item) {
    return DataManager.getItemConcoctList(item).length > 0;
};

Window_BattleItemConcoct1.prototype.isEnabled = function(item) {
    return !!item;
};

Window_BattleItemConcoct1.prototype.makeItemList = function() {
    Window_BattleItem.prototype.makeItemList.call(this);
    if (this._data.length === 0) {
        this._data.push(null);
    }
};

//-----------------------------------------------------------------------------
// Window_BattleItemConcoct1Concoct2
//
// New window for the battle scene for the second part of concoct ingredients.

function Window_BattleItemConcoct2() {
    this.initialize.apply(this, arguments);
}

Window_BattleItemConcoct2.prototype = Object.create(Window_BattleItem.prototype);
Window_BattleItemConcoct2.prototype.constructor = Window_BattleItemConcoct2;

Window_BattleItemConcoct2.prototype.initialize = function(baseWindow) {
    var x = baseWindow.x;
    var y = baseWindow.y;
    var width = baseWindow.width;
    var height = baseWindow.height;
    Window_BattleItem.prototype.initialize.call(this, x, y, width, height);
    this._otbTurnPreview = true;
    this._previewWindow = undefined;
    this._positionXCorrection = 16;
    this._positionYCorrection = 16;
    this.hide();
};

Window_BattleItemConcoct2.prototype.setBaseItem = function(item) {
    this._baseItem = item;
};

Window_BattleItemConcoct2.prototype.includes = function(item) {
    return !!item && !!this._baseItem && this._baseItem._itemConcoctList.contains(item.id);
};

Window_BattleItemConcoct2.prototype.isEnabled = function(item) {
    if (!item) {
        return false;
    } else {
        
    }
    return !!item;
};

Window_BattleItemConcoct2.prototype.makeItemList = function() {
    Window_BattleItem.prototype.makeItemList.call(this);
    if (this._data.length === 0) {
        this._data.push(null);
    }
};

Window_BattleItemConcoct2.prototype.setPreviewWindow = function(previewWindow) {
    this._previewWindow = previewWindow;
    this.callUpdateHelp();
};

Window_BattleItemConcoct2.prototype.setHelpWindowItem = function(item) {
    Window_BattleItem.prototype.setHelpWindowItem.call(this, item);
    if (!!this._previewWindow) {
        this._previewWindow.setItem2(item);
    }
};

Window_BattleItemConcoct2.prototype.otbCreateTurnPreview = function() {
    if (!!this._baseItem && !!this.item()) {
        var effectItem = $dataItems[this._baseItem._itemConcoctEffect[this._baseItem._itemConcoctList.indexOf(this.item().id)]];
        this.otbSetTurnPreviewItem(effectItem);
    } else {
        this.otbClearTurnPreview();
    }
};

//-----------------------------------------------------------------------------
// Window_ItemConcoctPreview
//
// The window for displaying the description of the selected item.

function Window_ItemConcoctPreview() {
    this.initialize.apply(this, arguments);
}

Window_ItemConcoctPreview.prototype = Object.create(Window_Base.prototype);
Window_ItemConcoctPreview.prototype.constructor = Window_ItemConcoctPreview;

Window_ItemConcoctPreview.prototype.initialize = function() {
    var width = Olivia.ItemConcoct.PreviewWidth === 'auto' ? 320 : Olivia.ItemConcoct.PreviewWidth;
    var height = this.fittingHeight(3);
    var x = Olivia.ItemConcoct.PreviewX === 'auto' ? 0 : Olivia.ItemConcoct.PreviewX;
    var y = Olivia.ItemConcoct.PreviewY === 'auto' ? 0 : Olivia.ItemConcoct.PreviewY;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.clearItems();
    this.hide();
};

Window_ItemConcoctPreview.prototype.scaleRate = function() {
    return Olivia.ItemConcoct.PreviewScale;
};

Window_ItemConcoctPreview.prototype.lineHeight = function() {
    return Math.round(Window_Base.prototype.lineHeight.call(this) * this.scaleRate());
};

Window_ItemConcoctPreview.prototype.standardFontSize = function() {
    return Math.round(Window_Base.prototype.standardFontSize.call(this) * this.scaleRate());
};

Window_ItemConcoctPreview.prototype.standardPadding = function() {
    return Math.round(Window_Base.prototype.standardPadding.call(this) * this.scaleRate());
};

Window_ItemConcoctPreview.prototype.textPadding = function() {
    return Math.round(Window_Base.prototype.textPadding.call(this) * this.scaleRate());
};

Window_ItemConcoctPreview.prototype.autoPosition = function(baseWindow, helpWindow) {
    if (Imported.YEP_BattleEngineCore && Olivia.OctoBattle && Olivia.OctoBattle.SideBattleUI && Olivia.OctoBattle.SideBattleUI.Enabled) {
        if (Olivia.ItemConcoct.PreviewX === 'auto') {
            this.x = Math.min(Graphics.boxWidth - this.width, baseWindow.x - Math.round(this.width / 2));
        }
        if (Olivia.ItemConcoct.PreviewY === 'auto') {
            this.y = Math.max(0, baseWindow.y - this.height - this.lineHeight());
        }
    } else if (Imported.YEP_BattleEngineCore) {
        if (Olivia.ItemConcoct.PreviewX === 'auto') {
            this.x = 0;
        }
        if (Olivia.ItemConcoct.PreviewY === 'auto') {
            this.y = helpWindow.y + helpWindow.height;
        }
    } else {
        if (Olivia.ItemConcoct.PreviewX === 'auto') {
            this.x = 192;
        }
        if (Olivia.ItemConcoct.PreviewY === 'auto') {
            this.y = Graphics.boxHeight - 180;
        }
    }
};

Window_ItemConcoctPreview.prototype.clearItems = function() {
    this._item1 = undefined;
    this._item2 = undefined;
};

Window_ItemConcoctPreview.prototype.setItem1 = function(item) {
    this._item1 = item;
};

Window_ItemConcoctPreview.prototype.setItem2 = function(item) {
    this._item2 = item;
    this.refresh();
};

Window_ItemConcoctPreview.prototype.refresh = function() {
    this.contents.clear();
    this.drawHorzLine(this.lineHeight());
    if (this.meetShowFullInformationRequirements()) {
        this.drawFullInformation();
    } else {
        this.drawUnknownInformation();
    }
};

Window_ItemConcoctPreview.prototype.meetShowFullInformationRequirements = function() {
    if (!this._item1 || !this._item2) {
        return false;
    } else if (Olivia.ItemConcoct.PreviewShowUnk) {
        return true;
    } else if (BattleManager.isBattleTest() && Olivia.ItemConcoct.PreviewShowBattleTest) {
        return true;
    } else {
        return $gameSystem.isItemConcoctComboRevealed(this._item1, this._item2);
    }
};

Window_ItemConcoctPreview.prototype.drawHorzLine = function(y) {
    this.changePaintOpacity(false);
    this.contents.fillRect(0, y + 2, this.contentsWidth(), 2, this.normalColor());
    this.changePaintOpacity(true);
};

Window_ItemConcoctPreview.prototype.drawFullInformation = function() {
    var effectItem = $dataItems[this._item1._itemConcoctEffect[this._item1._itemConcoctList.indexOf(this._item2.id)]];
    var x = this.textPadding();
    var width = this.contentsWidth() - this.textPadding() * 2;
    this.drawItemName(effectItem, x, 0, width);
    this.drawTextEx(effectItem.description, x, this.lineHeight());
};

Window_ItemConcoctPreview.prototype.drawUnknownInformation = function() {
    var x = this.textPadding();
    this.drawIcon(Olivia.ItemConcoct.PreviewUnkIcon, x, 0);
    x += Math.round(Window_Base._iconWidth * this.scaleRate()) + 4;
    var width = this.contentsWidth() - this.textPadding() * 2;
    this.drawText(Olivia.ItemConcoct.PreviewUnkName, x, 0, width);
    this.drawTextEx(Olivia.ItemConcoct.PreviewUnkHelp, this.textPadding(), this.lineHeight());
};

Window_ItemConcoctPreview.prototype.drawIcon = function(iconIndex, x, y) {
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    var rate = this.scaleRate();
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, Math.round(pw * rate), Math.round(ph * rate));
};

Window_ItemConcoctPreview.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Math.round(Window_Base._iconWidth * this.scaleRate()) + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};





























