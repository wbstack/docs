(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{383:function(e,t,s){"use strict";s.r(t);var a=s(24),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"gce-vs-other-kubernetes-clusters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gce-vs-other-kubernetes-clusters"}},[e._v("#")]),e._v(" GCE vs other Kubernetes clusters")]),e._v(" "),s("p",[s("strong",[e._v("Date:")]),e._v(" Prior to 27 August 2019")]),e._v(" "),s("p",[s("strong",[e._v("Problem:")])]),e._v(" "),s("p",[e._v("There are multiple different options for a Kubernetes cluster.\nThey have different costs, lock-in and acceptance in Wikimedia flavoured world (free and open).")]),e._v(" "),s("p",[s("strong",[e._v("Decision:")])]),e._v(" "),s("ul",[s("li",[e._v("Use Google Kubernetes Engine for the alpha version of the service.")]),e._v(" "),s("li",[e._v("Create services primarily within Kubernetes, with as little binding to external services as possible.")]),e._v(" "),s("li",[e._v("This allows fastest speed for Alpha with more flexibility possible in the future. (For example moving to servers owned by another\norg (depending on the future direction of this project)).")])]),e._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),s("p",[e._v("Many options were considered for the initial hosting location of the alpha version.")]),e._v(" "),s("h3",{attrs:{id:"bare-metal-vms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bare-metal-vms"}},[e._v("#")]),e._v(' "Bare Metal" VMs')]),e._v(" "),s("p",[e._v("On Wikimedia Cloud VPS I experimented with setting up a "),s("a",{attrs:{href:"https://phabricator.wikimedia.org/T196094",target:"_blank",rel:"noopener noreferrer"}},[e._v("custom cluster on a project"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("The main issues with this approach is the overhead when dealing with the fact that certain things that come for free in public clouds are not provided by default in this custom environment:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("LoadBalancer / Ingress")]),e._v(": It's possible to partly work around this (detailed in blog post) by making a single node have a static IP and serve as the host for the ingress.")]),e._v(" "),s("li",[s("strong",[e._v("Persistent cross node storage")]),e._v(": A storage provider for the shared NFS services could be used, this would likely be slow for things such as SQL. Or some cloud native storage service could be used, but could be effort.")])]),e._v(" "),s("h4",{attrs:{id:"manual-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-setup"}},[e._v("#")]),e._v(" Manual Setup")]),e._v(" "),s("p",[e._v("The workflow for creating a simple Kubernetes cluster by hand are documented in "),s("a",{attrs:{href:"https://addshore.com/2018/04/from-0-to-kubernetes-cluster-on-custom-vms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this blog post"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Although this worked, this left me to do a lot of manual maintenance of the cluster.\nThe point of the Alpha is not to maintain a Kubernetes cluster, but prove that the concept of Wikibase as a service works.")]),e._v(" "),s("h4",{attrs:{id:"kubespray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubespray"}},[e._v("#")]),e._v(" KubeSpray")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/kubernetes-sigs/kubespray",target:"_blank",rel:"noopener noreferrer"}},[e._v("KubeSpray"),s("OutboundLink")],1),e._v(" was super slow and annoying removing the cluster and recreating it which I was doing lots during development, this seemed like a bad idea.")]),e._v(" "),s("h3",{attrs:{id:"google-kubernetes-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-kubernetes-engine"}},[e._v("#")]),e._v(" Google Kubernetes Engine")]),e._v(" "),s("p",[e._v("Testing work was started on GKE as it was the easiest place to get a cluster up and running in a few minutes.\nIt also allowed total cluster destruction and recreation in a few minutes.\nDuring development I also managed to make use of a free credit offer.")]),e._v(" "),s("p",[e._v("GKE has the advantage of being able to make use of "),s("a",{attrs:{href:"https://cloud.google.com/preemptible-vms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-emptible nodes"),s("OutboundLink")],1),e._v(", which come and go as they please, but reduce costs.\nA service can be used to make using these nodes with Kubernetes rather painless ("),s("a",{attrs:{href:"https://cloud.google.com/blog/products/containers-kubernetes/cutting-costs-with-google-kubernetes-engine-using-the-cluster-autoscaler-and-preemptible-vms",target:"_blank",rel:"noopener noreferrer"}},[e._v("read more"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("p",[e._v("One downside of staying with GKE is that the bandwidth egress is billed and could end up being a big cost much further down the line.")]),e._v(" "),s("h3",{attrs:{id:"fuga-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fuga-io"}},[e._v("#")]),e._v(" Fuga.io")]),e._v(" "),s("p",[e._v("This could be a nice host to move to suggested by Andra.\nBut setting up a Kubernetes cluster there is somewhat involved.\nhttps://docs.fuga.cloud/how-to-deploy-kubernetes-on-fuga-cloud\nThis is similar to the steps needs to setup k8s on any random collection of servers.")]),e._v(" "),s("p",[e._v("One plus is traffic is included.\nThe pricing is also pretty comparable to GKE.\nThere are no pre-emptible instances though. 😦")]),e._v(" "),s("p",[e._v("I do still have some voucher codes in my emails for this service somewhere.")]),e._v(" "),s("h3",{attrs:{id:"kubermatic-container-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubermatic-container-engine"}},[e._v("#")]),e._v(" Kubermatic Container Engine")]),e._v(" "),s("p",[e._v('I was also emailing with "Kubermatic Container Engine" and a guy called Bill suggested that\nI look at a thing called KubeOne that they recently open sourced.\nhttps://github.com/kubermatic/kubeone')]),e._v(" "),s("p",[e._v("It looks like it has promise, but again I don't want to waste time there now, best stay with GCE.")]),e._v(" "),s("h3",{attrs:{id:"other-large-clouds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-large-clouds"}},[e._v("#")]),e._v(" Other large clouds")]),e._v(" "),s("p",[e._v("There are lots of other cloud providers that I could look into, Azure, Amazon, DigitalOcean etc.\nGoogle seems the least evil perhaps?")]),e._v(" "),s("p",[e._v("Other reasons include:")]),e._v(" "),s("ul",[s("li",[e._v("Pre-emptive instances being cheaper (and I plan to use these..)")]),e._v(" "),s("li",[e._v("More familiarity with the interface commands etc.")]),e._v(" "),s("li",[e._v("I'm not planning on using any cloud hoster features other than the k8s cluster itself a load balancer and maybe a bit of CDN (which I could also do on Kubernetes) so there is no real lock in and switching down the road should be easy enough.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);