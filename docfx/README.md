
# DocFX Site

For instructions on how to use DocFX, visit https://dotnet.github.io/docfx/

## Getting Started

1. Install DocFX
  
  On OSX ([brew](https://brew.sh/) required)
  ```
  brew install docfx
  ```
  On Windows ([chocolately](https://chocolatey.org/docs/installation) required)
  ```
  choco install docfx -y
  ```

2. Clone Repo  

If you haven't cloned [Meadow.Core](https://github.com/WildernessLabs/Meadow.Core) and [Meadow.Foundation](https://github.com/WildernessLabs/Meadow.Foundation) do so first and then clone `docfx` as a sibling. 

  ```
  git clone git@github.com:WildernessLabs/Meadow.Core.git
  ```

3. Launch site:
  
  ```
  cd docfx
  docfx docfx.json --serve
  ```

### Configuring Scripts First Time

To make the helper scripts executable, run these commands in the terminal after cloning:

```
chmod +x ./build-serve-docs.sh
chmod +x ./build-docs.sh
chmod +x ./get-latest.sh
```

## Committing Changes

Before committing back to the repo, run `./build-docs.sh`. This will ensure you have the latest from  `Meadow.Core` and `Meadow.Foundation` repos.  Here's a breakdown of helper scripts:  
- `./build-docs.sh` - runs `./get-latest.sh`, then runs `docfx docfx.json`       
- `./build-serve-docs.sh` - runs `./get-latest.sh`, then runs `docfx docfx.json --serve`  
- `./get-latest.sh` - gets latest from `Meadow.Core` and `Meadow.Foundation`

## DocFX stuff

You can link to APIs this way:

* MD link notation: `[IApp](xref:Meadow.IApp)`
* `@` notation: `@"Meadow.IApp"`

Both will resolve at build time to the `Meadow.IApp` api doc entry.

The `@` notation is shorter, but the MD notation allows you to set the link title.

## Troubleshooting

If it fails on Mac/Linux with some `SQLitePCLRaw` nonsense, run this:

```
nuget install -OutputDirectory $TMPDIR SQLitePCLRaw.core -ExcludeVersion
for docfx in /usr/local/Cellar/docfx/*; do cp "$TMPDIR/SQLitePCLRaw.core/lib/net45/SQLitePCLRaw.core.dll" "$docfx/libexec"; done
```

## License

### Copyright

Content copyright Wilderness Labs.

Electronics tutorial copyright Bryan Costanich.

### Documentation Prose

All the documentation prose is released under a [Creative Commons 
Attribution + Noncommercial + NoDerivatives (CC BY-NC-ND) license](Licenses/CreativeCommons_BY_NC_ND.md). Feel free to share verbatim in non-commercial usage and provide attribution. Commercial usage may be granted in certain use cases. If you need a more permissive license, please contact us at [hello@wildernesslabs.co](mailto:hello@wildernesslabs.co).

![Creative Commons BY-NC-ND Logo](Licenses/Cc-by-nc-nd_icon.png)

[Human Readable Version of the License](https://creativecommons.org/licenses/by-nc-nd/4.0/)

### Code Samples and Code Snippets

All code samples and code snippets, whether they be full applications, or embedded snippets within the documentation are released under the [Apache 2 license](Licenses/Apache2_License.md). Feel free to use and distribute the code as you see fit, under the very permissive terms of the license.
