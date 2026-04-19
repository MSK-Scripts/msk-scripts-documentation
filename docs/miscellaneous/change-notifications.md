---
title: Change Notifications
sidebar_position: 1
---

# Change Notifications

## MSK Core

If you want to change the Notifications for **ALL** Scripts, go to `msk_core/config.lua` and change the following:

```lua
Config.Notification = 'custom'

Config.customNotification = function(title, message, typ, duration)
    -- Add your own clientside Notification here
end
```

## Single Script

If you want to change the Notifications for only one script, go to the `config.lua` of that script and change the following:

```lua
Config.Notification = function(source, message, typ)
    if IsDuplicityVersion() then
        -- Add your serverside notification here
    else
        -- Add your clientside notification here
    end
end
```

## ESX

If you want to change the Notification of ESX to our Notification, go to `es_extended/client/functions.lua` and search for `function ESX.ShowNotification`.

Replace that function with the following:

```lua
function ESX.ShowNotification(message, notifyType, length)
    if GetResourceState("msk_core") ~= "missing" then
        return exports["msk_core"]:Notification('Information', message, notifyType, length)
    end

    print("[^1ERROR^7] ^5MSK Notify^7 is Missing!")
end
```
