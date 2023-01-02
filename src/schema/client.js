module.exports = `
    type Query {
        test: [Test]!
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
`;