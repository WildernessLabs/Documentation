---
title: Class Pin
sidebar_label: Pin
description: Provides base implementation for IO pins.
slug: /docs/api/Meadow/Meadow.Hardware/Pin
---
# Class Pin
Provides base implementation for IO pins.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/Pin.cs#L8)
```csharp title="Declaration"
public class Pin : IPin, IEquatable<IPin>
```
**Implements:**  
[Meadow.Hardware.IPin](../Meadow.Hardware/IPin), `System.IEquatable<Meadow.Hardware.IPin>`

## Properties
### SupportedChannels
Gets a list of IChannelInfo the pin supports
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/Pin.cs#L13)
```csharp title="Declaration"
public IList<IChannelInfo>? SupportedChannels { get; protected set; }
```
### Controller
Gets the IPinController associated with the pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/Pin.cs#L18)
```csharp title="Declaration"
public IPinController? Controller { get; }
```
### Name
Gets the name of the pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/Pin.cs#L23)
```csharp title="Declaration"
public string Name { get; protected set; }
```
### Key
Identifier that the parent Device can use to identify the I/O (address, port, pin, etc)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/Pin.cs#L28)
```csharp title="Declaration"
public object Key { get; protected set; }
```
## Methods
### ToString()
Returns a string that represents the pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/Pin.cs#L49)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`
### Equals(IPin)
Indicates whether the specified object is equal to the current object
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/Pin.cs#L59)
```csharp title="Declaration"
public virtual bool Equals(IPin other)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *other* |

### Equals(object)
Indicates whether the specified object is equal to the current object
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/Pin.cs#L70)
```csharp title="Declaration"
public override bool Equals(object obj)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Object` | *obj* |

### GetHashCode()
Serves as the hash function for a pin object
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/Pin.cs#L83)
```csharp title="Declaration"
public override int GetHashCode()
```

##### Returns

`System.Int32`

## Implements

* [Meadow.Hardware.IPin](../Meadow.Hardware/IPin)
* `System.IEquatable<Meadow.Hardware.IPin>`
## Extension Methods
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
