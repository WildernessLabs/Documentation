---
layout: Meadow
title: Working with Sensors
subtitle: Reading and getting updates from sensors in Meadow.Foundation.
---


# Intro

Meadow.Foundation extends the underlying [events and IObservable](Meadow/Meadow_Basics/Events_and_IObservable/) pattern found in Meadow.Core to sensors, providing a simple, yet powerful way to read, poll, and filter input from sensors automatically.

At a high level, the sensor drivers in Meadow.Foundation provide three important methods to get sensor data:

 * **`Read()`** - Convenience method for one-off, or occasional reads, which returns the sensor read value directly to the caller.
 * **`StartUpdating()`** - Starts up a sensor polling thread for automatic change notifications and events.
 * **`StopUpdating()`** - Stops the sensor polling thread, and associated events and notifications.

## Automatic Oversampling

Because sensors are generally reading, or _sampling_, input conditions from the physical world, they're subject to environment _noise_, which causes their values to fluctuate from the actual value that they're sampling:

![](/Common_Files/Sensor_Noise.svg)

Generally, there are two approaches to remove or mitigate this noise; either in hardware with a [filtering circuit](https://www.arrow.com/en/research-and-events/articles/using-capacitors-to-filter-electrical-noise), or in software by _oversampling_.

### Software Oversmapling

Oversampling means to take multiple readings (samples), and then average their values to get a value that more closely matches the real-world conditions:

![](/Common_Files/Sensor_Sampling.svg)

Nearly all sensor drivers in Meadow.Foundation have support for automatic oversampling built into them, and are generally controlled by the following parameters:

 * **`sampleCount`** - Number of samples to take in any given sensor reading.
 * **`sampleIntervalDuration`** - The time, in milliseconds, between samples.

Additionally, if automatic polling and notifications are used via the `StartSampling()` method, a `standbyDuration` parameter is available that specifies how long to wait, in milliseconds, in between oversampled readings.

## Occasional Sensor Reading

The simplest way to read a value from a sensor is to call `Read()`, which is an `async` call that will automatically oversample the sensor and return the value. It also saves the reading for later access on the appropriate property. For instance, the following code does a one-off read from an analog temperature sensor:

```csharp
AnalogTemperature analogTemperature = new AnalogTemperature
(
    device: Device,
    analogPin: Device.Pins.A00,
    sensorType: AnalogTemperature.KnownSensorType.LM35
);

var temp = await analogTemperature.Read();
```

Later on, that value can be accessed via the `Temperature` property:

```csharp
Console.WriteLine($"Last read temp: {analogTemperature.Temperature}ºC");
```

### Recommended Use

This method is recommended for when you need an occasional reading, or want to manually control when the sensor is read.

## Automatic Sensor Polling

Sensors can also be setup to provide continuous readings, and offer multiple ways to consume the reading information from them. To set up continuous readings, you call `StartUpdating()` which spins up a thread to continuously poll (sample) and feed that data to either traditional event subscribers or `IObservable` subscribers.

The event pattern provides a "firehose" model, in which an event is raised every time the sensor is read, whereas the `IObservable` pattern enables advanced filtering to only be notified when the change meets a threshold that you define by passing in a filter via a predicate statement.

### With Classical .NET Events

To setup automatic polling with classical .NET events, you can subscribe to the `Updated` event and call `StartUpdating()`. For instance, the following sample code prints out the current temperature at a regular interval:

```csharp
AnalogTemperature analogTemperature = new AnalogTemperature
(
    device: Device,
    analogPin: Device.Pins.A00,
    sensorType: AnalogTemperature.KnownSensorType.LM35
);

analogTemperature.Updated += (s, e) => {
	Console.WriteLine($"Temperature: {e.Conditions.Temperature)}";
}

analogTemperature.StartUpdating();
```

### With FilterableObservable and IObservable

For a more powerful and composeable approach, you can use the same [IObservable/Reactive pattern](/Meadow/Meadow_Basics/Events_and_IObservable/) that the underling ports use. For instance, the following code creates a `FilterableObservable` handler that subscribes to the changes from an analog temperature sensor, but automatically filters so that the application is only notified when the temperature changes by at least `1ºC`:

```csharp
AnalogTemperature analogTemperature = new AnalogTemperature
(
    device: Device,
    analogPin: Device.Pins.A00,
    sensorType: AnalogTemperature.KnownSensorType.LM35
);

analogTemperature.Subscribe(new FilterableObserver<AtmosphericConditionChangeResult>, AtmosphericConditions>(
    h => {
        Console.WriteLine($"Temp changed by a degree; new: {h.New.Temperature}, old: {h.Old.Temperature}");
    },
    e => {
        return (Math.Abs(e.Delta.Temperature) > 1);
    }
    ));

analogTemperature.StartUpdating();
```

In the case above, a filter expression, or _predicate_, that tests for a particular condition is passed in to the `FilterableObservable` constructor, which is used to test whether the change satisfies a particular condition. Any expression that evaluates to a `boolean` (`true`/`false`), can be used. So for instance, you could get notified when the temperature changes by at least `3%` using the following predicate expression:

```csharp
return (Math.Abs(e.Delta.Temperature / e.Old.Temperature) > 0.03);
```

Or you could get notified if the temperature went _down_ by `1ºC`:

```csharp
return (e.Delta.Temperature <= -1);
```

### Advantage and Recommended Use

The advantage of this approach is that it will automatically poll the sensor in the background without having to manually manage the lifecycle. In between updates, the thread that polls the sensor is put to sleep, allowing the CPU to go into a power-saving mode, if no other processing is happening; therefore, a lower polling frequency can greatly affect power usage, and should be taken into consideration when powering from a limited current source such as a battery.

Because there is also a `StopUpdating()` method, you can still manually spin up and spin down the polling thread for periods in which you know that the sensor readings are not needed.

And with the `FilterableObservable`, you can create filters to only get notified when needed, rather than having to manually filter all events.

# [Next - Unified GPIO](/Meadow/Meadow.Foundation/Unified_GPIO_Arch/)

