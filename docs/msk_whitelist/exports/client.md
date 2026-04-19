---
title: Client
sidebar_position: 1
---

# Client Exports

## isPlayerNew

Check if the Player is whitelisted or not.

**Parameters**  
**playerId** - `number` - The ServerId of the player - Optional (self if omitted)

**Returns**  
**isWhitelisted** - `boolean`

```lua
-- Self
local isWhitelisted = exports.msk_whitelist:isPlayerNew()

-- Other Player
local isWhitelisted = exports.msk_whitelist:isPlayerNew(playerId)
```
