import {execSync} from 'child_process'

const {2: arg} = process.argv;

const res = execSync(`./node_modules/.bin/ts-node exam/${arg}.ts `)

console.log(res.toString())
