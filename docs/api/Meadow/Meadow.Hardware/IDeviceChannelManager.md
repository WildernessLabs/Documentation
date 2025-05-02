---
title: Interface IDeviceChannelManager
sidebar_label: IDeviceChannelManager
description: Abstraction for managing device channels
slug: /docs/api/Meadow/Meadow.Hardware/IDeviceChannelManager
---
# Interface IDeviceChannelManager
Abstraction for managing device channels

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceChannelManager.cs#L9)
```csharp title="Declaration"
public interface IDeviceChannelManager
```
## Properties
### SystemReservedPins
Gets or sets a list of pins that are not usable by applications
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceChannelManager.cs#L14)
```csharp title="Declaration"
string[]? SystemReservedPins { get; set; }
```
## Methods
### ReservePin(IPin, ChannelConfigurationType)
Reserves an IPin at run-time for a specified configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceChannelManager.cs#L22)
```csharp title="Declaration"
Tuple<bool, string> ReservePin(IPin pin, ChannelConfigurationType configType)
```

##### Returns

`System.Tuple<System.Boolean,System.String>`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* |
| [Meadow.Hardware.ChannelConfigurationType](../Meadow.Hardware/ChannelConfigurationType) | *configType* |

### ReleasePin(IPin)
Releases a reservation on an IPin at run-time
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceChannelManager.cs#L29)
```csharp title="Declaration"
bool ReleasePin(IPin pin)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* |

### ReservePwm(IPin, IPwmChannelInfo, Frequency)
Reserves an IPin for PWM use
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceChannelManager.cs#L38)
```csharp title="Declaration"
Tuple<bool, string> ReservePwm(IPin pin, IPwmChannelInfo channelInfo, Frequency frequency)
```

##### Returns

`System.Tuple<System.Boolean,System.String>`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* |
| [Meadow.Hardware.IPwmChannelInfo](../Meadow.Hardware/IPwmChannelInfo) | *channelInfo* |
| [Meadow.Units.Frequency](../Meadow.Units/Frequency) | *frequency* |

### BeforeStartPwm(IPwmChannelInfo)
Method called before Meadow Core starts a PWM. This allows hardware-specific actions like channel reservation and setup.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceChannelManager.cs#L44)
```csharp title="Declaration"
void BeforeStartPwm(IPwmChannelInfo info)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPwmChannelInfo](../Meadow.Hardware/IPwmChannelInfo) | *info* |

### AfterStartPwm(IPwmChannelInfo, IMeadowIOController)
Method called after Meadow Core starts a PWM. This allows hardware-specific actions like channel reservation and setup.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IDeviceChannelManager.cs#L51)
```csharp title="Declaration"
void AfterStartPwm(IPwmChannelInfo info, IMeadowIOController ioController)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPwmChannelInfo](../Meadow.Hardware/IPwmChannelInfo) | *info* |
| [Meadow.Hardware.IMeadowIOController](../Meadow.Hardware/IMeadowIOController) | *ioController* |

