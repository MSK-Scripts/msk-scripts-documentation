---
title: Guides
sidebar_position: 2
---

# Guides

With the following edits, you can set a vehicle to "damaged" so that the engine cannot be started.

If a player is driving the vehicle or the engine is on, the engine turns off automatically.

## RealisticVehicleFailure

If you use `RealisticVehicleFailure`, replace the following code in `client.lua` at line ~339:

```lua title="client.lua - line ~339"
if healthEngineCurrent > cfg.engineSafeGuard + 1 then
    SetVehicleUndriveable(vehicle, false)
    exports.msk_enginetoggle:SetVehicleDamaged(vehicle, false)
end

if healthEngineCurrent <= cfg.engineSafeGuard + 1 and cfg.limpMode == false then
    SetVehicleUndriveable(vehicle, true)
    exports.msk_enginetoggle:SetVehicleDamaged(vehicle, true)
end
```

## QB-Vehiclefailure

If you use `qb-vehiclefailure`, replace the following code in `client.lua` at line ~530:

```lua title="client.lua - line ~530"
if healthEngineCurrent > cfg.engineSafeGuard+1 then
    SetVehicleUndriveable(vehicle, false)
    exports.msk_enginetoggle:SetVehicleDamaged(vehicle, false)
end

if healthEngineCurrent <= cfg.engineSafeGuard+1 and cfg.limpMode == false then
    local vehpos = GetEntityCoords(vehicle)
    StartParticleFxLoopedAtCoord("ent_ray_heli_aprtmnt_l_fire", vehpos.x, vehpos.y, vehpos.z-0.7, 0.0, 0.0, 0.0, 1.0, false, false, false, false)
    SetVehicleUndriveable(vehicle, true)
    exports.msk_enginetoggle:SetVehicleDamaged(vehicle, true)
end
```
