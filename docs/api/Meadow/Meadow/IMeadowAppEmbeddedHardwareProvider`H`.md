---
title: Interface IMeadowAppEmbeddedHardwareProvider<H>
sidebar_label: IMeadowAppEmbeddedHardwareProvider<H>
description: >-
  An interface for a factory class responsible for generating
  IMeadowAppEmbeddedHardware instances at run time
slug: /docs/api/Meadow/Meadow/IMeadowAppEmbeddedHardwareProvider`H`
---
# Interface IMeadowAppEmbeddedHardwareProvider&lt;H&gt;
An interface for a factory class responsible for generating IMeadowAppEmbeddedHardware instances at run time

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IMeadowAppEmbeddedHardwareProvider.cs#L6)
```csharp title="Declaration"
public interface IMeadowAppEmbeddedHardwareProvider<H> where H : IMeadowAppEmbeddedHardware
```
## Methods
### Create(IMeadowDevice)
Creates an IMeadowAppEmbeddedHardware based on detected runtime conditions
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IMeadowAppEmbeddedHardwareProvider.cs#L12)
```csharp title="Declaration"
H Create(IMeadowDevice device)
```

##### Returns

`<H>`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.IMeadowDevice](../Meadow/IMeadowDevice) | *device* |

