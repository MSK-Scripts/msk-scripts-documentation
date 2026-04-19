---
title: Server
sidebar_position: 2
---

# Server Exports

## isPlayerNew

Check if the Player is whitelisted or not.

**Parameters**  
**playerId** - `number` - The ServerId of the player

**Returns**  
**isWhitelisted** - `boolean`

```lua
local isWhitelisted = exports.msk_whitelist:isPlayerNew(playerId)
```

## whitelistPlayer

Whitelist a Player.

**Parameters**  
**playerId** - `number` - The ServerId of the player who whitelists someone - Optional  
**targetData** - `table` - PlayerData of the player who gets whitelisted

```lua
exports.msk_whitelist:whitelistPlayer(playerId, targetData)

-- If Server whitelists the player
exports.msk_whitelist:whitelistPlayer(nil, {source = targetId})
exports.msk_whitelist:whitelistPlayer(nil, {identifier = 'char1:83556bdis9d7sj3'})

-- Examples
exports.msk_whitelist:whitelistPlayer(playerId, {source = 1})
exports.msk_whitelist:whitelistPlayer(playerId, {identifier = 'char1:83556bdis9d7sj3'})
```
