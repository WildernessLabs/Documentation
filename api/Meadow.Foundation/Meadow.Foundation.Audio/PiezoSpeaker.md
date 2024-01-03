---
title: Class PiezoSpeaker
sidebar_label: PiezoSpeaker
description: "Represents a 2 pin piezo-electric speaker capable of generating tones"
---
# Class PiezoSpeaker
Represents a 2 pin piezo-electric speaker capable of generating tones

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L12)
```csharp title="Declaration"
public class PiezoSpeaker : IToneGenerator, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Speakers.IToneGenerator`, `System.IDisposable`

## Properties
### Volume
The volume from 0-1 
Defined by the PWM port duty cycle from 0 to 0.5
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L18)
```csharp title="Declaration"
public float Volume { get; protected set; }
```
### Port
Gets the port that is driving the Piezo Speaker
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L23)
```csharp title="Declaration"
protected IPwmPort Port { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L30)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### PlayTone(Frequency)
Play a frequency until stopped by StopTone
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L73)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L83)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L110)
```csharp title="Declaration"
public void StopTone()
```
### SetVolume(float)
Set the playback volume
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L119)
```csharp title="Declaration"
public void SetVolume(float volume)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *volume* | The volume from 0 (off) to 1 (max volume) |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L130)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Speakers/PiezoSpeaker.cs#L140)
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
