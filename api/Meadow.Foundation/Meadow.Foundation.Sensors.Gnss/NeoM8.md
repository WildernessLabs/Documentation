---
title: Class NeoM8
sidebar_label: NeoM8
description: "Represents a NEO-M8 GNSS module"
---
# Class NeoM8
Represents a NEO-M8 GNSS module

###### **Assembly**: NeoM8.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.Spi.Registers.cs#L3)
```csharp title="Declaration"
public class NeoM8 : IGnssSensor, IDisposable, II2cPeripheral, ISpiPeripheral
```
**Implements:**  
`Meadow.Peripherals.Sensors.Location.Gnss.IGnssSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Hardware.ISpiPeripheral`

## Properties
### SupportedResultTypes
Supported GNSS result types
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L26)
```csharp title="Declaration"
public IGnssResult[] SupportedResultTypes { get; }
```
### PulsePerSecondPort
NeoM8 pulse per second port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L66)
```csharp title="Declaration"
public IDigitalInputPort? PulsePerSecondPort { get; }
```
### ResetPort
NeoM8 reset port
Initialize high to enable the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L72)
```csharp title="Declaration"
protected IDigitalOutputPort? ResetPort { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L77)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.I2c.cs#L14)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.Spi.cs#L14)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.Spi.cs#L19)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.Spi.cs#L28)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.Spi.cs#L33)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.I2c.cs#L19)
```csharp title="Declaration"
protected II2cCommunications? i2cComms
```
### spiComms
SPI Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.Spi.cs#L42)
```csharp title="Declaration"
protected ISpiCommunications? spiComms
```
## Methods
### Reset()
Reset the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L96)
```csharp title="Declaration"
public Task Reset()
```

##### Returns

`System.Threading.Tasks.Task`
### StartUpdating()
Start updating
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L109)
```csharp title="Declaration"
public void StartUpdating()
```
### StopUpdating()
Stop updating
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L128)
```csharp title="Declaration"
public void StopUpdating()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L205)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L215)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

## Events
### GnssDataReceived
Raised when GNSS data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L21)
```csharp title="Declaration"
public event EventHandler<IGnssResult> GnssDataReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult>`
### GgaReceived
Raised when GGA position data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L36)
```csharp title="Declaration"
public event EventHandler<GnssPositionInfo> GgaReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`
### GllReceived
Raised when GLL position data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L41)
```csharp title="Declaration"
public event EventHandler<GnssPositionInfo> GllReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`
### GsaReceived
Raised when GSA satellite data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L46)
```csharp title="Declaration"
public event EventHandler<ActiveSatellites> GsaReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.ActiveSatellites>`
### RmcReceived
Raised when RMC position data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L51)
```csharp title="Declaration"
public event EventHandler<GnssPositionInfo> RmcReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`
### VtgReceived
Raised when VTG course over ground data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L56)
```csharp title="Declaration"
public event EventHandler<CourseOverGround> VtgReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.CourseOverGround>`
### GsvReceived
Raised when GSV satellite data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Gnss.NeoM8/Driver/NeoM8.cs#L61)
```csharp title="Declaration"
public event EventHandler<SatellitesInView> GsvReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.SatellitesInView>`

## Implements

* `Meadow.Peripherals.Sensors.Location.Gnss.IGnssSensor`
* `System.IDisposable`
* `Meadow.Hardware.II2cPeripheral`
* `Meadow.Hardware.ISpiPeripheral`
