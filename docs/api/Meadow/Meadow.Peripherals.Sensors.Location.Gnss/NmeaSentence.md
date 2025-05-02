---
title: Class NmeaSentence
sidebar_label: NmeaSentence
description: Represents a NMEA data sentence typically used in GPS/GNSS systems.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Location.Gnss/NmeaSentence
---
# Class NmeaSentence
Represents a NMEA data sentence typically used in GPS/GNSS systems.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L15)
```csharp title="Declaration"
public class NmeaSentence
```
## Properties
### StartingDelimiter
The first character in the sentence. Usually `$`, but AIVDM/AIVDO
sentences might start with `!`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L21)
```csharp title="Declaration"
public string StartingDelimiter { get; set; }
```
### TalkerID
The first two letters (after the starting delimiter) comprise the
Talker ID, which describes the system in use, for instance "GL" means
that the data came from the GLONASS system. "BD" means BeiDou, etc.

Default value is "GP".
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L30)
```csharp title="Declaration"
public string TalkerID { get; set; }
```
### TalkerSystemName
Retrieves the full name associated with the TalkerID via the
`KnownTalkerIDs` property of the Lookups class.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L36)
```csharp title="Declaration"
public string TalkerSystemName { get; }
```
### Prefix
The prefix, excluding the `$` symbol and first two letters of the
sentence, i.e.: `RMC`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L49)
```csharp title="Declaration"
public string? Prefix { get; set; }
```
### DataElements
A list of strings that represent the data elements within a NMEA
sentence, between the prefix and the checksum data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L55)
```csharp title="Declaration"
public List<string> DataElements { get; set; }
```
### Checksum
The checksum data of the data elements. Calculated by `XOR`ing
all of the data elements.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L61)
```csharp title="Declaration"
public byte Checksum { get; }
```
## Methods
### GetDataString()
Returns the NMEA sentence string without the checksum digits.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L67)
```csharp title="Declaration"
protected string GetDataString()
```

##### Returns

`System.String`
### ToString()
Returns a fully-expressed NMEA data string, including the prefix,
data elements, and checksum information.

I.e.: $GPRMC,000049.799,V,,,,,0.00,0.00,060180,,,N*48
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L79)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: A string of the sentence.### TryParse(string, out NmeaSentence?)
Tries to creates a [Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence](../Meadow.Peripherals.Sensors.Location.Gnss/NmeaSentence) from a string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L96)
```csharp title="Declaration"
public static bool TryParse(string sentenceString, out NmeaSentence? sentence)
```

##### Returns

`System.Boolean`: True on success, otherwise False
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *sentenceString* | A NMEA sentence string. |
| [Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence](../Meadow.Peripherals.Sensors.Location.Gnss/NmeaSentence) | *sentence* | The parsed [Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence](../Meadow.Peripherals.Sensors.Location.Gnss/NmeaSentence) |

### From(string)
Creates a [Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence](../Meadow.Peripherals.Sensors.Location.Gnss/NmeaSentence) from a string. Will parse the prefix, data
elements, and also validate the checksum. If the checksum is invalid,
it will throw an `System.ArgumentException`, therefore this should be used
in a `try`/`catch` block.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/NmeaSentence.cs#L119)
```csharp title="Declaration"
public static NmeaSentence From(string sentence)
```

##### Returns

[Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence](../Meadow.Peripherals.Sensors.Location.Gnss/NmeaSentence): A `NmeaSentence` class representing with the NMEA
    information loaded.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *sentence* | A NMEA sentence string. |

