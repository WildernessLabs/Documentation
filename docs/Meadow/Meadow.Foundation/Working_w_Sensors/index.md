---
layout: Meadow
title: Working with Sensors
subtitle: Meadow.Foundation
---

# Working with Sensors in Meadow.Foundation

## Polling and Events

Content coming soon.

<!--
The eventing API allows sensors to raise events when a particular reading change crosses a specified threshold; notifying your application only as needed.  With some sensors, they handle the change threshold checks natively and send an interrupt signal when a change large enough to raise an interrupt is detected.  Most sensors, however, are polled by Meadow.Foundation in the background, and when a change is significant enough, an event is raised. 

Consider the following example, which listens for temperature changes from an HIH6130 combined temperature and humidity sensor:

```csharp
using Meadow
using Meadow.Foundation.Sensors.Atmospheric;
using System.Threading;

namespace HIH6130InterruptSample
{
    public class Program
    {
        public static void Main()
        {
            //  Create a new HIH6130 and set the temperature change 
            // threshold to half a degree.
            var hih6130 = new HIH6130(
               temperatureChangeNotificationThreshold: 0.5F);

            //  Hook up the interrupt handler.
            hih6130.TemperatureChanged += (s, e) =>
            {
                Debug.Print("Temperature changed: " + 
                   e.CurrentValue.ToString());
            };

            Thread.Sleep(Timeout.Infinite);
        }
    }
}
```

In the constructor, we specify the change notification threshold for temperature as `0.5º Celsius`. The `TemperatureChanged` event will then be raised if the sensor detects a change of `0.5º` since the last event. 

### Controlling the Polling Frequency

Most sensors are polled every 100 milliseconds by default. However, for those sensors that Meadow.Foundation polls, you can specify how often they are read (polled/updated) via the `updateInterval` constructor parameter.  For example, the following code instantiates a new HIH6130, but sets the `updateInterval` to `10000` milliseconds, or 10 seconds:

```csharp
var hih6130 = new HIH6130(
    temperatureChangeNotificationThreshold: 0.5F, updateInterval: 10000);
```

In between updates, the thread that polls the sensor is put to sleep, allowing the CPU to go into a power-saving mode, if no other processing is happening; therefore, a lower polling frequency can greatly affect power usage, and should be taken into consideration when powering from a limited current source such as a battery.
-->

## [Next - Unified GPIO Architecture](/Meadow/Meadow.Foundation/Unified_GPIO_Arch)