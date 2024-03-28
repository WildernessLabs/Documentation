---
uid: Meadow.Foundation.Displays.WinForms
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.WinForms
---

| WinForms | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.WinForms) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.WinForms/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.WinForms.svg?label=Meadow.Foundation.Displays.WinForms" alt="NuGet Gallery for Meadow.Foundation.Displays.WinForms" /></a> |
### Code Example

```csharp
public class MeadowApp : App<Meadow.Windows>
{
    WinFormsDisplay? display;
    MicroGraphics graphics = default!;

    public override Task Initialize()
    {
        display = new WinFormsDisplay(320, 240, displayScale: 1.5f);

        graphics = new MicroGraphics(display)
        {
            CurrentFont = new Font12x20(),
            Stroke = 1
        };

        _ = Task.Run(() =>
        {
            graphics.Clear();

            graphics.DrawTriangle(10, 30, 50, 50, 10, 50, Color.Red);
            graphics.DrawRectangle(20, 45, 40, 20, Color.Yellow, false);
            graphics.DrawCircle(50, 50, 40, Color.Blue, false);
            graphics.DrawText(5, 5, "Meadow on WinForms", Color.White);

            graphics.Show();
        });

        return Task.CompletedTask;
    }

    public override Task Run()
    {
        Application.Run(display!);

        return Task.CompletedTask;
    }

    public static async Task Main(string[] args)
    {
        Application.EnableVisualStyles();
        Application.SetCompatibleTextRenderingDefault(false);
        ApplicationConfiguration.Initialize();

        await MeadowOS.Start(args);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.WinForms/Samples/WinForms_Sample)

