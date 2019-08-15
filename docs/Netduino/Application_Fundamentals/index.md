---
layout: Netduino
title: Application Fundamentals
subtitle: Building .NET MicroFramework applications for Netduino.
---

## Info

Netduino a small, power-efficient computer that runs a tiny operating system. The .NET Micro Framework (abbreviated to NETMF) system is specially designed to run a single application.  It is designed to run .NET on devices with low memory profiles.

NETMF's power lies in the debugging and rapid prototyping capabilities provided by the combination of C## (or Visual Basic) and Visual Studio.

## Basic Application

One of the fundamental aspects of an application running on a microcontroller board such as Netduino, is that the application does not exit.  Normally, the microcontroller at the heart of the Netduino continually processes the data presented to it and so the application continues to run forever.

Microcontrollers are resource constrained devices, memory and processing power is usually restricted.  Often designs must also take power into consideration, especially when working with battery powered systems.

The two main patterns used by microcontroller developers are:

* While loops running forever
* Threads and interrupts

There are pros and cons to both approaches.

### While Loops

The while loop pattern is demonstrated by the following code:

```csharp
while (true)
{
    //  Check inputs.
    //  Process inputs
}
```

An application such as the above will run forever and every clock cycle will execute an instruction constantly consuming power.

The advantage of this model is that data is processed sequentially.  This is important when the application uses shared data items.  Consider an application consuming data from a serial port.  The following model could be implemented:

```csharp
while (true)
{
    CheckForNewData();
    if (DataPacketComplete)
    {
        ProcessData();
    }
}
```

`CheckForNewData` would prepare data for processing and set the flag to indicate we have data when we have a complete packet.  In this way there is no conflict between the producer (`CheckForNewData`) adding data to a buffer and the consumer (`ProcessData`) processing the data.

The simplified programming model means that the application is executing instructions continuously.  This may not matter for projects powered by mains electricity but does matter for battery powered applications.

* Pro: Simple to understand programming model.
* Con: Increased power consumption.

### Threads and Interrupts

Threads and interrupts present a more complex model as the application will need to take into consideration the non-linear execution of the application.  A typical pattern is:

```csharp
public static void Main()
{
    CreateInterruptProcessors();
    SetupAnyTimers();
    Thread.Sleep(Timeout.Infinite);
}
```

`CreateInterruptProcessors` will create the objects needed to process events such as button press, serial data input, sensor interrupts and similar events.

`SetupAnyTimers` would setup any periodic tasks, say sending data to an Azure web service once every five minutes.

The final action is to put the application to sleep.  The following puts the microcontroller into a low power state:

```csharp
Thread.Sleep(Timeout.Infinite);
```

The microcontroller will now wait for data to be generated and interrupts generated.  An interrupt or timer signal will put the microcontroller into a higher power state, processing the data generated and then returning to a low power state.  This presents an obvious advantage for battery powered applications.

The trade off is the complexity introduced by the asynchronous nature in which data can be generated and processed.  This can lead to seemingly random bugs if data production and consumption is not synchronized.  More information can be found on the NETMF blog article on [Thread Communication and Synchronization](https://blogs.msdn.microsoft.com/netmfteam/2011/02/01/thread-communication-and-synchronization/).

* Pros: Power efficient, ideal for battery powered devices.
* Cons: Application development is more complex.

## Hardware

As noted above, NETMF is designed to run on resource constrained systems.  These are often microcontrollers (at the time of writing, the Netduino family of boards are using the [STM32](http://www.st.com/en/microcontrollers/stm32-32-bit-arm-cortex-mcus.html?querycriteria=productId=SC1169) series of microcontrollers) which are low speed devices with limited memory and little or no external storage available.

NETMF also provides a method for accessing the hardware on the microcontroller.  This ranges from simple General Purpose Input Output (GPIO) pins to supporting higher level protocols such as SPI, I2C and UART.

## Further Reading

* [NETMF: Threads and Thread Priorities](https://blogs.msdn.microsoft.com/netmfteam/2011/01/17/threads-and-thread-priorities-in-netmf/)
* [NETMF: Thread Communication and Synchronisation](https://blogs.msdn.microsoft.com/netmfteam/2011/02/01/thread-communication-and-synchronization/)
* [.NET Micro Framework](NETMF)
* [SPOT namespace origin](https://en.wikipedia.org/wiki/Smart_Personal_Objects_Technology)
