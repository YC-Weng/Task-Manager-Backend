const dbData = {
    host:process.env.Host,
    port:5432,
    database:'db1_lucm',
    user:process.env.User,
    password:process.env.Password
};

module.exports = dbData;