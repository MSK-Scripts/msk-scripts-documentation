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

-- Supported: AUTO, ESX, QBCore
Config.Framework = 'AUTO'

Config.Notification = function(source, message, typ)
    if IsDuplicityVersion() then
        MSK.Notification(source, 'Vehicle Keys', message, typ, 5000)
    else
        MSK.Notification('Vehicle Keys', message, typ, 5000)
    end
end

Config.Commands = {
    lock = {enable = true, command = 'lock'},
    keyMenu = {enable = true, command = 'keyMenu'},
    refreshKeys = {enable = true, command = 'refreshKeys'}
}

Config.Hotkeys = {
    lock = {enable = true, key = 'L'},
    keyMenu = {enable = true, key = 'U'},
}

Config.AdminCommand = {
    enable = true,
    command = 'adlock',
    groups = {'superadmin', 'admin'}
}

Config.Settings = {
    lockDistance = 8.0,
    exchangeLocksPrice = 5000,
    transferVehicle = true,
    lockVehiclesFromNPCs = {
        enable = true,
        probability = 25
    },
    menu = {
        showSecondaryKeys = true,
        showTempKeys = true,
        showExchangeLocks = true,
        showTransferVehicle = true,
        refreshPlayerKeys = true,
        keysMenu = 'ox_context' -- 'ox_context' or 'ox_menu'
    },
    key = {
        needItem = true,
        canUseItem = true,
        itemName = 'keys',
        uniqueItems = true,
        inventory = 'ox_inventory',
        itemLabel = 'Vehicle Key',
        plateLabel = 'Plate: %s',
        toggleWithKey = true,
    },
    transfer = {
        needItem = true,
        canUseItem = true,
        itemName = 'contract',
    },
    animation = {
        dict = "anim@mp_player_intmenu@key_fob@",
        anim = "fob_click_fp",
        prop = `lr_prop_carkey_fob`,
    },
}

Config.KeyRingSystem = {
    enable = true,
    addItem = true,
    item = 'keyring',
}

Config.GivePrimaryKey = {
    giveSecondaryKey = true,
    givePrimaryKey = false,
    removePrimaryKey = false,
    transferOwnership = false,
}

Config.Whitelist = {
    models = {`caddy`, `caddy2`, `caddy3`, `airtug`, `docktug`, `forklift`, `mower`, `tractor2`},
    plates = {"TEST"}
}

Config.Blacklist = {
    models = {`bmx`, `cruiser`, `fixter`, `scorcher`, `tribike`, `tribike2`, `tribike3`},
    plates = {"TEST2"}
}

Config.JobVehicles = {
    ['police'] = {
        models = {`police`, `police2`, `police3`, `police4`, `policeb`, `polmav`},
        plates = {"LSPD", "POL"},
    },
    ['ambulance'] = {
        models = {`ambulance`},
        plates = {"LSMD", "AMB"},
    },
}
```
