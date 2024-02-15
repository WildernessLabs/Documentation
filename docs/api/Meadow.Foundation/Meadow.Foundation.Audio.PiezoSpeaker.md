---
uid: Meadow.Foundation.Audio.PiezoSpeaker
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Audio.PiezoSpeaker
---

| PiezoSpeaker | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Speakers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

The **PiezoSpeaker** class represents a piezoelectric speaker that can be used to generate tones across a range of frequencies. They typically perform well between 1-5kHz but may go as high as 100kHz. PiezoSpeaker Implements IToneGenerator.

The positive pin of the piezo speaker connects to a pulse width modulation (PWM) capable pin on the Meadow and the negative pin connects to common/ground. A resistor can be placed in-line to reduce volume.

![Piezo Speakers](/API_Assets/Meadow.Foundation.Audio.PiezoSpeaker/img_PiezoSpeaker.jpg)

### Code Example

```csharp
protected PiezoSpeaker piezoSpeaker;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    piezoSpeaker = new PiezoSpeaker(Device.CreatePwmPort(Device.Pins.D05, new Frequency(100, Frequency.UnitType.Hertz)));

    return Task.CompletedTask;
}

public override async Task Run()
{
    for (int i = 0; i < 5; i++)
    {
        Resolver.Log.Info("Playing A major triad starting at A4");
        await piezoSpeaker.PlayTone(new Frequency(440, Frequency.UnitType.Hertz), TimeSpan.FromMilliseconds(500)); //A
        await piezoSpeaker.PlayTone(new Frequency(554.37f, Frequency.UnitType.Hertz), TimeSpan.FromMilliseconds(500)); //C#
        await piezoSpeaker.PlayTone(new Frequency(659.25f, Frequency.UnitType.Hertz), TimeSpan.FromMilliseconds(500)); //E

        await Task.Delay(2500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Audio.PiezoSpeaker_Sample)

### Wiring Example

![Wiring a Piezo Speaker to a Meadow F7](/API_Assets/Meadow.Foundation.Audio.PiezoSpeaker/PiezoSpeaker_Fritzing.svg)

# Class PiezoSpeaker
Represents a 2 pin piezo-electric speaker capable of generating tones

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L12)
```csharp title="Declaration"
public class PiezoSpeaker : IToneGenerator, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Speakers.IToneGenerator`, `System.IDisposable`

## Properties
### Volume
The volume from 0-1 
Defined by the PWM port duty cycle from 0 to 0.5
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L18)
```csharp title="Declaration"
public float Volume { get; protected set; }
```
### Port
Gets the port that is driving the Piezo Speaker
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L23)
```csharp title="Declaration"
protected IPwmPort Port { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L30)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### PlayTone(Frequency)
Play a frequency until stopped by StopTone
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L73)
```csharp title="Declaration"
public Task PlayTone(Frequency frequency)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Frequency` | *frequency* | The frequency in hertz of the tone to be played |

### PlayTone(Frequency, TimeSpan)
Play a frequency for a specified duration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L83)
```csharp title="Declaration"
public Task PlayTone(Frequency frequency, TimeSpan duration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Frequency` | *frequency* | The frequency in hertz of the tone to be played |
| `System.TimeSpan` | *duration* | How long the note is played in milliseconds, if duration is 0, tone plays indefinitely |

### StopTone()
Stops a tone playing
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L110)
```csharp title="Declaration"
public void StopTone()
```
### SetVolume(float)
Set the playback volume
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L119)
```csharp title="Declaration"
public void SetVolume(float volume)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *volume* | The volume from 0 (off) to 1 (max volume) |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L130)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L140)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Speakers.IToneGenerator`
* `System.IDisposable`
