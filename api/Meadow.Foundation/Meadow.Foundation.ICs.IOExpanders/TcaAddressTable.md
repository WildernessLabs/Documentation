---
title: Class TcaAddressTable
sidebar_label: TcaAddressTable
description: "TcaAddressTable class to calculate I2C addresses"
---
# Class TcaAddressTable
TcaAddressTable class to calculate I2C addresses

###### **Assembly**: Tca9548a.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/TcaAddressTable.cs#L6)
```csharp title="Declaration"
public static class TcaAddressTable
```
## Fields
### MinAddress
Minimum/lowest address
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/TcaAddressTable.cs#L11)
```csharp title="Declaration"
public static byte MinAddress
```
### MaxAddress
Maximum/highest address
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/TcaAddressTable.cs#L16)
```csharp title="Declaration"
public static byte MaxAddress
```
## Methods
### GetAddressFromPins(bool, bool, bool)
Get the device address from the high/low status of pins.

If a pin is pulled logic high, pin value is true.
If a pin is pulled logic low, pin value is false.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/TcaAddressTable.cs#L28)
```csharp title="Declaration"
public static byte GetAddressFromPins(bool pinA0, bool pinA1, bool pinA2)
```

##### Returns

`System.Byte`: The `System.Byte` value of the address
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *pinA0* | Status of Pin A0 |
| `System.Boolean` | *pinA1* | Status of Pin A1 |
| `System.Boolean` | *pinA2* | Status of Pin A2 |

### IsValidAddress(byte)
Determine if the supplied address is valid for this device class
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/TcaAddressTable.cs#L54)
```csharp title="Declaration"
public static bool IsValidAddress(byte address)
```

##### Returns

`System.Boolean`: A `System.Boolean` indicating if the address is valid
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | The address to validate |

