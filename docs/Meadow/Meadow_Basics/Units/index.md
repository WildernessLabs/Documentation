---
layout: Meadow
title: Units
subtitle: [stuff]
---

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