'use strict';

module.exports = function(Link) {

var validateUUID = require('uuid-validate');

  // mdContent must be at least 3 characters
  Link.validatesLengthOf('mdContent', {
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

  Link.validate('permalink',validatesUUID, {
    message: 'Permalink must be a valid UUID'
  })

  // permalink must be unique
  Link.validatesUniquenessOf('permalink')



};
