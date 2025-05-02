---
title: Interface ICanBus
sidebar_label: ICanBus
description: Represents a Controller Area Network (CAN) bus interface.
slug: /docs/api/Meadow/Meadow.Hardware/ICanBus
---
# Interface ICanBus
Represents a Controller Area Network (CAN) bus interface.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/ICanBus.cs#L8)
```csharp title="Declaration"
public interface ICanBus
```
## Properties
### BitRate
Gets or sets the bus bit rate
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/ICanBus.cs#L23)
```csharp title="Declaration"
CanBitrate BitRate { get; set; }
```
### AcceptanceFilters
The collection of message acceptance filters for the bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/ICanBus.cs#L51)
```csharp title="Declaration"
CanAcceptanceFilterCollection AcceptanceFilters { get; }
```
## Methods
### WriteFrame(ICanFrame)
Writes a CAN frame to the specified buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/ICanBus.cs#L29)
```csharp title="Declaration"
void WriteFrame(ICanFrame frame)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.ICanFrame](../Meadow.Hardware/ICanFrame) | *frame* | The CAN frame to write. |

### IsFrameAvailable()
Checks if a CAN frame is available to read.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/ICanBus.cs#L35)
```csharp title="Declaration"
bool IsFrameAvailable()
```

##### Returns

`System.Boolean`: `true` if a frame is available; otherwise, `false`.### ReadFrame()
Reads a CAN frame.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/ICanBus.cs#L41)
```csharp title="Declaration"
ICanFrame? ReadFrame()
```

##### Returns

[Meadow.Hardware.ICanFrame](../Meadow.Hardware/ICanFrame): The CAN frame if available; otherwise, `null`.### ClearReceiveBuffers()
Clears any data currently in the bus receive buffers
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/ICanBus.cs#L46)
```csharp title="Declaration"
void ClearReceiveBuffers()
```
## Events
### FrameReceived
Raised when a CAN frame is received.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/ICanBus.cs#L13)
```csharp title="Declaration"
event EventHandler<ICanFrame>? FrameReceived
```
##### Event Type
`System.EventHandler<Meadow.Hardware.ICanFrame>`
### BusError
Raised when a bus error occurs
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/ICanBus.cs#L18)
```csharp title="Declaration"
event EventHandler<CanErrorInfo>? BusError
```
##### Event Type
`System.EventHandler<Meadow.Hardware.CanErrorInfo>`
