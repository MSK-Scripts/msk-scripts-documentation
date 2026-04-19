---
title: Vector
sidebar_position: 6
---

# Vector

## MSK.CoordsToString

Converts the given coords to a vector string.

**Parameters**  
**coords** - `vector3, vector4 or table` - Coordinates

**Returns**  
**vectorString** - `string` - The given coordinates as a string

```lua
local vectorString = MSK.CoordsToString(coords)

-- Example
local vectorString = MSK.CoordsToString(GetEntityCoords(PlayerPedId()))
```

## MSK.VectorToVector

Converts vector4 to vector3.

**Parameters**  
**coords** - `vector4` - vector4 coordinates

**Returns**  
**coords** - `vector3` - The given vector4 coordinates as vector3

```lua
local vec3Coords = MSK.VectorToVector(vector4)

-- Example
local vec3Coords = MSK.VectorToVector(vector4(0.0, 0.0, 0.0, 0.0))

print(MSK.CoordsToString(vec3Coords)) -- Output: "vector3(0.0, 0.0, 0.0)"
```

## MSK.TableToVector

Converts a table to a vector.

**Parameters**  
**coords** - `table` - Table coordinates

**Returns**  
**coords** - `vector3 or vector4` - The given table coordinates as vector3 or vector4

```lua
local vecCoords = MSK.TableToVector(tableCoords)

-- Example 1: vector3
local vec3Coords = MSK.TableToVector({x = 0.0, y = 0.0, z = 0.0})

-- Example 2: vector4
local vec4Coords = MSK.TableToVector({x = 0.0, y = 0.0, z = 0.0, h = 0.0})
```
