# Persistence

## sql

An sql service running MariaDB operates for both the main platform API and MediaWiki sites.

This is currently setup with replication enabled.

## elasticsearch

An elasticsearch service, using the WMDE Wikibase flavours elastic search docker image operates for use by MediaWiki and Wikibase.

This is currently setup in a cluster.

## redis

Redis is used by a variety of deployed services for:

- caching
- queues
- shared sessions

### CLI access

Start bash:

```sh
k8s/cmd/bash-redis-slave.sh
```

Start client:

```sh
redis-cli
```

Login:

```sh
AUTH <password>
```

Select a DB:

```sh
SELECT 0
```

List all keys:

```sh
KEYS *
```

See more commands: https://redis.io/commands

### Redis Databases

- 0 = mediawiki
- 2 = api (db)
- 3 = api (cacheDb)
- 10 = tool-quickstatements
- 11 = tool-widar

### Append only file

Redis stores its state in an append only file (choice by configuration).
This file naturally will slowly get bigger and bigger.
It SHOULD rebuild itself restricting its size once it goes over some configured value (see helm config map).

### Decreasing memory allocation

- Decrease memory allocation in redis
- restart redis
- Trim AOF - https://redis.io/commands/bgrewriteaof
- Decrease memory request and limit in k8s

If these steps are not followed then you might end up in an OOM crash loop as redis tries to run through all of the file..
