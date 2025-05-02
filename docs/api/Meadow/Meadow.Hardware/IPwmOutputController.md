---
title: Interface IPwmOutputController
sidebar_label: IPwmOutputController
description: Contract for devices that expose `IPwmPort(s)`.
slug: /docs/api/Meadow/Meadow.Hardware/IPwmOutputController
---
# Interface IPwmOutputController
Contract for devices that expose `IPwmPort(s)`.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IPwmOutputController.cs#L8)
```csharp title="Declaration"
public interface IPwmOutputController : IPinController
```
## Fields
### DefaultPwmFrequency
The default PWM frequency.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IPwmOutputController.cs#L13)
```csharp title="Declaration"
public const float DefaultPwmFrequency = 100
```
### DefaultPwmDutyCycle
The default PWM duty cycle.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IPwmOutputController.cs#L18)
```csharp title="Declaration"
public const float DefaultPwmDutyCycle = 0.5
```
## Methods
### CreatePwmPort(IPin, Frequency, float, bool)
Creates an IPwmPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IPwmOutputController.cs#L28)
```csharp title="Declaration"
IPwmPort CreatePwmPort(IPin pin, Frequency frequency, float dutyCycle = 0.5, bool invert = false)
```

##### Returns

[Meadow.Hardware.IPwmPort](../Meadow.Hardware/IPwmPort): The created PWM port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the PWM port. |
| [Meadow.Units.Frequency](../Meadow.Units/Frequency) | *frequency* | The desired frequency of the PWM signal. |
| `System.Single` | *dutyCycle* | The desired duty cycle of the PWM signal. Defaults to [Meadow.Hardware.IPwmOutputController.DefaultPwmDutyCycle](../Meadow.Hardware/IPwmOutputController#defaultpwmdutycycle). |
| `System.Boolean` | *invert* | Specifies whether the PWM signal should be inverted. Defaults to false. |

