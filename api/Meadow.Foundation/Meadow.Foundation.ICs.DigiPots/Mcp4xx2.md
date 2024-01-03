---
title: Class Mcp4xx2
sidebar_label: Mcp4xx2
description: "Represents a Mcp4xx2 digital rheostat"
---
# Class Mcp4xx2
Represents a Mcp4xx2 digital rheostat

###### **Assembly**: Mcp4xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xx2.cs#L9)
```csharp title="Declaration"
public abstract class Mcp4xx2 : Mcp4xxx, ISpiPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.DigiPots.Mcp4xxx](../Meadow.Foundation.ICs.DigiPots/Mcp4xxx)

**Derived:**  
[Meadow.Foundation.ICs.DigiPots.Mcp4132](../Meadow.Foundation.ICs.DigiPots/Mcp4132), [Meadow.Foundation.ICs.DigiPots.Mcp4142](../Meadow.Foundation.ICs.DigiPots/Mcp4142), [Meadow.Foundation.ICs.DigiPots.Mcp4152](../Meadow.Foundation.ICs.DigiPots/Mcp4152), [Meadow.Foundation.ICs.DigiPots.Mcp4162](../Meadow.Foundation.ICs.DigiPots/Mcp4162), [Meadow.Foundation.ICs.DigiPots.Mcp4232](../Meadow.Foundation.ICs.DigiPots/Mcp4232), [Meadow.Foundation.ICs.DigiPots.Mcp4242](../Meadow.Foundation.ICs.DigiPots/Mcp4242), [Meadow.Foundation.ICs.DigiPots.Mcp4252](../Meadow.Foundation.ICs.DigiPots/Mcp4252), [Meadow.Foundation.ICs.DigiPots.Mcp4262](../Meadow.Foundation.ICs.DigiPots/Mcp4262)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`

## Properties
### Rheostats
Gets the array of rheostats connected to this Mcp4xx2 device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xx2.cs#L14)
```csharp title="Declaration"
public IRheostat[] Rheostats { get; }
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
