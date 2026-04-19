---
title: Coords
sidebar_position: 4
---

# Coords

## MSK.Coords.Show

Shows the player's current coordinates at the top of the screen.

```lua
MSK.Coords.Show()

-- As an Export:
exports.msk_core:ShowCoords()
```

## MSK.Coords.Active

Checks whether the current display of coordinates is active or not.

**Returns**  
**coordsActive** - `boolean` - Whether the current display of coordinates is active or not

```lua
local coordsActive = MSK.Coords.Active()

-- As an Export:
local coordsActive = exports.msk_core:CoordsActive()
```

## MSK.Coords.Hide

Hides the player's coordinates from the screen.

```lua
MSK.Coords.Hide()

-- As an Export:
exports.msk_core:HideCoords()
```

## MSK.Coords.Copy

Copies the current player's coordinates to the clipboard.

**Parameters**  
**coords** - `vector3, vector4 or table` - Coords to copy

```lua
MSK.Coords.Copy(coords)

-- As an Export:
exports.msk_core:CopyCoords(coords)
```
