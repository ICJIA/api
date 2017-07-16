'use strict';

module.exports = function(Permalink) {

 var validateUUID = require('uuid-validate');

  // mdContent must be at least 3 characters
  Permalink.validatesLengthOf('mdContent', {
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

  Permalink.validate('permalink',validatesUUID, {
    message: 'Permalink must be a valid UUID'
  })

  // permalink must be unique
  Permalink..validatesUniquenessOf('permalink')





};
