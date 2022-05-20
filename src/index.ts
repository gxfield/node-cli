#!/usr/bin/env node

import clearConsole from 'clear-any-console';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

clearConsole();

yargs(hideBin(process.argv))
  .commandDir('commands')
  .strict()
  .alias({h: 'help '})
  .argv;