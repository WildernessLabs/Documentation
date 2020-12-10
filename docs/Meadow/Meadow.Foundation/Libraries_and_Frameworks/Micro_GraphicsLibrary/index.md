---
layout: Meadow
title: Meadow µGraphicsLibrary
subtitle: Using the lightweight, MCU-optimized Meadow.Foundation µGraphicsLibrary with Meadow.
---

The Meadow.Foundation µGraphics library is a lightweight drawing framework used to create off screen (in-memory) graphics using standard drawing methods as well as bitmap and JPEG images.

Additionally, it implements `ITextDisplay`, so it can be used as an in memory canvas for use with the `TextDisplayMenu` library, enabling any graphics display to drive menus.

To use the graphics display you simply:
 1. Initialize it with a display so it has size and bit depth information.
 2. Draw or render your graphics to the context.
 3. Call `Show()` to push the in-memory representation out to the display.

# Initializing the Graphics Library

# Drawing

# Showing and Clearing

[el Jorge to populate]
