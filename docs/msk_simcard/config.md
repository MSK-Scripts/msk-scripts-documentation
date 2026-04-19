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
Config.botName = "MSK Simcard"
Config.botAvatar = "https://i.imgur.com/PizJGsh.png"

Config.Framework = 'ESX' -- 'ESX' or 'QBCore'
Config.Phone = 'yphone' -- 'chezza', 'gcphone', 'dphone', 'gksphone', 'gksphone_v2', 'highphone', 'roadphone', 'qbphone', 'npwd', 'yphone'

-- If false you need NativeUI installed
Config.dialogBox = true -- Requires an_dialogBox (https://github.com/notaymanTV/an_dialogBox)

Config.needPhone = true
Config.phoneItem = {'phone'}
Config.usableItem = 'simcard'
Config.removeItem = true

Config.StartingDigit = {
    enable = true,
    value = "097"
}

-- 'number' -> 094XXXXXX
-- 'gc'     -> 094-XXXX
-- 'canada' -> 094-XXX-XXXX
Config.numberFormat = 'number'

Config.wishItem = 'simcard_wish'
Config.numberLength = 9

Config.changeDefault = true
Config.changeDatabase = true

Config.Database = {
    usersDB = 'users',
    usersIdentifierTB = 'identifier',
    numberDB = 'yphone_ycloud_accounts',
    numberTB = 'phone_number',
    identifierTB = 'phone_imei'
}
```
