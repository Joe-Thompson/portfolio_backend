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
    connection: "postgres://ajxfomojdzickj:b3a7caf4f3d5584ad3d40a9de9e8315e7e88723541a56f12917859266600d4a3@ec2-3-229-51-131.compute-1.amazonaws.com:5432/d5gddvr25lbjqu",
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
