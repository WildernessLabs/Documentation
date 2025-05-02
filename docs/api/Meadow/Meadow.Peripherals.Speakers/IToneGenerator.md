---
title: Interface IToneGenerator
sidebar_label: IToneGenerator
description: Audio tones generator that plays tones at a given frequency
slug: /docs/api/Meadow/Meadow.Peripherals.Speakers/IToneGenerator
---
# Interface IToneGenerator
Audio tones generator that plays tones at a given frequency

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Speakers/IToneGenerator.cs#L10)
```csharp title="Declaration"
public interface IToneGenerator
```
## Methods
### PlayTone(Frequency, TimeSpan)
Plays the tone with a specified frequency and duration
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Speakers/IToneGenerator.cs#L17)
```csharp title="Declaration"
Task PlayTone(Frequency frequency, TimeSpan duration)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Frequency](../Meadow.Units/Frequency) | *frequency* | The tone frequency |
| `System.TimeSpan` | *duration* | The duration to play the tone |

### StopTone()
Stops the tone playing
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Speakers/IToneGenerator.cs#L22)
```csharp title="Declaration"
void StopTone()
```
### SetVolume(float)
Set the playback volume
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Speakers/IToneGenerator.cs#L28)
```csharp title="Declaration"
void SetVolume(float volume)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *volume* | The volume from 0 (off) to 1 (max volume) |

