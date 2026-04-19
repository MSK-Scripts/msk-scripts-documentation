---
title: Input
sidebar_position: 1
---

# Input

## MSK.Input.Open

Opens an Input Window for a specific player.

**Parameters**  
**playerId** - `number` - Players server id  
**header** - `string` - Header Text  
**placeholder** - `string` - Placeholder text  
**field** - `boolean` - Small Input or Big Input

**Returns**  
**input** - `string/number` - Input

#### Asynchronous

```lua
-- Small Input Window
MSK.Input.Open(playerId, 'This is a Header', 'This is a Placeholder', function(input)
    if not input then return end
    print(input)
end)

-- Big Input Window
MSK.Input.Open(playerId, 'This is a Header', 'This is a Placeholder', true, function(input)
    if not input then return end
    print(input)
end)

-- As an Export:
exports.msk_core:Input(playerId, header, placeholder, field, function(input)
    if not input then return end
    print(input)
end)
```

#### Synchronous

```lua
local input = MSK.Input.Open(playerId, 'This is a Header', 'This is a Placeholder')
print(input)

-- As an Export:
local input = exports.msk_core:Input(playerId, header, placeholder, field)
```

## MSK.Input.Close

Closes the current Input Window.

**Parameters**  
**playerId** - `number` - Players server id

```lua
MSK.Input.Close(playerId)

-- As an Export:
exports.msk_core:CloseInput(playerId)
```
