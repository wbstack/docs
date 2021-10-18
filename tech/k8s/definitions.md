# Definitions

::: tip
All definitions are in the deploy repo [k8s/definitions directory](https://github.com/wbstack/deploy/tree/main/k8s/definitions).
However we would recommend that you setup resources like this using **Terraform** or **helmfile**.
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

This is currently used for creating some SQL users for the API application.

The secret-generator needs access to be able to create secrets ([see docs](https://github.com/replicatedhq/k8s-secret-generator#authorization))

```sh
kubectl apply -f k8s/definitions/secret-creators/role.yaml
```

## Cert Manager

The setup of cert-manager currently needs various definitions to be applied.

Read more [here](/tech/services/cert-manager.html#definitions).
