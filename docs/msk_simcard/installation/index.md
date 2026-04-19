---
title: Installation
sidebar_position: 2
---

# Installation

[CFX Forum Post](https://forum.cfx.re/t/esx-qbcore-msk-simcard-change-your-phonenumber/4847008)

## ESX Framework

Run this SQL command in your database:

```sql
INSERT INTO `items` (`name`, `label`, `weight`, `rare`, `can_remove`) VALUES
    ('simcard', 'Simcard', 1, 0, 1),
    ('simcard_wish', 'Simcard', 1, 0, 1)
;
```

## QBCore Framework

Add the items to your `qb-core/shared/items.lua`:

```lua
['simcard'] = {['name'] = 'simcard', ['label'] = 'Simcard', ['weight'] = 1000, ['type'] = 'item', ['image'] = 'simcard.png', ['unique'] = true, ['useable'] = true, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Simcard that will change your phone number'},
['simcard_wish'] = {['name'] = 'simcard_wish', ['label'] = 'Simcard', ['weight'] = 1000, ['type'] = 'item', ['image'] = 'simcard.png', ['unique'] = true, ['useable'] = true, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Set the phone number you desire'},
```

## Chezza Phone

- Create a new folder in `phone/apps/` named `changenumber`
- Create a new file `sv_changenumber.lua`

```lua title="sv_changenumber.lua"
RegisterNetEvent('phone:changeNumber')
AddEventHandler('phone:changeNumber', function(src, newNumber)
    if Phones[src] then
        Phones[src].number = newNumber
        print("[^4Phone^0] Updated Phonenumber to ^3" .. newNumber .. "^0 for ^5" .. GetPlayerName(src) .. "^0")
    end
end)
```

## NPWD Phone

Go to `/npwd/resources/dist/server/server.js` at line `~52764` and add:

```typescript
exp4("setPhoneNumber", (src, newNumber) => {
    let player = player_service_default.getPlayer(src);
    player._phoneNumber = newNumber;
    console.log(`[msk_simcard]: Phonenumber was set to ${player._phoneNumber}`);
});
```
