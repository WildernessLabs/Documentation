---
uid: Meadow.Foundation.Displays.Led.FourteenSegment
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.FourteenSegment
---

| FourteenSegment | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Led.FourteenSegment/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Led.FourteenSegment.svg?label=Meadow.Foundation.Displays.Led.FourteenSegment" alt="NuGet Gallery for Meadow.Foundation.Displays.Led.FourteenSegment" /></a> |

### Code Example

```csharp
FourteenSegment fourteenSegment;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    fourteenSegment = new FourteenSegment
    (
        portA: Device.CreateDigitalOutputPort(Device.Pins.D00),
        portB: Device.CreateDigitalOutputPort(Device.Pins.D01),
        portC: Device.CreateDigitalOutputPort(Device.Pins.D02),
        portD: Device.CreateDigitalOutputPort(Device.Pins.D03),
        portE: Device.CreateDigitalOutputPort(Device.Pins.D04),
        portF: Device.CreateDigitalOutputPort(Device.Pins.D05),
        portG: Device.CreateDigitalOutputPort(Device.Pins.D06),
        portG2: Device.CreateDigitalOutputPort(Device.Pins.D07),
        portH: Device.CreateDigitalOutputPort(Device.Pins.D08),
        portJ: Device.CreateDigitalOutputPort(Device.Pins.D09),
        portK: Device.CreateDigitalOutputPort(Device.Pins.D10),
        portL: Device.CreateDigitalOutputPort(Device.Pins.D11),
        portM: Device.CreateDigitalOutputPort(Device.Pins.D12),
        portN: Device.CreateDigitalOutputPort(Device.Pins.D13),
        portDecimal: Device.CreateDigitalOutputPort(Device.Pins.D14),
        isCommonCathode: false
    );

    return base.Initialize();
}

public override Task Run()
{
    fourteenSegment.SetDisplay(asciiCharacter: 'A', showDecimal: true);

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Samples/FourteenSegment_Sample)

