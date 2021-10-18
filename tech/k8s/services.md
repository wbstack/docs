# Services

## Infrastructure services

These services are generally shared and used by multiple components.

They do not really add to / are part of the deployed application at all.

### ingress-nginx

Values should probably be defined in the chart, but for now they live here..

The one thing we might need to change is the IP?

```yml
controller:
  service:
    loadBalancerIP: <IP Address>
```

### cert-manager

Some cert-manager things were already deployed in the Definitions stages of this guide.

cert-manager also has 2 sets of helmfiles to deploy.

- [cert-manager](https://github.com/wbstack/deploy/tree/main/k8s/helm/cert-manager) - Created the cert-manager controller (manages certificates).
- [clusterissuers](https://github.com/wbstack/deploy/tree/main/k8s/helm/clusterissuers) - Creates the cert-manager cluster issuers that connect to Let's Encrypt.

**TBA values!**

## Persistence services

### sql

We could use an external sql service, but in the interest of depending on as few services as possible, and keeping costs down, this is currently done in k8s.

- [sql](https://github.com/wbstack/deploy/tree/main/k8s/helm/sql) - Replication aware sql setup running MariaDB
- [adminer](https://github.com/wbstack/deploy/tree/main/k8s/helm/adminer) - Web interface access for sql (OPTIONAL)

Some private values will be needed:

```yml
services:
  sql:
    rootPassword: 'somePassword'
    replicationPassword: 'someOtherPassword'
```

Once the sql service is running we can create some secrets for use by other services.

- [tasks/init-sql-secrets.yaml](https://github.com/wbstack/deploy/blob/main/k8s/tasks/init-sql-secrets.yaml) - Creates the SQL secrets / password required for various SQL services (and api user and a mediawiki db manager user)
- [tasks/init-sql.yaml](https://github.com/wbstack/deploy/blob/main/k8s/tasks/init-sql.yaml) - Creates the SQL users, from the secrets just created, for various SQL services (wait for the first jobs to finish first!!!)

Both of these steps should probably be performed as part of the helm files deploying the services rather than here.

You can find some more docs for interacting with sql in the [docs/services directory](../services).

### redis

We could use an external redis service, but in the interest of depending on as few services as possible, and keeping costs down, this is currently done in k8s.

- [redis](https://github.com/wbstack/deploy/tree/main/k8s/helm/redis) - Replicated redis setup for use by services

Some private values will be needed:

```yml
services:
  redis:
    password: somePassword
```

You can find some more docs for interacting with redis in the [docs/services directory](../services).

## Application services

Web facing frontend for the platform app services:

- [platform-nginx](https://github.com/wbstack/deploy/tree/main/k8s/helm/platform-nginx) - Nginx ingress doing path based routing
  - Possible modifications:
    - nginx.conf `set_real_ip_from` needs to be set to the range of possible Pod IP addresses
    - nginx.conf `resolver` probably doesn't need adjusting if your using a default looking cluster
  - NOTE: nginx will initially fail as it can't resolve upstream hosts (as we didn't make the services yet)
    - Maybe this should all be done in a different order? OR it shouldn't need the services to exist? and fallback?
- [platform-apps-ingress](https://github.com/wbstack/deploy/tree/main/k8s/helm/platform-apps-ingress) - Expose the platform-nginx with an ingress
  - For other usecases this probably needs its own helm charts currently D: (TODO make the chart generic...)

And the platform to manage all the things:

- [api](https://github.com/wbstack/deploy/tree/main/k8s/helm/api) (API users already created in the sql step)
- [ui](https://github.com/wbstack/deploy/tree/main/k8s/helm/ui)

And the app services themselves:

- [mediawiki135](https://github.com/wbstack/deploy/tree/main/k8s/helm/mediawiki135)
- [elasticsearch](https://github.com/wbstack/deploy/tree/main/k8s/helm/elasticsearch)
- [queryservice](https://github.com/wbstack/deploy/tree/main/k8s/helm/queryservice)
- [queryservice-gateway](https://github.com/wbstack/deploy/tree/main/k8s/helm/queryservice-gateway)
- [queryservice-updater](https://github.com/wbstack/deploy/tree/main/k8s/helm/queryservice-updater)
- [queryservice-ui](https://github.com/wbstack/deploy/tree/main/k8s/helm/queryservice-ui)
- [tool-quickstatements](https://github.com/wbstack/deploy/tree/main/k8s/helm/tool-quickstatements)
- [tool-widar](https://github.com/wbstack/deploy/tree/main/k8s/helm/tool-widar)
- [tool-cradle](https://github.com/wbstack/deploy/tree/main/k8s/helm/tool-cradle)
