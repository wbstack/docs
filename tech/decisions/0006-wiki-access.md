# Public access of Wikis

Date: Prior to 27 August 2019
Decision: See below

Domain name selection, currently *.wiki.opencura.com
Possibility to open up other domains if we want to.
Custom domains will be availbile further down the line (when HTTPS is tested and sorted.)

Both www.<domain> and <domain> will redirect to the wiki.
Of coures (www\.)?<domain>\/(wiki|w) will also go to the wiki

So:
/wiki or /w will go to MediaWiki
/query will go to the Query Service UI
/sparql will go to the correct SPARQL API endpoint (via other services)
/quickstatements will go to a quick statement install

TODO investigate:
sparql.<domain> redirecting to /sparql?
query.<domain> redirecting to /query?
etc...
