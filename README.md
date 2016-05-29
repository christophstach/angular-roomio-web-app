# README #

This file describes how to get the roomio-web-app running on a developers machine.
The package ist based on angularjs2 without using the angular-cli.

### What is this repository for? ###

* It represents a prototype frontend of the roomio app
* 0.0.0 prototype

### How do I get set up? ###

Before u can start developing, or viewing the software you need some prerequisites. 
The repository a git hub repository so need to the [GIT](https://git-scm.com/). 
During installation I would recommend to add GIT to the PATH.

Next step is to install [node.js](https://nodejs.org/en/) and the required modules you need to get the roomio-web-frontend running on your machine.
node.js is used to compile the frontend and start a temporary development web server.

After installing the software, create a new folder somewhere you want and open the commandline or the terminal.

Run the following commands

```sh
npm install -g bower grunt gulp
```

This will install some useful modules to node.js. Wait until the operation is finished.
 
```sh
git clone https://github.com/christophstach/roomio-web-app.git
```
   
This downloads the roomio-web-app sourcecode itself. Wait until the operation is finished.

```sh
cd roomio-web-app
npm install
bower intall
```
    
This installs all missing modules needed for the roomio-web-app. Wait until the operation is finished. It may take a while.
Don't worry about red error messages, usually it will work properly

```sh
npm start
```

This starts a lighweight webserver which serves the roomio-web-app. Your browser should open automatically and the roomio-web-app should appear.
Have fun developing and testing =).


### Contribution guidelines ###

* Ask Christoph Stach first

### Who do I talk to? ###

* Repo owner or admin, developers, team members who want to take a look at the software's actual status of development