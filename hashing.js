const crypto = require(`crypto`);

const hash = crypto.createHash(`md5`);

//Cannot be called twice on the same object
hash.update(`#Mudar321#$`);

const digest = hash.digest(`hex`);

console.log(digest);