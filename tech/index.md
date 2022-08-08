# Overview

WBStack is designed to run on Kubernetes with as little dependency on external services as possible.

The Kubernetes cluster for wbstack.com was run on Google Kubernetes Engine.

You can read about this decision [here](/docs/tech/decisions/0000-gce-vs-other-k8s-cluster).

The only current deployment of this stack is [wikibase.cloud(https://wikibase.cloud).

![](./../diagrams/2021-tech-overview-gce-k8s.drawio.svg)

# Code & Config

All code lives on Github in the [wbstack org](https://github.com/wbstack).

Github Actions are used in code repositories for testing and building of containers.

The wbstack.com deployment was managed in the [deploy git repository](https://github.com/wbstack/deploy).

A private git repository is used alongside this to provide secret infomation to the deployments.

![](./../diagrams/2021-tech-overview-develop-deploy.drawio.svg)
