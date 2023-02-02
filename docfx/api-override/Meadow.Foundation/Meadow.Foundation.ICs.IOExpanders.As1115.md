---
uid: Meadow.Foundation.ICs.IOExpanders.As1115
remarks: *content
---

| As1115 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.As1115/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.As1115.svg?label=Meadow.Foundation.ICs.IOExpanders.As1115" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.As1115" /></a> |

### Code Example

```csharp
As1115 as1115;
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    as1115 = new As1115(Device, Device.CreateI2cBus(), Device.Pins.D03);

    //general key scan events - will raise for all buttons
    as1115.KeyScanPressStarted += KeyScanPressStarted;

    //or access buttons as IButtons individually
    as1115.KeyScanButtons[KeyScanButtonType.Button1].LongClickedThreshold = TimeSpan.FromSeconds(1);
    as1115.KeyScanButtons[KeyScanButtonType.Button1].Clicked += Button1_Clicked;
    as1115.KeyScanButtons[KeyScanButtonType.Button1].LongClicked += Button1_LongClicked; ;

    graphics = new MicroGraphics(as1115);

    return base.Initialize();
}

private void Button1_LongClicked(object sender, EventArgs e)
{
    Resolver.Log.Info("Button 1 long press");
}

private void Button1_Clicked(object sender, EventArgs e)
{
    Resolver.Log.Info("Button 1 clicked");
}

private void KeyScanPressStarted(object sender, KeyScanEventArgs e)
{
    Resolver.Log.Info($"{e.Button} pressed");
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawLine(0, 0, 7, 7, true);
    graphics.DrawLine(0, 7, 7, 0, true);

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Samples/As1115_Sample)

### Wiring Example

To wire a Ads1115 to your Meadow board, connect the following:

| Ads1115  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |
