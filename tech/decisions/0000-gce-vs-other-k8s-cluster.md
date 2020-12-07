# GCE vs other Kubernetes clusters

Date: Prior to 27 August 2019
Decision: GCE 

There are multiple different options for a k8s cluster.

## Home grown PIs

I actually started working on this project planning to have a mini cluster of PIs
up throughtout dev work, but this idn't work, different arch etc.. bla..

## Home grown on some VMs / machines

On Wikimedia Cloud VPS I experimented with setting up a custom cluster on a project:
https://phabricator.wikimedia.org/T196094

Initially using my own scripts as documented on my blog:
https://addshore.com/2018/04/from-0-to-kubernetes-cluster-on-custom-vms/
This also describes how to get around the fact no LoadBalancer is easily provided here.
Issues / overheads here still are storage provisioning and sharing storage between nodes.
I'd have to setup some sort of shared storage system on the cluster itself which is
management overhead and also cost of running.

I also tried KubeSpray here https://github.com/kubernetes-sigs/kubespray
But decided it was super slow and annoying removing the cluster and recreating it
which I was doing lots during development.

## GCE (Google cloud)

Testing work was started on GCE as it was the easiest place to get a cluster up
and running in a few mins. It also allowed total cluster destruction and recreation
in a few mins.
Also during development I still had some free credit left over so I could afford
to leave a few things running. The credit has now run out :(.

One downside of staying with GCE is that the bandwidth egress is billed and could
(as expansion happens) end up being a large cost.

## Fuga.io

This could be a nice host to move to suggested by Andra.
But setting up a k8s cluster there is somewhat involved.
https://docs.fuga.cloud/how-to-deploy-kubernetes-on-fuga-cloud
This is similar to the steps needs to setup k8s on any random collection of servers.

One plus is traffic is included.
The pricing is also pretty comparible to GCE.
There are no preemptible instances though. :(

I do still have some voucher codes in my emails for this service somewhere.

## Other thoughts

There are lots of other cloud providers that I could look into, Azure, Amazon, DigitalOcean etc.
Google seems the least evil perhaps?

Other reasons include:

 - Preemptive instances being cheaper (and I plan to use these..)
 - More familiarity with the interface commands etc.
 - I'm not planning on using any cloud hoster features other than the k8s cluster itself
   a load balancer and maybe a bit of CDN (which I could also do on k8s) so there is no
   real lock in and switching down the road should be easy enough.

### Kubermatic Container Engine

I was also emailing with "Kubermatic Container Engine" and a guy called Bill suggested that
I look at a thing called KubeOne that they recently open sourced.
https://github.com/kubermatic/kubeone
It looks like it has promise, but again I don't want to waste time there now, best stay with GCE.

### Staying general k8s

The idea is to stay binding mainly to k8s itself rather than any cloud provided interfaces.
This allows more flexibility in the future, for example moving to servers owned by another
org (depending on the future direction of this project).
