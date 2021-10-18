# Kubernetes Engine

::: tip
We would recommend that you setup resources like this using **Terraform**.
:::

In production this is currently:

- Named as "cluster-1"
- 2x e2-medium
- 2x e2-standard-2

Most of the default cluster settings will be fine, but you might want to tweak instance disk space to be 35GB (or something smaller than default.)

The only thing this disk space will be used for is storing on node files (such as container images).

You can see all of the created Kubernetes clusters in [the dashboard](https://console.cloud.google.com/kubernetes).
