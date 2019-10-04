---
layout: Meadow
title: Meadow.Foundation Unified IO Architecture
subtitle: Extending Meadow IOs seamlessly with external IO expansion peripherals via the Unified IO pattern.
---

Meadow.Foundation incorporates an architecture that was designed to extend peripheral support seamlessly across expansion peripherals such as I2C/SPI/etc. I/O expansion chips. For example, you can connect an MCP23x or 74x595 I/O expansion chip to a Meadow, and then drive a `Relay` via one of the pins on the expansion chip, just as if it were connected directly to the Netduino!

This is possible through the use of IO interfaces and base classes that define IO port contracts and provide base level implementation.

For instance, the following code illustrates the use of a `Relay` connected to an `MCP23x`:

```csharp
// create our MCP23008
MCP23008 mcp = new MCP23008(39); // all address pins pulled high

// create a digital output port from that mcp
DigitalOutputPort relayPort = mcp.CreateOutputPort(1, false);

// create a new relay using that digital output port
Relay relay = new Relay(relayPort);

// toggle the relay
relay.Toggle();
```

In the example above, once the MCP23008 IO expander is initialized, ports can be created on it and used just like a port created directly on the Meadow device itself.

This enables a consistent way to use peripherals across IO expanders, enabling you to extend the IO on Meadow almost infinitely, and still use Meadow.Foundation drivers to interact and drive peripherals attached to them.