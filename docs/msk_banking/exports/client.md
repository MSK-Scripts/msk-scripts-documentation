---
title: Client
sidebar_position: 1
---

# Client Exports

## openATM

Opens the ATM.

**Parameters**  
**checkPin** - `boolean` - Check the pin before opening the ATM

```lua
-- Opens the ATM without checking the Pin
exports.msk_banking:openATM()

-- Opens the ATM and checks the Pin before opening
exports.msk_banking:openATM(true)
```

## checkPin

Opens the Numpad or Input to insert the pin. If correct, opens the ATM.

```lua
exports.msk_banking:checkPin()
```

## getBankingInfo

**Parameters**  
**checkBankcard** - `boolean` - Check if the player has a Bankcard

**Returns**  
**mainAccount** - `table <identifier, cash, bank, iban>`  
**secondAccount** - `table <identifier, bank, iban>`  
**hasBankcard** - `boolean`

```lua
local mainAccount, secondAccount, hasBankcard = exports.msk_banking:getBankingInfo(true)
```

## getSocietyInfo

**Parameters**  
**jobname** - `string` - The job you want the data from - Optional

**Returns**  
**societyAccount** - `table <identifier, bank, iban, name, label>`

```lua
-- Return the Account of your own job
local societyAccount = exports.msk_banking:getSocietyInfo()

-- Return the Account of the given job
local societyAccount = exports.msk_banking:getSocietyInfo('police')

--[[
societyAccount.identifier -- 'police'
societyAccount.bank       -- 5035
societyAccount.iban       -- 'SALSPD'
societyAccount.name       -- 'society_police'
societyAccount.label      -- 'LSPD'
]]
```

## getCartridgeBursted

**Parameters**  
**playerId** - `string|number` - The ServerId of the player

**Returns**  
**bursted** - `boolean` - Whether a Cartridge is Bursted during an ATM Robbery

```lua
local bursted = exports.msk_banking:getCartridgeBursted(playerId)
```
