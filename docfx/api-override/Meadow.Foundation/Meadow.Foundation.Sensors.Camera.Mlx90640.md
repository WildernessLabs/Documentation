---
uid: Meadow.Foundation.Sensors.Camera.Mlx90640
remarks: *content
---

| Mlx90640 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Camera.Mlx90640/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Camera.Mlx90640.svg?label=Meadow.Foundation.Sensors.Camera.Mlx90640" alt="NuGet Gallery for Meadow.Foundation.Sensors.Camera.Mlx90640" /></a> |

```csharp
Mlx90640 sensor;

public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.Fast);
    sensor = new Mlx90640(i2cBus, measurementUnit: Mlx90640.Units.Celsius);
    sensor.Initialize();

    //View sensor data as temperature values
    Run(showTempArrayAsAsciiArt: false);
}

void Run(bool showTempArrayAsAsciiArt)
{
    Console.WriteLine("Run sample...");

    float[] frame;

    Console.WriteLine($"Serial #:{sensor.SerialNumber}");

    sensor.SetMode(Mlx90640.Mode.Chess);
    Console.WriteLine($"Current Mode: {sensor.GetMode()}");  

    sensor.SetResolution(Mlx90640.Resolution.EighteenBit);
    Console.WriteLine($"Current resolution: {sensor.GetResolution()}");

    sensor.SetRefreshRate(Mlx90640.RefreshRate.TwoHZ);
    Console.WriteLine($"Current frame rate: {sensor.GetRefreshRate()}");

    Console.WriteLine($"Broken Pixels: {sensor.Config.BrokenPixels.Count}");
    Console.WriteLine($"Outlier Pixels: {sensor.Config.OutlierPixels.Count}");
    Console.WriteLine($"Broken Pixels has adjacent broken pixel: {sensor.Config.BrokenPixelHasAdjacentBrokenPixel}");
    Console.WriteLine($"Broken Pixels has adjacent Outlier pixel: {sensor.Config.BrokenPixelHasAdjacentOutlierPixel}");
    Console.WriteLine($"Outlier Pixels has adjacent Outlier pixel: {sensor.Config.OutlierPixelHasAdjacentOutlierPixel}");

    Thread.Sleep(2000);

    while (true)
    {
        Thread.Sleep(1000);

        frame = sensor.Read();

        Console.WriteLine();

        //Print out each value
        for (byte h = 0; h < 24; h++)
        {
            for (byte w = 0; w < 32; w++)
            {
                float t = frame[h * 32 + w];
                //View sensor data as ascii art. It is easier to see shapes, like your fingers.
                if (!showTempArrayAsAsciiArt)
                {
                    //Write the Temp value
                    Console.Write($"{t:0},");
                }
                else
                {
                    //Write the ascii art character
                    char c = '&';
                    if (t < 68) c = ' ';
                    else if (t < 73.4) c = '.';
                    else if (t < 77) c = '-';
                    else if (t < 80.6) c = '*';
                    else if (t < 84) c = '+';
                    else if (t < 87) c = 'x';
                    else if (t < 91) c = '%';
                    else if (t < 95) c = '#';
                    else if (t < 98.6) c = '$';
                    Console.Write(c);
                }
            }

            Console.WriteLine();
        }
   }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Samples/Sensors.Camera.Mlx90640_Sample)

|
### Code Example

```csharp
Mlx90640 sensor;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.Fast);
    sensor = new Mlx90640(i2cBus);

    return Task.CompletedTask;
}

public override Task Run()
{
    bool showTempArrayAsAsciiArt = false;

    Console.WriteLine("Run sample...");

    float[] frame;

    Console.WriteLine($"Serial #:{sensor.SerialNumber}");

    sensor.SetMode(Mlx90640.Mode.Chess);
    Console.WriteLine($"Current Mode: {sensor.GetMode()}");

    sensor.SetResolution(Mlx90640.Resolution.EighteenBit);
    Console.WriteLine($"Current resolution: {sensor.GetResolution()}");

    sensor.SetRefreshRate(Mlx90640.RefreshRate._2hz);
    Console.WriteLine($"Current frame rate: {sensor.GetRefreshRate()}");

    Console.WriteLine($"Broken Pixels: {sensor.Config.BrokenPixels.Count}");
    Console.WriteLine($"Outlier Pixels: {sensor.Config.OutlierPixels.Count}");
    Console.WriteLine($"Broken Pixels has adjacent broken pixel: {sensor.Config.BrokenPixelHasAdjacentBrokenPixel}");
    Console.WriteLine($"Broken Pixels has adjacent Outlier pixel: {sensor.Config.BrokenPixelHasAdjacentOutlierPixel}");
    Console.WriteLine($"Outlier Pixels has adjacent Outlier pixel: {sensor.Config.OutlierPixelHasAdjacentOutlierPixel}");

    Thread.Sleep(2000);

    while (true)
    {
        Thread.Sleep(1000);

        frame = sensor.ReadRawData();

        Console.WriteLine();

        //Print out each value
        for (byte h = 0; h < 24; h++)
        {
            for (byte w = 0; w < 32; w++)
            {
                float t = frame[h * 32 + w];
                //View sensor data as ascii art. It is easier to see shapes, like your fingers.
                if (!showTempArrayAsAsciiArt)
                {
                    //Write the Temp value
                    Console.Write($"{t:0},");
                }
                else
                {
                    //Write the ascii art character
                    char c = '&';
                    if (t < 68) c = ' ';
                    else if (t < 73.4) c = '.';
                    else if (t < 77) c = '-';
                    else if (t < 80.6) c = '*';
                    else if (t < 84) c = '+';
                    else if (t < 87) c = 'x';
                    else if (t < 91) c = '%';
                    else if (t < 95) c = '#';
                    else if (t < 98.6) c = '$';
                    Console.Write(c);
                }
            }

            Console.WriteLine();
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Samples/Mlx90640_Sample)

