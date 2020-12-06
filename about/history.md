# History

Here you will find some of the key historical points for WBStack.

Throughout it's life the private git repository (original mono-repo) has seen 1600+ commits over 3 years (as of Dec 2020).

## 2020 - Open Source

WBStack ran through 2020 with little development or maintenance work, but a few large updates..

During this time it upgraded from MediaWiki 1.33 to 1.35, and various services were added or changed.

Up until 2020 all of the code existed in a private mono-repo. During November and December it was [all opensourced](https://github.com/wbstack).

**Posts:**

- [Addshore - Infrastructure](https://addshore.com/2020/01/wbstack-infrastructure/)
- [Addshore - 2020 Update 1](https://addshore.com/2020/04/wbstack-2020-update-1/)
- [Addshore - 2020 Update 2](https://addshore.com/2020/05/wbstack-2020-update-2/)

## 2019 - Alpha Release

The project needed a name, and "OpenCura" was first selected, as a short hint toward open curation.
Wikibase Stack and WBStack were finally settled on.

An initial demo version of the service was ready in September 2019.

The alpha version of WBStack was released at Wikidatacon in 2019.

You can read the [original announcement post here](https://addshore.com/2019/11/an-introduction-to-wbstack/) and can watch the original live demo [here 📺](https://media.ccc.de/v/wikidatacon2019-19-lightning_talks_2#t=1147).

**Posts:**

- [Addshore - An introduction to WBStack](https://addshore.com/2019/11/an-introduction-to-wbstack/)
- [Addshore - November Review](https://addshore.com/2019/11/wbstack-november-review/)

## 2018 - Wbaas

The vision of "Wikibase as a service" was initially floated with WMDE.

## 2017 - Docker images

The Wikibase docker images that were created as part of the WBStack effort are a big hit as they allow for an effortless Wikibase setup. These were presented at the 2017 Wikidata birthday.

**Posts:**

- [Addshore - Wikibase docker images](https://addshore.com/2017/12/wikibase-docker-images/)

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

Back in 2015 the idea was MWaas (MediaWiki as a service) started being explored in a Google Doc.

> Main website would allow people to register for free, they would be presented with a dashboard.
>
> Users can create:
>
>- WikiGroups (auto create a login wiki)...
>- IndividualWikis (can belong to a WikiGroup, or none)
