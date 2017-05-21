---
title: I2C
---

I2C (Inter-Integrated Circuit) is a communication protocol allowing bi-directional communication between two or more devices using only two wires.


The two bus wires used are usually labelled SDA (Data) and SCK (Clock).  Typical clock speeds are 100KHz for low speed devices with speeds of 3.4MHz possible for high speed devices.  Common speeds encounterd by hobbyists are 100KHz and 400KHz. 

Devices on the bus will act as either a _master_ or a _slave_ devices.  Both _master_ and _slave_ can transmit and receive on the bus.

### Device Addresses

The use of multiple devices on the single bus is made possible through device addresses.  Each device on the bus is allocated a specific address.  Some devices allow the address to be configured to one or more alternatives to help with address collision.  This is achieved using _address pins_ which would be tied low or high depending upon the device and the address required.

Addresses are 7-bits in length giving a maximum number of 128 devices on the bus.  In practice there are often far fewer due to bus capacitance issues.

### Read / Write Bit

A Master device will start the communication session by sending the address of the device it wishes to communicate with along with a single bit that indicates the mode of the communication: _read_ or _write_.  The combination of the 7-bit address and the single read / write bit gives an eight bit packet header.

### Pull-up Resistors

Both of the bus lines (SDA and SCK) require pull-up resistors to be connected to them.  The value of the pull-up resistor will depend upon the capacitance of the bus.  The number of components on the board, type of substrate used will all influence the bus capacitance.

Most I2C breakout boards are supplied with pull-up resistors already on the breakout board.  In the case where one is not supplied then a 4K7 resistor is usually good enough for prototyping.

This in-depth article on the [Effects of Varying I2C Pull-Up Resistor](http://dsscircuits.com/articles/effects-of-varying-i2c-pull-up-resistors) explains why pull-up resistors are important and how to determine the ideal value for the resistor.

### Further Information

[This Wikipedia article](https://en.wikipedia.org/wiki/I%C2%B2C) contains a description of the protocol, the various modes and the bus characteristics.


## Netduino I2C Pins

The Netduino has two pins allocated for the I2C protocol.  These pins are labelled SD (for SDA) and SC (for SCK) and can be found above the 13 digital pins on the board.

![N3 Pinout Diagram](../../../About/Netduino3_Pinout.svg)

## TMP102 I2C Temperature Breakout Board

Use of the I2C bus on the Netduino will be illustrated using a temperature module.  The TMP102 is a commonly available temperature module capable of measuring temperatures in the range -40&deg;C to +125&deg;C with a maximum resolution of 0.0625&deg;C.  This device uses I2C and can be powered by a 3.3V signal, ideal for use with Netduino.

### Purchasing

TMP102 breakout modules can be purchased from [Sparkfun](https://www.sparkfun.com/products/13314).

## Using I2C on the Netduino

Reading the current temperature from the TMP102 will illustrate the basic software requirements for successful communication with an I2C device, namely a simple read operation. 

### Wiring up the TMP102 and Netduino

Firsly, ensure that the Netduino is disconnected from power and the USB connector.  Once complete, place the TMP102 into a piece of breadboard (you will need to solder male pins to the breakout board first).

Next make the following connections between the temperature breakout board and the Netduino:

| TMP102 Pin Name | Netduino Pin Name | Wire Color in Photo Below |
|-----------------|-------------------|---------------------------|
| SDA             | SD                | Blue                      |
| SCK             | SC                | Yellow                    |
| V<sub>cc</sub>  | 3.3V              | Red                       |
| GND             | GND               | Black                     |
| ADD0            | GND               | Black                     |

![Netduino Connected to TMP102](Netduino3AndTMP102.jpg)

There are two yellow and two blue leads in the photo.  The second blue and yellows lead are connected to a [logic analyzer](https://en.wikipedia.org/wiki/Logic_analyzer), more on this later.

### Software

Open Visual Studio (or Xamarin Studio) and follow the instructions on the [Getting Started](../../GettingStarted) page and start a new project.  Copy the following code and paste it into the _program.cs_ file replacing the default code.

```CSharp
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using System.Threading;

namespace TMP102
{
	public class Program
	{
		public static void Main()
		{
			//
			//  Create a new I2C device for the TMP102 on address 0x48 with the clock
			//  running at 50 KHz.
			//
			I2CDevice tmp102 = new I2CDevice(new I2CDevice.Configuration(0x48, 50));
			//
			//  Create a transaction to read two bytes of data from the TMP102 sensor.
			//
			byte[] buffer = new byte[2];
			I2CDevice.I2CTransaction[] reading = new I2CDevice.I2CTransaction[1];
			reading[0] = I2CDevice.CreateReadTransaction(buffer);
			while (true)
			{
				//
				//  Read the temperature.
				//
				int bytesRead = tmp102.Execute(reading, 100);
				//
				//  Convert the reading into Centigrade and Fahrenheit.
				//
				int sensorReading = ((buffer[0] << 8) | buffer[1]) >> 4;
				double centigrade = sensorReading * 0.0625;
				double fahrenheit = centigrade * 1.8 + 32;
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

Reconnect the Netduino to the USB cable then save and run the application.  If everything has been connected correctly you will start to see temperature measurements in the _Application Output / Debug_ window.

#### Key Elements

The data sheet for the TMP102 states that the default address for the TMP102 is 0x48, so the first task is to create a new _I2CDevice_ object that defines how we connect to the TMP102:

```CSharp
I2CDevice tmp102 = new I2CDevice(new I2CDevice.Configuration(0x48, 50));
```

The above code creates the _tmp102_ object where the device has an address of 0x48 and the communication speed will be 50KHz.

Temperature readings are returned from the TMP102 as a two byte value and so a buffer is needed to store the results of the read opertiation:

```CSharp
byte[] buffer = new byte[2];
```

NETMF uses transaction to communicate with I2C devices.  Using an array of transactions allows multiple operation to be completed at the same time.  In this case, there is only one read operation and the array of transations consists of a single element:

```CSharp
I2CDevice.I2CTransaction[] reading = new I2CDevice.I2CTransaction[1];
reading[0] = I2CDevice.CreateReadTransaction(buffer);
```

More complex cases allow multiple operations to be executed as a simple ooperation simply by adding more transations to the array.

In the above code, an array _reading_ is created to hold the single transaction that should be executed.  Two transaction types are supported and these are created with the _I2CDevice.CreateReadTransaction_ and the _I2CDevice.CreateWriteTransaction_ methods.

At this point the initialisation and set up is complete.  The main program loop is entered and the temperature reading is read repeatedly using the following statement:

```CSharp
int bytesRead = tmp102.Execute(reading, 100);
```

The _Execute_ method above takes an array of transactions, in our case the single read transaction and a timeout value in milliseconds.

The remainder of the code simply calculates the temperature using the formula derived from the data sheet.

#### Program Output

Successful deployment of the application should reduce in a stream of temperature readings, one per second:

22.5625 C / 72.612500000000011 F<br/>
22.5625 C / 72.612500000000011 F<br/>
22.5625 C / 72.612500000000011 F<br/>
22.5625 C / 72.612500000000011 F<br/>
22.5625 C / 72.612500000000011 F<br/>
22.5625 C / 72.612500000000011 F

#### Logic Analyser Output

As noted earlier, a second yellow and blue wire can be seen connected to the circuit.  These allow the logic analyzer to be connected to the circuit.

The logic analyzer was configured to read data for two seconds.  The data was then processed by an I2C protocol decoder.  This resulted in the following trace:

![Logic Analyzer Trace](I2CLogicAnalyserOutput.png)

The trace has been annotated to indicate the signal line and the protocol being analyzed.

Starting from the left of the data signal:

- Start bit indicated by the green dot
- Device address and access mode (0x91)
- Two data bytes (0x15 and 0xC0)
- Stop bit indicated by the red dot

It is interesting to note that the device address and mode byte are encoded with the device address transmitted first followed by the mode bit.  I2C uses 1 to represent a read transaction and 0 to represent a write transaction.

In the case of the above application, the address is 0x48 and Netduino is reading from the device.  Read mode is indicated by a 1 and write by a 0.  This results in a packet header of 0x91:

| Item                   | b7 | b6 | b5 | b4 | b3 | b2 | b1 | b0 | Notes                                    |
|------------------------|----|----|----|----|----|----|----|----|------------------------------------------|
| Device address         |  1 |  0 |  0 |  1 |  0 |  0 |  0 |  0 | Device address shifted left by one place |
| Read / Write indicator |  0 |  0 |  0 |  0 |  0 |  0 |  0 |  1 | Read = 1                                 |
| Packet header          |  1 |  0 |  0 |  1 |  0 |  0 |  0 |  1 | Address or-ed with mode bit = 0x91       |

When reading the logic analyzer traces, read operations to this device have the first byte set to 0x91 whilst write operations to the same device have the first byte set to 0x90.