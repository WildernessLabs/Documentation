---
title: Class FtdiExpander.PinDefinitions
sidebar_label: FtdiExpander.PinDefinitions
description: Defines the pin definitions for the Ft232h IC.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/FtdiExpander.PinDefinitions
---
# Class FtdiExpander.PinDefinitions
Defines the pin definitions for the Ft232h IC.

###### **Assembly**: Ft2xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L15)
```csharp title="Declaration"
public class FtdiExpander.PinDefinitions : IPinDefinitions, IEnumerable<IPin>, IEnumerable
```
**Implements:**  
`Meadow.Hardware.IPinDefinitions`, `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`, `System.Collections.IEnumerable`

## Properties
### AllPins
Collection of all pins.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L27)
```csharp title="Declaration"
public IList<IPin> AllPins { get; }
```
### Controller
The pin controller
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L32)
```csharp title="Declaration"
public IPinController? Controller { get; set; }
```
### SPI_SCK
Gets the IPin representing the SPI clock (SCK) pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L48)
```csharp title="Declaration"
public IPin SPI_SCK { get; }
```
### SPI_COPI
Gets the IPin representing the SPI data out (COPI) pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L53)
```csharp title="Declaration"
public IPin SPI_COPI { get; }
```
### SPI_CIPO
Gets the IPin representing the SPI data in (CIPO) pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L58)
```csharp title="Declaration"
public IPin SPI_CIPO { get; }
```
### SPI_CS0
Gets the IPin representing the SPI chip select (CS0) pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L63)
```csharp title="Declaration"
public IPin SPI_CS0 { get; }
```
### I2C_SCL
Gets the IPin representing the I2C clock (SCL) pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L68)
```csharp title="Declaration"
public IPin I2C_SCL { get; }
```
### I2C_SDA
Gets the IPin representing the I2C data (SDA) pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L73)
```csharp title="Declaration"
public IPin I2C_SDA { get; }
```
### D0
Pin D0 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L79)
```csharp title="Declaration"
public IPin D0 { get; }
```
### D1
Pin D1 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L92)
```csharp title="Declaration"
public IPin D1 { get; }
```
### D2
Pin D2 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L105)
```csharp title="Declaration"
public IPin D2 { get; }
```
### D3
Pin D3 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L117)
```csharp title="Declaration"
public IPin D3 { get; }
```
### D4
Pin D4 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L129)
```csharp title="Declaration"
public IPin D4 { get; }
```
### D5
Pin D5 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L141)
```csharp title="Declaration"
public IPin D5 { get; }
```
### D6
Pin D6 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L153)
```csharp title="Declaration"
public IPin D6 { get; }
```
### D7
Pin D7 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L165)
```csharp title="Declaration"
public IPin D7 { get; }
```
### SPI_COPI_D1
Pin SPI_COPI_D1 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L177)
```csharp title="Declaration"
public IPin SPI_COPI_D1 { get; }
```
### C0
Pin C0 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L188)
```csharp title="Declaration"
public IPin C0 { get; }
```
### C1
Pin C1 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L200)
```csharp title="Declaration"
public IPin C1 { get; }
```
### C2
Pin C2 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L212)
```csharp title="Declaration"
public IPin C2 { get; }
```
### C3
Pin C3 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L224)
```csharp title="Declaration"
public IPin C3 { get; }
```
### C4
Pin C4 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L236)
```csharp title="Declaration"
public IPin C4 { get; }
```
### C5
Pin C5 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L248)
```csharp title="Declaration"
public IPin C5 { get; }
```
### C6
Pin C6 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L260)
```csharp title="Declaration"
public IPin C6 { get; }
```
### C7
Pin C7 definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L272)
```csharp title="Declaration"
public IPin C7 { get; }
```
## Methods
### GetEnumerator()
Gets an enumerator for all the pins.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L20)
```csharp title="Declaration"
public IEnumerator<IPin> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Hardware.IPin>`
### InitAllPins()
Initializes all Ft23xxx pins.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.PinDefinitions.cs#L284)
```csharp title="Declaration"
protected void InitAllPins()
```

## Implements

* `Meadow.Hardware.IPinDefinitions`
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`
* `System.Collections.IEnumerable`
