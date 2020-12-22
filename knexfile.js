// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'joe',
      password: '123',
      database: 'portfolio'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      port: process.env.PORT,
      database: process.env.DATABASE,
      password: process.env.PASSWORD
    },
    useNullAsDefault: true,
    ssl: {
      rejectUnauthorized: false
    },
    migrations: {
      directory: './database/migrations'
    }
  }
};
