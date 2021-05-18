---
layout: Meadow
title: Meadow Beta 5
subtitle: Release Notes
---

# b5.0

Beta 5.0 is here and it's massive. This is a huge release for Meadow with major new features and big changes, highlights include:

 * **Bluetooth v1.0** - That's right, BLE support is here. Check out the [Bluetooth Guide](/Meadow/Meadow_Basics/Bluetooth) for details.
 * **.NET Standard 2.1/.NET Core 3.0 API Support** - Meadow now fully supports these API surfaces, opening up a plethora of .NET code and Nuget packages for your use in Meadow applications.
 * **Linking** - Meadow applications now use the Mono Linker to strip out unused code which results in much smaller and faster app deployments.
 * **F# Support Fix** - The new .NET Standard support along with the linker fixes our F# integration, so you can use F# to build Meadow apps again.
 * **`IIODevice` Rearchitecture** - `IIODevice` has been split out into a number of individual _controller_ interfaces such as `IAnalogInputController`, `IDigitalOutputController`, `II2cController`, etc. This great simplifies drivers that extend the [Unified IO Architecture](/Meadow/Meadow.Foundation/Unified_GPIO_Arch/)
 * **Unitization** - We've added strongly-typed units such as `Temperature`, `Mass`, etc., to all of our Meadow.Foundation drivers. No more ambiguous return values.
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

## Meadow.Core

### Unitization

Though possibly overshadowed by Bluetooth support, Unitization is one of the biggest changes to the Meadow stack yet. 

#### Units

In b5.0, we've added a number of unit types that describe a measure of something, including:

 * `AbsoluteHuidity`
 * `Acceleration`
 * `Acceleration3D`
 * `Angle`
 * `AngularAcceleration`
 * `AngularAccleration3D`
 * `AngularVelocity`
 * `Azimuth`
 * `Concentration`
 * `Current`
 * `Density`
 * `Energy`
 * `Frequency`
 * `Illuminance`
 * `Length`
 * `MangeticField`
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

### Meadow.Core Breaking Changes

 - **`DigitalInputPortEventArgs`** - Has been renamed to `DigitalInputPortChangeResult` and is now a struct, rather than a class.
 - **`IAnalogInputPort` and `AnalogInputPort`** - `StartSampling()` and `StopSampling()` have been renamed to `StartUpdating()` and `StopUpdating()`, respectively. 
 - **`IAnalogInputPort` and `AnalogInputPort`** - Now utilize a `Voltage` struct in place of `float` for voltage levels. 

### `IFilterableObservable` Simplification and Overhaul


## Meadow.Foundation

Meadow.Foundation underwent a major set of upgrades and cleanup in this release. We're still in progress with this so some sensors haven't gotten a cleanup yet, but some of the big things include:

 * Unitization
 * Nullability
 * 

### Other Changes and Driver Updates

 * `AnalogJoystick` - This got a huge overhaul and is much faster now.
 * `IDCMotor` and `HBridgeMotor` - `Speed` has been deprecated. Please use the `Power` property.
 * `Ccs811` - Added a driver/support for this high quality Air Quality sensor.
 * `MPL115A2` - This driver is now finished.
 * `AnalogTemperatureSensor` - Now events both the new and the old value. Previously the old value was being thrown away.
 * `Si70xx` - Temperature is now correct.
 * `Htu21d` - Fixed. Was throwing an error on initializing before.
 * `Bme280` - Pressure reading fixed. Was off by a factor of 100k before.
 * `RotaryEncoder` - Now implements the `IObservable` pattern.
 * `IMassSensor` - Has been added for load cell and similar sensors.
 * `Hx711` and `Nau7802` - Now implements `IMassSensor`
 * `IWindVane` - Has been added for wind direction sensors.
 * Renamed `MagneticField3d`, `Acceleration3d` - And other "3d" properties and classes to `3D` (capitalized `D`).

## Bug Fixes

 * [#108 - `System.IO.FileNotFoundException: Could not load file or assembly 'netstandard, Version=2.0.0.0`](https://github.com/WildernessLabs/Meadow_Issues/issues/108) - Fixed with the .NET Standard 2.1 Support.
 * [#120 - Unable to deploy F# application](https://github.com/WildernessLabs/Meadow_Issues/issues/120) - F# is game again!
 * [#144 - Calls to `HttpListenerContext.Request.RemoteEndPoint` result in `NullReferenceException`](link) - Description
 * [#146 - WiFi adapter initialized event misspelled](link) - Heh. Fixed. :D
