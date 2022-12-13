---
layout: Meadow
title: SD Card use with Core-Compute module
subtitle: Working with an SD card on the Meadow Core-Compute Development Kit
---

The Meadow Core-Compute Development Kit includes an SD card add-on, and one can be connected to a Core-Compute module designs. You can use the SD card system for many tasks such as saving data to a removable card or providing configuration updates.

There is an event subscription system to monitor for external storage events in your Meadow app. And, from there, file operations can be done with the `System.IO` API as described in the [File System docs](/Meadow/Meadow.OS/File_System/).

## Check for external storage devices

If your Meadow device might have external storage at some point while your app is running, you can find it by iterating over your device's external storage items.

```csharp
var sdCardStorage = Device.PlatformOS.ExternalStorage.FirstOrDefault();
```

On the Core-Compute Development Kit, the SD card will be the only external storage location, which means any non-null value that comes back will be the SD card. (On platforms like Meadow.Linux, you may have several external storage devices.)

With the SD card storage identified, you can then write a file to the card using any approach you prefer. For example, you can write strings to a simple text file.

```csharp
using (var file = File.CreateText(Path.Combine(sdCardStorage.Directory.FullName, "hello_meadow.txt")))
{
    file.Write("Hello, Meadow!");
}
```

Because the SD card can be inserted or removed, you'll want to have error handling in place to recover from errors. If your SD card is removed between finding it through `ExternalStorage` and writing to it, for example, your file writes may result in a `DirectoryNotFoundException` being thrown.

## Monitor for external storage events

In addition to iterating over external storage, you can also listen for storage to be inserted or ejected. To have your app notified of external storage events, subscribe to the `ExternalStorageEvent` for your device.

```csharp
public async override Task Initialize()
{
    // Watch for new external storage events...
    Device.PlatformOS.ExternalStorageEvent += PlatformOS_ExternalStorageEvent;

    await base.Initialize();
}

void PlatformOS_ExternalStorageEvent(IExternalStorage storage, ExternalStorageState state)
{
    // The affected storage and what happened to it are available from the event arguments.
    Resolver.Log.Info($"Storage Event: {storage.Directory.FullName} is {state}");
}
```

For example, when external storage such as an SD card is inserted, you can react by writing to it.

```csharp
void PlatformOS_ExternalStorageEvent(IExternalStorage storage, ExternalStorageState state)
{
    if (state == ExternalStorageState.Inserted)
    {
        using (var file = File.AppendText(Path.Combine(sdCardStorage.Directory.FullName, "hello_meadow.txt")))
        {
            file.Write($"Hello, Meadow! {DateTime.Now.ToString("yyyy-MM-dd")}");
        }
    }
}
```

If a Meadow device were running in a remote location, local log files could be written to one of the [Meadow named directories](/Meadow/Meadow.OS/File_System/). Then, when external storage is inserted, it could copy those log files to the new storage location for analysis.

Or, if your app wants to allow configuration changes via SD card import, your Meadow app could scan for new config files and alter local configuration accordingly.
