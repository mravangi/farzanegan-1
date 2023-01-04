module.exports = `
    type Query {
        test: [Test]!
    }

    type Mutation {
        register(input: userIntput): Boolean
    }

    type Test {
        id: Int
        title: String
    }

    type Client {
        id: Int!
        fname: String!
        lname: String!
        nationalCode: String!
        mobile: String!
        gender: String!
        image: String
    }

    input userIntput {
        fname: String!
        lname: String!
        mobile: String!
        nationalCode: String!
    }
`;