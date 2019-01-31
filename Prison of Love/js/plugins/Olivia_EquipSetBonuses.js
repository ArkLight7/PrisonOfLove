//=============================================================================
// Olivia Engine - Equip Set Bonuses - for RPG Maker MV version 1.6.1
// Olivia_EquipSetBonuses.js
//=============================================================================
 /*:
 * @plugindesc <EquipSetBonuses> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that allows you to set equipment to be a part
 * of various sets. When multiple pieces of the set are equipped, (for example:
 * Fireproof Shield, Fireproof Hat, Fireproof Vest), then bonuses are applied.
 * Bonuses can be applied at different stages, too, depending on how many set
 * pieces are being currently equipped. The art (sprite, face, battler) for an
 * actor can also change based on the number of equipment sets worn.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Equipment Sets: This is where you put all your equipment sets used in the
 * game. Adjust their settings here. You can add as many equipment sets as you
 * want for your game.
 *
 * Equipment Set Name: Set's name. Case does not matter. This is its in-game
 * name. Register equips to sets using <Equip Set: x> notetag.
 *
 * Equipment Set Bonuses: Bonuses applied for having a different number of
 * pieces equipped. These settings stack with later bonuses in the same set.
 *
 * Text: Text that appears next to each piece in the tooltip window. Use 'auto'
 * if you want this to be done automatically by the plugin.
 *
 * Show in Tooltip?: Shows this particular bonus effect in the tooltip window.
 * If it's set to false, then it will be hidden. If it's set to true, it will be
 * shown, but only if there's changes made to states or stats.
 *
 * Passive States: This are states that will be given out as passives when the
 * required piece count is equipped.
 *
 * Param Bonuses: The bonuses to the basic parameters like MaxHP and ATK when
 * the required piece count is equipped. Rate is a multiplicative bonus. Plus is
 * an additive bonus.
 *
 * X Param Bonuses: The bonuses to the extra parameters like HIT and CRI when
 * the required piece count is equipped. Rate is a multiplicative bonus. Plus is
 * an additive bonus.
 *
 * S Param Bonuses: The bonuses to the special parameters like HIT and CRI when
 * the required piece count is equipped. Rate is a multiplicative bonus. Plus is
 * an additive bonus.
 *
 * Tooltips: A tooltip window shown in certain scenes to deliver information to
 * the player about equipment set bonuses.
 *
 * Show Tooltips?: You can decide if you want these in your game or not. Turn it
 * on or off with true or false.
 *
 * Window Scale: You can scale how big or small you want the tooltip window.
 * By default, it's scaled down to 60% the normal size of a window.
 *
 * Window Skin: This is the window skin used for the tooltip window. You can set
 * it to something different to make it stand out from the regular window skin.
 *
 * Window Skin Opacity: Change the opacity of the tooltip window's window skin.
 * If it's opaque, it will be semi-transparent, making the text harder to read.
 *
 * OffsetX, OffsetY: Offset the tooltip window from what's being selected by
 * this many pixels.
 *
 * Vocab for X, S Parameters: There's no default vocabulary used for X and S
 * parameters in the database. Use this change the way they look for the tooltip
 * window. DO NOT ADD OR DELETE ENTRIES. Only modify them.
 *
 * Format Set Name: The text format for the set name in the tooltip window.
 *
 * Format Pieces: The text format for the pieces count and the bonus associated
 * with that required pieces count.
 *
 * Show State Icons?: When showing passive states, you can decide if you want
 * the passives' icons to show with true or false.
 *
 *
 *
 * --------
 * Notetags
 * --------
 *
 * Weapon and Armor Notetags:
 * 
 * <Equip Set: name>
 * This assigns this item to an equipment set.
 * - 'name' is the set name you're going to associate this equip with.
 * 
 * If you want to make a piece of equipment be a part of two different equipment
 * sets, use multiple copies of the <Equip Set: name> notetag.
 *
 * 
 *
 * Actor Notetags:
 * 
 * <name Set, x Pieces Character: filename, index>
 * This changes the character sprite, aka the map sprite, for this actor.
 * - 'name' is the set name that is associated with this graphic change.
 * - 'x' is to be replaced by a number. This is the minimum required pieces.
 * - 'filename' is the filename of the graphic. IMPORTANT: Case sensitive.
 * - 'index' is to be replaced by a number. This is the index number of the
 * graphic starting from 0 as the first slot.
 * 
 * <name Set, x Pieces Face: filename, index>
 * This changes the face art for the actor.
 * - 'name' is the set name that is associated with this graphic change.
 * - 'x' is to be replaced by a number. This is the minimum required pieces.
 * - 'filename' is the filename of the graphic. IMPORTANT: Case sensitive.
 * - 'index' is to be replaced by a number. This is the index number of the
 * graphic starting from 0 as the first slot.
 * 
 * <name Set, x Pieces Battler: filename>
 * This changes the sideview battler sprite for this actor.
 * - 'name' is the set name that is associated with this graphic change.
 * - 'x' is to be replaced by a number. This is the minimum required pieces.
 * - 'filename' is the filename of the graphic. IMPORTANT: Case sensitive.
 *
 * To make different sets of graphics per set, add multiples of the above 
 * notetags for each actor. This effect may or may not be compatible with other
 * plugins that alter the appearance of your actors.
 *
 *
 *
 * -------------
 * Compatibility
 * -------------
 *
 * This plugin is compatible with the following plugins:
 *
 * - YEP_CoreEngine.js
 * - YEP_ItemCore.js
 * - YEP_EquipCore.js
 * - YEP_ShopMenuCore.js
 * 
 * Place this plugin under those in the Plugin Manager list.
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
 * @param EquipSets
 * @text Equipment Sets
 * @type struct<EquipSet>[]
 * @desc This is where you put all your equipment sets used in the game. Adjust their settings here.
 *
 * @param
 * @param Tooltips
 *
 * @param ShowTooltips
 * @text Show Tooltips?
 * @parent Tooltips
 * @type boolean
 * @on Show
 * @off Hide
 * @desc If true, show tooltips detailing the bonuses for the set
 * @default true
 *
 * @param WindowScale
 * @text Window Scale
 * @parent Tooltips
 * @desc Scale the size of the contents of the tooltip window down by this much
 * @default 0.6
 *
 * @param WindowSkin
 * @text Window Skin
 * @parent Tooltips
 * @type file
 * @dir img/system/
 * @desc Window skin used for Tooltip window
 * @default Window
 *
 * @param SkinOpacity
 * @text Window Skin Opacity
 * @parent WindowSkin
 * @type number
 * @min 0
 * @max 255
 * @desc Opacity of the window skin
 * @default 240
 *
 * @param OffsetX
 * @parent Tooltips
 * @desc X offset of the tooltip window.
 * @default 16
 *
 * @param OffsetY
 * @parent Tooltips
 * @desc Y offset of the tooltip window.
 * @default 16
 *
 * @param VocabXParam
 * @text Vocab for X Parameters
 * @type text[]
 * @parent Tooltips
 * @desc Vocabulary used for X Parameters. Do not add or delete any entries. Only modify them.
 * @default ["Hit Rate","Evasion Rate","Critical Rate","Critical Evasion","Magic Evasion","Magic Reflection","Counter Rate","HP Regen","MP Regen","TP Regen"]
 *
 * @param VocabSParam
 * @text Vocab for S Parameters
 * @type text[]
 * @parent Tooltips
 * @desc Vocabulary used for S Parameters. Do not add or delete any entries. Only modify them.
 * @default ["Aggro","Guard Effect","Recovery","Pharmacology","MP Cost","TP Charge","Physical Damage","Magical Damage","Floor Damage","EXP Gain"]
 *
 * @param SetNameFmt
 * @text Format: Set Name
 * @parent Tooltips
 * @desc Text format for set name for how it appears in tooltips
 * %1 is the set's name.
 * @default \c[27]%1 Set Bonuses\c[0]
 *
 * @param PiecesFmt
 * @text Format: Pieces
 * @parent Tooltips
 * @desc Text format for how pieces and their bonuses appear
 * %1 is pieces count. %2 is pieces bonus.
 * @default \c[27]%1 Set Effect:\c[0] %2
 *
 * @param ShowStateIcon
 * @text Show State Icons?
 * @parent Tooltips
 * @type boolean
 * @on Show
 * @off Hide
 * @desc If true, show state icons for the passives in the tooltips
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * struct<EquipSet>[]
 * ---------------------------------------------------------------------------
 */
/*~struct~EquipSet:
 *
 * @param Set
 * @text Equipment Set Name
 * @desc Set's name. Case does not matter. This is its in-game name.
 * Register equips to sets using <Equip Set: x> notetag.
 * @default Untitled
 *
 * @param
 *
 * @param Bonuses
 * @text Equipment Set Bonuses
 *
 * @param Piece1
 * @text 1 Piece Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece2
 * @text 2 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece3
 * @text 3 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece4
 * @text 4 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece5
 * @text 5 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece6
 * @text 6 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece7
 * @text 7 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece8
 * @text 8 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece9
 * @text 9 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece10
 * @text 10 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece11
 * @text 11 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece12
 * @text 12 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece13
 * @text 13 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece14
 * @text 14 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece15
 * @text 15 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece16
 * @text 16 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece17
 * @text 17 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece18
 * @text 18 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece19
 * @text 19 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece20
 * @text 20 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 */
/* ----------------------------------------------------------------------------
 * struct<EquipSetPieces>[]
 * ---------------------------------------------------------------------------
 */
/*~struct~EquipSetPieces:
 *
 * @param Text
 * @desc Text that appears next to each piece in the tooltip window.
 * Use 'auto' if you want this to be done automatically.
 * @default auto
 *
 * @param ShowText
 * @text Show in Tooltip?
 * @parent Text
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this in the tooltip?
 * @default true
 *
 * @param
 * @param PassiveStates
 * @text Passive States
 * @type State[]
 * @desc States that will be given out as passives when the required piece count is equipped.
 * @default []
 *
 * @param
 * @param Param Bonuses
 *
 * @param MaxHP
 * @parent Param Bonuses
 * @default Maximum Hit Points
 *
 * @param MaxHPRate
 * @text Rate
 * @parent MaxHP
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MaxHPPlus
 * @text Plus
 * @parent MaxHP
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param MaxMP
 * @parent Param Bonuses
 * @default Maximum Magic Points
 *
 * @param MaxMPRate
 * @text Rate
 * @parent MaxMP
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MaxMPPlus
 * @text Plus
 * @parent MaxMP
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param ATK
 * @parent Param Bonuses
 * @default Attack
 *
 * @param ATKRate
 * @text Rate
 * @parent ATK
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param ATKPlus
 * @text Plus
 * @parent ATK
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param DEF
 * @parent Param Bonuses
 * @default Defense
 *
 * @param DEFRate
 * @text Rate
 * @parent DEF
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param DEFPlus
 * @text Plus
 * @parent DEF
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param MAT
 * @parent Param Bonuses
 * @default Magic Attack
 *
 * @param MATRate
 * @text Rate
 * @parent MAT
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MATPlus
 * @text Plus
 * @parent MAT
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param MDF
 * @parent Param Bonuses
 * @default Magic Defense
 *
 * @param MDFRate
 * @text Rate
 * @parent MDF
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MDFPlus
 * @text Plus
 * @parent MDF
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param AGI
 * @parent Param Bonuses
 * @default Agility
 *
 * @param AGIRate
 * @text Rate
 * @parent AGI
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param AGIPlus
 * @text Plus
 * @parent AGI
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param LUK
 * @parent Param Bonuses
 * @default Luck
 *
 * @param LUKRate
 * @text Rate
 * @parent LUK
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param LUKPlus
 * @text Plus
 * @parent LUK
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param
 * @param X Param Bonuses
 *
 * @param HIT
 * @parent X Param Bonuses
 * @default Hit Rate
 *
 * @param HITRate
 * @text Rate
 * @parent HIT
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param HITPlus
 * @text Plus
 * @parent HIT
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param EVA
 * @parent X Param Bonuses
 * @default Evasion Rate
 *
 * @param EVARate
 * @text Rate
 * @parent EVA
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param EVAPlus
 * @text Plus
 * @parent EVA
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param CRI
 * @parent X Param Bonuses
 * @default Critical Hit
 *
 * @param CRIRate
 * @text Rate
 * @parent CRI
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param CRIPlus
 * @text Plus
 * @parent CRI
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param CEV
 * @parent X Param Bonuses
 * @default Critical Evasion
 *
 * @param CEVRate
 * @text Rate
 * @parent CEV
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param CEVPlus
 * @text Plus
 * @parent CEV
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param MEV
 * @parent X Param Bonuses
 * @default Magic Evasion
 *
 * @param MEVRate
 * @text Rate
 * @parent MEV
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MEVPlus
 * @text Plus
 * @parent MEV
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param MRF
 * @parent X Param Bonuses
 * @default Magic Reflect
 *
 * @param MRFRate
 * @text Rate
 * @parent MRF
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MRFPlus
 * @text Plus
 * @parent MRF
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param CNT
 * @parent X Param Bonuses
 * @default Counter Rate
 *
 * @param CNTRate
 * @text Rate
 * @parent CNT
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param CNTPlus
 * @text Plus
 * @parent CNT
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param HRG
 * @parent X Param Bonuses
 * @default HP Regen Rate
 *
 * @param HRGRate
 * @text Rate
 * @parent HRG
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param HRGPlus
 * @text Plus
 * @parent HRG
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param MRG
 * @parent X Param Bonuses
 * @default Magic Regen Rate
 *
 * @param MRGRate
 * @text Rate
 * @parent MRG
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MRGPlus
 * @text Plus
 * @parent MRG
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param TRG
 * @parent X Param Bonuses
 * @default TP Regen Rate
 *
 * @param TRGRate
 * @text Rate
 * @parent TRG
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param TRGPlus
 * @text Plus
 * @parent TRG
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param
 * @param S Param Bonuses
 *
 * @param TGR
 * @parent X Param Bonuses
 * @default Target Rate
 *
 * @param TGRRate
 * @text Rate
 * @parent TGR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param TGRPlus
 * @text Plus
 * @parent TGR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param GRD
 * @parent X Param Bonuses
 * @default Guard Rate
 *
 * @param GRDRate
 * @text Rate
 * @parent GRD
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param GRDPlus
 * @text Plus
 * @parent GRD
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param REC
 * @parent X Param Bonuses
 * @default Recovery Rate
 *
 * @param RECRate
 * @text Rate
 * @parent REC
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param RECPlus
 * @text Plus
 * @parent REC
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param PHA
 * @parent X Param Bonuses
 * @default Pharmacology Rate
 *
 * @param PHARate
 * @text Rate
 * @parent PHA
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param PHAPlus
 * @text Plus
 * @parent PHA
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param MCR
 * @parent X Param Bonuses
 * @default MP Cost Rate
 *
 * @param MCRRate
 * @text Rate
 * @parent MCR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MCRPlus
 * @text Plus
 * @parent MCR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param TCR
 * @parent X Param Bonuses
 * @default TP Charge Rate
 *
 * @param TCRRate
 * @text Rate
 * @parent TCR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param TCRPlus
 * @text Plus
 * @parent TCR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param PDR
 * @parent X Param Bonuses
 * @default Physical Damage Rate
 *
 * @param PDRRate
 * @text Rate
 * @parent PDR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param PDRPlus
 * @text Plus
 * @parent PDR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param MDR
 * @parent X Param Bonuses
 * @default Magical Damage Rate
 *
 * @param MDRRate
 * @text Rate
 * @parent MDR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MDRPlus
 * @text Plus
 * @parent MDR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param FDR
 * @parent X Param Bonuses
 * @default Floor Damage Rate
 *
 * @param FDRRate
 * @text Rate
 * @parent FDR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param FDRPlus
 * @text Plus
 * @parent FDR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param EXR
 * @parent X Param Bonuses
 * @default Experience Gain Rate
 *
 * @param EXRRate
 * @text Rate
 * @parent EXR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param EXRPlus
 * @text Plus
 * @parent EXR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 */
//=============================================================================

var Imported = Imported || {};
Imported.Olivia_EquipSetBonuses = true;

var Olivia = Olivia || {};
Olivia.EquipSetBonuses = Olivia.EquipSetBonuses || {};

var parameters = $plugins.filter(function(p) { return p.description.contains('<EquipSetBonuses>') })[0].parameters;

(function(parameters) {
    var detectChanges = function(obj) {
        if (obj.text !== 'auto') return true;
        if (obj.states.length > 0) return true;
        var dataSets = ['paramRate','xparamRate','sparamRate'];
        for (var i = 0; i < dataSets.length; i++) { for (var j = 0; j < obj[dataSets[i]].length; j++) { if (obj[dataSets[i]][j] !== 1) return true; }}
        var dataSets = ['paramPlus','xparamPlus','sparamPlus'];
        for (var i = 0; i < dataSets.length; i++) { for (var j = 0; j < obj[dataSets[i]].length; j++) { if (obj[dataSets[i]][j] !== 0) return true; }}
        return false;
    }
    var extractData = function(data, setName) {
        obj = {};
        obj.setName = setName;
        obj.text = data.Text;
        obj.showText = data.ShowText.match(/true/i) ? true : false;
        var states = JSON.parse(data.PassiveStates);
        obj.states = [];
        while (states.length > 0) { obj.states.push(parseInt(states.shift())) };
        var paramKeys = ['MaxHP','MaxMP','ATK','DEF','MAT','MDF','AGI','LUK'];
        var xparamKeys = ['HIT','EVA','CRI','CEV','MEV','MRF','CNT','HRG','MRG','TRG'];
        var sparamKeys = ['TGR','GRD','REC','PHA','MCR','TCR','PDR','MDR','FDR','EXR'];
        obj.paramRate = [];
        for (var i = 0; i < paramKeys.length; i++) { obj.paramRate.push(Number(data[paramKeys[i]+'Rate'])) };
        obj.paramPlus = [];
        for (var i = 0; i < paramKeys.length; i++) { obj.paramPlus.push(Number(data[paramKeys[i]+'Plus'])) };
        obj.xparamRate = [];
        for (var i = 0; i < xparamKeys.length; i++) { obj.xparamRate.push(Number(data[xparamKeys[i]+'Rate'])) };
        obj.xparamPlus = [];
        for (var i = 0; i < xparamKeys.length; i++) { obj.xparamPlus.push(Number(data[xparamKeys[i]+'Plus'])) };
        obj.sparamRate = [];
        for (var i = 0; i < sparamKeys.length; i++) { obj.sparamRate.push(Number(data[sparamKeys[i]+'Rate'])) };
        obj.sparamPlus = [];
        for (var i = 0; i < sparamKeys.length; i++) { obj.sparamPlus.push(Number(data[sparamKeys[i]+'Plus'])) };
        obj.changed = detectChanges(obj);
        return obj;
    }

    var sets = JSON.parse(parameters['EquipSets']);
    Olivia.EquipSetBonuses.Sets = {};
    for (var i = 0; i < sets.length; ++i) {
        sets[i] = JSON.parse(sets[i]);
        if (!!sets[i]) {
            var set = sets[i];
            var setKey = set.Set.toLowerCase();
            set.Bonuses = [null];
            var max = 1;
            while (max <= 20) {
                var key = 'Piece' + max;
                var data = extractData(JSON.parse(set[key]), set.Set);
                set.Bonuses.push(data)
                max++;
            }
            Olivia.EquipSetBonuses.Sets[setKey] = set.Bonuses;
        }
    }
})(parameters);

Olivia.EquipSetBonuses.Tooltips = {
    show: eval(parameters['ShowTooltips']),
    windowSkin: String(parameters['WindowSkin']),
    windowSkinOpacity: Number(parameters['SkinOpacity']),
    scaleRate: Number(parameters['WindowScale']),
    offsetX: Number(parameters['OffsetX']),
    offsetY: Number(parameters['OffsetY']),
    vocabXParam: JSON.parse(parameters['VocabXParam']),
    vocabSParam: JSON.parse(parameters['VocabSParam']),
    // Text Settings
    setNameText: String(parameters['SetNameFmt']),
    piecesText: String(parameters['PiecesFmt']),
    drawStateIcons: eval(parameters['ShowStateIcon']),
};

//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.

Game_BattlerBase.prototype.equipSetBonusParamPlus = function(paramType, paramId) {
    return 0;
};

Game_BattlerBase.prototype.equipSetBonusParamRate = function(paramType, paramId) {
    return 1;
};

Olivia.EquipSetBonuses.___Game_BattlerBase_paramPlus___ = Game_BattlerBase.prototype.paramPlus;
Game_BattlerBase.prototype.paramPlus = function(paramId) {
    var plus = Olivia.EquipSetBonuses.___Game_BattlerBase_paramPlus___.call(this, paramId);
    return plus + this.equipSetBonusParamPlus('param', paramId);
};

Olivia.EquipSetBonuses.___Game_BattlerBase_paramRate___ = Game_BattlerBase.prototype.paramRate;
Game_BattlerBase.prototype.paramRate = function(paramId) {
    var rate = Olivia.EquipSetBonuses.___Game_BattlerBase_paramRate___.call(this, paramId);
    return rate * this.equipSetBonusParamRate('param', paramId);
};

Olivia.EquipSetBonuses.___Game_BattlerBase_xparam___ = Game_BattlerBase.prototype.xparam;
Game_BattlerBase.prototype.xparam = function(xparamId) {
    var value = Olivia.EquipSetBonuses.___Game_BattlerBase_xparam___.call(this, xparamId);
    value += this.equipSetBonusParamPlus('xparam', xparamId);
    value *= this.equipSetBonusParamRate('xparam', xparamId);
    return value;
};

Olivia.EquipSetBonuses.___Game_BattlerBase_sparam___ = Game_BattlerBase.prototype.sparam;
Game_BattlerBase.prototype.sparam = function(sparamId) {
    var value = Olivia.EquipSetBonuses.___Game_BattlerBase_sparam___.call(this, sparamId);
    value += this.equipSetBonusParamPlus('sparam', sparamId);
    value *= this.equipSetBonusParamRate('sparam', sparamId);
    return value;
};

Olivia.EquipSetBonuses.___Game_BattlerBase_states___ = Game_BattlerBase.prototype.states;
Game_BattlerBase.prototype.states = function() {
    var states = Olivia.EquipSetBonuses.___Game_BattlerBase_states___.call(this);
    states = this.addEquipSetBonusStates(states);
    return states;
};

Game_BattlerBase.prototype.addEquipSetBonusStates = function(states) {
    return states;
};

//-----------------------------------------------------------------------------
// Game_Actors
//
// The wrapper class for an actor array.

Olivia.EquipSetBonuses.___Game_Actor_releaseUnequippableItems___ = Game_Actor.prototype.releaseUnequippableItems;
Game_Actor.prototype.releaseUnequippableItems = function(forcing) {
    Olivia.EquipSetBonuses.___Game_Actor_releaseUnequippableItems___.call(this, forcing);
    this.refreshEquipSetBonuses();
};

Game_Actor.prototype.checkRefreshEquipSetBonuses = function() {
    if (this._equipSetBonusStateIDs === undefined || this._equipSetBonusFlags === undefined || this._equipSetBonusCount === undefined) {
        this.refreshEquipSetBonuses();
    }
    if (this.actor().equipSetCharacterGraphic === undefined || this.actor().equipSetFaceGraphic === undefined || this.actor().equipSetBattlerGraphic === undefined) {
        Olivia.setupEquipSetVisualNotetags(this.actor());
    }
};

Game_Actor.prototype.refreshEquipSetBonuses = function() {
    this.clearEquipSetBonusFlags();
    this.setupEquipSetNotetags();
    this.applyEquipSetBonuses();
    this.makeEquipSetBonusStateIDs();
};

Game_Actor.prototype.clearEquipSetBonusFlags = function() {
    this._equipSetBonusFlags = [];
    this._equipSetBonusCount = {};
    this._equipSetBonusStateIDs = [];
};

Game_Actor.prototype.setupEquipSetNotetags = function() {
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (!!item && !item.equipSet) {
            Olivia.setupEquipSetBonusNotetags(item);
        }
    }
};

Olivia.setupEquipSetBonusNotetags = function(obj) {
    obj.equipSet = [];
    if (Imported.YEP_ItemCore && obj.baseItemId) {
        if (DataManager.isWeapon(obj)) {
            var note = $dataWeapons[obj.baseItemId].note;
        } else {
            var note = $dataArmors[obj.baseItemId].note;
        }
    } else {
        var note = obj.note;
    }
    var notedata = note.split(/[\r\n]+/);
    var flag = false;
    for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(/<(?:Equip|Equipment) Set: (.*)>/i)) {
            obj.equipSet.push(String(RegExp.$1).trim().toLowerCase());
        } else if (line.match(/<(?:Equip|Equipment) Set>/i)) {
            flag = true;
        } else if (line.match(/<\/(?:Equip|Equipment) Set>/i)) {
            flag = false;
        } else if (flag) {
            obj.equipSet.push(line.trim().toLowerCase());
        }
    }
};

Olivia.setupEquipSetVisualNotetags = function (obj) {
    obj.equipSetCharacterGraphic = obj.equipSetCharacterGraphic || {};
    obj.equipSetFaceGraphic = obj.equipSetFaceGraphic || {};
    obj.equipSetBattlerGraphic = obj.equipSetBattlerGraphic || {};
    var notedata = obj.note.split(/[\r\n]+/);
    for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(/<(.*) Set, (\d+) (?:Piece|Pieces) Character: (.*), (\d+)>/i)) {
            var keyName = String(RegExp.$1).toLowerCase() + ':';
            var keyIndex = parseInt(RegExp.$2);
            var data = [String(RegExp.$3), parseInt(RegExp.$4)];
            this.makeEquipSetVisualNotetagsData(keyName, keyIndex, data, obj.equipSetCharacterGraphic);
        } else if (line.match(/<(.*) Set, (\d+) (?:Piece|Pieces) Face: (.*), (\d+)>/i)) {
            var keyName = String(RegExp.$1).toLowerCase() + ':';
            var keyIndex = parseInt(RegExp.$2);
            var data = [String(RegExp.$3), parseInt(RegExp.$4)];
            this.makeEquipSetVisualNotetagsData(keyName, keyIndex, data, obj.equipSetFaceGraphic);
        } else if (line.match(/<(.*) Set, (\d+) (?:Piece|Pieces) Battler: (.*)>/i)) {
            var keyName = String(RegExp.$1).toLowerCase() + ':';
            var keyIndex = parseInt(RegExp.$2);
            var data = String(RegExp.$3);
            this.makeEquipSetVisualNotetagsData(keyName, keyIndex, data, obj.equipSetBattlerGraphic);
        }
    }
};

Olivia.makeEquipSetVisualNotetagsData = function (keyName, keyIndex, data, set) {
    var n = 20;
    while (n >= keyIndex) {
        var key = keyName + n;
        if (set[key] === undefined) {
            set[key] = data;
        }
        n--;
    }
};

Game_Actor.prototype.applyEquipSetBonuses = function() {
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (!!item && item.equipSet.length > 0) {
            for (var j = 0; j < item.equipSet.length; j++) {
                var key = item.equipSet[j];
                if (!this._equipSetBonusFlags.contains(key)) {
                    this._equipSetBonusFlags.push(key);
                }
                this._equipSetBonusCount[key] = this._equipSetBonusCount[key] || 0;
                this._equipSetBonusCount[key]++;
            }
        }
    }
};

Game_Actor.prototype.makeEquipSetBonusStateIDs = function() {
    this.checkRefreshEquipSetBonuses();
    var flags = this._equipSetBonusFlags;
    for (var i = 0; i < flags.length; i++) {
        var setKey = this._equipSetBonusFlags[i];
        var pieces = this._equipSetBonusCount[setKey];
        var data = Olivia.EquipSetBonuses.Sets[setKey];
        for (var p = 1; p <= pieces; p++) {
            this._equipSetBonusStateIDs = this._equipSetBonusStateIDs.concat(data[p].states);
        }
    }
};

Game_Actor.prototype.equipSetBonusParamPlus = function(paramType, paramId) {
    this.checkRefreshEquipSetBonuses();
    var value = 0;
    var paramKey = paramType + 'Plus';
    var flags = this._equipSetBonusFlags;
    for (var i = 0; i < flags.length; i++) {
        var setKey = this._equipSetBonusFlags[i];
        var pieces = this._equipSetBonusCount[setKey];
        var data = Olivia.EquipSetBonuses.Sets[setKey];
        for (var p = 1; p <= pieces; p++) {
            value += data[p][paramKey][paramId];
        }
    }
    return value;
};

Game_Actor.prototype.equipSetBonusParamRate = function(paramType, paramId) {
    this.checkRefreshEquipSetBonuses();
    var value = 1;
    var paramKey = paramType + 'Rate';
    var flags = this._equipSetBonusFlags;
    for (var i = 0; i < flags.length; i++) {
        var setKey = this._equipSetBonusFlags[i];
        var pieces = this._equipSetBonusCount[setKey];
        var data = Olivia.EquipSetBonuses.Sets[setKey];
        for (var p = 1; p <= pieces; p++) {
            value *= data[p][paramKey][paramId];
        }
    }
    return value;
};

Game_Actor.prototype.addEquipSetBonusStates = function(states) {
    this.checkRefreshEquipSetBonuses();
    for (var i = 0; i < this._equipSetBonusStateIDs.length; i++) {
        var stateId = this._equipSetBonusStateIDs[i];
        var state = $dataStates[stateId];
        if (!!state && !states.contains(state)) {
            states.push(state);
        }
    }
    states.sort(function(a, b) {
        var p1 = a.priority;
        var p2 = b.priority;
        if (p1 !== p2) return p2 - p1;
        return a - b;
    });
    return states;
};

Olivia.EquipSetBonuses.___Game_Actor_characterName___ = Game_Actor.prototype.characterName;
Game_Actor.prototype.characterName = function() {
    this.checkRefreshEquipSetBonuses();
    var flags = this._equipSetBonusFlags;
    for (var i = 0; i < flags.length; i++) {
        var setKey = flags[i];
        var pieces = this._equipSetBonusCount[setKey];
        var key = setKey + ':' + pieces;
        if (this.actor().equipSetCharacterGraphic[key]) {
            return this.actor().equipSetCharacterGraphic[key][0];
        }
    }
    return Olivia.EquipSetBonuses.___Game_Actor_characterName___.call(this);
};

Olivia.EquipSetBonuses.___Game_Actor_characterIndex___ = Game_Actor.prototype.characterIndex;
Game_Actor.prototype.characterIndex = function() {
    this.checkRefreshEquipSetBonuses();
    var flags = this._equipSetBonusFlags;
    for (var i = 0; i < flags.length; i++) {
        var setKey = flags[i];
        var pieces = this._equipSetBonusCount[setKey];
        var key = setKey + ':' + pieces;
        if (this.actor().equipSetCharacterGraphic[key]) {
            return this.actor().equipSetCharacterGraphic[key][1];
        }
    }
    return Olivia.EquipSetBonuses.___Game_Actor_characterIndex___.call(this);
};

Olivia.EquipSetBonuses.___Game_Actor_faceName___ = Game_Actor.prototype.faceName;
Game_Actor.prototype.faceName = function() {
    this.checkRefreshEquipSetBonuses();
    var flags = this._equipSetBonusFlags;
    for (var i = 0; i < flags.length; i++) {
        var setKey = flags[i];
        var pieces = this._equipSetBonusCount[setKey];
        var key = setKey + ':' + pieces;
        if (this.actor().equipSetFaceGraphic[key]) {
            return this.actor().equipSetFaceGraphic[key][0];
        }
    }
    return Olivia.EquipSetBonuses.___Game_Actor_faceName___.call(this);
};

Olivia.EquipSetBonuses.___Game_Actor_faceIndex___ = Game_Actor.prototype.faceIndex;
Game_Actor.prototype.faceIndex = function() {
    this.checkRefreshEquipSetBonuses();
    var flags = this._equipSetBonusFlags;
    for (var i = 0; i < flags.length; i++) {
        var setKey = flags[i];
        var pieces = this._equipSetBonusCount[setKey];
        var key = setKey + ':' + pieces;
        if (this.actor().equipSetFaceGraphic[key]) {
            return this.actor().equipSetFaceGraphic[key][1];
        }
    }
    return Olivia.EquipSetBonuses.___Game_Actor_faceIndex___.call(this);
};

Olivia.EquipSetBonuses.___Game_Actor_battlerName___ = Game_Actor.prototype.battlerName;
Game_Actor.prototype.battlerName = function() {
    this.checkRefreshEquipSetBonuses();
    var flags = this._equipSetBonusFlags;
    for (var i = 0; i < flags.length; i++) {
        var setKey = flags[i];
        var pieces = this._equipSetBonusCount[setKey];
        var key = setKey + ':' + pieces;
        if (this.actor().equipSetBattlerGraphic[key]) {
            return this.actor().equipSetBattlerGraphic[key];
        }
    }
    return Olivia.EquipSetBonuses.___Game_Actor_battlerName___.call(this);
};

Olivia.EquipSetBonuses.___Game_Actor_changeEquip___ = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function(slotId, item) {
    Olivia.EquipSetBonuses.___Game_Actor_changeEquip___.call(this, slotId, item);
    if (!!item && !!item.equipSet && item.equipSet.length > 0) {
        $gamePlayer.refresh();
    }
};

//-----------------------------------------------------------------------------
// Window_SkillStatus
//
// The window for displaying the skill user's status on the skill screen.

Olivia.EquipSetBonuses.___Window_SkillStatus_refresh___ = Window_SkillStatus.prototype.refresh;
Window_SkillStatus.prototype.refresh = function() {
    if (!!this._actor) {
      var bitmap = ImageManager.loadFace(this._actor.faceName());
      if (bitmap.width <= 0) {
          bitmap.addLoadListener(this.refresh.bind(this));
      } else {
          Olivia.EquipSetBonuses.___Window_SkillStatus_refresh___.call(this);
      }
    }
};



//=============================================================================
// Tooltips
//
// 1. Display data on equipped item's set bonus(es)
  
if (Olivia.EquipSetBonuses.Tooltips.show) {

//-----------------------------------------------------------------------------
// Window_EquipSetBonusTooltip
//
// New window to display Equipment Set Bonus data

function Window_EquipSetBonusTooltip() {
    this.initialize.apply(this, arguments);
}

Window_EquipSetBonusTooltip.prototype = Object.create(Window_Base.prototype);
Window_EquipSetBonusTooltip.prototype.constructor = Window_EquipSetBonusTooltip;

Window_EquipSetBonusTooltip.prototype.initialize = function() {
    this._item = null;
    this._actor = null;
    this._targetWindow = null;
    this._text = '';
    Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, Graphics.boxHeight);
    this.hide();
};

Window_EquipSetBonusTooltip.prototype.loadWindowskin = function() {
    this.windowskin = ImageManager.loadSystem(Olivia.EquipSetBonuses.Tooltips.windowSkin);
};

Window_EquipSetBonusTooltip.prototype.updateTone = function() {
};

Window_EquipSetBonusTooltip.prototype.scaleRate = function() {
    return Olivia.EquipSetBonuses.Tooltips.scaleRate;
};

Window_EquipSetBonusTooltip.prototype.lineHeight = function() {
    return Math.round(Window_Base.prototype.lineHeight.call(this) * this.scaleRate());
};

Window_EquipSetBonusTooltip.prototype.standardFontSize = function() {
    return Math.round(Window_Base.prototype.standardFontSize.call(this) * this.scaleRate());
};

Window_EquipSetBonusTooltip.prototype.standardPadding = function() {
    return Math.round(Window_Base.prototype.standardPadding.call(this) * this.scaleRate());
};

Window_EquipSetBonusTooltip.prototype.textPadding = function() {
    return Math.round(Window_Base.prototype.textPadding.call(this) * this.scaleRate());
};

Window_EquipSetBonusTooltip.prototype.standardBackOpacity = function() {
    return Olivia.EquipSetBonuses.Tooltips.windowSkinOpacity;
};

Window_EquipSetBonusTooltip.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    this.updateShowHide();
};

Window_EquipSetBonusTooltip.prototype.updateShowHide = function() {
    if (!!this._targetWindow) {
        if (this._targetWindow.active) {
            this.show();
        } else {
            this.hide();
        }
    }
};

Window_EquipSetBonusTooltip.prototype.processDrawIcon = function(iconIndex, textState) {
    this.drawIcon(iconIndex, textState.x + 2, textState.y + 2);
    textState.x += Math.round(Window_Base._iconWidth * this.scaleRate()) + 4;
};

Window_EquipSetBonusTooltip.prototype.drawIcon = function(iconIndex, x, y) {
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    var rate = this.scaleRate();
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, Math.round(pw * rate), Math.round(ph * rate));
};

Window_EquipSetBonusTooltip.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = SceneManager._scene.actor();
    }
};

Window_EquipSetBonusTooltip.prototype.setItem = function(item, targetWindow) {
    if (this._item !== item) {
        this._item = item;
        this.generateText();
        this.calculateWindowDimensions();
        this.refresh();
        if (!!targetWindow) {
            this._targetWindow = targetWindow;
            this.repositionWindow(targetWindow);
        }
    }
};

Window_EquipSetBonusTooltip.prototype.generateText = function() {
    this._text = '';
    this._opacityCheck = [];
    if (!!this._item) {
        if (this._item.equipSet === undefined) {
            Olivia.setupEquipSetBonusNotetags(this._item);
        }
        for (var i = 0; i < this._item.equipSet.length; i++) {
            var setKey = this._item.equipSet[i];
            var setData = Olivia.EquipSetBonuses.Sets[setKey];
            this._text += Olivia.EquipSetBonuses.Tooltips.setNameText.format(setData[1].setName) + '\n';
            this._opacityCheck.push(true);
            this.generateBonusText(setKey, setData);
        }
    }
};

Window_EquipSetBonusTooltip.prototype.generateBonusText = function(setKey, setData) {
    for (var p = 1; p <= 20; p++) {
        var bonus = setData[p];
        if (!!bonus.changed) {
            if (bonus.text === 'auto') {
                var bonusText = this.generateBonusAutoText(bonus);
            } else {
                var bonusText = bonus.text;
            }
            this._text += Olivia.EquipSetBonuses.Tooltips.piecesText.format(p, bonusText) + '\n';
            if (!!this._actor) {
                this._opacityCheck.push((this._actor._equipSetBonusCount[setKey] || 0) >= p);
            } else {
                this._opacityCheck.push(true);
            }
        }
    }
};

Window_EquipSetBonusTooltip.prototype.generateBonusAutoText = function(bonusData) {
    var text = '';
    var separator = false;
    // Base Parameters
    for (var i = 0; i < 8; i++) {
        var rateValue = bonusData.paramRate[i];
        var plusValue = bonusData.paramPlus[i];
        if (rateValue !== 1 || plusValue !== 0) {
            if (separator) text += ', ';
            text += TextManager.param(i);
            separator = true;
        }
        if (rateValue !== 1) {
            text += ':';
            text += Math.round(rateValue * 100) + '%';
        }
        if (plusValue !== 0) {
            if (plusValue > 0) text += '+';
            text += plusValue;
        }
    }
    // X Parameters
    for (var i = 0; i < 10; i++) {
        var rateValue = bonusData.xparamRate[i];
        var plusValue = bonusData.xparamPlus[i];
        if (rateValue !== 1 || plusValue !== 0) {
            if (separator) text += ', ';
            text += Olivia.EquipSetBonuses.Tooltips.vocabXParam[i];
            separator = true;
        }
        if (rateValue !== 1) {
            text += ':';
            text += Math.round(rateValue * 100) + '%';
        }
        if (plusValue !== 0) {
            if (plusValue > 0) text += '+';
            text += Math.round(rateValue * 100) + '%';
        }
    }
    // S Parameters
    for (var i = 0; i < 10; i++) {
        var rateValue = bonusData.sparamRate[i];
        var plusValue = bonusData.sparamPlus[i];
        if (rateValue !== 1 || plusValue !== 0) {
            if (separator) text += ', ';
            text += Olivia.EquipSetBonuses.Tooltips.vocabSParam[i];
            separator = true;
        }
        if (rateValue !== 1) {
            text += ':';
            text += Math.round(rateValue * 100) + '%';
        }
        if (plusValue !== 0) {
            if (plusValue > 0) text += '+';
            text += Math.round(rateValue * 100) + '%';
        }
    }
    // States
    var states = bonusData.states;
    for (var i = 0; i < states.length; i++) {
        var stateId = bonusData.states[i];
        var state = $dataStates[stateId];
        var stateName = state.name.replace(/<<(.*?)>>/i, '');
        if (!!state && stateName !== '') {
            if (separator) text += ', ';
            if (Olivia.EquipSetBonuses.Tooltips.drawStateIcons && state.iconIndex > 0) {
                text += '\\i[' + state.iconIndex + ']';
            }
            text += stateName;
            separator = true;
        }
    }
    return text;
};

Window_EquipSetBonusTooltip.prototype.calculateWindowDimensions = function() {
    if (this._text === '') {
        this.width = 0;
        this.height = 0;
    } else {
        var lines = this._text.split(/[\r\n]+/);
        if (lines.length > 0) {
            var width = 0;
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var lineWidth = Window_ChoiceList.prototype.textWidthEx.call(this, line);
                width = Math.max(lineWidth, width);
            }
            this.width = this.standardPadding() * 2 + this.textPadding() * 2 + width;
            this.height = this.standardPadding() * 2 + (lines.length - 1) * this.lineHeight();
        } else {
            this.width = 0;
            this.height = 0;
        }
    }
};

Window_EquipSetBonusTooltip.prototype.refresh = function() {
    this.createContents();
    this.contents.clear();
    if (this.width > 0 && this.height > 0) {
        this.show();
        this.drawTooltipContents();
    } else {
        this.hide();
    }
};

Window_EquipSetBonusTooltip.prototype.drawTooltipContents = function() {
    var lines = this._text.split(/[\r\n]+/);
    var x = this.textPadding();
    var y = 0;
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        this.changePaintOpacity(!!this._opacityCheck[i]);
        this.drawTextEx(line, x, y);
        y += this.lineHeight();
    }
};

Window_EquipSetBonusTooltip.prototype.repositionWindow = function(targetWindow) {
    var x = targetWindow.x + targetWindow.standardPadding() + targetWindow._cursorRect.x;
    var offsetX = Olivia.EquipSetBonuses.Tooltips.offsetX;
    x += offsetX;
    x = x.clamp(0, Graphics.boxWidth - this.width - offsetX);
    var y = targetWindow.y + targetWindow.standardPadding() + targetWindow._cursorRect.y;
    var offsetY = Olivia.EquipSetBonuses.Tooltips.offsetY;
    if (y + offsetY + this.height + targetWindow._cursorRect.height > Graphics.boxHeight) {
        y -= offsetY + this.height;
    } else {
        y += offsetY + targetWindow._cursorRect.height;
    }
    y = y.clamp(0, Graphics.boxHeight - this.height);
    this.x = x;
    this.y = y;
};

//-----------------------------------------------------------------------------
// Window_Base
//
// The superclass of all windows within the game.

Window_Base.prototype.setEquipSetBonusTooltipWindow = function(tooltipWindow) {
    this._equipSetBonusesTooltipWindow = tooltipWindow;
};

Window_Base.prototype.updateEquipSetBonusTooltip = function() {
    if (!!this._equipSetBonusesTooltipWindow) {
        this._equipSetBonusesTooltipWindow.setItem(this.item(), this);
    }
};

//-----------------------------------------------------------------------------
// Window_ItemList
//
// The window for selecting an item on the item screen.

Olivia.EquipSetBonuses.___Window_ItemList_updateHelp___ = Window_ItemList.prototype.updateHelp;
Window_ItemList.prototype.updateHelp = function() {
    Olivia.EquipSetBonuses.___Window_ItemList_updateHelp___.call(this);
    this.updateEquipSetBonusTooltip();
};

//-----------------------------------------------------------------------------
// Window_EquipSlot
//
// The window for selecting an equipment slot on the equipment screen.

Olivia.EquipSetBonuses.___Window_EquipSlot_updateHelp___ = Window_EquipSlot.prototype.updateHelp;
Window_EquipSlot.prototype.updateHelp = function() {
    Olivia.EquipSetBonuses.___Window_EquipSlot_updateHelp___.call(this);
    this.updateEquipSetBonusTooltip();
};

//-----------------------------------------------------------------------------
// Window_ShopBuy
//
// The window for selecting an item to buy on the shop screen.

Olivia.EquipSetBonuses.___Window_ShopBuy_updateHelp___ = Window_ShopBuy.prototype.updateHelp;
Window_ShopBuy.prototype.updateHelp = function() {
    Olivia.EquipSetBonuses.___Window_ShopBuy_updateHelp___.call(this);
    this.updateEquipSetBonusTooltip();
};

//-----------------------------------------------------------------------------
// Scene_Equip
//
// The scene class of the equipment screen.

Olivia.EquipSetBonuses.___Scene_Equip_create___ = Scene_Equip.prototype.create;
Scene_Equip.prototype.create = function() {
    Olivia.EquipSetBonuses.___Scene_Equip_create___.call(this);
    this.createEquipSetBonusesTooltipWindow();
};

Scene_Equip.prototype.createEquipSetBonusesTooltipWindow = function() {
    this._equipSetBonusesTooltipWindow = new Window_EquipSetBonusTooltip();
    this.addChild(this._equipSetBonusesTooltipWindow);
    this._equipSetBonusesTooltipWindow.setActor(this.actor());
    this._itemWindow.setEquipSetBonusTooltipWindow(this._equipSetBonusesTooltipWindow);
    this._slotWindow.setEquipSetBonusTooltipWindow(this._equipSetBonusesTooltipWindow);
};

Olivia.EquipSetBonuses.___Scene_Equip_refreshActor___ = Scene_Equip.prototype.refreshActor;
Scene_Equip.prototype.refreshActor = function() {
    Olivia.EquipSetBonuses.___Scene_Equip_refreshActor___.call(this);
    if (!!this._equipSetBonusesTooltipWindow) {
        this._equipSetBonusesTooltipWindow.setActor(this.actor());
    }
};

Olivia.EquipSetBonuses.___Scene_Equip_onSlotOk___ = Scene_Equip.prototype.onSlotOk;
Scene_Equip.prototype.onSlotOk = function() {
    this._equipSetBonusesTooltipWindow.setItem(null);
    Olivia.EquipSetBonuses.___Scene_Equip_onSlotOk___.call(this);
};

Olivia.EquipSetBonuses.___Scene_Equip_onSlotCancel___ = Scene_Equip.prototype.onSlotCancel;
Scene_Equip.prototype.onSlotCancel = function() {
    this._equipSetBonusesTooltipWindow.setItem(null);
    Olivia.EquipSetBonuses.___Scene_Equip_onSlotCancel___.call(this);
};

Olivia.EquipSetBonuses.___Scene_Equip_onItemOk___ = Scene_Equip.prototype.onItemOk;
Scene_Equip.prototype.onItemOk = function() {
    this._equipSetBonusesTooltipWindow.setItem(null);
    Olivia.EquipSetBonuses.___Scene_Equip_onItemOk___.call(this);
};

Olivia.EquipSetBonuses.___Scene_Equip_onItemCancel___ = Scene_Equip.prototype.onItemCancel;
Scene_Equip.prototype.onItemCancel = function() {
    this._equipSetBonusesTooltipWindow.setItem(null);
    Olivia.EquipSetBonuses.___Scene_Equip_onItemCancel___.call(this);
};

//-----------------------------------------------------------------------------
// Scene_Item
//
// The scene class of the item screen.

Olivia.EquipSetBonuses.___Scene_Item_create___ = Scene_Item.prototype.create;
Scene_Item.prototype.create = function() {
    Olivia.EquipSetBonuses.___Scene_Item_create___.call(this);
    this.createEquipSetBonusesTooltipWindow();
};

Scene_Item.prototype.createEquipSetBonusesTooltipWindow = function() {
    this._equipSetBonusesTooltipWindow = new Window_EquipSetBonusTooltip();
    this.addChild(this._equipSetBonusesTooltipWindow);
    this._itemWindow.setEquipSetBonusTooltipWindow(this._equipSetBonusesTooltipWindow);
};

//-----------------------------------------------------------------------------
// Scene_Shop
//
// The scene class of the shop screen.

Olivia.EquipSetBonuses.___Scene_Shop_create___ = Scene_Shop.prototype.create;
Scene_Shop.prototype.create = function() {
    Olivia.EquipSetBonuses.___Scene_Shop_create___.call(this);
    this.createEquipSetBonusesTooltipWindow();
};

Scene_Shop.prototype.createEquipSetBonusesTooltipWindow = function() {
    this._equipSetBonusesTooltipWindow = new Window_EquipSetBonusTooltip();
    this.addChild(this._equipSetBonusesTooltipWindow);
    this._buyWindow.setEquipSetBonusTooltipWindow(this._equipSetBonusesTooltipWindow);
    this._sellWindow.setEquipSetBonusTooltipWindow(this._equipSetBonusesTooltipWindow);
};

//=============================================================================
} // End Tooltips
//=============================================================================  



























