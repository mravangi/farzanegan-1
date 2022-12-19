module.exports = `
    type Query {
        city : City
        test: Test!
        getMyData: Fatemeh
        myfamily:MyFamily
        getstudents:[Student]
        books : [NameBooks]
    }

    type City {

    name:String
    code  : String!    

    }

    type Fatemeh {
    fname : String
     lname : String
     birthday : String
     age : String
    }

    type Test {
        key : String
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

    type MyFamily {
        dad:String
        mom:String
        sister:String
        borather:String
    }

   type Student { 
   fname: String
   lname:String
   age:Int
   }
   type NameBooks {
    name:String
    namewriter:String  
   }
`;