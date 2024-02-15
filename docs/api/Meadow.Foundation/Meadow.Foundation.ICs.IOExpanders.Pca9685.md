---
uid: Meadow.Foundation.ICs.IOExpanders.Pca9685
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca9685
---

| Pca9685 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Pca9685/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Pca9685.svg?label=Meadow.Foundation.ICs.IOExpanders.Pca9685" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Pca9685" /></a> |

### Code Example

```csharp
Pca9685 pca9685;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    var i2CBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);

    pca9685 = new Pca9685(i2CBus, new Meadow.Units.Frequency(50, Meadow.Units.Frequency.UnitType.Hertz), (byte)Pca9685.Addresses.Default);
    pca9685.Initialize();

    return base.Initialize();
}

public override Task Run()
{
    var port0 = pca9685.CreatePwmPort(0, 0.05f);
    var port7 = pca9685.CreatePwmPort(7);

    port0.Start();
    port7.Start();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Samples/Pca9685_Sample)

### Wiring Example

To wire a PCA9685 to your Meadow board, connect the following:

<img src="/API_Assets/Meadow.Foundation.ICs.IOExpanders.Pca9685/Pca9685_Fritzing.png" />


# Class Pca9685
Represents PCA9685 IC

###### **Assembly**: Pca9685.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Driver/Pca9685.PwmPort.cs#L6)
```csharp title="Declaration"
public class Pca9685 : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Driver/Pca9685.cs#L17)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### i2cBus
The I2C bus connected to the pca9685
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Driver/Pca9685.cs#L52)
```csharp title="Declaration"
protected II2cBus i2cBus { get; set; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Driver/Pca9685.cs#L22)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### Initialize()
Initializes the PCA9685 IC
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Driver/Pca9685.cs#L82)
```csharp title="Declaration"
public virtual void Initialize()
```
### CreatePwmPort(byte, float)
Create a IPwmPort on the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Driver/Pca9685.cs#L103)
```csharp title="Declaration"
public virtual IPwmPort CreatePwmPort(byte portNumber, float dutyCycle = 0.5)
```

##### Returns

`Meadow.Hardware.IPwmPort`: IPwmPort
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *portNumber* | The port number (0-15) |
| `System.Single` | *dutyCycle* | The duty cycle for that port |

### SetPin(byte, bool)
Turns the specified pin On or Off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Driver/Pca9685.cs#L120)
```csharp title="Declaration"
public virtual void SetPin(byte pin, bool on)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *pin* | The pin to set |
| `System.Boolean` | *on* | true is on, false if off |

### SetPwm(byte, int, int)
Set the values for specified output pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Driver/Pca9685.cs#L144)
```csharp title="Declaration"
public virtual void SetPwm(byte pin, int on, int off)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *pin* | The pwm Pin |
| `System.Int32` | *on* | LED{X}_ON_L and LED{X}_ON_H register value |
| `System.Int32` | *off* | LED{X}_OFF_L and LED{X}_OFF_H register value |


## Implements

* `Meadow.Hardware.II2cPeripheral`
