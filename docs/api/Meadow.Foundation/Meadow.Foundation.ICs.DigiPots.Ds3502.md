---
uid: Meadow.Foundation.ICs.DigiPots.Ds3502
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Ds3502
---

| Ds3502 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.DigiPots.Ds3502/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.DigiPots.Ds3502.svg?label=Meadow.Foundation.ICs.DigiPots.Ds3502" alt="NuGet Gallery for Meadow.Foundation.ICs.DigiPots.Ds3502" /></a> |

### Code Example

```csharp
protected Ds3502 ds3502;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    ds3502 = new Ds3502(Device.CreateI2cBus(Ds3502.DefaultBusSpeed));

    return base.Initialize();
}

public override Task Run()
{
    for (byte i = 0; i < 127; i++)
    {
        ds3502.SetWiper(i);
        Resolver.Log.Info($"wiper {ds3502.GetWiper()}");

        Thread.Sleep(1000);
    }

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Samples/Ds3502_Sample)


# Class Ds3502
Represents a DS3502 digital potentiometer

###### **Assembly**: Ds3502.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Driver/Ds3502.Enums.cs#L3)
```csharp title="Declaration"
public class Ds3502 : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Driver/Ds3502.cs#L15)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### DefaultBusSpeed
Default I2C bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Driver/Ds3502.cs#L20)
```csharp title="Declaration"
public static I2cBusSpeed DefaultBusSpeed { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Driver/Ds3502.cs#L25)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### GetWiper()
Get the current wiper value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Driver/Ds3502.cs#L43)
```csharp title="Declaration"
public byte GetWiper()
```

##### Returns

`System.Byte`: the 7-bit wiper value### SetWiper(byte)
Set the wiper value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Driver/Ds3502.cs#L52)
```csharp title="Declaration"
public void SetWiper(byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | wiper value (0-127) |

### SetWiperDefault(byte)
Set the default wiper value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Ds3502/Driver/Ds3502.cs#L63)
```csharp title="Declaration"
public Task SetWiperDefault(byte value)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | wiper value (0-127) |


## Implements

* `Meadow.Hardware.II2cPeripheral`
