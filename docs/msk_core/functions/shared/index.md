---
title: Shared
sidebar_position: 1
---

# Shared

## MSK.GetConfig

**Returns**  
**MSKConfig** - `table` - The Config of msk_core

```lua
local MSKConfig = MSK.GetConfig()
```

## MSK.Logging

Debug and Error Logs. You can change them in `config.lua`.

**Parameters**  
**type** - `string` - The Logging Type

```lua
MSK.Logging(type, ...)

-- Example
MSK.Logging('info', 'value1', 'value2', ...)
MSK.Logging('debug', 'value1', 'value2', ...)
MSK.Logging('error', 'value1', 'value2', ...)
```

## MSK.GetPedVehicleSeat

Get the vehicle seat the player is in.

**Parameters**  
**playerPed** - `number` - The Player Ped  
**vehicle** - `int` - A vehicle handle

**Returns**  
**seat** - `number` - Vehicle seat the player is in

```lua
local seat = MSK.GetPedVehicleSeat(playerPed, vehicle)

-- Clientside
local playerPed = PlayerPedId()
local seat = MSK.GetPedVehicleSeat(playerPed, GetVehiclePedIsIn(playerPed, false))

-- Serverside
local playerPed = GetPlayerPed(source)
local seat = MSK.GetPedVehicleSeat(playerPed, GetVehiclePedIsIn(playerPed, false))
```
