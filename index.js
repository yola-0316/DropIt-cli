const fs = require('fs')
const path = require('path')
const {Command} = require('commander')
const TOML = require('@iarna/toml')
const actions = require('./src/actions')

const program = new Command()
program.version('0.1.0')
program
  .option('-s, --source <type>', 'source for process')
  .option('-c, --config', "dropit 's config file")

program.parse(process.argv)
const opts = program.opts()

// TOML Config
const file = fs.readFileSync('rules.toml', 'utf-8')
const profiles = TOML.parse(file)
const associations = profiles.associations
const ass = associations[0]

console.log(ass)
console.log(opts)

actions[ass.action](opts.source)
