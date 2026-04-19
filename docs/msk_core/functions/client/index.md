---
title: Client
sidebar_position: 1
---

# Client

## MSK.Register

Register Client Callback ([MSK.Trigger](/docs/msk_core/functions/server))

```lua
MSK.Register("Callback_Name", function(playerId, arg1, arg2, ...)
    return ...
end)

-- Example
MSK.Register("msk_testing:clientCallback", function(source, a, b, c)
    print(source, a, b, c)
    return a, b, c
end)

-- As an Export:
exports.msk_core:Register("msk_testing:clientCallback", function(source, a, b, c)
    print(source, a, b, c)
    return a, b, c
end)
```

## MSK.Trigger

Trigger Server Callback ([MSK.Register](/docs/msk_core/functions/server))

```lua
local data = MSK.Trigger("Callback_Name", ...)

-- Example
local a, b, c = MSK.Trigger("msk_testing:serverCallback:1", '123', '456', '789')
print(a, b, c)

-- As an Export:
local a, b, c = exports.msk_core:Trigger("msk_testing:serverCallback:1", '123', '456', '789')
```

## MSK.TriggerCallback

Trigger Server Callback ([MSK.Register](/docs/msk_core/functions/server))

```lua
local data = MSK.TriggerCallback("Callback_Name", ...)

-- Example
local a, b, c = MSK.TriggerCallback("msk_testing:serverCallback:2", '123', '456', '789')
print(a, b, c)

-- As an Export:
local a, b, c = exports.msk_core:TriggerCallback("msk_testing:serverCallback:2", '123', '456', '789')
```

## MSK.RegisterCommand

It's the same as the Native RegisterCommand but it will check if the player has AcePermission.

```lua
MSK.RegisterCommand('your_command', function(source, args, raw)
    -- Do something here
end, true --[[true = ace check; false = no ace check]])

-- As an Export:
exports.msk_core:RegisterCommand('your_command', function(source, args, raw)
    -- Do something here
end, true --[[true = ace check; false = no ace check]])
```

## MSK.Notification

Show a Notification. You can use color codes like `~g~`.

**Parameters**  
**title** - `string` - Title  
**message** - `string` - Message Text  
**info** - `string` - Optional - Default: `general`  
**time** - `number <milliseconds>` - Optional - Default: `5000`

```lua
MSK.Notification(title, message, info, duration)

-- Example
MSK.Notification('Title', 'This is a Notification', 'general', 5000)

-- As an Export:
exports.msk_core:Notification(title, message, info, duration)
```

## MSK.HelpNotification

Show a Help Notification.

**Parameters**  
**text** - `string` - Text

```lua
MSK.HelpNotification(text)

-- Example
MSK.HelpNotification('Press ~g~E~s~ to open')

-- As an Export:
exports.msk_core:HelpNotification(text)
```

## MSK.AdvancedNotification

Show a Picture Notification.

**Parameters**  
**text** - `string` - Text  
**title** - `string` - Title  
**subtitle** - `string` - Subtitle  
**icon** - `string` - Optional - Default: `CHAR_HUMANDEFAULT`  
**flash** - `boolean` - Optional - Default: `true`  
**icontype** - `number` - Optional - Default: `1`

```lua
-- flash and iconType are optional
MSK.AdvancedNotification(text, title, subtitle, icon, flash, icontype)

-- Example
MSK.AdvancedNotification('This is a Notification', 'Title', 'Subtitle', 'CHAR_HUMANDEFAULT', true, 1)

-- As an Export:
exports.msk_core:AdvancedNotification(text, title, subtitle, icon, flash, icontype)
```

## MSK.Draw3DText

Draw a 3D Text _(size and font is optional)_. Needs to be executed every frame!

**Parameters**  
**location** - `table <x, y, z> / vector3` - Location  
**text** - `string` - Text  
**size** - `number` - Optional - Default: `1`  
**font** - `number` - Optional - Default: `0`

```lua
MSK.Draw3DText(location, text, size, font)

-- Example
local location = GetEntityCoords(PlayerPedId())
MSK.Draw3DText(location, 'This is the Label Text', 1, 0)
MSK.Draw3DText(location, 'This is the Label Text')

-- As an Export:
exports.msk_core:Draw3DText(location, text, size, font)
```

## MSK.DrawGenericText

Draw Generic Text. Needs to be executed every frame!

**Parameters**  
**text** - `string` - Text  
**outline** - `boolean` - Text Outline  
**font** - `number` - Text Font - Optional, default: `0`  
**size** - `float` - Text Size - Optional, default: `0.34`  
**color** - `table <r, g, b, a>` - Text Color - Optional, default: white  
**position** - `string` - Text Position on the Screen - Optional, default: bottom center

```lua
MSK.DrawGenericText(text, outline, font, size, color, position)

-- Example
local color = {r = 255, g = 255, b = 255, a = 255}
local position = {width = 0.50, height = 0.90}
MSK.DrawGenericText('Test', true, 0, 0.34, color, position)

-- As an Export:
exports.msk_core:DrawGenericText(text, outline, font, size, color, position)
```

## MSK.HasItem

Checks if you have the item in your inventory _(only for ESX or QBCore)_.

**Parameters**  
**itemName** - `string` - The item name

**Returns**  
**hasItem** - `table <name, label, count>` - If the player has the item

```lua
local hasItem = MSK.HasItem(itemName)

-- Example
local hasItem = MSK.HasItem('bread') -- returns: name, label, count
print(hasItem.name, hasItem.label, hasItem.count)

-- As an Export:
local hasItem = exports.msk_core:HasItem(itemName)
```

## MSK.GetPedMugshot

Get the PedMugshot from a specific Ped.

**Parameters**  
**playerPed** - `number` - The Player Ped  
**transparent** - `boolean` - Transparent Background

```lua
local mugshot, mugshotStr = MSK.GetPedMugshot(playerPed, transparent)
UnregisterPedheadshot(mugshot) -- You have to call this to unregister the mugshot after use

-- Example
local mugshot, mugshotStr = MSK.GetPedMugshot(PlayerPedId(), true)
MSK.AdvancedNotification('Message', 'Title', 'Subtitle', mugshotStr)
UnregisterPedheadshot(mugshot)

-- As an Export:
local mugshot, mugshotStr = exports.msk_core:GetPedMugshot(playerPed, transparent)
```

## MSK.Subtitle

Shows a text at the center-bottom. You can use color codes like `~g~`.

**Parameters**  
**text** - `string` - The message text  
**duration** - `number <milliseconds>` - Optional, default: `8000`

```lua
MSK.Subtitle(text, duration)

-- Example
MSK.Subtitle('This is a Subtitle by ~g~MSK Scripts~s~', 8000)

-- As an Export:
exports.msk_core:Subtitle(text, duration)
```

## MSK.Spinner

Shows a Loading Spinner at the right-bottom.

**Parameters**  
**text** - `string` - The message text  
**typ** - `number` - The Spinner Type - Optional, default: `4`  
**duration** - `number <milliseconds>` - Optional, default: `5000`

```lua
MSK.Spinner(text, typ, duration)

-- Example: Orange Spinner
MSK.Spinner('This is a Spinner by MSK Scripts', 4, 8000)
-- Example: White Spinner
MSK.Spinner('This is a Spinner by MSK Scripts', 5, 8000)

-- As an Export:
exports.msk_core:Spinner(text, typ, duration)
```
