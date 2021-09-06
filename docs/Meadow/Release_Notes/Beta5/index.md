---
layout: Meadow
title: Meadow Beta 5
subtitle: Release Notes
---

<!--
# b5.x

* **Debugging** - What what?! Yup; in-IDE debugging in Visual Studio for Windows and Mac, AND VS Code.
 
## Meadow.OS

### Debugging

Long awaited, in-IDE, on-device debugging is here! Now you can debug Meadow apps just like any other .NET app, with full support in Visual Studio for Windows, Mac, and even VS Code! You can even debug from the command line using the Mono Soft-Debugger (SDB) via Meadow.CLI. 
-->

# b5.3

This is another big stabilization release which fixes more issues introduced in b5.1/b5.2, and also adds SQLite support to Meadow! Big changes and fixes include:

 * **SQLite Support** - SQLite is now built into Meadow.OS and Frank added support for Meadow in his SQLite.NET ORM.
 * **Bluetooth Fixes** - There were some strange bugs introduced to bluetooth in b5.2, we fixed them.
 * **Network Fixes** - There are a pile of Network stack fixes.
 * **Azure Fix** - The auth bug that prevented integration with Azure is fixed.


## Meadow.OS

### SQLite

Yaaaasss!! Meadow.OS now has first-class, integrated support for on-device databases via SQLite. Additionally, we worked with Frank Krueger to get Meadow support built into his SQLite.NET ORM, which adds super easy and lightweight ORM access. Check out the new [SQLite guide](/Meadow/Meadow.OS/SQLite/) for details.


### API Cleanup

 * **Moved `SynchronizationContext` to Meadow.OS** - Previously, the `BeginInvokeOnMainThread()` method was executed on the current `Device` class, in this release we moved it to the `MeadowOS` class.
 * **`IWiFiAdapter.Scan()` returns an `IList<WiFiNetwork>` instead of an `ObservableCollection`** - The `ObservableCollection` was leftover from a previous API design and unnecessary.
 
## Meadow.Foundation

* **uGraphics cleanup** - ToDo Adrian
* **Standardized I2C address properties** All I2C peripherals now have a standard `DEFAULT_ADDRESS` property.
* **Samples Cleanup** We did a top to bottom review to make sure samples are well formed, well named, and written consistently to make it easier to start working with a new peripheral driver

## Documentation 
...add notes on updated code snippets

## Tooling
CLI Updates - stability fixes, etc.


## Bug Fixes

* [#159 Device.GetDeviceInformation() throws an error](https://github.com/WildernessLabs/Meadow_Issues/issues/159)
* [#141 HttpClient fails with 'No such host is known' when trying to POST to MSFT Oauth endpoint](https://github.com/WildernessLabs/Meadow_Issues/issues/141)
* [#23 Add OS version to MeadowOS class](https://github.com/WildernessLabs/Meadow_Issues/issues/23)
* [#121 --Download causes an exception when executed in the Firmware directory on Windows](https://github.com/WildernessLabs/Meadow_Issues/issues/121)
* [#122 Cosmetic: Delete the firmware zip files after downloading](https://github.com/WildernessLabs/Meadow_Issues/issues/122)
* [#128 Meadow_Performance_Benchmarks app won't run](https://github.com/WildernessLabs/Meadow_Issues/issues/128)
* [#163 IByteCommunications has no WriteRegister method that takes a `Span<byte>`](https://github.com/WildernessLabs/Meadow_Issues/issues/163)
* [#184 uGraphics Canvas state doesn't store pen color](https://github.com/WildernessLabs/Meadow.Foundation/issues/184)
* [#109 For HBridgeMotor pwmFrequency can be specified - but 1600 is always used anyway](https://github.com/WildernessLabs/Meadow.Foundation/issues/109)

# b5.2

This is a small release that mainly focuses on cleanup of Meadow.Foundation, and fixing Bluetooth (which we broke in b5.1):

 * **BLE Fix** - We broke the bluetooth stack (among other small things) in b5.1 due to issues with our CI release pipeline. Most of the fixes we were able to ship out of band as Nuget updates, but BLE remained broken. This release fixes that.
 * **Antenna Switch Fix** - We regressed switching between the onboard and external antenna. That's fixed in this release.
 * **Meadow.Foundation Upgrades** - A number of API cleanups, optimizations, and the like.

## Updating

This is a full-stack release and will require an OS update, nuget updates, IDE extensions, and CLI updates.

Note: to update the Meadow.CLI, run the following from a command line:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

## Meadow.Foundation

 * **Modernized the `PiezoSpeaker` API** - Now uses `async` when playing a tone.
 * **Added `PenColor` to µGraphics** - This new property makes it possible to retrieve the current pen color.
 * **Minor drawing optimizations in uGraphics** - Faster drawing.
 * **Maple Server Fixes**
   * Client and Server now support HTTP `Post`.
   * API Cleanups.
   * Fixed JSON serialization by switching to `SimpleJson`

## Bug Fixes

 * [#125 - System.Net.HttpClient Hangs if Wi-Fi is not connected first](https://github.com/WildernessLabs/Meadow_Issues/issues/125) - Fixed. Will now throw an exception.
 * [#138 - Unable to create AnalogInputPorts for D06 & D09](https://github.com/WildernessLabs/Meadow_Issues/issues/138) - This was actually fixed a while ago, we just missed closing the bug.
 * [#152 - Meadow.CLI tries to flash ESP if mono is not disabled](https://github.com/WildernessLabs/Meadow_Issues/issues/152) - This was fixed with the Meadow.CLI rewrite.
 * [#160 - Meadow hangs on Device.BluetoothAdapter.StartBluetoothServer](https://github.com/WildernessLabs/Meadow_Issues/issues/160) - Fixed.


# b5.1

This is another huge release, with big changes across the boards. Highlights include:

 * **.NET Standard 2.1** - The entire Meadow stack has been upgraded to .NET Standard 2.1 (from 2.0 in b5.0).
 * **Web Request Memory Leak Fixes** - We've fixed the big memory leak associated with web requests.
 * **Meadow.CLI Rewrite** - Meadow.CLI has been completely rewritten from the ground up.
 * **VS Code Templates** - The Meadow extension for VS Code now has Meadow App and Library templates.
 * **I2C/SPI API Cleanup** - Much cleaner and more consistent APIs between I2C and SPI, with heavy use of `Span<byte>` to reduce allocations and GC churn.
 * **File system** - Meadow now supports persistent file storage and has named directories.
 * **Meadow.Core Project Refactor** - Meadow.Core has been split out into separate project for `Contracts`, `Units`, `Core`, and device specific nuget packages.
 * **Meadow.Foundation Cleanup** - Massive cleanup on Meadow.Foundation, making drivers more consistent and removing a lot of duplicate code.
 
**Note:** Just like the previous release, b5.1 has a number breaking changes.

## Updating

This is a full-stack release and will require an OS update, nuget updates, IDE extensions, and CLI updates.

Note: to update the Meadow.CLI, run the following from a command line:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

## Meadow.OS

### .NET Standard 2.1 Support

This release continues our .NET Standard journey; upgrading from 2.0 to 2.1 AND upgrading ALL of the Meadow projects to .NET Standard 2.1 for better code compatibility and cross-platform support.

#### Upgrading Projects

Meadow app projects will need to be updated from .NET 4.7.2 to .NET Standard 2.1 and requires some minor updates to the .csproj file. [Checkout our blog post on updating Meadow projects for details](https://blog.wildernesslabs.co/update-meadow-app-from-net-framework-to-net-standard/).

### Web Request Memory Leak

The memory leak that caused Meadow applications that made lots of web requests crash has been largely eliminated. We've now had Meadow applications successfully run over 100,000 web requests without failure!

### SSL/HTTPs Improvements

We fixed the memory leak occuring after every HTTPS connection, reduced general memory consumption per connection and removed the debug spew that would get output when making SSL/HTTPs requests.

## Meadow.Core

### File System

While Meadow has had a non-volatile file system and storage for a while, the IDEs would delete files during deployment, rending it not very useful.

In b5.1, we've fixed that, so now files in special folders will persist during app deployment, and we've also added named directories to the `MeadowOS.FileSystem` class:

```csharp
CreateFile(MeadowOS.FileSystem.TempDirectory, "hello.txt");
```

[File System guide](http://developer.wildernesslabs.co/Meadow/Meadow_Basics/File_System/)

Check out the [FileSystem_Basics app sample in Meadow.Core.Samples](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Core.Samples/OS/FileSystem_Basics) to see it in action.

### I2C/SPI API Updates

We've done a massive overhaul of the I2C and SPI APIs, making them not only consistent, but also enabling them to support peripheral communications without heap allocations to reduce garbage collection churn. As part of that, we leaned into the new `Span<T>` class, so any of the calls to `Read()`/`Write()` that took `byte[] buffer` before now take take `Span<>`.

### Meadow.Core Project Refactor

This is more of an implementation detail right now, but we split the `Meadow.Core` project into separate packages for `Meadow.Contracts`, `Meadow.Units`, and `Meadow.Core`, as well as board specific packages like `Meadow.F7`.

This will allow us to extend Meadow to additional platforms in the future. Stay tuned for fun stuff here. ;)

## Tooling

### Meadow.CLI Rewrite

The Meadow.CLI library and command line interface has been completely rewritten from the ground up. It's now async/await turtles all the way down, and is much more reliable, contains a pile of new features, including single command Meadow.OS deployment, and more. We also cleaned out the cobwebs of obsoleted no-longer supported commands that littered the old Meadow.CLI codebase.

### VS Code Templates

The Meadow VS Code extension now includes Meadow App and Library templates for C#, F#, and VB.NET for your coding pleasure.

## Meadow.Foundation

We spent a lot of time on Meadow.Foundation this release. We've been going through every sensor from top to bottom, cleaning them up, making them consistent, and generally raising the code quality and organization.

We're now about 95% through the cleanup and updates to get Meadow.Foundation to a v1.0 level of quality.

### New Sensor Base Classes

Along the way, we created new sensor base classes that handle much of the boilerplate for sensors and were able to excise an absolutely _massive_ amount of repetitive code from the existing sensors, as well as make an easy upgrade from sensors that didn't conform to the `Read()`/`StartUpdating()`/`StopUpdating()` pattern.

New senor base classes and their inheritance chain include:

 * **`ObservableBase<UNIT>`** - This is the very bottom of the inheritance chain and provides all the base functionality for the filterable observable pattern. This class is used by both sensors and other classes that need to notify `IObserver` subscribers.
 * **`SensorBase<UNIT>`** - This is the base class that provides the bare minimum sensor functionality for sensors that manage their own read/update lifecycle. It's most often used by sensors that raise events based on an underlying port lifecycle. For instance, sensors like the `AnalogTemperature` sensor use this because the update lifecycle is provided by the underlying `AnalogInputPort`.
 * **`SamplingSensorBase<UNIT> : SensorBase<Unit>`** - This is the most common base class to inherit from by sensors and adds the `StartUpdating` and `StartUpdating` methods. 
 * **`ByteCommsSensor<UNIT> : SamplingSensorBase<UNIT>`** - This class is for I2C or SPI peripherals and adds the plumbing for the underlying `IByteCommunications` device such as an `ISpiPeripheral` or `II2cPeripheral`.


## b5.1 Bug Fixes

 * [#46 - Uploading CSharp.Scripting dlls causes Meadow to Lock up when dll is referenced](https://github.com/WildernessLabs/Meadow_Issues/issues/46) - Fixed with the new deployment tooling stuff. 
 * [#154 - Meadow Locks Up after 3915 Iterations](https://github.com/WildernessLabs/Meadow_Issues/issues/154) - Fixed.
 * [#153 - HttpClient memory leak](https://github.com/WildernessLabs/Meadow_Issues/issues/153) - Fixed.
 * [#151 - .NET templates generated by WildernessLabs.Meadow.Template::0.2.0 generate a build error](https://github.com/WildernessLabs/Meadow_Issues/issues/151) - Fixed.
 
## Known Issues

 * **`System.Text.Json` is broken** - Due to a bug with how `System.Text.Json` references `System.Memory.dll`, switching to .NET Standard 2.1 broke compatibility. As a workaround, please use `NewtonSoft.Json` for now. This will be fixed in the future. For more information, see [this DotNET Runtime issue](https://github.com/dotnet/runtime/issues/49211).

* **Some other Nuget packages may also be broken** - Related to the above, other Nuget packages that target .NET Standard 2.0 (not 2.1) and, at the same time, use Nugets to bring in .NET Standard 2.1 capabilities (e.g. `System.Memory`, `System.Buffers`), may not work, producing runtime and build issues.


# b5.0

Beta 5.0 is here and it's massive. This is a huge release for Meadow with major new features and big changes, highlights include:

 * **Bluetooth v1.0** - That's right, BLE support is here. Check out the [Bluetooth Guide](/Meadow/Meadow.OS/Bluetooth) for details.
 * **.NET Standard 2.0 API Support** - Meadow now fully supports the .NET Standard 2.0 API surface (equivalent to .NET Core 3.0), opening up a plethora of .NET code and Nuget packages for your use in Meadow applications.
 * **F# Support Fix** - The new .NET Standard support along with the linker fixes our F# integration, so you can use F# to build Meadow apps again.
 * **VB.NET Support** - We also added VB.NET support including templates in both Visual for Windows and Mac.
 * **`IIODevice` Rearchitecture** - `IIODevice` has been split out into a number of individual _controller_ interfaces such as `IAnalogInputController`, `IDigitalOutputController`, `II2cController`, etc. This great simplifies drivers that extend the [Unified IO Architecture](/Meadow/Meadow.Foundation/Unified_GPIO_Arch/)
 * **Unitization** - We've added strongly-typed units such as `Temperature`, `Mass`, etc., to all of our Meadow.Foundation drivers. No more ambiguous return values.
 * **`IObservable`** - Simplification, cleanup, and a much more powerful pattern.
 * **Meadow.Foundation** - In addition to the units mentioned above, Meadow.Foundation's drivers underwent a massive audit, and this release includes the first half of a major effort to cleanup the existing drivers and make them more consistent and easy to use.
 * **VS Code Support** - Thanks to an enterprising community member, we now have initial support for building and deploying Meadow applications in VS Code!

**Note:** It also has a number breaking changes; as we approach Meadow.OS v1.0 we are taking the opportunity to pay down architectural debt, make our APIs consistent, and generally apply polish.


## Updating

This is a full-stack release and will require an OS update, nuget updates, IDE extensions, and CLI updates.

Note, to update the Meadow.CLI, run the following from a command line:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

## Meadow.OS

### Bluetooth Low-Energy (BLE) Support

The b5.0 release of Meadow contains a draft subset of BLE features that cover a large number of basic bluetooth use cases and includes the following feature support:

 - **User-Definable BLE Definition Tree** - You can create a BLE tree `Definition` of _services_ and _characteristics_ that contain primitive type values including; `int`, `double`, `string`, etc.
- **BLE Server** - Start a bluetooth server on the Meadow and initialize it with your BLE definition tree.
- **Accept Client Connections** - Connect to the server from a _client_ device application such as a mobile phone.
- **Edit Values at Runtime** - Write values to the graph from your managed application. Those values can be read by a BLE Client app.
- **Value Change Notifications** - Get notified in your Meadow application when a BLE client writes to a characteristic in you BLE tree.

For more information, see the [Bluetooth Guide](/Meadow/Meadow.OS/Bluetooth/).

### .NET Standard 2.0/.NET Core 3.0 API Support

Though technically the Meadow runtime already supported .NET Standard 2.0, we weren't bundling the facade dlls (such as `NetStandard.dll`) into the `MeadowAssemblies` nuget package, so if you referenced a nuget or code that targeted those API surfaces, you'd get an error. 

We're now bundling all the requisite .NET Standard/.NET Core facade dlls and if they're referenced, they'll get deployed with your Meadow application.

### F# Support Fixed

The release of F# 5 broke Meadow's support for F# because it included a number of .NET Standard facade dlls that we were not shipping (as well as a number of other dlls). 

Enabling .NET Standard support solved this breaking change, so you can once again build and deploy F# projects on Meadow!

### VB.NET Support

You can now create Meadow applications in VB.NET! Technically, we supported it before, but now we have templates for both Meadow applications and libraries.

### Finalizers Enabled

A small bug was keeping us from enabling the finalizer thread, causing memory and resource leaks in the .NET runtime. The bug is now fixed and finalizers are run.
## Meadow.Core

In addition to Bluetooth, Meadow.Core got a number of major new features and a lot of cleanup and overhaul of existing features and APIs, including:

 * **Unitization**
 * **`IResult<UNIT>` Introduction**
 * **`IIODevice` Rearchitecture**
 * **`IFilterableObservable` Simplification and Overhaul**
 * **Processor Temperature**

### Unitization

Unitization is one of the biggest changes to the Meadow stack yet. 

#### Introducing Units

In b5.0, we've added a number of unit types that describe a measure of something, including:

 * `AbsoluteHumidity`
 * `Acceleration`
 * `Acceleration3D`
 * `Angle`
 * `AngularAcceleration`
 * `AngularAcceleration3D`
 * `AngularVelocity`
 * `Azimuth`
 * `Concentration`
 * `Current`
 * `Density`
 * `Energy`
 * `Frequency`
 * `Illuminance`
 * `Length`
 * `MagneticField`
 * `MagneticField3D`
 * `Mass`
 * `Power`
 * `Pressure`
 * `RelativeHumidity`
 * `Speed`
 * `Temperature`
 * `Torque`
 * `Voltage`
 * `Volume`

#### Unit Conversions

Each of these units have an enum of `UnitTypes` that they can be described as, as well as accessed as, via properties.

For instance the `Temperature` type has properties such as `Fahrenheit`, `Celsius`, `Kelvin`, etc. that allow you to access the unit value, converted to that particular `UnitType`. Consider the following code:

```csharp
var temp = new Temperature(32, UnitType.Fahrenheit);
Console.WriteLine($"{temp.Celsius:N2}C"); // outputs `0C`
Console.WriteLine($"{temp.Fahrenheit:N2}F"); // outputs `32F`
```

The units are all lightweight `struct` types which help to reduce heap allocations (when not boxed by Nullable), and have built in math operator and comparison support so you can perform math operations and comparison such as:

```csharp
Temperature t1 = new Temperature(1);
Temperature t2 = new Temperature(10);
Assert.That(t1 != t2);
Assert.That((t1 + t2) == new Temperature(11));
Assert.That((t2 - t1) == new Temperature(9));
Assert.That(t1 < t2);
```

#### Meadow.Core Support

The largest impact of these units are in Meadow.Foundation, but Meadow.Core's `IAnalogInputPort` now utilizes the `Voltage` type to return analog readings, rather than just a `float`.

**Note:** This conversion is not fully complete; additional changes around units to reduce ambiguity and unit conversion errors that didn't make it into this release will arrive in a future beta including:
 * Replacement of `float frequency` arguments with `Frequency` unit.
 * Replacement of `int duration` arguments with `TimeSpan` object.

### `IChangeResult<UNIT>` Introduction

To help support the _Units_ architecture, we've introduced a new class, `IChangeResult<UNIT>` that replaces the various `EventArgs`, `Conditions`, and `ChangeResult` types that were previously used to carry data during events and observable notifications:

```csharp
public interface IChangeResult<UNIT> where UNIT: struct
{
    UNIT New { get; set; }
    UNIT? Old { get; set; }
}
```

There is also an accompanying `ChangeResult<UNIT>` class that provides a concrete implementation for the interface. As opposed to `EventArgs`, which is defined as a `class`, `ChangeResult<UNIT>` is actually a struct, to help prevent allocations and Garbage Collector (GC) churn.

Additionally, the `Old` property is now nullable, since on the first notification, there won't be a previous reading, and this provides the ability to use C# 8's nullable patterns to prevent the dreaded `Null Reference Error`:

```csharp
Console.WriteLine($"new: {result.New.Celsius:N2}C, old: {result.Old?.Celsius:N2}C");
```

### `IIODevice` Rearchitecture

Previously, Meadow.Core had a catch-all `IIODevice` interface that described an IO device that could have every kind of IO imaginable, including analog, digital, SPI, Serial, I2C, etc. This meant that IO device drivers in Meadow.Foundation had to implement it in order to extend the [Unified IO Architecture](/Meadow/Meadow.Foundation/Unified_GPIO_Arch/).

In b5.0, that got split out into a number of `Meadow.Hardware` controller interfaces that describe discrete IO types, including:

 * `IAnalogInputController`
 * `IBiDirectionalController`
 * `IDigitalInputController`
 * `IDigitalOutputController`
 * `II2cController`
 * `IPwmOutputController`
 * `ISerialOutputController`
 * `ISerialMessageController`
 * `ISpiController`

Now, drivers for IO Expanders that provide these various features only need to implement the specific controller types they support, vastly reducing the amount of boilerplate code necessary to implement an IO expander.

### Processor Temperature

The temperature of the main processor is now available via `GetProcessorTemperature()`:

```csharp
Console.WriteLine($"Processor Temp: {Device.GetProcessorTemperature().Celsius:n2}C");
```

### Meadow.Core Breaking Changes

 - **`F7Micro.InitializeCoProcessor`** has been renamed to `InitializeCoprocessor`. Note casing change.
 - **`DigitalInputPortEventArgs`** - Has been renamed to `DigitalPortResult` and is now a struct, rather than a class.
 - **`IAnalogInputPort` and `AnalogInputPort`** - `Changed` has been renamed to `Updated`.
 - **`IAnalogInputPort` and `AnalogInputPort`** - `StartSampling()` and `StopSampling()` have been renamed to `StartUpdating()` and `StopUpdating()`, respectively. 
 - **`IAnalogInputPort` and `AnalogInputPort`** - Now utilize a `Voltage` struct in place of `float` for voltage levels. 
 
## Meadow.Foundation

Meadow.Foundation underwent a major set of upgrades and cleanup in this release. We're still in progress with this so some sensors haven't gotten a cleanup yet, but some of the big things include:

 * **Unitization**
 * **Nullable Properties & Tuples**
 * **`IFilterableObservable` Simplification**

### Unitization

In addition to adding units to Meadow.Core, we've updated all the sensors to return strongly typed Units.

### Nullable Properties & Tuples

Nearly all of the sensors and sensor interfaces now have C# 8 nullable properties for the data they sample. Consider the `ITemperatureSensor` interface, for instance:

```csharp
public interface ITemperatureSensor : ISensor
{
    Temperature? Temperature { get; }
    event EventHandler<IChangeResult<Temperature>> TemperatureUpdated;
}
```

#### Tuples on Composite Sensors

Composite sensors; those that implement multiple sensor contracts like the BME280 which does temperature, humidity, and pressure, now implement both strongly named Tuples and individual properties for their constituent data parts. 

For instance, the `Bme280` driver has the following properties:

```csharp
// Tuple `Conditions`:
public (Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure) Conditions;
// individual:
public Temperature? Temperature => Conditions.Temperature;
public Pressure? Pressure => Conditions.Pressure;
public RelativeHumidity? Humidity => Conditions.Humidity;
```

The Tuple is also passed as the `UNIT` via the `IChangeResult<UNIT>` argument in events and notifications, so you can easily access all of the properties via friendly-named, nullable items in the Tuple:

```csharp
sensor.Updated += (object sender, IChangeResult<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure)> result) => {
    Console.WriteLine($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
    Console.WriteLine($"  Relative Humidity: {result.New.Humidity:N2}%");
    Console.WriteLine($"  Pressure: {result.New.Pressure?.Millibar:N2}mbar ({result.New.Pressure?.Pascal:N2}Pa)");
};
```

### `IFilterableObservable` Simplification and Overhaul

The [filterable `IObservable` API](/Meadow/Meadow_Basics/Events_and_IObservable/) in Meadow is incredibly powerful and allows you to create modern, composable, architectures with powerful event filtering, but it had two drawbacks:

 * Syntax, especially for driver development, was complex.
 * Creating composite drivers required special `Conditions` classes that aggregated output.

With b5.0, we took a scalpel to it and not only massively simplified it, but also made it _much_ more flexible and composable.

#### Simplified Driver Definitions

To understand the change, consider the `Bme280` driver class signature from the 4.x betas:

```csharp
public class Bme280 :
        FilterableChangeObservableBase<AtmosphericConditionChangeResult, AtmosphericConditions>,
        IAtmosphericSensor, ITemperatureSensor, IHumiditySensor, IBarometricPressureSensor
```

Previously, the `FilterableChangeObservableBase`, had two generic types; both the `ChangeResult`/`EventArgs` (`C`) that would be passed when the event occurred, AND the type of data (`T`) passed within that result. This had a big drawback in that not only was there redundant information in the generic signature, but we had to create special `Conditions` data containers/models for each potential combination of sensor output. 

In b5.0, this same driver signature gets much simpler and clearer:

```csharp
public partial class Bme280 :
    FilterableChangeObservableBase<(Temperature?, RelativeHumidity?, Pressure?)>,
    ITemperatureSensor, IHumiditySensor, IBarometricPressureSensor
```

Now, drivers are completely composable, and the only generic parameter needed is a tuple containing just the Unit types that returned. Note also that full C# nullability is also supported (and in-fact, built-in to all the updated sensor drivers). 

#### Easier Consumption

We also made some changes that made it much easier to consume the observables. In b5.0, we added a `CreateObserver()` method which will automatically generate an observer with the appropriate types for you. For example, the following code illustrates creating an observer with an optional filter that only notifies if the temperature changes by at least `0.5°C` and `5%` humidity:

```csharp
sensor.Subscribe(Bme280.CreateObserver(
    handler: result => {
        Console.WriteLine($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
    },
    filter: result => {
        if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
            return (
            (result.New.Temperature.Value - old.Temperature.Value).Abs().Celsius > 0.5 // returns true if > 0.5°C change.
            &&
            (result.New.Humidity.Value - old.Humidity.Value).Abs().Percent > 0.05 // 5% humidity change
            );
        }
        return false;
    }
    // if you want to always get notified, pass null for the filter:
    //filter: null
    )
);
```

### Other Changes and Driver Updates

 * `AnalogJoystick` - This got a huge overhaul and is much faster now.
 * `IDCMotor` and `HBridgeMotor` - `Speed` has been deprecated. Please use the `Power` property.
 * `Ccs811` - Added a driver/support for this high quality Air Quality sensor.
 * `Mpl115a2` - This driver is now finished.
 * `AnalogTemperatureSensor` - Now events both the `New` and the `Old` value. Previously the old value was being thrown away.
 * `Si70xx` - Temperature is now correct.
 * `Htu21d` - Fixed. Was throwing an error on initializing before.
 * `Bme280` - Pressure reading fixed. Was off by a factor of `100k` before.
 * `RotaryEncoder` - Now implements the `IObservable` pattern.
 * `IMassSensor` - Has been added for load cell and similar sensors.
 * `Hx711` and `Nau7802` - Now implements `IMassSensor`
 * `IWindVane` - Has been added for wind direction sensors.
 * Renamed `MagneticField3d`, `Acceleration3d` - And other "3d" properties and classes to `3D` (capitalized `D`).
 * `Yx5300` - [data2 is send in place of data1](https://github.com/WildernessLabs/Meadow.Foundation/issues/169) - fixed.
 

### Meadow.CLI, Deployment, and Tooling

Meadow's deployment and tooling experience also got a big upgrade in b5.0.

<!--
#### Meadow.CLI `MonoDisable` Fix

Previously, after flashing the OS to the device, the `meadow --monodisable` command would often only work after hitting the `RST` button on the device twice to put it into _system mode_ because the between the newly flashed OS would be incompatible with the mono runtime as well as the firmware on the coprocessor causing a crash that would make it unresponsive. 

With this release, we overhauled the way that Meadow.OS checks for compatibility of the various Meadow.OS, runtime, and coprocessor firmware components so that after flashing the OS, it will immediately detect a mismatch and not try to launch (and crash) the mono runtime.

The upshot here is that new OS deployments will be much smoother, and in fact it unlocks scriptable, no-touch/single-command Meadow.OS deployments, which we hope to expose in a future release.

-->

<!--
#### Build Linking

Beginning in this beta, we've enabled assembly linking on both macOS and Windows, via the Meadow.CLI and integrated it into both Visual Studio for Windows and Visual Studio for Mac.

Linking takes the resulting binaries from the initial build process and removes unused classes, members, and other unneeded code that bloats the assemblies. This has the effect of both drastically reducing the size of the deployed app binaries, but also speeds up deployment.
-->

#### Beta VS Code Support

Thanks to community member extraordinaire, Jonathan Dick, we have an initial beta version of support for building and deploying Meadow applications with VS Code. 

For information on how to get started, check out the [VSCode Meadow Extension Github repo](https://github.com/wildernesslabs/VSCode_Meadow_Extension).

## b5.0 Bug Fixes

 * [#108 - `System.IO.FileNotFoundException: Could not load file or assembly 'netstandard, Version=2.0.0.0`](https://github.com/WildernessLabs/Meadow_Issues/issues/108) - Fixed with the .NET Standard 2.1 Support.
 * [#120 - Unable to deploy F# application](https://github.com/WildernessLabs/Meadow_Issues/issues/120) - F# is game again!
 * [#144 - Calls to `HttpListenerContext.Request.RemoteEndPoint` result in `NullReferenceException`](https://github.com/WildernessLabs/Meadow_Issues/issues/144) - Now returns remote IP address.
 * [#146 - WiFi adapter initialized event misspelled](link) - Heh. Fixed. :D


## Known Issues

  * **Meadow.CLI `--DeleteFile` command not working** - The `--DeleteFile` command will throw an error and also say that the file was deleted successfully, but the file will not actually be deleted.
  * **Mono may re-enable after doing Meadow.CLI `--MonoUpdateRT` command** - When you're deploying Meadow.OS, mono may re-enable itself after the `--MonoUpdateRT` command. If you get an error when you run the `--FlashESP` command that says it can't upload because mono is enabled, re-run the `--MonoDisable` command.
