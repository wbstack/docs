# Persistence

## sql

An sql service running MariaDB operates for both the main platform API and MediaWiki sites.

This is currently setup with replication enabled.

## redis

Redis is used by a variety of deployed services for:

- caching
- queues
- shared sessions
