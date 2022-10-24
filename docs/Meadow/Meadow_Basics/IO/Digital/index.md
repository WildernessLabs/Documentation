---
layout: Meadow
title: Digital IO
subtitle: Reading and writing digital voltage levels on the GPIO pins.
---

Digital IO is often referred to as _General Purpose, Input/Output_ or GPIO. GPIO ports can generally be set to be `HIGH` (powered at `3.3V`), or `LOW` (grounded at `0V`) which correspond to digital `1` and `0`, respectively. Additionally, those values can be read, if their state is changed by an external source, when the ports are configured for input mode.

## Samples

For sample Meadow applications that illustrate the usage of digial ports, check out the [IO Sample apps in the Meadow.Core.Samples repo](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Core.Samples/IO).

## Digital Outputs

_Setting_ the state of a _digital output_ is done using an implementation of the `IDigitalOutputPort` interface, available on any device that implements the `IDigitOutputController` interface, which provides a method called `CreateDigitalOutputPort`:

```csharp
IDigitalOutputPort CreateDigitalOutputPort(
    IPin pin, bool initialState = false,
    OutputType initialOutputType = OutputType.PushPull);
```

* **`pin`** - The pin on the device of which to configure to be a digital output.
* **`initialState`** - A boolean value representing the default state of the port after configuring. Typically this is set to `false`.
* **`initialOutputType`** - By default this is set to `PushPull`. See the _Push-Pull vs. Open-Drain_ section below for more information.

### Digital Output Port Example

For example, if you wanted to be able to control the state of the `D05` pin on the Meadow board, you could use the following code to create an instance of the `IDigitalOutputPort` with an initial state of `LOW`:

```csharp
IDigitalOutputPort output = Device.CreateDigitalOutputPort(Device.Pins.D05, false);
```

You could then assert a state on the pin to `LOW` or `HIGH` using one of the following:

```csharp
output.State = false;   // assert LOW
output.State = true;    // assert HIGH
```

### _Push-Pull_ vs. _Open-Drain_

A digital output pin on the Meadow can be set to either `OutputType.PushPull` or `OutputType.OpenDrain`, by default, `PushPull` is used.

When in _Push-Pull_ mode the MCU can actively drive the pin either `HIGH` (`3.3V`) or `LOW` (`0V`), by utilizing two switches internally, requiring no external components.

When in _Open-Drain_ mode, the MCU port utilizes only one switch internally, and can only actively drive the port `LOW`. So an external pull-up resistor connected to the `3V3` rail is required to be able to set a logical `HIGH` level. `OpenDrain` is provided largely as a legacy feature and is hardly used anymore.

## Digital Inputs

_Reading_ the state of a _digital input_ is done using an implementation of the `IDigitalInputPort` interface, available on any device that implements the `IDigitInputController` interface, which provides a method called `CreateDigitalOutputPort`:

```csharp
IDigitalInputPort CreateDigitalInputPort(
    IPin pin,
    InterruptMode interruptMode = InterruptMode.None,
    ResistorMode resistorMode = ResistorMode.Disabled,
    double debounceDuration = 0,
    double glitchDuration = 0);
```

The three most important arguments are:

* **`pin`** - The pin on the device of which to configure to be a digital input.
* **`interruptMode`** - Whether or not the port should be configured to raise interrupt notifications, and what kind of change should trigger an interrupt.
* **`resistorMode`** - The `ResistorMode` specifying whether an external pull-up/pull-down resistor is used, or an internal pull-up/pull-down resistor should be configured for default state.

We'll examine debounce and glitch filtering in a moment.

### Digital Input Port Example

For example, if you wanted to be able to read the state of the `D03` pin on the Meadow, you could use the following code to create an instance of an `IDigitalInputPort`:

```csharp
IDigitalInputPort input = Device.CreateDigitalInputPort(Device.Pins.D03);
```

Once the port is configured, you can read the current digital value via the `State` property:

```csharp
bool currentState = input.State;
```

### Interrupts

Interrupts allow your application to be notified of the change of state of a digital input without having to poll the value. Enabling interrupts requires two things from your application: setting the `InterruptMode` of the `IDigitalInputPort` and then subscribing to notifications either via the `Changed` event, or using the `IObservable` pattern.

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

#### Debounce and Glitch Filtering

Signal _noise_ is spurious signal changes on a circuit that are induced either via normal mechanical imperfections, such as push buttons or switches, or sometimes through electromagnetic radiation. This noise can case unwanted level change notifications.

This noise typically manifests itself as spikes in the signal.

<!-- Really good use an illustration here. -->

Noise can be filtered either with a hardware circuit known as a [_low-pass filter_](https://www.electronics-tutorials.ws/filter/filter_2.html), or in software with a _glitch filter_ and/or a _debounce filter_.

Meadow.Core has built-in support for both glitch and debounce filters, and when you call `CreateDigitalInputPort()`, the last two parameters are:

* **`debounceDuration`**
* **`glitchDuration`**

To understand these settings, it helps to understand what these filters are.

##### Glitch Filter

A glitch is a spurious change _before_ an intentional state change occurs. Because noise typically manifests itself as spikes, the glitch filter specifies the minimum duration, in microseconds (µs), of an initial state change to persist before it's notified as an intentional state change, rather than a spurious one.

This filter can be used to ensure that noise doesn't trigger an in interrupt. Set to `0` if no glitch filter is desired.

##### Debounce Filter

A _bounce_ gets it's name from mechanical switches (like the common push button/tactile switch), and happens _after_ an intentional state change, like the pushing of a button, in which an actual, mechanical _bounce_ might cause the signal to change momentarily. The _debounce filter_ then specifies the duration, in microseconds (µs), of the time to ignore state changes after a state change has occurred.

This filter can be used to prevent unwanted state changes due to noise. Set to `0` if no debounce filter is desired.

#### Interrupt Groups

One thing to bear in mind when creating interrupts on multiple pins is that input pins share _interrupt groups_, in which only one input within any given interrupt group can be enabled as an interrupt. So when choosing pins to use as interrupts, refer to the pinout diagram and make sure that for each interrupt you want to use, they're in a unique interrupt group:

##### Meadow F7v2 Feather Pinout

![Meadow F7v2 pinout diagram showing pins used for multiple functions](/Common_Files/Meadow_F7v2_Micro_Pinout.svg){:standalone}

##### Meadow F7v1 Feather Pinout

![Meadow F7v1 pinout diagram showing pins used for multiple functions](/Common_Files/Meadow_F7_Micro_Pinout.svg){:standalone}

<!--
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
-->

## [Pulse-Width-Modulation PWM](/Meadow/Meadow_Basics/IO/Digital/PWM/)

Digital output ports can be used to generate a _Pulse-Width-Modulation_ (PWM) signal, which approximates an intermediate voltage between `LOW` or `HIGH` by switching between ON and OFF very quickly: 

![Illustration of a PWM signal changing between 0V and 3.3V at regular intervals](/Meadow/Meadow_Basics/IO/Digital/PWM/PWM_Signal.svg){:standalone}

PWM signals are frequently used to control the brightness of LEDs, as well as serve as the control signal for precision motors such as servos and stepper motors.

## [Communication Protocols](/Meadow/Meadow_Basics/IO/Digital/Protocols/)

Digital IO also includes built-in support for a host of different types of common digital [communication protocols](/Meadow/Meadow_Basics/IO/Digital/Protocols/) including:

* **[I2C](/Meadow/Meadow_Basics/IO/Digital/Protocols/I2C)**
* **[SPI](/Meadow/Meadow_Basics/IO/Digital/Protocols/SPI)** (Serial Peripheral Interface)
* **[UART](/Meadow/Meadow_Basics/IO/Digital/Protocols/UART)** (Serial)
<!-- * **[CAN](/Meadow/Meadow_Basics/IO/Digital/Protocols/CAN)** -->
<!-- * **[I2S](/Meadow/Meadow_Basics/IO/Digital/Protocols/I2S)** (Integrated Inter-IC Sound Bus) -->
