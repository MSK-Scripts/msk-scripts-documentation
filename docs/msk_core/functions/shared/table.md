---
title: Table
sidebar_position: 4
---

# Table

## MSK.Table.Contains

Check if a value exists in a table.

**Parameters**  
**tbl** - `table` - The Table to check  
**value** - `string/table` - The Value(s) to check

**Returns**  
**contains** - `boolean` - Whether the value exists in the table

```lua
local tbl = {'value_1', 'value_2'}

-- Checks if the value contains in the table
local contains = MSK.Table.Contains(tbl, 'value_1')

-- Checks if one of the values contains in the table
local contains = MSK.Table.Contains(tbl, {'value_1', 'value_5'})

-- As an Export:
local contains = exports.msk_core:TableContains(tbl, value)
```

## MSK.Table.Dump

Dumps the given table to a readable string with a tree structure.

**Parameters**  
**tbl** - `table` - The Table that should be dumped

**Returns**  
**text** - `string` - The formatted text of the given table

```lua
local tbl = {
  ['test'] = {name = 'test', action = '123'},
  test2 = {name = 'test2', action = 456},
}

print(MSK.Table.Dump(tbl))

-- As an Export:
local text = exports.msk_core:TableDump(tbl)
```

## MSK.Table.Size

Get the size of the table.

**Parameters**  
**tbl** - `table` - The Table that should be checked

**Returns**  
**size** - `number` - The size of the table

```lua
local tbl = {
  ['test'] = {name = 'test', action = '123'},
  test2 = {name = 'test2', action = 456},
}

local size = MSK.Table.Size(tbl) -- Output: 2
```

## MSK.Table.Find

Find a specific value in an indexed table.

**Parameters**  
**tbl** - `table` - The Table that should be checked  
**value** - `any` - The value to search for

**Returns**  
**index** - `number?` - The index of the given value  
**value** - `number/string/table` - The value found

```lua
local index, value = MSK.Table.Find(tbl, value)

local tbl = {
  [1] = {'123'},
  [2] = {456},
}

local index, value = MSK.Table.Find(tbl, '123')       -- Output: 1, '123'
local index, value = MSK.Table.Find(tbl, 456)         -- Output: 2, 456
local index, value = MSK.Table.Find(tbl, 'Hello World') -- Output: nil, 'Hello World'
```
