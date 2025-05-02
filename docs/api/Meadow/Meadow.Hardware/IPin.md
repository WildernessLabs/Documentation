---
title: Interface IPin
sidebar_label: IPin
description: Contract for a pin
slug: /docs/api/Meadow/Meadow.Hardware/IPin
---
# Interface IPin
Contract for a pin

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPin.cs#L9)
```csharp title="Declaration"
public interface IPin : IEquatable<IPin>
```
## Properties
### Controller
The IPinController associated with this IPin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPin.cs#L14)
```csharp title="Declaration"
IPinController? Controller { get; }
```
### SupportedChannels
Supported channels
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPin.cs#L19)
```csharp title="Declaration"
IList<IChannelInfo>? SupportedChannels { get; }
```
### Name
The name of the pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPin.cs#L24)
```csharp title="Declaration"
string Name { get; }
```
### Key
The key object for the pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPin.cs#L29)
```csharp title="Declaration"
object Key { get; }
```
## Methods
### ToString()
To string
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPin.cs#L35)
```csharp title="Declaration"
string ToString()
```

##### Returns

`System.String`: The pin name## Extension Methods
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreateAnalogInputPort(System.Int32)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreateAnalogInputPort(System.Int32,System.TimeSpan,Meadow.Units.Voltage)
* [Meadow.IPinExtensions.CreateAnalogOutputPort(Meadow.Hardware.IPin)](../Meadow/IPinExtensions#createanalogoutputportipin)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreateBiDirectionalPort(System.Boolean,Meadow.Hardware.InterruptMode,Meadow.Hardware.ResistorMode,Meadow.Hardware.PortDirectionType)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreateBiDirectionalPort(System.Boolean,Meadow.Hardware.InterruptMode,Meadow.Hardware.ResistorMode,Meadow.Hardware.PortDirectionType,System.TimeSpan,System.TimeSpan)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreateDigitalInputPort(Meadow.Hardware.ResistorMode)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreateDigitalInterruptPort(Meadow.Hardware.InterruptMode,Meadow.Hardware.ResistorMode)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreateDigitalInterruptPort(Meadow.Hardware.InterruptMode,Meadow.Hardware.ResistorMode,System.TimeSpan)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreateDigitalInterruptPort(Meadow.Hardware.InterruptMode,Meadow.Hardware.ResistorMode,System.TimeSpan,System.TimeSpan)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreateDigitalOutputPort(System.Boolean)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreateDigitalSignalAnalyzer(System.Boolean)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.CreatePwmPort(Meadow.Units.Frequency,System.Single,System.Boolean)
* Meadow.Hardware.IPin.Meadow.IPinExtensions.Supports``1
* Meadow.Hardware.IPin.Meadow.IPinExtensions.Supports``1(System.Func&#123;&#123;TChannel&#125;,System.Boolean&#125;)
