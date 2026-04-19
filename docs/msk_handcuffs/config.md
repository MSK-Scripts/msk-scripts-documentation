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

Config.DiscordLog = true
Config.botColor = "6205745"
Config.botName = "MSK Scripts"
Config.botAvatar = "https://i.imgur.com/PizJGsh.png"

Config.Notification = function(source, message, typ)
    if IsDuplicityVersion() then
        MSK.Notification(source, 'MSK Handcuffs', message, typ, 5000)
    else
        MSK.Notification('MSK Handcuffs', message, typ, 5000)
    end
end

Config.cuffItems = {'cuffs', 'cable_ties'}
Config.hardcuffItems = {'hardcuff'}
Config.uncuffItems = {'cuff_keys', 'scissors'}

Config.ItemSettings = {
    ['cuffs'] = {'cuff_keys'},
    ['cable_ties'] = {'scissors'},
}

Config.RestrictItems = {
    enable = true,
    defaultItems = {
        cuffItem = 'cable_ties',
        hardcuffItem = 'hardcuff',
        uncuffItem = 'scissors',
        enableAnkletracker = false,
        enableHeadbag = true,
        enableTape = true,
    },
    jobItems = {
        ['police'] = {
            cuffItem = 'cuffs',
            hardcuffItem = 'hardcuff',
            uncuffItem = 'cuff_keys',
            enableAnkletracker = true,
            enableHeadbag = true,
            enableTape = true,
        },
    }
}

Config.Commands = {
    cuff = {enable = true, command = 'cuff', item = 'cable_ties', jobs = {['police'] = 'cuffs'}},
    hardcuff = {enable = true, command = 'hardcuff', item = 'hardcuff', jobs = {['police'] = 'hardcuff'}},
    uncuff = {enable = true, command = 'uncuff', item = 'scissors', jobs = {['police'] = 'cuff_keys'}},
}

Config.AnkleTracker = {
    enable = true,
    refreshTime = 5.0,
    item = 'ankletracker',
    removeItem = 'other_item_than_ankletracker',
    command = 'ankletracker',
    blip = {id = 1, color = 15, scale = 0.8, prefix = 'Track'},
    jobs = {'police', 'fib', 'sheriff', 'doj'},
}

Config.HeadBag = {
    enable = true,
    item = 'headbag',
    removeItem = 'other_item_than_headbag',
    command = 'headbag',
}

Config.Tape = {
    enable = true,
    item = 'tape',
    removeItem = 'other_item_than_tape',
    command = 'tape',
}

Config.addCuffItems = true
Config.UncuffOnPlayerDied = true

Config.Timer = {
    enable = true,
    time = 30 -- in minutes
}

Config.EnableProps = true
Config.Props = {
    ['cuffs'] = `p_cs_cuffs_02_s`,
    ['cable_ties'] = `p_cs_cuffs_02_s`,
    ['hardcuff'] = nil,
    ['cuff_keys'] = `prop_cuff_keys_01`,
    ['scissors'] = `prop_cuff_keys_01`,
    [Config.AnkleTracker.item] = nil,
    [Config.HeadBag.item] = `prop_money_bag_01`,
    [Config.Tape.item] = `prop_gaffertape`,
}

Config.AdminGroups = {'superadmin', 'admin'}

Config.AdminCommands = {
    cuff = {enable = true, command = 'adcuff', playAnimation = false},
    hardcuff = {enable = true, command = 'adhardcuff'},
    uncuff = {enable = true, command = 'aduncuff'},
    ankleTracker = {enable = true, command = 'adankletracker'},
    headbag = {enable = true, command = 'adheadbag'},
    tape = {enable = true, command = 'adtape'},
}
```
