const o = require('mithril/ospec/ospec');

// Define `.describe`, `.context`
o.describe = o.context = o.spec;

// Define `.it`, `.expect`
o.it = o.expect = o;

module.exports = o;
