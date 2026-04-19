---
title: Ban System
sidebar_position: 3
---

# Ban System

## Config

```lua
Config.BanSystem = {
    enable = true,

    discordLog = true,
    botColor = "6205745",
    botName = "MSK Scripts",
    botAvatar = "https://i.imgur.com/PizJGsh.png",

    commands = {
        enable = true,
        groups = {'superadmin', 'admin', 'god'},
        ban = 'banPlayer',
        unban = 'unbanPlayer'
    }
}
```

## MSK.BanPlayer

This will ban a player.

**Parameters**  
**playerId** - `number` - The ServerId of the player who banned someone - Optional  
**targetId** - `number` - The ServerId of the player who gets banned  
**time** - `string` - The Time until the player gets unbanned  
**reason** - `string` - The Reason why the player gets banned

**Description — `time` format:**

- `1M` = 1 Minute
- `1H` = 1 Hour
- `1D` = 1 Day
- `1W` = 1 Week
- `P` = Permanent

```lua
MSK.BanPlayer(playerId, targetId, time, reason)

-- Player gets banned for 2 days for cheating
MSK.BanPlayer(playerId, targetId, '2D', 'cheating')

-- Player gets permanently banned
MSK.BanPlayer(playerId, targetId, 'P', 'cheating')

-- If you execute this from the server
MSK.BanPlayer(0, targetId, '2D', 'cheating')

-- As an Export:
exports.msk_core:BanPlayer(playerId, targetId, time, reason)
```

## MSK.UnbanPlayer

This will unban a player.

**Parameters**  
**banId** - `number` - The BanId (id in msk_bansystem database)

```lua
MSK.UnbanPlayer(banId)

-- As an Export:
exports.msk_core:UnbanPlayer(banId)
```

## MSK.IsPlayerBanned

This will check if the given player is banned.

**Parameters**  
**playerId** - `number` - The ServerId of the player

**Returns**  
**isBanned** - `boolean or table` - If the player is banned or not  
**isExpired** - `boolean or nil` - If the Ban is expired or not

```lua
local isBanned, isExpired = MSK.IsPlayerBanned(playerId)

if isBanned and not isExpired then
    -- Player is banned
    print(isBanned.banId, isBanned.ids, isBanned.reason, isBanned.time, isBanned.from)
elseif isBanned and isExpired then
    -- Player was banned but the Ban is expired
    print(isBanned.banId, isBanned.ids, isBanned.reason, isBanned.time, isBanned.from)
else
    -- Player is not banned
end

-- As an Export:
local isBanned, isExpired = exports.msk_core:IsPlayerBanned(playerId)
```

## Commands

### /banPlayer

**Parameters**  
**targetId** - `number` - The ServerId of the player who gets banned  
**time** - `string` - The Time until the player gets unbanned  
**reason** - `string` - The Reason why the player gets banned - Optional, default: `'Unknown reason'`

**Description — `time` format:** `1M`, `1H`, `1D`, `1W`, `P`

```lua
/banPlayer playerId time reason

-- Example 1: Player 1 banned for 2 days for cheating
/banPlayer 1 2D "Cheating"

-- Example 2: Player 1 permanently banned
/banPlayer 1 P "Cheating"
```

### /unbanPlayer

**Parameters**  
**banId** - `number` - The BanId

```lua
/unbanPlayer banId

-- Example: BanId 5 gets unbanned
/unbanPlayer 5
```
