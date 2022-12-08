const _ = require('lodash');

const formatErrors = (e, models) => {
    if (e instanceof models.Sequelize.ValidationError) {
        return e.errors.map(x => _.pick(x, ['path', 'message']));
    }
    return [{path: 'unexpectedError', message: 'somthing went wrong'}]
}

module.exports = formatErrors;