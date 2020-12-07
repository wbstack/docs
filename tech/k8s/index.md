# Overview

The Kubernetes cluster is provided bu Google Kubernetes Engine.

The Kubernetes cluster is managed using a mixture of kubectl compatible yaml files, and helmfile deployments.

All Kubernetes related deployment code can be found [here](https://github.com/wbstack/deploy/tree/main/k8s).

## CLI Tooling

You need helm version 3+ https://github.com/helm/helm/releases

You need helmfile https://github.com/roboll/helmfile/releases

And you need some helm plugins:

- **diff** - helmfile needs this to diff resources
- **git** - We need this to fetch charts from git (our charts repo is a git repo currently)

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