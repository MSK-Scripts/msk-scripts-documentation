---
title: Ace Permission
sidebar_position: 2
---

# Ace Permission

## MSK.IsAceAllowed

**Parameters**  
**command** - `string` - Check for ace permission for this command

**Returns**  
**hasAcePerm** - `boolean` - Whether the Player has Ace Permission for the given Command

```lua
local hasAcePerm = MSK.IsAceAllowed(command)

-- Example
local hasAcePerm = MSK.IsAceAllowed('your_command')

-- As an Export:
local hasAcePerm = exports.msk_core:IsAceAllowed(command)
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
