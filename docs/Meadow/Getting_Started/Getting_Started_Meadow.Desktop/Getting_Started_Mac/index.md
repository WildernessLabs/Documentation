---
layout: Meadow
title: Hello, Meadow.Desktop on macOS
sidebar_label: macOS
subtitle: "To get up and running with Meadow.Mac, follow these steps:"
---

![](wildernesslabs_desktop_getting_started.png)

<Tabs groupId="ide">
  <TabItem value="visualstudiocode" label="Visual Studio Code">

### Step 1 - Install .NET Runtime

Download and install the latest version of the [.NET runtime](https://dotnet.microsoft.com/en-us/download).

### Step 2 - Install Visual Studio Code

Download and Install [Visual Studio Code](https://visualstudio.microsoft.com/) to prepare your development machine.

### Step 3 - Install Meadow Project Templates

Open a console window and enter the following command to install a list of Meadow project templates:

```console
dotnet new install WildernessLabs.Meadow.Template
```

When installed, you’ll see a list of templates available:

```console
The following template packages will be installed:
   WildernessLabs.Meadow.Template

Success: WildernessLabs.Meadow.Template installed the following templates:
Template Name            Short Name          Language        Tags
-----------------------  ------------------  --------------  -------------------
Meadow Core-Compute App  meadow-ccm          [C#],F#,VB.NET  Meadow/Console
Meadow Desktop App       meadow-desktop      [C#]            Meadow/Console
Meadow F7 Feather App    meadow-feather      [C#],F#,VB.NET  Meadow/Console
Meadow Jetson Nano App   meadow-jetson-nano  [C#]            Meadow/Console
Meadow Library           meadow-library      [C#],F#,VB.NET  Meadow/Library
Meadow Project Lab App   meadow-project-lab  [C#]            Meadow/Console
Meadow Raspberry Pi App  meadow-rpi          [C#]            Meadow/Console
Meadow reTerminal App    meadow-reterminal   [C#]            Meadow/Console
Meadow StartKit App      meadow-startkit     [C#]            Meadow/App/StartKit
```

### Step 4 - Create your first Meadow application

Lets verify everything is set up by deploying your first Meadow application. 

Open VSCode in a new Terminal within enter the following command to create a new Meadow.Desktop project:

```console
dotnet new meadow-desktop --name MacDemo
```

This Meadow.Desktop application opens a 320x240 pixel window saying `Hello, World` using [MicroLayout](../../../Meadow.Foundation/Libraries_and_Frameworks/MicroLayout/index.md).

### Step 5 - Run a Meadow Application

With no code changes, let's run this app on your machine. 

In VSCode, open a terminal inside the project folder, build the project with the command:

```console
dotnet build
```

And finally to run the Meadow application, use the command:

```console
dotnet run
```

A window should show up in the center of the screen saying `Hello, World`, like below:

![Create new Meadow Application](wildernesslabs_desktop_winforms.png)

### Step 6 - Check out additional samples

You can check more samples in our [Meadow.Samples](https://github.com/WildernessLabs/Meadow.Samples) GitHub repo.

![Meadow.Desktop.Samples GitHub Repository](../../Common_Assets/wildernesslabs-meadow-desktop-samples.jpg)

  </TabItem>
</Tabs>
