---
title: Progressbar
sidebar_position: 3
---

# Progressbar

## MSK.Progress.Start

Shows a progressbar for a specific player.

**Parameters**  
**playerId** - `number` - Players server id  
**duration** - `number <milliseconds>` - The time in milliseconds  
**text** - `string` - Text  
**color** - `string` - Color as hex - Optional

```lua
MSK.Progress.Start(playerId, duration, text, color)

-- Example 1
MSK.Progress.Start(playerId, 5000, 'Progressing...')
Wait(5000)

-- Example 2
MSK.Progress.Start(playerId, 5000, 'Progressing...', "#5eb131")
Wait(5000)

-- As an Export:
exports.msk_core:Progressbar(playerId, duration, text, color)
```

## MSK.Progress.Stop

Stops the current ProgressBar.

**Parameters**  
**playerId** - `number` - Players server id

```lua
MSK.Progress.Stop(playerId)

-- As an Export:
exports.msk_core:ProgressStop(playerId)
```
