---
uid: Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA
remarks: *content
---

| IDxxLA        |                                                                                                                                                                                                                                                                                                                  |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" />                                                                                                                                                                                              |
| Source code   | [GitHub]() *TODO (not in master yet)                                                                                                                                                                                                                                                                             |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.___/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA.svg?label=Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA" style="width: auto; height: -webkit-fill-available;" /></a> *TODO (not in nuget yet) |

The **ID-Innovations LA** series is a 125KHz RFID reader controlled via serial connection.
There are currently 3 variations available: The ID-12LA, the ID-20LA which has a larger antenna and the ID-2LA/ID-3LA, which is the smallest but requires an external antenna.


### Purchasing

The LA series is available from the following suppliers:

* [SparkFun ID-12LA](https://www.sparkfun.com/products/11827)
* [SparkFun ID-20LA](https://www.sparkfun.com/products/11828)
* [SparkFun ID-3LA](https://www.sparkfun.com/products/11862)

To use the RFID readers in your designs, the following breakout boards are available:

* [SparkFun RFID USB Reader](https://www.sparkfun.com/products/9963) has optional breakout pin header
* [SparkFun RFID Reader Breakout](https://www.sparkfun.com/products/13030)
  * Recommend purchasing [2x 2mm sockets](https://www.sparkfun.com/products/8272) to reduce the chance of damaging the RFID readers when soldering

### Code Example

The `IDxxLA` can be consumed though an event or by subscribing as an observer. Both approaches are equally effective and have slightly different usage patterns. It is also possible to read the `LastRead` property at any time get the last RFID successfully scanned by the device.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Radio.Rfid.IDxxLA/Samples/) 

#### Event Approach

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    private readonly IRfidReader _rfidReader;

    public MeadowApp()
    {
        _rfidReader = new IDxxLA(Device, Device.SerialPortNames.Com1);
        // subscribe to event
        _rfidReader.RfidRead += RfidReaderOnTagRead;
        _rfidReader.StartReading();
    }

    private void RfidReaderOnTagRead(object sender, RfidReadResult e)
    {
        // event triggers after a complete read, even if unsuccessful
        // e.Status returns whether the read was successful or not
        if (e.Status == RfidValidationStatus.Ok)
        {
            Console.WriteLine($"Tag value is {DebugInformation.Hexadecimal(e.RfidTag)}");
            return;
        }

        Console.WriteLine($"Error {e.Status}");
    }
}
```



#### Observable approach

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    private readonly IRfidReader _rfidReader;

    public MeadowApp()
    {
        _rfidReader = new IDxxLA(Device, Device.SerialPortNames.Com1);
        // subscribe to IObservable
        _rfidReader.Subscribe(new RfidObserver());
        _rfidReader.StartReading();
    }

    private class RfidObserver : IObserver<byte[]>
    {
        // OnCompleted will only be called if you dispose of the reader
        public void OnCompleted()
        {
            Console.WriteLine("RfidReader has terminated, no more events will be emitted.");
        }

        // 'error' can optionally be cast to RfidValidationException
        public void OnError(Exception error)
        {
            Console.WriteLine(error);
        }

        // Only called on successful reads.
        public void OnNext(byte[] value)
        {
            Console.WriteLine($"Tag value is {DebugInformation.Hexadecimal(value)}");
        }
    }
}
```

### Wiring Example

To wire an LA series RFID reader to your Meadow board, connect the following depending on the breakout board used:

| Meadow Pin | RFID Reader Breakout | RFID USB Reader + Breakout Header |
|------------|----------------------|-----------------------------------|
| `5V`       | `VCC`                | `VCC`                             |
| `GND`      | `GND`, `FORM`        | `GND`, `GND` (there are 2)        |
| `D13`      | `D0`                 | `TX`                              |


RFID Reader Breakout diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA/IDxxLA-RFID Reader Breakout_bb.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

RFID USB Reader + Breakout Header diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA/IDxxLA-RFID USB Reader_bb.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />


Other wiring notes:

* If you are using an ID-2LA/ID-3LA, you will need to connect an antenna to the `AN1,AN2`/`ANT,ANT` pins (orange wires in above diagrams).
* For the reader breakout it is important to connect `FORM` to `GND`, as this tells the reader to use the ASCII format. Other formats are not supported.
* For the reader breakout a LED can be connected to `READ` which can be used as an indication of a card being read. This is completely optional. The LED and a 330Ω resistor is included in the above diagram.
* All the LA series RFID readers are suitable for 5V, however should also work fine with 3V3.
