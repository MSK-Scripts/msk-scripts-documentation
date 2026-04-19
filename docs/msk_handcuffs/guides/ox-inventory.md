---
title: ox_inventory
sidebar_position: 5
---

# ox_inventory

Add the following items to `ox_inventory/data/items.lua`:

```lua
["cuffs"] = {
    label = "Handcuffs",
    weight = 180,
    stack = true,
    close = true,
    description = "Easily restrains a person",
},
["hardcuff"] = {
    label = "Hardcuffs",
    weight = 200,
    stack = true,
    close = true,
    description = "Strongly restrains a person",
},
["cuff_keys"] = {
    label = "Handcuffkey",
    weight = 10,
    stack = true,
    close = true,
    description = "Removes handcuffs from a person",
},
["cable_ties"] = {
    label = "Cable Ties",
    weight = 30,
    stack = true,
    close = true,
    description = "Easily restrains a person",
},
["scissors"] = {
    label = "Scissors",
    weight = 10,
    stack = true,
    close = true,
    description = "Removes cable ties from a person",
},
["ankletracker"] = {
    label = "Ankletracker",
    weight = 300,
    stack = true,
    close = true,
    description = "Places an electronic ankle tracker on a person",
},
["headbag"] = {
    label = "Headbag",
    weight = 180,
    stack = true,
    close = true,
    description = "The bag blinds a person",
},
["tape"] = {
    label = "Tape",
    weight = 10,
    stack = true,
    close = true,
    description = "The tape seals a person's mouth, silencing them",
},
```
