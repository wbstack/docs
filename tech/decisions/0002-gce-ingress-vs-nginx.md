# GCE Ingress vs Nginx

Date: 17 May 2019
Decision: Nginx Ingress

There is a price for using the GCE ingress with a GCE Loadbalancer
https://cloud.google.com/compute/pricing#lb
This equates to 18USD per month for the first 5 rules, and an extra 7.2USD for each rule after the 5.
Good reading: https://medium.com/redpoint/cost-effective-kubernetes-on-google-cloud-61067185ebe8

Once I started looking into using helm, the nginx ingress become much easier to use.
I setup the ingress with helm, so I should not longer have to worry about using too
many rules etc.

Also because of the way helm charts would have worked, if I wanted to define the Ingress
in the chart, the gce ingress would have ended up creating a new GCE Loadbalancer for each
ingress, which would be costly.
The nginx ingress instead uses a single loadbalancer, merging all of the rules etc.

The nginx ingress will also work across clouds / k8s cluster whereas the gce one would
have been particular to gce..
