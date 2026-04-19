---
title: Player
sidebar_position: 5
---

# Player

## MSK.Player

**Properties**  
**clientId** - `number` - Player Index — equal to `PlayerId()`  
**ped** - `number` - Player Ped — equal to `GetPlayerPed(source)`  
**coords** - `vector3` - Player Coords — equal to `GetEntityCoords(GetPlayerPed(source))`  
**heading** - `float` - Player Heading — equal to `GetEntityHeading(GetPlayerPed(source))`  
**vehicle** - `number` - A vehicle handle  
**seat** - `number` - Seat the player is in  
**weapon** - `number` - Hash of Players current weapon

```lua
local clientId = MSK.Player[source].clientId
local playerPed = MSK.Player[source].ped

local playerCoords = MSK.Player[source].coords
local playerHeading = MSK.Player[source].heading

local vehicle = MSK.Player[source].vehicle
local seat = MSK.Player[source].seat

local currentWeapon = MSK.Player[source].weapon

-- Notification
MSK.Player[source].Notify(header, message, type, duration)
```
