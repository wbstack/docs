# Definitions

::: tip
All definitions are in the deploy repo [k8s/definitions directory](https://github.com/wbstack/deploy/tree/main/k8s/definitions).
:::

The definitions are static kubernetes YAML files.

It might be nice to try and move all of this to charts to be deployed via helm...

But for now they must be deployed using `kubectl`.

## StorageClass

In order to use SSD persistent disks within a GKE cluster [a new StorageClass must be created](https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/ssd-pd)

```sh
kubectl apply -f k8s/definitions/storageclass/faster.yaml
```

## Secret Creators

Some tasks make use of [replicated/k8s-secret-generator](https://github.com/replicatedhq/k8s-secret-generator) to generate random data and save it as a secret within Kubernetes.

This is currently used for creating some SQL users.

The secret-generator needs access to be able to create secrets ([see docs](https://github.com/replicatedhq/k8s-secret-generator#authorization))

```sh
kubectl apply -f k8s/definitions/secret-creators/role.yaml
```

## Cert Manager

Cert manager has quite some setup despite the fact the final service is deployed using helm.

A custom namespace is needed.

```sh
kubectl apply -f k8s/definitions/cert-manager/00-namespace.yaml
```

And custom resource definitions. 

This YAML is taken directory from the cert-manager release, and is held here for convenice (instead of referencing a URL).


```sh
kubectl apply -f k8s/definitions/cert-manager/01-crds.yaml
```

Finally we can state that we want some certificates.


```sh
kubectl apply -f k8s/definitions/cert-manager/02-certificates-*
```

::: warning
If you try to create the certificate resources to quickly after applying the CRDs you may experience issues.

Wait a few seconds and try again.
:::
