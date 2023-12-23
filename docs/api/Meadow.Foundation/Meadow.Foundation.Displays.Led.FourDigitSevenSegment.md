---
uid: Meadow.Foundation.Displays.Led.FourDigitSevenSegment

---

| FourDigitSevenSegment | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourDigitSevenSegment) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Led.FourDigitSevenSegment/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Led.FourDigitSevenSegment.svg?label=Meadow.Foundation.Displays.Led.FourDigitSevenSegment" alt="NuGet Gallery for Meadow.Foundation.Displays.Led.FourDigitSevenSegment" /></a> |

### Code Example

```csharp
FourDigitSevenSegment sevenSegment;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sevenSegment = new FourDigitSevenSegment
    (
        portDigit1: Device.CreateDigitalOutputPort(Device.Pins.D00),
        portDigit2: Device.CreateDigitalOutputPort(Device.Pins.D03),
        portDigit3: Device.CreateDigitalOutputPort(Device.Pins.D04),
        portDigit4: Device.CreateDigitalOutputPort(Device.Pins.D06),
        portA: Device.CreateDigitalOutputPort(Device.Pins.D01),
        portB: Device.CreateDigitalOutputPort(Device.Pins.D05),
        portC: Device.CreateDigitalOutputPort(Device.Pins.D08),
        portD: Device.CreateDigitalOutputPort(Device.Pins.D10),
        portE: Device.CreateDigitalOutputPort(Device.Pins.D11),
        portF: Device.CreateDigitalOutputPort(Device.Pins.D02),
        portG: Device.CreateDigitalOutputPort(Device.Pins.D07),
        portDecimal: Device.CreateDigitalOutputPort(Device.Pins.D09),
        isCommonCathode: true
    );

    return base.Initialize();
}

public override Task Run()
{
    sevenSegment.SetDisplay("1234");

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourDigitSevenSegment/Samples/FourDigitSevenSegment_Sample)

### Wiring Example

To wire a Common Cathode Seven Segment Display (like the 5161AS) to your Meadow board, connect the following:

| SevenSegment   | Meadow Pin |
|----------------|------------|
| portE          | D11        |
| portD          | D10        |
| PortDecimal    | D09        |
| PortC          | D08        |
| PortG          | D07        |
| PortD4         | D06        |
| PortB          | D05        |
| PortD3         | D04        |
| PortD2         | D03        |
| PortF          | D02        |
| PortA          | D01        |
| PortD1         | D00        |

It should look like the following diagram:

### Wiring Example

![Wiring a SevenSegment to a Meadow F7](../../API_Assets/Meadow.Foundation.Displays.Led.FourDigitSevenSegment/FourDigitSevenSegment_Fritzing.png)
