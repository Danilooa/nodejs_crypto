const crypto = require(`crypto`);

console.log(`Creating DiffieHemman object - start`);
const receptor = crypto.createDiffieHellman(2048);
console.log(`Creating DiffieHemman object - end`);
const receptorKeys = receptor.generateKeys();

const emissor = crypto.createDiffieHellman(receptor.getPrime(), receptor.getGenerator());
const emissorKeys = emissor.generateKeys();

const receptorSecret = receptor.computeSecret(emissorKeys);
const emissorSecret = emissor.computeSecret(receptorKeys);

console.log(`Emissor secret: "${emissorSecret.toString(`hex`)}"`);
console.log(`Receptor secret: "${receptorSecret.toString(`hex`)}"`);
