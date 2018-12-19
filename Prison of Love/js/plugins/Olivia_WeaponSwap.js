//=============================================================================
// Olivia Engine - Weapon Swap - for RPG Maker MV version 1.6.1
// Olivia_WeaponSwap.js
//=============================================================================
 /*:
 * @plugindesc <WeaponSwap> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that will give your game's actors the function
 * to swap weapons in the middle of the fight. Up to one of each weapon type
 * can be equipped at a time and they can be switched out each turn. Swapping
 * weapons can let the player team adapt to certain situations better or giving
 * them the ability to hit certain weapon weaknesses in battle.
 *
 * This plugin changes both something inside battle and outside of battle.
 * The Attack command option can now have the weapon being used swapped by
 * pressing left or right (if that option is turned on). Some skills can also
 * automatically switch to a weapon when it starts being used.
 *
 * The other change is in the Equip menu. Instead of having only a single
 * weapon slot, there is now one weapon slot for each of the weapon types.
 * Each actor can equip a weapon of that type into those slots if they can use
 * those weapon types.
 *
 * There will be a warning though. This feature does not work with the
 * Dual Wield system so it is disabled in order to be able to swap weapons.
 *
 * Some plugin parameters require your attention. Please read through and
 * configure them to customize weapon swapping for your game.
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Battle Control: 
 *
 * Swap Command: How command for how Weapon Swap is displayed
 *
 * Show Command?: Show the Weapon Swap Command in the Actor Command Window?
 * Turn this on if you are making your game for mouse control because there
 * is no other way to switch weapons without using the arrow keys.
 *
 * Use Arrow Swapping?: Use Arrow Keys to control weapon swapping? If on,
 * then pressing left or right will switch the weapon currently equipped
 * in the order of the Weapon Types list in the Database's Types tab.
 *
 * Show Swap Arrows?: Shows arrow sprites next to the Attack command to tell
 * the player that pressing Left or Right here can have an effect.
 *
 * Battle Test Weapons: During battle test, equip each party member with one of
 * each weapon type. The weapon selected will be the first available one in the
 * database unless they already have that weapon equipped.
 *
 * Visuals:
 * 
 * Show Battle Icons: Show icons of currently equipped weapons in battle?
 * This will show the icon next to the Attack command, making it easier for
 * the player to know which weapon the actor has currently equipped.
 *
 * Show Battle Action: Show animation of actor switching weapons? This is
 * for sideview only. When weapon switching is done during Attack switching,
 * the actor will perform an attack motion to display the weapon it is 
 * currently equipped with.
 *
 * Extend Equip Stat Window: If you are using Yanfly's Equip Core, this will
 * extend the stat compare window to have Hit Accuracy, Evasion, and Critical.
 *
 *
 *
 * --------
 * Notetags
 * --------
 * 
 * Skill and Item Notetags:
 *
 * <Switch to Weapon: x>
 * <Switch to Weapon: text>
 * When the actor uses this skill or item, the actor will switch to this
 * weapon if it is equipped when the skill cost is paid. x is the weapon
 * type ID and text is the weapon name. If you use the weapon name, type
 * it out exactly since it is case sensitive. This notetag does not make
 * the weapon a requirement. To make it a requirement, use the database's
 * "Required Weapon" dropdown lists to enforce the requirement.
 *
 *
 *
 * Skill Notetags:
 *
 * <Require Any Weapon>
 * Requires any kind of weapon to be equipped in order to use it.
 *
 * <Require Weapon Types: x>
 * <Require Weapon Types: x, x, x>
 * Insert multiple x to add more weapon types. All of the weapon types must
 * be equipped in order for this skill to be used.
 *
 *
 *
 * ---------------
 * Action Sequence
 * ---------------
 *
 * If you are using YEP Battle Engine Core, there is an action sequence that
 * lets you switch weapons for the actor in the middle of an action sequence:
 *
 * Weapon Swap: targets, x
 * or
 * Weapon Swap: targets, text
 * or
 * Swap Weapon: targets, x
 * or
 * Swap Weapon: targets, text
 *
 * Use x with the weapon type ID in the Database Type tab. Or use text and
 * replace it with the name of the weapon type. If you use the name of the
 * weapon type, type it out exactly as it is spelled because it is case
 * sensitive.
 *
 *
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
 * This plugin is compatible with the following plugins:
 *
 * - YEP Core Engine
 * - YEP Battle Engine Core
 * - YEP Action Sequence Packs 1, 2, 3
 * - YEP Animated Sideview Enemies
 * - YEP Buffs & States Core
 * - YEP Damage Core
 * - YEP Element Core
 * - YEP Item Core
 * - YEP Equip Core
 *
 * Place this plugin under those in the Plugin Manager list.
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
 * @param Weapon Swap Battle Control
 * @text Battle Control
 * @parent Weapon Swap System 
 *
 * @param Weapon Swap Command
 * @text Swap Command
 * @parent Weapon Swap Battle Control
 * @desc How command for how Weapon Swap is displayed
 * @default WpnSwap
 *
 * @param Weapon Swap Show Command
 * @text Show Command?
 * @parent Weapon Swap Command
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the Weapon Swap Command in the Actor Command Window?
 * @default false
 *
 * @param Weapon Swap Arrow Buttons
 * @text Use Arrow Swapping?
 * @parent Weapon Swap Battle Control
 * @type boolean
 * @on On
 * @off Off
 * @desc Use Arrow Keys to control weapon swapping?
 * @default true
 *
 * @param Weapon Swap Show Arrows
 * @text Show Swap Arrows?
 * @parent Weapon Swap Battle Control
 * @type boolean
 * @on On
 * @off Off
 * @desc Show arrows on the attack command?
 * @default true
 *
 * @param Weapon Swap Battle Test
 * @text Battle Test Weapons
 * @parent Weapon Swap Battle Control
 * @type boolean
 * @on On
 * @off Off
 * @desc In battle test, give all party members a copy of each weapon?
 * @default true
 *
 * @param Weapon Swap Visual
 * @text Visuals
 * @parent  Weapon Swap System
 *
 * @param Weapon Swap Battle Icons
 * @text Show Battle Icons
 * @parent Weapon Swap Visual
 * @type boolean
 * @on On
 * @off Off
 * @desc Show icons of currently equipped weapons in battle?
 * @default true
 *
 * @param Weapon Swap Battle Action
 * @text Show Battle Action
 * @parent Weapon Swap Visual
 * @type boolean
 * @on On
 * @off Off
 * @desc Show animation of actor switching weapons? Sideview only
 * @default true
 *
 * @param Weapon Swap Equip Core Window
 * @text Extend Equip Stat Window
 * @parent Weapon Swap Visual
 * @type boolean
 * @on On
 * @off Off
 * @desc Require Yanfly's Equip Core. Extend the stat compare window
 * @default true
 *
 * @param Weapon Swap Text Hit
 * @text Text Hit Rate
 * @parent Weapon Swap Equip Core Window
 * @desc How to display this extra parameter
 * @default ACC
 *
 * @param Weapon Swap Text Evasion
 * @text Text Evasion
 * @parent Weapon Swap Equip Core Window
 * @desc How to display this extra parameter
 * @default EVA
 *
 * @param Weapon Swap Text Critical
 * @text Text Critical
 * @parent Weapon Swap Equip Core Window
 * @desc How to display this extra parameter
 * @default CRI
 *
 * @param
 * @param
 *
 */
//=============================================================================

var Imported = Imported || {};
Imported.Olivia_OctoBattle = true;

var Olivia = Olivia || {};
Olivia.OctoBattle = Olivia.OctoBattle || {};

var parameters = $plugins.filter(function(p) { return p.description.contains('<WeaponSwap>') })[0].parameters;

Olivia.OctoBattle.WeaponSwap = {
    Enabled: eval(parameters['Weapon Swap System']),
    // Battle Control
    WpnSwapCmd:    String(parameters['Weapon Swap Command']),
    WpnSwapShow:   eval(parameters['Weapon Swap Show Command']),
    WpnSwapArrows: eval(parameters['Weapon Swap Arrow Buttons']),
    ShowArrows:    eval(parameters['Weapon Swap Show Arrows'] || 'true'),
    WpnBattleTest: eval(parameters['Weapon Swap Battle Test'] || 'true'),
    // Visuals
    ShowIcons:    eval(parameters['Weapon Swap Battle Icons']),
    BattleAction: eval(parameters['Weapon Swap Battle Action']),
    ExtraLines:   eval(parameters['Weapon Swap Equip Core Window'] || 'true'),
    TextHit:      String(parameters['Weapon Swap Text Hit'] || 'ACC'),
    TextEva:      String(parameters['Weapon Swap Text Evasion'] || 'EVA'),
    TextCri:      String(parameters['Weapon Swap Text Critical'] || 'CRI')
};

Olivia.OctoBattle.Weapon = Olivia.OctoBattle.Weapon || {};

//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages battle progress.

if (Imported.YEP_BattleEngineCore) {

Olivia.OctoBattle.Weapon.___BattleManager_processActionSequence___ = BattleManager.processActionSequence;
BattleManager.processActionSequence = function(actionName, actionArgs) {
    if (actionName === 'WEAPON SWAP' || actionName === 'SWAP WEAPON') {
      return this.actionWeaponSwap(actionArgs);
    }
    return Olivia.OctoBattle.Weapon.___BattleManager_processActionSequence___.call(this, actionName, actionArgs);
}

BattleManager.actionWeaponSwap = function(actionArgs) {
    var targets =
      this.makeActionTargets(actionArgs[0]).filter(Yanfly.Util.onlyUnique);
    var weapon = actionArgs[1];
    if ($dataSystem.weaponTypes.contains(weapon)) {
        var wType = $dataSystem.weaponTypes.indexOf(weapon);
    } else {
        var wType = parseInt(weapon);
    }
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        if (!!target && target.isActor()) {
            target.switchToWeaponType(wType);
        }
    }
};

}

//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.

Olivia.OctoBattle.Weapon.___Game_BattlerBase_paySkillCost___ = Game_BattlerBase.prototype.paySkillCost;
Game_BattlerBase.prototype.paySkillCost = function(skill) {
    Olivia.OctoBattle.Weapon.___Game_BattlerBase_paySkillCost___.call(this, skill);
    if (this.isActor()) {
        this.applyWeaponSwapOnCost(skill);
    }
};

Olivia.OctoBattle.Weapon.___Game_BattlerBase_meetsSkillConditions___ = Game_BattlerBase.prototype.meetsSkillConditions;
Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
    if (this.failsToMeetSkillConditionRequireAnyWeapon(skill)) {
        return false;
    } else if (this.failsToMeetSkillConditionRequireWeaponTypes(skill)) {
        return false;
    } else {
        return Olivia.OctoBattle.Weapon.___Game_BattlerBase_meetsSkillConditions___.call(this, skill);
    }
};

Game_BattlerBase.prototype.failsToMeetSkillConditionRequireAnyWeapon = function(skill) {
    return skill.note.match(/<Require Any Weapon>/i) && this.isActor() && !this.equips()[0];
};

Game_BattlerBase.prototype.failsToMeetSkillConditionRequireWeaponTypes = function(skill) {
    if (this.isEnemy()) {
        return false;
    } else if (Olivia.OctoBattle.WeaponSwap.Enabled) {
        if (skill.note.match(/<Require Weapon Types:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
            var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
            for (var i = 0; i < array.length; i++) {
                var wtypeId = array[i];
                if (!this.isWtypeEquipped(wtypeId)) {
                    return true;
                }
            }
        }
    }
    return false;
};

//-----------------------------------------------------------------------------
// Game_Actor
//
// The game object class for an actor.

Olivia.OctoBattle.Weapon.___Game_Actor_initEquips___ = Game_Actor.prototype.initEquips;
Game_Actor.prototype.initEquips = function(equips) {
    Olivia.OctoBattle.Weapon.___Game_Actor_initEquips___.call(this, equips);
    this.initializeWeaponSwap();
};

Game_Actor.prototype.initializeWeaponSwap = function() {
    this._usedWeaponSlot = 0;
    this._swapWeapons = [];
    for (var i = 0; i < $dataSystem.weaponTypes.length; i++) {
        if (this.isEquipWtypeOk(i)) {
            this._usedWeaponSlot = this._usedWeaponSlot || i;
        }
        this._swapWeapons.push(0);
    }
    var weapon = this.weapons()[0];
    if (!!weapon) {
        var index = weapon.wtypeId;
        this._swapWeapons[index] = weapon.id;
    }
};

Game_Actor.prototype.isDualWield = function() {
    return false;
};

Game_Actor.prototype.isWtypeEquipped = function(wtypeId) {
    if (this._swapWeapons === undefined) {
        this.initializeWeaponSwap();
    }
    return this._swapWeapons[wtypeId] > 0;
};

Game_Actor.prototype.getSwapWeapons = function() {
    if (this._swapWeapons === undefined) {
        this.initializeWeaponSwap();
    }
    var weapons = [];
    for (var i = 1; i < this._swapWeapons.length; i++) {
        weaponId = this._swapWeapons[i];
        weapons.push($dataWeapons[weaponId]);
    }
    return weapons;
};

Game_Actor.prototype.getFirstSwapWeapon = function() {
    if (this._swapWeapons === undefined) {
        this.initializeWeaponSwap();
    }
    for (var i = 1; i < this._swapWeapons.length; i++) {
        weaponId = this._swapWeapons[i];
        if (weaponId > 0) {
            return $dataWeapons[weaponId];
        }
    }
    return null;
};

Game_Actor.prototype.setSwapWeaponSlot = function(index, id) {
    if (this._swapWeapons === undefined) {
        this.initializeWeaponSwap();
    }
    this._swapWeapons[index] = id;
};

Olivia.OctoBattle.Weapon.___Game_Actor_changeEquip___ = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function(slotId, item) {
    if (slotId === 0) {
        this.changeWeapon(item);
    } else {
        Olivia.OctoBattle.Weapon.___Game_Actor_changeEquip___.call(this, slotId, item);
    }
};

Game_Actor.prototype.changeWeapon = function(weapon) {
    var currentWeapon = this.weapons()[0];
    if (!!weapon) {
        this.switchToWeaponType(weapon.wtypeId, false);
        currentWeapon = this.weapons()[0];
        var index = weapon.wtypeId;
        if (!!currentWeapon && currentWeapon.wtypeId === weapon.wtypeId) {
            this.tradeItemWithParty(weapon, currentWeapon);
        } else {
            this.tradeItemWithParty(weapon, null);
        }
        this.setSwapWeaponSlot(index, weapon.id);
        this._usedWeaponSlot = index;
        this._equips[0].setObject(weapon);
    } else if (!!currentWeapon) {
        var index = currentWeapon.wtypeId;
        this.setSwapWeaponSlot(index, 0);
        this.tradeItemWithParty(null, currentWeapon);
        this._equips[0].setObject(null);
        var firstSwapWeapon = this.getFirstSwapWeapon();
        if (firstSwapWeapon) {
            this._usedWeaponSlot = firstSwapWeapon.wtypeId;
        } else {
            this._usedWeaponSlot = 1;
        }
    }
    this.refresh();
};

Game_Actor.prototype.switchToWeaponType = function(wtype, animation) {
    var weapon = $dataWeapons[this._swapWeapons[wtype]];
    this._equips[0].setObject(weapon);
    this._usedWeaponSlot = wtype;
    this.refresh();
    if ($gameParty.inBattle() && animation && Olivia.OctoBattle.WeaponSwap.BattleAction) {
        this.performAttack();
    }
};

Game_Actor.prototype.swapWeaponBattle = function(direction) {
    if (this._swapWeapons === undefined) {
        this.initializeWeaponSwap();
    }
    var slot = this._usedWeaponSlot;
    while (true) {
        if (direction === 'right') {
            slot += 1;
            if (slot >= $dataSystem.weaponTypes.length) {
                slot = 1;
            }
        } else {
            slot -= 1;
            if (slot <= 0) {
              slot = $dataSystem.weaponTypes.length - 1;
            }
        }
        if (this._swapWeapons[slot] > 0) {
            this._usedWeaponSlot = slot;
            this.switchToWeaponType(slot, true)
            break;
        }
        if (slot === this._usedWeaponSlot) {
            break;
        }
    }
};

Game_Actor.prototype.applyWeaponSwapOnCost = function(skill) {
    if (skill.note.match(/<Switch to Weapon: (\d+)>/i)) {
        var wtype = parseInt(RegExp.$1).clamp(1, $dataSystem.weaponTypes.length - 1);
    } else if (skill.note.match(/<Switch to Weapon: (.*)>/i)) {
        var name = String(RegExp.$1);
        var wtype = $dataSystem.weaponTypes.indexOf(name)
        if (wtype > 0) {
            this.switchToWeaponType(wtype);
        }
    }
};

Olivia.OctoBattle.Weapon.___Game_Actor_releaseUnequippableItems___ = Game_Actor.prototype.releaseUnequippableItems;
Game_Actor.prototype.releaseUnequippableItems = function(forcing) {
    if (this._swapWeapons === undefined) {
        this.initializeWeaponSwap();
    }
    Olivia.OctoBattle.Weapon.___Game_Actor_releaseUnequippableItems___.call(this, forcing);
    for (var i = 1; i < this._swapWeapons.length; i++) {
        var weaponId = this._swapWeapons[i];
        if (weaponId > 0) {
            var weapon = $dataWeapons[weaponId];
            if (!this.canEquip(weapon)) {
                if (!forcing) {
                    this.tradeItemWithParty(null, weapon);
                }
                this._swapWeapons[i] = 0;
            }
        }
    }
};

Game_Actor.prototype.optimizeEquipments = function() {
    var maxSlots = this.equipSlots().length;
    this.clearEquipments();
    for (var i = 1; i < maxSlots; i++) {
        if (this.isEquipChangeOk(i)) {
            this.changeEquip(i, this.bestEquipItem(i));
        }
    }
    this.optimizeWeapons();
};

Game_Actor.prototype.optimizeWeapons = function() {
    var currentWeaponSlot = this._usedWeaponSlot;
    for (var wtypeId = 1; wtypeId < $dataSystem.weaponTypes.length; wtypeId++) {
        if (this.isEquipWtypeOk(wtypeId)) {
            this.changeWeapon(this.bestEquipWeapon(wtypeId));
        }
    }
    this._usedWeaponSlot = currentWeaponSlot;
};

Game_Actor.prototype.bestEquipWeapon = function(wtypeId) {
    var items = $gameParty.weapons().filter(function(weapon) {
        return weapon.wtypeId === wtypeId && this.isEquipWtypeOk(wtypeId);
    }, this);
    var bestItem = null;
    var bestPerformance = -1000;
    for (var i = 0; i < items.length; i++) {
        var performance = this.calcEquipItemPerformance(items[i]);
        if (performance > bestPerformance) {
            bestPerformance = performance;
            bestItem = items[i];
        }
    }
    return bestItem;
};

Game_Actor.prototype.clearEquipments = function() {
    var maxSlots = this.equipSlots().length;
    for (var i = 1; i < maxSlots; i++) {
        if (this.isEquipChangeOk(i)) {
            this.changeEquip(i, null);
        }
    }
    this.clearWeapons();
};

Game_Actor.prototype.clearWeapons = function() {
    if (Imported.YEP_EquipCore && Yanfly.Param.EquipNonRemove.contains(1)) {
        return;
    }
    var slotId = 0;
    for (var wtypeId = 1; wtypeId < $dataSystem.weaponTypes.length; wtypeId++) {
        if (this.isEquipWtypeOk(wtypeId)) {
            slotId = slotId || wtypeId;
            this.switchToWeaponType(wtypeId, false);
            this.changeWeapon(null);
        }
    }
    this._usedWeaponSlot = slotId;
};

//-----------------------------------------------------------------------------
// Game_Party
//
// The game object class for the party. Information such as gold and items is
// included.

if (Olivia.OctoBattle.WeaponSwap.WpnBattleTest) {

Olivia.OctoBattle.Weapon.___Game_Party_setupBattleTestMembers___ = Game_Party.prototype.setupBattleTestMembers;
Game_Party.prototype.setupBattleTestMembers = function() {
    Olivia.OctoBattle.Weapon.___Game_Party_setupBattleTestMembers___.call(this);
    var weapons = this.createBattleTestWeaponTypes();
    var members = this.members();
    for (var i = 0; i < members.length; i++) {
        member = members[i];
        if (!!member) {
            for (var w = 1; w < weapons.length; w++) {
                if (!member.isWtypeEquipped(w)) {
                    member.changeEquip(0, weapons[w]);
                }
            }
            if (!!member.getFirstSwapWeapon()) {
                member.switchToWeaponType(member.getFirstSwapWeapon().wtypeId, false);
            } else {
                member.switchToWeaponType(0, false);
            }
        }
    }
};

Game_Party.prototype.createBattleTestWeaponTypes = function() {
    var weapons = [null];
    for (var wtypeId = 1; wtypeId < $dataSystem.weaponTypes.length; wtypeId++) {
        weapons.push(this.battleTestGetFirstOfWtype(wtypeId));
    }
    return weapons;
};

Game_Party.prototype.battleTestGetFirstOfWtype = function(wtypeId) {
    for (var id = 1; id < $dataWeapons.length; id++) {
        var weapon = $dataWeapons[id];
        if (!!weapon && weapon.wtypeId === wtypeId) {
            return weapon;
        }
    }
    var message = 'You do not have a weapon made for weapon type ' + wtypeId;
    SceneManager.stop();
    Graphics.printError('Weapon Swap Error', message);
    return null;
};

}

//-----------------------------------------------------------------------------
// Scene_Equip
//
// The scene class of the equipment screen.

Olivia.OctoBattle.Weapon.___Scene_Equip_onSlotOk___ = Scene_Equip.prototype.onSlotOk;
Scene_Equip.prototype.onSlotOk = function() {
    if (Imported.YEP_EquipCore) {
        this._itemWindow._slotId = -1;
        var slotId = this._slotWindow.index();
        this._itemWindow.setSlotId(slotId);
        Yanfly.Equip.Scene_Equip_onSlotOk.call(this);
        this._itemWindow.show();
    } else {
        Olivia.OctoBattle.Weapon.___Scene_Equip_onSlotOk___.call(this);
    }
};

Scene_Equip.prototype.onItemOk = function() {
    SoundManager.playEquip();
    var slotId = this._slotWindow.index();
    if (slotId < $dataSystem.weaponTypes.length - 1) {
        slotId = 0;
    } else {
        slotId -= $dataSystem.weaponTypes.length - 2;
    }
    this.actor().changeEquip(slotId, this._itemWindow.item());
    this._slotWindow.activate();
    this._slotWindow.refresh();
    this._itemWindow.deselect();
    this._itemWindow.refresh();
    this._statusWindow.refresh();
    if (Imported.YEP_EquipCore) {
        this._itemWindow.hide();
        this._statusWindow.refresh();
    }
};

//-----------------------------------------------------------------------------
// Scene_Battle
//
// The scene class of the battle screen.

Olivia.OctoBattle.Weapon.___Scene_Battle_createActorCommandWindow___ = Scene_Battle.prototype.createActorCommandWindow;
Scene_Battle.prototype.createActorCommandWindow = function() {
    Olivia.OctoBattle.Weapon.___Scene_Battle_createActorCommandWindow___.call(this);
    this._actorCommandWindow.setHandler('weaponSwap', this.commandWeaponSlot.bind(this));
};

Scene_Battle.prototype.commandWeaponSlot = function() {
    BattleManager.actor().swapWeaponBattle('right');
    this._actorCommandWindow.refresh();
    this._actorCommandWindow.activate();
};

//-----------------------------------------------------------------------------
// Sprite_WindowArrow
//
// The sprite class with a feature which displays animations.

function Sprite_WindowArrow() {
    this.initialize.apply(this, arguments);
}

Sprite_WindowArrow.prototype = Object.create(Sprite.prototype);
Sprite_WindowArrow.prototype.constructor = Sprite_WindowArrow;

Sprite_WindowArrow.prototype.initialize = function(parent, direction) {
    this._parent = parent;
    this._direction = direction;
    Sprite.prototype.initialize.call(this);
    this.createBitmap();
};

Sprite_WindowArrow.prototype.createBitmap = function() {
    this.bitmap = ImageManager.loadSystem('Window');
    this.bitmap.addLoadListener(this.setupBitmap.bind(this));
};

Sprite_WindowArrow.prototype.setupBitmap = function() {
    if (this._direction === 'left') {
        this.setFrame(120, 36, 24, 24);
        this.anchor.x = -0.1;
        this.x = 0;
    } else {
        this.setFrame(144, 36, 24, 24);
        this.anchor.x = 1.1;
        this.x = this._parent.width;
    }
    this.anchor.y = 0.5;
};

Sprite_WindowArrow.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateOpacity();
};

Sprite_WindowArrow.prototype.updateOpacity = function() {
    if (!this._parent.visible || this._parent.contentsOpacity < 255 || this._parent.openness < 255) {
        this.opacity = 0;
        this._currentIndex = -1;
    } else if (this._currentIndex !== this._parent.index()) {
        this._currentIndex = this._parent.index();
        var rect = this._parent.itemRect(this._parent.findSymbol('attack'));
        var y = rect.y + this._parent.standardPadding();
        if (y > 0 && y < (this._parent.height - this._parent.standardPadding() * 2)) {
            y += Math.round(this._parent.lineHeight() / 2);
            this.opacity = 255;
            this.y = y;
        } else {
            this.opacity = 0;
        }
    }
};

//-----------------------------------------------------------------------------
// Window_EquipSlot
//
// The window for selecting an equipment slot on the equipment screen.

Window_EquipSlot.prototype.maxItems = function() {
    if (!!this._actor) {
        var slots = this._actor.equipSlots().length - 1;
        slots += $dataSystem.weaponTypes.length - 1;
        return slots;
    } else {
        return 0;
    }
};

Olivia.OctoBattle.Weapon.___Window_EquipSlot_slotName___ = Window_EquipSlot.prototype.slotName;
Window_EquipSlot.prototype.slotName = function(index) {
    if (index < $dataSystem.weaponTypes.length - 1) {
        return $dataSystem.weaponTypes[index + 1];
    } else {
        index -= $dataSystem.weaponTypes.length - 2;
    }
    return Olivia.OctoBattle.Weapon.___Window_EquipSlot_slotName___.call(this, index);
};

Olivia.OctoBattle.Weapon.___Window_EquipSlot_isEnabled___ = Window_EquipSlot.prototype.isEnabled;
Window_EquipSlot.prototype.isEnabled = function(index) {
    if (index < $dataSystem.weaponTypes.length - 1) {
        index += 1;
        return this._actor.isEquipWtypeOk(index);
    } else {
        index -= $dataSystem.weaponTypes.length - 2;
        return Olivia.OctoBattle.Weapon.___Window_EquipSlot_isEnabled___.call(this, index);
    }
};

Window_EquipSlot.prototype.item = function() {
    if (!!this._actor) {
        var index = this.index();
        return this.getItemFromIndex(index);
    } else {
        return null;
    }
    return this._actor ? this._actor.equips()[this.index()] : null;
};

Window_EquipSlot.prototype.drawItem = function(index) {
    if (Imported.YEP_EquipCore) {
        this.drawItemWeaponSwapEquipCore(index);
    } else {
        this.drawItemWeaponSwapBase(index);
    }
};

Window_EquipSlot.prototype.getItemFromIndex = function(index) {
    if (index < $dataSystem.weaponTypes.length - 1) {
        return this._actor.getSwapWeapons()[index];
    } else {
        index -= $dataSystem.weaponTypes.length - 2;
        return this._actor.equips()[index];
    }
}

Window_EquipSlot.prototype.drawItemWeaponSwapEquipCore = function(index) {
    if (!this._actor) return;
    var rect = this.itemRectForText(index);
    this.changeTextColor(this.systemColor());
    this.changePaintOpacity(this.isEnabled(index));
    var ww1 = this._nameWidth;
    this.drawText(this.slotName(index), rect.x, rect.y, ww1);
    var ww2 = rect.width - ww1;
    var item = this.getItemFromIndex(index)
    if (item) {
        this.drawItemName(item, rect.x + ww1, rect.y, ww2);
    } else if (this.isEnabled(index)) {
        this.drawEmptySlot(rect.x + ww1, rect.y, ww2);
    }
    this.changePaintOpacity(true);
};

Window_EquipSlot.prototype.drawItemWeaponSwapBase = function(index) {
    if (this._actor) {
        var rect = this.itemRectForText(index);
        this.changeTextColor(this.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
        this.drawText(this.slotName(index), rect.x, rect.y, 138, this.lineHeight());
        this.drawItemName(this.getItemFromIndex(index), rect.x + 138, rect.y);
        this.changePaintOpacity(true);
    }
};

Olivia.OctoBattle.Weapon.___Window_EquipSlot_updateHelp___ = Window_EquipSlot.prototype.updateHelp;
Window_EquipSlot.prototype.updateHelp = function() {
    if (this._statusWindow) {
        var actor = JsonEx.makeDeepCopy(this._actor);
        if (this.index() < $dataSystem.weaponTypes.length - 1) {
            var item = this._actor.getSwapWeapons()[this.index()];
        } else {
            var item = null;
        }
        actor.forceChangeEquip(0, item);
        this._statusWindow.setActor(actor);
    }
    Olivia.OctoBattle.Weapon.___Window_EquipSlot_updateHelp___.call(this);
    if (this._statusWindow) {
        this._statusWindow.setTempActor(null);
    }
};

//-----------------------------------------------------------------------------
// Window_EquipItem
//
// The window for selecting an equipment item on the equipment screen.

Olivia.OctoBattle.Weapon.___Window_EquipItem_initialize___ = Window_EquipItem.prototype.initialize;
Window_EquipItem.prototype.initialize = function(x, y, width, height) {
    this._weaponTypeId = 0;
    Olivia.OctoBattle.Weapon.___Window_EquipItem_initialize___.call(this, x, y, width, height);
};

Olivia.OctoBattle.Weapon.___Window_EquipItem_setSlotId___ = Window_EquipItem.prototype.setSlotId;
Window_EquipItem.prototype.setSlotId = function(slotId) {
    if (slotId < $dataSystem.weaponTypes.length - 1) {
        weaponTypeId = slotId + 1;
        slotId = 0;
        if (this._weaponTypeId !== weaponTypeId) {
            this._slotId = 0;
            this._weaponTypeId = weaponTypeId;
            this.refresh();
            this.resetScroll();
            return;
        }
    } else {
        slotId -= $dataSystem.weaponTypes.length - 2;
        this._weaponTypeId = 0;
    }
    if (Imported.YEP_EquipCore) {
        Yanfly.Equip.Window_EquipItem_setSlotId.call(this, slotId);
    } else {
        Olivia.OctoBattle.Weapon.___Window_EquipItem_setSlotId___.call(this, slotId);
    }
};

Olivia.OctoBattle.Weapon.___Window_EquipItem_includes___ = Window_EquipItem.prototype.includes;
Window_EquipItem.prototype.includes = function(item) {
    if (Olivia.OctoBattle.Weapon.___Window_EquipItem_includes___.call(this, item)) {
        if (!!item && this._slotId <= 0) {
            return this._weaponTypeId === item.wtypeId;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

Window_EquipItem.prototype.updateHelp = function() {
    Window_ItemList.prototype.updateHelp.call(this);
    if (!!this._actor && this._statusWindow) {
        var actor = JsonEx.makeDeepCopy(this._statusWindow._actor);
        actor.forceChangeEquip(this._slotId, this.item());
        this._statusWindow.setTempActor(actor);
    }
};

//-----------------------------------------------------------------------------
// Window_ActorCommand
//
// The window for selecting an actor's action on the battle screen.

Olivia.OctoBattle.Weapon.___Window_ActorCommand_initialize___ = Window_ActorCommand.prototype.initialize;
Window_ActorCommand.prototype.initialize = function() {
    Olivia.OctoBattle.Weapon.___Window_ActorCommand_initialize___.call(this);
    if (Olivia.OctoBattle.WeaponSwap.ShowArrows) {
        this.createWeaponArrowSprites();
    }
};

Window_ActorCommand.prototype.createWeaponArrowSprites = function() {
    this._weaponLeftArrowSprite = new Sprite_WindowArrow(this, 'left');
    this.addChild(this._weaponLeftArrowSprite);
    this._weaponRightArrowSprite = new Sprite_WindowArrow(this, 'right');
    this.addChild(this._weaponRightArrowSprite);
};

Olivia.OctoBattle.Weapon.___Window_ActorCommand_addAttackCommand___ = Window_ActorCommand.prototype.addAttackCommand;
Window_ActorCommand.prototype.addAttackCommand = function() {
    Olivia.OctoBattle.Weapon.___Window_ActorCommand_addAttackCommand___.call(this);
    if (Olivia.OctoBattle.WeaponSwap.WpnSwapShow) {
        this.addWeaponSwapCommand();
    }
};

Window_ActorCommand.prototype.addWeaponSwapCommand = function() {
    var name = Olivia.OctoBattle.WeaponSwap.WpnSwapCmd;
    this.addCommand(name, 'weaponSwap', this.isWeaponSwapEnabled());
};

Window_ActorCommand.prototype.isWeaponSwapEnabled = function() {
    if (this._actor.getFirstSwapWeapon()) {
        var count = 0;
        var weapons = this._actor.getSwapWeapons();
        for (var i = 0; i < weapons.length; i++) {
            var weapon = weapons[i];
            if (!!weapon) {
                count += 1;
                if (count >= 2) {
                    return true;
                }
            }
        }
    }
    return false;
};

Window_ActorCommand.prototype.drawItem = function(index) {
    if (Olivia.OctoBattle.WeaponSwap.ShowIcons) {
        this.drawWeaponIcon(index);
    }
    Window_Command.prototype.drawItem.call(this, index);
};

Window_ActorCommand.prototype.drawWeaponIcon = function(index) {
    if (this._list[index].symbol === 'attack') {
        var rect = this.itemRect(index);
        if (this.itemTextAlign() === 'left') {
            var x = rect.width - Window_Base._iconWidth - 2;
        } else {
            var x = rect.x + 2;
        }
        var weapon = this._actor.weapons()[0];
        if (!!weapon) {
            var icon = weapon.iconIndex;
        } else {
            var icon = 77;
        }
        this.drawIcon(icon, x, rect.y + 2);
    }
};

if (Olivia.OctoBattle.WeaponSwap.WpnSwapArrows) {

Window_ActorCommand.prototype.processCursorMove = function() {
    if (this.active && Input.isRepeated('right') && this.currentSymbol() === 'attack') {
        this._actor.swapWeaponBattle('right');
        SoundManager.playEquip();
        this.refresh();
    } else if (this.active && Input.isRepeated('left') && this.currentSymbol() === 'attack') {
        this._actor.swapWeaponBattle('left');
        SoundManager.playEquip();
        this.refresh();
    } else {
        Window_Command.prototype.processCursorMove.call(this);
    }
};

}

Window_ActorCommand.prototype.playOkSound = function() {
    if (this.currentSymbol() === 'weaponSwap') {
        SoundManager.playEquip();
    } else {
        Window_Command.prototype.playOkSound.call(this);
    }
};

//-----------------------------------------------------------------------------
// Window_ActorCommand
//
// From Yanfly's Equip Core

if (Imported.YEP_EquipCore && Olivia.OctoBattle.WeaponSwap.ExtraLines) {

Olivia.OctoBattle.Weapon.___Window_StatCompare_refresh___ = Window_StatCompare.prototype.refresh;
Window_StatCompare.prototype.refresh = function() {
    Olivia.OctoBattle.Weapon.___Window_StatCompare_refresh___.call(this);
    if (!!this._actor) {
        this.drawExtraParameters();
    }
};

Window_StatCompare.prototype.drawExtraParameters = function() {
    this.drawExtraParamItem('hit', 0, this.lineHeight() * 8);
    this.drawExtraParamItem('eva', 0, this.lineHeight() * 9);
    this.drawExtraParamItem('cri', 0, this.lineHeight() * 10);
};

Window_StatCompare.prototype.drawExtraParamItem = function(param, x, y) {
    this.drawDarkRect(x, y, this.contents.width, this.lineHeight());
    this.drawExtraParamItemName(y, param)
    this.drawCurrentExtraParam(y, param);
    this.drawRightArrow(y);
    if (this._tempActor) {
        this.drawNewExtraParam(y, param);
        this.drawExtraParamDifference(y, param);
    }
};

Window_StatCompare.prototype.drawExtraParamItemName = function(y, param) {
    if (param === 'hit') {
        var name = Olivia.OctoBattle.WeaponSwap.TextHit;
    } else if (param === 'eva') {
        var name = Olivia.OctoBattle.WeaponSwap.TextEva;
    } else if (param === 'cri') {
        var name = Olivia.OctoBattle.WeaponSwap.TextCri;
    }
    var x = this.textPadding();
    this.changeTextColor(this.systemColor());
    this.drawText(name, x, y, this._paramNameWidth);
};

Window_StatCompare.prototype.drawCurrentExtraParam = function(y, param) {
    if (param === 'hit') {
        var actorparam = Math.round(this._actor.hit * 100) + '%';
    } else if (param === 'eva') {
        var actorparam = Math.round(this._actor.eva * 100) + '%';
    } else if (param === 'cri') {
        var actorparam = Math.round(this._actor.cri * 100) + '%';
    }
    var x = this.contents.width - this.textPadding();
    x -= this._paramValueWidth * 2 + this._arrowWidth + this._bonusValueWidth;
    this.resetTextColor();
    this.drawText(actorparam, x, y, this._paramValueWidth, 'right');
};

Window_StatCompare.prototype.drawNewExtraParam = function(y, param) {
    if (param === 'hit') {
        var newValue = Math.round(this._tempActor.hit * 100);
        var diffvalue = newValue - Math.round(this._actor.hit * 100);
    } else if (param === 'eva') {
        var newValue = Math.round(this._tempActor.eva * 100);
        var diffvalue = newValue - Math.round(this._actor.eva * 100);
    } else if (param === 'cri') {
        var newValue = Math.round(this._tempActor.cri * 100);
        var diffvalue = newValue - Math.round(this._actor.cri * 100);
    }
    var x = this.contents.width - this.textPadding();
    x -= this._paramValueWidth + this._bonusValueWidth;
    var actorparam = newValue + '%';
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(actorparam, x, y, this._paramValueWidth, 'right');
};

Window_StatCompare.prototype.drawExtraParamDifference = function(y, param) {
    var x = this.contents.width - this.textPadding();
    x -= this._bonusValueWidth;
    if (param === 'hit') {
        var newValue = Math.round(this._tempActor.hit * 100);
        var diffvalue = newValue - Math.round(this._actor.hit * 100);
    } else if (param === 'eva') {
        var newValue = Math.round(this._tempActor.eva * 100);
        var diffvalue = newValue - Math.round(this._actor.eva * 100);
    } else if (param === 'cri') {
        var newValue = Math.round(this._tempActor.cri * 100);
        var diffvalue = newValue - Math.round(this._actor.cri * 100);
    }
    if (diffvalue === 0) return;
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    var text = diffvalue + '%';
    if (diffvalue > 0) {
      text = ' (+' + text + ')';
    } else {
      text = ' (' + text + ')';
    }
    this.drawText(text, x, y, this._bonusValueWidth, 'left');
};

}
































