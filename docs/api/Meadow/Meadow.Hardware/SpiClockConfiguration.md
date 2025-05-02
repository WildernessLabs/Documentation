---
title: Class SpiClockConfiguration
sidebar_label: SpiClockConfiguration
description: Encapsulates properties of a SPI Bus Clock
slug: /docs/api/Meadow/Meadow.Hardware/SpiClockConfiguration
---
# Class SpiClockConfiguration
Encapsulates properties of a SPI Bus Clock

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SpiClockConfiguration.cs#L8)
```csharp title="Declaration"
public class SpiClockConfiguration
```
## Properties
### Polarity
Gets or sets the current Polarity of the SPI bus clock
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SpiClockConfiguration.cs#L76)
```csharp title="Declaration"
public SpiClockConfiguration.ClockPolarity Polarity { get; set; }
```
### Phase
Gets or sets the current Phase of the SPI bus clock
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SpiClockConfiguration.cs#L90)
```csharp title="Declaration"
public SpiClockConfiguration.ClockPhase Phase { get; set; }
```
### Speed
Sets the desired speed or gets the actual speed of the SPI bus clock.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SpiClockConfiguration.cs#L107)
```csharp title="Declaration"
public Frequency Speed { get; set; }
```
### BitsPerWord
Gets or sets the number of bits per word
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SpiClockConfiguration.cs#L121)
```csharp title="Declaration"
public int BitsPerWord { get; set; }
```
### SpiMode
Gets or sets the SPI mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SpiClockConfiguration.cs#L137)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiMode { get; }
```
## Methods
### SetActualSpeed(Frequency)
Provided to allow setting speed value without raising a Changed event. This method is used internally.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SpiClockConfiguration.cs#L154)
```csharp title="Declaration"
public void SetActualSpeed(Frequency speed)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Frequency](../Meadow.Units/Frequency) | *speed* | The SPI bus speed |

### SetBusMode(Mode)
Provided to allow setting the SPI bus mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SpiClockConfiguration.cs#L163)
```csharp title="Declaration"
public void SetBusMode(SpiClockConfiguration.Mode mode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.SpiClockConfiguration.Mode](../Meadow.Hardware/SpiClockConfiguration.Mode) | *mode* | The SPI bus mode |

## Events
### Changed
Event raised when the configuration changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SpiClockConfiguration.cs#L18)
```csharp title="Declaration"
public event EventHandler Changed
```
##### Event Type
`System.EventHandler`
