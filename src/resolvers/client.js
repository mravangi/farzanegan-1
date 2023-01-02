const models = require('../../models')
module.exports = {
    Query: {
        test: async (parent, args, context) => {
const test = await models.grade.findAll({
    where: {
    },
    attributes: ['id', 'title']
});
return test;
        }
    }
};

