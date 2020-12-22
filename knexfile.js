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
    connection: 'postgres://kcqhiafwbqiara:1b17470842b5cfb9306b2160aabe096215d3b0db7489c7d8cc085ee56930cb52@ec2-54-163-215-125.compute-1.amazonaws.com:5432/d1l4dmtdo4ggqp'
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
      database: process.env.DB,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: './database/migrations'
    }
  }
};
