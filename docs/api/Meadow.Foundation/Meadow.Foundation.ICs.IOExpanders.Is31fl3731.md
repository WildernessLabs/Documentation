---
uid: Meadow.Foundation.ICs.IOExpanders.Is31fl3731
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Is31fl3731
---

| Is31fl3731 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Is31fl3731/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Is31fl3731.svg?label=Meadow.Foundation.ICs.IOExpanders.Is31fl3731" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Is31fl3731" /></a> |

### Code Example

```csharp
Is31fl3731 iS31FL3731;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    iS31FL3731 = new Is31fl3731(Device.CreateI2cBus());
    iS31FL3731.Initialize();

    return base.Initialize();
}

public override Task Run()
{
    iS31FL3731.ClearAllFrames();
    iS31FL3731.SetFrame(frame: 0);
    iS31FL3731.DisplayFrame(frame: 0);

    //Turn on all LEDs in frame
    for (byte i = 0; i <= 144; i++)
    {
        iS31FL3731.SetLedPwm(
            frame: 0,
            ledIndex: i,
            brightness: 128);

        Thread.Sleep(50);
    }

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Samples/Is31fl3731_Sample)

### Wiring Example

To wire a Is31fl3731 to your Meadow board, connect the following:

<img src="/API_Assets/Meadow.Foundation.ICs.IOExpanders.Is31fl3731/Is31fl3731_Fritzing.png" />


# Class Is31fl3731
Represents the IS31FL3731 IC
The Is31fl3731 is a compact LED driver for 144 single LEDs

###### **Assembly**: Is31fl3731.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.Enums.cs#L3)
```csharp title="Declaration"
public class Is31fl3731 : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L28)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Frame
The current frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L38)
```csharp title="Declaration"
public byte Frame { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L33)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### Initialize()
Initialize the IS31FL3731 by shutting it down, turning it back on and setting it to Picture mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L54)
```csharp title="Declaration"
public void Initialize()
```
### SetLedState(bool)
Set the LED state for all LED's in the current Frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L75)
```csharp title="Declaration"
public virtual void SetLedState(bool on)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *on* | true = on, false = off |

### SetLedState(byte, bool)
Sets the state for all LEDs for the specified frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L85)
```csharp title="Declaration"
public virtual void SetLedState(byte frame, bool on)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *frame* |  |
| `System.Boolean` | *on* | true = on, false = off |

### WriteRegister(byte, byte)
Write to the current frame register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L110)
```csharp title="Declaration"
protected virtual void WriteRegister(byte register, byte data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *register* | Register to write to |
| `System.Byte` | *data* | The data value |

### WriteRegister(byte, byte, byte)
Write a value to a register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L121)
```csharp title="Declaration"
protected virtual void WriteRegister(byte frame, byte register, byte data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *frame* | The frame |
| `System.Byte` | *register* | Register to write to |
| `System.Byte` | *data* | The data value |

### SetBlinkMode(bool, byte)
Enable/disable blink mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L133)
```csharp title="Declaration"
public virtual void SetBlinkMode(bool enabled, byte period)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enabled* | true = on, false = off |
| `System.Byte` | *period* | the blink duration |

### Clear()
Turn off all LEDs for the specified frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L151)
```csharp title="Declaration"
public virtual void Clear()
```
### Clear(byte)
Turn off all LEDs for the specified frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L160)
```csharp title="Declaration"
public virtual void Clear(byte frame)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *frame* | the frame to clear |

### ClearAllFrames()
Turn off all LEDs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L176)
```csharp title="Declaration"
public virtual void ClearAllFrames()
```
### SetLedPwm(byte, byte)
Set the PWM value for the specified LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L189)
```csharp title="Declaration"
public virtual void SetLedPwm(byte ledIndex, byte pwm)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *ledIndex* | The LED number |
| `System.Byte` | *pwm* | The pwm value 0-255 |

### SetLedPwm(byte, byte, byte)
Set the PWM value for the specified LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L200)
```csharp title="Declaration"
public virtual void SetLedPwm(byte frame, byte ledIndex, byte brightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *frame* | Frame number. 0-7 |
| `System.Byte` | *ledIndex* | The LED number. 0-144 |
| `System.Byte` | *brightness* | The pwm value 0-255 |

### DisplayFrame(byte)
Display the specified frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L216)
```csharp title="Declaration"
public virtual void DisplayFrame(byte frame)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *frame* | The frame number. 0-7 |

### SetFrame(byte)
Sets the current frame.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L228)
```csharp title="Declaration"
public virtual void SetFrame(byte frame)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *frame* | The frame number. 0-7 |

### SetBlinkFunctionOnAllLeds(bool)
Blink all LEDs for the current frame. Blink Mode muse be enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L242)
```csharp title="Declaration"
public virtual void SetBlinkFunctionOnAllLeds(bool on)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *on* | true = on, false = off |

### SetBlinkFunctionOnAllLeds(byte, bool)
Blink all the LEDs for the specified frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L252)
```csharp title="Declaration"
public virtual void SetBlinkFunctionOnAllLeds(byte frame, bool on)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *frame* | frame # |
| `System.Boolean` | *on* | true = on, false = off |

### SelectPage(byte)
Select the page/frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Is31fl3731/Driver/Is31fl3731.cs#L271)
```csharp title="Declaration"
protected virtual void SelectPage(byte page)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *page* | page/frame # |


## Implements

* `Meadow.Hardware.II2cPeripheral`
