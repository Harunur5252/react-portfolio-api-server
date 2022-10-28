'use strict';

/**
 * tag controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tag.tag',({strapi}) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::tag.tag').findOne({
            where : { slug:id },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    
        return this.transformResponse(sanitizedEntity);
      },
}));
