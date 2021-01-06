const crypto = require(`crypto`);

const pwd = `password1`;

const salt = crypto.randomBytes(256).toString(`hex`);

const hashedPass = crypto.pbkdf2Sync(pwd, salt, 10000, 512, `sha512`);

console.log(hashedPass.toString(`hex`));