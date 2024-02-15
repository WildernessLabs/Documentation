---
uid: Meadow.Foundation.Leds.LedBarGraph
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds.LedBarGraph
---

| LedBarGraph | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

An LED Bar Graph is packaged array of LEDs commonly used to indicate level or progress and commonly include 8 or 10 leds.

The **LedBarGraph** class allows you to control an led bar graph using GPIO.

![LED bar graphs](/API_Assets/Meadow.Foundation.Leds.LedBarGraph/img_LedBarGraph.jpg)

Use the `SetLed` method to turn on or off LEDs individually, or assign a value on the `Percentage` property to represent it visually on the graph bar, like a battery indicator, temperature, humidity, etc.  

### Code Example

```csharp
LedBarGraph ledBarGraph;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    // Using an array of Pins 
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

    ledBarGraph = new LedBarGraph(pins);

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("TestLedBarGraph...");

    float percentage = 0;

    while (true)
    {
        Resolver.Log.Info("Turning them on and off for 200ms using SetLed...");
        for (int i = 0; i < ledBarGraph.Count; i++)
        {
            await ledBarGraph.SetLed(i, true);
            await Task.Delay(100);
            await ledBarGraph.SetLed(i, false);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Turning them on using Percentage...");
        while (percentage < 1)
        {
            percentage += 0.10f;
            await ledBarGraph.SetPercentage(Math.Min(1.0f, percentage));
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Turning them off using Percentage...");
        while (percentage > 0)
        {
            percentage -= 0.10f;
            await ledBarGraph.SetPercentage(Math.Max(0.0f, percentage));
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Charging animation...");
        while (percentage < 1)
        {
            percentage += 0.10f;
            await ledBarGraph.SetPercentage(Math.Min(1.0f, percentage));
            await ledBarGraph.StartBlink(ledBarGraph.GetTopLedForPercentage());
            await Task.Delay(2000);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Discharging animation...");
        while (percentage > 0)
        {
            percentage -= 0.10f;
            await ledBarGraph.SetPercentage(Math.Max(0.0f, percentage));
            await ledBarGraph.StartBlink(ledBarGraph.GetTopLedForPercentage());
            await Task.Delay(2000);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking for 5 seconds at 500ms on/off...");
        await ledBarGraph.StartBlink();
        await Task.Delay(5000);
        await ledBarGraph.StopAnimation();

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking for 5 seconds at 200ms on/off...");
        await ledBarGraph.StartBlink(TimeSpan.FromMilliseconds(200), TimeSpan.FromMilliseconds(200));
        await Task.Delay(5000);
        await ledBarGraph.StopAnimation();

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.LedBarGraph_Sample)

### Wiring Example

![Circuit layout sample showing an LED BAR graph connected to a Meadow F7](/API_Assets/Meadow.Foundation.Leds.LedBarGraph/LedBarGraph_Fritzing.svg)

# Class LedBarGraph
Represents an LED bar graph composed on multiple LEDs

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L10)
```csharp title="Declaration"
public class LedBarGraph
```
## Properties
### Count
The number of the LEDs in the bar graph
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L20)
```csharp title="Declaration"
public int Count { get; }
```
### Percentage
A value between 0 and 1 that controls the number of LEDs that are activated
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L25)
```csharp title="Declaration"
public float Percentage { get; protected set; }
```
## Fields
### leds
Array to hold LED objects for bar
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L15)
```csharp title="Declaration"
protected Led[] leds
```
## Methods
### StopAnimation()
Stops the LED bar graph when its blinking
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L17)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StopAnimation(int)
Stops the blinking animation on an individual LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L31)
```csharp title="Declaration"
public Task StopAnimation(int index)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *index* |

### StartBlink()
Blink animation that turns the LED bar graph on (500ms) and off (500ms)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L44)
```csharp title="Declaration"
public Task StartBlink()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(TimeSpan, TimeSpan)
Blink animation that turns the LED bar graph on and off based on the OnDuration and offDuration values
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L54)
```csharp title="Declaration"
public Task StartBlink(TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *onDuration* | The duration the LED bar graph stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED bar graph stays off |

### StartBlink(int)
Starts a blink animation on an individual LED on (500ms) and off (500ms)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L88)
```csharp title="Declaration"
public Task StartBlink(int index)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |

### StartBlink(int, TimeSpan, TimeSpan)
Starts a blink animation on an individual LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L104)
```csharp title="Declaration"
public Task StartBlink(int index, TimeSpan onDuration, TimeSpan offDuration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | Index of the LED |
| `System.TimeSpan` | *onDuration* | The duration the LED stays on |
| `System.TimeSpan` | *offDuration* | The duration the LED stays off |

### GetTopLedForPercentage()
Returns the index of the last LED turned on
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.Animations.cs#L117)
```csharp title="Declaration"
public int GetTopLedForPercentage()
```

##### Returns

`System.Int32`
### SetLed(int, bool)
Set the LED state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L60)
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

### SetPercentage(float)
Set the percentage of LEDs that are on starting from index 0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/LedBarGraph.cs#L75)
```csharp title="Declaration"
public Task SetPercentage(float percentage)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *percentage* | Percentage (Range from 0 - 1) |

