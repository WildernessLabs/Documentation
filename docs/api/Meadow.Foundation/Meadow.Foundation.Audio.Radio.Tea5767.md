---
uid: Meadow.Foundation.Audio.Radio.Tea5767
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Radio.Tea5767
---

| Tea5767 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Audio.Radio.Tea5767/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Audio.Radio.Tea5767.svg?label=Meadow.Foundation.Audio.Radio.Tea5767" alt="NuGet Gallery for Meadow.Foundation.Audio.Radio.Tea5767" /></a> |

The **TEA5767** FM module is based on the TEA5767GH which is a single-chip, electronically tuned, FM stereo radio for low-voltage applications with fully integrated Intermediate Frequency (IF) selectivity and demodulation. 

The TEA5767 is controlled via I2C. It comes with two 1/4" jacks, one for connection to a headphone/speaker and one to connect an antenna (often sold with the module).

![TEA5767 FM module](/API_Assets/Meadow.Foundation.Audio.Radio.Tea5767/TEA5767.png)

### Code Example

```csharp
Tea5767 radio;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    radio = new Tea5767(Device.CreateI2cBus());

    return Task.CompletedTask;
}

public async override Task Run()
{
    //scan through available stations
    for (int i = 0; i < 8; i++)
    {
        await Task.Delay(1000);

        radio.SearchNextSilent();

        Resolver.Log.Info($"Current frequency: {radio.GetFrequency()}");
    }

    //set a known station
    radio.SelectFrequency(new Frequency(94.5, Frequency.UnitType.Megahertz));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Samples/Tea5767_Sample)

### Wiring Example

To wire a TEA5767 to your Meadow board, connect the following:

| TEA5767 | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

![Wiring a Tea5767 to a Meadow F7](/API_Assets/Meadow.Foundation.Audio.Radio.Tea5767/TEA5767_Fritzing.png)

# Class Tea5767
Represents a TEA5767 radio

###### **Assembly**: Tea5767.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.Enums.cs#L3)
```csharp title="Declaration"
public class Tea5767 : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### IsMuted
Is the audio muted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L26)
```csharp title="Declaration"
public bool IsMuted { get; set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L31)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L17)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### Mute()
Mute audio if not muted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L127)
```csharp title="Declaration"
public void Mute()
```
### SelectFrequency(Frequency)
Select radio frequency
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L155)
```csharp title="Declaration"
public void SelectFrequency(Frequency frequency)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Frequency` | *frequency* | the frequency |

### GetFrequency()
Get the current radio frequency
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L171)
```csharp title="Declaration"
public Frequency GetFrequency()
```

##### Returns

`Meadow.Units.Frequency`
### SearchNextSilent()
Search to next station and mute while seeking
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L241)
```csharp title="Declaration"
public bool SearchNextSilent()
```

##### Returns

`System.Boolean`
### SearchNext()
Search to next station
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L253)
```csharp title="Declaration"
public bool SearchNext()
```

##### Returns

`System.Boolean`
### SearchFromBeginningMuted()
Start searching for station from lowest frequency (87Mhz)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L288)
```csharp title="Declaration"
public bool SearchFromBeginningMuted()
```

##### Returns

`System.Boolean`: true if station found### SearchFromEndMuted()
Start searching for station from highest frequency (108Mhz)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L303)
```csharp title="Declaration"
public bool SearchFromEndMuted()
```

##### Returns

`System.Boolean`
### StartSearchFromBeginning()
Start searching for station from lowest frequency (87Mhz)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L318)
```csharp title="Declaration"
public bool StartSearchFromBeginning()
```

##### Returns

`System.Boolean`: true if station found### StartSearchFromEnd()
Start searching for station from highest frequency (108Mhz)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L328)
```csharp title="Declaration"
public bool StartSearchFromEnd()
```

##### Returns

`System.Boolean`
### GetSignalLevel()
Get Signal Level
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L344)
```csharp title="Declaration"
public byte GetSignalLevel()
```

##### Returns

`System.Byte`: level as a byte (0-255)### IsStereo()
Is the current station stereo
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L357)
```csharp title="Declaration"
public bool IsStereo()
```

##### Returns

`System.Boolean`
### IsReady()
Is the radio ready for operation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L367)
```csharp title="Declaration"
public bool IsReady()
```

##### Returns

`System.Boolean`
### IsSearchUp()
Is search mode up
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L383)
```csharp title="Declaration"
public bool IsSearchUp()
```

##### Returns

`System.Boolean`
### IsSearchDown()
Is search mode down
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L392)
```csharp title="Declaration"
public bool IsSearchDown()
```

##### Returns

`System.Boolean`
### IsStandby()
Is the radio in standby mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L401)
```csharp title="Declaration"
public bool IsStandby()
```

##### Returns

`System.Boolean`
### EnableStereo(bool)
Enable stereo if set to mono
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L411)
```csharp title="Declaration"
public void EnableStereo(bool enable)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *enable* |

### SetSoftMuteOn()
Enable soft mute
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L427)
```csharp title="Declaration"
public void SetSoftMuteOn()
```
### SetSoftMuteOff()
Turn soft mute off if enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L436)
```csharp title="Declaration"
public void SetSoftMuteOff()
```
### MuteRight()
Mute the right channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L445)
```csharp title="Declaration"
public void MuteRight()
```
### UnmuteRight()
Unmute the right channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L454)
```csharp title="Declaration"
public void UnmuteRight()
```
### MuteLeft()
Mute the left channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L463)
```csharp title="Declaration"
public void MuteLeft()
```
### UnmuteLeft()
Unmute the left channel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L472)
```csharp title="Declaration"
public void UnmuteLeft()
```
### EnableStandby(bool)
Enable standby mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L482)
```csharp title="Declaration"
public void EnableStandby(bool enable)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *enable* |

### SetHighCutControlOn()
Enable high cut control
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L498)
```csharp title="Declaration"
public void SetHighCutControlOn()
```
### SetHighCutControlOff()
Disable high cut control
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L507)
```csharp title="Declaration"
public void SetHighCutControlOff()
```
### SetStereoNoiseCancellingOn()
Enable stereo noise canceling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L516)
```csharp title="Declaration"
public void SetStereoNoiseCancellingOn()
```
### SetStereoNoiseCancellingOff()
Disable stereo noise canceling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Driver/Tea5767.cs#L525)
```csharp title="Declaration"
public void SetStereoNoiseCancellingOff()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
