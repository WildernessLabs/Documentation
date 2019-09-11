---
layout: Meadow
title: Meadow Beta 2
subtitle: Release Notes
---

# Meadow Beta 2

## New Core Features

### Meadow Core Now Published as a NuGet Package

Meadow is now published as a [NuGet package](https://www.nuget.org/packages/Meadow/), so you don't have to manually reference the dll.

To use it, your application must target .NET 4.7.2.

### New IO APIs

One of the big things we’ve been working on is a major rewrite of how IO is handled between the underlying OS and Mono (the managed runtime) where we’ve been able to simplify a lot of the underpinning there and make it much more efficient. 

Along the way, we’ve also done a lot of thinking and reworking of the API. Specifically, we’ve added two new features. The first, is that the IO Devices are self describing with a mapping of `Device` > `Pins` > `Channels`. For instance, the following [Meadow sample code](https://github.com/WildernessLabs/Meadow_Samples/tree/master/Source/MeadowSamples/GpioInterrogation) enumerates all the pins and what type of IO is possible for each pin:

```csharp
foreach(var pin in Device.Pins.AllPins) {
   Console.WriteLine("Found pin: " + pin.Name);
   foreach (var channel in pin.SupportedChannels) {
            Console.WriteLine("Contains a " + channel.GetType() 
            + "channel called: " + channel.Name + ".");
   }
}
```

Here’s an excerpt from the output the above code returns:

```bash
Found pin: A05
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PC1.
Contains a Meadow.Hardware.AnalogChannelInfochannel called: ADC1_IN11.

Found pin: D00
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PI9.
Contains a Meadow.Hardware.UartChannelInfochannel called: UART4_RX.

Found pin: D01
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PH13.
Contains a Meadow.Hardware.PwmChannelInfochannel called: TIM8_CH1N.
Contains a Meadow.Hardware.UartChannelInfochannel called: UART4_TX.

Found pin: D02
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PC6.
Contains a Meadow.Hardware.PwmChannelInfochannel called: TIM3_CH1.

Found pin: D03
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PB8.
Contains a Meadow.Hardware.PwmChannelInfochannel called: TIM4_CH3.
Contains a Meadow.Hardware.CanChannelInfochannel called: CAN1_RX.
```

An astute observer familiar with the STM32F7 might notice that the analog port in the excerpt also exposes digital IO. We’re now much more flexible in what types of IOs are exposed on which pins; which provides more options for you. In fact, now there's 25 possible digital IOs. With these [`IChannelInfo`](xref:Meadow.Hardware.IChannelInfo) objects, the IO is also self-documenting, and you can see what kind of ports are available from each pin without having to refer to the IO pinout diagram.

#### Device-Centric API

Additionally, we made the API more device-centric. So instead of instantiating ports out of thin air (which was always just a little off); ports our now created via an [`IIODevice`](xref:Meadow.Hardware.IIODevice).

```csharp
IDigitalOutputPort redLED = Device.CreateDigitalOutputPort(Device.Pins.OnboardLEDRed);
```

The great thing about this, is that it doesn’t matter whether the ports are on the Meadow, or on external IO expanders, the API is the same. So we could also create a Digital Output Port from an MCP230xx IO expander, the same way:

```csharp
var ledPort = mcp.CreateDigitalOutputPort(mcp.Pins.D04);
```

This provides a more intuitive mental map of the hardware and also simplifies the IO control under the hood.

### Interrupts & Events/Notifications

Another big part of this release is that we got interrupts to propagate properly from the OS kernel to the Meadow runtime. The upshot is that events now work, so when a change occurs on `DigitalInputPort`, the `Changed` event is called properly. This also unlocked a lot of Meadow.Foundation peripheral drivers that we were able to implement.

Here is a simple example of using an input `Changed` event:

```csharp
public class ButtonEventsApp : App<F7Micro, ButtonEventsApp>
{
    IDigitalInputPort _input;

    public ButtonEventsApp()
    {
        _input = Device.CreateDigitalInputPort(Device.Pins.D02, debounceDuration: 20);
        _input.Changed += Input_Changed;
    }

    private void Input_Changed(object sender, DigitalInputPortEventArgs e)
    {
        Console.WriteLine("Changed: " + e.Value.ToString() + ", Time: " + e.Time.ToString());
    }
}
```

#### `IObservable`/Reactive Pattern

However, we didn't stop with just traditional events. We also added `System.IObservable` support, along with a [`FilterableObserver`](xref:Meadow.FilterableObserver) that allows you to subscribe to an observable, with an optional filter on the events, as well as a handler shortcut. Consider the following code:

```csharp
public class InputObservableApp : App<F7Micro, InputObservableApp>
{
    IDigitalInputPort _input;

    public InputObservableApp()
    {
        // create an input port on D02. 
        _input = Device.CreateDigitalInputPort(Device.Pins.D02);

        // Note that the filter is an optional parameter. If you're
        // interested in all notifications, don't pass a filter/predicate.
        _input.Subscribe(new FilterableObserver<DigitalInputPortEventArgs>(
            e => {
                Console.WriteLine($"Observer Observing the Observable, Observably speaking, Time: {e.Time.Millisecond}, Value: {e.Value}");
            },
            f => {
                return (f.Time - f.PreviousTime > new TimeSpan(0, 0, 0, 0, 1000));
            }));
    }
}
```

In the case of the code above, it uses a `FilterableObserver` to filter out events that occur less than a second after the last notification.

However, the `Subscribe` method will take any `IObservable`, so you can also use whatever Reactive pattern and framework you choose.

### New Meadow Samples Repo

It occurred to us recently that our Meadow core samples were locked behind a source code auth wall. Not anymore! We've moved them to their own repo at [github.com/WildernessLabs/Meadow_Samples](http://github.com/WildernessLabs/Meadow_Samples).

Check them out and see how to use the new APIs!

### Analog Input

It's time to break out your [analog temp sensors](xref:Meadow.Foundation.Sensors.Temperature.AnalogTemperature), because we've got analog input! Ok, well, maybe not _quite_ yet. ;) The API is there, and none of it will crash, but the readings aren't quite right. We debated publishing this as is, but you can at least build against it, as long as you ignore the bogus values.


## New Meadow.Foundation Features

Meadow.Foundation got quite a few more core [peripheral drivers](/Meadow/Meadow.Foundation/Peripherals) added, as well as a few non-core drivers.

We'll be releasing additional Meadow.Foundation updates out-of-band from the beta releases, so make sure to check the [peripheral drivers list page](/Meadow/Meadow.Foundation/Peripherals) for updates often, and update your NuGet packages.

## Fixed Bugs

* [Threads Fail](https://github.com/WildernessLabs/Meadow_Issues/issues/1) - W00t! We haz multithreading!

## Known Issues

* Meadow runtime is slow. For instance, we're currently only able to get about 30-40hz out of the `SoftPwmPort`. There's still a lot of debug code, so this will get much faster in future releases.
* [`AnalogInputPort`](https://github.com/WildernessLabs/Meadow_Issues/issues/7) readings are not correct.
* [Internal PullUp and PullDown resistors are not working in `DigitalInputPort`](https://github.com/WildernessLabs/Meadow_Issues/issues/6) - Workaround is to use an external `10k` resistor as illustrated [here](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/)
* `GlitchFilterCycleCount` is not implemented in `DigitalInputPort`. This is coming soon.
* [Tasks Behave Strangely](https://github.com/WildernessLabs/Meadow_Issues/issues/2) - Workaround is to use `Thread`, as seen in the [Basic_Threading](https://github.com/WildernessLabs/Meadow_Samples/blob/master/Source/MeadowSamples/Basic_Threading/ThreadingApp.cs) sample app.
* [`Debug.Write` calls don't output to the console](https://github.com/WildernessLabs/Meadow_Issues/issues/3) - Workaround is to use `Console.Write` calls.