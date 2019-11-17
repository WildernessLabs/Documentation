---
layout: Netduino
title: Threading
subtitle: Doing asynchronous work in the .NET MicroFramework
---

## Intro

Though the .NET MicroFramework runs on a Microcontroller (MCU), it has .NET's robust threading system that allows you to execute code in parallel. By default, it does this by allotting each thread a 20ms time slice in which to do its work, and then moves on to the next thread, allowing it to execute for up to 20ms. When all threads are either finished, or are asleep, the MCU then goes into a power-saving sleep mode in which hardly and power is used.

And even though it lacks the .NET 4.0's `Task` class, threads are still easy to use, and are an important tool in connected things applications. Furthermore, most threading requirements in NETMF applications are fairly simple.

## Starting and Stopping Threads

Starting a thread is easy to do. And many times, a thread is spun up to do some work, whereby it completes the work, and then exits, as there is no more code to run. For example, the following code does just that:

```csharp
var th = new Thread(() => {
    while (this._running)
    {
        // do something
    }
});
th.Start();
```

### Stopping a Thread

However, many times, you need a thread to run continuously until some state has changed, and the thread needs to be stopped. For instance, you might have a process, like heating up a cup of coffee, that needs monitoring while a particular condition is met, such as the appliance is "on."

For this use case, rather than calling `Thread.Abort()` (which will likely throw an exception), it's much better to test for a boolean condition in the thread loop. For example, the following code, pulled from the [Netduino.Foundation SoftPWM class](https://github.com/WildernessLabs/Netduino.Foundation/blob/master/Source/Netduino.Foundation/Generators/SoftPWM.cs), which continuously generates a PWM signal, illustrates how to create a cancellable thread in the .NET MicroFramework.

```csharp
protected Thread _th = null;

public void Start()
{
    this._running = true;

    // create a new thread that actually writes the pwm
    // to the output port
    _th = new Thread(() => {
        while (this._running)
        {
            OutputPort.Write(true);
            Thread.Sleep(_onTimeMilliseconds);
            OutputPort.Write(false);
            Thread.Sleep(_offTimeMilliseconds);
        }
    });
    _th.Start();
}

public void Stop()
{
    // setting this will wrap up the thread
    this._running = false;

    ...
}
```

In this case, the thread work is in a `while()` loop that checks the status of the `boolean` `_running` variable. As long as that's `true`, the loop will continue. Stopping that thread is then as easy as setting `_running` to `false`, as show in the `Stop()` method.

## Further Reading

 * [Threads and Thread Priorities in NETMF](https://blogs.msdn.microsoft.com/netmfteam/2011/01/17/threads-and-thread-priorities-in-netmf/) - An in depth look at how threads work in the .NET MF and what effect setting their priorities has.
