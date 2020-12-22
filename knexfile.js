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
      database: "d1l4dmtdo4ggqp",
      user:     "kcqhiafwbqiara",
      password: "1b17470842b5cfb9306b2160aabe096215d3b0db7489c7d8cc085ee56930cb52"
    },
    migrations: {
      directory: './database/migrations'
    }
  }
};
