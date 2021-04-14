# What is Athens

Athens is an open-source and local-first alternative to [Roam Research](https://roamresearch.com/). Athens is the most community-driven, private, and extensible knowledge graph. Find the original [Athens repo here](https://github.com/athensresearch/athens/).

# What is Deta

Deta is a cloud provider that minimizes time to deployment & emphasizes simplicity. [More info here](https://www.deta.sh/).

## Important Information

This is a proof of concept. Usable, but not yet scalable. It saves the Athens DB as a single item in Deta Base, and thus there is a 400KB hard limit.

Stay tuned for updates.

## Deploying Athens on Deta

1. Fork this repo.

2. Create a [Deta account and project](https://web.deta.sh/).

3. [Install the Deta CLI](https://docs.deta.sh/docs/cli/install).

4. Use the cli command `deta new` to deploy a your own instance of Athens on Deta.

5. Make sure to use cli command `deta auth enable`, to protect your instance from the public.


## Repo information

`static/` contains the Athens build.

`main.py` contains the Micro(server).

`.athens` contains all the Athens dev stuff.
