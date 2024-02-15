---
uid: Meadow.Foundation.Displays.Epd2in9
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in9
---

| Epd2in9 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaperWaveShare/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaperWaveShare.svg?label=Meadow.Foundation.Displays.ePaperWaveShare" alt="NuGet Gallery for Meadow.Foundation.Displays.ePaperWaveShare" /></a> |


# Class Epd2in9
Represents a WaveShare Epd2in9 ePaper display
128x296, 2.9 inch e-Ink display, SPI interface

###### **Assembly**: ePaperWaveShare.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in9.cs#L9)
```csharp title="Declaration"
public class Epd2in9 : Ssd1608, ISpiPeripheral, IDisposable, IGraphicsDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.EPaperBase](../Ssd1608)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`, [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)


## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
