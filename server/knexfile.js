module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/database/strings.db3',
    },
    debug: true,
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    // by default SQLite will NOT enforce foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // enforce foreign keys in the db
      },
    },
  },
};
