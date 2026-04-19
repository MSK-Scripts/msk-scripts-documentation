---
title: Client
sidebar_position: 1
---

# Client Exports

## openGarage

Opens a custom garage.

**Parameters**  
**label** - `string` - The Label of the Garage  
**garageId** - `string` - The ID of the Garage  
**parkInCoords** - `vector3` - The Park In Coords  
**parkOutCoords** - `table <vector4>` - The Park Out Coords  
**distance** - `float` - The Park In Radius  
**warp** - `boolean` - Teleport into the Vehicle  
**type** - `table` - Vehicle Categories

```lua
exports.msk_garage:openGarage({
    label = 'Garage Test',
    garageId = 'test',
    parkInCoords = vector3(237.89, -858.35, 29.67),
    parkOutCoords = {
        vector4(237.89, -858.35, 29.67, 249.16),
    },
    distance = 20.0,
    warp = false,
    type = {'car', 'truck'}
})
```

## openImpound

Opens a custom impound.

**Parameters**  
**label** - `string` - The Label of the Impound  
**parkOutCoords** - `table <vector4>` - The Park Out Coords  
**warp** - `boolean` - Teleport into the Vehicle  
**type** - `table` - Vehicle Categories  
**fee** - `number` - The Impound Fee

```lua
exports.msk_garage:openImpound({
    label = 'Impound Test',
    parkOutCoords = {
        vector4(237.89, -858.35, 29.67, 249.16),
    },
    warp = false,
    type = {'car', 'truck'},
    fee = 150
})
```

## GetVehicleGarage

Get in which garage a given vehicle is stored.

**Parameters**  
**plate** - `string` - Plate of the Vehicle

**Returns**  
**garage** - `string` - The Garage ID  
**coords** - `vector3` - The Coords of the Garage

```lua
local garage, coords = exports.msk_garage:GetVehicleGarage(plate)
```
