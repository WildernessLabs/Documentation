---
uid: Meadow.Foundation.Motors.ElectronicSpeedController
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Motors.ElectronicSpeedController
---

| ElectronicSpeedController | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Motors.ElectronicSpeedController/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Motors.ElectronicSpeedController.svg?label=Meadow.Foundation.Motors.ElectronicSpeedController" alt="NuGet Gallery for Meadow.Foundation.Motors.ElectronicSpeedController" /></a> |

```csharp
float frequency = 50f;
const float armMs = 0.5f;
const float powerIncrement = 0.05f;

ElectronicSpeedController esc;
RotaryEncoderWithButton rotary;

public MeadowApp()
{
    Initialize();
    DisplayPowerOnLed(esc.Power);
}

void Initialize()
{
    Console.WriteLine("Initialize hardware...");

    //==== rotary encoder
    rotary = new RotaryEncoderWithButton(Device, Device.Pins.D07, Device.Pins.D08, Device.Pins.D06);
    rotary.Rotated += Rotary_Rotated;
    rotary.Clicked += (s, e) => {
        Console.WriteLine($"Arming the device.");
        _ = esc.Arm();
    }; ;

    //==== Electronic Speed Controller
    esc = new ElectronicSpeedController(Device, Device.Pins.D02, frequency);

    Console.WriteLine("Hardware initialized.");
}

private void Rotary_Rotated(object sender, Meadow.Peripherals.Sensors.Rotary.RotaryChangeResult e)
{
    esc.Power += (e.Direction == RotationDirection.Clockwise) ? powerIncrement : -powerIncrement;
    DisplayPowerOnLed(esc.Power);

    Console.WriteLine($"New Power: {esc.Power * (float)100:n0}%");
}

/// <summary>
/// Displays the ESC power on the onboard LED as full red @ `100%`,
/// blue @ `0%`, and a proportional mix, in between those speeds.
/// </summary>
/// <param name="power"></param>
void DisplayPowerOnLed(float power)
{
    // `0.0` - `1.0`
    int r = (int)Map(power, 0f, 1f, 0f, 255f);
    int b = (int)Map(power, 0f, 1f, 255f, 0f);

    var color = Color.FromRgb(r, 0, b);
}

float Map(float value, float fromSource, float toSource, float fromTarget, float toTarget)
{
    return (value - fromSource) / (toSource - fromSource) * (toTarget - fromTarget) + fromTarget;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Samples/Motors.ElectronicSpeedController_Sample)

|
### Code Example

```csharp
private readonly Frequency frequency = new Frequency(50, Frequency.UnitType.Hertz);
private const float armMs = 0.5f;
private const float powerIncrement = 0.05f;
private ElectronicSpeedController esc;
private RotaryEncoderWithButton rotary;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    rotary = new RotaryEncoderWithButton(Device.Pins.D07, Device.Pins.D08, Device.Pins.D06);
    rotary.Rotated += RotaryRotated;
    rotary.Clicked += (s, e) =>
    {
        Resolver.Log.Info($"Arming the device.");
        esc.Arm();
    }; ;

    esc = new ElectronicSpeedController(Device.Pins.D02, frequency);

    Resolver.Log.Info("Hardware initialized.");

    return base.Initialize();
}

private void RotaryRotated(object sender, RotaryChangeResult e)
{
    esc.Power += (e.New == RotationDirection.Clockwise) ? powerIncrement : -powerIncrement;
    DisplayPowerOnLed(esc.Power);

    Resolver.Log.Info($"New Power: {esc.Power * 100:n0}%");
}

/// <summary>
/// Displays the ESC power on the onboard LED as full red @ `100%`,
/// blue @ `0%`, and a proportional mix, in between those speeds.
/// </summary>
/// <param name="power"></param>
private void DisplayPowerOnLed(float power)
{
    // `0.0` - `1.0`
    int r = (int)power.Map(0f, 1f, 0f, 255f);
    int b = (int)power.Map(0f, 1f, 255f, 0f);

    var color = Color.FromRgb(r, 0, b);
}

public override Task Run()
{
    DisplayPowerOnLed(esc.Power);

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Samples/ElectronicSpeedController_Sample)

