---
title: Server
sidebar_position: 2
---

# Server Exports

## toggleLock

**Parameters**  
**playerId** - `number` - The ServerId of the player  
**plate** - `string?` - Plate to (un)lock - Optional

```lua
exports.msk_vehiclekeys:toggleLock(playerId, plate)
```

## toggleLockAdmin

(Un)locks without needing a key.

```lua
exports.msk_vehiclekeys:toggleLockAdmin(playerId, plate)
```

## GetVehicleLockState

**Returns**  
**isLocked** - `boolean`

```lua
local isLocked = exports.msk_vehiclekeys:GetVehicleLockState(vehicle)
local isLocked = Entity(vehicle).state.isLocked
```

## HasPlayerKey

**Parameters**  
**playerData** - `table` - `{source}` or `{identifier}`  
**plate** - `string`  
**model** - `number`

**Returns**  
**hasKey** - `boolean`

```lua
local hasKey = exports.msk_vehiclekeys:HasPlayerKey({source = playerId}, plate, model)
```

## HasPlayerPrimaryKey

```lua
local hasKey = exports.msk_vehiclekeys:HasPlayerPrimaryKey({source = playerId}, plate, model)
```

## HasPlayerSecondaryKey

```lua
local hasKey = exports.msk_vehiclekeys:HasPlayerSecondaryKey({source = playerId}, plate, model)
```

## HasPlayerTempKey

```lua
local hasKey = exports.msk_vehiclekeys:HasPlayerTempKey({source = playerId}, plate, model)
```

## HasPlayerKeyOrIsVehicleOwner

**Returns**  
**hasKeyOrIsOwner** - `boolean`

```lua
local hasKeyOrIsOwner = exports.msk_vehiclekeys:HasPlayerKeyOrIsVehicleOwner({source = playerId}, plate, model)
```

## GetPlayerKeys

**Parameters**  
**playerData** - `table` - `{source}` or `{identifier}`

```lua
local keys = exports.msk_vehiclekeys:GetPlayerKeys({source = playerId})

for i = 1, #keys do
    print(keys[i].plate, keys[i].model, keys[i].type)
end
```

## GetPlayerVehicles

```lua
local vehicles = exports.msk_vehiclekeys:GetPlayerVehicles({source = playerId})

for i = 1, #vehicles do
    print(vehicles[i].plate, vehicles[i].model)
end
```

## AddPrimaryKey

**Parameters**  
**playerData** - `table` - `{source}` or `{identifier}`  
**vehicleData** - `table` - `{plate, model}` or `{netId}`

```lua
exports.msk_vehiclekeys:AddPrimaryKey({source = playerId}, {plate = 'LS 1234', model = 1093792632})

local vehicleNetId = NetworkGetNetworkIdFromEntity(vehicle)
exports.msk_vehiclekeys:AddPrimaryKey({source = playerId}, {netId = vehicleNetId})
```

## AddSecondaryKey

```lua
exports.msk_vehiclekeys:AddSecondaryKey({source = playerId}, {plate = 'LS 1234', model = 1093792632})
```

## AddTempKey

```lua
exports.msk_vehiclekeys:AddTempKey({source = playerId}, {plate = 'LS 1234', model = 1093792632})
```

## RemovePrimaryKey

```lua
exports.msk_vehiclekeys:RemovePrimaryKey({source = playerId}, {plate = 'LS 1234', model = 1093792632})
```

## RemoveSecondaryKey

```lua
exports.msk_vehiclekeys:RemoveSecondaryKey({source = playerId}, {plate = 'LS 1234', model = 1093792632})
```

## RemoveTempKey

```lua
exports.msk_vehiclekeys:RemoveTempKey({source = playerId}, {plate = 'LS 1234', model = 1093792632})
```

## ExchangeVehicleLocks

```lua
exports.msk_vehiclekeys:ExchangeVehicleLocks({source = playerId}, {plate = 'LS 1234', model = 1093792632})
```

## TransferVehicle

**Parameters**  
**ownerData** - `table` - `{source}` or `{identifier}`  
**targetData** - `table` - `{source}` or `{identifier}`  
**vehicleData** - `table` - `{plate, model}` or `{netId}`

```lua
exports.msk_vehiclekeys:TransferVehicle({source = playerId}, {source = targetId}, {plate = 'LS 1234', model = 1093792632})
```

## ChangeNumberPlate

Only changes the plate number for all existing keys.

**Parameters**  
**oldPlate** - `string`  
**newPlate** - `string`  
**changeSQL** - `boolean` - Change SQL or not - default: `false`

```lua
exports.msk_vehiclekeys:ChangeNumberPlate("ABC 123", "XYZ 789", true)
exports.msk_vehiclekeys:ChangeNumberPlate("ABC 123", "XYZ 789", false)
```
