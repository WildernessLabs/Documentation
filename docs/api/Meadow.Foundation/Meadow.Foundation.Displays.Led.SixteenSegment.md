---
uid: Meadow.Foundation.Displays.Led.SixteenSegment
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.SixteenSegment
---

| SixteenSegment | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Led.SixteenSegment/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Led.SixteenSegment.svg?label=Meadow.Foundation.Displays.Led.SixteenSegment" alt="NuGet Gallery for Meadow.Foundation.Displays.Led.SixteenSegment" /></a> |

### Code Example

```csharp
SixteenSegment sixteenSegment;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sixteenSegment = new SixteenSegment
    (
        portA: Device.CreateDigitalOutputPort(Device.Pins.D00),
        portB: Device.CreateDigitalOutputPort(Device.Pins.D01),
        portC: Device.CreateDigitalOutputPort(Device.Pins.D02),
        portD: Device.CreateDigitalOutputPort(Device.Pins.D03),
        portE: Device.CreateDigitalOutputPort(Device.Pins.D04),
        portF: Device.CreateDigitalOutputPort(Device.Pins.D05),
        portG: Device.CreateDigitalOutputPort(Device.Pins.D06),
        portH: Device.CreateDigitalOutputPort(Device.Pins.D07),
        portK: Device.CreateDigitalOutputPort(Device.Pins.D08),
        portM: Device.CreateDigitalOutputPort(Device.Pins.D09),
        portN: Device.CreateDigitalOutputPort(Device.Pins.D10),
        portP: Device.CreateDigitalOutputPort(Device.Pins.D11),
        portR: Device.CreateDigitalOutputPort(Device.Pins.D12),
        portS: Device.CreateDigitalOutputPort(Device.Pins.D13),
        portT: Device.CreateDigitalOutputPort(Device.Pins.D14),
        portU: Device.CreateDigitalOutputPort(Device.Pins.D15),
        portDecimal: Device.CreateDigitalOutputPort(Device.Pins.A00),
        isCommonCathode: false
    );

    return base.Initialize();
}

public override Task Run()
{
    sixteenSegment.SetDisplay(asciiCharacter: 'Z', showDecimal: true);

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Samples/SixteenSegment_Sample)


# Class SixteenSegment
Sixteen Segment Display

###### **Assembly**: SixteenSegment.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.Enums.cs#L3)
```csharp title="Declaration"
public class SixteenSegment : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.cs#L14)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### SetDisplay(char, bool?)
Displays the specified ASCII character (from 32 to 126)
Unsupported ASCII values will be blank
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.cs#L143)
```csharp title="Declaration"
public void SetDisplay(char asciiCharacter, bool? showDecimal = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Char` | *asciiCharacter* |
| `System.Nullable<System.Boolean>` | *showDecimal* |

### IsEnabled(Segment, char)
Is a specific led segment enabled for an ASCII character
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.cs#L182)
```csharp title="Declaration"
public static bool IsEnabled(SixteenSegment.Segment segment, char asciiCharacter)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.Led.SixteenSegment.Segment](../SixteenSegment.Segment) | *segment* | The led segment |
| `System.Char` | *asciiCharacter* | The ASCII character |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.cs#L195)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.SixteenSegment/Driver/SixteenSegment.cs#L205)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IDisposable`
