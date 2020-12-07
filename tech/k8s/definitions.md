# Definitions

::: tip
All definitions are in the deploy repo [k8s/definitions directory](https://github.com/wbstack/deploy/tree/main/k8s/definitions).
:::

The definitions are static kubernetes YAML files.

It might be nice to try and move all of this to charts to be deployed via helm...

But for now they must be deployed using `kubectl`.

### Namespaces, Roles and StorageClasses

- 00-namespace-cert-manager.yaml - Create a namespace for cert-manager to operate in.
- 00-secret-creators.yaml - Roles for a secret creation service used in some later services (for creating random services password etc.)
- 00-storageclass-faster.yaml - Creates a SSD based StorageClass called 'faster' or use by services that need fast disks.

You can apply these individually, or all together.

```sh
kubectl apply -f ./k8s/00-base/*
```

### Custom Resource Definitions

cert-manager needs some custom resources to be defined.

This YAML is taken directory from the cert-manager release, and is held here for convenice (instead of referencing a URL).

```sh
kubectl apply -f ./k8s/01-crds/cert-manager.yaml
```

### cert-manager - Certificates

cert-manager should create some certificates once it is running.

These files define the certificates that the kubernetes cluster in general will want.

```sh
kubectl apply -f ./k8s/02-cert-manager*