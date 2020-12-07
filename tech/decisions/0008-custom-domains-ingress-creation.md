Date: 10 April 2020
Decision: Implemented

Originally when adding sites to the stack a new ingress resource would be created.
This broke in Dec 2019 when the platform reached just under 100 wikis due to imposed GKE limitations.
See https://github.com/addshore/wbstack/issues/39

When implementing custom domain support in https://github.com/addshore/wbstack/issues/72 I noticed that this limit had greatly increased.

In an ideal world we would not reload the nginx ingress config every time we add a new custom domain wiki.
Instead the ingress should be wildcard and the platform app decides if the wiki exists.

The issue with this is https certificates which need to be plumbed into the ingress in some way currently.
They do not necessarily need a new ingress, but a new domain and certificate location would need to be added to an existing ingress.

In terms of nginx the feature described in the following link could be nice https://www.nginx.com/blog/nginx-plus-r18-released/#dynamic-certificate-loading

Ultimately this will need a different solution, but multiple ingresses maintained by "the platform" is the direction for now.

