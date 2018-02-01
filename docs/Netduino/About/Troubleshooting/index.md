---
layout: Netduino
title: Troubleshooting
subtitle: Debugging and fixing issues with Netduino.
---

# Info


## Runtime Errors

### `Resolve: unknown type: System.Diagnostics.DebuggerBrowsableState`

Right after deployment, your application fails to execute and this error show up in the **Output** window:

```
Resolve: unknown type: System.Diagnostics.DebuggerBrowsableState
Error: ff000000
```

This is a bug in the Roslyn compiler that showed up in VS 2015 (it doesn't express itself in VS 2013).

#### Fix

To fix, add a file called `DebuggerBrowsableState.cs` to your project with the following code in it:

```csharp
namespace System.Diagnostics
{
    public enum DebuggerBrowsableState
    {
        Never = 0,
        Collapsed = 2,
        RootHidden = 3
    }
}
```
