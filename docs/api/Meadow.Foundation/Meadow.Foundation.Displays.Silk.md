---
uid: Meadow.Foundation.Displays.Silk
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Silk
---

| Silk | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Silk) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Silk/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Silk.svg?label=Meadow.Foundation.Displays.Silk" alt="NuGet Gallery for Meadow.Foundation.Displays.Silk" /></a> |
### Code Example

```csharp
public class Program
{
    static Meadow.Foundation.Displays.Silk? display;
    static MicroGraphics graphics = default!;

    public static void Main()
    {
        Initialize();
        Run();

        Thread.Sleep(Timeout.Infinite);
    }

    public static void Initialize()
    {
        display = new Meadow.Foundation.Displays.Silk(640, 480, displayScale: 1f);

        graphics = new MicroGraphics(display)
        {
            CurrentFont = new Font16x24(),
            Stroke = 1
        };
    }

    public static void Run()
    {
        Task.Run(() =>
        {
            int circleRadius = 40;
            int circleSpeed = 4;
            int x = circleRadius;
            int y = circleRadius;
            bool xDirection = true;
            bool yDirection = true;

            while (true)
            {
                graphics.Clear();

                graphics.DrawText(10, 10, "Silk.NET", Color.White);

                graphics.DrawText(10, 40, "1234567890!@#$%^&*(){}[],./<>?;':", Color.LawnGreen);
                graphics.DrawText(10, 70, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", Color.Cyan);
                graphics.DrawText(10, 100, "abcdefghijklmnopqrstuvwxyz", Color.Yellow);
                graphics.DrawText(10, 130, "Temp: 21.5°C", Color.Orange);

                graphics.DrawTriangle(10, 220, 50, 260, 10, 260, Color.Red);
                graphics.DrawRectangle(20, 185, 80, 40, Color.Yellow, false);

                graphics.DrawCircle(x, y, circleRadius, Color.Blue, false);
                graphics.Show();

                x += xDirection ? circleSpeed : -circleSpeed;
                y += yDirection ? circleSpeed : -circleSpeed;

                if (x > display!.Width - circleRadius) { xDirection = false; }
                else if (x < circleRadius) { xDirection = true; }

                if (y > display!.Height - circleRadius) { yDirection = false; }
                else if (y < circleRadius) { yDirection = true; }
            }
        });

        display!.Run();
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Silk/Samples/Silk_Sample)

