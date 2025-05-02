---
title: Interface IMeadowDesktopDevice
sidebar_label: IMeadowDesktopDevice
description: Contract for desktop-specific Meadow devices
slug: /docs/api/Meadow/Meadow/IMeadowDesktopDevice
---
# Interface IMeadowDesktopDevice
Contract for desktop-specific Meadow devices

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDesktopDevice.cs#L6)
```csharp title="Declaration"
public interface IMeadowDesktopDevice : IMeadowDevice, IDigitalInputOutputController, IDigitalInputController, IDigitalInterruptController, IBiDirectionalController, IObservableAnalogInputController, IAnalogInputArrayController, IAnalogInputController, IPwmOutputController, ISerialController, ISerialMessageController, ISpiController, IDigitalOutputController, II2cController, IWatchdogController, ICounterController, IPinController, INetworkAdapterController
```
## Properties
### DisplayWidth
Gets the desktop display width
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDesktopDevice.cs#L11)
```csharp title="Declaration"
int DisplayWidth { get; }
```
### DisplayHeight
Gets the desktop display height
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IMeadowDesktopDevice.cs#L15)
```csharp title="Declaration"
int DisplayHeight { get; }
```
