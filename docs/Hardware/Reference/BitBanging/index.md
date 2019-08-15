---
layout: Hardware
title: BitBanging
---

BitBanging is a technique for controlling the output pins of a microcontroller.  This may be necessary for several reasons:

* New device is available and no firmware driver is available yet
* Specific timing requirements are required
* Precise control over the sequence of events is necessary
* Unsupported protocol (for example the communication protocol for the [DHT22](https://www.adafruit.com/product/385) temperature and humidity sensor)
* All of the serial peripherals are in use for other purposes

The guide on using the [74595 shift register](/Hardware/Reference/Components/ShiftRegister74595/) contains some simple BitBanging code:

```csharp
private static void BitBang(OutputPort data, OutputPort clock, byte value)
{
    for (byte mask = 0x80; mask > 0; mask >>= 1)
    {
        data.Write((value & mask) != 0);
        clock.Write(true);
        clock.Write(false);
    }
}

public static void Main()
{
    OutputPort dataPin = new OutputPort(Pins.GPIO_PIN_D11, false);
    OutputPort clockPin = new OutputPort(Pins.GPIO_PIN_D13, false);
    OutputPort latchPin = new OutputPort(Pins.GPIO_PIN_D7, false);

    for (byte index = 0; index <= 255; index++)
    {
        BitBang(dataPin, clockPin, index);
        latchPin.Write(true);
        latchPin.Write(false);
        Thread.Sleep(200);
    }
}
```

The steps necessary to create the above code will be used as a guide to how other protocols can be implemented.

## 74595 Example

The first step in BitBanging a protocol is to extract the protocol characteristics from the device data sheet.  In the case of the 74595 the pertinent points are:

* The clock signal is used to let the 74595 know when data is ready
* Data for each bit should be available on the data pin on the rising edge of the clock
* Data is transferred Most Significant Bit (MSB) first.
* A latch pin transfers the data from the shift register to the output on the positive edge of the clock

The application code can then be constructed from the above points.

### Data Pins

Using the above characteristics we can deduce that the 74595 requires three pins:

* Data
* Clock
* Latch

In C# this becomes:

```csharp
OutputPort dataPin = new OutputPort(Pins.GPIO_PIN_D11, false);
OutputPort clockPin = new OutputPort(Pins.GPIO_PIN_D13, false);
OutputPort latchPin = new OutputPort(Pins.GPIO_PIN_D7, false);
```

Note that all three signals are set low when the pin objects are created.

### Bit Order

It was noted that the bits should be transmitted MSB first.  This can be implemented using a mask to define the bit order:

```csharp
for (byte mask = 0x80; mask > 0; mask >>= 1)
{
    // Set data bits here.
}
```
The `mask` is moving from 0x80 down to 0x01 one bit at a time.

### Clock and Data Signals

The data sheet specified that the data should be available on the rising edge of the clock.  So the data pin should be set before the clock signal is generated:

```csharp
for (byte mask = 0x80; mask > 0; mask >>= 1)
{
    data.Write((value & mask) != 0);
    clock.Write(true);
    clock.Write(false);
}
```

### Latching the Data

A full 8 bits of data are sent to the 74595 and then transferred to the output pins by toggling the latch pin on the register:

```csharp
BitBang(dataPin, clockPin, index);
latchPin.Write(true);
latchPin.Write(false);
```

## Summary

The following key points should be taken into consideration when using BitBanging:

* Use the data sheet for the component to obtain the key points about the communication protocol
* Consider using an existing peripheral if possible, if not then BitBanging maybe the only choice
* Not all devices use the same order for transmitting the bits in a word
* Make note of any specific timing requirements.  It may not be possible to meet these in NETMF.
