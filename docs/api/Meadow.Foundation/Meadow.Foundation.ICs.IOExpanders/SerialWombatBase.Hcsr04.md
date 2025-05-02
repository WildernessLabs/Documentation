---
title: Class SerialWombatBase.Hcsr04
sidebar_label: SerialWombatBase.Hcsr04
description: Represents a HCSR04 distance sensor connected to a Serial Wombat
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/SerialWombatBase.Hcsr04
---
# Class SerialWombatBase.Hcsr04
Represents a HCSR04 distance sensor connected to a Serial Wombat

###### **Assembly**: SerialWombat.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.Hcsr04.cs#L13)
```csharp title="Declaration"
public class SerialWombatBase.Hcsr04 : Hcsr04, IObservable<IChangeResult<Length>>, IRangeFinder, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.Sensors.Distance.Hcsr04](../Meadow.Foundation.Sensors.Distance/Hcsr04)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `Meadow.Peripherals.Sensors.Distance.IRangeFinder`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### DefaultReadPeriod
The default sensor read period
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.Hcsr04.cs#L18)
```csharp title="Declaration"
public static TimeSpan DefaultReadPeriod { get; }
```
## Methods
### MeasureDistance()
Start a distance measurement
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.Hcsr04.cs#L56)
```csharp title="Declaration"
public override void MeasureDistance()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.Hcsr04.cs#L76)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.Hcsr04.cs#L89)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`
* `Meadow.Peripherals.Sensors.Distance.IRangeFinder`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
