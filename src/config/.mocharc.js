// const path = require('path');
// console.log(__dirname);
// console.log(process.cwd());

module.exports = {
    color: true,
    extension: ['js', 'cjs', 'mjs'],
    parallel: false,
    recursive: false,
    reporter: 'spec',
    retries: 1,
    sort: false,
    spec: ['src/tests/**/*.js'], // the positional arguments!
    // spec: [path.resolve(process.cwd(), `src/tests/**/*.js`)],
    timeout: '200000', // same as "timeout: '2s'"
    ui: 'bdd'
};