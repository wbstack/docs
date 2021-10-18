# Service Accounts

::: tip
We would recommend that you setup resources like this using **Terraform**.
:::

[Service accounts](https://cloud.google.com/iam/docs/service-accounts) are a type of account used by an application to do things.
These account can have as many or as few [roles](https://cloud.google.com/iam/docs/understanding-roles) availbile to it as needed.

For WBStack we use a few different service accounts.

- **certman-dns01-solver** - [Used by cert-manager to alter DNS records for HTTPS certificate creation](/tech/services/cert-manager.html#service-account)
- **wbstack-api** - Interaction with various things, be that interacting with ingresses for custom domains, or accessing a storage bucket for some API related stroage.
