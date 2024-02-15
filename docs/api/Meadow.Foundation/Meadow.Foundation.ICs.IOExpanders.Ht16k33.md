---
uid: Meadow.Foundation.ICs.IOExpanders.Ht16K33
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ht16k33
---

| Ht16k33 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Ht16k33/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Ht16k33.svg?label=Meadow.Foundation.ICs.IOExpanders.Ht16k33" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Ht16k33" /></a> |

The **HT16K33** is an LED driver and key scanner. It can be used to drive up to 128 leds and is often found pre-assembled with 14-segment led displays. The HT16K33 is controlled via I2C.

### Code Example

```csharp
Ht16k33 ht16k33;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    ht16k33 = new Ht16k33(Device.CreateI2cBus());

    return base.Initialize();
}

public override async Task Run()
{
    int index = 0;
    bool on = true;

    while (true)
    {
        ht16k33.SetLed((byte)index, on);
        ht16k33.UpdateDisplay();
        index++;

        if (index >= 128)
        {
            index = 0;
            on = !on;
        }

        await Task.Delay(100);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Samples/Ht16k33_Sample)

### Wiring Example

 To wire a TM1637 to your Meadow board, connect the following:

| TM1637  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

<img src="/API_Assets/Meadow.Foundation.ICs.IOExpanders.HT16K33/Ht16K33_Fritzing.png" />





# Class Ht16k33
Represents an Ht16k33 128 led driver and 39 key scanner

###### **Assembly**: Ht16k33.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.Enums.cs#L5)
```csharp title="Declaration"
public class Ht16k33 : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L14)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L19)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### Set14SegmentMessage(string)
Set a message on a 14-segment display array
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.14Character.cs#L12)
```csharp title="Declaration"
public void Set14SegmentMessage(string message)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *message* | The message (up to 4 characters) |

### Set14SegmentDisplay(char, int)
Set a single 14-segment display to a specific character
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.14Character.cs#L25)
```csharp title="Declaration"
public void Set14SegmentDisplay(char character, int displayIndex)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Char` | *character* | The ASCII character |
| `System.Int32` | *displayIndex* | The display index (0-3) |

### SetIsAwake(bool)
Set controller to awake / asleep
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L57)
```csharp title="Declaration"
public void SetIsAwake(bool awake)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *awake* | Awake if true |

### SetDisplayOn(bool)
Set display on or off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L68)
```csharp title="Declaration"
public void SetDisplayOn(bool isOn)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *isOn* | On if true |

### SetBlinkRate(BlinkRate)
Set display blink rate
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L79)
```csharp title="Declaration"
public void SetBlinkRate(Ht16k33.BlinkRate blinkRate)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.Ht16k33.BlinkRate](../Ht16k33.BlinkRate) | *blinkRate* | The blink rate as a byte |

### SetBrightness(Brightness)
Set display brightness
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L90)
```csharp title="Declaration"
public void SetBrightness(Ht16k33.Brightness brightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.Ht16k33.Brightness](../Ht16k33.Brightness) | *brightness* | The brightness |

### ClearDisplay()
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L100)
```csharp title="Declaration"
public void ClearDisplay()
```
### UpdateDisplay()
Refresh the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L111)
```csharp title="Declaration"
public void UpdateDisplay()
```
### SetLed(byte, bool)
Set an individual led on or off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L122)
```csharp title="Declaration"
public void SetLed(byte ledIndex, bool ledOn)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *ledIndex* | The led index |
| `System.Boolean` | *ledOn* | True for on |


##### Exceptions

`System.IndexOutOfRangeException`  
Throws if the index is out of range
### ToggleLed(byte)
Toggle an led on or off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L145)
```csharp title="Declaration"
public void ToggleLed(byte ledIndex)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *ledIndex* | The led index |

### IsLedOn(int)
Is led at index on
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Driver/Ht16k33.cs#L157)
```csharp title="Declaration"
public bool IsLedOn(int ledIndex)
```

##### Returns

`System.Boolean`: True if on
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *ledIndex* | The led index |


## Implements

* `Meadow.Hardware.II2cPeripheral`
