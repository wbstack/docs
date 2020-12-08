# GCE vs other Kubernetes clusters

**Date:** Prior to 27 August 2019

**Problem:**

There are multiple different options for a Kubernetes cluster.
They have different costs, locking and acceptance in Wikimedia flavoured world (free and open).

**Decision:**

- Use Google Kubernetes Engine for the alpha version of the service.
- Create services primarily within Kubernetes, with as little binding to external services as possible.
- This allows fastest speed for Alpha with more flexibility possible in the future. (For example moving to servers owned by another
org (depending on the future direction of this project)).

## Options

Many options were considered for the initial hosting location of the alpha version.

### Raspberry Pis

I actually started working on this project planning to have a mini cluster of PIs up throughtout development work.
This ended up not making much sense because of differing architecture types etc..

### "Bare Metal" VMs

On Wikimedia Cloud VPS I experimented with setting up a [custom cluster on a project](https://phabricator.wikimedia.org/T196094).

The main issues with this approach is the overhead when dealing with the fact that certain things that come for free in public clouds are not provided by default in this custom environment:

- **LoadBalancer / Ingress**: It's possible to partly work around this (detailed in blog post) by making a single node have a static IP and serve as the host for the ingress.
- **Persistent cross node storage**: A storage provider for the shared NFS services could be used, this would likely be slow for things such as SQL. Or some cloud native storage service could be used, but could be effort.

#### Manual Setup

The workflow for creating a simple Kubernetes cluster by hand are documented in [this blog post](https://addshore.com/2018/04/from-0-to-kubernetes-cluster-on-custom-vms/).

Although this worked, this left me to do a lot of manual maintenance of the cluster.
The point of the Alpha is not to maintain a Kubernetes cluster, but prove that the concept of Wikibase as a service works.

#### KubeSpray

[KubeSpray](https://github.com/kubernetes-sigs/kubespray) was super slow and annoying removing the cluster and recreating it which I was doing lots during development, this seemed like a bad idea.

### Google Kubernetes Engine

Testing work was started on GKE as it was the easiest place to get a cluster up and running in a few minutes.
It also allowed total cluster destruction and recreation in a few minutes.
During development I also managed to make use of a free credit offer.

GKE has the advantage of being able to make use of [pre-emptible nodes](https://cloud.google.com/preemptible-vms/), which come and go as they please, but reduce costs.
A service can be used to make using these nodes with Kubernetes rather painless ([read more](https://cloud.google.com/blog/products/containers-kubernetes/cutting-costs-with-google-kubernetes-engine-using-the-cluster-autoscaler-and-preemptible-vms)).

One downside of staying with GKE is that the bandwidth egress is billed and could end up being a big cost much further down the line.

### Fuga.io

This could be a nice host to move to suggested by Andra.
But setting up a Kubernetes cluster there is somewhat involved.
https://docs.fuga.cloud/how-to-deploy-kubernetes-on-fuga-cloud
This is similar to the steps needs to setup k8s on any random collection of servers.

One plus is traffic is included.
The pricing is also pretty comparable to GKE.
There are no pre-emptible instances though. :(

I do still have some voucher codes in my emails for this service somewhere.

### Kubermatic Container Engine

I was also emailing with "Kubermatic Container Engine" and a guy called Bill suggested that
I look at a thing called KubeOne that they recently open sourced.
https://github.com/kubermatic/kubeone

It looks like it has promise, but again I don't want to waste time there now, best stay with GCE.

### Other large clouds

There are lots of other cloud providers that I could look into, Azure, Amazon, DigitalOcean etc.
Google seems the least evil perhaps?

Other reasons include:

- Pre-emptive instances being cheaper (and I plan to use these..)
- More familiarity with the interface commands etc.
- I'm not planning on using any cloud hoster features other than the k8s cluster itself a load balancer and maybe a bit of CDN (which I could also do on Kubernetes) so there is no real lock in and switching down the road should be easy enough.
