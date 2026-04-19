---
title: Numpad
sidebar_position: 2
---

# Numpad

## MSK.Numpad.Open

Opens a Numpad Window for a specific player.

**Parameters**  
**playerId** - `number` - Players server id  
**pin** - `string` - The correct Pin  
**showPin** - `boolean` - Show Numbers or `****`

**Returns**  
**isCorrect** - `boolean` - If the inserted pin is correct or not

#### Asynchronous

```lua
MSK.Numpad.Open(playerId, '1234', true, function(isCorrect)
    print('Correct:', isCorrect)
end)

-- As an Export:
exports.msk_core:Numpad(playerId, pin, showPin, function(isCorrect)
    print('Correct:', isCorrect)
end)
```

#### Synchronous

```lua
local isCorrect = MSK.Numpad.Open(playerId, '1234', true)

-- As an Export:
local isCorrect = exports.msk_core:Numpad(playerId, pin, showPin)
```

## MSK.Numpad.Close

Closes the current Numpad Window.

**Parameters**  
**playerId** - `number` - Players server id

```lua
MSK.Numpad.Close(playerId)

-- As an Export:
exports.msk_core:CloseNumpad(playerId)
```
