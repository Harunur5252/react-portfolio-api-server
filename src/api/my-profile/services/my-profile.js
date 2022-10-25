'use strict';

/**
 * my-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-profile.my-profile');
