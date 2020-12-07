# Queryservice

The queryservice is made up of a number of components:

- [queryservice](https://github.com/wbstack/queryservice) - Blazegraph SPARQL query service (WDQS flavour)
- [queryservice-gateway](https://github.com/wbstack/queryservice-gateway) - Custom gateway proxy to route traffic to the correct Blazegraph namespace based on request domain.
- [queryservice-updater](https://github.com/wbstack/queryservice-updater) - Custom updater to updater multiple sites from a single process.
- [queryservice-ui](https://github.com/wbstack/queryservice-ui) - Fork of the WDQS UI with modifications for wbstack.

For Requests:

```mermaid
graph LR
    U[User]:::user -->|1: Load UI| Ui[ui]
    U[User] -->|2: SPARQL Query| G
    G[gateway] -->|4: SPARQL Query| B[queryservice]
    G[gateway] -->|3: Get Blazegraph Namespace| A[API]:::other
    classDef user fill:#90ee90;
    classDef other fill:#ffcccb;
```

For Updates:

```mermaid
graph LR
    Up[updater] -->|1: Get Changed Entities| A[API]
    Up[updater] -->|2: Get Blazegraph Namespace| A[API]:::other
    Up[updater] -->|3: Get Entity Data| M[MediaWiki]:::other
    Up[updater] -->|4: UPDATE Query| B[queryservice]
    classDef other fill:#ffcccb;
```

## queryservice

## queryservice-gateway

## queryservice-ui

## queryservice-updater
