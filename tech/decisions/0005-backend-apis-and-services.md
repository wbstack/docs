Date: 27 August 2019
Decision: Develop extra backend services as part of main Lumen codebase
BUT keep boundaries clean and code deployable as seperate workloads.

In an ideal world it would make sense to develop lots of services, each concentrating
on their little slice of pie. In the real world we need development speed and less
resource consumption when running things. So lets kind of develop a monolith, but
in a nice way?

The main API is splint into 2 seperatly deployable sets of routes, which can also be
deployed with only the secrets that they need to know. This keeps any backend routes
from being exposed in the public frontend API while also allowing some of the same code,
models etc to be used.
The 2 sets of routes can be loaded using these env vars:
- ROUTES_LOAD_WEB=1
- ROUTES_LOAD_BACKEND=1

### backend WIKI service
At this time the wiki creation system was already created as part of the single API.
So models etc are a bit messy, but in theroy the FRONT API would make a request to the
BACK WIKI API in order to create a new wiki and get some ID for it. The front DB tables
would then only store the ID number of the wiki to link the ownership.
Interactions from the user for the wiki would thus go through the FRONT api and into
BACK WIKI API.

This service should for now probably also handle storage allocation, which right now will
include:
 - Creating MYSQL tables and DBs
 - Creating blazegraph namespaces (not done yet)
 - Doing something with elastic? (is this needed??)

### backend QS service
Recently a gateway prototype was created for the QS switching external prefixes to
some internal ones for requests, getting the result, and then converting the result too.
Right now the prototype is in PHP and realisticly performance doesn't matter too much
here in ALPHA so this could become another backend route used internally (perhaps by the
wdqs-proxy), so web -> wdqs-proxy -> backend-qs-api -> blazegraph

This QS service could also hold all of the updater and possible future loadbalancing etc.

### Others...

Other services, queues and jobs could then be developed in this single lumen codebase app,
but deployed seperatly as different k8s services and workloads allowing seperate reliability
and scaling, possibility to split later down the line but fast development.
