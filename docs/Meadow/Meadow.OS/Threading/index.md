---
layout: Meadow
title: Threading
subtitle: Using threads, Tasks, and parallel programming in Meadow.OS.
---

Parallel programming in Meadow.OS is essentially the same as any other .NET enabled platform. Meadow fully supports `System.Threading` and `System.Threading.Tasks` as well as the underlying Task Parallel Library methods.

For example code using these technologies, see the following samples in the [Meadow.Samples repo](https://github.com/WildernessLabs/Meadow.Samples):

* **[Threading](https://github.com/WildernessLabs/Meadow.Samples/tree/main/Source/Meadow%20F7/OS/Threading_Basics)**
* **[Threading.Tasks](https://github.com/WildernessLabs/Meadow.Samples/tree/main/Source/Meadow%20F7/OS/Tasks_Basics)**

## Reduce sensor polling threads

While C# makes developing code to read sensors asynchronously simple, it can be very easy to create threads for each polling sensor. On low-resource platforms like Meadow, too many threads can restrict your performance as the CPU must cycle between contexts. To help with this, Meadow provides the [`SensorService`](../../Meadow.Foundation/Working_with_Sensors/Sensor_Service/), which provides a shared sensor polling thread that can be used to read values from all polling sensors at a regular interval.
