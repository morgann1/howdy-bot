# Howdy Bot

Nearly identical to Guilded's Howdy bot, this application was designed for one thing, and that is to greet users whenever they join a server.

# Installation

* Install node from either [nodejs.org](https://nodejs.org/en/) or [scoop](https://scoop.sh/) with nvm

* Install git from either the [Windows Package Manager](https://github.com/microsoft/winget-cli) or [Git for Windows](https://gitforwindows.org/)

* Run the following commands:

    ```ps1
    > git clone git@github.com:morgann1/howdy-bot.git
    > cd path.to.project
    > npm install
    > npm run start
    ```

# Installing git

Windows:

```ps1
# winget
> winget install -e --id Git.Git
```

# Installing nvm (Node Version Manager)

Windows:

```ps1
> scoop install nvm
> nvm list available # Gets current & lts versions of node
> nvm install version # Replace 'version' with the version of node you want
> nvm use version # The 'use' command must be executed in a shell with Administor privileges (Run as Administrator)
```

Linux & OSX:

The Github repository [nvm](https://github.com/nvm-sh/nvm) has a [guide on how to install nvm](https://github.com/nvm-sh/nvm#installing-and-updating) depending on your distribution