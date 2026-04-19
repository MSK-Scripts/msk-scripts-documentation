---
title: TextUI
sidebar_position: 4
---

# TextUI

## MSK.TextUI.Show

Show the TextUI.

**Parameters**  
**key** - `string` - The key that needs to be pressed  
**text** - `string` - Text  
**color** - `string` - Color as hex - Optional, default: `'#5eb131'`

```lua
MSK.TextUI.Show(key, text, color)

-- Example 1: default color
MSK.TextUI.Show('E', 'Press ~g~E~s~ to interact')

-- Example 2: specific color
MSK.TextUI.Show('E', 'Press ~g~E~s~ to interact', '#5eb131')

-- As an Export:
exports.msk_core:ShowTextUI(key, text, color)
```

## MSK.TextUI.ShowThread

Show the TextUI in a thread.

**Parameters**  
**key** - `string` - The key that needs to be pressed  
**text** - `string` - Text  
**color** - `string` - Color as hex - Optional, default: `'#5eb131'`

```lua
MSK.TextUI.ShowThread(key, text, color)

-- Example
CreateThread(function()
    while true do
        local sleep = 250
        local distance = #(MSK.Player.coords - vector3(572.04, 2724.34, 42.05))

        if distance <= 2.5 then
            sleep = 0
            MSK.TextUI.ShowThread('E', 'Press ~g~E~s~ to interact')
        end

        Wait(sleep)
    end
end)

-- As an Export:
exports.msk_core:ShowTextUIThread(key, text, color)
```

## MSK.TextUI.Hide

Hide the TextUI.

```lua
MSK.TextUI.Hide()

-- As an Export:
exports.msk_core:HideTextUI()
```

## MSK.TextUI.Active

Check if the TextUI is active.

**Returns**  
**isActive** - `boolean` - Whether the TextUI is active

```lua
local isActive = MSK.TextUI.Active()

-- As an Export:
local isActive = exports.msk_core:TextUIActive()
```
