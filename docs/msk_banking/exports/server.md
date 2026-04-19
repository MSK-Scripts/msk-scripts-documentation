---
title: Server
sidebar_position: 2
---

# Server Exports

## getPlayerPin

**Parameters**  
**identifier** - `string` - Player Identifier

**Returns**  
**pin** - `number` - The PIN of the given Player

```lua
local pin = exports.msk_banking:getPlayerPin(identifier)
```

## addTransaction

**Parameters**  
**receiver_iban** - `string` - IBAN of the Player  
**receiver_name** - `string` - Name of the Player  
**sender_iban** - `string` - IBAN of the Sender  
**sender_name** - `string` - Name of the Sender  
**amount** - `number` - Amount  
**reason** - `string` - Reason  
**action** - `string` - `'deposit'`, `'withdraw'`, `'transfer'` or others  
**account** - `string` - `'main'`, `'1'` or `'society'`

```lua
exports.msk_banking:addTransaction(receiver_iban, receiver_name, sender_iban, sender_name, amount, reason, action, account)

-- Example
local iban = exports.msk_banking:getIBANFromIdentifier(xPlayer.identifier)
exports.msk_banking:addTransaction(iban, xPlayer.name, 'paycheck', xPlayer.job.label, 1523, 'Paycheck', 'paycheck', 'main')
```

## getIBANFromIdentifier

**Parameters**  
**identifier** - `string` - The players identifier  
**account** - `string` - `'main'`, `'1'` or `'society'`

**Returns**  
**iban** - `string` - The IBAN of the given Player

```lua
local iban = exports.msk_banking:getIBANFromIdentifier(identifier, account)

-- Example
local iban = exports.msk_banking:getIBANFromIdentifier(xPlayer.identifier, 'main')
local iban = exports.msk_banking:getIBANFromIdentifier(xPlayer.identifier, '1')
```

## getAccount

**Parameters**  
**iban** - `string` - The IBAN of the Player

**Returns**  
**data** - `table <money, iban, account, identifier>`

```lua
local data = exports.msk_banking:getAccount('SA123456')
print(data.money, data.iban, data.account, data.identifier)
```

## getSocietyLabel

**Parameters**  
**jobName** - `string` - The Jobname

**Returns**  
**jobLabel** - `string` - The Label of the given job from config.lua

```lua
local jobLabel = exports.msk_banking:getSocietyLabel('police')
```

## getInvestment

**Parameters**  
**playerData** - `table` - Player Data

**Returns**  
**invest** - `number` - The current Investment Amount

```lua
local invest = exports.msk_banking:getInvestment({source = playerId})
local invest = exports.msk_banking:getInvestment({identifier = xPlayer.identifier})
local invest = exports.msk_banking:getInvestment({player = xPlayer})
```
