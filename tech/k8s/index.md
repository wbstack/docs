# Overview

The Kubernetes cluster is provided bu Google Kubernetes Engine.

The Kubernetes cluster is managed using a mixture of kubectl compatible yaml files, and helmfile deployments.

All Kubernetes related deployment code can be found [here](https://github.com/wbstack/deploy/tree/main/k8s).

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

::: tip
If you get a warning about having 2 plugins with the same name it's likely that you have installed a plugin before with a slightly different URL.

For example using `https://github.com/databus23/helm-diff` and `https://github.com/databus23/helm-diff.git` will cause this issue.
:::

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

::: warning
Old WbStack documentation stated that the drain command could complain about some "local data and daemonsets".

Seemingly the `--delete-local-data --ignore-daemonsets` options helped, but these came with the note:

WARNING: of course, check which pods are using those things first and if it is actually safe...
:::
