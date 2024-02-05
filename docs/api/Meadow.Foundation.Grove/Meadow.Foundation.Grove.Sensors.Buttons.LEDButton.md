---
uid: Meadow.Foundation.Grove.Sensors.Buttons.LEDButton
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Buttons.LEDButton
---

| LEDButton | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LEDButton) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Buttons.LEDButton/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Buttons.LEDButton.svg?label=Meadow.Foundation.Grove.Sensors.Buttons.LEDButton" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Buttons.LEDButton" /></a> |

### Code Example

```csharp
LEDButton ledButton;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    ledButton = new LEDButton(buttonPin: Device.Pins.D12, ledPin: Device.Pins.D13);

    ledButton.LongClickedThreshold = TimeSpan.FromMilliseconds(1500);

    ledButton.Clicked += (s, e) =>
    {
        Resolver.Log.Info("Grove Button clicked");
        ledButton.IsLedOn = !ledButton.IsLedOn;
    };

    ledButton.LongClicked += (s, e) =>
    {
        Resolver.Log.Info("Grove Button long clicked");
    };

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LEDButton/Sample/LEDButton_Sample)

### Wiring Example

| LEDButton | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
