---
layout: Meadow
title: Cross-platform Display
subtitle: Cross-platform Display
---

Meadow.Desktop includes a built-in Window that can render MicroGraphics directly from your dev machine, which is perfect to rapidly build HMI screens before deploying them on a physical device. It's powered by [Silk.NET](https://dotnet.github.io/Silk.NET/), a high-speed, advanced graphics library that can run on Windows, macOS and varioud Linux distributions.

### Using Meadow.Desktop's Display

When running a Meadow.Desktop app, you can immediately access its integrated Silk.NET display by referencing the `Display` property exponsed by `Device`:

```csharp
IResizablePixelDisplay display = Device.Display;
```

The default display says is 320x240, which is Project Lab's onboard display's resolution.

### Adjust `Display` dimensions and scaling

Since that `Device.Display` is a `IResizablePixelDisplay`, you can change the resolution to whatever dimensions you want using the `Resize()` method:

```csharp
Device.Display.Resize(width: 400, height: 300);
```

The code snippet above creates a pixel perfect 400x300 display (not accounting for window borders and top bar).

![Default display](wildernesslabs-display-400-300.jpg)

If your monitor has a high pixel density, a 400x300 window might look quite small, but you can use the `displayScale` to scale up the `Display`s buffer size, drawing bigger pixels:

```csharp
Device.Display.Resize(width: 400, height: 300, displayScale: 2);
```

The code snippet above now generates a 400x300 pixel display with a `displayScale` of 2, showing a window thats twice the size.

![Default display](wildernesslabs-display-800-600.jpg)