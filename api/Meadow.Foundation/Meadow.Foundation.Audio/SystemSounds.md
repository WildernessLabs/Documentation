---
title: Class SystemSounds
sidebar_label: SystemSounds
description: "A class for playing system sounds using an IToneGenerator"
---
# Class SystemSounds
A class for playing system sounds using an IToneGenerator

###### **Assembly**: MicroAudio.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/SystemSounds.cs#L11)
```csharp title="Declaration"
public class SystemSounds
```
## Methods
### PlayEffect(SystemSoundEffect)
Plays the specified sound effect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/SystemSounds.cs#L35)
```csharp title="Declaration"
public Task PlayEffect(SystemSoundEffect effect)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Audio.SystemSoundEffect](../Meadow.Foundation.Audio/SystemSoundEffect) | *effect* | The sound effect to play |

