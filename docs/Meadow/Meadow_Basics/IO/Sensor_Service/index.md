---
layout: Meadow
title: Optimize Sensor Reads with SensorService
sidebar_label: SensorService
subtitle: Reduce sensor thread usage by isolating reads to a the shared SensorService.
---

While developing code to read sensors asyncronously in C#, it can be very easy to create a large number of threads because of how simple async Task-based code is to write. On low-resource platforms like Meadow, too many threads can cause excessive CPU cycles as it switches between contexts. To help with this, Meadow provides the `SensorService` to help avoid this when you are regularly reading for several sensors every second or more.

## What does SensorService provide?

The `SensorService` provides a shared sensor reading thread that can be used to poll sensors at a regular interval. This allows you to avoid creating a new thread for each sensor, which can be resource-intensive on low-resource platforms like Meadow.

Once you have registered your polling sensors with the `SensorService`, you continue to read values from them using their respective `Read` and events. Behind the scenes, the `SensorService` will manage the polling of the sensors at the regular interval using the shared thread.

## Migrate your sensors to SensorService

When you finish initializing your desired sensor, you can register it with the `SensorService` to have it automatically polled at a regular interval. For example, if your project has an SCD-40 sensor using I2C for carbon dioxide concentration, temperature, and humidity, you can register it with the `SensorService` after you declare it using the I2C bus.

```csharp
var scd = new Scd40(I2cBus, (byte)Scd40.Addresses.Default);
Resolver.SensorService.RegisterSensor(scd);
```

This is how the various sensors are registered by default in the [Clima](https://store.wildernesslabs.co/collections/frontpage/products/clima-weather-station-kit), [Project Lab](https://store.wildernesslabs.co/collections/frontpage/products/project-lab-board), and [GNSS Sensor Tracker](https://store.wildernesslabs.co/collections/frontpage/products/gnss-sensor-tracker) boards initialize their onboard sensors.

## What sensors can use SensorService?

The `SensorService` is designed to work with sensors that implement the `IPollingSensor` interface. This interface is used to define sensors that can be polled at a regular interval, and is used by the `SensorService` to manage the polling of the sensors.

While they won't benefit from the shared sensor reading thread, you can register other sensors with the `SensorService` for discovery and management elsewhere in your code.

## SensorService polling interval requirements

For polling sensor readings, the `SensorService` requires that the polling interval be divisible by an even second. If the interval is not divisible by an even second, it will be rounded up to the nearest even second. For example, if you set the interval to 1.5 seconds, it will be rounded up to 2 seconds.
