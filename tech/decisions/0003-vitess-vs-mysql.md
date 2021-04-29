# Vitess vs Mysql / Mariadb

::: warning
This decision document has not yet been formatted for nice display...
:::

Date: 23 August 2019
Decision: Simple MySQL replicated DB for now. Maybe Vitess later.

Even if OC grows quickly, there is no clear need for vitess for immediate sharding.
A single master setup (at least for wiki dbs) should suffice, and if it does not the
easiest step forward for scalability would be to just create 1 more shard and create new
dbs there, optionally moving old dbs.
This would require storing the shard / service / host of the wiki as well as the db name,
but this is trivial.

https://vitess.io/docs/user-guides/production-planning/ specifices how much overhead
vitess would bring to the initial setup, likely resulting in more immediate cost.

It also says:
"Before running Vitess in production, please make yourself comfortable first with the different operations. We recommend to go through the following scenarios on a non-production system."
Which I have not yet done, and don't really have time to do, so this seems a bit risky...

Follow up:
Date: 27 August 2019

**Vitess Notes**

Vitess could be used to control all MySQL servers for OpenCura.

### TODO
Make sure mediawiki generally works through vitess....?

### Resources
https://vitess.io/docs/user-guides/production-planning/

### Deployment?
Vitess supports MySQL 5.6, MariaDB 10.0, and any newer versions like MySQL 5.7, etc.
We probably want to start working with the operator out of the box.
https://github.com/vitessio/vitess-operator
https://github.com/vitessio/vitess-operator/blob/master/my-vitess.yaml

MySQL users will have to be created with permissions for a set of table prefixes or specific tables
rather than by db name which is currently done in the general setup.

### 2x Vgates (master vs replica)
If no tablet type was specified, then VTGate chooses its default, which can be overridden with the -default_tablet_type command line argument.
Documented on https://vitess.io/docs/faq/queries/

From slack https://vitess.slack.com/archives/C0PQY0PTK/p1566945049394300:
"
Yes, you can use the default_tablet_type parameter to specify the default tablet type a vtgate will route queries to.In conjunction with setting the default_tablet_type parameter to either master or replica, you may also want to limit the types of tablets these vtgates can route queries to. This can be accomplished via the allowed_tablet_types VTgate parameter, which enables users to define which tablet types a VTgate is allowed to route queries to:

  -allowed_tablet_types value
        Specifies the tablet types this vtgate is allowed to route queries to
"

### Keyspaces
An initial starting point would be to have a single keyspace.
https://vitess.io/docs/concepts/keyspace/
Essentially a single MySQL DB server running. (cuts down on costs initially).

Vertical sharding can be used to move tables from an unsharded keyspace into a
different keyspace as described on https://vitess.io/docs/reference/sharding/
This will require table names to NOT conflict initially.
Idea:
 - Mediawiki DBs will need to use table prefixes, resulting in things like:
   mw_<DBNAME>\_<tablename> for example.
 - TODO DB table creation needs to be thought about?
 - TODO API tables should include a table prefix? (can be done with DB_PREFIX)
 - TODO eventlogging tables should include prefix? (currently mediawiki_revision_create_3)

### Schema Creation
No schema creation should be needed initially.
Per https://vitess.io/docs/user-guides/mysql-schema/
"
You can apply schema changes directly to MySQL. VTTablet will eventually notice the change and update itself. You can also explicitly issue the vtctlclient ReloadSchema command to make it reload immediately.
"
