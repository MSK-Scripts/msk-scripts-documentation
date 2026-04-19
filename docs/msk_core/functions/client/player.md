---
title: Player
sidebar_position: 5
---

# Player

## MSK.Player

**Properties**  
**clientId** - `number` - Player Index — equal to `PlayerId()`  
**serverId** - `number` - Player Server Id  
**ped** - `number` - Player Ped — equal to `PlayerPedId()`  
**coords** - `vector3` - Player Coords — equal to `GetEntityCoords(PlayerPedId())`  
**heading** - `float` - Player Heading — equal to `GetEntityHeading(PlayerPedId())`  
**vehicle** - `number` - A vehicle handle  
**seat** - `number` - Seat the player is in — equal to `GetVehiclePedIsIn(PlayerPedId(), false)`  
**weapon** - `number` - Hash of Players current weapon — equal to `GetCurrentPedWeapon(PlayerPedId(), true)`

```lua
local clientId = MSK.Player.clientId
local serverId = MSK.Player.serverId
local playerPed = MSK.Player.ped

local playerCoords = MSK.Player.coords
local playerHeading = MSK.Player.heading

local vehicle = MSK.Player.vehicle
local seat = MSK.Player.seat

local currentWeapon = MSK.Player.weapon

-- Notification
MSK.Player.Notify(header, message, type, duration)
```

### Other Players

You can get information about other players on clientside.

**Parameters**  
**playerId** - `number` - Players server id  
**key** - `string` - The key that you want the value from

**Returns**  
**value** - `any` - The value of the key

```lua
local value = MSK.Player.Get(playerId, key)

-- Example:
local coords = MSK.Player.Get(playerId, 'coords')
```

### Event Handler

**Returns**  
**key** - `string` - The key that changed  
**value** - `any` - The new value of the changed key  
**oldValue** - `any` - The old value of the changed key

```lua
AddEventHandler('msk_core:onPlayer', function(key, value, oldValue)
    print(key, value, oldValue)
end)
```

### Set own values

You can set your own values using `MSK.Player` as a function. You can also set them as replicated.

**Parameters**  
**key** - `string` - The key that you want to set  
**value** - `any` - The value that you want to set for the key  
**replicated** - `boolean` - Whether replicated or not

```lua
MSK.Player(key, value, replicated)

-- Example: Only usable in the script you've set it
MSK.Player('test', 'this is a test')

-- Example: Usable in all scripts
MSK.Player('test', 'this is a test', true)

-- Output
print(MSK.Player.test) -- 'this is a test'
```

## MSK.GetClosestPlayer

**Parameters**  
**coords** - `vector3` - Coords - Optional, default: `playerCoords`

**Returns**  
**player** - `number` - Player Index — equal to `PlayerId()`  
**distance** - `float` - The Distance to this Player

```lua
local player, distance = MSK.GetClosestPlayer(coords)

if player ~= -1 and distance <= 2.5 then
    -- Do something with this player
end

-- As an Export:
local player, distance = exports.msk_core:GetClosestPlayer(coords)
```

## MSK.GetClosestPlayers

**Parameters**  
**coords** - `vector3` - Coords  
**maxDistance** - `float` - Max distance to check for players (Max: 200.0)

```lua
local players = MSK.GetClosestPlayers(MSK.Player.coords, 25.0)

-- As an Export:
local player, distance = exports.msk_core:GetClosestPlayers(coords, maxDistance)
```
