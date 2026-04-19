---
title: Vehicle
sidebar_position: 9
---

# Vehicle

## MSK.GetClosestVehicle

**Parameters**  
**coords** - `vector3` - Coords - Optional, default: `playerCoords`

**Returns**  
**vehicle** - `number` - A vehicle handle  
**distance** - `float` - The Distance to this vehicle

```lua
local vehicle, distance = MSK.GetClosestVehicle(coords)

if DoesEntityExist(vehicle) and distance <= 2.5 then
    -- Do something with this vehicle
end

-- As an Export:
local vehicle, distance = exports.msk_core:GetClosestVehicle(coords)
```

## MSK.GetClosestVehicles

**Parameters**  
**coords** - `vector3` - Player Coords  
**maxDistance** - `float` - Max distance to check for vehicles (Max: 200.0)

```lua
local vehicles = MSK.GetClosestVehicles(GetEntityCoords(PlayerPedId()), 25.0)

-- As an Export:
local vehicles = exports.msk_core:GetClosestVehicles(coords, maxDistance)
```

## MSK.GetVehicleInDirection

Get the Vehicle in front of the player.

**Returns**  
**vehicle** - `int` - A vehicle handle  
**coords** - `vector3` - The vehicle coords  
**distance** - `float` - The distance between the vehicle and the player

```lua
local vehicle, coords, distance = MSK.GetVehicleInDirection()

-- As an Export:
local vehicle, coords, distance = exports.msk_core:GetVehicleInDirection()
```

## MSK.IsVehicleEmpty

**Parameters**  
**vehicle** - `int` - A vehicle handle

**Returns**  
**isVehicleEmpty** - `boolean` - Whether the vehicle is empty or not

```lua
local vehicle, coords, distance = MSK.GetVehicleInDirection()
local isVehicleEmpty = MSK.IsVehicleEmpty(vehicle)
print(isVehicleEmpty)

-- As an Export:
local isVehicleEmpty = exports.msk_core:IsVehicleEmpty(vehicle)
```

## MSK.GetVehicleLabel

**Parameters**  
**vehicle** - `int` - A vehicle handle

**Returns**  
**label** - `string` - Label of the vehicle

```lua
local label = MSK.GetVehicleLabel(vehicle)

-- As an Export:
local label = exports.msk_core:GetVehicleLabel(vehicle)
```
