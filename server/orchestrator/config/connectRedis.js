const Redis = require("ioredis");

const redis = new Redis({
    port: 18049, // Redis port
    host: "redis-18049.c292.ap-southeast-1-1.ec2.cloud.redislabs.com", // Redis host
    username: "default", // needs Redis >= 6
    password: process.env.PASSWORD_REDIS,
});


module.exports = redis;