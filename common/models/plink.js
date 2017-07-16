'use strict';

module.exports = function(Plink) {

var validateUUID = require('uuid-validate');

  // mdContent must be at least 3 characters
  Plink.validatesLengthOf('mdContent', {
    min: 3,
    message: {
      min: 'Markdown content must be at least 3 characters.'
    }
  });

  //Custom validate UUID for insertion into database
  const validatesUUID = function (err) {
    if (!validateUUID(this.permalink)) {
      err()
    }
  }

  Plink.validate('permalink',validatesUUID, {
    message: 'Permalink must be a valid UUID'
  })

  // permalink must be unique
  Plink.validatesUniquenessOf('permalink')



};
