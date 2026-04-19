---
title: Ace Permission
sidebar_position: 2
---

# Ace Permission

## MSK.IsAceAllowed

**Parameters**  
**playerId** - `number` - PlayerId of the player  
**command** - `string` - Check for ace permission for this command

**Returns**  
**hasAcePerm** - `boolean` - Whether the Player has Ace Permission for the given Command

```lua
local hasAcePerm = MSK.IsAceAllowed(playerId, command)

-- Example
local hasAcePerm = MSK.IsAceAllowed(1, 'your_command')

-- As an Export:
local hasAcePerm = exports.msk_core:IsAceAllowed(playerId, command)
```

## MSK.IsPrincipalAceAllowed

**Parameters**  
**principal** - `string` - Principal  
**ace** - `string` - Ace permission

```lua
local isAllowed = MSK.IsPrincipalAceAllowed(principal, ace)

-- Example
local isAllowed = MSK.IsPrincipalAceAllowed('group.admin', 'command.your_command')

-- As an Export:
local isAllowed = exports.msk_core:IsPrincipalAceAllowed(principal, ace)
```

## MSK.AddAce

**Parameters**  
**principal** - `number/string` - Principal to add for  
**ace** - `string` - Ace permission to add  
**allow** - `string` - `'allow'` or `'deny'` - Optional, default: `'allow'`

```lua
MSK.AddAce(principal, ace, allow)

-- Example 1: Adds command permission for group admin
MSK.AddAce('admin', 'command.your_command')

-- Example 2: Adds command permission for playerId 1
MSK.AddAce(1, 'command.your_command')

-- As an Export:
exports.msk_core:AddAce(principal, ace, allow)
```

## MSK.RemoveAce

**Parameters**  
**principal** - `number/string` - Principal to remove for  
**ace** - `string` - Ace permission to remove  
**allow** - `string` - `'allow'` or `'deny'` - Optional, default: `'allow'`

```lua
MSK.RemoveAce(principal, ace, allow)

-- Example 1: Removes command permission for group admin
MSK.RemoveAce('admin', 'command.your_command')

-- Example 2: Removes command permission for playerId 1
MSK.RemoveAce(1, 'command.your_command')

-- As an Export:
exports.msk_core:RemoveAce(principal, ace, allow)
```
