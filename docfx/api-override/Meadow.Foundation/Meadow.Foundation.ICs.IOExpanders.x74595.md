---
uid: Meadow.Foundation.ICs.IOExpanders.x74595
remarks: *content
---

Shift registers offer the ability to increase the number of outputs on a microcontroller by using I2C or SPI interfaces. In the case of the 74xx595 series of shift registers, the SPI interface is used to output a series of bits that are then latched to the output pins of the chip.

This class allows Meadow to control the output pins on a 74HCT595 shift register using the SPI interface.

Note that when using this chip care should be taken to make sure that the total output load of the chip does not exceed the current and thermal dissipation properties for the specific shift register being used.

The application below uses a ShiftRegister74595 object to cycle through the bits on the shift register and light the appropriate LED.

```csharp
```

### Example Wiring

![](../../API_Assets/Meadow.Foundation.ICs.IOExpanders.x74595/x74595.svg)