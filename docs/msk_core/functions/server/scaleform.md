---
title: Scaleform
sidebar_position: 6
---

# Scaleform

## MSK.Scaleform.FreemodeMessage

**Parameters**  
**playerId** - `number` - Players server id  
**title** - `string` - The Title text  
**text** - `string` - The Message text  
**duration** - `number <milliseconds>` - Optional, default: `5000`

```lua
MSK.Scaleform.FreemodeMessage(playerId, header, text, duration)

-- As an Export:
exports.msk_core:FreemodeMessage(playerId, header, text, duration)
```

## MSK.Scaleform.PopupWarning

**Parameters**  
**playerId** - `number` - Players server id  
**title** - `string` - The Title text  
**text** - `string` - The Message text  
**footer** - `string` - The Footer text - Optional  
**duration** - `number <milliseconds>` - Optional, default: `5000`

```lua
MSK.Scaleform.PopupWarning(playerId, header, text, footer, duration)

-- As an Export:
exports.msk_core:PopupWarning(playerId, header, text, footer, duration)
```

## MSK.Scaleform.BreakingNews

**Parameters**  
**playerId** - `number` - Players server id  
**title** - `string` - The Title text  
**text** - `string` - The Message text  
**footer** - `string` - The Footer text - Optional  
**duration** - `number <milliseconds>` - Optional, default: `5000`

```lua
MSK.Scaleform.BreakingNews(playerId, header, text, footer, duration)

-- As an Export:
exports.msk_core:BreakingNews(playerId, header, text, footer, duration)
```

## MSK.Scaleform.TrafficMovie

**Parameters**  
**playerId** - `number` - Players server id  
**duration** - `number <milliseconds>` - Optional, default: `5000`

```lua
MSK.Scaleform.TrafficMovie(playerId, duration)

-- As an Export:
exports.msk_core:TrafficMovie(playerId, duration)
```
