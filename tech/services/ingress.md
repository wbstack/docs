# Ingress

## ingress-nginx

[Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/#what-is-ingress) is a Kubernetes concept that exposes HTTP and HTTPS routes from outside the cluster to services within the cluster.

The ingress attaches to a LoadBalancer provided by Google Cloud.

We deploy [this chart](https://hub.helm.sh/charts/stable/nginx-ingress) which deploys [this service](https://github.com/kubernetes/ingress-nginx).
The changelog for the service can be found [here](https://github.com/kubernetes/ingress-nginx/blob/master/Changelog.md).

**Sequence:**

1) The internet makes requests through a cloud provided load balancer.
2) That load balancer passes all requests through to the Ingress on Kubernetes.
3) The Ingress terminates HTTPs and routes traffic to the appropriate service.

```mermaid
graph LR
    Internet:::other-->LoadBalancer:::other-->Ingress-->platform-nginx:::other
    Ingress-->api:::other
    Ingress-->ui:::other
    classDef other fill:#ffcccb;
```

### Update notes

Guidance for updating to new versions of the helm chart.

- Find a new version of the chart to update to
- Read the RELNOTES of the chart and also the service if needed
  - You can figure out if the service changes byt doing `helmfile diff`
- `helmfile apply` the update
- Make sure the ingress points still load

## cert-manager

[cert-manager](https://cert-manager.io/) provides automatic certificate management in Kubernetes.

Reading:

- [Quickstart with nginx ingress](https://docs.cert-manager.io/en/release-0.10/tutorials/acme/quick-start/index.html)
- [gcloud dns01 docs](https://docs.cert-manager.io/en/latest/tasks/issuers/setup-acme/dns01/google.html)

### Installation

First you need to apply some of the static "definitions" to the Kubernetes cluster.

These include:

- A namespace for cert-manager to live in
- The CRDs for cert-manager (Custom Resource definitions)
- The certificates for our domains (See warning below)

::: warning
When applying the certificate you will currently see and error for `unknown field "acme" in io.cert-manager.v1alpha2.Certificate.spec`

For now you can ignore this error with `--validate=false`

::: details
On WBStack this YAML file has not been applied in a while and currently still has some old definition in it.

The acme key has been removed and this setup needs updating.

It was [deprecated in 0.8](https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/#performing-an-incremental-switch-to-the-new-format).

Watch this space.
:::

Then you need to apply the cluster issuers from a helmfile. (PRIVATE values needed)

Then you can run the cert-manager service.

### Debugging

[https://docs.cert-manager.io/en/latest/reference/orders.html](https://docs.cert-manager.io/en/latest/reference/orders.html)

See the certificate for the main domain:

```sh
kubectl describe certificate wbstack-com-tls
```

This will list the current status and any current orders that are occurring.

You can then get the details of the order:

```sh
kubectl describe order wbstack-com-tls-356876054
```

Which will list a collection of challenges.

You can see the details of the challenges

```sh
kubectl describe challenge wbstack-com-tls-356876054-0
kubectl describe challenge wbstack-com-tls-356876054-1
```

You can see if DNS challenges have made it to Google Cloud DNS by going to:

`https://console.cloud.google.com/net-services/dns?cloudshell=false&project=<projectname>`
