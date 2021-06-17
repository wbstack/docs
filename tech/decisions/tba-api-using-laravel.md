# API using Laravel framework

::: warning
This decision document has not yet been formatted for nice display...
:::

Date: December 2019 ish?
Decision: Use Laravel as the framework for the API

[The API](https://github.com/wbstack/api) has been through various frameworks.
 - [Silex](https://silex.symfony.com/doc/2.0/intro.html) was used during an initial prototype, but was ultimatley deemed to be too light weight (would have ended up recreating various wheels)
 - [Lumen](https://lumen.laravel.com/) was then used in the origional main implementaiton.
 - [Laravel](https://laravel.com/) was then switched to (migrating from Lumen) so that the wider ecosystem of packages could be easily used.

### Decision Process

MediaWiki was obviosuly considered, as it already exists as tech within the whole wbstack stack.
However MediaWiki does one thing very well (collaborative content management and reuse etc).
It does not realy do refined and slim APIs well, hence it was not chosen.

Silex and Lumen were selected as they were lightweight, and thus quick, and easy, without pulling in too much "un needed" code.
As the API developmenht progressed, it became apparant that some of the features, such as authentication, we should probably just be pulling off the shelf, such as authentication via [Passport](https://laravel.com/docs/8.x/passport), a laravel plugin.
The alternative to this was suing less maintained, less feature complete solutions for the Lumen system, or recreating the wheel.

### Migration

Converting from Lumen to Laravel ended up not being as easy as it first seemed, given Lumen is advertised as a slim Laravel.

A service ended up being used to convert the API https://laravelshift.com/convert-lumen-to-laravel

The migration was mostly done in 1 day with ehlp from the tool.

### Reflection

It would have made sense to look into code packages that the API may have wanted to make use of before selecting the framework.
Authentication for example was always going to be on the cards.
Starting with Laravel from the outset would not have had additional overhead, it would have only avoided the migration pain.
