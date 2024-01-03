---
title: Class MicroAudio
sidebar_label: MicroAudio
description: "Provide high level audio functions"
---
# Class MicroAudio
Provide high level audio functions

###### **Assembly**: MicroAudio.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/MicroAudio.cs#L9)
```csharp title="Declaration"
public class MicroAudio
```
## Methods
### SetVolume(float)
Set the playback volume
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/MicroAudio.cs#L29)
```csharp title="Declaration"
public void SetVolume(float volume)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *volume* | The volume from 0-1 |

### PlaySystemSound(SystemSoundEffect, int)
Plays the specified system sound effect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/MicroAudio.cs#L39)
```csharp title="Declaration"
public Task PlaySystemSound(SystemSoundEffect effect, int numberOfLoops = 1)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Audio.SystemSoundEffect](../Meadow.Foundation.Audio/SystemSoundEffect) | *effect* | The sound effect to play |
| `System.Int32` | *numberOfLoops* | The number of times to play the sound effect |

### PlayGameSound(GameSoundEffect, int)
Plays the specified game sound effect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/MicroAudio.cs#L54)
```csharp title="Declaration"
public Task PlayGameSound(GameSoundEffect effect, int numberOfLoops = 1)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Audio.GameSoundEffect](../Meadow.Foundation.Audio/GameSoundEffect) | *effect* | The sound effect to play |
| `System.Int32` | *numberOfLoops* | The number of times to play the sound effect |

### PlaySong(Song)
Play the specified song
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/MicroAudio.cs#L68)
```csharp title="Declaration"
public Task PlaySong(Song song)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Audio.Song](../Meadow.Foundation.Audio/Song) | *song* | The song object |

