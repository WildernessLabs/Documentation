---
layout: Meadow
title: File System
subtitle: Working with files and directories in Meadow
---

Meadow.OS has nearly full support for file and directory manipulation via `System.IO` API calls. In addition, the Meadow F7 board has onboard non-volatile flash storage that, while primarily used for app deployment and storage, can also be used as for persistent storage, like a traditional hard drive.

## Beta Status

File system support is currently in beta and has several known issues that you should be aware of if attempting to use:

* **Non-persistent during deployment** - Currently, during IDE deployment, all non app-related files are purged from flash. In a near future release, all files within a special app folder will be excluded from file purging. In the meantime, if you need to persist files between app deployment, you can use Meadow.CLI to manually deploy a new app.

## Flash Device Root 

The onboard flash device is mounted as a `meadow0` drive, so all file manipulation needs to start from there. 

For instance, to enumerate all the files within the root of the flash, you would execute the following:

```csharp
string appRootDir = "meadow0";
string[] files = Directory.GetFiles(appRootDir);
foreach (var file in files) {
    Console.WriteLine($"File: {file}");
}
```

Similarly, files should be created on this device. For instance, the following code example creates a simple text file called `hello.txt` in the root of the drive with some text in it:

```csharp
try {
    using (var fs = File.CreateText("/meadow0/hello.txt")) {
        fs.WriteLine("Hello Meadow File!");
    }
} catch (Exception ex) {
    Console.WriteLine(ex.Message);
}
```