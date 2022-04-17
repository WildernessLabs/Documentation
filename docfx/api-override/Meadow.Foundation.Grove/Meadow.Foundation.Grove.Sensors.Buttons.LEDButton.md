---
uid: Meadow.Foundation.Grove.Sensors.Buttons.LEDButton
remarks: *content
---

| LEDButton | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LEDButton) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Buttons.LEDButton/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Buttons.LEDButton.svg?label=Meadow.Foundation.Grove.Sensors.Buttons.LEDButton" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var button = new LEDButton(Device, Device.Pins.D12, Device.Pins.D13);

    button.LongClickedThreshold = TimeSpan.FromMilliseconds(1500);

    button.Clicked += (s, e) =>
    {
        Console.WriteLine("Grove Button clicked");
        button.IsLedOn = !button.IsLedOn;
    };

    button.LongClicked += (s, e) =>
    {
        Console.WriteLine("Grove Button long clicked");
    };
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LEDButton)

### Wiring Example

| LEDButton | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |


















