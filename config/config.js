require('dotenv').config()
module.exports = {
  development: {
    database: 'bikini_bottom_development',
    dialect: 'postgres'
  },
  test: {
    database: 'bikini_bottom_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    database: 'bikini_bottom_production',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
