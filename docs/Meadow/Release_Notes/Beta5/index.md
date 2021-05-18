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
 * **`IObservable`** - [Simplification, cleanup, and much more powerful pattern]
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

For more information, see the [Bluetooth Guide](/Meadow/Meadow_Basics/Bluetooth/).

### .NET Standard 2.1/.NET Core 3.0 API Support

Though technically the Meadow runtime already supported .NET Standard 2.1/.NET Core 3.0, we weren't bundling the facade dlls (such as `NetStandard.dll`) into the `MeadowAssemblies` nuget package, so if you referenced a nuget or code that targeted those API surfaces, you'd get an error. 

We're now bundling all the requisite .NET Standard/.NET Core facade dlls and if they're referenced, they'll get deployed with your Meadow application.

[TBD: Additionally, we've ported all of our projects to .NET Core project types, meaning you'll be able to reference .NET Standard/.NET Core project references directly.]

### F# Support Fixed

The release of F# 5 broke Meadow's support for F# because it included a number of .NET Standard facade dlls that we were not shipping (as well as a number of other dlls). 

Enabling .NET Standard support and linking also solved this breaking change, so you can once again build and deploy F# projects on Meadow!

## Meadow.Core

In addition to Bluetooth, Meadow.Core got a number of major new features and a lot of cleanup and overhaul of existing features and APIs, including:

 * **Unitization**
 * **`IIODevice` Rearchitecture**
 * **`IFilterableObservable` Simplification and Overhaul**

### Unitization

Unitization is one of the biggest changes to the Meadow stack yet. 

#### Introducing Units

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

#### Meadow.Core Support

The largest impact of these units are in Meadow.Foundation, but Meadow.Core's `IAnalogInputPort` now utilizes the `Voltage` type to return analog readings, rather than just a `float`.

Additional changes around units to reduce ambiguity and unit conversion errors will that didn't make it into this release will arrive in a future beta including:
 * Replacement of `float frequency` arguments with `Frequency` unit.
 * Replacement of `int duration` arguments with `TimeSpan` object.

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

### Meadow.Core Breaking Changes

 - **`DigitalInputPortEventArgs`** - Has been renamed to `DigitalInputPortChangeResult` and is now a struct, rather than a class.
 - **`IAnalogInputPort` and `AnalogInputPort`** - `StartSampling()` and `StopSampling()` have been renamed to `StartUpdating()` and `StopUpdating()`, respectively. 
 - **`IAnalogInputPort` and `AnalogInputPort`** - Now utilize a `Voltage` struct in place of `float` for voltage levels. 

### `IFilterableObservable` Simplification and Overhaul

[lorem ipsum dolar whatever stuffs.]

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

### Meadow.CLI and Tooling

#### Linking

[lorem ipsum dolar whatever stuffs.]

#### `MonoDisable`

[lorem ipsum dolar whatever stuffs.]

#### VS Code Support

[lorem ipsum dolar whatever stuffs.]

## Bug Fixes

 * [#108 - `System.IO.FileNotFoundException: Could not load file or assembly 'netstandard, Version=2.0.0.0`](https://github.com/WildernessLabs/Meadow_Issues/issues/108) - Fixed with the .NET Standard 2.1 Support.
 * [#120 - Unable to deploy F# application](https://github.com/WildernessLabs/Meadow_Issues/issues/120) - F# is game again!
 * [#144 - Calls to `HttpListenerContext.Request.RemoteEndPoint` result in `NullReferenceException`](link) - Description
 * [#146 - WiFi adapter initialized event misspelled](link) - Heh. Fixed. :D
