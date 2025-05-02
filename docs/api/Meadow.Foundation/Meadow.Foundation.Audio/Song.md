---
title: Class Song
sidebar_label: Song
description: A class for playing a sequence of musical notes
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Audio/Song
---
# Class Song
A class for playing a sequence of musical notes

###### **Assembly**: MicroAudio.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/Song.cs#L11)
```csharp title="Declaration"
public class Song
```
## Fields
### Notes
The collection of notes in order for the song
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/Song.cs#L16)
```csharp title="Declaration"
public readonly List<Note> Notes
```
## Methods
### AddNote(Note)
Adds a musical note to the sequence of notes to be played
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/Song.cs#L29)
```csharp title="Declaration"
public void AddNote(Note note)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Audio.Note](../Meadow.Foundation.Audio/Note) | *note* | The musical note to add |

### Play(IToneGenerator, int)
Plays the sequence of musical notes, with the specified tempo
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/Song.cs#L40)
```csharp title="Declaration"
public Task Play(IToneGenerator speaker, int tempo = 120)
```

##### Returns

`System.Threading.Tasks.Task`: A Task representing the asynchronous playback operation
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Speakers.IToneGenerator` | *speaker* | The IToneGenerator object to play the song |
| `System.Int32` | *tempo* | The tempo of the music, in beats per minute |

