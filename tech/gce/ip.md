# IP Addresses

::: tip
All IP address related code and config is in the deploy repo [gce/ip directory](https://github.com/wbstack/deploy/tree/main/gce/ip).
:::

For WBStack production [deployment manager](https://cloud.google.com/deployment-manager) was used to create the ip address, but has not been managed with this since.

The equivalent gcloud command is:

```sh
gcloud compute addresses create main-web-static-ip-us-east1 --project=wbstack --region=us-east1-b
```

This will create a known public static IP address, that will not disappear unless deliberately deleted.

::: details Question: Why not just allow the LoadBalancer of the Kubernetes cluster to claim an IP when created?

It seemed more certain that the IP address would not be lost if it was created as a separate step and assigned to the LoadBalancer after.

:::
