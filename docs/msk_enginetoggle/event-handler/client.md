---
title: Client
sidebar_position: 1
---

# Client Event Handler

## Entering Vehicle

Will be called when entering a vehicle.

**Returns**  
**vehicle** - `entity` - The vehicle the player is entering  
**plate** - `string` - Plate of the vehicle  
**seat** - `number` - Seat of the vehicle the player is entering  
**netId** - `number` - Vehicles NetworkId  
**isEngineOn** - `boolean` - Whether the engine is on or off  
**isDamaged** - `boolean` - Whether the vehicle is damaged or not

```lua
AddEventHandler('msk_enginetoggle:enteringVehicle', function(vehicle, plate, seat, netId, isEngineOn, isDamaged)
    -- Do something here
end)
```

## Entered Vehicle

Will be called when the player has entered a vehicle.

**Returns**  
**vehicle** - `entity` - The vehicle the player has entered  
**plate** - `string` - Plate of the vehicle  
**seat** - `number` - Seat of the vehicle  
**netId** - `number` - Vehicles NetworkId  
**isEngineOn** - `boolean` - Whether the engine is on or off  
**isDamaged** - `boolean` - Whether the vehicle is damaged or not

```lua
AddEventHandler('msk_enginetoggle:enteredVehicle', function(vehicle, plate, seat, netId, isEngineOn, isDamaged)
    -- Do something here
end)
```

## Exited Vehicle

Will be called when the player has exited a vehicle.

**Returns**  
**vehicle** - `entity` - The vehicle the player has exited  
**plate** - `string` - Plate of the vehicle  
**seat** - `number` - Seat of the vehicle  
**netId** - `number` - Vehicles NetworkId  
**isEngineOn** - `boolean` - Whether the engine is on or off  
**isDamaged** - `boolean` - Whether the vehicle is damaged or not

```lua
AddEventHandler('msk_enginetoggle:exitedVehicle', function(vehicle, plate, seat, netId, isEngineOn, isDamaged)
    -- Do something here
end)
```
