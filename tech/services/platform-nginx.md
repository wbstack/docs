# Platform Nginx

[Nginx](https://www.nginx.com/) is used as a reverse proxy layer to perform path based routing to difference services for sites hosted on wbstack.

Requests to platform services such as the management UI or API do not go via this layer.

```mermaid
graph LR
    platform-nginx--/w/rest.php, /w/rest.php-->mediawiki-api:::other
    platform-nginx--/w, /wiki-->mediawiki:::other
    platform-nginx--/query-->queryservice-ui:::other
    platform-nginx--/query/sparql-->queryservice:::other
    platform-nginx--/???-->etc...:::other
    classDef other fill:#ffcccb;
```

The exact routing can be seen in nginx.conf