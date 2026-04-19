---
title: Request
sidebar_position: 7
---

# Request

## MSK.Request.AnimDict

Loads the given animation dictionary.

**Parameters**  
**animDict** - `string` - The dictionary

**Returns**  
**animDict** - `string` - The given animation dictionary

```lua
MSK.Request.AnimDict(animDict)

-- Example:
MSK.Request.AnimDict("cellphone@")

-- As an Export:
exports.msk_core:RequestAnimDict(animDict)
```

## MSK.Request.AnimSet

Loads the given animation set.

**Parameters**  
**animSet** - `string` - The animation set

**Returns**  
**animSet** - `string` - The given animation set

```lua
MSK.Request.AnimSet(animSet)

-- As an Export:
exports.msk_core:RequestAnimSet(animSet)
```

## MSK.Request.Model

Loads the given model.

**Parameters**  
**model** - `number` - The Hash of the model

**Returns**  
**model** - `number` - The given model

```lua
MSK.Request.Model(model)

-- Example 1
MSK.Request.Model(`prop_cs_hand_radio`)

-- Example 2
MSK.Request.Model(GetHashKey("prop_cs_hand_radio"))

-- As an Export:
exports.msk_core:RequestModel(model)
```

## MSK.Request.PtfxAsset

Loads the given particle effect asset.

**Parameters**  
**ptFxName** - `string` - The ptFxName Asset

**Returns**  
**ptFxName** - `string` - The given ptFxName Asset

```lua
MSK.Request.PtfxAsset(ptFxName)

-- As an Export:
exports.msk_core:RequestPtfxAsset(ptFxName)
```

## MSK.Request.TextureDict

Loads the given texture dictionary.

**Parameters**  
**textureDict** - `string` - The Texture Dictionary

**Returns**  
**textureDict** - `string` - The given Texture Dictionary

```lua
MSK.Request.TextureDict(textureDict)

-- As an Export:
exports.msk_core:RequestTextureDict(textureDict)
```
