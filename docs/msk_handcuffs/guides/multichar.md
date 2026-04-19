---
title: Multichar
sidebar_position: 4
---

# Multichar

On some multichar scripts, the ESX event `'esx:playerLoaded'` won't be triggered correctly. This event is necessary so that `msk_handcuffs` can load the data stored in `database.json`.

If you set `Config.Debug = true` and get the following error, or if the player is not handcuffed anymore after relog, add the following event to your multichar after the character was selected.

## Error

```
[msk_handcuffs] [Error] Player not found on esx:playerLoaded
```

## Fix

```lua
-- Clientside
TriggerEvent('msk_handcuffs:setCuffStatus')

-- Serverside
TriggerClientEvent('msk_handcuffs:setCuffStatus', source)
```
