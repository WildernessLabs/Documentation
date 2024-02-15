---
uid: Meadow.Foundation.Sensors.Hid.Bbq10Keyboard
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.BBQ10Keyboard
---

| Bbq10Keyboard | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.Bbq10Keyboard/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.Bbq10Keyboard.svg?label=Meadow.Foundation.Sensors.Hid.Bbq10Keyboard" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.Bbq10Keyboard" /></a> |

### Code Example

```csharp



```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Samples/Bbq10Keyboard_Sample)

### Wiring Example

To wire a Bbq10Keyboard to your Meadow board, connect the following:

| Bbq10Keyboard  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

# Class BBQ10Keyboard
Represents a BBQ10Keyboard Featherwing

###### **Assembly**: Bbq10Keyboard.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.Registers.cs#L3)
```csharp title="Declaration"
public class BBQ10Keyboard : II2cPeripheral, IDisposable
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`, `System.IDisposable`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L15)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L20)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### BackLight
Get or set the backlight
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L45)
```csharp title="Declaration"
public byte BackLight { get; set; }
```
### BackLight2
Get or set the 2nd backlight
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L54)
```csharp title="Declaration"
public byte BackLight2 { get; set; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L30)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### GetLastKeyEvent()
Get the last key event
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L85)
```csharp title="Declaration"
public BBQ10Keyboard.KeyEvent GetLastKeyEvent()
```

##### Returns

[Meadow.Foundation.Sensors.Hid.BBQ10Keyboard.KeyEvent](../BBQ10Keyboard.KeyEvent): The event### Reset()
Reset the keyboard
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L100)
```csharp title="Declaration"
public void Reset()
```
### ClearInerruptStatus()
Clear the interrupt status
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L109)
```csharp title="Declaration"
protected void ClearInerruptStatus()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L120)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L130)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

## Events
### OnKeyEvent
Raised when a key press is detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.BBQ10Keyboard/Driver/BBQ10Keyboard.cs#L36)
```csharp title="Declaration"
public event EventHandler<BBQ10Keyboard.KeyEvent> OnKeyEvent
```
##### Event Type
`System.EventHandler<Meadow.Foundation.Sensors.Hid.BBQ10Keyboard.KeyEvent>`

## Implements

* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
