# copyundpasta

> My little foodblog

## Libraries
* NuxtJS
* ExpressJS (included with Nuxt)
* Jest
* knex with mysql
* element ui css framework

## Build Setup
* make sure you have a MySQL db running on port 3306, eg.:

```bash
docker run --name mariadb --restart always -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=haimich -e MYSQL_USER=haimich -e MYSQL_PASSWORD=haimich -p 3306:3306 -d mariadb:10.3.15
```

Afterwards to start or stop it just use 

`docker start mariadb` and 

`docker stop mariadb`
```

```bash
# install dependencies
$ npm install

# create tables
$ npm run db:rebuild

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
...
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
APPBASE_WRITE_KEY_ARTICLES=xxx
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

# Element UI theme
For performance reasons the theme has been prebuilt (instead of importing element ui via scss). 

The generated files are stored in src/scss/element-theme

@see https://element.eleme.io/#/en-US/component/custom-theme

* generate variables file: `et -i`
* edit variables in element-variables.scss (eg. `$--color-primary: #1eb5da`)
* generate the theme: `et`
* replace the previous theme with the new one: `rm -rf src/scss/element-theme && mv theme src/scss/element-theme && rm -rf element-variables.scss`
* the generated files are referenced in `nuxt.config.tx` in the `css` section