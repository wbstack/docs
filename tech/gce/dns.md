# DNS

::: tip
All DNS management currently takes place in the deploy repo [gce/dns directory](https://github.com/wbstack/deploy/tree/main/gce/dns).
:::

The DNS records for `wbstack.com` and `opencura.com` are managed on Google Cloud.

DNS zones were origionally created using deployment manager and the `createZones.sh` script.

The zone files where then retrieved using `pull.sh`.

They can be modified in the deploy repo, updated live using `push.sh` and then committed.


::: warning
When running `createZones.sh` you may receive an error if you have not yet enabled the Cloud DNS API.

The error message will provide you with a link to enable this API.
:::

You can check the DNS status using a tool such as [this](https://freedns.afraid.org/domain/dnstrace.php?domain=wbstack.com&submit=Trace)

## Needed Records

`NS` and `SOA` records are needed for both domains, when setting up the Google Cloud zone these should be provided for you when you `pull.sh`.

::: warning
The nameservers that Google may want you to use for different zones may differ.

For example `wbstack.com` uses `ns-cloud-e[1234].googledomains.com` but `opencura.com` uses `ns-cloud-d[1234].googledomains.com`.
:::

### wbstack.com

`wbstack.com` & `*.wbstack.com` for general traffic, such as www, api etc.

Various **mail** related records are needed.
Mailgun documentation was followed to create these.

`sites-1.dyna.wbstack.com` is used as a `CNAME` target for custom wiki domains used as part of the platform.

`wiki.wbstack.com` was created to point to the self hosted community documentation site.

### opencura.com

`*.opencura.com` points to the platform static IP for serving wikis created with free subdomains.
