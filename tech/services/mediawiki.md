# Mediawiki

[MediaWiki](https://github.com/wbstack/mediawiki) is deployed alongside many extensions and custom configuration.

The localization cache is populated as part of the container image.

One of the main modifications to MediaWiki is the entrypoints, all of which load code custom to wbstack before loading MediaWiki code.

For example `index.php` starts like this:

```php
<?php
// Load custom wbstack code
require_once __DIR__ . '/wikWikiInfoOrFail.php';
// Actual MediaWiki code below here...
```

This code makes a request to the platform API to get needed details.

A short APC cache exists for the wiki details to avoid spamming the API.

## Running maintenance scripts

In a mediawiki container:

```sh
WBS_DOMAIN=addshore-alpha.wiki.opencura.com php ./w/maintenance/showJobs.php
```
