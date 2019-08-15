---
layout: Netduino
title: Debug.Print
subtitle: Printing debug messages to the console.
---

## Intro

The .Net Microframework (NETMF) doesn't include the eponymous `Console.WriteLine`, which can be incredibly useful in getting debug messages to the console. However, it does have `Debug.Print` which is essentially the same thing.

### `Microsoft.SPOT` Namespace

In order to use `Debug.Print`, you have to add a reference to the `Microsoft.SPOT.Native` dll. Additionally, it may be useful to add a `using` statement so that you don't have to use the fully qualified name, as in the following:

```csharp
using Microsoft.SPOT;

...

    public void DoSomething()
    {
        Debug.Print("Got here!");
        ...
    }
```

The debug output can then be seen in the output window in Visual Studio:

![](Debug_Output_Window.png){:standalone}
