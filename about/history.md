# History

Here you will find some of the key historical point for WBStack.

Throughout it's life the private git repository (original mono-repo) has seen 1600+ commits over 3 years (as of Dec 2020).

## 2020 - Open Source

WBStack ran through 2020 with little development work or maintenance.

During this time it upgraded from MediaWiki 1.33 to 1.35.

Up until 2020 all of the code existed in a private mono-repo. Through November and December it was [all opensourced](https://github.com/wbstack).

## 2019 - Alpha Release

The initial version of WBStack was released at Wikidatacon in 2019.

You can read the [original announcement post here](https://addshore.com/2019/11/an-introduction-to-wbstack/) and can watch the original live demo [here 📺](https://media.ccc.de/v/wikidatacon2019-19-lightning_talks_2#t=1147).

## 2018 - Docker images

The Wikibase docker images that were created as part of the WBStack effort are a big hit as they allow for a effortless Wikibase setup.

The direction of "Wikibase as a service" was initially floated with WMDE.

## 2017 - Implementation Start

The first commit in the original private mono-repo was on 29 December 2017.

The plan was containerize everything, run it on Kubernetes and eventually run it on one of the major cloud providers.

**Some of the questions that came up at this stage:**

- Should the main frontend run mediawiki if it doesn’t really have a need to?
  - Probably not
- Should people be able to have the same account over multiple wikis?
  - Probably not
- How can a WDQS scale?
  - Namespaces? Default is wdq
  - Or uuids for concepts?
- Can the AWS SPARQL service serve as a drop in replacement for WDQS?
  - Not sure how we'd include the services like map label to itemLabel

**And an initial set of services was dreamed up for round 1:**

- Frontend UI
  - Basic, not pretty, can do everything provided by the API.
- Main API
  - Auth
  - Wiki Management
- MediaWiki
- MediaWiki SQL
- MediaWiki memcached
- Nginx caching layer?

Plans were also made for future rounds of implementation.

## 2016 - WikiHub

The idea started feeling very much like Github, but for wikis.

Sites could be created for individual users, or for organizations.

- some.domain.com/s/index.php - Main site for WikiHub
- some.domain.com/u/addshore/default/index.php - User Addshores main site
- some.domain.com/o/huggle/docs/index.php - Main site for the Huggle organization

## 2015 - MWaas

Back in 2015 the idea was MWaas (MediaWiki as a service).

> Main website would allow people to register for free, they would be presented with a dashboard.
>
> Users can create:
>
>- WikiGroups (auto create a login wiki)...
>- IndividualWikis (can belong to a WikiGroup, or none)
