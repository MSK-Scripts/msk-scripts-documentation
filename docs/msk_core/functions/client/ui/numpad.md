---
title: Numpad
sidebar_position: 2
---

# Numpad

## MSK.Numpad.Open

Opens a Numpad Window.

**Parameters**  
**pin** - `string` - The correct Pin  
**showPin** - `boolean` - Show Numbers or `****`

**Returns**  
**isCorrect** - `boolean` - If the inserted pin is correct or not

#### Asynchronous

```lua
MSK.Numpad.Open('1234', true, function(isCorrect)
    print('Correct:', isCorrect)
end)

-- As an Export:
exports.msk_core:Numpad(pin, showPin, function(isCorrect)
    print('Correct:', isCorrect)
end)
```

#### Synchronous

```lua
local isCorrect = MSK.Numpad.Open('1234', true)

-- As an Export:
local isCorrect = exports.msk_core:Numpad(pin, showPin)
```

## MSK.Numpad.Close

Closes the current Numpad Window.

```lua
MSK.Numpad.Close()

-- As an Export:
exports.msk_core:CloseNumpad()
```

## MSK.Numpad.Active

Checks if the Numpad Window is active.

**Returns**  
**isActive** - `boolean` - Whether the Numpad Window is active

```lua
local isActive = MSK.Numpad.Active()

-- As an Export:
local isActive = exports.msk_core:NumpadActive()
```
