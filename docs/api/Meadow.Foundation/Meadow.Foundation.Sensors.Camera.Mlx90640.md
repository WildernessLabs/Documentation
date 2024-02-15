---
uid: Meadow.Foundation.Sensors.Camera.Mlx90640
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Mlx90640
---

| Mlx90640 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
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
    Resolver.Log.Info("Initialize...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.Fast);
    sensor = new Mlx90640(i2cBus);

    return Task.CompletedTask;
}

public override Task Run()
{
    bool showTempArrayAsAsciiArt = false;

    Resolver.Log.Info("Run sample...");

    float[] frame;

    Resolver.Log.Info($"Serial #:{sensor.SerialNumber}");

    sensor.SetMode(Mlx90640.Mode.Chess);
    Resolver.Log.Info($"Current Mode: {sensor.GetMode()}");

    sensor.SetResolution(Mlx90640.Resolution.EighteenBit);
    Resolver.Log.Info($"Current resolution: {sensor.GetResolution()}");

    sensor.SetRefreshRate(Mlx90640.RefreshRate._2hz);
    Resolver.Log.Info($"Current frame rate: {sensor.GetRefreshRate()}");

    Resolver.Log.Info($"Broken Pixels: {sensor.Config.BrokenPixels.Count}");
    Resolver.Log.Info($"Outlier Pixels: {sensor.Config.OutlierPixels.Count}");
    Resolver.Log.Info($"Broken Pixels has adjacent broken pixel: {sensor.Config.BrokenPixelHasAdjacentBrokenPixel}");
    Resolver.Log.Info($"Broken Pixels has adjacent Outlier pixel: {sensor.Config.BrokenPixelHasAdjacentOutlierPixel}");
    Resolver.Log.Info($"Outlier Pixels has adjacent Outlier pixel: {sensor.Config.OutlierPixelHasAdjacentOutlierPixel}");

    Thread.Sleep(2000);

    while (true)
    {
        Thread.Sleep(1000);

        frame = sensor.ReadRawData();

        Resolver.Log.Info("");

        //Print out each value
        for (byte h = 0; h < 24; h++)
        {
            StringBuilder logLine = new StringBuilder();
            for (byte w = 0; w < 32; w++)
            {
                float t = frame[h * 32 + w];
                //View sensor data as ASCII art. It is easier to see shapes, like your fingers.
                if (!showTempArrayAsAsciiArt)
                {
                    //Write the Temp value
                    logLine.Append($"{t:0},");
                }
                else
                {
                    //Write the ASCII art character
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
                    logLine.Append(c);
                }
            }

            Resolver.Log.Info(logLine.ToString());
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Samples/Mlx90640_Sample)


# Class Mlx90640
Represents the MLX90640 32x24 IR array
The MLX90640 is a fully calibrated 32x24 pixels thermal IR array

###### **Assembly**: Mlx90640.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.Enums.cs#L3)
```csharp title="Declaration"
public class Mlx90640 : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### SerialNumber
Camera serial number as a string
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L16)
```csharp title="Declaration"
public string SerialNumber { get; }
```
### Emissivity
Emissivity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L21)
```csharp title="Declaration"
public float Emissivity { get; set; }
```
### ReflectedTemperature
Reflected temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L44)
```csharp title="Declaration"
public Temperature ReflectedTemperature { get; set; }
```
### Config
Camera configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L49)
```csharp title="Declaration"
public Mlx90640Config Config { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L59)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L64)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### ReadRawData()
Gets all 768 sensor readings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L110)
```csharp title="Declaration"
public float[] ReadRawData()
```

##### Returns

`System.Single[]`: Float array containing each individual reading### SetMode(Mode)
Set the reading pattern mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L132)
```csharp title="Declaration"
public void SetMode(Mlx90640.Mode mode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Mlx90640.Mode](../Mlx90640.Mode) | *mode* | Chess or Interleaved |

### GetMode()
Get the current reading pattern mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L148)
```csharp title="Declaration"
public Mlx90640.Mode GetMode()
```

##### Returns

[Meadow.Foundation.Sensors.Camera.Mlx90640.Mode](../Mlx90640.Mode): Chess or Interleaved### SetResolution(Resolution)
Sets the resolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L154)
```csharp title="Declaration"
public void SetResolution(Mlx90640.Resolution res)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Mlx90640.Resolution](../Mlx90640.Resolution) | *res* | Resolution type |

### GetResolution()
Get the current resolution mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L160)
```csharp title="Declaration"
public Mlx90640.Resolution GetResolution()
```

##### Returns

[Meadow.Foundation.Sensors.Camera.Mlx90640.Resolution](../Mlx90640.Resolution): Resolution mode### GetRefreshRate()
Gets the Refresh rate
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L166)
```csharp title="Declaration"
public Mlx90640.RefreshRate GetRefreshRate()
```

##### Returns

[Meadow.Foundation.Sensors.Camera.Mlx90640.RefreshRate](../Mlx90640.RefreshRate): RefreshRate type### SetRefreshRate(RefreshRate)
Sets the refresh rate
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Mlx90640/Driver/Mlx90640.cs#L172)
```csharp title="Declaration"
public void SetRefreshRate(Mlx90640.RefreshRate rate)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Camera.Mlx90640.RefreshRate](../Mlx90640.RefreshRate) | *rate* | RefreshRate type |


## Implements

* `Meadow.Hardware.II2cPeripheral`
