---
title: Client
sidebar_position: 1
---

# Client Exports

## GetVehicleFuel

**Parameters**  
**vehicle** - `number` - A vehicle handle

**Returns**  
**fuelLevel** - `number` - Vehicles fuel level

```lua
local fuelLevel = exports.msk_fuel:GetVehicleFuel(vehicle)

-- You can also use
local fuelLevel = Entity(vehicle).state.fuel
```

## SetVehicleFuel

**Parameters**  
**vehicle** - `number` - A vehicle handle  
**fuelLevel** - `number` - Vehicles new fuel level

```lua
exports.msk_fuel:SetVehicleFuel(vehicle, fuelLevel)

-- You can also use
Entity(vehicle).state.fuel = fuelLevel
```

## GetVehicleFuelType

**Parameters**  
**vehicle** - `number` - A vehicle handle

**Returns**  
**fuelType** - `string` - Vehicles fuel type

```lua
local fuelType = exports.msk_fuel:GetVehicleFuelType(vehicle)

-- You can also use
local fuelType = Entity(vehicle).state.fuelType
```

## GetVehicleMaxFuel

**Parameters**  
**vehicle** - `number` - A vehicle handle

**Returns**  
**maxFuel** - `number` - Vehicles max fuel level

```lua
local maxFuel = exports.msk_fuel:GetVehicleMaxFuel(vehicle)

-- You can also use
local maxFuel = Entity(vehicle).state.maxFuel
```

## SetVehicleMaxFuel

**Parameters**  
**vehicle** - `number` - A vehicle handle  
**maxFuel** - `number` - Vehicles new max fuel level

```lua
exports.msk_fuel:SetVehicleMaxFuel(vehicle, maxFuel)

-- You can also use
Entity(vehicle).state.maxFuel = maxFuel
```

## SetEngineRepaired

Repairs the Engine if the player refueled with the wrong fuel type.

**Parameters**  
**vehicle** - `number` - A vehicle handle

```lua
exports.msk_fuel:SetEngineRepaired(vehicle)
```
