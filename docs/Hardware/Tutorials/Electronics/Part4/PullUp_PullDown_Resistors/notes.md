# Notes on Pulling resistors

Sources:

 * [Wikipedia](https://en.wikipedia.org/wiki/Pull-up_resistor)
 * [Wikipedia - Biasing Article](https://en.wikipedia.org/wiki/Biasing)
 * [Transistor Biasing @ Electronics Tutorials](https://www.electronics-tutorials.ws/amplifier/transistor-biasing.html)

 
# Notes about Values

From the wiki article:

> Pull-down resistors can be safely used with CMOS logic gates because the inputs are voltage-controlled. TTL logic inputs that are left un-connected inherently float high, and require a much lower valued pull-down resistor to force the input low. A standard TTL input at logic "1" is normally operated assuming a source current of 40 µA, and a voltage level above 2.4 V, allowing a pull-up resistor of no more than 50 kohms; whereas the TTL input at logic "0" will be expected to sink 1.6 mA at a voltage below 0.8 V, requiring a pull-down resistor less than 500 ohms.[1] Holding unused TTL inputs low consumes more current. For that reason, pull-up resistors are preferred in TTL circuits.

> In bipolar logic families operating at 5 VDC, a typical pull-up resistor value will be 1000–5000 Ω, based on the requirement to provide the required logic level current over the full operating range of temperature and supply voltage. For CMOS and MOS logic, much higher values of resistor can be used, several thousand to a million ohms, since the required leakage current at a logic input is small.