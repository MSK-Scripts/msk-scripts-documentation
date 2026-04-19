---
title: Event Handlers
sidebar_position: 4
---

# Event Handlers

## Handler

This will be triggered every time something happens. Can be used clientside and serverside.

```lua
AddEventHandler('msk_handcuffs:handler', function(playerId, targetId, action, item)
    if action == 'cuff' then
        print(('ID %s was cuffed by ID %s with Item %s'):format(playerId, targetId, item or 'no_item_found'))
    elseif action == 'hardcuff' then
        print(('ID %s was hardcuffed by ID %s with Item %s'):format(playerId, targetId, item or 'no_item_found'))
    elseif action == 'uncuff' then
        print(('ID %s was uncuffed by ID %s with Item %s'):format(playerId, targetId, item or 'no_item_found'))
    elseif action == 'ankletrackerOn' then
        print(('ID %s has activated the Ankletracker on ID %s'):format(playerId, targetId))
    elseif action == 'ankletrackerOff' then
        print(('ID %s has deactivated the Ankletracker on ID %s'):format(playerId, targetId))
    elseif action == 'headbagOn' then
        print(('ID %s has put on a Headbag on ID %s'):format(playerId, targetId))
    elseif action == 'headbagOff' then
        print(('ID %s has put off a Headbag on ID %s'):format(playerId, targetId))
    elseif action == 'tapeOn' then
        print(('ID %s has put on a Tape on ID %s'):format(playerId, targetId))
    elseif action == 'tapeOff' then
        print(('ID %s has put off a Tape on ID %s'):format(playerId, targetId))
    end
end)
```
