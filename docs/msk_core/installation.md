---
title: Installation
sidebar_position: 2
---

# Installation

[GitHub Releases](https://github.com/MSK-Scripts/msk_core/releases)

## Import

:::tip
The Import Method is already integrated in our Scripts, so if you use a script from us you don't need to add the import.
:::

You can add the following to the `fxmanifest.lua` to get `MSK`:

```lua
shared_script '@msk_core/import.lua'
```

After that you can use all functions like:

```lua
MSK.Notification(title, message, info, duration)
```

## Ace Permission

For the functions `MSK.AddAce` and `MSK.AddPrincipal` add the following to your `server.cfg`:

```ini
add_ace resource.msk_core command.add_ace allow
add_ace resource.msk_core command.remove_ace allow
add_ace resource.msk_core command.add_principal allow
add_ace resource.msk_core command.remove_principal allow
```

## Nice to know

All functions can be called with an export too.

```lua
exports.msk_core:Notification(title, message, info, duration)
```
