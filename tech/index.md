# Overview

WBStack is designed to run on Kubernetes with as little lock in to any services as possible.

The Kubernetes cluster for wbstack.com currently runs on Google Kubernetes Engine.

You can read about this decision [here](/tech/decisions/0000-gce-vs-other-k8s-cluster).

The only current deployment of this stack is wbstack.com

# Code & Config

All code and configuration lives on Github in the [wbstack org](https://github.com/wbstack).

Github Actions are used in code repositories for testing and building of containers.

The wbstack.com deployment is managed in the [deploy git repository](https://github.com/wbstack/deploy).

A private git repository is used alongside this to provide secret infomation to the deployments.
