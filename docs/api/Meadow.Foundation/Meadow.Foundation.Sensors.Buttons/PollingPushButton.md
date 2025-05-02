---
title: Class PollingPushButton
sidebar_label: PollingPushButton
description: >-
  Represents a momentary push button with two states that uses polling to detect
  state change
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons/PollingPushButton
---
# Class PollingPushButton
Represents a momentary push button with two states that uses polling to detect state change

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PollingPushButton.cs#L11)
```csharp title="Declaration"
public class PollingPushButton : PushButtonBase, IButton, ISensor<bool>, ISensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Buttons.PushButtonBase](../Meadow.Foundation.Sensors.Buttons/PushButtonBase)

**Implements:**  
`Meadow.Peripherals.Sensors.Buttons.IButton`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`, `System.IDisposable`

## Properties
### ButtonPollingInterval
The button state polling interval for PushButton instances that are created
from a port that doesn't have an interrupt mode of EdgeBoth - otherwise ignored
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PollingPushButton.cs#L17)
```csharp title="Declaration"
public TimeSpan ButtonPollingInterval { get; set; }
```
## Fields
### ctsPolling
Cancellation token source to disable button polling on dispose
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PollingPushButton.cs#L22)
```csharp title="Declaration"
protected CancellationTokenSource? ctsPolling
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Buttons/PollingPushButton.cs#L67)
```csharp title="Declaration"
public override void Dispose()
```

## Implements

* `Meadow.Peripherals.Sensors.Buttons.IButton`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
* `System.IDisposable`
