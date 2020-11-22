---
layout: Meadow
title: Watchdog Timer
subtitle: Enabling and using the internal watchdog timer to reset when an application becomes unresponsive.
---

The watchdog timer is a Meadow.OS feature that enables the device to be reset if an application becomes unresponsive. 

This increases solution reliability by making sure that if the application fails or crashes, then the device is rebooted and the application can start operating again.


# Using

To use the watchdog timer, you first enable it, passing the a countdown timeout (in milliseconds) which specifies how long you have to reset the countdown before the device is reset.

Then, prior to the countdown elapsing, you must reset the countdown, to prevent the device from reseting.

## Enabling the Watchdog Timer

```csharp
// enable the watchdog for 10s
MeadowOS.WatchdogEnable(10000);
// start the thread that resets the counter
StartPettingWatchdog(9000);
```

### Reseting the Timer

```csharp
void StartPettingWatchdog(int pettingInterval)
{
    // just for good measure, let's reset the watchdog to begin with
    MeadowOS.WatchdogReset();
    // start a thread that pets it
    Thread t = new Thread(() => {
        while (true) {
            Thread.Sleep(pettingInterval);
            Console.WriteLine("Petting watchdog.");
            MeadowOS.WatchdogReset();
        }
    });
    t.Start();
}
```

