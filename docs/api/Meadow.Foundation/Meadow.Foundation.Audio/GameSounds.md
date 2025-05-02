---
title: Class GameSounds
sidebar_label: GameSounds
description: A class for playing game sounds using an IToneGenerator
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Audio/GameSounds
---
# Class GameSounds
A class for playing game sounds using an IToneGenerator

###### **Assembly**: MicroAudio.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/GameSounds.cs#L11)
```csharp title="Declaration"
public class GameSounds
```
## Methods
### PlayEffect(GameSoundEffect)
Plays the specified sound effect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/GameSounds.cs#L30)
```csharp title="Declaration"
public Task PlayEffect(GameSoundEffect effect)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Audio.GameSoundEffect](../Meadow.Foundation.Audio/GameSoundEffect) | *effect* | The sound effect to play |

### PlaySplash()
Plays a splash sound effect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/GameSounds.cs#L312)
```csharp title="Declaration"
public Task PlaySplash()
```

##### Returns

`System.Threading.Tasks.Task`
