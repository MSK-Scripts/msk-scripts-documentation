---
title: Server
sidebar_position: 1
---

# Server

## MSK.Register

Register Server Callback ([MSK.Trigger](/docs/msk_core/functions/client))

```lua
MSK.Register("Callback_Name", function(source, arg1, arg2, ...)
    return ...
end)

-- Example
MSK.Register("msk_testing:serverCallback:1", function(source, a, b, c)
    print(source, a, b, c)
    return a, b, c
end)

MSK.Register("msk_testing:serverCallback:2", function(source, cb, a, b, c)
    print(source, a, b, c)
    cb(a, b, c)
    print('Have fun!')
end)

-- As an Export:
exports.msk_core:Register("msk_testing:serverCallback:1", function(source, a, b, c)
    print(source, a, b, c)
    return a, b, c
end)
```

## MSK.Trigger

Trigger Client Callback ([MSK.Register](/docs/msk_core/functions/client))

```lua
local data = MSK.Trigger("Callback_Name", source, arg1, arg2, ...)

-- Example
local a, b, c = MSK.Trigger("msk_testing:clientCallback", source, '123', '456', '789')
print(a, b, c)

-- As an Export:
local a, b, c = exports.msk_core:Trigger("msk_testing:clientCallback", source, '123', '456', '789')
```

## MSK.AddWebhook

Discord Webhook.

**Parameters**  
**webhook** - `string` - The Discord Webhook Link  
**color** - `string` - Color for the Embed Message  
**botName** - `string` - The name of the bot  
**botAvatar** - `string` - Bot Avatar Link  
**title** - `string` - The Embed Message Title  
**description** - `string` - The Embed Message  
**fields** - `table` - Fields  
**footer** - `table <text, link>` - Embed Message Footer  
**time** - `string` - Time in the footer

If you don't want to use e.g. `footer`, set `footer = false` to deactivate it.

```lua
MSK.AddWebhook(webhook, botColor, botName, botAvatar, title, description, fields, footer, time)

-- Example
MSK.AddWebhook(
    "https://discordapp.com/api/webhooks/101088",
    "6205745", -- https://www.mathsisfun.com/hexadecimal-decimal-colors.html
    "MSK Scripts",
    "https://i.imgur.com/PizJGsh.png",
    "MSK Scripts - Webhook Script",
    "Test Description",
    {
        {name = "Title", value = 'Description', inline = true},
        {name = "Title", value = 'Description', inline = true},
    },
    {text = "© MSK Scripts", link = "https://i.imgur.com/PizJGsh.png"},
    "%d/%m/%Y %H:%M:%S"
)

-- As an Export:
exports.msk_core:AddWebhook(webhook, botColor, botName, botAvatar, title, description, fields, footer, time)
```

## MSK.Notification

Show a Notification. You can use color codes like `~g~`.

**Parameters**  
**source** - `string/number` - The Player Server ID  
**title** - `string` - Title  
**message** - `string` - Message Text  
**info** - `string` - Optional - Default: `general`  
**time** - `number <milliseconds>` - Optional - Default: `5000`

```lua
MSK.Notification(source, title, message, info, duration)

-- Example
MSK.Notification(source, 'Title', 'This is a Notification', 'general', 5000)

-- As an Export:
exports.msk_core:Notification(source, title, message, info, duration)
```

## MSK.HasItem

Checks if the player has the item in their inventory _(only for ESX or QBCore)_.

**Parameters**  
**playerId** - `number` - The ServerId of the player  
**item** - `string` - The item name

**Returns**  
**hasItem** - `table <name, label, count>` - If the player has the item

```lua
local hasItem = MSK.HasItem(playerId, item)

-- Example
local hasItem = MSK.HasItem(playerId, 'bread')
print(hasItem.name, hasItem.label, hasItem.count)

-- As an Export:
local hasItem = exports.msk_core:HasItem(playerId, item)
```

## MSK.GetPlayer

Get the Player from PlayerId, Identifier, CitizenId or Phone. Works for ESX and QBCore.

**Parameters**  
**playerData** - `table <source, identifier, citizenid, phone>` - Player Data

**Returns**  
**Player** - `table` - The PlayerData

```lua
local Player = MSK.GetPlayer({source = playerId})
local Player = MSK.GetPlayer({identifier = playerIdentifier})
local Player = MSK.GetPlayer({citizenid = playerCitizenId})
local Player = MSK.GetPlayer({phone = 123456789}) -- Only QBCore

-- As an Export:
local Player = exports.msk_core:GetPlayer(playerData)
```

## MSK.GetPlayers

Get all the Players on the server.

**Parameters**  
**key** - `string` - Optional  
**value** - `string` - Optional

**Returns**  
**Players** - `table <key, Player>` - The PlayerData

```lua
local Players = MSK.GetPlayers()                         -- returns all players
local Players = MSK.GetPlayers('job', 'police')          -- returns only players with that job
local Players = MSK.GetPlayers('gang', 'bloods')         -- returns only players with that gang (QBCore only)
local Players = MSK.GetPlayers('group', 'admin')         -- returns only players with that group

-- As an Export:
local Players = exports.msk_core:GetPlayers(key, value)
```

## MSK.Cron.Create

Create a Cronjob.

**Parameters**  
**date** - `table <w, d, h, m, atD, atH, atM>` - The datetime when the cron will be executed  
**data** - `any` - Data to use when executing

**Returns**  
**uniqueId** - `number` - UniqueId of the Cronjob  
**data** - `any` - Your data from parameters  
**date** - `table <d, h, m>` - The current Datetime

```lua
-- Every minute
MSK.Cron.Create({m = 1}, 'Executed at', function(uniqueId, data, date)
    print(data)
    print('Day: ' .. date.d, 'Hour: ' .. date.h, 'Minute: ' .. date.m)
end)

-- Every hour
MSK.Cron.Create({h = 1}, 'Executed at', function(uniqueId, data, date)
    print(data)
end)

-- Every day at 18:30
MSK.Cron.Create({atH = 18, atM = 30}, 'Executed at', function(uniqueId, data, date)
    print(data)
end)

-- Every monday at 18:30
MSK.Cron.Create({atD = 1, atH = 18, atM = 30}, 'Executed at', function(uniqueId, data, date)
    print(data)
end)

-- As an Export:
exports.msk_core:CreateCron(date, data, cb)
```

## MSK.Cron.Delete

Deletes a specific Cronjob.

**Parameters**  
**uniqueId** - `number` - The UniqueId of the Cronjob

**Returns**  
**success** - `boolean` - If the Cronjob was found and deleted

```lua
local success = MSK.Cron.Delete(uniqueId)

-- As an Export:
exports.msk_core:DeleteCron(uniqueId)
```

## MSK.RegisterItem

Registers an item dependent on which framework you use.

```lua
MSK.RegisterItem(item, callback)

-- Example: ESX
MSK.RegisterItem('bread', function(playerId)
    -- Do something here
end)

-- Example: QBCore
MSK.RegisterItem('bread', function(playerId, item)
    -- Do something here
end)
```
