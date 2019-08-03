// config file for https://pm2.io/doc/en/runtime/overview
module.exports = {
    apps : [{
      name: "cup",
      script: "./node_modules/.bin/nuxt",
      args: "start -i 5",
      exec_mode: "fork",
      autorestart: true,
      exp_backoff_restart_delay: 100,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }],
  };