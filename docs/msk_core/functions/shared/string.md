---
title: String
sidebar_position: 2
---

# String

## MSK.String.Random

Generate a Random String.

**Parameters**  
**length** - `number` - The Length of the string

**Returns**  
**text** - `string` - The Text of the given length

```lua
local text = MSK.String.Random(length)

-- Example
local text = MSK.String.Random(3) -- abc
local text = string.upper(MSK.String.Random(3)) -- ABC

-- As an Export:
local text = exports.msk_core:GetRandomString(length)
```

## MSK.String.StartsWith

Checks if the given string starts with the given string.

**Parameters**  
**text** - `string` - Text that should be checked  
**letter** - `string` - Letter to search for

**Returns**  
**startsWith** - `boolean` - Whether the text starts with the given letter

```lua
local text = 'Hello'
local startsWith = MSK.String.StartsWith(text, 'H') -- Returns true
local startsWith = MSK.String.StartsWith(text, 'e') -- Returns false

-- As an Export:
local text = exports.msk_core:StartsWith(text, letter)
```

## MSK.String.Trim

Removes spaces in a string.

**Parameters**  
**text** - `string` - Text that should be trimmed  
**hardtrim** - `boolean` - All spaces will be trimmed - Optional

**Returns**  
**trimmed** - `string` - The trimmed text

```lua
local trimmed = MSK.String.Trim(text, hardtrim)

-- Example
local text = ' Hello World '

-- Removes leading and trailing spaces
MSK.String.Trim(text) -- Output: 'Hello World'

-- Removes ALL spaces
MSK.String.Trim(text, true) -- Output: 'HelloWorld'

-- As an Export:
local text = exports.msk_core:Trim(text, hardtrim)
```

## MSK.String.Split

Splits a string into two different strings.

**Parameters**  
**text** - `string` - Text that should be split  
**delimiter** - `string` - Delimiter where the text should be split

**Returns**  
**result** - `table` - Includes the split strings

```lua
local text = 'license:12345678'
local result = MSK.String.Split(text, ':')
print(result[1], result[2]) -- Output: license, 12345678

-- As an Export:
local result = exports.msk_core:Split(text, delimiter)
```
