# Overview

The Kubernetes cluster for wbstack.com is provided by Google Kubernetes Engine.

The Kubernetes cluster is managed using a mixture of kubectl compatible yaml files, and helmfile deployments.

All Kubernetes related deployment code can be found [here](https://github.com/wbstack/deploy/tree/main/k8s).

::: tip
A desirable state to reach would be only using helmfile and terraform for deployments (no manual kubectl commands).
:::

## CLI Tooling

You need helm version 3+ [https://github.com/helm/helm/releases](https://github.com/helm/helm/releases)

You need helmfile [https://github.com/roboll/helmfile/releases](https://github.com/roboll/helmfile/releases)

And you need some helm plugins:

- [diff](https://github.com/databus23/helm-diff) - helmfile needs this to diff resources
- [git](https://github.com/aslafy-z/helm-git) - We need this to fetch charts from git

```sh
helm plugin install https://github.com/databus23/helm-diff
helm plugin install https://github.com/aslafy-z/helm-git
```

## Connecting kubectl

You can get the credentials for the cluster using `gcloud`.

```sh
gcloud container clusters get-credentials cluster-1
kubectl config set-cluster cluster-1
kubectl get pods --all-namespaces
```

## Monitoring events

You can watch a stream of all events that happen within the cluster using the following:

```sh
kubectl get events --watch
```

## Pod access

If you want to start a shell in a pod you can do so with:

```sh
kubectl exec -it <podname> -- /bin/sh
```

## Draining a node

You can use `kubectl drain` to safely evict all of your pods from a node before you perform maintenance on the node

You can read more about node draining [here](https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/).

Specific steps are listed [here](https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/#use-kubectl-drain-to-remove-a-node-from-service)
