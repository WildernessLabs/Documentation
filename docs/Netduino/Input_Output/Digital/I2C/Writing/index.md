---
layout: Netduino
title: I2C Writing
subtitle: Writing data to an I2C device.
---

## Info

The previous sections of this guide presented an [overview of the I2C protocol](../) and demonstrated how to [read from the TMP102 temperature sensor](../Reading/).  This section will demonstrate how to write some data to the TMP102 temperature sensor.

### Netduino.Foundation I2CBus

The [Netduino.Foundation](http://Netduino.Foundation) framework contains an [`I2CBus`](http://netduino.foundation/API/Devices/Netduino/I2CBus/) class that makes I2C communication easy by encapsulating all of the low-level plumbing calls in an easy to use object. We recommend using that class for I2C communications rather than using the low-level calls directly.

## Writing to Registers and Multiple Transactions

As noted in the [reading guide](../Reading/), the `Execute` method can execute multiple transactions in a single call.  This will be illustrated in the following application that will:

* Reconfigure the TMP102 to return a 13-bit temperature reading
* Read the temperature as a 13-bit value

```csharp
I2CDevice.I2CTransaction[] reading = new I2CDevice.I2CTransaction[2];
byte[] repointToTemperatureRegister = { 0x00 };
reading[0] = I2CDevice.CreateWriteTransaction(repointToTemperatureRegister);
byte[] temperatureData = new byte[2];
reading[1] = I2CDevice.CreateReadTransaction(temperatureData);
int bytesRead = tmp102.Execute(reading, 100);
```

The call to `tmp102.Execute` in the above code will use the transactions in the `reading` array to firstly read the configuration from the sensor and finally read the current temperature. 

Configuration of the TMP102 is managed by a number of registers.  It should be noted that the use of registers to store data and configuration is common to both I2C and [SPI](../../SPI/index.md) devices.

### Registers

In the above example the application used the default power on state for the TMP102.  The default state allows the application to read the temperature.  The temperature itself is maintained in one of the internal registers and the read operation is simply returning the value in the register.

The number of registers and their meaning are usually documented in the data sheet for the component in question.

#### TMP102 Registers

The TMP102 has five registers:

* Current temperature
* Configuration
* T<sub>LOW</sub>
* T<sub>HIGH</sub>
* Pointer

The current temperature register is read only and is the one that the above application reads.  The remaining four registers are read-write registers and can be used to change the operation of the TMP102.

##### Pointer Register

The pointer register is an 8 bit wide register that indicates which of the remaining four registers should be accessed.  Applications can write to bits 0 and 1 of this register, bits 2-7 should be set to zero.  The pointer register is interpreted as follows:

| b1 | b0 | Description              |
|----|----|--------------------------|
|  0 |  0 | Temperature register     |
|  0 |  1 | Configuration register   |
|  1 |  0 | T<sub>LOW</sub> register |
|  1 |  1 | T<sub>HIGH</sub>         |

The default power on value of the TMP102 pointer register is 0 (temperature register).

##### Temperature Register

The temperature register holds 0&deg;C at power up.  Following a conversion the temperature reading is transferred to the temperature register.  The two byte register holds a 12 (or 13) bit value indicating the last reading along with a single bit indicating if this is a 12 or 13 bit reading.

###### 12-bit Reading:

Byte 1:

| b7  | b6  | b5  | b4  | b3  | b2  | b1  | b0  |
|-----|-----|-----|-----|-----|-----|-----|-----|
| T11 | T10 | T09 | T08 | T07 | T06 | T05 | T04 |

Byte 2:

| b7  | b6  | b5  | b4  | b3  | b2  | b1  | b0  |
|-----|-----|-----|-----|-----|-----|-----|-----|
| T03 | T02 | T01 | T00 |  0  |  0  |  0  |  0  |

###### 13-bit Reading:

Byte 1:

| b7  | b6  | b5  | b4  | b3  | b2  | b1  | b0  |
|-----|-----|-----|-----|-----|-----|-----|-----|
| T12 | T11 | T10 | T09 | T09 | T08 | T07 | T05 |

Byte 2:

| b7  | b6  | b5  | b4  | b3  | b2  | b1  | b0  |
|-----|-----|-----|-----|-----|-----|-----|-----|
| T04 | T03 | T02 | T01 | T00 |  0  |  0  |  1  |


##### Configuration Register

The configuration register controls how the TMP102 functions.  This register is a 16-bit register and as noted, this is a read-write register.  The control register allows the configuration of the following:

* Extended Mode
* Alert
* Conversion Rate
* Shutdown Mode
* Thermostat Mode
* Fault Queue
* Conversion Resolution
* One-Shot/Conversion Ready

For the purpose of this exercise the application will be changing only the _Extended Mode_ (EM) bit in the control register.  Setting this bit to 0 sets the TMP102 to use 12-bit mode.  A value of 1 will set the TMP102 to use 13-bit mode.

From the data sheet, the EM bit is bit 4 in the second byte of the configuration register.

#### Writing To Registers

The Pointer Register changes the register being accessed.  Multiple reads will use the previous value in the Pointer Register if a new value is not supplied.  Write operations require the pointer register to be supplied for each write operation.

### Software

The specification for the application was defined as follows:

* Reconfigure the TMP102 to return a 13-bit temperature reading
* Read the temperature as a 13-bit value

The code for this becomes:

```csharp
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using System.Threading;

namespace TMP102ReadWrite
{
    public class Program
    {
        /// <summary>
        /// Convert a byte to a two character hex string.
        /// </summary>
        /// <returns>Hexadecimal representation of the byte as a string.</returns>
        /// <param name="val">Byte to convert into a string.</param>
        public static string ByteToHex(byte val)
        {
            const string hex = "0123456789abcdef";
            return(new string(new char[] { '0', 'x', hex[(val & 0xf0) >> 4], hex[val & 0x0f] }));
        }

        /// <summary>
        /// Reads the TMP 102 configuration.
        /// </summary>
        /// <remarks>
        /// Create transactions to read the current configuration.  A write transaction
        /// is necessary to change the pointer register to point to the configuration
        /// registers.  A read transaction will then read the current configuration.
        /// </remarks>
        /// <param name="device">TMP102 I2CDevice object to read the configuration from.</param>
        private static byte[] ReadTMP102Configuration(I2CDevice device)
        {
            I2CDevice.I2CTransaction[] readConfiguration = new I2CDevice.I2CTransaction[2];
            byte[] pointerBuffer = new byte[1];
            pointerBuffer[0] = 1;
            readConfiguration[0] = I2CDevice.CreateWriteTransaction(pointerBuffer);
            //
            byte[] currentConfig = new byte[2];
            readConfiguration[1] = I2CDevice.CreateReadTransaction(currentConfig);
            device.Execute(readConfiguration, 100);
            Debug.Print("Configuration register: " + ByteToHex(currentConfig[0]) + ", " + ByteToHex(currentConfig[1]));
            return (currentConfig);
        }

        /// <summary>
        /// Main program loop.
        /// </summary>
        public static void Main()
        {
            //
            //  Create a new I2C device for the TMP102 on address 0x48 with the clock
            //  running at 50 KHz.
            //
            I2CDevice tmp102 = new I2CDevice(new I2CDevice.Configuration(0x48, 50));
            //
            //  Read the configuration prior to updating the conversion mode to 13-bit mode.
            //
            byte[] currentConfig = ReadTMP102Configuration(tmp102);
            //
            //  Now we have the configuration, set up to change the configuration between
            //  12 and 13 bit mode and read data from the sensor.
            //
            I2CDevice.I2CTransaction[] changeConfig = new I2CDevice.I2CTransaction[1];
            byte[] newConfiguration = { 0x01, currentConfig[0], (byte) (currentConfig[1] | 0x10) };
            changeConfig[0] = I2CDevice.CreateWriteTransaction(newConfiguration);
            tmp102.Execute(changeConfig, 100);
            Thread.Sleep(1000);
            //
            //  Now setup for reading the temperature.
            //
            I2CDevice.I2CTransaction[] reading = new I2CDevice.I2CTransaction[2];
            byte[] repointToTemperatureRegister = { 0x00 };
            reading[0] = I2CDevice.CreateWriteTransaction(repointToTemperatureRegister);
            byte[] temperatureData = new byte[2];
            reading[1] = I2CDevice.CreateReadTransaction(temperatureData);
            while (true)
            {
                //
                //  Read the temperature.
                //
                int bytesRead = tmp102.Execute(reading, 100);
                Debug.Print("Temperature data: "+ ByteToHex(temperatureData[0]) + ", " + ByteToHex(temperatureData[1]));
                //
                //  Convert the reading into Centigrade and Fahrenheit.
                //
                int sensorReading = 0;
                double centigrade = -273.15;
                double fahrenheit = centigrade * 1.8 + 32;
                if ((temperatureData[1] & 0x01) == 1)
                {
                    sensorReading = ((temperatureData[0] << 5) | (temperatureData[1]) >> 3);
                    Debug.Print("13-bit value retrieved.");
                }
                else
                {
                    sensorReading = ((temperatureData[0] << 4) | (temperatureData[1]) >> 4);
                    Debug.Print("12-bit value retrieved.");
                }
                centigrade = sensorReading * 0.0625;
                fahrenheit = centigrade * 1.8 + 32;
                //
                //  Display the readings in the debug window and pause before repeating.
                //
                Debug.Print(centigrade.ToString() + " C / " + fahrenheit.ToString() + " F");
                Thread.Sleep(1000);
            }
        }
    }
}
```

#### Key Elements

The application will read the configuration twice, once to verify the power on state, the second time to verify that the change from 12-bit mode to 13-bit mode has been applied.

```csharp
private static byte[] ReadTMP102Configuration(I2CDevice device)
```

This method will take an `I2CDevice` object and read the configuration.  The method uses two transactions, a write transaction will adjust the pointer register to point to the configuration register:

```csharp
I2CDevice.I2CTransaction[] readConfiguration = new I2CDevice.I2CTransaction[2];
byte[] pointerBuffer = new byte[1];
pointerBuffer[0] = 1;
readConfiguration[0] = I2CDevice.CreateWriteTransaction(pointerBuffer);
```

The second transaction reads the configuration from the TMP102:

```csharp
byte[] currentConfig = new byte[2];
readConfiguration[1] = I2CDevice.CreateReadTransaction(currentConfig);
```

Finally, the method executes the two transactions and displays the configuration in hexadecimal:

```csharp
device.Execute(readConfiguration, 100);
Debug.Print("Configuration register: " + ByteToHex(currentConfig[0]) + ", " + ByteToHex(currentConfig[1]));
```

A key point to note here is that a write and a read transaction are both executed together in a single method call.

Executing the above will result in a write following by a read:

![Read Configuration from TMP102](ReadConfiguration.png){:standalone}

The second green dot indicates the change from the write operation (setting the pointer register) to the read operation (reading the configuration register).

Next operation is to change the mode to 13-bit mode by changing the configuration register:

```csharp
byte[] currentConfig = ReadTMP102Configuration(tmp102);
I2CDevice.I2CTransaction[] changeConfig = new I2CDevice.I2CTransaction[1];
byte[] newConfiguration = { 0x01, currentConfig[0], (byte) (currentConfig[1] | 0x10) };
changeConfig[0] = I2CDevice.CreateWriteTransaction(newConfiguration);
tmp102.Execute(changeConfig, 100);
Thread.Sleep(1000);
```

This results in the following data transmission:

![N3 Writing Configuration Data to TMP102](WriteConfiguration.png){:standalone}

The `Sleep` method call ensures that the TMP102 has time to make at least one measurement before the application starts to read the temperature from the sensor.

```csharp
I2CDevice.I2CTransaction[] reading = new I2CDevice.I2CTransaction[2];
byte[] repointToTemperatureRegister = { 0x00 };
reading[0] = I2CDevice.CreateWriteTransaction(repointToTemperatureRegister);
byte[] temperatureData = new byte[2];
reading[1] = I2CDevice.CreateReadTransaction(temperatureData);
```

The read operation differs from the first application as it ensures that it is reading from the temperature register but explicitly setting the register (write transaction) before it reads the data from the register:

![Read Temperature From TMP102](ReadTemperature.png){:standalone}

##### Program Output

Successful deployment will give output similar to the following:

```
Configuration register: 0x60, 0xa0
Temperature data: 0x0c, 0xb1
13-bit value retrieved.
25.375 C / 77.675000000000011 F
Temperature data: 0x0c, 0xb1
13-bit value retrieved.
25.375 C / 77.675000000000011 F
Temperature data: 0x0c, 0xb1
13-bit value retrieved.
25.375 C / 77.675000000000011 F
```

## Further Information

* [This Wikipedia article](https://en.wikipedia.org/wiki/I%C2%B2C) contains a description of the protocol, the various modes and the bus characteristics.
* [Pull up resistors](/Hardware/Reference/Components/Resistors/PullUpAndPullDownResistors/)
* [Effects of Varying I2C Pull-Up Resistor (external link)](http://dsscircuits.com/articles/effects-of-varying-i2c-pull-up-resistors)
* [Netduino.Foundation `I2CBus`](http://netduino.foundation/API/Devices/Netduino/I2CBus/)