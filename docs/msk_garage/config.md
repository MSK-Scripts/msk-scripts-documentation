---
title: Config
sidebar_position: 2
---

# Config

```lua
Config = {}
Config.Locale = 'de'
Config.Debug = true
Config.VersionChecker = true

Config.Notification = function(source, message, typ)
    if IsDuplicityVersion() then
        MSK.Notification(source, 'MSK Garage', message, typ)
    else
        MSK.Notification('MSK Garage', message, typ)
    end
end

Config.Hotkey = 38 -- default: E

Config.MySQL = {
    type = "type",
    job = "job",
    stored = "stored",
    civ = "civ",
}

Config.Parking = 'specific' -- 'all' or 'specific'

Config.VehicleKeys = {
    enable = true,
    script = 'msk_vehiclekeys'
}

Config.AdvancedParking = true
Config.useSocietyName = false

Config.TargetSystem = {
    enable = true,
    script = 'ox_target',
}

Config.SetFuel = function(vehicle, fuel)
    Entity(vehicle).state.fuel = fuel -- ox_fuel
    -- exports['LegacyFuel']:SetFuel(vehicle, fuel)
end

Config.GetFuel = function(vehicle)
    return Entity(vehicle).state.fuel -- ox_fuel
    -- return exports["LegacyFuel"]:GetFuel(vehicle)
end

Config.enableImpound = true
Config.parkoutWithKey = true
Config.needEnoughMoney = true

-- Example Impound config
Config.Impounds = {
    ["impound_car"] = {
        label = 'Impound | Car',
        type = {"car", "truck"},
        pedmodel = {enable = true, model = 'csb_trafficwarden', distance = 20.0},
        text3d = {enable = true, label = '~g~Open Impound', size = 0.8},
        marker = {enable = true, distance = 5.0, type = 27, size = {a = 1.0, b = 1.0, c = 1.0}, color = {a = 255, b = 255, c = 255}},
        blip = {enable = true, id = 524, color = 17, scale = 0.8},
        locations = {vector4(409.0, -1622.75, 29.29, 231.88)},
        park_dist = 5.0,
        park_out = {
            vector4(401.36, -1647.98, 29.29, 318.54),
            vector4(406.09, -1652.36, 29.29, 320.51),
        },
        warp = false,
        fee = {enable = true, price = 150, account = 'money'}
    },
}

-- Example Garage config
Config.DefaultGarage = 'A'

Config.Garages = {
    ["A"] = {
        id = 'A',
        label = 'Garage | Meetingpoint',
        type = {"car", "truck"},
        distance = 40.0,
        jobs = {enable = false, identifier = 'player', ownJob = true, jobs = {}},
        pedmodel = {enable = true, model = 'csb_trafficwarden', distance = 20.0},
        text3d = {enable = true, label = '~g~Open Garage', size = 0.8},
        marker = {enable = true, distance = 5.0, type = 27, size = {a = 1.0, b = 1.0, c = 1.0}, color = {a = 255, b = 255, c = 255}},
        blip = {enable = true, id = 524, color = 26, scale = 0.8},
        locations = {vector4(213.98, -808.45, 31.01, 156.59)},
        park_dist = 5.0,
        park_out = {vector4(232.98, -790.3, 30.6, 161.46)},
        warp = false,
    },
    -- Add more garages following the same structure ...
}
```
