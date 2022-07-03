module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "john.db.elephantsql.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "bxgnmxyi"),
      user: env("DATABASE_USERNAME", "bxgnmxyi"),
      password: env("DATABASE_PASSWORD", "sJ_qFpCBGIg_qt88juXHGMP7jQUTb6jk"),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: env.bool("DATABASE_SSL", true),
      charset: env("DATABASE_CHARSET", "utf8mb4_unicode_ci"),
    },
    debug: false,
    pool: {
      min: 0,
      max: 20,
    },
    options: {
      charset: "utf8mb4_unicode_ci",
    },
  },
});
