# Magnus Tools

The tools that are currently deployed are 
[quickstatements](https://github.com/wbstack/quickstatements),
[cradle](https://github.com/wbstack/cradle) and
[widar](https://github.com/wbstack/widar).

Each of these tools exist as fork of their originals with customizations for wbstack.

## Oauth Consumers

These tools use OAuth authentication for MediaWiki interactions.

OAuth consumer creation is automated using an internal only MediaWiki API action.

[magnustools](https://github.com/wbstack/magnustools) code, which is used by the tools as a composer library, is overridden to fetch consumer data from this API instead of an INI file ([code](https://github.com/wbstack/magnustools/blob/429f68414b98fed4800cc010b8813abb8d624eb5/public_html/php/WbstackMagnusOauth.php#L86-L131))

```mermaid
sequenceDiagram
    User->>+Tool: Request that will need Consumer details
    Note right of Tool: Tools need Consumer key or secret
    Tool->>+MediaWiki: Get the details of tool Consumer
    MediaWiki->>+MediaWiki: Get or create OAuth Consumer
    MediaWiki->>+Tool: Consumer Details
    Tool->>+User: Respond to original request
```


## tools-quickstatements

Added to the platform by popular demand as one of the main external tools used with Wikibase.

### Testing

Can be tested by using

```
CREATE
```

in the edit box and clicking import and run
## tools-cradle

Cradle uses widar for authentication.

## tools-widar

Widar is only deployed as cradle uses it for OAuth.
