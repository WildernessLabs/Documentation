---
layout: Netduino
title: Analog I/O
---

Analog ports can operate at a range of voltages between 0 and 3.3V, which is especially useful when reading analog sensors that supply their data as a voltage reading, rather than a digital signal which is represented as binary on or off.

Analog signals are written or read with a 10-bit resolution, which means that they can have value of 0 to 1023.

While the Analog IO is meant for up to 3.3V, the ports are actually 5V tolerant, meaning that they can take up to 5v of input without burning out the port. However, any voltage above 3.3V will simply read as the max value (1023). In order to use 5V peripherals, a special resistor circuit known as a [Voltage Divider](https://learn.sparkfun.com/tutorials/voltage-dividers) should be used. Voltage divider circuits are very simple to make with two resistors.

### Reading Analog Input

The [Potentiometer Controlled RGB LED sample](/Samples/Netduino/PotentiometerControlled_RgbLed/) illustrates how to use an analog input to read the value of a potentiometer.

The salient code is as follows; first, an [`AnalogInput`](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.analoginput(v=vs.102).aspx) port is created with the appropriate pin:

```
var pot = new SecretLabs.NETMF.Hardware.AnalogInput(Pins.GPIO_PIN_A1);
```

The input port value can be automatically transformed to return a value within a particular range. In the case of the sample, the analog input will represent a degree of Hue, so the range is set to 0 to 360:

```
pot.SetRange(0, 360);
```

The port value is then accessed via the `Read` method:

```
hue = pot.Read();
```


## See Also

 * [`AnalogInputPort` API Reference](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.analoginput(v=vs.102).aspx)
