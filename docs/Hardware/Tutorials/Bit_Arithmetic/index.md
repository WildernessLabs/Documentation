---
layout: Hardware
title: Bit Arithmetic
subtitle: goes here. :)
---

# Intro

[bit arithmetic is seldom used in mobile and web app development, so it's not a common skill anymore. However, it's used a lot with hardware.]

## Resources for writing

some good content here: http://www.anotherchris.net/csharp/csharp-bit-manipulation-by-example-part-2/

use samples from Netduino.Foundation MCP2308 and other code:

```
// byte pinMask = (byte)(1 << pin); // left shift a 1
// byte pinValueMask = (byte)((value ? 1 : 0) << pin);

// check to see if that port is configured
if ((_iodir & (byte)(1 << pin)) != 0)
{
    // update our output latch (is this needed?)
    _olat = this._i2cBus.ReadRegister(_OutputLatchRegister);
    _olat |= (byte)((value ? 1 : 0) << pin);

                
}

```


Setting the bit - `value |= (byte) (1 << 7)`

Resetting a bit is `value &= ~((byte) (1 << 7))`


another good article: https://derekwill.com/2015/03/05/bit-processing-in-c/