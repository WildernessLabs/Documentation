---
title: 'Interface IUnit<TSelf, TUnit>'
sidebar_label: 'IUnit<TSelf, TUnit>'
description: >-
  Defines a standardized interface for unit value types that represent physical
  quantities.
slug: '/docs/api/Meadow/Meadow.Units/IUnit`TSelf, TUnit`'
---
# Interface IUnit&lt;TSelf, TUnit&gt;
Defines a standardized interface for unit value types that represent physical quantities.

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Common/IUnit.cs#L10)
```csharp title="Declaration"
public interface IUnit<TSelf, TUnit> where TSelf : struct, IUnit<TSelf, TUnit> where TUnit : struct, Enum
```
## Methods
### ToCanonical()
Converts the current unit value to its canonical unit representation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Common/IUnit.cs#L18)
```csharp title="Declaration"
double ToCanonical()
```

##### Returns

`System.Double`: The value expressed in the canonical unit### GetCanonicalUnitType()
Gets the enum value that represents the canonical unit of measurement for this type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Common/IUnit.cs#L24)
```csharp title="Declaration"
TUnit GetCanonicalUnitType()
```

##### Returns

`<TUnit>`: The canonical unit type
