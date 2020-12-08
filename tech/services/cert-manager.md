
# Cert Manager

[cert-manager](https://cert-manager.io/) provides automatic certificate management in Kubernetes.

Simply put, you can define "Certificate" resources in Kubernetes, and cert-manager will go to an ACME provider for the certificate, dealing with DNS or HTTP verification of the domain using an ingress.

Further Reading:

- [Quickstart with nginx ingress](https://docs.cert-manager.io/en/release-0.10/tutorials/acme/quick-start/index.html)
- [gcloud dns01 issuer docs](https://docs.cert-manager.io/en/latest/tasks/issuers/setup-acme/dns01/google.html)

## Installation

:::warning
cert-manager currently has a bit of a cumbersome setup requiring custom resource definitions and multiple helmfile deployments.
:::

### Definitions

First you need to apply some of the static "definitions" to the Kubernetes cluster.

These can all be found in the deploy repo [k8s/definitions/cert-manager directory](https://github.com/wbstack/deploy/tree/main/k8s/definitions/cert-manager).

- **00-namespace.yaml** - A namespace for the cert-manager deployment to live in.
- **01-crds.yaml** - The CRDs for cert-manager (Custom Resource definitions)
- **02-certificates-*.yaml** - The certificates for our domains (See warning below)

::: warning
When applying the certificate you will currently see and error for `unknown field "acme" in io.cert-manager.v1alpha2.Certificate.spec`

For now you can ignore this error with `--validate=false`

::: details
On WBStack this YAML file has not been applied in a while and currently still has some old definition in it.

The acme key has been removed and this setup needs updating.

It was [deprecated in 0.8](https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/#performing-an-incremental-switch-to-the-new-format).

Watch this space.
:::

### Helmfiles

The helmfile deployment is currently split in 2:

- **clusterissuers** - helmified definitions of ClusterIssuers, that allow cert-manager to actually fetch certificates.
- **cert-manager** - The actual cert-manager service deployment.

These can be applied using the standard [helm methods](/tech/k8s/helm).

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
