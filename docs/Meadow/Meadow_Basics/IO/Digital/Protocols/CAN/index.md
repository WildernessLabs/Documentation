---
layout: Meadow
title: CAN
subtitle: Introduction to the Controller Area Network (CAN) protocol.
---

[CAN (controller area network)](https://en.m.wikipedia.org/wiki/CAN_bus) is a differential-pair, serial communication protocol used widely in automotive and telematics applications.

## Supported Controllers

Using a physical CAN bus requires both a controller and a transceiver. The controller provides the higher-level translation of information, in "frames" from the application to the transceiver. The transceiver converts that information into physical signals to and from the CAN-L and CAN-H bus wires.

The Meadow.Foundation library provides API implementations for controllers. Currently, two controllers are supported:

- Microchip's MCP2515 over SPI (for microcontrollers)
- Peak Systems PCAN over USB (for Windows desktops)

These are supported through implementations of the `ICanController` interface. An application uses an implementation of the `ICanController` to retrieve an instance of an `ICanBus` interface by calling `ICanController.CreateCanBus()`.

For example, the following code can be used to retrieve a 250kbps bus instance using an MCP2515:

```csharp
var interrupt = Device.Pins.D04.CreateDigitalInterruptPort(InterruptMode.EdgeFalling);
var cs = Device.Pins.D05.CreateDigitalOutputPort(true);

var mcp = new Mcp2515(
    Hardware.MikroBus.SpiBus,
    cs,
    Mcp2515.CanOscillator.Osc_8MHz,
    interrupt,
    Resolver.Log);

var bus = mcp.CreateCanBus(CanBitrate.Can_250kbps);
```

## Receiving data

The Meadow API uses the ICanFrame as the data transport for packetizing CAN data. Frames can be polled from the bus or, preferably, using an interrupt-triggered event.

Currently the API supports standard data frames, extended data frames, and retransmit request data frames. The following code demonstrates how to handle frame receive events for all three:

```csharp
CanBus.FrameReceived += OnFrameReceived;

private void OnFrameReceived(object? sender, ICanFrame frame)
{
    if (frame is DataFrame df)
    {
        if (df is RemoteTransferRequestFrame rtr)
        {
            Resolver.Log.Info($"RTR: 0x{df.ID:X2}  {BitConverter.ToString(rtr.Payload)}");
        }
        else if (df is StandardDataFrame sdf)
        {
            Resolver.Log.Info($"SDF: 0x{df.ID:X2}  {BitConverter.ToString(sdf.Payload)}");
        }
        else if (df is ExtendedDataFrame edf)
        {
            Resolver.Log.Info($"EDF: 0x{df.ID:X2}  {BitConverter.ToString(edf.Payload)}");
        }
    }
}
```

## Sending data

The Meadow API supports sending standard and extended data frames, as well as retransmit request frames.

The following is an example of how an application could send a standard data frame:

```csharp
var frame = new StandardDataFrame
{
    ID = e.ID,
    Payload = new byte[] { 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08 }
};

CanBus.WriteFrame(frame);
```
