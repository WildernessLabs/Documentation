---
title: Class PCanBasic
sidebar_label: PCanBasic
description: Represents a PCAN Basic
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.CAN/PCanBasic
---
# Class PCanBasic
Represents a PCAN Basic

###### **Assembly**: Meadow.PCanBasic.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L9)
```csharp title="Declaration"
public class PCanBasic : ICanBus
```
**Implements:**  
`Meadow.Hardware.ICanBus`

## Properties
### AcceptanceFilters
The collection of message acceptance filters for the bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L17)
```csharp title="Declaration"
public CanAcceptanceFilterCollection AcceptanceFilters { get; }
```
### BitRate
Gets or sets the bus bit rate
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L60)
```csharp title="Declaration"
public CanBitrate BitRate { get; set; }
```
## Methods
### ClearReceiveBuffers()
Clears any data currently in the bus receive buffers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L81)
```csharp title="Declaration"
public void ClearReceiveBuffers()
```
### IsFrameAvailable()
Checks if a CAN frame is available to read.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L87)
```csharp title="Declaration"
public bool IsFrameAvailable()
```

##### Returns

`System.Boolean`: `true` if a frame is available; otherwise, `false`.### WriteFrame(ICanFrame)
Writes a CAN frame to the specified buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L127)
```csharp title="Declaration"
public void WriteFrame(ICanFrame frame)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.ICanFrame` | *frame* | The CAN frame to write. |

### ReadFrame()
Reads a CAN frame.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L144)
```csharp title="Declaration"
public ICanFrame? ReadFrame()
```

##### Returns

`Meadow.Hardware.ICanFrame`: The CAN frame if available; otherwise, `null`.### SetFilter(int)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L179)
```csharp title="Declaration"
public void SetFilter(int filter)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *filter* |

### SetMask(int)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L185)
```csharp title="Declaration"
public void SetMask(int filter)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *filter* |

## Events
### FrameReceived
Raised when a CAN frame is received.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L12)
```csharp title="Declaration"
public event EventHandler<ICanFrame>? FrameReceived
```
##### Event Type
`System.EventHandler<Meadow.Hardware.ICanFrame>`
### BusError
Raised when a bus error occurs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanBasic.cs#L14)
```csharp title="Declaration"
public event EventHandler<CanErrorInfo>? BusError
```
##### Event Type
`System.EventHandler<Meadow.Hardware.CanErrorInfo>`

## Implements

* `Meadow.Hardware.ICanBus`
