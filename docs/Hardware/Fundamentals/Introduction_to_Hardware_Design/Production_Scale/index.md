---
layout: Hardware
title: Production Scale
subtitle: Understanding the unit economics of various production scales.
---

It's helpful to think in terms of unit production volumes to get an understanding of production phase and unit/economic scale. As production quantities increase, PCB fabrication, component, and PCB Assembly costs per unit drop drastically.

As a general guide, there are roughly 3 categories of scale that affect production costs. These unit scales are tied closely to underlying costs for the BoM and assembly labor:

| Production Phase/Scale | Volume in units | Unit Economics |
|------------------------|-----------------|----------------|
| **Prototype**          | < 1,000         | Highest cost. Typically at less than 1,000 units, the price per unit cost of a product is very high and this is considered _prototype_ scale. Only the most specialized industrial and commerical IoT products are typically able to demand the price necessary to make the economics work at prototype volumes. At this scale, products can cost as much as 10x as much as high-volume production and are typically used for validation and integration testing. |
| **Low-Volume Production** | 1,000 - 10,000 | At less than 10,000 units, price per unit is still very high, and often products at these volumes have little to no margin. This is a typical scale for many IoT devices during initial market testing. |
| **High-Volume Production** | > 10,000 | There is a major price break at 10k units, with the per-unit cost often being 10% of the cost at prototype scale. For consumer and some commercial IoT, typically high-volume production must be met in order to price a product competitively and this is typically where margins start becoming high enough for a product to be successful. |

When pricing a product or solution, the volume at which they will be produced is an important factor.

## [Next: Breadboard Prototyping](/Hardware/Fundamentals/Introduction_to_Hardware_Design/Breadboarding/)