---
layout: Samples
title: LCD Display Sample
subtitle: Sample using the µLiquidCrystal LCD library
---

## LCD Display

This sample demonstrates how to control an LCD using the Adafruit I2C/SPI LCD backpack.

![LCD Backpack](SPILCDHelloWorld.png){:standalone}

## Code

The application producing the above output is as follows:

```csharp
using System.Threading;
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using SecretLabs.NETMF.Hardware.NetduinoPlus;
using MicroLiquidCrystal;

namespace HelloWorld
{
    public class Program
    {
        public static void Main()
        {
            var setup = new BaseShifterLcdTransferProvider.ShifterSetup()
            {
                BL = ShifterPin.GP7,
                RS = ShifterPin.GP1,
                RW = ShifterPin.None,
                Enable = ShifterPin.GP2,
                D4 = ShifterPin.GP6,
                D5 = ShifterPin.GP5,
                D6 = ShifterPin.GP4,
                D7 = ShifterPin.GP3
            };
            var lcdBus = new Shifter74Hc595LcdTransferProvider(SPI.SPI_module.SPI1, Pins.GPIO_PIN_D3,
                                                               Shifter74Hc595LcdTransferProvider.BitOrder.MSBFirst, setup);
            var lcd = new Lcd(lcdBus);
            lcd.Begin(16, 2);
            lcd.Write("Hello, world!");
            while (true)
            {
                lcd.SetCursorPosition(0, 1);
                lcd.Write((Utility.GetMachineTime().Ticks / 10000).ToString());
                Thread.Sleep(100);
            }
        }
    }
}
```

## Hardware

Connect the LCD to the Netduino as follows:

![](NetduinoAndLCDFritzing.png){:standalone}

### Discussion

A full discussion on SPI and the software can be found on the [Wilderness Labs](https://www.wildernesslabs.co/) SPI Pages:

* [Introduction to SPI](http://developer.wildernesslabs.co/Netduino/Input_Output/Digital/SPI/)
* [Controlling an LCD](http://developer.wildernesslabs.co/Netduino/Input_Output/Digital/SPI/ControllingLCD/)

### Hardware Required

* [Netduino](https://www.wildernesslabs.co/Netduino)
* [Adafruit I2C / SPI LCD Backpack](https://www.adafruit.com/product/292)

## [Netduino Samples Github Repository](https://github.com/WildernessLabs/Netduino_Samples)

Full source code for all of the samples can be found in the Netduino Samples repository on Github.