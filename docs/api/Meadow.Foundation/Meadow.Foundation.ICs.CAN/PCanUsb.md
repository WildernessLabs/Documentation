---
title: Class PCanUsb
sidebar_label: PCanUsb
description: Represents a PCAN USB CAN controller implementation.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.CAN/PCanUsb
---
# Class PCanUsb
Represents a PCAN USB CAN controller implementation.

###### **Assembly**: Meadow.PCanBasic.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanUsb.cs#L13)
```csharp title="Declaration"
public class PCanUsb : ICanController
```
**Implements:**  
`Meadow.Hardware.ICanController`

## Methods
### CreateCanBus(CanBitrate, int)
Creates a CAN bus with the specified bitrate and bus number.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.CAN.PCanBasic/Driver/PCanUsb.cs#L44)
```csharp title="Declaration"
public ICanBus CreateCanBus(CanBitrate bitrate, int busNumber = 0)
```

##### Returns

`Meadow.Hardware.ICanBus`: An instance of `Meadow.Hardware.ICanBus` configured for the specified bitrate and bus number.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.CanBitrate` | *bitrate* | The bitrate to configure for the CAN bus. |
| `System.Int32` | *busNumber* | The bus number to use for the CAN interface. Defaults to 0, corresponding to `Peak.Can.Basic.BackwardCompatibility.PCANBasic.PCAN_USBBUS1`. |


##### Exceptions

`System.NotImplementedException`  
Thrown if the method is invoked without implementing the required functionality.

## Implements

* `Meadow.Hardware.ICanController`
