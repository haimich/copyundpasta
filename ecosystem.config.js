// config file for https://pm2.io/doc/en/runtime/overview
module.exports = {
    apps : [{
      name: 'cup',
      script: './node_modules/.bin/nuxt',
      args: 'start --hostname 0.0.0.0 --port 3000',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],
  };