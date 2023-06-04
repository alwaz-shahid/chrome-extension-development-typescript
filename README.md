# Chrome Extension Development Teamplate



## Extension files
> Extensions contain different files, depending on the functionality provided. The following are some of the most frequently used files:

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

## Migration from mv2 to mv3:

here's a list of some of the key changes and migrations from Manifest V2 to V3 in Google Chrome extensions:

- Background page: 
> In Manifest V2, extensions could use a background page to run persistent scripts and handle events. In Manifest V3, this has been replaced with a new background service worker model, which provides better performance and security.

- Content scripts: 
> In Manifest V2, content scripts could access the extension APIs directly. In Manifest V3, content scripts are isolated from the extension and can only interact with it through messaging.

- Permissions: 
> In Manifest V2, extensions could request permissions to access various features and APIs. In Manifest V3, permissions have been restructured and some APIs are no longer available to extensions.

- Browser actions:
> In Manifest V2, extensions could add browser actions to the Chrome toolbar. In Manifest V3, this has been replaced with the new page actions API.

- Message passing: 
> In Manifest V2, extensions could communicate with each other using the chrome.runtime.sendMessage() method. In Manifest V3, this has been replaced with a new messaging API that uses a more secure and efficient message passing model.

- DeclarativeNetRequest: 
> In Manifest V2, extensions could use the DeclarativeNetRequest API to block or modify network requests. In Manifest V3, this API has been replaced with a new declarativeNetRequest API.



### The following code shows the supported manifest keys. For additional usage information and code samples, visit the link of each key.
```
{
  // Required
  "manifest_version": 3,
  "name": "My Extension",
  "version": "1.0.1",

  // Recommended
  "action": {...},
  "default_locale": "en",
  "description": "A plain text description",
  "icons": {...},

  // Optional
  "author": "developer@example.com",  
  "automation": {...},
  "background": {...},
  "chrome_settings_overrides": {...},
  "chrome_url_overrides": {...},
  "commands": {...},
  "content_scripts": [{...}],
  "content_security_policy": {...},
  "cross_origin_embedder_policy": {...},
  "cross_origin_opener_policy": {...},
  "declarative_net_request": {...},
  "devtools_page": "devtools.html",
  "event_rules": [{...}],
  "export": {...},
  "externally_connectable": {...},
  "file_browser_handlers": [...],
  "file_system_provider_capabilities": {...},
  "homepage_url": "https://path/to/homepage",
  "host_permissions": [...],
  "import": [{...}],
  "incognito": "spanning, split, or not_allowed",
  "input_components": [{...}],
  "key": "publicKey",
  "minimum_chrome_version": "107",
  "oauth2": {...},
  "omnibox": {...},
  "optional_host_permissions": ["..."],
  "optional_permissions": ["..."],
  "options_page": "options.html",
  "options_ui": {...},
  "permissions": ["..."],
  "requirements": {...},
  "sandbox": {...},
  "short_name": "Short Name",
  "side_panel": {...},
  "storage": {...},
  "tts_engine": {...},
  "update_url": "https://path/to/updateInfo.xml",
  "version_name": "1.0 beta",
  "web_accessible_resources": [...]
}```
