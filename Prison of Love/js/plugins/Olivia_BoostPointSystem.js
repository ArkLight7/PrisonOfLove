//=============================================================================
// Olivia Engine - Boost Point System - for RPG Maker MV version 1.6.1
// Olivia_BoostPointSystem.js
//=============================================================================
 /*:
 * @plugindesc <BoostPoint> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that adds a Boost Point System to your game.
 * This is a newly added mechanic that allows actors and enemies to temporarily
 * power themselves up for the current turn by using a new resource called
 * Boost Points. Boost Points are acquired at the end of each turn if the
 * battler did not use Boost Points. While Boosted, actions can either deal
 * more damage, hit more times, make buff/debuff effects last longer, and more.
 * 
 * The Boost Point System plugin has many ways for you to customize it. Please
 * go through the plugin's parameters to adjust the settings for your game.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 *
 *
 * Battle Control:
 *
 * Boost Command: How command for how Boost is displayed
 *
 * Show Command?: Show the Boost Command in the Actor Command Window?
 *
 * Unboost Command: How command for how Unboost is displayed
 *
 * Show Command?: Show the Unboost Command in the Actor Command Window?
 *
 * Use L and R Buttons?: Use L and R buttons (Q and W keys) to control
 * boosting? Allows you to use Boost in any kind of battle menu without having
 * to use the specialized Boost and Unboost commands.
 *
 * Mechanics:
 *
 * Start Battle BP: The amount of BP battlers start each battle with
 *
 * Regen BP: The amount of BP battlers regenerate each turn
 *
 * Always Regenerate: Always regenerate BP. Otherwise, regenerate BP when BP
 * wasn't used that turn. Change this if you want the battlers to always have
 * BP regeneration
 *
 * Max Stored BP: The most amount of BP a battler can hold onto at any time
 *
 * Max Used BP: The most amount of BP a battler can use at once.
 *
 * Multipliers:
 *
 * Damage Multipliers: The multipliers for each BP used from 0 to max. This is
 * the percentage of the multiplier. This affects all skills and items with the 
 * <Boost Damage> notetag. For actions you want to deal more damage.
 *
 * Damage Addition: The addition for each BP used from 0 to max. This is the
 * integer version of the bonus.​ This affects all skills and items with the
 * <Boost Damage> notetag. For actions you want to deal more damage.​
 *
 * Repeat Multipliers: The multipliers for each BP used from 0 to max. This is
 * the percentage of the multiplier. This affects all skills and items with the
 * <Boost Repeats> notetag. For actions you want to hit more times.
 *
 * Repeat Addition: The addition for each BP used from 0 to max. This is the
 * integer version of the bonus.​ This affects all skills and items with the
 * <Boost Repeats> notetag. For actions you want to deal more damage.​
 *
 * Turn Multipliers: The multipliers for each BP used from 0 to max. This is
 * the percentage of the multiplier. This affects all skills and items with the
 * <Boost Turns> notetag. For actions that apply states, buffs, or debuffs.
 *
 * Turn Addition: The addition for each BP used from 0 to max. This is the
 * integer version of the bonus.​ This affects all skills and items with the
 * <Boost Turns> notetag. For actions you want to deal more damage.​
 *
 * Analyze Multipliers: The multipliers for each BP used from 0 to max. This is
 * the percentage of the multiplier. This affects all skills and items with the
 * <Boost Analyze> notetag. For the effects found in Weakness Display plugin.
 *
 * Analyze Addition: The addition for each BP used from 0 to max. This is the
 * integer version of the bonus.​ This affects all skills and items with the
 * <Boost Analyze> notetag. For actions you want to deal more damage.​
 *
 * BP Effect Multipliers: The multipliers for each BP used from 0 to max. This
 * is the percentage of the multiplier. This affects all skills and items with
 * the <Boost BP Effect> notetag. For the actions that alter user or target BP.
 *
 * BP Effect Addition: The addition for each BP used from 0 to max. This is the
 * integer version of the bonus.​ This affects all skills and items with the
 * <Boost BP> notetag. For actions you want to deal more damage.​
 *
 * Visuals:
 *
 * Animations: Choose animations to play when changing to different levels of BP
 *
 * Show Icons?: Show boost point icons in the party status menu in battle?
 *
 * Boost Icon: Icon ID used to represent a Boost slot
 *
 * Empty Icon: Icon ID used to represent an empty slot
 *
 * Small Boost Icons: Draw smaller icons?
 *
 * Boost Icon Size: Rate of how much to shrink the Boost icons
 *
 * Text: Text used to accompany small Boost icons
 *
 * Text Alignment: Text alignment used for the small Boost text
 *
 * 
 *
 * --------
 * Notetags
 * --------
 * 
 * Skill and Item Notetags:
 *
 * <Require x BP>
 * This will make the action require at least x BP to use for actors.
 * If for enemies, then at least x BP must be stored. This will not
 * make the enemies use the BP until you use the enemy BP use notetags.
 *
 * <Require > x BP>
 * <Require >= x BP>
 * <Require = x BP>
 * <Require <= x BP>
 * <Require < x BP>
 * This will make the action require greater than, greater than or equal to,
 * equal to exactly, less than or equal to, or less than x BP for the skill
 * to be used for actors. If for enemies, this will be the BP stored. This
 * will not make the enemies use the BP until you use the enemy BP use notetag.
 *
 * <Target BP: +x>
 * <Target BP: -x>
 * The target will gain or lose BP equal to x. This is a BP effect.
 *
 * <User BP: +x>
 * <User BP: -x>
 * The user will gain or lose BP equal to x. This is a BP effect.
 *
 * <Boost Damage>
 * If the action's user is using BP, this will boost the damage multiplier
 * for this action by the multiplier set in the plugin parameters.
 *
 * <Boost Turns>
 * If the action's user is using BP, this will boost the state/buff turns
 * for this action by the multiplier set in the plugin parameters.
 *
 * <Boost Repeats>
 * If the action's user is using BP, this will boost the number of repeated
 * hits for this action by the multiplier set in the plugin parameters.
 *
 * <Boost Analyze>
 * If the action's user is using BP, this will boost the number of weaknesses
 * revealed for this action by the multiplier set in the plugin parameters.
 *
 * <Boost BP Effect>
 * If the action's user is using BP, this will boost the number of BP effects
 * for this action by the multiplier set in the plugin parameters.
 *
 *
 *
 * Actor, Class, Enemy, Weapon, Armor, and State Notetags:
 *
 * <BP Battle Start: x%>
 * <BP Battle Start: +x>
 * <BP Battle Start: -x>
 * Changes the amount of BP the battler starts with in battle by a
 * percentage (x%) or by a flat amount (+x or -x);
 *
 * <BP Regen: x%>
 * <BP Regen: +x>
 * <BP Regen: -x>
 * Changes the amount of BP the battler regens each turn in battle by a
 * percentage (x%) or by a flat amount (+x or -x);
 *
 *
 * 
 *
 * Enemy Notetags:
 *
 * <Boost Skill x: Full>
 * <Boost skillname: Full>
 * Whenever the enemy uses skill x (or the skillname if you use that),
 * it will use as much BP as it can for the skill when it performs it.
 *
 * <Boost Skill x: At Least y>
 * <Boost skillname: At Least y>
 * Whenever the enemy uses skill x (or the skillname if you use that),
 * it will use BP after reaching y BP and use as much as it can.
 *
 * <Boost Skill x: At Most y>
 * <Boost skillname: At Most y>
 * Whenever the enemy uses skill x (or the skillname if you use that),
 * it will use as much BP as it can unless BP is over y BP.
 *
 *
 *
 *
 * State Notetags:
 *
 * <Boost Sealed>
 * If a battler is affected by a state with this notetag, they cannot boost.
 *
 *
 *
 * ----------
 * Text Codes
 * ----------
 *
 * You can put these in a skill or item's help description and it will change
 * the text depending on how much BP the current actor is using.
 *
 * \bpDamage[x]
 * This will apply BP damage multipliers to number x based on the
 * actor's currently used BP amount.
 *
 * \bpTurn[x]
 * This will apply BP turn multipliers to number x based on the
 * actor's currently used BP amount.
 *
 * \bpRepeat[x]
 * This will apply BP repeat multipliers to number x based on the
 * actor's currently used BP amount.
 *
 * \bpAnalyze[x]
 * This will apply BP analyze multipliers to number x based on the
 * actor's currently used BP amount.
 *
 * \bpEffect[x]
 * This will apply BP effect multipliers to number x based on the
 * actor's currently used BP amount.
 *
 * \bp[text]
 * The text inside the brackets won't appear unless
 * at least 1 BP is used.
 *
 * \bp0[text]
 * The text inside the brackets will only appear if
 * no BP is being used.
 *
 * \bp>x[text]
 * The text inside the brackets will only appear if
 * more than x BP is being used.
 *
 * \bp>=x[text]
 * The text inside the brackets will only appear if
 * more than or exactly x BP is being used.
 *
 * \bp=x[text]
 * The text inside the brackets will only appear if
 * exactly x BP is being used.
 *
 * \bp<=x[text]
 * The text inside the brackets will only appear if
 * less than or exactly x BP is being used.
 *
 * \bp<x[text]
 * The text inside the brackets will only appear if
 * less than x BP is being used.
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
 * @param Boost Point Battle Control
 * @text Battle Control
 * @parent Boost Point System 
 *
 * @param Boost Point Boost Command
 * @text Boost Command
 * @parent Boost Point Battle Control
 * @desc How command for how Boost is displayed
 * @default Boost
 *
 * @param Boost Point Boost Command Show
 * @text Show Command?
 * @parent Boost Point Boost Command
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the Boost Command in the Actor Command Window?
 * @default true
 *
 * @param Boost Point Unboost Command
 * @text Unboost Command
 * @parent Boost Point Battle Control
 * @desc How command for how Unboost is displayed
 * @default Unboost
 *
 * @param Boost Point Unboost Command Show
 * @text Show Command?
 * @parent Boost Point Unboost Command
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the Unboost Command in the Actor Command Window?
 * @default true
 *
 * @param Boost Point LR Buttons
 * @text Use L and R Buttons?
 * @parent Boost Point Battle Control
 * @type boolean
 * @on On
 * @off Off
 * @desc Use L and R buttons (Q and W keys) to control boosting?
 * @default true
 *
 * @param Boost Point Mechanics
 * @text Mechanics
 * @parent Boost Point System 
 *
 * @param Boost Point Start Battle
 * @text Start Battle BP
 * @parent Boost Point Mechanics
 * @type number
 * @desc The amount of BP battlers start each battle with
 * @default 1
 *
 * @param Boost Point Regen
 * @text Regen BP
 * @parent Boost Point Mechanics
 * @type number
 * @desc The amount of BP battlers regenerate each turn
 * @default 1
 *
 * @param Boost Point Always Regen
 * @text Always Regenerate
 * @parent Boost Point Regen
 * @type boolean
 * @on On
 * @off Off
 * @desc Always regenerate BP. Otherwise, regenerate BP when BP wasn't used that turn.
 * @default false
 *
 * @param Boost Point Maximum Stored
 * @text Max Stored BP
 * @parent Boost Point Mechanics
 * @type number
 * @desc The most amount of BP a battler can hold onto at any time
 * @default 5
 *
 * @param Boost Point Maximum Use
 * @text Max Used BP
 * @parent Boost Point Mechanics
 * @type number
 * @desc The most amount of BP a battler can use at once.
 * @default 3
 *
 * @param Boost Point Death Removal
 * @text Death Removal
 * @parent Boost Point Mechanics
 * @type boolean
 * @on On
 * @off Off
 * @desc Remove all BP upon death?
 * @default true
 *
 * @param Boost Point Death Regen
 * @text Death Regen
 * @parent Boost Point Mechanics
 * @type boolean
 * @on On
 * @off Off
 * @desc Can regen BP while dead or hidden?
 * @default false
 *
 * @param Boost Point Multipliers
 * @text Multipliers
 * @parent Boost Point System 
 *
 * @param Boost Point Damage Multipliers
 * @text Damage Multipliers
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The multipliers for each BP used from 0 to max. This is the percentage of the multiplier.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0"]
 *
 * @param Boost Point Damage Addition
 * @text Damage Addition
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The addition for each BP used from 0 to max. This is the integer version of the bonus.
 * @default ["0","0","0","0","0","0","0","0","0","0"]
 *
 * @param Boost Point Repeat Multipliers
 * @text Repeat Multipliers
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The multipliers for each BP used from 0 to max. This is the percentage of the multiplier.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0"]
 *
 * @param Boost Point Repeat Addition
 * @text Repeat Addition
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The addition for each BP used from 0 to max. This is the integer version of the bonus.
 * @default ["0","0","0","0","0","0","0","0","0","0"]
 *
 * @param Boost Point Turn Multipliers
 * @text Turn Multipliers
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The multipliers for each BP used from 0 to max. This is the percentage of the multiplier.
 * @default ["1.0","1.0","1.0","1.0","1.0","1.0","1.0","1.0","1.0","1.0"]
 *
 * @param Boost Point Turn Addition
 * @text Turn Addition
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The addition for each BP used from 0 to max. This is the integer version of the bonus.
 * @default ["0","2","4","6","8","10","12","14","16","18"]
 *
 * @param Boost Point Analyze Multipliers
 * @text Analyze Multipliers
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The multipliers for each BP used from 0 to max. This is the percentage of the multiplier.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0"]
 *
 * @param Boost Point Analyze Addition
 * @text Analyze Addition
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The addition for each BP used from 0 to max. This is the integer version of the bonus.
 * @default ["0","0","0","0","0","0","0","0","0","0"]
 *
 * @param Boost Point BP Effect Multipliers
 * @text BP Effect Multipliers
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The multipliers for each BP used from 0 to max. This is the percentage of the multiplier.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0"]
 *
 * @param Boost Point BP Addition
 * @text BP Addition
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The addition for each BP used from 0 to max. This is the integer version of the bonus.
 * @default ["0","0","0","0","0","0","0","0","0","0"]
 *
 * @param Boost Point Visuals
 * @text Visuals
 * @parent Boost Point System 
 *
 * @param Boost Point Animations
 * @text Animations
 * @parent Boost Point Visuals
 * @type animation[]
 * @desc Choose animations to play when changing to different levels of BP
 * @default ["12","13","15","14","2","51","52","53","67","66"]
 *
 * @param Boost Point Show Icons
 * @text Show Icons?
 * @parent Boost Point Visuals
 * @type boolean
 * @on On
 * @off Off
 * @desc Show boost point icons in the party status menu in battle?
 * @default true
 *
 * @param Boost Point Icon Filled
 * @text Boost Icon
 * @parent Boost Point Show Icons
 * @type number
 * @desc Icon ID used to represent a Boost slot
 * @default 160
 *
 * @param Boost Point Icon Empty
 * @text Empty Icon
 * @parent Boost Point Show Icons
 * @type number
 * @desc Icon ID used to represent an empty slot
 * @default 161
 *
 * @param Small Boost Icons
 * @parent Boost Point Show Icons
 * @type boolean
 * @on On
 * @off Off
 * @desc Draw smaller icons?
 * @default true
 *
 * @param Boost Icon Size
 * @parent Small Boost Icons
 * @desc Rate of how much to shrink the Boost icons
 * @default 0.5
 *
 * @param Boost Point Small Text
 * @text Text
 * @parent Small Boost Icons
 * @desc Text used to accompany small Boost icons
 * @default Boost
 *
 * @param Boost Point Small Text Align
 * @text Text Alignment
 * @parent Small Boost Icons
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment used for the small Boost text
 * @default right
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

var parameters = $plugins.filter(function(p) { return p.description.contains('<BoostPoint>') })[0].parameters;

Olivia.OctoBattle.BoostPoint = {
    Enabled: true,
    // Mechanics
    BP_StartBattle: Number(parameters['Boost Point Start Battle'] || 1),
    BP_TurnRegen:   Number(parameters['Boost Point Regen'] || 1),
    BP_AlwaysRegen: eval(parameters['Boost Point Always Regen']),
    BP_MaxStored:   Number(parameters['Boost Point Maximum Stored'] || 5),
    BP_MaxUse:      Number(parameters['Boost Point Maximum Use'] || 3),
    DeathRemoval:   eval(parameters['Boost Point Death Removal'] || 'true'),
    DeathRegen:     eval(parameters['Boost Point Death Regen'] || 'false'),
    // Multipliers
    BP_DmgMultiply:      JSON.parse(parameters['Boost Point Damage Multipliers'] || '["1","1","1","1","1","1","1","1","1","1"]'),
    BP_DmgAddition:      JSON.parse(parameters['Boost Point Damage Addition'] || '["0","0","0","0","0","0","0","0","0","0"]'),
    BP_RepMultiply:      JSON.parse(parameters['Boost Point Repeat Multipliers'] || '["1","1","1","1","1","1","1","1","1","1"]'),
    BP_RepAddition:      JSON.parse(parameters['Boost Point Repeat Addition'] || '["0","0","0","0","0","0","0","0","0","0"]'),
    BP_TurnMultiply:     JSON.parse(parameters['Boost Point Turn Multipliers'] || '["1","1","1","1","1","1","1","1","1","1"]'),
    BP_TurnAddition:     JSON.parse(parameters['Boost Point Turn Addition'] || '["0","0","0","0","0","0","0","0","0","0"]'),
    BP_AnalyzeMultiply:  JSON.parse(parameters['Boost Point Analyze Multipliers'] || '["1","1","1","1","1","1","1","1","1","1"]'),
    BP_AnalyzeAddition:  JSON.parse(parameters['Boost Point Analyze Addition'] || '["0","0","0","0","0","0","0","0","0","0"]'),
    BP_BPEffectMultiply: JSON.parse(parameters['Boost Point BP Effect Multipliers'] || '["1","1","1","1","1","1","1","1","1","1"]'),
    BP_BPEffectAddition: JSON.parse(parameters['Boost Point BP Addition'] || '["0","0","0","0","0","0","0","0","0","0"]'),
    // Visuals
    Animations: JSON.parse(parameters['Boost Point Animations']),
    ShowIcons:  eval(parameters['Boost Point Show Icons']),
    // Icons
    BoostIcon: Number(parameters['Boost Point Icon Filled'] || 160),
    EmptyIcon: Number(parameters['Boost Point Icon Empty'] || 161),
    SmallIcon: eval(parameters['Small Boost Icons']),
    IconSize:  Number(parameters['Boost Icon Size'] || 0.5),
    SmallText: String(parameters['Boost Point Small Text']),
    TextAlign: String(parameters['Boost Point Small Text Align']),
    // Battle Control
    BoostCmd:    String(parameters['Boost Point Boost Command']),
    BoostShow:   eval(parameters['Boost Point Boost Command Show']),
    UnboostCmd:  String(parameters['Boost Point Unboost Command']),
    UnboostShow: eval(parameters['Boost Point Unboost Command Show']),
    LRButtons:   eval(parameters['Boost Point LR Buttons'])
};

Olivia.OctoBattle.BP = Olivia.OctoBattle.BP || {};

//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages battle progress.

Olivia.OctoBattle.BP.___BattleManager_setup___ = BattleManager.setup;
BattleManager.setup = function(troopId, canEscape, canLose) {
    Olivia.OctoBattle.BP.___BattleManager_setup___.call(this, troopId, canEscape, canLose);
    $gameParty.setupBattleBP();
    $gameTroop.setupBattleBP();
};

Olivia.OctoBattle.BP.___BattleManager_processTurn___ = BattleManager.processTurn;
BattleManager.processTurn = function() {
    this.processEnemyUseBoost();
    Olivia.OctoBattle.BP.___BattleManager_processTurn___.call(this);
};

BattleManager.processEnemyUseBoost = function() {
    var subject = this._subject;
    var action = subject.currentAction();
    if (!!subject && subject.isEnemy() && !!action && action.isSkill() && subject.storedBP() > 0 && !subject.isBoostSealed()) {
        subject.processUseBP(action.item());
    }
};

//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.

Olivia.OctoBattle.BP.___Game_Action_numRepeats___ = Game_Action.prototype.numRepeats;
Game_Action.prototype.numRepeats = function() {
    var repeats = Olivia.OctoBattle.BP.___Game_Action_numRepeats___.call(this);
    repeats = this.applyBPRepeats(repeats);
    return Math.round(repeats);;
};

Game_Action.prototype.applyBPRepeats = function(repeats) {
    if (!!this.subject() && this.item().note.match(/<(?:BP|Boost) (?:Repeat|Repeats)>/i)) {
        var index = this.subject().useBP();
        var rate = this.subject().multiplierForBP('Repeat');
        repeats = Math.round(repeats * rate);
        repeats += this.subject().additionForBP('Repeat');
    }
    return repeats
};

Olivia.OctoBattle.BP.___Game_Action_applyGuard___ = Game_Action.prototype.applyGuard;
Game_Action.prototype.applyGuard = function(damage, target) {
    damage = this.applyBPDamage(damage);
    return Olivia.OctoBattle.BP.___Game_Action_applyGuard___.call(this, damage, target);
};

Game_Action.prototype.applyBPDamage = function(damage) {
    if (!!this.subject() && this.item().note.match(/<(?:BP|Boost) (?:DMG|Damage)>/i)) {
        var rate = this.subject().multiplierForBP('Damage');
        damage = Math.round(damage * rate);
        damage += this.subject().additionForBP('Damage');
    }
    return damage;
};

Olivia.OctoBattle.BP.___Game_Action_apply___ = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
    this.applyBPTurns(false);
    Olivia.OctoBattle.BP.___Game_Action_apply___.call(this, target);
    this.applyBPTurns(true);
};

Game_Action.prototype.applyBPTurns = function(reset) {
    if (!!this.subject() && this.item().note.match(/<(?:BP|Boost) (?:Turn|Turns)>/i)) {
        var rate = this.subject().multiplierForBP('Turn');
        $gameTemp._bpTurnRate = rate;
        $gameTemp._bpTurnFlat = this.subject().additionForBP('Turn');
    }
    if (reset) {
        $gameTemp._bpTurnRate = undefined;
        $gameTemp._bpTurnFlat = undefined;
    }
};

Olivia.OctoBattle.BP.__Game_Action_applyItemUserEffect___ = Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function(target) {
    Olivia.OctoBattle.BP.__Game_Action_applyItemUserEffect___.call(this, target);
    this.applyBPEffects(target);
};

Game_Action.prototype.applyBPEffects = function(target) {
    if (!!target && this.item().note.match(/<Target (?:BP|Boost): ([\+\-]\d+)>/i)) {
        var bp = parseInt(RegExp.$1);
        if (this.item().note.match(/<(?:BP|Boost) BP Effect>/i)) {
            bp = Math.round(this.subject().multiplierForBP('BP Effect') * bp);
            bp += this.subject().additionForBP('BP Effect');
        }
        target.gainStoredBP(bp);
    }
    if (!!this.subject() && this.item().note.match(/<User (?:BP|Boost): ([\+\-]\d+)>/i)) {
        var bp = parseInt(RegExp.$1);
        if (this.item().note.match(/<(?:BP|Boost) BP Effect>/i)) {
            bp = Math.round(this.subject().multiplierForBP('BP Effect') * bp);
            bp += this.subject().additionForBP('BP Effect');
        }
        this.subject().gainStoredBP(bp);
    }
};

//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.

Object.defineProperties(Game_BattlerBase.prototype, {
    // Boost Points
    bp: { get: function() { return this.useBP(); }, configurable: true }
});

Olivia.OctoBattle.BP.___Game_BattlerBase_initialize___ = Game_BattlerBase.prototype.initialize;
Game_BattlerBase.prototype.initialize = function() {
    Olivia.OctoBattle.BP.___Game_BattlerBase_initialize___.call(this);
    this.initializeBP();
};

Game_BattlerBase.prototype.initializeBP = function() {
    this._storedBP = this._storedBP || 0;
    this._useBP = this._useBP || 0;
    this._turnUsedBP = this._turnUsedBP || 0;
};

Game_BattlerBase.prototype.storedBP = function() {
    if (this._storedBP === undefined) {
        this.initializeBP();
    }
    return this._storedBP;
};

Game_BattlerBase.prototype.setStoredBP = function(bp) {
    if (this._storedBP === undefined) {
        this.initializeBP();
    }
    this._storedBP = bp.clamp(0, Olivia.OctoBattle.BoostPoint.BP_MaxStored);
    this.refresh();
};

Game_BattlerBase.prototype.useBP = function() {
    if (this._useBP === undefined) {
        this.initializeBP();
    }
    return this._useBP;
};

Game_BattlerBase.prototype.setUseBP = function(bp) {
    if (this._useBP === undefined) {
        this.initializeBP();
    }
    this._useBP = bp.clamp(0, Olivia.OctoBattle.BoostPoint.BP_MaxUse);
    this.refresh();
};

Game_BattlerBase.prototype.bpRegenValue = function() {
    if (!Olivia.OctoBattle.BoostPoint.DeathRegen && (this.isDead() || this.isHidden())) {
        return 0;
    } else {
        var bp = Olivia.OctoBattle.BoostPoint.BP_TurnRegen;
        bp = this.bpRegenMultipliers(bp);
        bp = this.bpRegenAdded(bp);
        return bp;
    }
};

Game_BattlerBase.prototype.isBoostSealed = function() {
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var state = states[i];
        if (!!state && state.note.match(/<Boost (?:Seal|Sealed)>/i)) {
            return true;
        }
    }
    return false;
};

Olivia.OctoBattle.BP.___Game_BattlerBase_resetStateCounts = Game_BattlerBase.prototype.resetStateCounts;
Game_BattlerBase.prototype.resetStateCounts = function(stateId) {
    var currentTurnCount = this._stateTurns[stateId] || 0;
    Olivia.OctoBattle.BP.___Game_BattlerBase_resetStateCounts.call(this, stateId);
    if (!!$gameTemp._bpTurnRate) {
        $gameTemp._bpTurnFlat = $gameTemp._bpTurnFlat || 0;
        var state = $dataStates[stateId];
        var maxTurns = Math.round(state.maxTurns * $gameTemp._bpTurnRate) + $gameTemp._bpTurnFlat;
        var minTurns = Math.round(state.minTurns * $gameTemp._bpTurnRate) + $gameTemp._bpTurnFlat;
        var variance = 1 + Math.max(maxTurns - minTurns, 0);
        if (Imported.YEP_BuffsStatesCore) {
            if (state.reapplyRules === 1) {
                this._stateTurns[stateId] = minTurns + Math.randomInt(variance);
            } else if (state.reapplyRules === 2) {
                this._stateTurns[stateId] = minTurns + Math.randomInt(variance) + currentTurnCount;
            }
        } else {
            this._stateTurns[stateId] = minTurns + Math.randomInt(variance);
        }
    }
};

Olivia.OctoBattle.BP.___Game_BattlerBase_meetsUsableItemConditions___ = Game_BattlerBase.prototype.meetsUsableItemConditions;
Game_BattlerBase.prototype.meetsUsableItemConditions = function(item) {
    if (Olivia.OctoBattle.BP.___Game_BattlerBase_meetsUsableItemConditions___.call(this, item)) {
        return this.meetsUseBPRequirement(item);
    } else {
        return false;
    }
};

Game_BattlerBase.prototype.meetsUseBPRequirement = function(item) {
    var note = item.note;
    if (note.match(/<Require (\d+) BP>/i) || note.match(/<Require >= (\d+) BP>/i)) {
        var bp = parseInt(RegExp.$1)
        if (this.isActor()) {
            return this.bp >= bp;
        } else {
            return this.storedBP() >= bp;
        }
    } else if (item.note.match(/<Require > (\d+) BP>/i)) {
        var bp = parseInt(RegExp.$1)
        if (this.isActor()) {
            return this.bp > bp;
        } else {
            return this.storedBP() > bp;
        }
    } else if (item.note.match(/<Require = (\d+) BP>/i)) {
        var bp = parseInt(RegExp.$1)
        if (this.isActor()) {
            return this.bp === bp;
        } else {
            return this.storedBP() === bp;
        }
    } else if (item.note.match(/<Require < (\d+) BP>/i)) {
        var bp = parseInt(RegExp.$1)
        if (this.isActor()) {
            return this.bp < bp;
        } else {
            return this.storedBP() < bp;
        }
    } else if (item.note.match(/<Require <= (\d+) BP>/i)) {
        var bp = parseInt(RegExp.$1)
        if (this.isActor()) {
            return this.bp <= bp;
        } else {
            return this.storedBP() <= bp;
        }
    } else {
        return true;
    }
};

//-----------------------------------------------------------------------------
// Game_Battler
//
// The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
// and actions.

Game_Battler.prototype.gainStoredBP = function(value) {
    this.setStoredBP(this.storedBP() + value);
};

Game_Battler.prototype.gainUseBP = function(value) {
    this.setUseBP(this.useBP() + value);
};

Game_Battler.prototype.multiplierForBP = function(type) {
    if (type.match(/Damage/i)) {
        var list = Olivia.OctoBattle.BoostPoint.BP_DmgMultiply;
    } else if (type.match(/Turn/i)) {
        var list = Olivia.OctoBattle.BoostPoint.BP_TurnMultiply;
    } else if (type.match(/Repeat/i)) {
        var list = Olivia.OctoBattle.BoostPoint.BP_RepMultiply;
    } else if (type.match(/Analyze/i)) {
        var list = Olivia.OctoBattle.BoostPoint.BP_AnalyzeMultiply;
    } else if (type.match(/BP Effect/i)) {
        var list = Olivia.OctoBattle.BoostPoint.BP_BPEffectMultiply;
    } else {
        return this.useBP();
    }
    var index = this.useBP();
    return list[index] || list[0];
};

Game_Battler.prototype.additionForBP = function(type) {
    if (type.match(/Damage/i)) {
        var list = Olivia.OctoBattle.BoostPoint.BP_DmgAddition;
    } else if (type.match(/Turn/i)) {
        var list = Olivia.OctoBattle.BoostPoint.BP_TurnAddition;
    } else if (type.match(/Repeat/i)) {
        var list = Olivia.OctoBattle.BoostPoint.BP_RepAddition;
    } else if (type.match(/Analyze/i)) {
        var list = Olivia.OctoBattle.BoostPoint.BP_AnalyzeAddition;
    } else if (type.match(/BP Effect/i)) {
        var list = Olivia.OctoBattle.BoostPoint.BP_BPEffectAddition;
    } else {
        return this.useBP();
    }
    var index = this.useBP();
    return parseInt(list[index] || list[0]);
};

Game_Battler.prototype.setupBattleBP = function() {
    var bp = Olivia.OctoBattle.BoostPoint.BP_StartBattle;
    bp = this.setupBattleBPMultiplier(bp);
    bp = this.setupBattleBPAdded(bp);
    this.setStoredBP(bp);
};

Game_Battler.prototype.setupBattleBPMultiplier = function(bp) {
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var state = states[i];
        if (!!state) {
            if (state.note.match(/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)) {
                bp *= parseFloat(RegExp.$1) * 0.01;
            }
        }
    }
    return bp;
};

Game_Battler.prototype.setupBattleBPAdded = function(bp) {
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var state = states[i];
        if (!!state) {
            if (state.note.match(/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)) {
                bp += parseInt(RegExp.$1);
            }
        }
    }
    return bp;
};

Game_Battler.prototype.startChangeBPAnimation = function() {
    var index = this.useBP().clamp(0, Olivia.OctoBattle.BoostPoint.BP_MaxUse);
    var animationId = Number(Olivia.OctoBattle.BoostPoint.Animations[index] || Olivia.OctoBattle.BoostPoint.Animations[0]);
    if (animationId > 0) {
        this.startAnimation(animationId);
    }
};

Game_Battler.prototype.canBoostBP = function() {
    if (this.isBoostSealed()) {
        return false;
    }
    return this.bp < Olivia.OctoBattle.BoostPoint.BP_MaxUse && this.storedBP() > 0;
};

Game_Battler.prototype.canUnboostBP = function() {
    return this.bp > 0;
};

Olivia.OctoBattle.BP.___Game_Battler_removeBattleStates___ = Game_Battler.prototype.removeBattleStates;
Game_Battler.prototype.removeBattleStates = function() {
    Olivia.OctoBattle.BP.___Game_Battler_removeBattleStates___.call(this);
    this._storedBP = 0;
    this._useBP = 0;
};

Olivia.OctoBattle.BP.___Game_Battler_regenerateTp___ = Game_Battler.prototype.regenerateTp;
Game_Battler.prototype.regenerateTp = function() {
    Olivia.OctoBattle.BP.___Game_Battler_regenerateTp___.call(this);
    this.regenerateBp();
};

Olivia.OctoBattle.BP.___Game_Battler_regenerateAll___ = Game_Battler.prototype.regenerateAll;
Game_Battler.prototype.regenerateAll = function() {
    Olivia.OctoBattle.BP.___Game_Battler_regenerateAll___.call(this);
    if (Olivia.OctoBattle.BoostPoint.DeathRegen && this.isDead()) {
        this.regenerateBp();
    }
};

Game_Battler.prototype.regenerateBp = function() {
    if (Olivia.OctoBattle.BoostPoint.BP_AlwaysRegen || this._turnUsedBP <= 0) {
        this.gainStoredBP(this.bpRegenValue());
    }
    this._turnUsedBP = 0;
};

Olivia.OctoBattle.BP.___Game_Battler_onAllActionsEnd___ = Game_Battler.prototype.onAllActionsEnd;
Game_Battler.prototype.onAllActionsEnd = function() {
    Olivia.OctoBattle.BP.___Game_Battler_onAllActionsEnd___.call(this);
    this._turnUsedBP += this.useBP();
    this.setUseBP(0);
};

Game_Battler.prototype.bpRegenMultipliers = function(bp) {
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var state = states[i];
        if (!!state) {
            if (state.note.match(/<(?:BP|Boost) Regen: (\d+)([%％])>/i)) {
                bp *= parseFloat(RegExp.$1) * 0.01;
            }
        }
    }
    return bp;
};

Game_Battler.prototype.bpRegenAdded = function(bp) {
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var state = states[i];
        if (!!state) {
            if (state.note.match(/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)) {
                bp += parseInt(RegExp.$1);
            }
        }
    }
    return bp;
};

Olivia.OctoBattle.BP.___Game_Battler_addState___ = Game_Battler.prototype.addState;
Game_Battler.prototype.addState = function(stateId) {
    var isDead = this.isDead();
    Olivia.OctoBattle.BP.___Game_Battler_addState___.call(this, stateId);
    if (Olivia.OctoBattle.BoostPoint.DeathRemoval && !isDead && this.isDead()) {
        this.setStoredBP(0);
    }
};

Olivia.OctoBattle.BP.___Game_Battler_addBuff___ = Game_Battler.prototype.addBuff;
Game_Battler.prototype.addBuff = function(paramId, turns) {
    if (!!$gameTemp._bpTurnRate) {
        $gameTemp._bpTurnFlat = $gameTemp._bpTurnFlat || 0;
        turns = Math.round($gameTemp._bpTurnRate * turns) + $gameTemp._bpTurnFlat;
    }
    Olivia.OctoBattle.BP.___Game_Battler_addBuff___.call(this, paramId, turns);
};

Olivia.OctoBattle.BP.___Game_Battler_addDebuff___ = Game_Battler.prototype.addDebuff;
Game_Battler.prototype.addDebuff = function(paramId, turns) {
    if (!!$gameTemp._bpTurnRate) {
        $gameTemp._bpTurnFlat = $gameTemp._bpTurnFlat || 0;
        turns = Math.round($gameTemp._bpTurnRate * turns) + $gameTemp._bpTurnFlat;
    }
    Olivia.OctoBattle.BP.___Game_Battler_addDebuff___.call(this, paramId, turns);
};

//-----------------------------------------------------------------------------
// Game_Actor
//
// The game object class for an actor.

Game_Actor.prototype.setupBattleBPMultiplier = function(bp) {
    bp = Game_Battler.prototype.setupBattleBPMultiplier.call(this, bp)
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var equip = equips[i];
        if (!!equip) {
            if (equip.note.match(/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)) {
                bp *= parseFloat(RegExp.$1) * 0.01;
            }
        }
    }
    if (!!this.actor() && this.actor().note.match(/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)) {
        bp *= parseFloat(RegExp.$1) * 0.01;
    }
    if (!!this.currentClass() && this.currentClass().note.match(/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)) {
        bp *= parseFloat(RegExp.$1) * 0.01;
    }
    return bp;
};

Game_Actor.prototype.setupBattleBPAdded = function(bp) {
    bp = Game_Battler.prototype.setupBattleBPAdded.call(this, bp)
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var equip = equips[i];
        if (!!equip) {
            if (equip.note.match(/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)) {
                bp += parseInt(RegExp.$1);
            }
        }
    }
    if (!!this.actor() && this.actor().note.match(/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)) {
        bp += parseInt(RegExp.$1);
    }
    if (!!this.currentClass() && this.currentClass().note.match(/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)) {
        bp += parseInt(RegExp.$1);
    }
    return bp;
};

Game_Actor.prototype.bpRegenMultipliers = function(bp) {
    bp = Game_Battler.prototype.bpRegenMultipliers.call(this, bp);
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var equip = equips[i];
        if (!!equip) {
            if (equip.note.match(/<(?:BP|Boost) Regen: (\d+)([%％])>/i)) {
                bp *= parseFloat(RegExp.$1) * 0.01;
            }
        }
    }
    if (!!this.actor() && this.actor().note.match(/<(?:BP|Boost) Regen: (\d+)([%％])>/i)) {
        bp *= parseFloat(RegExp.$1) * 0.01;
    }
    if (!!this.currentClass() && this.currentClass().note.match(/<(?:BP|Boost) Regen: (\d+)([%％])>/i)) {
        bp *= parseFloat(RegExp.$1) * 0.01;
    }
    return bp;
};

Game_Actor.prototype.bpRegenAdded = function(bp) {
    bp = Game_Battler.prototype.bpRegenAdded.call(this, bp);
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var equip = equips[i];
        if (!!equip) {
            if (equip.note.match(/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)) {
                bp += parseInt(RegExp.$1);
            }
        }
    }
    if (!!this.actor() && this.actor().note.match(/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)) {
        bp += parseInt(RegExp.$1);
    }
    if (!!this.currentClass() && this.currentClass().note.match(/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)) {
        bp += parseInt(RegExp.$1);
    }
    return bp;
};

//-----------------------------------------------------------------------------
// Game_Enemy
//
// The game object class for an enemy.

Game_Enemy.prototype.setupBattleBPMultiplier = function(bp) {
    bp = Game_Battler.prototype.setupBattleBPMultiplier.call(this, bp)
    if (!!this.enemy() && this.enemy().note.match(/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)) {
        bp *= parseFloat(RegExp.$1) * 0.01;
    }
    return bp;
};

Game_Enemy.prototype.setupBattleBPAdded = function(bp) {
    bp = Game_Battler.prototype.setupBattleBPAdded.call(this, bp)
    if (!!this.enemy() && this.enemy().note.match(/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)) {
        bp += parseInt(RegExp.$1);
    }
    return bp;
};

Game_Enemy.prototype.bpRegenMultipliers = function(bp) {
    bp = Game_Battler.prototype.bpRegenMultipliers.call(this, bp)
    if (!!this.enemy() && this.enemy().note.match(/<(?:BP|Boost) Regen: (\d+)([%％])>/i)) {
        bp *= parseFloat(RegExp.$1) * 0.01;
    }
    return bp;
};

Game_Enemy.prototype.bpRegenAdded = function(bp) {
    bp = Game_Battler.prototype.bpRegenAdded.call(this, bp);
    if (!!this.enemy() && this.enemy().note.match(/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)) {
        bp += parseInt(RegExp.$1);
    }
    return bp;
};

Olivia.OctoBattle.BP.___Game_Enemy_setup___ = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
    Olivia.OctoBattle.BP.___Game_Enemy_setup___.call(this, enemyId, x, y);
    this.setupBoostAI();
};

Game_Enemy.prototype.setupBoostAI = function() {
    if (this.enemy()._boostAI === undefined) {
        this.enemy()._boostAI = {};
        var notedata = this.enemy().note.split(/[\r\n]+/);
        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            if (line.match(/<Boost Skill (\d+):[ ](.*)>/i)) {
                var skillId = 'Skill ' + parseInt(RegExp.$1);
                var aiData = String(RegExp.$2).toLowerCase();
                this.enemy()._boostAI[skillId] = aiData;
            } else if (line.match(/<Boost[ ](.*):[ ](.*)>/i)) {
                var skillName = String(RegExp.$1);
                var aiData = String(RegExp.$2).toLowerCase();
                this.enemy()._boostAI[skillName] = aiData;
            }
        }
    }
};

Game_Enemy.prototype.processUseBP = function(skill) {
    this.setupBoostAI();
    var bp = this.calculateBPtoUse(skill);
    if (bp > 0) {
        this.processEnemyBPUsage(bp);
        this.startChangeBPAnimation();
    }
};

Game_Enemy.prototype.calculateBPtoUse = function(skill) {
    if (this.storedBP() <= 0) {
        return 0;
    }
    var skillName = skill.name;
    var skillId = 'Skill ' + skill.id;
    var bp = 0;
    if (this.enemy()._boostAI[skillName] || this.enemy()._boostAI[skillId]) {
        var aiData = this.enemy()._boostAI[skillName] || this.enemy()._boostAI[skillId];
        if (aiData.match(/(?:All|Full)/i)) {
            bp = this.storedBP();
        } else if (aiData.match(/at least (\d+)/i)) {
            var value = parseInt(RegExp.$1);
            if (this.storedBP() >= value) {
                bp = this.storedBP();
            }
        } else if (aiData.match(/at most (\d+)/i)) {
            var value = parseInt(RegExp.$1);
            if (this.storedBP() <= value) {
                bp = this.storedBP();
            }
        } else if (aiData.match(/exactly (\d+)/i)) {
            var value = parseInt(RegExp.$1);
            if (this.storedBP() === value) {
                bp = value;
            }
        }
    }
    return bp.clamp(0, Olivia.OctoBattle.BoostPoint.BP_MaxUse);
};

Game_Enemy.prototype.processEnemyBPUsage = function(bp) {
    bp = bp.clamp(0, this.storedBP());
    bp = bp.clamp(0, Olivia.OctoBattle.BoostPoint.BP_MaxUse);
    this.gainStoredBP(-bp);
    this.gainUseBP(bp);
};

Game_Enemy.prototype.startChangeBPAnimation = function() {
    var wait = 0;
    var bp = this.useBP().clamp(0, Olivia.OctoBattle.BoostPoint.BP_MaxUse);
    for (var i = 1; i <= bp; i++) {
        var animationId = Olivia.OctoBattle.BoostPoint.Animations[i] || Olivia.OctoBattle.BoostPoint.Animations[0];
        if (animationId > 0) {
            this.startAnimation(animationId, false, wait);
        }
        wait += 60;
    }
    wait = Math.round(wait)
    if (Imported.YEP_BattleEngineCore) {
        BattleManager.actionWait(wait);
    } else {
        SceneManager._scene._logWindow._waitCount = wait;
    }
};

//-----------------------------------------------------------------------------
// Game_Unit
//
// The superclass of Game_Party and Game_Troop.

Game_Unit.prototype.setupBattleBP = function() {
    var inBattle = this._inBattle;
    this._inBattle = false;
    var members = this.members();
    for (var i = 0; i < members.length; i++) {
        var member = members[i];
        if (member) {
            member.setupBattleBP();
        }
    }
    this._inBattle = inBattle;
};

//-----------------------------------------------------------------------------
// Scene_Battle
//
// The scene class of the battle screen.

Olivia.OctoBattle.BP.___Scene_Battle_createActorCommandWindow___ = Scene_Battle.prototype.createActorCommandWindow;
Scene_Battle.prototype.createActorCommandWindow = function() {
    Olivia.OctoBattle.BP.___Scene_Battle_createActorCommandWindow___.call(this);
    this._actorCommandWindow.setHandler('boost', this.commandBoost.bind(this));
    this._actorCommandWindow.setHandler('unboost', this.commandUnboost.bind(this));
};

Scene_Battle.prototype.commandBoost = function() {
    BattleManager.actor().gainStoredBP(-1);
    BattleManager.actor().gainUseBP(1);
    BattleManager.actor().startChangeBPAnimation();
    this._helpWindow.refresh();
    this._actorCommandWindow._active = true;
    this._actorCommandWindow.refresh();
    if (this._itemConcoctPreviewWindow) {
        this._itemConcoctPreviewWindow.refresh();
    }
};

Scene_Battle.prototype.commandUnboost = function() {
    BattleManager.actor().gainUseBP(-1);
    BattleManager.actor().gainStoredBP(1);
    BattleManager.actor().startChangeBPAnimation();
    this._helpWindow.refresh();
    this._actorCommandWindow._active = true;
    this._actorCommandWindow.refresh();
    if (this._itemConcoctPreviewWindow) {
        this._itemConcoctPreviewWindow.refresh();
    }
};

Olivia.OctoBattle.BP.___Scene_Battle_selectNextCommand___ = Scene_Battle.prototype.selectNextCommand;
Scene_Battle.prototype.selectNextCommand = function() {
    this._helpWindow.clearBPSubject();
    Olivia.OctoBattle.BP.___Scene_Battle_selectNextCommand___.call(this);
};

Olivia.OctoBattle.BP.___Scene_Battle_startActorCommandSelection___ = Scene_Battle.prototype.startActorCommandSelection;
Scene_Battle.prototype.startActorCommandSelection = function() {
    Olivia.OctoBattle.BP.___Scene_Battle_startActorCommandSelection___.call(this);
    this._helpWindow.setBPSubject(BattleManager.actor());
};

//-----------------------------------------------------------------------------
// Window_Base
//
// The superclass of all windows within the game.

Window_Base.prototype.drawBoostIcons = function(battler, x, y) {
    var filled = battler.storedBP();
    var empty = Olivia.OctoBattle.BoostPoint.BP_MaxStored - filled;
    var iconWidth = Window_Base._iconWidth;
    if (Olivia.OctoBattle.BoostPoint.SmallIcon) {
        var x0 = x;
        iconWidth = Math.round(iconWidth * Olivia.OctoBattle.BoostPoint.IconSize);
    }
    while (filled > 0) {
        filled--;
        if (Olivia.OctoBattle.BoostPoint.SmallIcon) {
            this.drawSmallBoostIcon(Olivia.OctoBattle.BoostPoint.BoostIcon, x, y);
        } else {
            this.drawIcon(Olivia.OctoBattle.BoostPoint.BoostIcon, x, y);
        }
        x += iconWidth;
    }
    while (empty > 0) {
        empty--;
        if (Olivia.OctoBattle.BoostPoint.SmallIcon) {
            this.drawSmallBoostIcon(Olivia.OctoBattle.BoostPoint.EmptyIcon, x, y);
        } else {
            this.drawIcon(Olivia.OctoBattle.BoostPoint.EmptyIcon, x, y);
        }
        x += iconWidth;
    }
    if (Olivia.OctoBattle.BoostPoint.SmallIcon) {
        var text = Olivia.OctoBattle.BoostPoint.SmallText;
        var align = Olivia.OctoBattle.BoostPoint.TextAlign;
        var height = this.lineHeight() - 4 - iconWidth;
        var maxWidth = x - x0;
        y += height;
        this.contents.fontSize *= 1 - Olivia.OctoBattle.BoostPoint.IconSize;
        this.contents.drawText(text, x0, y, maxWidth, height, align);
    }
    this.resetFontSettings();
    return x;
};

Window_Base.prototype.drawSmallBoostIcon = function(iconIndex, x, y) {
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    var rate = Olivia.OctoBattle.BoostPoint.IconSize;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, Math.round(pw * rate), Math.round(ph * rate));
};

Window_Base.prototype.setBPSubject = function(battler) {
    this._bpSubject = battler;
};

Window_Base.prototype.clearBPSubject = function() {
    this._bpSubject = undefined;
};

Olivia.OctoBattle.BP.___Window_Base_convertEscapeCharacters___ = Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = Olivia.OctoBattle.BP.___Window_Base_convertEscapeCharacters___.call(this, text);
    text = this.convertBPEscapeCharacters(text);
    return text;
};

Window_Base.prototype.convertBPEscapeCharacters = function(text) {

    text = text.replace(/\x1bBPDMG\[(\d+)\]/gi, function() {
        return this.convertBPDamageEscape(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bBPDAMAGE\[(\d+)\]/gi, function() {
        return this.convertBPDamageEscape(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bBPTURN\[(\d+)\]/gi, function() {
        return this.convertBPTurnEscape(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bBPREP\[(\d+)\]/gi, function() {
        return this.convertBPRepeatEscape(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bBPREPEAT\[(\d+)\]/gi, function() {
        return this.convertBPRepeatEscape(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bBPHITS\[(\d+)\]/gi, function() {
        return this.convertBPRepeatEscape(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bBPANALYZE\[(\d+)\]/gi, function() {
        return this.convertBPAnalyzeEscape(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bBPEFFECT\[(\d+)\]/gi, function() {
        return this.convertBPEffectEscape(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bBP\[(.*?)\]/gi, function() {
        return this.convertBPUpEscape(String(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bBP0\[(.*?)\]/gi, function() {
        return this.convertBP0Escape(String(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bBP=(\d+)\[(.*?)\]/gi, function() {
        return this.convertBPEqualEscape(parseInt(arguments[1]), String(arguments[2]));
    }.bind(this));
    text = text.replace(/\x1bBP=(\d+)\[(.*?)\]/gi, function() {
        return this.convertBPEqualEscape(parseInt(arguments[1]), String(arguments[2]));
    }.bind(this));
    text = text.replace(/\x1bBP\<=(\d+)\[(.*?)\]/gi, function() {
        return this.convertBPLessEqualEscape(parseInt(arguments[1]), String(arguments[2]));
    }.bind(this));
    text = text.replace(/\x1bBP\<(\d+)\[(.*?)\]/gi, function() {
        return this.convertBPLessEscape(parseInt(arguments[1]), String(arguments[2]));
    }.bind(this));
    text = text.replace(/\x1bBP\>=(\d+)\[(.*?)\]/gi, function() {
        return this.convertBPGreaterEqualEscape(parseInt(arguments[1]), String(arguments[2]));
    }.bind(this));
    text = text.replace(/\x1bBP\>(\d+)\[(.*?)\]/gi, function() {
        return this.convertBPGreaterEscape(parseInt(arguments[1]), String(arguments[2]));
    }.bind(this));
    return text;
};

Window_Base.prototype.convertBPDamageEscape = function(value) {
    if (!!this._bpSubject) {
        var rate = this._bpSubject.multiplierForBP('Damage');
        value = Math.round(value * rate);
        value += this._bpSubject.additionForBP('Damage');
    }
    return value;
};

Window_Base.prototype.convertBPTurnEscape = function(value) {
    if (!!this._bpSubject) {
        var rate = this._bpSubject.multiplierForBP('Turn');
        value = Math.round(value * rate);
        value += this._bpSubject.additionForBP('Turn');
    }
    return value;
};

Window_Base.prototype.convertBPRepeatEscape = function(value) {
    if (!!this._bpSubject) {
        var rate = this._bpSubject.multiplierForBP('Repeat');
        value = Math.round(value * rate);
        value += this._bpSubject.additionForBP('Repeat');
    }
    return value;
};

Window_Base.prototype.convertBPAnalyzeEscape = function(value) {
    if (!!this._bpSubject) {
        var rate = this._bpSubject.multiplierForBP('Analyze');
        value = Math.round(value * rate);
        value += this._bpSubject.additionForBP('Analyze');
    }
    return value;
};

Window_Base.prototype.convertBPEffectEscape = function(value) {
    if (!!this._bpSubject) {
        var rate = this._bpSubject.multiplierForBP('BP Effect');
        value = Math.round(value * rate);
        value += this._bpSubject.additionForBP('BP Effect');
    }
    return value;
};

Window_Base.prototype.convertBPUpEscape = function(str) {
    if (!!this._bpSubject && this._bpSubject.bp > 0) {
        return str;
    } else {
        return '';
    }
};

Window_Base.prototype.convertBP0Escape = function(str) {
    if (!this._bpSubject || this._bpSubject.bp <= 0) {
        return str;
    } else {
        return '';
    }
};

Window_Base.prototype.convertBPEqualEscape = function(bp, str) {
    if (!!this._bpSubject && this._bpSubject.bp === bp) {
        return str;
    } else {
        return '';
    }
};

Window_Base.prototype.convertBPEqualEscape = function(bp, str) {
    if (!!this._bpSubject && this._bpSubject.bp === bp) {
        return str;
    } else {
        return '';
    }
};

Window_Base.prototype.convertBPLessEqualEscape = function(bp, str) {
    if (!!this._bpSubject && this._bpSubject.bp <= bp) {
        return str;
    } else {
        return '';
    }
};

Window_Base.prototype.convertBPLessEscape = function(bp, str) {
    if (!!this._bpSubject && this._bpSubject.bp < bp) {
        return str;
    } else {
        return '';
    }
};

Window_Base.prototype.convertBPGreaterEqualEscape = function(bp, str) {
    if (!!this._bpSubject && this._bpSubject.bp >= bp) {
        return str;
    } else {
        return '';
    }
};

Window_Base.prototype.convertBPGreaterEscape = function(bp, str) {
    if (!!this._bpSubject && this._bpSubject.bp > bp) {
        return str;
    } else {
        return '';
    }
};

//-----------------------------------------------------------------------------
// Window_Selectable
//
// The window class with cursor movement and scroll functions.

if (Olivia.OctoBattle.BoostPoint.LRButtons) {

Olivia.OctoBattle.BP.___Window_Selectable_cursorPagedown___ = Window_Selectable.prototype.cursorPagedown;
Window_Selectable.prototype.cursorPagedown = function() {
    if (SceneManager._scene instanceof Scene_Battle && !this._isBoostRestricted) {
        if (BattleManager.actor() && BattleManager.actor().canBoostBP()) {
            SceneManager._scene.commandBoost();
            SceneManager._scene._actorCommandWindow._active = false;
            this.refresh();
        }
        Input.clear();
    } else {
        Olivia.OctoBattle.BP.___Window_Selectable_cursorPagedown___.call(this);
    }
};

Olivia.OctoBattle.BP.___Window_Selectable_cursorPageup___ = Window_Selectable.prototype.cursorPageup;
Window_Selectable.prototype.cursorPageup = function() {
    if (SceneManager._scene instanceof Scene_Battle && !this._isBoostRestricted) {
        if (BattleManager.actor() && BattleManager.actor().canUnboostBP()) {
            SceneManager._scene.commandUnboost();
            SceneManager._scene._actorCommandWindow._active = false;
            this.refresh();
        }
        Input.clear();
    } else {
        Olivia.OctoBattle.BP.___Window_Selectable_cursorPageup___.call(this);
    }
};

}

//-----------------------------------------------------------------------------
// Window_ActorCommand
//
// The window for selecting an actor's action on the battle screen.

Olivia.OctoBattle.BP.___Window_ActorCommand_addGuardCommand___ = Window_ActorCommand.prototype.addGuardCommand;
Window_ActorCommand.prototype.addGuardCommand = function() {
    this.addBoostCommand();
    this.addUnboostCommand();
    Olivia.OctoBattle.BP.___Window_ActorCommand_addGuardCommand___.call(this);
};

Window_ActorCommand.prototype.addBoostCommand = function() {
    if (Olivia.OctoBattle.BoostPoint.BoostShow) {
        var name = Olivia.OctoBattle.BoostPoint.BoostCmd;
        var enabled = this._actor.canBoostBP();
        this.addCommand(name, 'boost', enabled);
    }
};

Window_ActorCommand.prototype.addUnboostCommand = function() {
    if (Olivia.OctoBattle.BoostPoint.UnboostShow) {
        var name = Olivia.OctoBattle.BoostPoint.UnboostCmd;
        var enabled = this._actor.canUnboostBP();
        this.addCommand(name, 'unboost', enabled);
    }
};

Window_ActorCommand.prototype.playOkSound = function() {
    if (this.currentSymbol() !== 'boost' && this.currentSymbol() !== 'unboost') {
        Window_Selectable.prototype.playOkSound.call(this);
    }
};

//-----------------------------------------------------------------------------
// Window_BattleStatus
//
// The window for displaying the status of party members on the battle screen.

if (Olivia.OctoBattle.BoostPoint.ShowIcons) {

Olivia.OctoBattle.BP.Window_BattleStatus_drawBasicArea = Window_BattleStatus.prototype.drawBasicArea;
Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    var x = this.drawBoostIcons(actor, rect.x, rect.y + 2);
    rect.x += x + 2;
    rect.width -= x + 2;
    Olivia.OctoBattle.BP.Window_BattleStatus_drawBasicArea.call(this, rect, actor);
};

}

//-----------------------------------------------------------------------------
// Window_BattleActor
//
// The window for selecting a target actor on the battle screen.

Olivia.OctoBattle.BP.___Window_BattleActor_initialize___ = Window_BattleActor.prototype.initialize;
Window_BattleActor.prototype.initialize = function(x, y) {
    this._isBoostRestricted = true;
    Olivia.OctoBattle.BP.___Window_BattleActor_initialize___.call(this, x, y);
};

//-----------------------------------------------------------------------------
// Window_BattleEnemy
//
// The window for selecting a target enemy on the battle screen.

Olivia.OctoBattle.BP.___Window_BattleEnemy_initialize___ = Window_BattleEnemy.prototype.initialize;
Window_BattleEnemy.prototype.initialize = function(x, y) {
    this._isBoostRestricted = true;
    Olivia.OctoBattle.BP.___Window_BattleEnemy_initialize___.call(this, x, y);
};
































