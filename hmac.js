const crypto = require(`crypto`);

const hmac = crypto.createHmac(`sha256`, `a secret`);

hmac.update(`some data`);

const dataHash = hmac.digest(`hex`);

console.log(dataHash);
