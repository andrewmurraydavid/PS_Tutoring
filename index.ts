import {blue, green, red, yellow, yellowBright} from 'chalk';
const log = console.log

log(`${green('This')} ${red('is')} ${blue('a')} ${yellow.bold.bgGreen('test')}`)