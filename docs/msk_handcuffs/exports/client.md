---
title: Client
sidebar_position: 1
---

# Client Exports

## getIsHandcuffed

Check if a player is handcuffed.

**Parameters**  
**player** - `table` - Optional, for other players

**Returns**  
**isHandcuffed** - `boolean`

```lua
-- Self
local isHandcuffed = exports.msk_handcuffs:getIsHandcuffed()
local isHandcuffed = LocalPlayer.state.isHandcuffed -- alternative

-- Other Players
local isHandcuffed = exports.msk_handcuffs:getIsHandcuffed({source = targetId})
```

## getIsHardcuffed

Check if a player is hardcuffed.

```lua
local isHardcuffed = exports.msk_handcuffs:getIsHardcuffed()
local isHardcuffed = LocalPlayer.state.isHardcuffed -- alternative

-- Other Players
local isHardcuffed = exports.msk_handcuffs:getIsHardcuffed({source = targetId})
```

## getHasAnkletracker

Check if a player has an Ankletracker.

```lua
local hasAnkletracker = exports.msk_handcuffs:getHasAnkletracker()
local hasAnkletracker = LocalPlayer.state.hasAnkletracker -- alternative

-- Other Players
local hasAnkletracker = exports.msk_handcuffs:getHasAnkletracker({source = targetId})
```

## getHasHeadbag

Check if a player has a Headbag.

```lua
local hasHeadbag = exports.msk_handcuffs:getHasHeadbag()
local hasHeadbag = LocalPlayer.state.hasHeadbag -- alternative

-- Other Players
local hasHeadbag = exports.msk_handcuffs:getHasHeadbag({source = targetId})
```

## getHasTape

Check if a player has Tape.

```lua
local hasTape = exports.msk_handcuffs:getHasTape()
local hasTape = LocalPlayer.state.hasTape -- alternative

-- Other Players
local hasTape = exports.msk_handcuffs:getHasTape({source = targetId})
```

## cuffPlayer

Cuff a player.

**Parameters**  
**item** - `string` - The Item to cuff with - Optional  
**player** - `player` - The target Player - Optional

**Description**  
If `item` is `nil`, the script checks the correct item from `Config.RestrictItems` if enabled, or cuffs without an item `(isAdminCuffed)`.

```lua
exports.msk_handcuffs:cuffPlayer(item, player)

exports.msk_handcuffs:cuffPlayer()                      -- closest player, auto item
exports.msk_handcuffs:cuffPlayer('cuffs')               -- closest player with item
exports.msk_handcuffs:cuffPlayer(nil, closestPlayer)    -- specific player, auto item
exports.msk_handcuffs:cuffPlayer('cuffs', closestPlayer) -- specific player with item
```

## hardcuffPlayer

Hardcuff a player.

```lua
exports.msk_handcuffs:hardcuffPlayer(item, player)

exports.msk_handcuffs:hardcuffPlayer()
exports.msk_handcuffs:hardcuffPlayer('hardcuff')
exports.msk_handcuffs:hardcuffPlayer(nil, closestPlayer)
exports.msk_handcuffs:hardcuffPlayer('hardcuff', closestPlayer)
```

## uncuffPlayer

Uncuff a player. Checks if the item is correct.

```lua
exports.msk_handcuffs:uncuffPlayer(item, player)

exports.msk_handcuffs:uncuffPlayer()
exports.msk_handcuffs:uncuffPlayer('cuff_keys')
exports.msk_handcuffs:uncuffPlayer(nil, closestPlayer)
exports.msk_handcuffs:uncuffPlayer('cuff_keys', closestPlayer)
```

## ankleTrackerPlayer

Activate/Deactivate an Ankletracker.

```lua
exports.msk_handcuffs:ankleTrackerPlayer(player)

exports.msk_handcuffs:ankleTrackerPlayer()
exports.msk_handcuffs:ankleTrackerPlayer(closestPlayer)
```

## headbagPlayer

Activate/Deactivate a Headbag.

```lua
exports.msk_handcuffs:headbagPlayer(player)

exports.msk_handcuffs:headbagPlayer()
exports.msk_handcuffs:headbagPlayer(closestPlayer)
```

## tapePlayer

Activate/Deactivate Tape.

```lua
exports.msk_handcuffs:tapePlayer(player)

exports.msk_handcuffs:tapePlayer()
exports.msk_handcuffs:tapePlayer(closestPlayer)
```

## dragPlayer / escortPlayer

Drag/Escort the closest player.

```lua
exports.msk_handcuffs:dragPlayer(player)
exports.msk_handcuffs:escortPlayer(player) -- alias

exports.msk_handcuffs:escortPlayer()
exports.msk_handcuffs:escortPlayer(closestPlayer)
```

## putPlayerInCar

Puts the closest player in the car.

```lua
exports.msk_handcuffs:putPlayerInCar(player)

exports.msk_handcuffs:putPlayerInCar()
exports.msk_handcuffs:putPlayerInCar(closestPlayer)
```

## putPlayerOutOfCar

Puts the closest player out of a car.

```lua
exports.msk_handcuffs:putPlayerOutOfCar(player)

exports.msk_handcuffs:putPlayerOutOfCar()
exports.msk_handcuffs:putPlayerOutOfCar(closestPlayer)
```
