---
uid: Meadow.Foundation.Grove.Sensors.Buttons.Button
remarks: *content
---

| Button | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Button) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Buttons.Button/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Buttons.Button.svg?label=Meadow.Foundation.Grove.Sensors.Buttons.Button" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var button = new Button(Device, Device.Pins.D13);
    button.LongClickedThreshold = TimeSpan.FromMilliseconds(1500);

    button.Clicked += (s, e) => Console.WriteLine("Grove Button clicked");

    button.LongClicked += (s, e) => Console.WriteLine("Grove Button long clicked");
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


















