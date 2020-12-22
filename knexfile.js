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
    connection: "postgres://bwlvlrdsgrvzai:caae7f88489b3725cacdc3c2faa5fa541234f90476b1232eaf859f01d2504a66@ec2-3-211-167-220.compute-1.amazonaws.com:5432/du47n12bsumd5",
    useNullAsDefault: true,
    ssl: {
      rejectUnauthorized: false,
      disable: true
    },
    migrations: {
      directory: './database/migrations'
    }
  }
};
