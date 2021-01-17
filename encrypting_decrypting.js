const crypto = require(`crypto`);

const algorithm = `aes-256-cbc`;

const password = `strong_password`;

const salt = crypto.randomBytes(32);
console.log(`----------\nsalt: "${salt}"`);

//bytes
const key = crypto.scryptSync(password, salt, 32);
console.log(`----------\nkey: "${key}"`);

const iv = crypto.randomBytes(16);
console.log(`----------\niv: "${iv}"`);

const cipher = crypto.createCipheriv(algorithm, key, iv);

const ssn = `111-000-0000`;

cipher.update(ssn, `utf8`, `hex`);
const encrypted = cipher.final(`hex`);

console.log(`encrypted: "${encrypted}"`);

const decipher = crypto.createDecipheriv(algorithm, key, iv);

decipher.update(encrypted, `hex`, `utf8`);
const decrypted = decipher.final(`utf8`);

console.log(`decrypted: ${decrypted}`);