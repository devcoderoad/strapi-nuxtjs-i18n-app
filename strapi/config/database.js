module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgres"),
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
