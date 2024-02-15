---
uid: Meadow.Foundation.Leds.PwmLedBarGraph
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLedBarGraph
---

| PwmLedBarGraph | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

An LED Bar Graph is packaged array of LEDs commonly used to indicate level or progress and commonly include 8 or 10 leds.

The **PwmLedBarGraph** class allows you to control an led bar graph using PWM ports.

![LED bar graphs](/API_Assets/Meadow.Foundation.Leds.PwmLedBarGraph/img_LedBarGraph.jpg)

Use the `SetLed` method to turn on or off LEDs individually, or assign a value on the `Percentage` property to represent it visually on the graph bar, like a battery indicator, temperature, humidity, etc.  

### Code Example

```csharp
PwmLedBarGraph pwmLedBarGraph;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    // Using an array of Pins that support PWM (D02 - D13)
    IPin[] pins =
    {
         Device.Pins.D11,
         Device.Pins.D10,
         Device.Pins.D09,
         Device.Pins.D08,
         Device.Pins.D07,
         Device.Pins.D06,
         Device.Pins.D05,
         Device.Pins.D04,
         Device.Pins.D03,
         Device.Pins.D02
    };

    pwmLedBarGraph = new PwmLedBarGraph(pins, new Voltage(2.2));

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("TestLedBarGraph...");

    float percentage = 0;

    while (true)
    {
        Resolver.Log.Info("Turning them on and off for 200ms using SetLed...");
        for (int i = 0; i < pwmLedBarGraph.Count; i++)
        {
            await pwmLedBarGraph.SetLed(i, true);
            await Task.Delay(100);
            await pwmLedBarGraph.SetLed(i, false);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Turning them on using Percentage...");
        while (percentage < 1)
        {
            percentage += 0.01f;
            await pwmLedBarGraph.SetPercentage(Math.Min(1.0f, percentage));
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Turning them off using Percentage...");
        while (percentage > 0)
        {
            percentage -= 0.01f;
            await pwmLedBarGraph.SetPercentage(Math.Max(0.0f, percentage));
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking for 5 seconds at 500ms on/off...");
        await pwmLedBarGraph.StartBlink();
        await Task.Delay(5000);
        await pwmLedBarGraph.StopAnimation();

        await Task.Delay(1000);

        Resolver.Log.Info("Bar blinking with high and low brightness for 5 seconds...");
        await pwmLedBarGraph.StartBlink(TimeSpan.FromMilliseconds(200), TimeSpan.FromMilliseconds(200), 0.75f, 0.25f);
        await Task.Delay(5000);
        await pwmLedBarGraph.StopAnimation();

        await Task.Delay(1000);

        Resolver.Log.Info("Bar pulsing for 5 seconds...");
        await pwmLedBarGraph.StartPulse();
        await Task.Delay(5000);
        await pwmLedBarGraph.StopAnimation();

        await Task.Delay(1000);

        await pwmLedBarGraph.SetBrightness(0);

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.PwmLedBarGraph_Sample)

### Wiring Example

![LED bar graphs](/API_Assets/Meadow.Foundation.Leds.PwmLedBarGraph/PwmLedBarGraph_Fritzing.png)

# Class PwmLedBarGraph
Represents an LED bar graph composed on multiple PWM LEDs

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.cs#L11)
```csharp title="Declaration"
public class PwmLedBarGraph
```
## Properties
### Count
The number of the LEDs in the bar graph
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.cs#L21)
```csharp title="Declaration"
public int Count { get; }
```
### Percentage
A value between 0 and 1 that controls the number of LEDs that are activated
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.cs#L26)
```csharp title="Declaration"
public float Percentage { get; protected set; }
```
## Fields
### pwmLeds
Array to hold pwm leds for bar graph
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.cs#L16)
```csharp title="Declaration"
protected PwmLed[] pwmLeds
```
## Methods
### StopAnimation()
Stops the LED bar graph when its blinking
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L17)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StopAnimation(int)
Stops the blinking animation on an individual LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L32)
```csharp title="Declaration"
public Task StopAnimation(int index)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |

### StartBlink(int, float, float)
Starts a blink animation on an individual LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L48)
```csharp title="Declaration"
public Task StartBlink(int index, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartBlink(int, TimeSpan, TimeSpan, float, float)
Starts a blink animation on an individual LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L69)
```csharp title="Declaration"
public Task StartBlink(int index, TimeSpan highBrightnessDuration, TimeSpan lowBrightnessDuration, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |
| `System.TimeSpan` | *highBrightnessDuration* | The duration the LED stays in high brightness |
| `System.TimeSpan` | *lowBrightnessDuration* | The duration the LED stays in low brightness |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartBlink(float, float)
Start the Blink animation which sets the brightness of the LED alternating between a low and high brightness setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L89)
```csharp title="Declaration"
public Task StartBlink(float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartBlink(TimeSpan, TimeSpan, float, float)
Start the Blink animation which sets the brightness of the LED alternating between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L101)
```csharp title="Declaration"
public Task StartBlink(TimeSpan highBrightnessDuration, TimeSpan lowBrightnessDuration, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *highBrightnessDuration* | On duration. |
| `System.TimeSpan` | *lowBrightnessDuration* | Off duration. |
| `System.Single` | *highBrightness* | High brightness. |
| `System.Single` | *lowBrightness* | Low brightness. |

### StartPulse(int, float, float)
Starts a pulse animation on an individual LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L141)
```csharp title="Declaration"
public Task StartPulse(int index, float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(int, TimeSpan, float, float)
Starts a pulse animation on an individual LED with the specified pulse cycle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L158)
```csharp title="Declaration"
public Task StartPulse(int index, TimeSpan pulseDuration, float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |
| `System.TimeSpan` | *pulseDuration* | The pulse animation duration |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(float, float)
Start the Pulse animation which gradually alternates the brightness of the LED between a low and high brightness setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L173)
```csharp title="Declaration"
public Task StartPulse(float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(TimeSpan, float, float)
Start the Pulse animation which gradually alternates the brightness of the LED between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L184)
```csharp title="Declaration"
public Task StartPulse(TimeSpan pulseDuration, float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *pulseDuration* | The pulse animation duration |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### ValidateBrightness(float, float)
Validates LED brightness to ensure they're within the range 0 (off) - 1 (full brightness)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L242)
```csharp title="Declaration"
protected void ValidateBrightness(float highBrightness, float lowBrightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### GetTopLedForPercentage()
Returns the index of the last LED turned on
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.Animations.cs#L261)
```csharp title="Declaration"
public int GetTopLedForPercentage()
```

##### Returns

`System.Int32`
### SetLed(int, bool)
Set the LED state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.cs#L93)
```csharp title="Declaration"
public Task SetLed(int index, bool isOn)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |
| `System.Boolean` | *isOn* | True for on, False for off |

### SetLedBrightness(int, float)
Set the brightness of an individual LED when using PWM
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.cs#L109)
```csharp title="Declaration"
public Task SetLedBrightness(int index, float brightness)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

### SetPercentage(float)
Set the percentage of LEDs that are on starting from index 0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.cs#L124)
```csharp title="Declaration"
public Task SetPercentage(float percentage)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *percentage* | Percentage (Range from 0 - 1) |

### SetBrightness(float)
Set the brightness to the LED bar graph using PWM
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLedBarGraph.cs#L154)
```csharp title="Declaration"
public Task SetBrightness(float brightness)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

