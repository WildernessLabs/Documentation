# Tips and tricks for Docusaurus

## Tip 1: Links don't resolve if the last folder name in the link has a period
For example, this works...
```md
This is my content. This is my [link](Meadow/Fundamentals)
```

But this doesn't...
```md
This is my content. This is my [link](Meadow/Meadow.OS)
```

Do you see the difference? "Meadow.OS" as a period in its name. To get around this, simply append "/index" to it, and that tells docusaurus exactly how to resolve the link.
```md
This is my content. This is my [link](Meadow/Meadow.OS/index)
```

## Tip 2: Html needs to use Reacts JSX pattern for html attributes
Since Docusaurus is built on top of React, really every content page boils down to being a react component. This has it's positives and negatives. One negative is that we can't just html the way html should html.

Something like this...
```html
<img src="/mysource.jpg" style="min-width:50%" />
```

now should instead look like this
```jsx
<img src="/mysource.jpg" style={{minWidth:"50%"}} />
```

You likely probably noticed that the style attribute is different there. That's the JSX syntax for making custom values within html tags.