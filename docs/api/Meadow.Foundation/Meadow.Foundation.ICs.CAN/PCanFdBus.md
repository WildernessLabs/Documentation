---
title: Class PCanFdBus
sidebar_label: PCanFdBus
description: Represents a PCAN FD (Flexible Data Rate) CAN bus implementation.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.CAN/PCanFdBus
---
# Class PCanFdBus
Represents a PCAN FD (Flexible Data Rate) CAN bus implementation.

###### **Assembly**: Meadow.PCanBasic.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L11)
```csharp title="Declaration"
public class PCanFdBus : ICanBus
```
**Implements:**  
`Meadow.Hardware.ICanBus`

## Properties
### BitRate
Gets or sets the bitrate for the CAN bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L43)
```csharp title="Declaration"
public CanBitrate BitRate { get; set; }
```
### AcceptanceFilters
Gets the collection of acceptance filters for the CAN bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L56)
```csharp title="Declaration"
public CanAcceptanceFilterCollection AcceptanceFilters { get; }
```
## Methods
### ClearReceiveBuffers()
Clears all receive buffers on the CAN bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L62)
```csharp title="Declaration"
public void ClearReceiveBuffers()
```

##### Exceptions

`System.NotImplementedException`  
This method is not yet implemented.
### IsFrameAvailable()
Checks if a CAN frame is available in the receive buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L72)
```csharp title="Declaration"
public bool IsFrameAvailable()
```

##### Returns

`System.Boolean`: `true` if a frame is available; otherwise, `false`.
##### Exceptions

`System.NotImplementedException`  
This method is not yet implemented.
### ReadFrame()
Reads a CAN frame from the receive buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L82)
```csharp title="Declaration"
public ICanFrame? ReadFrame()
```

##### Returns

`Meadow.Hardware.ICanFrame`: The received `Meadow.Hardware.ICanFrame`, or `null` if no frame is available.
##### Exceptions

`System.NotImplementedException`  
This method is not yet implemented.
### SetFilter(int)
Sets a filter for incoming CAN frames.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L92)
```csharp title="Declaration"
public void SetFilter(int filter)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *filter* | The filter to apply. |


##### Exceptions

`System.NotImplementedException`  
This method is not yet implemented.
### SetMask(int)
Sets a mask for filtering incoming CAN frames.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L102)
```csharp title="Declaration"
public void SetMask(int filter)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *filter* | The mask to apply. |


##### Exceptions

`System.NotImplementedException`  
This method is not yet implemented.
### WriteFrame(ICanFrame)
Writes a CAN frame to the bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L112)
```csharp title="Declaration"
public void WriteFrame(ICanFrame frame)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.ICanFrame` | *frame* | The `Meadow.Hardware.ICanFrame` to write to the bus. |


##### Exceptions

`System.NotImplementedException`  
This method is not yet implemented.
## Events
### FrameReceived
Occurs when a CAN frame is received on the bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L19)
```csharp title="Declaration"
public event EventHandler<ICanFrame>? FrameReceived
```
##### Event Type
`System.EventHandler<Meadow.Hardware.ICanFrame>`
### BusError
Occurs when a bus error is detected.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanFdBus.cs#L27)
```csharp title="Declaration"
public event EventHandler<CanErrorInfo>? BusError
```
##### Event Type
`System.EventHandler<Meadow.Hardware.CanErrorInfo>`

## Implements

* `Meadow.Hardware.ICanBus`
