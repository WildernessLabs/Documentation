---
uid: Meadow.Foundation.mikroBUS.Sensors.Buttons.CButton

---

| CButton | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/CButton) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.mikroBUS.Sensors.Buttons.CButton/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.mikroBUS.Sensors.Buttons.CButton.svg?label=Meadow.Foundation.mikroBUS.Sensors.Buttons.CButton" alt="NuGet Gallery for Meadow.Foundation.mikroBUS.Sensors.Buttons.CButton" /></a> |

### Code Example

```csharp
CButton ledButton;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    ledButton = new CButton(Device.Pins.D03, Device.Pins.D04);

    ledButton.StartPulse(TimeSpan.FromSeconds(2), 0.75f, 0);
    ledButton.Clicked += (s, e) =>
    {
        Console.WriteLine("Button clicked");
        ledButton.IsOn = !ledButton.IsOn;
    };
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/CButton/Sample/CButton_Sample)

