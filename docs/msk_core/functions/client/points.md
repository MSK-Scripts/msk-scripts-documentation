---
title: Points
sidebar_position: 6
---

# Points

## MSK.Points.Add

Adds a new Point.

**Parameters**  
**data** - `table` - Point data

**Returns**  
**point** - `table` - The added point

```lua
local point = MSK.Points.Add({
    coords = vector3(576.13, 2723.86, 42.06),
    distance = 5.0,
    onEnter = function(point)
        print('onEnter', point.id, point.coords, point.distance)
    end,
    onExit = function(point)
        print('onExit', point.id, point.coords, point.distance)
    end,
    onRemove = function(point)
        print('onRemove', ("Deleted Point with ID %s"):format(point.id))
    end
})

print(point.id, point.coords, point.distance)

-- To remove the Point:
point.Remove()
```

## MSK.Points.Remove

Removes the given point.

**Parameters**  
**pointId** - `number` - ID of the Point

**Returns**  
**success** - `boolean`

```lua
local success = MSK.Points.Remove(point.id)

if success then
    -- Point was found and deleted
else
    -- Point does not exist
end
```

## MSK.Points.GetAllPoints

Get all Points.

**Returns**  
**points** - `table` - All Points

```lua
local points = MSK.Points.GetAllPoints()

for k, point in pairs(points) do
    print(point.id, point.coords, point.distance, point.inside)

    -- To remove the Point:
    point.Remove()
end
```

## MSK.Points.GetClosestPoint

Get the Point the Player is at.

**Returns**  
**point** - `table?` - The Point the Player is at, or `nil` if the Player is not inside any point

```lua
local point = MSK.Points.GetClosestPoint()

if point then
    print(point.id, point.coords, point.distance)
    point.Remove()
else
    -- Player is not inside of any point
end
```
