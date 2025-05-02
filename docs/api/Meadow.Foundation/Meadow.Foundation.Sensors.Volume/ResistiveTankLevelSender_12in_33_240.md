---
title: Class ResistiveTankLevelSender_12in_33_240
sidebar_label: ResistiveTankLevelSender_12in_33_240
description: >-
  Represents a resistive tank level sender for a 12-inch sender depth with a
  resistance range of 33 to 240 ohms.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Volume/ResistiveTankLevelSender_12in_33_240
---
# Class ResistiveTankLevelSender_12in_33_240
Represents a resistive tank level sender for a 12-inch sender depth with a resistance range of 33 to 240 ohms.

###### **Assembly**: ResistiveTankLevelSender.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender_12in_33_240.cs#L10)
```csharp title="Declaration"
public class ResistiveTankLevelSender_12in_33_240 : ResistiveTankLevelSender, IObservable<IChangeResult<int>>, ISamplingSensor<int>, ISensor<int>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.Sensors.Volume.ResistiveTankLevelSender](../Meadow.Foundation.Sensors.Volume/ResistiveTankLevelSender)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Int32>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Int32>`, `Meadow.Peripherals.Sensors.ISensor<System.Int32>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### ResistanceToFillLevelMap
Gets the mapping of resistance (in ohms) to fill level (in 0-100 percent).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender_12in_33_240.cs#L30)
```csharp title="Declaration"
protected override Dictionary<int, int> ResistanceToFillLevelMap { get; }
```

## Implements

* `System.IObservable<Meadow.IChangeResult<System.Int32>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Int32>`
* `Meadow.Peripherals.Sensors.ISensor<System.Int32>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
