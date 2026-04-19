---
title: Client
sidebar_position: 1
---

# Client Exports

## toggleLock

(Un)locks the closest vehicle.

**Parameters**  
**vehicleData** - `table` - `{plate, model}` or `{vehicle}`

```lua
exports.msk_vehiclekeys:toggleLock(nil, vehicleData)

-- Example 1
local vehicle = GetClosestVehicle()
exports.msk_vehiclekeys:toggleLock(nil, {metadata = {plate = GetVehicleNumberPlateText(vehicle), model = GetEntityModel(vehicle)}})

-- Example 2
exports.msk_vehiclekeys:toggleLock(nil, {metadata = {vehicle = vehicle}})
```

## GetVehicleLockState

**Parameters**  
**vehicle** - `int` - A vehicle handle

**Returns**  
**isLocked** - `boolean`

```lua
local isLocked = exports.msk_vehiclekeys:GetVehicleLockState(vehicle)
local isLocked = Entity(vehicle).state.isLocked -- alternative
```

## GetVehicleLockStatus

**Parameters**  
**vehicle** - `int` - A vehicle handle

**Returns**  
**lockStatus** - `number` - `1` if unlocked, `2` if locked

```lua
local lockStatus = exports.msk_vehiclekeys:GetVehicleLockStatus(vehicle)
local lockStatus = Entity(vehicle).state.lockState -- alternative
```

## openKeysMenu

Opens the Keys Menu.

```lua
exports.msk_vehiclekeys:openKeysMenu()
```

## RefreshPlayerKeys

Adds missing permanent keys from owned vehicles.

```lua
exports.msk_vehiclekeys:RefreshPlayerKeys()
```

## GetPlayerKeys

**Parameters**  
**playerId** - `number` - ServerId - Optional (self if omitted)

**Returns**  
**keys** - `table`

```lua
local keys = exports.msk_vehiclekeys:GetPlayerKeys()
local keys = exports.msk_vehiclekeys:GetPlayerKeys(playerId)

for i = 1, #keys do
    print(keys[i].plate, keys[i].model, keys[i].type)
end
```

## HasPlayerKey

**Parameters**  
**vehicle** - `int` - A vehicle handle

**Returns**  
**hasKey** - `boolean`

```lua
local hasKey = exports.msk_vehiclekeys:HasPlayerKey(vehicle)
```

## HasPlayerPrimaryKey

```lua
local hasKey = exports.msk_vehiclekeys:HasPlayerPrimaryKey(vehicle)
```

## HasPlayerSecondaryKey

```lua
local hasKey = exports.msk_vehiclekeys:HasPlayerSecondaryKey(vehicle)
```

## HasPlayerTempKey

```lua
local hasKey = exports.msk_vehiclekeys:HasPlayerTempKey(vehicle)
```

## IsVehicleOwner

**Parameters**  
**vehicle** - `int` - A vehicle handle

**Returns**  
**isOwner** - `boolean`

```lua
local isOwner = exports.msk_vehiclekeys:IsVehicleOwner(vehicle)
```

## HasPlayerKeyOrIsVehicleOwner

**Parameters**  
**vehicle** - `int` - A vehicle handle

**Returns**  
**hasKeyOrIsOwner** - `boolean`

```lua
local hasKeyOrIsOwner = exports.msk_vehiclekeys:HasPlayerKeyOrIsVehicleOwner(vehicle)
```

## AddKey

**Parameters**  
**vehicle** - `int` or `table` - Vehicle handle or `{plate, model}`  
**type** - `string` - `'primary'`, `'secondary'` or `'temporary'`  
**playerId** - `number` - ServerId - Optional (self if omitted)

```lua
exports.msk_vehiclekeys:AddKey(vehicle, 'secondary')
exports.msk_vehiclekeys:AddKey({plate = vehiclePlate, model = vehicleModel}, 'secondary')
```

## AddPrimaryKey

```lua
exports.msk_vehiclekeys:AddPrimaryKey(vehicle)
exports.msk_vehiclekeys:AddPrimaryKey(vehicle, playerId)
exports.msk_vehiclekeys:AddPrimaryKey({plate = vehiclePlate, model = vehicleModel})
```

## AddSecondaryKey

```lua
exports.msk_vehiclekeys:AddSecondaryKey(vehicle)
exports.msk_vehiclekeys:AddSecondaryKey(vehicle, playerId)
```

## AddTempKey

```lua
exports.msk_vehiclekeys:AddTempKey(vehicle)
exports.msk_vehiclekeys:AddTempKey(vehicle, playerId)
```

## RemovePrimaryKey

```lua
exports.msk_vehiclekeys:RemovePrimaryKey(vehicle)
exports.msk_vehiclekeys:RemovePrimaryKey(vehicle, playerId)
```

## RemoveSecondaryKey

```lua
exports.msk_vehiclekeys:RemoveSecondaryKey(vehicle)
exports.msk_vehiclekeys:RemoveSecondaryKey(vehicle, playerId)
```

## RemoveTempKey

```lua
exports.msk_vehiclekeys:RemoveTempKey(vehicle)
exports.msk_vehiclekeys:RemoveTempKey(vehicle, playerId)
```

## ExchangeVehicleLocks

All keys other players have for this vehicle will be deleted.

```lua
exports.msk_vehiclekeys:ExchangeVehicleLocks(vehicle)
exports.msk_vehiclekeys:ExchangeVehicleLocks({plate = vehiclePlate, model = vehicleModel})
```

## TransferVehicle

**Parameters**  
**targetId** - `number` - ServerId of the target player  
**vehicle** - `int` or `table` - Vehicle handle or vehicle data  
**showDialog** - `boolean` - Show price input dialog

```lua
exports.msk_vehiclekeys:TransferVehicle(targetId, vehicle, showDialog)
exports.msk_vehiclekeys:TransferVehicle(targetId, {plate = vehiclePlate, model = vehicleModel}, true)
```
