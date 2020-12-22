// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'Tawne0212!',
      database: 'portfolio'
    },
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
      database: "du47n12bsumd5",
      user:     "bwlvlrdsgrvzai",
      password: "caae7f88489b3725cacdc3c2faa5fa541234f90476b1232eaf859f01d2504a66"
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    }
  }
};
