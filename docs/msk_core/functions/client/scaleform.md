---
title: Scaleform
sidebar_position: 8
---

# Scaleform

## MSK.Scaleform.FreemodeMessage

**Parameters**  
**title** - `string` - The Title text  
**text** - `string` - The Message text  
**duration** - `number <milliseconds>` - Optional, default: `5000`

```lua
MSK.Scaleform.FreemodeMessage(header, text, duration)

-- As an Export:
exports.msk_core:FreemodeMessage(header, text, duration)
```

## MSK.Scaleform.PopupWarning

**Parameters**  
**title** - `string` - The Title text  
**text** - `string` - The Message text  
**footer** - `string` - The Footer text - Optional  
**duration** - `number <milliseconds>` - Optional, default: `5000`

```lua
MSK.Scaleform.PopupWarning(header, text, footer, duration)

-- As an Export:
exports.msk_core:PopupWarning(header, text, footer, duration)
```

## MSK.Scaleform.BreakingNews

**Parameters**  
**title** - `string` - The Title text  
**text** - `string` - The Message text  
**footer** - `string` - The Footer text - Optional  
**duration** - `number <milliseconds>` - Optional, default: `5000`

```lua
MSK.Scaleform.BreakingNews(header, text, footer, duration)

-- As an Export:
exports.msk_core:BreakingNews(header, text, footer, duration)
```

## MSK.Scaleform.TrafficMovie

**Parameters**  
**duration** - `number <milliseconds>` - Optional, default: `5000`

```lua
MSK.Scaleform.TrafficMovie(duration)

-- As an Export:
exports.msk_core:TrafficMovie(duration)
```
