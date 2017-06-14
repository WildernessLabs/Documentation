---
title: Style Guide
---

# Article Structure

## Separation of Conceptual and Concrete Examples




## Additional Resources

The _Additional Resources_ Section should go at the bottom of the article and use the following general pattern:

### Further Reading

 * **[Article Title](Link)** - Brief description/relevance.
 * **[Article Title](Link)** - Brief description/relevance.

### Product Links
 
 * **[Product Title](Link)** - Brief description/relevance.
 * **[Product Title](Link)** - Brief description/relevance.


# Markdown Syntax Reference

## Inline Code/Backticks

Use backticks (\`) for inline code, variable names, pins, or other code-like symbols. 

### Examples

#### Inline code 

In this, case, we'd use the `foo` var to store our data.


#### Pin/Wire Symbols

The two bus wires used are usually labelled `SDA` (Data) and `SCK` (Clock). 

#### Part Values

Capacitance/resistance values should also be back-ticked:

  "supplied then a `47K` resistor..."

## Code Blocks/Triple Backtick

In addition to code blocks, console output, terminal commands, etc., should be in a triple backtick code block.

### Examples

#### Application/Console Output

Putting console text in a triple backtick block has the benefit of differentiating it from prose, as well as removing the need for `<br/>` tags:

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