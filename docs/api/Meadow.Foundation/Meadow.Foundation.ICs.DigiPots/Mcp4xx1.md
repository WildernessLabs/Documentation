---
title: Class Mcp4xx1
sidebar_label: Mcp4xx1
description: Represents a Mcp4xx1 digital potentiometer
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots/Mcp4xx1
---
# Class Mcp4xx1
Represents a Mcp4xx1 digital potentiometer

###### **Assembly**: Mcp4xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xx1.cs#L9)
```csharp title="Declaration"
public abstract class Mcp4xx1 : Mcp4xxx, ISpiPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.DigiPots.Mcp4xxx](../Meadow.Foundation.ICs.DigiPots/Mcp4xxx)

**Derived:**  
[Meadow.Foundation.ICs.DigiPots.Mcp4131](../Meadow.Foundation.ICs.DigiPots/Mcp4131), [Meadow.Foundation.ICs.DigiPots.Mcp4141](../Meadow.Foundation.ICs.DigiPots/Mcp4141), [Meadow.Foundation.ICs.DigiPots.Mcp4151](../Meadow.Foundation.ICs.DigiPots/Mcp4151), [Meadow.Foundation.ICs.DigiPots.Mcp4161](../Meadow.Foundation.ICs.DigiPots/Mcp4161), [Meadow.Foundation.ICs.DigiPots.Mcp4231](../Meadow.Foundation.ICs.DigiPots/Mcp4231), [Meadow.Foundation.ICs.DigiPots.Mcp4241](../Meadow.Foundation.ICs.DigiPots/Mcp4241), [Meadow.Foundation.ICs.DigiPots.Mcp4251](../Meadow.Foundation.ICs.DigiPots/Mcp4251), [Meadow.Foundation.ICs.DigiPots.Mcp4261](../Meadow.Foundation.ICs.DigiPots/Mcp4261)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`

## Properties
### Potentiometers
Gets the array of potentiometers in this Mcp4xx1 device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xx1.cs#L14)
```csharp title="Declaration"
public IPotentiometer[] Potentiometers { get; }
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
