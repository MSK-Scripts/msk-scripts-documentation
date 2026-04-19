---
title: Server
sidebar_position: 2
---

# Server Events

## Cuff

**Parameters**  
**item** - `string` - The Item to cuff with - Optional  
**player** - `player` - The target Player - Optional

```lua
TriggerClientEvent('msk_handcuffs:cuff', source, item, player)

TriggerClientEvent('msk_handcuffs:cuff', source)
TriggerClientEvent('msk_handcuffs:cuff', source, 'cuffs')
TriggerClientEvent('msk_handcuffs:cuff', source, nil, GetPlayerFromServerId(targetId))
TriggerClientEvent('msk_handcuffs:cuff', source, 'cuffs', GetPlayerFromServerId(targetId))
```

## Hardcuff

```lua
TriggerClientEvent('msk_handcuffs:hardcuff', source, item, player)

TriggerClientEvent('msk_handcuffs:hardcuff', source)
TriggerClientEvent('msk_handcuffs:hardcuff', source, 'hardcuff')
TriggerClientEvent('msk_handcuffs:hardcuff', source, nil, GetPlayerFromServerId(targetId))
TriggerClientEvent('msk_handcuffs:hardcuff', source, 'hardcuff', GetPlayerFromServerId(targetId))
```

## Uncuff

Checks if the item is correct to uncuff someone.

```lua
TriggerClientEvent('msk_handcuffs:uncuff', source, item, player)

TriggerClientEvent('msk_handcuffs:uncuff', source)
TriggerClientEvent('msk_handcuffs:uncuff', source, 'cuff_keys')
TriggerClientEvent('msk_handcuffs:uncuff', source, nil, GetPlayerFromServerId(targetId))
TriggerClientEvent('msk_handcuffs:uncuff', source, 'cuff_keys', GetPlayerFromServerId(targetId))
```

## Ankletracker

```lua
TriggerClientEvent('msk_handcuffs:setAnkletracker', source, player)

TriggerClientEvent('msk_handcuffs:setAnkletracker', source)
TriggerClientEvent('msk_handcuffs:setAnkletracker', source, GetPlayerFromServerId(targetId))
```

## Headbag

```lua
TriggerClientEvent('msk_handcuffs:setHeadbag', source, player)

TriggerClientEvent('msk_handcuffs:setHeadbag', source)
TriggerClientEvent('msk_handcuffs:setHeadbag', source, GetPlayerFromServerId(targetId))
```

## Tape

```lua
TriggerClientEvent('msk_handcuffs:setTape', source, player)

TriggerClientEvent('msk_handcuffs:setTape', source)
TriggerClientEvent('msk_handcuffs:setTape', source, GetPlayerFromServerId(targetId))
```
