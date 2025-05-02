---
title: Class Potentiometer
sidebar_label: Potentiometer
description: >-
  Represents a potentiometer - a variable resistor that can be measured through
  an analog input. Implements both IPotentiometer and IDisposable interfaces.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/Potentiometer
---
# Class Potentiometer
Represents a potentiometer - a variable resistor that can be measured through an analog input.
Implements both IPotentiometer and IDisposable interfaces.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Potentiometer/Potentiometer.cs#L11)
```csharp title="Declaration"
public class Potentiometer : IPotentiometer, IRheostat, IDisposable
```
**Implements:**  
`Meadow.Hardware.IPotentiometer`, `Meadow.Hardware.IRheostat`, `System.IDisposable`

## Properties
### IsDisposed
Gets whether this instance has been disposed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Potentiometer/Potentiometer.cs#L22)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### MaxResistance
Gets the maximum resistance value of the potentiometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Potentiometer/Potentiometer.cs#L27)
```csharp title="Declaration"
public Resistance MaxResistance { get; }
```
### Resistance
Gets the current resistance value of the potentiometer by reading the analog input.
Setting the resistance throws NotSupportedException as potentiometer value can only be changed mechanically.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Potentiometer/Potentiometer.cs#L109)
```csharp title="Declaration"
public Resistance Resistance { get; set; }
```
## Methods
### Dispose(bool)
Releases the unmanaged resources used by the Potentiometer and optionally releases the managed resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Potentiometer/Potentiometer.cs#L126)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | True to release both managed and unmanaged resources; false to release only unmanaged resources. |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Potentiometer/Potentiometer.cs#L141)
```csharp title="Declaration"
public void Dispose()
```
## Events
### Changed
Raised when a change is detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Potentiometer/Potentiometer.cs#L68)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Resistance>>? Changed
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Resistance>>`

## Implements

* `Meadow.Hardware.IPotentiometer`
* `Meadow.Hardware.IRheostat`
* `System.IDisposable`
