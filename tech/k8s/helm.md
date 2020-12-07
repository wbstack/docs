# Helm

Most services are deployed using helm and helmfiles.

When applying a helmfile you need to be in the directory of the helmfile.

Always look at the diff first with `helmfile diff`.
You can then actually apply the changes with `helmfile apply`.