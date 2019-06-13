# copyundpasta

> My little foodblog

## Libraries
* NuxtJS
* ExpressJS (included with Nuxt)
* Jest
* knex with mysql
* element ui css framework

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# debug from VS Code (@see https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_attaching-to-nodejs)
# this command needs to be executed from the VS terminal!
$ npm run debug
```

Custom hostname:
```
HOST=hostname ./node_modules/.bin/nuxt --hostname hostname
```

## debug api
`npm run api`

# Live setup
* checkout project
* add .env file with:

```
DB_DATABASE=xxx
DB_USER=xxx
DB_PW=xxx
SERVER_HOST=0.0.0.0
SERVER_PORT=3000
AXIOS_BASE_URL=https://copyundpasta.de/
```

# build for production and launch server
```
$ npm run build
$ npm start
```

## deploy
* add .env file with:

```
DEPLOY_HOST=xxx
DEPLOY_USERNAME=xxx
DEPLOY_PW=xxx
DEPLOY_HOMEDIR=/home/haimich/copyundpasta.de
```

```
npm run deploy
```

# generate static project
```
$ npm run generate
```

## pm2
pm2 start npm --name "cup" -- start

## Database local
If you have never started the docker container execute this:

```bash
docker run --name mariadb -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=haimich -e MYSQL_USER=haimich -e MYSQL_PASSWORD=haimich -p 3306:3306 -d mariadb:10.3
```

Afterwards to start or stop it just use 

`docker start mariadb` and 

`docker stop mariadb`

# Element UI theme
For performance reasons the theme has been prebuilt (instead of importing element ui via scss). 

The generated files are stored in src/scss/element-theme

@see https://element.eleme.io/#/en-US/component/custom-theme