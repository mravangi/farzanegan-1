const models = require('../../models');
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
    },

    Mutation: {
        register: async (parent, args, context ) => {
            // Create a new user
            const jane = await models.user.create({ 
                fname: args.input.fname,
                lname: args.input.lname,
                mobile: args.input.mobile,
                nationalCode: args.input.nationalCode 
            });


            console.log("Jane's auto-generated ID:", jane.id);
        }
    }
};

