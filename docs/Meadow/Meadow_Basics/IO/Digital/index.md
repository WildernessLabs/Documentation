---
layout: Meadow
title: Digital IO
subtitle: Meadow Basics
---

# Digital IO

Digital IO is often referred to as _General Purpose, Input/Output_ or GPIO.

Digital ports can be set to be `HIGH` (powered at `3.3V`), or `LOW` (grounded at `0V`) which correspond to digital `1` and `0`, respectively. 

## Digital Outputs

Setting the state of a Digital Output is done using an implementation of the `IDigitalOutputPort` interface.  Using the static `Device` property of your application's entry class `App<D,A>` is the simplest way to create an instance.

For example, if you wanted to be able to control the state of the D05 pin on the F7 Meadow, you could use the following code to create an instance of the IDigitalOutputPort with an initial state of `LOW`:

```csharp
var output = Device.CreateDigitalOutputPort(
    Device.Pins.D05, false);
```

You could then assert a state on the pin to `LOW` or `HIGH` using one of the following:

```csharp
output.State = false;   // assert LOW
output.State = true;    // assert HIGH
```

## Digital Inputs

Reading the state of a Digital Input is done using an implementation of the `IDigitalInputPort` interface.  Using the static `Device` property of your application's entry class `App<D,A>` is the simplest way to create an instance.

For example, if you wanted to be able to read the state of the D03 pin on the F7 Meadow, you could use the following code to create an instance of an IDigitalInputPort:

```csharp
var input = Device.CreateDigitalInputPort(
    Device.Pins.D03);
```

Optional constructor parameters allow you to set the internal resistor mode, interrupt mode, debounce and glitch filter behavior.

To poll the state of the input, you read the `State` property:

```csharp
var currentState = input.State;
```

### Interrupts

Interrupts allow your application to be notified of the change of state of a Digital Input without having to poll the value. Enabling interrupts requires two things from your application: setting the `InterruptMode` of the `IDigitalInputPort` and then subscribing to notifications either via the `Changed` event, or using the `IObservable` pattern. 

#### Example

For example, if you wanted your application to get notified when the `D03` input pin changed from `LOW` to `HIGH` (a rising interrupt), you could use the following code:

```csharp
// create the InputPort with interrupts enabled
var input = Device.CreateDigitalInputPort(
    Device.Pins.D03,
    InterruptMode.EdgeRising);

// add an event handler
input.Changed += (s, e) =>
{
    Console.WriteLine($"interrupt occurred");
};
```

For more information, check out the [Events and IObservable guide](/Meadow/Meadow_Basics/Events_and_IObservable/).

#### Interrupt Groups

One thing to bear in mind when creating interrupts on multiple pins is that input pins share _interrupt groups_, in which only one input within any given interrupt group can be enabled as an interrupt. So when choosing pins to use as interrupts, refer to the pinout diagram and make sure that for each interrupt you want to use, they're in a unique interrupt group:

![Meadow pinout diagram showing pins used for multiple functions](/Common_Files/Meadow_F7_Micro_Pinout.svg){:standalone}


## Timing

**NOTE FROM THE WILDERNESS LABS TEAM:**
 
These timing values are measurements from Beta 3.6. We recognize that they are not fast enough for all applications, but they are adequate for many. Keep in mind that these values are a significant improvement from earlier Betas and the expectation is for them to improve drastically as we move toward release, so if they don't meet your needs feel free to contact us with your requirements to find our when to expect a release that will meet your needs.

An important consideration for most applications is the minimum timing capabilities of the platform on which you're running.

Keep in mind that Meadow is running .NET and is therefore not a deterministic, real-time system.  These values are representative numbers, but system behaviors like memory allocation and garbage collection could occasionally yield much larger values.

Some basic timing measurements and expectations are as follows:

### Minimum Output Transition Time: ~4ms

How fast can the platform cycle a simple digital output?  The following test, measured with an oscilloscope, shows that the line has a 50% duty cycle, with each `HIGH` and `LOW` state maintained for approximately 4.1ms:

```csharp
var d04 = Device.CreateDigitalOutputPort(Device.Pins.D04);

while (true)
{
    _d04.State = true;
    _d04.State = false;
}
```

### Minimum Interrupt Service Time: ~50ms

Given an incoming interrupt, how fact can the platform react and execute some handler?  The following test, measured with an oscilloscope, shows that the time from the rising input edge to the rising output edge to be approximately 50ms:

```csharp
var input = Device.CreateDigitalInputPort(
    Device.Pins.D03,
    InterruptMode.EdgeRising);
            
var output = Device.CreateDigitalOutputPort(
    Device.Pins.D05, false);

input.Changed += async (s, o) =>
{
    output.State = true;
    await Task.Delay(1000);
    output.State = false;
    Console.WriteLine($"click");
};
```

**IMPORTANT NOTE:**

Interrupt debounce behavior currently (Beta 3.6) can be confusing.  The debounce is currently being done in the managed code of the `DigitalInputPort` and is therefore subject to the performance limitations of interpreted code execution.  A good example is this:  

Assume you have a `DigitalInputPort` with a debounce duration of 10ms.  Now assume you get two interrupts 10us (not ms) apart.  

On the surface, you'd expect your application to only receive one interrupt as the debounce duration is much larger than the time between interrupts, however it is very likely that your application will receive two interrupt events.

The reason for this is that the underlying OS is detecting both interrupts and sending them upstream to the managed code, but the `DigitalInputPort` itself is executing the handling of those interrupts much slower, so its measurement between handling the events from the OS is actually greater than the 10ms debounce duration.

We will be addressing this behavior in a future release, but for safety and sanity, applications should take this behavior into account.  We recommend a debounce of at least 50ms to minimize these unwanted interrupts.


## [Pulse-Width-Modulation PWM](/Meadow/Meadow_Basics/IO/Digital/PWM/)

Digital output ports can be used to generate a _Pulse-Width-Modulation_ (PWM) signal, which approximates an intermediate voltage between `LOW` or `HIGH` by switching between ON and OFF very quickly: 

![](/Meadow/Meadow_Basics/IO/Digital/PWM/PWM_Signal.svg){:standalone}

PWM signals are frequently used to control the brightness of LEDs, as well as serve as the control signal for precision motors such as servos and stepper motors.

## [Communication Protocols](/Meadow/Meadow_Basics/IO/Digital/Protocols/)

Digital IO also includes built-in support for a host of different types of common digital [communication protocols](/Meadow/Meadow_Basics/IO/Digital/Protocols/) including:

* **[I2C](/Meadow/Meadow_Basics/IO/Digital/Protocols/I2C)** 
* **[SPI](/Meadow/Meadow_Basics/IO/Digital/Protocols/SPI)** (Serial Peripheral Interface)
* **[UART](/Meadow/Meadow_Basics/IO/Digital/Protocols/UART)** (Serial) 
* **[CAN](/Meadow/Meadow_Basics/IO/Digital/Protocols/CAN)** 
* **[I2S](/Meadow/Meadow_Basics/IO/Digital/Protocols/I2S)** (Integrated Inter-IC Sound Bus)

