---
uid: Meadow.Foundation.mikroBUS.Displays.C8800Retro
remarks: *content
---

| C8800Retro | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/C8800Retro) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.mikroBUS.Displays.C8800Retro/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.mikroBUS.Displays.C8800Retro.svg?label=Meadow.Foundation.mikroBUS.Displays.C8800Retro" alt="NuGet Gallery for Meadow.Foundation.mikroBUS.Displays.C8800Retro" /></a> |
### Code Example

```csharp
C8800Retro altair;

MicroGraphics graphics;

public override Task Initialize()
{
    Console.WriteLine("Initializing ...");

    altair = new C8800Retro(Device.CreateI2cBus(), Device.Pins.D03);

    var button1B = altair.GetButton(C8800Retro.ButtonColumn._1, C8800Retro.ButtonRow.B);
    button1B.Clicked += Button1B_Clicked;

    graphics = new MicroGraphics(altair)
    {
        CurrentFont = new Font4x8(),
    };

    return base.Initialize();
}

private void Button1B_Clicked(object sender, EventArgs e)
{
    Console.WriteLine("Button 1B clicked");
}

public override async Task Run()
{
    altair.EnableBlink(true, true);

    graphics.Clear();
    graphics.DrawText(0, 0, "MF", Color.White);
    graphics.Show();

    await Task.Delay(6000);

    altair.EnableBlink(false);
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/C8800Retro/Sample/C8800Retro_Sample)


