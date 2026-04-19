---
title: Commands
sidebar_position: 4
---

# Commands

## MSK.RegisterCommand

**Parameters**  
**commandName** - `string` or `table` - The Command  
**callback** - `function` - Function to execute  
**properties** - `boolean` or `table` - Data Properties

**Description — `properties`:**

- **allowConsole** - `boolean` - Allow execution from server console - Optional, default: `true`
- **showSuggestion** - `boolean` - Show chat suggestion - Optional, default: `true`
- **restricted** - `boolean` or `string` or `table` - Restrict command to specific groups
- **help** - `string` - Chat suggestion
- **params** - `table` - Parameters for the command

**Description — `params`:**

- **name** - `string` - Name of the argument
- **type** - `string` - `number`, `string`, `playerId`, `any`, `player`
- **help** - `string` - Chat suggestion of the argument
- **optional** - `boolean?` - Is the argument optional? - Optional, default: `false`

```lua
MSK.RegisterCommand(commandName, callback, properties)

-- Example 1
MSK.RegisterCommand('testCommand', function(source, args, raw)
    local targetId, time, reason = args.playerId, args.time, args.reason

    if not reason then
        reason = 'Unknown reason'
    end

    print(('Player %s was banned by %s for %s until %s'):format(targetId, source, reason, time))
end, {
    allowConsole = true,
    showSuggestion = true,
    restricted = {'superadmin', 'admin'},
    help = 'This is a Test Command',
    params = {
        {name = "playerId", type = 'playerId', help = "Target players server id"},
        {name = "time", type = 'string', help = "Ban Time"},
        {name = "reason", type = 'string', help = "Ban Reason", optional = true},
    }
})

-- Example 2 -> Framework based (Only ESX and QBCore)
MSK.RegisterCommand('testCommand', function(Player, args, raw)
    local Target = args.player

    -- ESX
    print(Player.source)       -- PlayerId of the Executer
    print(Target.source)       -- PlayerId of the Arguments playerId

    -- QBCore
    print(Player.PlayerData.source)
    print(Target.PlayerData.source)
end, {
    allowConsole = true,
    showSuggestion = true,
    returnPlayer = true,
    restricted = {'superadmin', 'admin'},
    help = 'This is a Test Command',
    params = {
        {name = "player", type = 'player', help = "random argument"},
    }
})

-- As an Export:
exports.msk_core:RegisterCommand(commandName, callback, properties)
```
