# TODO

* [ ] Ensure all URLs align or redirect from the current docs site to the new.
  May need to use third-party system for client-side redirects.
  Also an option to add stub static files that do client-side redirects or React routing.
  * [ ] Maybe lower priority in favor of a tolerable 404 page.
* [ ] Include API override files into generated DocFX content (e.g., https://wildernesslabs.github.io/DocsDocusaurus/docs/api/Meadow/ByteOrder/ vs. http://beta-developer.wildernesslabs.co/docs/api/Meadow/Meadow.ByteOrder.html).
* [ ] Fix generated between-docs links in DocFX (e.g., `IMeadowCloudService` link to `CloudLog` [example build log details](https://github.com/WildernessLabs/DocsDocusaurus/actions/runs/6307613560/job/17141911245#step:22:82))
  * [ ] Re-enable `onBrokenLinks: 'error'` in Docusaurus config.
* [ ] Customize link previews (e.g., when shared in Slack, likely also Twitter and friends). Currently shows a Docusaurus image.
* [ ] Default to index.md when clicking on the Developers top nav item, rather than jumping directly to Meadow Guides (e.g., http://developer.wildernesslabs.co/docs/api/Meadow/index.html vs. http://developer.wildernesslabs.co/docs/api/Meadow/Meadow.html; currently only https://wildernesslabs.github.io/DocsDocusaurus/docs/api/Meadow/, which hosts the latter)
* [ ] Handle `` images ([example](http://localhost:3000/DocsDocusaurus/docs/Meadow/Meadow_Basics/IO/Digital/))
  * [ ] Research if this does anything currently, and if we need it going forward.
* [ ] Update to WL social card (becomes `<meta property="og:image" content="{whatever}" ... />`)
  * [ ] Find current WL social card, if any
* [ ] Deal with `npm install` warning for `@babel/plugin-proposal-object-rest-spread@7.12.1` to use `@babel/plugin-transform-object-rest-spread` instead
* [ ] Get some site setting values from config (possibly `customFields`), especially for footer details
* [ ] Footer: [May require theme work] Add "Portland, Oregon" as text-only label (no `to` or `href`)
* [ ] API docs links should be relative to the built site, currently absolute to the live docs until they are generated here.
  * [ ] Generate API docs (possibly via https://github.com/Jan0660/DocFxMarkdownGen)
* [ ] Handle current docs YAML front matter within the Docusaurus system.
* [ ] Refactor raw HTML with `style="..."` attributes. Currently blowing up their own page build, which can also cause linked pages to throw errors for broken links.
  * [ ] docs\Meadow\Meadow.Foundation\Libraries_and_Frameworks\Maple.Server\index.md
  * [ ] docs\Meadow\Meadow.Foundation\Libraries_and_Frameworks\MicroGraphics\index.md
  * [ ] docs\Meadow\Meadow.Foundation\Libraries_and_Frameworks\MicroLayout\index.md
  * [ ] docs\Meadow\Meadow.Foundation\Libraries_and_Frameworks\TextDisplayMenu\index.md
  * [ ] docs\Meadow\Meadow.OS\Bluetooth\index.md
  * [ ] docs\Meadow\Meadow.OS\Cellular\index.md
  * [ ] docs\Meadow\Meadow.OS\Configuration\index.md
  * [ ] docs\Meadow\Meadow.OS\Configuration\Application_Settings_Configuration\index.md
  * [ ] docs\Meadow\Meadow.OS\Configuration\OS_Device_Configuration\index.md
  * [ ] docs\Meadow\Meadow.OS\Configuration\WiFi_Configuration\index.md
  * [ ] docs\Meadow\Meadow.OS\Networking\index.md
  * [ ] docs\Meadow\Meadow.OS\RTC\index.md
  * [ ] docs\Meadow\Release_Notes\Beta3\index.md
* [ ] Update or handle `[``IIODevice``](xref:Meadow.Hardware.IIODevice)` links (e.g., docs\Meadow\Release_Notes\Beta2\index.md)
* [x] Add other content sections (e.g., /Hardware, /Tutorials, ...)

## Notes

* You appear to be able to build successfully locally and have things blow up in deployment during `npm run build`.
* If a page contains weirdness, like a `style` attribute on a raw HTML element (e.g., [table at the bottom of Maple](http://beta-developer.wildernesslabs.co/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Maple.Server/)), it won't build correctly and won't throw an error. But, after that, any page that references it will have a broken link error, making them fail to build.
* Sometimes links to a folder with an `index.md` file will work, sometimes they won't. It's not clear why (e.g., docs\Meadow\Meadow_Basics\index.md link to Meadow_Foundation at the bottom).
