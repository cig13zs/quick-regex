const assert = require('assert');
const QuickRegex = require('./core');

const res = QuickRegex.testPattern('\\d+', 'g', 'Port 8080 and Port 3000');
assert.strictEqual(res.valid, true);
assert.strictEqual(res.count, 2);
assert.strictEqual(res.matches[0].match, '8080');
assert.strictEqual(res.matches[1].match, '3000');

console.log('ok, all QuickRegex assertions passed');
