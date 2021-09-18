# tweed-play

only use in Tweed we not for profit

## Table of content

* [Requirements](#requirements)
* [Getting started](#getting-started)
* [Common errors](#common-errors)
* [Contributing](#contributing)
* [Author](#author)
* [License](#license)

## Requirements

- [Node](https://nodejs.org/en/) - Version 16 or higher
- [NPM](https://www.npmjs.com/)
- [FFMPEG](https://www.ffmpeg.org/)
- [Docker](https://www.docker.com/) (optional)

## Getting started

First, make sure you have all the required tools installed on your local machine then continue with these steps.

### Installation

```bash
# Install the dependencies
npm install
```

## Required permissions

**Important:** Make sure that your bot has the `applications.commands` application scope enabled, which can be found under the `OAuth2` tap on the [developer portal](https://discord.com/developers/applications/)

### Configuration

After cloning the project and installing all dependencies, you need to add your Discord API token in the config.json file.

### Starting the application

```bash
node index.js
```

### Starting the application using Docker

```bash
# Build the image
docker build --tag discordbot .

# Run the image
docker run -d discordbot
```

## Deploying commands

Before you can use the bots slash command you first need to add them to your Discord server. You can use the `!deploy` command to do so.
After deploying the commands you should be able to see and access them by typing a slash

## Features & Commands

> Note: The repository now uses the new Discord slash commands

* 🎶 Play music from YouTube via url

`/play YOUTUBE_URL`

* 🎶 Play music from using song name

`/play SONG_NAME`

* 📃 Pause music

`/pause`

* 🎓 Resume music

`/resume`

* 💿 Skip song

`/skip`

* 🔇 Stop music

`/stop`

* Now Playing (/nowplaying)
* Get information about a user (/userinfo USER)

## Common errors

Here is a list of common errors and how you can fix them.

### Dependencies aren't up to date

The packages used in this repository get updated often, especially the ytdl-core package. That is why it is always worth a try updating those if you get an error like `invalid URL: undefined` or when the bot crashes when running the play command.

```bash
npm install ytdl-core@latest
```

### FFMPEG is not installed on the machine running the bot

The `play` command requires FFMPEG to be installed on the machine that is running the bot. You can download it on the official [FFMPEG website](https://www.ffmpeg.org/). Note: This isn't relevant if you use the Dockerfile because it will install FFMPEG inside of the container.

quote https://github.com/TannerGabriel/discord-bot
