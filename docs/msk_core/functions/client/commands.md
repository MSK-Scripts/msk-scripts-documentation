---
title: Commands
sidebar_position: 3
---

# Commands

## MSK.RegisterCommand

**Parameters**  
**commandName** - `string` or `table` - The Command  
**callback** - `function` - Function to execute  
**restricted** - `boolean` - Check Player Ace Permission  
**properties** - `boolean` or `table` - Data Properties

**Description — `properties`**

- **showSuggestion** - `boolean` - Show chat suggestion - Optional, default: `true`
- **help** - `string` - Chat suggestion
- **params** - `table` - Parameters for the command
- **hotkey** - `table` - Register a Hotkey _(RegisterKeyMapping)_ - Optional, default: `nil`

You can only use the hotkey if no params were set!

**Description — `params`**

- **name** - `string` - Name of the argument
- **type** - `string` - Type of the argument — `number`, `string`, `playerId`, `any`, `player`
- **help** - `string` - Chat suggestion of the argument
- **optional** - `boolean?` - Is the argument optional? Has to be the last argument! - Optional, default: `false`

**Description — `hotkey`**

- **key** - `string` - Keybind
- **text** - `string` - Description of the Keybind

```lua
MSK.RegisterCommand(commandName, callback, restricted, properties)

-- Example 1
MSK.RegisterCommand('testCommand', function(source, args, raw)
    local data, reason = args.data, args.reason

    if not reason then
        reason = 'Unknown reason'
    end

    print(('Data: %s; Reason: %s'):format(data, reason))
end, false, {
    showSuggestion = true,
    help = 'This is a Test Command',
    params = {
        {name = "data", type = 'any', help = "Anything"},
        {name = "reason", type = 'string', help = "Optional Text", optional = true},
    }
})

-- Example 2 -> With Hotkey (You can't use params)
MSK.RegisterCommand('testCommand', function(source, args, raw)
    print('Command triggered')
end, false, {
    showSuggestion = true,
    help = 'This is a Test Command',
    hotkey = {
        key = 'X',
        text = 'Test Command'
    }
})

-- As an Export:
exports.msk_core:RegisterCommand(commandName, callback, restricted, properties)
```
