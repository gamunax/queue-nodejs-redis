exports.config = {
  port: process.env.PORT || 3000,
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    db: process.env.REDIS_DB,
  },
};
