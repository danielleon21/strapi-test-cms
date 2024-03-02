'use strict';

/**
 * shelter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shelter.shelter');
