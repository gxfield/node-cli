#!/usr/bin/env node

import pkgJSON from './package.json';
import clearConsole from 'clear-any-console';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

clearConsole();

console.log(`
  NAME: ${pkgJSON.name},
  DESCRIPTION: ${pkgJSON.description},
  VERSION: ${pkgJSON.version}
`)

yargs(hideBin(process.argv))
  .commandDir('commands')
  .strict()
  .alias({h: 'help '})
  .argv;
