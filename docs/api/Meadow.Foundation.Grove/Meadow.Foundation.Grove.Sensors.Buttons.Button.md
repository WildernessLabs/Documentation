---
uid: Meadow.Foundation.Grove.Sensors.Buttons.Button

---

| Button | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Button) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Buttons.Button/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Buttons.Button.svg?label=Meadow.Foundation.Grove.Sensors.Buttons.Button" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Buttons.Button" /></a> |

### Code Example

```csharp
Button button;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    button = new Button(Device.Pins.D13)
    {
        LongClickedThreshold = TimeSpan.FromMilliseconds(1500)
    };

    button.Clicked += (s, e) => Resolver.Log.Info("Grove Button clicked");

    button.LongClicked += (s, e) => Resolver.Log.Info("Grove Button long clicked");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Button/Sample/Button_Sample)

### Wiring Example

| Button | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
