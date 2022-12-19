module.exports = {
    Query: {
        test: async (parent, args, context) => {
            return {
                key: "my first graphQl api.."
            };
        },
        city : async (parent, args, context) => {
            return {
                "name": "Minab",
                "code" : ""
            };
        },
        getMyData : async (parent, args, context) => {
            return {
                "fname": "Fatemeh",
                "lname" : "Mousavi",
                "birthday" : "1386",
                "age" : "14",
            };
        },
       
        myfamily : async (parent, args, context) => {
            return {
                "dad": "ahmad",
                "mom" : "elahe",
                "sister" : "maryam",
                "borather" : "arad",
            };
        },
        getstudents : async (parent, args, context) => {
            return ["fatemeh ,yalda,zahra"];
        },



        getstudents : async (parent, args, context) => {
            return [
                {
                fname: "fatemeh",
                lname : "mousavi",
                age : "14",
                },
                {
                 "fname": "zahra",
                 "lname": "razeghi",
                 "age":"14",
                }
            ]
        },

        books : async (parent, args, context) => {
            return [
                {
                "name" : "کاف کا در کرانه",
                "namewriter" : "kkkk", 
                },
                {
                    "name" : " بابا لنگ دراز",
                    "namewriter" : "lll", 
                    },
                    {
                        "name" : "انه شرلی",
                        "namewriter" : "ddd", 
                        },
            ]
        },




    }
};

