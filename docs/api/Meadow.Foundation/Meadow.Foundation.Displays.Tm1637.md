---
uid: Meadow.Foundation.Displays.Tm1637
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tm1637
---

| Tm1637 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Tm1637/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Tm1637.svg?label=Meadow.Foundation.Displays.Tm1637" alt="NuGet Gallery for Meadow.Foundation.Displays.Tm1637" /></a> |

The **TM1637** is a led driver and keyboard scan interface. However, this chip is almost exclusively found pre-assembled with with 4 7-segment displays.

### Purchasing

* [HALJIA 0.91 128x32 pixel OLED Display](https://www.amazon.co.uk/gp/product/B071Z18R1M/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1)

### Code Example

```csharp
Tm1637 display;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    display = new Tm1637(Device.Pins.D02, Device.Pins.D01);

    display.Brightness = 7;
    display.ScreenOn = true;

    return Task.CompletedTask;
}

public override Task Run()
{
    display.Clear();

    var chars = new Character[] { Character.A, Character.B, Character.C, Character.D };

    display.Show(chars);

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Samples/Tm1637_Sample)

### Wiring Example

 To wire a TM1637 to your Meadow board, connect the following:

| TM1637  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

![Wiring a TM1637 to a Meadow F7](/API_Assets/Meadow.Foundation.Displays.Tm1637/Tm1637_Fritzing.png)

# Class Tm1637
Represents Tm1637 segment display

###### **Assembly**: Tm1637.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L11)
```csharp title="Declaration"
public class Tm1637 : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### MAX_SEGMENTS
Max segments for a TM1637 controller
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L16)
```csharp title="Declaration"
public byte MAX_SEGMENTS { get; }
```
### SegmentOrder
Order of segments
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L21)
```csharp title="Declaration"
public byte[] SegmentOrder { get; set; }
```
### ScreenOn
Set the screen on or off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L46)
```csharp title="Declaration"
public bool ScreenOn { get; set; }
```
### Brightness
Adjust the screen brightness from 0 to 7
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L61)
```csharp title="Declaration"
public byte Brightness { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L80)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Show(ReadOnlySpan&lt;Character&gt;)
Displays a series of prebuilt characters including the dot or not
You can build your own characters with the primitives like Bottom, Top, Dot
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L254)
```csharp title="Declaration"
public void Show(ReadOnlySpan<Character> data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.ReadOnlySpan<Meadow.Foundation.Displays.Character>` | *data* | The Character to display |

### Show(byte, Character)
Displays a raw data at a specific segment position from 0 to 5
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L264)
```csharp title="Declaration"
public void Show(byte index, Character character)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *index* | The segment position from 0 to 5 |
| [Meadow.Foundation.Displays.Character](../Character) | *character* | The segment characters to display |

### Clear()
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L293)
```csharp title="Declaration"
public void Clear()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L308)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Tm1637/Driver/Tm1637.cs#L318)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IDisposable`
