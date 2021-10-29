//=============================================================================
// Ramza Plugins - Food Buffs
// Ramza_FoodBuffs.js
// v1.01
//=============================================================================

var Ramza = Ramza || {};
Ramza.FB = Ramza.FB || {};
Ramza.FB.version = 1.01
var Imported = Imported || {};


//=============================================================================
 /*:
 * @plugindesc v1.01 Allows consumable items to provide states that last a set number of battles and allows developers to set certain items as an actors favorite foods.
 * @author Ramza
 * @target MZ
 * @param General
 *
 * @param NewApplicationEffect
 * @parent General
 * @text Food Stacking Effect
 * @desc What will happen if the user eats food but already has a buff?
 * @type select
 * @option Item Is Disabled
 * @option Buff Does Not Apply
 * @option New Buff Overwrites Old One
 * @option Multiple Food Buffs Allowed
 * @default Buff Does Not Apply
 *
 * @param RefreshEffect
 * @text Buff Refresh Effect
 * @parent General
 * @desc What will happen when an actor eats the same food he already has the buff for?
 * @type select
 * @option Item Is Disabled
 * @option Buff Refreshed to Full Duration
 * @option Current Duration Added to Refresh
 * @option Add One to Full Duration
 * @option No Change
 * @default Buff Refreshed to Full Duration
 *
 * @param RemoveOnDeath
 * @text Remove Buffs on Death?
 * @desc If an actor with a food buff dies, will the food buff be removed?
 * @parent General
 * @type boolean
 * @default true
 * 
 * @param RemoveOnFullHeal
 * @text Remove Buffs on Rest?
 * @desc Remove food buffs from actors who are fully recovered via event or inn?
 * @parent General
 * @type boolean
 * @default true
 *
 * @param FavoriteEffects
 * @text Favorite Food Effects
 * 
 * @param FullHeal
 * @parent FavoriteEffects
 * @text Full Hp Recovery?
 * @type boolean
 * @desc Eating a favorite food will heal hp to 100%.
 * @default true
 * 
 * @param FullMpHeal
 * @parent FavoriteEffects
 * @text Full Mp Recovery?
 * @type boolean
 * @desc Eating a favorite food will heal mp to 100%.
 * @default true
 * 
 * @param CureStatus
 * @parent FavoriteEffects
 * @text Cure Status Effects?
 * @type boolean
 * @desc Eating a favorite food will clear status effects.
 * @default true
 *
 * @param StateList
 * @text Effects to Cure
 * @parent CureStatus
 * @desc A list of states that will be cured.
 * @type state[]
 * @default[]
 *
 * @param Favorites
 * @text Favorite Foods
 * @desc Set favorite foods by actor
 * @type struct<favoritefoods>[]
 * @default []
 *
 * @param Sounds
 * @parent Favorites
 *
 * @param DefaultFavoriteSound
 * @text Default Sound Effect
 * @parent Sounds
 * @desc What sound effect to play when a favorite food is used on an actor, and they don't have a specific sound set.
 * @type struct<AudioObject>
 * @default {}
 *
 * @param ActorSounds
 * @parent Sounds
 * @text Actor Specific Favorite Sounds
 * @desc Specify sounds per actor when a favorite food is used on them.
 * @type struct<ActorSounds>[]
 * @default []
 * 
 * @param Integrations
 *
 * @param YEP_BuffsStatesCore
 * @parent Integrations
 *
 * @param VS_SkillsStatesCore
 * @parent Integrations
 * 
 * @param StateCounters
 * @text Show State Counter
 * @parent YEP_BuffsStatesCore
 * @desc Show a state counter on a food buff showing how many battles it has remaining?
 * @type boolean
 * @default true
 *
 * @param StateDisplays
 * @text Show State Display
 * @parent VS_SkillsStatesCore
 * @desc Show a state display on a food buff showing how many battles it has remaining?
 * @type boolean
 * @default true
 *
 * @help
 * Ramza Plugins - Food Buffs
 *=============================================================================
 * Description:
 *=============================================================================
 *
 * Allows you to tag certain states as being a 'food buff'. Food buffs can use
 * all of the same tags and functions that your other states can use, but they
 * are not removed after a set number of turns, or when combat ends, rather, 
 * they last a configurable number of battles instead.
 *
 * The main purpose of these states is to be added to an actor when he consumes
 * certain recovery items. For best effect, these items should be restricted so
 * they cannot be used in battle.
 *
 * The plugin also contains several settings for setting an actors favorite 
 * food(s), which will have an increased effect, play a different sound effect
 * when used on them, and various other things. Favorite foods can be called 
 * for display purposes in menus or huds, but this plugin does not have any 
 * such function at this time.
 *
 *=============================================================================
 * Usage:
 *=============================================================================
 *
 * Generally, a food item is a consumable item that should only be used in the 
 * menu. It inflicts a food buff state on the user or his party, and restores 
 * some Hp and Mp and applies whatever else you set the item to do in the 
 * database. Items that provide a food buff to multiple people could be called
 * feasts.
 *
 * When an actor is the target of a favorite food item in the menu, a different
 * sound effect will play, these can be customized on a per actor basis, to 
 * allow for you to set voice lines for when an actor eats a food they like.
 * Instead of the state that the food would normally give, a favorite food gives
 * the favorite food buff from the actor in the favorites plugin parameter list.
 * Additionally, if the plugin parameters are set to allow it, hp and mp can be
 * fully recovered, and specific (negative) states will also be removed.
 *
 * If the food item affects all party members, the plugin will detect if it was
 * a favorite of any one member, and function as noted above for that member 
 * only. If the food is a favorite of more than one member, it will function as 
 * above for all of them, and will grab a SE randomly from any of them. It will
 * only play one sound effect when the item is used, so it will not garble up
 * several sound effects at the same time. 
 *
 * If the plugin is set to prevent the item from being used on an actor who
 * already has a food buff, an item that affects all allies will only be 
 * disabled entirely if all living party members already have a food buff. The 
 * item will only affect actors who do not already have a food buff applied.
 *
 * If an item that affects all allies is used, and it is the favorite item of 
 * multiple party members, only a SE from a party member to which the item was
 * applied will play. This will prevent someone who did not receive the 
 * favorite food buff, or any favorite food effect, from making a sound as if 
 * they did.
 *
 *=============================================================================
 * Plugin Requirements:
 *=============================================================================
 *
 * This plugin has no dependencies. It has some functionality that is improved
 * by using YEP_BuffsStatesCore or YEP_ItemCore, but does not need those plugins 
 * to work.
 *
 * This plugin is compatible with RMMZ, and has improved functionality when used
 * together with VisuMZ_1_SkillsStatesCore, but does not require this plugin to
 * work.
 *
 *=============================================================================
 * Plugin Parameters:
 *=============================================================================
 *
 * Food Stacking Effect:
 * -This parameter sets what happens if an actor tries to eat food when they 
 *  already have a food buff on them.
 * 	-Item Is Disabled-
 * -The item will not be allowed to be used on that actor if they already have 
 *  a food buff on them.
 *  -Buff Does Not Apply-
 * -The item can be used, but the food buff will not apply from it.
 *  -New Buff Overwrites Old One-
 * -Eating an item that grants a food buff will remove any other active food 
 *  buff.
 *  -Multiple Food Buffs Allowed-
 * -There is no restriction on food buffs or items, eating multiple will apply
 *  multiple food buffs.
 *
 * Buff Refresh Effect:
 * -This parameter sets what happens if an actor tries to eat an item that 
 *  provides the same buff as one that he already has.
 *  -Item Is Disabled-
 * -The item will not be able to be used on the actor.
 *  -Buff Refreshed to Full Duration-
 * -The item is consumed, and the battle duration of the food buff is reset.
 *  -Current Duration Added to Refresh-
 * -The item is consumed, and the remaining battle duration of the buff is 
 *  added to the refreshed amount.
 *  -Add One to Full Duration-
 * -The item is consumed, and the battle duration is reset, then has one battle
 *  added to it.
 *  -No Change-
 * -The item is consumed, but the battle duration of the buff remains the same.
 *
 * RemoveOnDeath:
 * -Sets if food buffs will be removed when an actor dies or not.
 * 
 * RemoveOnFullHeal:
 * -Sets if food buffs will be removed from an actor when they are full healed
 *  via an event command or an inn.
 *
 * Favorite Effects:
 * Full Hp Recovery:
 * -When set to true, eating a favorite food will restore 100% of Hp.
 *
 * Full Mp Recovery:
 * -When set to true, eating a favorite food will restore 100% of Mp.
 *
 * Cure Status Effects:
 * -When set to true, eating a favorite food will remove certain states.
 *
 * Effects to Cure:
 * -States in this list will be removed when a favorite food is eaten.
 *
 * Favorites:
 * -Allows you to set an actors favorite food.
 * -Multiple items can be set per actor.
 * -Set a buff that will be applied to an actor who consumes their favorite food
 *
 * DefaultFavoriteSound:
 * -Set a sound effect to play instead of the usual item use sound effect when
 *  the item being used is a favorite food of an actor.
 *
 * ActorSounds:
 * -Set specific sound effects for each actor to play when a favorite item is 
 *  used on them. 
 * -If multiple sounds are defined, the plugin will play one of them at random
 * -These will overwrite the default sound above if they exist.
 * -Use this to play voiced lines for an actor eating something they like.
 *
 * Integrations:
 * -This section is for integrations with other plugins.
 * YEP_BuffsStatesCore:
 * Show State Counter:
 * -Will use the state counters feature of YEP_BuffsStatesCore to display the 
 *  remaining battle duration of a food buff directly on the icon.
 * VisuMZ_1_SkillsStatesCore:
 * Show State Display:
 * -Uses the state display feature of this plugin to show the remaining battle
 *  duration of a food buff directly on the icon.
 *
 *=============================================================================
 * Note Tags:
 *=============================================================================
 *
 * States:
 * <FOOD BUFF: X>
 * -Signals to this plugin that this state is a food buff.
 * -X is the number of battles the buff will last.
 * -If X is omitted, the note tag will have no effect.
 *
 *=============================================================================
 * Other Info:
 *=============================================================================
 * As mentioned above, there is a function that can be called which will return
 * an array containing each of an actors favorite foods. While this function 
 * is only used in this plugin to check if a food being eaten is a favorite, 
 * you can use it to display a list of said favorite foods on a custom HUD or 
 * menu.
 * Game_Actor.prototype.favoriteFoods()
 * This function is part of the Game_Actor class, so it can be called on any
 * battler that is also an actor. Example:
 *
 * $gameParty.leader().favoriteFoods()
 * $gameParty.members()[3].favoriteFoods()
 * $gameParty.menuActor().favoriteFoods()
 *
 * This function returns an array of actual item objects that are favorites
 * of the actor. You can perform more javascript functions on the result to 
 * take what you want from the item object, like its icon and name:
 * 
 * const foods = $gameParty.leader().favoriteFoods()
 * const name = foods[0].name
 * const icon = foods[0].iconIndex
 * 
 *
 *=============================================================================
 * Terms of Use:
 *=============================================================================
 *
 * -This plugin may be used in commercial or non-commercial projects. With 
 *  credit to me, Ramza.
 * -Purchase of this plugin allows you to use it in as many projects as you 
 *  want.
 * -You may modify this plugin directly, for personal use only.
 * -Sharing this plugin, direct edits to it, or any demo projects that come 
 *  with it is prohibited. 
 * -You may share edits to this plugin as extensions to this one. Extensions 
 *  require the base plugin to function.
 * -You can choose to sell extensions to this plugin for profit, crowdfunding, 
 *  donations, etc, as long as the extension requires this base plugin to 
 *  function. 
 * -Do not modify the header of the plugin file, and do not claim ownership of 
 *  the plugin in your own projects.
 *
 *=============================================================================
 * Changelog:
 *=============================================================================
 *
 * Version 1.01:
 * -Added an alias to Game_Actor.prototype.removeState to clear the battle
 *  duration of a food buff state if the state is removed by methods other than 
 *  the battle duration expiring.
 * -Added a section to the documentation on displaying an actors favorite foods.
 * Version 1.00:
 * -Initial release
 *
 *=============================================================================
 * //endofhelpfile
 */
 /*~struct~favoritefoods:
 * @param ActorId
 * @desc The Actor
 * @type actor
 * @param Favorites
 * @type item[]
 * @desc List of items which are the actors favorite
 * @default []
 * @param FavoriteBuff
 * @desc A state that will be applied to the actor ONLY when they eat their favorite food.
 * @type state
 */
 /*~struct~ActorSounds:
 * @param ActorId
 * @type actor
 * @desc The Actor
 * @param Sound
 * @type struct<AudioObject>[]
 * @default []
 * @desc List of SEs that will play when a favorite item is used on this actor. Will randomly choose one if multiple exist.
 */
 /*~struct~AudioObject:
 * @param name
 * @type file
 * @dir audio/se
 * @require 1
 * @desc Filename for the SE
 * @param volume
 * @desc Volume of SE
 * @type number
 * @max 100
 * @default 90
 * @param pitch
 * @desc Pitch of SE
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * @param pan
 * @desc Pan of Second
 * @type number
 * @min -100
 * @max 100
 * @default 0
 */
 
  //Initialize Plugin Parameters
 
var Param = PluginManager.parameters('Ramza_FoodBuffs')
Ramza.FB.Params = Ramza.FB.Params || {};
Ramza.FB.Params.NewApplicationEffect = String(Param['NewApplicationEffect'])
Ramza.FB.Params.RefreshEffect = String(Param['RefreshEffect'])
Ramza.FB.Params.RemoveOnDeath = eval(Param['RemoveOnDeath'])
Ramza.FB.Params.RemoveOnFullHeal = eval(Param['RemoveOnFullHeal'])
Ramza.FB.Params.FullHeal = eval(Param['FullHeal'])
Ramza.FB.Params.FullMpHeal = eval(Param['FullMpHeal'])
Ramza.FB.Params.CureStatus = eval(Param['CureStatus'])
Ramza.FB.Params.StateList = JSON.parse(Param['StateList'])
Ramza.FB.Params.StateList.forEach(function(ele,index,arr){
	arr[index] = Number(ele)
})
Ramza.FB.Params.StateCounters = (eval(Param['StateCounters']) && Imported.YEP_BuffsStatesCore) ? true : false
Ramza.FB.Params.StateDisplays = (eval(Param['StateDisplays']) && Imported.VisuMZ_1_SkillsStatesCore) ? true : false
Ramza.FB.Params.Favorites = JSON.parse(Param['Favorites'])
Ramza.FB.Params.Favorites.forEach(function(ele,index,arr){
	arr[index] = JSON.parse(ele)
	arr[index].ActorId = Number(arr[index].ActorId)
	arr[index].FavoriteBuff = Number(arr[index].FavoriteBuff)
	arr[index].Favorites = JSON.parse(arr[index].Favorites)
	arr[index].Favorites.forEach(function(ele2, index2, arr2){
		arr2[index2] = Number(ele2)
	})
})
Ramza.FB.Params.DefaultFavoriteSound = JSON.parse(Param['DefaultFavoriteSound'])
Ramza.FB.Params.ActorSounds = JSON.parse(Param['ActorSounds'])
Ramza.FB.Params.ActorSounds.forEach(function(ele,index,arr){
	arr[index] = JSON.parse(ele)
	arr[index].ActorId = Number(JSON.parse(ele).ActorId)
	arr[index].Sound = JSON.parse(JSON.parse(ele).Sound)
	arr[index].Sound.forEach(function(ele2,index2,arr2){
		arr2[index2] = JSON.parse(ele2)
	})
})

//Parse Note tags

Ramza.FB.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if (!Ramza.FB.DataManager_isDatabaseLoaded.call(this)) return false;
	if (!Ramza._loaded_FB) {
		this.processFavoriteFoods($dataActors);
		this.processFBNotetags($dataStates);
		Ramza._loaded_FB = true;
	}
	return true;
};

DataManager.processFavoriteFoods = function(group){
	for (let i = 1; i < group.length; i++){
		var actor = group[i]
		actor._favFoods = []
		var adjList = Ramza.FB.Params.Favorites.filter(ele => ele.ActorId == i)
		if (adjList.length > 0) {
			actor._favFoods = adjList[0].Favorites
			actor._favFoods.forEach(function(ele,index,arr){
				arr[index] = $dataItems[ele]
			})
		}
	};
};

DataManager.processFBNotetags = function(group) {
	var note1 = /<(?:FOOD BUFF):[ ](\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);
		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
				obj._isFoodBuff = true
				obj._battles = parseInt(RegExp.$1)
			}
		}
	}
};

Game_Actor.prototype.getFavoriteFoodSound = function(){
	//returns a sound effect for when a favorite food is consumed, or the default if one isn't set.
	var adjList = Ramza.FB.Params.ActorSounds.filter(actor => actor.ActorId == this.actor().id)
	if (adjList.length > 0){
		var rndm = Math.floor(Math.random()*adjList[0].Sound.length)
		return adjList[0].Sound[rndm]
	} else {
		return Ramza.FB.Params.DefaultFavoriteSound
	}
};

Game_Actor.prototype.isFavoriteFood = function(item){
	return this.favoriteFoods().includes(item)
};

Game_Actor.prototype.favoriteFoods = function(){
	return this.actor()._favFoods
};

Game_Actor.prototype.addState = function(stateId){
	Game_Battler.prototype.addState.call(this, stateId)
	if ($dataStates[stateId]._isFoodBuff) {
		this.applyFoodBuff(stateId)
	}
};

Game_Actor.prototype.removeState = function(stateId){
	Game_Battler.prototype.removeState.call(this, stateId)
	if ($dataStates[stateId]._isFoodBuff) {
		this._foodBuffBattles[stateId] = 0
	}
};



Game_Actor.prototype.applyFoodBuff = function(stateId){
	var states = this.states()
	var buffs = this._foodBuffBattles.some(ele => ele)
	if (buffs && !this._foodBuffBattles[stateId]){
		//new application, already had another buff
		switch(Ramza.FB.Params.NewApplicationEffect){
			case "Item Is Disabled":
				this.removeState(stateId)
			break;
			case "Buff Does Not Apply":
				this.removeState(stateId)
			break;
			case "New Buff Overwrites Old One":
				for (let i = 0; i < this._foodBuffBattles.length; i++){
					if (this._foodBuffBattles[i]){
						this.removeState(i)
						this._foodBuffBattles[i] = 0
					}
				}
				this._foodBuffBattles[stateId] = $dataStates[stateId]._battles
				if (Ramza.FB.Params.StateCounters) this.setStateCounter(stateId, this._foodBuffBattles[stateId])
				if (Ramza.FB.Params.StateDisplays) this.setStateDisplay(stateId, this._foodBuffBattles[stateId])
			break;
			case "Multiple Food Buffs Allowed":
				this._foodBuffBattles[stateId] = $dataStates[stateId]._battles
				if (Ramza.FB.Params.StateCounters) this.setStateCounter(stateId, this._foodBuffBattles[stateId])
				if (Ramza.FB.Params.StateDisplays) this.setStateDisplay(stateId, this._foodBuffBattles[stateId])
			break;
		}
		//this._foodBuffBattles[stateId] = $dataStates[stateId]._battles
	} else if(buffs){
		//refresh
		switch(Ramza.FB.Params.RefreshEffect){
			case "Buff Refreshed to Full Duration":
				this._foodBuffBattles[stateId] = $dataStates[stateId]._battles
				if (Ramza.FB.Params.StateCounters) this.setStateCounter(stateId, this._foodBuffBattles[stateId])
				if (Ramza.FB.Params.StateDisplays) this.setStateDisplay(stateId, this._foodBuffBattles[stateId])
			break;
			case "Current Duration Added to Refresh":
				this._foodBuffBattles[stateId] += $dataStates[stateId]._battles
				if (Ramza.FB.Params.StateCounters) this.setStateCounter(stateId, this._foodBuffBattles[stateId])
				if (Ramza.FB.Params.StateDisplays) this.setStateDisplay(stateId, this._foodBuffBattles[stateId])
			break;
			case "Add One to Full Duration":
				this._foodBuffBattles[stateId] = $dataStates[stateId]._battles + 1
				if (Ramza.FB.Params.StateCounters) this.setStateCounter(stateId, this._foodBuffBattles[stateId])
				if (Ramza.FB.Params.StateDisplays) this.setStateDisplay(stateId, this._foodBuffBattles[stateId])
			break;
			case "No Change":
				//nothing happens
			break;
		}
	} else {
		//new applicaton, no old buff
		this._foodBuffBattles[stateId] = $dataStates[stateId]._battles
		if (Ramza.FB.Params.StateCounters) this.setStateCounter(stateId, this._foodBuffBattles[stateId])
		if (Ramza.FB.Params.StateDisplays) this.setStateDisplay(stateId, this._foodBuffBattles[stateId])
		
	}
	
};

Ramza.FB.game_actor_setup = Game_Actor.prototype.setup
Game_Actor.prototype.setup = function(actorId) {
	Ramza.FB.game_actor_setup.call(this, actorId)
	this._foodBuffBattles = []
};

Ramza.FB._scene_item_on_actor_ok = Scene_ItemBase.prototype.onActorOk
Scene_ItemBase.prototype.onActorOk = function() {
	var item = this.item()
	var foodEffects = item.effects.filter(effect => effect.code == 21 && $dataStates[effect.dataId]._isFoodBuff)
	if (foodEffects.length > 0){
		if (item.scope == 7){
			if (Ramza.FB.Params.NewApplicationEffect == "Item Is Disabled" && this.itemTargetActors()[0]._foodBuffBattles.some(ele => ele) && !this.itemTargetActors()[0].isStateAffected(foodEffects[0].dataId)){
				SoundManager.playBuzzer();
			}  else if (Ramza.FB.Params.RefreshEffect == "Item Is Disabled" && this.itemTargetActors()[0].isStateAffected(foodEffects[0].dataId)){
				SoundManager.playBuzzer();
			} else {
				Ramza.FB._scene_item_on_actor_ok.call(this)
			}
		} else if (item.scope == 8){
			var list = $gameParty.members().every(actor => actor._foodBuffBattles.some(ele => ele))
			var list2 = $gameParty.members().every(actor => actor.isStateAffected(foodEffects[0].dataId))
			if (Ramza.FB.Params.NewApplicationEffect == "Item Is Disabled" && list){
				SoundManager.playBuzzer();
			}  else if (Ramza.FB.Params.RefreshEffect == "Item Is Disabled" && list2){
				SoundManager.playBuzzer();
			} else {
				Ramza.FB._scene_item_on_actor_ok.call(this)
			}
		}
	} else {
		Ramza.FB._scene_item_on_actor_ok.call(this)
	}
};

Ramza.FB._test_effect = Game_Action.prototype.testItemEffect
Game_Action.prototype.testItemEffect = function(target, effect) {
	switch (effect.code) {
	case Game_Action.EFFECT_ADD_STATE:
		if ($dataStates[effect.dataId]._isFoodBuff){
			return true
		} else {
			return !target.isStateAffected(effect.dataId);
		}
	}
	return Ramza.FB._test_effect.call(this, target, effect)
};

Ramza.FB._on_battle_end = Game_Battler.prototype.onBattleEnd
Game_Battler.prototype.onBattleEnd = function() {
	Ramza.FB._on_battle_end.call(this)
	if (this.isActor()){
		for (let i = 0; i < this._foodBuffBattles.length; i++){
			var state = this._foodBuffBattles[i]
			if (state){
				this._foodBuffBattles[i] -= 1
				if (Ramza.FB.Params.StateCounters) this.setStateCounter(i, this._foodBuffBattles[i])
				if (Ramza.FB.Params.StateDisplays) this.setStateDisplay(i, this._foodBuffBattles[i])
				if (this._foodBuffBattles[i] == 0) this.removeState(i)
			}
		}
	}
};

Ramza.FB.recover_all = Game_BattlerBase.prototype.recoverAll
Game_BattlerBase.prototype.recoverAll = function() {
	$gameTemp._recoveryClear = true
	Ramza.FB.recover_all.call(this)
	$gameTemp._recoveryClear = false
};

Ramza.FB.die = Game_BattlerBase.prototype.die
Game_BattlerBase.prototype.die = function() {
	$gameTemp._deathClear = true
	Ramza.FB.die.call(this)
	$gameTemp._deathClear = false
};

Ramza.FB._clear_states = Game_BattlerBase.prototype.clearStates
Game_BattlerBase.prototype.clearStates = function() {
	if ($gameTemp._deathClear || $gameTemp._recoveryClear){
		var foodBuffs = JsonEx.makeDeepCopy(this._states);
		var turns = JsonEx.makeDeepCopy(this._stateTurns);
		var battles = JsonEx.makeDeepCopy(this._foodBuffBattles);
	}
	Ramza.FB._clear_states.call(this)
	this._foodBuffBattles = []
	if ($gameTemp._deathClear || $gameTemp._recoveryClear){
		this.regainFoodBuffs(foodBuffs, turns, battles)
	}
};

Game_BattlerBase.prototype.regainFoodBuffs = function(states, turns, battles){
		for (let i = 0; i < states.length; i++){
			var id = states[i]
			var state = $dataStates[id]
			if (!state) continue
			if ($gameTemp._deathClear && !Ramza.FB.Params.RemoveOnDeath && state._isFoodBuff){
				this._states.push(id)
				this._stateTurns[id] = turns[id]
				this._foodBuffBattles[id] = battles[id]
			}
			if ($gameTemp._recoveryClear && !Ramza.FB.Params.RemoveOnFullHeal && state._isFoodBuff){
				this._states.push(id)
				this._stateTurns[id] = turns[id]
				this._foodBuffBattles[id] = battles[id]
			}
		}
};

Ramza.FB.play_item_sound = Scene_Item.prototype.playSeForItem
Scene_Item.prototype.playSeForItem = function() {
	var user = this.itemTargetActors()[0]
	if (this.item().scope == 7 && user.isFavoriteFood(this.item())){
		$gameTemp._usedFavorite = true
		AudioManager.playSe(user.getFavoriteFoodSound())
	} else if (this.item().scope == 8 && $gameParty.members().some(function(actor){
		return actor.isFavoriteFood(SceneManager._scene.item())
	})){
		$gameTemp._usedFavorite = true
		var list = $gameParty.members().filter(actor => actor.isFavoriteFood(SceneManager._scene.item()))
		//disqualify an actor who the food will not be applied on
		if (Ramza.FB.Params.NewApplicationEffect == "Item Is Disabled"){
			var foodEffects = this.item().effects.filter(effect => effect.code == 21 && $dataStates[effect.dataId]._isFoodBuff)
			list = list.filter(actor => !actor._foodBuffBattles.some(ele => ele) || actor.isStateAffected(foodEffects[0].dataId))
		}
		if (list[0]) {
			AudioManager.playSe(list[Math.floor(Math.random()*list.length)].getFavoriteFoodSound())
		} else {
			Ramza.FB.play_item_sound.call(this)
		}
	} else {
		Ramza.FB.play_item_sound.call(this)
	}
};

Ramza.FB.apply_item = Scene_ItemBase.prototype.applyItem
Scene_ItemBase.prototype.applyItem = function() {
	if (!$gameTemp._usedFavorite){
		Ramza.FB.apply_item.call(this)
		
	} else {
		var action = new Game_Action(this.user());
		this.itemTargetActors().forEach(function(target) {
			if (target.isFavoriteFood(this.item())){
				var favItem = JsonEx.makeDeepCopy(this.item())
				favItem.id = $dataItems.length
				$dataItems[favItem.id] = JsonEx.makeDeepCopy($dataItems[this.item().id])
				$dataItems[favItem.id].id = favItem.id
				var effects = $dataItems[favItem.id].effects
				var favBuffId = Ramza.FB.Params.Favorites.filter(actor => actor.ActorId == target.actorId())
				if (favBuffId[0]) favBuffId = favBuffId[0].FavoriteBuff
				if (favBuffId != 0){
				effects.forEach(function(ele,index,arr){
					if (ele.code == 21 && $dataStates[ele.dataId]._isFoodBuff){
						arr.splice(index,1)
					}
				})
				if (favBuffId) effects.push({code: 21, dataId: favBuffId, value1: 1, value2: 0})
				if (Ramza.FB.Params.FullHeal && favBuffId) effects.push({code: 11, dataId: 0, value1: 1, value2: 0})
				if (Ramza.FB.Params.FullMpHeal && favBuffId) effects.push({code: 12, dataId: 0, value1: 1, value2: 0})
				if (Ramza.FB.Params.CureStatus && favBuffId){
					Ramza.FB.Params.StateList.forEach(function(ele){
						effects.push({code: 22, dataId: ele, value1: 1, value2: 0})
					})
				}
				}
				var foodEffects = favItem.effects.filter(effect => effect.code == 21 && $dataStates[effect.dataId]._isFoodBuff)
				action.setItemObject(favItem);
				action._item._dataClass = "item"
				for (var i = 0; i < action.numRepeats(); i++) {
					if (!(Ramza.FB.Params.NewApplicationEffect == "Item Is Disabled" 
					&& target._foodBuffBattles.some(ele => ele) 
					&& !target.isStateAffected(foodEffects[0].dataId)) || 
					(Ramza.FB.Params.RefreshEffect == "Item Is Disabled" && target.isStateAffected(foodEffects[0].dataId))
					){
						action.apply(target);
					}
				}
			} else {
				action.setItemObject(this.item())
				for (var i = 0; i < action.numRepeats(); i++) {
				action.apply(target);
				}
			}
		}, this);
		action.applyGlobal();
		delete $gameTemp._usedFavorite
		$dataItems.pop()
	}
};