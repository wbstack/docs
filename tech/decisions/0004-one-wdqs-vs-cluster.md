# One WDQS server vs a cluster

::: warning
This decision document has not yet been formatted for nice display...
:::

Date: 27 August 2019
Decision: Single service, namespace & prefix adjusted, more complex later.

A single WDQS server can host the whole of wikidata, so size isn't going to be an
issue starting out.
Number of requests should also be fairly low, so no need to worry here yet.
Also the complexity of queries should be fairly low as most data sets should be small.

It should be easy to spot growth in this area and easy to adapt to changes.

If the JNL breaks, initially it shouldn't be too hard to reload ALL of the data for
all of the wikis. And this could be expected in Alpha...

If number of READ queries is too much then we need another copy with the same data set.
This can easily be done by:
 - Dumping the current jnl.
  - Either by stopping the service, taking a copy, and turning it back on
  - Or https://wiki.blazegraph.com/wiki/index.php/REST_API#Online_Backup
 - Alter the current updater to write to both servers and track the status seperalty?
 - OR have 2 updaters?
 - PROFIT

If number of WRITES is too much then we may need to split the namespaces across
more than one WDQS instances.
This could be done with:
 - The same steps as above to create 2 copies of the current service.
 - Destroy the namespaces we don't want on the next shard https://wiki.blazegraph.com/wiki/index.php/REST_API#DESTROY_DATA_SET
 - Create some load balancer / system that knows where each NS is
 - Use LB to direct traffic to correct server
 - Destroy namespaces from the first shard we don't need.
This again needs updater changes to write the correct things to the right server.

### Gateway
The general idea would be to have some sort of gateway (similar to vitess)
The gateway knows:
 - How to map the outer prefix to inner prefixes (wikidata.org -> abc123[dbname]
  - This allows sites to be re-named without needing to reload all data?
 - Which internal blazegraph endpoint to forward the request to based on the request
 - Which internal blazegraph namespace to forward the request to based on the request

It might be worth giving https://www.blazegraph.com/whitepapers/bigdata_ha_whitepaper.pdf
a read..

### Operator
Further down the line it would be great to have a k8s operator to do all of this:
 - Sharding
 - Scaling
 - Replication / Updating
 - Backups
 - etc.
