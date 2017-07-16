# ICJIA API

Test REST API using [Loopback.io](https://loopback.io) and [MongoDB](https://www.mongodb.com/). For now, this is used in conjunction with the [ICJIA Markdown editor](https://github.com/ICJIA/icjia-markdown) as a way to store user-generated permalinks.

The API is hosted on a [DigitalOcean](https://www.digitalocean.com/) droplet running MongoDB.

For local development, make sure [Node](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) are installed.

I'm using [PM2](https://github.com/Unitech/pm2) to manage the production Node instance (and automatically restart when necessary).

```
cd <API_DIRECTORY>

sudo pm2 start .
```
After a ```git pull``` or automatic deployment, restart the app manually:
```
cd <API_DIRECTORY>

sudo pm2 restart .
```
## Ngnix setup
Expose the API (localhost:3000) process with a reverse proxy. 

In your ```/etc/nginx/sites-available/<SITENAME>```:
```
. . .
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

For more information:
- [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)
- [https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04)
- [https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps)



## Dependences:
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://github.com/remy/nodemon)
- [PM2](https://github.com/Unitech/pm2)
- [Loopback.io](https://loopback.io)
- [MongoDB](https://www.mongodb.com/)
- [Mocha](https://github.com/mochajs/mocha)
- [Chai](http://chaijs.com/)
