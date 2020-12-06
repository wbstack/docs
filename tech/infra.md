# Infrastructure Services

Infrastructures Services are not part of the main platform, but are used by it.

## Edge

Order of requests:

1) The internet makes requests through a cloud provided load balancer.
2) That load balancer passes all requests through to the Ingress on Kubernetes.
3) The Ingress terminates HTTPs and routes requests:
    1) to Nginx (for the sites hosted by the platform)
    1) to a general service (such as the API or UI)
4) Based on the path of the request, Nginx will route traffic to the appropriate service.

```mermaid
graph LR;
    Internet-->LoadBalancer-->Ingress-->platform-nginx;
    platform-nginx-->Service1;
    platform-nginx-->Service2;
    platform-nginx-->Service3;
    Ingress-->api&ui
```

### ingress

[Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/#what-is-ingress) is a Kubernetes concept that exposes HTTP and HTTPS routes from outside the cluster to services within the cluster.

### cert-manager

[cert-manager](https://cert-manager.io/) provides automatic certificate management in Kubernetes.

This is used in conjunction with the ingress.

### platform-nginx

[Nginx](https://www.nginx.com/) is used as a reverse proxy layer to perform path based routing to difference services for sites hosted on wbstack.

Requests to platform services such as the main UI or API do not go via this layer.

## Persistence

### sql

An sql service running MariaDB operates for both the main platform API and MediaWiki sites.

### redis

Redis is used by a variety of deployed services.
