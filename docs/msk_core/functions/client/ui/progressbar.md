---
title: Progressbar
sidebar_position: 3
---

# Progressbar

## MSK.Progress.Start

Shows a progressbar. `color` is optional and can be set in `config.lua`.

**Parameters**  
**duration** - `number <milliseconds>` - The time in milliseconds  
**text** - `string` - Text  
**color** - `string` - Color as hex - Optional

```lua
MSK.Progress.Start(duration, text, color)

-- Example 1
MSK.Progress.Start(5000, 'Progressing...') -- default color set in config.lua
Wait(5000)

-- Example 2
MSK.Progress.Start(5000, 'Progressing...', "#5eb131") -- custom color
Wait(5000)

-- As an Export:
exports.msk_core:Progressbar(duration, text, color)
```

### Progressbar with specific data

**Parameters**  
**data** - `table` - Data for Progressbar

**Returns**  
**progressEnd** - `boolean` - If progress has ended or was stopped

**Description**  
- **duration** - `number <milliseconds>` - The time in milliseconds  
- **text** - `string` - Text  
- **color** - `string` - Color as hex - Optional  
- **canCancel** - `boolean` - If the player can cancel the Progressbar  
- **useWhileDead** - `boolean` - Cancel the Progressbar on player death  
- **useWhileCuffed** - `boolean` - Cancel the Progressbar if player gets cuffed  
- **animation** - `table` - Animation data - Optional  
- **disable** - `table` - Disable specific actions - Optional

```lua
MSK.Progress.Start(data)

-- Example
MSK.Progress.Start({
    duration = 5000,
    text = 'Progressing...',
    color = "#5eb131", -- Optional
    canCancel = true,
    useWhileDead = false,
    useWhileCuffed = false,
    animation = {
        dict = 'timetable@gardener@filling_can',
        anim = 'gar_ig_5_filling_can',
        flags = 49, -- Optional
    },
    disable = {
        move = true,
        vehicle = true,
        combat = true,
    }
})
print('Progressbar ended or canceled')

-- As an Export:
exports.msk_core:Progressbar(data)
```

## MSK.Progress.Stop

Stops the current ProgressBar.

```lua
MSK.Progress.Stop()

-- As an Export:
exports.msk_core:ProgressStop()
```

## MSK.Progress.Active

Checks if the Progressbar is active.

**Returns**  
**isActive** - `boolean` - Whether the Progressbar is active

```lua
local isActive = MSK.Progress.Active()

-- As an Export:
local isActive = exports.msk_core:ProgressActive()
```
