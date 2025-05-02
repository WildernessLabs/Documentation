---
title: Interface IPowerController
sidebar_label: IPowerController
description: Interface for controlling power-related functionality of the device.
slug: /docs/api/Meadow/Meadow/IPowerController
---
# Interface IPowerController
Interface for controlling power-related functionality of the device.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IPowerController.cs#L14)
```csharp title="Declaration"
public interface IPowerController
```
## Methods
### Reset()
Resets the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IPowerController.cs#L34)
```csharp title="Declaration"
void Reset()
```
### Sleep(TimeSpan)
Puts the device into low-power (sleep) mode for the specified amount of time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IPowerController.cs#L40)
```csharp title="Declaration"
void Sleep(TimeSpan duration)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *duration* | The amount of time to sleep. |

### Sleep(DateTime)
Puts the device into low-power (sleep) mode until the specified time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IPowerController.cs#L46)
```csharp title="Declaration"
void Sleep(DateTime wakeTime)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.DateTime` | *wakeTime* | The UTC time to wake. |

### Sleep(IPin, InterruptMode, ResistorMode)
Puts the device into low-power (sleep) mode until an interrupt occurs
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IPowerController.cs#L62)
```csharp title="Declaration"
void Sleep(IPin interruptPin, InterruptMode interruptMode, ResistorMode resistorMode = ResistorMode.Disabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *interruptPin* | The IPin to monitor for the wake interrupt. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | The interrupt mode used for wake |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode used for wake |

### RegisterForSleep(ISleepAwarePeripheral)
Registers a peripheral to be aware of sleep mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IPowerController.cs#L68)
```csharp title="Declaration"
void RegisterForSleep(ISleepAwarePeripheral peripheral)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.ISleepAwarePeripheral](../Meadow/ISleepAwarePeripheral) | *peripheral* | The peripheral to register. |

## Events
### BeforeReset
Event called before a software reset.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IPowerController.cs#L19)
```csharp title="Declaration"
event PowerTransitionHandler BeforeReset
```
##### Event Type
[Meadow.PowerTransitionHandler](../Meadow/PowerTransitionHandler)
### BeforeSleep
Event called before entering sleep mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IPowerController.cs#L24)
```csharp title="Declaration"
event PowerTransitionHandler BeforeSleep
```
##### Event Type
[Meadow.PowerTransitionHandler](../Meadow/PowerTransitionHandler)
### AfterWake
Event called after waking from sleep mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IPowerController.cs#L29)
```csharp title="Declaration"
event EventHandler<WakeSource> AfterWake
```
##### Event Type
`System.EventHandler<Meadow.Hardware.WakeSource>`
