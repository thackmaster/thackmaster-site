---
title: What's Up Docker
---

What's Up Docker (WUD) is a GUI alternative to Watchtower. While Watchtower will automatically update containers for you, I prefer to simply be notified of a pending update and install it on my own time. WUD has the capability to auto-update your containers, but I have it disabled. WUD conducts these updates by pulling the latest version of each image you have and comparing.

:::caution
Keep track of how many images you have on your machine and plan ahead. Docker Hub's anonymous pulling of images is limited to 100 images every 6 hours (as of writing). You may have to do additional configuration of WUD to keep these numbers under control if you plan on utilizing.
:::

:::tip
If you don't use Docker Hub for updates, WUD supports pulling from other repositories listed [here](https://fmartinou.github.io/whats-up-docker/#/introduction/?id=many-supported-registries). Keep any limitations of these services in mind (such as pull limits) when using.
:::

You can install WUD on all machines individually, or you can utilize the Docker API and have a central machine track for these updates across your fleet. If you choose to expose the API, take proper security precautions to [secure it properly](https://medium.com/trabe/using-docker-engine-api-securely-584e0882158e). 

```docker
version: '3'

services:
    whatsupdocker:
        image: fmartinou/whats-up-docker
        container_name: wud
        volumes:
            - /var/run/docker.sock:/var/run/docker.sock # this allows for monitoring of your local containers
        environment:
            - TZ=America/Denver
        ports:
            - 3000:3000
        restart: unless-stopped
```