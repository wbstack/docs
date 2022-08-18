(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{388:function(e,t,s){"use strict";s.r(t);var a=s(24),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"backend-apis-and-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backend-apis-and-services"}},[e._v("#")]),e._v(" Backend APIs and Services")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("This decision document has not yet been formatted for nice display...")])]),e._v(" "),s("p",[e._v('Date: 27 August 2019\nDecision: Develop extra backend services as part of main "api" codebase\nBUT keep boundaries clean and code deployable as separate workloads.')]),e._v(" "),s("p",[e._v("In an ideal world it would make sense to develop lots of services, each concentrating\non their little slice of pie. In the real world we need development speed and less\nresource consumption when running things. So lets kind of develop a monolith, but\nin a nice way?")]),e._v(" "),s("p",[e._v("The main API is splint into 2 separately deployable sets of routes, which can also be\ndeployed with only the secrets that they need to know. This keeps any backend routes\nfrom being exposed in the public frontend API while also allowing some of the same code,\nmodels etc to be used.\nThe 2 sets of routes can be loaded using these env vars:")]),e._v(" "),s("ul",[s("li",[e._v("ROUTES_LOAD_WEB=1")]),e._v(" "),s("li",[e._v("ROUTES_LOAD_BACKEND=1")])]),e._v(" "),s("h3",{attrs:{id:"backend-wiki-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backend-wiki-service"}},[e._v("#")]),e._v(" backend WIKI service")]),e._v(" "),s("p",[e._v("At this time the wiki creation system was already created as part of the single API.\nSo models etc are a bit messy, but in theroy the FRONT API would make a request to the\nBACK WIKI API in order to create a new wiki and get some ID for it. The front DB tables\nwould then only store the ID number of the wiki to link the ownership.\nInteractions from the user for the wiki would thus go through the FRONT api and into\nBACK WIKI API.")]),e._v(" "),s("p",[e._v("This service should for now probably also handle storage allocation, which right now will\ninclude:")]),e._v(" "),s("ul",[s("li",[e._v("Creating MYSQL tables and DBs")]),e._v(" "),s("li",[e._v("Creating blazegraph namespaces (not done yet)")]),e._v(" "),s("li",[e._v("Doing something with elastic? (is this needed??)")])]),e._v(" "),s("h3",{attrs:{id:"backend-qs-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backend-qs-service"}},[e._v("#")]),e._v(" backend QS service")]),e._v(" "),s("p",[e._v("Recently a gateway prototype was created for the QS switching external prefixes to\nsome internal ones for requests, getting the result, and then converting the result too.\nRight now the prototype is in PHP and realistically performance doesn't matter too much\nhere in ALPHA so this could become another backend route used internally (perhaps by the\nwdqs-proxy), so web -> wdqs-proxy -> backend-qs-api -> blazegraph")]),e._v(" "),s("p",[e._v("This QS service could also hold all of the updater and possible future loadbalancing etc.")]),e._v(" "),s("h3",{attrs:{id:"others"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[e._v("#")]),e._v(" Others...")]),e._v(" "),s("p",[e._v('Other services, queues and jobs could then be developed in this single "api" codebase app,\nbut deployed separately as different k8s services and workloads allowing separate reliability\nand scaling, possibility to split later down the line but fast development.')])])}),[],!1,null,null,null);t.default=n.exports}}]);