---
layout: Meadow
title: High-Speed Analog Input
subtitle: Reading analog data quickly via analog input arrays.
---

You can [consume basic analog input using the `AnalogInputPort` class](../) with a very simple API and useful helper events, as well as using observers that can subscribe to these events and react when they are triggered. This robust API can limit you to a few samples per second, which is often sufficient for most applications, such as reading from a thermistor.

If you need to consume analog data at a much faster rate, you will want to use the `AnalogInputArray` analog input system introduced in Meadow version 1.6. You may require this level of analog data sampling for things such as monitoring power systems, reading vibration sensors, or reading analog audio inputs.

`AnalogInputArray` is a powerful class that allows for high-speed data consumption from multiple analog inputs simultaneously via direct memory access (DMA)s. It's particularly useful in scenarios where you need to monitor or process data froms multiple sensors in real-time. On an F7 Feather v2, for example, across three analog channels you might acheive 37,000 samples per second.

The tradeoff of this level of data sampling is the reduced API, trading events and observables for raw speed.

## Consume high-speed samples from multiple analog inputs

Once you set up an analog input array, you will be able to consume data samples as fast as you call the `Refresh()` method on your `AnalogInputArray` object.

Start by creating your array from your current Meadow F7 device.

```csharp
var array = Device.CreateAnalogInputArray(Device.Pins.A00, Device.Pins.A01, Device.Pins.A02);
```

Then, set up your code to read data from the array in a loop. For example, this will make 1,000 reads per loop as fast as the Meadow can execute the while loop.

```csharp
var readsPerIteration = 1000;
var a0 = new double[readsPerIteration];
var a1 = new double[readsPerIteration];
var a2 = new double[readsPerIteration];

while (true)
{
    // read 1k samples as fast as we can
    for (var i = 0; i < readsPerIteration; i++)
    {
        // tell the Array to read all of its inputs
        array.Refresh();


        // copy the Array data to a local buffer
        a0[i] = array.CurrentValues[0];
        a1[i] = array.CurrentValues[1];
        a2[i] = array.CurrentValues[2];
    }
}
```

Substitute your desired analog sensors and their respective analog Meadow pins to be able to collect high-speed readings for your own projects.
