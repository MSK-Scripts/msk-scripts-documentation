---
title: Server
sidebar_position: 2
---

# Server Exports

## getDatabase

Get the content of the database.

**Returns**  
**database** - `table` - Content of database.json

```lua
local database = exports.msk_handcuffs:getDatabase()
```

## getPlayerFromDatabase

Get content of a specific Player from database.

**Parameters**  
**identifier** - The identifier of a Player

**Returns**  
**data** - `table`

```lua
local xPlayer = ESX.GetPlayerFromId(source)
local data = exports.msk_handcuffs:getPlayerFromDatabase(xPlayer.identifier)

--[[
data.isCuffed       -> boolean
data.cuffItem       -> string or nil
data.isHardcuffed   -> boolean
data.hardcuffItem   -> string or nil
data.isAdminCuffed  -> boolean
data.hasAnkleTracker -> boolean
data.hasHeadbag     -> boolean
data.hasTape        -> boolean
]]
```

## getIsPlayerHandcuffed

**Parameters**  
**player** - `table` - Specific Player

**Returns**  
**isHandcuffed** - `boolean`

```lua
local isHandcuffed = exports.msk_handcuffs:getIsPlayerHandcuffed({source = playerId})
local isHandcuffed = exports.msk_handcuffs:getIsPlayerHandcuffed({identifier = playerIdentifier})
local isHandcuffed = exports.msk_handcuffs:getIsPlayerHandcuffed({player = xPlayer})

-- Alternative:
Player(source).state.isHandcuffed
```

## getIsPlayerHardcuffed

```lua
local isHardcuffed = exports.msk_handcuffs:getIsPlayerHardcuffed({source = playerId})
local isHardcuffed = exports.msk_handcuffs:getIsPlayerHardcuffed({identifier = playerIdentifier})
local isHardcuffed = exports.msk_handcuffs:getIsPlayerHardcuffed({player = xPlayer})

Player(source).state.isHardcuffed
```

## gethasPlayerAnkleTracker

```lua
local hasAnkletracker = exports.msk_handcuffs:gethasPlayerAnkleTracker({source = playerId})
local hasAnkletracker = exports.msk_handcuffs:gethasPlayerAnkleTracker({identifier = playerIdentifier})
local hasAnkletracker = exports.msk_handcuffs:gethasPlayerAnkleTracker({player = xPlayer})

Player(source).state.hasAnkletracker
```

## gethasPlayerHeadbag

```lua
local hasHeadbag = exports.msk_handcuffs:gethasPlayerHeadbag({source = playerId})
local hasHeadbag = exports.msk_handcuffs:gethasPlayerHeadbag({identifier = playerIdentifier})
local hasHeadbag = exports.msk_handcuffs:gethasPlayerHeadbag({player = xPlayer})

Player(source).state.hasHeadbag
```

## gethasPlayerTape

```lua
local hasTape = exports.msk_handcuffs:gethasPlayerTape({source = playerId})
local hasTape = exports.msk_handcuffs:gethasPlayerTape({identifier = playerIdentifier})
local hasTape = exports.msk_handcuffs:gethasPlayerTape({player = xPlayer})

Player(source).state.hasTape
```
