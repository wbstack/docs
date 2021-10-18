# Storage

## Persistent Disks

GKE deployments make use of Google Persistent Disks.

A script exists in the deploy repo to check the current usage of the main disks `k8s/cmd/storage-check.sh`.

::: details Historic wbstack.com disk usage data

![](https://i.imgur.com/cXiGzBf.png)

**Query Service**:

- 29 April 2021 - du 8.1GB / ls 8.4GB
- 30 September 2020 - du 2.6GB / ls 2.8GB
- 26 April 2020 - du 922.5MB / ls 932.9MB
- 18 April 2020 - du 849MB / ls 932MB
- 11 April 2020 - du 815.4MB / ls 932.9MB
- 5 April 2020 - du 814.6MB / ls 932.9MB
- 3 March 2020 - du 794MB / ls 932MB
- 22 January 2020 - du 784MB / ls 933MB
- 4 January 2020 - du 449.9MB / ls 514.4MB
- 21 December 2019 - du 448.8MB / ls 514.4MB
- 3 December 2019 - du 56.7MB / ls 200MB
- 2 December 2019 - du 56.6MB / ls 200MB
- 27 November 2019 - du 8.4MB / ls 200MB
- 23 November 2019 - du 7.6MB / ls 200MB

**SQL**:

- 29 April 2021 - 37GB
- 30 September 2020 - 15GB
- 26 April 2020 - 12GB
- 18 April 2020 - 11GB
- 11 April 2020 - 9.8GB
- 5 April 2020 - 9.6GB
- 3 March 2020 - 8.4GB
- 22 January 2020 - 7.0GB
- 4 January 2020 - 4.8GB
- 21 December 2019 - 4.8GB
- 3 December 2019 - 2.4GB
- 2 December 2019 - 2.3GB
- 27 November 2019 - 1.9GB - After clearing l10n tables
- 23 November 2019 - 2.3GB

:::

As disk usage increases persistent disks can be resized.

Old docs for that process exist:

- [For the sql services](https://github.com/wbstack/deploy/blob/main/docs/services/sql.md#increasing-allocated-disk-space-replica-example)
- [For the queryservice](https://github.com/wbstack/deploy/blob/main/docs/services/queryservice.md)

## Buckets

::: tip
We would recommend that you setup resources like this using **Terraform**.
:::

Sets up a bucket for holding some static files to be served (like logos).
This will be accessed by the API.
