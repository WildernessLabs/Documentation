---
layout: Hardware
title: Resistors
subtitle: Current-limiting components.
---

## Overview

Resistors are possibly one of the most common components that you will use.  A resistor has three properties that should be considered when working with an electrical circuit:

- Resistance
- Tolerance
- Power rating

For a more in-depth discussion about resistors and resistance, check out [Part 4 of the Electronics Tutorial](/Hardware/Tutorials/Electronics/Part4/Resistance/).

### Resistance

Resistance is measured in Ohms symbol (`Ω`).  This may also be prefixed with a letter to indicate the scale of the value.  Common scale factors relevant to resistors are:

| Letter | Prefix | Magnitude      | Value      |
|--------|--------|----------------|------------|
|   M    |  Mega  | 10<sup>6</sup> | 10,000,000 |
| k / K  |  Kilo  | 10<sup>3</sup> | 10,000     |
|   m    |  milli | 10<sup>-3</sup>| 0.001      |

Therefore, a `1kΩ`; resistor has a resistance of `1,000Ω`;.

The prefix letter may also be used to indicate the location of a decimal point. For example, a `4K7` resistor has a resistance of `4.7kΩ`.

### Tolerance

The tolerance is expressed as a percentage.  Common tolerances are 1%, 5% and 10%.  Lower tolerance resistors are more expensive due to the higher requirements of the manufacturing process.

A `4.7kΩ` resistor with a 5% tolerance could have a value between 4,`465Ω` and `4,935Ω`.

### Power Rating

Resistance to the passage of electrical current generates heat.  The amount of heat generated can be calculated using the following formula:

```
P = I x V
```

The power is stated in Watts (`W`) and the power rating of the resistor should always be greater than the product of the current (`I`) flowing through the resistor and the voltage (`V`) drop across the resistor.

## Schematic Symbol

There are two possible symbols used in circuit diagrams (schematics):

- Zig-zag line (IEEE)
- Rectangle (IEC)

The use zig-zag line is more commonly used in America than the rectangle.

#### IEEE Symbol

![Resistor Circuit Symbol](Resistor.svg){:standalone}
