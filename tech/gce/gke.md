# Kubernetes Engine

For WBStack production [deployment manager](https://cloud.google.com/deployment-manager) was used to create the cluster.

This configuration was deleted at some point and deployment manager is being moved away from.

Soon this step will be done in terraform, but for now you just want a cluster that looks something like...

In production this is currently:

- Named as "cluster-1
- 2x e2-medium
- 1x e2-standard-2

Most of the default cluster settings will be fine, but you might want to tweak instance disk space to be 35GB (or something smaller than default.)

The only thing this disk space will be used for is storing on node files (such as container images).

## Dashboard

You can see all of the created Kubernetes clusters in [the dashboard](https://console.cloud.google.com/kubernetes).
