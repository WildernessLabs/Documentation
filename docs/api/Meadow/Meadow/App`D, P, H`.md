---
title: 'Class App<D, P, H>'
sidebar_label: 'App<D, P, H>'
description: >-
  Provides a base implementation for the Meadow App. Use this class for Meadow
  applications to get strongly-typed access to the current device information.
slug: '/docs/api/Meadow/Meadow/App`D, P, H`'
---
# Class App&lt;D, P, H&gt;
Provides a base implementation for the Meadow App. Use this
class for Meadow applications to get strongly-typed access to the current
device information.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App_D_P_H.cs#L11)
```csharp title="Declaration"
public abstract class App<D, P, H> : AppBase, IApp where D : class, IMeadowDevice where P : IMeadowAppEmbeddedHardwareProvider<H> where H : IMeadowAppEmbeddedHardware
```
**Inheritance:** `System.Object` -> [Meadow.AppBase](../Meadow/AppBase)

**Implements:**  
[Meadow.IApp](../Meadow/IApp)

## Properties
### Hardware
The instance if the IMeadowAppEmbeddedHardware on which the stack is running
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App_D_P_H.cs#L19)
```csharp title="Declaration"
public static H Hardware { get; }
```

## Implements

* [Meadow.IApp](../Meadow/IApp)
