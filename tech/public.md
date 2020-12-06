# Public Interface

All traffic into the platform or hosted sites runs through a Kubernetes ingress and nginx proxy.

## Platform

The platform itself is made up of a simple UI [www.wbstack.com](https://www.wbstack.com/) and API [www.wbstack.com/api](https://www.wbstack.com/api).

## Sites

All Sites exist under a single domain (or subdomain).

For example for the site [addshore-alpha.wiki.opencura.com](https://addshore-alpha.wiki.opencura.com):

- MediaWiki
  - [addshore-alpha.wiki.opencura.com/w](https://addshore-alpha.wiki.opencura.com/w)
  - [addshore-alpha.wiki.opencura.com/wiki](https://addshore-alpha.wiki.opencura.com/wiki)
- Query
  - [addshore-alpha.wiki.opencura.com/query](https://addshore-alpha.wiki.opencura.com/query)
  - [addshore-alpha.wiki.opencura.com/query/sparql](https://addshore-alpha.wiki.opencura.com/query/sparql)
- Miscellaneous Tools
  - [addshore-alpha.wiki.opencura.com/tools/cradle](https://addshore-alpha.wiki.opencura.com/tools/cradle)
  - [addshore-alpha.wiki.opencura.com/tools/quickstatements](https://addshore-alpha.wiki.opencura.com/tools/quickstatements)
  - [addshore-alpha.wiki.opencura.com/tools/widar](https://addshore-alpha.wiki.opencura.com/tools/widar)