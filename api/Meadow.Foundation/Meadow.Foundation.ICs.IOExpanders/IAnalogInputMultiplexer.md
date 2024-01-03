---
title: Interface IAnalogInputMultiplexer
sidebar_label: IAnalogInputMultiplexer
description: "Analog input multiplexer abstraction"
---
# Interface IAnalogInputMultiplexer
Analog input multiplexer abstraction

###### **Assembly**: AnalogMux.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/IAnalogInputMultiplexer.cs#L9)
```csharp title="Declaration"
public interface IAnalogInputMultiplexer
```
## Properties
### EnablePort
The port connected to the Enable pin of the mux (otherwise must be tied low)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/IAnalogInputMultiplexer.cs#L14)
```csharp title="Declaration"
IDigitalOutputPort? EnablePort { get; }
```
### Signal
The analog input connected to the Mux output pin (Z)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/IAnalogInputMultiplexer.cs#L19)
```csharp title="Declaration"
IAnalogInputPort Signal { get; }
```
## Methods
### Disable()
Disables the multiplexer (if an enable port was provided)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/IAnalogInputMultiplexer.cs#L24)
```csharp title="Declaration"
void Disable()
```
### Enable()
Enables the multiplexer (if an enable port was provided)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/IAnalogInputMultiplexer.cs#L29)
```csharp title="Declaration"
void Enable()
```
### SetInputChannel(int)
Sets the channel input that will be routed to the mux Signal output
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/IAnalogInputMultiplexer.cs#L36)
```csharp title="Declaration"
void SetInputChannel(int channel)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *channel* |


##### Exceptions

`System.ArgumentOutOfRangeException`  

