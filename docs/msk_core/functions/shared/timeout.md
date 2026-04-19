---
title: Timeout
sidebar_position: 5
---

# Timeout

## MSK.Timeout.Set

Set a new asynchronous timeout.

**Parameters**  
**milliseconds** - `number` - Time to wait  
**cb** - `function` - Callback Function

```lua
timeout = MSK.Timeout.Set(milliseconds, function(data)
    print(data) -- Output: 'Hello World'
end, 'Hello World')

-- You can also use:
timeout = MSK.Timeout(milliseconds, function(data)
    print(data) -- Output: 'Hello World'
end, 'Hello World')

-- As an Export:
local timeout = exports.msk_core:SetTimeout(milliseconds, cb)
```

## MSK.Timeout.Clear

Clears the given timeout.

**Parameters**  
**timeout** - `number` - Timeout ID

```lua
MSK.Timeout.Clear(timeout)

-- As an Export:
exports.msk_core:ClearTimeout(timeout)
```

## MSK.Timeout.Await

Calls a function repeatedly until it receives a non-nil value, or it times out.

Thanks to [ox_lib](https://overextended.dev/ox_lib/Modules/WaitFor/Shared) for this function!

**Parameters**  
**milliseconds** - `number` - Time to wait  
**cb** - `function` - Callback Function  
**errorMessage** - `string` - Message on error

**Returns**  
**value** - `?` - The given value

```lua
local value = MSK.Timeout.Await(5000, function()
    if math.random(0, 1) == 1 then
        return 'abc'
    end
end, 'This is an Error Message')

print(value) -- Output: 'abc'

-- As an Export:
local value = exports.msk_core:AwaitTimeout(ms, cb, errorMessage)
```
