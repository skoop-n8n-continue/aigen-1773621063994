const crypto = require('crypto');

const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function generateCode() {
    const array = new Uint32Array(6);
    crypto.randomFillSync(array);
    let code = '';
    for (let i = 0; i < array.length; i++) {
        code += charset[array[i] % charset.length];
    }
    return code;
}

const alpha = generateCode();
const bravo = generateCode();
const charlie = generateCode();

console.log('Alpha Code:', alpha);
console.log('Bravo Code:', bravo);
console.log('Charlie Code:', charlie);

const key = alpha.substring(0, 2) +
            bravo.substring(0, 2) +
            charlie.substring(0, 2);

console.log('Combined Key:', key);
