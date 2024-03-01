---
layout: Meadow
title: MicroLayout Library
subtitle: Using the lightweight, MCU-optimized Meadow.Foundation HMI UI library with Meadow.
---

If you're working on an IoT project with a display, then you're almost certainly wanting to show information to a user. Drawing that information using drawing primitives can be both cumbersome and non-portable. We at Wilderness Labs have released our MicroLayout library to help .NET developers easily create lightweight HMIs for their projects.

MicroLayout uses a "screen with controls" paradigm for layout out your user interface. A DisplayScreen encapsulates and abstracts the physical display using MicroGraphics. To that DisplayScreen, you can add any number of Controls to the DisplayScreen.Controls collection. MicroLayout currently supports four controls: DisplayLabel, DisplayButton, DisplayImage and DisplayBox which you can then use to design your user interface using pixel-based coordinates and sizes.

For example, if you want to create a Box with a Label on it, you simply Create a DisplayBox and a DisplayLabel and then add them to the DisplayScreen in back-to-front order.

```csharp
_screen = new DisplayScreen(projLab.Display, Meadow.Foundation.Graphics.RotationType._270Degrees);

_screen.Controls.Add(
    new DisplayBox(0, 0, _screen.Width / 2, _screen.Height / 2)
    {
        ForeColor = Color.Red
    },
    new DisplayLabel(0, 0, _screen.Width / 2, _screen.Height / 2)
    {
        Text = "Hello World!",
        TextColor = Color.Black,
        BackColor = Color.Transparent,
        VerticalAlignment = VerticalAlignment.Center,
        HorizontalAlignment = HorizontalAlignment.Center
    });
```
It should look like this on a ILI4498 320x240 screen.

<img src="meadow-microlayout-hello-world.jpg" style={{width:"50%"}} />

## Controls

### Box

Draws a colored rectangle:

```csharp
displayScreen.Controls.Add(new Box(
    left: 20, 
    top: 20, 
    width: displayScreen.Width - 40, 
    height: displayScreen.Height - 40)
{
    ForeColor = Color.Red
});
```

The sample code draws a red rectangle.

![microlayout box](microlayout_box.png)

### Label

```csharp
displayScreen.Controls.Add(new Label(
    left: 20,
    top: 20,
    width: displayScreen.Width - 40,
    height: displayScreen.Height - 40)
{
    Text = "Hello World",
    TextColor = Color.Red,
    BackColor = Color.White,
    Font = new Font12x20(),
    HorizontalAlignment = HorizontalAlignment.Center,
    VerticalAlignment = VerticalAlignment.Center,
});
```

The sample code draws Hello World Label in the center, text color red and label's background white.

![microlayout box](microlayout_label.png)

### Picture

```csharp
var image = Image.LoadFromResource("ProjectLabViews.Resources.img_meadow.bmp");

displayScreen.Controls.Add(new Picture(
    left: 20,
    top: 20,
    width: displayScreen.Width - 40,
    height: displayScreen.Height - 40,
    image: image)
{
    BackColor = Color.DarkBlue
});
```

The sample code draws Hello World Label in the center, text color red and label's background white.

![microlayout box](microlayout_picture.png)

### Line Chart

```csharp
var data = new List<double>
{
    1.2,
    1.5,
    2.2,
    2.5,
    1.8
};

var series = new LineChartSeries()
{
    LineColor = Color.Red,
    PointColor = Color.Green,
    LineStroke = 4,
    PointSize = 6,
    ShowLines = true,
    ShowPoints = true,
};

for (int i = 0; i < data.Count; i++)
{
    series.Points.Add(i*2, data[i]);
}

var chart = new LineChart(
    left: 20,
    top: 20,
    width: displayScreen.Width - 40,
    height: displayScreen.Height - 40)
{
    BackgroundColor = Color.DarkBlue,
    ShowYAxisLabels = true
};
chart.Series.Add(series);

displayScreen.Controls.Add(chart);
```

The sample code draws Hello World Label in the center, text color red and label's background white.

![microlayout box](microlayout_linechart.png)

### Progress Bar

Draws a colored progress bar:

```csharp
displayScreen.Controls.Add(new Box(
    left: 20, 
    top: 20, 
    width: displayScreen.Width - 40, 
    height: displayScreen.Height - 40)
{
    ForeColor = Color.Red
});
```

The sample code draws a red rectangle.

![microlayout box](microlayout_box.png)

## Interactive Menu Example

You can move, resize or recolor the controls at run time to easily create effects and animations. For example, I've created a very simple Menu sample for the [ProjectLab v3](https://store.wildernesslabs.co/collections/frontpage/products/project-lab-board) that uses DisplayLabels for the menu items and a DisplayBox that sits behind the DisplayLabels as a "highlight."

```csharp
// we compose the screen from the back forward, so put the box on first
_highlightBox = new DisplayBox(0, -1, screen.Width, ItemHeight + 2)
{
    ForeColor = SelectionColor,
    Filled = true,
};

screen.Controls.Add(_highlightBox);

for (var i = 0; i < items.Length; i++)
{
    _labels[i] = new DisplayLabel(
        left: x,
        top: i * height,
        width: screen.Width,
        height: height)
    {
        Text = items[i],
        Font = MenuFont,
        BackColor = Color.Transparent,
        VerticalAlignment = VerticalAlignment.Center,
    };

    screen.Controls.Add(_labels[i]);

    y += height;
}
```

Clicking on the up or down button moves the `DisplayBox` and changes the `TextColor` of selected menu item to provide contrast.

```csharp
public void Draw(int oldRow, int newRow)
{
    _labels[oldRow].TextColor = UnselectedTextColor;
    _labels[newRow].TextColor = SelectedTextColor;

    _highlightBox.Top = _labels[newRow].Top - 1;
}
```

The project running should look like this:

<img src="meadow-microlayout-menu.gif" style={{width:"50%"}} />

The full source for the Menu sample is available in the [Project Lab Samples](https://github.com/WildernessLabs/Meadow.ProjectLab.Samples) repository.

If you would like to try out MicroLayout or would like to contribute, the full source code is available in the [Meadow.Foundation](https://github.com/WildernessLabs/Meadow.Foundation) repository. If you have any questions or feature requests, reach out to us on our [public Slack](http://slackinvite.wildernesslabs.co/) channel.