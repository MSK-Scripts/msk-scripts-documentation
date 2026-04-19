---
title: Input
sidebar_position: 1
---

# Input

## MSK.Input.Open

Opens an Input Window.

**Parameters**  
**header** - `string` - Header Text  
**placeholder** - `string` - Placeholder text  
**field** - `boolean` - Small Input or Big Input

**Returns**  
**input** - `string/number` - Input

#### Asynchronous

```lua
-- Small Input Window
MSK.Input.Open('This is a Header', 'This is a Placeholder', function(input)
    if not input then return end
    print(input)
end)

-- Big Input Window
MSK.Input.Open('This is a Header', 'This is a Placeholder', true, function(input)
    if not input then return end
    print(input)
end)

-- As an Export:
exports.msk_core:Input(header, placeholder, field, function(input)
    if not input then return end
    print(input)
end)
```

#### Synchronous

```lua
-- Small Input Window
local input = MSK.Input.Open('This is a Header', 'This is a Placeholder')
print(input)

-- Big Input Window
local input = MSK.Input.Open('This is a Header', 'This is a Placeholder', true)
print(input)

-- As an Export:
local input = exports.msk_core:Input(header, placeholder, field)
```

## MSK.Input.Close

Closes the current Input Window.

```lua
MSK.Input.Close()

-- As an Export:
exports.msk_core:CloseInput()
```

## MSK.Input.Active

Checks if the Input Window is active.

**Returns**  
**isActive** - `boolean` - Whether the Input Window is active

```lua
local isActive = MSK.Input.Active()

-- As an Export:
local isActive = exports.msk_core:InputActive()
```
