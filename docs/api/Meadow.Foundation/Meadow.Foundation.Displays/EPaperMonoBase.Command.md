---
title: Enum EPaperMonoBase.Command
sidebar_label: EPaperMonoBase.Command
description: Display commands
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays/EPaperMonoBase.Command
---
# Enum EPaperMonoBase.Command
Display commands

###### **Assembly**: EPaper.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L339)
```csharp title="Declaration"
protected enum EPaperMonoBase.Command : byte
```
## Fields
### DRIVER_OUTPUT_CONTROL
Driver output control
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L344)
```csharp title="Declaration"
DRIVER_OUTPUT_CONTROL = 1
```
### BOOSTER_SOFT_START_CONTROL
Booster soft start control
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L348)
```csharp title="Declaration"
BOOSTER_SOFT_START_CONTROL = 12
```
### GATE_SCAN_START_POSITION
Gate scan start position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L352)
```csharp title="Declaration"
GATE_SCAN_START_POSITION = 15
```
### DEEP_SLEEP_MODE
Deep sleep mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L356)
```csharp title="Declaration"
DEEP_SLEEP_MODE = 16
```
### DATA_ENTRY_MODE_SETTING
Data entry mode setting
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L360)
```csharp title="Declaration"
DATA_ENTRY_MODE_SETTING = 17
```
### SW_RESET
Software reset
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L364)
```csharp title="Declaration"
SW_RESET = 18
```
### TEMPERATURE_SENSOR_CONTROL
Temperature sensor control
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L368)
```csharp title="Declaration"
TEMPERATURE_SENSOR_CONTROL = 26
```
### MASTER_ACTIVATION
Master activation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L372)
```csharp title="Declaration"
MASTER_ACTIVATION = 32
```
### DISPLAY_UPDATE_CONTROL_1
Display update control 1
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L376)
```csharp title="Declaration"
DISPLAY_UPDATE_CONTROL_1 = 33
```
### DISPLAY_UPDATE_CONTROL_2
Display update control 2
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L380)
```csharp title="Declaration"
DISPLAY_UPDATE_CONTROL_2 = 34
```
### WRITE_RAM
Write ram
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L384)
```csharp title="Declaration"
WRITE_RAM = 36
```
### WRITE_VCOM_REGISTER
Write VCOM register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L388)
```csharp title="Declaration"
WRITE_VCOM_REGISTER = 44
```
### WRITE_LUT_REGISTER
Write look up table register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L392)
```csharp title="Declaration"
WRITE_LUT_REGISTER = 50
```
### SET_DUMMY_LINE_PERIOD
Set dummy line period
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L396)
```csharp title="Declaration"
SET_DUMMY_LINE_PERIOD = 58
```
### SET_GATE_TIME
Set gate time
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L400)
```csharp title="Declaration"
SET_GATE_TIME = 59
```
### BORDER_WAVEFORM_CONTROL
Border waveform control
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L404)
```csharp title="Declaration"
BORDER_WAVEFORM_CONTROL = 60
```
### SET_RAM_X_ADDRESS_START_END_POSITION
Set ram address x start and end position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L408)
```csharp title="Declaration"
SET_RAM_X_ADDRESS_START_END_POSITION = 68
```
### SET_RAM_Y_ADDRESS_START_END_POSITION
Set ram address y start and end position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L412)
```csharp title="Declaration"
SET_RAM_Y_ADDRESS_START_END_POSITION = 69
```
### SET_RAM_X_ADDRESS_COUNTER
Set ram x address counter
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L416)
```csharp title="Declaration"
SET_RAM_X_ADDRESS_COUNTER = 78
```
### SET_RAM_Y_ADDRESS_COUNTER
Set ram y address counter
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L420)
```csharp title="Declaration"
SET_RAM_Y_ADDRESS_COUNTER = 79
```
### TERMINATE_FRAME_READ_WRITE
Terminate frame read and write
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L424)
```csharp title="Declaration"
TERMINATE_FRAME_READ_WRITE = 255
```
