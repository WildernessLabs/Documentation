---
uid: Meadow.Foundation.Motors;.HBridgeMotor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Motors;.HBridgeMotor
---

| HBridgeMotor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Motors) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

### Code Example

```csharp
protected HBridgeMotor motor1;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    motor1 = new HBridgeMotor
    (
        a1Port: Device.CreatePwmPort(Device.Pins.D07, new Frequency(100, Frequency.UnitType.Hertz)),
        a2Port: Device.CreatePwmPort(Device.Pins.D08, new Frequency(100, Frequency.UnitType.Hertz)),
        enablePort: Device.CreateDigitalOutputPort(Device.Pins.D09)
    );

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("TestMotor...");

    while (true)
    {
        // Motor Forwards
        motor1.Power = 1f;
        await Task.Delay(1000);

        // Motor Stops
        motor1.Power = 0f;
        await Task.Delay(500);

        // Motor Backwards
        motor1.Power = -1f;
        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Motor.HBridgeMotor_Sample)

