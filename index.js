require('ts-node').register({
    project:'./tsconfig.electron.json'
});
require('./src/main/app.ts')