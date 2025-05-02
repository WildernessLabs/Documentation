---
title: Class MtkDecoder
sidebar_label: MtkDecoder
description: Represents an MTK decoder
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss/MtkDecoder
---
# Class MtkDecoder
Represents an MTK decoder

###### **Assembly**: Mt3339.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/MtkDecoder.cs#L9)
```csharp title="Declaration"
public class MtkDecoder : INmeaDecoder
```
**Implements:**  
[Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)

## Properties
### Name
Friendly name for the MTK messages.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/MtkDecoder.cs#L14)
```csharp title="Declaration"
public string Name { get; }
```
### Prefix
Prefix for the GLL (Geographic position Latitude / Longitude) decoder.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/MtkDecoder.cs#L19)
```csharp title="Declaration"
public string Prefix { get; }
```
## Methods
### Process(NmeaSentence)
Process the data from a RMC
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.Mt3339/Driver/MtkDecoder.cs#L25)
```csharp title="Declaration"
public void Process(NmeaSentence sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence` | *sentence* | String array of the message components for a RMC message. |


## Implements

* [Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)
