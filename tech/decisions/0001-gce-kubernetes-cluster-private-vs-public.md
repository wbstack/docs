Date: 15 May 2019
Decision: Public

**Private vs Public GCE kubernetes cluster**

It would be a nice idea for the k8s cluster to be private (no node IP addresses), just because..
However, making the k8s cluster private means that the nodes also can not contact the outside world.
See: https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#outbound_internet_for_nodes
Cloud NAT would mean we could do this, but there is an added cost...

https://cloud.google.com/nat/pricing
"an hourly price for the NAT gateway, starting at $0.045 per NAT gateway hour"

0.045 * 24 * 30 = $32.40 per month

This is a cost that is not worth it at this stage...

Later down the line it might be nice to change this.
