---
title: TextUI
sidebar_position: 4
---

# TextUI

## MSK.TextUI.Show

Show the TextUI for a specific player.

**Parameters**  
**playerId** - `number` - Players server id  
**key** - `string` - The key that needs to be pressed  
**text** - `string` - Text  
**color** - `string` - Color as hex - Optional, default: `'#5eb131'`

```lua
MSK.TextUI.Show(playerId, key, text, color)

-- Example 1: default color
MSK.TextUI.Show(playerId, 'E', 'Press ~g~E~s~ to interact')

-- Example 2: specific color
MSK.TextUI.Show(playerId, 'E', 'Press ~g~E~s~ to interact', '#5eb131')

-- As an Export:
exports.msk_core:ShowTextUI(playerId, key, text, color)
```

## MSK.TextUI.Hide

Hide the TextUI for a specific player.

**Parameters**  
**playerId** - `number` - Players server id

```lua
MSK.TextUI.Hide(playerId)

-- As an Export:
exports.msk_core:HideTextUI(playerId)
```
