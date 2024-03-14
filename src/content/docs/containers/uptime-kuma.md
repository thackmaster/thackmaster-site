---
title: Uptime Kuma
---

Uptime Kuma is a very popular resource for self-hosters looking to monitor their services or other services' for downtime and/or outages. I personally use it internally to keep track of what services are active and if they are healthy. Using the below command is the default way to have Uptime Kuma utilize a Docker volume to store its data.

:::caution
This volume is not persistant, and will be destroyed when you shut down the container. If you would like a persistant container, create it before running the command.
:::

``` docker
docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma
```

This is a very simple container to run. Make sure that your data is stored in a persistant location so that updates and restarts won't cause data loss issues.