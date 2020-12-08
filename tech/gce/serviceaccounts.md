# Service Accounts

[Service accounts](https://cloud.google.com/iam/docs/service-accounts) are a type of account used by an application to do things.
These account can have as many or as few [roles](https://cloud.google.com/iam/docs/understanding-roles) availbile to it as needed.

For WBStack we use a few different service accounts.

- **certman-dns01-solver** - [Used by cert-manager to alter DNS records for HTTPS certificate creation](/tech/services/cert-manager.html#service-account)
- **bucket-writer** - TBA? Is this still used?
- **wbstack-api** - TBA...
