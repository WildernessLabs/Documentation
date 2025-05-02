---
title: Class SerialPortName
sidebar_label: SerialPortName
description: >-
  Represents the name of a serial port, which consists of both a "friendly" and
  a system name
slug: /docs/api/Meadow/Meadow.Hardware/SerialPortName
---
# Class SerialPortName
Represents the name of a serial port, which consists of both a "friendly" and a system name

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialPortName.cs#L6)
```csharp title="Declaration"
public class SerialPortName
```
## Properties
### SerialController
Gets or sets the serial controller associated with this serial port name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialPortName.cs#L11)
```csharp title="Declaration"
public ISerialController? SerialController { get; }
```
### SerialMessageController
Gets or sets the serial message controller associated with this serial port name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialPortName.cs#L16)
```csharp title="Declaration"
public ISerialMessageController? SerialMessageController { get; }
```
### FriendlyName
The common name used for the port in documentation
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialPortName.cs#L21)
```csharp title="Declaration"
public string FriendlyName { get; set; }
```
### SystemName
The assigned driver name for the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialPortName.cs#L25)
```csharp title="Declaration"
public string SystemName { get; set; }
```
## Methods
### Create(string, object)
Creates a SerialPortName with the given SystemName
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialPortName.cs#L32)
```csharp title="Declaration"
public static SerialPortName Create(string systemName, object controller)
```

##### Returns

[Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *systemName* | The port's system name |
| `System.Object` | *controller* | The port's hardware controller |

## Extension Methods
* Meadow.Hardware.SerialPortName.Meadow.SerialPortNameExtensions.CreateSerialMessagePort(System.Byte[],System.Boolean,System.Int32,System.Int32,Meadow.Hardware.Parity,Meadow.Hardware.StopBits,System.Int32)
* Meadow.Hardware.SerialPortName.Meadow.SerialPortNameExtensions.CreateSerialMessagePort(System.Byte[],System.Boolean,System.Int32,System.Int32,System.Int32,Meadow.Hardware.Parity,Meadow.Hardware.StopBits,System.Int32)
* Meadow.Hardware.SerialPortName.Meadow.SerialPortNameExtensions.CreateSerialPort(System.Int32,System.Int32,Meadow.Hardware.Parity,Meadow.Hardware.StopBits,System.Int32)
