---
uid: Meadow.Foundation.Displays.Led.FourteenSegment
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.FourteenSegment
---

| FourteenSegment | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Led.FourteenSegment/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Led.FourteenSegment.svg?label=Meadow.Foundation.Displays.Led.FourteenSegment" alt="NuGet Gallery for Meadow.Foundation.Displays.Led.FourteenSegment" /></a> |

### Code Example

```csharp
FourteenSegment fourteenSegment;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    fourteenSegment = new FourteenSegment
    (
        portA: Device.CreateDigitalOutputPort(Device.Pins.D00),
        portB: Device.CreateDigitalOutputPort(Device.Pins.D01),
        portC: Device.CreateDigitalOutputPort(Device.Pins.D02),
        portD: Device.CreateDigitalOutputPort(Device.Pins.D03),
        portE: Device.CreateDigitalOutputPort(Device.Pins.D04),
        portF: Device.CreateDigitalOutputPort(Device.Pins.D05),
        portG: Device.CreateDigitalOutputPort(Device.Pins.D06),
        portG2: Device.CreateDigitalOutputPort(Device.Pins.D07),
        portH: Device.CreateDigitalOutputPort(Device.Pins.D08),
        portJ: Device.CreateDigitalOutputPort(Device.Pins.D09),
        portK: Device.CreateDigitalOutputPort(Device.Pins.D10),
        portL: Device.CreateDigitalOutputPort(Device.Pins.D11),
        portM: Device.CreateDigitalOutputPort(Device.Pins.D12),
        portN: Device.CreateDigitalOutputPort(Device.Pins.D13),
        portDecimal: Device.CreateDigitalOutputPort(Device.Pins.D14),
        isCommonCathode: false
    );

    return base.Initialize();
}

public override Task Run()
{
    fourteenSegment.SetDisplay(asciiCharacter: 'A', showDecimal: true);

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Samples/FourteenSegment_Sample)


# Class FourteenSegment
Fourteen Segment Display

###### **Assembly**: FourteenSegment.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.Enums.cs#L3)
```csharp title="Declaration"
public class FourteenSegment : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.cs#L14)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### SetDisplay(char, bool?)
Displays the specified ASCII character (from 32 to 126)
Unsupported ASCII values will be blank
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.cs#L133)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.cs#L170)
```csharp title="Declaration"
public static bool IsEnabled(FourteenSegment.Segment segment, char asciiCharacter)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.Led.FourteenSegment.Segment](./Meadow.Foundation.Displays.Led/FourteenSegment.Segment) | *segment* | The led segment |
| `System.Char` | *asciiCharacter* | The ASCII character |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.cs#L183)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Led.FourteenSegment/Driver/FourteenSegment.cs#L193)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IDisposable`
