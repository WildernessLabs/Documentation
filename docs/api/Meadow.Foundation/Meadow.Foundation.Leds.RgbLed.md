---
uid: Meadow.Foundation.Leds.RgbLed
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbLed
---

| RgbLed | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

**RgbLed** represents an RGB LED whose color is controlled by three digital output ports. These diodes consist of four legs - one for each of the colors mentioned and one for a common cathode (ground) or common anode (vcc), which is also the longest one.

![Common Cathode/Common Anode RGB LEDs](/API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed.jpg)

To connect these deds to Meadow, it is recommended to use an external resistor of ~270 to 1K ohms to prevent too much current from flowing through the led and causing damage. 

### Circuit of a common anode RGB LED

![Common Anode RGB LEDs](/API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed_CommonAnode_Fritzing.png)

### Circuit of a common cathode RGB LED

![Common Cathode RGB LEDs](/API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed_CommonCathode_Fritzing.png)

### Code Example

```csharp
protected List<RgbLed> rgbLeds;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    rgbLeds = new List<RgbLed>
    {
        new RgbLed(
            Device.CreateDigitalOutputPort(Device.Pins.D02),
            Device.CreateDigitalOutputPort(Device.Pins.D03),
            Device.CreateDigitalOutputPort(Device.Pins.D04)),
        new RgbLed(
            Device.CreateDigitalOutputPort(Device.Pins.D05),
            Device.CreateDigitalOutputPort(Device.Pins.D06),
            Device.CreateDigitalOutputPort(Device.Pins.D07)),
        new RgbLed(
            Device.CreateDigitalOutputPort(Device.Pins.D08),
            Device.CreateDigitalOutputPort(Device.Pins.D09),
            Device.CreateDigitalOutputPort(Device.Pins.D10)),
        new RgbLed(
            Device.CreateDigitalOutputPort(Device.Pins.D11),
            Device.CreateDigitalOutputPort(Device.Pins.D12),
            Device.CreateDigitalOutputPort(Device.Pins.D13))
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("TestRgbLeds...");

    while (true)
    {
        Resolver.Log.Info("Going through each color on each RGB LED...");
        foreach (var rgbLed in rgbLeds)
        {
            for (int i = 0; i < (int)RgbLedColors.count; i++)
            {
                rgbLed.SetColor((RgbLedColors)i);
                await Task.Delay(500);
            }
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking through each color on each RGB LED (on 500ms / off 500ms)...");
        foreach (var rgbLed in rgbLeds)
        {
            for (int i = 0; i < (int)RgbLedColors.count; i++)
            {
                await rgbLed.StartBlink((RgbLedColors)i);
                await Task.Delay(3000);
                await rgbLed.StopAnimation();
                rgbLed.IsOn = false;
            }
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking through each color on each RGB LED (on 1s / off 1s)...");
        foreach (var rgbLed in rgbLeds)
        {
            for (int i = 0; i < (int)RgbLedColors.count; i++)
            {
                await rgbLed.StartBlink((RgbLedColors)i, TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(1));
                await Task.Delay(3000);
                await rgbLed.StopAnimation();
                rgbLed.IsOn = false;
            }
        }

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.RgbLed_Sample)


# Class RgbLed
Utility functions to provide blinking and pulsing for RgbLed

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L10)
```csharp title="Declaration"
public class RgbLed : IRgbLed, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Leds.IRgbLed`, `System.IDisposable`

## Properties
### Color
The current LED color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L17)
```csharp title="Declaration"
public RgbLedColors Color { get; protected set; }
```
### RedPort
The red LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L22)
```csharp title="Declaration"
protected IDigitalOutputPort RedPort { get; set; }
```
### GreenPort
The green LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L27)
```csharp title="Declaration"
protected IDigitalOutputPort GreenPort { get; set; }
```
### BluePort
The blue LED port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L32)
```csharp title="Declaration"
protected IDigitalOutputPort BluePort { get; set; }
```
### Common
The common type (common anode or common cathode)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L37)
```csharp title="Declaration"
public CommonType Common { get; protected set; }
```
### IsOn
Turns on LED with current color or turns it off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L42)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L52)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StopAnimation()
Stops the current LED animation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.Animations.cs#L19)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink()
Start the Blink animation which sets turns the LED on and off on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.Animations.cs#L31)
```csharp title="Declaration"
public Task StartBlink()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(RgbLedColors)
Start the Blink animation which sets turns the LED on and off on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.Animations.cs#L37)
```csharp title="Declaration"
public Task StartBlink(RgbLedColors color)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Leds.RgbLedColors` | *color* | The LED color |

### StartBlink(RgbLedColors, TimeSpan, TimeSpan)
Start the Blink animation which sets turns the LED on and off with the specified durations and color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.Animations.cs#L43)
```csharp title="Declaration"
public Task StartBlink(RgbLedColors color, TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Leds.RgbLedColors` | *color* | The LED color |
| `System.TimeSpan` | *onDuration* | The duration the LED stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED stays off |

### StartBlink(TimeSpan, TimeSpan)
Start the Blink animation which sets turns the LED on and off with the specified durations and current color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.Animations.cs#L56)
```csharp title="Declaration"
public Task StartBlink(TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *onDuration* | The duration the LED stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED stays off |

### SetColor(RgbLedColors)
Sets the current color of the LED.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L95)
```csharp title="Declaration"
public void SetColor(RgbLedColors color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Leds.RgbLedColors` | *color* | The color value |

### UpdateLed(bool)
Turns on LED with current color or LED off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L106)
```csharp title="Declaration"
protected void UpdateLed(bool isOn)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *isOn* | True for on, False for off |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L160)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/RgbLed.cs#L170)
```csharp title="Declaration"
public virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Leds.IRgbLed`
* `System.IDisposable`
