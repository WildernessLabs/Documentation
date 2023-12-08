---
layout: Meadow
title: Units
subtitle: Understanding the strongly-typed units architecture in Meadow.
---

Throughout the Meadow stack, strongly-typed _units_ such as `Temperature`, `Length`, `Frequency`, and `Speed`, are used in place of primitive types like `float` or `integer` to prevent errors due to unit ambiguity, conversion, or mismatch.

## Units in Action

These units are used extensively in both Meadow.Core APIs as well as Meadow.Foundation drivers. For instance, when reading from an `IAnalogInputPort`, the value returned is of the `Voltage` unit type:

```csharp
IAnalogInputPort analogIn = Device.CreateAnalogInputPort(Device.Pins.A00);
Voltage voltageReading = await analogIn.Read();
```

Similarly, in Meadow.Foundation, the `AnalogTemperatureSensor` driver returns a `Temperature` object when reading it:

```csharp
AnalogTemperature analogTemperature = new AnalogTemperature (
    Device, Device.Pins.A00, AnalogTemperature.KnownSensorType.LM35
);
Temperature temperature = await analogTemperature.Read();
```

## Unit Conversions

Each of these units have an enum of `UnitTypes` that they can be _described as_, as well as _accessed as_, via properties.

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

## `IChangeResult<UNIT>`

To help support the units architecture, the `IChangeResult<UNIT>` is used where .NET APIs typically use an `EventArgs` type which has the properties of `New` and `Old`, to carry data from the current event/notification, as well as the last event, for comparison, if one existed:

```csharp
public interface IChangeResult<UNIT> where UNIT: struct
{
    UNIT New { get; set; }
    UNIT? Old { get; set; }
}
```

### Nullability

Note the `Old` property is nullable because, typically, on the first notification, there won't be a previous reading, and this provides the ability to use C# 8's nullable patterns to prevent the dreaded `Null Reference Error`:

```csharp
Console.WriteLine($"new: {result.New.Celsius:N2}C, old: {result.Old?.Celsius:N2}C");
```

### IChangeResult in Use

`IChangeResult<UNIT>` is used for nearly all events and notifications in Meadow. For instance, the `TemperatureUpdated` event in `ITemperatureSensor` has the following signature:

```csharp
event EventHandler<IChangeResult<Temperature>> TemperatureUpdated;
```

Additionally, there is an accompanying `ChangeResult<UNIT>` class that provides a concrete implementation for the interface. 

As opposed to `EventArgs`, `ChangeResult<UNIT>` has the advantage of being a struct, which helps prevent prevent allocations and Garbage Collector (GC) churn.

### Units List

The following is a complete list of unit types currently available:

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

## [Next - Events and IObservable](/Meadow/Meadow_Basics/Events_and_IObservable)