# Extension files
#### Extensions contain different files, depending on the functionality provided. The following are some of the most frequently used files:

### Structure

 ```
├── background.js
├── LICENSE
├── manifest.json
├── package.json
├── package-lock.json
├── popup
│   ├── hello.html
│   └── popup.js
├── README.md
└── scripts
    └── scripts.js
```


### Folders
- ### The manifest
> The extension's manifest is the only required file that must have a specific file name: manifest.json . It also has to be located in the extension's root directory. The manifest records important metadata, defines resources, declares permissions, and identifies which files to run in the background and on the page.
- ### The service worker
> The extension service worker handles and listens for browser events. There are many types of events, such as navigating to a new page, removing a bookmark, or closing a tab. It can use all the Chrome APIs, but it cannot interact directly with the content of web pages; that’s the job of content scripts.
- ### Content scripts
> Content scripts execute Javascript in the context of a web page. They can also read and modify the DOM of the pages they're injected into. Content Scripts can only use a subset of the Chrome APIs but can indirectly access the rest by exchanging messages with the extension service worker.
- ### The popup and other pages
> An extension can include various HTML files, such as a popup, an options page, and other HTML pages. All these pages have access to Chrome APIs.
