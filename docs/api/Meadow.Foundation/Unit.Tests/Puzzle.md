---
title: Class Puzzle
sidebar_label: Puzzle
slug: /docs/api/Meadow.Foundation/Unit.Tests/Puzzle
---
# Class Puzzle


###### **Assembly**: MicroJson.Unit.Tests.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Tests/MicroJson.Unit.Tests/test types/Puzzle.cs#L5)
```csharp title="Declaration"
public class Puzzle
```
## Properties
### Pieces

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Tests/MicroJson.Unit.Tests/test types/Puzzle.cs#L7)
```csharp title="Declaration"
public List<PuzzlePiece> Pieces { get; set; }
```
### MinMoves

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Tests/MicroJson.Unit.Tests/test types/Puzzle.cs#L9)
```csharp title="Declaration"
public int MinMoves { get; set; }
```
### NumBlocks

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Tests/MicroJson.Unit.Tests/test types/Puzzle.cs#L10)
```csharp title="Declaration"
public int NumBlocks { get; }
```
## Methods
### AddPiece(int, int, PieceType)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Tests/MicroJson.Unit.Tests/test types/Puzzle.cs#L17)
```csharp title="Declaration"
public bool AddPiece(int x, int y, PieceType type)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |
| [Unit.Tests.PieceType](../Unit.Tests/PieceType) | *type* |

