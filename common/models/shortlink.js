'use strict';

module.exports = function(Shortlink) {

  var random = require("random-js")();
  var utils = require("./utils/index.js");



  Shortlink.observe('before save', function updateTimestamp(ctx, next) {

    var seed = utils.generateSeed();
    if (ctx.instance) {
      ctx.instance.id = seed
      ctx.instance.short = utils.encodeSeed(seed)
      ctx.instance.date = new Date()
      //console.log(decode(ctx.instance.short))

    } else {
      ctx.instance.id = seed
      ctx.instance.short = utils.encodeSeed(seed)
      ctx.instance.date = new Date()

  }

  next();
});

Shortlink.validatesUniquenessOf('id')

};
