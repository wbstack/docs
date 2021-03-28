
# Cert Manager

[cert-manager](https://cert-manager.io/) provides automatic certificate management in Kubernetes.

Simply put, you can define "Certificate" resources in Kubernetes, and cert-manager will go to an ACME provider for the certificate, dealing with DNS or HTTP verification of the domain using an ingress.

Further Reading:

- [Quickstart with nginx ingress](https://docs.cert-manager.io/en/release-0.10/tutorials/acme/quick-start/index.html)
- [gcloud dns01 issuer docs](https://docs.cert-manager.io/en/latest/tasks/issuers/setup-acme/dns01/google.html)
- [kubectl plugin](https://cert-manager.io/docs/usage/kubectl-plugin/)

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

### Service account

A Google Cloud service account is required so that cert-manager can interace with the Google DNS.

In WBStack production this service account was created with deployment manager.
You can find the old code for this [here](https://github.com/wbstack/deploy/tree/main/gce/serviceaccounts).

The service account needs:

- **Name:** certman-dns01-solver
- **Role:** roles/dns.admin

Once the service account has been created you need to get a key for the account and create it as a Kubernetes secret.
Some sample commands for doing this are below:

```sh
gcloud iam service-accounts keys create ./certman-dns01-solver-1.json --iam-account certman-dns01-solver@wbstack.iam.gserviceaccount.com
kubectl create secret generic clouddns-dns01-solver-svc-acct --namespace=cert-manager --from-file=key.json=./certman-dns01-solver-1.json --dry-run=true --output=yaml > ./clouddns-dns01-solver-svc-acct.yaml
kubectl apply -f ./clouddns-dns01-solver-svc-acct.yaml
```

:::tip
This secret name will be used in the CLusterIssuers below.
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
