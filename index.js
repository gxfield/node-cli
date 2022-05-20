#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = __importDefault(require("../package.json"));
const clear_any_console_1 = __importDefault(require("clear-any-console"));
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
(0, clear_any_console_1.default)();
console.log(`
  NAME: ${package_json_1.default.name},
  DESCRIPTION: ${package_json_1.default.description},
  VERSION: ${package_json_1.default.version}
`);
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .commandDir('commands')
    .strict()
    .alias({ h: 'help ' })
    .argv;
