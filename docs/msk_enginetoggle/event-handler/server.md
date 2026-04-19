---
title: Server
sidebar_position: 2
---

# Server Event Handler

## Entering Vehicle

**Returns**  
**plate** - `string` - Plate of the vehicle  
**seat** - `number` - Seat of the vehicle  
**netId** - `number` - Vehicles NetworkId  
**isEngineOn** - `boolean` - Whether the engine is on or off  
**isDamaged** - `boolean` - Whether the vehicle is damaged or not

```lua
RegisterNetEvent('msk_enginetoggle:enteringVehicle', function(plate, seat, netId, isEngineOn, isDamaged)
    local vehicle = NetworkGetEntityFromNetworkId(netId)
    -- Do something here
end)
```

## Entered Vehicle

```lua
RegisterNetEvent('msk_enginetoggle:enteredVehicle', function(plate, seat, netId, isEngineOn, isDamaged)
    local vehicle = NetworkGetEntityFromNetworkId(netId)
    -- Do something here
end)
```

## Exited Vehicle

```lua
RegisterNetEvent('msk_enginetoggle:exitedVehicle', function(plate, seat, netId, isEngineOn, isDamaged)
    local vehicle = NetworkGetEntityFromNetworkId(netId)
    -- Do something here
end)
```
