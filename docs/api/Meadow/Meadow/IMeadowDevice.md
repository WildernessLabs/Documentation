---
title: Interface IMeadowDevice
sidebar_label: IMeadowDevice
description: Contract for Meadow boards.
slug: /docs/api/Meadow/Meadow/IMeadowDevice
---
# Interface IMeadowDevice
Contract for Meadow boards.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDevice.cs#L8)
```csharp title="Declaration"
public interface IMeadowDevice : IDigitalInputOutputController, IDigitalInputController, IDigitalInterruptController, IBiDirectionalController, IObservableAnalogInputController, IAnalogInputArrayController, IAnalogInputController, IPwmOutputController, ISerialController, ISerialMessageController, ISpiController, IDigitalOutputController, II2cController, IWatchdogController, ICounterController, IPinController, INetworkAdapterController
```
## Properties
### PlatformOS
Retrieves OS-Specific implementations for the IMeadowDevice
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDevice.cs#L32)
```csharp title="Declaration"
IPlatformOS PlatformOS { get; }
```
### Information
Retrieves the IDeviceInformation for the current IMeadowDevice
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDevice.cs#L37)
```csharp title="Declaration"
IDeviceInformation Information { get; }
```
### Capabilities
Gets the device capabilities.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDevice.cs#L42)
```csharp title="Declaration"
DeviceCapabilities Capabilities { get; }
```
### ReliabilityService
Gets a device-specific instance if an IReliabilityService interface
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDevice.cs#L59)
```csharp title="Declaration"
IReliabilityService? ReliabilityService { get; }
```
## Methods
### GetPin(string)
Retrieves an IPin from the device by string
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDevice.cs#L27)
```csharp title="Declaration"
IPin GetPin(string name)
```

##### Returns

[Meadow.Hardware.IPin](../Meadow.Hardware/IPin)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *name* | Either the string Name or Key or the IPin |

### Initialize(MeadowPlatform)
Method called by the Core stack to initialize the IMeadowDevice
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDevice.cs#L48)
```csharp title="Declaration"
void Initialize(MeadowPlatform detectedPlatform)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.MeadowPlatform](../Meadow.Hardware/MeadowPlatform) | *detectedPlatform* | The MeadowPlatform that core detected the application is running on |

### GetBatteryInfo()
Retrieves battery info about the current IMeadowDevice
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDevice.cs#L54)
```csharp title="Declaration"
BatteryInfo? GetBatteryInfo()
```

##### Returns

[Meadow.Hardware.BatteryInfo](../Meadow.Hardware/BatteryInfo)
