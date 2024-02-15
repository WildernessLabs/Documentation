---
uid: Meadow.Foundation.Audio.Mp3.Yx5300
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Mp3.Yx5300
---

| Yx5300 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Audio.Mp3.Yx5300/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Audio.Mp3.Yx5300.svg?label=Meadow.Foundation.Audio.Mp3.Yx5300" alt="NuGet Gallery for Meadow.Foundation.Audio.Mp3.Yx5300" /></a> |

### Code Example

```csharp
Yx5300 mp3Player;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    mp3Player = new Yx5300(Device, Device.PlatformOS.GetSerialPortName("COM4"));

    return Task.CompletedTask;
}

public override async Task Run()
{
    mp3Player.SetVolume(15);

    var status = await mp3Player.GetStatus();
    Resolver.Log.Info($"Status: {status}");

    var count = await mp3Player.GetNumberOfTracksInFolder(0);
    Resolver.Log.Info($"Number of tracks: {count}");

    mp3Player.Play();

    await Task.Delay(5000); //leave playing for 5 seconds

    mp3Player.Next();

    await Task.Delay(5000); //leave playing for 5 seconds
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Samples/Yx5300_Sample)

### Wiring Example

To wire a Yx5300 to your Meadow board, connect the following:

| Yx5300 | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

![Wiring a Yx5300 to a Meadow F7](/API_Assets/Meadow.Foundation.Audio.Mp3.Yx5300/Yx5300_Fritzing.png)

# Class Yx5300
Represents a Yx5300 serial MP3 player

###### **Assembly**: Yx5300.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.Enums.cs#L3)
```csharp title="Declaration"
public class Yx5300 : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L16)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Reset()
Reset the YX5300 hardware
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L59)
```csharp title="Declaration"
public void Reset()
```
### Sleep()
Set the power state to sleep
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L68)
```csharp title="Declaration"
public void Sleep()
```
### WakeUp()
Set the power state to normal operations
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L77)
```csharp title="Declaration"
public void WakeUp()
```
### SetVolume(byte)
Set volume of YX5300
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L86)
```csharp title="Declaration"
public void SetVolume(byte volume)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *volume* | byte value from 0-30 |

### VolumeUp()
Increase audio volume by 1 (0-30)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L95)
```csharp title="Declaration"
public void VolumeUp()
```
### VolumeDown()
Decrease audio volume by 1 (0-30)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L103)
```csharp title="Declaration"
public void VolumeDown()
```
### GetVolume()
Get audio volume (0-30)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L113)
```csharp title="Declaration"
public Task<byte> GetVolume()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`
### GetIndexOfCurrentFile()
Get index of currently playing file
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L122)
```csharp title="Declaration"
public Task<byte> GetIndexOfCurrentFile()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`
### GetNumberOfFolders()
Get number of folders
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L131)
```csharp title="Declaration"
public Task<byte> GetNumberOfFolders()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`
### GetNumberOfTracksInFolder(byte)
Get count of mp3 files in folder
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L141)
```csharp title="Declaration"
public Task<byte> GetNumberOfTracksInFolder(byte folderIndex)
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *folderIndex* | index of folder |

### GetStatus()
Get status of YX5300
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L151)
```csharp title="Declaration"
public Task<Yx5300.PlayStatus> GetStatus()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Foundation.Audio.Mp3.Yx5300.PlayStatus>`: PlayStatus enum### Play()
Play current file
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L159)
```csharp title="Declaration"
public void Play()
```
### Play(byte)
Play song at index
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L168)
```csharp title="Declaration"
public void Play(byte songIndex)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *songIndex* | index of mp3 file in folder |

### Next()
Advance to next track
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L176)
```csharp title="Declaration"
public void Next()
```
### Previous()
Move back to previous track
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L184)
```csharp title="Declaration"
public void Previous()
```
### Pause()
Pause current mp3
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L192)
```csharp title="Declaration"
public void Pause()
```
### Stop()
Stop current mp3
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L200)
```csharp title="Declaration"
public void Stop()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L289)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Driver/Yx5300.cs#L299)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IDisposable`
