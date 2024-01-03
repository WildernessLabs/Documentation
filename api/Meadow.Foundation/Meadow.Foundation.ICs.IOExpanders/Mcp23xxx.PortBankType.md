---
title: Enum Mcp23xxx.PortBankType
sidebar_label: Mcp23xxx.PortBankType
description: "The MCP23xxx family has an address mapping concept for accessing registers.
This provides a way to easily address registers by group or type. This is only
relevant for 16-bit devices where it has two banks (Port A and B) of 8-bit
GPIO pins."
---
# Enum Mcp23xxx.PortBankType
The MCP23xxx family has an address mapping concept for accessing registers.
This provides a way to easily address registers by group or type. This is only
relevant for 16-bit devices where it has two banks (Port A and B) of 8-bit
GPIO pins.

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Enums.cs#L54)
```csharp title="Declaration"
public enum Mcp23xxx.PortBankType : byte
```
## Fields
### Segregated
This mode is used by 16-bit devices - it treats the two 8-bit banks as one 16-bit bank
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Enums.cs#L70)
```csharp title="Declaration"
Segregated = 0
```
### Paired
This mode keeps the two 8-bit banks registers separate
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Enums.cs#L87)
```csharp title="Declaration"
Paired = 1
```
