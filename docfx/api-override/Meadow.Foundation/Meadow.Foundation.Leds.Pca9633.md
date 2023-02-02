---
uid: Meadow.Foundation.Leds.Pca9633
remarks: *content
---

| Pca9633 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Pca9633) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Pca9633/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Leds.Pca9633/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Leds.Pca9633.svg?label=Meadow.Foundation.Leds.Pca9633" alt="NuGet Gallery for Meadow.Foundation.Leds.Pca9633" /></a> |

### Code Example

```csharp
Pca9633 pca9633;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    pca9633 = new Pca9633(Device.CreateI2cBus());

    return base.Initialize();
}

public override Task Run()
{
    //set the location of R,G,B leds for color control
    pca9633.SetRgbLedPositions(redLed: Pca9633.LedPosition.Led2,
                              greenLed: Pca9633.LedPosition.Led1,
                              blueLed: Pca9633.LedPosition.Led0);

    //set a single color
    pca9633.SetColor(Color.Red);
    Thread.Sleep(1000);
    pca9633.SetColor(Color.Blue);
    Thread.Sleep(1000);
    pca9633.SetColor(Color.Yellow);

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Pca9633/Samples/Pca9633_Sample)

### Wiring Example

To wire a Pca9633 to your Meadow board, connect the following:

| Pca9633  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |
