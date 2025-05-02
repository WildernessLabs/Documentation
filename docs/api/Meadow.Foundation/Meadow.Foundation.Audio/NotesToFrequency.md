---
title: Class NotesToFrequency
sidebar_label: NotesToFrequency
description: >-
  A utility class for converting musical notes to their corresponding
  frequencies in hertz
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Audio/NotesToFrequency
---
# Class NotesToFrequency
A utility class for converting musical notes to their corresponding frequencies in hertz

###### **Assembly**: MicroAudio.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/NotesToFrequency.cs#L9)
```csharp title="Declaration"
public class NotesToFrequency
```
## Properties
### A4Frequency
The frequency of the A4 note, in hertz
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/NotesToFrequency.cs#L14)
```csharp title="Declaration"
public static Frequency A4Frequency { get; set; }
```
## Methods
### ConvertToFrequency(Note)
Converts the specified musical note to its frequency in hertz
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Audio.MicroAudio/Driver/NotesToFrequency.cs#L23)
```csharp title="Declaration"
public static Frequency ConvertToFrequency(Note note)
```

##### Returns

`Meadow.Units.Frequency`: The frequency of the note in hertz
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Audio.Note](../Meadow.Foundation.Audio/Note) | *note* | The musical note to convert |

