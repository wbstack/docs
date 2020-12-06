# Deployment

The wbstack.com deployment is managed in the [deploy git repository](https://github.com/wbstack/deploy).
A private git repository is used alongside this to provide secret infomation to the deployments.

## Google cloud

Google cloud provides the infrastructure base for the current deployment.

All actions were recorded in some way after initial setup in [various scripts](https://github.com/wbstack/deploy/tree/main/gce).

Infrastructure management is slowly migrating to [Terraform](https://github.com/wbstack/deploy/tree/main/tf).

## Kubernetes

The Kubernetes cluster is managed using a mixture of kubectl compatible yaml files, and helmfile deployments.

All Kubernetes related deployment code can be found [here](https://github.com/wbstack/deploy/tree/main/k8s).
