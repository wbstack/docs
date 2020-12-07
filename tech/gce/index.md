# Overview

Google cloud provides the infrastructure base for the wbstack.com deployment.

All actions were recorded in some way after initial setup in [various scripts](https://github.com/wbstack/deploy/tree/main/gce).

Infrastructure management is slowly migrating to [Terraform](https://github.com/wbstack/deploy/tree/main/tf).

## CLI Tooling

Go to [https://console.cloud.google.com/](https://console.cloud.google.com/) and download the gcloud SDK.

## Setting defaults

You can set your default project and region with the following:

```sh
gcloud config set project wbstack
gcloud config set compute/zone us-east1-b
```