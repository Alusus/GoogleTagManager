# GoogleTagManager
[[عربي]](README.ar.md)

Alusus bindings for GoogleTagManager. This library is designed to work with WebPlatform.

## Usage

These steps assume you already have a WebPlatform project and you want to add GoogleTagManager to it.

* Add the library to your project:

```
import "Apm";
Apm.importFile("Alusus/GoogleTagManager");
```

* Add other dependencies if they aren't already added in your project either directly or indirectly.
  In addition to WebPlatform, this library depends on the following packages:
  * Srl.Fs
  * Srl.System
  * Srl.String
  * Srl.SrdRef
  * Promises
  * Json

* Add module `GoogleTagManager` to the modules that WebPlatform will look for endpoints in:

```
def serverModules: { MyServer, GoogleTagManager };
buildAndRunServer[serverModules](options);
```

* Initialize the frontend inside the UI endpoint:

```
await(GoogleTagManager.initializeFrontend("<account_id>"));
```

* Use other GoogleTagManager functions to push the right events according to your app's needs. For example, to push
  a conversion event for use with Google Ads call this function from a UI endpoint when the user makes a purchase:

```
GoogleTagManager.pushConversionEvent("<account_id>", "<conversion_id>", "<transaction_id>");
```

---

## License

Copyright (C) 2026 Sarmad Abdullah

This project is licensed under the GNU Lesser General Public License v3.0 (LGPL-3.0). See the `COPYING` and `COPYING.LESSER` files for details.

