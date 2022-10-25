'use strict';

/**
 * replay-comment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::replay-comment.replay-comment');
