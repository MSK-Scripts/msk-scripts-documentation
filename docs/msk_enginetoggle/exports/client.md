---
title: Client
sidebar_position: 1
---

# Client Exports

## SetVehicleDamaged

Sets a vehicle as "damaged" so the engine cannot be started.

If a player is driving the vehicle or the engine is on when this is called, the engine will turn off automatically.

**Parameters**  
**vehicle** - `entity` - A vehicle handle  
**isDamaged** - `boolean` - Whether the vehicle is damaged or not

```lua
-- Mark vehicle as damaged (engine cannot be started)
exports.msk_enginetoggle:SetVehicleDamaged(vehicle, true)

-- Mark vehicle as repaired (engine can be started again)
exports.msk_enginetoggle:SetVehicleDamaged(vehicle, false)
```

:::info
See the [Guides](../guides.md) page for integration examples with `RealisticVehicleFailure` and `qb-vehiclefailure`.
:::
