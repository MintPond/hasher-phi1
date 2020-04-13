'use strict';

const phi1 = require('./index.js');
const INPUT = 'ab783e17a48c060f9899b7287bf66bc1e9c13eef4e61745db03d0534a3ecb58074c6890ff98cf6295fc8b2deb4172e0f4490e4e3f3d720f0fd22491340f35913';
const EXPECTED_HASH = 'cab83ca8c94af98db37f62234dca35efdbfe025ca420e47856f3efcf1b806b41';

process.title = 'phi1-test';

const input = Buffer.from(INPUT, 'hex');

console.log(`Expected:    ${EXPECTED_HASH}`)

const hash = phi1.phi1612(input).toString('hex');

console.log(`Hash result: ${hash}`);

if (hash !== EXPECTED_HASH)
    throw new Error(`Invalid hash result.`);

console.log('Test complete.');