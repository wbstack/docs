# Helm

::: tip
All deployed helmfiles are in the deploy repo [k8s/helm directory](https://github.com/wbstack/deploy/tree/main/k8s/helm).

All custom helm charts are in the deploy repo [charts directory](https://github.com/wbstack/deploy/tree/main/chart).
:::

Most services are deployed using [helm](https://helm.sh/) and [helmfile](https://github.com/roboll/helmfile).

When applying a helmfile you need to be in the directory of the helmfile.

Always look at the diff before applyting changes
```sh
helmfile diff
```

You can then actually apply the changes with:

```sh
helmfile apply
```
