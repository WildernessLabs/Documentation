---
uid: Meadow.Foundation.Leds.Led
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Led
---

| Led | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

An **LED** is a diode (a component that attempts to let current flow only one way through it) that emits light when voltage is applied to it. Because it is a diode, it only works when a voltage is applied in one direction. 

LEDs commonly have one lead longer (the Cathode) than the other (the Anode). The longer cathode leg indicates that it should be connected to the positive (+) side of a circuit.

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

![Circuit layout sample showing an LED connected through a resistor to pin D08 and ground on a Meadow F7](/API_Assets/Meadow.Foundation.Leds.Led/Led_Fritzing.svg)

# Class Led
Utility functions to provide blinking for Led

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/Led.cs#L10)
```csharp title="Declaration"
public class Led : ILed, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Leds.ILed`, `System.IDisposable`

## Properties
### IsOn
Turns on LED with current color or turns it off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/Led.cs#L17)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### Port
Gets the port that is driving the LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/Led.cs#L31)
```csharp title="Declaration"
protected IDigitalOutputPort Port { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/Led.cs#L36)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StopAnimation()
Stops the current LED animation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/Led.Animations.cs#L21)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink()
Start the Blink animation which sets turns the LED on and off on an interval of 1 second (500ms on, 500ms off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/Led.Animations.cs#L35)
```csharp title="Declaration"
public Task StartBlink()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(TimeSpan, TimeSpan)
Start the Blink animation which sets turns the LED on and off with the specified durations
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/Led.Animations.cs#L45)
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

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/Led.cs#L58)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/Led.cs#L68)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Leds.ILed`
* `System.IDisposable`
