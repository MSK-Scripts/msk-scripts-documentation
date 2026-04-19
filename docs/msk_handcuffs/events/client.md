---
title: Client
sidebar_position: 1
---

# Client Events

## Drag / Escort

Drag/Escort a Player.

**Parameters**  
**targetId** - Server ID of the player

```lua
TriggerServerEvent('msk_handcuffs:setDrag', targetId)

-- Example
TriggerServerEvent('msk_handcuffs:setDrag', GetPlayerServerId(closestPlayer))
```

## Put Player in a Car

**Parameters**  
**targetId** - Server ID of the player

```lua
TriggerServerEvent('msk_handcuffs:putInCar', targetId)

-- Example
TriggerServerEvent('msk_handcuffs:putInCar', GetPlayerServerId(closestPlayer))
```

## Put out of Car

**Parameters**  
**targetId** - Server ID of the player

```lua
TriggerServerEvent('msk_handcuffs:outOfCar', targetId)

-- Example
TriggerServerEvent('msk_handcuffs:outOfCar', GetPlayerServerId(closestPlayer))
```
